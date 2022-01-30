/** @file */

//
// Created with <3 by marcluque, June 2021
//

#ifndef YASER_WATCHED_LITERALS_H
#define YASER_WATCHED_LITERALS_H

#include <stddef.h>
#include "external/uthash.h"
#include "defines.h"

//// Watched Literals Hash Map
//////////////////////////////
typedef struct {
    /**
     * Each watched l has a corresponding clause. The clause is represented by clause
     */
    formula_pos watched_literal;
    /**
     * ´clause´ is the index in the ´clauses´ array at which the clause's starting position is stored.
     * It is also the 'unique representation' of a clause.
     */
    clause_index clause;
    UT_hash_handle hh;
} LiteralClauseItem;

void watched_literals_clear(void);


//// Clause Hash Map
////////////////////
typedef struct {
    /**
     * Each clause points to its two literals that are the watched literals.
     * ´clause´ is the index in the ´clauses´ array at which the clause's starting position is stored
     * It is also the 'unique representation' of a clause.
     */
    clause_index clause;
    /**
     * The array stores the two POSITIONS of the literals in the formula
     */
    formula_pos watched_literals[2];
    UT_hash_handle hh;
} ClauseLiteralItem;

void clauses_clear(void);


//// Watched Literals
/////////////////////
void watched_literals_init(void);

void watched_literal_check(formula_pos literal_pos);

#endif // YASER_WATCHED_LITERALS_H
