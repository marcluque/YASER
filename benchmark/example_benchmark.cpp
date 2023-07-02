#include <benchmark/benchmark.h>

static void BM_StringReverse(benchmark::State& state) {
  std::string s = "benchmark";
  // Perform setup here
  for ([[maybe_unused]] auto _ : state) {
    // This code gets timed
    std::reverse(s.begin(), s.end());
  }
}

// Register the function as a benchmark
BENCHMARK(BM_StringReverse);

// Run the benchmark
BENCHMARK_MAIN();