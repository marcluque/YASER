#include "gtest/gtest.h"
#include "gmock/gmock-matchers.h"

#include "clause.h"
#include "conflict_resolution.h"
#include "dimacs_parser.h"

#include <string>
#include <vector>
#include <ranges>
#include <filesystem>

TEST(ConflictResolutionTest, AnalyzeConflict) {
    auto p = std::filesystem::current_path();
    p /= "../../satlib/small-sat-03.cnf";
    Formula f = DimacsParser::parse_formula(p);

    // antecedent == std::nullopt indicates a decision (i.e., not inferred via BCP)
    f.assignment_trail().emplace_back(3, std::nullopt, 2, Value::FALSE);
    f.assignment_trail_index()[2] = f.assignment_trail().size() - 1;
    f.assignment_map()[2]          = Value::FALSE;
    f.variable_decision_level()[2] = 3;
    f.assignment_trail().emplace_back(5, std::nullopt, 4, Value::TRUE);
    f.assignment_trail_index()[4] = f.assignment_trail().size() - 1;
    f.assignment_map()[4]          = Value::TRUE;
    f.variable_decision_level()[4] = 5;
    f.assignment_trail().emplace_back(3, std::nullopt, 10, Value::FALSE);
    f.assignment_trail_index()[10] = f.assignment_trail().size() - 1;
    f.assignment_map()[10]          = Value::FALSE;
    f.variable_decision_level()[10] = 3;
    f.assignment_trail().emplace_back(5, 0, 5, Value::TRUE);
    f.assignment_trail_index()[5] = f.assignment_trail().size() - 1;
    f.assignment_map()[5]          = Value::TRUE;
    f.variable_decision_level()[5] = 5;
    f.assignment_trail().emplace_back(5, 1, 6, Value::TRUE);
    f.assignment_trail_index()[6] = f.assignment_trail().size() - 1;
    f.assignment_map()[6]          = Value::TRUE;
    f.variable_decision_level()[6] = 5;
    f.assignment_trail().emplace_back(5, 2, 7, Value::FALSE);
    f.assignment_trail_index()[7] = f.assignment_trail().size() - 1;
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
    f.literals() = { literal::convert(1, false) };
    f.literal_range(0) = LiteralRange{0, f.literals().size()};

    // At decision level 1, we decide x1 = TRUE.
    // No BCP is needed; this decision immediately falsifies clause 0.
    f.assignment_trail().emplace_back(1, std::nullopt, 1, Value::TRUE);
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
