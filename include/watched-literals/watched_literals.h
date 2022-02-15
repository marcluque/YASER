/** @file */

//
// Created with <3 by marcluque, June 2021
//

#ifndef YASER_WATCHED_LITERALS_H
#define YASER_WATCHED_LITERALS_H

#include "global/defines.h"

ATTR_COLD void watched_literals_init(void);

ATTR_HOT void watched_literals_check(literal watched_literal);

#endif // YASER_WATCHED_LITERALS_H
