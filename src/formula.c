//
// Created by marcluque on 20.06.2021.
//

#include "../include/formula.h"

int* formula = 0;
size_t num_variables;
size_t* clauses = 0;
size_t num_clauses;

void formula_init(const size_t num_variables_param, const size_t num_clauses_param) {
    num_variables = num_variables_param;
    num_clauses = num_clauses_param;
    formula = malloc(sizeof(int) * num_variables * num_clauses);
    clauses = malloc(sizeof(size_t) * num_clauses);
}

void formula_clear() {
    free(formula);
    free(clauses);
}