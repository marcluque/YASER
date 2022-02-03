//
// Created with <3 by marcluque, February 2022
//

#include "parsing/dimacs_parser.h"
#include <benchmark/benchmark.h>

static void BM_dimacs_parse_file(benchmark::State& state) {
    for (auto _ : state)
        std::string empty_string;
}
BENCHMARK(BM_dimacs_parse_file);
