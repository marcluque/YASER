add_subdirectory("${PROJECT_SOURCE_DIR}/extern/fmtlib/fmt" "extern/fmtlib/fmt")
include_directories(${PROJECT_SOURCE_DIR}/extern/fmtlib/fmt/include)

add_library(${CMAKE_PROJECT_NAME}lib)
target_sources(${CMAKE_PROJECT_NAME}lib PRIVATE formula.cpp watched_literals.cpp dimacs_parser.cpp conflict_resolution.cpp vsids.cpp dpll.cpp)
target_link_libraries(${CMAKE_PROJECT_NAME}lib PUBLIC fmt)

include_directories(${PROJECT_SOURCE_DIR}/include)
add_executable(${CMAKE_PROJECT_NAME} main.cpp)

target_link_libraries(${CMAKE_PROJECT_NAME} PRIVATE ${CMAKE_PROJECT_NAME}lib)

target_compile_definitions(${CMAKE_PROJECT_NAME}
        PUBLIC
        $<$<CONFIG:Debug>:YASER_DEBUG>)
