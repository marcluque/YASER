//
// Created by marcluque on 20.06.2021.
//

#ifndef YASER_WATCHED_LITERALS_H
#define YASER_WATCHED_LITERALS_H

#include "global.h"
#include "formula.h"
#include "assignment.h"

typedef struct {
    int watched_literal;
    size_t clause_number;
    UT_hash_handle hh;
} Literal_Clause_Item;

typedef struct {
    size_t clause_number;
    int watched_literals[2];
    UT_hash_handle hh;
} Clause_Literal_Item;

void watched_literals_init();

#endif //YASER_WATCHED_LITERALS_H
