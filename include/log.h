#pragma once

#include <format>
#include <print>
#include <filesystem>

inline void vlog(const char* log_level, const char* file, int line, std::string_view format, std::format_args args) {
    std::print("[{:7}]: ", log_level);
    std::print("{}", std::vformat(format, args));

#ifdef PIPELINE
    std::filesystem::path p(file);
    std::print(" ({}:{})\n", p.filename().string(), line);
#else
    std::print(" ({}:{})\n", file, line);
#endif
}

template <typename... T>
void log(const char* log_level, const char* file, const int line, std::format_string<T...> format, T&&... args) {
    vlog(log_level, file, line, format.get(), std::make_format_args(args...));
}

#ifdef YASER_DEBUG
  #define DEBUG_LOG(format, ...) log("DEBUG", __FILE__, __LINE__, format __VA_OPT__(,) __VA_ARGS__)
#else
  #define DEBUG_LOG(format, ...) (void) 0;
#endif

#define INFO_LOG(format, ...) log("INFO", __FILE__, __LINE__, format __VA_OPT__(,) __VA_ARGS__)

#define WARNING_LOG(format, ...) log("WARNING", __FILE__, __LINE__, format __VA_OPT__(,) __VA_ARGS__)

#define ERROR_LOG(format, ...) log("ERROR", __FILE__, __LINE__, format __VA_OPT__(,) __VA_ARGS__)
