#include <iostream>
#include <fstream>
#include "dimacs_parser.h"

namespace DimacsParser {
  Formula parse_formula(const std::filesystem::path& input_file_path) {
    std::ifstream input_file_stream{input_file_path};
#ifdef YASER_DEBUG
    if (!input_file_stream) {
      std::cerr << "Error opening for reading" << std::endl;
      std::exit(EXIT_FAILURE); // exit program with failure
    }
#endif

    std::string s;
    while(getline(input_file_stream, s)) // Discards newline char
      std::cout << s << "\n";

    return {1, 1};
  }
}