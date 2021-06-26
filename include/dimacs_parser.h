//
// Created with <3 by marcluque, June 2021
//

#ifndef YASER_DIMACS_PARSER_H
#define YASER_DIMACS_PARSER_H

#include "global.h"
#include "formula.h"
#include "assignment.h"

void dimacs_parser_register_init_callback(void (*init_callback)(size_t, size_t));

void dimacs_parse_file(const char* restrict file_path);

#endif //YASER_DIMACS_PARSER_H
