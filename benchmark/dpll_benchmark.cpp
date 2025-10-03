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

// https://www.cs.ubc.ca/~hoos/SATLIB/benchm.html
BENCHMARK_CAPTURE(BM_DPLL, uniform_random_3_sat_50vars_218clauses, std::filesystem::current_path() / "../satlib/uniform-random-3-sat/satisfiable/uf50-01.cnf");
BENCHMARK_CAPTURE(BM_DPLL, uniform_random_3_unsat_50vars_218clauses, std::filesystem::current_path() / "../satlib/uniform-random-3-sat/unsatisfiable/uuf50-01.cnf");
BENCHMARK_CAPTURE(BM_DPLL, uniform_random_3_sat_100vars_430clauses, std::filesystem::current_path() / "../satlib/uniform-random-3-sat/satisfiable/uf100-01.cnf");
BENCHMARK_CAPTURE(BM_DPLL, uniform_random_3_unsat_100vars_430clauses, std::filesystem::current_path() / "../satlib/uniform-random-3-sat/unsatisfiable/uuf100-01.cnf");
BENCHMARK_CAPTURE(BM_DPLL, uniform_random_3_sat_250vars_1065clauses, std::filesystem::current_path() / "../satlib/uniform-random-3-sat/satisfiable/uf250-01.cnf");
//BENCHMARK_CAPTURE(BM_DPLL, uniform_random_3_unsat_250vars_1065clauses, std::filesystem::current_path() / "../satlib/uniform-random-3-sat/unsatisfiable/uuf250-01.cnf");

BENCHMARK_CAPTURE(BM_DPLL, bmc_ibm_1_sat_9685vars_55870clauses, std::filesystem::current_path() / "../satlib/bmc/bmc-ibm-1.cnf");
BENCHMARK_CAPTURE(BM_DPLL, bmc_ibm_2_sat_2810vars_11683clauses, std::filesystem::current_path() / "../satlib/bmc/bmc-ibm-2.cnf");
//BENCHMARK_CAPTURE(BM_DPLL, bmc_ibm_3_sat_14930vars_72106clauses, std::filesystem::current_path() / "../satlib/bmc/bmc-ibm-3.cnf");
BENCHMARK_CAPTURE(BM_DPLL, bmc_ibm_4_sat_28161vars_139716clauses, std::filesystem::current_path() / "../satlib/bmc/bmc-ibm-4.cnf");
BENCHMARK_CAPTURE(BM_DPLL, bmc_ibm_5_sat_9396vars_41207clauses, std::filesystem::current_path() / "../satlib/bmc/bmc-ibm-5.cnf");
//BENCHMARK_CAPTURE(BM_DPLL, bmc_ibm_6_sat_51639vars_368352clauses, std::filesystem::current_path() / "../satlib/bmc/bmc-ibm-6.cnf");
BENCHMARK_CAPTURE(BM_DPLL, bmc_ibm_7_sat_8710vars_39774clauses, std::filesystem::current_path() / "../satlib/bmc/bmc-ibm-7.cnf");
//BENCHMARK_CAPTURE(BM_DPLL, bmc_galileo_8_sat_58074vars_294821clauses, std::filesystem::current_path() / "../satlib/bmc/bmc-galileo-8.cnf");
//BENCHMARK_CAPTURE(BM_DPLL, bmc_galileo_9_sat_63624vars_326999clauses, std::filesystem::current_path() / "../satlib/bmc/bmc-galileo-9.cnf");
//BENCHMARK_CAPTURE(BM_DPLL, bmc_ibm_10_sat_59056vars_323700clauses, std::filesystem::current_path() / "../satlib/bmc/bmc-ibm-10.cnf");
//BENCHMARK_CAPTURE(BM_DPLL, bmc_ibm_11_sat_32109vars_150027clauses, std::filesystem::current_path() / "../satlib/bmc/bmc-ibm-11.cnf");
//BENCHMARK_CAPTURE(BM_DPLL, bmc_ibm_12_sat_39598vars_194778clauses, std::filesystem::current_path() / "../satlib/bmc/bmc-ibm-12.cnf");
BENCHMARK_CAPTURE(BM_DPLL, bmc_ibm_13_sat_13215vars_65728clauses, std::filesystem::current_path() / "../satlib/bmc/bmc-ibm-13.cnf");

