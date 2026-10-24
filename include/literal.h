#pragma once

#include "verify.h"

#include <format>
#include <utility>

enum class Value : std::uint8_t {
    UNASSIGNED = 0, TRUE = 1, FALSE = 2
};

/**
 * \brief Same as Literal but only has 31 bit (since bit 32 is not used).
 */
struct Variable {
    std::uint32_t index{};

    template <std::integral T>
    constexpr explicit Variable(T index) : index(static_cast<std::uint32_t>(index)) {
        VERIFY(std::in_range<std::uint32_t>(index), std::equal_to<>{}, true);
        VERIFY(index, std::less<>{}, 1U << 31);
    }

    [[nodiscard]] constexpr bool operator==(const Variable& variable) const = default;
};
static_assert(sizeof(Variable) == sizeof(std::uint32_t));
static_assert(std::is_trivially_copyable_v<Variable>);

template <>
struct std::hash<Variable> {
    constexpr std::size_t operator()(const auto v) const noexcept {
        return std::hash<std::uint32_t>{}(v.index);
    }
};

constexpr auto INVALID_VARIABLE = Variable{0};

/**
 * \brief Uses 32 bits. Bit 0 is the literal's sign. The remaining 31 bits are the variable's index.
 *
 * bit 0 = 1 -> positive
 * bit 0 = 0 -> negated
 */
struct Literal {
    std::uint32_t literal{};

    constexpr Literal() = default;

    constexpr explicit Literal(const std::uint32_t literal)
        : literal(literal) {}

    constexpr Literal(const Variable variable, const bool is_negated)
        : literal((variable.index << 1U) | static_cast<std::uint32_t>(!is_negated)) {}

    constexpr Literal(const Variable variable, const Value value)
        : literal((variable.index << 1U) | static_cast<std::uint32_t>(value == Value::TRUE)) {}

    [[nodiscard]] constexpr Literal operator~() const {
        return Literal{literal ^ 1U};
    }

    constexpr bool operator==(const Literal other) const {
        return other.literal == literal;
    }

    [[nodiscard]] constexpr Variable variable() const {
        return Variable{literal >> 1U};
    }

    [[nodiscard]] constexpr std::uint32_t index() const {
        return Variable{literal >> 1U}.index;
    }

    [[nodiscard]] constexpr Value value() const {
        return positive() ? Value::TRUE : Value::FALSE;
    }

    [[nodiscard]] constexpr bool positive() const {
        return literal & 1U;
    }

    [[nodiscard]] constexpr bool satisfied_by(const Value value) const {
        return (positive() && value == Value::TRUE) || (!positive() && value == Value::FALSE);
    }

    [[nodiscard]] constexpr std::string print() const {
        std::string sign;
        if (!positive()) {
            sign.append("¬");
        }

        return std::format("{}x_{}", sign, variable().index);
    }

    [[nodiscard]] constexpr std::string print_dimacs() const {
        std::string sign;
        if (!positive()) {
            sign.append("-");
        }

        return std::format("{}{}", sign, variable().index);
    }

    [[nodiscard]] constexpr std::string print_variable() const {
        return std::format("x_{}", variable().index);
    }
};
static_assert(sizeof(Literal) == sizeof(std::uint32_t));
static_assert(std::is_trivially_copyable_v<Literal>);

template <>
struct std::hash<Literal> {
    constexpr std::size_t operator()(const auto l) const noexcept {
        return std::hash<std::uint32_t>{}(l.literal);
    }
};

constexpr auto INVALID_LITERAL = Literal{0};

struct VariableActivityPair {
    double activity{};
    Variable variable;

    bool operator<(const VariableActivityPair& other) const {
        return activity < other.activity;
    }

    bool operator>(const VariableActivityPair& other) const {
        return activity > other.activity;
    }
};
using LiteralPair = std::pair<Literal, Literal>;
