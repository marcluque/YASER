//
// Created with <3 by marcluque, January 2022
//

#include "assignments/unit_clause_stack.h"
#include "global/formula.h"
#include "global/logging/yaser_malloc.h"
#include <sys/types.h>
#include <malloc.h>
#include <assert.h>

static literal* unit_clause_stack        = NULL;
static size_t unit_clause_stack_initial_size = 0;
static ssize_t unit_clause_sp                = -1;

void unit_clause_stack_init(const size_t stack_size) {
  unit_clause_stack_initial_size = stack_size;
  unit_clause_stack              = malloc(sizeof(literal) * stack_size);
  YASER_CHECK_MALLOC(unit_clause_stack);
  unit_clause_sp = 0;
}

void unit_clause_stack_clear(void) {
  if (unit_clause_stack != NULL) {
    free(unit_clause_stack);
  }
}

void unit_clause_stack_reset(void) {
  unit_clause_sp = 0;
}

bool unit_clause_stack_empty(void) {
  return unit_clause_sp == 0;
}

bool unit_clause_stack_full(void) {
  return (size_t) unit_clause_sp == unit_clause_stack_initial_size;
}

void unit_clause_stack_push(literal l) {
  assert(unit_clause_stack != NULL);
  assert(!unit_clause_stack_full());

  unit_clause_stack[unit_clause_sp++] = l;
}

literal unit_clause_stack_pop(void) {
  assert(unit_clause_stack != NULL);
  assert(!unit_clause_stack_empty());

  return unit_clause_stack[--unit_clause_sp];
}
