//
// Created by marcluque on 20.06.2021.
//

#ifndef YASER_WATCHED_LITERALS_H
#define YASER_WATCHED_LITERALS_H

#include "global.h"
#include "formula.h"

typedef struct {
    int watched_literal;
    size_t clause_number;
    UT_hash_handle hh;
} Watched_Literal_Item;

Watched_Literal_Item* watched_literal_map = NULL;
Watched_Literal_Item* clause_map = NULL;

void watched_literals_init();

#endif //YASER_WATCHED_LITERALS_H
