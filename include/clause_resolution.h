/** @file */

//
// Created with <3 by marcluque, June 2021
//

#ifndef YASER_CLAUSE_RESOLUTION_H
#define YASER_CLAUSE_RESOLUTION_H

#include "defines.h"
#include "external/uthash.h"

typedef struct {
    literal l;
    UT_hash_handle hh;
} Resolvent_Item;

int* build_resolvent(clause_index clause_1, clause_index clause_2, literal l);

#endif //YASER_CLAUSE_RESOLUTION_H
