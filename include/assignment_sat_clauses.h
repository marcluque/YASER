/** @file */

//
// Created with <3 by marcluque, January 2022
//

#ifndef YASER_ASSIGNMENT_SAT_CLAUSES_H
#define YASER_ASSIGNMENT_SAT_CLAUSES_H

#include "attributes.h"
#include <stdbool.h>

ATTR_PURE bool assignment_exists_unsat_clause(void);

void assignment_sat_clauses_add_clause(void);

#endif // YASER_ASSIGNMENT_SAT_CLAUSES_H
