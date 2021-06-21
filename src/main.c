#include "../include/dimacs_parser.h"
#include "../include/assignment_stack.h"

// #define NDEBUG

int main() {
    dimacs_parse_file(NULL);

    assignment_stack_clear();
    formula_clear();
    return EXIT_SUCCESS;
}