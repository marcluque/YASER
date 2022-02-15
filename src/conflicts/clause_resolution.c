//
// Created with <3 by marcluque, June 2021
//

#include "conflicts/clause_resolution.h"
#include "global/formula.h"
#include "global/yaser.h"

typedef struct {
  literal l;
  UT_hash_handle hh;
} ResolventItem;

static ResolventItem* resolvent_variable_table = NULL;

static void resolvent_literal_table_add(const literal l) {
  ResolventItem* item;
  HASH_FIND(hh, resolvent_variable_table, &l, sizeof(literal), item);

  if (item == NULL) {
    item    = (ResolventItem*) malloc(sizeof(ResolventItem));
    item->l = l;
    HASH_ADD(hh, resolvent_variable_table, l, sizeof(literal), item);
  }
}

static void resolvent_variable_table_clear(void) {
  ResolventItem* current_user;
  ResolventItem* tmp;
  HASH_ITER(hh, resolvent_variable_table, current_user, tmp) {
    HASH_DEL(resolvent_variable_table, current_user);
    free(current_user);
  }
}

literal* clause_resolution_build_resolvent(const clause_index clause_1, const clause_index clause_2, const literal l) {
#if defined(YASER_DEBUG)
  // Check that literal is included in both clauses
  int literal_counter = 0;
  ITERATE_CLAUSE(clause_1) {
    if (l == formula[i]) {
      ++literal_counter;
    }
  }

  ITERATE_CLAUSE(clause_2) {
    if (l == formula[i]) {
      ++literal_counter;
    }
  }

  YASER_ASSERT(literal_counter, ==, 2);
#endif
  
  // Adding the variables into a hash table removes duplicate variables
  ITERATE_CLAUSE(clause_1) {
    if (l != formula[i]) {
      resolvent_literal_table_add(l);
    }
  }

  ITERATE_CLAUSE(clause_2) {
    if (l != formula[i]) {
      resolvent_literal_table_add(l);
    }
  }

  size_t num_resolvent_literals = HASH_COUNT(resolvent_variable_table);
  YASER_ASSERT(num_resolvent_literals, !=, 0);

  literal* resolvent = (literal*) malloc(num_resolvent_literals * sizeof(int));
  YASER_CHECK_MALLOC(resolvent);

  for (ResolventItem* item = resolvent_variable_table; item != NULL; item = (ResolventItem*) (item->hh.next)) {
    resolvent[literal_counter] = item->l;
    ++literal_counter;
  }

  resolvent_variable_table_clear();

  return resolvent;
}
