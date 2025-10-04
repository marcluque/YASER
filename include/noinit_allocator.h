#pragma once

#include <memory>

template <typename Allocator>
struct noinit_allocator : Allocator {
    noinit_allocator() noexcept = default;

    template <typename U>
    explicit noinit_allocator(const noinit_allocator<U>& other) noexcept
        : Allocator(static_cast<const U&>(other)) {}

    template <typename U>
    struct rebind {
        using other = noinit_allocator<typename std::allocator_traits<Allocator>::template rebind_alloc<U>>;
    };

    template <typename U>
    void construct(U* p) {
        ::new(static_cast<void*>(p)) U;
    }

    template<typename U>
    void destroy(U* p) {
        p->~U();
    }
};

template <typename T, typename U>
bool operator==(const noinit_allocator<T>& lhs, const noinit_allocator<U>& rhs) noexcept {
    return static_cast<const T&>(lhs) == static_cast<const U&>(rhs);
}

template <typename T, typename U>
bool operator!=(const noinit_allocator<T>& lhs, const noinit_allocator<U>& rhs) noexcept {
    return !(lhs == rhs);
}

