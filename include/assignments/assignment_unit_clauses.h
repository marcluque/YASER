/** @file */

//
// Created with <3 by marcluque, January 2022
//

#ifndef YASER_ASSIGNMENT_UNIT_CLAUSES_H
#define YASER_ASSIGNMENT_UNIT_CLAUSES_H

#include "global/defines.h"
#include "global/attributes.h"
#include <stddef.h>
#include <stdbool.h>

void assignment_unit_clause_stack_init(size_t stack_size);

void assignment_unit_clause_stack_clear(void);

ATTR_PURE bool assignment_unit_clause_stack_empty(void);

void assignment_unit_clause_stack_push(formula_pos literal_pos);

formula_pos assignment_unit_clause_stack_pop(void);

#endif // YASER_ASSIGNMENT_UNIT_CLAUSES_H
