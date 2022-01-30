/** @file */

//
// Created with <3 by marcluque, January 2022
//

#ifndef YASER_CLAUSE_LITERAL_MAP_H
#define YASER_CLAUSE_LITERAL_MAP_H

#include "defines.h"
#include "external/uthash.h"
#include "attributes.h"

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

void clause_literal_map_clear(void);

void clause_literal_map_add(clause_index clause, const formula_pos* watched_literals);

void clause_literal_map_delete(clause_index clause);

ATTR_PURE formula_pos clause_literal_map_find(clause_index clause, formula_pos literal_pos);

#endif //YASER_CLAUSE_LITERAL_MAP_H
