/** @file */

//
// Created with <3 by marcluque, January 2022
//

#ifndef YASER_UNIT_CLAUSE_STACK_H
#define YASER_UNIT_CLAUSE_STACK_H

#include "global/defines.h"
#include "global/attributes.h"
#include <stddef.h>
#include <stdbool.h>

typedef struct UnitClause {
  clause_index clause;
  literal l;
} UnitClause;

void unit_clause_stack_init(size_t stack_size);

void unit_clause_stack_clear(void);

void unit_clause_stack_reset(void);

ATTR_PURE bool unit_clause_stack_empty(void);

ATTR_PURE bool unit_clause_stack_full(void);

void unit_clause_stack_push(clause_index clause, literal l);

UnitClause* unit_clause_stack_pop(void);

#endif // YASER_UNIT_CLAUSE_STACK_H
