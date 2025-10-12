window.BENCHMARK_DATA = {
  "lastUpdate": 1760311124797,
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
          "id": "fb90c74c187a84072eae1e0e78747d80ad907091",
          "message": "Fix debug ASAN build exclusion",
          "timestamp": "2025-10-04T01:22:23+02:00",
          "tree_id": "790b5353d15735b69ea35baa137c4da5361289ab",
          "url": "https://github.com/marcluque/YASER/commit/fb90c74c187a84072eae1e0e78747d80ad907091"
        },
        "date": 1759534201064,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_Resolution/3/5",
            "value": 179.77751119723945,
            "unit": "ns/iter",
            "extra": "iterations: 3886672\ncpu: 179.7359617688346 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/10/10",
            "value": 556.4001172723391,
            "unit": "ns/iter",
            "extra": "iterations: 1267136\ncpu: 556.2773664389616 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/1000/1000",
            "value": 111175.58475540398,
            "unit": "ns/iter",
            "extra": "iterations: 6153\ncpu: 111167.51389566067 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/10000/10000",
            "value": 1612693.153318055,
            "unit": "ns/iter",
            "extra": "iterations: 437\ncpu: 1612621.2883295198 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/100000/100000",
            "value": 28614920.076922618,
            "unit": "ns/iter",
            "extra": "iterations: 26\ncpu: 28613342.30769231 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/1000000/1000000",
            "value": 1024310845.0000023,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 1024175825.0000004 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/5/1000",
            "value": 51982.13149847041,
            "unit": "ns/iter",
            "extra": "iterations: 13407\ncpu: 51967.864026254894 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/1000/5",
            "value": 51989.2863853271,
            "unit": "ns/iter",
            "extra": "iterations: 13412\ncpu: 51983.853936773005 ns\nthreads: 1"
          },
          {
            "name": "BM_ParseFormula/formula_35_bytes",
            "value": 7588.166051780598,
            "unit": "ns/iter",
            "extra": "iterations: 92158\ncpu: 7586.766791814059 ns\nthreads: 1"
          },
          {
            "name": "BM_ParseFormula/formula_54741_bytes",
            "value": 1342701.328185328,
            "unit": "ns/iter",
            "extra": "iterations: 518\ncpu: 1342538.8841698843 ns\nthreads: 1"
          },
          {
            "name": "BM_ParseFormula/formula_6938400_bytes",
            "value": 965738838.9999965,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 965043295.000001 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/uniform_random_3_sat_50vars_218clauses",
            "value": 1521684.013043481,
            "unit": "ns/iter",
            "extra": "iterations: 460\ncpu: 1521568.3934782583 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/uniform_random_3_unsat_50vars_218clauses",
            "value": 1999180.8820058915,
            "unit": "ns/iter",
            "extra": "iterations: 339\ncpu: 1999092.2212389351 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/uniform_random_3_sat_100vars_430clauses",
            "value": 2568496.402930439,
            "unit": "ns/iter",
            "extra": "iterations: 273\ncpu: 2568301.908424911 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/uniform_random_3_unsat_100vars_430clauses",
            "value": 68346761.09999976,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 68339908.29999994 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/uniform_random_3_sat_250vars_1065clauses",
            "value": 51298710814.99999,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 51289021980 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_1_sat_9685vars_55870clauses",
            "value": 11865826303.000006,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 11864208075.999996 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_2_sat_2810vars_11683clauses",
            "value": 33384544.904760916,
            "unit": "ns/iter",
            "extra": "iterations: 21\ncpu: 33379911.761904795 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_4_sat_28161vars_139716clauses",
            "value": 99615086921.99998,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 99605617952.99998 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_5_sat_9396vars_41207clauses",
            "value": 1873376416.0000136,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 1873200590.9999998 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_7_sat_8710vars_39774clauses",
            "value": 215474937.66667005,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 215422799.3333393 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_13_sat_13215vars_65728clauses",
            "value": 148953175769.99997,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 148939835556 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/logistics_a_sat_828vars_6718clauses",
            "value": 16315322.767441949,
            "unit": "ns/iter",
            "extra": "iterations: 43\ncpu: 16313711.604651459 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/logistics_b_sat_843vars_7301clauses",
            "value": 22092773.28124948,
            "unit": "ns/iter",
            "extra": "iterations: 32\ncpu: 22091696.71874989 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/logistics_c_sat_1141vars_10719clauses",
            "value": 65340920.36363601,
            "unit": "ns/iter",
            "extra": "iterations: 11\ncpu: 65334580.818180464 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/logistics_d_sat_4713vars_21991clauses",
            "value": 118390280.66665946,
            "unit": "ns/iter",
            "extra": "iterations: 6\ncpu: 118356661.33333689 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_anomaly_sat_48vars_261clauses",
            "value": 110434.17827738643,
            "unit": "ns/iter",
            "extra": "iterations: 6316\ncpu: 110408.3161811268 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_medium_sat_116vars_953clauses",
            "value": 428056.29877218,
            "unit": "ns/iter",
            "extra": "iterations: 1466\ncpu: 428045.1466575685 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_huge_sat_459vars_7054clauses",
            "value": 3619088.155440276,
            "unit": "ns/iter",
            "extra": "iterations: 193\ncpu: 3618763.968911905 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_bw_large_a_sat_459vars_4675clauses",
            "value": 6383673.163636352,
            "unit": "ns/iter",
            "extra": "iterations: 110\ncpu: 6382949.609091136 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_bw_large_b_sat_1087vars_13772clauses",
            "value": 151583040.5999964,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 151566629.59999496 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_bw_large_c_sat_3016vars_50457clauses",
            "value": 16323264214.999994,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 16322015514.999975 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_1_2vars_3clauses",
            "value": 14755.789238710855,
            "unit": "ns/iter",
            "extra": "iterations: 47262\ncpu: 14755.65769539987 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_2_6vars_9clauses",
            "value": 19750.599678093808,
            "unit": "ns/iter",
            "extra": "iterations: 35414\ncpu: 19747.99017337803 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_3_12vars_22clauses",
            "value": 48313.24206458794,
            "unit": "ns/iter",
            "extra": "iterations: 14492\ncpu: 48311.59308584067 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_4_20vars_45clauses",
            "value": 257498.45595282887,
            "unit": "ns/iter",
            "extra": "iterations: 2713\ncpu: 257473.8562477141 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_5_30vars_81clauses",
            "value": 1526774.5098468862,
            "unit": "ns/iter",
            "extra": "iterations: 457\ncpu: 1526761.2122538374 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_6_42vars_133clauses",
            "value": 7016647.170000282,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7015818.330000344 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_7_56vars_204clauses",
            "value": 30086477.521738585,
            "unit": "ns/iter",
            "extra": "iterations: 23\ncpu: 30084199.652173497 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_8_72vars_297clauses",
            "value": 150298481.40000013,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 150284739.4000014 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_9_90vars_415clauses",
            "value": 823291514.0000045,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 823226024.0000073 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_10_110vars_561clauses",
            "value": 5004187763.999994,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 5003820204.000022 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_11_132vars_738clauses",
            "value": 39637787929.000015,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 39631384378.00001 ns\nthreads: 1"
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
          "id": "99e59a3deda0f290a6357b5d5116a1a61160cb51",
          "message": "Rename santizer build types",
          "timestamp": "2025-10-04T01:27:40+02:00",
          "tree_id": "2225456dd709192398b594f16f0afd92bfb291b5",
          "url": "https://github.com/marcluque/YASER/commit/99e59a3deda0f290a6357b5d5116a1a61160cb51"
        },
        "date": 1759534521720,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_Resolution/3/5",
            "value": 184.67041775804907,
            "unit": "ns/iter",
            "extra": "iterations: 3670043\ncpu: 184.60700024495628 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/10/10",
            "value": 566.9565098375759,
            "unit": "ns/iter",
            "extra": "iterations: 1242074\ncpu: 566.9096068350195 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/1000/1000",
            "value": 112376.2209321342,
            "unit": "ns/iter",
            "extra": "iterations: 6115\ncpu: 112359.38299264103 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/10000/10000",
            "value": 1663897.7529691185,
            "unit": "ns/iter",
            "extra": "iterations: 421\ncpu: 1663690.225653206 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/100000/100000",
            "value": 28670016.680000003,
            "unit": "ns/iter",
            "extra": "iterations: 25\ncpu: 28665973.6 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/1000000/1000000",
            "value": 1012764386.9999971,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 1012670013.9999993 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/5/1000",
            "value": 52909.01604318162,
            "unit": "ns/iter",
            "extra": "iterations: 13339\ncpu: 52886.46945048358 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/1000/5",
            "value": 52509.34026522006,
            "unit": "ns/iter",
            "extra": "iterations: 13272\ncpu: 52491.16433092225 ns\nthreads: 1"
          },
          {
            "name": "BM_ParseFormula/formula_35_bytes",
            "value": 7748.6550601368845,
            "unit": "ns/iter",
            "extra": "iterations: 90294\ncpu: 7746.464316565887 ns\nthreads: 1"
          },
          {
            "name": "BM_ParseFormula/formula_54741_bytes",
            "value": 1361708.420542647,
            "unit": "ns/iter",
            "extra": "iterations: 516\ncpu: 1361610.8779069765 ns\nthreads: 1"
          },
          {
            "name": "BM_ParseFormula/formula_6938400_bytes",
            "value": 1059233414.9999943,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 1059128947.0000014 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/uniform_random_3_sat_50vars_218clauses",
            "value": 1545533.4988913687,
            "unit": "ns/iter",
            "extra": "iterations: 451\ncpu: 1545436.4966740552 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/uniform_random_3_unsat_50vars_218clauses",
            "value": 2030944.4244185942,
            "unit": "ns/iter",
            "extra": "iterations: 344\ncpu: 2030913.168604647 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/uniform_random_3_sat_100vars_430clauses",
            "value": 2620879.7556390804,
            "unit": "ns/iter",
            "extra": "iterations: 266\ncpu: 2620695.5714285737 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/uniform_random_3_unsat_100vars_430clauses",
            "value": 69326344.30000064,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 69319042.69999993 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/uniform_random_3_sat_250vars_1065clauses",
            "value": 50705130878.99999,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 50696875260 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_1_sat_9685vars_55870clauses",
            "value": 12200028796.000011,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 12197406238 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_2_sat_2810vars_11683clauses",
            "value": 36168613.89473731,
            "unit": "ns/iter",
            "extra": "iterations: 19\ncpu: 36166820.00000014 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_4_sat_28161vars_139716clauses",
            "value": 103574394095,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 103566788329 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_5_sat_9396vars_41207clauses",
            "value": 1923285499.9999917,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 1923134845.999982 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_7_sat_8710vars_39774clauses",
            "value": 239136777.6666584,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 239118250.66666853 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_13_sat_13215vars_65728clauses",
            "value": 152481356488.99997,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 152468589851.99997 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/logistics_a_sat_828vars_6718clauses",
            "value": 16425935.883721069,
            "unit": "ns/iter",
            "extra": "iterations: 43\ncpu: 16424599.44186115 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/logistics_b_sat_843vars_7301clauses",
            "value": 22386997.612903588,
            "unit": "ns/iter",
            "extra": "iterations: 31\ncpu: 22385503.35483898 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/logistics_c_sat_1141vars_10719clauses",
            "value": 66934744.00000241,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 66926835.499998555 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/logistics_d_sat_4713vars_21991clauses",
            "value": 131402564.0000068,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 131373794.79999253 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_anomaly_sat_48vars_261clauses",
            "value": 111896.12211583904,
            "unit": "ns/iter",
            "extra": "iterations: 6371\ncpu: 111864.90362579655 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_medium_sat_116vars_953clauses",
            "value": 434006.9789733835,
            "unit": "ns/iter",
            "extra": "iterations: 1617\ncpu: 434004.12492269324 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_huge_sat_459vars_7054clauses",
            "value": 3637172.7736841897,
            "unit": "ns/iter",
            "extra": "iterations: 190\ncpu: 3636770.1105264486 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_bw_large_a_sat_459vars_4675clauses",
            "value": 6532406.742857282,
            "unit": "ns/iter",
            "extra": "iterations: 105\ncpu: 6531935.485714343 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_bw_large_b_sat_1087vars_13772clauses",
            "value": 156410359.5000006,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 156396475.99999762 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_bw_large_c_sat_3016vars_50457clauses",
            "value": 16626416246.999952,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 16625320720.99998 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_1_2vars_3clauses",
            "value": 15108.706618352611,
            "unit": "ns/iter",
            "extra": "iterations: 46915\ncpu: 15108.214558243702 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_2_6vars_9clauses",
            "value": 20073.580903372193,
            "unit": "ns/iter",
            "extra": "iterations: 34980\ncpu: 20071.91729559873 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_3_12vars_22clauses",
            "value": 49015.44477110296,
            "unit": "ns/iter",
            "extra": "iterations: 14286\ncpu: 49014.17667646637 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_4_20vars_45clauses",
            "value": 266012.42436974274,
            "unit": "ns/iter",
            "extra": "iterations: 2618\ncpu: 265991.46562261315 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_5_30vars_81clauses",
            "value": 1558870.8772322133,
            "unit": "ns/iter",
            "extra": "iterations: 448\ncpu: 1558808.6316963767 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_6_42vars_133clauses",
            "value": 7155182.81632698,
            "unit": "ns/iter",
            "extra": "iterations: 98\ncpu: 7154453.2142852135 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_7_56vars_204clauses",
            "value": 30552228.30434816,
            "unit": "ns/iter",
            "extra": "iterations: 23\ncpu: 30550738.86956635 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_8_72vars_297clauses",
            "value": 155152141.40000352,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 155139896.5999965 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_9_90vars_415clauses",
            "value": 837200896.000013,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 837167703.9999667 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_10_110vars_561clauses",
            "value": 5017015872.999991,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 5016730058.999997 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_11_132vars_738clauses",
            "value": 38859076063.00003,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 38856615123.99997 ns\nthreads: 1"
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
          "id": "3f33c993c5a8aef4893d0848a5bf9c65621a489e",
          "message": "Use proper flags for sanitizers",
          "timestamp": "2025-10-04T01:40:31+02:00",
          "tree_id": "66fa7590644d98809a4b68785cb46903914e2f1b",
          "url": "https://github.com/marcluque/YASER/commit/3f33c993c5a8aef4893d0848a5bf9c65621a489e"
        },
        "date": 1759535283810,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_Resolution/3/5",
            "value": 179.98580735928905,
            "unit": "ns/iter",
            "extra": "iterations: 3937745\ncpu: 179.97702365186166 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/10/10",
            "value": 555.345625430172,
            "unit": "ns/iter",
            "extra": "iterations: 1262627\ncpu: 555.2866594805909 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/1000/1000",
            "value": 111834.37877312266,
            "unit": "ns/iter",
            "extra": "iterations: 6162\ncpu: 111817.56069457973 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/10000/10000",
            "value": 1739749.976303286,
            "unit": "ns/iter",
            "extra": "iterations: 422\ncpu: 1739611.4289099523 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/100000/100000",
            "value": 28114763.807691973,
            "unit": "ns/iter",
            "extra": "iterations: 26\ncpu: 28110560.53846152 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/1000000/1000000",
            "value": 976203411.0000286,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 976102851.9999995 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/5/1000",
            "value": 51693.51121842766,
            "unit": "ns/iter",
            "extra": "iterations: 13460\ncpu: 51676.13915304606 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/1000/5",
            "value": 51769.46777546806,
            "unit": "ns/iter",
            "extra": "iterations: 13468\ncpu: 51761.85773685776 ns\nthreads: 1"
          },
          {
            "name": "BM_ParseFormula/formula_35_bytes",
            "value": 7643.349674558583,
            "unit": "ns/iter",
            "extra": "iterations: 91568\ncpu: 7642.056373405563 ns\nthreads: 1"
          },
          {
            "name": "BM_ParseFormula/formula_54741_bytes",
            "value": 1350262.2085769211,
            "unit": "ns/iter",
            "extra": "iterations: 513\ncpu: 1350040.504873295 ns\nthreads: 1"
          },
          {
            "name": "BM_ParseFormula/formula_6938400_bytes",
            "value": 938892660.0000218,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 938821402.9999986 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/uniform_random_3_sat_50vars_218clauses",
            "value": 1535886.098253307,
            "unit": "ns/iter",
            "extra": "iterations: 458\ncpu: 1535661.1681222697 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/uniform_random_3_unsat_50vars_218clauses",
            "value": 2012950.9971264598,
            "unit": "ns/iter",
            "extra": "iterations: 348\ncpu: 2012776.4856321828 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/uniform_random_3_sat_100vars_430clauses",
            "value": 2587652.464684133,
            "unit": "ns/iter",
            "extra": "iterations: 269\ncpu: 2587236.8475836455 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/uniform_random_3_unsat_100vars_430clauses",
            "value": 68543650.10000265,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 68542211.99999984 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/uniform_random_3_sat_250vars_1065clauses",
            "value": 52926730819,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 52919494905 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_1_sat_9685vars_55870clauses",
            "value": 11885350006.00001,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 11883856234.000008 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_2_sat_2810vars_11683clauses",
            "value": 34258606.71428555,
            "unit": "ns/iter",
            "extra": "iterations: 21\ncpu: 34254289.85714315 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_4_sat_28161vars_139716clauses",
            "value": 99457881915.00003,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 99449351364 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_5_sat_9396vars_41207clauses",
            "value": 1848076213.000013,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 1847928289.9999988 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_7_sat_8710vars_39774clauses",
            "value": 207651949.66666436,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 207641655.33333313 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_13_sat_13215vars_65728clauses",
            "value": 148639596357.00003,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 148628352714.99997 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/logistics_a_sat_828vars_6718clauses",
            "value": 16386304.186047984,
            "unit": "ns/iter",
            "extra": "iterations: 43\ncpu: 16383205.162790725 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/logistics_b_sat_843vars_7301clauses",
            "value": 22170897.031251967,
            "unit": "ns/iter",
            "extra": "iterations: 32\ncpu: 22168898.37499991 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/logistics_c_sat_1141vars_10719clauses",
            "value": 65072807.8181828,
            "unit": "ns/iter",
            "extra": "iterations: 11\ncpu: 65041846.54545497 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/logistics_d_sat_4713vars_21991clauses",
            "value": 118111252.1666705,
            "unit": "ns/iter",
            "extra": "iterations: 6\ncpu: 118099567.83333556 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_anomaly_sat_48vars_261clauses",
            "value": 109110.9391849483,
            "unit": "ns/iter",
            "extra": "iterations: 6380\ncpu: 109093.39373041008 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_medium_sat_116vars_953clauses",
            "value": 429945.19570553396,
            "unit": "ns/iter",
            "extra": "iterations: 1630\ncpu: 429904.02515338914 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_huge_sat_459vars_7054clauses",
            "value": 3692799.7864578306,
            "unit": "ns/iter",
            "extra": "iterations: 192\ncpu: 3692152.442708263 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_bw_large_a_sat_459vars_4675clauses",
            "value": 6467591.28037438,
            "unit": "ns/iter",
            "extra": "iterations: 107\ncpu: 6467414.009345753 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_bw_large_b_sat_1087vars_13772clauses",
            "value": 151402543.80000895,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 151392232.0000006 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_bw_large_c_sat_3016vars_50457clauses",
            "value": 16352029801.000072,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 16349842671.000032 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_1_2vars_3clauses",
            "value": 14743.943875608466,
            "unit": "ns/iter",
            "extra": "iterations: 47270\ncpu: 14741.818849163623 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_2_6vars_9clauses",
            "value": 19577.744660031298,
            "unit": "ns/iter",
            "extra": "iterations: 35768\ncpu: 19575.957084543727 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_3_12vars_22clauses",
            "value": 48550.875665583946,
            "unit": "ns/iter",
            "extra": "iterations: 14461\ncpu: 48545.544498997595 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_4_20vars_45clauses",
            "value": 262321.5126676421,
            "unit": "ns/iter",
            "extra": "iterations: 2684\ncpu: 262262.2198211757 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_5_30vars_81clauses",
            "value": 1538007.5912087325,
            "unit": "ns/iter",
            "extra": "iterations: 455\ncpu: 1537885.2593406527 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_6_42vars_133clauses",
            "value": 7044522.6363637,
            "unit": "ns/iter",
            "extra": "iterations: 99\ncpu: 7043837.616161666 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_7_56vars_204clauses",
            "value": 30237295.56521768,
            "unit": "ns/iter",
            "extra": "iterations: 23\ncpu: 30235870.47826111 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_8_72vars_297clauses",
            "value": 151110104.80000004,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 151095060.199998 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_9_90vars_415clauses",
            "value": 823170266.0000337,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 823042455.0000066 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_10_110vars_561clauses",
            "value": 4999424637.000061,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 4998931008.999989 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_11_132vars_738clauses",
            "value": 40972760923.00001,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 40967696737.99997 ns\nthreads: 1"
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
          "id": "c3472306788c0b8b47e8c483085c0e72fc688892",
          "message": "Disable MSAN for macos",
          "timestamp": "2025-10-04T01:51:48+02:00",
          "tree_id": "4cf91776df76f1232686b2fff0ccdcb9117e5764",
          "url": "https://github.com/marcluque/YASER/commit/c3472306788c0b8b47e8c483085c0e72fc688892"
        },
        "date": 1759535958761,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_Resolution/3/5",
            "value": 176.91385905966058,
            "unit": "ns/iter",
            "extra": "iterations: 3957433\ncpu: 176.90457248423414 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/10/10",
            "value": 558.2482741204045,
            "unit": "ns/iter",
            "extra": "iterations: 1259213\ncpu: 558.1712942925462 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/1000/1000",
            "value": 110095.05264927258,
            "unit": "ns/iter",
            "extra": "iterations: 5945\ncpu: 110073.90630782172 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/10000/10000",
            "value": 1638103.8688525727,
            "unit": "ns/iter",
            "extra": "iterations: 427\ncpu: 1638048.402810304 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/100000/100000",
            "value": 28688782.67999662,
            "unit": "ns/iter",
            "extra": "iterations: 25\ncpu: 28685085.76 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/1000000/1000000",
            "value": 886344530.9999634,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 886233400.0000001 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/5/1000",
            "value": 52346.90811717233,
            "unit": "ns/iter",
            "extra": "iterations: 13724\ncpu: 52340.522733896796 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/1000/5",
            "value": 51757.20517766163,
            "unit": "ns/iter",
            "extra": "iterations: 13481\ncpu: 51745.09353905504 ns\nthreads: 1"
          },
          {
            "name": "BM_ParseFormula/formula_35_bytes",
            "value": 7574.5067749798745,
            "unit": "ns/iter",
            "extra": "iterations: 92325\ncpu: 7573.071616571889 ns\nthreads: 1"
          },
          {
            "name": "BM_ParseFormula/formula_54741_bytes",
            "value": 1351320.079303683,
            "unit": "ns/iter",
            "extra": "iterations: 517\ncpu: 1351155.6286266914 ns\nthreads: 1"
          },
          {
            "name": "BM_ParseFormula/formula_6938400_bytes",
            "value": 965600001.9999738,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 965374240.9999993 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/uniform_random_3_sat_50vars_218clauses",
            "value": 1529869.470459495,
            "unit": "ns/iter",
            "extra": "iterations: 457\ncpu: 1529689.146608313 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/uniform_random_3_unsat_50vars_218clauses",
            "value": 2009799.9568967768,
            "unit": "ns/iter",
            "extra": "iterations: 348\ncpu: 2009591.8735632193 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/uniform_random_3_sat_100vars_430clauses",
            "value": 2582321.0442801756,
            "unit": "ns/iter",
            "extra": "iterations: 271\ncpu: 2582080.4907749128 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/uniform_random_3_unsat_100vars_430clauses",
            "value": 68578282.4999933,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 68574853.19999999 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/uniform_random_3_sat_250vars_1065clauses",
            "value": 50758807883.00003,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 50749720619 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_1_sat_9685vars_55870clauses",
            "value": 11881789501.999947,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 11880891582.999992 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_2_sat_2810vars_11683clauses",
            "value": 33269121.285716858,
            "unit": "ns/iter",
            "extra": "iterations: 21\ncpu: 33258242.00000024 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_4_sat_28161vars_139716clauses",
            "value": 99637456682.99998,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 99628914377.00002 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_5_sat_9396vars_41207clauses",
            "value": 1854637403.9999592,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 1854501604.999996 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_7_sat_8710vars_39774clauses",
            "value": 213734050.66666842,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 213697942.6666604 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_13_sat_13215vars_65728clauses",
            "value": 149273340289.0001,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 149263215941 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/logistics_a_sat_828vars_6718clauses",
            "value": 15978020.22727344,
            "unit": "ns/iter",
            "extra": "iterations: 44\ncpu: 15976536.068181572 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/logistics_b_sat_843vars_7301clauses",
            "value": 21835355.3437467,
            "unit": "ns/iter",
            "extra": "iterations: 32\ncpu: 21833703.531250138 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/logistics_c_sat_1141vars_10719clauses",
            "value": 65938028.909076,
            "unit": "ns/iter",
            "extra": "iterations: 11\ncpu: 65932572.18181944 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/logistics_d_sat_4713vars_21991clauses",
            "value": 122890065.66667618,
            "unit": "ns/iter",
            "extra": "iterations: 6\ncpu: 122887265.83332731 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_anomaly_sat_48vars_261clauses",
            "value": 109857.85189851644,
            "unit": "ns/iter",
            "extra": "iterations: 6347\ncpu: 109826.26091066962 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_medium_sat_116vars_953clauses",
            "value": 432682.1361127627,
            "unit": "ns/iter",
            "extra": "iterations: 1631\ncpu: 431492.1140404648 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_huge_sat_459vars_7054clauses",
            "value": 3617090.20103028,
            "unit": "ns/iter",
            "extra": "iterations: 194\ncpu: 3616745.7474226872 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_bw_large_a_sat_459vars_4675clauses",
            "value": 6384962.648149263,
            "unit": "ns/iter",
            "extra": "iterations: 108\ncpu: 6384609.07407429 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_bw_large_b_sat_1087vars_13772clauses",
            "value": 150735783.00002736,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 150710620.7999982 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_bw_large_c_sat_3016vars_50457clauses",
            "value": 16278499034.000107,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 16277581687.999998 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_1_2vars_3clauses",
            "value": 14654.511748358667,
            "unit": "ns/iter",
            "extra": "iterations: 47496\ncpu: 14653.561141991702 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_2_6vars_9clauses",
            "value": 19693.65206397779,
            "unit": "ns/iter",
            "extra": "iterations: 35199\ncpu: 19691.59584079179 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_3_12vars_22clauses",
            "value": 48466.613784047826,
            "unit": "ns/iter",
            "extra": "iterations: 14466\ncpu: 48465.650490806656 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_4_20vars_45clauses",
            "value": 259634.12569522447,
            "unit": "ns/iter",
            "extra": "iterations: 2697\ncpu: 259605.4764553092 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_5_30vars_81clauses",
            "value": 1542143.712087916,
            "unit": "ns/iter",
            "extra": "iterations: 455\ncpu: 1542077.9318681746 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_6_42vars_133clauses",
            "value": 7062606.9191922685,
            "unit": "ns/iter",
            "extra": "iterations: 99\ncpu: 7062089.151515185 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_7_56vars_204clauses",
            "value": 30216400.65216873,
            "unit": "ns/iter",
            "extra": "iterations: 23\ncpu: 30214329.956520386 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_8_72vars_297clauses",
            "value": 149998980.20000726,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 149980404.60000083 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_9_90vars_415clauses",
            "value": 832108379.0001466,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 832072920.00003 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_10_110vars_561clauses",
            "value": 5184526437.000158,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 5184248840.999999 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_11_132vars_738clauses",
            "value": 39789577248.99988,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 39786261734.999985 ns\nthreads: 1"
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
          "id": "4e3d7485c8085066c545dc7cf47b92559b6cfe55",
          "message": "Attempt -O3 for sanitizers",
          "timestamp": "2025-10-04T01:56:53+02:00",
          "tree_id": "4b8b60d71304c1e1bdfbdba0eb5042cd6235a1b5",
          "url": "https://github.com/marcluque/YASER/commit/4e3d7485c8085066c545dc7cf47b92559b6cfe55"
        },
        "date": 1759536332052,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_Resolution/3/5",
            "value": 183.22119223297048,
            "unit": "ns/iter",
            "extra": "iterations: 3937150\ncpu: 183.20432724178656 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/10/10",
            "value": 554.5063169652087,
            "unit": "ns/iter",
            "extra": "iterations: 1259703\ncpu: 554.4558360184901 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/1000/1000",
            "value": 111133.22130080545,
            "unit": "ns/iter",
            "extra": "iterations: 6150\ncpu: 111116.4525203252 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/10000/10000",
            "value": 1775826.192399018,
            "unit": "ns/iter",
            "extra": "iterations: 421\ncpu: 1775709.6175771968 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/100000/100000",
            "value": 29080983.600001674,
            "unit": "ns/iter",
            "extra": "iterations: 25\ncpu: 29077183.640000008 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/1000000/1000000",
            "value": 1031557502.9999309,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 1031486701.9999996 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/5/1000",
            "value": 52480.705452126065,
            "unit": "ns/iter",
            "extra": "iterations: 13536\ncpu: 52465.4979314421 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/1000/5",
            "value": 52134.417906002025,
            "unit": "ns/iter",
            "extra": "iterations: 13448\ncpu: 52114.30346519932 ns\nthreads: 1"
          },
          {
            "name": "BM_ParseFormula/formula_35_bytes",
            "value": 7527.699039326411,
            "unit": "ns/iter",
            "extra": "iterations: 92331\ncpu: 7527.213666049322 ns\nthreads: 1"
          },
          {
            "name": "BM_ParseFormula/formula_54741_bytes",
            "value": 1339688.4759152539,
            "unit": "ns/iter",
            "extra": "iterations: 519\ncpu: 1339565.6146435468 ns\nthreads: 1"
          },
          {
            "name": "BM_ParseFormula/formula_6938400_bytes",
            "value": 959539032.000066,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 959326439.0000015 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/uniform_random_3_sat_50vars_218clauses",
            "value": 1536795.076419305,
            "unit": "ns/iter",
            "extra": "iterations: 458\ncpu: 1536284.469432317 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/uniform_random_3_unsat_50vars_218clauses",
            "value": 2010687.9971262056,
            "unit": "ns/iter",
            "extra": "iterations: 348\ncpu: 2010456.3936781636 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/uniform_random_3_sat_100vars_430clauses",
            "value": 2572187.490775033,
            "unit": "ns/iter",
            "extra": "iterations: 271\ncpu: 2571857.7232472296 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/uniform_random_3_unsat_100vars_430clauses",
            "value": 68579564.10000269,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 68575904.99999997 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/uniform_random_3_sat_250vars_1065clauses",
            "value": 51583146263.99999,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 51579141304 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_1_sat_9685vars_55870clauses",
            "value": 11950716619.999866,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 11949679486.999998 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_2_sat_2810vars_11683clauses",
            "value": 34097757.14284738,
            "unit": "ns/iter",
            "extra": "iterations: 21\ncpu: 34082873.142856956 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_4_sat_28161vars_139716clauses",
            "value": 99819443843.00005,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 99810197999.00002 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_5_sat_9396vars_41207clauses",
            "value": 1863463733.999879,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 1863272115.000001 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_7_sat_8710vars_39774clauses",
            "value": 209300754.33329877,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 209295101.33333907 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_13_sat_13215vars_65728clauses",
            "value": 148960851851.00015,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 148950963848.99997 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/logistics_a_sat_828vars_6718clauses",
            "value": 16272440.279064626,
            "unit": "ns/iter",
            "extra": "iterations: 43\ncpu: 16271268.372093366 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/logistics_b_sat_843vars_7301clauses",
            "value": 22287170.516128458,
            "unit": "ns/iter",
            "extra": "iterations: 31\ncpu: 22284422.483870283 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/logistics_c_sat_1141vars_10719clauses",
            "value": 65260667.27273743,
            "unit": "ns/iter",
            "extra": "iterations: 11\ncpu: 65257403.63636342 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/logistics_d_sat_4713vars_21991clauses",
            "value": 120213222.66665871,
            "unit": "ns/iter",
            "extra": "iterations: 6\ncpu: 120187358.6666693 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_anomaly_sat_48vars_261clauses",
            "value": 109979.52291273444,
            "unit": "ns/iter",
            "extra": "iterations: 6372\ncpu: 109951.78483992293 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_medium_sat_116vars_953clauses",
            "value": 427328.13369972334,
            "unit": "ns/iter",
            "extra": "iterations: 1638\ncpu: 427286.4938949914 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_huge_sat_459vars_7054clauses",
            "value": 3639960.5364583936,
            "unit": "ns/iter",
            "extra": "iterations: 192\ncpu: 3639987.5312499814 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_bw_large_a_sat_459vars_4675clauses",
            "value": 6424347.9174311105,
            "unit": "ns/iter",
            "extra": "iterations: 109\ncpu: 6423634.100917544 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_bw_large_b_sat_1087vars_13772clauses",
            "value": 151870088.19998482,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 151859931.3999971 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_bw_large_c_sat_3016vars_50457clauses",
            "value": 16448404207.999828,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 16447405029.000038 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_1_2vars_3clauses",
            "value": 14743.007183030826,
            "unit": "ns/iter",
            "extra": "iterations: 47473\ncpu: 14741.836412276143 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_2_6vars_9clauses",
            "value": 19756.291220554125,
            "unit": "ns/iter",
            "extra": "iterations: 35492\ncpu: 19756.107545362636 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_3_12vars_22clauses",
            "value": 48381.90389285567,
            "unit": "ns/iter",
            "extra": "iterations: 14411\ncpu: 48377.93005343221 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_4_20vars_45clauses",
            "value": 263418.92569083784,
            "unit": "ns/iter",
            "extra": "iterations: 2678\ncpu: 263414.58588499576 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_5_30vars_81clauses",
            "value": 1538851.8373628769,
            "unit": "ns/iter",
            "extra": "iterations: 455\ncpu: 1538719.73406587 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_6_42vars_133clauses",
            "value": 7067043.727271414,
            "unit": "ns/iter",
            "extra": "iterations: 99\ncpu: 7066939.5353539735 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_7_56vars_204clauses",
            "value": 30144303.52174674,
            "unit": "ns/iter",
            "extra": "iterations: 23\ncpu: 30141604.56521732 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_8_72vars_297clauses",
            "value": 152212782.39996535,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 152203948.99999973 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_9_90vars_415clauses",
            "value": 835423819.99996,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 835388985.9999981 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_10_110vars_561clauses",
            "value": 5204733134.9999695,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 5204468969.999993 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_11_132vars_738clauses",
            "value": 41496272390.00006,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 41492847649 ns\nthreads: 1"
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
          "id": "1b5ed33fa031dbc25dc10c50bf9a556434f0adf7",
          "message": "Use 4 cores for parallel test execution",
          "timestamp": "2025-10-04T02:47:34+02:00",
          "tree_id": "a0771b791eeef00a3fb48eaed758b1e52d1f5a46",
          "url": "https://github.com/marcluque/YASER/commit/1b5ed33fa031dbc25dc10c50bf9a556434f0adf7"
        },
        "date": 1759539304482,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_Resolution/3/5",
            "value": 185.1024110792272,
            "unit": "ns/iter",
            "extra": "iterations: 3679680\ncpu: 185.07574082528916 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/10/10",
            "value": 553.5658227015607,
            "unit": "ns/iter",
            "extra": "iterations: 1262019\ncpu: 553.5147656255572 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/1000/1000",
            "value": 111569.63766933174,
            "unit": "ns/iter",
            "extra": "iterations: 6127\ncpu: 111564.68157336376 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/10000/10000",
            "value": 1644810.9765807947,
            "unit": "ns/iter",
            "extra": "iterations: 427\ncpu: 1644661.6252927405 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/100000/100000",
            "value": 28324950.076923236,
            "unit": "ns/iter",
            "extra": "iterations: 26\ncpu: 28322873.84615384 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/1000000/1000000",
            "value": 856154668.9999915,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 856018656.9999999 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/5/1000",
            "value": 52195.26859012446,
            "unit": "ns/iter",
            "extra": "iterations: 13448\ncpu: 52189.15295954785 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/1000/5",
            "value": 52409.49798537507,
            "unit": "ns/iter",
            "extra": "iterations: 13402\ncpu: 52404.505223101085 ns\nthreads: 1"
          },
          {
            "name": "BM_ParseFormula/formula_35_bytes",
            "value": 7601.02416237468,
            "unit": "ns/iter",
            "extra": "iterations: 91837\ncpu: 7599.999074447118 ns\nthreads: 1"
          },
          {
            "name": "BM_ParseFormula/formula_54741_bytes",
            "value": 1363615.516765303,
            "unit": "ns/iter",
            "extra": "iterations: 507\ncpu: 1363517.0986193297 ns\nthreads: 1"
          },
          {
            "name": "BM_ParseFormula/formula_6938400_bytes",
            "value": 964359594.0000012,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 964151784.0000002 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/uniform_random_3_sat_50vars_218clauses",
            "value": 1525339.1173913183,
            "unit": "ns/iter",
            "extra": "iterations: 460\ncpu: 1524868.6826086957 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/uniform_random_3_unsat_50vars_218clauses",
            "value": 2002264.7285714715,
            "unit": "ns/iter",
            "extra": "iterations: 350\ncpu: 2001827.234285715 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/uniform_random_3_sat_100vars_430clauses",
            "value": 2577569.327205901,
            "unit": "ns/iter",
            "extra": "iterations: 272\ncpu: 2577357.3970588227 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/uniform_random_3_unsat_100vars_430clauses",
            "value": 68470353.00000073,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 68466215.40000015 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/uniform_random_3_sat_250vars_1065clauses",
            "value": 51911638573.99999,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 51906066725 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_1_sat_9685vars_55870clauses",
            "value": 11836840104.999992,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 11833492912.000011 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_2_sat_2810vars_11683clauses",
            "value": 33270929.09523799,
            "unit": "ns/iter",
            "extra": "iterations: 21\ncpu: 33260280.52380942 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_4_sat_28161vars_139716clauses",
            "value": 99432637559.99998,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 99422482402.00002 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_5_sat_9396vars_41207clauses",
            "value": 1869937569.9999905,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 1869565099.9999883 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_7_sat_8710vars_39774clauses",
            "value": 213273690.66665366,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 213210893.00000533 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_13_sat_13215vars_65728clauses",
            "value": 148462878691,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 148452507319 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/logistics_a_sat_828vars_6718clauses",
            "value": 16065268.340909712,
            "unit": "ns/iter",
            "extra": "iterations: 44\ncpu: 16063916.113637334 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/logistics_b_sat_843vars_7301clauses",
            "value": 21908685.875001054,
            "unit": "ns/iter",
            "extra": "iterations: 32\ncpu: 21905748.249999136 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/logistics_c_sat_1141vars_10719clauses",
            "value": 64629916.18181749,
            "unit": "ns/iter",
            "extra": "iterations: 11\ncpu: 64626536.45454772 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/logistics_d_sat_4713vars_21991clauses",
            "value": 118975823.83333354,
            "unit": "ns/iter",
            "extra": "iterations: 6\ncpu: 118937389.4999998 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_anomaly_sat_48vars_261clauses",
            "value": 110601.16532448988,
            "unit": "ns/iter",
            "extra": "iterations: 6333\ncpu: 110590.72966997717 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_medium_sat_116vars_953clauses",
            "value": 427240.8746177481,
            "unit": "ns/iter",
            "extra": "iterations: 1635\ncpu: 427178.1785932847 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_huge_sat_459vars_7054clauses",
            "value": 3615476.4300515805,
            "unit": "ns/iter",
            "extra": "iterations: 193\ncpu: 3615012.8704663343 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_bw_large_a_sat_459vars_4675clauses",
            "value": 6410787.814814441,
            "unit": "ns/iter",
            "extra": "iterations: 108\ncpu: 6409650.935184859 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_bw_large_b_sat_1087vars_13772clauses",
            "value": 151336537.60000244,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 151321877.80000097 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_bw_large_c_sat_3016vars_50457clauses",
            "value": 16296474514.00001,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 16293586857.000036 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_1_2vars_3clauses",
            "value": 14921.01192218688,
            "unit": "ns/iter",
            "extra": "iterations: 47139\ncpu: 14919.488852117807 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_2_6vars_9clauses",
            "value": 19779.621552676297,
            "unit": "ns/iter",
            "extra": "iterations: 35281\ncpu: 19776.891499674253 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_3_12vars_22clauses",
            "value": 48105.40786038391,
            "unit": "ns/iter",
            "extra": "iterations: 14554\ncpu: 48099.429229077 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_4_20vars_45clauses",
            "value": 259833.8625046429,
            "unit": "ns/iter",
            "extra": "iterations: 2691\ncpu: 259824.30100334063 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_5_30vars_81clauses",
            "value": 1530471.4288840166,
            "unit": "ns/iter",
            "extra": "iterations: 457\ncpu: 1530337.8183807184 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_6_42vars_133clauses",
            "value": 7014722.199999711,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7014050.409999868 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_7_56vars_204clauses",
            "value": 30078950.26086979,
            "unit": "ns/iter",
            "extra": "iterations: 23\ncpu: 30076480.8695644 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_8_72vars_297clauses",
            "value": 150643656.3999955,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 150635900.6000025 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_9_90vars_415clauses",
            "value": 835048729.9999827,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 835020708.9999913 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_10_110vars_561clauses",
            "value": 5203763811.999977,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 5203384726.000025 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_11_132vars_738clauses",
            "value": 40807592672.999985,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 40804538433.00001 ns\nthreads: 1"
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
          "id": "2061512194de528c7ea9c6db0736b4d70ae4f805",
          "message": "Run subset of tests for debug mode",
          "timestamp": "2025-10-04T03:50:33+02:00",
          "tree_id": "58866b990801bd610e48eea28c0685982e5ae095",
          "url": "https://github.com/marcluque/YASER/commit/2061512194de528c7ea9c6db0736b4d70ae4f805"
        },
        "date": 1759543089954,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_Resolution/3/5",
            "value": 180.24782002451306,
            "unit": "ns/iter",
            "extra": "iterations: 3932269\ncpu: 180.24014659220927 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/10/10",
            "value": 559.1327078077442,
            "unit": "ns/iter",
            "extra": "iterations: 1261659\ncpu: 559.1007419595945 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/1000/1000",
            "value": 113176.91546053099,
            "unit": "ns/iter",
            "extra": "iterations: 6080\ncpu: 113173.77154605267 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/10000/10000",
            "value": 1772111.2405660436,
            "unit": "ns/iter",
            "extra": "iterations: 424\ncpu: 1772094.759433962 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/100000/100000",
            "value": 28657001.07692139,
            "unit": "ns/iter",
            "extra": "iterations: 26\ncpu: 28655698.73076924 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/1000000/1000000",
            "value": 891910665.0000117,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 891831784.9999999 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/5/1000",
            "value": 52818.073015638074,
            "unit": "ns/iter",
            "extra": "iterations: 13367\ncpu: 52807.28293558759 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/1000/5",
            "value": 52845.53680231103,
            "unit": "ns/iter",
            "extra": "iterations: 13491\ncpu: 52834.77792602473 ns\nthreads: 1"
          },
          {
            "name": "BM_ParseFormula/formula_35_bytes",
            "value": 7802.892223301484,
            "unit": "ns/iter",
            "extra": "iterations: 90604\ncpu: 7801.879696260655 ns\nthreads: 1"
          },
          {
            "name": "BM_ParseFormula/formula_54741_bytes",
            "value": 1376946.9516128376,
            "unit": "ns/iter",
            "extra": "iterations: 496\ncpu: 1376926.9758064523 ns\nthreads: 1"
          },
          {
            "name": "BM_ParseFormula/formula_6938400_bytes",
            "value": 953068138.9999813,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 952816015.0000015 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/uniform_random_3_sat_50vars_218clauses",
            "value": 1555825.5879733185,
            "unit": "ns/iter",
            "extra": "iterations: 449\ncpu: 1555726.9999999977 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/uniform_random_3_unsat_50vars_218clauses",
            "value": 2035015.1253644666,
            "unit": "ns/iter",
            "extra": "iterations: 343\ncpu: 2034691.8046647192 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/uniform_random_3_sat_100vars_430clauses",
            "value": 2571969.7343174377,
            "unit": "ns/iter",
            "extra": "iterations: 271\ncpu: 2571645.0036900397 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/uniform_random_3_unsat_100vars_430clauses",
            "value": 68271126.00000192,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 68268962.29999998 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/uniform_random_3_sat_250vars_1065clauses",
            "value": 49914789126.000015,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 49908592907 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_1_sat_9685vars_55870clauses",
            "value": 11794340230.999979,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 11791640819.000002 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_2_sat_2810vars_11683clauses",
            "value": 32823263.1428564,
            "unit": "ns/iter",
            "extra": "iterations: 21\ncpu: 32820049.33333364 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_4_sat_28161vars_139716clauses",
            "value": 99243706968.00003,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 99238622850.00002 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_5_sat_9396vars_41207clauses",
            "value": 1849451389.0000234,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 1849326737.0000126 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_7_sat_8710vars_39774clauses",
            "value": 211147646.6666697,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 211069001.00000796 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_13_sat_13215vars_65728clauses",
            "value": 148256627905.99994,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 148249131867 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/logistics_a_sat_828vars_6718clauses",
            "value": 15993614.67441837,
            "unit": "ns/iter",
            "extra": "iterations: 43\ncpu: 15992804.023255758 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/logistics_b_sat_843vars_7301clauses",
            "value": 21798224.468749795,
            "unit": "ns/iter",
            "extra": "iterations: 32\ncpu: 21797249.000000462 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/logistics_c_sat_1141vars_10719clauses",
            "value": 64329371.27273032,
            "unit": "ns/iter",
            "extra": "iterations: 11\ncpu: 64325161.54545324 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/logistics_d_sat_4713vars_21991clauses",
            "value": 118008439.99998277,
            "unit": "ns/iter",
            "extra": "iterations: 6\ncpu: 117999164.16667126 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_anomaly_sat_48vars_261clauses",
            "value": 109930.41346608255,
            "unit": "ns/iter",
            "extra": "iterations: 6327\ncpu: 109908.46846846702 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_medium_sat_116vars_953clauses",
            "value": 426718.4151403692,
            "unit": "ns/iter",
            "extra": "iterations: 1638\ncpu: 426710.1056166378 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_huge_sat_459vars_7054clauses",
            "value": 3609050.927835109,
            "unit": "ns/iter",
            "extra": "iterations: 194\ncpu: 3608716.9432988437 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_bw_large_a_sat_459vars_4675clauses",
            "value": 6383853.427272161,
            "unit": "ns/iter",
            "extra": "iterations: 110\ncpu: 6383648.336363153 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_bw_large_b_sat_1087vars_13772clauses",
            "value": 150671265.00000542,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 150659808.3999961 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_bw_large_c_sat_3016vars_50457clauses",
            "value": 16183148936.99994,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 16182487300.99998 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_1_2vars_3clauses",
            "value": 14772.925817205816,
            "unit": "ns/iter",
            "extra": "iterations: 47693\ncpu: 14772.66925963905 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_2_6vars_9clauses",
            "value": 19627.81494781803,
            "unit": "ns/iter",
            "extra": "iterations: 35644\ncpu: 19626.35501066231 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_3_12vars_22clauses",
            "value": 48077.29248064122,
            "unit": "ns/iter",
            "extra": "iterations: 14589\ncpu: 48075.44458153359 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_4_20vars_45clauses",
            "value": 259592.80252884387,
            "unit": "ns/iter",
            "extra": "iterations: 2689\ncpu: 259578.38564523097 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_5_30vars_81clauses",
            "value": 1533890.8820961094,
            "unit": "ns/iter",
            "extra": "iterations: 458\ncpu: 1533869.1157205233 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_6_42vars_133clauses",
            "value": 7028284.839999515,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7027987.7299998365 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_7_56vars_204clauses",
            "value": 30103671.086956874,
            "unit": "ns/iter",
            "extra": "iterations: 23\ncpu: 30102456.913042534 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_8_72vars_297clauses",
            "value": 149550978.3999978,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 149542802.40000343 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_9_90vars_415clauses",
            "value": 831867837.9999938,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 831839073.000026 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_10_110vars_561clauses",
            "value": 5165497555.000002,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 5165148548.000048 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_11_132vars_738clauses",
            "value": 40165218550.999954,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 40160790868.999985 ns\nthreads: 1"
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
          "id": "5319b0ec15e47a93159b2f3c440946bfe874d5f5",
          "message": "Add certificate verification",
          "timestamp": "2025-10-04T04:09:30+02:00",
          "tree_id": "444937cb43fc3292a7ced0816c44171b4f907cb6",
          "url": "https://github.com/marcluque/YASER/commit/5319b0ec15e47a93159b2f3c440946bfe874d5f5"
        },
        "date": 1759544234175,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_Resolution/3/5",
            "value": 184.08772479571513,
            "unit": "ns/iter",
            "extra": "iterations: 3842266\ncpu: 184.08068754219516 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/10/10",
            "value": 555.7731627375221,
            "unit": "ns/iter",
            "extra": "iterations: 1251223\ncpu: 555.7128049915963 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/1000/1000",
            "value": 111100.35731647706,
            "unit": "ns/iter",
            "extra": "iterations: 6171\ncpu: 111088.0751904067 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/10000/10000",
            "value": 1649525.997647074,
            "unit": "ns/iter",
            "extra": "iterations: 425\ncpu: 1649214.3199999998 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/100000/100000",
            "value": 29469780.11999818,
            "unit": "ns/iter",
            "extra": "iterations: 25\ncpu: 29465260.959999993 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/1000000/1000000",
            "value": 1103896874.0001564,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 1103769992.0000002 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/5/1000",
            "value": 52120.032389262415,
            "unit": "ns/iter",
            "extra": "iterations: 13523\ncpu: 52111.3968054426 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/1000/5",
            "value": 51794.14481685522,
            "unit": "ns/iter",
            "extra": "iterations: 13486\ncpu: 51785.25915764497 ns\nthreads: 1"
          },
          {
            "name": "BM_ParseFormula/formula_35_bytes",
            "value": 7659.593950806474,
            "unit": "ns/iter",
            "extra": "iterations: 91351\ncpu: 7657.889404604218 ns\nthreads: 1"
          },
          {
            "name": "BM_ParseFormula/formula_54741_bytes",
            "value": 1337421.4723323346,
            "unit": "ns/iter",
            "extra": "iterations: 506\ncpu: 1337268.9664031635 ns\nthreads: 1"
          },
          {
            "name": "BM_ParseFormula/formula_6938400_bytes",
            "value": 968082139.9999787,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 967926727 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/uniform_random_3_sat_50vars_218clauses",
            "value": 1535564.953642369,
            "unit": "ns/iter",
            "extra": "iterations: 453\ncpu: 1535377.4083885208 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/uniform_random_3_unsat_50vars_218clauses",
            "value": 2022550.0029236658,
            "unit": "ns/iter",
            "extra": "iterations: 342\ncpu: 2022284.991228073 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/uniform_random_3_sat_100vars_430clauses",
            "value": 2592778.4555556676,
            "unit": "ns/iter",
            "extra": "iterations: 270\ncpu: 2592501.759259261 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/uniform_random_3_unsat_100vars_430clauses",
            "value": 68816485.59999576,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 68808882.70000014 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/uniform_random_3_sat_250vars_1065clauses",
            "value": 51587294234.99995,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 51580227598.00001 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_1_sat_9685vars_55870clauses",
            "value": 11936139412.000103,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 11932831007.000004 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_2_sat_2810vars_11683clauses",
            "value": 33674106.38096165,
            "unit": "ns/iter",
            "extra": "iterations: 21\ncpu: 33665458.3809526 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_4_sat_28161vars_139716clauses",
            "value": 100012496138.99995,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 100002284560.99998 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_5_sat_9396vars_41207clauses",
            "value": 1910264389.0000763,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 1910040241.0000186 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_7_sat_8710vars_39774clauses",
            "value": 219020243.99999693,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 218965296.66666234 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_13_sat_13215vars_65728clauses",
            "value": 149564261640.00003,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 149547948224.99997 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/logistics_a_sat_828vars_6718clauses",
            "value": 16566179.571430525,
            "unit": "ns/iter",
            "extra": "iterations: 42\ncpu: 16564387.238095907 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/logistics_b_sat_843vars_7301clauses",
            "value": 22384132.967743192,
            "unit": "ns/iter",
            "extra": "iterations: 31\ncpu: 22380451.548386764 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/logistics_c_sat_1141vars_10719clauses",
            "value": 65843676.90908783,
            "unit": "ns/iter",
            "extra": "iterations: 11\ncpu: 65834842.2727241 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/logistics_d_sat_4713vars_21991clauses",
            "value": 121448554.00000173,
            "unit": "ns/iter",
            "extra": "iterations: 6\ncpu: 121419852.1666674 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_anomaly_sat_48vars_261clauses",
            "value": 109520.82862493065,
            "unit": "ns/iter",
            "extra": "iterations: 6407\ncpu: 109504.44763539612 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_medium_sat_116vars_953clauses",
            "value": 431681.1541795951,
            "unit": "ns/iter",
            "extra": "iterations: 1615\ncpu: 431659.0018575759 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_huge_sat_459vars_7054clauses",
            "value": 3647606.2968754754,
            "unit": "ns/iter",
            "extra": "iterations: 192\ncpu: 3647455.2447917457 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_bw_large_a_sat_459vars_4675clauses",
            "value": 6461605.601851227,
            "unit": "ns/iter",
            "extra": "iterations: 108\ncpu: 6461132.444444375 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_bw_large_b_sat_1087vars_13772clauses",
            "value": 152210719.40000004,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 152191578.80000013 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_bw_large_c_sat_3016vars_50457clauses",
            "value": 16562796119.00004,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 16561486370.000011 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_1_2vars_3clauses",
            "value": 14778.67306307699,
            "unit": "ns/iter",
            "extra": "iterations: 47214\ncpu: 14777.7183038936 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_2_6vars_9clauses",
            "value": 19715.826705585714,
            "unit": "ns/iter",
            "extra": "iterations: 35633\ncpu: 19714.959391575372 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_3_12vars_22clauses",
            "value": 48117.77199146936,
            "unit": "ns/iter",
            "extra": "iterations: 14517\ncpu: 48113.143142524335 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_4_20vars_45clauses",
            "value": 262898.5548871844,
            "unit": "ns/iter",
            "extra": "iterations: 2660\ncpu: 262887.58796994 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_5_30vars_81clauses",
            "value": 1549077.5951328806,
            "unit": "ns/iter",
            "extra": "iterations: 452\ncpu: 1548972.9402654534 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_6_42vars_133clauses",
            "value": 7075018.484850473,
            "unit": "ns/iter",
            "extra": "iterations: 99\ncpu: 7074399.151514916 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_7_56vars_204clauses",
            "value": 30304811.8695662,
            "unit": "ns/iter",
            "extra": "iterations: 23\ncpu: 30302071.173912775 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_8_72vars_297clauses",
            "value": 151203202.40002912,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 151189764.3999987 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_9_90vars_415clauses",
            "value": 842748777.9999865,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 842665790.0000123 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_10_110vars_561clauses",
            "value": 5274112010.999943,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 5273690665.000004 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_11_132vars_738clauses",
            "value": 42479266724.999886,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 42472626553.999985 ns\nthreads: 1"
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
          "id": "6acb3fda48782a775ba2953d06b3195fc3e319da",
          "message": "Add certificate verification for all tests",
          "timestamp": "2025-10-04T04:32:57+02:00",
          "tree_id": "d0cf83467dd400bc5235ae19826e9a59825447fb",
          "url": "https://github.com/marcluque/YASER/commit/6acb3fda48782a775ba2953d06b3195fc3e319da"
        },
        "date": 1759545638721,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_Resolution/3/5",
            "value": 177.04651015945515,
            "unit": "ns/iter",
            "extra": "iterations: 3911726\ncpu: 177.03074141696018 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/10/10",
            "value": 556.8632279172617,
            "unit": "ns/iter",
            "extra": "iterations: 1261098\ncpu: 556.8170348378953 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/1000/1000",
            "value": 112622.16078752997,
            "unit": "ns/iter",
            "extra": "iterations: 6095\ncpu: 112594.53322395407 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/10000/10000",
            "value": 1656196.4498777601,
            "unit": "ns/iter",
            "extra": "iterations: 409\ncpu: 1655982.897310514 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/100000/100000",
            "value": 28084154.307692282,
            "unit": "ns/iter",
            "extra": "iterations: 26\ncpu: 28081397.038461547 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/1000000/1000000",
            "value": 1105160917.0000062,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 1105083823.0000002 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/5/1000",
            "value": 51942.56923191125,
            "unit": "ns/iter",
            "extra": "iterations: 13462\ncpu: 51937.73896894966 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/1000/5",
            "value": 51651.60555720999,
            "unit": "ns/iter",
            "extra": "iterations: 13424\ncpu: 51643.76199344461 ns\nthreads: 1"
          },
          {
            "name": "BM_ParseFormula/formula_35_bytes",
            "value": 7613.015291051272,
            "unit": "ns/iter",
            "extra": "iterations: 92080\ncpu: 7610.633633796695 ns\nthreads: 1"
          },
          {
            "name": "BM_ParseFormula/formula_54741_bytes",
            "value": 1357860.9440154491,
            "unit": "ns/iter",
            "extra": "iterations: 518\ncpu: 1357740.7644787638 ns\nthreads: 1"
          },
          {
            "name": "BM_ParseFormula/formula_6938400_bytes",
            "value": 980725186.0000008,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 980553570.9999998 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/uniform_random_3_sat_50vars_218clauses",
            "value": 1533780.7472766736,
            "unit": "ns/iter",
            "extra": "iterations: 459\ncpu: 1530308.749455338 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/uniform_random_3_unsat_50vars_218clauses",
            "value": 2009498.6446991598,
            "unit": "ns/iter",
            "extra": "iterations: 349\ncpu: 2009232.3266475624 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/uniform_random_3_sat_100vars_430clauses",
            "value": 2589671.2066420596,
            "unit": "ns/iter",
            "extra": "iterations: 271\ncpu: 2589348.5830258275 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/uniform_random_3_unsat_100vars_430clauses",
            "value": 68500015.70000046,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 68493505.30000003 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/uniform_random_3_sat_250vars_1065clauses",
            "value": 51402851780.00001,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 51392192006 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_1_sat_9685vars_55870clauses",
            "value": 11915917390.000004,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 11914442664.999996 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_2_sat_2810vars_11683clauses",
            "value": 34174945.15000072,
            "unit": "ns/iter",
            "extra": "iterations: 20\ncpu: 34170072.50000025 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_4_sat_28161vars_139716clauses",
            "value": 99522332716,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 99515317085.99998 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_5_sat_9396vars_41207clauses",
            "value": 1851197112.9999835,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 1851092713.000014 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_7_sat_8710vars_39774clauses",
            "value": 214388936.00000596,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 214288829.66666642 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_13_sat_13215vars_65728clauses",
            "value": 148833238446,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 148820153563.99997 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/logistics_a_sat_828vars_6718clauses",
            "value": 16272774.279069953,
            "unit": "ns/iter",
            "extra": "iterations: 43\ncpu: 16271399.813953139 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/logistics_b_sat_843vars_7301clauses",
            "value": 22059647.687498797,
            "unit": "ns/iter",
            "extra": "iterations: 32\ncpu: 22056022.124999687 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/logistics_c_sat_1141vars_10719clauses",
            "value": 65555772.727272846,
            "unit": "ns/iter",
            "extra": "iterations: 11\ncpu: 65553001.2727261 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/logistics_d_sat_4713vars_21991clauses",
            "value": 120958641.83334015,
            "unit": "ns/iter",
            "extra": "iterations: 6\ncpu: 120941130.33332594 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_anomaly_sat_48vars_261clauses",
            "value": 110318.20708103731,
            "unit": "ns/iter",
            "extra": "iterations: 6355\ncpu: 110280.83068450425 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_medium_sat_116vars_953clauses",
            "value": 427565.7933579245,
            "unit": "ns/iter",
            "extra": "iterations: 1626\ncpu: 427516.95940960845 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_huge_sat_459vars_7054clauses",
            "value": 3638275.2604167126,
            "unit": "ns/iter",
            "extra": "iterations: 192\ncpu: 3638051.3645832837 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_bw_large_a_sat_459vars_4675clauses",
            "value": 6401909.201834861,
            "unit": "ns/iter",
            "extra": "iterations: 109\ncpu: 6401191.431192428 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_bw_large_b_sat_1087vars_13772clauses",
            "value": 151555883.59999683,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 151543272.20000142 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_bw_large_c_sat_3016vars_50457clauses",
            "value": 16252869747.000034,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 16251365394.999994 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_1_2vars_3clauses",
            "value": 14707.241821884958,
            "unit": "ns/iter",
            "extra": "iterations: 47138\ncpu: 14705.560481989274 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_2_6vars_9clauses",
            "value": 19774.920424328153,
            "unit": "ns/iter",
            "extra": "iterations: 35350\ncpu: 19773.770014144065 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_3_12vars_22clauses",
            "value": 48140.77055830372,
            "unit": "ns/iter",
            "extra": "iterations: 14544\ncpu: 48134.32508250755 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_4_20vars_45clauses",
            "value": 260708.99480135628,
            "unit": "ns/iter",
            "extra": "iterations: 2693\ncpu: 260695.53026364424 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_5_30vars_81clauses",
            "value": 1537178.6529680246,
            "unit": "ns/iter",
            "extra": "iterations: 438\ncpu: 1537074.863013632 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_6_42vars_133clauses",
            "value": 7029297.3737374,
            "unit": "ns/iter",
            "extra": "iterations: 99\ncpu: 7029086.474747169 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_7_56vars_204clauses",
            "value": 30150060.60869659,
            "unit": "ns/iter",
            "extra": "iterations: 23\ncpu: 30147518.347825512 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_8_72vars_297clauses",
            "value": 150779626.19999427,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 150769914.80000287 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_9_90vars_415clauses",
            "value": 834902432.9999679,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 834843651.9999609 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_10_110vars_561clauses",
            "value": 5198988409.000037,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 5198662619.999993 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_11_132vars_738clauses",
            "value": 41131418055.99997,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 41126629824.999954 ns\nthreads: 1"
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
          "id": "c554c63a2580fbab745d80e4d72fab8feebcb649",
          "message": "Remove hardcoded version number for release workflow",
          "timestamp": "2025-10-04T04:35:33+02:00",
          "tree_id": "c70ca8d9906f5796f7c0c69bfe1949b132466ce8",
          "url": "https://github.com/marcluque/YASER/commit/c554c63a2580fbab745d80e4d72fab8feebcb649"
        },
        "date": 1759545778648,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_Resolution/3/5",
            "value": 181.21724005234216,
            "unit": "ns/iter",
            "extra": "iterations: 3957691\ncpu: 181.20785326595734 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/10/10",
            "value": 556.6871035957552,
            "unit": "ns/iter",
            "extra": "iterations: 1262127\ncpu: 556.6001812812816 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/1000/1000",
            "value": 111550.14783031044,
            "unit": "ns/iter",
            "extra": "iterations: 6176\ncpu: 111543.41580310882 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/10000/10000",
            "value": 1752444.6721311514,
            "unit": "ns/iter",
            "extra": "iterations: 427\ncpu: 1752342.0163934436 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/100000/100000",
            "value": 28196835.269230727,
            "unit": "ns/iter",
            "extra": "iterations: 26\ncpu: 28195045.730769243 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/1000000/1000000",
            "value": 851681020.9999974,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 851586584.0000005 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/5/1000",
            "value": 52092.02311542992,
            "unit": "ns/iter",
            "extra": "iterations: 13584\ncpu: 52086.45605123676 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/1000/5",
            "value": 52069.81462140961,
            "unit": "ns/iter",
            "extra": "iterations: 13405\ncpu: 52056.81357702349 ns\nthreads: 1"
          },
          {
            "name": "BM_ParseFormula/formula_35_bytes",
            "value": 7662.998919320145,
            "unit": "ns/iter",
            "extra": "iterations: 91609\ncpu: 7662.6536148195055 ns\nthreads: 1"
          },
          {
            "name": "BM_ParseFormula/formula_54741_bytes",
            "value": 1359402.5405405364,
            "unit": "ns/iter",
            "extra": "iterations: 518\ncpu: 1359328.308880308 ns\nthreads: 1"
          },
          {
            "name": "BM_ParseFormula/formula_6938400_bytes",
            "value": 947305522.9999971,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 946556516.0000011 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/uniform_random_3_sat_50vars_218clauses",
            "value": 1522230.7139737888,
            "unit": "ns/iter",
            "extra": "iterations: 458\ncpu: 1521895.2292576397 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/uniform_random_3_unsat_50vars_218clauses",
            "value": 2000262.0971428494,
            "unit": "ns/iter",
            "extra": "iterations: 350\ncpu: 1999809.7628571442 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/uniform_random_3_sat_100vars_430clauses",
            "value": 2574885.4705882226,
            "unit": "ns/iter",
            "extra": "iterations: 272\ncpu: 2574357.724264711 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/uniform_random_3_unsat_100vars_430clauses",
            "value": 68520446.40000089,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 68515672.60000007 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/uniform_random_3_sat_250vars_1065clauses",
            "value": 51729081226.00001,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 51724450299 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_1_sat_9685vars_55870clauses",
            "value": 11920889719.99999,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 11919150658.999996 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_2_sat_2810vars_11683clauses",
            "value": 33189633.999999806,
            "unit": "ns/iter",
            "extra": "iterations: 21\ncpu: 33188092.80952383 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_4_sat_28161vars_139716clauses",
            "value": 100033675722.99998,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 100025023233.00002 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_5_sat_9396vars_41207clauses",
            "value": 1831648074.9999754,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 1831495125.999993 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_7_sat_8710vars_39774clauses",
            "value": 206673298.66666743,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 206665964.66666457 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_13_sat_13215vars_65728clauses",
            "value": 149537859002.00003,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 149529589545.99997 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/logistics_a_sat_828vars_6718clauses",
            "value": 16002570.272727273,
            "unit": "ns/iter",
            "extra": "iterations: 44\ncpu: 16001149.340908682 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/logistics_b_sat_843vars_7301clauses",
            "value": 21727358.78124854,
            "unit": "ns/iter",
            "extra": "iterations: 32\ncpu: 21727305.06249998 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/logistics_c_sat_1141vars_10719clauses",
            "value": 64723912.45454839,
            "unit": "ns/iter",
            "extra": "iterations: 11\ncpu: 64720995.36363306 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/logistics_d_sat_4713vars_21991clauses",
            "value": 117092948.00000219,
            "unit": "ns/iter",
            "extra": "iterations: 6\ncpu: 117087921.16667156 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_anomaly_sat_48vars_261clauses",
            "value": 109934.96628859175,
            "unit": "ns/iter",
            "extra": "iterations: 6348\ncpu: 109903.33585381682 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_medium_sat_116vars_953clauses",
            "value": 426077.47490818775,
            "unit": "ns/iter",
            "extra": "iterations: 1634\ncpu: 426062.6395349021 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_huge_sat_459vars_7054clauses",
            "value": 3593638.804123732,
            "unit": "ns/iter",
            "extra": "iterations: 194\ncpu: 3593483.221649616 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_bw_large_a_sat_459vars_4675clauses",
            "value": 6372134.293577792,
            "unit": "ns/iter",
            "extra": "iterations: 109\ncpu: 6371604.119266033 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_bw_large_b_sat_1087vars_13772clauses",
            "value": 150814004.5999994,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 150804068.39999795 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_bw_large_c_sat_3016vars_50457clauses",
            "value": 16355549230.999998,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 16354602491.99997 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_1_2vars_3clauses",
            "value": 14807.485985656625,
            "unit": "ns/iter",
            "extra": "iterations: 47273\ncpu: 14806.579294735173 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_2_6vars_9clauses",
            "value": 19779.845036183182,
            "unit": "ns/iter",
            "extra": "iterations: 35376\ncpu: 19778.721647444396 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_3_12vars_22clauses",
            "value": 48041.66397315976,
            "unit": "ns/iter",
            "extra": "iterations: 14603\ncpu: 48040.458672877314 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_4_20vars_45clauses",
            "value": 261653.14291003844,
            "unit": "ns/iter",
            "extra": "iterations: 2701\ncpu: 261639.27952609461 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_5_30vars_81clauses",
            "value": 1528373.2407003061,
            "unit": "ns/iter",
            "extra": "iterations: 457\ncpu: 1528325.004376351 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_6_42vars_133clauses",
            "value": 7027324.969999995,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7026975.850000099 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_7_56vars_204clauses",
            "value": 30137254.04347813,
            "unit": "ns/iter",
            "extra": "iterations: 23\ncpu: 30134943.043477684 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_8_72vars_297clauses",
            "value": 149598143.60000792,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 149594179.99999687 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_9_90vars_415clauses",
            "value": 819714478.9999697,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 819650443.0000005 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_10_110vars_561clauses",
            "value": 4981595874.999982,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 4981333661.999997 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_11_132vars_738clauses",
            "value": 38007071521,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 38004354448.000015 ns\nthreads: 1"
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
          "id": "6198fdb95b6788c7b32bb43bd987b785130b3794",
          "message": "Use correct path for certificate verification step",
          "timestamp": "2025-10-04T04:36:53+02:00",
          "tree_id": "c7b32effb80513d1a0d7194667d57a93014a6a9f",
          "url": "https://github.com/marcluque/YASER/commit/6198fdb95b6788c7b32bb43bd987b785130b3794"
        },
        "date": 1759545856056,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_Resolution/3/5",
            "value": 177.46759311335524,
            "unit": "ns/iter",
            "extra": "iterations: 3938345\ncpu: 177.45992060116626 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/10/10",
            "value": 557.4690969103792,
            "unit": "ns/iter",
            "extra": "iterations: 1256088\ncpu: 557.4556352739617 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/1000/1000",
            "value": 112461.52766863072,
            "unit": "ns/iter",
            "extra": "iterations: 6108\ncpu: 112456.53912901113 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/10000/10000",
            "value": 1762497.8829040157,
            "unit": "ns/iter",
            "extra": "iterations: 427\ncpu: 1762462.2927400474 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/100000/100000",
            "value": 28629808.119999323,
            "unit": "ns/iter",
            "extra": "iterations: 25\ncpu: 28627806.640000004 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/1000000/1000000",
            "value": 867502387.0000018,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 867453713.9999998 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/5/1000",
            "value": 52673.25775062433,
            "unit": "ns/iter",
            "extra": "iterations: 13257\ncpu: 52664.78343516629 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/1000/5",
            "value": 52267.39216152032,
            "unit": "ns/iter",
            "extra": "iterations: 12630\ncpu: 52264.67395091051 ns\nthreads: 1"
          },
          {
            "name": "BM_ParseFormula/formula_35_bytes",
            "value": 7609.290865752017,
            "unit": "ns/iter",
            "extra": "iterations: 91458\ncpu: 7609.012497539853 ns\nthreads: 1"
          },
          {
            "name": "BM_ParseFormula/formula_54741_bytes",
            "value": 1339015.1503906988,
            "unit": "ns/iter",
            "extra": "iterations: 512\ncpu: 1338880.8027343743 ns\nthreads: 1"
          },
          {
            "name": "BM_ParseFormula/formula_6938400_bytes",
            "value": 920036181.0000004,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 919926464.9999996 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/uniform_random_3_sat_50vars_218clauses",
            "value": 1527284.5130434243,
            "unit": "ns/iter",
            "extra": "iterations: 460\ncpu: 1527008.8673913043 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/uniform_random_3_unsat_50vars_218clauses",
            "value": 2004850.707736324,
            "unit": "ns/iter",
            "extra": "iterations: 349\ncpu: 2004424.2263610328 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/uniform_random_3_sat_100vars_430clauses",
            "value": 2579390.5350551927,
            "unit": "ns/iter",
            "extra": "iterations: 271\ncpu: 2579095.5682656867 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/uniform_random_3_unsat_100vars_430clauses",
            "value": 68517784.10000406,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 68508360.50000009 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/uniform_random_3_sat_250vars_1065clauses",
            "value": 50113517442.000046,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 50110575481.00001 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_1_sat_9685vars_55870clauses",
            "value": 11819967921,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 11819214803.000008 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_2_sat_2810vars_11683clauses",
            "value": 33060930.761902936,
            "unit": "ns/iter",
            "extra": "iterations: 21\ncpu: 33058394.619047925 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_4_sat_28161vars_139716clauses",
            "value": 99303643014.99998,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 99296981902.99998 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_5_sat_9396vars_41207clauses",
            "value": 1832088790.9999897,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 1831967422.0000196 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_7_sat_8710vars_39774clauses",
            "value": 207513895.66667438,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 207507374.0000069 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_13_sat_13215vars_65728clauses",
            "value": 148077006519,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 148069533751 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/logistics_a_sat_828vars_6718clauses",
            "value": 15987698.47727381,
            "unit": "ns/iter",
            "extra": "iterations: 44\ncpu: 15985339.250000471 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/logistics_b_sat_843vars_7301clauses",
            "value": 21777481.46874947,
            "unit": "ns/iter",
            "extra": "iterations: 32\ncpu: 21775949.499998502 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/logistics_c_sat_1141vars_10719clauses",
            "value": 64623895.090914056,
            "unit": "ns/iter",
            "extra": "iterations: 11\ncpu: 64615825.727271795 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/logistics_d_sat_4713vars_21991clauses",
            "value": 117240068.3333308,
            "unit": "ns/iter",
            "extra": "iterations: 6\ncpu: 117228339.16666293 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_anomaly_sat_48vars_261clauses",
            "value": 111142.94204276931,
            "unit": "ns/iter",
            "extra": "iterations: 6315\ncpu: 111118.88171021671 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_medium_sat_116vars_953clauses",
            "value": 430809.58395060763,
            "unit": "ns/iter",
            "extra": "iterations: 1620\ncpu: 430771.54814816255 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_huge_sat_459vars_7054clauses",
            "value": 3632531.1502595576,
            "unit": "ns/iter",
            "extra": "iterations: 193\ncpu: 3632183.41968926 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_bw_large_a_sat_459vars_4675clauses",
            "value": 6419588.3611104265,
            "unit": "ns/iter",
            "extra": "iterations: 108\ncpu: 6419187.777778061 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_bw_large_b_sat_1087vars_13772clauses",
            "value": 150523374.79999095,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 150517211.2000082 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_bw_large_c_sat_3016vars_50457clauses",
            "value": 16180249044.999983,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 16179228821.000038 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_1_2vars_3clauses",
            "value": 14658.081952157341,
            "unit": "ns/iter",
            "extra": "iterations: 47906\ncpu: 14657.10501816049 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_2_6vars_9clauses",
            "value": 19524.073759023926,
            "unit": "ns/iter",
            "extra": "iterations: 35738\ncpu: 19523.711875314886 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_3_12vars_22clauses",
            "value": 48005.66886145001,
            "unit": "ns/iter",
            "extra": "iterations: 14580\ncpu: 48002.724965703965 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_4_20vars_45clauses",
            "value": 260092.52225521905,
            "unit": "ns/iter",
            "extra": "iterations: 2696\ncpu: 260088.25370920388 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_5_30vars_81clauses",
            "value": 1538073.2149123477,
            "unit": "ns/iter",
            "extra": "iterations: 456\ncpu: 1538018.6162281306 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_6_42vars_133clauses",
            "value": 7033674.689999998,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7033503.229999951 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_7_56vars_204clauses",
            "value": 30125306.782605074,
            "unit": "ns/iter",
            "extra": "iterations: 23\ncpu: 30122406.86956355 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_8_72vars_297clauses",
            "value": 150917278.60001355,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 150907355.59999758 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_9_90vars_415clauses",
            "value": 921103270.9999927,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 921035149.999966 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_10_110vars_561clauses",
            "value": 5065818349.999972,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 5065521775.999969 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_11_132vars_738clauses",
            "value": 38272486716,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 38270266558 ns\nthreads: 1"
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
          "id": "918f8ad0c126e32af179e461821990f7134ab288",
          "message": "Exclude pigeonhole N>=8 from debug tests",
          "timestamp": "2025-10-04T05:06:11+02:00",
          "tree_id": "e54cb263af0b5d1d43702df373617b285ba62fac",
          "url": "https://github.com/marcluque/YASER/commit/918f8ad0c126e32af179e461821990f7134ab288"
        },
        "date": 1759547638245,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_Resolution/3/5",
            "value": 175.3675852795249,
            "unit": "ns/iter",
            "extra": "iterations: 3965254\ncpu: 175.33433797683583 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/10/10",
            "value": 569.3781843707511,
            "unit": "ns/iter",
            "extra": "iterations: 1266459\ncpu: 569.3211394920799 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/1000/1000",
            "value": 111377.01832036201,
            "unit": "ns/iter",
            "extra": "iterations: 6168\ncpu: 111365.47714007784 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/10000/10000",
            "value": 1767728.3791469268,
            "unit": "ns/iter",
            "extra": "iterations: 422\ncpu: 1767469.5710900477 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/100000/100000",
            "value": 31723730.71428562,
            "unit": "ns/iter",
            "extra": "iterations: 21\ncpu: 31720537.61904762 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/1000000/1000000",
            "value": 1298019207.9999995,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 1297814110 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/5/1000",
            "value": 52817.06558221839,
            "unit": "ns/iter",
            "extra": "iterations: 13586\ncpu: 52796.14625349619 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/1000/5",
            "value": 52001.716264788396,
            "unit": "ns/iter",
            "extra": "iterations: 13354\ncpu: 51993.492586490924 ns\nthreads: 1"
          },
          {
            "name": "BM_ParseFormula/formula_35_bytes",
            "value": 7609.028933407193,
            "unit": "ns/iter",
            "extra": "iterations: 91797\ncpu: 7605.975489395077 ns\nthreads: 1"
          },
          {
            "name": "BM_ParseFormula/formula_54741_bytes",
            "value": 1360228.1656804914,
            "unit": "ns/iter",
            "extra": "iterations: 507\ncpu: 1359748.8224852046 ns\nthreads: 1"
          },
          {
            "name": "BM_ParseFormula/formula_6938400_bytes",
            "value": 945659742.9999931,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 945509114 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/uniform_random_3_sat_50vars_218clauses",
            "value": 1525758.410377366,
            "unit": "ns/iter",
            "extra": "iterations: 424\ncpu: 1525303.2216981135 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/uniform_random_3_unsat_50vars_218clauses",
            "value": 2011061.7665706496,
            "unit": "ns/iter",
            "extra": "iterations: 347\ncpu: 2010519.4812680106 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/uniform_random_3_sat_100vars_430clauses",
            "value": 2591341.3394834264,
            "unit": "ns/iter",
            "extra": "iterations: 271\ncpu: 2590884.2656826586 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/uniform_random_3_unsat_100vars_430clauses",
            "value": 68559475.60000004,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 68548594.20000014 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/uniform_random_3_sat_250vars_1065clauses",
            "value": 63341289700.00001,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 63333742485.99999 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_1_sat_9685vars_55870clauses",
            "value": 12138971807.00002,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 12137581449.00001 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_2_sat_2810vars_11683clauses",
            "value": 33980691.47619069,
            "unit": "ns/iter",
            "extra": "iterations: 21\ncpu: 33974794.57142828 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_4_sat_28161vars_139716clauses",
            "value": 100206850320.99998,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 100197696910 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_5_sat_9396vars_41207clauses",
            "value": 1895379957.0000455,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 1895164412.000014 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_7_sat_8710vars_39774clauses",
            "value": 210324785.0000116,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 210298105.00000206 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_13_sat_13215vars_65728clauses",
            "value": 149524823489.00003,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 149510499636.99997 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/logistics_a_sat_828vars_6718clauses",
            "value": 16706076.642855179,
            "unit": "ns/iter",
            "extra": "iterations: 42\ncpu: 16703325.119047057 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/logistics_b_sat_843vars_7301clauses",
            "value": 22281711.8333334,
            "unit": "ns/iter",
            "extra": "iterations: 30\ncpu: 22280220.433333397 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/logistics_c_sat_1141vars_10719clauses",
            "value": 65686478.090914205,
            "unit": "ns/iter",
            "extra": "iterations: 11\ncpu: 65675929.36363553 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/logistics_d_sat_4713vars_21991clauses",
            "value": 119716761.99999593,
            "unit": "ns/iter",
            "extra": "iterations: 6\ncpu: 119678734.50000374 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_anomaly_sat_48vars_261clauses",
            "value": 114840.9621000752,
            "unit": "ns/iter",
            "extra": "iterations: 6095\ncpu: 114806.5368334745 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_medium_sat_116vars_953clauses",
            "value": 434738.9317194529,
            "unit": "ns/iter",
            "extra": "iterations: 1611\ncpu: 434675.46058349183 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_huge_sat_459vars_7054clauses",
            "value": 3691040.6216219524,
            "unit": "ns/iter",
            "extra": "iterations: 185\ncpu: 3690699.3189186445 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_bw_large_a_sat_459vars_4675clauses",
            "value": 6484495.22222239,
            "unit": "ns/iter",
            "extra": "iterations: 108\ncpu: 6483191.194444911 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_bw_large_b_sat_1087vars_13772clauses",
            "value": 152355680.40000087,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 152332740.6000021 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_bw_large_c_sat_3016vars_50457clauses",
            "value": 16703063883.000027,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 16701519001.000008 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_1_2vars_3clauses",
            "value": 14757.767286401386,
            "unit": "ns/iter",
            "extra": "iterations: 47870\ncpu: 14757.339398369817 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_2_6vars_9clauses",
            "value": 19875.07912918477,
            "unit": "ns/iter",
            "extra": "iterations: 35461\ncpu: 19874.089619581253 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_3_12vars_22clauses",
            "value": 48616.04024144793,
            "unit": "ns/iter",
            "extra": "iterations: 14413\ncpu: 48615.28030250686 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_4_20vars_45clauses",
            "value": 265165.2683754471,
            "unit": "ns/iter",
            "extra": "iterations: 2653\ncpu: 265127.90388238203 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_5_30vars_81clauses",
            "value": 1548556.7505518333,
            "unit": "ns/iter",
            "extra": "iterations: 453\ncpu: 1548537.7924944067 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_6_42vars_133clauses",
            "value": 7037544.464646952,
            "unit": "ns/iter",
            "extra": "iterations: 99\ncpu: 7037025.000000319 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_7_56vars_204clauses",
            "value": 30210593.608691614,
            "unit": "ns/iter",
            "extra": "iterations: 23\ncpu: 30208952.391304772 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_8_72vars_297clauses",
            "value": 150851324.99998507,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 150837345.9999916 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_9_90vars_415clauses",
            "value": 821362597.9999506,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 821256664.9999644 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_10_110vars_561clauses",
            "value": 5072240033.000071,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 5071808982.00005 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_11_132vars_738clauses",
            "value": 42781958644.000046,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 42778869875 ns\nthreads: 1"
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
          "id": "fcae28cfbad9a98ba0433028d2e717f195c8ddea",
          "message": "Fix number of processes for parallel certificate verification",
          "timestamp": "2025-10-04T05:16:57+02:00",
          "tree_id": "83fe7611d313e53f1dd738833f2993c99e5993b3",
          "url": "https://github.com/marcluque/YASER/commit/fcae28cfbad9a98ba0433028d2e717f195c8ddea"
        },
        "date": 1759548283723,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_Resolution/3/5",
            "value": 186.67897772695346,
            "unit": "ns/iter",
            "extra": "iterations: 3733797\ncpu: 186.6660731689484 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/10/10",
            "value": 568.3874756278216,
            "unit": "ns/iter",
            "extra": "iterations: 1243735\ncpu: 568.3113235536508 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/1000/1000",
            "value": 112283.24854432784,
            "unit": "ns/iter",
            "extra": "iterations: 6011\ncpu: 112267.39144901015 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/10000/10000",
            "value": 1642973.1084905218,
            "unit": "ns/iter",
            "extra": "iterations: 424\ncpu: 1642725.839622641 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/100000/100000",
            "value": 29258343.360002074,
            "unit": "ns/iter",
            "extra": "iterations: 25\ncpu: 29256545.759999976 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/1000000/1000000",
            "value": 1076369154.999952,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 1076266747 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/5/1000",
            "value": 52765.85450621426,
            "unit": "ns/iter",
            "extra": "iterations: 13437\ncpu: 52759.54915531736 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/1000/5",
            "value": 53431.6652858319,
            "unit": "ns/iter",
            "extra": "iterations: 13277\ncpu: 53430.8843865331 ns\nthreads: 1"
          },
          {
            "name": "BM_ParseFormula/formula_35_bytes",
            "value": 7662.599638529201,
            "unit": "ns/iter",
            "extra": "iterations: 91847\ncpu: 7661.277646520847 ns\nthreads: 1"
          },
          {
            "name": "BM_ParseFormula/formula_54741_bytes",
            "value": 1359772.060194241,
            "unit": "ns/iter",
            "extra": "iterations: 515\ncpu: 1359590.6330097076 ns\nthreads: 1"
          },
          {
            "name": "BM_ParseFormula/formula_6938400_bytes",
            "value": 968469560.0000168,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 968330211.0000014 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/uniform_random_3_sat_50vars_218clauses",
            "value": 1531813.921397218,
            "unit": "ns/iter",
            "extra": "iterations: 458\ncpu: 1531462.0742358093 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/uniform_random_3_unsat_50vars_218clauses",
            "value": 2023605.2578796581,
            "unit": "ns/iter",
            "extra": "iterations: 349\ncpu: 2023078.4555873964 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/uniform_random_3_sat_100vars_430clauses",
            "value": 2583396.922509027,
            "unit": "ns/iter",
            "extra": "iterations: 271\ncpu: 2582988.0184501866 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/uniform_random_3_unsat_100vars_430clauses",
            "value": 68391463.90000224,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 68385242.49999996 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/uniform_random_3_sat_250vars_1065clauses",
            "value": 55506458115.0001,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 55500751951.99999 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_1_sat_9685vars_55870clauses",
            "value": 12055070445.999945,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 12053803302.999994 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_2_sat_2810vars_11683clauses",
            "value": 34730509.19999991,
            "unit": "ns/iter",
            "extra": "iterations: 20\ncpu: 34722363.45000042 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_4_sat_28161vars_139716clauses",
            "value": 100593200892.00003,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 100582413730 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_5_sat_9396vars_41207clauses",
            "value": 1890956310.0000923,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 1890679400.9999998 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_7_sat_8710vars_39774clauses",
            "value": 215395103.33332145,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 215342153.66667315 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_13_sat_13215vars_65728clauses",
            "value": 150433780569.99994,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 150419790073.00003 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/logistics_a_sat_828vars_6718clauses",
            "value": 16344286.186045624,
            "unit": "ns/iter",
            "extra": "iterations: 43\ncpu: 16342157.441860585 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/logistics_b_sat_843vars_7301clauses",
            "value": 22276911.387096684,
            "unit": "ns/iter",
            "extra": "iterations: 31\ncpu: 22274385.1935474 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/logistics_c_sat_1141vars_10719clauses",
            "value": 65654797.45454054,
            "unit": "ns/iter",
            "extra": "iterations: 11\ncpu: 65642302.09091255 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/logistics_d_sat_4713vars_21991clauses",
            "value": 121089856.83331259,
            "unit": "ns/iter",
            "extra": "iterations: 6\ncpu: 121085228.66666742 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_anomaly_sat_48vars_261clauses",
            "value": 109535.0641686092,
            "unit": "ns/iter",
            "extra": "iterations: 6405\ncpu: 109518.77408274324 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_medium_sat_116vars_953clauses",
            "value": 428593.5441717767,
            "unit": "ns/iter",
            "extra": "iterations: 1630\ncpu: 428585.1226993782 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_huge_sat_459vars_7054clauses",
            "value": 3673482.9526315145,
            "unit": "ns/iter",
            "extra": "iterations: 190\ncpu: 3673037.189473629 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_bw_large_a_sat_459vars_4675clauses",
            "value": 6459906.112149414,
            "unit": "ns/iter",
            "extra": "iterations: 107\ncpu: 6459798.429906213 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_bw_large_b_sat_1087vars_13772clauses",
            "value": 152166454.6000011,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 152150781.8000032 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_bw_large_c_sat_3016vars_50457clauses",
            "value": 16480344767.000134,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 16479080350.000004 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_1_2vars_3clauses",
            "value": 14729.03410239133,
            "unit": "ns/iter",
            "extra": "iterations: 47504\ncpu: 14728.523808521224 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_2_6vars_9clauses",
            "value": 19692.246097051993,
            "unit": "ns/iter",
            "extra": "iterations: 35486\ncpu: 19690.786422815436 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_3_12vars_22clauses",
            "value": 47833.70949720057,
            "unit": "ns/iter",
            "extra": "iterations: 14678\ncpu: 47832.25398555688 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_4_20vars_45clauses",
            "value": 257534.8978613303,
            "unit": "ns/iter",
            "extra": "iterations: 2712\ncpu: 257513.46755161078 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_5_30vars_81clauses",
            "value": 1529112.457516231,
            "unit": "ns/iter",
            "extra": "iterations: 459\ncpu: 1529014.0544662545 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_6_42vars_133clauses",
            "value": 7032140.94949434,
            "unit": "ns/iter",
            "extra": "iterations: 99\ncpu: 7031274.444444199 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_7_56vars_204clauses",
            "value": 30186591.826083276,
            "unit": "ns/iter",
            "extra": "iterations: 23\ncpu: 30186104.260869104 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_8_72vars_297clauses",
            "value": 150416998.99998093,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 150406869.7999969 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_9_90vars_415clauses",
            "value": 835345060.0000087,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 835282475.0000423 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_10_110vars_561clauses",
            "value": 5241518077.999899,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 5241150215.000005 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_11_132vars_738clauses",
            "value": 43046548775.00002,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 43042439717.00004 ns\nthreads: 1"
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
          "id": "96314c5f99aabb1c69d7f261dfeff8550801d193",
          "message": "Run benchmark on every push to mainline",
          "timestamp": "2025-10-04T16:21:28+02:00",
          "tree_id": "240c0017a40acb6f69db09614cb0daa4fb5f06fc",
          "url": "https://github.com/marcluque/YASER/commit/96314c5f99aabb1c69d7f261dfeff8550801d193"
        },
        "date": 1759588139964,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_Resolution/3/5",
            "value": 178.31161173720744,
            "unit": "ns/iter",
            "extra": "iterations: 3879764\ncpu: 178.29966461877578 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/10/10",
            "value": 554.2921426600146,
            "unit": "ns/iter",
            "extra": "iterations: 1264461\ncpu: 554.271518061846 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/1000/1000",
            "value": 111405.3375651051,
            "unit": "ns/iter",
            "extra": "iterations: 6144\ncpu: 111401.275390625 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/10000/10000",
            "value": 1755763.7172896985,
            "unit": "ns/iter",
            "extra": "iterations: 428\ncpu: 1755745.0957943923 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/100000/100000",
            "value": 28457682.96153805,
            "unit": "ns/iter",
            "extra": "iterations: 26\ncpu: 28455945.42307692 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/1000000/1000000",
            "value": 868358768.9999968,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 868292411.9999998 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/5/1000",
            "value": 52235.3102456289,
            "unit": "ns/iter",
            "extra": "iterations: 13557\ncpu: 52225.20137198495 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/1000/5",
            "value": 52651.33556897042,
            "unit": "ns/iter",
            "extra": "iterations: 13419\ncpu: 52642.576645055495 ns\nthreads: 1"
          },
          {
            "name": "BM_ParseFormula/formula_35_bytes",
            "value": 7816.823338464535,
            "unit": "ns/iter",
            "extra": "iterations: 89646\ncpu: 7815.884222385827 ns\nthreads: 1"
          },
          {
            "name": "BM_ParseFormula/formula_54741_bytes",
            "value": 1357734.3234126759,
            "unit": "ns/iter",
            "extra": "iterations: 504\ncpu: 1357578.61111111 ns\nthreads: 1"
          },
          {
            "name": "BM_ParseFormula/formula_6938400_bytes",
            "value": 942625755.999984,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 942458457.999999 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/uniform_random_3_sat_50vars_218clauses",
            "value": 1537044.2412280464,
            "unit": "ns/iter",
            "extra": "iterations: 456\ncpu: 1536569.4539473662 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/uniform_random_3_unsat_50vars_218clauses",
            "value": 2021332.3872832663,
            "unit": "ns/iter",
            "extra": "iterations: 346\ncpu: 2020802.505780347 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/uniform_random_3_sat_100vars_430clauses",
            "value": 2592962.8475837302,
            "unit": "ns/iter",
            "extra": "iterations: 269\ncpu: 2592335.338289961 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/uniform_random_3_unsat_100vars_430clauses",
            "value": 68503405.10000023,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 68501105.30000003 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/uniform_random_3_sat_250vars_1065clauses",
            "value": 51354481079.00004,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 51345557263.99999 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_1_sat_9685vars_55870clauses",
            "value": 11791728361.999958,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 11790508682.999998 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_2_sat_2810vars_11683clauses",
            "value": 33057224.142859403,
            "unit": "ns/iter",
            "extra": "iterations: 21\ncpu: 33054087.619047683 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_4_sat_28161vars_139716clauses",
            "value": 99273713710.00005,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 99265759162 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_5_sat_9396vars_41207clauses",
            "value": 1854375312.000002,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 1854169408.0000184 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_7_sat_8710vars_39774clauses",
            "value": 212637510.66665766,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 212630618.99999988 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_13_sat_13215vars_65728clauses",
            "value": 148160727825.99997,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 148149029576.00003 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/logistics_a_sat_828vars_6718clauses",
            "value": 16022763.750000155,
            "unit": "ns/iter",
            "extra": "iterations: 44\ncpu: 16021155.113636805 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/logistics_b_sat_843vars_7301clauses",
            "value": 21757730.499999184,
            "unit": "ns/iter",
            "extra": "iterations: 32\ncpu: 21756685.187499512 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/logistics_c_sat_1141vars_10719clauses",
            "value": 64355336.81818387,
            "unit": "ns/iter",
            "extra": "iterations: 11\ncpu: 64349931.99999636 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/logistics_d_sat_4713vars_21991clauses",
            "value": 117127043.00000118,
            "unit": "ns/iter",
            "extra": "iterations: 6\ncpu: 117107184.16666548 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_anomaly_sat_48vars_261clauses",
            "value": 109790.8874547394,
            "unit": "ns/iter",
            "extra": "iterations: 6353\ncpu: 109789.15126712107 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_medium_sat_116vars_953clauses",
            "value": 432678.7591330812,
            "unit": "ns/iter",
            "extra": "iterations: 1615\ncpu: 432631.2786377629 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_huge_sat_459vars_7054clauses",
            "value": 3613495.6269430225,
            "unit": "ns/iter",
            "extra": "iterations: 193\ncpu: 3613289.7409325596 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_bw_large_a_sat_459vars_4675clauses",
            "value": 6398594.036697615,
            "unit": "ns/iter",
            "extra": "iterations: 109\ncpu: 6398205.660550211 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_bw_large_b_sat_1087vars_13772clauses",
            "value": 150646826.9999914,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 150639713.8000011 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_bw_large_c_sat_3016vars_50457clauses",
            "value": 16213595694.99998,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 16212641034 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_1_2vars_3clauses",
            "value": 14811.0495162939,
            "unit": "ns/iter",
            "extra": "iterations: 47136\ncpu: 14809.827499151224 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_2_6vars_9clauses",
            "value": 19771.682315759263,
            "unit": "ns/iter",
            "extra": "iterations: 34805\ncpu: 19770.80226978974 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_3_12vars_22clauses",
            "value": 48572.525579784786,
            "unit": "ns/iter",
            "extra": "iterations: 14445\ncpu: 48570.388023538886 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_4_20vars_45clauses",
            "value": 261293.26990655423,
            "unit": "ns/iter",
            "extra": "iterations: 2675\ncpu: 261281.72411214007 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_5_30vars_81clauses",
            "value": 1541435.1714285898,
            "unit": "ns/iter",
            "extra": "iterations: 455\ncpu: 1541299.940659273 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_6_42vars_133clauses",
            "value": 7071652.151515109,
            "unit": "ns/iter",
            "extra": "iterations: 99\ncpu: 7071607.141414107 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_7_56vars_204clauses",
            "value": 30264267.260868706,
            "unit": "ns/iter",
            "extra": "iterations: 23\ncpu: 30261897.826088227 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_8_72vars_297clauses",
            "value": 150506070.19998097,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 150496387.1999962 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_9_90vars_415clauses",
            "value": 823618729.9999074,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 823546946.0000218 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_10_110vars_561clauses",
            "value": 4987870209.999983,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 4987584357.999992 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_11_132vars_738clauses",
            "value": 38666269358.00002,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 38663898255.999985 ns\nthreads: 1"
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
          "id": "b23ad3c21485cdc14812f92cd08027e43e50ec15",
          "message": "Use an allocator wrapper for the literals vector that doesn't perform initialization",
          "timestamp": "2025-10-04T16:53:40+02:00",
          "tree_id": "5ab50ec8cc51f1191fd6bc8dfd7eaa463d5d150a",
          "url": "https://github.com/marcluque/YASER/commit/b23ad3c21485cdc14812f92cd08027e43e50ec15"
        },
        "date": 1759590067889,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_Resolution/3/5",
            "value": 176.45167429081326,
            "unit": "ns/iter",
            "extra": "iterations: 3971592\ncpu: 176.41276445314628 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/10/10",
            "value": 549.1119339838967,
            "unit": "ns/iter",
            "extra": "iterations: 1269266\ncpu: 549.0591404796157 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/1000/1000",
            "value": 112393.23341604542,
            "unit": "ns/iter",
            "extra": "iterations: 6045\ncpu: 112383.48320926387 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/10000/10000",
            "value": 1638872.3199052238,
            "unit": "ns/iter",
            "extra": "iterations: 422\ncpu: 1638313.9763033178 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/100000/100000",
            "value": 27643926.576922912,
            "unit": "ns/iter",
            "extra": "iterations: 26\ncpu: 27640740.538461532 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/1000000/1000000",
            "value": 882181305.9999926,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 882120657.9999999 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/5/1000",
            "value": 52210.76545698961,
            "unit": "ns/iter",
            "extra": "iterations: 13392\ncpu: 52208.26769713264 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/1000/5",
            "value": 51828.55475214273,
            "unit": "ns/iter",
            "extra": "iterations: 13415\ncpu: 51822.346328736516 ns\nthreads: 1"
          },
          {
            "name": "BM_ParseFormula/formula_35_bytes",
            "value": 7367.066931325304,
            "unit": "ns/iter",
            "extra": "iterations: 95217\ncpu: 7366.8715670521 ns\nthreads: 1"
          },
          {
            "name": "BM_ParseFormula/formula_54741_bytes",
            "value": 1203077.37201366,
            "unit": "ns/iter",
            "extra": "iterations: 586\ncpu: 1202912.2389078506 ns\nthreads: 1"
          },
          {
            "name": "BM_ParseFormula/formula_6938400_bytes",
            "value": 238812494.66666552,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 238799121.66666627 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/uniform_random_3_sat_50vars_218clauses",
            "value": 1529916.2620087469,
            "unit": "ns/iter",
            "extra": "iterations: 458\ncpu: 1529737.4803493428 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/uniform_random_3_unsat_50vars_218clauses",
            "value": 2007109.7586207082,
            "unit": "ns/iter",
            "extra": "iterations: 348\ncpu: 2007074.5258620717 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/uniform_random_3_sat_100vars_430clauses",
            "value": 2568525.0851852163,
            "unit": "ns/iter",
            "extra": "iterations: 270\ncpu: 2568383.429629631 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/uniform_random_3_unsat_100vars_430clauses",
            "value": 67154377.50000034,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 67148946.99999991 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/uniform_random_3_sat_250vars_1065clauses",
            "value": 48104636325.000015,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 48097461389 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_1_sat_9685vars_55870clauses",
            "value": 11428796401,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 11428170236 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_2_sat_2810vars_11683clauses",
            "value": 18439952.31578937,
            "unit": "ns/iter",
            "extra": "iterations: 38\ncpu: 18429248.815789603 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_4_sat_28161vars_139716clauses",
            "value": 98097039268,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 98091958496 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_5_sat_9396vars_41207clauses",
            "value": 1640904478.9999995,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 1640839976.9999847 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_7_sat_8710vars_39774clauses",
            "value": 53131897.76923038,
            "unit": "ns/iter",
            "extra": "iterations: 13\ncpu: 53127985.07692334 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_13_sat_13215vars_65728clauses",
            "value": 147395117181.99997,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 147386158092 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/logistics_a_sat_828vars_6718clauses",
            "value": 14672563.666666841,
            "unit": "ns/iter",
            "extra": "iterations: 48\ncpu: 14671759.145832889 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/logistics_b_sat_843vars_7301clauses",
            "value": 19497977.361110784,
            "unit": "ns/iter",
            "extra": "iterations: 36\ncpu: 19497013.111111034 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/logistics_c_sat_1141vars_10719clauses",
            "value": 56383535.08333201,
            "unit": "ns/iter",
            "extra": "iterations: 12\ncpu: 56382490.41666654 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/logistics_d_sat_4713vars_21991clauses",
            "value": 70432039.29999891,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 70425796.20000425 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_anomaly_sat_48vars_261clauses",
            "value": 107623.76140566892,
            "unit": "ns/iter",
            "extra": "iterations: 6488\ncpu: 107621.8064118323 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_medium_sat_116vars_953clauses",
            "value": 419600.23205740366,
            "unit": "ns/iter",
            "extra": "iterations: 1672\ncpu: 419565.8630383003 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_huge_sat_459vars_7054clauses",
            "value": 3310169.391509531,
            "unit": "ns/iter",
            "extra": "iterations: 212\ncpu: 3310159.9150941055 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_bw_large_a_sat_459vars_4675clauses",
            "value": 6168034.649122769,
            "unit": "ns/iter",
            "extra": "iterations: 114\ncpu: 6167688.640350601 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_bw_large_b_sat_1087vars_13772clauses",
            "value": 141609226.20000064,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 141602517.19999903 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_bw_large_c_sat_3016vars_50457clauses",
            "value": 16003721006.999968,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 16001489671.99999 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_1_2vars_3clauses",
            "value": 14333.545411687337,
            "unit": "ns/iter",
            "extra": "iterations: 48787\ncpu: 14332.996904912463 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_2_6vars_9clauses",
            "value": 19428.23666112057,
            "unit": "ns/iter",
            "extra": "iterations: 36060\ncpu: 19427.106516916258 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_3_12vars_22clauses",
            "value": 48704.011976881724,
            "unit": "ns/iter",
            "extra": "iterations: 14361\ncpu: 48701.40693545049 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_4_20vars_45clauses",
            "value": 260037.18624535826,
            "unit": "ns/iter",
            "extra": "iterations: 2690\ncpu: 260027.8152416367 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_5_30vars_81clauses",
            "value": 1525966.7908497225,
            "unit": "ns/iter",
            "extra": "iterations: 459\ncpu: 1525915.4248365725 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_6_42vars_133clauses",
            "value": 6946244.128712779,
            "unit": "ns/iter",
            "extra": "iterations: 101\ncpu: 6945454.287128907 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_7_56vars_204clauses",
            "value": 29708049.166667175,
            "unit": "ns/iter",
            "extra": "iterations: 24\ncpu: 29705496.875000864 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_8_72vars_297clauses",
            "value": 147007658.40000257,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 146992728.39999366 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_9_90vars_415clauses",
            "value": 799991029.0000116,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 799950978.9999592 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_10_110vars_561clauses",
            "value": 4820556686.000031,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 4820272063.000005 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_11_132vars_738clauses",
            "value": 37013090046.99999,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 37011719330.00001 ns\nthreads: 1"
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
          "id": "3b2ac4e760e9bbb30f5f38fbb727091de36dfee4",
          "message": "Remove noinit_allocator where not applicable",
          "timestamp": "2025-10-04T19:38:08+02:00",
          "tree_id": "d94aceeddbc78d1a9894df63662fcbbf01b4acf1",
          "url": "https://github.com/marcluque/YASER/commit/3b2ac4e760e9bbb30f5f38fbb727091de36dfee4"
        },
        "date": 1759599930406,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_Resolution/3/5",
            "value": 181.46655899567406,
            "unit": "ns/iter",
            "extra": "iterations: 3984360\ncpu: 181.4162179120361 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/10/10",
            "value": 550.668030516326,
            "unit": "ns/iter",
            "extra": "iterations: 1274334\ncpu: 550.5151875410999 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/1000/1000",
            "value": 110927.08728466212,
            "unit": "ns/iter",
            "extra": "iterations: 6095\ncpu: 110917.94077112383 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/10000/10000",
            "value": 1644871.9648711637,
            "unit": "ns/iter",
            "extra": "iterations: 427\ncpu: 1644713.9016393437 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/100000/100000",
            "value": 28998264.269230407,
            "unit": "ns/iter",
            "extra": "iterations: 26\ncpu: 28957296.23076925 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/1000000/1000000",
            "value": 960230043.9999851,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 960117161.0000004 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/5/1000",
            "value": 51942.89147574945,
            "unit": "ns/iter",
            "extra": "iterations: 13444\ncpu: 51922.22240404644 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/1000/5",
            "value": 52004.72767890329,
            "unit": "ns/iter",
            "extra": "iterations: 13429\ncpu: 51994.29667138283 ns\nthreads: 1"
          },
          {
            "name": "BM_ParseFormula/formula_35_bytes",
            "value": 7662.6609563274205,
            "unit": "ns/iter",
            "extra": "iterations: 91705\ncpu: 7660.586511095359 ns\nthreads: 1"
          },
          {
            "name": "BM_ParseFormula/formula_54741_bytes",
            "value": 1189155.9392917275,
            "unit": "ns/iter",
            "extra": "iterations: 593\ncpu: 1189006.3962900485 ns\nthreads: 1"
          },
          {
            "name": "BM_ParseFormula/formula_6938400_bytes",
            "value": 243705950.0000013,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 243678982.66666663 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/uniform_random_3_sat_50vars_218clauses",
            "value": 1509558.1149674621,
            "unit": "ns/iter",
            "extra": "iterations: 461\ncpu: 1509425.1193058577 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/uniform_random_3_unsat_50vars_218clauses",
            "value": 1986318.365439106,
            "unit": "ns/iter",
            "extra": "iterations: 353\ncpu: 1986094.5495750732 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/uniform_random_3_sat_100vars_430clauses",
            "value": 2548921.683636329,
            "unit": "ns/iter",
            "extra": "iterations: 275\ncpu: 2548597.9309090953 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/uniform_random_3_unsat_100vars_430clauses",
            "value": 66870309.18181915,
            "unit": "ns/iter",
            "extra": "iterations: 11\ncpu: 66862563.1818182 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/uniform_random_3_sat_250vars_1065clauses",
            "value": 51711317214.99998,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 51705255788.99999 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_1_sat_9685vars_55870clauses",
            "value": 11691982416.000002,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 11690675462.99999 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_2_sat_2810vars_11683clauses",
            "value": 18923367.72972938,
            "unit": "ns/iter",
            "extra": "iterations: 37\ncpu: 18921955.378378216 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_4_sat_28161vars_139716clauses",
            "value": 98908165869.00002,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 98897786129 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_5_sat_9396vars_41207clauses",
            "value": 1663142708.0000093,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 1663009539.0000007 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_7_sat_8710vars_39774clauses",
            "value": 53394417.23076823,
            "unit": "ns/iter",
            "extra": "iterations: 13\ncpu: 53389412.76923055 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_13_sat_13215vars_65728clauses",
            "value": 148125598922,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 148113369685 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/logistics_a_sat_828vars_6718clauses",
            "value": 15297682.239131073,
            "unit": "ns/iter",
            "extra": "iterations: 46\ncpu: 15296793.282608999 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/logistics_b_sat_843vars_7301clauses",
            "value": 20968732.42424229,
            "unit": "ns/iter",
            "extra": "iterations: 33\ncpu: 20966794.878788594 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/logistics_c_sat_1141vars_10719clauses",
            "value": 59325380.750001006,
            "unit": "ns/iter",
            "extra": "iterations: 12\ncpu: 59322734.41666306 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/logistics_d_sat_4713vars_21991clauses",
            "value": 71668453.29999773,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 71660308.79999994 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_anomaly_sat_48vars_261clauses",
            "value": 107424.40716463602,
            "unit": "ns/iter",
            "extra": "iterations: 6560\ncpu: 107417.52682927117 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_medium_sat_116vars_953clauses",
            "value": 412291.81002951914,
            "unit": "ns/iter",
            "extra": "iterations: 1695\ncpu: 412237.1345132837 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_huge_sat_459vars_7054clauses",
            "value": 3306795.693396171,
            "unit": "ns/iter",
            "extra": "iterations: 212\ncpu: 3306523.033018843 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_bw_large_a_sat_459vars_4675clauses",
            "value": 6186849.283186303,
            "unit": "ns/iter",
            "extra": "iterations: 113\ncpu: 6186358.07964627 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_bw_large_b_sat_1087vars_13772clauses",
            "value": 143706255.39999083,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 143697889.80000067 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_bw_large_c_sat_3016vars_50457clauses",
            "value": 16205946403.999973,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 16204780696.99999 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_1_2vars_3clauses",
            "value": 14824.279560560293,
            "unit": "ns/iter",
            "extra": "iterations: 47242\ncpu: 14823.192392362793 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_2_6vars_9clauses",
            "value": 19746.675962816047,
            "unit": "ns/iter",
            "extra": "iterations: 35391\ncpu: 19745.52810036493 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_3_12vars_22clauses",
            "value": 48013.020272125905,
            "unit": "ns/iter",
            "extra": "iterations: 14552\ncpu: 48008.32669048772 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_4_20vars_45clauses",
            "value": 254245.28514346675,
            "unit": "ns/iter",
            "extra": "iterations: 2753\ncpu: 254222.20632037538 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_5_30vars_81clauses",
            "value": 1507822.8021505515,
            "unit": "ns/iter",
            "extra": "iterations: 465\ncpu: 1507712.5698923972 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_6_42vars_133clauses",
            "value": 6903133.9603959555,
            "unit": "ns/iter",
            "extra": "iterations: 101\ncpu: 6902819.099010041 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_7_56vars_204clauses",
            "value": 29618963.37500036,
            "unit": "ns/iter",
            "extra": "iterations: 24\ncpu: 29616871.583333667 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_8_72vars_297clauses",
            "value": 148189106.79998678,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 148174834.99999753 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_9_90vars_415clauses",
            "value": 800169220.0000434,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 800105554.9999591 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_10_110vars_561clauses",
            "value": 4773394802.999973,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 4773056811.999993 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_11_132vars_738clauses",
            "value": 38328781245.99995,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 38325567734 ns\nthreads: 1"
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
          "id": "779689280a096d88dd5b6bf2d4c165590da779bb",
          "message": "Add more benchmark history",
          "timestamp": "2025-10-04T19:40:26+02:00",
          "tree_id": "b7ee73b8017ea9152a95e4cdba6adcd7c178f8fe",
          "url": "https://github.com/marcluque/YASER/commit/779689280a096d88dd5b6bf2d4c165590da779bb"
        },
        "date": 1759600080907,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_Resolution/3/5",
            "value": 180.924624196781,
            "unit": "ns/iter",
            "extra": "iterations: 3722826\ncpu: 180.8473366738064 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/10/10",
            "value": 549.5536507117711,
            "unit": "ns/iter",
            "extra": "iterations: 1100936\ncpu: 549.5370103257592 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/1000/1000",
            "value": 109415.28403163514,
            "unit": "ns/iter",
            "extra": "iterations: 5943\ncpu: 109413.73868416621 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/10000/10000",
            "value": 1644744.564705835,
            "unit": "ns/iter",
            "extra": "iterations: 425\ncpu: 1644586.9341176471 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/100000/100000",
            "value": 30294496.291666914,
            "unit": "ns/iter",
            "extra": "iterations: 24\ncpu: 30292667.458333347 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/1000000/1000000",
            "value": 1184378648.9999957,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 1184229703.9999998 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/5/1000",
            "value": 51774.81224818619,
            "unit": "ns/iter",
            "extra": "iterations: 13651\ncpu: 51764.33052523624 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/1000/5",
            "value": 51595.56254190584,
            "unit": "ns/iter",
            "extra": "iterations: 13423\ncpu: 51586.818892945004 ns\nthreads: 1"
          },
          {
            "name": "BM_ParseFormula/formula_35_bytes",
            "value": 7663.329534251633,
            "unit": "ns/iter",
            "extra": "iterations: 92303\ncpu: 7660.730073778752 ns\nthreads: 1"
          },
          {
            "name": "BM_ParseFormula/formula_54741_bytes",
            "value": 1196010.4889643495,
            "unit": "ns/iter",
            "extra": "iterations: 589\ncpu: 1195954.0611205418 ns\nthreads: 1"
          },
          {
            "name": "BM_ParseFormula/formula_6938400_bytes",
            "value": 267850246.49998945,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 267842796.00000006 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/uniform_random_3_sat_50vars_218clauses",
            "value": 1531325.2975930031,
            "unit": "ns/iter",
            "extra": "iterations: 457\ncpu: 1531248.3522975908 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/uniform_random_3_unsat_50vars_218clauses",
            "value": 2012883.918604699,
            "unit": "ns/iter",
            "extra": "iterations: 344\ncpu: 2012548.8459302294 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/uniform_random_3_sat_100vars_430clauses",
            "value": 2583128.328413293,
            "unit": "ns/iter",
            "extra": "iterations: 271\ncpu: 2582893.0221402226 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/uniform_random_3_unsat_100vars_430clauses",
            "value": 67464964.99999921,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 67457634.19999999 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/uniform_random_3_sat_250vars_1065clauses",
            "value": 55587087012.00004,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 55581510179 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_1_sat_9685vars_55870clauses",
            "value": 11960585006.00003,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 11959802384.999989 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_2_sat_2810vars_11683clauses",
            "value": 18938122.35135169,
            "unit": "ns/iter",
            "extra": "iterations: 37\ncpu: 18936528.29729748 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_4_sat_28161vars_139716clauses",
            "value": 100247347176,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 100235207559.99998 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_5_sat_9396vars_41207clauses",
            "value": 1748624847.0000873,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 1748488742.9999957 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_7_sat_8710vars_39774clauses",
            "value": 56826366.769227065,
            "unit": "ns/iter",
            "extra": "iterations: 13\ncpu: 56821361.84615362 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_13_sat_13215vars_65728clauses",
            "value": 150287407918,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 150274267744 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/logistics_a_sat_828vars_6718clauses",
            "value": 15392975.488887511,
            "unit": "ns/iter",
            "extra": "iterations: 45\ncpu: 15391178.622221308 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/logistics_b_sat_843vars_7301clauses",
            "value": 21168448.878790624,
            "unit": "ns/iter",
            "extra": "iterations: 33\ncpu: 21166936.424242865 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/logistics_c_sat_1141vars_10719clauses",
            "value": 59963298.54545737,
            "unit": "ns/iter",
            "extra": "iterations: 11\ncpu: 59956799.45454475 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/logistics_d_sat_4713vars_21991clauses",
            "value": 73809771.77778429,
            "unit": "ns/iter",
            "extra": "iterations: 9\ncpu: 73804869.66666745 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_anomaly_sat_48vars_261clauses",
            "value": 111026.61145388063,
            "unit": "ns/iter",
            "extra": "iterations: 6321\ncpu: 111022.46305963433 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_medium_sat_116vars_953clauses",
            "value": 417381.94107144483,
            "unit": "ns/iter",
            "extra": "iterations: 1680\ncpu: 417355.4821428687 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_huge_sat_459vars_7054clauses",
            "value": 3335881.152380742,
            "unit": "ns/iter",
            "extra": "iterations: 210\ncpu: 3335640.680952186 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_bw_large_a_sat_459vars_4675clauses",
            "value": 6372265.442478117,
            "unit": "ns/iter",
            "extra": "iterations: 113\ncpu: 6371596.451327278 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_bw_large_b_sat_1087vars_13772clauses",
            "value": 145542320.200002,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 145535032.99999875 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_bw_large_c_sat_3016vars_50457clauses",
            "value": 16740623465.999989,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 16739152982.000008 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_1_2vars_3clauses",
            "value": 14811.056857471185,
            "unit": "ns/iter",
            "extra": "iterations: 46854\ncpu: 14810.068916207814 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_2_6vars_9clauses",
            "value": 19903.439829457704,
            "unit": "ns/iter",
            "extra": "iterations: 35416\ncpu: 19902.13999322317 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_3_12vars_22clauses",
            "value": 48646.56555895313,
            "unit": "ns/iter",
            "extra": "iterations: 14384\ncpu: 48645.86895161624 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_4_20vars_45clauses",
            "value": 259110.60368324636,
            "unit": "ns/iter",
            "extra": "iterations: 2715\ncpu: 259077.39484344926 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_5_30vars_81clauses",
            "value": 1522905.5315903837,
            "unit": "ns/iter",
            "extra": "iterations: 459\ncpu: 1522764.233115574 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_6_42vars_133clauses",
            "value": 6940857.247524163,
            "unit": "ns/iter",
            "extra": "iterations: 101\ncpu: 6940180.455445659 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_7_56vars_204clauses",
            "value": 29803696.17391123,
            "unit": "ns/iter",
            "extra": "iterations: 23\ncpu: 29802700.217391267 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_8_72vars_297clauses",
            "value": 150013209.60000157,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 150006460.80000025 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_9_90vars_415clauses",
            "value": 814653244.9999313,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 814553570.9999763 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_10_110vars_561clauses",
            "value": 4834935793,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 4834658101.999991 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_11_132vars_738clauses",
            "value": 39198273811.00004,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 39195491946.00001 ns\nthreads: 1"
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
          "id": "a24170f994db5a8841debb735f96b2904c2c01b8",
          "message": "Temporarily disable further benchmarks; Also temporarily disable tests for pigeon hole N > 6",
          "timestamp": "2025-10-06T20:01:31+02:00",
          "tree_id": "3484772f61918d35011c51b62a06b4b402a98c1f",
          "url": "https://github.com/marcluque/YASER/commit/a24170f994db5a8841debb735f96b2904c2c01b8"
        },
        "date": 1759776572155,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_Resolution/3/5",
            "value": 176.56803828466076,
            "unit": "ns/iter",
            "extra": "iterations: 3935571\ncpu: 176.55784738732956 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/10/10",
            "value": 548.6415407420832,
            "unit": "ns/iter",
            "extra": "iterations: 1277021\ncpu: 548.6026979979188 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/1000/1000",
            "value": 119687.84754742685,
            "unit": "ns/iter",
            "extra": "iterations: 5851\ncpu: 119672.07793539563 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/10000/10000",
            "value": 1715400.3277511809,
            "unit": "ns/iter",
            "extra": "iterations: 418\ncpu: 1715123.8133971288 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/100000/100000",
            "value": 30488789.13636408,
            "unit": "ns/iter",
            "extra": "iterations: 22\ncpu: 30487192.272727266 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/1000000/1000000",
            "value": 1118422185.0000143,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 1118274688.9999998 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/5/1000",
            "value": 51900.46303818042,
            "unit": "ns/iter",
            "extra": "iterations: 13541\ncpu: 51898.85370356695 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/1000/5",
            "value": 52613.886204611124,
            "unit": "ns/iter",
            "extra": "iterations: 13577\ncpu: 52602.8493776239 ns\nthreads: 1"
          },
          {
            "name": "BM_ParseFormula/formula_35_bytes",
            "value": 7450.490193760549,
            "unit": "ns/iter",
            "extra": "iterations: 93053\ncpu: 7449.155062168879 ns\nthreads: 1"
          },
          {
            "name": "BM_ParseFormula/formula_54741_bytes",
            "value": 804139.5041518308,
            "unit": "ns/iter",
            "extra": "iterations: 843\ncpu: 803935.1767497038 ns\nthreads: 1"
          },
          {
            "name": "BM_ParseFormula/formula_6938400_bytes",
            "value": 155398165.2499985,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 155381715.4999999 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/uniform_random_3_sat_50vars_218clauses",
            "value": 1131846.7390599346,
            "unit": "ns/iter",
            "extra": "iterations: 617\ncpu: 1131790.244732577 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/uniform_random_3_unsat_50vars_218clauses",
            "value": 1861881.4373333713,
            "unit": "ns/iter",
            "extra": "iterations: 375\ncpu: 1861682.925333331 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/uniform_random_3_sat_100vars_430clauses",
            "value": 195366892.25000003,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 195355463.7499999 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/uniform_random_3_unsat_100vars_430clauses",
            "value": 88236992.12500103,
            "unit": "ns/iter",
            "extra": "iterations: 8\ncpu: 88229676.37500012 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/uniform_random_3_sat_250vars_1065clauses",
            "value": 34933114495.000015,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 34930170369 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_1_sat_9685vars_55870clauses",
            "value": 22177412624,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 22174184095.999996 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_2_sat_2810vars_11683clauses",
            "value": 12710043.472727442,
            "unit": "ns/iter",
            "extra": "iterations: 55\ncpu: 12709585.599999813 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_4_sat_28161vars_139716clauses",
            "value": 2716557690596,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 2716342749967.9995 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_5_sat_9396vars_41207clauses",
            "value": 2273300276.0001,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 2273021207.0000563 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_7_sat_8710vars_39774clauses",
            "value": 12876439.925927723,
            "unit": "ns/iter",
            "extra": "iterations: 54\ncpu: 12874116.166661527 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/logistics_a_sat_828vars_6718clauses",
            "value": 17087864.56097963,
            "unit": "ns/iter",
            "extra": "iterations: 41\ncpu: 17086604.804883726 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/logistics_b_sat_843vars_7301clauses",
            "value": 16599615.142857665,
            "unit": "ns/iter",
            "extra": "iterations: 42\ncpu: 16598907.309528276 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/logistics_c_sat_1141vars_10719clauses",
            "value": 148184285.80001637,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 148169262.8000019 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/logistics_d_sat_4713vars_21991clauses",
            "value": 211726286.00000584,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 211714316.33335185 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_anomaly_sat_48vars_261clauses",
            "value": 89054.01069180085,
            "unit": "ns/iter",
            "extra": "iterations: 7950\ncpu: 89041.9286792647 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_medium_sat_116vars_953clauses",
            "value": 274098.5675569257,
            "unit": "ns/iter",
            "extra": "iterations: 2546\ncpu: 274082.0526315215 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_huge_sat_459vars_7054clauses",
            "value": 3975133.3749997932,
            "unit": "ns/iter",
            "extra": "iterations: 176\ncpu: 3974793.3920466495 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_bw_large_a_sat_459vars_4675clauses",
            "value": 3743858.395721187,
            "unit": "ns/iter",
            "extra": "iterations: 187\ncpu: 3743765.4385025464 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_bw_large_b_sat_1087vars_13772clauses",
            "value": 51590771.285711005,
            "unit": "ns/iter",
            "extra": "iterations: 14\ncpu: 51585079.21428931 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_bw_large_c_sat_3016vars_50457clauses",
            "value": 36225186001.99965,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 36222971631.00029 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_1_2vars_3clauses",
            "value": 14666.976093198478,
            "unit": "ns/iter",
            "extra": "iterations: 47727\ncpu: 14666.404969933963 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_2_6vars_9clauses",
            "value": 18235.31284901312,
            "unit": "ns/iter",
            "extra": "iterations: 38501\ncpu: 18234.473753928152 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_3_12vars_22clauses",
            "value": 38902.28155554117,
            "unit": "ns/iter",
            "extra": "iterations: 18000\ncpu: 38900.53288889956 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_4_20vars_45clauses",
            "value": 152297.17263834408,
            "unit": "ns/iter",
            "extra": "iterations: 4605\ncpu: 152280.99630840163 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_5_30vars_81clauses",
            "value": 1653581.3436023253,
            "unit": "ns/iter",
            "extra": "iterations: 422\ncpu: 1653425.9052131048 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_6_42vars_133clauses",
            "value": 39955255.23530031,
            "unit": "ns/iter",
            "extra": "iterations: 17\ncpu: 39952049.99998403 ns\nthreads: 1"
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
          "id": "bf85d9c0aab022a3674dedb0b33e32d18f9e666e",
          "message": "Revert \"Temporarily disable further benchmarks; Also temporarily disable tests for pigeon hole N > 6\"\n\nThis reverts commit a24170f994db5a8841debb735f96b2904c2c01b8.",
          "timestamp": "2025-10-06T21:11:18+02:00",
          "tree_id": "ddf78d4a2a1ff6b26ec7027829a039f2c273a0ee",
          "url": "https://github.com/marcluque/YASER/commit/bf85d9c0aab022a3674dedb0b33e32d18f9e666e"
        },
        "date": 1759780674191,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_Resolution/3/5",
            "value": 176.90537505288728,
            "unit": "ns/iter",
            "extra": "iterations: 4018993\ncpu: 176.89440713133865 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/10/10",
            "value": 558.0698836847065,
            "unit": "ns/iter",
            "extra": "iterations: 1259593\ncpu: 557.9856247216361 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/1000/1000",
            "value": 112749.31874405693,
            "unit": "ns/iter",
            "extra": "iterations: 6306\ncpu: 112732.96622264507 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/10000/10000",
            "value": 1624291.212264226,
            "unit": "ns/iter",
            "extra": "iterations: 424\ncpu: 1624058.6745283017 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/100000/100000",
            "value": 29078400.560001682,
            "unit": "ns/iter",
            "extra": "iterations: 25\ncpu: 29076533.279999986 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/1000000/1000000",
            "value": 1096032328.9999678,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 1095863600.9999995 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/5/1000",
            "value": 51947.71396664314,
            "unit": "ns/iter",
            "extra": "iterations: 13432\ncpu: 51928.70183144727 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/1000/5",
            "value": 51769.59421275417,
            "unit": "ns/iter",
            "extra": "iterations: 13236\ncpu: 51757.99962224241 ns\nthreads: 1"
          },
          {
            "name": "BM_ParseFormula/formula_35_bytes",
            "value": 7399.43387668664,
            "unit": "ns/iter",
            "extra": "iterations: 93923\ncpu: 7398.59588173291 ns\nthreads: 1"
          },
          {
            "name": "BM_ParseFormula/formula_54741_bytes",
            "value": 766480.4803493065,
            "unit": "ns/iter",
            "extra": "iterations: 916\ncpu: 766307.9978165937 ns\nthreads: 1"
          },
          {
            "name": "BM_ParseFormula/formula_6938400_bytes",
            "value": 139165024.49998802,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 139156773.75000036 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/uniform_random_3_sat_50vars_218clauses",
            "value": 983541.9255617975,
            "unit": "ns/iter",
            "extra": "iterations: 712\ncpu: 983500.4971910111 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/uniform_random_3_unsat_50vars_218clauses",
            "value": 1608667.5435780382,
            "unit": "ns/iter",
            "extra": "iterations: 436\ncpu: 1608506.4036697224 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/uniform_random_3_sat_100vars_430clauses",
            "value": 170807830.24999845,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 170789104.49999985 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/uniform_random_3_unsat_100vars_430clauses",
            "value": 75231503.44444376,
            "unit": "ns/iter",
            "extra": "iterations: 9\ncpu: 75225675.11111116 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/uniform_random_3_sat_250vars_1065clauses",
            "value": 33340771335,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 33333978179 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_1_sat_9685vars_55870clauses",
            "value": 806606601.999988,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 806468608.000003 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_2_sat_2810vars_11683clauses",
            "value": 5447709.307692059,
            "unit": "ns/iter",
            "extra": "iterations: 130\ncpu: 5446564.4076922955 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_4_sat_28161vars_139716clauses",
            "value": 14416610347.000074,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 14410996781.999998 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_5_sat_9396vars_41207clauses",
            "value": 80268539.33333516,
            "unit": "ns/iter",
            "extra": "iterations: 9\ncpu: 80259636.33333392 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_7_sat_8710vars_39774clauses",
            "value": 12953800.547170173,
            "unit": "ns/iter",
            "extra": "iterations: 53\ncpu: 12952906.377358537 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_13_sat_13215vars_65728clauses",
            "value": 2654324741325.9995,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 2654009853292 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/logistics_a_sat_828vars_6718clauses",
            "value": 12904576.444447635,
            "unit": "ns/iter",
            "extra": "iterations: 54\ncpu: 12903203.999999108 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/logistics_b_sat_843vars_7301clauses",
            "value": 10196911.884063212,
            "unit": "ns/iter",
            "extra": "iterations: 69\ncpu: 10195812.565216066 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/logistics_c_sat_1141vars_10719clauses",
            "value": 61523774.18179226,
            "unit": "ns/iter",
            "extra": "iterations: 11\ncpu: 61520102.636388235 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/logistics_d_sat_4713vars_21991clauses",
            "value": 17669619.874993715,
            "unit": "ns/iter",
            "extra": "iterations: 40\ncpu: 17667734.050007768 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_anomaly_sat_48vars_261clauses",
            "value": 87459.12137431986,
            "unit": "ns/iter",
            "extra": "iterations: 8033\ncpu: 87444.44491470081 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_medium_sat_116vars_953clauses",
            "value": 268347.2629969916,
            "unit": "ns/iter",
            "extra": "iterations: 2616\ncpu: 268308.97897559643 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_huge_sat_459vars_7054clauses",
            "value": 2915515.39583376,
            "unit": "ns/iter",
            "extra": "iterations: 240\ncpu: 2915152.8958342015 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_bw_large_a_sat_459vars_4675clauses",
            "value": 2592038.040740119,
            "unit": "ns/iter",
            "extra": "iterations: 270\ncpu: 2591726.055554857 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_bw_large_b_sat_1087vars_13772clauses",
            "value": 14159250.530610735,
            "unit": "ns/iter",
            "extra": "iterations: 49\ncpu: 14158026.897960981 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_bw_large_c_sat_3016vars_50457clauses",
            "value": 2257782753.999891,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 2257589521.999762 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_1_2vars_3clauses",
            "value": 14531.742902905979,
            "unit": "ns/iter",
            "extra": "iterations: 48083\ncpu: 14530.889441177282 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_2_6vars_9clauses",
            "value": 18130.565657618085,
            "unit": "ns/iter",
            "extra": "iterations: 38617\ncpu: 18129.732682492442 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_3_12vars_22clauses",
            "value": 37549.29028798246,
            "unit": "ns/iter",
            "extra": "iterations: 18647\ncpu: 37547.28803561599 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_4_20vars_45clauses",
            "value": 127339.05453881736,
            "unit": "ns/iter",
            "extra": "iterations: 5464\ncpu: 127329.19747435582 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_5_30vars_81clauses",
            "value": 1431416.2862987497,
            "unit": "ns/iter",
            "extra": "iterations: 489\ncpu: 1431276.7811857613 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_6_42vars_133clauses",
            "value": 36780232.6315876,
            "unit": "ns/iter",
            "extra": "iterations: 19\ncpu: 36779174.263158076 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_7_56vars_204clauses",
            "value": 3979121277.000104,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3978873314.9998736 ns\nthreads: 1"
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
          "id": "e4b0d8bee1e23465070a83d048ae40ec5bdc078e",
          "message": "Enable more benchmarks for benchmarks workflow",
          "timestamp": "2025-10-06T21:25:01+02:00",
          "tree_id": "c1fb0883a2d3dbb59fd0a5868921f77d16bf54a8",
          "url": "https://github.com/marcluque/YASER/commit/e4b0d8bee1e23465070a83d048ae40ec5bdc078e"
        },
        "date": 1759781530426,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_Resolution/3/5",
            "value": 174.5156447540974,
            "unit": "ns/iter",
            "extra": "iterations: 3822783\ncpu: 174.51050321192702 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/10/10",
            "value": 551.9122207296887,
            "unit": "ns/iter",
            "extra": "iterations: 1270767\ncpu: 551.8981481262891 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/1000/1000",
            "value": 112432.80455196573,
            "unit": "ns/iter",
            "extra": "iterations: 6283\ncpu: 112428.63647938878 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/10000/10000",
            "value": 1645191.2348837175,
            "unit": "ns/iter",
            "extra": "iterations: 430\ncpu: 1644862.2069767448 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/100000/100000",
            "value": 27831637.230769083,
            "unit": "ns/iter",
            "extra": "iterations: 26\ncpu: 27831012.807692315 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/1000000/1000000",
            "value": 959748318.0000026,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 959651672.9999998 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/5/1000",
            "value": 52116.611827876965,
            "unit": "ns/iter",
            "extra": "iterations: 13409\ncpu: 52110.85017525539 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/1000/5",
            "value": 52944.99002512218,
            "unit": "ns/iter",
            "extra": "iterations: 13534\ncpu: 52931.60144820451 ns\nthreads: 1"
          },
          {
            "name": "BM_ParseFormula/formula_35_bytes",
            "value": 7298.678110512357,
            "unit": "ns/iter",
            "extra": "iterations: 95772\ncpu: 7298.172242409055 ns\nthreads: 1"
          },
          {
            "name": "BM_ParseFormula/formula_54741_bytes",
            "value": 785672.0223463785,
            "unit": "ns/iter",
            "extra": "iterations: 895\ncpu: 785549.8201117311 ns\nthreads: 1"
          },
          {
            "name": "BM_ParseFormula/formula_6938400_bytes",
            "value": 141677028.49999842,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 141645911.74999997 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/uniform_random_3_sat_50vars_218clauses",
            "value": 993296.7268847952,
            "unit": "ns/iter",
            "extra": "iterations: 703\ncpu: 993292.8022759593 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/uniform_random_3_unsat_50vars_218clauses",
            "value": 1624083.8955916613,
            "unit": "ns/iter",
            "extra": "iterations: 431\ncpu: 1623979.914153132 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/uniform_random_3_sat_100vars_430clauses",
            "value": 175433878.99999985,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 175421976.50000003 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/uniform_random_3_unsat_100vars_430clauses",
            "value": 76340622.99999933,
            "unit": "ns/iter",
            "extra": "iterations: 9\ncpu: 76339055.77777769 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/uniform_random_3_sat_250vars_1065clauses",
            "value": 35564287283,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 35561062658.00001 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_1_sat_9685vars_55870clauses",
            "value": 814745755.0000042,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 814704626.9999976 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_2_sat_2810vars_11683clauses",
            "value": 5510284.12598427,
            "unit": "ns/iter",
            "extra": "iterations: 127\ncpu: 5510034.275590569 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_3_sat_14930vars_72106clauses",
            "value": 1357095553.9999971,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 1356998562.9999976 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_4_sat_28161vars_139716clauses",
            "value": 14594100374.000008,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 14591986522 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_5_sat_9396vars_41207clauses",
            "value": 79156548.66666777,
            "unit": "ns/iter",
            "extra": "iterations: 9\ncpu: 79150296.33333385 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_6_sat_51639vars_368352clauses",
            "value": 26455252118.999992,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 26447177527.999996 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_7_sat_8710vars_39774clauses",
            "value": 13432622.773585077,
            "unit": "ns/iter",
            "extra": "iterations: 53\ncpu: 13432136.981132071 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_galileo_8_sat_58074vars_294821clauses",
            "value": 15413609338.000015,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 15412577690.000006 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_galileo_9_sat_63624vars_326999clauses",
            "value": 20001985534,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 20000587628.999996 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_10_sat_59056vars_323700clauses",
            "value": 34562945934,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 34559705318.999985 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_11_sat_32109vars_150027clauses",
            "value": 38515092784.99998,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 38512326027.99999 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_13_sat_13215vars_65728clauses",
            "value": 2558827699910,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 2558622194987 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/logistics_a_sat_828vars_6718clauses",
            "value": 13026105.129626928,
            "unit": "ns/iter",
            "extra": "iterations: 54\ncpu: 13025437.851848876 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/logistics_b_sat_843vars_7301clauses",
            "value": 10338713.79411935,
            "unit": "ns/iter",
            "extra": "iterations: 68\ncpu: 10337479.79411547 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/logistics_c_sat_1141vars_10719clauses",
            "value": 61737979.9090982,
            "unit": "ns/iter",
            "extra": "iterations: 11\ncpu: 61732186.27273772 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/logistics_d_sat_4713vars_21991clauses",
            "value": 17644623.575006336,
            "unit": "ns/iter",
            "extra": "iterations: 40\ncpu: 17642007.77499809 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_anomaly_sat_48vars_261clauses",
            "value": 89280.52487526754,
            "unit": "ns/iter",
            "extra": "iterations: 7819\ncpu: 89277.46016112558 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_medium_sat_116vars_953clauses",
            "value": 270710.6960897497,
            "unit": "ns/iter",
            "extra": "iterations: 2583\ncpu: 270697.86759567936 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_huge_sat_459vars_7054clauses",
            "value": 2936511.373949726,
            "unit": "ns/iter",
            "extra": "iterations: 238\ncpu: 2936343.5504200724 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_bw_large_a_sat_459vars_4675clauses",
            "value": 2618792.616542287,
            "unit": "ns/iter",
            "extra": "iterations: 266\ncpu: 2618596.1503757373 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_bw_large_b_sat_1087vars_13772clauses",
            "value": 14292746.020406151,
            "unit": "ns/iter",
            "extra": "iterations: 49\ncpu: 14291191.081629593 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_bw_large_c_sat_3016vars_50457clauses",
            "value": 2263948921.000065,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 2263769186.99998 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_bw_large_d_sat_6325vars_131973clauses",
            "value": 3864262223.0004234,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3864039081.0001006 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_1_2vars_3clauses",
            "value": 14691.525042525986,
            "unit": "ns/iter",
            "extra": "iterations: 47619\ncpu: 14691.456162450211 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_2_6vars_9clauses",
            "value": 18097.057775113717,
            "unit": "ns/iter",
            "extra": "iterations: 38321\ncpu: 18095.22872576746 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_3_12vars_22clauses",
            "value": 37911.63164140166,
            "unit": "ns/iter",
            "extra": "iterations: 18539\ncpu: 37910.58455149383 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_4_20vars_45clauses",
            "value": 126893.3312783179,
            "unit": "ns/iter",
            "extra": "iterations: 5515\ncpu: 126868.24750679423 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_5_30vars_81clauses",
            "value": 1446910.5991734932,
            "unit": "ns/iter",
            "extra": "iterations: 484\ncpu: 1446827.5351247925 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_6_42vars_133clauses",
            "value": 38254377.05556093,
            "unit": "ns/iter",
            "extra": "iterations: 18\ncpu: 38250072.77777735 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_7_56vars_204clauses",
            "value": 4672795294.000025,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 4672392971.000135 ns\nthreads: 1"
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
          "id": "0339fe1beb5c3b1f6944c38c51d01cb8106b5697",
          "message": "Remove pigeon hole N=7 from tests",
          "timestamp": "2025-10-06T22:13:32+02:00",
          "tree_id": "1574987bfaf2968044ae2eacca0d6c2ed8fee6f8",
          "url": "https://github.com/marcluque/YASER/commit/0339fe1beb5c3b1f6944c38c51d01cb8106b5697"
        },
        "date": 1759784434061,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_Resolution/3/5",
            "value": 178.55516853258197,
            "unit": "ns/iter",
            "extra": "iterations: 3932296\ncpu: 178.54148416090754 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/10/10",
            "value": 559.4897143972698,
            "unit": "ns/iter",
            "extra": "iterations: 1254715\ncpu: 559.4200340316327 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/1000/1000",
            "value": 111740.75720620756,
            "unit": "ns/iter",
            "extra": "iterations: 6314\ncpu: 111731.30788723475 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/10000/10000",
            "value": 1651787.7035293542,
            "unit": "ns/iter",
            "extra": "iterations: 425\ncpu: 1651578.468235294 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/100000/100000",
            "value": 28866678.360000152,
            "unit": "ns/iter",
            "extra": "iterations: 25\ncpu: 28863569.039999995 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/1000000/1000000",
            "value": 978351212.0000068,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 978224357.9999994 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/5/1000",
            "value": 52037.450578607946,
            "unit": "ns/iter",
            "extra": "iterations: 13567\ncpu: 52034.28259747917 ns\nthreads: 1"
          },
          {
            "name": "BM_Resolution/1000/5",
            "value": 51877.43673104163,
            "unit": "ns/iter",
            "extra": "iterations: 13411\ncpu: 51873.66833196631 ns\nthreads: 1"
          },
          {
            "name": "BM_ParseFormula/formula_35_bytes",
            "value": 7441.289925793826,
            "unit": "ns/iter",
            "extra": "iterations: 94062\ncpu: 7440.784546363045 ns\nthreads: 1"
          },
          {
            "name": "BM_ParseFormula/formula_54741_bytes",
            "value": 795975.2305084736,
            "unit": "ns/iter",
            "extra": "iterations: 885\ncpu: 795915.666666666 ns\nthreads: 1"
          },
          {
            "name": "BM_ParseFormula/formula_6938400_bytes",
            "value": 136374664.49999636,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 136353683.49999988 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/uniform_random_3_sat_50vars_218clauses",
            "value": 993374.9133522437,
            "unit": "ns/iter",
            "extra": "iterations: 704\ncpu: 993327.772727272 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/uniform_random_3_unsat_50vars_218clauses",
            "value": 1625734.4501160297,
            "unit": "ns/iter",
            "extra": "iterations: 431\ncpu: 1625660.3039443134 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/uniform_random_3_sat_100vars_430clauses",
            "value": 175889012.25001052,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 175872323.4999997 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/uniform_random_3_unsat_100vars_430clauses",
            "value": 76630926.44444053,
            "unit": "ns/iter",
            "extra": "iterations: 9\ncpu: 76628647.33333328 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/uniform_random_3_sat_250vars_1065clauses",
            "value": 35381703571,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 35378370405 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_1_sat_9685vars_55870clauses",
            "value": 801700836.9999985,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 801625135.0000019 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_2_sat_2810vars_11683clauses",
            "value": 5562126.626983855,
            "unit": "ns/iter",
            "extra": "iterations: 126\ncpu: 5561260.134920624 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_3_sat_14930vars_72106clauses",
            "value": 1276021452.000009,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 1275936969 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_4_sat_28161vars_139716clauses",
            "value": 14582223966.000015,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 14580977805.000004 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_5_sat_9396vars_41207clauses",
            "value": 78230559.22222011,
            "unit": "ns/iter",
            "extra": "iterations: 9\ncpu: 78226193.22222124 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_6_sat_51639vars_368352clauses",
            "value": 26855358646.00001,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 26849412838.999996 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_7_sat_8710vars_39774clauses",
            "value": 12819602.581819046,
            "unit": "ns/iter",
            "extra": "iterations: 55\ncpu: 12818442.400000084 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_galileo_8_sat_58074vars_294821clauses",
            "value": 15726828264.999994,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 15721120279.000004 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_galileo_9_sat_63624vars_326999clauses",
            "value": 19624155355.99996,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 19622921153.999996 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_10_sat_59056vars_323700clauses",
            "value": 34770577618.00006,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 34768592623.000015 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_11_sat_32109vars_150027clauses",
            "value": 37986046585.99993,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 37983427929.000015 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_13_sat_13215vars_65728clauses",
            "value": 2548268521662,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 2548049723493 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/logistics_a_sat_828vars_6718clauses",
            "value": 13064145.35184996,
            "unit": "ns/iter",
            "extra": "iterations: 54\ncpu: 13063178.462962914 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/logistics_b_sat_843vars_7301clauses",
            "value": 10321861.72059322,
            "unit": "ns/iter",
            "extra": "iterations: 68\ncpu: 10321202.573530119 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/logistics_c_sat_1141vars_10719clauses",
            "value": 61970309.181808926,
            "unit": "ns/iter",
            "extra": "iterations: 11\ncpu: 61967430.72727755 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/logistics_d_sat_4713vars_21991clauses",
            "value": 17657746.999998383,
            "unit": "ns/iter",
            "extra": "iterations: 40\ncpu: 17656559.549993746 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_anomaly_sat_48vars_261clauses",
            "value": 87683.68052764729,
            "unit": "ns/iter",
            "extra": "iterations: 7960\ncpu: 87680.23128138782 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_medium_sat_116vars_953clauses",
            "value": 267438.39223307127,
            "unit": "ns/iter",
            "extra": "iterations: 2575\ncpu: 267427.9751456586 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_huge_sat_459vars_7054clauses",
            "value": 2947458.1764695947,
            "unit": "ns/iter",
            "extra": "iterations: 238\ncpu: 2947363.5504186745 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_bw_large_a_sat_459vars_4675clauses",
            "value": 2610245.3619407592,
            "unit": "ns/iter",
            "extra": "iterations: 268\ncpu: 2610090.141790501 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_bw_large_b_sat_1087vars_13772clauses",
            "value": 14281120.755102314,
            "unit": "ns/iter",
            "extra": "iterations: 49\ncpu: 14280480.265305026 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_bw_large_c_sat_3016vars_50457clauses",
            "value": 2263710078.999793,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 2263533274.999645 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_bw_large_d_sat_6325vars_131973clauses",
            "value": 3837482808.999994,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3837260552.9998507 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_1_2vars_3clauses",
            "value": 14880.13835827173,
            "unit": "ns/iter",
            "extra": "iterations: 47377\ncpu: 14878.912109248466 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_2_6vars_9clauses",
            "value": 18563.161837606745,
            "unit": "ns/iter",
            "extra": "iterations: 37723\ncpu: 18562.107175997142 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_3_12vars_22clauses",
            "value": 38041.12905691479,
            "unit": "ns/iter",
            "extra": "iterations: 18302\ncpu: 38038.57206864013 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_4_20vars_45clauses",
            "value": 127041.00672978259,
            "unit": "ns/iter",
            "extra": "iterations: 5498\ncpu: 127037.08657693579 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_5_30vars_81clauses",
            "value": 1441617.244856029,
            "unit": "ns/iter",
            "extra": "iterations: 486\ncpu: 1441503.997942392 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_6_42vars_133clauses",
            "value": 38542841.72222025,
            "unit": "ns/iter",
            "extra": "iterations: 18\ncpu: 38540584.833324626 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_7_56vars_204clauses",
            "value": 4719312862.000152,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 4719060630.000058 ns\nthreads: 1"
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
          "id": "7f5a81c0d6bcd96add2125741caee342117e8ddc",
          "message": "Improve binary resolve function",
          "timestamp": "2025-10-13T01:15:38+02:00",
          "tree_id": "ebd92f2261d4ac99eaf95337b9495a7095a9b906",
          "url": "https://github.com/marcluque/YASER/commit/7f5a81c0d6bcd96add2125741caee342117e8ddc"
        },
        "date": 1760311123575,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_ParseFormula/formula_35_bytes",
            "value": 7481.149799163106,
            "unit": "ns/iter",
            "extra": "iterations: 94106\ncpu: 7481.0949142456375 ns\nthreads: 1"
          },
          {
            "name": "BM_ParseFormula/formula_54741_bytes",
            "value": 776899.1350164976,
            "unit": "ns/iter",
            "extra": "iterations: 911\ncpu: 776830.4346871568 ns\nthreads: 1"
          },
          {
            "name": "BM_ParseFormula/formula_6938400_bytes",
            "value": 152539796.49999395,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 152531823.75000006 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/uniform_random_3_sat_50vars_218clauses",
            "value": 429132.4291845515,
            "unit": "ns/iter",
            "extra": "iterations: 1631\ncpu: 429059.2489270387 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/uniform_random_3_unsat_50vars_218clauses",
            "value": 823347.9529964743,
            "unit": "ns/iter",
            "extra": "iterations: 851\ncpu: 823324.4653348996 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/uniform_random_3_sat_100vars_430clauses",
            "value": 185555124.49999866,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 185537911.5000002 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/uniform_random_3_unsat_100vars_430clauses",
            "value": 90484288.71428119,
            "unit": "ns/iter",
            "extra": "iterations: 7\ncpu: 90480023.28571427 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/uniform_random_3_sat_250vars_1065clauses",
            "value": 62179000163.000015,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 62168097323.00001 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_1_sat_9685vars_55870clauses",
            "value": 692213373.0000155,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 692151623.0000008 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_2_sat_2810vars_11683clauses",
            "value": 4691547.516778346,
            "unit": "ns/iter",
            "extra": "iterations: 149\ncpu: 4691067.771812027 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_3_sat_14930vars_72106clauses",
            "value": 1375564945.0000079,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 1375420030.0000007 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_4_sat_28161vars_139716clauses",
            "value": 1235657618.0000048,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 1235575753.9999957 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_5_sat_9396vars_41207clauses",
            "value": 27745753.000001516,
            "unit": "ns/iter",
            "extra": "iterations: 25\ncpu: 27742692.439999815 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_6_sat_51639vars_368352clauses",
            "value": 4265002970.000012,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 4262820327 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_7_sat_8710vars_39774clauses",
            "value": 12344546.824562129,
            "unit": "ns/iter",
            "extra": "iterations: 57\ncpu: 12343506.280701712 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_galileo_8_sat_58074vars_294821clauses",
            "value": 6447657916.999958,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 6446838985.999989 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_galileo_9_sat_63624vars_326999clauses",
            "value": 9613803025.999971,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 9612913876.999996 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_10_sat_59056vars_323700clauses",
            "value": 1987668748.9999654,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 1987400629.9999962 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/bmc_ibm_11_sat_32109vars_150027clauses",
            "value": 2800794479.999979,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 2800384330 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/logistics_a_sat_828vars_6718clauses",
            "value": 6117397.201754265,
            "unit": "ns/iter",
            "extra": "iterations: 114\ncpu: 6116796.438596557 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/logistics_b_sat_843vars_7301clauses",
            "value": 6477063.324074568,
            "unit": "ns/iter",
            "extra": "iterations: 108\ncpu: 6476099.685185128 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/logistics_c_sat_1141vars_10719clauses",
            "value": 14627278.562500125,
            "unit": "ns/iter",
            "extra": "iterations: 48\ncpu: 14626010.250000061 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/logistics_d_sat_4713vars_21991clauses",
            "value": 10476826.26865616,
            "unit": "ns/iter",
            "extra": "iterations: 67\ncpu: 10476614.462686568 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_anomaly_sat_48vars_261clauses",
            "value": 83250.94733096228,
            "unit": "ns/iter",
            "extra": "iterations: 8430\ncpu: 83242.57544484017 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_medium_sat_116vars_953clauses",
            "value": 250791.9665587832,
            "unit": "ns/iter",
            "extra": "iterations: 2781\ncpu: 250777.45235526428 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_huge_sat_459vars_7054clauses",
            "value": 1665416.373809524,
            "unit": "ns/iter",
            "extra": "iterations: 420\ncpu: 1665213.2214285792 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_bw_large_a_sat_459vars_4675clauses",
            "value": 1623382.7199073667,
            "unit": "ns/iter",
            "extra": "iterations: 432\ncpu: 1623248.1874999958 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_bw_large_b_sat_1087vars_13772clauses",
            "value": 9708294.10958882,
            "unit": "ns/iter",
            "extra": "iterations: 73\ncpu: 9707548.164383624 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_bw_large_c_sat_3016vars_50457clauses",
            "value": 1860917413.999971,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 1860670286.0000012 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/blocksworld_bw_large_d_sat_6325vars_131973clauses",
            "value": 2332517737.9999785,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 2332230480.999996 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_1_2vars_3clauses",
            "value": 14823.648575648593,
            "unit": "ns/iter",
            "extra": "iterations: 47390\ncpu: 14822.735767039372 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_2_6vars_9clauses",
            "value": 17520.30071928056,
            "unit": "ns/iter",
            "extra": "iterations: 39901\ncpu: 17517.700258138742 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_3_12vars_22clauses",
            "value": 24952.06747898138,
            "unit": "ns/iter",
            "extra": "iterations: 28068\ncpu: 24949.911678780067 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_4_20vars_45clauses",
            "value": 60603.849948079136,
            "unit": "ns/iter",
            "extra": "iterations: 11556\ncpu: 60601.34112149455 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_5_30vars_81clauses",
            "value": 782728.9062500218,
            "unit": "ns/iter",
            "extra": "iterations: 896\ncpu: 782597.2890624922 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_6_42vars_133clauses",
            "value": 21716763.32258057,
            "unit": "ns/iter",
            "extra": "iterations: 31\ncpu: 21715364.000000235 ns\nthreads: 1"
          },
          {
            "name": "BM_DPLL/pigeon_hole_7_56vars_204clauses",
            "value": 2317971416.0000343,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 2317716442.0000052 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}