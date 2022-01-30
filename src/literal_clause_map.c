//
// Created with <3 by marcluque, January 2022
//

#include "literal_clause_map.h"
#include <assert.h>

static LiteralClauseItem* watched_literal_map = NULL;

void literal_clause_map_clear(void) {
    LiteralClauseItem* current;
    LiteralClauseItem* tmp;

    HASH_ITER(hh, watched_literal_map, current, tmp) {
        HASH_DEL(watched_literal_map, current);
        free(current);
    }
}

void literal_clause_map_add(const formula_pos literal_pos, const clause_index clause) {
    LiteralClauseItem* item = malloc(sizeof(LiteralClauseItem));
    item->watched_literal   = literal_pos;
    item->clause            = clause;
    HASH_ADD(hh, watched_literal_map, watched_literal, sizeof(formula_pos), item);
}

void literal_clause_map_delete(const formula_pos watched_literal_pos) {
    LiteralClauseItem* item;
    HASH_FIND(hh, watched_literal_map, &watched_literal_pos, sizeof(formula_pos), item);
    assert(item != NULL);
    HASH_DEL(watched_literal_map, item);
    free(item);
}

clause_index literal_clause_map_find(const formula_pos watched_literal_pos) {
    LiteralClauseItem* item;
    HASH_FIND(hh, watched_literal_map, &watched_literal_pos, sizeof(formula_pos), item);
    // HASH_FIND writes NULL into item if key wasn't found
    return item == NULL ? NOT_FOUND : item->clause;
}