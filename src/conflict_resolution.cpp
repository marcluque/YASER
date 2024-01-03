#include "conflict_resolution.h"
#include "verify.h"

#include <clause.h>
#include <formula.h>
#include <vector>
#include <vsids.h>

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

std::optional<std::pair<ssize_t, Literal>> is_clause_asserting(Formula& formula, const Clause clause,
                                                               const ssize_t decision_level) {
    if (clause.size() == 1) {
        return std::pair{0, clause.front()};
    }

    ssize_t max        = -1;
    ssize_t second_max = -1;
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

ssize_t analyze_conflict(Formula& formula) {
    VERIFY(formula.conflicting_clause().has_value(), std::equal_to<>{}, true);

    if (formula.decision_level() == 0) {
        return -1;
    }

    const auto current_clause_index = formula.conflicting_clause();
    VERIFY(current_clause_index.has_value(), std::equal_to<>{}, true);

    std::vector<Literal> current_clause;
    auto clause = formula.clause(formula.conflicting_clause().value());
    current_clause.insert(current_clause.begin(), clause.begin(), clause.end());
    std::optional<std::pair<ssize_t, Literal>> pair;

    do {
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

        VERIFY(antecedent.has_value(), std::equal_to<>{}, true);
        VERIFY(last_assigned_variable.has_value(), std::equal_to<>{}, true);

        current_clause = std::move(impl::binary_resolve(current_clause, formula.clause(antecedent.value()),
                                                        last_assigned_variable.value()));
        VSIDS::update_variable_priorities(formula, current_clause);
        pair = impl::is_clause_asserting(formula, current_clause, formula.decision_level());
    } while (!pair.has_value());

    formula.learn_clause(current_clause, pair.value().second);

    return pair.value().first;
}

} // namespace ConflictResolution
