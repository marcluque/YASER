#pragma once

#include <vector>
#include "literal.h"
#include "verify.h"

class MaxHeap {
    using IndexType = std::ptrdiff_t;
    static constexpr IndexType INDEX_NOT_PRESENT = -1;
    std::vector<VariableActivityPair> m_max_heap;
    std::vector<IndexType> m_variable_to_index;

    static constexpr IndexType LEFT(const IndexType i) { return 2 * i + 1; }
    static constexpr IndexType RIGHT(const IndexType i) { return 2 * i + 2; }
    static constexpr IndexType PARENT(const IndexType i) { return (i - 1) / 2; }

    void sift_up(IndexType idx) {
        const auto node = m_max_heap[idx];
        auto parent = PARENT(idx);
        while (idx > 0 && m_max_heap[parent] < node) {
            m_max_heap[idx] = m_max_heap[parent];
            m_variable_to_index[m_max_heap[idx].variable] = idx;
            idx = parent;
            parent = PARENT(idx);
        }
        m_max_heap[idx] = node;
        m_variable_to_index[node.variable] = idx;
    }

    void sift_down(IndexType idx) {
        const auto n = m_max_heap.size();
        const auto node = m_max_heap[idx];

        while (LEFT(idx) < n) {
            const auto left  = LEFT(idx);
            const auto right = RIGHT(idx);
            const auto child = right < n &&  m_max_heap[right] > m_max_heap[left] ? right : left;

            if (!(m_max_heap[child] > node)) {
                break;
            }

            m_max_heap[idx] = m_max_heap[child];
            m_variable_to_index[m_max_heap[idx].variable] = idx;
            idx = child;
        }

        m_max_heap[idx] = node;
        m_variable_to_index[node.variable] = idx;
    }

public:
    explicit MaxHeap(const std::size_t number_of_variables) : m_variable_to_index(number_of_variables, INDEX_NOT_PRESENT) {
        m_max_heap.reserve(number_of_variables);
    }

    [[nodiscard]] bool empty() const { return m_max_heap.empty(); }
    [[nodiscard]] std::size_t size() const { return m_max_heap.size(); }

    [[nodiscard]] const VariableActivityPair& top() const {
        VERIFY(m_max_heap.empty(), std::equal_to{}, false);
        return m_max_heap.front();
    }

    VariableActivityPair& get(const Variable variable) {
        VERIFY(contains(variable), std::equal_to{}, true);
        return m_max_heap[m_variable_to_index[variable]];
    }

    void push(const VariableActivityPair& e) {
        VERIFY(m_variable_to_index[e.variable], std::equal_to{}, INDEX_NOT_PRESENT);

        // TODO: use narrow from gsl
        m_variable_to_index[e.variable] = static_cast<IndexType>(m_max_heap.size());
        m_max_heap.push_back(e);
        sift_up(m_variable_to_index[e.variable]);
    }

    VariableActivityPair removeMax() {
        const auto node = m_max_heap[0];
        m_max_heap[0] = m_max_heap.back();
        m_variable_to_index[m_max_heap[0].variable] = 0;
        m_variable_to_index[node.variable] = INDEX_NOT_PRESENT;
        m_max_heap.pop_back();

        if (m_max_heap.size() > 1) {
            sift_down(0);
        }

        return node;
    }

    [[nodiscard]] bool contains(const Variable variable) const {
        return m_variable_to_index[variable] != INDEX_NOT_PRESENT;
    }

    void decrease(const Variable variable) {
        VERIFY(contains(variable), std::equal_to{}, true);
        sift_up(m_variable_to_index[variable]);
    }
};
