//
// Created with <3 by marcluque, June 2021
//

#include "../include/dimacs_parser.h"
#include "../include/watched_literals.h"

// #define NDEBUG

int main() {
    dimacs_parse_file(NULL);
    watched_literals_init();

    assignment_stack_clear();
    assignment_unit_clause_stack_clear();
    formula_clear();
    return EXIT_SUCCESS;
}