/** @file */

//
// Created with <3 by marcluque, January 2022
//

#ifndef YASER_ATTRIBUTES_H
#define YASER_ATTRIBUTES_H

/**
 * Allows checking with `-Wnonnull` whether a function parameter of type pointer is receiving `NULL` as a
 * parameter.
 */
#define ATTR_NON_NULL __attribute__((nonnull))

/**
 * Tell the compiler that the function is constant.
 * Declaring such functions with the const attribute allows GCC to avoid emitting some calls in repeated
 * invocations of the function with the same argument values.
 */
#define ATTR_CONST __attribute__((const))

/**
 * The pure attribute prohibits a function from modifying the state of the program that is observable by means
 * other than inspecting the function’s return value.
 */
#define ATTR_PURE __attribute__((pure))

#endif // YASER_ATTRIBUTES_H
