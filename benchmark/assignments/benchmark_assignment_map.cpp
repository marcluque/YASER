//
// Created with <3 by marcluque, February 2022
//

#include "assignments/assignment_map.h"
#include <benchmark/benchmark.h>

static void BM_assignment_map_add(benchmark::State& state) {
    for (auto _ : state)
        assignment_map_add(1, VALUE_INVALID);
}
BENCHMARK(BM_assignment_map_add);

static void BM_assignment_map_get_value(benchmark::State& state) {
    assignment_map_add(1, VALUE_INVALID);
    for (auto _ : state)
        assignment_map_get_value(1);
}
BENCHMARK(BM_assignment_map_get_value);
