//
// Created with <3 by marcluque, June 2021
//

#include "watched-literals/watched_literals.h"
#include "global/formula.h"
#include "conflicts/conflict_resolution.h"
#include "assignments/assignment_map.h"
#include "assignments/assignment_sat_clauses.h"
#include "assignments/assignment_unit_clauses.h"
#include "watched-literals/literal_clause_map.h"
#include "watched-literals/clause_literal_map.h"
#include <assert.h>

ATTR_PURE static formula_pos find_new_literal(const clause_index clause) {
  assert(clause < NOT_FOUND);
  assert(clause <= num_clauses);

  for (formula_pos i = 0; i < clauses[clause + 1]; ++i) {
    value assignment = assignment_map_get_value(clauses[clause] + i);
    assert(assignment != VALUE_INVALID);

    // TODO: Is this correct?
    if (assignment == 1 || assignment == 0) {
      return clauses[clause] + i;
    }
  }

  return NOT_FOUND;
}

void watched_literals_init(void) {
  for (clause_index i = 0; i < num_clauses; ++i) {
    literal_clause_map_add(clauses[i], i);
    literal_clause_map_add(clauses[i] + 1, i);
  }
}

void watched_literals_check(const formula_pos watched_literal_pos) {
  assert(watched_literal_pos < NOT_FOUND);
  assert(watched_literal_pos < num_literals);

  // Find clause of negated watched_literal_pos
  clause_index clause = literal_clause_map_find(watched_literal_pos);
  if (clause == NOT_FOUND) {
    // TODO: Print something I guess
    return;
  }

  formula_pos partner_literal_pos = clause_literal_map_find(clause, watched_literal_pos);
  assert(partner_literal_pos != NOT_FOUND);

  value partner_literal_assignment = assignment_map_get_value(partner_literal_pos);

  formula_pos new_literal_pos;
  if (partner_literal_assignment == VALUE_TRUE) {
    // clause satisfied
    assignment_sat_clauses_add_clause();
  } else if ((new_literal_pos = find_new_literal(clause)) != NOT_FOUND) {
    // Update clause_map
    clause_literal_map_delete(clause);
    // TODO: Does an anonymous array work?
    const formula_pos watched_literals[] = {partner_literal_pos, new_literal_pos};
    clause_literal_map_add(clause, watched_literals);

    // Update watched_literal_map
    literal_clause_map_delete(watched_literal_pos);
    literal_clause_map_add(new_literal_pos, clause);
  } else if (partner_literal_assignment == VALUE_INVALID) {
    // Clause is unit, partner_literal is unassigned
    assignment_unit_clause_stack_push(partner_literal_pos);
  } else if (partner_literal_assignment == VALUE_FALSE) {
    // Clause is conflicting -> resolve
    conflict_present = true;
    // get variable from assignment stack
    // AssignmentStackItem* assignment = assignment_stack_pop();
  }
}
