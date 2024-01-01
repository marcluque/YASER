#ifndef CLAUSE_H
#define CLAUSE_H

#include "formula.h"

namespace clause {

/**
 * \brief
 * \param clause
 * \return
 */
inline std::string print_clause(const Clause clause) {
    std::string s;
    for (const auto& literal : clause) {
        s.append(fmt::format("{} ∨ ", literal::print_literal(literal)));
    }

    s.resize(s.length() - 5);

    return s;
}
}; // namespace clause

#endif // CLAUSE_H
