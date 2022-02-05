//
// Created with <3 by marcluque, June 2021
//

#include "global/formula.h"
#include <malloc.h>

literal* formula     = NULL;
size_t num_variables = 0;
formula_pos* clauses = NULL;
size_t num_clauses   = 0;

void formula_init(const size_t num_variables_param, const size_t num_clauses_param) {
  num_variables = num_variables_param;
  num_clauses  = num_clauses_param;
  formula      = malloc(sizeof(literal) * num_variables * num_clauses);
  clauses      = malloc(sizeof(formula_pos) * num_clauses);
}

void formula_clear(void) {
  if (formula != NULL) {
    free(formula);
  }

  if (clauses != NULL) {
    free(clauses);
  }
}
