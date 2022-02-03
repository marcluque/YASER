//
// Created with <3 by marcluque, February 2022
//

#include "assignments/assignment_map.h"
#include <benchmark/benchmark.h>

static void BM_assignment_map_add(benchmark::State& state) {
    for (auto _ : state)
        std::string empty_string;
}
BENCHMARK(BM_assignment_map_add);

static void BM_assignment_map_get_value(benchmark::State& state) {
    std::string x = "hello";
    for (auto _ : state)
        std::string copy(x);
}
BENCHMARK(BM_assignment_map_get_value);
