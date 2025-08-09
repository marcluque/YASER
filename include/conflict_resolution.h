#ifndef CONFLICT_RESOLUTION_H
#define CONFLICT_RESOLUTION_H
#include <formula.h>

namespace ConflictResolution {

namespace impl {

/**
 * @brief Performs binary resolution between two clauses on a specified variable.
 *
 * Binary resolution is a fundamental inference rule in propositional logic and SAT solvers.
 * Given two clauses that contain complementary literals of a variable (e.g., x and ¬x),
 * resolving them on that variable produces a new clause (the resolvent) that combines
 * the literals of both clauses, excluding the resolved variable.
 *
 * This function computes the resolvent of two clauses by removing all literals
 * corresponding to the resolution variable and combining the remaining literals.
 * It includes an optimization for small clauses (size ≤ 10) by using `std::ranges::copy_if`.
 *
 * @param clause_1             The first clause involved in the resolution.
 * @param clause_2             The second clause involved in the resolution.
 * @param resolution_variable  The variable on which to perform the resolution.
 *
 * @return std::vector<Literal> The resulting clause after resolution, containing all literals
 *                               from both input clauses except those involving the resolution variable.
 *
 * @note The function does not check whether the input clauses actually contain complementary
 *       literals of the resolution variable. It assumes that such a pair exists. If not,
 *       the resulting clause may not be a valid resolvent.
 *
 * @example
 * Given:
 *   clause_1 = {A, B, x}
 *   clause_2 = {¬x, C, D}
 *   resolution_variable = x
 * The resolvent will be:
 *   {A, B, C, D}
 *
 * @complexity
 * - Let n = |clause_1| and m = |clause_2|.
 * - For small clauses (size ≤ 10):
 *     - Each clause is traversed once, and literals not involving the resolution variable
 *       are inserted into an `std::unordered_set`.
 *     - Insertion into `std::unordered_set` has average-case constant time complexity.
 *     - Thus, the overall time complexity is O(n + m) in the average case.
 * - For larger clauses:
 *     - All literals from both clauses are inserted into the `std::unordered_set`.
 *     - The two literals corresponding to the resolution variable are then removed.
 *     - Again, with average-case constant time operations, the overall time complexity is O(n + m).
 * - Note: In the worst case, due to hash collisions in `std::unordered_set`, insertion and deletion
 *   operations can degrade to linear time, leading to a worst-case time complexity of O((n + m)^2).
 *   However, with a good hash function and proper load factor management, such scenarios are rare.
 */
std::vector<Literal> binary_resolve(Clause clause_1, Clause clause_2, Variable resolution_variable);

/**
 * @brief Determines if a clause is *asserting* at the current decision level.
 *
 * In the context of conflict analysis in a SAT solver, an asserting clause is one that
 * becomes unit under the current assignment just after a conflict, and is used to backtrack
 * and propagate a new assignment. This function checks whether the given clause is asserting
 * at the specified decision level.
 *
 * An asserting clause must contain exactly one literal assigned at the current decision level,
 * and all other literals must be assigned at lower decision levels. The unique literal assigned
 * at the current level is the one that will be propagated after backtracking.
 *
 * @param formula          Reference to the formula, which provides decision levels for literals.
 * @param clause           The clause to check.
 * @param decision_level   The current decision level at which the conflict occurred.
 *
 * @return std::optional<std::pair<DecisionLevel, Literal>>
 *         - If the clause is asserting:
 *             - `first`: the highest decision level among the other literals (i.e., the backtrack level)
 *             - `second`: the literal assigned at the current decision level to be propagated
 *         - If the clause is not asserting, returns `std::nullopt`.
 *
 * Special Case:
 * - If the clause is unit (contains a single literal), it is treated as asserting at level 0.
 *   This typically occurs when a unit clause causes a conflict at the root level.
 */

std::optional<std::pair<DecisionLevel, Literal>> is_clause_asserting(Formula& formula, Clause clause,
                                                                       DecisionLevel decision_level);

} // namespace impl

/**
 * @brief Performs conflict analysis and clause learning.
 *
 * This function is invoked when a conflict is detected during the solving process.
 * It analyzes the conflict to identify the cause and learns a new clause to prevent
 * the same conflict from occurring again. The function then determines the appropriate
 * decision level to backtrack to.
 *
 * The analysis involves traversing the implication graph to find the first unique implication point (UIP),
 * which is the earliest point in the graph where the conflict can be resolved. A new clause is learned
 * by resolving the conflicting clause with antecedent clauses along the path to the UIP.
 *
 * @param formula Reference to the current formula state, including clauses, assignments, and decision levels.
 *
 * @return DecisionLevel
 *         - The decision level to backtrack to after learning the new clause.
 *         - Returns -1 if the conflict occurs at decision level 0, indicating the formula is unsatisfiable.
 *
 * @note
 * - Assumes that a conflict has been detected and `formula.conflicting_clause()` is set.
 * - The learned clause is added to the formula using `formula.learn_clause()`.
 * - Variable and clause priorities are updated using the VSIDS heuristic.
 */
DecisionLevel analyze_conflict(Formula& formula);
} // namespace ConflictResolution

#endif // CONFLICT_RESOLUTION_H
