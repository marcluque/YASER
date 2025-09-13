#ifndef YASER_FORMULA_H
#define YASER_FORMULA_H

#include <vector>
#include <unordered_map>
#include <string>
#include <span>
#include <optional>
#include "literal.h"

#include <log.h>
#include <set>

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
using Clause                  = std::span<const Literal>;
using ClauseIndex             = std::size_t;
using PriorityClauseIndexPair = std::pair<int, ClauseIndex>;
using PriorityLiteralPair     = std::pair<int, Literal>;
using LiteralPair             = std::pair<Literal, Literal>;
using ClauseIndexLiteralPair  = std::pair<ClauseIndex, Literal>;
using DecisionLevel           = std::ptrdiff_t; // We need -1 to indicate "conflicting" decision level

struct LiteralRange {
    LiteralIndex start; // inclusive
    LiteralIndex end; // exclusive

    [[nodiscard]] std::size_t size() const {
        return end - start;
    }

    [[nodiscard]] Clause clause(const std::vector<Literal>& literals) const {
        return std::span{literals.begin() + start, literals.begin() + end};
    }
};

/**
 * \brief
 */
struct Assignment {
    DecisionLevel decision_level;
    std::optional<ClauseIndex> antecedent;
    Variable variable;
    Value value;
    bool negated_literal_visited;

    /**
     * \brief
     * \param decision_level
     * \param antecedent
     * \param variable
     * \param value
     * \param negated_literal_visited
     */
    Assignment(const DecisionLevel decision_level, const std::optional<ClauseIndex>& antecedent, const Variable variable,
               const Value value, const bool negated_literal_visited)
        : decision_level(decision_level), antecedent(antecedent), variable(variable), value(value),
          negated_literal_visited(negated_literal_visited) {
    }

    /**
     * \brief
     * \param lhs
     * \param rhs
     * \return
     */
    friend bool operator==(const Assignment& lhs, const Assignment& rhs) {
        return lhs.decision_level == rhs.decision_level && lhs.antecedent == rhs.antecedent
               && lhs.variable == rhs.variable && lhs.value == rhs.value
               && lhs.negated_literal_visited == rhs.negated_literal_visited;
    }

    /**
     * \brief
     * \param lhs
     * \param rhs
     * \return
     */
    friend bool operator!=(const Assignment& lhs, const Assignment& rhs) {
        return !operator==(lhs, rhs);
    }

    /**
     * \brief
     */
    explicit operator std::string() const {
        return fmt::format("x_{}={}@{} (antecedent=c_{})", variable,
                           static_cast<int>(literal::is_positive(variable)), decision_level,
                           antecedent.has_value() ? std::to_string(antecedent.value()) : "");
    }
};

/**
 * \brief
 */
struct ComparePriorityLiteralPair {
    using is_transparent = void;

    /**
     * \brief
     * \param a
     * \param b
     * \return
     */
    bool operator()(const PriorityLiteralPair& a, const PriorityLiteralPair& b) const {
        return std::tie(a.first, a.second) > std::tie(b.first, b.second);
    }
};

/**
 * \brief
 */
struct ComparePriorityClauseIndexPair {
    using is_transparent = void;

    /**
     * \brief
     * \param a
     * \param b
     * \return
     */
    bool operator()(const PriorityClauseIndexPair& a, const PriorityClauseIndexPair& b) const {
        return std::tie(a.first, a.second) > std::tie(b.first, b.second);
    }
};

class Formula {
    struct impl {
        static std::optional<ClauseIndex> delete_clause(Formula& f);
    };

  public:
    Formula(std::size_t num_variables, std::size_t num_clauses);

