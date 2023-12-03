#include <string>
#include "gtest/gtest.h"
#include "dimacs_parser.h"

TEST(DimacsParserTest, ParseHeader) {
  const auto s = "  p cnf 3 1";
  char* s2 = strdup(s);
  auto [num_variables, num_clauses] = DimacsParser::impl::parse_header(s2);
  EXPECT_EQ(num_variables, 3);
  EXPECT_EQ(num_clauses, 1);
}

TEST(DimacsParserTest, ParseClause) {
  Formula f{3, 1};
  const auto s = "1 2 3 0";
  char* s2 = strdup(s);
  const auto clause_end = DimacsParser::impl::parse_clause(f, s2, 0);
  free(s2);
  EXPECT_EQ(clause_end, 3);
  EXPECT_EQ(f.literal(0) >> 1, 1);
  EXPECT_EQ(f.literal(1) >> 1, 2);
  EXPECT_EQ(f.literal(2) >> 1, 3);
}

TEST(DimacsParserTest, ParseClauseWithLeadingWhitespaces) {
  Formula f{3, 1};
  const auto s = "     1 2 3 0";
  char* s2 = strdup(s);
  const auto clause_end = DimacsParser::impl::parse_clause(f, s2, 0);
  free(s2);
  EXPECT_EQ(clause_end, 3);
  EXPECT_EQ(f.literal(0) >> 1, 1);
  EXPECT_EQ(f.literal(1) >> 1, 2);
  EXPECT_EQ(f.literal(2) >> 1, 3);
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
  p /= "../../satlib/pigeonhole/pigeonhole-20.cnf";
  Formula f = DimacsParser::parse_formula(p);
  for (int i = 0; i < 21; ++i) {
    //EXPECT_EQ(f.clause(i).size(), 20);
  }
}

