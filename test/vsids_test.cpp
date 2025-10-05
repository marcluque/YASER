#include <string>
#include "gtest/gtest.h"
#include "dimacs_parser.h"

#include "vsids.h"

#include <log.h>
#include <gmock/gmock-matchers.h>

TEST(VSIDSTest, TestLiteralOrderingAndFinding) {
    Formula f{2, 1};
    f.next_variable().push({0, 1});
    f.next_variable().push({0, 2});

    EXPECT_EQ(f.next_variable().top().variable, 1);

    auto v = std::vector{literal::convert(1, false)};
    VSIDS::update_variable_priorities(f, std::span(v));

    EXPECT_EQ(f.next_variable().top().variable, 1);

    v = std::vector{literal::convert(2, false)};
    VSIDS::update_variable_priorities(f, std::span(v));
    VSIDS::update_variable_priorities(f, std::span(v));

    EXPECT_EQ(f.next_variable().top().variable, 2);
}
