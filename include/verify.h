#ifndef YASER_VERIFY_H
#define YASER_VERIFY_H

#include "log.h"

#ifdef YASER_DEBUG
  #define VERIFY(expr) \
    do {\
      if (__builtin_expect(!(expr), 0)) {                                                                              \
        DEBUG_LOG("VERIFICATION FAILED: {}", #expr);                   \
        fflush(stdout); \
        fflush(stderr); \
        __builtin_trap();                                                                                                                    \
      } else {                                                                                                          \
        (void) 0;                                                                                                                    \
      } \
    } while (0)
#else
  #define VERIFY(expr) (void) 0;
#endif

#define VERIFY_NOT_REACHED() VERIFY(false)

#endif // YASER_VERIFY_H
