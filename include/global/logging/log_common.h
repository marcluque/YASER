/** @file */

//
// Created with <3 by marcluque, February 2022
//

#ifndef YASER_LOG_COMMON_H
#define YASER_LOG_COMMON_H

#include <stddef.h>
#include <string.h>
#include <stdio.h>
#include <time.h>

#define ANSI_COLOR_RED     "\x1b[31m"
#define ANSI_COLOR_GREEN   "\x1b[32m"
#define ANSI_COLOR_YELLOW  "\x1b[33m"
#define ANSI_COLOR_BLUE    "\x1b[34m"
#define ANSI_COLOR_MAGENTA "\x1b[35m"
#define ANSI_COLOR_CYAN    "\x1b[36m"
#define ANSI_COLOR_RESET   "\x1b[0m"

#define DEBUG_ID                 ANSI_COLOR_CYAN "DEBUG" ANSI_COLOR_RESET
#define ERROR_ID                 ANSI_COLOR_RED "ERROR" ANSI_COLOR_RESET
#define COMMON_FORMAT(id, color) "[%s][YASER - " id "][%s]: " color

// Subtract 1 for NULL-termination
#define MAX_LEN_BASENAME    (64 - 1)
#define MAX_LEN_TIME_BUFFER (10U)

static char* get_time(char* time_buffer) {
  strftime(time_buffer, MAX_LEN_TIME_BUFFER, "%H:%M:%S", localtime(&(time_t){time(0)}));
  return time_buffer;
}

static void get_basename(const char* const file_path, char* const basename_buffer) {
  size_t len = strlen(file_path);
  size_t i   = len - 1;
  for (; file_path[i] != '/'; --i) {}

  len = len - 1 - i;
  // We don't assert since yaser_assert relies on the log
  if (len > MAX_LEN_BASENAME) {
    char time_buffer[MAX_LEN_TIME_BUFFER];
    get_time(time_buffer);

    const char* format = COMMON_FORMAT(
        ERROR_ID,
        ANSI_COLOR_RED) "basename_buffer (length: %d) too small for basename (length: %lu)\n" ANSI_COLOR_RESET;
    printf(format, time_buffer, "log_common.h", MAX_LEN_BASENAME, len);

    return;
  }

  strncpy(basename_buffer, file_path + i + 1, len);
  basename_buffer[len] = '\0';
}

#endif // YASER_LOG_COMMON_H
