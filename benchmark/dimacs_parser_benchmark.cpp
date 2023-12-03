#include <iostream>
#include "benchmark/benchmark.h"
#include "dimacs_parser.h"

static void BM_ParseSmallFormula(benchmark::State& state) {
  const std::string s{"c\n"
                "p cnf 3 3\n"
                "3 2 -1 0\n"
                "2 -3 0\n"
                "-1 -3 0"};

  for ([[maybe_unused]] auto _ : state) {
    DimacsParser::parse_formula(s);
  }
}

static void BM_ParseBigFormulaFromFile(benchmark::State& state) {
  auto p = std::filesystem::current_path();
  p /= "../../satlib/pigeonhole/pigeonhole-20.cnf";

  for ([[maybe_unused]] auto _ : state) {
    DimacsParser::parse_formula(p);
  }
}

// Register the function as a benchmark
BENCHMARK(BM_ParseSmallFormula);
BENCHMARK(BM_ParseBigFormulaFromFile)->Unit(benchmark::kMillisecond);

// Run the benchmark
BENCHMARK_MAIN();