#include "../include/conflict_resolution.h"
#include "watched_literals.h"

#include <formula.h>
#include <dpll.h>
#include <verify.h>

namespace DPLL {

namespace impl {

bool bcp(Formula& formula) {
    while (!formula.unit_clauses().empty()) {
        // We have a conflict, stop early
        if (formula.conflicting_clause().has_value()) {
            return false;
        }

        const auto unit_clause             = formula.unit_clauses().begin();
        const auto [clause_index, literal] = *unit_clause;
        formula.unit_clauses().erase(unit_clause);

        if (formula.assignment_map()[literal::variable(literal)] != Value::UNASSIGNED) {
            WARNING_LOG("{} is already assigned with {}", literal::print_literal(literal),
                      formula.assignment_map()[literal::variable(literal)] == Value::TRUE);
            continue;
        }

        DEBUG_LOG("Clause {} is unit, implying {} @ DL {}", clause_index, literal::print_literal(literal),
                  formula.decision_level());

        formula.assignment_map()[literal::variable(literal)] = literal::is_positive(literal) ? Value::TRUE
                                                                                             : Value::FALSE;
        formula.variable_assignment_index()[literal::variable(literal)] = formula.assignment_trail().size();
        formula.assignment_trail().emplace_back(formula.decision_level(), clause_index, literal::variable(literal),
                                                formula.assignment_map()[literal::variable(literal)], false);
        formula.variable_decision_level()[literal::variable(literal)] = formula.decision_level();

        WatchedLiterals::update(formula, literal::negate(literal));
    }

    // All assignments resulting from unit clauses have been propagated without encountering a conflict
    return true;
}

bool decide(Formula& formula) {
    if (formula.assignment_trail().size() == formula.number_of_variables()) {
        return false;
    }

    ++formula.decision_level();

    auto priotiy_literal_pair = formula.next_literal().top();
    formula.next_literal().pop();

    while (formula.assignment_map()[literal::variable(priotiy_literal_pair.second)] != Value::UNASSIGNED) {
        VERIFY(formula.next_literal().size(), std::greater<>{}, static_cast<std::size_t>(0));
        priotiy_literal_pair = formula.next_literal().top();
        formula.next_literal().pop();
    }

    const auto [_, literal] = priotiy_literal_pair;

    DEBUG_LOG("Deciding {} at level {}", literal::print_literal(literal), formula.decision_level());

    formula.assignment_map()[literal::variable(literal)]            = literal::is_positive(literal) ? Value::TRUE
                                                                                                    : Value::FALSE;
    formula.variable_assignment_index()[literal::variable(literal)] = formula.assignment_trail().size();
    formula.assignment_trail().emplace_back(formula.decision_level(), std::nullopt, literal::variable(literal),
                                            formula.assignment_map()[literal::variable(literal)], false);
    formula.variable_decision_level()[literal::variable(literal)] = formula.decision_level();
    WatchedLiterals::update(formula, literal::negate(literal));

    return true;
}

void backtrack(Formula& formula, const ssize_t backtrack_level) {
    DEBUG_LOG("Backtracking to level {}", backtrack_level);

    while (!formula.assignment_trail().empty()
           && formula.assignment_trail().back().decision_level > backtrack_level) {
        const auto assignment = formula.assignment_trail().back();
        formula.assignment_trail().pop_back();
        formula.assignment_map()[assignment.variable] = Value::UNASSIGNED;
        formula.next_literal().emplace(0, literal::convert(assignment.variable, assignment.value == Value::FALSE));
        formula.variable_decision_level()[assignment.variable] = 0;

        // NOTE: We do not have to adjust the watched literals when backtracking!

        // NOTE 2: We do not have to adjust the unit clauses.
        //         The only unit clause here should be the conflict clause we are learning.
    }
}

} // namespace impl

bool run(Formula& formula) {
    if (!impl::bcp(formula)) {
        return false;
    }

    while (true) {
        if (!impl::decide(formula)) {
            return true;
        }

        while (!impl::bcp(formula)) {
            // We have found a conflict, we can erase the currently stored unit clauses
            formula.unit_clauses().clear();

            const auto backtrack_level = ConflictResolution::analyze_conflict(formula);
            if (backtrack_level < 0) {
                return false;
            }

            // Conflict analysis was successful, we reset the conflict
            formula.conflicting_clause() = std::nullopt;

            impl::backtrack(formula, backtrack_level);

            // Backtracking was successful, reset decision level
            formula.decision_level() = backtrack_level;
        }
    }
}
} // namespace DPLL