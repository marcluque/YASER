cmake_minimum_required(VERSION 3.0)
project(YASER C)

set(PRODUCT_NAME yaser)
set(CMAKE_C_STANDARD 11)

if (CMAKE_BUILD_TYPE MATCHES "Debug" OR CMAKE_BUILD_TYPE MATCHES "DEBUG" OR CMAKE_BUILD_TYPE MATCHES "debug")
    message("[YASER] Using special yaser debug mode (NOT NDEBUG)")
    add_definitions(-DYASER_DEBUG)
endif()

if(TARGET_GROUP STREQUAL test)
    include(CTest)

    add_subdirectory(src)
    add_subdirectory(external)
    add_subdirectory(test)
else()
    include_directories(include)
    file(GLOB_RECURSE SRC_FILES "src/*.c")

    add_executable(${PRODUCT_NAME} ${SRC_FILES})

    target_compile_options(yaser PUBLIC
            -std=c11

            ### WARNINGS
            # Standrad GCC warnings: https://gcc.gnu.org/onlinedocs/gcc/Warning-Options.html
            -Wall
            -Wextra
            -Wunused
            -Wno-unused-function
            -Wshadow
            -Wcast-align
            -Wconversion
            -Wdouble-promotion
            -Wstack-protector
            -Wredundant-decls
            -Wpacked
            -Wmissing-declarations
            -Wmissing-prototypes
            -Wstrict-prototypes
            -Wwrite-strings
            -Wcast-qual
            -Wundef
            -Wfloat-equal
            -Warray-bounds
            -Wstrict-overflow=4
            -Wuninitialized
            -Wswitch-enum
            -Wswitch-default
            -Wmissing-include-dirs
            -Wformat-security
            -Wnonnull
    )

    if(NOT DEFINED OPTIMIZE)
        message("[YASER] Using -O0")
        target_compile_options(yaser PUBLIC -O0)
    else()
        message("[YASER] Using -O3")
        target_compile_options(yaser PUBLIC -O3)
    endif()

    if (CMAKE_BUILD_TYPE MATCHES "Debug" OR CMAKE_BUILD_TYPE MATCHES "DEBUG" OR CMAKE_BUILD_TYPE MATCHES "debug")
        message("[YASER] Using -g")
        target_compile_options(yaser PUBLIC -g)
    endif()

    if (CMAKE_CXX_COMPILER_ID STREQUAL "Clang" OR CMAKE_C_COMPILER_ID STREQUAL "Clang")
        target_compile_options(yaser PUBLIC
                -Weverything
                -Wno-unknown-warning-option
        )
    elseif (CMAKE_CXX_COMPILER_ID STREQUAL "GNU" OR CMAKE_C_COMPILER_ID STREQUAL "GNU")
        target_compile_options(yaser PUBLIC
                ### WARNINGS
                # Standard GCC warnings: https://gcc.gnu.org/onlinedocs/gcc/Warning-Options.html
                -Werror
                -Wlogical-op
                -Wjump-misses-init
                -Wunsafe-loop-optimizations
                -Wtrampolines
                -Wsuggest-attribute=pure
                -Wsuggest-attribute=const
                -Wsuggest-attribute=noreturn
                -Wsuggest-attribute=format
                -Wformat=1
        )
    endif()

    if (NOT DEFINED DONT_LINK_TCMALLOC)
        target_link_libraries(${PRODUCT_NAME} PUBLIC -ltcmalloc)
    endif()
endif()