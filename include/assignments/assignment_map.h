/** @file */

//
// Created with <3 by marcluque, January 2022
//

#ifndef YASER_ASSIGNMENT_MAP_H
#define YASER_ASSIGNMENT_MAP_H

#include "global/defines.h"
#include "global/attributes.h"
#include "external/uthash.h"

typedef struct {
    formula_pos literal_pos;
    value v;
    UT_hash_handle hh;
} AssignmentMapItem;

void assignment_map_add(formula_pos literal_pos, value v);

ATTR_PURE int assignment_map_get_value(formula_pos literal_pos);

void assignment_map_clear(void);

#endif // YASER_ASSIGNMENT_MAP_H
