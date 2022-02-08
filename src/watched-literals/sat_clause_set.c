//
// Created with <3 by marcluque, February 2022
//

#include <stdbool.h>
#include "sat_clause_set.h"
#include "global/defines.h"
#include "global/formula.h"
#include "uthash.h"

static SatClauseItem* sat_clause_set = NULL;

// TODO: Maintain count of sat clauses to determine whether there's unsat clauses left
static clause_index clause_count;

bool sat_clause_set_contains(clause_index clause) {
  SatClauseItem* item;
  HASH_FIND(hh, sat_clause_set, &clause, sizeof(clause_index), item);

  return item != NULL;
}

void sat_clause_set_add(clause_index clause) {
  // TODO: Make sure that clause is not already in set!!

  clause_count++;
}

bool sat_clause_set_exists_unsat(void) {
  return clause_count != num_clauses;
}