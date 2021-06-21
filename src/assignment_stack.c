//
// Created by marcluque on 20.06.2021.
//

#include "../include/assignment_stack.h"

Assignment* assignment_stack;
size_t initial_size;
size_t stack_pointer;
void (*assignment_true_callback)(int);

void assignment_stack_init(const size_t size) {
    initial_size = size;
    assignment_stack = malloc(sizeof(Assignment) * size);
    stack_pointer = 0;
}

void assignment_stack_clear() {
    free(assignment_stack);
}

void assignment_stack_reset() {
    stack_pointer = 0;
}

bool assignment_stack_full() {
    return stack_pointer == initial_size;
}

void assignment_stack_push(const int variable, const int value, const bool visited) {
    assert(!assignment_stack_full());

    assignment_stack[stack_pointer].variable = variable;
    assignment_stack[stack_pointer].value = value;
    assignment_stack[stack_pointer].visited = visited;
    ++stack_pointer;
}

Assignment* assignment_stack_pop() {
    assert(stack_pointer > 0);

    return &(assignment_stack[--stack_pointer]);
}