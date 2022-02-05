//
// Created with <3 by marcluque, February 2022
//

#include "../external/Unity/src/unity.h"
#include "test_assignments.h"
#include "assignments/assignment_map.h"
#include "global/formula.h"

void test_assignment_map_add_and_get(void) {
  formula_init(10, 10);
  assignment_map_add(8, VALUE_FALSE);
  value v = assignment_map_get_value(8);
  TEST_ASSERT_EQUAL_INT(v, VALUE_FALSE);

  v = assignment_map_get_value(7);
  TEST_ASSERT_EQUAL_INT(v, VALUE_INVALID);
}

void test_assignment_map_clear(void) {
  formula_init(10, 10);
  assignment_map_add(5, VALUE_FALSE);
  value v = assignment_map_get_value(5);
  TEST_ASSERT_EQUAL_INT(v, VALUE_FALSE);

  assignment_map_clear();

  v = assignment_map_get_value(5);
  TEST_ASSERT_EQUAL_INT(v, VALUE_INVALID);
}
