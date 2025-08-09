#include "vsids.h"
#include "formula.h"
#include "verify.h"

namespace VSIDS {

void update_variable_priorities(Formula& formula, const Clause literals_to_update) {
    // TODO: Periodically divide by factor

    for (const auto& literal : literals_to_update) {
        auto priority                        = formula.literal_priority(literal);
        const auto number_of_elements_erased = formula.next_literal().erase({priority, literal});
        ++formula.literal_priority(literal);
        VERIFY(number_of_elements_erased, std::equal_to<>{}, static_cast<size_t>(1));
        formula.next_literal().emplace(formula.literal_priority(literal), literal);
    }
}

void update_clause_priority(Formula& formula, ClauseIndex clause_index) {
    // TODO: Periodically divide by factor

    auto priority = formula.clause_priority(clause_index);
    auto it = formula.clause_activity().find({priority, clause_index});
    VERIFY(it, std::not_equal_to<>{}, formula.clause_activity().end());

    formula.clause_activity().erase(it);

    ++formula.clause_priority(clause_index);
    // Emplace with hint (= iterator where element was erased)
    formula.clause_activity().emplace(formula.clause_priority(clause_index), clause_index);
}

} // namespace VSIDS
