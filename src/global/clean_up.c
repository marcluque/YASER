//
// Created with <3 by marcluque, February 2022
//

#include "global/cleanup.h"
#include "assignments/assignment_stack.h"
#include "assignments/assignment_unit_clauses.h"
#include "assignments/assignment_map.h"
#include "watched-literals/clause_literal_map.h"
#include "watched-literals/literal_clause_map.h"
#include "global/formula.h"
#include <stdio.h>

void cleanup_all(void) {
    // Make sure all messages get out
    fflush(stdout);

    // NOTE: Below cleanups are only done if something has been allocated

    // assignment
    assignment_stack_clear();
    assignment_unit_clause_stack_clear();
    assignment_map_clear();

    // watched literals
    clause_literal_map_clear();
    literal_clause_map_clear();

    // formula
    formula_clear();
}