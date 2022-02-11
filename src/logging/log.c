//
// Created with <3 by marcluque, February 2022
//

#include "logging/log.h"
#include "logging/log_common.h"
#include "global/yaser.h"
#include <malloc.h>
#include <stdarg.h>

// Subtract 1 for NULL-termination
#define MAX_LEN_LOG_MESSAGE (2048 - 1)

#define DEBUG_FORMAT COMMON_FORMAT(DEBUG_ID, ANSI_COLOR_CYAN) "%s" ANSI_COLOR_RESET
#define ERROR_FORMAT COMMON_FORMAT(ERROR_ID, ANSI_COLOR_RED) "%s" ANSI_COLOR_RESET

void log_debug_(const char* const file_path, const char* const debug_format, ...) {
#if defined(YASER_DEBUG)
  va_list args;
  va_start(args, debug_format);

  char time_buffer[MAX_LEN_TIME_BUFFER];
  get_time(time_buffer);

  char* pre_out = malloc(MAX_LEN_LOG_MESSAGE * sizeof(char));
  YASER_CHECK_MALLOC(pre_out);
  vsnprintf(pre_out, MAX_LEN_LOG_MESSAGE, debug_format, args);

  char* basename = malloc(MAX_LEN_BASENAME * sizeof(char));
  YASER_CHECK_MALLOC(basename);
  get_basename(file_path, basename);

  char* out = malloc(MAX_LEN_LOG_MESSAGE * sizeof(char));
  YASER_CHECK_MALLOC(out);
  snprintf(out, MAX_LEN_LOG_MESSAGE, DEBUG_FORMAT, time_buffer, basename, pre_out);
  printf("%s\n", out);

  free(pre_out);
  free(basename);
  free(out);

  va_end(args);
#else
  return;
#endif
}

void log_error_(const char* const file_path, const char* const error_format, ...) {
  va_list args;
  va_start(args, error_format);

  char time_buffer[MAX_LEN_TIME_BUFFER];
  get_time(time_buffer);

  char* pre_out = malloc(MAX_LEN_LOG_MESSAGE * sizeof(char));
  YASER_CHECK_MALLOC(pre_out);
  vsnprintf(pre_out, MAX_LEN_LOG_MESSAGE, error_format, args);

  char* basename = malloc(MAX_LEN_BASENAME * sizeof(char));
  YASER_CHECK_MALLOC(basename);
  get_basename(file_path, basename);

  char* out = malloc(MAX_LEN_LOG_MESSAGE * sizeof(char));
  YASER_CHECK_MALLOC(out);
  snprintf(out, MAX_LEN_LOG_MESSAGE, ERROR_FORMAT, time_buffer, basename, pre_out);
  printf("%s\n", out);

  free(pre_out);
  free(basename);
  free(out);

  va_end(args);
}
