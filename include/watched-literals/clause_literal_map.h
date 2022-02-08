/** @file */

//
// Created with <3 by marcluque, January 2022
//

#ifndef YASER_CLAUSE_LITERAL_MAP_H
#define YASER_CLAUSE_LITERAL_MAP_H

#include "global/defines.h"
#include "uthash.h"
#include "global/attributes.h"

typedef struct {
  /**
   * Each clause points to its two literals that are the watched literals.
   * ´clause´ is the index in the ´clauses´ array at which the clause's starting position is stored
   * It is also the 'unique representation' of a clause.
   */
  clause_index clause;

  /**
   * The array stores the two watched literals
   */
  literal watched_literals[2];

  /**
   *
   */
  UT_hash_handle hh;
} ClauseLiteralItem;

void clause_literal_map_clear(void);

ATTR_NON_NULL void clause_literal_map_add(clause_index clause, const literal* watched_literals);

ATTR_PURE literal* clause_literal_map_get(clause_index clause);

#endif // YASER_CLAUSE_LITERAL_MAP_H
