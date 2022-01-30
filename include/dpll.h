/** @file */

//
// Created with <3 by marcluque, June 2021
//

#ifndef YASER_DPLL_H
#define YASER_DPLL_H

#include "defines.h"
#include <stddef.h>
#include <stdbool.h>

void dpll_register_assignment_callback(void (*callback)(formula_pos));

bool dpll(void);

#endif // YASER_DPLL_H
