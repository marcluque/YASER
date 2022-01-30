//
// Created with <3 by marcluque, June 2021
//

#include "dimacs_parser.h"
#include "watched_literals.h"
#include "dpll.h"
#include "formula.h"
#include "assignment_stack.h"
#include "assignment_unit_clauses.h"
#include "assignment_map.h"

// #define NDEBUG

static void init_callback(const size_t init_num_variables, const size_t init_num_clauses) {
    formula_init(init_num_variables, init_num_clauses);
    assignment_stack_init(init_num_variables * 2);
    assignment_unit_clause_stack_init(init_num_clauses);
}

static void clean_up(void) {
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

int main(void) {
    dimacs_parse_file(NULL);
    watched_literals_init();
    dpll_register_assignment_callback(watched_literal_check);
    dimacs_parser_register_init_callback(init_callback);

    dpll();

    clean_up();

    return EXIT_SUCCESS;
}