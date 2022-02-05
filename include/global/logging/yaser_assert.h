/** @file */

//
// Created with <3 by marcluque, February 2022
//

#ifndef YASER_ASSERT_H
#define YASER_ASSERT_H

#include "../cleanup.h"
#include "yaser_malloc.h"
#include "log_common.h"
#include <malloc.h>
#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

#define YASER_ASSERT(left,operator_,right) asserted(!(((long long) left) operator_ ((long long) right)), ((long long) left), #operator_, ((long long) right), __FILE__, __LINE__, #left " " #operator_ " " #right)

static void asserted(const bool cond, const long long left, const char* const operator, const long long right, const char* const file_path, const int line, const char* const expression) {
#if defined(YASER_DEBUG)
  if (cond) {
    char basename[MAX_LEN_BASENAME];
    get_basename(file_path, basename);

    char time_buffer[MAX_LEN_TIME_BUFFER];
    get_time(time_buffer);

    const char* format = "[%s][YASER - " ANSI_COLOR_YELLOW "ASSERTION" ANSI_COLOR_RESET "][%s:%d]:" ANSI_COLOR_YELLOW " \"%s\" does not hold: %d %s %d\n" ANSI_COLOR_RESET;
    printf(format, time_buffer, basename, line, expression, left, operator, right);

    cleanup_all();
    yaser_exit();
  }
#else
  return;
#endif
}

#endif // YASER_ASSERT_H
