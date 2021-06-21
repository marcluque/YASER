//
// Created by marcluque on 20.06.2021.
//

#include "../include/dimacs_parser.h"

void dimacs_parse_file(const char* restrict file_path) {
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
                    formula_init(line[i + 6], line[i + 8]);
                    done_reading_header = true;
                    break;
                default: break;
            }
        }
    }

    size_t clause_pointer = 0;
    size_t last_clause_pointer = 0;
    size_t literal_pointer = 0;
    char* delim = " ";
    while (getline(&line, &len, file) != -1) {
        char* token = strtok(line, delim);
        while(token != 0 && token[0] != '0') {
            formula[literal_pointer++] = (int) strtol(token, (char**) 0, 10);
            token = strtok((char*) 0, delim);
        }

        clauses[clause_pointer++] = last_clause_pointer;
        last_clause_pointer = literal_pointer;
    }

    free(line);
    fclose(file);
}