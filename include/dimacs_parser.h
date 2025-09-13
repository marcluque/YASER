#pragma once

#include <filesystem>
#include "formula.h"

namespace DimacsParser {

namespace impl {

using BufferIterator = std::span<const char>::iterator;

/**
 * \brief Parses the "p cnf <num_vars> <num_clauses>" header line of a DIMACS CNF formula.
 *
 * Reads the number of variables and clauses from the "p cnf" line.
 *
 * After parsing, `buffer_it` points to the first character **after the number of clauses**.
 *
 * \param buffer_it Iterator pointing to the start of the header line in the buffer.
 * \return A tuple containing {number_of_variables, number_of_clauses}.
 */
std::tuple<std::size_t, std::size_t> parse_header(BufferIterator& buffer_it);

/**
 * \brief Parses a single CNF clause from the input buffer.
 *
 * Reads literals from the buffer starting at the current iterator position
 * and writes them into the given formula starting at `clause_start`. Each
 * literal is converted to the internal representation and added to the
 * watched literal structures.
 *
 * After parsing, `buffer_it` points to the first character **after the terminating zero
 * of the clause or the first non-literal character after the clause**.
 *
 * \param formula Reference to the formula being constructed.
 * \param buffer_it Iterator pointing to the current position in the buffer.
 * \param clause_start Index in the formula where the first literal of this clause should be written.
 * \return Index immediately after the last literal of the parsed clause.
 */
std::size_t parse_clause(Formula& formula, BufferIterator& buffer_it, std::size_t clause_start);

/**
 * \brief Checks for duplicate clause indices in the watched literal map.
 *
 * Iterates over the watched literal-to-clause mapping and returns true if
 * any clause index appears more than once for a given literal.
 *
 * This is used as a sanity check in debug mode.
 *
 * \param formula The formula whose watched literal mapping is checked.
 * \return True iff duplicates are found.
 */
bool watched_clauses_contains_duplicates(Formula& formula);

} // namespace impl

/**
 * \brief Parses a DIMACS CNF formula from a file.
 *
 * Reads the entire file into memory and constructs a Formula object
 * representing the CNF formula. The string should contain a valid DIMACS CNF encoding.
 * Performs several sanity checks to ensure correctness.
 *
 * Sanity checks performed:
 * 1. Ensures the file size does not exceed `std::numeric_limits<std::streamsize>::max()`.
 * 2. Verifies that each clause has at least one literal.
 * 3. Checks that the watched literal map contains no duplicate clause indices.
 * 4. Ensures the size of the watched literal map does not exceed twice the number of variables.
 *
 * \param input_file_path Path to the input DIMACS CNF file.
 * \return Constructed Formula object containing variables, clauses, and watched literals.
 */
Formula parse_formula(const std::filesystem::path& input_file_path);

/**
 * \brief Parses a DIMACS CNF formula from a string.
 *
 * Reads the string representation of a DIMACS CNF formula and constructs
 * a Formula object. The string should contain a valid DIMACS CNF encoding.
 *
 * \param input_string String containing the DIMACS CNF formula.
 * \return Constructed Formula object.
 */
Formula parse_formula(const std::string& input_string);

/**
 * \brief Parses a DIMACS CNF formula from a C-style string.
 *
 * Reads the **null-terminated** C string containing a DIMACS CNF formula
 * and constructs a Formula object. The string should contain a valid DIMACS CNF encoding.
 *
 * \param input_string C-style string with the DIMACS CNF formula.
 * \return Constructed Formula object.
 */
Formula parse_formula(const char* input_string);

} // namespace DimacsParser
