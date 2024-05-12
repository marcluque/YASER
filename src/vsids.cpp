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

} // namespace VSIDS
