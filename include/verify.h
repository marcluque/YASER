#ifndef YASER_VERIFY_H
#define YASER_VERIFY_H

#include <functional>
#include "log.h"

template <typename T, typename Comparator>
void verify(T lhs, Comparator comparator, T rhs, const char* lhs_str, const char* comparator_str,
            const char* rhs_str) {
    if (!comparator(lhs, rhs)) {
        DEBUG_LOG("ASSERT FAILED: {} {} {}", lhs_str, comparator_str, rhs_str);
        fflush(stdout);
        fflush(stderr);
        __builtin_trap();
    }
}

#ifdef YASER_DEBUG
    #define VERIFY(lhs_, comparator_, rhs_) verify(lhs_, comparator_, rhs_, #lhs_, #comparator_, #rhs_)
#else
    #define VERIFY(lhs_, comparator_, rhs_) (void) 0;
#endif

#define VERIFY_NOT_REACHED() VERIFY(false, std::equals_to<>{}, true)

#endif // YASER_VERIFY_H
