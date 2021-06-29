//
// Created with <3 by marcluque, June 2021
//

#include "../include/dpll.h"

void (*assignment_true_callback)(size_t);

void dpll_register_assignment_callback(void (*callback)(size_t)) {
    assignment_true_callback = callback;
}

static void update_assignment(const size_t literal_pos, const int value) {
    // Trail -> entries (x, v, b): assigning value to literal_pos, b == true <=> !v has been processed
    assignment_stack_push(literal_pos, value, true);
    assignment_map_add(literal_pos, value);

    // Call callback for satisfying assignments
    assignment_true_callback(literal_pos);
}

static bool bcp() {
    while(!assignment_unit_clause_stack_empty()) {
        size_t literal_pos = assignment_unit_clause_stack_pop();
        int value = literal_pos < 0 ? 0 : 1;
        update_assignment(literal_pos, value);
    }

    return exists_unsat_clauses();
}

static bool decide() {
    if (assignment_stack_full()) return false;
    // TODO: choose unassigned literal_pos x heuristically
    int literal_pos = -1;
    int value = literal_pos < 0 ? 0 : 1;
    update_assignment(literal_pos, value);
    return true;
}

bool dpll() {
    assignment_stack_reset();
    if (!bcp()) return false;
    while (1) {
        if (!decide()) return true;
        while (!bcp())
            // TODO: Tell the method which clause and variable is affected
            if (!resolve_conflict()) return false;
    }
}