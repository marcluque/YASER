//
// Created with <3 by marcluque, June 2021
//

#include "../include/assignment.h"


//// Assignment Stack
/////////////////////
Assignment* assignment_stack;
size_t assignment_stack_initial_size;
ssize_t assignment_sp;

void assignment_stack_init(const size_t size) {
    assignment_stack_initial_size = size;
    assignment_stack = malloc(sizeof(Assignment) * size);
    assignment_sp = 0;
}

void assignment_stack_clear() {
    free(assignment_stack);
}

void assignment_stack_reset() {
    assert(assignment_sp > 0);
    assert(assignment_sp < assignment_stack_initial_size);

    assignment_sp = 0;
}

bool assignment_stack_full() {
    assert(assignment_sp > 0);
    assert(assignment_sp < assignment_stack_initial_size);

    return assignment_sp == assignment_stack_initial_size;
}

void assignment_stack_push(const size_t literal_pos, const int value, const bool visited) {
    assert(!assignment_stack_full());
    assert(literal_pos < num_variables);
    assert(value == -1 || value == 1);

    assignment_stack[assignment_sp].literal_pos = literal_pos;
    assignment_stack[assignment_sp].value = value;
    assignment_stack[assignment_sp].satisfied = (formula[literal_pos] > 0 && value == 1)
                                                || (formula[literal_pos] < 0 && value == 0);
    assignment_stack[assignment_sp].visited = visited;
    ++assignment_sp;
}

Assignment* assignment_stack_pop() {
    assert(assignment_sp > 0);

    return &(assignment_stack[--assignment_sp]);
}


//// Assignment Hash Map
////////////////////////
Assignment_Item* assignment_map = NULL;

void assignment_map_add(const size_t literal_pos, const int value) {
    assert(value == 1 || value == -1);
    assert(literal_pos < num_variables);

    Assignment_Item* item = malloc(sizeof(Assignment_Item));
    item->literal_pos = literal_pos;
    item->value = value;
    HASH_ADD(hh, assignment_map, literal_pos, sizeof(size_t), item);
}

void assignment_map_get_value(const size_t literal_pos, size_t* restrict value) {
    assert(literal_pos < num_variables);

    Assignment_Item* assignment_item;
    HASH_FIND(hh, assignment_map, &literal_pos, sizeof(size_t), assignment_item);
    if (assignment_item == NULL) {
        value = NULL;
    } else {
        *value = assignment_item->value;
        assert(*value == -1 || *value == 1);
    }
}

void assignment_map_clear() {
    Assignment_Item* current;
    Assignment_Item* tmp;

    HASH_ITER(hh, assignment_map, current, tmp) {
        HASH_DEL(assignment_map, current);
        free(current);
    }
}


//// Satisfied Clauses Hash Set
///////////////////////////////
size_t sat_clause_set_count = 0;

bool exists_unsat_clauses() {
    return sat_clause_set_count != num_clauses;
}

// TODO: Hash set necessary, or just counter?
void assignment_sat_clauses_add_clause() {
    ++sat_clause_set_count;
}


//// Unit Clauses Stack
///////////////////////
size_t* unit_clause_stack;
size_t unit_clause_stack_initial_size;
ssize_t unit_clause_sp;

void assignment_unit_clause_stack_init(const size_t size) {
    unit_clause_stack_initial_size = size;
    unit_clause_stack = malloc(sizeof(size_t) * size);
    unit_clause_sp = 0;
}

void assignment_unit_clause_stack_clear() {
    free(unit_clause_stack);
}

bool assignment_unit_clause_stack_empty() {
    assert(unit_clause_sp > 0);
    assert(unit_clause_sp < unit_clause_stack_initial_size);

    return unit_clause_sp == 0;
}

void assignment_unit_clause_stack_push(const size_t literal_pos) {
    assert(unit_clause_sp != unit_clause_stack_initial_size);
    assert(literal_pos < num_variables);

    unit_clause_stack[unit_clause_sp] = literal_pos;
    ++unit_clause_sp;
}

size_t assignment_unit_clause_stack_pop() {
    assert(unit_clause_sp > 0);

    return unit_clause_stack[--unit_clause_sp];
}