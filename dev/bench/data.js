window.BENCHMARK_DATA = {
  "lastUpdate": 1759535959741,
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
      }
    ]
  }
}