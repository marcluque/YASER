//
// Created by marcluque on 20.06.2021.
//

#include "../include/watched_literals.h"

Literal_Clause_Item* watched_literal_map = NULL;
Clause_Literal_Item* clause_map = NULL;

static void add_watched_literal(const int literal, const size_t clause) {
    Literal_Clause_Item* item = malloc(sizeof(Literal_Clause_Item));
    item->watched_literal = literal;
    item->clause_number = clause;
    HASH_ADD_INT(watched_literal_map, watched_literal, item);
}

static Literal_Clause_Item* find_watched_literal_item(const int watched_literal) {
    Literal_Clause_Item* item;
    HASH_FIND_INT(watched_literal_map, &watched_literal, item);
    return item;
}

void delete_watched_literal(const int watched_literal) {
    Literal_Clause_Item* item = find_watched_literal_item(watched_literal);
    assert(item != NULL);
    HASH_DEL(watched_literal_map, item);
    free(item);
}

static void find_watched_literal_partner(const size_t clause_number, const int literal, int* restrict partner_literal) {
    Clause_Literal_Item* item;
    HASH_FIND_INT(clause_map, &clause_number, item);
    if (item == NULL) {
        partner_literal = NULL;
    } else {
        *partner_literal = item->watched_literals[0] == literal ? item->watched_literals[1] : item->watched_literals[0];
    }
}

static Literal_Clause_Item* find_clause_number(int watched_literal) {
    Literal_Clause_Item* item;
    HASH_FIND_INT(watched_literal_map, &watched_literal, item);
    // HASH_FIND_INT writes NULL into item if key wasn't found
    return item;
}

static size_t find_new_literal(size_t clause_number) {
    assert(clause_number <= num_clauses);

    for (int i = 0; i < clauses[clause_number + 1]; ++i) {
        int assignment;
        assignment_map_get_value(formula[clauses[clause_number] + i], &assignment);
        assert(&assignment != NULL);

        // TODO: Is this correct?
        if (assignment == 1 || assignment == 0) {
            return clauses[clause_number] + i;
        }
    }

    return -1;
}

void watched_literals_init() {
    for (int i = 0; i < num_clauses; ++i) {
        add_watched_literal(formula[clauses[i]], i);
        add_watched_literal(formula[clauses[i + 1]], i);
    }
}

void watched_literal_check(const int literal) {
    // Find clause of negated literal
    Literal_Clause_Item* item = find_clause_number(-literal);
    if (item == NULL) return;

    int partner_literal;
    find_watched_literal_partner(item->clause_number, literal, &partner_literal);
    assert(&partner_literal != NULL);

    int assignment_partner;
    assignment_map_get_value(partner_literal, &assignment_partner);
    assert(&assignment_partner != NULL);

    size_t new_literal_pos;
    if (assignment_partner == 1) {
        // clause satisfied
        assignment_sat_clauses_add_clause(item->clause_number);
    } else if ((new_literal_pos = find_new_literal(item->clause_number)) != -1) {
        // Update clause_map


        // Update watched_literal_map
        // literal == false, so remove it


    } else if (assignment_partner == -1) {

    } else if (assignment_partner == 0) {

    }

    //
}
