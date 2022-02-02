//
// Created with <3 by marcluque, June 2021
//

#include "parsing/dimacs_parser.h"
#include "global/defines.h"
#include "global/formula.h"
#include "assignments/assignment_stack.h"
#include "assignments/assignment_unit_clauses.h"
#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
#include <string.h>
#include <sys/types.h>

#define MAX_LINE_LENGTH (512U)

static void init(size_t init_num_variables, size_t init_num_clauses) {
    formula_init(init_num_variables, init_num_clauses);
    assignment_stack_init(init_num_variables * 2);
    assignment_unit_clause_stack_init(init_num_clauses);
}

void dimacs_parse_file(const char* const file_path) {
    // TODO: Make sure that input formula is not longer than ULLONG_MAX

    FILE* file = fopen(file_path, "r");
    if (file == 0) {
        fprintf(stderr, "Couldn't open file with path: %s\n", file_path);
        fflush(stderr);
#ifdef NDEBUG
        exit(EXIT_DEBUG);
#else
        exit(EXIT_FAILURE);
#endif
    }

    bool done_reading_header = false;
    ssize_t read;
    size_t len = 0;
    char* line = malloc(MAX_LINE_LENGTH * sizeof(char));
    while ((read = getline(&line, &len, file)) != -1 && !done_reading_header) {
        for (int i = 0; i < read; ++i) {
            switch (line[i]) {
                case ' ':
                    continue;
                case 'c':
                    break;
                case 'p':
                    init((size_t) (line[i + 6] - '0'), (size_t) (line[i + 8] - '0'));
                    done_reading_header = true;
                    break;
                default:
                    break;
            }
        }
    }

    clause_index clause_pointer     = 0;
    formula_pos last_clause_pointer = 0;
    formula_pos literal_pointer     = 0;
    const char* delim               = " ";
    while (getline(&line, &len, file) != -1) {
        char* token = strtok(line, delim);
        while (token != 0 && token[0] != '0') {
            formula[literal_pointer++] = (int) strtol(token, (char**) 0, 10);
            // formula_add_map_item(formula[literal_pointer - 1], last_clause_pointer);
            token                      = strtok((char*) 0, delim);
        }

        clauses[clause_pointer++] = last_clause_pointer;
        last_clause_pointer       = literal_pointer;
    }
    clauses[clause_pointer] = last_clause_pointer;

    free(line);
    fclose(file);
}
