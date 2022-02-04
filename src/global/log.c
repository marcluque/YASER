//
// Created with <3 by marcluque, February 2022
//

#include "global/logging/log.h"
#include "global/logging/log_common.h"
#include "global/cleanup.h"
#include "global/logging/yaser_malloc.h"
#include <malloc.h>
#include <stdlib.h>
#include <string.h>

// Subtract 1 for NULL-termination
#define MAX_LEN_LOG_MESSAGE (1024 - 1)

#define DEBUG_FORMAT COMMON_FORMAT ": " ANSI_COLOR_CYAN "%s" ANSI_COLOR_RESET
#define ERROR_FORMAT COMMON_FORMAT ": " ANSI_COLOR_RED "%s" ANSI_COLOR_RESET

void log_debug(const char* const file_path, const char* const debug_message) {
#if defined(YASER_DEBUG)
    char time_buffer[MAX_LEN_TIME_BUFFER];
    get_time(time_buffer);

    size_t debug_message_len = strlen(debug_message);
    // We don't assert since yaser_assert relies on the log
    if (debug_message_len > MAX_LEN_LOG_MESSAGE - MAX_LEN_TIME_BUFFER) {
        printf(COMMON_FORMAT ":" ANSI_COLOR_RED " debug message with length %zu exceeds max length %d\n" ANSI_COLOR_RESET, time_buffer, ANSI_COLOR_RED "DEBUG" ANSI_COLOR_RESET, "log.c", debug_message_len, MAX_LEN_LOG_MESSAGE - MAX_LEN_TIME_BUFFER);
    }

    char* basename = malloc(MAX_LEN_BASENAME * sizeof(char));
    YASER_CHECK_MALLOC(basename, __FILE__, __LINE__);
    get_basename(file_path, basename);

    char* out = malloc(MAX_LEN_LOG_MESSAGE * sizeof(char));
    YASER_CHECK_MALLOC(out, __FILE__, __LINE__);
    snprintf(out, MAX_LEN_LOG_MESSAGE, DEBUG_FORMAT, time_buffer, ANSI_COLOR_CYAN "DEBUG" ANSI_COLOR_RESET, basename, debug_message);
    printf("%s\n", out);

    free(basename);
    free(out);
#else
    return;
#endif
}

void log_error(const char* const file_path, const char* const error_message) {
    char time_buffer[MAX_LEN_TIME_BUFFER];
    get_time(time_buffer);

    size_t error_message_len = strlen(error_message);
    // We don't assert since yaser_assert relies on the log
    if (error_message_len > MAX_LEN_LOG_MESSAGE - MAX_LEN_TIME_BUFFER) {
        printf(COMMON_FORMAT ":" ANSI_COLOR_RED " error message with length %zu exceeds max length %d\n" ANSI_COLOR_RESET, time_buffer, ANSI_COLOR_RED "ERROR" ANSI_COLOR_RESET, "log.c", error_message_len, MAX_LEN_LOG_MESSAGE - MAX_LEN_TIME_BUFFER);
    }

    char* basename = malloc(MAX_LEN_BASENAME * sizeof(char));
    YASER_CHECK_MALLOC(basename, __FILE__, __LINE__);
    get_basename(file_path, basename);

    char* out = malloc(MAX_LEN_LOG_MESSAGE * sizeof(char));
    YASER_CHECK_MALLOC(out, __FILE__, __LINE__);
    snprintf(out, MAX_LEN_LOG_MESSAGE, ERROR_FORMAT, time_buffer, ANSI_COLOR_RED "ERROR" ANSI_COLOR_RESET, basename, error_message);
    printf("%s\n", out);

    free(basename);
    free(out);
}
