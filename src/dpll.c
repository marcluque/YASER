//
// Created with <3 by marcluque, June 2021
//

#include "dpll.h"
#include "conflicts/conflict_resolution.h"
#include "assignments/assignment_stack.h"
#include "assignments/assignment_unit_clauses.h"
#include "assignments/assignment_sat_clauses.h"
#include "watched-literals/watched_literals.h"
#include "global/formula.h"

static void update_assignment(const literal l, const value v) {
  // Trail -> entries (l, v, b): assigning v to l, b == true <=> negated l is visited
  assignment_stack_push(l, v, true);
  assignment_map_set(l, v);

  // Call to update watched literals
  watched_literals_check(l);

  // TODO: Remove the clause l is in from the list in watched_literal_clause_map
  //clause_index clause = literal_clause_map();

}

static bool bcp(void) {
  while (!assignment_unit_clause_stack_empty()) {
    literal l = assignment_unit_clause_stack_pop();
    update_assignment(l, l < 0 ? VALUE_FALSE : VALUE_TRUE);
  }

  return assignment_exists_unsat_clause();
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
