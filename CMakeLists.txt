cmake_minimum_required(VERSION 3.13)
project(yaser
        VERSION 0.1
        DESCRIPTION "Yet Another Sat solvER"
        LANGUAGES CXX)

set(CMAKE_CXX_STANDARD 23)
set(CMAKE_CXX_STANDARD_REQUIRED ON)
set(CMAKE_CXX_EXTENSIONS OFF)

if (CMAKE_BUILD_TYPE MATCHES "ASAN")
    message("[YASER] AddressSanitizer instrumentation enabled")
    set(ASAN_FLAGS "-fsanitize=address -fno-omit-frame-pointer -fno-optimize-sibling-calls -O3 -g")
    set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} ${ASAN_FLAGS}")
    set(CMAKE_LINKER_FLAGS "${CMAKE_LINKER_FLAGS} ${ASAN_FLAGS}")
endif()

if (CMAKE_BUILD_TYPE MATCHES "MSAN")
    message("[YASER] MemorySanitizer instrumentation enabled")
    if (CMAKE_CXX_COMPILER_ID STREQUAL "GNU")
        set(MSAN_FLAGS "-fsanitize=leak")
    else()
        set(MSAN_FLAGS "-fsanitize=memory")
    endif()
    set(OTHER_MSAN_FLAGS "-fPIE -pie -fno-omit-frame-pointer -O3 -g")

    set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} ${MSAN_FLAGS} ${OTHER_MSAN_FLAGS}")
    set(CMAKE_LINKER_FLAGS "${CMAKE_LINKER_FLAGS} ${MSAN_FLAGS} ${OTHER_MSAN_FLAGS}")
endif()

if (CMAKE_BUILD_TYPE MATCHES "UBSAN")
    message("[YASER] UndefinedBehaviorSanitizer instrumentation enabled")
    set(UBSAN_FLAGS "-fsanitize=undefined -O3 -g")
    set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} ${UBSAN_FLAGS}")
    set(CMAKE_LINKER_FLAGS "${CMAKE_LINKER_FLAGS} ${UBSAN_FLAGS}")
endif()

if (CMAKE_BUILD_TYPE MATCHES "Debug")
    message("[YASER] Using yaser debug mode (NOT NDEBUG)")
    add_compile_definitions(YASER_DEBUG)
endif()

if (CMAKE_BUILD_TYPE MATCHES "Release")
    message("[YASER] Using release mode")
    set(OPTIMIZATION_FLAGS "-O3")
    set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} ${OPTIMIZATION_FLAGS}")
    set(CMAKE_LINKER_FLAGS "${CMAKE_LINKER_FLAGS} ${OPTIMIZATION_FLAGS}")
endif()

option(YASER_CERTIFICATE "Create certificate" OFF)
if (YASER_CERTIFICATE)
    message("[YASER] Creating certificates at runtime (impacts performance)")
    add_compile_definitions(YASER_CERTIFICATE)
endif ()

add_subdirectory(src)

option(YASER_BUILD_TESTS "Build the tests" ON)
if (YASER_BUILD_TESTS)
    message("[YASER] Building tests")
    enable_testing()
    include(GoogleTest)
    add_subdirectory(test)
endif ()

option(YASER_BUILD_BENCHMARKS "Build the benchmarks" ON)
if (YASER_BUILD_BENCHMARKS)
    message("[YASER] Building benchmarks")
    set(BENCHMARK_ENABLE_TESTING OFF CACHE BOOL "Suppressing benchmark's tests" FORCE)
    add_subdirectory(benchmark)
endif ()