#ifndef YASER_VERIFY_H
#define YASER_VERIFY_H

#include "log.h"

#ifdef YASER_DEBUG

template <typename LHS, typename RHS>
std::enable_if_t<fmt::is_formattable<LHS>() && fmt::is_formattable<RHS>(), void>
log_assert_failed(const char* file, const int line, const char* lhs_string, const LHS& lhs, const char* comparator, const char* rhs_string, const RHS& rhs) {
    log("DEBUG", file, line, "ASSERT FAILED: {}(={}) {} {}(={})", lhs_string, lhs, comparator, rhs_string, rhs);
}

template <typename LHS, typename RHS>
std::enable_if_t<!fmt::is_formattable<LHS>() && fmt::is_formattable<RHS>(), void>
log_assert_failed(const char* file, const int line, const char* _lhs_string, [[maybe_unused]]  const LHS& lhs, const char* comparator, const char* rhs_string, const RHS& rhs) {
    log("DEBUG", file, line, "ASSERT FAILED: {} {} {}(={})", _lhs_string, comparator, rhs_string, rhs);
}

template <typename LHS, typename RHS>
std::enable_if_t<fmt::is_formattable<LHS>() && !fmt::is_formattable<RHS>(), void>
log_assert_failed(const char* file, const int line, const char* lhs_string, const LHS& lhs, const char* comparator, const char* _rhs_string, [[maybe_unused]]  const RHS& rhs) {
    log("DEBUG", file, line, "ASSERT FAILED: {}(={}) {} {}", lhs_string, lhs, comparator, _rhs_string);
}

template <typename LHS, typename RHS>
std::enable_if_t<!fmt::is_formattable<LHS>() && !fmt::is_formattable<RHS>(), void>
log_assert_failed(const char* file, const int line, const char* _lhs_string, [[maybe_unused]] const LHS& lhs, const char* comparator, const char* _rhs_string, [[maybe_unused]]  const RHS& rhs) {
    log("DEBUG", file, line, "ASSERT FAILED: {} {} {}", _lhs_string, comparator, _rhs_string);
}

    #define VERIFY(lhs_, comparator_, rhs_)                                                                       \
        do {                                                                                                      \
            if (!comparator_(lhs_, rhs_)) {                                                                       \
                log_assert_failed(__FILE__, __LINE__, #lhs_, lhs_, #comparator_, #rhs_, rhs_);                    \
                fflush(stdout);                                                                                   \
                fflush(stderr);                                                                                   \
                __builtin_trap();                                                                                 \
            }                                                                                                     \
        } while (0)
#else
    #define VERIFY(lhs_, comparator_, rhs_) (void) 0;
#endif

#define VERIFY_NOT_REACHED() VERIFY(false, std::equals_to<>{}, true)

#endif // YASER_VERIFY_H
