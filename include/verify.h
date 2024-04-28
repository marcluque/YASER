#ifndef YASER_VERIFY_H
#define YASER_VERIFY_H

#include "log.h"

#ifdef YASER_DEBUG
    #define VERIFY(lhs_, comparator_, rhs_)                                                                       \
        do {                                                                                                      \
            if (!comparator_(lhs_, rhs_)) {                                                                       \
                DEBUG_LOG("ASSERT FAILED: {} {} {}", #lhs_, #comparator_, #rhs_);                                 \
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
