cmake_minimum_required(VERSION 3.13)
project(yaser
        VERSION 0.1
        DESCRIPTION "Yet Another Sat solvER"
        LANGUAGES CXX)

set(CMAKE_CXX_STANDARD 23)
set(CMAKE_CXX_STANDARD_REQUIRED ON)
set(CMAKE_CXX_EXTENSIONS OFF)

if (CMAKE_BUILD_TYPE MATCHES "Debug_ASAN")
    message("[YASER] AddressSanitizer instrumentation enabled")
    set(ASAN_FLAGS "-fsanitize=address")
    set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} ${ASAN_FLAGS}")
    set(CMAKE_LINKER_FLAGS "${CMAKE_LINKER_FLAGS} ${ASAN_FLAGS}")
endif()

if (CMAKE_BUILD_TYPE MATCHES "Debug_MSAN")
    message("[YASER] MemorySanitizer instrumentation enabled")
    set(ASAN_FLAGS "-fsanitize=memory")
    set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} ${ASAN_FLAGS}")
    set(CMAKE_LINKER_FLAGS "${CMAKE_LINKER_FLAGS} ${ASAN_FLAGS}")
endif()

if (CMAKE_BUILD_TYPE MATCHES "Debug")
    message("[YASER] Using yaser debug mode (NOT NDEBUG)")
    add_definitions(-DYASER_DEBUG)
endif()

add_subdirectory(src)

option(YASER_BUILD_TESTS "Build the tests" OFF)
if (YASER_BUILD_TESTS)
    message("[YASER] Building tests")
    enable_testing()
    include(GoogleTest)
    add_subdirectory(test)
endif ()

option(YASER_BUILD_BENCHMARKS "Build the benchmarks" OFF)
if (YASER_BUILD_BENCHMARKS)
    message("[YASER] Building benchmarks")
    set(BENCHMARK_ENABLE_TESTING OFF CACHE BOOL "Suppressing benchmark's tests" FORCE)
    add_subdirectory(benchmark)
endif ()
