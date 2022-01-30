//
// Created with <3 by marcluque, June 2021
//

#include "dimacs_parser.h"
#include "defines.h"
#include "formula.h"
#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
#include <string.h>

void (*init_callback)(size_t, size_t);

void dimacs_parser_register_init_callback(void (*callback)(size_t, size_t)) {
    init_callback = callback;
}

void dimacs_parse_file(const char* const restrict file_path) {
    FILE* file;
    char* line = 0;

    file = fopen(file_path, "r");
    if (file == 0) {
        fprintf(stderr, "Couldn't open file %s", file_path);
        fflush(stderr);
        exit(EXIT_FAILURE);
    }

    bool done_reading_header = false;
    ssize_t read;
    size_t len = 0;
    while ((read = getline(&line, &len, file)) != -1 && !done_reading_header) {
        for (int i = 0; i < read; ++i) {
            switch (line[i]) {
                case ' ': continue;
                case 'c': break;
                case 'p':
                    init_callback((size_t) (line[i + 6] - '0'), (size_t) (line[i + 8] - '0'));
                    done_reading_header = true;
                    break;
                default: break;
            }
        }
    }

    clause_index clause_pointer = 0;
    formula_pos last_clause_pointer = 0;
    formula_pos literal_pointer = 0;
    const char* delim = " ";
    while (getline(&line, &len, file) != -1) {
        char* token = strtok(line, delim);
        while (token != 0 && token[0] != '0') {
            formula[literal_pointer++] = (int) strtol(token, (char**) 0, 10);
            //formula_add_map_item(formula[literal_pointer - 1], last_clause_pointer);
            token = strtok((char*) 0, delim);
        }

        clauses[clause_pointer++] = last_clause_pointer;
        last_clause_pointer = literal_pointer;
    }

    clauses[clause_pointer] = last_clause_pointer;
    free(line);
    fclose(file);
}