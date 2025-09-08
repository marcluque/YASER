window.BENCHMARK_DATA = {
  "lastUpdate": 1757363473657,
  "repoUrl": "https://github.com/marcluque/YASER",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "marc.luque@outlook.com",
            "name": "Marc Luqué",
            "username": "marcluque"
          },
          "committer": {
            "email": "marc.luque@outlook.com",
            "name": "Marc Luqué",
            "username": "marcluque"
          },
          "distinct": true,
          "id": "4998ab633f15ca7cedf25b472dec1edbb100cd52",
          "message": "Add benchmark workflow",
          "timestamp": "2025-09-08T04:27:13+02:00",
          "tree_id": "d7d25e7d69d695597964a4fb64582faf6291b46f",
          "url": "https://github.com/marcluque/YASER/commit/4998ab633f15ca7cedf25b472dec1edbb100cd52"
        },
        "date": 1757298476232,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_SmallResolution",
            "value": 296.453701008665,
            "unit": "ns/iter",
            "extra": "iterations: 2425582\ncpu: 296.42134176457444 ns\nthreads: 1"
          },
          {
            "name": "BM_BigResolution",
            "value": 0.05988154368575624,
            "unit": "ms/iter",
            "extra": "iterations: 10896\ncpu: 0.059868780194566824 ms\nthreads: 1"
          },
          {
            "name": "BM_ParseSmallFormula/small_formula",
            "value": 974.3692774506876,
            "unit": "ns/iter",
            "extra": "iterations: 718124\ncpu: 974.3395875921146 ns\nthreads: 1"
          },
          {
            "name": "BM_ParseSmallFormula/big_formula",
            "value": 1.477866195652172,
            "unit": "ms/iter",
            "extra": "iterations: 460\ncpu: 1.477709952173912 ms\nthreads: 1"
          },
          {
            "name": "BM_PigeonHole4",
            "value": 0.26272468093093104,
            "unit": "ms/iter",
            "extra": "iterations: 2664\ncpu: 0.262712364114114 ms\nthreads: 1"
          },
          {
            "name": "BM_UnifromRandom3SatSatInstance",
            "value": 1.5350281528384264,
            "unit": "ms/iter",
            "extra": "iterations: 458\ncpu: 1.5346101091703055 ms\nthreads: 1"
          },
          {
            "name": "BM_UnifromRandom3SatUnsatInstance",
            "value": 1.9974374017093954,
            "unit": "ms/iter",
            "extra": "iterations: 351\ncpu: 1.997152259259259 ms\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "marc.luque@outlook.com",
            "name": "Marc Luqué",
            "username": "marcluque"
          },
          "committer": {
            "email": "marc.luque@outlook.com",
            "name": "Marc Luqué",
            "username": "marcluque"
          },
          "distinct": true,
          "id": "e01f2308a7e58faf120e4086258a9b6727247121",
          "message": "Improve parser performance by removing std::optional usage",
          "timestamp": "2025-09-08T22:30:19+02:00",
          "tree_id": "8ee24daa39585e7d655d0534854e1fb892d25980",
          "url": "https://github.com/marcluque/YASER/commit/e01f2308a7e58faf120e4086258a9b6727247121"
        },
        "date": 1757363472540,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_SmallResolution",
            "value": 283.9577171957841,
            "unit": "ns/iter",
            "extra": "iterations: 2354385\ncpu: 283.9439361022093 ns\nthreads: 1"
          },
          {
            "name": "BM_BigResolution",
            "value": 0.060338077433084676,
            "unit": "ms/iter",
            "extra": "iterations: 12217\ncpu: 0.06033292625030696 ms\nthreads: 1"
          },
          {
            "name": "BM_ParseSmallFormula/small_formula",
            "value": 973.4057103563678,
            "unit": "ns/iter",
            "extra": "iterations: 693687\ncpu: 973.3408684320164 ns\nthreads: 1"
          },
          {
            "name": "BM_ParseSmallFormula/big_formula",
            "value": 1.418776791411008,
            "unit": "ms/iter",
            "extra": "iterations: 489\ncpu: 1.4186899222903886 ms\nthreads: 1"
          },
          {
            "name": "BM_PigeonHole4",
            "value": 0.26236181127819774,
            "unit": "ms/iter",
            "extra": "iterations: 2660\ncpu: 0.26231667593984975 ms\nthreads: 1"
          },
          {
            "name": "BM_UnifromRandom3SatSatInstance",
            "value": 1.5274572838427403,
            "unit": "ms/iter",
            "extra": "iterations: 458\ncpu: 1.5274052096069872 ms\nthreads: 1"
          },
          {
            "name": "BM_UnifromRandom3SatUnsatInstance",
            "value": 2.0033347507163213,
            "unit": "ms/iter",
            "extra": "iterations: 349\ncpu: 2.0031025014326667 ms\nthreads: 1"
          }
        ]
      }
    ]
  }
}