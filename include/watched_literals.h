//
// Created by marcluque on 20.06.2021.
//

#ifndef YASER_WATCHED_LITERALS_H
#define YASER_WATCHED_LITERALS_H

struct my_struct {
    int id;                    /* key */
    char name[10];
    UT_hash_handle hh;         /* makes this structure hashable */
};

#include "external/uthash.h"

#endif //YASER_WATCHED_LITERALS_H
