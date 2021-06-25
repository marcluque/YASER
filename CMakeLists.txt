cmake_minimum_required(VERSION 3.19)
project(YASER C)

set(CMAKE_C_STANDARD 11)

add_executable(YASER
        include/external/uthash.h
        src/main.c
        src/resolution.c
        src/dpll.c
        include/dpll.h
        src/assignment.c
        include/assignment.h
        include/global.h
        src/vsids_heuristic.c
        include/vsids_heuristic.h
        src/watched_literals.c
        include/watched_literals.h
        src/formula.c
        include/formula.h
        src/dimacs_parser.c
        include/dimacs_parser.h)