//
// Created with <3 by marcluque, June 2021
//

#ifndef YASER_CLAUSE_RESOLUTION_H
#define YASER_CLAUSE_RESOLUTION_H

#include "global.h"
#include "formula.h"

typedef struct {
    Literal literal;
    UT_hash_handle hh;
} Resolvent_Item;

#endif //YASER_CLAUSE_RESOLUTION_H
