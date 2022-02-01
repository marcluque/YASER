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
    clause_literal_map_clear();
    literal_clause_map_clear();

    // formula
    formula_clear();
}

int main(void) {
    dimacs_parse_file(NULL);
    watched_literals_init();
    dpll_register_assignment_callback(watched_literals_check);
    dimacs_parser_register_init_callback(init_callback);

    dpll();

    clean_up();

    return EXIT_SUCCESS;
}
