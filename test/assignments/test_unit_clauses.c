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
    formula[1] = 1;

    unit_clause_stack_push(1);
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
    formula[1] = 1;

    unit_clause_stack_push(1);
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

    for (unsigned int i = 0; i < 10; ++i) {
        formula[i] = (int) i;
        unit_clause_stack_push(i);
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
    formula[0] = -1;

    unit_clause_stack_push(0);
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
    formula[0] = -1;

    unit_clause_stack_push(0);
    TEST_ASSERT_FALSE(unit_clause_stack_empty());
    TEST_ASSERT_FALSE(unit_clause_stack_full());

    formula_pos i = unit_clause_stack_pop();
    TEST_ASSERT_TRUE(unit_clause_stack_empty());
    TEST_ASSERT_FALSE(unit_clause_stack_full());
    TEST_ASSERT_EQUAL_UINT64(0, i);

    unit_clause_stack_clear();
    formula_clear();
}
