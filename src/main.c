#include "../include/dimacs_parser.h"
#include "../include/assignment_stack.h"
#include "../include/watched_literals.h"

// #define NDEBUG

int main() {
    dimacs_parse_file(NULL);
    watched_literals_init();

    assignment_stack_clear();
    formula_clear();
    return EXIT_SUCCESS;
}