add_subdirectory("${PROJECT_SOURCE_DIR}/extern/fmtlib/fmt" "extern/fmtlib/fmt")
include_directories(${PROJECT_SOURCE_DIR}/extern/fmtlib/fmt/include)

include_directories(${PROJECT_SOURCE_DIR}/include)
add_executable(${CMAKE_PROJECT_NAME} main.cc formula.cpp)

target_link_libraries(${CMAKE_PROJECT_NAME} PRIVATE fmt)

target_compile_definitions(${CMAKE_PROJECT_NAME}
        PUBLIC
        $<$<CONFIG:Debug>:YASER_DEBUG>)
