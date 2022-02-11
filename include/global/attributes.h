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
 * Tell the compiler that the function is not returning. This saves some bytes on the stack.
 */
#define ATTR_NORETURN _Noreturn

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

/**
 *
 */
#define ATTR_HIDDEN __attribute__((__visibility__("hidden")))

/**
 *
 */
#define ATTR_FORMAT __attribute__((__format__(printf, 2, 3)))

#endif // YASER_ATTRIBUTES_H
