//
// Created with <3 by marcluque, January 2022
//

#include "../external/Unity/src/unity.h"
#include "test_assignments.h"
#include "assignments/unit_clause_stack.h"
#include "global/formula.h"

void test_unit_clause_stack_init(void) {
  unit_clause_stack_init(100);
  TEST_ASSERT_TRUE(unit_clause_stack_empty());
  TEST_ASSERT_FALSE(unit_clause_stack_full());
  unit_clause_stack_clear();
}

void test_unit_clause_stack_reset(void) {
  unit_clause_stack_init(10);
  TEST_ASSERT_TRUE(unit_clause_stack_empty());
  TEST_ASSERT_FALSE(unit_clause_stack_full());

  formula_init(9, 3);
  // Equal to (x_1)
  formula[0] = 1;

  // 0 is the starting position of the
  unit_clause_stack_push(0, 1);
  TEST_ASSERT_FALSE(unit_clause_stack_empty());
  TEST_ASSERT_FALSE(unit_clause_stack_full());

  unit_clause_stack_reset();
  TEST_ASSERT_TRUE(unit_clause_stack_empty());
  TEST_ASSERT_FALSE(unit_clause_stack_full());

  unit_clause_stack_clear();
  formula_clear();
}

void test_unit_clause_stack_empty(void) {
  unit_clause_stack_init(10);
  TEST_ASSERT_TRUE(unit_clause_stack_empty());
  TEST_ASSERT_FALSE(unit_clause_stack_full());

  formula_init(9, 3);
  // Equal to (x_1)
  formula[0] = 1;

  unit_clause_stack_push(0, 1);
  TEST_ASSERT_FALSE(unit_clause_stack_empty());
  TEST_ASSERT_FALSE(unit_clause_stack_full());

  unit_clause_stack_pop();
  TEST_ASSERT_TRUE(unit_clause_stack_empty());
  TEST_ASSERT_FALSE(unit_clause_stack_full());

  unit_clause_stack_clear();
  formula_clear();
}

void test_unit_clause_stack_full(void) {
  unit_clause_stack_init(10);
  TEST_ASSERT_FALSE(unit_clause_stack_full());
  TEST_ASSERT_TRUE(unit_clause_stack_empty());

  formula_init(10, 3);

  // Formula = (x_1 ∨ x_2 ∨ ... ∨ x_10)
  for (literal i = 1; i <= 10; ++i) {
    formula[i - 1] = i;
    // It's all just one clause
    unit_clause_stack_push(0, i);
  }

  TEST_ASSERT_FALSE(unit_clause_stack_empty());
  TEST_ASSERT_TRUE(unit_clause_stack_full());

  unit_clause_stack_pop();

  TEST_ASSERT_FALSE(unit_clause_stack_empty());
  TEST_ASSERT_FALSE(unit_clause_stack_full());

  unit_clause_stack_clear();
  formula_clear();
}

void test_unit_clause_stack_push(void) {
  unit_clause_stack_init(10);
  TEST_ASSERT_TRUE(unit_clause_stack_empty());
  TEST_ASSERT_FALSE(unit_clause_stack_full());

  formula_init(9, 3);

  // Equal to (x_(-1))
  formula[0] = -1;

  unit_clause_stack_push(0, -1);
  TEST_ASSERT_FALSE(unit_clause_stack_empty());
  TEST_ASSERT_FALSE(unit_clause_stack_full());

  unit_clause_stack_clear();
  formula_clear();
}

void test_unit_clause_stack_pop(void) {
  unit_clause_stack_init(10);
  TEST_ASSERT_TRUE(unit_clause_stack_empty());
  TEST_ASSERT_FALSE(unit_clause_stack_full());

  formula_init(9, 3);
  // Equal to (x_(-1))
  formula[0] = -1;

  unit_clause_stack_push(0, -1);
  TEST_ASSERT_FALSE(unit_clause_stack_empty());
  TEST_ASSERT_FALSE(unit_clause_stack_full());

  UnitClause* i = unit_clause_stack_pop();
  TEST_ASSERT_TRUE(unit_clause_stack_empty());
  TEST_ASSERT_FALSE(unit_clause_stack_full());
  TEST_ASSERT_EQUAL_UINT64(0, i);

  unit_clause_stack_clear();
  formula_clear();
}
