//
// Created with <3 by marcluque, June 2021
//

#include "../include/dimacs_parser.h"
#include "../include/watched_literals.h"
#include "../include/dpll.h"

// #define NDEBUG

void init_callback(const size_t init_num_variables, const size_t init_num_clauses) {
    formula_init(init_num_variables, init_num_clauses);
    assignment_stack_init(init_num_variables * 2);
    assignment_unit_clause_stack_init(init_num_clauses);
}

void clean_up() {
    // assignment
    assignment_stack_clear();
    assignment_unit_clause_stack_clear();
    assignment_map_clear();

    // watched literals
    clauses_clear();
    watched_literals_clear();

    // formula
    formula_clear();
}

int main() {
    dimacs_parse_file(NULL);
    watched_literals_init();
    dpll_register_assignment_callback(watched_literal_check);
    dimacs_parser_register_init_callback(init_callback);

    dpll();

    clean_up();

    return EXIT_SUCCESS;
}