![default_2 (2)](https://user-images.githubusercontent.com/33261455/152163475-9d24febc-723a-4390-97ba-fa11e133f15c.png)

[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)

## WORK IN PROGRESS

## [Documentation](https://marcluque.github.io/YASER/)

## TODO

### Implementation

- [X] Custom asserts
- [X] Logging
- [X] [DIMACS](https://people.sc.fsu.edu/~jburkardt/data/cnf/cnf.html) Parser
- [ ] DIMACS Parser Tests
- [ ] Clause resolution
- [ ] Conflict resolution
- [ ] VSIDS heuristic
- [ ] Watched Literals
- [ ] Stats printing
- [ ] As close as possible to 100% Code Coverage

### CI

#### General

- [X] [Unity Test framework](http://www.throwtheswitch.org/build/cmake) with CMake
- [X] [Clang](https://clang.llvm.org/) compilation
- [X] [Sonarcloud](https://sonarcloud.io/)
- [X] Include GCov report into [Sonarcloud](https://sonarcloud.io/)
- [ ] [clang-format](https://clang.llvm.org/docs/ClangFormat.html)
- [ ] Benchmarks with and without profiling data

#### Documentation of code & analysis results

- [X] [Sphinx](https://www.sphinx-doc.org/en/master/) + [Breathe](https://github.com/michaeljones/breathe) + [Doxygen](https://www.doxygen.nl/index.html) + [RTD](https://github.com/readthedocs/sphinx_rtd_theme) Docs
- [X] [GNU Complexity](https://www.gnu.org/software/complexity/)
- [X] [AddressSanitizer](https://github.com/google/sanitizers/wiki/AddressSanitizer)
- [X] [MemorySanitizer](https://github.com/google/sanitizers/wiki/MemorySanitizer)
- [X] [UBSanitizer](https://clang.llvm.org/docs/UndefinedBehaviorSanitizer.html)
- [X] [Thread-caching malloc](https://gperftools.github.io/gperftools/tcmalloc.html)
- [X] [GCov Code Coverage](https://docs.oracle.com/en/operating-systems/oracle-linux/6/porting/ch02s05s01.html)
- [X] [Google Benchmark](https://github.com/google/benchmark)
- [X] [Valgrind](https://valgrind.org/docs/manual/quick-start.html)
- [X] [Cachegrind](https://valgrind.org/docs/manual/cg-manual.html)
- [X] [Callgrind](https://valgrind.org/docs/manual/cl-manual.html)
- [X] [GProf](https://ftp.gnu.org/old-gnu/Manuals/gprof-2.9.1/html_mono/gprof.html)
- [X] [gprof2dot](https://github.com/jrfonseca/gprof2dot)
- [ ] [Google's Heap Profiler](https://gperftools.github.io/gperftools/heapprofile.html)
- [ ] [Google's Heap Checker](https://gperftools.github.io/gperftools/heap_checker.html)
- [ ] [Google's CPU Profiler](https://gperftools.github.io/gperftools/cpuprofile.html)
- [ ] Verify correctness: [SATLIB benchmarks](https://www.cs.ubc.ca/~hoos/SATLIB/benchm.html)

## License
Licensed under the BSD 2-Clause License - see the [LICENSE](LICENSE) file for details.
