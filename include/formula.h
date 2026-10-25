#pragma once

#include <vector>
#include <unordered_map>
#include <string>
#include <span>
#include <optional>
#include <filesystem>
#include <fstream>
#include <set>
#include <format>

#include "literal.h"
#include "clause.h"
#include "max_heap.h"
#include "noinit_allocator.h"

/**
 * Only use unsigned int for literals.
 * The problem here is that DIMACS uses negative numbers to represent negated variables, e.g., -3 is !x_3.
 * To circumvent this when parsing one could parse it as signed integer, check whether it is in range
 * [-2^30, 2^30 - 1], and use the LSB to indicate a variable's negation.
 * A literal's assignment could then be queried as follows: assignment_map[formula[i] & 0]
 */

/**
 * CNF Formula:    [(-3 5 3) (-1 2 -4) (1 2)]
 *                 |         |         |
 * Clause indices: 0=c1      3=c2      6=c3  8
 */

// for (int i = clause[0]; i < clause[1]; ++i) {}

/**
 * - Store literals as vector
 * - Access literals
 * - Iterate over literals (with std::ranges?)
 *
 * - Store start indices (or iterators?) of clauses
 * - Iterate over clauses (with std::ranges?) -> should this be in the same class?
 *
 * - Add new clauses as part of clause learning
 *
 * - Store, access, and set literal assignments? e.g.: formula.value(i) // = assignment_map[formula[i] & 0]
 *
 * - Watched literals map: unordered_map<literal, vector<Clause>> (i.e., a literal points to the clauses its being
 * watched in)
 *
 * - Unit clause set: unordered_set<Clause>
 *
 * - SAT clause set: unordered_set<Clause>
 */
using LiteralIndex            = std::size_t;
using PriorityClauseIndexPair = std::pair<int, ClauseIndex>;
using ClauseIndexLiteralPair  = std::pair<ClauseIndex, Literal>;
using DecisionLevel           = std::ptrdiff_t; // We need -1 to indicate "conflicting" decision level
using LiteralsContainer       = std::vector<Literal, noinit_allocator<std::allocator<Literal>>>;
using AssignmentMapContainer  = std::vector<Value>;
using VariableAssignmentIndexContainer = std::vector<std::size_t, noinit_allocator<std::allocator<std::size_t>>>;
using VariableDecisionLevelContainer = std::vector<DecisionLevel, noinit_allocator<std::allocator<DecisionLevel>>>;
using UnitClausesContainer = std::vector<ClauseIndexLiteralPair>;
using UnitClauseMapContainer = std::vector<bool>;
using LiteralPair = std::pair<Literal, Literal>;
constexpr auto INVALID_LITERAL_PAIR = LiteralPair{INVALID_LITERAL, INVALID_LITERAL};
using ClauseWatchedLiteralsMapContainer = std::vector<LiteralPair, noinit_allocator<std::allocator<LiteralPair>>>;
using WatchList = std::vector<ClauseIndex>;
using WatchedLiteralClauseMapContainer = std::vector<WatchList>;
using ClausePriorityContainer = std::vector<int>;
using LockedClauseMapContainer = std::vector<unsigned>;

struct LiteralRange {
    LiteralIndex start; // inclusive
    LiteralIndex end; // exclusive

    [[nodiscard]] std::size_t size() const {
        return end - start;
    }

    [[nodiscard]] Clause clause(const LiteralsContainer& literals) const {
        return {std::span{literals.data() + start, literals.data() + end}};
    }
};

using LiteralRangeContainer = std::vector<LiteralRange, noinit_allocator<std::allocator<LiteralRange>>>;

struct Assignment {
    DecisionLevel decision_level;
    std::optional<ClauseIndex> antecedent;
    Variable variable;
    Value value;

    [[nodiscard]] Literal literal() const {
        return {variable, value};
    }
};

template <>
struct std::formatter<Assignment> : std::formatter<std::string> {
    static auto format(const Assignment& assignment, std::format_context& ctx) {
        return std::format_to(
            ctx.out(), "x_{}={}@{} (antecedent=c_{})",
            assignment.variable.index,
            std::to_underlying(assignment.value),
            assignment.decision_level,
            assignment.antecedent ? std::format("{}", *assignment.antecedent) : "");
    }
};

