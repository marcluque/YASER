//
// Created with <3 by marcluque, Juni 2021
//

#ifndef YASER_CLAUSE_RESOLUTION_H
#define YASER_CLAUSE_RESOLUTION_H

#include "global.h"
#include "formula.h"

typedef struct {
    int variable;
    UT_hash_handle hh;
} Resolvent_Item;

#endif //YASER_CLAUSE_RESOLUTION_H
