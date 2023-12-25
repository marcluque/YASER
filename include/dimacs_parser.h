#ifndef YASER_DIMACS_PARSER_H
#define YASER_DIMACS_PARSER_H

#include <filesystem>
#include "formula.h"

namespace DimacsParser {

namespace impl {
/**
 * \brief
 * \param s
 * \param n
 * \return
 */
std::tuple<bool, unsigned> atoui(const char* s, std::size_t n);

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
} // namespace DimacsParser

#endif // YASER_DIMACS_PARSER_H