using AssignmentTrailContainer = std::vector<Assignment, noinit_allocator<std::allocator<Assignment>>>;

using NextVariableContainer = MaxHeap;

/**
 * \brief
 */
struct ComparePriorityClauseIndexPair {
    using is_transparent = void;

    bool operator()(const PriorityClauseIndexPair& a, const PriorityClauseIndexPair& b) const {
        return std::tie(a.first, a.second) > std::tie(b.first, b.second);
    }
};

using ClauseActivityContainer = std::set<PriorityClauseIndexPair, ComparePriorityClauseIndexPair>;

class Formula {
    struct impl {
        static std::optional<ClauseIndex> delete_clause(Formula& f);
    };

  public:
    Formula(std::size_t num_variables, std::size_t num_clauses);
    Formula(std::size_t num_variables, std::size_t num_clauses, const std::filesystem::path& certificate_path);

    /**
     *
     *
     * @param i
     * @return
     */
    [[nodiscard]] Literal& literal(const std::size_t i) {
#ifdef YASER_DEBUG
        return m_literals.at(i); // Allow range checks
#else
        return m_literals[i];
#endif
    }

    /**
     *
     *
     * @param i
     * @return
     */
    [[nodiscard]] LiteralRange& literal_range(const std::size_t i) {
#ifdef YASER_DEBUG
        return m_literal_ranges.at(i); // Allow range checks
#else
        return m_literal_ranges[i];
#endif
    }

    [[nodiscard]] LiteralRange& literal_range(const ClauseIndex clause_index) {
        #ifdef YASER_DEBUG
        return m_literal_ranges.at(clause_index.index); // Allow range checks
        #else
        return m_literal_ranges[clause_index.index];
        #endif
    }

    [[nodiscard]] Clause clause(const ClauseIndex clause_index) {
        // const auto clause = formula.literal_range(clause_index).clause(formula.literals());
        return literal_range(clause_index).clause(m_literals);
    }

    void learn_clause(LiteralRange literal_range);

    bool is_assignment_trail_valid();

    [[nodiscard]] std::size_t number_of_variables() const {
        return m_number_of_variables;
    }

    [[nodiscard]] std::size_t number_of_input_clauses() const {
        return m_number_of_input_clauses;
    }

    [[nodiscard]] AssignmentTrailContainer& assignment_trail() {
        return m_assignment_trail;
    }

    [[nodiscard]] const Assignment& trail_assignment(const std::size_t index) const {
        return m_assignment_trail[index];
    }

    [[nodiscard]] Assignment& trail_assignment(const std::size_t index) {
        return m_assignment_trail[index];
    }

    [[nodiscard]] LiteralsContainer& literals() {
        return m_literals;
    }

    [[nodiscard]] UnitClausesContainer& unit_clauses() {
        return m_unit_clauses;
    }

    [[nodiscard]] UnitClauseMapContainer& unit_clause_map() {
        return m_unit_clause_map;
    }

    [[nodiscard]] auto unit_clause(const std::size_t clause_index) {
        return m_unit_clause_map[clause_index];
    }

    [[nodiscard]] auto unit_clause(const ClauseIndex clause_index) {
        return m_unit_clause_map[clause_index.index];
    }

    [[nodiscard]] bool is_unit(const ClauseIndex clause_index) {
        return m_unit_clause_map[clause_index.index];
    }

    [[nodiscard]] ClauseWatchedLiteralsMapContainer& clause_watched_literals_map() {
        return m_clause_watched_literals_map;
    }

    [[nodiscard]] LiteralPair& watched_literals(const ClauseIndex clause_index) {
        return m_clause_watched_literals_map[clause_index.index];
    }

    [[nodiscard]] AssignmentMapContainer& assignment_map() {
        return m_assignment_map;
    }

    [[nodiscard]] const Value& assignment(const Variable variable) const {
        return m_assignment_map[variable.index];
    }

    [[nodiscard]] Value& assignment(const Variable variable) {
        return m_assignment_map[variable.index];
    }

    void unassign(const Variable variable) {
        m_assignment_map[variable.index] = Value::UNASSIGNED;
    }

