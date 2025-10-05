#include <cstdlib>
#include "fmt/format.h"
#include "log.h"
#include "formula.h"
#include "dimacs_parser.h"
#include "dpll.h"

std::string format_time_ns(double nanoseconds) {
    if (nanoseconds < 1'000.0) {
        return fmt::format("{:.3f} ns", nanoseconds);
    }
    if (nanoseconds < 1'000'000.0) {
        return fmt::format("{:.3f} µs", nanoseconds / 1'000.0);
    }
    if (nanoseconds < 1'000'000'000.0) {
        return fmt::format("{:.3f} ms", nanoseconds / 1'000'000.0);
    }

    return fmt::format("{:.3f} s", nanoseconds / 1'000'000'000.0);
}

void print_solver_stats(Formula& formula) {
    fmt::print("\n============================[ Solver Statistics ]============================\n");
    fmt::print("| {:<27} {:>12}                                    |\n", "Variables:", formula.number_of_variables());
    fmt::print("| {:<27} {:>12}                                    |\n", "Clauses:", formula.number_of_input_clauses());
    fmt::print("| {:<27} {:>12}                                    |\n", "Conflicts:", formula.number_of_conflicts());
    fmt::print("| {:<27} {:>12}                                    |\n", "Decisions:", formula.number_of_decisions());
    fmt::print("| {:<27} {:>12}                                    |\n", "Propagations:", formula.number_of_propagations());
    fmt::print("| {:<27} {:>12}                                    |\n", "Deleted Clauses:", formula.number_of_deleted_clauses());
    fmt::print("| {:<27} {:>12}                                    |\n", "Parse time:", format_time_ns(formula.parse_time()));
    fmt::print("| {:<27} {:>12}                                    |\n", "CPU time:", format_time_ns(formula.cpu_time()));
    fmt::print("=============================================================================\n\n");
}

void print_assignment_trail(Formula& formula) {
#ifdef YASER_DEBUG
    // Format the assignment trail for printing (remove trailing ", ")
    std::string assignment_trail;
    for (const auto& assignment : formula.assignment_trail()) {
        auto value = static_cast<int>(literal::is_positive(assignment.variable));
        assignment_trail += fmt::format("x_{}={}@{}, ", assignment.variable, value, assignment.decision_level);
    }
    assignment_trail.pop_back();
    assignment_trail.pop_back();

    INFO_LOG("Assignment trail: {}", assignment_trail);
#endif
}

int main([[maybe_unused]] int _argc, char** argv) {
    DEBUG_LOG("Input file {}", argv[1]);
    //parse_time
    const auto start_parse_time = std::chrono::high_resolution_clock::now();
    Formula formula = DimacsParser::parse_formula(std::filesystem::path(argv[1]));
    const auto end_parse_time = std::chrono::high_resolution_clock::now();
    // TODO: Use narrow from gsl
    formula.parse_time() = static_cast<double>(std::chrono::duration_cast<std::chrono::nanoseconds>(end_parse_time - start_parse_time).count());

    DEBUG_LOG("Parsed formula {}", static_cast<std::string>(formula));

    const auto start_run_time = std::chrono::high_resolution_clock::now();
    const auto result = DPLL::run(formula);
    const auto end_run_time = std::chrono::high_resolution_clock::now();
    // TODO: Use narrow from gsl
    formula.cpu_time() = static_cast<double>(std::chrono::duration_cast<std::chrono::nanoseconds>(end_run_time - start_run_time).count());

    print_assignment_trail(formula);

    print_solver_stats(formula);

    fmt::println("s {}", result ? "SATISFIABLE" : "UNSATISFIABLE");

#ifdef YASER_DEBUG
    if (result && !formula.is_assignment_trail_valid()) {
        return EXIT_FAILURE;
    }
#endif

    return EXIT_SUCCESS;
}
