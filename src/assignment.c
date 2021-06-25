//
// Created by marcluque on 20.06.2021.
//

#include "../include/assignment.h"

Assignment* assignment_stack;
size_t initial_size;
size_t stack_pointer;
void (*assignment_true_callback)(int);
Assignment_Item* assignment_map = NULL;
Clause_Item* sat_clause_map = NULL;
size_t sat_clause_map_count = 0;

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

void assignment_map_get_value(const int literal, int* restrict value) {
    Assignment_Item* assignment_item;
    HASH_FIND_INT(assignment_map, &literal, assignment_item);
    if (assignment_item == NULL) {
        value = NULL;
    } else {
        *value = assignment_item->value;
    }
}

void assignment_sat_clauses_add_clause(const size_t clause_number) {
    // TODO: Hash set necessary, or just counter?
    Clause_Item* item = malloc(sizeof(Clause_Item));
    item->clause = clause_number;
    HASH_ADD_INT(sat_clause_map, clause, item);
    ++sat_clause_map_count;
}

void assignment_sat_clauses_get_value() {

}