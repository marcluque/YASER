//
// Created with <3 by marcluque, June 2021
//

#ifndef YASER_GLOBAL_H
#define YASER_GLOBAL_H

#include <stdio.h>
#include <stdbool.h>
#include <stddef.h>
#include <malloc.h>
#include <assert.h>
#include <string.h>

// Represents the index of the either positive or negative literal. E.g. literal x_i will be stored with i.
// A negated literal ¬x_j will be stored with -j
// We use a #define to make sure that the range of indices may be changed at any time
#define Literal int

#include "external/uthash.h"

#endif //YASER_GLOBAL_H
