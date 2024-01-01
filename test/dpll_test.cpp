#include <string>
#include "gtest/gtest.h"
#include "dpll.h"

#include <dimacs_parser.h>
#include <formula.h>
#include <log.h>
#include <__filesystem/operations.h>
#include <gmock/gmock-matchers.h>

TEST(DpllTest, SimpleSAT) {
    auto p = std::filesystem::current_path();
    p /= "../../satlib/small-sat-01.cnf";
    Formula f = DimacsParser::parse_formula(p);

    ASSERT_TRUE(DPLL::run(f));
    ASSERT_TRUE(f.assignment_trail_is_valid());
}

TEST(DpllTest, SimpleSAT2) {
    auto p = std::filesystem::current_path();
    p /= "../../satlib/small-sat-02.cnf";
    Formula f = DimacsParser::parse_formula(p);

    ASSERT_TRUE(DPLL::run(f));
    ASSERT_TRUE(f.assignment_trail_is_valid());
}

class UniformRandom3SatTestSuite : public testing::TestWithParam<int> {};
class UniformRandom3SatTestSuite100 : public testing::TestWithParam<int> {};

TEST_P(UniformRandom3SatTestSuite, UniformRandom3Sat20VarsSAT) {
    auto i = GetParam();
    std::cout << "UNIFROM RANDOM 3-SAT 20 VARS " << i << std::endl;
    auto p = std::filesystem::current_path();
    p /= fmt::format("../../satlib/uniform-random-3-sat/satisfiable/uf20-0{}.cnf", i);
    Formula f = DimacsParser::parse_formula(p);

    ASSERT_TRUE(DPLL::run(f));
    ASSERT_TRUE(f.assignment_trail_is_valid());
}
/*
TEST_P(UniformRandom3SatTestSuite, UniformRandom3Sat50VarsSAT) {
    auto i = GetParam();
    std::cout << "UNIFROM RANDOM 3-SAT 50 VARS " << i << std::endl;
    auto p = std::filesystem::current_path();
    p /= fmt::format("../../satlib/uniform-random-3-sat/satisfiable/uf50-0{}.cnf", i);
    Formula f = DimacsParser::parse_formula(p);

    ASSERT_TRUE(DPLL::run(f));
    ASSERT_TRUE(f.assignment_trail_is_valid());
}*/

TEST_P(UniformRandom3SatTestSuite100, UniformRandom3Sat250VarsSAT) {
    auto i = GetParam();
    std::cout << "UNIFROM RANDOM 3-SAT 250 VARS " << i << std::endl;
    auto p = std::filesystem::current_path();
    p /= fmt::format("../../satlib/uniform-random-3-sat/satisfiable/uf250-0{}.cnf", i);
    Formula f = DimacsParser::parse_formula(p);

    ASSERT_TRUE(DPLL::run(f));
    ASSERT_TRUE(f.assignment_trail_is_valid());
}

/*
TEST_P(UniformRandom3SatTestSuite, UniformRandom3Sat50VarsUNSAT) {
    auto i = GetParam();
    std::cout << "UNIFROM RANDOM 3-SAT 50 VARS " << i << std::endl;
    auto p = std::filesystem::current_path();
    p /= fmt::format("../../satlib/uniform-random-3-sat/unsatisfiable/uuf50-0{}.cnf", i);
    Formula f = DimacsParser::parse_formula(p);

    ASSERT_FALSE(DPLL::run(f));
}*/

INSTANTIATE_TEST_SUITE_P(DpllTest, UniformRandom3SatTestSuite, testing::Range(1, 1000),
                         testing::PrintToStringParamName());

INSTANTIATE_TEST_SUITE_P(DpllTest, UniformRandom3SatTestSuite100, testing::Range(1, 100),
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

TEST(DpllTest, Pigeonhole1To4) {
    for (int i = 1; i <= 4; ++i) {
        std::cout << "Pigeonhole " << i << std::endl;
        auto p = std::filesystem::current_path();
        p /= fmt::format("../../satlib/pigeonhole/pigeon-{}.cnf", i);
        Formula f = DimacsParser::parse_formula(p);

        EXPECT_FALSE(DPLL::run(f));
    }
}
