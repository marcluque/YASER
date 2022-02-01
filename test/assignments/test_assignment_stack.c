//
// Created with <3 by marcluque, January 2022
//

#include "../external/Unity/src/unity.h"
#include "test_assignments.h"
#include "assignments/assignment_stack.h"

void test_assignment_stack_init(void) {
    assignment_stack_init(10);
    TEST_ASSERT_TRUE(assignment_stack_empty());
    TEST_ASSERT_FALSE(assignment_stack_full());
    assignment_stack_clear();
}

void test_assignment_stack_reset(void) {
    assignment_stack_init(10);
    // TODO: NEEDS FORMULA
    assignment_stack_push(1, VALUE_TRUE, false);
    TEST_ASSERT_FALSE(assignment_stack_empty());
    TEST_ASSERT_FALSE(assignment_stack_full());

    assignment_stack_reset();
    TEST_ASSERT_TRUE(assignment_stack_empty());
    TEST_ASSERT_FALSE(assignment_stack_full());

    assignment_stack_clear();
}

void test_assignment_stack_empty(void) {
    assignment_stack_init(10);
    TEST_ASSERT_TRUE(assignment_stack_empty());
    TEST_ASSERT_FALSE(assignment_stack_full());

    // TODO: NEEDS FORMULA
    assignment_stack_push(1, VALUE_TRUE, false);
    TEST_ASSERT_FALSE(assignment_stack_empty());
    TEST_ASSERT_FALSE(assignment_stack_full());

    assignment_stack_clear();
}

void test_assignment_stack_full(void) {
    assignment_stack_init(10);
    TEST_ASSERT_FALSE(assignment_stack_full());
    TEST_ASSERT_TRUE(assignment_stack_empty());

    // TODO: NEEDS FORMULA
    for (unsigned int i = 0; i < 10; ++i) {
        assignment_stack_push(i, VALUE_TRUE, false);
    }

    TEST_ASSERT_FALSE(assignment_stack_empty());
    TEST_ASSERT_TRUE(assignment_stack_full());

    assignment_stack_pop();

    TEST_ASSERT_FALSE(assignment_stack_empty());
    TEST_ASSERT_TRUE(assignment_stack_full());

    assignment_stack_clear();
}

void test_assignment_stack_push(void) {
    assignment_stack_init(10);
    TEST_ASSERT_TRUE(assignment_stack_empty());
    TEST_ASSERT_FALSE(assignment_stack_full());

    // TODO: NEEDS FORMULA
    assignment_stack_push(1, VALUE_TRUE, false);
    TEST_ASSERT_FALSE(assignment_stack_empty());
    TEST_ASSERT_FALSE(assignment_stack_full());

    AssignmentStackItem* result = assignment_stack_pop();

    assignment_stack_clear();
}
