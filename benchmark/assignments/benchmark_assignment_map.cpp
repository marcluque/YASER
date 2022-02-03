//
// Created with <3 by marcluque, February 2022
//

#include "global/formula.h"
#include "assignments/assignment_map.h"
#include <benchmark/benchmark.h>

static void BM_assignment_map_add(benchmark::State& state) {
    formula_init(6, 6);
    for (auto _ : state)
        assignment_map_add(5, VALUE_FALSE);
}
BENCHMARK(BM_assignment_map_add);

static void BM_assignment_map_get_value(benchmark::State& state) {
    formula_init(3, 3);
    assignment_map_add(2, VALUE_FALSE);
    for (auto _ : state)
        assignment_map_get_value(2);
}
BENCHMARK(BM_assignment_map_get_value);
