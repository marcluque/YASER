//
// Created by marcluque on 20.06.2021.
//

#ifndef YASER_ASSIGNMENT_STACK_H
#define YASER_ASSIGNMENT_STACK_H

#include "global.h"

typedef struct {
    int variable;
    int value; // 0 or 1
    bool visited; // true <=> visited negated variable
} Assignment;

void assignment_stack_init(size_t size);

void assignment_stack_clear();

void assignment_stack_reset();

bool assignment_stack_full();

void assignment_stack_push(int variable, int value, bool visited);

Assignment* assignment_stack_pop();

#endif //YASER_ASSIGNMENT_STACK_H
