//
// Created with <3 by marcluque, January 2022
//

#include "clause_literal_map.h"
#include "formula.h"
#include <assert.h>

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
    ClauseLiteralItem* item   = malloc(sizeof(ClauseLiteralItem));
    item->clause              = clause;
    item->watched_literals[0] = watched_literals[0];
    item->watched_literals[1] = watched_literals[1];
    HASH_ADD(hh, clause_map, clause, sizeof(clause_index), item);
}

void clause_literal_map_delete(const clause_index clause) {
    ClauseLiteralItem* item;
    HASH_FIND(hh, clause_map, &clause, sizeof(clause_index), item);
    assert(item != NULL);
    HASH_DEL(clause_map, item);
    free(item);
}

ATTR_PURE formula_pos clause_literal_map_find(const clause_index clause, const formula_pos literal_pos) {
    ClauseLiteralItem* item;
    HASH_FIND(hh, clause_map, &clause, sizeof(clause_index), item);
    return item == NULL                               ? NOT_FOUND
                                                      : item->watched_literals[0] == literal_pos ? item->watched_literals[1]
                                                                                                 : item->watched_literals[0];
}
