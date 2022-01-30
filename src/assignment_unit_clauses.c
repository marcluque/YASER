//
// Created with <3 by marcluque, January 2022
//

#include "assignment_unit_clauses.h"
#include "formula.h"
#include <sys/types.h>
#include <malloc.h>
#include <assert.h>

static formula_pos* unit_clause_stack = NULL;
static size_t unit_clause_stack_initial_size = 0;
static ssize_t unit_clause_sp = -1;

void assignment_unit_clause_stack_init(const size_t stack_size) {
    unit_clause_stack_initial_size = stack_size;
    unit_clause_stack = malloc(sizeof(formula_pos) * stack_size);
    assert(unit_clause_stack != NULL);
    unit_clause_sp = 0;
}

void assignment_unit_clause_stack_clear(void) {
    assert(unit_clause_stack != NULL);

    free(unit_clause_stack);
}

bool assignment_unit_clause_stack_empty(void) {
    assert(unit_clause_sp > 0);
    assert((size_t) unit_clause_sp < unit_clause_stack_initial_size);

    return unit_clause_sp == 0;
}

void assignment_unit_clause_stack_push(const formula_pos literal_pos) {
    assert(unit_clause_stack != NULL);
    assert(unit_clause_sp > 0);
    assert((size_t) unit_clause_sp < unit_clause_stack_initial_size);
    assert(literal_pos < num_literals);

    unit_clause_stack[unit_clause_sp++] = literal_pos;
}

formula_pos assignment_unit_clause_stack_pop(void) {
    assert(unit_clause_stack != NULL);
    assert(unit_clause_sp > 0);
    assert((size_t) unit_clause_sp < unit_clause_stack_initial_size);

    return unit_clause_stack[--unit_clause_sp];
}
