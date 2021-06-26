//
// Created by marcluque on 20.06.2021.
//

#include "../include/assignment.h"

void (*assignment_true_callback)(int);

//// Assignment Stack
/////////////////////
Assignment* assignment_stack;
size_t assignment_stack_initial_size;
size_t assignment_sp;

void assignment_stack_init(const size_t size) {
    assignment_stack_initial_size = size;
    assignment_stack = malloc(sizeof(Assignment) * size);
    assignment_sp = 0;
}

void assignment_stack_clear() {
    free(assignment_stack);
}

void assignment_stack_reset() {
    assignment_sp = 0;
}

bool assignment_stack_full() {
    return assignment_sp == assignment_stack_initial_size;
}

void assignment_stack_push(const int variable, const int value, const bool visited) {
    assert(!assignment_stack_full());

    assignment_stack[assignment_sp].variable = variable;
    assignment_stack[assignment_sp].value = value;
    assignment_stack[assignment_sp].satisfied = (variable > 0 && value == 1) || (variable < 0 && value == 0);
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

void assignment_map_get_value(const size_t literal_pos, size_t* restrict value) {
    Assignment_Item* assignment_item;
    HASH_FIND_INT(assignment_map, &literal_pos, assignment_item);
    if (assignment_item == NULL) {
        value = NULL;
    } else {
        *value = assignment_item->value;
    }
}


//// Satisfied Clauses Hash Set
///////////////////////////////
Clause_Item* sat_clause_set = NULL;
size_t sat_clause_set_count = 0;

void assignment_sat_clauses_add_clause(const size_t clause_number) {
    // TODO: Hash set necessary, or just counter?
    Clause_Item* item = malloc(sizeof(Clause_Item));
    item->clause = clause_number;
    HASH_ADD_INT(sat_clause_set, clause, item);
    ++sat_clause_set_count;
}

void assignment_sat_clauses_get_value() {

}


//// Unit Clauses Stack
///////////////////////
size_t* unit_clause_stack;
size_t unit_clause_stack_initial_size;
size_t unit_clause_sp;

void assignment_unit_clause_stack_init(size_t size) {
    unit_clause_stack_initial_size = size;
    unit_clause_stack = malloc(sizeof(size_t) * size);
    unit_clause_sp = 0;
}

void assignment_unit_clause_stack_clear() {
    free(unit_clause_stack);
}

bool assignment_unit_clause_stack_empty() {
    return unit_clause_sp == 0;
}

void assignment_unit_clause_stack_push(size_t clause_number) {
    assert(unit_clause_sp != unit_clause_stack_initial_size);

    unit_clause_stack[unit_clause_sp] = clause_number;
    ++unit_clause_sp;
}

size_t assignment_unit_clause_stack_pop() {
    assert(unit_clause_sp > 0);

    return unit_clause_stack[--unit_clause_sp];
}