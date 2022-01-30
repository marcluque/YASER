//
// Created with <3 by marcluque, June 2021
//

#include "clause_resolution.h"
#include "formula.h"

static Resolvent_Item* resolvent_variable_table = NULL;

static void resolvent_literal_table_add(const literal l) {
    Resolvent_Item* item;

    HASH_FIND(hh, resolvent_variable_table, &l, sizeof(literal), item);
    if (item == NULL) {
        item = (Resolvent_Item*) malloc(sizeof(Resolvent_Item));
        item->l = l;
        HASH_ADD(hh, resolvent_variable_table, l, sizeof(literal), item);
    }
}

static void resolvent_variable_table_clear(void) {
    Resolvent_Item* current_user;
    Resolvent_Item* tmp;
    HASH_ITER(hh, resolvent_variable_table, current_user, tmp) {
        HASH_DEL(resolvent_variable_table, current_user);
        free(current_user);
    }
}

int* build_resolvent(const clause_index clause_1, const clause_index clause_2, const literal l) {
    formula_pos end_clause_number_1 = clauses[clause_1 + 1];
    formula_pos end_clause_number_2 = clauses[clause_2 + 1];

    // Adding the variables into a hash table removes duplicate variables
    for (formula_pos i = clauses[clause_1], j = i; i < end_clause_number_1; ++i, ++j) {
        if (l == formula[i]) {
            --j;
        } else {
            resolvent_literal_table_add(l);
        }
    }

    for (formula_pos i = clauses[clause_2], j = i; i < end_clause_number_2; ++i, ++j) {
        if (l == formula[i]) {
            --j;
        } else {
            resolvent_literal_table_add(l);
        }
    }

    size_t counter = 0;
    int* resolvent = (int*) malloc(HASH_COUNT(resolvent_variable_table) * sizeof(int));
    for (Resolvent_Item* item = resolvent_variable_table; item != NULL; item = (Resolvent_Item*) (item->hh.next)) {
        resolvent[counter] = item->l;
        ++counter;
    }

    resolvent_variable_table_clear();

    return resolvent;
}