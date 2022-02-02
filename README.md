# YASER

[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)

## UNDER CONSTRUCTION

## [Documentation](https://marcluque.github.io/YASER/)

## TODO

### Implementation

- [X] [DIMACS](https://people.sc.fsu.edu/~jburkardt/data/cnf/cnf.html) Parser
- [ ] DIMACS Parser Tests
- [ ] Clause resolution
- [ ] Conflict resolution
- [ ] VSIDS heuristic
- [ ] Watched Literals
- [ ] Stats printing
- [ ] 100% Code Coverage

### CI

#### General

- [X] [Embed Unity Test framework in CMake](http://www.throwtheswitch.org/build/cmake)
- [X] [Clang](https://clang.llvm.org/) compilation
- [X] [Sonarcloud](https://sonarcloud.io/)
- [X] Include GCov report into [Sonarcloud](https://sonarcloud.io/)
- [ ] [clang-format](https://clang.llvm.org/docs/ClangFormat.html)
- [ ] Benchmarks with and without profiling data

#### Documentation of code & analysis results

- [X] [Sphinx](https://www.sphinx-doc.org/en/master/) + [Doxygen](https://www.doxygen.nl/index.html) + [RTD](https://github.com/readthedocs/sphinx_rtd_theme) Docs
- [X] [GNU Complexity](https://www.gnu.org/software/complexity/)
- [X] [Valgrind](https://valgrind.org/docs/manual/quick-start.html)
- [X] [AddressSanitizer](https://github.com/google/sanitizers/wiki/AddressSanitizer)
- [X] [MemorySanitizer](https://github.com/google/sanitizers/wiki/MemorySanitizer)
- [X] [UBSanitizer](https://clang.llvm.org/docs/UndefinedBehaviorSanitizer.html)
- [X] [Thread-caching malloc](https://gperftools.github.io/gperftools/tcmalloc.html)
- [X] [GCov Code Coverage](https://docs.oracle.com/en/operating-systems/oracle-linux/6/porting/ch02s05s01.html)
- [ ] Verify correctness: [SATLIB benchmarks](https://www.cs.ubc.ca/~hoos/SATLIB/benchm.html)
- [ ] [Google Benchmark with CMake](https://pixorblog.wordpress.com/2016/05/22/cmake-google-micro-benchmarking/)
- [ ] [Google's Heap Profiler](https://gperftools.github.io/gperftools/heapprofile.html)
- [ ] [Google's Heap Checker](https://gperftools.github.io/gperftools/heap_checker.html)
- [ ] [Google's CPU Profiler](https://gperftools.github.io/gperftools/cpuprofile.html)
- [ ] [GProf](https://www.maketecheasier.com/profile-c-program-linux-using-gprof/?amp)
- [ ] [Convert gprof Output to Graph](https://github.com/jrfonseca/gprof2dot)

## License
Licensed under the BSD 2-Clause License - see the [LICENSE](LICENSE) file for details.