/** @file */

//
// Created with <3 by marcluque, February 2022
//

#ifndef YASER_MALLOC_H
#define YASER_MALLOC_H

#include "log_common.h"

#define YASER_CHECK_MALLOC(address_, file_path_, line_)                                                           \
  do {                                                                                                            \
    if ((address_) == NULL) {                                                                                     \
      char basename_[MAX_LEN_BASENAME];                                                                           \
      get_basename(file_path_, basename_);                                                                        \
      char time_buffer_[MAX_LEN_TIME_BUFFER];                                                                     \
      get_time(time_buffer_);                                                                                     \
      printf("[%s][YASER - " ANSI_COLOR_RED "ERROR" ANSI_COLOR_RESET "][%s:%d]:" ANSI_COLOR_RED                   \
             " malloc failed\n" ANSI_COLOR_RESET,                                                                 \
             time_buffer_, basename_, line_);                                                                     \
      cleanup_all();                                                                                              \
      exit(EXIT_FAILURE);                                                                                         \
    }                                                                                                             \
  } while (0)

#endif // YASER_MALLOC_H
