window.BENCHMARK_DATA = {
  "lastUpdate": 1759545857206,
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
      }
    ]
  }
}