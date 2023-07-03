#include "formula.h"

Formula::Formula(std::size_t num_variables, std::size_t num_clauses)
    : literals(num_variables * num_clauses), clauses(num_clauses) {}

