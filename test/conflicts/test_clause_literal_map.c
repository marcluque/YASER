//
// Created with <3 by marcluque, January 2022
//

#include "watched-literals/clause_literal_map.h"
#include "../external/Unity/src/unity.h"

void setUp (void) {}
void tearDown (void) {
    clause_literal_map_clear();
}

static void test_clause_literal_map_add(void) {
    clause_index index_1 = 100;
    clause_literal_map_add(index_1, (const formula_pos[]){323, 1});
    formula_pos literal_partner = clause_literal_map_find(index_1, 1);
    TEST_ASSERT_EQUAL_UINT64(literal_partner, 323);
    literal_partner = clause_literal_map_find(index_1, 323);
    TEST_ASSERT_EQUAL_UINT64(literal_partner, 1);

    clause_index index_2 = 2;
    clause_literal_map_add(index_2, (const formula_pos[]){666, 2368723});
    literal_partner = clause_literal_map_find(index_2, 666);
    TEST_ASSERT_EQUAL_UINT64(literal_partner, 2368723);
    literal_partner = clause_literal_map_find(index_2, 2368723);
    TEST_ASSERT_EQUAL_UINT64(literal_partner, 666);
}

int main(void) {
    UNITY_BEGIN();
    //RUN_TEST(test_clause_literal_map_add);
    return UNITY_END();
}

