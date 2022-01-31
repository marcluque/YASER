file(GLOB_RECURSE ASSIGNMENT_SRC_FILES "./assignments/*.c")
add_executable(yaser_assignment_tests ${ASSIGNMENT_SRC_FILES})
target_link_libraries(yaser_assignment_tests yaser unity)
add_test(test_assignments yaser_assignment_tests)

file(GLOB_RECURSE CONFLICT_SRC_FILES "./conflicts/*.c")
add_executable(yaser_conflict_tests ${CONFLICT_SRC_FILES})
target_link_libraries(yaser_conflict_tests yaser unity)
add_test(test_conflicts yaser_conflict_tests)