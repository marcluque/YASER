/** @file */

//
// Created with <3 by marcluque, February 2022
//

#ifndef YASER_H
#define YASER_H

#include "attributes.h"
#include <stddef.h>
#include "global/cleanup.h"
#include "logging/log_common.h"
#include <malloc.h>
#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

#define YASER_EXIT()                                                                                              \
  do {                                                                                                            \
    cleanup_all();                                                                                                \
    if (YASER_DEBUG == 1) {                                                                                       \
      exit(EXIT_SUCCESS);                                                                                         \
    } else {                                                                                                      \
      exit(EXIT_FAILURE);                                                                                         \
    }                                                                                                             \
  } while (0)

#if defined(YASER_DEBUG)
  #define YASER_CHECK_MALLOC(address_)                                                                            \
    do {                                                                                                          \
      if ((address_) == NULL) {                                                                                    \
        char basename_[MAX_LEN_BASENAME];                                                                         \
        get_basename(__FILE__, basename_);                                                                       \
        char time_buffer_[MAX_LEN_TIME_BUFFER];                                                                   \
        get_time(time_buffer_);                                                                                   \
        printf("[%s][YASER - " ERROR_ID "][%s:%d]:" ANSI_COLOR_RED " malloc failed\n" ANSI_COLOR_RESET,          \
               time_buffer_, basename_, __LINE__);                                                                    \
        cleanup_all();                                                                                            \
        YASER_EXIT();                                                                                             \
      }                                                                                                           \
    } while (0)

  #define YASER_ASSERT(left_, operator_, right_)                                                                    \
    do {                                                                                                          \
      if (!(left_ operator_ right_)) {                                                                              \
        char basename[MAX_LEN_BASENAME];                                                                          \
        get_basename(__FILE__, basename);                                                                         \
                                                                                                                  \
        char time_buffer[MAX_LEN_TIME_BUFFER];                                                                    \
        get_time(time_buffer);                                                                                    \
                                                                                                                  \
        const char* format = "[%s][YASER - " ANSI_COLOR_YELLOW "ASSERTION" ANSI_COLOR_RESET                       \
                             "][%s:%d]:" ANSI_COLOR_YELLOW " \"%s\" does not hold: %d %s %d\n" ANSI_COLOR_RESET;  \
        printf(format, time_buffer, basename, __LINE__, #left_ " " #operator_ " " #right_, left_, #operator_,        \
               right_);                                                                                            \
                                                                                                                  \
        cleanup_all();                                                                                            \
        YASER_EXIT();                                                                                             \
      }                                                                                                           \
    } while (0)
#else
  #define YASER_CHECK_MALLOC(address_)                                                                            \
    do {                                                                                                          \
    } while (0)
  #define YASER_ASSERT(left, operator_, right)                                                                    \
    do {                                                                                                          \
    } while (0)
#endif

#endif // YASER_H
