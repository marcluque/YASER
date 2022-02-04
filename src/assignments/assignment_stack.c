//
// Created with <3 by marcluque, January 2022
//

#include "assignments/assignment_stack.h"
#include "global/formula.h"
#include <sys/types.h>
#include <malloc.h>
#include <assert.h>

static AssignmentStackItem* assignment_stack = NULL;
static size_t assignment_stack_initial_size  = 0;
static ssize_t assignment_sp                 = -1;

void assignment_stack_init(const size_t stack_size) {
    assignment_stack_initial_size = stack_size;
    assignment_stack              = malloc(sizeof(AssignmentStackItem) * stack_size);
    assert(assignment_stack != NULL);
    assignment_sp = 0;
}

void assignment_stack_clear(void) {
    if (assignment_stack != NULL) {
        free(assignment_stack);
    }
}

void assignment_stack_reset(void) {
    assignment_sp = 0;
}

bool assignment_stack_empty(void) {
    return assignment_sp == 0;
}

bool assignment_stack_full(void) {
    return (size_t) assignment_sp == assignment_stack_initial_size;
}

void assignment_stack_push(const formula_pos literal_pos, const value v, const bool visited) {
    assert(assignment_stack != NULL);
    assert(!assignment_stack_full());
    assert(literal_pos < NOT_FOUND);
    assert(literal_pos < num_literals);
    assert(v != VALUE_INVALID);

    assignment_stack[assignment_sp].literal_pos = literal_pos;
    assignment_stack[assignment_sp].value       = v;
    assignment_stack[assignment_sp].satisfied =
        (formula[literal_pos] > 0 && v == 1) || (formula[literal_pos] < 0 && v == 0);
    assignment_stack[assignment_sp].visited = visited;
    ++assignment_sp;
}

AssignmentStackItem* assignment_stack_pop(void) {
    assert(assignment_stack != NULL);
    assert(!assignment_stack_empty());

    return &(assignment_stack[--assignment_sp]);
}
