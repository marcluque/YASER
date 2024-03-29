//
// Created with <3 by marcluque, June 2021
//

#include "parsing/dimacs_parser.h"
#include "watched-literals/watched_literals.h"
#include "dpll.h"
#include "global/cleanup.h"
#include "logging/log.h"
#include "global/yaser.h"

#define MAX_LEN_FILE_PATH (128U)

static void parse_flag(const int argc, const char* const* const argv, const int i, char* const file_path) {
  if (argv[i][1] == 'i') {
    if (i + 1 >= argc) {
      log_error("no file path provided");
      YASER_EXIT();
    }

    size_t file_path_len = strnlen(argv[i + 1], MAX_LEN_FILE_PATH);
    if (file_path_len == MAX_LEN_FILE_PATH) {
      log_error("file (%s) with length %zu exceeds max file path length %d", file_path, file_path_len,
                MAX_LEN_FILE_PATH);
      YASER_EXIT();
    }
    strncpy(file_path, argv[i + 1], MAX_LEN_FILE_PATH - 1);
    file_path[file_path_len] = '\0';
  } else {
    log_error("unknown flag %c", argv[i][0]);
    YASER_EXIT();
  }
}

int main(int argc, char** argv) {
  char* file_path = malloc(MAX_LEN_FILE_PATH * sizeof(char));
  YASER_CHECK_MALLOC(file_path);

  if (argc == 0) {
    log_error("an input file is obligatory");
  }

  for (int i = 0; i < argc; ++i) {
    if (argv[i][0] == '-') {
      parse_flag(argc, (const char* const*) argv, i, file_path);
    }
  }

  dimacs_parse_file(file_path);
  watched_literals_init();
  log_debug("Initialization done...");

  log_info("RESULT: %s", dpll() ? "SAT" : "UNSAT");

  free(file_path);
  cleanup_all();

  return EXIT_SUCCESS;
}
