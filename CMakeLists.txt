cmake_minimum_required(VERSION 3.13)
project(yaser
        VERSION 0.1
        DESCRIPTION "Yet Another Sat solvER"
        LANGUAGES CXX)

set(CMAKE_CXX_STANDARD 20)
set(CMAKE_CXX_STANDARD_REQUIRED ON)
set(CMAKE_CXX_EXTENSIONS OFF)

if (CMAKE_BUILD_TYPE MATCHES "Debug" OR CMAKE_BUILD_TYPE MATCHES "DEBUG" OR CMAKE_BUILD_TYPE MATCHES "debug")
    message("[YASER] Using yaser debug mode (NOT NDEBUG)")
    add_definitions(-DYASER_DEBUG)
endif()

add_subdirectory(src)

option(BUILD_TESTS "Build the tests" ON)
if (BUILD_TESTS)
    enable_testing()
    include(GoogleTest)
    add_subdirectory(test)
endif ()

option(BUILD_BENCHMARKS "Build the benchmarks" ON)
if (BUILD_BENCHMARKS)
    set(BENCHMARK_ENABLE_TESTING OFF CACHE BOOL "Suppressing benchmark's tests" FORCE)
    add_subdirectory(benchmark)
endif ()
