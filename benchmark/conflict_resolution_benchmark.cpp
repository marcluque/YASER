#include "benchmark/benchmark.h"

#include "conflict_resolution.h"

#include <random>
#include <__random/random_device.h>

static void BM_SmallResolution(benchmark::State& state) {
    std::vector<Literal> clause_1{2, 4, 8, 16, 32, 64, 128, 256, 512, 1024};
    std::vector<Literal> clause_2{2 | 1, 4, 8, 16, 32, 64, 128, 256, 512, 1024};

    for ([[maybe_unused]] auto _ : state) {
        ConflictResolution::impl::resolve(clause_1, clause_2);
    }
}

static void BM_BigResolution(benchmark::State& state) {
    srand(1337); // NOLINT(*-msc51-cpp)
    constexpr size_t N = 1000;
    std::vector<Literal> clause_1(N, 0);
    std::ranges::generate(clause_1, rand);
    for (auto& literal : clause_1) {
        literal <<= 1;
    }

    std::vector<Literal> negated_literal;
    std::ranges::sample(clause_1, std::back_inserter(negated_literal), 1,
                std::mt19937{std::random_device{}()});

    std::vector<Literal> clause_2 = clause_1;
    clause_2.push_back(literal::negate(negated_literal[0]));

    for ([[maybe_unused]] auto _ : state) {
        ConflictResolution::impl::resolve(clause_1, clause_2);
    }
}
// Register the function as a benchmark
BENCHMARK(BM_SmallResolution);
BENCHMARK(BM_BigResolution)->Unit(benchmark::kMillisecond);

// Run the benchmark
BENCHMARK_MAIN();