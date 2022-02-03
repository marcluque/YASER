//
// Created with <3 by marcluque, June 2021
//

#include "parsing/dimacs_parser.h"
#include "watched-literals/watched_literals.h"
#include "conflicts/dpll.h"
#include "global/formula.h"
#include "assignments/assignment_stack.h"
#include "assignments/assignment_unit_clauses.h"
#include "assignments/assignment_map.h"
#include "watched-literals/clause_literal_map.h"
#include "watched-literals/literal_clause_map.h"
#include <stdio.h>

static void clean_up(void) {
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

int main(void) {
    dimacs_parse_file("NULL");
    watched_literals_init();
    dpll_register_assignment_callback(watched_literals_check);

    dpll();

    clean_up();

    return EXIT_SUCCESS;
}
