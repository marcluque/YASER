#include <fstream>
#include <sstream>
#include <span>
#include <algorithm>
#include "dimacs_parser.h"
#include "log.h"
#include "verify.h"
#include "watched_literals.h"

namespace DimacsParser {

namespace impl {

unsigned atoui(const char* s, const std::size_t n) {
    unsigned val = 0;
    for (std::size_t i = s[0] == '-'; i < n; ++i) {
        val = val * 10 + (s[i] - '0');
    }

    return val;
}

inline bool parse_number(const char*& p, unsigned& val, bool& is_negated) {
    while (*p == ' ' || *p == '\t' || *p == '\r' || *p == '\n') ++p;

    if (*p == '0') { ++p; return false; }

    is_negated = *p == '-';
    p += is_negated;

    val = 0;
    do {
        val = val * 10 + (*p - '0');
        ++p;
    } while (std::isdigit(*p));

    return true;
}

std::tuple<std::size_t, std::size_t> parse_header(const char*& buffer_ptr) {
    // Skip "p cnf" until we reach a digit
    buffer_ptr += 5;
    for (; !std::isdigit(*buffer_ptr); ++buffer_ptr) {}

    unsigned num_variables = 0;
    bool is_negated = false;
    auto r = parse_number(buffer_ptr, num_variables, is_negated);
    VERIFY(r, std::equal_to<>{}, true);
    unsigned num_clauses = 0;
    is_negated = false;
    r = parse_number(buffer_ptr, num_clauses, is_negated);
    VERIFY(r, std::equal_to<>{}, true);

    INFO_LOG("Formula has {} variables and {} clauses", num_variables, num_clauses);

    return {num_variables, num_clauses};
}

std::size_t parse_clause(Formula& formula, const char*& buffer_ptr, std::size_t clause_start) {
    unsigned raw_literal_index = 0;
    bool is_negated = false;
    while (parse_number(buffer_ptr, raw_literal_index, is_negated)) {
        VERIFY(static_cast<std::size_t>(raw_literal_index), std::less_equal<>{}, formula.number_of_variables());
        VERIFY(raw_literal_index, std::less_equal<>{}, 1U << 31);

        formula.literal(clause_start) = literal::convert(raw_literal_index, is_negated);
        formula.next_literal().emplace(0, formula.literal(clause_start));
        ++clause_start;
    }

    return clause_start;
}

bool watched_clauses_contains_duplicates(Formula& formula) {
    for (const auto& [literal, clauses] : formula.watched_literal_clause_map()) {
        auto sorted_clauses = clauses;
        std::ranges::sort(sorted_clauses);

        if (auto it = std::ranges::adjacent_find(sorted_clauses); it != sorted_clauses.end()) {
            ERROR_LOG("Duplicate ClauseIndex {} found for literal {}", *it, literal);
            return true;
        }
    }

    return false;
}

Formula parse_formula(std::istream& input_stream, const std::size_t size) {
    VERIFY(std::isgreater(size, std::numeric_limits<std::streamsize>::max()), std::equal_to<>{}, false);
    std::vector<char> buffer(size + 1);
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
        formula.clause_activity().emplace(0, current_clause_index);

        VERIFY(formula.clause(current_clause_index).size(), std::greater<>{}, static_cast<size_t>(0));

        num_literals += formula.clause(current_clause_index).size();

        // Collect unit clauses
        if (formula.clause(current_clause_index).size() == 1) {
            formula.unit_clauses().emplace_back(current_clause_index, formula.clause(current_clause_index).front());
            formula.unit_clause_map()[current_clause_index] = true;
            WatchedLiterals::add_clause_to_watch(formula, current_clause_index, true);
        } else {
            WatchedLiterals::add_clause_to_watch(formula, current_clause_index, false);
        }
    }

    formula.literals().resize(num_literals);

    // Sanity checks after parsing
    VERIFY(formula.clause_watched_literals_map().size(), std::equal_to<>{}, formula.number_of_input_clauses());
    VERIFY(watched_clauses_contains_duplicates(formula), std::equal_to<>{}, false);
    VERIFY(formula.watched_literal_clause_map().size(), std::less_equal<>{}, formula.number_of_variables() * 2);

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
    DEBUG_LOG("Parsing input file from path: {}", input_file_path.string());
    std::ifstream input_file_stream{input_file_path};
    VERIFY(!input_file_stream, std::equal_to<>{}, false);
    const auto file_size = std::filesystem::file_size(input_file_path);
    return impl::parse_formula(input_file_stream, file_size);
}
} // namespace DimacsParser