//
// Created with <3 by marcluque, June 2021
//

#include "parsing/dimacs_parser.h"
#include "global/defines.h"
#include "global/formula.h"
#include "assignments/assignment_stack.h"
#include "assignments/unit_clause_stack.h"
#include "logging/log.h"
#include "global/yaser.h"
#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
#include <string.h>
#include <errno.h>
#include <sys/types.h>
#include <limits.h>

static void init(size_t init_num_variables, size_t init_num_clauses) {
  if (init_num_variables > ULLONG_MAX) {
    log_error("number of variables exceeds %llu", ULLONG_MAX);
    YASER_EXIT();
  }

  formula_init(init_num_variables, init_num_clauses);
  assignment_stack_init(init_num_variables * 2);
  unit_clause_stack_init(init_num_clauses);
}

static void print_formula(void) {
#if defined(YASER_DEBUG)
  YASER_ASSERT(num_literals, !=, 0);
  // 5 * accounts for "(", ")", ∧, ∨, and ¬ in the formula output.
  // The over-approximation is that every literal has each symbol and each symbol
  // uses 2 bytes, hence a factor of 5 * 2
  char* formula_out = malloc(10 * num_literals * sizeof(char));
  YASER_CHECK_MALLOC(formula_out);
  formula_out[0] = '(';

  unsigned int max_variable_len = 13;
  char* format                  = malloc(max_variable_len * sizeof(char));
  YASER_CHECK_MALLOC(format);

  size_t clause_counter = 0;
  size_t current_pos    = 1;
  for (size_t i = 0; i < num_literals; ++i) {
    if (i >= clauses[clause_counter + 1]) {
      ++clause_counter;
      current_pos -= 5;
      strncpy(formula_out + current_pos, ") \u2227 (", 8);
      current_pos += 7;
    }

    const char* variable = formula[i] < 0 ? "\u00ACx%d \u2228 " : "x%d \u2228 ";
    int n                = snprintf(format, max_variable_len, variable, abs(formula[i]));
    if (n < 0) {
      log_error("%s", strerror(errno));
      YASER_EXIT();
    }

    strncpy(formula_out + current_pos, format, (unsigned long) n);
    current_pos += (unsigned long) n;
  }

  current_pos -= 5;
  strncpy(formula_out + current_pos, ")", 2);
  formula_out[current_pos + 3] = '\0';

  log_debug("Parsed formula %s", formula_out);

  free(formula_out);
  free(format);
#else
  return;
#endif
}

void dimacs_parse_file(const char* const file_path) {
  FILE* file = fopen(file_path, "r");
  if (file == 0) {
    log_error("%s", strerror(errno));
    YASER_EXIT();
  }

  log_debug("Successfully opened file (%s)", file_path);

  bool done_reading_header = false;
  size_t len               = 0;
  char* line               = NULL;
  ssize_t read             = 0;

  while (!done_reading_header && read != -1) {
    read = getline(&line, &len, file);
    YASER_ASSERT(line, !=, NULL);

    for (int i = 0; i < read; ++i) {
      switch (line[i]) {
        case 'p':
          init((size_t) (line[i + 6] - '0'), (size_t) (line[i + 8] - '0'));
          done_reading_header = true;
          break;
        case 'c':
          break;
        default:
          continue;
      }
      break;
    }
  }

  clause_index clause_pointer     = 0;
  formula_pos last_clause_pointer = 0;
  formula_pos literal_pointer     = 0;
  const char* delim               = " ";
  while (getline(&line, &len, file) != -1) {
    YASER_ASSERT(line, !=, NULL);

    char* line_copy = line;
    char* save_token;
    const char* token     = strtok_r(line_copy, delim, &save_token);
    while (token != 0 && token[0] != '0') {
      formula[literal_pointer] = (literal) strtol(token, (char**) 0, 10);
      token                    = strtok_r((char*) 0, delim, &save_token);
      ++literal_pointer;
    }

    clauses[clause_pointer] = last_clause_pointer;
    last_clause_pointer     = literal_pointer;

    // Check for unit clauses
    if (literal_pointer - clauses[clause_pointer] == 1) {
      unit_clause_stack_push(clause_pointer, formula[clauses[clause_pointer]]);
    }

    ++clause_pointer;
  }
  clauses[clause_pointer] = last_clause_pointer;

  num_literals = literal_pointer;
  log_info("#Literals=%zu (not distinct)", num_literals);
  log_info("#Variables=%zu", num_variables);
  log_info("#Clauses=%zu", num_clauses);

  print_formula();

  // Sanity check the number of clauses
  YASER_ASSERT(clause_pointer, ==, num_clauses);

  // Use the previously saved address to free the line buffer
  free(line);
  fclose(file);
}
