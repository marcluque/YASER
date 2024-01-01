#include <string>
#include "gtest/gtest.h"

#include <dimacs_parser.h>
#include <formula.h>
#include <watched_literals.h>
#include <gmock/gmock-matchers.h>

TEST(WatchedLiterals, NoPartnerPresent) {
    const auto s = "p cnf 1 1\n"
                   "1 0\n";

    Formula f                      = DimacsParser::parse_formula(s);
    const auto literal             = literal::convert(1, false);
    const auto new_partner_literal = WatchedLiterals::impl::find_new_partner_literal(f, 0,
                                                                                     literal::negate(literal),
                                                                                     literal);
    ASSERT_EQ(new_partner_literal, std::nullopt);
}

TEST(WatchedLiterals, NoPartnerPresent2) {
    const auto s = "p cnf 2 1\n"
                   "1 2 0\n";

    Formula f                      = DimacsParser::parse_formula(s);
    const auto first_literal       = literal::convert(1, false);
    const auto second_literal      = literal::convert(2, false);
    const auto new_partner_literal = WatchedLiterals::impl::find_new_partner_literal(f, 0, first_literal,
                                                                                     second_literal);
    ASSERT_EQ(new_partner_literal, std::nullopt);
}

TEST(WatchedLiterals, PartnerPresent) {
    const auto s = "p cnf 3 1\n"
                   "1 2 3 0\n";

    Formula f = DimacsParser::parse_formula(s);

    f.assignment_map()[1] = Value::FALSE;

    const auto first_literal       = literal::convert(1, false);
    const auto second_literal      = literal::convert(2, false);
    const auto new_partner_literal = WatchedLiterals::impl::find_new_partner_literal(f, 0, first_literal,
                                                                                     second_literal);
    ASSERT_EQ(new_partner_literal, literal::convert(3, false));
}

TEST(WatchedLiterals, PartnerNotPresentBecauseItIsAssignedFalse) {
    const auto s = "p cnf 3 1\n"
                   "1 2 3 0\n";

    Formula f = DimacsParser::parse_formula(s);

    f.assignment_map()[1] = Value::FALSE;
    f.assignment_map()[3] = Value::FALSE;

    const auto first_literal       = literal::convert(1, false);
    const auto second_literal      = literal::convert(2, false);
    const auto new_partner_literal = WatchedLiterals::impl::find_new_partner_literal(f, 0, first_literal,
                                                                                     second_literal);
    ASSERT_EQ(new_partner_literal, std::nullopt);
}

TEST(WatchedLiterals, PartnerNotPresentBecauseItIsAssignedTrue) {
    const auto s = "p cnf 3 1\n"
                   "1 2 3 0\n";

    Formula f = DimacsParser::parse_formula(s);

    f.assignment_map()[1] = Value::FALSE;
    f.assignment_map()[3] = Value::TRUE;

    const auto first_literal       = literal::convert(1, false);
    const auto second_literal      = literal::convert(2, false);
    const auto new_partner_literal = WatchedLiterals::impl::find_new_partner_literal(f, 0, first_literal,
                                                                                     second_literal);
    ASSERT_EQ(new_partner_literal, second_literal);
}
