cmake_minimum_required(VERSION 3.16)
project(YASER C)

set(PRODUCT_NAME yaser)
set(CMAKE_C_STANDARD 11)

add_compile_options(
        -std=c11


        ### WARNINGS
        # Standrad GCC warnings: https://gcc.gnu.org/onlinedocs/gcc/Warning-Options.html
        -Wall
        -Wextra
        -Werror
        -Wunused
        -Wno-unused-function
        -Wshadow
        -Wcast-align
        -Wconversion
        -Wlogical-op
        -Wdouble-promotion
        -Wstack-protector
        -Wredundant-decls
        -Wpacked
        -Wmissing-declarations
        -Wmissing-prototypes
        -Wstrict-prototypes
        -Wno-aggressive-loop-optimizations
        -Wjump-misses-init
        -Wwrite-strings
        -Wcast-qual
        -Wundef
        -Wunsafe-loop-optimizations
        -Wfloat-equal
        -Wtrampolines
        -Warray-bounds
        -Wsuggest-attribute=pure
        -Wsuggest-attribute=const
        -Wsuggest-attribute=noreturn
        -Wsuggest-attribute=format
        -Wstrict-overflow=4
        -Wuninitialized
        -Wswitch-enum
        -Wswitch-default
        -Wmissing-include-dirs
        -Wformat-security
        -Wformat=1
        -Wnonnull

        # Perform dead code elimination: https://gcc.gnu.org/onlinedocs/gnat_ugn/Compilation-options.html
        -Wl,--relax,--gc-sections


        ### OPTIMIZATIONS
        # Standard GCC optimizations: https://gcc.gnu.org/onlinedocs/gcc/Optimize-Options.html#Optimize-Options
        -O3 # The higher, the better warnings work (-O3 is only used for the pipeline)

        # Optimize-Options: https://gcc.gnu.org/onlinedocs/gcc/Optimize-Options.html#Optimize-Options
        -ffunction-sections # Used for -Wl,--relax,--gc-sections
        -fdata-sections # Used for -Wl,--relax,--gc-sections
)

include_directories(include)
file(GLOB_RECURSE SRC_FILES "src/*.c")

add_executable(${PRODUCT_NAME} ${SRC_FILES})