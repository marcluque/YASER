#pragma once

#include <span>

#include "literal.h"
#include "fmt/format.h"

using Clause                  = std::span<const Literal>;
using ClauseIndex             = std::size_t;

constexpr std::size_t INVALID_CLAUSE = std::numeric_limits<ClauseIndex>::max();

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

inline std::string print_clause_dimacs(const Clause clause) {
    std::string s;
    for (const auto& literal : clause) {
        s.append(fmt::format("{} ", literal::print_literal_dimacs(literal)));
    }

    s.append("0");

    return s;
}
} // namespace clause
