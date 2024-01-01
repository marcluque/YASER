#ifndef WATCHED_LITERALS_H
#define WATCHED_LITERALS_H
#include <formula.h>

namespace WatchedLiterals {

namespace impl {

/**
 * \brief
 * \param formula
 * \param clause_index
 * \param old_partner_literal
 * \param current_partner_literal
 * \return
 */
std::optional<Literal> find_new_partner_literal(Formula& formula, ClauseIndex clause_index,
                                                Literal old_partner_literal, Literal current_partner_literal);
} // namespace impl

/**
 * \brief
 * \param formula
 * \param clause_index
 * \param is_unit_clause
 */
void add_clause_to_watch(Formula& formula, ClauseIndex clause_index, bool is_unit_clause);

/**
 * \brief
 * \param formula
 * \param negated_watched_literal
 */
void update(Formula& formula, Literal negated_watched_literal);
} // namespace WatchedLiterals

#endif // WATCHED_LITERALS_H
