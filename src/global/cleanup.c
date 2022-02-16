//
// Created with <3 by marcluque, February 2022
//

#include "global/cleanup.h"
#include "assignments/assignment_stack.h"
#include "assignments/unit_clause_stack.h"
#include "watched-literals/clause_literal_map.h"
#include "global/formula.h"
#include "../watched-literals/watched_literal_clause_map.h"
#include <stdio.h>

void cleanup_all(void) {
  // Make sure all messages get out
  fflush(stdout);

  // assignment
  assignment_stack_clear();
  unit_clause_stack_clear();

  // watched literals
  clause_literal_map_clear();
  watched_literal_clause_map_clear();

  // formula
  formula_clear();
}
