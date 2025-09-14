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

BENCHMARK_CAPTURE(BM_DPLL, uniform_random_3_sat_50vars_218clauses, std::filesystem::current_path() / "../satlib/uniform-random-3-sat/satisfiable/uf50-01.cnf");
BENCHMARK_CAPTURE(BM_DPLL, uniform_random_3_sat_250vars_1065clauses, std::filesystem::current_path() / "../satlib/uniform-random-3-sat/satisfiable/uf250-01.cnf");
BENCHMARK_CAPTURE(BM_DPLL, uniform_random_3_unsat_50vars_218clauses, std::filesystem::current_path() / "../satlib/uniform-random-3-sat/unsatisfiable/uuf50-01.cnf");
BENCHMARK_CAPTURE(BM_DPLL, pigeon_hole_1_2vars_3clauses, std::filesystem::current_path() / "../satlib/pigeonhole/pigeon-1.cnf");
BENCHMARK_CAPTURE(BM_DPLL, pigeon_hole_2_6vars_9clauses, std::filesystem::current_path() / "../satlib/pigeonhole/pigeon-2.cnf");
BENCHMARK_CAPTURE(BM_DPLL, pigeon_hole_3_12vars_22clauses, std::filesystem::current_path() / "../satlib/pigeonhole/pigeon-3.cnf");
BENCHMARK_CAPTURE(BM_DPLL, pigeon_hole_4_20vars_45clauses, std::filesystem::current_path() / "../satlib/pigeonhole/pigeon-4.cnf");
BENCHMARK_CAPTURE(BM_DPLL, pigeon_hole_5_30vars_81clauses, std::filesystem::current_path() / "../satlib/pigeonhole/pigeon-5.cnf");
BENCHMARK_CAPTURE(BM_DPLL, pigeon_hole_6_42vars_133clauses, std::filesystem::current_path() / "../satlib/pigeonhole/pigeon-6.cnf");
BENCHMARK_CAPTURE(BM_DPLL, pigeon_hole_7_56vars_204clauses, std::filesystem::current_path() / "../satlib/pigeonhole/pigeon-7.cnf");
BENCHMARK_CAPTURE(BM_DPLL, pigeon_hole_8_72vars_297clauses, std::filesystem::current_path() / "../satlib/pigeonhole/pigeon-8.cnf");
BENCHMARK_CAPTURE(BM_DPLL, pigeon_hole_9_90vars_415clauses, std::filesystem::current_path() / "../satlib/pigeonhole/pigeon-9.cnf");
BENCHMARK_CAPTURE(BM_DPLL, pigeon_hole_10_110vars_561clauses, std::filesystem::current_path() / "../satlib/pigeonhole/pigeon-10.cnf");
BENCHMARK_CAPTURE(BM_DPLL, pigeon_hole_11_132vars_738clauses, std::filesystem::current_path() / "../satlib/pigeonhole/pigeon-11.cnf");
BENCHMARK_CAPTURE(BM_DPLL, pigeon_hole_12_156vars_949clauses,  std::filesystem::current_path() / "../satlib/pigeonhole/pigeon-12.cnf");
//BENCHMARK_CAPTURE(BM_DPLL, pigeon_hole_13_182vars_1197clauses, std::filesystem::current_path() / "../satlib/pigeonhole/pigeon-13.cnf");
//BENCHMARK_CAPTURE(BM_DPLL, pigeon_hole_14_210vars_1485clauses, std::filesystem::current_path() / "../satlib/pigeonhole/pigeon-14.cnf");
//BENCHMARK_CAPTURE(BM_DPLL, pigeon_hole_15_240vars_1816clauses, std::filesystem::current_path() / "../satlib/pigeonhole/pigeon-15.cnf");
//BENCHMARK_CAPTURE(BM_DPLL, pigeon_hole_16_272vars_2193clauses, std::filesystem::current_path() / "../satlib/pigeonhole/pigeon-16.cnf");
//BENCHMARK_CAPTURE(BM_DPLL, pigeon_hole_17_306vars_2619clauses, std::filesystem::current_path() / "../satlib/pigeonhole/pigeon-17.cnf");
//BENCHMARK_CAPTURE(BM_DPLL, pigeon_hole_18_342vars_3097clauses, std::filesystem::current_path() / "../satlib/pigeonhole/pigeon-18.cnf");
//BENCHMARK_CAPTURE(BM_DPLL, pigeon_hole_19_380vars_3630clauses, std::filesystem::current_path() / "../satlib/pigeonhole/pigeon-19.cnf");
//BENCHMARK_CAPTURE(BM_DPLL, pigeon_hole_20_420vars_4221clauses, std::filesystem::current_path() / "../satlib/pigeonhole/pigeon-20.cnf");
