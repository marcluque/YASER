#include <filesystem>
#include <iostream>

#include "gtest/gtest.h"
#include "dpll.h"
#include "dimacs_parser.h"
#include "formula.h"
#include "log.h"
#include "gmock/gmock-matchers.h"

TEST(DpllTest, SimpleSAT) {
    auto p = std::filesystem::current_path();
    p /= "../../satlib/small-sat-01.cnf";
    Formula f = DimacsParser::parse_formula(p);

    ASSERT_TRUE(DPLL::run(f));
    ASSERT_TRUE(f.is_assignment_trail_valid());
}

TEST(DpllTest, SimpleSAT2) {
    auto p = std::filesystem::current_path();
    p /= "../../satlib/small-sat-02.cnf";
    Formula f = DimacsParser::parse_formula(p);

    ASSERT_TRUE(DPLL::run(f));
    ASSERT_TRUE(f.is_assignment_trail_valid());
}

class UniformRandom3SatTestSuite : public testing::TestWithParam<int> {};

TEST_P(UniformRandom3SatTestSuite, UniformRandom3Sat20VarsSAT) {
    auto i = GetParam();
    std::cout << "UNIFROM RANDOM 3-SAT 20 VARS " << i << std::endl;
    auto p = std::filesystem::current_path();
    p /= fmt::format("../../satlib/uniform-random-3-sat/satisfiable/uf20-0{}.cnf", i);
    Formula f = DimacsParser::parse_formula(p);
#ifdef YASER_CERTIFICATE
    const auto certificate_file_path = std::filesystem::current_path() / "certificates" / fmt::format("uf20-0{}.crt", i);
    std::filesystem::create_directories(certificate_file_path.parent_path());
    f.certificate_output_stream() = std::ofstream(certificate_file_path, std::ios::app);
#endif

    ASSERT_TRUE(DPLL::run(f));
    ASSERT_TRUE(f.is_assignment_trail_valid());
}

TEST_P(UniformRandom3SatTestSuite, UniformRandom3Sat50VarsSAT) {
    auto i = GetParam();
    std::cout << "UNIFROM RANDOM 3-SAT 50 VARS " << i << std::endl;
    auto p = std::filesystem::current_path();
    p /= fmt::format("../../satlib/uniform-random-3-sat/satisfiable/uf50-0{}.cnf", i);
    Formula f = DimacsParser::parse_formula(p);
#ifdef YASER_CERTIFICATE
    const auto certificate_file_path = std::filesystem::current_path() / "certificates" / fmt::format("uf50-0{}.crt", i);
    std::filesystem::create_directories(certificate_file_path.parent_path());
    f.certificate_output_stream() = std::ofstream(certificate_file_path, std::ios::app);
#endif

    ASSERT_TRUE(DPLL::run(f));
    ASSERT_TRUE(f.is_assignment_trail_valid());
}

TEST_P(UniformRandom3SatTestSuite, UniformRandom3Sat100VarsSAT) {
    auto i = GetParam();
    std::cout << "UNIFROM RANDOM 3-SAT 100 VARS " << i << std::endl;
    auto p = std::filesystem::current_path();
    p /= fmt::format("../../satlib/uniform-random-3-sat/satisfiable/uf100-0{}.cnf", i);
    Formula f = DimacsParser::parse_formula(p);
#ifdef YASER_CERTIFICATE
    const auto certificate_file_path = std::filesystem::current_path() / "certificates" / fmt::format("uf100-0{}.crt", i);
    std::filesystem::create_directories(certificate_file_path.parent_path());
    f.certificate_output_stream() = std::ofstream(certificate_file_path, std::ios::app);
#endif

    ASSERT_TRUE(DPLL::run(f));
    ASSERT_TRUE(f.is_assignment_trail_valid());
}


