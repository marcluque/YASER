//
// Created with <3 by marcluque, June 2021
//

#include "parsing/dimacs_parser.h"
#include "global/defines.h"
#include "global/formula.h"
#include "assignments/assignment_stack.h"
#include "assignments/assignment_unit_clauses.h"
#include "global/logging/log.h"
#include "global/logging/yaser_malloc.h"
#include "global/logging/yaser_assert.h"
#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
#include <string.h>
#include <errno.h>
#include <sys/types.h>
#include <limits.h>

/**
 * Defines how many literals we allow in one clause
 */
#define MAX_LINE_LENGTH (1024U)

static void init(size_t init_num_variables, size_t init_num_clauses) {
  if (init_num_variables > ULLONG_MAX) {
    log_error("number of variables exceeds %llu", ULLONG_MAX);
    yaser_exit();
  }

  formula_init(init_num_variables, init_num_clauses);
  log_debug("#Variables=%zu; #Clauses=%zu", num_variables, num_clauses);
  assignment_stack_init(init_num_variables * 2);
  assignment_unit_clause_stack_init(init_num_clauses);
}

void dimacs_parse_file(const char* const file_path) {
  FILE* file = fopen(file_path, "r");
  if (file == 0) {
    log_error("%s", strerror(errno));
    yaser_exit();
  }
  log_debug("Successfully opened file (%s)", file_path);

  bool done_reading_header = false;
  ssize_t read;
  size_t len = 0;
  char* line = malloc(MAX_LINE_LENGTH * sizeof(char));
  YASER_CHECK_MALLOC(line);

  while ((read = getline(&line, &len, file)) != -1 && !done_reading_header) {
    for (int i = 0; i < read; ++i) {
      switch (line[i]) {
        case 'p':
          init((size_t) (line[i + 6] - '0'), (size_t) (line[i + 8] - '0'));
          done_reading_header = true;
          break;
        case 'c':
          break;
        case ' ':
        default:
          continue;
      }
      break;
    }
  }

  // Print number of literals and clauses


  clause_index clause_pointer     = 0;
  formula_pos last_clause_pointer = 0;
  formula_pos literal_pointer     = 0;
  const char* delim               = " ";
  while (getline(&line, &len, file) != -1) {
    char* token = strtok(line, delim);
    while (token != 0 && token[0] != '0') {
      formula[literal_pointer++] = (literal) strtol(token, (char**) 0, 10);
      // formula_add_map_item(formula[literal_pointer - 1], last_clause_pointer);
      token                      = strtok((char*) 0, delim);
    }

    clauses[clause_pointer++] = last_clause_pointer;
    last_clause_pointer       = literal_pointer;
  }
  clauses[clause_pointer] = last_clause_pointer;

  // Sanity check the number of literals and clauses
  YASER_ASSERT((long long int) literal_pointer - 1, ==, (long long int) num_variables);
  YASER_ASSERT((long long int) clause_pointer + 1, ==, (long long int) num_clauses);

  free(line);
  fclose(file);
}
