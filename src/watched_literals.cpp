#include <algorithm>
#include <ranges>
#include "watched_literals.h"
#include "dimacs_parser.h"
#include "formula.h"
#include "log.h"
#include "verify.h"

#include <iostream>

#if YASER_DEBUG
#include "clause.h"
#endif

namespace WatchedLiterals {

namespace impl {

std::optional<Literal> find_new_partner_literal(Formula& formula, const ClauseIndex clause_index,
                                                const Literal old_partner_literal,
                                                const Literal current_partner_literal) {
    for (const auto clauses = formula.clause(clause_index);
         const auto& literal : clauses.literals) {
        const auto value = formula.assignment(literal);
        if (literal.satisfied_by(value)) {
            return current_partner_literal;
        }
        if (literal != old_partner_literal && literal != current_partner_literal && value == Value::UNASSIGNED) {
            return literal;
        }
    }

    return std::nullopt;
}

} // namespace impl

void add_clause_to_watch(Formula& formula, const ClauseIndex clause_index, const bool is_unit_clause) {
    const auto clause = formula.clause(clause_index);

    if (is_unit_clause) {
        // We set the second literal in the literal pair to an invalid one since we have a unit clause with only
        // one literal. This will be checked for in the watched literals update function, so we do not use the
        // invalid literal
        formula.watched_literals(clause_index) = {clause.literals[0], INVALID_LITERAL};
        formula.watched_clauses(clause.literals[0]).push_back(clause_index);
    } else {
        VERIFY_GE(clause.size(), 2);
        formula.watched_literals(clause_index) = {clause.literals[0], clause.literals[1]};
        formula.watched_clauses(clause.literals[0]).push_back(clause_index);
        formula.watched_clauses(clause.literals[1]).push_back(clause_index);
    }
}

void add_learnt_conflict_clause_to_watch(Formula& formula, const ClauseIndex clause_index, Literal literal_to_imply) {
    if (const auto clause = formula.clause(clause_index); clause.size() == 1) {
        // We set the second literal in the literal pair to an invalid one since we have a unit clause with only
        // one literal. This will be checked for in the watched literals update function, so we do not use the
        // invalid literal
        formula.watched_literals(clause_index) = {clause.literals[0], INVALID_LITERAL};
        formula.watched_clauses(clause.literals[0]).push_back(clause_index);
    } else {
        VERIFY_GE(clause.size(), 2);

        // Find first literal that is not literal_to_imply
        auto second_literal_to_watch = INVALID_LITERAL;
        for (const auto& literal : clause) {
            if (literal != literal_to_imply) {
                second_literal_to_watch = literal;
                break;
            }
        }

        formula.watched_literals(clause_index) = {literal_to_imply, second_literal_to_watch};
        formula.watched_clauses(literal_to_imply).push_back(clause_index);
        formula.watched_clauses(second_literal_to_watch).push_back(clause_index);
    }

    VERIFY(!DimacsParser::impl::watched_clauses_contains_duplicates(formula));
}

void update(Formula& formula, const Literal negated_watched_literal) {
    auto& affected_clause_indices = formula.watched_clauses(negated_watched_literal);
    if (affected_clause_indices.empty()) {
        return;
    }

    // Iterate by index so we can modify while iterating
    for (std::size_t i = 0; i < affected_clause_indices.size();) {
        const auto affected_clause_index = affected_clause_indices[i];
        // Find partner literal of `negated_watched_literal`
        const auto [first_watched_literal, second_watched_literal] = formula.watched_literals(affected_clause_index);
        VERIFY_NE(first_watched_literal, INVALID_LITERAL);

        // Handle unit clauses which have only one watched literal
        if (second_watched_literal == INVALID_LITERAL) {
            VERIFY_EQ(first_watched_literal, negated_watched_literal);
            formula.conflicting_clause() = affected_clause_index;
            return;
        }

        VERIFY(first_watched_literal == negated_watched_literal || second_watched_literal == negated_watched_literal);

        const auto partner_literal = first_watched_literal == negated_watched_literal ? second_watched_literal : first_watched_literal;

        // TODO: Maybe this could start with a check whether clause is unit?
        const auto partner_assignment = formula.assignment(partner_literal);
        if (partner_literal.satisfied_by(partner_assignment)) {
            ++i;
            continue;
        }

        if (auto new_partner_literal = impl::find_new_partner_literal(formula, affected_clause_index, negated_watched_literal, partner_literal);
            new_partner_literal) {
            // Try to find a new literal to watch

            // If the new literal happens to be satisfied, we are done
            if (new_partner_literal == partner_literal) {
                ++i;
                continue;
            }

            // Remove mapping of negated_watched_literal -> clause
            affected_clause_indices[i] = affected_clause_indices.back();
            affected_clause_indices.pop_back();

            formula.watched_literals(affected_clause_index) = {*new_partner_literal, partner_literal};
            formula.watched_clauses(*new_partner_literal).push_back(affected_clause_index);
            VERIFY(!DimacsParser::impl::watched_clauses_contains_duplicates(formula));
            continue;
        } else if (partner_assignment == Value::UNASSIGNED) {
            // Swap implied literal to 0th position in clause (assumption by conflict analysis)
            if (const auto clause_start_index = formula.literal_range(affected_clause_index).start;
                formula.literal(clause_start_index) != partner_literal) {
                // TODO: fix this
                auto clause = formula.clause(affected_clause_index);
                if (auto it = std::ranges::find(clause, partner_literal); it != clause.end()) {
                    const auto partner_index = clause_start_index + std::distance(clause.begin(), it);
                    std::swap(formula.literal(clause_start_index), formula.literal(partner_index));
                }
            }

            // Clause is unit, partner_literal is unassigned
            formula.unit_clauses().emplace_back(affected_clause_index, partner_literal);
            formula.unit_clause(affected_clause_index) = true;
        } else if (!partner_literal.satisfied_by(partner_assignment)) {
            auto clause = formula.clause(affected_clause_index);
            // Swap implied literal to 0th position in clause (assumption by conflict analysis)
            if (const auto clause_start_index = formula.literal_range(affected_clause_index).start;
                formula.literal(clause_start_index) != negated_watched_literal) {
                // TODO: fix this
                if (const auto it = std::ranges::find(clause, negated_watched_literal); it != clause.end()) {
                    const auto negated_watched_literal_index = clause_start_index + std::distance(clause.begin(), it);
                    std::swap(formula.literal(clause_start_index), formula.literal(negated_watched_literal_index));
                }
            }

            // Clause is conflicting -> resolve
            DEBUG_LOG("Clause {} ({}) is conflicting @ DL {} (conflict #{})", affected_clause_index, clause, formula.decision_level(), formula.number_of_conflicts() + 1);
            formula.conflicting_clause() = affected_clause_index;

            // We can stop here, even if the literal appears in other clauses since the conflict resolution will
            // make the propagation invalid anyway
            return;
        }

        ++i;
    }
}
} // namespace WatchedLiterals