#include "vsids.h"
#include "formula.h"
#include "verify.h"

#include <algorithm>

namespace VSIDS {

void update_variable_priorities(Formula& formula, const Clause literals_to_update) {
    for (const auto& literal : literals_to_update.literals) {
        update_variable_priority(formula, literal.variable());
    }
}

void update_variable_priority(Formula& formula, const Variable variable) {
    if (formula.next_variable().contains(variable)) {
        auto& [priority, _] = formula.next_variable().get(variable);
        priority += formula.variable_increment_factor();

        // Rescale
        if (priority > 1e100) {
            for (auto i = 1; i <= formula.number_of_variables(); i++) {
                if (const auto current_variable = Variable{i};
                    formula.next_variable().contains(current_variable)) {
                    formula.next_variable().get(current_variable).activity *= 1e-100;
                }
            }

            formula.variable_increment_factor() *= 1e-100;
        }

        formula.next_variable().decrease(variable);
    }
}

void update_clause_priority(Formula& formula, ClauseIndex clause_index) {
    // TODO: Periodically divide by factor

    auto priority = formula.clause_priority(clause_index);
    const auto it = formula.clause_activity().find({priority, clause_index});
    VERIFY_NE(it, formula.clause_activity().end());

    formula.clause_activity().erase(it);

    ++formula.clause_priority(clause_index);
    // Emplace with hint (= iterator where element was erased)
    formula.clause_activity().emplace(formula.clause_priority(clause_index), clause_index);
}

} // namespace VSIDS
