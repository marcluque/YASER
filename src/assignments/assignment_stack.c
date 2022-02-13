//
// Created with <3 by marcluque, January 2022
//

#include "assignments/assignment_stack.h"
#include "global/formula.h"
#include <sys/types.h>
#include <malloc.h>
#include <assert.h>

static AssignmentStackItem* assignment_stack = NULL;
static size_t assignment_stack_initial_size  = 0;
static ssize_t assignment_sp                 = -1;

void assignment_stack_init(const size_t stack_size) {
  assignment_stack_initial_size = stack_size;
  assignment_stack              = malloc(sizeof(AssignmentStackItem) * stack_size);
  assert(assignment_stack != NULL);
  assignment_sp = 0;
}

void assignment_stack_clear(void) {
  free(assignment_stack);
}

void assignment_stack_reset(void) {
  // TODO: Make is possible to reset to a certain decision level

  assignment_sp = 0;
}

bool assignment_stack_empty(void) {
  return assignment_sp == 0;
}

bool assignment_stack_full(void) {
  return (size_t) assignment_sp == assignment_stack_initial_size;
}

void assignment_stack_push(const literal l, const value v, const bool visited) {
  assert(assignment_stack != NULL);
  assert(!assignment_stack_full());
  assert(v != VALUE_UNASSIGNED);

  assignment_stack[assignment_sp].l         = l;
  assignment_stack[assignment_sp].value     = v;
  assignment_stack[assignment_sp].satisfied = (l > 0 && v == VALUE_TRUE) || (l < 0 && v == VALUE_FALSE);
  assignment_stack[assignment_sp].visited   = visited;
  ++assignment_sp;
}

AssignmentStackItem* assignment_stack_pop(void) {
  assert(assignment_stack != NULL);
  assert(!assignment_stack_empty());

  // TODO: Maybe needs to store clause here too

  return &(assignment_stack[--assignment_sp]);
}
