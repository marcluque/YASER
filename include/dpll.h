/** @file */

//
// Created with <3 by marcluque, June 2021
//

#ifndef YASER_DPLL_H
#define YASER_DPLL_H

#include "global/defines.h"
#include <stddef.h>
#include <stdbool.h>

// TODO: Test whether flatten actually helps here and doesn't worsen, e.g., cache locality
ATTR_FLATTEN ATTR_HOT bool dpll(void);

#endif // YASER_DPLL_H
