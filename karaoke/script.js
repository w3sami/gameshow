const imageChanges = [
  { timestamp: 0, url: "image/logo.png" },
  { timestamp: 23, url: "image/logo.png", fx: "pulse" },
  { timestamp: 27, url: "image/drinks1.png" },
  { timestamp: 31.7, url: "image/logo2.png", fx: "pulse" },
  { timestamp: 38, url: "image/säästellä.png" },
  { timestamp: 41, url: "image/palju.png" },
  { timestamp: 44, url: "image/pitääks.png" },
  { timestamp: 45, url: "image/kiljuu.png" },
  { timestamp: 46.5, url: "image/dj1.png" },
  { timestamp: 49, url: "image/dj2.png" },
  { timestamp: 51, url: "image/himatst.png" },
  { timestamp: 55, url: "image/jenkka.png" },
  { timestamp: 58, url: "image/keinua2.png" },
  { timestamp: 59, url: "image/keinua.png" },
  { timestamp: 60, url: "image/keinua2.png" },
  { timestamp: 61, url: "image/keinua.png" },
  { timestamp: 61.05, url: "image/keinua2.png", fx: "pulse2" },
  { timestamp: 62, url: "image/keinua.png" },
  { timestamp: 62.05, url: "image/keinua.png", fx: "pulse2" },
  { timestamp: 63, url: "image/keinua2.png" },
  { timestamp: 63.05, url: "image/keinua2.png", fx: "pulse2" },
  { timestamp: 64, url: "image/keinua.png" },
  { timestamp: 64.05, url: "image/keinua.png", fx: "pulse2" },
  { timestamp: 65, url: "image/keinua2.png" },
  { timestamp: 65.05, url: "image/keinua2.png", fx: "pulse2" },
  { timestamp: 66, url: "image/keinua.png" },
  { timestamp: 66.05, url: "image/keinua.png", fx: "pulse2" },
  { timestamp: 69, url: "image/keinua2.png", fx: "pulse2" },
  { timestamp: 70, url: "image/keinua.png", fx: "pulse2" },
  { timestamp: 71, url: "image/keinua2.png", fx: "pulse2" },
  { timestamp: 72, url: "image/keinua.png", fx: "pulse2" },
  { timestamp: 73, url: "image/keinua2.png" },
  { timestamp: 74, url: "image/keinua.png" },

  { timestamp: 75, url: "image/logo.png", fx: "pulse" },
  { timestamp: 82, url: "image/drinks2.png" },
  { timestamp: 86, url: "image/logo2.png", fx: "pulse" },
  { timestamp: 93, url: "image/pose.png" },

  { timestamp: 96, url: "image/fiiliksen.png" },
  { timestamp: 98, url: "image/satasta.png" },
  { timestamp: 101, url: "image/bensaa.png" },
  { timestamp: 103, url: "image/maradona.png" },
  { timestamp: 105, url: "image/vetten.png" },
  { timestamp: 108, url: "image/daavid.gif" },
  { timestamp: 111, url: "image/portit1.png", fx: "zoom" },
  { timestamp: 114, url: "image/portit2.png" },

  { timestamp: 115.5, url: "image/logo.png", fx: "pulse" },
  { timestamp: 121.88, url: "image/drinks1.png" },
  { timestamp: 124.0, url: "image/logo2.png", fx: "pulse" },
  { timestamp: 130.35, url: "image/pose.png" },

  { timestamp: 135, url: "image/logo.png" },
  { timestamp: 140, url: "image/pose.png" },
  { timestamp: 145, url: "image/logo2.png" },
  { timestamp: 150, url: "image/jumala1.png" },
  { timestamp: 154, url: "image/pitkää1.png" },
  { timestamp: 156.55, url: "image/pitkää2.png" },
  { timestamp: 162, url: "image/laulaa.png" },
  { timestamp: 166, url: "image/hereil1.png" },
  { timestamp: 168, url: "image/hereil2.png" },
  { timestamp: 171, url: "image/kaakkoon.png" },

  { timestamp: 174, url: "image/logo.png", fx: "pulse" },
  { timestamp: 179, url: "image/drinks1.png" },
  { timestamp: 184, url: "image/logo2.png", fx: "pulse" },
  { timestamp: 189, url: "image/drinks1.png" },
  { timestamp: 194, url: "image/logo.png", fx: "pulse" },
  { timestamp: 199, url: "image/pose.png", fx: "pulse" },
  { timestamp: 204, url: "image/logo2.png", fx: "pulse" },
  { timestamp: 209, url: "image/jumala1.png", fx: "pulse" },
];
// rettier-ignore
const lyrics = [
  { text: "", times: [0, 1] },
  { text: "", times: [20.06] },
  {
    text: "Pik-ku-jou-lut — bud-jet-ti e-del-lä",
    times: [
      21,
      1.44000000000000057,
      1.7200000000000074,
      2.06999999999999886,
      2.3000000000000057,
      3.269999999999996,
      3.460000000000008,
      3.5700000000000074,
      3.8400000000000034,
      4.0600000000000023,
      4.1500000000000057,
      4.6300000000000097,
    ],
  },
  {
    text: "Mut ei kai si-tä sen-tään i-han pel-käl-lä ve-del-lä",
    times: [
      26.56,
      0.3200000000000074,
      0.45000000000000284,
      0.6099999999999994,
      0.75,
      0.9100000000000108,
      1,
      1.1,
      2.530000000000001,
      2.6700000000000017,
      2.8300000000000125,
      2.980000000000004,
      3.1500000000000057,
      3.3000000000000114,
      3.469999999999999,
      3.6099999999999994,
    ],
  },
  {
    text: "Pik-ku-jou-lut — bud-jet-ti e-del-lä?",
    times: [
      31.48,
      0.4099999999999966,
      0.5499999999999972,
      0.7000000000000028,
      1.2099999999999937,
      2.5,
      2.9299999999999926,
      3.0600000000000023,
      3.219999999999999,
      3.3900000000000006,
      3.539999999999992,
      3.8899999999999864,
    ],
  },
  {
    text: "Yks on var-maa, tän-ää ei sääs-tel-lä!!",
    times: [
      36.47,
      0.789999999999992,
      0.9299999999999784,
      1.079999999999984,
      1.2299999999999898,
      2.8900000000000034,
      3.019999999999999,
      3.1799999999999955,
      3.519999999999982,
      3.6699999999999875,
      3.8799999999999955,
    ],
  },
  {
    text: "Si-sä-pi-hal-le kär-ryl-lä sau-naa se-kä pal-juu",
    times: [
      41.38,
      0.259999999999998,
      0.39000000000000057,
      0.529999999999994,
      0.6799999999999997,
      0.8200000000000003,
      0.9799999999999969,
      1.1299999999999955,
      1.3799999999999955,
      1.509999999999998,
      1.6499999999999986,
      1.7999999999999972,
      1.9399999999999977,
      2.0799999999999983,
      2.229999999999997,
    ],
  },
  {
    text: "En-täs sit vii-nat, pi-tääx juo-da kil-juu?",
    times: [
      44.13,
      0.14000000000000057,
      0.28999999999999915,
      0.4199999999999946,
      0.5700000000000003,
      0.7399999999999949,
      1.3599999999999994,
      1.4899999999999949,
      1.6400000000000006,
      1.7899999999999991,
      1.9199999999999946,
      2.0799999999999983,
    ],
  },
  {
    text: "Mu-sat il-man te-os-too, o-ma-kus-tan-teis-ti",
    times: [
      46.61,
      0.14000000000000057,
      0.2700000000000031,
      0.4100000000000037,
      0.5799999999999983,
      0.7100000000000009,
      0.8599999999999994,
      1.0499999999999972,
      1.2999999999999972,
      1.4399999999999977,
      1.5900000000000034,
      1.740000000000002,
      1.8900000000000006,
      2.039999999999999,
    ],
  },
  {
    text: "Ei A-vii-cii, ei Ties-too, vaan ko-ti-polt-to-se-sti",
    times: [
      48.85,
      0.1599999999999966,
      0.30999999999999517,
      0.44999999999999574,
      0.7299999999999969,
      0.8900000000000006,
      1.0300000000000011,
      1.1799999999999997,
      1.3299999999999983,
      1.490000000000002,
      1.6400000000000006,
      1.8099999999999952,
      1.9499999999999957,
      2.1099999999999994,
      2.259999999999998,
    ],
  },
  {
    text: "Mut ä-lä sie jää hi-ma-toi-mis-tol-le tunk-kaa",
    times: [
      51.46,
      0.1599999999999966,
      0.29999999999999716,
      0.44999999999999574,
      0.6099999999999994,
      0.7899999999999991,
      0.9299999999999997,
      1.1400000000000006,
      1.3100000000000023,
      1.4600000000000009,
      1.6199999999999974,
      1.769999999999996,
      2.0700000000000003,
    ],
  },
  {
    text: "Vaa tuu mei-än kaa .... Tans-sii lent-ka-jen-kaa",
    times: [
      54.04,
      0.14000000000000057,
      0.28999999999999915,
      0.4399999999999977,
      0.6000000000000014,
      0.740000000000002,
      0.7999999999999986,
      1.3100000000000023,
      1.4500000000000028,
      1.6000000000000014,
      1.759999999999998,
      1.9200000000000017,
      2,
    ],
  },
  {
    text: "Hei Jou-lu on tu-los pi-tää muis-taa ol-la kilt-ti",
    times: [
      56.42,
      0.14999999999999858,
      0.29999999999999716,
      0.46000000000000085,
      0.6199999999999974,
      0.7999999999999972,
      0.9399999999999977,
      1.1000000000000014,
      1.269999999999996,
      1.4399999999999977,
      1.6099999999999994,
      1.759999999999998,
      1.9200000000000017,
      2.0799999999999983,
      2.229999999999997,
    ],
  },
  {
    text: "An-na lan-teen kein-ua tuh-mas-ti sil-ti",
    times: [
      58.84,
      0.13999999999999346,
      0.29999999999999716,
      0.45999999999999375,
      0.6299999999999955,
      0.779999999999994,
      0.9399999999999977,
      1.1199999999999974,
      1.3099999999999952,
      1.6499999999999986,
      2.219999999999999,
      2.3999999999999986,
    ],
  },
  { text: "", times: [63.35] },
  { text: "", times: [73.35] },
  {
    text: "Pik-ku-jou-lut — bud-jet-ti e-del-lä",
    times: [
      75.09,
      0.9899999999999949,
      1.1299999999999955,
      1.4099999999999966,
      1.5699999999999932,
      2.9599999999999937,
      3.3699999999999903,
      3.489999999999995,
      3.8100000000000023,
      3.950000000000003,
      4.099999999999994,
      4.359999999999999,
    ],
  },
  {
    text: "Mut ei kai si-tä sen-tään i-han pel-käl-lä ve-del-lä",
    times: [
      80.39,
      0.3200000000000074,
      0.45000000000000284,
      0.6099999999999994,
      0.75,
      0.9100000000000108,
      1,
      1.1,
      2.530000000000001,
      2.6700000000000017,
      2.8300000000000125,
      2.980000000000004,
      3.1500000000000057,
      3.3000000000000114,
      3.469999999999999,
      3.6099999999999994,
    ],
  },
  {
    text: "Pik-ku-jou-lut — bud-jet-ti e-del-lä?",
    times: [
      85.14,
      0.769999999999996,
      0.9200000000000017,
      1.1700000000000017,
      1.3199999999999932,
      1.6500000000000057,
      3.239999999999995,
      3.3799999999999955,
      3.530000000000001,
      3.6899999999999977,
      3.8400000000000034,
      4.310000000000002,
    ],
  },
  {
    text: "Yks on var-maa, tän-ää ei sääs-tel-lä!!",
    times: [
      90.19,
      0.45000000000000284,
      0.5799999999999983,
      0.8799999999999955,
      1.0400000000000063,
      2.990000000000009,
      3.469999999999999,
      3.469999999999999,
      3.469999999999999,
      3.6200000000000045,
      3.680000000000007,
    ],
  },
  { text: "", times: [94.93] },
  { text: "", times: [95] },
  {
    text: "Ve-dän fii-lik-sen mu-kaan mut vie-lä a-jat-te-len jär-jel-lä",
    times: [
      95.18,
      0.3999999999999915,
      0.539999999999992,
      0.6699999999999875,
      0.8199999999999932,
      0.9699999999999989,
      1.1099999999999994,
      1.259999999999991,
      1.3899999999999864,
      1.529999999999987,
      1.6699999999999875,
      1.809999999999988,
      1.9599999999999937,
      2.089999999999989,
      2.239999999999995,
      2.3799999999999955,
      2.519999999999996,
      2.6699999999999875,
    ],
  },
  {
    text: "Sa-tas-ta mut-kaan ja pe-rä lui-suu e-del-lä",
    times: [
      98.11,
      0.15000000000000568,
      0.5600000000000023,
      0.5600000000000023,
      0.5600000000000023,
      0.7000000000000028,
      0.8299999999999983,
      0.9599999999999937,
      1.1099999999999994,
      1.25,
      1.4000000000000057,
      1.5300000000000011,
      1.7600000000000051,
      1.8499999999999943,
    ],
  },
  {
    text: "Ben-saa on suo-nis-sa ni hy-vä si-tä ve-del-lä",
    times: [
      100.49,
      0.27000000000001023,
      0.4300000000000068,
      0.5799999999999983,
      0.7400000000000091,
      0.8900000000000006,
      1.0500000000000114,
      1.210000000000008,
      1.3599999999999994,
      1.5100000000000051,
      1.6700000000000017,
      1.8299999999999983,
      1.980000000000004,
      2.1400000000000006,
      2.2900000000000063,
    ],
  },
  {
    text: "Ma-ra-do-nan mal-liin Ju-ma-lan kä-del-lä",
    times: [
      103.05,
      0.04999999999999716,
      0.1700000000000017,
      0.3299999999999983,
      0.7400000000000091,
      0.75,
      0.8900000000000006,
      0.9699999999999989,
      1.25,
      1.4000000000000057,
      1.5499999999999972,
      1.730000000000004,
      1.8800000000000097,
    ],
  },
  {
    text: "Mul-la fii-lis on et vet-ten pääl-lä voi kä-vel-lä",
    times: [
      105.26,
      0.12999999999999545,
      0.2599999999999909,
      0.3999999999999915,
      0.5599999999999881,
      1.1099999999999994,
      1.309999999999988,
      1.4399999999999977,
      1.5799999999999983,
      1.7399999999999949,
      1.8900000000000006,
      2.039999999999992,
      2.1999999999999886,
      2.3499999999999943,
      2.5,
    ],
  },
  {
    text: "Daa-vi-din sor-mel-la tai-vas-ta hi-vel-lä",
    times: [
      107.93,
      0.12999999999999545,
      0.2799999999999869,
      0.4299999999999926,
      0.5899999999999892,
      0.7399999999999949,
      1.0499999999999972,
      1.1899999999999977,
      1.3399999999999892,
      1.5,
      1.6599999999999966,
      1.809999999999988,
      1.9599999999999937,
    ],
  },
  {
    text: "Kaik-kee voi saa-da, hy-väl-lä tai pa-hal-la",
    times: [
      110.22,
      0.15000000000000568,
      0.29000000000000625,
      0.45000000000000284,
      0.6200000000000045,
      0.7800000000000011,
      0.9399999999999977,
      1.3799999999999955,
      1.5300000000000011,
      1.6899999999999977,
      1.8499999999999943,
      2.019999999999996,
      2.1700000000000017,
    ],
  },
  {
    text: "Mut tai-vaan por-tit au-kee ei, ai-na-kaan ra-hal-la",
    times: [
      112.72,
      0.15000000000000568,
      0.29000000000000625,
      0.45000000000000284,
      0.5999999999999943,
      0.75,
      0.8799999999999955,
      1.1099999999999966,
      1.1199999999999966,
      1.4399999999999977,
      1.4699999999999989,
      1.5,
      1.5300000000000011,
      1.5600000000000023,
      1.5900000000000034,
    ],
  },
  { text: "", times: [115.15] },
  { text: "", times: [115.25] },
  {
    text: "Pik-ku-jou-lut — bud-jet-ti e-del-lä",
    times: [
      115.3,
      0.14000000000000057,
      0.3200000000000074,
      0.46999999999999886,
      0.9000000000000057,
      2.269999999999996,
      2.460000000000008,
      2.5700000000000074,
      2.8400000000000034,
      3.0600000000000023,
      3.1500000000000057,
      3.6300000000000097,
    ],
  },
  {
    text: "Mut ei kai si-tä sen-tään i-han pel-käl-lä ve-del-lä",
    times: [
      119.85,
      0.3200000000000074,
      0.45000000000000284,
      0.6099999999999994,
      0.75,
      0.9100000000000108,
      1,
      1.1,
      2.530000000000001,
      2.6700000000000017,
      2.8300000000000125,
      2.980000000000004,
      3.1500000000000057,
      3.3000000000000114,
      3.469999999999999,
      3.6099999999999994,
    ],
  },
  {
    text: "Pik-ku-jou-lut — bud-jet-ti e-del-lä?",
    times: [
      124.56,
      0.4099999999999966,
      0.5499999999999972,
      0.7000000000000028,
      1.2099999999999937,
      2.5,
      2.9299999999999926,
      3.0600000000000023,
      3.219999999999999,
      3.3900000000000006,
      3.539999999999992,
      3.8899999999999864,
    ],
  },
  {
    text: "Yks on var-maa, tän-ää ei sääs-tel-lä!!",
    times: [
      129.27,
      0.789999999999992,
      0.9299999999999784,
      1.079999999999984,
      1.2299999999999898,
      3.0900000000000034,
      3.219999999999999,
      3.3799999999999955,
      3.519999999999982,
      3.6699999999999875,
      3.8799999999999955,
    ],
  },
  { text: "", times: [134.03] },
  { text: "", times: [134.35] },
  {
    text: "Pik-ku-jou-lut",
    times: [
      134.81,
      0.10999999999998522,
      0.25,
      1.289999999999992,
      1.4099999999999966,
    ],
  },
  { text: "", times: [138.72] },
  { text: "", times: [139] },
  {
    text: "Pik-ku-jou-lut",
    times: [
      144.25,
      0.4900000000000091,
      0.6299999999999955,
      0.9799999999999898,
      1.1100000000000136,
    ],
  },
  { text: "", times: [147.72] },
  { text: "", times: [150.72] },
  {
    text: "Pit-kää pää-tyyn ja pus-ke-taan pe-rään",
    times: [
      153.79,
      0.5900000000000034,
      0.7300000000000182,
      0.8499999999999943,
      1.0300000000000011,
      1.5900000000000034,
      1.7300000000000182,
      1.8799999999999955,
      2,
      2.140000000000015,
      2.2900000000000205,
    ],
  },
  {
    text: "Ai-na val-mii-na uu-teen er-ään!",
    times: [
      156.66,
      0.2599999999999909,
      0.37999999999999545,
      0.5300000000000011,
      0.6800000000000068,
      0.8199999999999932,
      1,
      1.1599999999999966,
      1.3000000000000114,
      1.450000000000017,
    ],
  },
  {
    text: "Vaik-ka myö-hään me-nee, it-te-ni ker-ään",
    times: [
      158.8,
      0.339999999999975,
      0.46999999999999886,
      0.5999999999999943,
      0.7399999999999807,
      0.8999999999999773,
      1.7199999999999989,
      1.8599999999999852,
      2,
      2.1499999999999773,
      2.299999999999983,
      2.4399999999999977,
    ],
  },
  {
    text: "Ja skarp-paan asen-tee-ni uu-teen te-rään",
    times: [
      161.67,
      0.140000000000025,
      0.160000000000025,
      0.28000000000000114,
      0.410000000000025,
      0.5700000000000216,
      0.7800000000000011,
      0.9400000000000261,
      1.1200000000000045,
      1.2600000000000193,
      1.410000000000025,
    ],
  },
  {
    text: "Mi-tä pie-net pe-räs-sä, si-tä i-sot e-del-lä",
    times: [
      163.87,
      0.1699999999999875,
      0.37999999999999545,
      0.44999999999998863,
      0.6399999999999864,
      0.7800000000000011,
      0.9399999999999977,
      1.4199999999999875,
      1.579999999999984,
      1.710000000000008,
      1.8499999999999943,
      2,
      2.1399999999999864,
      2.280000000000001,
      2.430000000000007,
    ],
  },
  {
    text: "Tu-lin tän-ne kat-too, oot-teks te tääl he-reil-lä?!",
    times: [
      166.63,
      0.14000000000001478,
      0.2599999999999909,
      0.4000000000000057,
      0.5500000000000114,
      0.6899999999999977,
      0.8400000000000034,
      1.210000000000008,
      1.3400000000000034,
      1.4800000000000182,
      1.6299999999999955,
      1.7700000000000102,
      1.920000000000016,
      2.0900000000000034,
    ],
  },
  {
    text: "Täs ois taas pa-ri jut-tua tut-tua vi-rel-lä",
    times: [
      169.32,
      0,
      0,
      0.15000000000000568,
      0.27000000000001023,
      0.4000000000000057,
      0.5699999999999932,
      0.7300000000000182,
      0.8900000000000148,
      1.0999999999999943,
      1.170000000000016,
      1.3300000000000125,
      1.4800000000000182,
    ],
  },
  {
    text: "Vie-lä ker-ran nu-pit kaak-koo näil-lä pop-pi-veh-keil-lä!!",
    times: [
      171,
      0.12000000000000455,
      0.25,
      0.37000000000000455,
      0.5200000000000102,
      0.6500000000000057,
      1.1500000000000057,
      1.1800000000000068,
      1.210000000000008,
      1.240000000000009,
      1.2700000000000102,
      1.3000000000000114,
      1.3300000000000125,
      1.3600000000000136,
      1.3899999999999864,
      1.4199999999999875,
    ],
  },
  { text: "", times: [173.74] },
  { text: "", times: [173.84] },
  {
    text: "Pik-ku-jou-lut — bud-jet-ti e-del-lä",
    times: [
      174,
      0.13999999999998636,
      0.25,
      0.37999999999999545,
      0.5300000000000011,
      2.009999999999991,
      2.4499999999999886,
      2.5900000000000034,
      2.7299999999999898,
      2.9000000000000057,
      3.0500000000000114,
      3.1899999999999977,
    ],
  },
  {
    text: "Mut ei kai si-tä sen-tään i-han pel-käl-lä ve-del-lä",
    times: [
      178.56,
      0.3200000000000074,
      0.45000000000000284,
      0.6099999999999994,
      0.75,
      0.9100000000000108,
      1,
      1.1,
      2.530000000000001,
      2.6700000000000017,
      2.8300000000000125,
      2.980000000000004,
      3.1500000000000057,
      3.3000000000000114,
      3.469999999999999,
      3.6099999999999994,
    ],
  },
  {
    text: "Pik-ku-jou-lut — bud-jet-ti e-del-lä?",
    times: [
      183.34,
      0.28000000000000114,
      0.4399999999999977,
      0.5999999999999943,
      0.8899999999999864,
      1.329999999999984,
      2.719999999999999,
      2.8499999999999943,
      3,
      3.1500000000000057,
      3.299999999999983,
      3.4399999999999977,
    ],
  },
  {
    text: "Yks on var-maa, tän-ää ei sääs-tel-lä!!",
    times: [
      187.95,
      0.7300000000000182,
      0.8600000000000136,
      1.0100000000000193,
      1.170000000000016,
      3.1100000000000136,
      3.240000000000009,
      3.390000000000015,
      3.5500000000000114,
      3.700000000000017,
      3.8500000000000227,
    ],
  },
  { text: "", times: [192.96] },
  { text: "", times: [193] },
  {
    text: "Pik-ku-jou-lut — bud-jet-ti e-del-lä",
    times: [
      193.38,
      0.21000000000000796,
      0.3400000000000034,
      0.5800000000000125,
      0.9800000000000182,
      2.1899999999999977,
      2.509999999999991,
      2.6500000000000057,
      2.8000000000000114,
      2.960000000000008,
      3.1200000000000045,
      3.259999999999991,
    ],
  },
  {
    text: "Mut ei kai si-tä sen-tään i-han pel-käl-lä ve-del-lä",
    times: [
      197.6,
      0.3200000000000074,
      0.45000000000000284,
      0.6099999999999994,
      0.75,
      0.9100000000000108,
      1,
      1.1,
      2.530000000000001,
      2.6700000000000017,
      2.8300000000000125,
      2.980000000000004,
      3.1500000000000057,
      3.3000000000000114,
      3.469999999999999,
      3.6099999999999994,
    ],
  },
  {
    text: "Pik-ku-jou-lut — bud-jet-ti e-del-lä?",
    times: [
      202.88,
      0.46999999999999886,
      0.6100000000000136,
      0.8900000000000148,
      1.3100000000000023,
      2.6599999999999966,
      2.969999999999999,
      3.1100000000000136,
      3.259999999999991,
      3.4099999999999966,
      3.5600000000000023,
      3.6899999999999977,
    ],
  },
  {
    text: "Yks on var-maa, tän-ää ei sääs-tel-lä!!",
    times: [
      207.39,
      0.9200000000000159,
      1.0500000000000114,
      1.200000000000017,
      1.3500000000000227,
      3.230000000000018,
      3.3600000000000136,
      3.480000000000018,
      3.670000000000016,
      3.7700000000000102,
      3.910000000000025,
    ],
  },

  { text: "", times: [213.84] },
  { text: "", times: [214] },
];

