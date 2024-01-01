#include "conflict_resolution.h"
#include "verify.h"

#include <clause.h>
#include <formula.h>
#include <vector>
#include <vsids.h>

namespace ConflictResolution {

namespace impl {

std::vector<Literal> resolve(const Clause clause_1, const Clause clause_2) {
    const bool clause_1_smaller  = clause_1.size() < clause_2.size();
    const Clause& bigger_clause  = clause_1_smaller ? clause_2 : clause_1;
    const Clause& smaller_clause = clause_1_smaller ? clause_1 : clause_2;

    std::unordered_set<Literal> resolvent;
    for (const auto& literal_1 : bigger_clause) {
        auto found_negated_literal = false;
        for (const auto& literal_2 : smaller_clause) {
            if (literal_1 == literal::negate(literal_2)) {
                found_negated_literal = true;
                break;
            }
        }

        if (!found_negated_literal) {
            resolvent.insert(literal_1);
        }
    }

    for (const auto& literal_1 : smaller_clause) {
        auto found_negated_literal = false;
        for (const auto& literal_2 : bigger_clause) {
            if (literal_1 == literal::negate(literal_2)) {
                found_negated_literal = true;
                break;
            }
        }

        if (!found_negated_literal) {
            resolvent.insert(literal_1);
        }
    }

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

            decision_level_seen = true;
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
        std::optional<ClauseIndex> antecedent = std::nullopt;
        std::size_t max = 0;
        for (const auto literal : current_clause) {
            for (std::size_t i = formula.assignment_trail().size() - 1; i > 0; i--) {
                if (i > max && formula.assignment_trail()[i].variable == literal::variable(literal)) {
                    antecedent = formula.assignment_trail()[i].antecedent;
                    max = i;
                    break;
                }
            }
        }

        VERIFY(antecedent.has_value(), std::equal_to<>{}, true);

        //const auto antecedent = formula.assignment_trail()[last_assignment_index].antecedent;

        DEBUG_LOG("Resolve ({}) and ({})", clause::print_clause(current_clause), clause::print_clause(formula.clause(antecedent.value())));
        current_clause = std::move(impl::resolve(current_clause, formula.clause(antecedent.value())));
        DEBUG_LOG("Resolvent ({})", clause::print_clause(current_clause));
        VSIDS::update_variable_priorities(formula, current_clause);
        pair = impl::is_clause_asserting(formula, current_clause, formula.decision_level());
    } while (!pair.has_value());

    // TODO: This could be done with all resolvents involved instead of just the "conflict clause",
    //       i.e., the last resolvent


    formula.learn_clause(current_clause, pair.value().second);

    return pair.value().first;
}

} // namespace ConflictResolution
