//
// Created with <3 by marcluque, June 2021
//

#include "watched-literals/watched_literals.h"
#include "global/formula.h"
#include "conflicts/conflict_resolution.h"
#include "assignments/unit_clause_stack.h"
#include "watched-literals/clause_literal_map.h"
#include "global/yaser.h"
#include "watched_literal_clause_map.h"
#include "logging/log.h"
#include "sat_clause_set.h"
#include <limits.h>

#define CLAUSE_ALREADY_SAT (INT_MAX - 1)

void watched_literals_init(void) {
  // The function takes care of collecting clauses for equal literals (e.g., l_1 -> {c_1, c_2})

  for (clause_index i = 0; i < num_clauses; ++i) {
    watched_literal_clause_map_add(formula[clauses[i]], i);
    if (clauses[i + 1] - clauses[i] > 1) {
      watched_literal_clause_map_add(formula[clauses[i] + 1], i);
      clause_literal_map_add(i, (literal[]){formula[clauses[i]], formula[clauses[i] + 1]}, false);
    } else {
      clause_literal_map_add(i, (literal[]){formula[clauses[i]]}, true);
    }
  }

  log_debug("Watched Literals are initialized...");
}

ATTR_PURE ATTR_HOT static literal find_new_literal(const clause_index clause, const literal partner_literal) {
  YASER_ASSERT(clause, <, NOT_FOUND);
  YASER_ASSERT(clause, <, num_clauses);
  YASER_ASSERT(partner_literal, !=, INVALID_LITERAL);
  YASER_ASSERT(partner_literal, !=, CLAUSE_ALREADY_SAT);
  YASER_ASSERT(partner_literal, !=, NOT_FOUND_IN_CLAUSE);

  for (formula_pos i = clauses[clause]; i < clauses[clause + 1]; ++i) {
    value assignment = assignment_map_get(formula[i]);

    if (partner_literal != formula[i] && assignment == VALUE_UNASSIGNED) {
      return formula[i];
    } else if (assignment_map_is_sat(formula[i])) {
      return CLAUSE_ALREADY_SAT;
    }
  }

  return NOT_FOUND_IN_CLAUSE;
}

ATTR_HOT static void check_watched_literal_partner(const clause_index clause, const literal negated_watched_literal) {
  YASER_ASSERT(clause, <, NOT_FOUND);
  YASER_ASSERT(clause, <, num_clauses);
  YASER_ASSERT(negated_watched_literal, !=, INVALID_LITERAL);
  YASER_ASSERT(negated_watched_literal, !=, CLAUSE_ALREADY_SAT);
  YASER_ASSERT(negated_watched_literal, !=, NOT_FOUND_IN_CLAUSE);

  // Find partner literal of negated_watched_literal
  ClauseLiteralItem* item   = clause_literal_map_get(clause);
  literal* watched_literals = item->watched_literals;

  literal partner_literal;
  if (item->is_unit_clause) {
    partner_literal = watched_literals[0];
  } else {
    partner_literal = watched_literals[0] == negated_watched_literal ? watched_literals[1] : watched_literals[0];
  }

  literal new_literal;
  if (assignment_map_is_sat(partner_literal)) {
    // clause satisfied
    sat_clause_set_add(clause);
  } else if ((new_literal = find_new_literal(clause, partner_literal)) != NOT_FOUND_IN_CLAUSE) {
    // Try to find a new literal to watch

    // If the new literal happens to be satisfied, we are done
    if (new_literal == CLAUSE_ALREADY_SAT) {
      sat_clause_set_add(clause);
      return;
    }

    // Update clause_literal_map by simply updating the watched_literals
    watched_literals[0] = new_literal;
    watched_literals[1] = partner_literal;

    // Update watched_literal_clause_map: We need to make sure that new_literal is mapped to its new clause
    watched_literal_clause_map_add(new_literal, clause);
  } else if (assignment_map_get(partner_literal) == VALUE_UNASSIGNED) {
    // Clause is unit, partner_literal is unassigned
    unit_clause_stack_push(clause, partner_literal);
  } else if (assignment_map_is_unsat(partner_literal)) {
    // Clause is conflicting -> resolve
    log_debug("Clause %lu is conflicting", clause);
    conflict_present = true;
    // get variable from assignment stack
    // AssignmentStackItem* assignment = assignment_stack_pop();
  }
}

void watched_literals_check(const literal watched_literal) {
  YASER_ASSERT(watched_literal, !=, INVALID_LITERAL);
  YASER_ASSERT(watched_literal, !=, CLAUSE_ALREADY_SAT);
  YASER_ASSERT(watched_literal, !=, NOT_FOUND_IN_CLAUSE);

  // Find all clauses that contain the negated watched literal (i.e., formula[watched_literal])
  literal negated_watched_literal = -watched_literal;
  ClauseArray clause_array        = watched_literal_clause_map_get(negated_watched_literal);
  YASER_ASSERT(clause_array, !=, NULL);

#pragma GCC diagnostic push
#pragma GCC diagnostic ignored "-Wsign-conversion"
  // Iterate over all clauses that contain the negated watched literal, but only "check" them if they are not
  // satisfied yet
  long* clause = utarray_front(clause_array);
  for (; clause != NULL; clause = utarray_next(clause_array, (int*) clause)) {
    if (!sat_clause_set_contains(*clause)) {
      check_watched_literal_partner(*clause, negated_watched_literal);
    }
  }
#pragma GCC diagnostic pop
}