    [[nodiscard]] const Value& assignment(const Literal literal) const {
        return m_assignment_map[literal.index()];
    }

    [[nodiscard]] Value& assignment(const Literal literal) {
        return m_assignment_map[literal.index()];
    }

    [[nodiscard]] VariableAssignmentIndexContainer& assignment_trail_index() {
        return m_assignment_trail_index;
    }

    [[nodiscard]] VariableDecisionLevelContainer& variable_decision_level() {
        return m_variable_decision_level;
    }

    void update_decision_level(const Literal literal, DecisionLevel decision_level) {
        m_variable_decision_level[literal.index()] = decision_level;
    }

    [[nodiscard]] int& clause_priority(const ClauseIndex clause_index) {
#ifdef YASER_DEBUG
        return m_clause_priority.at(clause_index.index); // Allow range checks
#else
        return m_clause_priority[clause_index.index];
#endif
    }

    [[nodiscard]] std::size_t& learned_clause_limit() {
        return m_learned_clause_limit;
    }

    [[nodiscard]] WatchedLiteralClauseMapContainer& watched_literal_clause_map() {
        return m_watched_literal_clause_map;
    }

    [[nodiscard]] const WatchedLiteralClauseMapContainer& watched_literal_clause_map() const {
        return m_watched_literal_clause_map;
    }

    /**
     *
     */
    [[nodiscard]] static constexpr std::size_t watched_literal_index(const Literal literal) noexcept {
        return 2 * (literal.index() - 1) + (literal.positive() ? 0 : 1);
    }

    [[nodiscard]] static constexpr Literal literal_from_watch_list_index(const std::size_t index) noexcept {
        return {
            Variable{index / 2 + 1},
            index % 2 == 0 ? Value::TRUE : Value::FALSE
        };
    }

    [[nodiscard]] WatchList& watched_clauses(const Literal literal) {
        return m_watched_literal_clause_map[watched_literal_index(literal)];
    }

    [[nodiscard]] DecisionLevel& decision_level() {
        return m_decision_level;
    }

    /**
     * \brief
     * It is possible to create a conflict during BCP.
     * Consider, for instance:
     * (a | !b) & (c | !d) & (b | d)
     * Further assume a = 0, c = 0. Our unit clauses imply b = 0, d = 0.
     * This leads to the last clause being conflicting, since all its assignments are 0.
     * \return
     */
    [[nodiscard]] std::optional<ClauseIndex>& conflicting_clause() {
        return m_conflicting_clause;
    }

    [[nodiscard]] NextVariableContainer& next_variable() {
        return m_next_variable;
    }

    [[nodiscard]] ClauseActivityContainer& clause_activity() {
        return m_clause_activity;
    }

    [[nodiscard]] LockedClauseMapContainer& locked_clause_map() {
        return m_locked_clause_map;
    }

    [[nodiscard]] unsigned& locked_clause(const ClauseIndex clause_index) {
        return m_locked_clause_map[clause_index.index];
    }

    [[nodiscard]] const unsigned& locked_clause(const ClauseIndex clause_index) const {
        return m_locked_clause_map[clause_index.index];
    }

    [[nodiscard]] LiteralRangeContainer& literal_ranges() {
        return m_literal_ranges;
    }

    [[nodiscard]] std::ofstream& certificate_output_stream() {
        return m_certificate_output_stream;
    }

    [[nodiscard]] double& variable_decay_factor() {
        return m_variable_decay_factor;
    }

    [[nodiscard]] double& variable_increment_factor() {
        return m_variable_increment_factor;
    }

    [[nodiscard]] std::size_t& number_of_conflicts() {
        return m_number_of_conflicts;
    }

    [[nodiscard]] std::size_t& number_of_decisions() {
        return m_number_of_decisions;
    }

    [[nodiscard]] std::size_t& number_of_propagations() {
        return m_number_of_propagations;
    }

    [[nodiscard]] std::size_t& number_of_deleted_clauses() {
        return m_number_of_deleted_clauses;
    }

    [[nodiscard]] double& parse_time() {
        return m_parse_time;
    }

