#include <iostream>
#include <fstream>
#include <sstream>
#include <span>
#include "dimacs_parser.h"
#include "log.h"

#include <optional>

namespace DimacsParser {

  namespace impl {

    std::tuple<bool, unsigned> atoui(const char* s, const std::size_t n) {
      std::size_t i = s[0] == '-';

      unsigned val = 0;
      for (; i < n; ++i) {
        val = val * 10 + (s[i] - '0');
      }

      return {s[0] == '-', val};
    }

    static std::optional<std::tuple<bool, unsigned>> parse_number(const char*& buffer_ptr) {
      const char* number_start = nullptr;
      // TODO: Use portable new line
      for (; *buffer_ptr; ++buffer_ptr) {
        switch (*buffer_ptr) {
          case '\r':
            if (number_start) {
              auto [sign, number] = atoui(number_start, buffer_ptr - number_start);
              ++buffer_ptr;
              return std::tuple(sign, number);
            }
            break;
          case '\n':
            if (number_start) {
              return atoui(number_start, buffer_ptr - number_start);
            }
            break;
          case ' ':
            if (number_start) {
              return atoui(number_start, buffer_ptr - number_start);
            }
            number_start = nullptr;
            break;
          case '0':
            // If we are NOT looking at a number right now, we can fall through
            if (!number_start) {
              return std::nullopt;
            }
          case '-':
          case '1':
          case '2':
          case '3':
          case '4':
          case '5':
          case '6':
          case '7':
          case '8':
          case '9':
            if (!number_start) {
              number_start = buffer_ptr;
            }
            break;
          default:
            break;
        }
      }

      // Important if the buffer doesn't end with /n, /r/n, /r (e.g., a simple c-style string)
      return number_start ? std::make_optional(atoui(number_start, buffer_ptr - number_start)) : std::nullopt;
    }

    std::tuple<std::size_t, std::size_t> parse_header(const char*& buffer_ptr) {
      unsigned num_variables = std::get<1>(parse_number(buffer_ptr).value());
      unsigned num_clauses = std::get<1>(parse_number(buffer_ptr).value());

      DEBUG_LOG("Formula has {} variables and {} clauses", num_variables, num_clauses);

      return {num_variables, num_clauses};
    }

    std::size_t parse_clause(Formula& formula, const char*& buffer_ptr, std::size_t clause_start) {
      while (auto literal = parse_number(buffer_ptr)) {
        auto [is_negated, input_literal] = literal.value();
#ifdef YASER_DEBUG
        if (input_literal > (1 << 31)) {
          ERROR_LOG("{} is greater than {} which is the maximum allowed index for a variable", input_literal, 1 << 31);
          __builtin_trap();
        }
#endif
        input_literal <<= 1;
        input_literal |= !is_negated;
        formula.literal(clause_start) = input_literal;
        ++clause_start;
      }

      return clause_start;
    }

    Formula parse_formula(std::istream& input_stream, std::size_t size) {
#ifdef YASER_DEBUG
      if (std::cmp_greater(size, std::numeric_limits<std::streamsize>::max())) {
        ERROR_LOG("Size {} of input is too big", size);
        __builtin_trap();
      }
#endif
      std::vector<char> buffer;
      buffer.reserve(size);
      // TODO: Check size and conversion
      input_stream.read(buffer.data(), static_cast<std::streamsize>(size));
      const char* buffer_ptr = buffer.data();

      // Skip comments until we reach problem statement line
      for (; *buffer_ptr != 'p'; ++buffer_ptr) {
        for (; *buffer_ptr != '\n'; ++buffer_ptr);
      }

      // Parse header
      auto [num_variables, num_clauses] = parse_header(buffer_ptr);

      Formula formula{num_variables, num_clauses};

      // Parse formula
      std::size_t clause_end = 0;
      // +1 on buffer_ptr to skip newline character
      for (std::size_t current_clause = 0; current_clause < num_clauses; ++current_clause, ++buffer_ptr) {
        const std::size_t clause_start = clause_end;
        clause_end = parse_clause(formula, buffer_ptr, clause_start);

        formula.clause(current_clause) = std::span{&formula.literal(clause_start), clause_end - clause_start};
      }

      return formula;
    }
  }

  Formula parse_formula(const std::string& input_string) {
      std::istringstream input_string_stream{input_string};
      return impl::parse_formula(input_string_stream, input_string.size());
  }

  Formula parse_formula(const std::filesystem::path& input_file_path) {
    std::ifstream input_file_stream{input_file_path};
#ifdef YASER_DEBUG
    if (!input_file_stream) {
      ERROR_LOG("Error opening for reading");
      __builtin_trap();
    }
#endif
    const auto file_size = std::filesystem::file_size(input_file_path);
    return impl::parse_formula(input_file_stream, file_size);
  }
}