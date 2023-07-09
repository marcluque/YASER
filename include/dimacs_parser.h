#ifndef YASER_DIMACS_PARSER_H
#define YASER_DIMACS_PARSER_H

#include <filesystem>
#include "formula.h"

namespace DimacsParser {
  Formula parse_formula(const std::filesystem::path& input_file_path);
}

#endif // YASER_DIMACS_PARSER_H
