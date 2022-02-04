/** @file */

//
// Created with <3 by marcluque, June 2021
//

#ifndef YASER_CLAUSE_RESOLUTION_H
#define YASER_CLAUSE_RESOLUTION_H

#include "global/defines.h"
#include "uthash.h"

literal* clause_resolution_build_resolvent(clause_index clause_1, clause_index clause_2, literal l);

#endif // YASER_CLAUSE_RESOLUTION_H
