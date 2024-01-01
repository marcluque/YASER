#include "formula.h"

#include <clause.h>
#include <log.h>
#include <verify.h>

Formula::Formula(const std::size_t num_variables, const std::size_t num_clauses)
    : m_number_of_variables(num_variables), m_conflicting_clause(std::nullopt), m_decision_level(0),
      m_literals(num_variables * num_clauses), m_clauses(num_clauses), m_assignment_map(num_variables + 1),
      m_variable_assignment_index(num_variables + 1), m_unit_clause_map(num_clauses), m_variable_decision_level(num_variables + 1) {
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
    for (auto assignment : this->assignment_trail()) {
        if (variables.contains(assignment.variable)) {
            return false;
        }
        variables.insert(assignment.variable);
    }

    if (assignment_trail().size() != this->number_of_variables()) {
        return false;
    }

    DEBUG_LOG("Assignment trail is valid");
    return true;
}
