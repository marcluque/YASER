//
// Created with <3 by marcluque, June 2021
//

#include "dpll.h"
#include "conflicts/conflict_resolution.h"
#include "assignments/assignment_stack.h"
#include "assignments/unit_clause_stack.h"
#include "watched-literals/watched_literals.h"
#include "global/formula.h"
#include "watched-literals/sat_clause_set.h"

static void update_assignment(const literal l, const value v) {
  // Trail -> entries (l, v, b): assigning v to l, b == true <=> negated l is visited
  assignment_stack_push(l, v, true);
  assignment_map_set(l, v);
  // TODO: Find clause of literal and set clause to satisfied

  // Call to update watched literals
  watched_literals_check(l);
}

static bool bcp(void) {
  while (!unit_clause_stack_empty()) {
    literal l = unit_clause_stack_pop();
    update_assignment(l, l < 0 ? VALUE_FALSE : VALUE_TRUE);
  }

  return sat_clause_set_exists_unsat();
}

static bool decide(void) {
  if (assignment_stack_full()) {
    return false;
  }
  // TODO: choose unassigned literal heuristically
  literal l = 0;
  update_assignment(l, l < 0 ? VALUE_FALSE : VALUE_TRUE);
  return true;
}

bool dpll(void) {
  assignment_stack_reset();
  if (!bcp()) {
    return false;
  }

  while (1) {
    if (!decide()) {
      return true;
    }

    while (!bcp()) {
      // TODO: Tell the method which clause and variable is affected
      if (!resolve_conflict()) {
        return false;
      }
    }
  }
}