TEST_P(UniformRandom3SatTestSuite, UniformRandom3Sat50VarsUNSAT) {
    auto i = GetParam();
    std::cout << "UNIFROM RANDOM 3-SAT 50 VARS (UNSAT) " << i << std::endl;
    auto p = std::filesystem::current_path();
    p /= fmt::format("../../satlib/uniform-random-3-sat/unsatisfiable/uuf50-0{}.cnf", i);
    Formula f = DimacsParser::parse_formula(p);
#ifdef YASER_CERTIFICATE
    const auto certificate_file_path = std::filesystem::current_path() / "certificates" / fmt::format("uuf50-0{}.crt", i);
    std::filesystem::create_directories(certificate_file_path.parent_path());
    f.certificate_output_stream() = std::ofstream(certificate_file_path, std::ios::app);
#endif

    ASSERT_FALSE(DPLL::run(f));
}

TEST_P(UniformRandom3SatTestSuite, UniformRandom3Sat100VarsUNSAT) {
    auto i = GetParam();
    std::cout << "UNIFROM RANDOM 3-SAT 100 VARS (UNSAT) " << i << std::endl;
    auto p = std::filesystem::current_path();
    p /= fmt::format("../../satlib/uniform-random-3-sat/unsatisfiable/uuf100-0{}.cnf", i);
    Formula f = DimacsParser::parse_formula(p);
#ifdef YASER_CERTIFICATE
    const auto certificate_file_path = std::filesystem::current_path() / "certificates" / fmt::format("uuf100-0{}.crt", i);
    std::filesystem::create_directories(certificate_file_path.parent_path());
    f.certificate_output_stream() = std::ofstream(certificate_file_path, std::ios::app);
#endif

    ASSERT_FALSE(DPLL::run(f));
}

INSTANTIATE_TEST_SUITE_P(DpllTest, UniformRandom3SatTestSuite, testing::Range(1, 1000 + 1),
                         testing::PrintToStringParamName());

TEST(DpllTest, BCPLeadsToConflictAtDecisionLevel0) {
    auto p = std::filesystem::current_path();
    p /= "../../satlib/pigeonhole/pigeon-1.cnf";
    Formula f = DimacsParser::parse_formula(p);

    EXPECT_FALSE(DPLL::impl::bcp(f));
    // Note that we do not check which clause is conflicting since that is implementation defined,
    // i.e., the order of the unit clause processing is important.
    // We use a stack, instead of a queue, for instance.
    EXPECT_TRUE(f.conflicting_clause().has_value());
}

TEST(DpllTest, BCPLeadsToConflictAtDecisionLevel0_2) {
    auto p = std::filesystem::current_path();
    p /= "../../satlib/conflict/small-conflict-01.cnf";
    Formula f = DimacsParser::parse_formula(p);

    EXPECT_FALSE(DPLL::impl::bcp(f));
    // Note that we do not check which clause is conflicting since that is implementation defined,
    // i.e., the order of the unit clause processing is important.
    // We use a stack, instead of a queue, for instance.
    EXPECT_TRUE(f.conflicting_clause().has_value());
}

class PigeonholeTestSuite : public testing::TestWithParam<int> {};

TEST_P(PigeonholeTestSuite, Pigeonhole) {
    int i = GetParam();
    std::cout << "Pigeonhole " << i << std::endl;

    auto p = std::filesystem::current_path();
    p /= fmt::format("../../satlib/pigeonhole/pigeon-{}.cnf", i);
    Formula f = DimacsParser::parse_formula(p);
#ifdef YASER_CERTIFICATE
    const auto certificate_file_path = std::filesystem::current_path() / "certificates" / fmt::format("pigeon-{}.crt", i);
    std::filesystem::create_directories(certificate_file_path.parent_path());
    f.certificate_output_stream() = std::ofstream(certificate_file_path, std::ios::app);
#endif

    EXPECT_FALSE(DPLL::run(f));
}

INSTANTIATE_TEST_SUITE_P(
    DpllTest,
    PigeonholeTestSuite,
    testing::Range(1, 12),
    testing::PrintToStringParamName()
);
