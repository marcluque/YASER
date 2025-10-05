#include <algorithm>
#include <ranges>
#include "conflict_resolution.h"
#include "watched_literals.h"
#include "formula.h"
#include "dpll.h"

#include "clause.h"
#include "verify.h"

#include <random>

namespace DPLL {

namespace impl {

bool bcp(Formula& formula) {
    while (!formula.unit_clauses().empty()) {
        // We have a conflict, stop propagating
        if (formula.conflicting_clause().has_value()) {
            return false;
        }

        const auto [clause_index, literal] = formula.unit_clauses().back();
        formula.unit_clauses().pop_back();

        formula.unit_clause_map()[clause_index] = false;

        if (formula.assignment_map()[literal::variable(literal)] != Value::UNASSIGNED) {
            // TODO: Investigate why this is happening
            continue;
        }

        DEBUG_LOG("c_{} ({}) is unit, implying {} @ DL {}",
            clause_index,
            clause::print_clause(formula.literal_range(clause_index).clause(formula.literals())),
            literal::print_literal(literal),
            formula.decision_level());

        formula.assignment_map()[literal::variable(literal)] = literal::is_positive(literal) ? Value::TRUE
                                                                                             : Value::FALSE;
        formula.variable_assignment_index()[literal::variable(literal)] = formula.assignment_trail().size();
        formula.assignment_trail().emplace_back(formula.decision_level(), clause_index, literal::variable(literal),
                                                formula.assignment_map()[literal::variable(literal)], false);
        formula.variable_decision_level()[literal::variable(literal)] = formula.decision_level();
        formula.locked_clause_map()[clause_index] += 1;

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

    DEBUG_LOG("formula.next_variable().size()={}", formula.next_variable().size());

    Variable variable = INVALID_VARIABLE;
    while (!formula.next_variable().empty()) {
        variable = formula.next_variable().removeMax().variable;
        if (formula.assignment_map()[variable] == Value::UNASSIGNED) {
            break;
        }
    }
    VERIFY(variable, std::not_equal_to<>{}, INVALID_VARIABLE);

    // TODO: use a more sophisticated polarity heuristic
    //const Literal literal = literal::convert(variable, rand() % 2);
    const auto is_negative = formula.polarity()[variable];
    const Literal literal = literal::convert(variable, is_negative);

    DEBUG_LOG("Deciding {} @ DL {}", literal::print_literal(literal), formula.decision_level());

    formula.assignment_map()[literal::variable(literal)]            = literal::is_positive(literal) ? Value::TRUE : Value::FALSE;
    formula.variable_assignment_index()[literal::variable(literal)] = formula.assignment_trail().size();
    formula.assignment_trail().emplace_back(formula.decision_level(), std::nullopt, literal::variable(literal),
                                            formula.assignment_map()[literal::variable(literal)], false);
    formula.variable_decision_level()[literal::variable(literal)] = formula.decision_level();
    WatchedLiterals::update(formula, literal::negate(literal));

    return true;
}

void backtrack(Formula& formula, const DecisionLevel backtrack_level) {
    DEBUG_LOG("Backtracking to level {}", backtrack_level);

    while (!formula.assignment_trail().empty()
           && formula.assignment_trail().back().decision_level > backtrack_level) {
        const auto assignment = formula.assignment_trail().back();
        formula.assignment_trail().pop_back();
        if (assignment.antecedent.has_value()) {
            VERIFY(formula.locked_clause_map()[assignment.antecedent.value()], std::greater<>{}, 0);
            formula.locked_clause_map()[assignment.antecedent.value()] -= 1;
        }
        formula.polarity()[assignment.variable] = formula.assignment_map()[assignment.variable] == Value::FALSE;
        formula.assignment_map()[assignment.variable] = Value::UNASSIGNED;
        if (!formula.next_variable().contains(assignment.variable)) {
            formula.next_variable().push({0, assignment.variable});
        }
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
        (void) impl::bcp(formula);
        if (formula.conflicting_clause().has_value()) {
            formula.number_of_conflicts() += 1;

            // We have found a conflict, we can erase the currently stored unit clauses
            formula.unit_clauses().clear();
            std::ranges::fill(formula.unit_clause_map(), false);

            const auto backtrack_level = ConflictResolution::analyze_conflict(formula);
            if (backtrack_level < 0) {
                return false;
            }

            // Conflict analysis was successful, we reset the conflict
            formula.conflicting_clause() = std::nullopt;

            impl::backtrack(formula, backtrack_level);

            // Backtracking was successful, reset decision level
            formula.decision_level() = backtrack_level;

            formula.variable_increment_factor() *= 1 / formula.variable_decay_factor();
        } else {
            if (!impl::decide(formula)) {
                // No more variables to assign and no conflict -> SAT
                return true;
            }
        }
    }
}
} // namespace DPLL