//
// Created with <3 by marcluque, February 2022
//

#include "watched_literal_clause_map.h"
#include "global/logging/yaser_assert.h"
#include "global/formula.h"

static WatchedLiteralClauseItem* watched_literal_clause_map = NULL;
static UT_icd clause_index_icd = {sizeof(clause_index), NULL, NULL, NULL };

void watched_literal_clause_map_clear(void) {
  WatchedLiteralClauseItem* current;
  WatchedLiteralClauseItem* tmp;

  HASH_ITER(hh, watched_literal_clause_map, current, tmp) {
    HASH_DEL(watched_literal_clause_map, current);
    utarray_free(current->clauses);
    free(current);
  }
}

void watched_literal_clause_map_add(literal watched_literal, clause_index clause_index) {
  // TODO: Sanity check watched_literal?
  YASER_ASSERT(clause_index, <, NOT_FOUND);
  YASER_ASSERT(clause_index, <, num_literals);

  WatchedLiteralClauseItem* item;
  HASH_FIND(hh, watched_literal_clause_map, &watched_literal, sizeof(literal), item);
  if (item == NULL) {
    item = malloc(sizeof(WatchedLiteralClauseItem));
    YASER_CHECK_MALLOC(item);
    item->l = watched_literal;
    utarray_new(item->clauses, &clause_index_icd);
    utarray_push_back(item->clauses, &clause_index);
    HASH_ADD(hh, watched_literal_clause_map, l, sizeof(literal), item);
  } else {
    utarray_push_back(item->clauses, &clause_index);
  }
}

ClauseArray watched_literal_clause_map_get(literal watched_literal) {
  // TODO: Sanity check watched_literal?
  WatchedLiteralClauseItem* item;
  HASH_FIND(hh, watched_literal_clause_map, &watched_literal, sizeof(literal), item);
  return item->clauses;
}