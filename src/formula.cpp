#include <unordered_set>
#include "formula.h"
#include "log.h"
#include "verify.h"

#ifdef YASER_DEBUG
#include "clause.h"
#endif

Formula::Formula(const std::size_t num_variables, const std::size_t num_clauses)
    : m_number_of_variables(num_variables), m_conflicting_clause(std::nullopt), m_decision_level(0),
      m_literals(num_variables * num_clauses), m_clauses(num_clauses), m_assignment_map(num_variables + 1),
      m_variable_assignment_index(num_variables + 1), m_variable_decision_level(num_variables + 1),
      m_unit_clause_map(num_clauses), m_literal_priority((num_variables + 1) * 2) {
}

void Formula::learn_clause(Clause clause, Literal literal_to_imply) {
    this->m_literals.reserve(this->m_literals.size() + clause.size());
    auto it = this->m_literals.insert(this->m_literals.end(), clause.begin(), clause.end());
    this->m_clauses.emplace_back(it, clause.size());
    this->m_unit_clauses.emplace_back(this->m_clauses.size() - 1, literal_to_imply);
    this->m_unit_clause_map.push_back(true);

    VERIFY(this->m_unit_clause_map.size(), std::equal_to<>{}, this->m_clauses.size());
    DEBUG_LOG("Learnt clause c_{}: ({})", this->m_clauses.size() - 1, clause::print_clause(clause));
}

bool Formula::assignment_trail_is_valid() {
    std::unordered_set<Variable> variables;

    // Check if any variable appears more than once in the assignment trail
    const auto duplicate_exists = std::ranges::any_of(this->assignment_trail(), [&](const Assignment& assignment) {
        if (variables.contains(assignment.variable)) {
            DEBUG_LOG("Duplicate variable in assignment trail: {}", assignment.variable);
            return true;
        }
        variables.insert(assignment.variable);
        return false;
    });

    if (duplicate_exists) {
        ERROR_LOG("Found duplicate variable in assignment trail");
        return false;
    }

    if (assignment_trail().size() != this->number_of_variables()) {
        ERROR_LOG("Assignment trail size ({}) does not match number of variables ({})", assignment_trail().size(), this->number_of_variables());
        return false;
    }

    auto anyVariableInClauseSatisfied = [&](const Clause& clause) {
        return std::ranges::any_of(clause, [&](const Literal lit) {
            const Variable var = literal::variable(lit);
            const Value val    = assignment_map()[var];
            const bool is_positive = literal::is_positive(lit);
            return (val == Value::TRUE && is_positive) || (val == Value::FALSE && !is_positive);
        });
    };

    // Check that every clause is satisfied
    if (const bool all_clauses_satisfied = std::ranges::all_of(this->m_clauses, anyVariableInClauseSatisfied);
        !all_clauses_satisfied) {
        ERROR_LOG("One or more clauses are not satisfied by assignment trail");
        return false;
    }

    DEBUG_LOG("Assignment trail is valid");
    return true;
}
