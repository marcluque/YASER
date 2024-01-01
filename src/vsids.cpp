#include "../include/vsids.h"

#include <formula.h>
#include <verify.h>

namespace VSIDS {

static constexpr int INCREMENT = 1;

void update_variable_priorities(Formula& formula, const Clause literals_to_update) {
    // TODO: Periodically divide by factor

    for (const auto& literal : literals_to_update) {
        //const auto it = formula.next_literal().find({0, literal});
        //VERIFY(it, std::not_equal_to<>{}, formula.next_literal().end());
        //auto [priority, _] = *it;
        //formula.next_literal().erase(it);
        //formula.next_literal().emplace(literal, priority + INCREMENT);
    }
}

} // namespace VSIDS
