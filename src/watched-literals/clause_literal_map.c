//
// Created with <3 by marcluque, January 2022
//

#include "watched-literals/clause_literal_map.h"
#include "global/formula.h"
#include "global/yaser.h"
#include <assert.h>
#include <stdbool.h>

static ClauseLiteralItem* clause_map = NULL;

void clause_literal_map_clear(void) {
  ClauseLiteralItem* current;
  ClauseLiteralItem* tmp;

  HASH_ITER(hh, clause_map, current, tmp) {
    HASH_DEL(clause_map, current);
    // We don't need to free the watched literals array, since it allocated as part of the struct
    free(current);
  }
}

void clause_literal_map_add(const clause_index clause, const literal* const watched_literals) {
  YASER_ASSERT(clause, <, NOT_FOUND);
  YASER_ASSERT(clause, <, num_clauses);

  ClauseLiteralItem* item   = malloc(sizeof(ClauseLiteralItem));
  item->clause              = clause;
  item->watched_literals[0] = watched_literals[0];
  item->watched_literals[1] = watched_literals[1];
  HASH_ADD(hh, clause_map, clause, sizeof(clause_index), item);
}

literal* clause_literal_map_get(const clause_index clause) {
  assert(clause < NOT_FOUND);
  assert(clause < num_clauses);

  ClauseLiteralItem* item;
  HASH_FIND(hh, clause_map, &clause, sizeof(clause_index), item);
  YASER_ASSERT(item, !=, NULL);

  return item->watched_literals;
}
