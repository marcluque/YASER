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
    int variable;
    int value; // 0 or 1
    bool satisfied;
    bool visited; // true <=> visited negated variable
} Assignment;

void assignment_stack_init(size_t size);

void assignment_stack_clear();

void assignment_stack_reset();

bool assignment_stack_full();

void assignment_stack_push(int variable, int value, bool visited);

Assignment* assignment_stack_pop();


//// Assignment Hash Map
////////////////////////
typedef struct {
    int literal;
    int value;
    UT_hash_handle hh;
} Assignment_Item;

void assignment_map_get_value(size_t literal_pos, size_t* restrict value);


//// Satisfied Clauses Hash Set
///////////////////////////////
typedef struct {
    size_t clause;
    UT_hash_handle hh;
} Clause_Item;

bool exists_unsat_clauses();

void assignment_sat_clauses_add_clause(size_t clause_number);

//// Unit Clauses Stack
///////////////////////
typedef struct {
    size_t literal_pos;
} Unit_Clause_Item;

void assignment_unit_clause_stack_init(size_t size);

void assignment_unit_clause_stack_clear();

bool assignment_unit_clause_stack_empty();

void assignment_unit_clause_stack_push(size_t literal_pos);

Unit_Clause_Item* assignment_unit_clause_stack_pop();


#endif //YASER_ASSIGNMENT_H
