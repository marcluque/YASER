#include <vector>
#include <algorithm>
#include <ranges>
#include "literal.h"
#include "conflict_resolution.h"
#include "verify.h"
#include "formula.h"
#include "vsids.h"

namespace ConflictResolution {

DecisionLevel analyze_conflict(Formula& formula) {
    VERIFY(formula.conflicting_clause().has_value(), std::equal_to{}, true);

    if (formula.decision_level() == 0) {
        return -1;
    }

    // TODO: Use longest clause in clause DB as upper limit for learned clause length
    formula.literals().reserve(formula.literals().size() + 1000);

    std::ranges::fill(formula.variable_seen_in_conflict_analysis(), false);

    const auto asserting_literal_index = formula.literals().size();
    // Reserve space for the asserting literal
    formula.literals().push_back(INVALID_LITERAL);

    auto current_clause_index = formula.conflicting_clause().value();
    auto assignment_trail_index = formula.assignment_trail().size() - 1;
    auto remaining_variables_on_decision_level = 1;
    auto current_clause = formula.literal_range(current_clause_index).clause(formula.literals());

    auto last_implied_literal = current_clause[0];
    formula.variable_seen_in_conflict_analysis()[literal::variable(last_implied_literal)] = true;
    VSIDS::update_variable_priority(formula, literal::variable(last_implied_literal));

    do {
        VERIFY(current_clause_index, std::not_equal_to{}, INVALID_CLAUSE);
        // Every clause has the last assigned literal at the 0th position
        current_clause = formula.literal_range(current_clause_index).clause(formula.literals()) | std::views::drop(1);

        // Reward learned clauses involved in conflict resolution
        if (current_clause_index >= formula.number_of_input_clauses()) {
            VSIDS::update_clause_priority(formula, current_clause_index);
        }

        for (const auto& literal : current_clause) {
            if (const auto variable = literal::variable(literal);
                !formula.variable_seen_in_conflict_analysis()[variable] && formula.variable_decision_level()[variable] > 0) {
                // TODO: Make the priority update lazy (update all, then heapify)
                VSIDS::update_variable_priority(formula, variable);
                formula.variable_seen_in_conflict_analysis()[variable] = true;
                //VERIFY(formula.variable_decision_level()[variable], std::less_equal{}, formula.decision_level());
                if (formula.variable_decision_level()[variable] >= formula.decision_level()) {
                    ++remaining_variables_on_decision_level;
                } else {
                    // Write to learned clause
                    formula.literals().push_back(literal);
                }
            }
        }

        // Find next clause to resolve
        while (!formula.variable_seen_in_conflict_analysis()[formula.assignment_trail()[assignment_trail_index].variable]) {
            --assignment_trail_index;
        }

        last_implied_literal = formula.assignment_trail()[assignment_trail_index].literal();

        //formula.variable_seen_in_conflict_analysis()[formula.assignment_trail()[assignment_trail_index].variable] = false;

        current_clause_index = formula.assignment_trail()[assignment_trail_index].antecedent.value_or(INVALID_CLAUSE);
        // Subtract one for the last assigned literal that we are skipping
        --remaining_variables_on_decision_level;
        --assignment_trail_index;
    } while (remaining_variables_on_decision_level != 0);

    const auto learned_literal_range = LiteralRange{asserting_literal_index, formula.literals().size()};
    const auto learned_clause = learned_literal_range.clause(formula.literals());

    formula.literals()[asserting_literal_index] = literal::negate(last_implied_literal);

    formula.learn_clause(learned_literal_range);

    if (learned_clause.size() == 1) {
        // Special case where the decision at DL 0 is the reason for our conflict
        // To avoid this decision, we only need a clause with a single literal that prohibits the assignment
        return 0;
    }

    // Find the second-highest decision level (w.r.t. the asserting literal's decision level)
    const auto second_highest_decision_level = std::ranges::max_element(learned_clause | std::views::drop(1), {}, [&](const auto l) { return formula.variable_decision_level()[literal::variable(l)]; });

    return formula.variable_decision_level()[literal::variable(*second_highest_decision_level)];
}

} // namespace ConflictResolution
