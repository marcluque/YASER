//
// Created with <3 by marcluque, June 2021
//

#include "../include/conflict_resolution.h"

bool conflict_present = false;

bool resolve_conflict(void) {
    if (assignment_stack_empty()) return false;
    else if (!conflict_present) return true;

    // Resolve conflict
    
}