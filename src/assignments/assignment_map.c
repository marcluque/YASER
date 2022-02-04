//
// Created with <3 by marcluque, January 2022
//

#include "assignments/assignment_map.h"
#include "global/formula.h"
#include <assert.h>

static AssignmentMapItem* assignment_map = NULL;

void assignment_map_add(const formula_pos literal_pos, const value v) {
  assert(literal_pos < num_literals);
  assert(literal_pos < NOT_FOUND);
  assert(v != VALUE_INVALID);

  AssignmentMapItem* item = malloc(sizeof(AssignmentMapItem));
  item->literal_pos       = literal_pos;
  item->v                 = v;
  HASH_ADD(hh, assignment_map, literal_pos, sizeof(size_t), item);
}

value assignment_map_get_value(const formula_pos literal_pos) {
  assert(literal_pos < num_literals);
  assert(literal_pos < NOT_FOUND);

  AssignmentMapItem* assignment_item;
  HASH_FIND(hh, assignment_map, &literal_pos, sizeof(formula_pos), assignment_item);
  if (assignment_item == NULL) {
    return VALUE_INVALID;
  } else {
    return assignment_item->v;
  }
}

void assignment_map_clear(void) {
  AssignmentMapItem* current;
  AssignmentMapItem* tmp;

  HASH_ITER(hh, assignment_map, current, tmp) {
    HASH_DEL(assignment_map, current);
    free(current);
  }
}
