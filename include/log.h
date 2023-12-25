#ifndef YASER_LOG_H
#define YASER_LOG_H

#include <filesystem>
#include <string>
#include <fmt/core.h>

inline void vlog(const char* log_level, const char* file, int line, fmt::string_view format, fmt::format_args args) {
  fmt::print("[{:5}]: ", log_level);
  fmt::vprint(format, args);
#ifdef PIPELINE
  std::filesystem::path p(file);
  fmt::print(" ({}:{})\n", p.filename(), line);
#else
  fmt::print(" ({}:{})\n", file, line);
#endif
}

template <typename... T>
void log(const char* log_level, const char* file, int line, fmt::format_string<T...> format, T&&... args) {
  vlog(log_level, file, line, format, fmt::make_format_args(args...));
}

#ifdef YASER_DEBUG
  #define DEBUG_LOG(format, ...) log("DEBUG", __FILE__, __LINE__, format __VA_OPT__(,) __VA_ARGS__)
#else
  #define DEBUG_LOG(format, ...) (void) 0;
#endif

#define INFO_LOG(format, ...) log("INFO", __FILE__, __LINE__, format __VA_OPT__(,) __VA_ARGS__)

#define ERROR_LOG(format, ...) log("ERROR", __FILE__, __LINE__, format __VA_OPT__(,) __VA_ARGS__)

#endif // YASER_LOG_H
