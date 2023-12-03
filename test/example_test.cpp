#include "gtest/gtest.h"

TEST(SimpleTest, HandlesZeroInput) {
  EXPECT_EQ(1, 1);
  int x = 5;
  int y = 5;
  ASSERT_EQ(x + y, 1);
}