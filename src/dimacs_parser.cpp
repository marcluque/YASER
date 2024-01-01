#include <iostream>
#include <fstream>
#include <sstream>
#include <span>
#include "dimacs_parser.h"
#include "log.h"

#include <optional>
#include <verify.h>
#include <watched_literals.h>

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
    unsigned num_clauses   = std::get<1>(parse_number(buffer_ptr).value());

    DEBUG_LOG("Formula has {} variables and {} clauses", num_variables, num_clauses);

    return {num_variables, num_clauses};
}

std::size_t parse_clause(Formula& formula, const char*& buffer_ptr, std::size_t clause_start) {
    while (auto parsed_literal = parse_number(buffer_ptr)) {
        auto [is_negated, raw_literal_index] = parsed_literal.value();

        VERIFY(static_cast<std::size_t>(raw_literal_index), std::less_equal<>{}, formula.number_of_variables());
        VERIFY(raw_literal_index, std::less_equal<>{}, 1U << 31);

        formula.literal(clause_start) = literal::convert(raw_literal_index, is_negated);
        formula.next_literal().emplace(0, formula.literal(clause_start));
        ++clause_start;
    }

    return clause_start;
}

Formula parse_formula(std::istream& input_stream, const std::size_t size) {
    VERIFY(std::cmp_greater(size, std::numeric_limits<std::streamsize>::max()), std::equal_to<>{}, false);
    std::vector<char> buffer;
    buffer.reserve(size);
    // TODO: Check size and conversion
    input_stream.read(buffer.data(), static_cast<std::streamsize>(size));
    const char* buffer_ptr = buffer.data();

    // Skip comments until we reach problem statement line
    for (; *buffer_ptr != 'p'; ++buffer_ptr) {
        for (; *buffer_ptr != '\n'; ++buffer_ptr) {}
    }

    // Parse header
    auto [num_variables, num_clauses] = parse_header(buffer_ptr);

    Formula formula{num_variables, num_clauses};

    // Parse formula
    std::size_t clause_end = 0;
    std::size_t num_literals = 0;
    // +1 on buffer_ptr to skip newline character
    for (std::size_t current_clause_index = 0; current_clause_index < num_clauses; ++current_clause_index, ++buffer_ptr) {
        const std::size_t clause_start = clause_end;
        clause_end                     = parse_clause(formula, buffer_ptr, clause_start);

        formula.clause(current_clause_index) = std::span{&formula.literal(clause_start), clause_end - clause_start};

        VERIFY(formula.clause(current_clause_index).size(), std::greater<>{}, static_cast<size_t>(0));

        num_literals += formula.clause(current_clause_index).size();

        // Collect unit clauses
        if (formula.clause(current_clause_index).size() == 1) {
            formula.unit_clauses().emplace(current_clause_index, formula.clause(current_clause_index).front());
            WatchedLiterals::add_clause_to_watch(formula, current_clause_index, true);
        } else {
            WatchedLiterals::add_clause_to_watch(formula, current_clause_index, false);
        }
    }

    formula.literals().resize(num_literals);

    return formula;
}
} // namespace impl

Formula parse_formula(const char* input_string) {
    std::istringstream input_string_stream{input_string};
    VERIFY(!input_string_stream, std::equal_to<>{}, false);
    return impl::parse_formula(input_string_stream, strlen(input_string));
}

Formula parse_formula(const std::string& input_string) {
    std::istringstream input_string_stream{input_string};
    VERIFY(!input_string_stream, std::equal_to<>{}, false);
    return impl::parse_formula(input_string_stream, input_string.size());
}

Formula parse_formula(const std::filesystem::path& input_file_path) {
    std::ifstream input_file_stream{input_file_path};
    VERIFY(!input_file_stream, std::equal_to<>{}, false);
    const auto file_size = std::filesystem::file_size(input_file_path);
    return impl::parse_formula(input_file_stream, file_size);
}
} // namespace DimacsParser