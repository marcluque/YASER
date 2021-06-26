//
// Created with <3 by marcluque, June 2021
//

#include "../include/dimacs_parser.h"
#include "../include/watched_literals.h"
#include "../include/dpll.h"

// #define NDEBUG

int main() {
    dimacs_parse_file(NULL);
    watched_literals_init();
    dpll_register_assignment_callback(watched_literal_check);

    // assignment
    assignment_stack_clear();
    assignment_unit_clause_stack_clear();
    assignment_map_clear();

    // watched literals
    clauses_clear();
    watched_literals_clear();

    // formula
    formula_clear();
    return EXIT_SUCCESS;
}