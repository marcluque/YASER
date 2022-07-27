//
// Created with <3 by marcluque, February 2022
//

#include "watched_literal_clause_map.h"
#include "global/yaser.h"
#include "global/formula.h"

static WatchedLiteralClauseItem* watched_literal_clause_map = NULL;
static UT_icd clause_index_icd                              = {sizeof(clause_index), NULL, NULL, NULL};

void watched_literal_clause_map_clear(void) {
  WatchedLiteralClauseItem* current;
  WatchedLiteralClauseItem* tmp;

  HASH_ITER(hh, watched_literal_clause_map, current, tmp) {
    HASH_DEL(watched_literal_clause_map, current);
    utarray_free(current->clauses);
    free(current);
  }
}

void watched_literal_clause_map_add(literal watched_literal, clause_index clause) {
  YASER_ASSERT(watched_literal, !=, INVALID_LITERAL);
  YASER_ASSERT(watched_literal, !=, NOT_FOUND_IN_CLAUSE);
  YASER_ASSERT(clause, <, NOT_FOUND);
  YASER_ASSERT(clause, <, num_literals);

  WatchedLiteralClauseItem* item;
  HASH_FIND(hh, watched_literal_clause_map, &watched_literal, sizeof(literal), item);
  if (item == NULL) {
    item = malloc(sizeof(WatchedLiteralClauseItem));
    YASER_CHECK_MALLOC(item);

    item->l = watched_literal;
    utarray_new(item->clauses, &clause_index_icd);
    utarray_push_back(item->clauses, &clause);

    HASH_ADD(hh, watched_literal_clause_map, l, sizeof(literal), item);
  } else {
    utarray_push_back(item->clauses, &clause);
  }
}

ClauseArray watched_literal_clause_map_get(literal watched_literal) {
  YASER_ASSERT(watched_literal, !=, INVALID_LITERAL);
  YASER_ASSERT(watched_literal, !=, NOT_FOUND_IN_CLAUSE);

  WatchedLiteralClauseItem* item;
  HASH_FIND(hh, watched_literal_clause_map, &watched_literal, sizeof(literal), item);

  return item != NULL ? item->clauses : NULL;
}
