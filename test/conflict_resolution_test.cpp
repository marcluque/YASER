#include <string>
#include <ranges>
#include "gtest/gtest.h"
#include "conflict_resolution.h"

#include "gmock/gmock-matchers.h"
#include <dimacs_parser.h>

TEST(ConflictResolutionTest, EmptyClauses) {
    std::vector<Literal> clause_1{};
    std::vector<Literal> clause_2{};
    const auto resolvent = ConflictResolution::impl::binary_resolve(clause_1, clause_2, 1);
    ASSERT_EQ(resolvent.size(), 0);
}

TEST(ConflictResolutionTest, OneEmptyClause) {
    std::vector<Literal> clause_1{1, 2, 3};
    std::vector<Literal> clause_2{};
    const auto resolvent = ConflictResolution::impl::binary_resolve(clause_1, clause_2, 4);
    ASSERT_THAT(resolvent, testing::UnorderedElementsAre(1, 2, 3));
}

TEST(ConflictResolutionTest, OneEmptyClauseReversed) {
    std::vector<Literal> clause_1{};
    std::vector<Literal> clause_2{1, 2, 3};
    const auto resolvent = ConflictResolution::impl::binary_resolve(clause_1, clause_2, 4);
    ASSERT_THAT(resolvent, testing::UnorderedElementsAre(1, 2, 3));
}

TEST(ConflictResolutionTest, CompleteResolution) {
    std::vector<Literal> clause_1{2 | 1, 4, 8};
    std::vector<Literal> clause_2{2, 4, 8};
    const auto resolvent = ConflictResolution::impl::binary_resolve(clause_1, clause_2, literal::variable(2));
    ASSERT_EQ(resolvent.size(), 2);
}

TEST(ConflictResolutionTest, PartialResolution) {
    std::vector<Literal> clause_1{2 | 1, 4, 8, 16};
    std::vector<Literal> clause_2{2, 4, 8};
    const auto resolvent = ConflictResolution::impl::binary_resolve(clause_1, clause_2, literal::variable(2));
    ASSERT_THAT(resolvent, testing::UnorderedElementsAre(4, 8, 16));
}

TEST(ConflictResolutionTest, PartialResolutionReversed) {
    std::vector<Literal> clause_1{2 | 1, 4, 8};
    std::vector<Literal> clause_2{2, 4, 8, 16};
    const auto resolvent = ConflictResolution::impl::binary_resolve(clause_1, clause_2, literal::variable(2));
    ASSERT_THAT(resolvent, testing::UnorderedElementsAre(4, 8, 16));
}

TEST(ConflictResolutionTest, MixedPartialResolution) {
    std::vector<Literal> clause_1{2, 4, 8, 16};
    std::vector<Literal> clause_2{2 | 1, 8};
    const auto resolvent = ConflictResolution::impl::binary_resolve(clause_1, clause_2, literal::variable(2));
    ASSERT_THAT(resolvent, testing::UnorderedElementsAre(4, 8, 16));
}

TEST(ConflictResolutionTest, ClauseIsAsserting) {
    Formula f{3, 1};
    f.variable_decision_level() = {0, 1, 2, 3};
    std::vector v = {literal::convert(1, false), literal::convert(2, false), literal::convert(3, false)};
    f.literal_range(0).clause(f.literals()) = std::span(v);

    const auto p = ConflictResolution::impl::is_clause_asserting(f, f.literal_range(0).clause(f.literals()), 3);
    EXPECT_TRUE(p.has_value());
    EXPECT_EQ(p.value().first, 2);
    EXPECT_EQ(p.value().second, literal::convert(3, false));
}

TEST(ConflictResolutionTest, ClauseIsNotAsserting) {
    Formula f{3, 1};
    f.variable_decision_level() = {0, 1, 3, 3};
    std::vector v = {literal::convert(1, false), literal::convert(2, false), literal::convert(3, false)};
    f.literal_range(0).clause(f.literals()) = std::span(v);

    const auto p = ConflictResolution::impl::is_clause_asserting(f, f.literal_range(0).clause(f.literals()), 3);
    EXPECT_FALSE(p.has_value());
}

