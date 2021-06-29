//
// Created with <3 by marcluque, June 2021
//

#ifndef YASER_FORMULA_H
#define YASER_FORMULA_H

#include "global.h"

extern Variable* formula;
extern size_t num_variables;
extern size_t* clauses;
extern size_t num_clauses;

void formula_init(size_t num_variables_param, size_t num_clauses_param);

void formula_clear();

#endif //YASER_FORMULA_H
