#include "formula.h"

Formula::Formula(const std::size_t num_variables, const std::size_t num_clauses)
    : m_number_of_variables(num_variables), m_literals(num_variables * num_clauses), m_clauses(num_clauses) {

}
