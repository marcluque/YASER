#include "benchmark/benchmark.h"
#include "dimacs_parser.h"

template <class T>
static void BM_ParseFormula(benchmark::State& state, T&& s) {
    for ([[maybe_unused]] auto _ : state) {
        DimacsParser::parse_formula(s);
    }
}

BENCHMARK_CAPTURE(BM_ParseFormula, formula_35_bytes,
    std::string{"c\n"
                "p cnf 3 3\n"
                "3 2 -1 0\n"
                "2 -3 0\n"
                "-1 -3 0"});
BENCHMARK_CAPTURE(BM_ParseFormula, formula_54741_bytes, std::filesystem::current_path() / "../satlib/pigeonhole/pigeon-20.cnf")->Unit(benchmark::kMillisecond);
BENCHMARK_CAPTURE(BM_ParseFormula, formula_6938400_bytes, std::filesystem::current_path() / "../satlib/bmc/bmc-ibm-6.cnf")->Unit(benchmark::kMillisecond);

// Run the benchmark
//BENCHMARK_MAIN();