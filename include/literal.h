#ifndef YASER_LITERAL_H
#define YASER_LITERAL_H

/**
 * \brief Uses 32 bits. Bit 0 is the literal's sign. The remaining 31 bits are the variable's index.
 */
using Literal = uint32_t;

/**
 * \brief Same as Literal but only has 31 bit (since bit 0 is not used).
 */
using Variable = uint32_t;

#define INVALID_LITERAL 0

enum class Value { UNASSIGNED = 0, TRUE = 1, FALSE = 2 };

namespace literal {

inline Literal convert(const unsigned raw_literal_index, const bool is_negated) {
    return (raw_literal_index << 1U) | !is_negated; // NOLINT(*-narrowing-conversions)
}

inline Literal negate(const Literal literal) {
  return literal ^ 1;
}

inline Literal variable(const Literal literal) {
  return literal >> 1;
}

inline bool is_positive(const Literal literal) {
  return literal & 1;
}

/**
 * \brief We evaluate the expression: `Positive literal => (assigned value == TRUE)`
 * \param literal
 * \param assigned_value
 * \return
 */
inline bool is_satisfied(const Literal literal, const Value assigned_value) {
    return (is_positive(literal) && (assigned_value == Value::TRUE)) || (!is_positive(literal) && (assigned_value == Value::FALSE));
}

/**
 * \brief
 * \param literal
 * \return
 */
inline std::string print_literal(const Literal literal) {
    std::string sign;
    if (!is_positive(literal)) {
        sign.append("¬");
    }

    return fmt::format("{}x_{}", sign, variable(literal));
}

/**
 * \brief
 * \param literal
 * \return
 */
inline std::string print_variable(const Literal literal) {
    return fmt::format("x_{}", variable(literal));
}

} // namespace literal

#endif // YASER_LITERAL_H
