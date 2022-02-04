/** @file */

//
// Created with <3 by marcluque, January 2022
//

#ifndef YASER_LITERAL_CLAUSE_MAP_H
#define YASER_LITERAL_CLAUSE_MAP_H

#include "global/defines.h"
#include "uthash.h"
#include "global/attributes.h"

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

void literal_clause_map_clear(void);

void literal_clause_map_add(formula_pos literal_pos, clause_index clause);

void literal_clause_map_delete(formula_pos watched_literal_pos);

/**
 *
 *
 * @param watched_literal_pos
 * @return Can't be const.
 */
ATTR_PURE ATTR_NON_NULL clause_index literal_clause_map_find(formula_pos watched_literal_pos);

#endif // YASER_LITERAL_CLAUSE_MAP_H
