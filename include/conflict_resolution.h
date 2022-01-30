/** @file */

//
// Created with <3 by marcluque, June 2021
//

#ifndef YASER_CONFLICT_RESOLUTION_H
#define YASER_CONFLICT_RESOLUTION_H

#include "defines.h"
#include <stdbool.h>

extern bool conflict_present;
extern literal conflict_variable;
extern clause_index conflict_clause_1;
extern clause_index conflict_clause_2;

bool resolve_conflict(void);

#endif // YASER_CONFLICT_RESOLUTION_H
