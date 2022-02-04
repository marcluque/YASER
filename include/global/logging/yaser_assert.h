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

#define MAX_DEBUG_OUTPUT (512U)

#define YASER_ASSERT(expression) asserted(!(expression), __FILE__, __LINE__, #expression)

static void asserted(const int cond, const char* const file_path, const int line, const char* const expression) {
#if defined(YASER_DEBUG)
  if (cond) {
    char* out = malloc(MAX_DEBUG_OUTPUT * sizeof(char));
    YASER_CHECK_MALLOC(out, __FILE__, __LINE__);
    char basename[MAX_LEN_BASENAME];
    get_basename(file_path, basename);
    char time_buffer[MAX_LEN_TIME_BUFFER];
    get_time(time_buffer);
    printf("[%s][YASER - " ANSI_COLOR_YELLOW "ASSERTION" ANSI_COLOR_RESET "][%s:%d]:" ANSI_COLOR_YELLOW
           " %s does not hold\n" ANSI_COLOR_RESET,
           time_buffer, basename, line, expression);
    cleanup_all();
    exit(EXIT_FAILURE);
  }
#else
  return;
#endif
}

#endif // YASER_ASSERT_H
