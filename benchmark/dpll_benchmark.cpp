#include "benchmark/benchmark.h"

#include "dimacs_parser.h"
#include "dpll.h"

static void BM_UnifromRandom3SatSatInstance(benchmark::State& state) {
    auto p = std::filesystem::current_path();
    p /= "../satlib/uniform-random-3-sat/satisfiable/uf50-01.cnf";

    Formula f = DimacsParser::parse_formula(p);
    state.SetLabel("vars=" + std::to_string(f.number_of_variables()) + " clauses=" + std::to_string(f.number_of_input_clauses()));

    for ([[maybe_unused]] auto _ : state) {
        f = DimacsParser::parse_formula(p);
        DPLL::run(f);
    }
}

static void BM_UnifromRandom3SatUnsatInstance(benchmark::State& state) {
    auto p = std::filesystem::current_path();
    p /= "../satlib/uniform-random-3-sat/unsatisfiable/uuf50-01.cnf";

    Formula f = DimacsParser::parse_formula(p);
    state.SetLabel("vars=" + std::to_string(f.number_of_variables()) + " clauses=" + std::to_string(f.number_of_input_clauses()));

    for ([[maybe_unused]] auto _ : state) {
        f = DimacsParser::parse_formula(p);
        DPLL::run(f);
    }
}

static void BM_PigeonHole4(benchmark::State& state) {
    auto p = std::filesystem::current_path();
    p /= "../satlib/pigeonhole/pigeon-4.cnf";

    Formula f = DimacsParser::parse_formula(p);
    state.SetLabel("vars=" + std::to_string(f.number_of_variables()) + " clauses=" + std::to_string(f.number_of_input_clauses()));

    for ([[maybe_unused]] auto _ : state) {
        f = DimacsParser::parse_formula(p);
        DPLL::run(f);
    }
}

// Register the function as a benchmark
BENCHMARK(BM_PigeonHole4)->Unit(benchmark::kMillisecond);
BENCHMARK(BM_UnifromRandom3SatSatInstance)->Unit(benchmark::kMillisecond);
BENCHMARK(BM_UnifromRandom3SatUnsatInstance)->Unit(benchmark::kMillisecond);

// Run the benchmark
//BENCHMARK_MAIN();