let currentImageIndex = 0;
let currentLyricsIndex = 0;
let karaokeScreen;
let startTime;
let lyricsContainer;

function updateImage() {
  if (currentImageIndex < imageChanges.length) {
    const currentTime = Date.now();
    const elapsedTime = (currentTime - startTime) / 1000; // Time in seconds since start
    if (elapsedTime >= imageChanges[currentImageIndex].timestamp) {
      nextImage();
    }
  }
}
function nextImage() {
  karaokeScreen.style.backgroundImage = `url('${imageChanges[currentImageIndex].url}')`;
  karaokeScreen.className = "karaoke-screen";
  karaokeScreen.classList.add(imageChanges[currentImageIndex].fx);
  currentImageIndex++;
}
function init() {
  karaokeScreen = document.querySelector(".karaoke-screen");
  lyricsContainer = document.querySelector(".lyrics-container");
  timeContainer = document.querySelector(".time-container");
}
document.addEventListener("DOMContentLoaded", init);
let syllables;
function processLine() {
  function getText(line) {
    if (!line.text) {
      return "";
    }
    return (
      "<p>" +
      line.text
        .split(" ")
        .map((word) =>
          word
            .split("-")
            .map((syllable) => `<span class="syllable">${syllable}</span>`)
            .join("")
        )
        .join(" ") +
      "</p>"
    );
  }
  const line = lyrics[currentLyricsIndex];
  let texts = getText(line);
  if (lyrics[currentLyricsIndex + 1]?.text) {
    texts += getText(lyrics[currentLyricsIndex + 1]);
  }
  lyricsContainer.innerHTML = texts;
  syllables = lyricsContainer.querySelectorAll(".syllable");

  line.times.forEach((time, index) => {
    if (!index) {
      return;
    }
    setTimeout(() => {
      syllables[index - 1].classList.add("color-change");
    }, time * 1000);
  });
}

