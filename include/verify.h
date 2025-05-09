#ifndef YASER_VERIFY_H
#define YASER_VERIFY_H

#include "log.h"

#ifdef YASER_DEBUG

template <typename LHS, typename RHS>
std::enable_if_t<fmt::is_formattable<LHS>() && fmt::is_formattable<RHS>(), void>
log_assert_failed(const char* lhs_string, const LHS& lhs, const char* comparator, const char* rhs_string, const RHS& rhs) {
    DEBUG_LOG("ASSERT FAILED: {}(={}) {} {}(={})", lhs_string, lhs, comparator, rhs_string, rhs);
}

template <typename LHS, typename RHS>
std::enable_if_t<!fmt::is_formattable<LHS>() && fmt::is_formattable<RHS>(), void>
log_assert_failed([[maybe_unused]] const char* _lhs_string, const LHS& lhs, const char* comparator, const char* rhs_string, const RHS& rhs) {
    DEBUG_LOG("ASSERT FAILED: {} {} {}(={})", lhs, comparator, rhs_string, rhs);
}

template <typename LHS, typename RHS>
std::enable_if_t<fmt::is_formattable<LHS>() && !fmt::is_formattable<RHS>(), void>
log_assert_failed(const char* lhs_string, const LHS& lhs, const char* comparator, [[maybe_unused]] const char* _rhs_string, const RHS& rhs) {
    DEBUG_LOG("ASSERT FAILED: {}(={}) {} {}", lhs_string, lhs, comparator, rhs);
}

template <typename LHS, typename RHS>
std::enable_if_t<!fmt::is_formattable<LHS>() && !fmt::is_formattable<RHS>(), void>
log_assert_failed([[maybe_unused]] const char* _lhs_string, const LHS& lhs, const char* comparator, [[maybe_unused]] const char* _rhs_string, const RHS& rhs) {
    DEBUG_LOG("ASSERT FAILED: {} {} {}", lhs, comparator, rhs);
}

    #define VERIFY(lhs_, comparator_, rhs_)                                                                       \
        do {                                                                                                      \
            if (!comparator_(lhs_, rhs_)) {                                                                       \
                log_assert_failed(#lhs_, lhs_, #comparator_, #rhs_, rhs_);                                        \
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
