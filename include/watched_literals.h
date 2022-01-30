//
// Created with <3 by marcluque, June 2021
//

#ifndef YASER_WATCHED_LITERALS_H
#define YASER_WATCHED_LITERALS_H

#include "global.h"
#include "formula.h"
#include "assignment.h"
#include "conflict_resolution.h"


//// Watched Literals Hash Map
//////////////////////////////
typedef struct {
    // Each watched literal has a corresponding clause. The clause is represented by clause_number
    size_t watched_literal;
    // ´clause_number´ is the index in the ´clauses´ array at which the clause's starting position is stored.
    // It is also the 'unique representation' of a clause.
    size_t clause_number;
    UT_hash_handle hh;
} Literal_Clause_Item;

void watched_literals_clear(void);


//// Clause Hash Map
////////////////////
typedef struct {
    // Each clause points to its two literals that are the watched literals.
    // ´clause_number´ is the index in the ´clauses´ array at which the clause's starting position is stored
    // It is also the 'unique representation' of a clause.
    size_t clause_number;
    // The array stores the two POSITIONS of the literals in the
    size_t watched_literals[2];
    UT_hash_handle hh;
} Clause_Literal_Item;

void clauses_clear(void);


//// Watched Literals
/////////////////////
void watched_literals_init(void);

void watched_literal_check(size_t literal_pos);

#endif //YASER_WATCHED_LITERALS_H
