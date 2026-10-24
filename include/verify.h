#pragma once

#include <format>
#include "log.h"

#ifdef YASER_DEBUG

template <typename T>
[[nodiscard]] constexpr auto format_assert_operand(std::string_view expression, const T& value) {
    if constexpr (std::formattable<T, char>) {
        return std::format("{}(={})", expression, value);
    } else {
        return std::string{expression};
    }
}

template <typename LHS, typename RHS>
constexpr void log_assert_failed(const char* file, int line, const char* lhs_string, const LHS& lhs, const char* comparator, const char* rhs_string, const RHS& rhs) {
    log("DEBUG", file, line,
        "ASSERT FAILED: {} {} {}",
        format_assert_operand(lhs_string, lhs),
        comparator,
        format_assert_operand(rhs_string, rhs));
}

template <typename LHS, typename RHS, typename Compare>
constexpr void verify_compare(const char* file, int line, const char* lhs_string, const LHS& lhs, const char* comparator, const char* rhs_string, const RHS& rhs, Compare compare) {
    if (compare(lhs, rhs)) {
        return;
    }

    log_assert_failed(file, line, lhs_string, lhs, comparator, rhs_string, rhs);

    std::fflush(stdout);
    std::fflush(stderr);
    std::abort();
}

#define VERIFY_BINARY_IMPL(lhs_, rhs_, compare_, op_) \
    verify_compare(                                    \
        __FILE__, __LINE__,                            \
        #lhs_, (lhs_), op_, #rhs_, (rhs_),             \
        compare_{})

#define VERIFY_EQ(lhs_, rhs_) \
    VERIFY_BINARY_IMPL(lhs_, rhs_, std::equal_to<>, "==")

#define VERIFY_NE(lhs_, rhs_) \
    VERIFY_BINARY_IMPL(lhs_, rhs_, std::not_equal_to<>, "!=")

#define VERIFY_LT(lhs_, rhs_) \
    VERIFY_BINARY_IMPL(lhs_, rhs_, std::less<>, "<")

#define VERIFY_LE(lhs_, rhs_) \
    VERIFY_BINARY_IMPL(lhs_, rhs_, std::less_equal<>, "<=")

#define VERIFY_GT(lhs_, rhs_) \
    VERIFY_BINARY_IMPL(lhs_, rhs_, std::greater<>, ">")

#define VERIFY_GE(lhs_, rhs_) \
    VERIFY_BINARY_IMPL(lhs_, rhs_, std::greater_equal<>, ">=")

#define VERIFY(condition_)                                                \
    do {                                                                  \
        if (!(condition_)) {                                              \
            log("DEBUG", __FILE__, __LINE__,                              \
                "ASSERT FAILED: {}", #condition_);                        \
            std::fflush(stdout);                                          \
            std::fflush(stderr);                                          \
            std::abort();                                                 \
        }                                                                 \
    } while (false)
#else
    #define VERIFY(lhs_, comparator_, rhs_) std::ignore = 0;
#endif

#define VERIFY_NOT_REACHED() VERIFY(false, std::equals_to<>{}, true)
