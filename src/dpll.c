//
// Created with <3 by marcluque, June 2021
//
#include "../include/dpll.h"

static bool bcp() {
    while(!assignment_unit_clause_stack_empty()) {
        Unit_Clause_Item* item = assignment_unit_clause_stack_pop();
        int variable = formula[item->literal_pos];
        int value = variable < 0 ? 0 : 1;
        // Trail -> entries (x, v, b): assigning value to variable, b == true <=> !v has been processed
        assignment_stack_push(variable, value, true);
        // Call callback for satisfying assignments

    }

    return exists_unsat_clauses();
}

static bool decide() {
    if (assignment_stack_full()) return false;
    // TODO: choose unassigned variable x heuristically
    int variable = -1;
    int value = variable < 0 ? 0 : 1;
    assignment_stack_push(variable, value, false);
    // Call callback for satisfying assignments
    return true;
}

static bool resolve_conflict() {

}

bool dpll() {
    assignment_stack_reset();
    if (!bcp()) return false;
    while (1) {
        if (!decide()) return true;
        while (!bcp())
            if (!resolve_conflict()) return false;
    }
}