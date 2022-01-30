/** @file */

//
// Created with <3 by marcluque, June 2021
//

#ifndef YASER_CONFLICT_RESOLUTION_H
#define YASER_CONFLICT_RESOLUTION_H

#include "global.h"
#include "formula.h"
#include "assignment.h"

extern bool conflict_present;
extern Literal conflict_variable;
extern size_t conflict_clause_1;
extern size_t conflict_clause_2;

bool resolve_conflict(void);

#endif //YASER_CONFLICT_RESOLUTION_H
