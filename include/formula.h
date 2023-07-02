//
// Created by marcluque on 02.07.23.
//

#ifndef YASER_FORMULA_H
#define YASER_FORMULA_H

/**
 * Only use unsigned int for literals.
 * The problem here is that DIMACS uses negative numbers to represent negated variables, e.g., -3 is !x_3.
 * To circumvent this when parsing one could parse it as signed integer, check whether it is in range
 * [-2^31, 2^31 - 1], and use the LSB to indicate a variable's negation.
 * A literal's assignment could then be queried as follows: assignment_map[formula[i] & 0]
 */

/**
 * Formula CNF:    (-3 5 3) (-1 2 -4) (1 2)
 *                 |        |         |
 * Clause indices: 0=c1     1=c2      2=c3
 */

/**
 * - Store literals as vector(?)
 * - Access literals (e.g., [])
 * - Iterate over literals (with std::ranges?)
 *
 * - Store start indices (or iterators?) of clauses
 * - Iterate over clauses (with std::ranges?) -> should this be in the same class
 *
 * - store, access, and set literal assignments? e.g.: formula.value(i) // = assignment_map[formula[i] & 0]
 */
class Formula {
public:
private:

};

#endif // YASER_FORMULA_H
