#include "benchmark/benchmark.h"

#include <dimacs_parser.h>
#include <dpll.h>
#include <iostream>
#include <random>
#include <__filesystem/operations.h>

static void BM_UnifromRandom3SatUnsatInstance(benchmark::State& state) {
    auto p = std::filesystem::current_path();
    p /= "../../satlib/uniform-random-3-sat/unsatisfiable/uuf50-01.cnf";

    for ([[maybe_unused]] auto _ : state) {
        Formula f = DimacsParser::parse_formula(p);
        DPLL::run(f);
    }
}
// Register the function as a benchmark
BENCHMARK(BM_UnifromRandom3SatUnsatInstance)->Unit(benchmark::kMillisecond);

// Run the benchmark
BENCHMARK_MAIN();