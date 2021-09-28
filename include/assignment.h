//
// Created with <3 by marcluque, June 2021
//

#ifndef YASER_ASSIGNMENT_H
#define YASER_ASSIGNMENT_H

#include "global.h"
#include "formula.h"


//// Assignment Stack
/////////////////////
typedef struct {
    size_t literal_pos;
    int value; // 0 or 1
    bool satisfied;
    bool visited; // true <=> visited negated literal_pos
} Assignment;

void assignment_stack_init(size_t size);

void assignment_stack_clear();

void assignment_stack_reset();

bool assignment_stack_empty();

bool assignment_stack_full();

void assignment_stack_push(size_t literal_pos, int value, bool visited);

Assignment* assignment_stack_pop();


//// Assignment Hash Map
////////////////////////
typedef struct {
    size_t literal_pos;
    int value; // -1 = false, 1 = true
    UT_hash_handle hh;
} Assignment_Item;

void assignment_map_add(size_t literal_pos, int value);

void assignment_map_get_value(size_t literal_pos, size_t* restrict value);

void assignment_map_clear();


//// Satisfied Clauses Hash Set
///////////////////////////////
bool assignment_exists_unsat_clause();

void assignment_sat_clauses_add_clause();


//// Unit Clauses Stack
///////////////////////
void assignment_unit_clause_stack_init(size_t size);

void assignment_unit_clause_stack_clear();

bool assignment_unit_clause_stack_empty();

void assignment_unit_clause_stack_push(size_t literal_pos);

size_t assignment_unit_clause_stack_pop();

#endif //YASER_ASSIGNMENT_H