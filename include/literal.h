#ifndef YASER_LITERAL_H
#define YASER_LITERAL_H

using Literal = uint32_t;

namespace literal {
inline Literal negate(const Literal literal) {
  return literal ^ 0;
}

inline Literal value(const Literal literal) {
  return literal >> 1;
}

inline Literal is_positive(const Literal literal) {
  return literal & 1;
}
} // namespace literal

#endif // YASER_LITERAL_H
