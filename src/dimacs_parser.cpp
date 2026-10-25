#include <fstream>
#include <sstream>
#include <span>
#include <algorithm>
#include <ranges>
#include <cstring>

#include "dimacs_parser.h"
#include "log.h"
#include "verify.h"
#include "watched_literals.h"

namespace DimacsParser {

namespace impl {

inline bool parse_number(BufferIterator& it, unsigned& val, bool& is_negated) {
    while (*it == ' ' || *it == '\t' || *it == '\r' || *it == '\n') ++it;

    if (*it == '0') { ++it; return false; }

    is_negated = *it == '-';
    it += is_negated;

    val = 0;
    do {
        val = val * 10 + (*it - '0');
        ++it;
    } while (std::isdigit(*it));

    return true;
}

std::tuple<std::size_t, std::size_t> parse_header(BufferIterator& buffer_it) {
    // Skip "p cnf" until we reach a digit
    buffer_it += 5;
    for (; !std::isdigit(*buffer_it); ++buffer_it) {}

    unsigned num_variables = 0;
    bool is_negated = false;
    auto r = parse_number(buffer_it, num_variables, is_negated);
    VERIFY(r);
    unsigned num_clauses = 0;
    is_negated = false;
    r = parse_number(buffer_it, num_clauses, is_negated);
    VERIFY(r);

    DEBUG_LOG("Formula has {} variables and {} clauses", num_variables, num_clauses);

    return {num_variables, num_clauses};
}

std::size_t parse_clause(Formula& formula, BufferIterator& buffer_it, std::size_t clause_start, std::vector<bool>& seen_variables,
                         std::vector<std::size_t>& last_seen_clause, const std::size_t clause_id) {
    auto variable = INVALID_VARIABLE;
    auto is_negated = false;
    while (parse_number(buffer_it, variable.index, is_negated)) {
        VERIFY_LE(variable.index, formula.number_of_variables());
        VERIFY_LE(variable.index, 1U << 31);

        const auto literal = Literal{variable, is_negated};
        if (const auto literal_index = Formula::watched_literal_index(literal);
            last_seen_clause[literal_index] != clause_id) {
            last_seen_clause[literal_index] = clause_id;
            formula.literal(clause_start) = literal;
            ++clause_start;
        }

        if (!seen_variables[variable.index]) {
            seen_variables[variable.index] = true;
            formula.next_variable().push({.activity = 0, .variable = variable});
        }
    }

    return clause_start;
}

bool watched_clauses_contains_duplicates(const Formula& formula) {
    const auto& watched_lists = formula.watched_literal_clause_map();

    for (std::size_t i = 0; i < watched_lists.size(); ++i) {
        const auto& clauses = watched_lists[i];
        if (clauses.size() < 2) {
            continue;
        }

        auto sorted_clauses = clauses;
        std::ranges::sort(sorted_clauses);

        if (const auto it = std::ranges::adjacent_find(sorted_clauses);
            it != sorted_clauses.end()) {
            ERROR_LOG(
                "Duplicate ClauseIndex {} found for literal {}, clauses: {}",
                *it,
                Formula::literal_from_watch_list_index(i),
                sorted_clauses);
            return true;
        }
    }

    return false;
}

Formula parse_formula(std::istream& input_stream, const std::size_t size) {
    VERIFY_LE(size, std::numeric_limits<std::streamsize>::max());
    std::vector<char> buffer(size + 1);
    input_stream.read(buffer.data(), static_cast<std::streamsize>(size));
    auto buffer_it = std::span<const char>{buffer.data(), size}.begin();

    // Skip comments until we reach problem statement line
    for (; *buffer_it != 'p'; ++buffer_it) {
        for (; *buffer_it != '\n'; ++buffer_it) {}
    }

    // Parse header
    auto [num_variables, num_clauses] = parse_header(buffer_it);

    Formula formula{num_variables, num_clauses};
    std::vector<std::size_t> last_seen_clause(2 * num_variables, 0);
    std::vector seen_variables(num_variables + 1, false);

    // Parse formula
    std::size_t clause_end = 0;
    std::size_t num_literals = 0;
    // +1 on buffer_it to skip newline character
    for (std::size_t current_clause_index = 0; current_clause_index < num_clauses; ++current_clause_index, ++buffer_it) {
        const std::size_t clause_start = clause_end;
        clause_end = parse_clause(formula, buffer_it, clause_start, seen_variables, last_seen_clause, current_clause_index + 1);

        auto& literal_range = formula.literal_range(current_clause_index);
        literal_range = {.start = clause_start, .end = clause_end};
        formula.clause_activity().emplace(0, current_clause_index);

        VERIFY_GT(literal_range.size(), 0);

        num_literals += literal_range.size();

        // Collect unit clauses
        if (literal_range.size() == 1) {
            formula.unit_clauses().emplace_back(current_clause_index, literal_range.clause(formula.literals()).literals.front());
            formula.unit_clause(current_clause_index) = true;
            WatchedLiterals::add_clause_to_watch(formula, ClauseIndex{current_clause_index}, true);
        } else {
            WatchedLiterals::add_clause_to_watch(formula, ClauseIndex{current_clause_index}, false);
        }
    }

    formula.literals().resize(num_literals);

    // Sanity checks after parsing
    VERIFY_EQ(formula.clause_watched_literals_map().size(), formula.number_of_input_clauses());
    VERIFY_EQ(formula.watched_literal_clause_map().size(), (formula.number_of_variables() + 1) * 2);
    VERIFY_LE(formula.next_variable().size(), formula.number_of_variables());
    VERIFY(!watched_clauses_contains_duplicates(formula));

    return formula;
}
} // namespace impl

Formula parse_formula(const char* input_string) {
    std::istringstream input_string_stream{input_string};
    VERIFY(input_string_stream);
    return impl::parse_formula(input_string_stream, std::strlen(input_string));
}

Formula parse_formula(const std::string& input_string) {
    std::istringstream input_string_stream{input_string};
    VERIFY(input_string_stream);
    return impl::parse_formula(input_string_stream, input_string.size());
}

Formula parse_formula(const std::filesystem::path& input_file_path) {
    DEBUG_LOG("Parsing input file from path: {}", input_file_path.string());
    std::ifstream input_file_stream{input_file_path};
    VERIFY(input_file_stream);
    const auto file_size = std::filesystem::file_size(input_file_path);
    return impl::parse_formula(input_file_stream, file_size);
}
} // namespace DimacsParser