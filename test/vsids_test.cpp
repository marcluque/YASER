#include <string>
#include "gtest/gtest.h"
#include "dimacs_parser.h"

#include "vsids.h"

#include <log.h>
#include <gmock/gmock-matchers.h>

TEST(VSIDSTest, TestLiteralOrderingAndFinding) {
    Formula f{2, 1};
    f.next_literal().emplace(0, literal::convert(1, false));
    f.next_literal().emplace(0, literal::convert(2, false));

    EXPECT_EQ(f.next_literal().begin()->first, 0);
    EXPECT_EQ(f.next_literal().begin()->second, literal::convert(2, false));

    auto v = std::vector{literal::convert(1, false)};
    VSIDS::update_variable_priorities(f, std::span(v));

    EXPECT_EQ(f.next_literal().begin()->first, 1);
    EXPECT_EQ(f.next_literal().begin()->second, literal::convert(1, false));

    v = std::vector{literal::convert(2, false)};
    VSIDS::update_variable_priorities(f, std::span(v));
    VSIDS::update_variable_priorities(f, std::span(v));

    EXPECT_EQ(f.next_literal().begin()->first, 2);
    EXPECT_EQ(f.next_literal().begin()->second, literal::convert(2, false));
}
