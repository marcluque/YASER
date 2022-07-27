//
// Created with <3 by marcluque, June 2021
//

#include "dpll.h"
#include "assignments/assignment_stack.h"
#include "assignments/unit_clause_stack.h"
#include "watched-literals/watched_literals.h"
#include "global/formula.h"
#include "watched-literals/sat_clause_set.h"
#include "conflicts/conflict_resolution.h"
#include "logging/log.h"

static void update_assignment(const clause_index clause, const literal l) {
  // Trail -> entries (l, v, b): assigning v to l, b == true <=> negated l is visited
  value v = l < 0 ? VALUE_FALSE : VALUE_TRUE;
  assignment_stack_push(l, v, true);
  assignment_map_set(l, v);
  sat_clause_set_add(clause);

  log_debug("Assigning %sx%d with value %d in clause %lu", l < 0 ? "¬" : "", abs(l), v - 1, clause);

  // Call to update watched literals
  watched_literals_check(l);
}

static bool bcp(void) {
  while (!unit_clause_stack_empty()) {
    const UnitClause* unit_clause = unit_clause_stack_pop();
    update_assignment(unit_clause->clause, unit_clause->l);

    if (conflict_present) {
      return false;
    }
  }

  return true;
}

static bool decide(void) {
  if (assignment_stack_full()) {
    return false;
  }
  // TODO: choose unassigned literal heuristically
  // TODO: Do we know the clause that the literal is coming from?
  formula_pos i = 0;
  clause_index j = 0;
  for ( ; i < num_variables * num_clauses; ++i) {
    if (i >= clauses[j + 1]) {
      ++j;
    }

    if (assignment_map_get(formula[i]) == VALUE_UNASSIGNED) {
      break;
    }
  }

  literal l           = formula[i];
  clause_index clause = j;
  update_assignment(clause, l);
  return true;
}

static bool backtrack(void) {
  while (assignment_stack_empty()) {
    const AssignmentStackItem* item = assignment_stack_pop();
    if (!item->visited) {
      assignment_stack_push(item->l, item->value, true);
      // TODO: Reset watched literals and set them again
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
