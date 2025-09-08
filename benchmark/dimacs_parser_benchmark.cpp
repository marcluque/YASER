#include "benchmark/benchmark.h"
#include "dimacs_parser.h"

template <class T>
size_t get_size(const T& s) {
    if constexpr (std::is_same_v<T, std::string>) {
        return s.size();
    } else if constexpr (std::is_same_v<T, std::filesystem::path>) {
        if (std::filesystem::exists(s)) {
            return std::filesystem::file_size(s);
        }
        return 0;
    } else {
        return 0;
    }
}

template <class ...Args>
static void BM_ParseSmallFormula(benchmark::State& state, Args&&... args) {
    auto s = std::get<0>(std::make_tuple(std::move(args)...));

    state.SetLabel("size=" + std::to_string(get_size(s)) + " bytes");

    for ([[maybe_unused]] auto _ : state) {
        DimacsParser::parse_formula(s);
    }
}

BENCHMARK_CAPTURE(BM_ParseSmallFormula, small_formula,
    std::string{"c\n"
                "p cnf 3 3\n"
                "3 2 -1 0\n"
                "2 -3 0\n"
                "-1 -3 0"});
BENCHMARK_CAPTURE(BM_ParseSmallFormula, big_formula, std::filesystem::current_path() / "../satlib/pigeonhole/pigeon-20.cnf")->Unit(benchmark::kMillisecond);

// Run the benchmark
//BENCHMARK_MAIN();