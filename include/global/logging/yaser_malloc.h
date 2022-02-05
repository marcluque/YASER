/** @file */

//
// Created with <3 by marcluque, February 2022
//

#ifndef YASER_MALLOC_H
#define YASER_MALLOC_H

#include "log_common.h"
#include "global/defines.h"

#define ERROR_ID ANSI_COLOR_RED "ERROR" ANSI_COLOR_RESET

static void check_malloc(const void* const address, const char* const file_path, const size_t line) {
  if ((address) == NULL) {
    char basename_[MAX_LEN_BASENAME];
    get_basename(file_path, basename_);
    char time_buffer_[MAX_LEN_TIME_BUFFER];
    get_time(time_buffer_);
    printf("[%s][YASER - " ERROR_ID "][%s:%zu]:" ANSI_COLOR_RED
           " malloc failed\n" ANSI_COLOR_RESET,
           time_buffer_, basename_, line);
    cleanup_all();
    yaser_exit();
  }
}

#define YASER_CHECK_MALLOC(address_)                                                                              \
  do {                                                                                                            \
    check_malloc(address_, __FILE__, __LINE__);                                                                                                           \
  } while (0)

#endif // YASER_MALLOC_H
