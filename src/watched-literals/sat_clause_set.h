/** @file */

//
// Created with <3 by marcluque, February 2022
//

#ifndef YASER_SAT_CLAUSE_SET_H
#define YASER_SAT_CLAUSE_SET_H

#include "global/defines.h"
#include "uthash.h"
#include <stdbool.h>

typedef struct SatClauseItem {
  /**
   *
   */
  clause_index clause;

  /**
   *
   */
  UT_hash_handle hh;
} SatClauseItem;

ATTR_CONST bool sat_clause_set_contains(clause_index clause);

void sat_clause_set_add(clause_index clause);

ATTR_PURE bool sat_clause_set_exists_unsat(void);

#endif // YASER_SAT_CLAUSE_SET_H
