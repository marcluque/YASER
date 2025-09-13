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
    for (const auto clauses = formula.literal_range(clause_index).clause(formula.literals());
         const auto& literal : clauses) {
        const auto literal_assignment = formula.assignment_map()[literal::variable(literal)];
        if (literal != old_partner_literal && literal != current_partner_literal
            && literal_assignment == Value::UNASSIGNED) {
            return literal;
        }

        // TODO: This might not be necessary since we do actually not expect to find a SAT value here
        if (literal::is_satisfied(literal, literal_assignment)) {
            return current_partner_literal;
        }
    }

    return std::nullopt;
}

} // namespace impl

void add_clause_to_watch(Formula& formula, const ClauseIndex clause_index, const bool is_unit_clause) {
    const auto clause = formula.literal_range(clause_index).clause(formula.literals());

    if (is_unit_clause) {
        // We set the second literal in the literal pair to an invalid one since we have a unit clause with only
        // one literal. This will be checked for in the watched literals update function, so we do not use the
        // invalid literal
        formula.clause_watched_literals_map().emplace(clause_index,
                                                      std::make_pair(clause[0], INVALID_LITERAL));
        formula.watched_literal_clause_map()[clause[0]].push_back(clause_index);
    } else {
        VERIFY(clause.size(), std::greater_equal<>{}, static_cast<std::size_t>(2));
        formula.clause_watched_literals_map().emplace(clause_index, std::make_pair(clause[0], clause[1]));
        formula.watched_literal_clause_map()[clause[0]].push_back(clause_index);
        formula.watched_literal_clause_map()[clause[1]].push_back(clause_index);
    }
}

void add_learnt_conflict_clause_to_watch(Formula& formula, const ClauseIndex clause_index, Literal literal_to_imply) {
    if (const auto& clause = formula.literal_range(clause_index).clause(formula.literals()); clause.size() == 1) {
        // We set the second literal in the literal pair to an invalid one since we have a unit clause with only
        // one literal. This will be checked for in the watched literals update function, so we do not use the
        // invalid literal
        formula.clause_watched_literals_map().emplace(clause_index, std::pair{clause[0], INVALID_LITERAL});
        formula.watched_literal_clause_map()[clause[0]].push_back(clause_index);
    } else {
        VERIFY(clause.size(), std::greater_equal<>{}, static_cast<std::size_t>(2));

        // Find first literal that is not literal_to_imply
        auto second_literal_to_watch = INVALID_LITERAL;
        for (const auto& literal : clause) {
            if (literal != literal_to_imply) {
                second_literal_to_watch = literal;
                break;
            }
        }

        formula.clause_watched_literals_map().emplace(clause_index, std::pair(literal_to_imply, second_literal_to_watch));
        formula.watched_literal_clause_map()[literal_to_imply].push_back(clause_index);
        formula.watched_literal_clause_map()[second_literal_to_watch].push_back(clause_index);
    }

    VERIFY(DimacsParser::impl::watched_clauses_contains_duplicates(formula), std::equal_to<>{}, false);
}

void update(Formula& formula, const Literal negated_watched_literal) {
    const auto affected_clause_indices_it = formula.watched_literal_clause_map().find(negated_watched_literal);
    if (affected_clause_indices_it == formula.watched_literal_clause_map().end()) {
        return;
    }

    // Check each clause where negated_watched_literal is present
    // IMPORTANT: We have to copy the list of affected clauses to avoid changing it during the iteration
    for (const auto affected_clause_indices = affected_clause_indices_it->second;
         const auto affected_clause_index : affected_clause_indices) {
        // Find partner literal of `negated_watched_literal`
        const auto watched_literals_it = formula.clause_watched_literals_map().find(affected_clause_index);
        VERIFY(watched_literals_it, std::not_equal_to<>{}, formula.clause_watched_literals_map().end());

        Literal partner_literal;
        if (formula.unit_clause_map()[affected_clause_index]) {
            partner_literal = watched_literals_it->second.first;
        } else {
            partner_literal = watched_literals_it->second.first == negated_watched_literal
                                  ? watched_literals_it->second.second
                                  : watched_literals_it->second.first;
        }

        // TODO: Maybe this could start with a check whether clause is unit?

        if (literal::is_satisfied(partner_literal, formula.assignment_map()[literal::variable(partner_literal)])) {
            // Clause satisfied
            continue;
        }
        if (auto new_partner_literal = impl::find_new_partner_literal(formula, affected_clause_index,
                                                                      negated_watched_literal, partner_literal);
            new_partner_literal.has_value()) {
            // Try to find a new literal to watch

            // If the new literal happens to be satisfied, we are done
            if (new_partner_literal == partner_literal) {
                continue;
            }

            // Remove mapping of negated_watched_literal -> clause
            auto negated_watched_literal_watched_clause_subrange = std::ranges::remove(affected_clause_indices_it->second, affected_clause_index);
            affected_clause_indices_it->second.erase(negated_watched_literal_watched_clause_subrange.begin(), negated_watched_literal_watched_clause_subrange.end());

            // Update clause_literal_map by simply updating the watched_literals
            watched_literals_it->second.first  = new_partner_literal.value();
            watched_literals_it->second.second = partner_literal;

            // Update watched_literal_clause_map: We need to make sure that new_literal is mapped to its new clause
            formula.watched_literal_clause_map()[new_partner_literal.value()].push_back(affected_clause_index);
            VERIFY(DimacsParser::impl::watched_clauses_contains_duplicates(formula), std::equal_to<>{}, false);
        } else if (formula.assignment_map()[literal::variable(partner_literal)] == Value::UNASSIGNED) {
            // Clause is unit, partner_literal is unassigned
            formula.unit_clauses().emplace_back(affected_clause_index, partner_literal);
            formula.unit_clause_map()[affected_clause_index] = true;
        } else if (!literal::is_satisfied(partner_literal,
                                          formula.assignment_map()[literal::variable(partner_literal)])) {
            // Clause is conflicting -> resolve
            DEBUG_LOG("Clause {} ({}) is conflicting @ DL {}", affected_clause_index,
                      clause::print_clause(formula.literal_range(affected_clause_index).clause(formula.literals())), formula.decision_level());
            formula.conflicting_clause() = affected_clause_index;

            // We can stop here, even if the literal appears in other clauses since the conflict resolution will
            // make the propagation invalid anyway
            return;
        }
    }
}
} // namespace WatchedLiterals
