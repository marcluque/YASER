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
        if (formula.conflicting_clause()) {
            return false;
        }

        const auto [clause_index, literal] = formula.unit_clauses().back();
        formula.unit_clauses().pop_back();
        const auto clause = formula.literal_range(clause_index.index).clause(formula.literals());

        VERIFY(clause.literals[0], std::equal_to{}, literal);

        formula.unit_clause_map()[clause_index.index] = false;

        formula.number_of_propagations() += 1;

        if (formula.assignment_map()[literal.index()] != Value::UNASSIGNED) {
            // TODO: Investigate why this is happening
            continue;
        }

        DEBUG_LOG("c_{} ({}) is unit, implying {} @ DL {}", clause_index, clause, literal, formula.decision_level());

        formula.assignment_map()[literal.index()] = literal.value();
        formula.assignment_trail_index()[literal.index()] = formula.assignment_trail().size();
        formula.assignment_trail().emplace_back(formula.decision_level(), clause_index, literal.variable(),
                                                formula.assignment_map()[literal.index()]);
        formula.variable_decision_level()[literal.index()] = formula.decision_level();
        formula.locked_clause_map()[clause_index.index] += 1;

        WatchedLiterals::update(formula, ~literal);
    }

    // All assignments resulting from unit clauses have been propagated without encountering a conflict
    return true;
}

bool decide(Formula& formula) {
    if (formula.assignment_trail().size() == formula.number_of_variables()) {
        return false;
    }

    formula.decision_level() += 1;
    formula.number_of_decisions() += 1;

    auto variable = INVALID_VARIABLE;
    while (!formula.next_variable().empty()) {
        variable = formula.next_variable().removeMax().variable;
        if (formula.assignment_map()[variable.index] == Value::UNASSIGNED) {
            break;
        }
    }
    VERIFY(variable, std::not_equal_to{}, INVALID_VARIABLE);

    const auto literal = Literal{variable, formula.polarity()[variable.index]};;

    DEBUG_LOG("Deciding {} @ DL {}", literal, formula.decision_level());

    formula.assignment_map()[literal.index()] = literal.value();
    formula.assignment_trail_index()[literal.index()] = formula.assignment_trail().size();
    formula.assignment_trail().emplace_back(formula.decision_level(), std::nullopt, literal.variable(),
                                            formula.assignment_map()[literal.index()]);
    formula.variable_decision_level()[literal.index()] = formula.decision_level();
    WatchedLiterals::update(formula, ~literal);

    return true;
}

void backtrack(Formula& formula, const DecisionLevel backtrack_level) {
    DEBUG_LOG("Backtracking to level {}", backtrack_level);

    while (!formula.assignment_trail().empty() && formula.assignment_trail().back().decision_level > backtrack_level) {
        const auto assignment = formula.assignment_trail().back();
        formula.assignment_trail().pop_back();
        if (assignment.antecedent) {
            VERIFY(formula.locked_clause_map()[assignment.antecedent->index], std::greater{}, 0);
            formula.locked_clause_map()[assignment.antecedent->index] -= 1;
        }
        formula.polarity()[assignment.variable.index] = formula.assignment_map()[assignment.variable.index] == Value::FALSE;
        formula.assignment_map()[assignment.variable.index] = Value::UNASSIGNED;
        if (!formula.next_variable().contains(assignment.variable)) {
            formula.next_variable().push({.activity = 0, .variable = assignment.variable});
        }
        formula.variable_decision_level()[assignment.variable.index] = 0;

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
        if (formula.conflicting_clause()) {
            formula.number_of_conflicts() += 1;

            // We have found a conflict, we can erase the currently stored unit clauses
            formula.unit_clauses().clear();
            std::ranges::fill(formula.unit_clause_map(), false);

            const auto backtrack_level = ConflictResolution::analyze_conflict(formula);
            if (backtrack_level < 0) {
                return false;
            }

            // Conflict analysis was successful, reset the conflict
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