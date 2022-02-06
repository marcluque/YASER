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

#if defined(YASER_DEBUG)
#define YASER_ASSERT(left,operator_,right) \
do {                                       \
  if (!(left operator_ right)) { \
    char basename[MAX_LEN_BASENAME]; \
    get_basename(__FILE__, basename); \
    \
    char time_buffer[MAX_LEN_TIME_BUFFER]; \
    get_time(time_buffer); \
    \
    const char* format = "[%s][YASER - " ANSI_COLOR_YELLOW "ASSERTION" ANSI_COLOR_RESET "][%s:%d]:" \
    ANSI_COLOR_YELLOW " \"%s\" does not hold: %d %s %d\n" ANSI_COLOR_RESET; \
    printf(format, time_buffer, basename, __LINE__, #left " " #operator_ " " #right, left, #operator_, right); \
     \
    cleanup_all(); \
    yaser_exit(); \
  }                 \
} while (0)
#else
    #define YASER_ASSERT(left,operator_,right) ;
#endif

#endif // YASER_ASSERT_H
