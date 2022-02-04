//
// Created with <3 by marcluque, June 2021
//

#include "parsing/dimacs_parser.h"
#include "watched-literals/watched_literals.h"
#include "conflicts/dpll.h"
#include "assignments/assignment_map.h"
#include "global/cleanup.h"
#include "global/logging/log.h"
#include "global/logging/yaser_assert.h"
#include "global/logging/yaser_malloc.h"

int main(void) {
    dimacs_parse_file("NULL");
    watched_literals_init();
    dpll_register_assignment_callback(watched_literals_check);

    dpll();

    cleanup_all();

    return EXIT_SUCCESS;
}
