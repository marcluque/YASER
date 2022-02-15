//
// Created with <3 by marcluque, February 2022
//

#ifndef YASER_WATCHED_LITERAL_CLAUSE_MAP_H
#define YASER_WATCHED_LITERAL_CLAUSE_MAP_H

#include "global/defines.h"
#include "uthash.h"

typedef UT_array* ClauseArray;

typedef struct {
  /**
   *
   */
  literal l;

  /**
   * The array stores the clauses that literal l is included in
   */
  ClauseArray clauses;

  /**
   *
   */
  UT_hash_handle hh;
} WatchedLiteralClauseItem;

void watched_literal_clause_map_clear(void);

void watched_literal_clause_map_add(literal watched_literal, clause_index clause);

ATTR_PURE ClauseArray watched_literal_clause_map_get(literal watched_literal);

#endif // YASER_WATCHED_LITERAL_CLAUSE_MAP_H