    /**
     *
     *
     * @param i
     * @return
     */
    [[nodiscard]] Literal& literal(std::size_t i) {
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
    [[nodiscard]] LiteralRange& literal_range(std::size_t i) {
#ifdef YASER_DEBUG
        return m_literal_ranges.at(i); // Allow range checks
#else
        return m_literal_ranges[i];
#endif
    }

    void learn_clause(Clause clause, Literal literal_to_imply);

    bool is_assignment_trail_valid();

    /**
     * No need to be efficient here, this should only be used for debugging and test purposes.
     *
     * @return
     */
    explicit operator std::string() const {
        std::string s;
        for (const auto& literal_range : m_literal_ranges) {
            s.append("(");
            for (const auto clause = literal_range.clause(m_literals); const auto& literal : clause) {
                s.append(fmt::format("{} ∨ ", literal::print_literal(literal)));
            }
            s.resize(s.length() - 5);
            s.append(") ∧ ");
        }

        s.resize(s.length() - 5);

        return s;
    }

    [[nodiscard]] std::size_t number_of_variables() const {
        return m_number_of_variables;
    }

    [[nodiscard]] std::size_t number_of_input_clauses() const {
        return m_number_of_input_clauses;
    }

    [[nodiscard]] std::vector<Assignment>& assignment_trail() {
        return m_assignment_trail;
    }

    [[nodiscard]] std::vector<Literal>& literals() {
        return m_literals;
    }

    [[nodiscard]] std::vector<ClauseIndexLiteralPair>& unit_clauses() {
        return m_unit_clauses;
    }

    [[nodiscard]] std::vector<bool>& unit_clause_map() {
        return m_unit_clause_map;
    }

    [[nodiscard]] std::unordered_map<ClauseIndex, LiteralPair>& clause_watched_literals_map() {
        return m_clause_watched_literals_map;
    }

    [[nodiscard]] std::vector<Value>& assignment_map() {
        return m_assignment_map;
    }

    [[nodiscard]] std::vector<std::size_t>& variable_assignment_index() {
        return m_variable_assignment_index;
    }

    [[nodiscard]] std::vector<DecisionLevel>& variable_decision_level() {
        return m_variable_decision_level;
    }

    [[nodiscard]] int& literal_priority(Literal literal) {
#ifdef YASER_DEBUG
        return m_literal_priority.at(literal::is_positive(literal)
                                         ? literal::variable(literal)
                                         : number_of_variables()
                                               + literal::variable(literal)); // Allow range checks
#else

        return m_literal_priority[literal::is_positive(literal)
                                      ? literal::variable(literal)
                                      : number_of_variables() + literal::variable(literal)];
#endif
    }

    [[nodiscard]] int& clause_priority(ClauseIndex clause_index) {
#ifdef YASER_DEBUG
        return m_clause_priority.at(clause_index); // Allow range checks
#else
        return m_clause_priority[clause_index];
#endif
    }

    [[nodiscard]] std::size_t& learned_clause_limit() {
        return m_learned_clause_limit;
    }

    [[nodiscard]] std::unordered_map<Literal, std::vector<ClauseIndex>>& watched_literal_clause_map() {
        return m_watched_literal_clause_map;
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

    [[nodiscard]] std::set<PriorityLiteralPair, ComparePriorityLiteralPair>& next_literal() {
        return m_next_literal;
    }

    [[nodiscard]] std::set<PriorityClauseIndexPair, ComparePriorityClauseIndexPair>& clause_activity() {
        return m_clause_activity;
    }

    [[nodiscard]] std::vector<unsigned>& locked_clause_map() {
        return m_locked_clause_map;
    }

    [[nodiscard]] std::vector<LiteralRange>& literal_ranges() {
        return m_literal_ranges;
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
    std::vector<Literal> m_literals;

    /**
     * \brief Stores `LiteralRange` into the ::m_literals vector.
     *
     * `LiteralRange` should never own a pointer into the ::m_literals vector.
     * It should always be constructed adhoc.
     */
    std::vector<LiteralRange> m_literal_ranges;

    /**
     * \brief
     */
    std::vector<Assignment> m_assignment_trail;

    /**
     * \brief
     */
    std::vector<Value> m_assignment_map;

    /**
     * \brief
     */
    std::vector<std::size_t> m_variable_assignment_index;

    /**
     * \brief
     */
    std::vector<DecisionLevel> m_variable_decision_level;

    /**
     * \brief
     *
     * The literal in the pair is the last unassigned literal of this clause.
     * We store it for convenient assignment
     */
    std::vector<ClauseIndexLiteralPair> m_unit_clauses;

    /**
     * \brief
     */
    std::vector<bool> m_unit_clause_map;

    /**
     * \brief
     */
    std::unordered_map<ClauseIndex, LiteralPair> m_clause_watched_literals_map;

    /**
     * \brief
     */
    std::unordered_map<Literal, std::vector<ClauseIndex>> m_watched_literal_clause_map;

    /**
     * \brief
     */
    std::vector<int> m_literal_priority;

    /**
     * \brief Simple lookup table for a clauses priority score
     */
    std::vector<int> m_clause_priority;

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
    std::set<PriorityLiteralPair, ComparePriorityLiteralPair> m_next_literal;

    /**
     * \brief Orders pairs for (ClausePriority, ClauseIndex) according to ClausePriority
     *
     * TODO: Currently, this contains problem input clauses, it doesn't necessarily have to do that,
     * it could improve performance to only track learnt clauses
     */
    std::set<PriorityClauseIndexPair, ComparePriorityClauseIndexPair> m_clause_activity;

    /**
     * \brief
     */
    std::vector<unsigned> m_locked_clause_map;
};

#endif // YASER_FORMULA_H
