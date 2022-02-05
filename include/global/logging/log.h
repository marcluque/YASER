/** @file */

//
// Created with <3 by marcluque, February 2022
//

#ifndef YASER_LOG_H
#define YASER_LOG_H

#include "global/attributes.h"


ATTR_NON_NULL ATTR_HIDDEN ATTR_FORMAT void log_debug_(const char* file_path, const char* debug_format, ...);

#define log_debug(...) log_debug_(__FILE__, __VA_ARGS__)

ATTR_NON_NULL ATTR_HIDDEN ATTR_FORMAT void log_error_(const char* file_path, const char* error_format, ...);

#define log_error(...) log_error_(__FILE__, __VA_ARGS__)

#endif // YASER_LOG_H
