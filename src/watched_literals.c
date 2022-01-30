//
// Created with <3 by marcluque, June 2021
//

#include "../include/watched_literals.h"


//// Watched Literal Hash Map
/////////////////////////////
Literal_Clause_Item* watched_literal_map = NULL;

void watched_literals_clear(void) {
    Literal_Clause_Item* current;
    Literal_Clause_Item* tmp;

    HASH_ITER(hh, watched_literal_map, current, tmp) {
        HASH_DEL(watched_literal_map, current);
        free(current);
    }
}

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


//// Clause Hash Map
////////////////////
Clause_Literal_Item* clause_map = NULL;

void clauses_clear(void) {
    Clause_Literal_Item* current;
    Clause_Literal_Item* tmp;

    HASH_ITER(hh, clause_map, current, tmp) {
        HASH_DEL(clause_map, current);
        free(current);
    }
}

static void add_clause(const size_t clause_number, const size_t* restrict watched_literals) {
    Clause_Literal_Item* item = malloc(sizeof(Clause_Literal_Item));
    item->clause_number = clause_number;
    item->watched_literals[0] = watched_literals[0];
    item->watched_literals[1] = watched_literals[1];
    HASH_ADD(hh, clause_map, clause_number, sizeof(size_t), item);
}

static void delete_clause(const size_t clause_number) {
    Clause_Literal_Item* item;
    HASH_FIND(hh, clause_map, &clause_number, sizeof(size_t), item);
    assert(item != NULL);
    HASH_DEL(clause_map, item);
    free(item);
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

    return (size_t) -1;
}


//// Watched Literals
/////////////////////
void watched_literals_init(void) {
    for (size_t i = 0; i < num_clauses; ++i) {
        add_watched_literal((size_t) formula[clauses[i]], i);
        add_watched_literal((size_t) formula[clauses[i + 1]], i);
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
        assignment_sat_clauses_add_clause();
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
        // item->clause_number is conflicting -> resolve
        conflict_present = true;
        // get variable from assignment stack
        Assignment* assignment = assignment_stack_pop();

    }
}