TEST(ConflictResolutionTest, UnitClauseIsAsserting) {
    Formula f{1, 1};
    f.variable_decision_level() = {0, 1};
    std::vector v               = {literal::convert(1, false)};
    f.literal_range(0).clause(f.literals()) = std::span(v);

    const auto p = ConflictResolution::impl::is_clause_asserting(f, f.literal_range(0).clause(f.literals()), 1);
    EXPECT_TRUE(p.has_value());
    EXPECT_EQ(p.value().first, 0);
    EXPECT_EQ(p.value().second, literal::convert(1, false));
}

TEST(ConflictResolutionTest, AnalyzeConflict) {
    auto p = std::filesystem::current_path();
    p /= "../../satlib/small-sat-03.cnf";
    Formula f = DimacsParser::parse_formula(p);

    // antecedent == std::nullopt indicates a decision (i.e., not inferred via BCP)
    f.assignment_trail().emplace_back(3, std::nullopt, 2, Value::FALSE, false);
    f.assignment_map()[2]          = Value::FALSE;
    f.variable_decision_level()[2] = 3;
    f.assignment_trail().emplace_back(5, std::nullopt, 4, Value::TRUE, false);
    f.assignment_map()[4]          = Value::TRUE;
    f.variable_decision_level()[4] = 5;
    f.assignment_trail().emplace_back(3, std::nullopt, 10, Value::FALSE, false);
    f.assignment_map()[10]          = Value::FALSE;
    f.variable_decision_level()[10] = 3;
    f.assignment_trail().emplace_back(5, 0, 5, Value::TRUE, false);
    f.assignment_map()[5]          = Value::TRUE;
    f.variable_decision_level()[5] = 5;
    f.assignment_trail().emplace_back(5, 1, 6, Value::TRUE, false);
    f.assignment_map()[6]          = Value::TRUE;
    f.variable_decision_level()[6] = 5;
    f.assignment_trail().emplace_back(5, 2, 7, Value::FALSE, false);
    f.assignment_map()[7]          = Value::FALSE;
    f.variable_decision_level()[7] = 5;

    f.conflicting_clause() = 3;

    f.decision_level() = 5;

    const auto backtrack_level = ConflictResolution::analyze_conflict(f);

    ASSERT_EQ(backtrack_level, 3);
}

TEST(ConflictResolutionTest, ImmediateConflictAfterDecision) {
    // Create a formula with 1 variable and 1 clause: (¬x1)
    Formula f{1, 1};

    // Clause: (¬x1) -- variable index = 1
    std::vector clause = {literal::convert(1, false)};
    f.literal_range(0).clause(f.literals()) = std::span(clause);

    // At decision level 1, we decide x1 = TRUE.
    // No BCP is needed; this decision immediately falsifies clause 0.
    f.assignment_trail().emplace_back(1, std::nullopt, 1, Value::TRUE, false);
    f.assignment_map()[1] = Value::TRUE;
    f.variable_decision_level()[1] = 1;

    f.conflicting_clause() = 0;
    f.decision_level() = 1;

    // Run conflict analysis
    const auto backtrack_level = ConflictResolution::analyze_conflict(f);

    // In this setup, the learned clause should be (¬x1), which forces x1=FALSE at level 0.
    // Therefore, the backtrack level is expected to be 0.
    ASSERT_EQ(backtrack_level, 0);

    // Verify that the clause database has been augmented with (¬x1)
    const auto target_literal = literal::convert(1, false);

    auto clauses = f.literal_ranges() | std::ranges::views::transform([&](const LiteralRange& r) {
        return r.clause(f.literals());
    });

    const bool found_learned_clause = std::ranges::any_of(clauses, [&](const Clause& c) {
        return c.size() == 1 && c[0] == target_literal;
    });

    ASSERT_TRUE(found_learned_clause) << "Expected learned clause (¬x1) was not found.";
}
