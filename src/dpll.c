//
// Created by marcluque on 20.06.2021.
//
#include "../include/dpll.h"

static bool bcp() {
    while(exists_unit_clause) {
        // unit clause x requires value v
        int variable = -1;
        int value = -1;
        // Trail -> entries (x, v, b): assigning value v to x, b == true <=> !v has been processed
        assignment_stack_push(variable, value, true);
    }
    return exists_unsat_clause;
}

static bool decide() {
    if (assignment_stack_full()) return false;
    // TODO: choose unassigned variable x heuristically
    int variable = -1;
    // TODO: choose value for variable x heuristically
    int v = -1;
    assignment_stack_push(variable, v, false);
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