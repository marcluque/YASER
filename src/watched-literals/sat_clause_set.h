//
// Created with <3 by marcluque, February 2022
//

#ifndef YASER_SAT_CLAUSE_SET_H
#define YASER_SAT_CLAUSE_SET_H

#include <stdbool.h>
#include "global/defines.h"

bool sat_clause_set_contains(clause_index clause);

void sat_clause_set_add(clause_index clause);

bool sat_clause_set_exists_unsat(void);

#endif // YASER_SAT_CLAUSE_SET_H
