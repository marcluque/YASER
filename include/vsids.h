#ifndef VSIDS_H
#define VSIDS_H
#include <formula.h>

namespace VSIDS {

/**
 * \brief
 * \param formula
 * \param literals_to_update
 */
void update_variable_priorities(Formula& formula, Clause literals_to_update);


void update_variable_priority(Formula& formula, Variable variable);

/**
 *
 * @param formula
 * @param clause_index
 */
void update_clause_priority(Formula& formula, ClauseIndex clause_index);

} // namespace VSIDS

#endif // VSIDS_H
