//
// Created with <3 by marcluque, June 2021
//

#include "../include/assignment.h"

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

bool exists_unsat_clauses() {
    return sat_clause_set_count != num_clauses;
}

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
Unit_Clause_Item* unit_clause_stack;
size_t unit_clause_stack_initial_size;
size_t unit_clause_sp;

void assignment_unit_clause_stack_init(size_t size) {
    unit_clause_stack_initial_size = size;
    unit_clause_stack = malloc(sizeof(Unit_Clause_Item) * size);
    unit_clause_sp = 0;
}

void assignment_unit_clause_stack_clear() {
    free(unit_clause_stack);
}

bool assignment_unit_clause_stack_empty() {
    return unit_clause_sp == 0;
}

void assignment_unit_clause_stack_push(const size_t literal_pos) {
    assert(unit_clause_sp != unit_clause_stack_initial_size);

    unit_clause_stack[unit_clause_sp].literal_pos = literal_pos;
    ++unit_clause_sp;
}

Unit_Clause_Item* assignment_unit_clause_stack_pop() {
    assert(unit_clause_sp > 0);

    return &(unit_clause_stack[--unit_clause_sp]);
}