#include <cstdlib>
#include "log.h"
#include "formula.h"
#include "dimacs_parser.h"
#include "dpll.h"

int main([[maybe_unused]] int _argc, char** argv) {
    DEBUG_LOG("Input file {}", argv[1]);
    Formula formula = DimacsParser::parse_formula(std::filesystem::path(argv[1]));

    DEBUG_LOG("Parsed formula {}", static_cast<std::string>(formula));

    INFO_LOG("Parsed input file, took {} ms", 1);

    auto result = DPLL::run(formula);

    INFO_LOG("RESULT: {}", result);

    // Format the assignment trail for printing (remove trailing ", ")
    std::string assignment_trail;
    for (const auto& assignment : formula.assignment_trail()) {
        auto value = static_cast<int>(literal::is_positive(assignment.variable));
        assignment_trail += fmt::format("x_{}={}@{}, ", assignment.variable, value, assignment.decision_level);
    }
    assignment_trail.pop_back();
    assignment_trail.pop_back();

#ifdef YASER_DEBUG
    if (!formula.is_assignment_trail_valid()) {
        return EXIT_FAILURE;
    }
#endif

    INFO_LOG("Assignment trail: {}", assignment_trail);

    return EXIT_SUCCESS;
}
