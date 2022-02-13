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
#define INFO_FORMAT COMMON_FORMAT(INFO_ID, ANSI_COLOR_GREEN) "%s" ANSI_COLOR_RESET
#define ERROR_FORMAT COMMON_FORMAT(ERROR_ID, ANSI_COLOR_RED) "%s" ANSI_COLOR_RESET

#pragma GCC diagnostic push
#pragma GCC diagnostic ignored "-Wsuggest-attribute=format"
ATTR_NON_NULL static void log_output(const char* const file_path, const char* const format_string, va_list args, const char* const output_format) {
  char time_buffer[MAX_LEN_TIME_BUFFER];
  get_time(time_buffer);

  char* pre_out = malloc(MAX_LEN_LOG_MESSAGE * sizeof(char));
  YASER_CHECK_MALLOC(pre_out);
  vsnprintf(pre_out, MAX_LEN_LOG_MESSAGE, format_string, args);

  char* basename = malloc(MAX_LEN_BASENAME * sizeof(char));
  YASER_CHECK_MALLOC(basename);
  get_basename(file_path, basename);

  char* out = malloc(MAX_LEN_LOG_MESSAGE * sizeof(char));
  YASER_CHECK_MALLOC(out);
  snprintf(out, MAX_LEN_LOG_MESSAGE, output_format, time_buffer, basename, pre_out);
  printf("%s\n", out);

  free(pre_out);
  free(basename);
  free(out);
}
#pragma GCC diagnostic pop

void log_debug_(const char* const file_path, const char* const debug_format, ...) {
#if defined(YASER_DEBUG)
  va_list args;
  va_start(args, debug_format);

  log_output(file_path, debug_format, args, DEBUG_FORMAT);

  va_end(args);
#else
  return;
#endif
}

void log_info_(const char* const file_path, const char* const info_format, ...) {
  va_list args;
  va_start(args, info_format);

  log_output(file_path, info_format, args, INFO_FORMAT);

  va_end(args);
}

void log_error_(const char* const file_path, const char* const error_format, ...) {
  va_list args;
  va_start(args, error_format);

  log_output(file_path, error_format, args, ERROR_FORMAT);

  va_end(args);
}
