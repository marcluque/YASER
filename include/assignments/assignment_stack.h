/** @file */

//
// Created with <3 by marcluque, January 2022
//

#ifndef YASER_ASSIGNMENT_STACK_H
#define YASER_ASSIGNMENT_STACK_H

#include "global/defines.h"
#include "global/attributes.h"
#include <stdbool.h>
#include <stddef.h>

typedef struct {
  literal l;
  value value;
  bool satisfied;
  /**
   * true <=> visited negated l
   */
  bool visited;
} AssignmentStackItem;

void assignment_stack_init(size_t stack_size);

void assignment_stack_clear(void);

void assignment_stack_reset(void);

ATTR_PURE bool assignment_stack_empty(void);

ATTR_PURE bool assignment_stack_full(void);

void assignment_stack_push(literal l, value v, bool visited);

AssignmentStackItem* assignment_stack_pop(void);

#endif // YASER_ASSIGNMENT_STACK_H