BENCHMARK_CAPTURE(BM_DPLL, logistics_a_sat_828vars_6718clauses, std::filesystem::current_path() / "../satlib/logistics/logistics.a.cnf");
BENCHMARK_CAPTURE(BM_DPLL, logistics_b_sat_843vars_7301clauses, std::filesystem::current_path() / "../satlib/logistics/logistics.b.cnf");
BENCHMARK_CAPTURE(BM_DPLL, logistics_c_sat_1141vars_10719clauses, std::filesystem::current_path() / "../satlib/logistics/logistics.c.cnf");
BENCHMARK_CAPTURE(BM_DPLL, logistics_d_sat_4713vars_21991clauses, std::filesystem::current_path() / "../satlib/logistics/logistics.d.cnf");

BENCHMARK_CAPTURE(BM_DPLL, blocksworld_anomaly_sat_48vars_261clauses, std::filesystem::current_path() / "../satlib/blocksworld/anomaly.cnf");
BENCHMARK_CAPTURE(BM_DPLL, blocksworld_medium_sat_116vars_953clauses, std::filesystem::current_path() / "../satlib/blocksworld/medium.cnf");
BENCHMARK_CAPTURE(BM_DPLL, blocksworld_huge_sat_459vars_7054clauses, std::filesystem::current_path() / "../satlib/blocksworld/huge.cnf");
BENCHMARK_CAPTURE(BM_DPLL, blocksworld_bw_large_a_sat_459vars_4675clauses, std::filesystem::current_path() / "../satlib/blocksworld/bw_large.a.cnf");
BENCHMARK_CAPTURE(BM_DPLL, blocksworld_bw_large_b_sat_1087vars_13772clauses, std::filesystem::current_path() / "../satlib/blocksworld/bw_large.b.cnf");
BENCHMARK_CAPTURE(BM_DPLL, blocksworld_bw_large_c_sat_3016vars_50457clauses, std::filesystem::current_path() / "../satlib/blocksworld/bw_large.c.cnf");
//BENCHMARK_CAPTURE(BM_DPLL, blocksworld_bw_large_d_sat_6325vars_131973clauses, std::filesystem::current_path() / "../satlib/blocksworld/bw_large.d.cnf");

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
//BENCHMARK_CAPTURE(BM_DPLL, pigeon_hole_12_156vars_949clauses,  std::filesystem::current_path() / "../satlib/pigeonhole/pigeon-12.cnf");
//BENCHMARK_CAPTURE(BM_DPLL, pigeon_hole_13_182vars_1197clauses, std::filesystem::current_path() / "../satlib/pigeonhole/pigeon-13.cnf");
//BENCHMARK_CAPTURE(BM_DPLL, pigeon_hole_14_210vars_1485clauses, std::filesystem::current_path() / "../satlib/pigeonhole/pigeon-14.cnf");
//BENCHMARK_CAPTURE(BM_DPLL, pigeon_hole_15_240vars_1816clauses, std::filesystem::current_path() / "../satlib/pigeonhole/pigeon-15.cnf");
//BENCHMARK_CAPTURE(BM_DPLL, pigeon_hole_16_272vars_2193clauses, std::filesystem::current_path() / "../satlib/pigeonhole/pigeon-16.cnf");
//BENCHMARK_CAPTURE(BM_DPLL, pigeon_hole_17_306vars_2619clauses, std::filesystem::current_path() / "../satlib/pigeonhole/pigeon-17.cnf");
//BENCHMARK_CAPTURE(BM_DPLL, pigeon_hole_18_342vars_3097clauses, std::filesystem::current_path() / "../satlib/pigeonhole/pigeon-18.cnf");
//BENCHMARK_CAPTURE(BM_DPLL, pigeon_hole_19_380vars_3630clauses, std::filesystem::current_path() / "../satlib/pigeonhole/pigeon-19.cnf");
//BENCHMARK_CAPTURE(BM_DPLL, pigeon_hole_20_420vars_4221clauses, std::filesystem::current_path() / "../satlib/pigeonhole/pigeon-20.cnf");
