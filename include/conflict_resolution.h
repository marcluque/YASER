#ifndef CONFLICT_RESOLUTION_H
#define CONFLICT_RESOLUTION_H
#include <formula.h>

namespace ConflictResolution {

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
