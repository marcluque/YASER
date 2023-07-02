#include <cstdlib>
#include <stdio.h>
#include "fmt/ranges.h"
#include "log.h"

int main(int argc, char** argv) {
  //VERIFY(1 == 0);
  DEBUG_LOG("test log: {} and {}", 42, fmt::join(std::vector{1, 2, 3}, ","));


  return EXIT_SUCCESS;
}