function displayLine() {
  processLine();
}

function nextLyricsLine() {
  if (currentLyricsIndex < lyrics.length) {
    currentLyricsIndex++;
    displayLine();
  }
}

function updateLyrics() {
  if (currentLyricsIndex < lyrics.length) {
    const currentTime = Date.now();
    const elapsedTime = (currentTime - startTime) / 1000; // Time in seconds since start
    if (elapsedTime >= lyrics[currentLyricsIndex + 1].times[0]) {
      nextLyricsLine();
    }
  }
}
let playing = false;
function recordSpacePress(event) {
  if ((event.keyCode === 13 || event.keyCode === 32) && !playing) {
    playing = true;
    setInterval(updateImage, 50);
    if (event.keyCode === 13) {
      setInterval(updateLyrics, 50);
    }

    /*
    setInterval(() => {
      const currentTime = Date.now();
      const elapsedTime = Number(((currentTime - startTime) / 1000).toFixed(2)); // Time in seconds since start, with 2 decimal places
      timeContainer.innerText = elapsedTime;
    }, 50);*/

    const song = document.getElementById("song");
    song.play();
    startTime = Date.now(); // Store the start time
  }
  const currentTime = Date.now();
  const elapsedTime = Number(((currentTime - startTime) / 1000).toFixed(2)); // Time in seconds since start, with 2 decimal places

  if (event.keyCode === 88) {
    // x
    nextLyricsLine();
    // keyCode for space bar is 32

    lyrics[currentLyricsIndex].times = [elapsedTime];
  }

  if (event.keyCode === 90) {
    if (lyrics[currentLyricsIndex].times.length - 1 < syllables.length) {
      lyrics[currentLyricsIndex].times.push(
        Number(
          (elapsedTime - (lyrics[currentLyricsIndex].times[0] || 0)).toFixed(2)
        )
      );

      syllables[lyrics[currentLyricsIndex].times.length - 2].classList.add(
        "color-change"
      );
    }
  }

  if (event.keyCode === 89) {
    console.log(JSON.stringify(lyrics));
  }
}

document.addEventListener("keydown", recordSpacePress);
