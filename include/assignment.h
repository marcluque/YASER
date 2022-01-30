/** @file */

//
// Created with <3 by marcluque, June 2021
//

#ifndef YASER_ASSIGNMENT_H
#define YASER_ASSIGNMENT_H

#include "defines.h"
#include "external/uthash.h"
#include <stdbool.h>


//// Assignment Stack
/////////////////////
typedef struct {
    formula_pos literal_pos;
    value value; // 0 or 1
    bool satisfied;
    bool visited; // true <=> visited negated literal_pos
} Assignment;

void assignment_stack_init(size_t stack_size);

void assignment_stack_clear(void);

void assignment_stack_reset(void);

bool assignment_stack_empty(void);

bool assignment_stack_full(void);

void assignment_stack_push(formula_pos literal_pos, value v, bool visited);

Assignment* assignment_stack_pop(void);


//// Assignment Hash Map
////////////////////////
typedef struct {
    formula_pos literal_pos;
    value value;
    UT_hash_handle hh;
} AssignmentItem;

void assignment_map_add(formula_pos literal_pos, value v);

int assignment_map_get_value(formula_pos literal_pos);

void assignment_map_clear(void);


//// Satisfied Clauses Hash Set
///////////////////////////////
bool assignment_exists_unsat_clause(void);

void assignment_sat_clauses_add_clause(void);


//// Unit Clauses Stack
///////////////////////
void assignment_unit_clause_stack_init(size_t stack_size);

void assignment_unit_clause_stack_clear(void);

bool assignment_unit_clause_stack_empty(void);

void assignment_unit_clause_stack_push(formula_pos literal_pos);

formula_pos assignment_unit_clause_stack_pop(void);

#endif //YASER_ASSIGNMENT_H