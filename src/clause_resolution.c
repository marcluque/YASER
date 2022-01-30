//
// Created with <3 by marcluque, June 2021
//

#include "../include/clause_resolution.h"

static Resolvent_Item* resolvent_variable_table = NULL;

static void resolvent_literal_table_add(const literal literal) {
    Resolvent_Item* item;

    HASH_FIND(hh, resolvent_variable_table, &literal, sizeof(literal), item);
    if (item == NULL) {
        item = (Resolvent_Item*) malloc(sizeof(Resolvent_Item));
        item->l = literal;
        HASH_ADD(hh, resolvent_variable_table, literal, sizeof(literal), item);
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

int* build_resolvent(const size_t clause_number_1, const size_t clause_number_2, const Literal literal) {
    size_t end_clause_number_1 = clauses[clause_number_1 + 1];
    size_t end_clause_number_2 = clauses[clause_number_2 + 1];

    // Adding the variables into a hash table removes duplicate variables
    for (size_t i = clauses[clause_number_1], j = i; i < end_clause_number_1; ++i, ++j) {
        if (literal == formula[i]) --j;
        else resolvent_literal_table_add(literal);
    }

    for (size_t i = clauses[clause_number_2], j = i; i < end_clause_number_2; ++i, ++j) {
        if (literal == formula[i]) --j;
        else resolvent_literal_table_add(literal);
    }

    size_t counter = 0;
    int* resolvent = (int*) malloc(HASH_COUNT(resolvent_variable_table) * sizeof(int));
    for (Resolvent_Item* item = resolvent_variable_table; item != NULL; item = (Resolvent_Item*) (item->hh.next))
        resolvent[counter++] = item->variable;

    resolvent_variable_table_clear();

    return resolvent;
}