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

    [[nodiscard]] std::string dimacs() const {
        std::string s{};
        s.reserve(literals.size() * 12 + 1);

        for (const auto& literal : literals) {
            std::format_to(std::back_inserter(s), "{} ", literal.dimacs());
        }

        s.push_back('0');
        return s;
    }
};
static_assert(sizeof(Clause) == sizeof(std::span<Literal>));
static_assert(std::is_trivially_copyable_v<Clause>);

template <>
struct std::formatter<Clause> {
    static constexpr auto parse(const std::format_parse_context& ctx) {
        return ctx.begin();
    }

    static auto format(const Clause& clause, std::format_context& ctx) {
        auto out = ctx.out();
        auto first = true;

        for (const auto& literal : clause) {
            if (!first) {
                out = std::format_to(out, " ∨ ");
            }

            out = std::format_to(out, "{}", literal);
            first = false;
        }

        return out;
    }
};

struct ClauseIndex {
    std::size_t index{};

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

constexpr auto INVALID_CLAUSE = ClauseIndex{std::numeric_limits<std::size_t>::max()};
