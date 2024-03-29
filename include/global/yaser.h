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

#define ASSERT_ID         ANSI_COLOR_YELLOW "ASSERTION" ANSI_COLOR_RESET
#define FORMAT(id, color) "[%s][YASER - " id "][%s:%d]:" color

#if defined(YASER_DEBUG)
  #define YASER_EXIT()                                                                                            \
    do {                                                                                                          \
      cleanup_all();                                                                                              \
      exit(EXIT_SUCCESS);                                                                                         \
    } while (0)

  #define YASER_CHECK_MALLOC(address_)                                                                            \
    do {                                                                                                          \
      if ((address_) == NULL) {                                                                                   \
        char basename_[MAX_LEN_BASENAME];                                                                         \
        get_basename(__FILE__, basename_);                                                                        \
        char time_buffer_[MAX_LEN_TIME_BUFFER];                                                                   \
        get_time(time_buffer_);                                                                                   \
        printf(FORMAT(ERROR_ID, ANSI_COLOR_RED) " malloc failed\n" ANSI_COLOR_RESET, time_buffer_, basename_,     \
               __LINE__);                                                                                         \
        YASER_EXIT();                                                                                             \
      }                                                                                                           \
    } while (0)

  #define YASER_ASSERT(left_, operator_, right_)                                                                  \
    do {                                                                                                          \
      if (!(left_ operator_ right_)) {                                                                            \
        char basename_[MAX_LEN_BASENAME];                                                                         \
        get_basename(__FILE__, basename_);                                                                        \
                                                                                                                  \
        char time_buffer_[MAX_LEN_TIME_BUFFER];                                                                   \
        get_time(time_buffer_);                                                                                   \
                                                                                                                  \
        const char* format_ = FORMAT(ASSERT_ID,                                                                   \
                                     ANSI_COLOR_YELLOW) " \"%s\" does not hold: %d %s %d\n" ANSI_COLOR_RESET;     \
        printf(format_, time_buffer_, basename_, __LINE__, #left_ " " #operator_ " " #right_, left_, #operator_,  \
               right_);                                                                                           \
        YASER_EXIT();                                                                                             \
      }                                                                                                           \
    } while (0)
#else
  #define YASER_EXIT()                                                                                            \
    do {                                                                                                          \
      cleanup_all();                                                                                              \
      exit(EXIT_FAILURE);                                                                                         \
    } while (0)

  #define YASER_CHECK_MALLOC(address_)                                                                            \
    do {                                                                                                          \
    } while (0)

  #define YASER_ASSERT(left, operator_, right)                                                                    \
    do {                                                                                                          \
    } while (0)
#endif

#endif // YASER_H
