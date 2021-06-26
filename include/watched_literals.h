//
// Created with <3 by marcluque, June 2021
//

#ifndef YASER_WATCHED_LITERALS_H
#define YASER_WATCHED_LITERALS_H

#include "global.h"
#include "formula.h"
#include "assignment.h"

typedef struct {
    size_t watched_literal;
    size_t clause_number;
    UT_hash_handle hh;
} Literal_Clause_Item;

typedef struct {
    size_t clause_number;
    size_t watched_literals[2];
    UT_hash_handle hh;
} Clause_Literal_Item;

void watched_literals_init();

void watched_literal_check(size_t literal_pos);

#endif //YASER_WATCHED_LITERALS_H
