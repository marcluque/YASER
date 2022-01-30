//
// Created with <3 by marcluque, June 2021
//

#include <assert.h>
#include "../include/watched_literals.h"
#include "formula.h"
#include "assignment.h"
#include "conflict_resolution.h"


//// Watched literal Hash Map
/////////////////////////////
LiteralClauseItem* watched_literal_map = NULL;

void watched_literals_clear(void) {
    LiteralClauseItem* current;
    LiteralClauseItem* tmp;

    HASH_ITER(hh, watched_literal_map, current, tmp) {
        HASH_DEL(watched_literal_map, current);
        free(current);
    }
}

static void add_watched_literal(const formula_pos literal_pos, const clause_index clause) {
    LiteralClauseItem* item = malloc(sizeof(LiteralClauseItem));
    item->watched_literal = literal_pos;
    item->clause = clause;
    HASH_ADD(hh, watched_literal_map, watched_literal, sizeof(formula_pos), item);
}

static void delete_watched_literal(const formula_pos watched_literal_pos) {
    LiteralClauseItem* item;
    HASH_FIND(hh, watched_literal_map, &watched_literal_pos, sizeof(formula_pos), item);
    assert(item != NULL);
    HASH_DEL(watched_literal_map, item);
    free(item);
}

static LiteralClauseItem* find_clause_number(const formula_pos watched_literal_pos) {
    LiteralClauseItem* item;
    HASH_FIND(hh, watched_literal_map, &watched_literal_pos, sizeof(formula_pos), item);
    // HASH_FIND writes NULL into item if key wasn't found
    return item;
}


//// Clause Hash Map
////////////////////
ClauseLiteralItem* clause_map = NULL;

void clauses_clear(void) {
    ClauseLiteralItem* current;
    ClauseLiteralItem* tmp;

    HASH_ITER(hh, clause_map, current, tmp) {
        HASH_DEL(clause_map, current);
        free(current);
    }
}

static void add_clause(const clause_index clause, const formula_pos* watched_literals) {
    ClauseLiteralItem* item = malloc(sizeof(ClauseLiteralItem));
    item->clause = clause;
    item->watched_literals[0] = watched_literals[0];
    item->watched_literals[1] = watched_literals[1];
    HASH_ADD(hh, clause_map, clause, sizeof(clause_index), item);
}

static void delete_clause(const clause_index clause) {
    ClauseLiteralItem* item;
    HASH_FIND(hh, clause_map, &clause, sizeof(clause_index), item);
    assert(item != NULL);
    HASH_DEL(clause_map, item);
    free(item);
}

static formula_pos find_watched_literal_partner(const clause_index clause, const formula_pos literal_pos, formula_pos* partner_literal_pos) {
    ClauseLiteralItem* item;
    HASH_FIND(hh, clause_map, &clause, sizeof(clause_index), item);
    return item == NULL ? NOT_FOUND : item->watched_literals[0] == formula[literal_pos] ? item->watched_literals[1] : item->watched_literals[0];
}

static formula_pos find_new_literal(const clause_index clause) {
    assert(clause <= num_clauses);

    for (size_t i = 0; i < clauses[clause + 1]; ++i) {
        value assignment = assignment_map_get_value(clauses[clause] + i);
        assert(assignment != VALUE_INVALID);

        // TODO: Is this correct?
        if (assignment == 1 || assignment == 0) {
            return clauses[clause] + i;
        }
    }

    return NOT_FOUND;
}


//// Watched Literals
/////////////////////
void watched_literals_init(void) {
    for (clause_index i = 0; i < num_clauses; ++i) {
        add_watched_literal(clauses[i], i);
        add_watched_literal(clauses[i] + 1, i);
    }
}

void watched_literal_check(const formula_pos literal_pos) {
    // Find clause of negated literal_pos
    LiteralClauseItem* item = find_clause_number(-formula[literal_pos]);
    if (item == NULL) return;

    formula_pos partner_literal_pos = find_watched_literal_partner(item->clause, literal_pos, &partner_literal_pos);
    assert(partner_literal_pos != NOT_FOUND);

    value partner_literal_assignment = assignment_map_get_value(partner_literal_pos);

    formula_pos new_literal_pos;
    if (partner_literal_assignment == VALUE_TRUE) {
        // clause satisfied
        assignment_sat_clauses_add_clause();
    } else if ((new_literal_pos = find_new_literal(item->clause)) != NOT_FOUND) {
        // Update clause_map
        delete_clause(item->clause);
        add_clause(item->clause, (formula_pos []){partner_literal_pos, new_literal_pos});

        // Update watched_literal_map
        delete_watched_literal(literal_pos);
        add_watched_literal(new_literal_pos, item->clause);
    } else if (partner_literal_assignment == VALUE_INVALID) {
        // clause is unit, partner_literal is unassigned
        assignment_unit_clause_stack_push(partner_literal_pos);
    } else if (partner_literal_assignment == VALUE_FALSE) {
        // item->clause is conflicting -> resolve
        conflict_present = true;
        // get variable from assignment stack
        Assignment* assignment = assignment_stack_pop();

    }
}
