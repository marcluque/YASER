//
// Created with <3 by marcluque, January 2022
//

#include "unity.h"
#include "test_assignments.h"

void setUp (void) {}
void tearDown (void) {}

int main(void) {
    UNITY_BEGIN();
    RUN_TEST(test_assignment_stack_init);
    RUN_TEST(test_assignment_unit_clause_stack_init);
    return UNITY_END();
}