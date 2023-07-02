#ifndef YASER_LOG_H
#define YASER_LOG_H

#include <fmt/core.h>

void vlog(const char* log_level, const char* file, int line, fmt::string_view format, fmt::format_args args) {
  fmt::print("[{:5}]: ", log_level);
  fmt::vprint(format, args);
  fmt::print(" ({}:{})\n", file, line);
}

template <typename... T>
void log(const char* log_level, const char* file, int line, fmt::format_string<T...> format, T&&... args) {
  vlog(log_level, file, line, format, fmt::make_format_args(args...));
}

#ifdef YASER_DEBUG
  #define DEBUG_LOG(format, ...) log("DEBUG", __FILE__, __LINE__, format, __VA_ARGS__)
#else
  #define log_debug(...) (void) 0;
#endif

#endif // YASER_LOG_H
