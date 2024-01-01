#ifndef CONFLICT_RESOLUTION_H
#define CONFLICT_RESOLUTION_H
#include <formula.h>

namespace ConflictResolution {

namespace impl {
/**
 * \brief
 * \param clause_1
 * \param clause_2
 * \return
 */
std::vector<Literal> resolve(Clause clause_1, Clause clause_2);

/**
 * \brief
 * \param formula
 * \param clause
 * \param decision_level
 * \return
 */
std::optional<std::pair<ssize_t, Literal>> is_clause_asserting(Formula& formula, Clause clause,
                                                                       ssize_t decision_level);

} // namespace impl

ssize_t analyze_conflict(Formula& formula);
} // namespace ConflictResolution

#endif // CONFLICT_RESOLUTION_H
