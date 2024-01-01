
#ifndef YASER_DPLL_H
#define YASER_DPLL_H

#include "formula.h"

namespace DPLL {
namespace impl {

/**
 * \brief
 * \param formula
 * \return
 */
bool bcp(Formula& formula);

/**
 * \brief
 * \param formula
 * \return
 */
bool decide(Formula& formula);

/**
 * \brief
 * \param formula
 * \param backtrack_level
 * \return
 */
void backtrack(Formula& formula, ssize_t backtrack_level);
} // namespace impl

/**
 * \brief
 * \return
 */
bool run(Formula& formula);
} // namespace DPLL

#endif // YASER_DPLL_H
