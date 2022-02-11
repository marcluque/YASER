//
// Created with <3 by marcluque, June 2021
//

#include "global/formula.h"
#include "global/yaser.h"
#include <malloc.h>

literal* formula      = NULL;
size_t num_literals   = 0;
value* assignment_map = NULL;
size_t num_variables  = 0;
formula_pos* clauses  = NULL;
size_t num_clauses    = 0;

void formula_init(const size_t num_variables_param, const size_t num_clauses_param) {
  num_variables = num_variables_param;
  num_clauses   = num_clauses_param;
  // TODO: Is this approximation of n * m sufficient?
  formula       = malloc(num_variables * num_clauses * sizeof(literal));
  YASER_CHECK_MALLOC(formula);
  assignment_map = calloc(num_variables, sizeof(literal));
  YASER_CHECK_MALLOC(assignment_map);
  clauses = malloc(num_clauses * sizeof(formula_pos));
  YASER_CHECK_MALLOC(clauses);
}

void formula_clear(void) {
  free(formula);

  free(assignment_map);

  free(clauses);
}
