/** @file */

//
// Created with <3 by marcluque, June 2021
//

#ifndef YASER_DIMACS_PARSER_H
#define YASER_DIMACS_PARSER_H

#include <stddef.h>
#include "global/attributes.h"

ATTR_NON_NULL void dimacs_parser_register_init_callback(void (*init_callback)(size_t, size_t));

ATTR_NON_NULL void dimacs_parse_file(const char* file_path);

#endif // YASER_DIMACS_PARSER_H
