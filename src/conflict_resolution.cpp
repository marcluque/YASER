#include <vector>
#include <unordered_set>
#include <algorithm>
#include "conflict_resolution.h"
#include "verify.h"
#include "formula.h"
#include "vsids.h"

namespace ConflictResolution {

namespace impl {

std::vector<Literal> binary_resolve(const Clause clause_1, const Clause clause_2, const Variable resolution_variable) {
    // More efficient shortcut for small clauses
    if (clause_2.size() <= 10 || clause_1.size() <= 10) {
        std::unordered_set<Literal> resolvent;
        std::ranges::copy_if(clause_1, std::inserter(resolvent, resolvent.begin()),
                             [&](auto lit) { return literal::variable(lit) != resolution_variable; });
        std::ranges::copy_if(clause_2, std::inserter(resolvent, resolvent.begin()),
                             [&](auto lit) { return literal::variable(lit) != resolution_variable; });
        return {resolvent.begin(), resolvent.end()};
    }

    std::unordered_set<Literal> resolvent{clause_1.begin(), clause_1.end()};
    resolvent.insert(clause_2.begin(), clause_2.end());

    resolvent.erase(literal::convert(resolution_variable, true));
    resolvent.erase(literal::convert(resolution_variable, false));

    return {resolvent.begin(), resolvent.end()};
}

std::optional<std::pair<DecisionLevel, Literal>> is_clause_asserting(Formula& formula, const Clause clause,
                                                               const DecisionLevel decision_level) {
    if (clause.size() == 1) {
        // Special case where the decision at DL 0 is the reason for our conflict
        // To avoid this decision, we only need a clause with a single literal that prohibits the assignment
        return std::pair{0, clause[0]};
    }

    DecisionLevel max        = -1;
    DecisionLevel second_max = -1;
    Literal last_assigned_literal;
    bool decision_level_seen = false;
    for (const auto& literal : clause) {
        const auto literal_decision_level = formula.variable_decision_level()[literal::variable(literal)];
        if (literal_decision_level == decision_level) {
            if (decision_level_seen) {
                return std::nullopt;
            }

            decision_level_seen   = true;
            last_assigned_literal = literal;
        }

        if (literal_decision_level > max) {
            second_max = max;
            max        = literal_decision_level;
        } else if (literal_decision_level > second_max && literal_decision_level != max) {
            second_max = literal_decision_level;
        }
    }

    if (second_max == -1) {
        second_max = max;
    }

    if (decision_level_seen) {
        return std::pair{second_max, last_assigned_literal};
    }

    return std::nullopt;
}

} // namespace impl

DecisionLevel analyze_conflict(Formula& formula) {
    VERIFY(formula.conflicting_clause().has_value(), std::equal_to{}, true);

    if (formula.decision_level() == 0) {
        return -1;
    }

    std::vector<Literal> current_clause;
    const auto literal_range = formula.literal_range(formula.conflicting_clause().value());
    auto clause = literal_range.clause(formula.literals());
    current_clause.insert(current_clause.begin(), clause.begin(), clause.end());
    std::optional<std::pair<DecisionLevel, Literal>> pair = impl::is_clause_asserting(formula, current_clause, formula.decision_level());

    /*
     * When analyzing a conflict, we cannot assume whether any propagation has happened.
     * It is possible that the decision we made immediately led to a conflict.
     * In that case, there won't be any binary resolution necessary.
     */
    while (!pair.has_value()) {
        std::optional<ClauseIndex> antecedent          = std::nullopt;
        std::optional<Variable> last_assigned_variable = std::nullopt;
        std::size_t max                                = 0;
        for (const auto literal : current_clause) {
            for (std::size_t i = formula.assignment_trail().size() - 1; i > 0; i--) {
                if (i > max && formula.assignment_trail()[i].variable == literal::variable(literal)) {
                    antecedent             = formula.assignment_trail()[i].antecedent;
                    last_assigned_variable = formula.assignment_trail()[i].variable;
                    max                    = i;
                    break;
                }
            }
        }

        VERIFY(antecedent.has_value(), std::equal_to{}, true);
        VERIFY(last_assigned_variable.has_value(), std::equal_to{}, true);

        // We reward clauses that help with conflict resolution
        VSIDS::update_clause_priority(formula, antecedent.value());

        const auto antecedent_clause = formula.literal_range(antecedent.value()).clause(formula.literals());
        current_clause = impl::binary_resolve(current_clause, antecedent_clause, last_assigned_variable.value());
        VSIDS::update_variable_priorities(formula, current_clause);
        pair = impl::is_clause_asserting(formula, current_clause, formula.decision_level());
    }

    formula.learn_clause(current_clause, pair.value().second);

    return pair.value().first;
}

} // namespace ConflictResolution
