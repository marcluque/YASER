#pragma once

#include <span>
#include <format>

#include "literal.h"

struct Clause {
    std::span<const Literal> literals{};

    [[nodiscard]] constexpr auto begin() const {
        return literals.begin();
    }

    [[nodiscard]] constexpr auto end() const {
        return literals.end();
    }

    [[nodiscard]] constexpr auto size() const {
        return literals.size();
    }

    [[nodiscard]] constexpr auto print() const {
        std::string s;
        for (const auto& literal : literals) {
            s.append(std::format("{} ∨ ", literal.print()));
        }

        s.resize(s.length() - 5);

        return s;
    }

    [[nodiscard]] constexpr auto print_dimacs() const {
        std::string s;
        for (const auto& literal : literals) {
            s.append(std::format("{} ", literal.print_dimacs()));
        }

        s.append("0");

        return s;
    }
};
static_assert(sizeof(Clause) == sizeof(std::span<Literal>));
static_assert(std::is_trivially_copyable_v<Clause>);

template <>
struct std::formatter<Clause> : std::formatter<std::string> {
    auto format(const auto& clause, auto& ctx) const {
        return std::formatter<std::string>::format(clause.print(), ctx);
    }
};

struct ClauseIndex {
    std::size_t index;

    [[nodiscard]] constexpr bool operator==(const ClauseIndex&) const = default;

    [[nodiscard]] constexpr auto operator<=>(const ClauseIndex&) const = default;
};
static_assert(sizeof(ClauseIndex) == sizeof(std::size_t));
static_assert(std::is_trivially_copyable_v<ClauseIndex>);

template <>
struct std::hash<ClauseIndex> {
    constexpr std::size_t operator()(const auto c) const noexcept {
        return std::hash<std::size_t>{}(c.index);
    }
};

template <>
struct std::formatter<ClauseIndex> : std::formatter<std::size_t> {
    auto format(const auto& c, auto& ctx) const {
        return std::formatter<std::size_t>::format(c.index, ctx);
    }
};

constexpr auto INVALID_CLAUSE = ClauseIndex{std::numeric_limits<ClauseIndex>::max()};
