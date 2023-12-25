#ifndef YASER_FORMULA_H
#define YASER_FORMULA_H

#include <vector>
#include <cstdint>
#include <string>
#include <span>
#include "fmt/format.h"
#include "literal.h"

#include <unordered_set>

/**
 * Only use unsigned int for literals.
 * The problem here is that DIMACS uses negative numbers to represent negated variables, e.g., -3 is !x_3.
 * To circumvent this when parsing one could parse it as signed integer, check whether it is in range
 * [-2^30, 2^30 - 1], and use the LSB to indicate a variable's negation.
 * A literal's assignment could then be queried as follows: assignment_map[formula[i] & 0]
 */

/**
 * CNF Formula:    [(-3 5 3) (-1 2 -4) (1 2)]
 *                 |         |         |
 * Clause indices: 0=c1      3=c2      6=c3  8
 */

// for (int i = clause[0]; i < clause[1]; ++i) {}

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
 * - Watched literals map: unordered_map<literal, vector<Clause>> (i.e., a literal points to the clauses its being
 * watched in)
 *
 * - Unit clause set: unordered_set<Clause>
 *
 * - SAT clause set: unordered_set<Clause>
 */
using Clause = std::span<Literal>;

class Formula {
public:
  Formula(std::size_t num_variables, std::size_t num_clauses);

  /**
   *
   *
   * @param i
   * @return
   */
  [[nodiscard]] Literal& literal(std::size_t i) {
#ifdef YASER_DEBUG
    return literals.at(i); // Allow range checks
#else
    return m_literals[i];
#endif
  }

  /**
   *
   *
   * @param i
   * @return
   */
  [[nodiscard]] Clause& clause(std::size_t i) {
#ifdef YASER_DEBUG
    return clauses.at(i); // Allow range checks
#else
    return m_clauses[i];
#endif
  }

  /**
   * No need to be efficient here, this should only be used for debugging and test purposes.
   *
   * @return
   */
  explicit operator std::string() const {
    std::string s;
    for (const auto& clause : m_clauses) {
      s.append("(");
      for (const auto& literal : clause) {
        std::string sign{};
        if (!literal::is_positive(literal)) {
          sign.append("¬");
        }

        s.append(fmt::format("{}x_{} ∨ ", sign, literal::value(literal)));
      }
      s.resize(s.length() - 5);
      s.append(") ∧ ");
    }

    s.resize(s.length() - 5);

    return s;
  }

  [[nodiscard]] size_t number_of_variables() const {
    return m_number_of_variables;
  }

  /**
   * \brief
   *
   * It is possible to create a conflict during BCP.
   * Consider, for instance:
   * (a | !b) & (c | !d) & (b | d)
   * Further assume a = 0, c = 0. Our unit clauses imply b = 0, d = 0.
   * This leads to the last clause being conflicting, since all its assignments are 0.
   *
   * \return
   */
  [[nodiscard]] bool is_conflict_present() const {
    return m_is_conflict_present;
  }

  [[nodiscard]] std::vector<std::tuple<Literal, bool>>& assignment_trail() {
    return m_assignment_trail;
  }

  [[nodiscard]] std::unordered_set<Clause> unit_clauses() const {
    return m_unit_clauses;
  }

private:
  /**
   * \brief
   */
  size_t m_number_of_variables;

  /**
   * \brief
   */
  bool m_is_conflict_present;

  /**
   * \brief We can have up to 2^31 variables.
   */
  std::vector<Literal> m_literals;

  /**
   * \brief Stores indices to positions in the ::literals vector.
   */
  std::vector<Clause> m_clauses;

  /**
   * \brief
   */
  std::vector<std::tuple<Literal, bool>> m_assignment_trail;

  /**
   * \brief
   */
  // TODO: Does this have to be a set?
  std::unordered_set<Clause> m_unit_clauses;
};

enum class Value { UNASSIGNED = 0 };

#endif // YASER_FORMULA_H
