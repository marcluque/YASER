#include "conflict_resolution.h"

#include <benchmark/benchmark.h>
#include <random>
#include <vector>
#include <ranges>

std::tuple<std::vector<Literal>, std::vector<Literal>> generate_resolvable_clauses(const size_t size1, const size_t size2, const Variable v, const unsigned seed = 1337) {
    std::mt19937 rng(seed);

    std::vector<Literal> clause1(size1);
    std::ranges::generate(clause1, [&]() { return rng() << 1; });

    auto n = static_cast<std::uniform_int_distribution<>::result_type>(clause1.size());
    std::uniform_int_distribution<> dist1(0, n - 1);
    clause1[dist1(rng)] = literal::convert(v, false);

    std::vector<Literal> clause2(size2);
    std::ranges::generate(clause2, [&]() { return rng() << 1; });

    n = static_cast<std::uniform_int_distribution<>::result_type>(clause2.size());
    std::uniform_int_distribution<> dist2(0, n - 1);
    clause2[dist2(rng)] = literal::convert(v, true);

    return {clause1, clause2};
}

static void BM_Resolution(benchmark::State& state) {
    const size_t size1 = state.range(0);
    const size_t size2 = state.range(1);

    const auto v = literal::variable(2);
    auto [clause1, clause2] = generate_resolvable_clauses(size1, size2, v);

    for ([[maybe_unused]] auto _ : state) {
        ConflictResolution::impl::binary_resolve(clause1, clause2, v);
    }
}

BENCHMARK(BM_Resolution)->Args({3, 5});
BENCHMARK(BM_Resolution)->Args({10, 10});
BENCHMARK(BM_Resolution)->Args({1000, 1000});
BENCHMARK(BM_Resolution)->Args({10000, 10000});
BENCHMARK(BM_Resolution)->Args({100000, 100000});
BENCHMARK(BM_Resolution)->Args({1000000, 1000000});
BENCHMARK(BM_Resolution)->Args({5, 1000});
BENCHMARK(BM_Resolution)->Args({1000, 5});

// Run the benchmark
//BENCHMARK_MAIN();