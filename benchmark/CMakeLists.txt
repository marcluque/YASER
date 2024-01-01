add_subdirectory("${PROJECT_SOURCE_DIR}/extern/google/benchmark" "extern/google/benchmark")

macro(add_benchmark BENCHMARK_NAME)
    add_executable(${BENCHMARK_NAME} ${ARGN})
    include_directories(${PROJECT_SOURCE_DIR}/include)
    target_link_libraries(${BENCHMARK_NAME} benchmark::benchmark ${CMAKE_PROJECT_NAME}lib)
    set_target_properties(${BENCHMARK_NAME} PROPERTIES FOLDER benchmark)
endmacro()

add_benchmark(conflict_resolution_benchmark conflict_resolution_benchmark.cpp)
add_benchmark(dimacs_parser_benchmark dimacs_parser_benchmark.cpp)
add_benchmark(dpll_benchmark dpll_benchmark.cpp)
