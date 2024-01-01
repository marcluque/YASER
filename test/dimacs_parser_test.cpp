#include <string>
#include "gtest/gtest.h"
#include "dimacs_parser.h"

#include <gmock/gmock-matchers.h>

TEST(DimacsParserTest, ParseHeader) {
    auto s                            = "  p cnf 3 1";
    auto [num_variables, num_clauses] = DimacsParser::impl::parse_header(s);
    EXPECT_EQ(num_variables, 3);
    EXPECT_EQ(num_clauses, 1);
}

TEST(DimacsParserTest, ParseClause) {
    Formula f{3, 1};
    auto s                = "1 2 3 0";
    const auto clause_end = DimacsParser::impl::parse_clause(f, s, 0);
    EXPECT_EQ(clause_end, 3);
    for (int i = 0; i < 3; ++i) {
        EXPECT_EQ(literal::variable(f.literal(i)), i + 1);
    }
}

TEST(DimacsParserTest, ParseClauseWithLeadingWhitespaces) {
    Formula f{3, 1};
    auto s                = "     1 2 3 0";
    const auto clause_end = DimacsParser::impl::parse_clause(f, s, 0);
    EXPECT_EQ(clause_end, 3);
    for (int i = 0; i < 3; ++i) {
        EXPECT_EQ(literal::variable(f.literal(i)), i + 1);
    }
}

TEST(DimacsParserTest, ParseFormula) {
    auto p = std::filesystem::current_path();
    p /= "../../satlib/small-sat-02.cnf";
    Formula f = DimacsParser::parse_formula(p);

    std::span clause = f.clause(0);
    EXPECT_EQ(f.literal(0) >> 1, 3);
    EXPECT_EQ(f.literal(0) & 1, 1);
    EXPECT_EQ(f.literal(1) >> 1, 2);
    EXPECT_EQ(f.literal(1) & 1, 1);
    EXPECT_EQ(f.literal(2) >> 1, 1);
    EXPECT_EQ(f.literal(2) & 1, 0);
    EXPECT_EQ(clause.size(), 3);
    EXPECT_EQ(&(*clause.begin()), &f.literal(0));

    clause = f.clause(1);
    EXPECT_EQ(f.literal(3) >> 1, 2);
    EXPECT_EQ(f.literal(3) & 1, 1);
    EXPECT_EQ(f.literal(4) >> 1, 3);
    EXPECT_EQ(f.literal(4) & 1, 0);
    EXPECT_EQ(clause.size(), 2);
    EXPECT_EQ(&(*clause.begin()), &f.literal(3));

    clause = f.clause(2);
    EXPECT_EQ(f.literal(5) >> 1, 1);
    EXPECT_EQ(f.literal(5) & 1, 0);
    EXPECT_EQ(f.literal(6) >> 1, 3);
    EXPECT_EQ(f.literal(6) & 1, 0);
    EXPECT_EQ(clause.size(), 2);
    EXPECT_EQ(&(*clause.begin()), &f.literal(5));
}

TEST(DimacsParserTest, ParseBigFormulaFromFile) {
    auto p = std::filesystem::current_path();
    p /= "../../satlib/pigeonhole/pigeon-20.cnf";
    Formula f = DimacsParser::parse_formula(p);

    for (int i = 0; i < 21; ++i) {
        EXPECT_EQ(f.clause(i).size(), 20);
    }
}

TEST(DimacsParserTest, FindUnitClauses) {
    auto p = std::filesystem::current_path();
    p /= "../../satlib/small-sat-01.cnf";
    Formula f = DimacsParser::parse_formula(p);

    EXPECT_EQ(f.unit_clauses().size(), 2);
    EXPECT_TRUE(
    std::ranges::find_if(f.unit_clauses().begin(), f.unit_clauses().end(),
                         [](const ClauseIndexLiteralPair& pair) {
                             return pair == std::pair{static_cast<ClauseIndex>(0), static_cast<Literal>(3)};
                         })
    != f.unit_clauses().end());
    EXPECT_FALSE(
        std::ranges::find_if(f.unit_clauses().begin(), f.unit_clauses().end(),
                             [](const ClauseIndexLiteralPair& pair) {
                                 return pair == std::pair{static_cast<ClauseIndex>(0), static_cast<Literal>(5)};
                             })
        != f.unit_clauses().end());
    EXPECT_TRUE(
        std::ranges::find_if(f.unit_clauses().begin(), f.unit_clauses().end(),
                             [](const ClauseIndexLiteralPair& pair) {
                                 return pair == std::pair{static_cast<ClauseIndex>(1), static_cast<Literal>(5)};
                             })
        != f.unit_clauses().end());
    EXPECT_FALSE(
        std::ranges::find_if(f.unit_clauses().begin(), f.unit_clauses().end(),
                             [](const ClauseIndexLiteralPair& pair) {
                                 return pair == std::pair{static_cast<ClauseIndex>(1), static_cast<Literal>(3)};
                             })
        != f.unit_clauses().end());
}

TEST(DimacsParserTest, FindUnitClauses2) {
    auto p = std::filesystem::current_path();
    p /= "../../satlib/pigeonhole/pigeon-1.cnf";
    Formula f = DimacsParser::parse_formula(p);

    EXPECT_EQ(f.unit_clauses().size(), 2);
    EXPECT_TRUE(
        std::ranges::find_if(f.unit_clauses().begin(), f.unit_clauses().end(),
                             [](const ClauseIndexLiteralPair& pair) {
                                 return pair == std::pair{static_cast<ClauseIndex>(0), static_cast<Literal>(3)};
                             })
        != f.unit_clauses().end());
    EXPECT_FALSE(
        std::ranges::find_if(f.unit_clauses().begin(), f.unit_clauses().end(),
                             [](const ClauseIndexLiteralPair& pair) {
                                 return pair == std::pair{static_cast<ClauseIndex>(0), static_cast<Literal>(5)};
                             })
        != f.unit_clauses().end());
    EXPECT_TRUE(
        std::ranges::find_if(f.unit_clauses().begin(), f.unit_clauses().end(),
                             [](const ClauseIndexLiteralPair& pair) {
                                 return pair == std::pair{static_cast<ClauseIndex>(1), static_cast<Literal>(5)};
                             })
        != f.unit_clauses().end());
    EXPECT_FALSE(
        std::ranges::find_if(f.unit_clauses().begin(), f.unit_clauses().end(),
                             [](const ClauseIndexLiteralPair& pair) {
                                 return pair == std::pair{static_cast<ClauseIndex>(1), static_cast<Literal>(3)};
                             })
        != f.unit_clauses().end());
}

TEST(DimacsParserTest, CheckWatchedLiteralMap) {
    auto p = std::filesystem::current_path();
    p /= "../../satlib/small-sat-01.cnf";
    Formula f = DimacsParser::parse_formula(p);

    EXPECT_EQ(f.clause_watched_literals_map().size(), 2);
}

TEST(DimacsParserTest, CheckNextLiteralQueue) {
    auto p = std::filesystem::current_path();
    p /= "../../satlib/small-sat-01.cnf";
    Formula f = DimacsParser::parse_formula(p);

    EXPECT_EQ(f.next_literal().size(), 2);
}

TEST(DimacsParserTest, CheckNextLiteralQueue2) {
    auto p = std::filesystem::current_path();
    p /= "../../satlib/small-sat-02.cnf";
    Formula f = DimacsParser::parse_formula(p);

    EXPECT_EQ(f.next_literal().size(), 7);
}
