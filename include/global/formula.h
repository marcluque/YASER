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
extern size_t num_variables;

extern size_t num_literals;

/**
 * Each array entry stores the starting position of its clause in the formula array
 * To iterate over clause[i] we do the following: for (int i = 0; i < clause[i + 1]; ++i)
 * Hence the start of clause i is indicated by clause[i] (inclusive) and the end is indicated by clause[i + 1]
 * (exclusive)
 */
extern formula_pos* clauses;
extern size_t num_clauses;

void formula_init(size_t num_variables_param, size_t num_clauses_param);

void formula_clear(void);

#endif // YASER_FORMULA_H
