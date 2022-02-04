/** @file */

//
// Created with <3 by marcluque, February 2022
//

#ifndef YASER_LOG_H
#define YASER_LOG_H

#include "global/attributes.h"

ATTR_NON_NULL void log_debug(const char* file_path, const char* debug_message);

ATTR_NON_NULL void log_error(const char* file_path, const char* error_message);

#endif // YASER_LOG_H
