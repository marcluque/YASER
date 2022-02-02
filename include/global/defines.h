/** @file */

//
// Created with <3 by marcluque, June 2021
//

#ifndef YASER_DEFINES_H
#define YASER_DEFINES_H

#include <limits.h>

/**
 * Represents the index of the either positive or negative l. E.g. l x_i will be stored with i.
 * A negated l ¬x_j will be stored with -j
 * We use a #define to make sure that the range of indices may be changed at any time
 */
typedef int literal;

/**
 *
 */
typedef unsigned long long formula_pos;

/**
 *
 */
#define NOT_FOUND (ULLONG_MAX)

/**
 *
 */
#define EXIT_DEBUG (0U)

/**
 *
 */
typedef unsigned long long clause_index;

/**
 *
 */
typedef enum {
    VALUE_INVALID = -1,
    VALUE_FALSE   = 0,
    VALUE_TRUE    = 1,
} value;

#endif // YASER_DEFINES_H
