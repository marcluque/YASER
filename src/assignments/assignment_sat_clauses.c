//
// Created with <3 by marcluque, January 2022
//

#include "assignments/assignment_sat_clauses.h"
#include "global/formula.h"
#include <stddef.h>
#include <stdbool.h>

static size_t sat_clause_count = 0;

bool assignment_exists_unsat_clause(void) {
  return sat_clause_count != num_clauses;
}

void assignment_sat_clauses_add_clause(void) {
  ++sat_clause_count;
}
