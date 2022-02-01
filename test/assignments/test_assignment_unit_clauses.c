//
// Created with <3 by marcluque, January 2022
//

#include "../external/Unity/src/unity.h"
#include "test_assignments.h"
#include "assignments/assignment_unit_clauses.h"

void test_assignment_unit_clause_stack_init(void) {
    assignment_unit_clause_stack_init(100);
    TEST_ASSERT_TRUE(assignment_unit_clause_stack_empty());
    TEST_ASSERT_FALSE(assignment_unit_clause_stack_full());
    assignment_unit_clause_stack_clear();
}
