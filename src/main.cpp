#include <cstdlib>
#include <vector>
#include <iostream>
#include "fmt/ranges.h"
#include "log.h"
#include "verify.h"
#include "formula.h"
#include "dimacs_parser.h"

int main(int argc, char** argv) {
  //VERIFY(1, std::greater<>(), 10);
  //DEBUG_LOG("test log {} and {}", 42, fmt::join(std::vector{1, 2, 3}, ","));

  // DIMACS parser can now fill literal and clause vectors (should use push_back since we might need to reallocate)
  // If we overestimated the number of literals (i.e., #vars * #clauses), there is no issue since we likely need
  // more space for clause learning

  DEBUG_LOG("{}", argv[1]);
  Formula f = DimacsParser::parse_formula(std::filesystem::path(argv[1]));

  INFO_LOG("Parsed input file, took {} ms", 1);

  // Initialize watched literals?
  //WatchedLiterals::init(formula)

  INFO_LOG("Initialized watched literals");

  // Initialize heuristics?

  // Start DPLL
  //result = DPLL::run(formula)

  INFO_LOG("RESULT: {}", true);

  return EXIT_SUCCESS;
}
