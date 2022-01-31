include_directories(../include)
file(GLOB_RECURSE SRC_FILES "./*.c")
add_library(yaser STATIC ${SRC_FILES})
target_include_directories(yaser PUBLIC ../include)