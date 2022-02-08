//
// Created with <3 by marcluque, February 2022
//

#include <stdbool.h>
#include "sat_clause_set.h"
#include "global/defines.h"
#include "global/formula.h"

// TODO: Maintain count of sat clauses to determine whether there's unsat clauses left
static clause_index clause_count;

bool sat_clause_set_contains(clause_index clause) {
  return true;
}

void sat_clause_set_add(clause_index clause) {

}

bool sat_clause_set_exists_unsat(void) {
  return clause_count != num_clauses;
}