    [[nodiscard]] double& cpu_time() {
        return m_cpu_time;
    }

    [[nodiscard]] std::vector<bool>& polarity() {
        return m_polarity;
    }

    [[nodiscard]] std::vector<bool>& variable_seen_in_conflict_analysis() {
        return m_variable_seen_in_conflict_analysis;
    }

  private:
    /**
     * \brief
     */
    std::size_t m_number_of_variables;

    std::size_t m_number_of_input_clauses;

    /**
     * \brief
     */
    std::optional<ClauseIndex> m_conflicting_clause;

    /**
     * \brief
     */
    DecisionLevel m_decision_level;

    /**
     * \brief We can have up to 2^31 variables.
     */
    LiteralsContainer m_literals;

    /**
     * \brief Stores `LiteralRange` into the ::m_literals vector.
     *
     * `LiteralRange` should never own a pointer into the ::m_literals vector.
     * It should always be constructed adhoc.
     */
     LiteralRangeContainer m_literal_ranges;

    /**
     * \brief
     */
    AssignmentTrailContainer m_assignment_trail;

    /**
     * \brief
     */
     AssignmentMapContainer m_assignment_map;

    /**
     * \brief
     */
    VariableAssignmentIndexContainer m_assignment_trail_index;

    /**
     * \brief
     */
    VariableDecisionLevelContainer m_variable_decision_level;

    /**
     * \brief
     *
     * The literal in the pair is the last unassigned literal of this clause.
     * We store it for convenient assignment
     */
    UnitClausesContainer m_unit_clauses;

    /**
     * \brief
     */
    UnitClauseMapContainer m_unit_clause_map;

    /**
     * \brief
     */
    ClauseWatchedLiteralsMapContainer m_clause_watched_literals_map;

    /**
     * \brief
     */
    WatchedLiteralClauseMapContainer m_watched_literal_clause_map;

    /**
     * \brief Simple lookup table for a clauses priority score
     *
     * TODO: Use this when removing clauses
     */
    ClausePriorityContainer m_clause_priority;

    /**
     * \brief Provides a limit for the number of learned clauses. Once the limit is reached,
     * clauses with the lowest priority have to be pruned.
     *
     * The limit is increased with each restart of the solver.
     */
    std::size_t m_learned_clause_limit;

    /**
     * \brief
     */
    NextVariableContainer m_next_variable;

    /**
     * \brief Orders pairs for (ClausePriority, ClauseIndex) according to ClausePriority
     *
     * TODO: Currently, this contains problem input clauses, it doesn't necessarily have to do that,
     * it could improve performance to only track learnt clauses
     */
    ClauseActivityContainer m_clause_activity;

    /**
     * \brief
     */
    LockedClauseMapContainer m_locked_clause_map;

    std::ofstream m_certificate_output_stream;

    double m_variable_decay_factor;

    double m_variable_increment_factor;

    std::size_t m_number_of_conflicts{0};

    std::size_t m_number_of_decisions{0};

    std::size_t m_number_of_propagations{0};

    std::size_t m_number_of_deleted_clauses{0};

    double m_parse_time{0};

    double m_cpu_time{0};

    /**
     * true <=> literal is negated
     */
    std::vector<bool> m_polarity;

    /**
     * true <=> variable has appeared during an instance of a conflict analysis
     */
    std::vector<bool> m_variable_seen_in_conflict_analysis;
};

template <>
struct std::formatter<Formula> {
    static constexpr auto parse(const std::format_parse_context& ctx) {
        return ctx.begin();
    }

    static auto format(Formula& formula, std::format_context& ctx) {
        auto out = ctx.out();
        bool first_clause = true;

        for (const auto& literal_range : formula.literal_ranges()) {
            if (!first_clause) {
                out = std::format_to(out, " ∧ ");
            }

            out = std::format_to(out, "(");
            const auto clause = literal_range.clause(formula.literals());
            bool first_literal = true;

            for (const auto& literal : clause) {
                if (!first_literal) {
                    out = std::format_to(out, " ∨ ");
                }

                out = std::format_to(out, "{}", literal);
                first_literal = false;
            }

            out = std::format_to(out, ")");
            first_clause = false;
        }

        return out;
    }
};
