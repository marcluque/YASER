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
#include <ctype.h>

ATTR_COLD static void init(size_t init_num_variables, size_t init_num_clauses) {
  if (init_num_variables > UINT_MAX) {
    log_error("number of variables exceeds %d", UINT_MAX);
    YASER_EXIT();
  }

  formula_init(init_num_variables, init_num_clauses);
  assignment_stack_init(init_num_variables);
  unit_clause_stack_init(init_num_clauses);
}

ATTR_COLD static void print_formula(void) {
#if defined(YASER_DEBUG)
  YASER_ASSERT(num_literals, !=, 0);
  // 5 * accounts for "(", ")", ∧, ∨, and ¬ in the formula output.
  // The over-approximation is that every literal has each symbol and each symbol
  // uses 2 bytes, hence a factor of 5 * 2
  char* formula_out = malloc(100 * num_literals * sizeof(char));
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

ATTR_COLD static void tokenize_clause(char* const line, formula_pos* const literal_pointer) {
  // Remove leading whitespaces
  char* line_copy = line;
  while (isspace(*line_copy)) {
    ++line_copy;
  }

  // Write tokens into formula until line termination '0' is read
  char* save_token;
  const char* token     = strtok_r(line_copy, " ", &save_token);
  while (token != 0 && token[0] != '0') {
    formula[*literal_pointer] = (literal) strtol(token, (char**) 0, 10);
    token                     = strtok_r((char*) 0, " ", &save_token);
    ++(*literal_pointer);
  }
}

ATTR_COLD static bool tokenize_header(char* const line) {
  // Tokenize header line that contains number of variables and number of clauses

  // Ignore first two tokens
  char* save_token;
  char* line_copy = line;
  strtok_r(line_copy, " ", &save_token);
  strtok_r((char*) 0, " ", &save_token);

  // Get number of variables
  const char* token = strtok_r((char*) 0, " ", &save_token);
  size_t vars = (size_t) strtol(token, (char**) 0, 10);

  // Get number of clauses
  token = strtok_r((char*) 0, " ", &save_token);
  size_t cls = (size_t) strtol(token, (char**) 0, 10);

  init(vars, cls);
  return true;
}

void dimacs_parse_file(const char* const file_path) {
  FILE* file = fopen(file_path, "r");
  if (file == 0) {
    log_error("File: %s -> %s", file_path, strerror(errno));
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
          done_reading_header = tokenize_header(line);
          break;
        case 'c':
          break;
        default:
          continue;
      }

      break;
    }
  }

  // TODO: Do watched literal initialization while iterating over clauses
  clause_index clause_pointer     = 0;
  formula_pos last_clause_pointer = 0;
  formula_pos literal_pointer     = 0;
  while (getline(&line, &len, file) != -1) {
    YASER_ASSERT(line, !=, NULL);

    // Ignore line if it not starts with digits 1-9, a minus or a whitespace
    if ((line[0] < '1' || line[0] > '9') && line[0] != '-' && line[0] != ' ') {
      continue;
    }

    tokenize_clause(line, &literal_pointer);

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

  if (num_literals <= 10) {
    print_formula();
  } else {
    log_debug("Not printing formula since it has more than 10 literals");
  }

  // Use the previously saved address to free the line buffer
  free(line);
  fclose(file);

  // Sanity check the number of clauses
  YASER_ASSERT(clause_pointer, ==, num_clauses);
}
