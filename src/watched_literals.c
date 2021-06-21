//
// Created by marcluque on 20.06.2021.
//

#include "../include/watched_literals.h"

static void map_add_watched_literal(const int literal, const size_t clause) {
    Watched_Literal_Item* item = malloc(sizeof(Watched_Literal_Item));
    item->watched_literal = literal;
    item->clause_number = clause;
    HASH_ADD_INT(watched_literal_map, watched_literal, item);
}

static Watched_Literal_Item* find_clause_number(int watched_literal) {
    Watched_Literal_Item* item;
    HASH_FIND_INT(watched_literal_map, &watched_literal, item);
    // HASH_FIND_INT writes NULL into item, if key wasn't found
    return item;
}

static size_t find_new_literal(int clause_number) {
    assert(clause_number <= num_clauses);

    for (int i = 0; i < clauses[clause_number + 1]; ++i) {
        int assignment = assignment_get(formula[clauses[clause_number] + i]);
        // TODO: Is this correct?
        if (assignment == 1 || assignment == 0) {
            return clauses[clause_number] + i;
        }
    }

    return -1;
}

void watched_literals_init() {
    for (int i = 0; i < num_clauses; ++i) {
        map_add_watched_literal(formula[clauses[i]], i);
        map_add_watched_literal(formula[clauses[i + 1]], i);
    }
}

void check_watched_literal(const int literal) {
    // Find clause of negated literal
    Watched_Literal_Item* item = find_clause_number(-literal);
    if (item == NULL) return;

    int partner_literal = find_watched_literals(item->clause_number);
    int assignment_partner = assignment_get(partner_literal);

    size_t new_literal_pos;
    if (assignment_partner == 1) {
        // clause satisfied
    } else if ((new_literal_pos = find_new_literal(item->clause_number)) != -1) {
        // Update clause_map
        // Update watched_literal_map
    } else if (assignment_partner == -1) {

    } else if (assignment_partner == 0) {

    }

    //
}
