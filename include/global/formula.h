/** @file */

//
// Created with <3 by marcluque, June 2021
//

#ifndef YASER_FORMULA_H
#define YASER_FORMULA_H

#include "global/defines.h"
#include <stddef.h>

/**
 * Stores all variables (represented by l; see define) in a linear fashion, clauses are put one after another.
 * Clause ranges are indicated with the clauses array
 */
extern literal* formula;
extern size_t num_literals;

/**
 * variable -> value
 */
extern value* assignment_map;
extern size_t num_variables;

#define assignment_map_get(literal) (assignment_map[abs(literal)])

#define assignment_map_is_sat(literal)                                                                            \
  (((literal) > 0 && assignment_map_get(literal) == VALUE_TRUE)                                                   \
   || ((literal) < 0 && assignment_map_get(literal) == VALUE_FALSE))

#define assignment_map_is_unsat(literal)                                                                          \
  (((literal) > 0 && assignment_map_get(literal) == VALUE_FALSE)                                                  \
   || ((literal) < 0 && assignment_map_get(literal) == VALUE_TRUE))

#define assignment_map_set(literal, value) (assignment_map[abs(literal)] = (value))

/**
 * Each array entry stores the starting position of its clause in the formula array.
 * We use ::ITERATE_CLAUSE for clause iteration.
 * Hence the start of clause i is indicated by clause[i] (inclusive) and the end is indicated by clause[i + 1] (exclusive).
 */
extern formula_pos* clauses;
extern size_t num_clauses;

#define ITERATE_CLAUSE(clause) for (formula_pos i = clauses[(clause)]; i < clauses[(clause) + 1]; ++i)

void formula_init(size_t num_variables_param, size_t num_clauses_param);

void formula_clear(void);

#endif // YASER_FORMULA_H
