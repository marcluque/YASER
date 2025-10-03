window.BENCHMARK_DATA = {
  "lastUpdate": 1759530189631,
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
          "id": "73ad6d99d642fb3bf4996796cea2147368f48d34",
          "message": "Remove BMC instance 11 from benchmarks to avoid timeout",
          "timestamp": "2025-10-04T00:15:36+02:00",
          "tree_id": "24aa1a467a9bb3f5a599bad07c034b7df05280af",
          "url": "https://github.com/marcluque/YASER/commit/73ad6d99d642fb3bf4996796cea2147368f48d34"
        },
        "date": 1759530188298,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_Resolution/3/5",
            "value": 180.2941703768566,
            "unit": "ns/iter",
            "extra": "iterations: 3925674\ncpu: 180.28539048326482 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/10/10",
            "value": 561.0507440374525,
            "unit": "ns/iter",
            "extra": "iterations: 1170640\ncpu: 561.0063537893801 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/1000/1000",
            "value": 111590.17134877566,
            "unit": "ns/iter",
            "extra": "iterations: 6087\ncpu: 111565.20716280596 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/10000/10000",
            "value": 1628495.9044288958,
            "unit": "ns/iter",
            "extra": "iterations: 429\ncpu: 1628256.137529137 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/100000/100000",
            "value": 28581956.88461534,
            "unit": "ns/iter",
            "extra": "iterations: 26\ncpu: 28578775.11538462 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/1000000/1000000",
            "value": 975648406.0000048,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 975583324.9999996 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/5/1000",
            "value": 52964.447029816925,
            "unit": "ns/iter",
            "extra": "iterations: 12979\ncpu: 52961.4847060636 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/1000/5",
            "value": 51944.59928417022,
            "unit": "ns/iter",
            "extra": "iterations: 13411\ncpu: 51936.9084333756 ns\nthreads: 1"
          },
          {
            "name": "BM_ParseFormula/formula_35_bytes",
            "value": 7812.328315913863,
            "unit": "ns/iter",
            "extra": "iterations: 87163\ncpu: 7811.626745293294 ns\nthreads: 1"
          },
          {
            "name": "BM_ParseFormula/formula_54741_bytes",
            "value": 1363113.81676413,
            "unit": "ns/iter",
            "extra": "iterations: 513\ncpu: 1362946.4931773865 ns\nthreads: 1"
          },
          {
            "name": "BM_ParseFormula/formula_6938400_bytes",
            "value": 966425492.0000132,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 966188460.9999998 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/uniform_random_3_sat_50vars_218clauses",
            "value": 1526197.886462879,
            "unit": "ns/iter",
            "extra": "iterations: 458\ncpu: 1525692.353711789 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/uniform_random_3_unsat_50vars_218clauses",
            "value": 2005922.0974212117,
            "unit": "ns/iter",
            "extra": "iterations: 349\ncpu: 2005291.1575931236 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/uniform_random_3_sat_100vars_430clauses",
            "value": 2578282.481617661,
            "unit": "ns/iter",
            "extra": "iterations: 272\ncpu: 2577680.3970588245 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/uniform_random_3_unsat_100vars_430clauses",
            "value": 68511542.69999996,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 68506247.00000001 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/uniform_random_3_sat_250vars_1065clauses",
            "value": 52685201996.99999,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 52678091344 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_1_sat_9685vars_55870clauses",
            "value": 11921520877.000021,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 11919690872.000004 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_2_sat_2810vars_11683clauses",
            "value": 33919166.850000694,
            "unit": "ns/iter",
            "extra": "iterations: 20\ncpu: 33915400.60000011 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_4_sat_28161vars_139716clauses",
            "value": 99599513586,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 99590775896 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_5_sat_9396vars_41207clauses",
            "value": 1866631563.999988,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 1866475866.9999912 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_7_sat_8710vars_39774clauses",
            "value": 216001429.33333662,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 215969915.99999645 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_13_sat_13215vars_65728clauses",
            "value": 148905280322,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 148893762959 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/logistics_a_sat_828vars_6718clauses",
            "value": 16219059.18604657,
            "unit": "ns/iter",
            "extra": "iterations: 43\ncpu: 16218365.790697865 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/logistics_b_sat_843vars_7301clauses",
            "value": 22108661.354839258,
            "unit": "ns/iter",
            "extra": "iterations: 31\ncpu: 22106767.54838819 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/logistics_c_sat_1141vars_10719clauses",
            "value": 65454391.72727315,
            "unit": "ns/iter",
            "extra": "iterations: 11\ncpu: 65443507.727273054 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/logistics_d_sat_4713vars_21991clauses",
            "value": 119894009.50000118,
            "unit": "ns/iter",
            "extra": "iterations: 6\ncpu: 119878635.66666116 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_anomaly_sat_48vars_261clauses",
            "value": 112102.60401284494,
            "unit": "ns/iter",
            "extra": "iterations: 6230\ncpu: 112080.86243979952 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_medium_sat_116vars_953clauses",
            "value": 438319.1270337935,
            "unit": "ns/iter",
            "extra": "iterations: 1598\ncpu: 438269.3754693055 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_huge_sat_459vars_7054clauses",
            "value": 3675396.4368421366,
            "unit": "ns/iter",
            "extra": "iterations: 190\ncpu: 3674760.2684209524 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_bw_large_a_sat_459vars_4675clauses",
            "value": 6496851.7407409,
            "unit": "ns/iter",
            "extra": "iterations: 108\ncpu: 6496041.092592324 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_bw_large_b_sat_1087vars_13772clauses",
            "value": 152101560.20000342,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 152078879.80000123 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_bw_large_c_sat_3016vars_50457clauses",
            "value": 16365596074.999985,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 16363830751.000023 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_1_2vars_3clauses",
            "value": 14848.775544917207,
            "unit": "ns/iter",
            "extra": "iterations: 47622\ncpu: 14847.766935449901 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_2_6vars_9clauses",
            "value": 19797.99729661172,
            "unit": "ns/iter",
            "extra": "iterations: 35511\ncpu: 19794.339697558513 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_3_12vars_22clauses",
            "value": 48075.30207690599,
            "unit": "ns/iter",
            "extra": "iterations: 14589\ncpu: 48068.83981081469 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_4_20vars_45clauses",
            "value": 260873.35589436858,
            "unit": "ns/iter",
            "extra": "iterations: 2689\ncpu: 260835.3213090355 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_5_30vars_81clauses",
            "value": 1532851.5450549347,
            "unit": "ns/iter",
            "extra": "iterations: 455\ncpu: 1532724.5252747461 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_6_42vars_133clauses",
            "value": 7032722.040000294,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7031448.6099999845 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_7_56vars_204clauses",
            "value": 30085406.173913293,
            "unit": "ns/iter",
            "extra": "iterations: 23\ncpu: 30083165.95652183 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_8_72vars_297clauses",
            "value": 151317362.60000253,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 151293990.80000213 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_9_90vars_415clauses",
            "value": 834005524.0000197,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 833934152.9999728 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_10_110vars_561clauses",
            "value": 5211482803.999956,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 5210940815.000015 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_11_132vars_738clauses",
            "value": 40877860995.999985,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 40874294869.00004 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}