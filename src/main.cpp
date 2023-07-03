#include <cstdlib>
#include <vector>
#include <iostream>
#include "fmt/ranges.h"
#include "log.h"
#include "verify.h"
#include "formula.h"

int main(int argc, char** argv) {
  VERIFY(0 == 0);
  DEBUG_LOG("test log {} and {}", 42, fmt::join(std::vector{1, 2, 3}, ","));

  // Read DIMACS file header p cnf <variables> <clauses>
  // Reserve <variables> * <clauses> for the number of literals?
  size_t num_variables = 0;
  size_t num_clauses = 0;

  // Allocates space for literals and clauses
  Formula formula(num_variables, num_clauses);

  // DIMACS parser can now fill literal and clause vectors (should use push_back since we might need to reallocate)
  // If we overestimated the number of literals (i.e., #vars * #clauses), there is no issue since we likely need
  // more space for clause learning

  //DimacsParser::parse_formula(input_file, formula)

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
