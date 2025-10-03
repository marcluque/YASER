window.BENCHMARK_DATA = {
  "lastUpdate": 1759534522901,
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
      }
    ]
  }
}