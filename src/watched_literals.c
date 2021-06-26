//
// Created by marcluque on 20.06.2021.
//

#include "../include/watched_literals.h"

Literal_Clause_Item* watched_literal_map = NULL;
Clause_Literal_Item* clause_map = NULL;

static void add_watched_literal(const size_t literal_pos, const size_t clause_number) {
    Literal_Clause_Item* item = malloc(sizeof(Literal_Clause_Item));
    item->watched_literal = literal_pos;
    item->clause_number = clause_number;
    HASH_ADD(hh, watched_literal_map, watched_literal, sizeof(size_t), item);
}

static void delete_watched_literal(const size_t watched_literal_pos) {
    Literal_Clause_Item* item;
    HASH_FIND(hh, watched_literal_map, &watched_literal_pos, sizeof(size_t), item);
    assert(item != NULL);
    HASH_DEL(watched_literal_map, item);
    free(item);
}

static Literal_Clause_Item* find_clause_number(const size_t watched_literal_pos) {
    Literal_Clause_Item* item;
    HASH_FIND(hh, watched_literal_map, &watched_literal_pos, sizeof(size_t), item);
    // HASH_FIND writes NULL into item if key wasn't found
    return item;
}

static void find_watched_literal_partner(const size_t clause_number, const size_t literal_pos, size_t* restrict partner_literal_pos) {
    Clause_Literal_Item* item;
    HASH_FIND(hh, clause_map, &clause_number, sizeof(size_t), item);
    if (item == NULL) {
        partner_literal_pos = NULL;
    } else {
        *partner_literal_pos = item->watched_literals[0] == formula[literal_pos] ? item->watched_literals[1] : item->watched_literals[0];
    }
}

static void add_clause(const size_t clause_number, const size_t* restrict watched_literals) {
    Clause_Literal_Item* item = malloc(sizeof(Clause_Literal_Item));
    item->clause_number = clause_number;
    memcpy(item->watched_literals, watched_literals, 2 * sizeof(size_t));
    HASH_ADD(hh, clause_map, clause_number, sizeof(size_t), item);
}

static void delete_clause(const size_t clause_number) {
    Clause_Literal_Item* item;
    HASH_FIND(hh, clause_map, &clause_number, sizeof(size_t), item);
    assert(item != NULL);
    HASH_DEL(clause_map, item);
    free(item);
}

static size_t find_new_literal(const size_t clause_number) {
    assert(clause_number <= num_clauses);

    for (size_t i = 0; i < clauses[clause_number + 1]; ++i) {
        size_t assignment;
        assignment_map_get_value(clauses[clause_number] + i, &assignment);
        assert(&assignment != NULL);

        // TODO: Is this correct?
        if (assignment == 1 || assignment == 0) {
            return clauses[clause_number] + i;
        }
    }

    return -1;
}

void watched_literals_init() {
    for (size_t i = 0; i < num_clauses; ++i) {
        add_watched_literal(formula[clauses[i]], i);
        add_watched_literal(formula[clauses[i + 1]], i);
    }
}

void watched_literal_check(const size_t literal_pos) {
    // Find clause of negated literal_pos
    Literal_Clause_Item* item = find_clause_number(-formula[literal_pos]);
    if (item == NULL) return;

    size_t partner_literal_pos;
    find_watched_literal_partner(item->clause_number, literal_pos, &partner_literal_pos);
    assert(&partner_literal_pos != NULL);

    size_t partner_literal_assignment;
    assignment_map_get_value(partner_literal_pos, &partner_literal_assignment);
    assert(&partner_literal_assignment != NULL);

    size_t new_literal_pos;
    if (partner_literal_assignment == 1) {
        // clause satisfied
        assignment_sat_clauses_add_clause(item->clause_number);
    } else if ((new_literal_pos = find_new_literal(item->clause_number)) != -1) {
        // Update clause_map
        delete_clause(item->clause_number);
        add_clause(item->clause_number, (size_t[]){partner_literal_pos, new_literal_pos});

        // Update watched_literal_map
        delete_watched_literal(literal_pos);
        add_watched_literal(new_literal_pos, item->clause_number);
    } else if (partner_literal_assignment == -1) {
        // clause is unit, partner_literal is unassigned
        assignment_unit_clause_stack_push(partner_literal_pos);
    } else if (partner_literal_assignment == 0) {
        // Conflicting clause -> resolve
    }
}
