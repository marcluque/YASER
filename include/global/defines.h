/** @file */

//
// Created with <3 by marcluque, June 2021
//

#ifndef YASER_DEFINES_H
#define YASER_DEFINES_H

#include "utarray.h"
#include "cleanup.h"
#include "attributes.h"
#include <limits.h>
#include <stdlib.h>

/**
 * Represents the index of the either positive or negative l. E.g. l x_i will be stored with i.
 * A negated l ¬x_j will be stored with -j
 * We use a #define to make sure that the range of indices may be changed at any time
 */
typedef int literal;

/**
 *
 */
typedef unsigned long int formula_pos;

/**
 *
 */
#define NOT_FOUND (ULONG_MAX)

/**
 *
 */
typedef unsigned long int clause_index;

/**
 *
 */
typedef enum {
  VALUE_INVALID = 0,
  VALUE_FALSE   = 1,
  VALUE_TRUE    = 2,
} value;

ATTR_NORETURN static void yaser_exit(void) {
  cleanup_all();
#ifdef YASER_DEBUG
  exit(EXIT_SUCCESS);
#else
  exit(EXIT_FAILURE);
#endif
}

#endif // YASER_DEFINES_H
