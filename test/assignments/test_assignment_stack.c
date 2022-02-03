//
// Created with <3 by marcluque, January 2022
//

#include "../external/Unity/src/unity.h"
#include "test_assignments.h"
#include "assignments/assignment_stack.h"
#include "global/formula.h"

void test_assignment_stack_init(void) {
    assignment_stack_init(10);
    TEST_ASSERT_TRUE(assignment_stack_empty());
    TEST_ASSERT_FALSE(assignment_stack_full());

    assignment_stack_clear();
}

void test_assignment_stack_reset(void) {
    assignment_stack_init(10);
    TEST_ASSERT_TRUE(assignment_stack_empty());
    TEST_ASSERT_FALSE(assignment_stack_full());

    formula_init(9, 3);
    formula[1] = 1;

    assignment_stack_push(1, VALUE_TRUE, false);
    TEST_ASSERT_FALSE(assignment_stack_empty());
    TEST_ASSERT_FALSE(assignment_stack_full());

    assignment_stack_reset();
    TEST_ASSERT_TRUE(assignment_stack_empty());
    TEST_ASSERT_FALSE(assignment_stack_full());

    assignment_stack_clear();
    formula_clear();
}

void test_assignment_stack_empty(void) {
    assignment_stack_init(10);
    TEST_ASSERT_TRUE(assignment_stack_empty());
    TEST_ASSERT_FALSE(assignment_stack_full());

    formula_init(9, 3);
    formula[1] = 1;

    assignment_stack_push(1, VALUE_TRUE, false);
    TEST_ASSERT_FALSE(assignment_stack_empty());
    TEST_ASSERT_FALSE(assignment_stack_full());

    assignment_stack_pop();
    TEST_ASSERT_TRUE(assignment_stack_empty());
    TEST_ASSERT_FALSE(assignment_stack_full());

    assignment_stack_clear();
    formula_clear();
}

void test_assignment_stack_full(void) {
    assignment_stack_init(10);
    TEST_ASSERT_FALSE(assignment_stack_full());
    TEST_ASSERT_TRUE(assignment_stack_empty());

    formula_init(10, 3);

    for (unsigned int i = 0; i < 10; ++i) {
        formula[i] = (int) i;
        assignment_stack_push(i, VALUE_TRUE, false);
    }

    TEST_ASSERT_FALSE(assignment_stack_empty());
    TEST_ASSERT_TRUE(assignment_stack_full());

    assignment_stack_pop();

    TEST_ASSERT_FALSE(assignment_stack_empty());
    TEST_ASSERT_FALSE(assignment_stack_full());

    assignment_stack_clear();
    formula_clear();
}

void test_assignment_stack_push(void) {
    assignment_stack_init(10);
    TEST_ASSERT_TRUE(assignment_stack_empty());
    TEST_ASSERT_FALSE(assignment_stack_full());

    formula_init(9, 3);
    formula[0] = -1;

    assignment_stack_push(0, VALUE_TRUE, false);
    TEST_ASSERT_FALSE(assignment_stack_empty());
    TEST_ASSERT_FALSE(assignment_stack_full());

    AssignmentStackItem* result = assignment_stack_pop();
    TEST_ASSERT_TRUE(assignment_stack_empty());
    TEST_ASSERT_FALSE(assignment_stack_full());
    TEST_ASSERT_FALSE(result->satisfied);

    assignment_stack_push(0, VALUE_FALSE, false);
    TEST_ASSERT_FALSE(assignment_stack_empty());
    TEST_ASSERT_FALSE(assignment_stack_full());

    result = assignment_stack_pop();
    TEST_ASSERT_TRUE(assignment_stack_empty());
    TEST_ASSERT_FALSE(assignment_stack_full());
    TEST_ASSERT_TRUE(result->satisfied);

    formula[3] = 1;

    assignment_stack_push(3, VALUE_TRUE, true);
    TEST_ASSERT_FALSE(assignment_stack_empty());
    TEST_ASSERT_FALSE(assignment_stack_full());

    result = assignment_stack_pop();
    TEST_ASSERT_TRUE(assignment_stack_empty());
    TEST_ASSERT_FALSE(assignment_stack_full());
    TEST_ASSERT_TRUE(result->satisfied);
    TEST_ASSERT_TRUE(result->visited);

    assignment_stack_push(3, VALUE_FALSE, false);
    TEST_ASSERT_FALSE(assignment_stack_empty());
    TEST_ASSERT_FALSE(assignment_stack_full());

    result = assignment_stack_pop();
    TEST_ASSERT_TRUE(assignment_stack_empty());
    TEST_ASSERT_FALSE(assignment_stack_full());
    TEST_ASSERT_FALSE(result->satisfied);
    TEST_ASSERT_FALSE(result->visited);
    TEST_ASSERT_EQUAL_UINT64(3, result->literal_pos);
    TEST_ASSERT_EQUAL_INT(VALUE_FALSE, result->value);

    assignment_stack_clear();
    formula_clear();
}

void test_assignment_stack_pop(void) {
    assignment_stack_init(10);
    TEST_ASSERT_TRUE(assignment_stack_empty());
    TEST_ASSERT_FALSE(assignment_stack_full());

    formula_init(9, 3);
    formula[0] = -1;

    assignment_stack_push(0, VALUE_TRUE, false);
    TEST_ASSERT_FALSE(assignment_stack_empty());
    TEST_ASSERT_FALSE(assignment_stack_full());

    AssignmentStackItem* result = assignment_stack_pop();
    TEST_ASSERT_TRUE(assignment_stack_empty());
    TEST_ASSERT_FALSE(assignment_stack_full());
    TEST_ASSERT_FALSE(result->satisfied);
    TEST_ASSERT_FALSE(result->visited);
    TEST_ASSERT_EQUAL_UINT64(0, result->literal_pos);
    TEST_ASSERT_EQUAL_INT(VALUE_TRUE, result->value);
}
