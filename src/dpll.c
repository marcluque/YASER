//
// Created with <3 by marcluque, June 2021
//

#include "dpll.h"
#include "assignments/assignment_stack.h"
#include "assignments/unit_clause_stack.h"
#include "watched-literals/watched_literals.h"
#include "global/formula.h"
#include "watched-literals/sat_clause_set.h"

static void update_assignment(const clause_index clause, const literal l) {
  // Trail -> entries (l, v, b): assigning v to l, b == true <=> negated l is visited
  value v = l < 0 ? VALUE_FALSE : VALUE_TRUE;
  assignment_stack_push(l, v, true);
  assignment_map_set(l, v);
  sat_clause_set_add(clause);

  // Call to update watched literals
  watched_literals_check(l);
}

static bool bcp(void) {
  while (!unit_clause_stack_empty()) {
    UnitClause* unit_clause = unit_clause_stack_pop();
    update_assignment(unit_clause->clause, unit_clause->l);
  }

  return sat_clause_set_exists_unsat();
}

static bool decide(void) {
  if (assignment_stack_full()) {
    return false;
  }
  // TODO: choose unassigned literal heuristically
  // TODO: Do we know the clause that the literal is coming from?
  literal l           = 0;
  clause_index clause = 0;
  update_assignment(clause, l);
  return true;
}

static bool backtrack() {
  while (assignment_stack_empty()) {
    AssignmentStackItem* item = assignment_stack_pop();
    if (!item->visited) {
      assignment_stack_push(item->l, item->value, true);
      return true;
    }
  }

  return false;
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
      if (!backtrack()) {
        return false;
      }
    }
  }
}
