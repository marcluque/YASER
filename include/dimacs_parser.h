#ifndef YASER_DIMACS_PARSER_H
#define YASER_DIMACS_PARSER_H

#include <filesystem>
#include "formula.h"

namespace DimacsParser {

namespace impl {
/**
 *
 *
 * @param buffer_ptr
 * @return
 */
std::tuple<std::size_t, std::size_t> parse_header(const char*& buffer_ptr);

/**
 * \brief
 * \param formula
 * \param buffer_ptr
 * \param clause_start
 * \return
 */
std::size_t parse_clause(Formula& formula, const char*& buffer_ptr, std::size_t clause_start);

bool watched_clauses_contains_duplicates(Formula& formula);
} // namespace impl

/**
 * \brief
 * \param input_file_path
 * \return
 */
Formula parse_formula(const std::filesystem::path& input_file_path);

/**
 * \brief
 * \param input_string
 * \return
 */
Formula parse_formula(const std::string& input_string);

/**
 * \brief
 * \param input_string
 * \return
 */
Formula parse_formula(const char* input_string);
} // namespace DimacsParser

#endif // YASER_DIMACS_PARSER_H
