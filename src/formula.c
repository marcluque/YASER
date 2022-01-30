//
// Created with <3 by marcluque, June 2021
//

#include <malloc.h>
#include "formula.h"

literal* formula = NULL;
size_t num_literals = 0;
formula_pos* clauses = NULL;
size_t num_clauses = 0;

void formula_init(const size_t num_variables_param, const size_t num_clauses_param) {
    num_literals = num_variables_param;
    num_clauses = num_clauses_param;
    formula = malloc(sizeof(literal) * num_literals * num_clauses);
    clauses = malloc(sizeof(formula_pos) * num_clauses);
}

void formula_clear(void) {
    free(formula);
    free(clauses);
}