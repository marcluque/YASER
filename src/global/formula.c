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
  YASER_ASSERT(num_variables_param, >, 0);
  YASER_ASSERT(num_clauses_param, >, 0);

  num_variables = num_variables_param;
  num_clauses   = num_clauses_param;

  // TODO: Is this approximation of n * m sufficient?
  formula = malloc(num_variables * num_clauses * sizeof(literal));
  YASER_CHECK_MALLOC(formula);

  // We use + 1 here since variables are not zero-indexed
  // Use calloc to make sure that map is initialized with zeros since VALUE_UNASSIGNED == 0
  assignment_map = calloc((num_variables + 1), sizeof(literal));
  YASER_CHECK_MALLOC(assignment_map);

  // We use + 1 to store the end of the last clause since it simplifies iterating over a clause
  clauses = malloc((num_clauses + 1) * sizeof(formula_pos));
  YASER_CHECK_MALLOC(clauses);
}

void formula_clear(void) {
  free(formula);
  free(assignment_map);
  free(clauses);
}
