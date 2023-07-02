add_subdirectory("${PROJECT_SOURCE_DIR}/extern/google/benchmark" "extern/google/benchmark")

macro(package_add_benchmark BENCHMARK_NAME)
    add_executable(${BENCHMARK_NAME} ${ARGN})
    target_link_libraries(${BENCHMARK_NAME} benchmark::benchmark)
    set_target_properties(${BENCHMARK_NAME} PROPERTIES FOLDER benchmark)
endmacro()

package_add_benchmark(example_benchmark example_benchmark.cpp)
