//
// Created with <3 by marcluque, January 2022
//

#include "watched-literals/clause_literal_map.h"
#include "global/formula.h"
#include <assert.h>
#include <stdbool.h>

static ClauseLiteralItem* clause_map = NULL;

void clause_literal_map_clear(void) {
  ClauseLiteralItem* current;
  ClauseLiteralItem* tmp;

  HASH_ITER(hh, clause_map, current, tmp) {
    HASH_DEL(clause_map, current);
    free(current);
  }
}

void clause_literal_map_add(const clause_index clause, const formula_pos* const watched_literals) {
  assert(watched_literals[0] < NOT_FOUND);
  assert(watched_literals[0] < num_literals);
  assert(watched_literals[1] < NOT_FOUND);
  assert(watched_literals[1] < num_literals);
  assert(clause < NOT_FOUND);
  assert(clause < num_clauses);

  ClauseLiteralItem* item   = malloc(sizeof(ClauseLiteralItem));
  item->clause              = clause;
  item->watched_literals[0] = watched_literals[0];
  item->watched_literals[1] = watched_literals[1];
  HASH_ADD(hh, clause_map, clause, sizeof(clause_index), item);
}

void clause_literal_map_delete(const clause_index clause) {
  assert(clause < NOT_FOUND);
  assert(clause < num_clauses);

  ClauseLiteralItem* item;
  HASH_FIND(hh, clause_map, &clause, sizeof(clause_index), item);
  assert(item != NULL);
  HASH_DEL(clause_map, item);
  free(item);
}

ATTR_PURE formula_pos clause_literal_map_find(const clause_index clause, const formula_pos literal_pos) {
  assert(literal_pos < NOT_FOUND);
  assert(literal_pos < num_literals);
  assert(clause < NOT_FOUND);
  assert(clause < num_clauses);

  ClauseLiteralItem* item;
  HASH_FIND(hh, clause_map, &clause, sizeof(clause_index), item);

  bool is_partner_present     = item == NULL;
  formula_pos partner_literal = item->watched_literals[0] == literal_pos ? item->watched_literals[1]
                                                                         : item->watched_literals[0];
  return is_partner_present ? NOT_FOUND : partner_literal;
}
