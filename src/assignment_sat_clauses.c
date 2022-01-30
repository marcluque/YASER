//
// Created with <3 by marcluque, January 2022
//

#include "assignment_sat_clauses.h"
#include "formula.h"
#include <stddef.h>
#include <stdbool.h>

size_t sat_clause_set_count = 0;

bool assignment_exists_unsat_clause(void) {
    return sat_clause_set_count != num_clauses;
}

// TODO: Hash set necessary, or just counter?
void assignment_sat_clauses_add_clause(void) {
    ++sat_clause_set_count;
}
