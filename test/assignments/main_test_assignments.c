//
// Created with <3 by marcluque, January 2022
//

#include "../external/Unity/src/unity.h"
#include "test_assignments.h"

void setUp (void) {}
void tearDown (void) {}

int main(void) {
    UNITY_BEGIN();

    //
    // Assignment Stack
    //
    RUN_TEST(test_assignment_stack_init);
    RUN_TEST(test_assignment_stack_reset);
    RUN_TEST(test_assignment_stack_empty);
    RUN_TEST(test_assignment_stack_full);
    RUN_TEST(test_assignment_stack_push);
    RUN_TEST(test_assignment_stack_pop);

    //
    // Unit Clause Stack
    //
    RUN_TEST(test_assignment_unit_clause_stack_init);
    return UNITY_END();
}
