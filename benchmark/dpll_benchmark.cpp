#include "benchmark/benchmark.h"
#include "dimacs_parser.h"
#include "dpll.h"

#include <filesystem>
#include <string>

static void BM_DPLL(benchmark::State& state, const std::filesystem::path& path) {
    for ([[maybe_unused]] auto _ : state) {
        Formula f = DimacsParser::parse_formula(path);
        DPLL::run(f);
    }
}

BENCHMARK_CAPTURE(BM_DPLL, pigeon_hole_4_20vars_45clauses, std::filesystem::current_path() / "../satlib/pigeonhole/pigeon-4.cnf");
BENCHMARK_CAPTURE(BM_DPLL, uniform_random_3_sat_50vars_218clauses, std::filesystem::current_path() / "../satlib/uniform-random-3-sat/satisfiable/uf50-01.cnf");
BENCHMARK_CAPTURE(BM_DPLL, uniform_random_3_sat_250vars_1065clauses, std::filesystem::current_path() / "../satlib/uniform-random-3-sat/satisfiable/uf250-01.cnf");
BENCHMARK_CAPTURE(BM_DPLL, uniform_random_3_unsat_50vars_218clauses, std::filesystem::current_path() / "../satlib/uniform-random-3-sat/unsatisfiable/uuf50-01.cnf");
