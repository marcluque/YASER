//
// Created with <3 by marcluque, June 2021
//

#include "assignment.h"
#include "formula.h"
#include <assert.h>
#include <sys/types.h>

//// Assignment Stack
/////////////////////
Assignment* assignment_stack;
size_t assignment_stack_initial_size;
ssize_t assignment_sp;

void assignment_stack_init(const size_t stack_size) {
    assignment_stack_initial_size = stack_size;
    assignment_stack = malloc(sizeof(Assignment) * stack_size);
    assignment_sp = 0;
}

void assignment_stack_clear(void) {
    free(assignment_stack);
}

void assignment_stack_reset(void) {
    assert(assignment_sp > 0);
    assert((size_t) assignment_sp < assignment_stack_initial_size);

    assignment_sp = 0;
}

bool assignment_stack_empty(void) {
    assert(assignment_sp > 0);
    assert((size_t) assignment_sp < assignment_stack_initial_size);

    return assignment_sp == 0;
}

bool assignment_stack_full(void) {
    assert(assignment_sp > 0);
    assert((size_t) assignment_sp < assignment_stack_initial_size);

    return (size_t)  assignment_sp == assignment_stack_initial_size;
}

void assignment_stack_push(const formula_pos literal_pos, const value v, const bool visited) {
    assert(!assignment_stack_full());
    assert(literal_pos < num_literals);

    assignment_stack[assignment_sp].literal_pos = literal_pos;
    assignment_stack[assignment_sp].value = v;
    assignment_stack[assignment_sp].satisfied = (formula[literal_pos] > 0 && v == 1) || (formula[literal_pos] < 0 && v == 0);
    assignment_stack[assignment_sp].visited = visited;
    ++assignment_sp;
}

Assignment* assignment_stack_pop(void) {
    assert(assignment_sp > 0);

    return &(assignment_stack[--assignment_sp]);
}


//// Assignment Hash Map
////////////////////////
AssignmentItem* assignment_map = NULL;

void assignment_map_add(const formula_pos literal_pos, const value v) {
    assert(literal_pos < num_literals);

    AssignmentItem* item = malloc(sizeof(AssignmentItem));
    item->literal_pos = literal_pos;
    item->value = v;
    HASH_ADD(hh, assignment_map, literal_pos, sizeof(size_t), item);
}

value assignment_map_get_value(const formula_pos literal_pos) {
    assert(literal_pos < num_literals);

    AssignmentItem* assignment_item;
    HASH_FIND(hh, assignment_map, &literal_pos, sizeof(formula_pos), assignment_item);
    if (assignment_item == NULL) {
        return VALUE_INVALID;
    } else {
        return assignment_item->value;
    }
}

void assignment_map_clear(void) {
    AssignmentItem* current;
    AssignmentItem* tmp;

    HASH_ITER(hh, assignment_map, current, tmp) {
        HASH_DEL(assignment_map, current);
        free(current);
    }
}


//// Satisfied Clauses Hash Set
///////////////////////////////
size_t sat_clause_set_count = 0;

bool assignment_exists_unsat_clause(void) {
    return sat_clause_set_count != num_clauses;
}

// TODO: Hash set necessary, or just counter?
void assignment_sat_clauses_add_clause(void) {
    ++sat_clause_set_count;
}


//// Unit Clauses Stack
///////////////////////
formula_pos* unit_clause_stack;
size_t unit_clause_stack_initial_size;
ssize_t unit_clause_sp;

void assignment_unit_clause_stack_init(const size_t stack_size) {
    unit_clause_stack_initial_size = stack_size;
    unit_clause_stack = malloc(sizeof(formula_pos) * stack_size);
    unit_clause_sp = 0;
}

void assignment_unit_clause_stack_clear(void) {
    free(unit_clause_stack);
}

bool assignment_unit_clause_stack_empty(void) {
    assert(unit_clause_sp > 0);
    assert((size_t) unit_clause_sp < unit_clause_stack_initial_size);

    return unit_clause_sp == 0;
}

void assignment_unit_clause_stack_push(const formula_pos literal_pos) {
    assert(unit_clause_sp > 0);
    assert((size_t) unit_clause_sp < unit_clause_stack_initial_size);
    assert(literal_pos < num_literals);

    unit_clause_stack[unit_clause_sp++] = literal_pos;
}

formula_pos assignment_unit_clause_stack_pop(void) {
    assert(unit_clause_sp > 0);
    assert((size_t) unit_clause_sp < unit_clause_stack_initial_size);

    return unit_clause_stack[--unit_clause_sp];
}