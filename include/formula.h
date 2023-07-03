#ifndef YASER_FORMULA_H
#define YASER_FORMULA_H

#include <vector>
#include <cstdint>

/**
 * Only use unsigned int for literals.
 * The problem here is that DIMACS uses negative numbers to represent negated variables, e.g., -3 is !x_3.
 * To circumvent this when parsing one could parse it as signed integer, check whether it is in range
 * [-2^30, 2^30 - 1], and use the LSB to indicate a variable's negation.
 * A literal's assignment could then be queried as follows: assignment_map[formula[i] & 0]
 */

/**
 * CNF Formula:    (-3 5 3) (-1 2 -4) (1 2)
 *                 |        |         |
 * Clause indices: 0=c1     1=c2      2=c3
 */

/**
 * - Store literals as vector
 * - Access literals
 * - Iterate over literals (with std::ranges?)
 *
 * - Store start indices (or iterators?) of clauses
 * - Iterate over clauses (with std::ranges?) -> should this be in the same class?
 *
 * - Add new clauses as part of clause learning
 *
 * - Store, access, and set literal assignments? e.g.: formula.value(i) // = assignment_map[formula[i] & 0]
 *
 * - Watched literals map: unordered_map<literal, vector<Clause>> (i.e., a literal points to the clauses its being watched in)
 *
 * - Unit clause set: unordered_set<Clause>
 *
 * - SAT clause set: unordered_set<Clause>
 */
using Literal = uint32_t;

using Clause = std::size_t;

class Formula {
public:
  Formula(std::size_t num_variables, std::size_t num_clauses);

  /**
   * Literals are not changed, hence const and no reference returned.
   *
   * @param i
   * @return
   */
  [[nodiscard]] Literal literal(int i) const {
    return literals[i];
  }

private:
  /**
   * We can have up to 2^31 variables.
   */
  std::vector<Literal> literals;

  /**
   * Stores indices to positions in the ::literals vector.
   */
  std::vector<Clause> clauses;
};

enum class Value { UNASSIGNED = 0, FALSE, TRUE };

#endif // YASER_FORMULA_H
