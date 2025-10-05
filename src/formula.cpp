#include <unordered_set>
#include <algorithm>
#include <ranges>
#include "formula.h"

#include "clause.h"
#include "log.h"
#include "verify.h"
#include "watched_literals.h"

#ifdef YASER_DEBUG
#include "clause.h"
#endif

Formula::Formula(const std::size_t num_variables, const std::size_t num_clauses)
 : Formula(num_variables, num_clauses, std::filesystem::temp_directory_path() / "yaser.tmp") {
}

Formula::Formula(const std::size_t num_variables, const std::size_t num_clauses, const std::filesystem::path& certificate_path)
    : m_number_of_variables(num_variables), m_number_of_input_clauses(num_clauses), m_conflicting_clause(std::nullopt),
      m_decision_level(0), m_literals(std::min(num_variables * num_clauses, 1'500'000'000UL)), m_literal_ranges(num_clauses), m_assignment_map(num_variables + 1),
      m_variable_assignment_index(num_variables + 1), m_variable_decision_level(num_variables + 1),
      m_unit_clause_map(num_clauses), m_clause_priority(num_clauses),
      m_learned_clause_limit(num_clauses * 100), m_next_variable(num_variables + 1),
      m_locked_clause_map(num_clauses), m_certificate_output_stream(certificate_path, std::ios::app), m_variable_decay_factor(0.95),
      m_variable_increment_factor(1), m_polarity(num_variables + 1) {
    DEBUG_LOG("Using certificate path {}", certificate_path.string());
    DEBUG_LOG("Number of allowed learned clauses: {}", m_learned_clause_limit);
}

std::optional<ClauseIndex> Formula::impl::delete_clause(Formula& f) {
    // TODO: Remove all learnt, unlocked clauses
    // Find least active (lowest priority) clause that is a learnt clause and is not locked
    const auto clause_activity_it = std::find_if(
        f.m_clause_activity.rbegin(),
        f.m_clause_activity.rend(),
        [&](const auto& pair) {
            const ClauseIndex clause_index = pair.second;
            return clause_index >= f.m_number_of_input_clauses && f.m_locked_clause_map[clause_index] == 0;
        }
    );

    if (clause_activity_it == f.m_clause_activity.rend()) {
        WARNING_LOG("No removable clause found — all clauses are locked");
        return std::nullopt;
    }

    // Convert reverse_iterator to normal iterator for erase
    const auto forward_it = std::next(clause_activity_it).base();
    ClauseIndex least_active_clause_index = forward_it->second;

#ifdef YASER_CERTIFICATE
    const auto clause_dimacs_format = clause::print_clause_dimacs(f.literal_range(least_active_clause_index).clause(f.literals()));
    f.m_certificate_output_stream << "d " << clause_dimacs_format << std::endl;
#endif

    // 1. Stop tracking activity
    f.m_clause_activity.erase(forward_it);

    // NOTE: the following operations would change the formula contains in a way that affects indexing,
    // there's no harm in not erasing them other than thrashing/wasting memory. A good approach might be
    // reusing the spots for learning clauses
    //f.m_literals.erase(least_active_clause.begin(), least_active_clause.end());
    //f.m_clauses.erase(f.m_clauses.begin() + least_active_clause_index);
    //f.m_unit_clause_map.erase(f.m_unit_clause_map.begin() + least_active_clause_index);
    //f.m_clause_priority.erase(f.m_clause_priority.begin() + least_active_clause_index);

    // 1. Remove mapping of clause -> Pair(WatchedLiteral1, WatchedLiteral2)
    const auto watched_literal_it = f.m_clause_watched_literals_map.find(least_active_clause_index);
    VERIFY(watched_literal_it, std::not_equal_to<>{}, f.m_clause_watched_literals_map.end());
    const auto first_watched_literal = watched_literal_it->second.first;
    const auto second_watched_literal = watched_literal_it->second.second;
    f.m_clause_watched_literals_map.erase(watched_literal_it);

    // 2. Remove mapping of WatchedLiteral1 -> clause
    const auto first_watched_literal_watched_clauses_it = f.m_watched_literal_clause_map.find(first_watched_literal);
    auto first_watched_literal_watched_clause_it = std::ranges::remove(first_watched_literal_watched_clauses_it->second, least_active_clause_index);
    first_watched_literal_watched_clauses_it->second.erase(first_watched_literal_watched_clause_it.begin(), first_watched_literal_watched_clause_it.end());

    // 3. Remove mapping of WatchedLiteral2 -> clause
    const auto second_watched_literal_clauses_it = f.m_watched_literal_clause_map.find(second_watched_literal);
    auto second_watched_literal_watched_clause_it = std::ranges::remove(second_watched_literal_clauses_it->second, least_active_clause_index);
    second_watched_literal_clauses_it->second.erase(second_watched_literal_watched_clause_it.begin(), second_watched_literal_watched_clause_it.end());

    // We don't need to wipe this clause from the set of unit clauses because we just resolved a conflict,
    // also the set of unit clauses should be empty now (see assert that len(unit_clauses) == 0)

    return least_active_clause_index;
}

void Formula::learn_clause(Clause clause, Literal literal_to_imply) {
    VERIFY(m_unit_clauses.size(), std::equal_to<>{}, 0);

    // Check if we will be over the limit of allowed learned clauses,
    // if so, we drop the clause with the least activity/priority (that is not locked)
    if (m_literal_ranges.size() >= m_learned_clause_limit) {
        DEBUG_LOG("Current number of learnt clauses {} exceeds learnt clauses limit {}", m_literal_ranges.size(), m_learned_clause_limit);
        if (const auto least_active_clause_index = impl::delete_clause(*this);
            least_active_clause_index.has_value()) {
            DEBUG_LOG("Deleted clause c_{}: ({})", least_active_clause_index.value(), clause::print_clause(m_literal_ranges[least_active_clause_index.value()].clause(m_literals)));
        }
    }

#ifdef YASER_CERTIFICATE
    const auto clause_dimacs_format = clause::print_clause_dimacs(clause);
    m_certificate_output_stream << clause_dimacs_format << std::endl;
#endif

    // Might be a no-op if we have enough space in `m_literals`.
    m_literals.reserve(m_literals.size() + clause.size());
    const auto it = m_literals.insert(m_literals.end(), clause.begin(), clause.end());

    const auto new_literal_range_start = std::distance(m_literals.begin(), it);
    auto new_literal_range = LiteralRange{static_cast<std::size_t>(new_literal_range_start), new_literal_range_start + clause.size()};
    m_literal_ranges.emplace_back(new_literal_range);

    auto clause_index = m_literal_ranges.size() - 1;

    // We know clauses learnt after conflicts will be unit after backtracking by definition
    // Hence, we can simply add them already
    m_unit_clauses.emplace_back(clause_index, literal_to_imply);
    m_unit_clause_map.push_back(true);

    // Starting watching clause
    WatchedLiterals::add_learnt_conflict_clause_to_watch(*this, clause_index, literal_to_imply);

    // Start with priority 1
    m_clause_priority.push_back(1);
    m_clause_activity.emplace(clause_priority(clause_index), clause_index);

    // We keep it as false for now: this clause is asserting so it will be used as reason for a propagation
    // and automatically be locked
    m_locked_clause_map.push_back(false);

    VERIFY(m_unit_clause_map.size(), std::equal_to<>{}, m_literal_ranges.size());
    VERIFY(m_clause_priority.size(), std::equal_to<>{}, m_literal_ranges.size());
    DEBUG_LOG("Learnt clause c_{}: ({}) @ DL {}", clause_index, clause::print_clause(clause), m_decision_level);
}

bool Formula::is_assignment_trail_valid() {
    std::unordered_set<Variable> variables;

    // Check if any variable appears more than once in the assignment trail
    const auto duplicate_exists = std::ranges::any_of(m_assignment_trail, [&](const Assignment& assignment) {
        if (variables.contains(assignment.variable)) {
            DEBUG_LOG("Duplicate variable in assignment trail: {}", assignment.variable);
            return true;
        }
        variables.insert(assignment.variable);
        return false;
    });

    if (duplicate_exists) {
        ERROR_LOG("Found duplicate variable in assignment trail");
        return false;
    }

    if (m_assignment_trail.size() != m_number_of_variables) {
        ERROR_LOG("Assignment trail size ({}) does not match number of variables ({})", m_assignment_trail.size(), m_number_of_variables);
        return false;
    }

    auto anyVariableInClauseSatisfied = [&](const Clause& clause) {
        return std::ranges::any_of(clause, [&](const Literal lit) {
            const Variable var = literal::variable(lit);
            const Value val    = m_assignment_map[var];
            const bool is_positive = literal::is_positive(lit);
            return (val == Value::TRUE && is_positive) || (val == Value::FALSE && !is_positive);
        });
    };

    auto clauses = m_literal_ranges | std::ranges::views::transform([&](const LiteralRange& r) {
        return r.clause(m_literals);
    });

    // Check that every clause is satisfied
    if (const bool all_clauses_satisfied = std::ranges::all_of(clauses, anyVariableInClauseSatisfied);
        !all_clauses_satisfied) {
        ERROR_LOG("One or more clauses are not satisfied by assignment trail");
        return false;
    }

    DEBUG_LOG("Assignment trail is valid");
    return true;
}
