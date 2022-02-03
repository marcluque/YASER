//
// Created with <3 by marcluque, February 2022
//

#include "parsing/dimacs_parser.h"
#include <benchmark/benchmark.h>

static void BM_dimacs_parse_file(benchmark::State& state) {
    // TODO: Print file size

    for (auto _ : state)
        std::string empty_string;

    // TODO: Print parsing stats (i.e., #literals, #clauses)
}
BENCHMARK(BM_dimacs_parse_file);
