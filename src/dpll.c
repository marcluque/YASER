//
// Created with <3 by marcluque, June 2021
//

#include "dpll.h"
#include "assignment.h"
#include "conflict_resolution.h"

void (*assignment_true_callback)(formula_pos);

void dpll_register_assignment_callback(void (*callback)(formula_pos)) {
    assignment_true_callback = callback;
}

static void update_assignment(const formula_pos literal_pos, const value v) {
    // Trail -> entries (x, v, b): assigning v to literal_pos, b == true <=> !v has been processed
    assignment_stack_push(literal_pos, v, true);
    assignment_map_add(literal_pos, v);

    // Call callback for satisfying assignments
    assignment_true_callback(literal_pos);
}

static bool bcp(void) {
    while(!assignment_unit_clause_stack_empty()) {
        formula_pos literal_pos = assignment_unit_clause_stack_pop();
        // TODO: This won't work
        value v = literal_pos < 0 ? 0 : 1;
        update_assignment(literal_pos, v);
    }

    return assignment_exists_unsat_clause();
}

static bool decide(void) {
    if (assignment_stack_full()) return false;
    // TODO: choose unassigned literal_pos x heuristically
    formula_pos literal_pos = -1;
    value v = literal_pos < 0 ? 0 : 1;
    update_assignment(literal_pos, v);
    return true;
}

bool dpll(void) {
    assignment_stack_reset();
    if (!bcp()) return false;
    while (1) {
        if (!decide()) return true;
        while (!bcp())
            // TODO: Tell the method which clause and variable is affected
            if (!resolve_conflict()) return false;
    }
}