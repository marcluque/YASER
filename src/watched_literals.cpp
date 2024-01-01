#include "watched_literals.h"

#if YASER_DEBUG
#include <clause.h>
#endif

#include <formula.h>
#include <log.h>
#include <verify.h>

namespace WatchedLiterals {

namespace impl {

std::optional<Literal> find_new_partner_literal(Formula& formula, const ClauseIndex clause_index,
                                                const Literal old_partner_literal,
                                                const Literal current_partner_literal) {
    for (const auto& literal : formula.clause(clause_index)) {
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
    const auto& clause = formula.clause(clause_index);

    if (is_unit_clause) {
        // We set the second literal in the literal pair to an invalid one since we have a unit clause with only
        // one literal. This will be checked for in the watched literals update function, so we do not use the
        // invalid literal
        formula.clause_watched_literals_map().emplace(clause_index,
                                                      std::make_pair(clause.front(), INVALID_LITERAL));
        formula.watched_literal_clause_map()[clause.front()].push_back(clause_index);
    } else {
        VERIFY(clause.size(), std::greater_equal<>{}, static_cast<std::size_t>(2));
        formula.clause_watched_literals_map().emplace(clause_index,
                                                      std::make_pair(clause.front(), *(clause.begin() + 1)));
        formula.watched_literal_clause_map()[clause.front()].push_back(clause_index);
        formula.watched_literal_clause_map()[*(clause.begin() + 1)].push_back(clause_index);
    }
}

void update(Formula& formula, const Literal negated_watched_literal) {
    const auto affected_clause_indices = formula.watched_literal_clause_map().find(negated_watched_literal);
    if (affected_clause_indices == formula.watched_literal_clause_map().end()) {
        return;
    }

    // Check each clause where negated_watched_literal is present
    for (const auto& affected_clause_index : affected_clause_indices->second) {
        // Find partner literal of negated_watched_literal
        const auto watched_literals = formula.clause_watched_literals_map().find(affected_clause_index);

        VERIFY(watched_literals, std::not_equal_to<>{}, formula.clause_watched_literals_map().end());

        Literal partner_literal;
        if (formula.unit_clause_map()[affected_clause_index]) {
            partner_literal = watched_literals->second.first;
        } else {
            partner_literal = watched_literals->second.first == negated_watched_literal
                                  ? watched_literals->second.second
                                  : watched_literals->second.first;
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

            // Update clause_literal_map by simply updating the watched_literals
            watched_literals->second.first  = new_partner_literal.value();
            watched_literals->second.second = partner_literal;

            // Update watched_literal_clause_map: We need to make sure that new_literal is mapped to its new
            // clause
            formula.watched_literal_clause_map()[new_partner_literal.value()].push_back(affected_clause_index);
        } else if (formula.assignment_map()[literal::variable(partner_literal)] == Value::UNASSIGNED) {
            // Clause is unit, partner_literal is unassigned
            formula.unit_clauses().emplace_back(affected_clause_index, partner_literal);
            formula.unit_clause_map()[affected_clause_index] = true;
        } else if (!literal::is_satisfied(partner_literal,
                                          formula.assignment_map()[literal::variable(partner_literal)])) {
            // Clause is conflicting -> resolve
            DEBUG_LOG("Clause {} ({}) is conflicting", affected_clause_index,
                      clause::print_clause(formula.clause(affected_clause_index)));
            formula.conflicting_clause() = affected_clause_index;

            // We can stop here, even if the literal appears in other clauses since the conflict resolution will
            // make the propagration invalid anyway
            return;
        }
    }
}
} // namespace WatchedLiterals
