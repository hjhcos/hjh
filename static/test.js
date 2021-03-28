/** * 测试数据 * @type {arry} *//*2021-03-22 18:32:03*/
var ishb = false;
/*基金或股票信息*/
var fS_name = "华宝中证医疗指数";
var fS_code = "162412";
/*原费率*/
var fund_sourceRate = "1.20";
/*现费率*/
var fund_Rate = "0.12";
/*最小申购金额*/
var fund_minsg = "100";
/*基金持仓股票代码*/
var stockCodes = ["6032591", "3007602", "3000152", "3003472", "6007631", "0020442", "3006772", "3000032", "6038821", "3005952"];/*基金持仓债券代码*/
var zqCodes = "";
/*基金持仓股票代码(新市场号)*/
var stockCodesNew = ["1.603259", "0.300760", "0.300015", "0.300347", "1.600763", "0.002044", "0.300677", "0.300003", "1.603882", "0.300595"];/*基金持仓债券代码（新市场号）*/
var zqCodesNew = "";
/*收益率*//*近一年收益率*/
var syl_1n = "56.23";
/*近6月收益率*/
var syl_6y = "5.35";
/*近三月收益率*/
var syl_3y = "-4.27";
/*近一月收益率*/
var syl_1y = "-20.8";
/*股票仓位测算图*/
var Data_fundSharesPositions = [[1613923200000, 91.5600], [1614009600000, 93.8600], [1614096000000, 95.00], [1614182400000, 95.00], [1614268800000, 95.00], [1614528000000, 95.00], [1614614400000, 89.0100], [1614700800000, 99.1500], [1614787200000, 95.00], [1614873600000, 95.00], [1615132800000, 97.0500], [1615219200000, 92.00], [1615305600000, 95.00], [1615392000000, 95.00], [1615478400000, 92.2700], [1615737600000, 91.3500], [1615824000000, 90.2900], [1615910400000, 95.3500], [1615996800000, 94.9600], [1616083200000, 92.600]];
/*单位净值走势 equityReturn-净值回报 unitMoney-每份派送金*/
var Data_netWorthTrend =
    [
        {"x": 1432137600000, "y": 1.0, "equityReturn": 0, "unitMoney": ""},
        {
            "x": 1432224000000,
            "y": 1.0,
            "equityReturn": 0.0,
            "unitMoney": ""
        }, {"x": 1432483200000, "y": 1.0, "equityReturn": 0.0, "unitMoney": ""}, {
        "x": 1432569600000,
        "y": 1.0015,
        "equityReturn": 0.15,
        "unitMoney": ""
    }, {"x": 1432656000000, "y": 0.9997, "equityReturn": -0.1797, "unitMoney": ""}, {
        "x": 1432742400000,
        "y": 0.9916,
        "equityReturn": -0.8102,
        "unitMoney": ""
    }, {"x": 1432828800000, "y": 0.9954, "equityReturn": 0.3832, "unitMoney": ""}, {
        "x": 1433088000000,
        "y": 1.0068,
        "equityReturn": 1.1453,
        "unitMoney": ""
    }, {"x": 1433174400000, "y": 1.0158, "equityReturn": 0.8939, "unitMoney": ""}, {
        "x": 1433260800000,
        "y": 1.0157,
        "equityReturn": -0.0098,
        "unitMoney": ""
    }, {"x": 1433347200000, "y": 1.0158, "equityReturn": 0.0098, "unitMoney": ""}, {
        "x": 1433433600000,
        "y": 1.0137,
        "equityReturn": -0.2067,
        "unitMoney": ""
    }, {"x": 1433692800000, "y": 1.0025, "equityReturn": -1.1049, "unitMoney": ""}, {
        "x": 1433779200000,
        "y": 1.0027,
        "equityReturn": 0.02,
        "unitMoney": ""
    }, {"x": 1433865600000, "y": 1.0138, "equityReturn": 1.107, "unitMoney": ""}, {
        "x": 1433952000000,
        "y": 1.0206,
        "equityReturn": 0.6707,
        "unitMoney": ""
    }, {"x": 1434038400000, "y": 1.032, "equityReturn": 1.117, "unitMoney": ""}, {
        "x": 1434297600000,
        "y": 0.9989,
        "equityReturn": -3.2074,
        "unitMoney": ""
    }, {"x": 1434384000000, "y": 0.9687, "equityReturn": -3.0233, "unitMoney": ""}, {
        "x": 1434470400000,
        "y": 0.9944,
        "equityReturn": 2.653,
        "unitMoney": ""
    }, {"x": 1434556800000, "y": 0.9349, "equityReturn": -5.9835, "unitMoney": ""}, {
        "x": 1434643200000,
        "y": 0.8679,
        "equityReturn": -7.1665,
        "unitMoney": ""
    }, {"x": 1434988800000, "y": 0.8774, "equityReturn": 1.0946, "unitMoney": ""}, {
        "x": 1435075200000,
        "y": 0.8793,
        "equityReturn": 0.2165,
        "unitMoney": ""
    }, {"x": 1435161600000, "y": 0.8469, "equityReturn": -3.6847, "unitMoney": ""}, {
        "x": 1435248000000,
        "y": 0.7712,
        "equityReturn": -8.9385,
        "unitMoney": ""
    }, {"x": 1435507200000, "y": 0.7113, "equityReturn": -7.7671, "unitMoney": ""}, {
        "x": 1435593600000,
        "y": 0.7591,
        "equityReturn": 6.7201,
        "unitMoney": ""
    }, {"x": 1435680000000, "y": 0.7278, "equityReturn": -4.1233, "unitMoney": ""}, {
        "x": 1435766400000,
        "y": 0.689,
        "equityReturn": -5.3311,
        "unitMoney": ""
    }, {"x": 1435852800000, "y": 0.6685, "equityReturn": -2.9753, "unitMoney": ""}, {
        "x": 1436112000000,
        "y": 0.6472,
        "equityReturn": -3.1862,
        "unitMoney": ""
    }, {"x": 1436198400000, "y": 0.596, "equityReturn": -7.911, "unitMoney": ""}, {
        "x": 1436284800000,
        "y": 1.0,
        "equityReturn": -4.7148,
        "unitMoney": "拆分：每份基金份额折算0.567900008份"
    }, {"x": 1436371200000, "y": 1.0122, "equityReturn": 1.22, "unitMoney": ""}, {
        "x": 1436457600000,
        "y": 1.0498,
        "equityReturn": 3.7147,
        "unitMoney": ""
    }, {"x": 1436716800000, "y": 1.0982, "equityReturn": 4.6104, "unitMoney": ""}, {
        "x": 1436803200000,
        "y": 1.1206,
        "equityReturn": 2.0397,
        "unitMoney": ""
    }, {"x": 1436889600000, "y": 1.0562, "equityReturn": -5.7469, "unitMoney": ""}, {
        "x": 1436976000000,
        "y": 1.0668,
        "equityReturn": 1.0036,
        "unitMoney": ""
    }, {"x": 1437062400000, "y": 1.1261, "equityReturn": 5.5587, "unitMoney": ""}, {
        "x": 1437321600000,
        "y": 1.1535,
        "equityReturn": 2.4332,
        "unitMoney": ""
    }, {"x": 1437408000000, "y": 1.1752, "equityReturn": 1.8812, "unitMoney": ""}, {
        "x": 1437494400000,
        "y": 1.1737,
        "equityReturn": -0.1276,
        "unitMoney": ""
    }, {"x": 1437580800000, "y": 1.2035, "equityReturn": 2.539, "unitMoney": ""}, {
        "x": 1437667200000,
        "y": 1.1863,
        "equityReturn": -1.4292,
        "unitMoney": ""
    }, {"x": 1437926400000, "y": 1.0865, "equityReturn": -8.4127, "unitMoney": ""}, {
        "x": 1438012800000,
        "y": 1.0492,
        "equityReturn": -3.433,
        "unitMoney": ""
    }, {"x": 1438099200000, "y": 1.0857, "equityReturn": 3.4788, "unitMoney": ""}, {
        "x": 1438185600000,
        "y": 1.0171,
        "equityReturn": -6.3185,
        "unitMoney": ""
    }, {"x": 1438272000000, "y": 1.003, "equityReturn": -1.3863, "unitMoney": ""}, {
        "x": 1438531200000,
        "y": 0.9562,
        "equityReturn": -4.666,
        "unitMoney": ""
    }, {"x": 1438617600000, "y": 1.0158, "equityReturn": 6.233, "unitMoney": ""}, {
        "x": 1438704000000,
        "y": 1.0066,
        "equityReturn": -0.9057,
        "unitMoney": ""
    }, {"x": 1438790400000, "y": 0.9938, "equityReturn": -1.2716, "unitMoney": ""}, {
        "x": 1438876800000,
        "y": 1.043,
        "equityReturn": 4.9507,
        "unitMoney": ""
    }, {"x": 1439136000000, "y": 1.1003, "equityReturn": 5.4938, "unitMoney": ""}, {
        "x": 1439222400000,
        "y": 1.0871,
        "equityReturn": -1.1997,
        "unitMoney": ""
    }, {"x": 1439308800000, "y": 1.0639, "equityReturn": -2.1341, "unitMoney": ""}, {
        "x": 1439395200000,
        "y": 1.0854,
        "equityReturn": 2.0209,
        "unitMoney": ""
    }, {"x": 1439481600000, "y": 1.0875, "equityReturn": 0.1935, "unitMoney": ""}, {
        "x": 1439740800000,
        "y": 1.0917,
        "equityReturn": 0.3862,
        "unitMoney": ""
    }, {"x": 1439827200000, "y": 1.0109, "equityReturn": -7.4013, "unitMoney": ""}, {
        "x": 1439913600000,
        "y": 1.0345,
        "equityReturn": 2.3346,
        "unitMoney": ""
    }, {"x": 1440000000000, "y": 1.0099, "equityReturn": -2.378, "unitMoney": ""}, {
        "x": 1440086400000,
        "y": 0.957,
        "equityReturn": -5.2381,
        "unitMoney": ""
    }, {"x": 1440345600000, "y": 0.8731, "equityReturn": -8.767, "unitMoney": ""}, {
        "x": 1440432000000,
        "y": 0.7891,
        "equityReturn": -9.6209,
        "unitMoney": ""
    }, {"x": 1440518400000, "y": 0.7423, "equityReturn": -5.9308, "unitMoney": ""}, {
        "x": 1440604800000,
        "y": 0.7714,
        "equityReturn": 3.9202,
        "unitMoney": ""
    }, {"x": 1440691200000, "y": 0.8147, "equityReturn": 5.6132, "unitMoney": ""}, {
        "x": 1440950400000,
        "y": 0.7865,
        "equityReturn": -3.4614,
        "unitMoney": ""
    }, {"x": 1441036800000, "y": 0.7461, "equityReturn": -5.1367, "unitMoney": ""}, {
        "x": 1441123200000,
        "y": 0.7367,
        "equityReturn": -1.2599,
        "unitMoney": ""
    }, {"x": 1441555200000, "y": 0.7439, "equityReturn": 0.9773, "unitMoney": ""}, {
        "x": 1441641600000,
        "y": 0.7759,
        "equityReturn": 4.3017,
        "unitMoney": ""
    }, {"x": 1441728000000, "y": 0.7986, "equityReturn": 2.9256, "unitMoney": ""}, {
        "x": 1441814400000,
        "y": 0.7857,
        "equityReturn": -1.6153,
        "unitMoney": ""
    }, {"x": 1441900800000, "y": 0.7887, "equityReturn": 0.3818, "unitMoney": ""}, {
        "x": 1442160000000,
        "y": 0.7463,
        "equityReturn": -5.3759,
        "unitMoney": ""
    }, {"x": 1442246400000, "y": 0.7135, "equityReturn": -4.395, "unitMoney": ""}, {
        "x": 1442332800000,
        "y": 0.7541,
        "equityReturn": 5.6903,
        "unitMoney": ""
    }, {"x": 1442419200000, "y": 0.7484, "equityReturn": -0.7559, "unitMoney": ""}, {
        "x": 1442505600000,
        "y": 0.761,
        "equityReturn": 1.6836,
        "unitMoney": ""
    }, {"x": 1442764800000, "y": 0.7929, "equityReturn": 4.1919, "unitMoney": ""}, {
        "x": 1442851200000,
        "y": 0.7951,
        "equityReturn": 0.2775,
        "unitMoney": ""
    }, {"x": 1442937600000, "y": 0.7908, "equityReturn": -0.5408, "unitMoney": ""}, {
        "x": 1443024000000,
        "y": 0.8011,
        "equityReturn": 1.3025,
        "unitMoney": ""
    }, {"x": 1443110400000, "y": 0.7784, "equityReturn": -2.8336, "unitMoney": ""}, {
        "x": 1443369600000,
        "y": 0.8027,
        "equityReturn": 3.1218,
        "unitMoney": ""
    }, {"x": 1443456000000, "y": 0.792, "equityReturn": -1.333, "unitMoney": ""}, {
        "x": 1443542400000,
        "y": 0.7945,
        "equityReturn": 0.3157,
        "unitMoney": ""
    }, {"x": 1444233600000, "y": 0.8241, "equityReturn": 3.7256, "unitMoney": ""}, {
        "x": 1444320000000,
        "y": 0.8295,
        "equityReturn": 0.6553,
        "unitMoney": ""
    }, {"x": 1444579200000, "y": 0.8583, "equityReturn": 3.472, "unitMoney": ""}, {
        "x": 1444665600000,
        "y": 0.868,
        "equityReturn": 1.1301,
        "unitMoney": ""
    }, {"x": 1444752000000, "y": 0.8716, "equityReturn": 0.4147, "unitMoney": ""}, {
        "x": 1444838400000,
        "y": 0.8924,
        "equityReturn": 2.3864,
        "unitMoney": ""
    }, {"x": 1444924800000, "y": 0.8969, "equityReturn": 0.5043, "unitMoney": ""}, {
        "x": 1445184000000,
        "y": 0.8893,
        "equityReturn": -0.8474,
        "unitMoney": ""
    }, {"x": 1445270400000, "y": 0.9101, "equityReturn": 2.3389, "unitMoney": ""}, {
        "x": 1445356800000,
        "y": 0.876,
        "equityReturn": -3.7468,
        "unitMoney": ""
    }, {"x": 1445443200000, "y": 0.9327, "equityReturn": 6.4726, "unitMoney": ""}, {
        "x": 1445529600000,
        "y": 0.9697,
        "equityReturn": 3.967,
        "unitMoney": ""
    }, {"x": 1445788800000, "y": 0.9567, "equityReturn": -1.3406, "unitMoney": ""}, {
        "x": 1445875200000,
        "y": 0.9721,
        "equityReturn": 1.6097,
        "unitMoney": ""
    }, {"x": 1445961600000, "y": 0.9372, "equityReturn": -3.5902, "unitMoney": ""}, {
        "x": 1446048000000,
        "y": 0.9399,
        "equityReturn": 0.2881,
        "unitMoney": ""
    }, {"x": 1446134400000, "y": 0.9324, "equityReturn": -0.798, "unitMoney": ""}, {
        "x": 1446393600000,
        "y": 0.907,
        "equityReturn": -2.7242,
        "unitMoney": ""
    }, {"x": 1446480000000, "y": 0.9009, "equityReturn": -0.6725, "unitMoney": ""}, {
        "x": 1446566400000,
        "y": 0.9573,
        "equityReturn": 6.2604,
        "unitMoney": ""
    }, {"x": 1446652800000, "y": 0.9464, "equityReturn": -1.1386, "unitMoney": ""}, {
        "x": 1446739200000,
        "y": 0.9659,
        "equityReturn": 2.0604,
        "unitMoney": ""
    }, {"x": 1446998400000, "y": 0.9829, "equityReturn": 1.76, "unitMoney": ""}, {
        "x": 1447084800000,
        "y": 0.9871,
        "equityReturn": 0.4273,
        "unitMoney": ""
    }, {"x": 1447171200000, "y": 1.0141, "equityReturn": 2.7353, "unitMoney": ""}, {
        "x": 1447257600000,
        "y": 1.0121,
        "equityReturn": -0.1972,
        "unitMoney": ""
    }, {"x": 1447344000000, "y": 0.9678, "equityReturn": -4.377, "unitMoney": ""}, {
        "x": 1447603200000,
        "y": 0.9828,
        "equityReturn": 1.5499,
        "unitMoney": ""
    }, {"x": 1447689600000, "y": 0.9652, "equityReturn": -1.7908, "unitMoney": ""}, {
        "x": 1447776000000,
        "y": 0.9367,
        "equityReturn": -2.9528,
        "unitMoney": ""
    }, {"x": 1447862400000, "y": 0.9613, "equityReturn": 2.6262, "unitMoney": ""}, {
        "x": 1447948800000,
        "y": 0.967,
        "equityReturn": 0.5929,
        "unitMoney": ""
    }, {"x": 1448208000000, "y": 0.9617, "equityReturn": -0.5481, "unitMoney": ""}, {
        "x": 1448294400000,
        "y": 0.9699,
        "equityReturn": 0.8527,
        "unitMoney": ""
    }, {"x": 1448380800000, "y": 1.011, "equityReturn": 4.2376, "unitMoney": ""}, {
        "x": 1448467200000,
        "y": 0.9906,
        "equityReturn": -2.0178,
        "unitMoney": ""
    }, {"x": 1448553600000, "y": 0.9252, "equityReturn": -6.6021, "unitMoney": ""}, {
        "x": 1448812800000,
        "y": 0.9308,
        "equityReturn": 0.6053,
        "unitMoney": ""
    }, {"x": 1448899200000, "y": 0.9359, "equityReturn": 0.5479, "unitMoney": ""}, {
        "x": 1448985600000,
        "y": 0.9226,
        "equityReturn": -1.4211,
        "unitMoney": ""
    }, {"x": 1449072000000, "y": 0.9434, "equityReturn": 2.2545, "unitMoney": ""}, {
        "x": 1449158400000,
        "y": 0.9341,
        "equityReturn": -0.9858,
        "unitMoney": ""
    }, {"x": 1449417600000, "y": 0.9478, "equityReturn": 1.4667, "unitMoney": ""}, {
        "x": 1449504000000,
        "y": 0.9207,
        "equityReturn": -2.8593,
        "unitMoney": ""
    }, {"x": 1449590400000, "y": 0.9103, "equityReturn": -1.1296, "unitMoney": ""}, {
        "x": 1449676800000,
        "y": 0.9094,
        "equityReturn": -0.0989,
        "unitMoney": ""
    }, {"x": 1449763200000, "y": 0.897, "equityReturn": -1.3635, "unitMoney": ""}, {
        "x": 1450022400000,
        "y": 0.9124,
        "equityReturn": 1.7168,
        "unitMoney": ""
    }, {
        "x": 1450108800000,
        "y": 0.9123,
        "equityReturn": 1.4303,
        "unitMoney": "拆分：每份基金份额折算1.014414613份"
    }, {"x": 1450195200000, "y": 0.9131, "equityReturn": 0.0877, "unitMoney": ""}, {
        "x": 1450281600000,
        "y": 0.9337,
        "equityReturn": 2.2561,
        "unitMoney": ""
    }, {"x": 1450368000000, "y": 0.9403, "equityReturn": 0.7069, "unitMoney": ""}, {
        "x": 1450627200000,
        "y": 0.9512,
        "equityReturn": 1.1592,
        "unitMoney": ""
    }, {"x": 1450713600000, "y": 0.9583, "equityReturn": 0.7464, "unitMoney": ""}, {
        "x": 1450800000000,
        "y": 0.9402,
        "equityReturn": -1.8888,
        "unitMoney": ""
    }, {"x": 1450886400000, "y": 0.9399, "equityReturn": -0.0319, "unitMoney": ""}, {
        "x": 1450972800000,
        "y": 0.9417,
        "equityReturn": 0.1915,
        "unitMoney": ""
    }, {"x": 1451232000000, "y": 0.9193, "equityReturn": -2.3787, "unitMoney": ""}, {
        "x": 1451318400000,
        "y": 0.9253,
        "equityReturn": 0.6527,
        "unitMoney": ""
    }, {"x": 1451404800000, "y": 0.9395, "equityReturn": 1.5346, "unitMoney": ""}, {
        "x": 1451491200000,
        "y": 0.917,
        "equityReturn": -2.3949,
        "unitMoney": ""
    }, {"x": 1451836800000, "y": 0.8367, "equityReturn": -8.7568, "unitMoney": ""}, {
        "x": 1451923200000,
        "y": 0.8137,
        "equityReturn": -2.7489,
        "unitMoney": ""
    }, {"x": 1452009600000, "y": 0.8282, "equityReturn": 1.782, "unitMoney": ""}, {
        "x": 1452096000000,
        "y": 0.7553,
        "equityReturn": -8.8022,
        "unitMoney": ""
    }, {"x": 1452182400000, "y": 0.7601, "equityReturn": 0.6355, "unitMoney": ""}, {
        "x": 1452441600000,
        "y": 0.7028,
        "equityReturn": -7.5385,
        "unitMoney": ""
    }, {"x": 1452528000000, "y": 0.718, "equityReturn": 2.1628, "unitMoney": ""}, {
        "x": 1452614400000,
        "y": 0.6899,
        "equityReturn": -3.9136,
        "unitMoney": ""
    }, {"x": 1452700800000, "y": 0.7253, "equityReturn": 5.1312, "unitMoney": ""}, {
        "x": 1452787200000,
        "y": 0.7065,
        "equityReturn": -2.592,
        "unitMoney": ""
    }, {"x": 1453046400000, "y": 0.7232, "equityReturn": 2.3638, "unitMoney": ""}, {
        "x": 1453132800000,
        "y": 0.7496,
        "equityReturn": 3.6504,
        "unitMoney": ""
    }, {"x": 1453219200000, "y": 0.7356, "equityReturn": -1.8677, "unitMoney": ""}, {
        "x": 1453305600000,
        "y": 0.7043,
        "equityReturn": -4.255,
        "unitMoney": ""
    }, {"x": 1453392000000, "y": 0.7087, "equityReturn": 0.6247, "unitMoney": ""}, {
        "x": 1453651200000,
        "y": 0.7134,
        "equityReturn": 0.6632,
        "unitMoney": ""
    }, {"x": 1453737600000, "y": 0.659, "equityReturn": -7.6255, "unitMoney": ""}, {
        "x": 1453824000000,
        "y": 0.6508,
        "equityReturn": -1.2443,
        "unitMoney": ""
    }, {"x": 1453910400000, "y": 0.625, "equityReturn": -3.9644, "unitMoney": ""}, {
        "x": 1453996800000,
        "y": 1.0,
        "equityReturn": 4.3056,
        "unitMoney": "拆分：每份基金份额折算0.651910219份"
    }, {"x": 1454256000000, "y": 0.9896, "equityReturn": -1.04, "unitMoney": ""}, {
        "x": 1454342400000,
        "y": 1.0274,
        "equityReturn": 3.8197,
        "unitMoney": ""
    }, {"x": 1454428800000, "y": 1.03, "equityReturn": 0.2531, "unitMoney": ""}, {
        "x": 1454515200000,
        "y": 1.0529,
        "equityReturn": 2.2233,
        "unitMoney": ""
    }, {"x": 1454601600000, "y": 1.0421, "equityReturn": -1.0257, "unitMoney": ""}, {
        "x": 1455465600000,
        "y": 1.0423,
        "equityReturn": 0.0192,
        "unitMoney": ""
    }, {"x": 1455552000000, "y": 1.0902, "equityReturn": 4.5956, "unitMoney": ""}, {
        "x": 1455638400000,
        "y": 1.076,
        "equityReturn": -1.3025,
        "unitMoney": ""
    }, {"x": 1455724800000, "y": 1.0685, "equityReturn": -0.697, "unitMoney": ""}, {
        "x": 1455811200000,
        "y": 1.0763,
        "equityReturn": 0.73,
        "unitMoney": ""
    }, {"x": 1456070400000, "y": 1.0923, "equityReturn": 1.4866, "unitMoney": ""}, {
        "x": 1456156800000,
        "y": 1.085,
        "equityReturn": -0.6683,
        "unitMoney": ""
    }, {"x": 1456243200000, "y": 1.0909, "equityReturn": 0.5438, "unitMoney": ""}, {
        "x": 1456329600000,
        "y": 1.0044,
        "equityReturn": -7.9292,
        "unitMoney": ""
    }, {"x": 1456416000000, "y": 0.9906, "equityReturn": -1.374, "unitMoney": ""}, {
        "x": 1456675200000,
        "y": 0.9289,
        "equityReturn": -6.2285,
        "unitMoney": ""
    }, {"x": 1456761600000, "y": 0.9482, "equityReturn": 2.0777, "unitMoney": ""}, {
        "x": 1456848000000,
        "y": 0.9878,
        "equityReturn": 4.1763,
        "unitMoney": ""
    }, {"x": 1456934400000, "y": 0.9887, "equityReturn": 0.0911, "unitMoney": ""}, {
        "x": 1457020800000,
        "y": 0.9461,
        "equityReturn": -4.3087,
        "unitMoney": ""
    }, {"x": 1457280000000, "y": 0.9657, "equityReturn": 2.0717, "unitMoney": ""}, {
        "x": 1457366400000,
        "y": 0.978,
        "equityReturn": 1.2737,
        "unitMoney": ""
    }, {"x": 1457452800000, "y": 0.9743, "equityReturn": -0.3783, "unitMoney": ""}, {
        "x": 1457539200000,
        "y": 0.9553,
        "equityReturn": -1.9501,
        "unitMoney": ""
    }, {"x": 1457625600000, "y": 0.9531, "equityReturn": -0.2303, "unitMoney": ""}, {
        "x": 1457884800000,
        "y": 0.9895,
        "equityReturn": 3.8191,
        "unitMoney": ""
    }, {"x": 1457971200000, "y": 0.9808, "equityReturn": -0.8792, "unitMoney": ""}, {
        "x": 1458057600000,
        "y": 0.9711,
        "equityReturn": -0.989,
        "unitMoney": ""
    }, {"x": 1458144000000, "y": 1.0112, "equityReturn": 4.1293, "unitMoney": ""}, {
        "x": 1458230400000,
        "y": 1.0469,
        "equityReturn": 3.5305,
        "unitMoney": ""
    }, {"x": 1458489600000, "y": 1.0685, "equityReturn": 2.0632, "unitMoney": ""}, {
        "x": 1458576000000,
        "y": 1.0709,
        "equityReturn": 0.2246,
        "unitMoney": ""
    }, {"x": 1458662400000, "y": 1.0739, "equityReturn": 0.2801, "unitMoney": ""}, {
        "x": 1458748800000,
        "y": 1.0541,
        "equityReturn": -1.8437,
        "unitMoney": ""
    }, {"x": 1458835200000, "y": 1.0634, "equityReturn": 0.8823, "unitMoney": ""}, {
        "x": 1459094400000,
        "y": 1.0546,
        "equityReturn": -0.8275,
        "unitMoney": ""
    }, {"x": 1459180800000, "y": 1.036, "equityReturn": -1.7637, "unitMoney": ""}, {
        "x": 1459267200000,
        "y": 1.0801,
        "equityReturn": 4.2568,
        "unitMoney": ""
    }, {"x": 1459353600000, "y": 1.0775, "equityReturn": -0.2407, "unitMoney": ""}, {
        "x": 1459440000000,
        "y": 1.0665,
        "equityReturn": -1.0209,
        "unitMoney": ""
    }, {"x": 1459785600000, "y": 1.0982, "equityReturn": 2.9723, "unitMoney": ""}, {
        "x": 1459872000000,
        "y": 1.1031,
        "equityReturn": 0.4462,
        "unitMoney": ""
    }, {"x": 1459958400000, "y": 1.0879, "equityReturn": -1.3779, "unitMoney": ""}, {
        "x": 1460044800000,
        "y": 1.0806,
        "equityReturn": -0.671,
        "unitMoney": ""
    }, {"x": 1460304000000, "y": 1.1268, "equityReturn": 4.2754, "unitMoney": ""}, {
        "x": 1460390400000,
        "y": 1.1257,
        "equityReturn": -0.0976,
        "unitMoney": ""
    }, {"x": 1460476800000, "y": 1.1396, "equityReturn": 1.2348, "unitMoney": ""}, {
        "x": 1460563200000,
        "y": 1.1421,
        "equityReturn": 0.2194,
        "unitMoney": ""
    }, {"x": 1460649600000, "y": 1.135, "equityReturn": -0.6217, "unitMoney": ""}, {
        "x": 1460908800000,
        "y": 1.1109,
        "equityReturn": -2.1233,
        "unitMoney": ""
    }, {"x": 1460995200000, "y": 1.1142, "equityReturn": 0.2971, "unitMoney": ""}, {
        "x": 1461081600000,
        "y": 1.0488,
        "equityReturn": -5.8697,
        "unitMoney": ""
    }, {"x": 1461168000000, "y": 1.0395, "equityReturn": -0.8867, "unitMoney": ""}, {
        "x": 1461254400000,
        "y": 1.0578,
        "equityReturn": 1.7605,
        "unitMoney": ""
    }, {"x": 1461513600000, "y": 1.0529, "equityReturn": -0.4632, "unitMoney": ""}, {
        "x": 1461600000000,
        "y": 1.0724,
        "equityReturn": 1.852,
        "unitMoney": ""
    }, {"x": 1461686400000, "y": 1.0622, "equityReturn": -0.9511, "unitMoney": ""}, {
        "x": 1461772800000,
        "y": 1.0653,
        "equityReturn": 0.2918,
        "unitMoney": ""
    }, {"x": 1461859200000, "y": 1.0582, "equityReturn": -0.6665, "unitMoney": ""}, {
        "x": 1462204800000,
        "y": 1.0851,
        "equityReturn": 2.5421,
        "unitMoney": ""
    }, {"x": 1462291200000, "y": 1.0836, "equityReturn": -0.1382, "unitMoney": ""}, {
        "x": 1462377600000,
        "y": 1.0908,
        "equityReturn": 0.6645,
        "unitMoney": ""
    }, {"x": 1462464000000, "y": 1.0498, "equityReturn": -3.7587, "unitMoney": ""}, {
        "x": 1462723200000,
        "y": 1.0097,
        "equityReturn": -3.8198,
        "unitMoney": ""
    }, {"x": 1462809600000, "y": 1.0089, "equityReturn": -0.0792, "unitMoney": ""}, {
        "x": 1462896000000,
        "y": 1.0094,
        "equityReturn": 0.0496,
        "unitMoney": ""
    }, {"x": 1462982400000, "y": 1.0097, "equityReturn": 0.0297, "unitMoney": ""}, {
        "x": 1463068800000,
        "y": 1.0046,
        "equityReturn": -0.5051,
        "unitMoney": ""
    }, {"x": 1463328000000, "y": 1.0195, "equityReturn": 1.4832, "unitMoney": ""}, {
        "x": 1463414400000,
        "y": 1.0454,
        "equityReturn": 2.5405,
        "unitMoney": ""
    }, {"x": 1463500800000, "y": 1.0121, "equityReturn": -3.1854, "unitMoney": ""}, {
        "x": 1463587200000,
        "y": 1.0147,
        "equityReturn": 0.2569,
        "unitMoney": ""
    }, {"x": 1463673600000, "y": 1.0241, "equityReturn": 0.9264, "unitMoney": ""}, {
        "x": 1463932800000,
        "y": 1.0352,
        "equityReturn": 1.0839,
        "unitMoney": ""
    }, {"x": 1464019200000, "y": 1.0209, "equityReturn": -1.3814, "unitMoney": ""}, {
        "x": 1464105600000,
        "y": 1.02,
        "equityReturn": -0.0882,
        "unitMoney": ""
    }, {"x": 1464192000000, "y": 1.0289, "equityReturn": 0.8725, "unitMoney": ""}, {
        "x": 1464278400000,
        "y": 1.0218,
        "equityReturn": -0.6901,
        "unitMoney": ""
    }, {"x": 1464537600000, "y": 1.0204, "equityReturn": -0.137, "unitMoney": ""}, {
        "x": 1464624000000,
        "y": 1.0593,
        "equityReturn": 3.8122,
        "unitMoney": ""
    }, {"x": 1464710400000, "y": 1.0625, "equityReturn": 0.3021, "unitMoney": ""}, {
        "x": 1464796800000,
        "y": 1.0702,
        "equityReturn": 0.7247,
        "unitMoney": ""
    }, {"x": 1464883200000, "y": 1.0812, "equityReturn": 1.0278, "unitMoney": ""}, {
        "x": 1465142400000,
        "y": 1.0799,
        "equityReturn": -0.1202,
        "unitMoney": ""
    }, {"x": 1465228800000, "y": 1.077, "equityReturn": -0.2685, "unitMoney": ""}, {
        "x": 1465315200000,
        "y": 1.0706,
        "equityReturn": -0.5942,
        "unitMoney": ""
    }, {"x": 1465747200000, "y": 1.021, "equityReturn": -4.6329, "unitMoney": ""}, {
        "x": 1465833600000,
        "y": 1.0222,
        "equityReturn": 0.1175,
        "unitMoney": ""
    }, {"x": 1465920000000, "y": 1.0477, "equityReturn": 2.4946, "unitMoney": ""}, {
        "x": 1466006400000,
        "y": 1.0419,
        "equityReturn": -0.5536,
        "unitMoney": ""
    }, {"x": 1466092800000, "y": 1.0676, "equityReturn": 2.4666, "unitMoney": ""}, {
        "x": 1466352000000,
        "y": 1.0661,
        "equityReturn": -0.1405,
        "unitMoney": ""
    }, {"x": 1466438400000, "y": 1.0517, "equityReturn": -1.3507, "unitMoney": ""}, {
        "x": 1466524800000,
        "y": 1.071,
        "equityReturn": 1.8351,
        "unitMoney": ""
    }, {"x": 1466611200000, "y": 1.0648, "equityReturn": -0.5789, "unitMoney": ""}, {
        "x": 1466697600000,
        "y": 1.0538,
        "equityReturn": -1.0331,
        "unitMoney": ""
    }, {"x": 1466956800000, "y": 1.0788, "equityReturn": 2.3724, "unitMoney": ""}, {
        "x": 1467043200000,
        "y": 1.0967,
        "equityReturn": 1.6593,
        "unitMoney": ""
    }, {"x": 1467129600000, "y": 1.0988, "equityReturn": 0.1915, "unitMoney": ""}, {
        "x": 1467216000000,
        "y": 1.102,
        "equityReturn": 0.2912,
        "unitMoney": ""
    }, {"x": 1467302400000, "y": 1.0927, "equityReturn": -0.8439, "unitMoney": ""}, {
        "x": 1467561600000,
        "y": 1.1134,
        "equityReturn": 1.8944,
        "unitMoney": ""
    }, {"x": 1467648000000, "y": 1.1116, "equityReturn": -0.1617, "unitMoney": ""}, {
        "x": 1467734400000,
        "y": 1.1167,
        "equityReturn": 0.4588,
        "unitMoney": ""
    }, {"x": 1467820800000, "y": 1.1312, "equityReturn": 1.2985, "unitMoney": ""}, {
        "x": 1467907200000,
        "y": 1.1308,
        "equityReturn": -0.0354,
        "unitMoney": ""
    }, {"x": 1468166400000, "y": 1.1188, "equityReturn": -1.0612, "unitMoney": ""}, {
        "x": 1468252800000,
        "y": 1.1374,
        "equityReturn": 1.6625,
        "unitMoney": ""
    }, {"x": 1468339200000, "y": 1.1434, "equityReturn": 0.5275, "unitMoney": ""}, {
        "x": 1468425600000,
        "y": 1.1423,
        "equityReturn": -0.0962,
        "unitMoney": ""
    }, {"x": 1468512000000, "y": 1.1302, "equityReturn": -1.0593, "unitMoney": ""}, {
        "x": 1468771200000,
        "y": 1.1297,
        "equityReturn": -0.0442,
        "unitMoney": ""
    }, {"x": 1468857600000, "y": 1.134, "equityReturn": 0.3806, "unitMoney": ""}, {
        "x": 1468944000000,
        "y": 1.1384,
        "equityReturn": 0.388,
        "unitMoney": ""
    }, {"x": 1469030400000, "y": 1.1401, "equityReturn": 0.1493, "unitMoney": ""}, {
        "x": 1469116800000,
        "y": 1.1335,
        "equityReturn": -0.5789,
        "unitMoney": ""
    }, {"x": 1469376000000, "y": 1.1336, "equityReturn": 0.0088, "unitMoney": ""}, {
        "x": 1469462400000,
        "y": 1.1525,
        "equityReturn": 1.6673,
        "unitMoney": ""
    }, {"x": 1469548800000, "y": 1.0978, "equityReturn": -4.7462, "unitMoney": ""}, {
        "x": 1469635200000,
        "y": 1.0922,
        "equityReturn": -0.5101,
        "unitMoney": ""
    }, {"x": 1469721600000, "y": 1.0919, "equityReturn": -0.0275, "unitMoney": ""}, {
        "x": 1469980800000,
        "y": 1.0764,
        "equityReturn": -1.4195,
        "unitMoney": ""
    }, {"x": 1470067200000, "y": 1.0849, "equityReturn": 0.7897, "unitMoney": ""}, {
        "x": 1470153600000,
        "y": 1.0917,
        "equityReturn": 0.6268,
        "unitMoney": ""
    }, {"x": 1470240000000, "y": 1.096, "equityReturn": 0.3939, "unitMoney": ""}, {
        "x": 1470326400000,
        "y": 1.0854,
        "equityReturn": -0.9672,
        "unitMoney": ""
    }, {"x": 1470585600000, "y": 1.0981, "equityReturn": 1.1701, "unitMoney": ""}, {
        "x": 1470672000000,
        "y": 1.1087,
        "equityReturn": 0.9653,
        "unitMoney": ""
    }, {"x": 1470758400000, "y": 1.1096, "equityReturn": 0.0812, "unitMoney": ""}, {
        "x": 1470844800000,
        "y": 1.097,
        "equityReturn": -1.1355,
        "unitMoney": ""
    }, {"x": 1470931200000, "y": 1.1115, "equityReturn": 1.3218, "unitMoney": ""}, {
        "x": 1471190400000,
        "y": 1.1361,
        "equityReturn": 2.2132,
        "unitMoney": ""
    }, {"x": 1471276800000, "y": 1.1466, "equityReturn": 0.9242, "unitMoney": ""}, {
        "x": 1471363200000,
        "y": 1.1473,
        "equityReturn": 0.0611,
        "unitMoney": ""
    }, {"x": 1471449600000, "y": 1.1434, "equityReturn": -0.3399, "unitMoney": ""}, {
        "x": 1471536000000,
        "y": 1.1429,
        "equityReturn": -0.0437,
        "unitMoney": ""
    }, {"x": 1471795200000, "y": 1.1332, "equityReturn": -0.8487, "unitMoney": ""}, {
        "x": 1471881600000,
        "y": 1.1375,
        "equityReturn": 0.3795,
        "unitMoney": ""
    }, {"x": 1471968000000, "y": 1.1388, "equityReturn": 0.1143, "unitMoney": ""}, {
        "x": 1472054400000,
        "y": 1.1375,
        "equityReturn": -0.1142,
        "unitMoney": ""
    }, {"x": 1472140800000, "y": 1.1468, "equityReturn": 0.8176, "unitMoney": ""}, {
        "x": 1472400000000,
        "y": 1.152,
        "equityReturn": 0.4534,
        "unitMoney": ""
    }, {"x": 1472486400000, "y": 1.1503, "equityReturn": -0.1476, "unitMoney": ""}, {
        "x": 1472572800000,
        "y": 1.1494,
        "equityReturn": -0.0782,
        "unitMoney": ""
    }, {"x": 1472659200000, "y": 1.1373, "equityReturn": -1.0527, "unitMoney": ""}, {
        "x": 1472745600000,
        "y": 1.1311,
        "equityReturn": -0.5452,
        "unitMoney": ""
    }, {"x": 1473004800000, "y": 1.1304, "equityReturn": -0.0619, "unitMoney": ""}, {
        "x": 1473091200000,
        "y": 1.1485,
        "equityReturn": 1.6012,
        "unitMoney": ""
    }, {"x": 1473177600000, "y": 1.1543, "equityReturn": 0.505, "unitMoney": ""}, {
        "x": 1473264000000,
        "y": 1.1553,
        "equityReturn": 0.0866,
        "unitMoney": ""
    }, {"x": 1473350400000, "y": 1.1415, "equityReturn": -1.1945, "unitMoney": ""}, {
        "x": 1473609600000,
        "y": 1.1037,
        "equityReturn": -3.3114,
        "unitMoney": ""
    }, {"x": 1473696000000, "y": 1.1091, "equityReturn": 0.4893, "unitMoney": ""}, {
        "x": 1473782400000,
        "y": 1.1056,
        "equityReturn": -0.3156,
        "unitMoney": ""
    }, {"x": 1474214400000, "y": 1.1213, "equityReturn": 1.42, "unitMoney": ""}, {
        "x": 1474300800000,
        "y": 1.1197,
        "equityReturn": -0.1427,
        "unitMoney": ""
    }, {"x": 1474387200000, "y": 1.1194, "equityReturn": -0.0268, "unitMoney": ""}, {
        "x": 1474473600000,
        "y": 1.1237,
        "equityReturn": 0.3841,
        "unitMoney": ""
    }, {"x": 1474560000000, "y": 1.1204, "equityReturn": -0.2937, "unitMoney": ""}, {
        "x": 1474819200000,
        "y": 1.1024,
        "equityReturn": -1.6066,
        "unitMoney": ""
    }, {"x": 1474905600000, "y": 1.1119, "equityReturn": 0.8618, "unitMoney": ""}, {
        "x": 1474992000000,
        "y": 1.1088,
        "equityReturn": -0.2788,
        "unitMoney": ""
    }, {"x": 1475078400000, "y": 1.1133, "equityReturn": 0.4058, "unitMoney": ""}, {
        "x": 1475164800000,
        "y": 1.118,
        "equityReturn": 0.4222,
        "unitMoney": ""
    }, {"x": 1476028800000, "y": 1.1391, "equityReturn": 1.8873, "unitMoney": ""}, {
        "x": 1476115200000,
        "y": 1.1402,
        "equityReturn": 0.0966,
        "unitMoney": ""
    }, {"x": 1476201600000, "y": 1.1408, "equityReturn": 0.0526, "unitMoney": ""}, {
        "x": 1476288000000,
        "y": 1.1423,
        "equityReturn": 0.1315,
        "unitMoney": ""
    }, {"x": 1476374400000, "y": 1.1426, "equityReturn": 0.0263, "unitMoney": ""}, {
        "x": 1476633600000,
        "y": 1.1354,
        "equityReturn": -0.6301,
        "unitMoney": ""
    }, {"x": 1476720000000, "y": 1.1461, "equityReturn": 0.9424, "unitMoney": ""}, {
        "x": 1476806400000,
        "y": 1.1417,
        "equityReturn": -0.3839,
        "unitMoney": ""
    }, {"x": 1476892800000, "y": 1.1411, "equityReturn": -0.0526, "unitMoney": ""}, {
        "x": 1476979200000,
        "y": 1.1366,
        "equityReturn": -0.3944,
        "unitMoney": ""
    }, {"x": 1477238400000, "y": 1.1412, "equityReturn": 0.4047, "unitMoney": ""}, {
        "x": 1477324800000,
        "y": 1.1378,
        "equityReturn": -0.2979,
        "unitMoney": ""
    }, {"x": 1477411200000, "y": 1.1418, "equityReturn": 0.3516, "unitMoney": ""}, {
        "x": 1477497600000,
        "y": 1.1366,
        "equityReturn": -0.4554,
        "unitMoney": ""
    }, {"x": 1477584000000, "y": 1.1237, "equityReturn": -1.135, "unitMoney": ""}, {
        "x": 1477843200000,
        "y": 1.1238,
        "equityReturn": 0.0089,
        "unitMoney": ""
    }, {"x": 1477929600000, "y": 1.133, "equityReturn": 0.8187, "unitMoney": ""}, {
        "x": 1478016000000,
        "y": 1.1246,
        "equityReturn": -0.7414,
        "unitMoney": ""
    }, {"x": 1478102400000, "y": 1.1279, "equityReturn": 0.2934, "unitMoney": ""}, {
        "x": 1478188800000,
        "y": 1.1267,
        "equityReturn": -0.1064,
        "unitMoney": ""
    }, {"x": 1478448000000, "y": 1.12, "equityReturn": -0.5947, "unitMoney": ""}, {
        "x": 1478534400000,
        "y": 1.1265,
        "equityReturn": 0.5804,
        "unitMoney": ""
    }, {"x": 1478620800000, "y": 1.1154, "equityReturn": -0.9854, "unitMoney": ""}, {
        "x": 1478707200000,
        "y": 1.1264,
        "equityReturn": 0.9862,
        "unitMoney": ""
    }, {"x": 1478793600000, "y": 1.1276, "equityReturn": 0.1065, "unitMoney": ""}, {
        "x": 1479052800000,
        "y": 1.1327,
        "equityReturn": 0.4523,
        "unitMoney": ""
    }, {"x": 1479139200000, "y": 1.1355, "equityReturn": 0.2472, "unitMoney": ""}, {
        "x": 1479225600000,
        "y": 1.1378,
        "equityReturn": 0.2026,
        "unitMoney": ""
    }, {"x": 1479312000000, "y": 1.1389, "equityReturn": 0.0967, "unitMoney": ""}, {
        "x": 1479398400000,
        "y": 1.1363,
        "equityReturn": -0.2283,
        "unitMoney": ""
    }, {"x": 1479657600000, "y": 1.137, "equityReturn": 0.0616, "unitMoney": ""}, {
        "x": 1479744000000,
        "y": 1.1454,
        "equityReturn": 0.7388,
        "unitMoney": ""
    }, {"x": 1479830400000, "y": 1.1384, "equityReturn": -0.6111, "unitMoney": ""}, {
        "x": 1479916800000,
        "y": 1.1287,
        "equityReturn": -0.8521,
        "unitMoney": ""
    }, {"x": 1480003200000, "y": 1.1395, "equityReturn": 0.9569, "unitMoney": ""}, {
        "x": 1480262400000,
        "y": 1.1481,
        "equityReturn": 0.7547,
        "unitMoney": ""
    }, {"x": 1480348800000, "y": 1.1376, "equityReturn": -0.9146, "unitMoney": ""}, {
        "x": 1480435200000,
        "y": 1.1459,
        "equityReturn": 0.7296,
        "unitMoney": ""
    }, {"x": 1480521600000, "y": 1.1503, "equityReturn": 0.384, "unitMoney": ""}, {
        "x": 1480608000000,
        "y": 1.1355,
        "equityReturn": -1.2866,
        "unitMoney": ""
    }, {"x": 1480867200000, "y": 1.1334, "equityReturn": -0.1849, "unitMoney": ""}, {
        "x": 1480953600000,
        "y": 1.1321,
        "equityReturn": -0.1147,
        "unitMoney": ""
    }, {"x": 1481040000000, "y": 1.1381, "equityReturn": 0.53, "unitMoney": ""}, {
        "x": 1481126400000,
        "y": 1.1322,
        "equityReturn": -0.5184,
        "unitMoney": ""
    }, {"x": 1481212800000, "y": 1.1297, "equityReturn": -0.2208, "unitMoney": ""}, {
        "x": 1481472000000,
        "y": 1.0668,
        "equityReturn": -5.5678,
        "unitMoney": ""
    }, {"x": 1481558400000, "y": 1.0672, "equityReturn": 0.0375, "unitMoney": ""}, {
        "x": 1481644800000,
        "y": 1.0563,
        "equityReturn": -1.0214,
        "unitMoney": ""
    }, {
        "x": 1481731200000,
        "y": 1.0369,
        "equityReturn": 0.4468,
        "unitMoney": "拆分：每份基金份额折算1.023260828份"
    }, {"x": 1481817600000, "y": 1.0454, "equityReturn": 0.8198, "unitMoney": ""}, {
        "x": 1482076800000,
        "y": 1.0428,
        "equityReturn": -0.2487,
        "unitMoney": ""
    }, {"x": 1482163200000, "y": 1.0424, "equityReturn": -0.0384, "unitMoney": ""}, {
        "x": 1482249600000,
        "y": 1.0481,
        "equityReturn": 0.5468,
        "unitMoney": ""
    }, {"x": 1482336000000, "y": 1.0497, "equityReturn": 0.1527, "unitMoney": ""}, {
        "x": 1482422400000,
        "y": 1.0403,
        "equityReturn": -0.8955,
        "unitMoney": ""
    }, {"x": 1482681600000, "y": 1.0424, "equityReturn": 0.2019, "unitMoney": ""}, {
        "x": 1482768000000,
        "y": 1.0342,
        "equityReturn": -0.7866,
        "unitMoney": ""
    }, {"x": 1482854400000, "y": 1.0294, "equityReturn": -0.4641, "unitMoney": ""}, {
        "x": 1482940800000,
        "y": 1.0251,
        "equityReturn": -0.4177,
        "unitMoney": ""
    }, {"x": 1483027200000, "y": 1.0246, "equityReturn": -0.0488, "unitMoney": ""}, {
        "x": 1483113600000,
        "y": 1.0246,
        "equityReturn": 0.0,
        "unitMoney": ""
    }, {"x": 1483372800000, "y": 1.0304, "equityReturn": 0.5661, "unitMoney": ""}, {
        "x": 1483459200000,
        "y": 1.0399,
        "equityReturn": 0.922,
        "unitMoney": ""
    }, {"x": 1483545600000, "y": 1.0357, "equityReturn": -0.4039, "unitMoney": ""}, {
        "x": 1483632000000,
        "y": 1.0265,
        "equityReturn": -0.8883,
        "unitMoney": ""
    }, {"x": 1483891200000, "y": 1.0257, "equityReturn": -0.0779, "unitMoney": ""}, {
        "x": 1483977600000,
        "y": 1.0192,
        "equityReturn": -0.6337,
        "unitMoney": ""
    }, {"x": 1484064000000, "y": 1.0101, "equityReturn": -0.8929, "unitMoney": ""}, {
        "x": 1484150400000,
        "y": 1.0035,
        "equityReturn": -0.6534,
        "unitMoney": ""
    }, {"x": 1484236800000, "y": 0.9848, "equityReturn": -1.8635, "unitMoney": ""}, {
        "x": 1484496000000,
        "y": 0.9444,
        "equityReturn": -4.1024,
        "unitMoney": ""
    }, {"x": 1484582400000, "y": 0.9513, "equityReturn": 0.7306, "unitMoney": ""}, {
        "x": 1484668800000,
        "y": 0.9436,
        "equityReturn": -0.8094,
        "unitMoney": ""
    }, {"x": 1484755200000, "y": 0.9431, "equityReturn": -0.053, "unitMoney": ""}, {
        "x": 1484841600000,
        "y": 0.9571,
        "equityReturn": 1.4845,
        "unitMoney": ""
    }, {"x": 1485100800000, "y": 0.9645, "equityReturn": 0.7732, "unitMoney": ""}, {
        "x": 1485187200000,
        "y": 0.9576,
        "equityReturn": -0.7154,
        "unitMoney": ""
    }, {"x": 1485273600000, "y": 0.9622, "equityReturn": 0.4804, "unitMoney": ""}, {
        "x": 1485360000000,
        "y": 0.9699,
        "equityReturn": 0.8002,
        "unitMoney": ""
    }, {"x": 1486051200000, "y": 0.967, "equityReturn": -0.299, "unitMoney": ""}, {
        "x": 1486310400000,
        "y": 0.9769,
        "equityReturn": 1.0238,
        "unitMoney": ""
    }, {"x": 1486396800000, "y": 0.9742, "equityReturn": -0.2764, "unitMoney": ""}, {
        "x": 1486483200000,
        "y": 0.9856,
        "equityReturn": 1.1702,
        "unitMoney": ""
    }, {"x": 1486569600000, "y": 0.9917, "equityReturn": 0.6189, "unitMoney": ""}, {
        "x": 1486656000000,
        "y": 0.9881,
        "equityReturn": -0.363,
        "unitMoney": ""
    }, {"x": 1486915200000, "y": 0.9957, "equityReturn": 0.7692, "unitMoney": ""}, {
        "x": 1487001600000,
        "y": 0.9914,
        "equityReturn": -0.4319,
        "unitMoney": ""
    }, {"x": 1487088000000, "y": 0.9858, "equityReturn": -0.5649, "unitMoney": ""}, {
        "x": 1487174400000,
        "y": 0.9871,
        "equityReturn": 0.1319,
        "unitMoney": ""
    }, {"x": 1487260800000, "y": 0.9803, "equityReturn": -0.6889, "unitMoney": ""}, {
        "x": 1487520000000,
        "y": 0.985,
        "equityReturn": 0.4794,
        "unitMoney": ""
    }, {"x": 1487606400000, "y": 0.9954, "equityReturn": 1.0558, "unitMoney": ""}, {
        "x": 1487692800000,
        "y": 0.9954,
        "equityReturn": 0.0,
        "unitMoney": ""
    }, {"x": 1487779200000, "y": 1.0009, "equityReturn": 0.5525, "unitMoney": ""}, {
        "x": 1487865600000,
        "y": 1.0048,
        "equityReturn": 0.3896,
        "unitMoney": ""
    }, {"x": 1488124800000, "y": 0.9956, "equityReturn": -0.9156, "unitMoney": ""}, {
        "x": 1488211200000,
        "y": 0.9963,
        "equityReturn": 0.0703,
        "unitMoney": ""
    }, {"x": 1488297600000, "y": 0.9993, "equityReturn": 0.3011, "unitMoney": ""}, {
        "x": 1488384000000,
        "y": 0.9929,
        "equityReturn": -0.6404,
        "unitMoney": ""
    }, {"x": 1488470400000, "y": 0.9955, "equityReturn": 0.2619, "unitMoney": ""}, {
        "x": 1488729600000,
        "y": 1.0076,
        "equityReturn": 1.2155,
        "unitMoney": ""
    }, {"x": 1488816000000, "y": 1.0148, "equityReturn": 0.7146, "unitMoney": ""}, {
        "x": 1488902400000,
        "y": 1.0089,
        "equityReturn": -0.5814,
        "unitMoney": ""
    }, {"x": 1488988800000, "y": 1.0067, "equityReturn": -0.2181, "unitMoney": ""}, {
        "x": 1489075200000,
        "y": 1.0018,
        "equityReturn": -0.4867,
        "unitMoney": ""
    }, {"x": 1489334400000, "y": 1.0079, "equityReturn": 0.6089, "unitMoney": ""}, {
        "x": 1489420800000,
        "y": 1.0052,
        "equityReturn": -0.2679,
        "unitMoney": ""
    }, {"x": 1489507200000, "y": 1.003, "equityReturn": -0.2189, "unitMoney": ""}, {
        "x": 1489593600000,
        "y": 1.0096,
        "equityReturn": 0.658,
        "unitMoney": ""
    }, {"x": 1489680000000, "y": 1.0041, "equityReturn": -0.5448, "unitMoney": ""}, {
        "x": 1489939200000,
        "y": 1.0053,
        "equityReturn": 0.1195,
        "unitMoney": ""
    }, {"x": 1490025600000, "y": 1.0044, "equityReturn": -0.0895, "unitMoney": ""}, {
        "x": 1490112000000,
        "y": 1.0034,
        "equityReturn": -0.0996,
        "unitMoney": ""
    }, {"x": 1490198400000, "y": 1.0022, "equityReturn": -0.1196, "unitMoney": ""}, {
        "x": 1490284800000,
        "y": 1.0057,
        "equityReturn": 0.3492,
        "unitMoney": ""
    }, {"x": 1490544000000, "y": 1.0021, "equityReturn": -0.358, "unitMoney": ""}, {
        "x": 1490630400000,
        "y": 1.0002,
        "equityReturn": -0.1896,
        "unitMoney": ""
    }, {"x": 1490716800000, "y": 0.992, "equityReturn": -0.8198, "unitMoney": ""}, {
        "x": 1490803200000,
        "y": 0.9717,
        "equityReturn": -2.0464,
        "unitMoney": ""
    }, {"x": 1490889600000, "y": 0.9757, "equityReturn": 0.4116, "unitMoney": ""}, {
        "x": 1491321600000,
        "y": 0.987,
        "equityReturn": 1.1581,
        "unitMoney": ""
    }, {"x": 1491408000000, "y": 0.989, "equityReturn": 0.2026, "unitMoney": ""}, {
        "x": 1491494400000,
        "y": 0.9911,
        "equityReturn": 0.2123,
        "unitMoney": ""
    }, {"x": 1491753600000, "y": 0.9795, "equityReturn": -1.1704, "unitMoney": ""}, {
        "x": 1491840000000,
        "y": 0.981,
        "equityReturn": 0.1531,
        "unitMoney": ""
    }, {"x": 1491926400000, "y": 0.9743, "equityReturn": -0.683, "unitMoney": ""}, {
        "x": 1492012800000,
        "y": 0.9773,
        "equityReturn": 0.3079,
        "unitMoney": ""
    }, {"x": 1492099200000, "y": 0.9673, "equityReturn": -1.0232, "unitMoney": ""}, {
        "x": 1492358400000,
        "y": 0.9581,
        "equityReturn": -0.9511,
        "unitMoney": ""
    }, {"x": 1492444800000, "y": 0.9467, "equityReturn": -1.1899, "unitMoney": ""}, {
        "x": 1492531200000,
        "y": 0.9374,
        "equityReturn": -0.9824,
        "unitMoney": ""
    }, {"x": 1492617600000, "y": 0.9366, "equityReturn": -0.0853, "unitMoney": ""}, {
        "x": 1492704000000,
        "y": 0.9415,
        "equityReturn": 0.5232,
        "unitMoney": ""
    }, {"x": 1492963200000, "y": 0.9249, "equityReturn": -1.7631, "unitMoney": ""}, {
        "x": 1493049600000,
        "y": 0.9285,
        "equityReturn": 0.3892,
        "unitMoney": ""
    }, {"x": 1493136000000, "y": 0.931, "equityReturn": 0.2693, "unitMoney": ""}, {
        "x": 1493222400000,
        "y": 0.937,
        "equityReturn": 0.6445,
        "unitMoney": ""
    }, {"x": 1493308800000, "y": 0.9405, "equityReturn": 0.3735, "unitMoney": ""}, {
        "x": 1493654400000,
        "y": 0.9406,
        "equityReturn": 0.0106,
        "unitMoney": ""
    }, {"x": 1493740800000, "y": 0.9371, "equityReturn": -0.3721, "unitMoney": ""}, {
        "x": 1493827200000,
        "y": 0.9339,
        "equityReturn": -0.3415,
        "unitMoney": ""
    }, {"x": 1493913600000, "y": 0.9243, "equityReturn": -1.0279, "unitMoney": ""}, {
        "x": 1494172800000,
        "y": 0.9195,
        "equityReturn": -0.5193,
        "unitMoney": ""
    }, {"x": 1494259200000, "y": 0.9259, "equityReturn": 0.696, "unitMoney": ""}, {
        "x": 1494345600000,
        "y": 0.907,
        "equityReturn": -2.0413,
        "unitMoney": ""
    }, {"x": 1494432000000, "y": 0.8972, "equityReturn": -1.0805, "unitMoney": ""}, {
        "x": 1494518400000,
        "y": 0.895,
        "equityReturn": -0.2452,
        "unitMoney": ""
    }, {"x": 1494777600000, "y": 0.896, "equityReturn": 0.1117, "unitMoney": ""}, {
        "x": 1494864000000,
        "y": 0.9157,
        "equityReturn": 2.1987,
        "unitMoney": ""
    }, {"x": 1494950400000, "y": 0.919, "equityReturn": 0.3604, "unitMoney": ""}, {
        "x": 1495036800000,
        "y": 0.9128,
        "equityReturn": -0.6746,
        "unitMoney": ""
    }, {"x": 1495123200000, "y": 0.9174, "equityReturn": 0.5039, "unitMoney": ""}, {
        "x": 1495382400000,
        "y": 0.9117,
        "equityReturn": -0.6213,
        "unitMoney": ""
    }, {"x": 1495468800000, "y": 0.894, "equityReturn": -1.9414, "unitMoney": ""}, {
        "x": 1495555200000,
        "y": 0.9024,
        "equityReturn": 0.9396,
        "unitMoney": ""
    }, {"x": 1495641600000, "y": 0.9069, "equityReturn": 0.4987, "unitMoney": ""}, {
        "x": 1495728000000,
        "y": 0.9058,
        "equityReturn": -0.1213,
        "unitMoney": ""
    }, {"x": 1496160000000, "y": 0.8965, "equityReturn": -1.0267, "unitMoney": ""}, {
        "x": 1496246400000,
        "y": 0.878,
        "equityReturn": -2.0636,
        "unitMoney": ""
    }, {"x": 1496332800000, "y": 0.8836, "equityReturn": 0.6378, "unitMoney": ""}, {
        "x": 1496592000000,
        "y": 0.8884,
        "equityReturn": 0.5432,
        "unitMoney": ""
    }, {"x": 1496678400000, "y": 0.89, "equityReturn": 0.1801, "unitMoney": ""}, {
        "x": 1496764800000,
        "y": 0.9118,
        "equityReturn": 2.4494,
        "unitMoney": ""
    }, {"x": 1496851200000, "y": 0.9083, "equityReturn": -0.3839, "unitMoney": ""}, {
        "x": 1496937600000,
        "y": 0.9105,
        "equityReturn": 0.2422,
        "unitMoney": ""
    }, {"x": 1497196800000, "y": 0.9003, "equityReturn": -1.1203, "unitMoney": ""}, {
        "x": 1497283200000,
        "y": 0.9111,
        "equityReturn": 1.1996,
        "unitMoney": ""
    }, {"x": 1497369600000, "y": 0.9097, "equityReturn": -0.1537, "unitMoney": ""}, {
        "x": 1497456000000,
        "y": 0.9222,
        "equityReturn": 1.3741,
        "unitMoney": ""
    }, {"x": 1497542400000, "y": 0.9171, "equityReturn": -0.553, "unitMoney": ""}, {
        "x": 1497801600000,
        "y": 0.9176,
        "equityReturn": 0.0545,
        "unitMoney": ""
    }, {"x": 1497888000000, "y": 0.9155, "equityReturn": -0.2289, "unitMoney": ""}, {
        "x": 1497974400000,
        "y": 0.9188,
        "equityReturn": 0.3605,
        "unitMoney": ""
    }, {"x": 1498060800000, "y": 0.9074, "equityReturn": -1.2407, "unitMoney": ""}, {
        "x": 1498147200000,
        "y": 0.9117,
        "equityReturn": 0.4739,
        "unitMoney": ""
    }, {"x": 1498406400000, "y": 0.9211, "equityReturn": 1.031, "unitMoney": ""}, {
        "x": 1498492800000,
        "y": 0.9284,
        "equityReturn": 0.7925,
        "unitMoney": ""
    }, {"x": 1498579200000, "y": 0.9229, "equityReturn": -0.5924, "unitMoney": ""}, {
        "x": 1498665600000,
        "y": 0.9279,
        "equityReturn": 0.5418,
        "unitMoney": ""
    }, {"x": 1498752000000, "y": 0.9313, "equityReturn": 0.3664, "unitMoney": ""}, {
        "x": 1499011200000,
        "y": 0.9394,
        "equityReturn": 0.8698,
        "unitMoney": ""
    }, {"x": 1499097600000, "y": 0.9292, "equityReturn": -1.0858, "unitMoney": ""}, {
        "x": 1499184000000,
        "y": 0.9366,
        "equityReturn": 0.7964,
        "unitMoney": ""
    }, {"x": 1499270400000, "y": 0.9311, "equityReturn": -0.5872, "unitMoney": ""}, {
        "x": 1499356800000,
        "y": 0.9289,
        "equityReturn": -0.2363,
        "unitMoney": ""
    }, {"x": 1499616000000, "y": 0.9197, "equityReturn": -0.9904, "unitMoney": ""}, {
        "x": 1499702400000,
        "y": 0.9185,
        "equityReturn": -0.1305,
        "unitMoney": ""
    }, {"x": 1499788800000, "y": 0.9139, "equityReturn": -0.5008, "unitMoney": ""}, {
        "x": 1499875200000,
        "y": 0.9209,
        "equityReturn": 0.7659,
        "unitMoney": ""
    }, {"x": 1499961600000, "y": 0.9086, "equityReturn": -1.3356, "unitMoney": ""}, {
        "x": 1500220800000,
        "y": 0.8591,
        "equityReturn": -5.4479,
        "unitMoney": ""
    }, {"x": 1500307200000, "y": 0.8539, "equityReturn": -0.6053, "unitMoney": ""}, {
        "x": 1500393600000,
        "y": 0.8597,
        "equityReturn": 0.6792,
        "unitMoney": ""
    }, {"x": 1500480000000, "y": 0.8658, "equityReturn": 0.7095, "unitMoney": ""}, {
        "x": 1500566400000,
        "y": 0.861,
        "equityReturn": -0.5544,
        "unitMoney": ""
    }, {"x": 1500825600000, "y": 0.8629, "equityReturn": 0.2207, "unitMoney": ""}, {
        "x": 1500912000000,
        "y": 0.8615,
        "equityReturn": -0.1622,
        "unitMoney": ""
    }, {"x": 1500998400000, "y": 0.8547, "equityReturn": -0.7893, "unitMoney": ""}, {
        "x": 1501084800000,
        "y": 0.8725,
        "equityReturn": 2.0826,
        "unitMoney": ""
    }, {"x": 1501171200000, "y": 0.8671, "equityReturn": -0.6189, "unitMoney": ""}, {
        "x": 1501430400000,
        "y": 0.8694,
        "equityReturn": 0.2653,
        "unitMoney": ""
    }, {"x": 1501516800000, "y": 0.8711, "equityReturn": 0.1955, "unitMoney": ""}, {
        "x": 1501603200000,
        "y": 0.8645,
        "equityReturn": -0.7577,
        "unitMoney": ""
    }, {"x": 1501689600000, "y": 0.8678, "equityReturn": 0.3817, "unitMoney": ""}, {
        "x": 1501776000000,
        "y": 0.8608,
        "equityReturn": -0.8066,
        "unitMoney": ""
    }, {"x": 1502035200000, "y": 0.8664, "equityReturn": 0.6506, "unitMoney": ""}, {
        "x": 1502121600000,
        "y": 0.8754,
        "equityReturn": 1.0388,
        "unitMoney": ""
    }, {"x": 1502208000000, "y": 0.8815, "equityReturn": 0.6968, "unitMoney": ""}, {
        "x": 1502294400000,
        "y": 0.8763,
        "equityReturn": -0.5899,
        "unitMoney": ""
    }, {"x": 1502380800000, "y": 0.8693, "equityReturn": -0.7988, "unitMoney": ""}, {
        "x": 1502640000000,
        "y": 0.8838,
        "equityReturn": 1.668,
        "unitMoney": ""
    }, {"x": 1502726400000, "y": 0.8851, "equityReturn": 0.1471, "unitMoney": ""}, {
        "x": 1502812800000,
        "y": 0.8926,
        "equityReturn": 0.8474,
        "unitMoney": ""
    }, {"x": 1502899200000, "y": 0.8949, "equityReturn": 0.2577, "unitMoney": ""}, {
        "x": 1502985600000,
        "y": 0.8912,
        "equityReturn": -0.4135,
        "unitMoney": ""
    }, {"x": 1503244800000, "y": 0.8935, "equityReturn": 0.2581, "unitMoney": ""}, {
        "x": 1503331200000,
        "y": 0.8876,
        "equityReturn": -0.6603,
        "unitMoney": ""
    }, {"x": 1503417600000, "y": 0.8883, "equityReturn": 0.0789, "unitMoney": ""}, {
        "x": 1503504000000,
        "y": 0.8767,
        "equityReturn": -1.3059,
        "unitMoney": ""
    }, {"x": 1503590400000, "y": 0.8844, "equityReturn": 0.8783, "unitMoney": ""}, {
        "x": 1503849600000,
        "y": 0.8956,
        "equityReturn": 1.2664,
        "unitMoney": ""
    }, {"x": 1503936000000, "y": 0.8948, "equityReturn": -0.0893, "unitMoney": ""}, {
        "x": 1504022400000,
        "y": 0.8988,
        "equityReturn": 0.447,
        "unitMoney": ""
    }, {"x": 1504108800000, "y": 0.9031, "equityReturn": 0.4784, "unitMoney": ""}, {
        "x": 1504195200000,
        "y": 0.9069,
        "equityReturn": 0.4208,
        "unitMoney": ""
    }, {"x": 1504454400000, "y": 0.91, "equityReturn": 0.3418, "unitMoney": ""}, {
        "x": 1504540800000,
        "y": 0.9165,
        "equityReturn": 0.7143,
        "unitMoney": ""
    }, {"x": 1504627200000, "y": 0.9186, "equityReturn": 0.2291, "unitMoney": ""}, {
        "x": 1504713600000,
        "y": 0.9181,
        "equityReturn": -0.0544,
        "unitMoney": ""
    }, {"x": 1504800000000, "y": 0.9251, "equityReturn": 0.7624, "unitMoney": ""}, {
        "x": 1505059200000,
        "y": 0.9199,
        "equityReturn": -0.5621,
        "unitMoney": ""
    }, {"x": 1505145600000, "y": 0.9157, "equityReturn": -0.4566, "unitMoney": ""}, {
        "x": 1505232000000,
        "y": 0.9165,
        "equityReturn": 0.0874,
        "unitMoney": ""
    }, {"x": 1505318400000, "y": 0.9163, "equityReturn": -0.0218, "unitMoney": ""}, {
        "x": 1505404800000,
        "y": 0.9124,
        "equityReturn": -0.4256,
        "unitMoney": ""
    }, {"x": 1505664000000, "y": 0.9215, "equityReturn": 0.9974, "unitMoney": ""}, {
        "x": 1505750400000,
        "y": 0.9231,
        "equityReturn": 0.1736,
        "unitMoney": ""
    }, {"x": 1505836800000, "y": 0.9263, "equityReturn": 0.3467, "unitMoney": ""}, {
        "x": 1505923200000,
        "y": 0.9168,
        "equityReturn": -1.0256,
        "unitMoney": ""
    }, {"x": 1506009600000, "y": 0.9135, "equityReturn": -0.3599, "unitMoney": ""}, {
        "x": 1506268800000,
        "y": 0.9094,
        "equityReturn": -0.4488,
        "unitMoney": ""
    }, {"x": 1506355200000, "y": 0.9044, "equityReturn": -0.5498, "unitMoney": ""}, {
        "x": 1506441600000,
        "y": 0.9057,
        "equityReturn": 0.1437,
        "unitMoney": ""
    }, {"x": 1506528000000, "y": 0.9053, "equityReturn": -0.0442, "unitMoney": ""}, {
        "x": 1506614400000,
        "y": 0.9118,
        "equityReturn": 0.718,
        "unitMoney": ""
    }, {"x": 1507478400000, "y": 0.9222, "equityReturn": 1.1406, "unitMoney": ""}, {
        "x": 1507564800000,
        "y": 0.9745,
        "equityReturn": 5.6712,
        "unitMoney": ""
    }, {"x": 1507651200000, "y": 0.9669, "equityReturn": -0.7799, "unitMoney": ""}, {
        "x": 1507737600000,
        "y": 0.9711,
        "equityReturn": 0.4344,
        "unitMoney": ""
    }, {"x": 1507824000000, "y": 0.9754, "equityReturn": 0.4428, "unitMoney": ""}, {
        "x": 1508083200000,
        "y": 0.9499,
        "equityReturn": -2.6143,
        "unitMoney": ""
    }, {"x": 1508169600000, "y": 0.9488, "equityReturn": -0.1158, "unitMoney": ""}, {
        "x": 1508256000000,
        "y": 0.951,
        "equityReturn": 0.2319,
        "unitMoney": ""
    }, {"x": 1508342400000, "y": 0.9575, "equityReturn": 0.6835, "unitMoney": ""}, {
        "x": 1508428800000,
        "y": 0.9568,
        "equityReturn": -0.0731,
        "unitMoney": ""
    }, {"x": 1508688000000, "y": 0.9651, "equityReturn": 0.8675, "unitMoney": ""}, {
        "x": 1508774400000,
        "y": 0.9583,
        "equityReturn": -0.7046,
        "unitMoney": ""
    }, {"x": 1508860800000, "y": 0.9704, "equityReturn": 1.2627, "unitMoney": ""}, {
        "x": 1508947200000,
        "y": 0.9643,
        "equityReturn": -0.6286,
        "unitMoney": ""
    }, {"x": 1509033600000, "y": 0.9583, "equityReturn": -0.6222, "unitMoney": ""}, {
        "x": 1509292800000,
        "y": 0.9369,
        "equityReturn": -2.2331,
        "unitMoney": ""
    }, {"x": 1509379200000, "y": 0.9417, "equityReturn": 0.5123, "unitMoney": ""}, {
        "x": 1509465600000,
        "y": 0.9372,
        "equityReturn": -0.4779,
        "unitMoney": ""
    }, {"x": 1509552000000, "y": 0.9358, "equityReturn": -0.1494, "unitMoney": ""}, {
        "x": 1509638400000,
        "y": 0.9257,
        "equityReturn": -1.0793,
        "unitMoney": ""
    }, {"x": 1509897600000, "y": 0.9431, "equityReturn": 1.8797, "unitMoney": ""}, {
        "x": 1509984000000,
        "y": 0.9537,
        "equityReturn": 1.124,
        "unitMoney": ""
    }, {"x": 1510070400000, "y": 0.9472, "equityReturn": -0.6816, "unitMoney": ""}, {
        "x": 1510156800000,
        "y": 0.9484,
        "equityReturn": 0.1267,
        "unitMoney": ""
    }, {"x": 1510243200000, "y": 0.9509, "equityReturn": 0.2636, "unitMoney": ""}, {
        "x": 1510502400000,
        "y": 0.9666,
        "equityReturn": 1.6511,
        "unitMoney": ""
    }, {"x": 1510588800000, "y": 0.9648, "equityReturn": -0.1862, "unitMoney": ""}, {
        "x": 1510675200000,
        "y": 0.9584,
        "equityReturn": -0.6633,
        "unitMoney": ""
    }, {"x": 1510761600000, "y": 0.9673, "equityReturn": 0.9286, "unitMoney": ""}, {
        "x": 1510848000000,
        "y": 0.9329,
        "equityReturn": -3.5563,
        "unitMoney": ""
    }, {"x": 1511107200000, "y": 0.9359, "equityReturn": 0.3216, "unitMoney": ""}, {
        "x": 1511193600000,
        "y": 0.9275,
        "equityReturn": -0.8975,
        "unitMoney": ""
    }, {"x": 1511280000000, "y": 0.9297, "equityReturn": 0.2372, "unitMoney": ""}, {
        "x": 1511366400000,
        "y": 0.8962,
        "equityReturn": -3.6033,
        "unitMoney": ""
    }, {"x": 1511452800000, "y": 0.8946, "equityReturn": -0.1785, "unitMoney": ""}, {
        "x": 1511712000000,
        "y": 0.8764,
        "equityReturn": -2.0344,
        "unitMoney": ""
    }, {"x": 1511798400000, "y": 0.8902, "equityReturn": 1.5746, "unitMoney": ""}, {
        "x": 1511884800000,
        "y": 0.8886,
        "equityReturn": -0.1797,
        "unitMoney": ""
    }, {"x": 1511971200000, "y": 0.8835, "equityReturn": -0.5739, "unitMoney": ""}, {
        "x": 1512057600000,
        "y": 0.8952,
        "equityReturn": 1.3243,
        "unitMoney": ""
    }, {"x": 1512316800000, "y": 0.8887, "equityReturn": -0.7261, "unitMoney": ""}, {
        "x": 1512403200000,
        "y": 0.8708,
        "equityReturn": -2.0142,
        "unitMoney": ""
    }, {"x": 1512489600000, "y": 0.8777, "equityReturn": 0.7924, "unitMoney": ""}, {
        "x": 1512576000000,
        "y": 0.8827,
        "equityReturn": 0.5697,
        "unitMoney": ""
    }, {"x": 1512662400000, "y": 0.892, "equityReturn": 1.0536, "unitMoney": ""}, {
        "x": 1512921600000,
        "y": 0.9046,
        "equityReturn": 1.4126,
        "unitMoney": ""
    }, {"x": 1513008000000, "y": 0.8974, "equityReturn": -0.7959, "unitMoney": ""}, {
        "x": 1513094400000,
        "y": 0.9085,
        "equityReturn": 1.2369,
        "unitMoney": ""
    }, {"x": 1513180800000, "y": 0.9032, "equityReturn": -0.5834, "unitMoney": ""}, {
        "x": 1513267200000,
        "y": 0.8753,
        "equityReturn": -0.0442,
        "unitMoney": "拆分：每份基金份额折算1.031419143份"
    }, {"x": 1513526400000, "y": 0.8695, "equityReturn": -0.6626, "unitMoney": ""}, {
        "x": 1513612800000,
        "y": 0.8765,
        "equityReturn": 0.8051,
        "unitMoney": ""
    }, {"x": 1513699200000, "y": 0.873, "equityReturn": -0.3993, "unitMoney": ""}, {
        "x": 1513785600000,
        "y": 0.8804,
        "equityReturn": 0.8477,
        "unitMoney": ""
    }, {"x": 1513872000000, "y": 0.8727, "equityReturn": -0.8746, "unitMoney": ""}, {
        "x": 1514131200000,
        "y": 0.872,
        "equityReturn": -0.0802,
        "unitMoney": ""
    }, {"x": 1514217600000, "y": 0.8748, "equityReturn": 0.3211, "unitMoney": ""}, {
        "x": 1514304000000,
        "y": 0.8664,
        "equityReturn": -0.9602,
        "unitMoney": ""
    }, {"x": 1514390400000, "y": 0.8692, "equityReturn": 0.3232, "unitMoney": ""}, {
        "x": 1514476800000,
        "y": 0.8806,
        "equityReturn": 1.3116,
        "unitMoney": ""
    }, {"x": 1514649600000, "y": 0.8805, "equityReturn": 0, "unitMoney": ""}, {
        "x": 1514822400000,
        "y": 0.8807,
        "equityReturn": 0.0114,
        "unitMoney": ""
    }, {"x": 1514908800000, "y": 0.8812, "equityReturn": 0.0568, "unitMoney": ""}, {
        "x": 1514995200000,
        "y": 0.882,
        "equityReturn": 0.0908,
        "unitMoney": ""
    }, {"x": 1515081600000, "y": 0.8954, "equityReturn": 1.5193, "unitMoney": ""}, {
        "x": 1515340800000,
        "y": 0.8976,
        "equityReturn": 0.2457,
        "unitMoney": ""
    }, {"x": 1515427200000, "y": 0.904, "equityReturn": 0.713, "unitMoney": ""}, {
        "x": 1515513600000,
        "y": 0.8971,
        "equityReturn": -0.7633,
        "unitMoney": ""
    }, {"x": 1515600000000, "y": 0.9018, "equityReturn": 0.5239, "unitMoney": ""}, {
        "x": 1515686400000,
        "y": 0.8978,
        "equityReturn": -0.4436,
        "unitMoney": ""
    }, {"x": 1515945600000, "y": 0.8847, "equityReturn": -1.4591, "unitMoney": ""}, {
        "x": 1516032000000,
        "y": 0.8893,
        "equityReturn": 0.52,
        "unitMoney": ""
    }, {"x": 1516118400000, "y": 0.8952, "equityReturn": 0.6634, "unitMoney": ""}, {
        "x": 1516204800000,
        "y": 0.8948,
        "equityReturn": -0.0447,
        "unitMoney": ""
    }, {"x": 1516291200000, "y": 0.8914, "equityReturn": -0.38, "unitMoney": ""}, {
        "x": 1516550400000,
        "y": 0.8994,
        "equityReturn": 0.8975,
        "unitMoney": ""
    }, {"x": 1516636800000, "y": 0.8988, "equityReturn": -0.0667, "unitMoney": ""}, {
        "x": 1516723200000,
        "y": 0.9159,
        "equityReturn": 1.9025,
        "unitMoney": ""
    }, {"x": 1516809600000, "y": 0.9127, "equityReturn": -0.3494, "unitMoney": ""}, {
        "x": 1516896000000,
        "y": 0.9138,
        "equityReturn": 0.1205,
        "unitMoney": ""
    }, {"x": 1517155200000, "y": 0.9017, "equityReturn": -1.3241, "unitMoney": ""}, {
        "x": 1517241600000,
        "y": 0.9057,
        "equityReturn": 0.4436,
        "unitMoney": ""
    }, {"x": 1517328000000, "y": 0.8885, "equityReturn": -1.8991, "unitMoney": ""}, {
        "x": 1517414400000,
        "y": 0.8614,
        "equityReturn": -3.0501,
        "unitMoney": ""
    }, {"x": 1517500800000, "y": 0.8608, "equityReturn": -0.0697, "unitMoney": ""}, {
        "x": 1517760000000,
        "y": 0.8524,
        "equityReturn": -0.9758,
        "unitMoney": ""
    }, {"x": 1517846400000, "y": 0.8149, "equityReturn": -4.3993, "unitMoney": ""}, {
        "x": 1517932800000,
        "y": 0.8191,
        "equityReturn": 0.5154,
        "unitMoney": ""
    }, {"x": 1518019200000, "y": 0.8329, "equityReturn": 1.6848, "unitMoney": ""}, {
        "x": 1518105600000,
        "y": 0.8062,
        "equityReturn": -3.2057,
        "unitMoney": ""
    }, {"x": 1518364800000, "y": 0.8335, "equityReturn": 3.3863, "unitMoney": ""}, {
        "x": 1518451200000,
        "y": 0.8341,
        "equityReturn": 0.072,
        "unitMoney": ""
    }, {"x": 1518537600000, "y": 0.8394, "equityReturn": 0.6354, "unitMoney": ""}, {
        "x": 1519228800000,
        "y": 0.854,
        "equityReturn": 1.7393,
        "unitMoney": ""
    }, {"x": 1519315200000, "y": 0.8522, "equityReturn": -0.2108, "unitMoney": ""}, {
        "x": 1519574400000,
        "y": 0.877,
        "equityReturn": 2.9101,
        "unitMoney": ""
    }, {"x": 1519660800000, "y": 0.8757, "equityReturn": -0.1482, "unitMoney": ""}, {
        "x": 1519747200000,
        "y": 0.8797,
        "equityReturn": 0.4568,
        "unitMoney": ""
    }, {"x": 1519833600000, "y": 0.8937, "equityReturn": 1.5915, "unitMoney": ""}, {
        "x": 1519920000000,
        "y": 0.8916,
        "equityReturn": -0.235,
        "unitMoney": ""
    }, {"x": 1520179200000, "y": 0.9032, "equityReturn": 1.301, "unitMoney": ""}, {
        "x": 1520265600000,
        "y": 0.9194,
        "equityReturn": 1.7936,
        "unitMoney": ""
    }, {"x": 1520352000000, "y": 0.9177, "equityReturn": -0.1849, "unitMoney": ""}, {
        "x": 1520438400000,
        "y": 0.9337,
        "equityReturn": 1.7435,
        "unitMoney": ""
    }, {"x": 1520524800000, "y": 0.9428, "equityReturn": 0.9746, "unitMoney": ""}, {
        "x": 1520784000000,
        "y": 0.9514,
        "equityReturn": 0.9122,
        "unitMoney": ""
    }, {"x": 1520870400000, "y": 0.9386, "equityReturn": -1.3454, "unitMoney": ""}, {
        "x": 1520956800000,
        "y": 0.9278,
        "equityReturn": -1.1506,
        "unitMoney": ""
    }, {"x": 1521043200000, "y": 0.9257, "equityReturn": -0.2263, "unitMoney": ""}, {
        "x": 1521129600000,
        "y": 0.9241,
        "equityReturn": -0.1728,
        "unitMoney": ""
    }, {"x": 1521388800000, "y": 0.9488, "equityReturn": 2.6729, "unitMoney": ""}, {
        "x": 1521475200000,
        "y": 0.9659,
        "equityReturn": 1.8023,
        "unitMoney": ""
    }, {"x": 1521561600000, "y": 0.9612, "equityReturn": -0.4866, "unitMoney": ""}, {
        "x": 1521648000000,
        "y": 0.9556,
        "equityReturn": -0.5826,
        "unitMoney": ""
    }, {"x": 1521734400000, "y": 0.927, "equityReturn": -2.9929, "unitMoney": ""}, {
        "x": 1521993600000,
        "y": 0.9608,
        "equityReturn": 3.6462,
        "unitMoney": ""
    }, {"x": 1522080000000, "y": 0.9858, "equityReturn": 2.602, "unitMoney": ""}, {
        "x": 1522166400000,
        "y": 0.982,
        "equityReturn": -0.3855,
        "unitMoney": ""
    }, {"x": 1522252800000, "y": 0.9721, "equityReturn": -1.0081, "unitMoney": ""}, {
        "x": 1522339200000,
        "y": 1.0066,
        "equityReturn": 3.549,
        "unitMoney": ""
    }, {"x": 1522598400000, "y": 1.0016, "equityReturn": -0.4967, "unitMoney": ""}, {
        "x": 1522684800000,
        "y": 0.9974,
        "equityReturn": -0.4193,
        "unitMoney": ""
    }, {"x": 1522771200000, "y": 0.9873, "equityReturn": -1.0126, "unitMoney": ""}, {
        "x": 1523203200000,
        "y": 0.9925,
        "equityReturn": 0.5267,
        "unitMoney": ""
    }, {"x": 1523289600000, "y": 1.0048, "equityReturn": 1.2393, "unitMoney": ""}, {
        "x": 1523376000000,
        "y": 1.0012,
        "equityReturn": -0.3583,
        "unitMoney": ""
    }, {"x": 1523462400000, "y": 1.012, "equityReturn": 1.0787, "unitMoney": ""}, {
        "x": 1523548800000,
        "y": 0.9989,
        "equityReturn": -1.2945,
        "unitMoney": ""
    }, {"x": 1523808000000, "y": 1.0104, "equityReturn": 1.1513, "unitMoney": ""}, {
        "x": 1523894400000,
        "y": 0.9856,
        "equityReturn": -2.4545,
        "unitMoney": ""
    }, {"x": 1523980800000, "y": 1.0038, "equityReturn": 1.8466, "unitMoney": ""}, {
        "x": 1524067200000,
        "y": 1.0079,
        "equityReturn": 0.4084,
        "unitMoney": ""
    }, {"x": 1524153600000, "y": 0.9971, "equityReturn": -1.0715, "unitMoney": ""}, {
        "x": 1524412800000,
        "y": 0.9835,
        "equityReturn": -1.364,
        "unitMoney": ""
    }, {"x": 1524499200000, "y": 1.0035, "equityReturn": 2.0336, "unitMoney": ""}, {
        "x": 1524585600000,
        "y": 1.0393,
        "equityReturn": 3.5675,
        "unitMoney": ""
    }, {"x": 1524672000000, "y": 1.0205, "equityReturn": -1.8089, "unitMoney": ""}, {
        "x": 1524758400000,
        "y": 1.0456,
        "equityReturn": 2.4596,
        "unitMoney": ""
    }, {"x": 1525190400000, "y": 1.0499, "equityReturn": 0.4112, "unitMoney": ""}, {
        "x": 1525276800000,
        "y": 1.0385,
        "equityReturn": -1.0858,
        "unitMoney": ""
    }, {"x": 1525363200000, "y": 1.0479, "equityReturn": 0.9052, "unitMoney": ""}, {
        "x": 1525622400000,
        "y": 1.0643,
        "equityReturn": 1.565,
        "unitMoney": ""
    }, {"x": 1525708800000, "y": 1.0586, "equityReturn": -0.5356, "unitMoney": ""}, {
        "x": 1525795200000,
        "y": 1.0545,
        "equityReturn": -0.3873,
        "unitMoney": ""
    }, {"x": 1525881600000, "y": 1.0765, "equityReturn": 2.0863, "unitMoney": ""}, {
        "x": 1525968000000,
        "y": 1.0467,
        "equityReturn": -2.7682,
        "unitMoney": ""
    }, {"x": 1526227200000, "y": 1.0404, "equityReturn": -0.6019, "unitMoney": ""}, {
        "x": 1526313600000,
        "y": 1.0586,
        "equityReturn": 1.7493,
        "unitMoney": ""
    }, {"x": 1526400000000, "y": 1.0652, "equityReturn": 0.6235, "unitMoney": ""}, {
        "x": 1526486400000,
        "y": 1.0531,
        "equityReturn": -1.1359,
        "unitMoney": ""
    }, {"x": 1526572800000, "y": 1.0551, "equityReturn": 0.1899, "unitMoney": ""}, {
        "x": 1526832000000,
        "y": 1.0626,
        "equityReturn": 0.7108,
        "unitMoney": ""
    }, {"x": 1526918400000, "y": 1.0813, "equityReturn": 1.7598, "unitMoney": ""}, {
        "x": 1527004800000,
        "y": 1.0753,
        "equityReturn": -0.5549,
        "unitMoney": ""
    }, {"x": 1527091200000, "y": 1.0845, "equityReturn": 0.8556, "unitMoney": ""}, {
        "x": 1527177600000,
        "y": 1.0778,
        "equityReturn": -0.6178,
        "unitMoney": ""
    }, {"x": 1527436800000, "y": 1.0848, "equityReturn": 0.6495, "unitMoney": ""}, {
        "x": 1527523200000,
        "y": 1.0544,
        "equityReturn": -2.8024,
        "unitMoney": ""
    }, {"x": 1527609600000, "y": 1.0404, "equityReturn": -1.3278, "unitMoney": ""}, {
        "x": 1527696000000,
        "y": 1.0736,
        "equityReturn": 3.1911,
        "unitMoney": ""
    }, {"x": 1527782400000, "y": 1.0392, "equityReturn": -3.2042, "unitMoney": ""}, {
        "x": 1528041600000,
        "y": 1.0334,
        "equityReturn": -0.5581,
        "unitMoney": ""
    }, {"x": 1528128000000, "y": 1.0612, "equityReturn": 2.6901, "unitMoney": ""}, {
        "x": 1528214400000,
        "y": 1.0686,
        "equityReturn": 0.6973,
        "unitMoney": ""
    }, {"x": 1528300800000, "y": 1.0482, "equityReturn": -1.909, "unitMoney": ""}, {
        "x": 1528387200000,
        "y": 1.047,
        "equityReturn": -0.1145,
        "unitMoney": ""
    }, {"x": 1528646400000, "y": 1.0223, "equityReturn": -2.3591, "unitMoney": ""}, {
        "x": 1528732800000,
        "y": 1.0353,
        "equityReturn": 1.2716,
        "unitMoney": ""
    }, {"x": 1528819200000, "y": 1.0146, "equityReturn": -1.9994, "unitMoney": ""}, {
        "x": 1528905600000,
        "y": 1.0085,
        "equityReturn": -0.6012,
        "unitMoney": ""
    }, {"x": 1528992000000, "y": 0.9949, "equityReturn": -1.3485, "unitMoney": ""}, {
        "x": 1529337600000,
        "y": 0.95009999999999994,
        "equityReturn": -4.503,
        "unitMoney": ""
    }, {"x": 1529424000000, "y": 0.9804, "equityReturn": 3.1891, "unitMoney": ""}, {
        "x": 1529510400000,
        "y": 0.9733,
        "equityReturn": -0.7242,
        "unitMoney": ""
    }, {"x": 1529596800000, "y": 0.9844, "equityReturn": 1.1405, "unitMoney": ""}, {
        "x": 1529856000000,
        "y": 0.9889,
        "equityReturn": 0.4571,
        "unitMoney": ""
    }, {"x": 1529942400000, "y": 0.9926, "equityReturn": 0.3742, "unitMoney": ""}, {
        "x": 1530028800000,
        "y": 0.9674,
        "equityReturn": -2.5388,
        "unitMoney": ""
    }, {"x": 1530115200000, "y": 0.9563, "equityReturn": -1.1474, "unitMoney": ""}, {
        "x": 1530201600000,
        "y": 0.9914,
        "equityReturn": 3.6704,
        "unitMoney": ""
    }, {"x": 1530288000000, "y": 0.9913, "equityReturn": 0, "unitMoney": ""}, {
        "x": 1530460800000,
        "y": 0.99,
        "equityReturn": -0.1412,
        "unitMoney": ""
    }, {"x": 1530547200000, "y": 0.9937, "equityReturn": 0.3737, "unitMoney": ""}, {
        "x": 1530633600000,
        "y": 0.9701,
        "equityReturn": -2.375,
        "unitMoney": ""
    }, {"x": 1530720000000, "y": 0.945, "equityReturn": -2.5874, "unitMoney": ""}, {
        "x": 1530806400000,
        "y": 0.9485,
        "equityReturn": 0.3704,
        "unitMoney": ""
    }, {"x": 1531065600000, "y": 0.9852, "equityReturn": 3.8693, "unitMoney": ""}, {
        "x": 1531152000000,
        "y": 0.9916,
        "equityReturn": 0.6496,
        "unitMoney": ""
    }, {"x": 1531238400000, "y": 0.9866, "equityReturn": -0.5042, "unitMoney": ""}, {
        "x": 1531324800000,
        "y": 1.013,
        "equityReturn": 2.6759,
        "unitMoney": ""
    }, {"x": 1531411200000, "y": 1.0249, "equityReturn": 1.1747, "unitMoney": ""}, {
        "x": 1531670400000,
        "y": 1.0349,
        "equityReturn": 0.9757,
        "unitMoney": ""
    }, {"x": 1531756800000, "y": 1.026, "equityReturn": -0.86, "unitMoney": ""}, {
        "x": 1531843200000,
        "y": 1.0149,
        "equityReturn": -1.0819,
        "unitMoney": ""
    }, {"x": 1531929600000, "y": 0.9934, "equityReturn": -2.1184, "unitMoney": ""}, {
        "x": 1532016000000,
        "y": 0.997,
        "equityReturn": 0.3624,
        "unitMoney": ""
    }, {"x": 1532275200000, "y": 0.9738, "equityReturn": -2.327, "unitMoney": ""}, {
        "x": 1532361600000,
        "y": 0.9848,
        "equityReturn": 1.1296,
        "unitMoney": ""
    }, {"x": 1532448000000, "y": 1.0024, "equityReturn": 1.7872, "unitMoney": ""}, {
        "x": 1532534400000,
        "y": 0.9924,
        "equityReturn": -0.9976,
        "unitMoney": ""
    }, {"x": 1532620800000, "y": 0.9836, "equityReturn": -0.8867, "unitMoney": ""}, {
        "x": 1532880000000,
        "y": 0.95,
        "equityReturn": -3.416,
        "unitMoney": ""
    }, {"x": 1532966400000, "y": 0.954, "equityReturn": 0.4211, "unitMoney": ""}, {
        "x": 1533052800000,
        "y": 0.9319,
        "equityReturn": -2.3166,
        "unitMoney": ""
    }, {"x": 1533139200000, "y": 0.9234, "equityReturn": -0.9121, "unitMoney": ""}, {
        "x": 1533225600000,
        "y": 0.8937,
        "equityReturn": -3.2164,
        "unitMoney": ""
    }, {"x": 1533484800000, "y": 0.8711, "equityReturn": -2.5288, "unitMoney": ""}, {
        "x": 1533571200000,
        "y": 0.8929,
        "equityReturn": 2.5026,
        "unitMoney": ""
    }, {"x": 1533657600000, "y": 0.8713, "equityReturn": -2.4191, "unitMoney": ""}, {
        "x": 1533744000000,
        "y": 0.9003,
        "equityReturn": 3.3284,
        "unitMoney": ""
    }, {"x": 1533830400000, "y": 0.913, "equityReturn": 1.4106, "unitMoney": ""}, {
        "x": 1534089600000,
        "y": 0.9247,
        "equityReturn": 1.2815,
        "unitMoney": ""
    }, {"x": 1534176000000, "y": 0.9235, "equityReturn": -0.1298, "unitMoney": ""}, {
        "x": 1534262400000,
        "y": 0.8971,
        "equityReturn": -2.8587,
        "unitMoney": ""
    }, {"x": 1534348800000, "y": 0.8942, "equityReturn": -0.3233, "unitMoney": ""}, {
        "x": 1534435200000,
        "y": 0.8612,
        "equityReturn": -3.6904,
        "unitMoney": ""
    }, {"x": 1534694400000, "y": 0.8531, "equityReturn": -0.9405, "unitMoney": ""}, {
        "x": 1534780800000,
        "y": 0.8871,
        "equityReturn": 3.9855,
        "unitMoney": ""
    }, {"x": 1534867200000, "y": 0.8802, "equityReturn": -0.7778, "unitMoney": ""}, {
        "x": 1534953600000,
        "y": 0.8917,
        "equityReturn": 1.3065,
        "unitMoney": ""
    }, {"x": 1535040000000, "y": 0.8906, "equityReturn": -0.1234, "unitMoney": ""}, {
        "x": 1535299200000,
        "y": 0.9292,
        "equityReturn": 4.3342,
        "unitMoney": ""
    }, {"x": 1535385600000, "y": 0.9282, "equityReturn": -0.1076, "unitMoney": ""}, {
        "x": 1535472000000,
        "y": 0.9254,
        "equityReturn": -0.3017,
        "unitMoney": ""
    }, {"x": 1535558400000, "y": 0.9118, "equityReturn": -1.4696, "unitMoney": ""}, {
        "x": 1535644800000,
        "y": 0.8963,
        "equityReturn": -1.6999,
        "unitMoney": ""
    }, {"x": 1535904000000, "y": 0.9037, "equityReturn": 0.8256, "unitMoney": ""}, {
        "x": 1535990400000,
        "y": 0.9172,
        "equityReturn": 1.4939,
        "unitMoney": ""
    }, {"x": 1536076800000, "y": 0.904, "equityReturn": -1.4392, "unitMoney": ""}, {
        "x": 1536163200000,
        "y": 0.8968,
        "equityReturn": -0.7965,
        "unitMoney": ""
    }, {"x": 1536249600000, "y": 0.9065, "equityReturn": 1.0816, "unitMoney": ""}, {
        "x": 1536508800000,
        "y": 0.8904,
        "equityReturn": -1.7761,
        "unitMoney": ""
    }, {"x": 1536595200000, "y": 0.8972, "equityReturn": 0.7637, "unitMoney": ""}, {
        "x": 1536681600000,
        "y": 0.88,
        "equityReturn": -1.9171,
        "unitMoney": ""
    }, {"x": 1536768000000, "y": 0.8718, "equityReturn": -0.9318, "unitMoney": ""}, {
        "x": 1536854400000,
        "y": 0.8585,
        "equityReturn": -1.5256,
        "unitMoney": ""
    }, {"x": 1537113600000, "y": 0.8493, "equityReturn": -1.0716, "unitMoney": ""}, {
        "x": 1537200000000,
        "y": 0.8681,
        "equityReturn": 2.2136,
        "unitMoney": ""
    }, {"x": 1537286400000, "y": 0.8778, "equityReturn": 1.1174, "unitMoney": ""}, {
        "x": 1537372800000,
        "y": 0.8738,
        "equityReturn": -0.4557,
        "unitMoney": ""
    }, {"x": 1537459200000, "y": 0.8927, "equityReturn": 2.163, "unitMoney": ""}, {
        "x": 1537804800000,
        "y": 0.8907,
        "equityReturn": -0.224,
        "unitMoney": ""
    }, {"x": 1537891200000, "y": 0.9031, "equityReturn": 1.3922, "unitMoney": ""}, {
        "x": 1537977600000,
        "y": 0.9005,
        "equityReturn": -0.2879,
        "unitMoney": ""
    }, {"x": 1538064000000, "y": 0.9069, "equityReturn": 0.7107, "unitMoney": ""}, {
        "x": 1538928000000,
        "y": 0.8712,
        "equityReturn": -3.9365,
        "unitMoney": ""
    }, {"x": 1539014400000, "y": 0.8677, "equityReturn": -0.4017, "unitMoney": ""}, {
        "x": 1539100800000,
        "y": 0.8565,
        "equityReturn": -1.2908,
        "unitMoney": ""
    }, {"x": 1539187200000, "y": 0.81, "equityReturn": -5.4291, "unitMoney": ""}, {
        "x": 1539273600000,
        "y": 0.8161,
        "equityReturn": 0.7531,
        "unitMoney": ""
    }, {"x": 1539532800000, "y": 0.803, "equityReturn": -1.6052, "unitMoney": ""}, {
        "x": 1539619200000,
        "y": 0.7832,
        "equityReturn": -2.4658,
        "unitMoney": ""
    }, {"x": 1539705600000, "y": 0.7899, "equityReturn": 0.8555, "unitMoney": ""}, {
        "x": 1539792000000,
        "y": 0.7583,
        "equityReturn": -4.0005,
        "unitMoney": ""
    }, {"x": 1539878400000, "y": 0.7887, "equityReturn": 4.009, "unitMoney": ""}, {
        "x": 1540137600000,
        "y": 0.832,
        "equityReturn": 5.49,
        "unitMoney": ""
    }, {"x": 1540224000000, "y": 0.8118, "equityReturn": -2.4279, "unitMoney": ""}, {
        "x": 1540310400000,
        "y": 0.802,
        "equityReturn": -1.2072,
        "unitMoney": ""
    }, {"x": 1540396800000, "y": 0.7967, "equityReturn": -0.6608, "unitMoney": ""}, {
        "x": 1540483200000,
        "y": 0.7892,
        "equityReturn": -0.9414,
        "unitMoney": ""
    }, {"x": 1540742400000, "y": 0.7716, "equityReturn": -2.2301, "unitMoney": ""}, {
        "x": 1540828800000,
        "y": 0.781,
        "equityReturn": 1.2182,
        "unitMoney": ""
    }, {"x": 1540915200000, "y": 0.7991, "equityReturn": 2.3175, "unitMoney": ""}, {
        "x": 1541001600000,
        "y": 0.8068,
        "equityReturn": 0.9636,
        "unitMoney": ""
    }, {"x": 1541088000000, "y": 0.8456, "equityReturn": 4.8091, "unitMoney": ""}, {
        "x": 1541347200000,
        "y": 0.8437,
        "equityReturn": -0.2247,
        "unitMoney": ""
    }, {"x": 1541433600000, "y": 0.8436, "equityReturn": -0.0119, "unitMoney": ""}, {
        "x": 1541520000000,
        "y": 0.8413,
        "equityReturn": -0.2726,
        "unitMoney": ""
    }, {"x": 1541606400000, "y": 0.8413, "equityReturn": 0.0, "unitMoney": ""}, {
        "x": 1541692800000,
        "y": 0.8403,
        "equityReturn": -0.1189,
        "unitMoney": ""
    }, {"x": 1541952000000, "y": 0.865, "equityReturn": 2.9394, "unitMoney": ""}, {
        "x": 1542038400000,
        "y": 0.879,
        "equityReturn": 1.6185,
        "unitMoney": ""
    }, {"x": 1542124800000, "y": 0.8715, "equityReturn": -0.8532, "unitMoney": ""}, {
        "x": 1542211200000,
        "y": 0.8821,
        "equityReturn": 1.2163,
        "unitMoney": ""
    }, {"x": 1542297600000, "y": 0.8773, "equityReturn": -0.5442, "unitMoney": ""}, {
        "x": 1542556800000,
        "y": 0.8764,
        "equityReturn": -0.1026,
        "unitMoney": ""
    }, {"x": 1542643200000, "y": 0.8568, "equityReturn": -2.2364, "unitMoney": ""}, {
        "x": 1542729600000,
        "y": 0.8609,
        "equityReturn": 0.4785,
        "unitMoney": ""
    }, {"x": 1542816000000, "y": 0.8642, "equityReturn": 0.3833, "unitMoney": ""}, {
        "x": 1542902400000,
        "y": 0.8369,
        "equityReturn": -3.159,
        "unitMoney": ""
    }, {"x": 1543161600000, "y": 0.8381, "equityReturn": 0.1434, "unitMoney": ""}, {
        "x": 1543248000000,
        "y": 0.8457,
        "equityReturn": 0.9068,
        "unitMoney": ""
    }, {"x": 1543334400000, "y": 0.8512, "equityReturn": 0.6503, "unitMoney": ""}, {
        "x": 1543420800000,
        "y": 0.8389,
        "equityReturn": -1.445,
        "unitMoney": ""
    }, {"x": 1543507200000, "y": 0.8455, "equityReturn": 0.7867, "unitMoney": ""}, {
        "x": 1543766400000,
        "y": 0.8753,
        "equityReturn": 3.5245,
        "unitMoney": ""
    }, {"x": 1543852800000, "y": 0.8895, "equityReturn": 1.6223, "unitMoney": ""}, {
        "x": 1543939200000,
        "y": 0.8897,
        "equityReturn": 0.0225,
        "unitMoney": ""
    }, {"x": 1544025600000, "y": 0.8593, "equityReturn": -3.4169, "unitMoney": ""}, {
        "x": 1544112000000,
        "y": 0.8424,
        "equityReturn": -1.9667,
        "unitMoney": ""
    }, {"x": 1544371200000, "y": 0.8328, "equityReturn": -1.1396, "unitMoney": ""}, {
        "x": 1544457600000,
        "y": 0.8439,
        "equityReturn": 1.3329,
        "unitMoney": ""
    }, {"x": 1544544000000, "y": 0.8395, "equityReturn": -0.5214, "unitMoney": ""}, {
        "x": 1544630400000,
        "y": 0.846,
        "equityReturn": 0.7743,
        "unitMoney": ""
    }, {
        "x": 1544716800000,
        "y": 0.7902,
        "equityReturn": -3.3541,
        "unitMoney": "拆分：每份基金份额折算1.034705558份"
    }, {"x": 1544976000000, "y": 0.7811, "equityReturn": -1.1516, "unitMoney": ""}, {
        "x": 1545062400000,
        "y": 0.7763,
        "equityReturn": -0.6145,
        "unitMoney": ""
    }, {"x": 1545148800000, "y": 0.7531, "equityReturn": -2.9885, "unitMoney": ""}, {
        "x": 1545235200000,
        "y": 0.7504,
        "equityReturn": -0.3585,
        "unitMoney": ""
    }, {"x": 1545321600000, "y": 0.7423, "equityReturn": -1.0794, "unitMoney": ""}, {
        "x": 1545580800000,
        "y": 0.7547,
        "equityReturn": 1.6705,
        "unitMoney": ""
    }, {"x": 1545667200000, "y": 0.7551, "equityReturn": 0.053, "unitMoney": ""}, {
        "x": 1545753600000,
        "y": 0.7515,
        "equityReturn": -0.4768,
        "unitMoney": ""
    }, {"x": 1545840000000, "y": 0.7463, "equityReturn": -0.6919, "unitMoney": ""}, {
        "x": 1545926400000,
        "y": 0.7531,
        "equityReturn": 0.9112,
        "unitMoney": ""
    }, {"x": 1546185600000, "y": 0.7529, "equityReturn": 0, "unitMoney": ""}, {
        "x": 1546358400000,
        "y": 0.7297,
        "equityReturn": -3.1072,
        "unitMoney": ""
    }, {"x": 1546444800000, "y": 0.7226, "equityReturn": -0.973, "unitMoney": ""}, {
        "x": 1546531200000,
        "y": 0.7399,
        "equityReturn": 2.3941,
        "unitMoney": ""
    }, {"x": 1546790400000, "y": 0.744, "equityReturn": 0.5541, "unitMoney": ""}, {
        "x": 1546876800000,
        "y": 0.7405,
        "equityReturn": -0.4704,
        "unitMoney": ""
    }, {"x": 1546963200000, "y": 0.7428, "equityReturn": 0.3106, "unitMoney": ""}, {
        "x": 1547049600000,
        "y": 0.7329,
        "equityReturn": -1.3328,
        "unitMoney": ""
    }, {"x": 1547136000000, "y": 0.7296, "equityReturn": -0.4503, "unitMoney": ""}, {
        "x": 1547395200000,
        "y": 0.7237,
        "equityReturn": -0.8087,
        "unitMoney": ""
    }, {"x": 1547481600000, "y": 0.7351, "equityReturn": 1.5752, "unitMoney": ""}, {
        "x": 1547568000000,
        "y": 0.7451,
        "equityReturn": 1.3604,
        "unitMoney": ""
    }, {"x": 1547654400000, "y": 0.7421, "equityReturn": -0.4026, "unitMoney": ""}, {
        "x": 1547740800000,
        "y": 0.7566,
        "equityReturn": 1.9539,
        "unitMoney": ""
    }, {"x": 1548000000000, "y": 0.7657, "equityReturn": 1.2027, "unitMoney": ""}, {
        "x": 1548086400000,
        "y": 0.7519,
        "equityReturn": -1.8023,
        "unitMoney": ""
    }, {"x": 1548172800000, "y": 0.7506, "equityReturn": -0.1729, "unitMoney": ""}, {
        "x": 1548259200000,
        "y": 0.7526,
        "equityReturn": 0.2665,
        "unitMoney": ""
    }, {"x": 1548345600000, "y": 0.7562, "equityReturn": 0.4783, "unitMoney": ""}, {
        "x": 1548604800000,
        "y": 0.7495,
        "equityReturn": -0.886,
        "unitMoney": ""
    }, {"x": 1548691200000, "y": 0.7467, "equityReturn": -0.3736, "unitMoney": ""}, {
        "x": 1548777600000,
        "y": 0.7398,
        "equityReturn": -0.9241,
        "unitMoney": ""
    }, {"x": 1548864000000, "y": 0.7382, "equityReturn": -0.2163, "unitMoney": ""}, {
        "x": 1548950400000,
        "y": 0.7618,
        "equityReturn": 3.197,
        "unitMoney": ""
    }, {"x": 1549814400000, "y": 0.7823, "equityReturn": 2.691, "unitMoney": ""}, {
        "x": 1549900800000,
        "y": 0.7929,
        "equityReturn": 1.355,
        "unitMoney": ""
    }, {"x": 1549987200000, "y": 0.802, "equityReturn": 1.1477, "unitMoney": ""}, {
        "x": 1550073600000,
        "y": 0.8052,
        "equityReturn": 0.399,
        "unitMoney": ""
    }, {"x": 1550160000000, "y": 0.7981, "equityReturn": -0.8818, "unitMoney": ""}, {
        "x": 1550419200000,
        "y": 0.8306,
        "equityReturn": 4.0722,
        "unitMoney": ""
    }, {"x": 1550505600000, "y": 0.827, "equityReturn": -0.4334, "unitMoney": ""}, {
        "x": 1550592000000,
        "y": 0.8203,
        "equityReturn": -0.8102,
        "unitMoney": ""
    }, {"x": 1550678400000, "y": 0.8184, "equityReturn": -0.2316, "unitMoney": ""}, {
        "x": 1550764800000,
        "y": 0.8303,
        "equityReturn": 1.4541,
        "unitMoney": ""
    }, {"x": 1551024000000, "y": 0.865, "equityReturn": 4.1792, "unitMoney": ""}, {
        "x": 1551110400000,
        "y": 0.8728,
        "equityReturn": 0.9017,
        "unitMoney": ""
    }, {"x": 1551196800000, "y": 0.862, "equityReturn": -1.2374, "unitMoney": ""}, {
        "x": 1551283200000,
        "y": 0.8875,
        "equityReturn": 2.9582,
        "unitMoney": ""
    }, {"x": 1551369600000, "y": 0.8898, "equityReturn": 0.2592, "unitMoney": ""}, {
        "x": 1551628800000,
        "y": 0.9065,
        "equityReturn": 1.8768,
        "unitMoney": ""
    }, {"x": 1551715200000, "y": 0.917, "equityReturn": 1.1583, "unitMoney": ""}, {
        "x": 1551801600000,
        "y": 0.9221,
        "equityReturn": 0.5562,
        "unitMoney": ""
    }, {"x": 1551888000000, "y": 0.9126, "equityReturn": -1.0303, "unitMoney": ""}, {
        "x": 1551974400000,
        "y": 0.8852,
        "equityReturn": -3.0024,
        "unitMoney": ""
    }, {"x": 1552233600000, "y": 0.9259, "equityReturn": 4.5978, "unitMoney": ""}, {
        "x": 1552320000000,
        "y": 0.9374,
        "equityReturn": 1.242,
        "unitMoney": ""
    }, {"x": 1552406400000, "y": 0.9202, "equityReturn": -1.8349, "unitMoney": ""}, {
        "x": 1552492800000,
        "y": 0.9087,
        "equityReturn": -1.2497,
        "unitMoney": ""
    }, {"x": 1552579200000, "y": 0.9265, "equityReturn": 1.9588, "unitMoney": ""}, {
        "x": 1552838400000,
        "y": 0.9604,
        "equityReturn": 3.6589,
        "unitMoney": ""
    }, {"x": 1552924800000, "y": 0.95009999999999994, "equityReturn": -1.0725, "unitMoney": ""}, {
        "x": 1553011200000,
        "y": 0.9461,
        "equityReturn": -0.421,
        "unitMoney": ""
    }, {"x": 1553097600000, "y": 0.9496, "equityReturn": 0.3699, "unitMoney": ""}, {
        "x": 1553184000000,
        "y": 0.9552,
        "equityReturn": 0.5897,
        "unitMoney": ""
    }, {"x": 1553443200000, "y": 0.9456, "equityReturn": -1.005, "unitMoney": ""}, {
        "x": 1553529600000,
        "y": 0.9188,
        "equityReturn": -2.8342,
        "unitMoney": ""
    }, {"x": 1553616000000, "y": 0.9359, "equityReturn": 1.8611, "unitMoney": ""}, {
        "x": 1553702400000,
        "y": 0.9286,
        "equityReturn": -0.78,
        "unitMoney": ""
    }, {"x": 1553788800000, "y": 0.9677, "equityReturn": 4.2106, "unitMoney": ""}, {
        "x": 1554048000000,
        "y": 0.9962,
        "equityReturn": 2.9451,
        "unitMoney": ""
    }, {"x": 1554134400000, "y": 0.9929, "equityReturn": -0.3313, "unitMoney": ""}, {
        "x": 1554220800000,
        "y": 0.9979,
        "equityReturn": 0.5036,
        "unitMoney": ""
    }, {"x": 1554307200000, "y": 0.9921, "equityReturn": -0.5812, "unitMoney": ""}, {
        "x": 1554652800000,
        "y": 0.9777,
        "equityReturn": -1.4515,
        "unitMoney": ""
    }, {"x": 1554739200000, "y": 0.9947, "equityReturn": 1.7388, "unitMoney": ""}, {
        "x": 1554825600000,
        "y": 0.9999,
        "equityReturn": 0.5228,
        "unitMoney": ""
    }, {"x": 1554912000000, "y": 0.9676, "equityReturn": -3.2303, "unitMoney": ""}, {
        "x": 1554998400000,
        "y": 0.9641,
        "equityReturn": -0.3617,
        "unitMoney": ""
    }, {"x": 1555257600000, "y": 0.9498, "equityReturn": -1.4832, "unitMoney": ""}, {
        "x": 1555344000000,
        "y": 0.9634,
        "equityReturn": 1.4319,
        "unitMoney": ""
    }, {"x": 1555430400000, "y": 0.9628, "equityReturn": -0.0623, "unitMoney": ""}, {
        "x": 1555516800000,
        "y": 0.9529,
        "equityReturn": -1.0283,
        "unitMoney": ""
    }, {"x": 1555603200000, "y": 0.9607, "equityReturn": 0.8186, "unitMoney": ""}, {
        "x": 1555862400000,
        "y": 0.9583,
        "equityReturn": -0.2498,
        "unitMoney": ""
    }, {"x": 1555948800000, "y": 0.9513, "equityReturn": -0.7305, "unitMoney": ""}, {
        "x": 1556035200000,
        "y": 0.9635,
        "equityReturn": 1.2825,
        "unitMoney": ""
    }, {"x": 1556121600000, "y": 0.944, "equityReturn": -2.0239, "unitMoney": ""}, {
        "x": 1556208000000,
        "y": 0.9408,
        "equityReturn": -0.339,
        "unitMoney": ""
    }, {"x": 1556467200000, "y": 0.9471, "equityReturn": 0.6696, "unitMoney": ""}, {
        "x": 1556553600000,
        "y": 0.9483,
        "equityReturn": 0.1267,
        "unitMoney": ""
    }, {"x": 1557072000000, "y": 0.8941, "equityReturn": -5.7155, "unitMoney": ""}, {
        "x": 1557158400000,
        "y": 0.9114,
        "equityReturn": 1.9349,
        "unitMoney": ""
    }, {"x": 1557244800000, "y": 0.9006, "equityReturn": -1.185, "unitMoney": ""}, {
        "x": 1557331200000,
        "y": 0.8841,
        "equityReturn": -1.8321,
        "unitMoney": ""
    }, {"x": 1557417600000, "y": 0.9133, "equityReturn": 3.3028, "unitMoney": ""}, {
        "x": 1557676800000,
        "y": 0.9137,
        "equityReturn": 0.0438,
        "unitMoney": ""
    }, {"x": 1557763200000, "y": 0.9034, "equityReturn": -1.1273, "unitMoney": ""}, {
        "x": 1557849600000,
        "y": 0.9256,
        "equityReturn": 2.4574,
        "unitMoney": ""
    }, {"x": 1557936000000, "y": 0.9299, "equityReturn": 0.4646, "unitMoney": ""}, {
        "x": 1558022400000,
        "y": 0.9076,
        "equityReturn": -2.3981,
        "unitMoney": ""
    }, {"x": 1558281600000, "y": 0.9066, "equityReturn": -0.1102, "unitMoney": ""}, {
        "x": 1558368000000,
        "y": 0.9212,
        "equityReturn": 1.6104,
        "unitMoney": ""
    }, {"x": 1558454400000, "y": 0.9178, "equityReturn": -0.3691, "unitMoney": ""}, {
        "x": 1558540800000,
        "y": 0.8941,
        "equityReturn": -2.5823,
        "unitMoney": ""
    }, {"x": 1558627200000, "y": 0.8931, "equityReturn": -0.1118, "unitMoney": ""}, {
        "x": 1558886400000,
        "y": 0.9078,
        "equityReturn": 1.646,
        "unitMoney": ""
    }, {"x": 1558972800000, "y": 0.9156, "equityReturn": 0.8592, "unitMoney": ""}, {
        "x": 1559059200000,
        "y": 0.9084,
        "equityReturn": -0.7864,
        "unitMoney": ""
    }, {"x": 1559145600000, "y": 0.9012, "equityReturn": -0.7926, "unitMoney": ""}, {
        "x": 1559232000000,
        "y": 0.8986,
        "equityReturn": -0.2885,
        "unitMoney": ""
    }, {"x": 1559491200000, "y": 0.8843, "equityReturn": -1.5914, "unitMoney": ""}, {
        "x": 1559577600000,
        "y": 0.8734,
        "equityReturn": -1.2326,
        "unitMoney": ""
    }, {"x": 1559664000000, "y": 0.8594, "equityReturn": -1.6029, "unitMoney": ""}, {
        "x": 1559750400000,
        "y": 0.8472,
        "equityReturn": -1.4196,
        "unitMoney": ""
    }, {"x": 1560096000000, "y": 0.8573, "equityReturn": 1.1922, "unitMoney": ""}, {
        "x": 1560182400000,
        "y": 0.8852,
        "equityReturn": 3.2544,
        "unitMoney": ""
    }, {"x": 1560268800000, "y": 0.8798, "equityReturn": -0.61, "unitMoney": ""}, {
        "x": 1560355200000,
        "y": 0.8827,
        "equityReturn": 0.3296,
        "unitMoney": ""
    }, {"x": 1560441600000, "y": 0.8772, "equityReturn": -0.6231, "unitMoney": ""}, {
        "x": 1560700800000,
        "y": 0.8726,
        "equityReturn": -0.5244,
        "unitMoney": ""
    }, {"x": 1560787200000, "y": 0.8833, "equityReturn": 1.2262, "unitMoney": ""}, {
        "x": 1560873600000,
        "y": 0.8914,
        "equityReturn": 0.917,
        "unitMoney": ""
    }, {"x": 1560960000000, "y": 0.9101, "equityReturn": 2.0978, "unitMoney": ""}, {
        "x": 1561046400000,
        "y": 0.9201,
        "equityReturn": 1.0988,
        "unitMoney": ""
    }, {"x": 1561305600000, "y": 0.9203, "equityReturn": 0.0217, "unitMoney": ""}, {
        "x": 1561392000000,
        "y": 0.9143,
        "equityReturn": -0.652,
        "unitMoney": ""
    }, {"x": 1561478400000, "y": 0.9339, "equityReturn": 2.1437, "unitMoney": ""}, {
        "x": 1561564800000,
        "y": 0.9418,
        "equityReturn": 0.8459,
        "unitMoney": ""
    }, {"x": 1561651200000, "y": 0.9331, "equityReturn": -0.9238, "unitMoney": ""}, {
        "x": 1561824000000,
        "y": 0.933,
        "equityReturn": 0,
        "unitMoney": ""
    }, {"x": 1561910400000, "y": 0.9568, "equityReturn": 2.5399, "unitMoney": ""}, {
        "x": 1561996800000,
        "y": 0.9717,
        "equityReturn": 1.5573,
        "unitMoney": ""
    }, {"x": 1562083200000, "y": 0.9587, "equityReturn": -1.3379, "unitMoney": ""}, {
        "x": 1562169600000,
        "y": 0.9457,
        "equityReturn": -1.356,
        "unitMoney": ""
    }, {"x": 1562256000000, "y": 0.953, "equityReturn": 0.7719, "unitMoney": ""}, {
        "x": 1562515200000,
        "y": 0.9342,
        "equityReturn": -1.9727,
        "unitMoney": ""
    }, {"x": 1562601600000, "y": 0.9402, "equityReturn": 0.6423, "unitMoney": ""}, {
        "x": 1562688000000,
        "y": 0.9402,
        "equityReturn": 0.0,
        "unitMoney": ""
    }, {"x": 1562774400000, "y": 0.9506, "equityReturn": 1.1061, "unitMoney": ""}, {
        "x": 1562860800000,
        "y": 0.9526,
        "equityReturn": 0.2104,
        "unitMoney": ""
    }, {"x": 1563120000000, "y": 0.9597, "equityReturn": 0.7453, "unitMoney": ""}, {
        "x": 1563206400000,
        "y": 0.9568,
        "equityReturn": -0.3022,
        "unitMoney": ""
    }, {"x": 1563292800000, "y": 0.9497, "equityReturn": -0.7421, "unitMoney": ""}, {
        "x": 1563379200000,
        "y": 0.9342,
        "equityReturn": -1.6321,
        "unitMoney": ""
    }, {"x": 1563465600000, "y": 0.9384, "equityReturn": 0.4496, "unitMoney": ""}, {
        "x": 1563724800000,
        "y": 0.9327,
        "equityReturn": -0.6074,
        "unitMoney": ""
    }, {"x": 1563811200000, "y": 0.94, "equityReturn": 0.7827, "unitMoney": ""}, {
        "x": 1563897600000,
        "y": 0.9487,
        "equityReturn": 0.9255,
        "unitMoney": ""
    }, {"x": 1563984000000, "y": 0.9513, "equityReturn": 0.2741, "unitMoney": ""}, {
        "x": 1564070400000,
        "y": 0.9582,
        "equityReturn": 0.7253,
        "unitMoney": ""
    }, {"x": 1564329600000, "y": 0.95, "equityReturn": -0.8558, "unitMoney": ""}, {
        "x": 1564416000000,
        "y": 0.9558,
        "equityReturn": 0.6105,
        "unitMoney": ""
    }, {"x": 1564502400000, "y": 0.9477, "equityReturn": -0.8475, "unitMoney": ""}, {
        "x": 1564588800000,
        "y": 0.9448,
        "equityReturn": -0.306,
        "unitMoney": ""
    }, {"x": 1564675200000, "y": 0.9449, "equityReturn": 0.0106, "unitMoney": ""}, {
        "x": 1564934400000,
        "y": 0.9356,
        "equityReturn": -0.9842,
        "unitMoney": ""
    }, {"x": 1565020800000, "y": 0.9259, "equityReturn": -1.0368, "unitMoney": ""}, {
        "x": 1565107200000,
        "y": 0.9261,
        "equityReturn": 0.0216,
        "unitMoney": ""
    }, {"x": 1565193600000, "y": 0.9468, "equityReturn": 2.2352, "unitMoney": ""}, {
        "x": 1565280000000,
        "y": 0.947,
        "equityReturn": 0.0211,
        "unitMoney": ""
    }, {"x": 1565539200000, "y": 0.9651, "equityReturn": 1.9113, "unitMoney": ""}, {
        "x": 1565625600000,
        "y": 0.9628,
        "equityReturn": -0.2383,
        "unitMoney": ""
    }, {"x": 1565712000000, "y": 0.9779, "equityReturn": 1.5683, "unitMoney": ""}, {
        "x": 1565798400000,
        "y": 0.9875,
        "equityReturn": 0.9817,
        "unitMoney": ""
    }, {"x": 1565884800000, "y": 0.9931, "equityReturn": 0.5671, "unitMoney": ""}, {
        "x": 1566144000000,
        "y": 1.0134,
        "equityReturn": 2.0441,
        "unitMoney": ""
    }, {"x": 1566230400000, "y": 1.0204, "equityReturn": 0.6907, "unitMoney": ""}, {
        "x": 1566316800000,
        "y": 1.0115,
        "equityReturn": -0.8722,
        "unitMoney": ""
    }, {"x": 1566403200000, "y": 1.0146, "equityReturn": 0.3065, "unitMoney": ""}, {
        "x": 1566489600000,
        "y": 1.0331,
        "equityReturn": 1.8234,
        "unitMoney": ""
    }, {"x": 1566748800000, "y": 1.0349, "equityReturn": 0.1742, "unitMoney": ""}, {
        "x": 1566835200000,
        "y": 1.044,
        "equityReturn": 0.8793,
        "unitMoney": ""
    }, {"x": 1566921600000, "y": 1.0365, "equityReturn": -0.7184, "unitMoney": ""}, {
        "x": 1567008000000,
        "y": 1.0357,
        "equityReturn": -0.0772,
        "unitMoney": ""
    }, {"x": 1567094400000, "y": 1.0341, "equityReturn": -0.1545, "unitMoney": ""}, {
        "x": 1567353600000,
        "y": 1.0591,
        "equityReturn": 2.4176,
        "unitMoney": ""
    }, {"x": 1567440000000, "y": 1.0517, "equityReturn": -0.6987, "unitMoney": ""}, {
        "x": 1567526400000,
        "y": 1.0457,
        "equityReturn": -0.5705,
        "unitMoney": ""
    }, {"x": 1567612800000, "y": 1.0484, "equityReturn": 0.2582, "unitMoney": ""}, {
        "x": 1567699200000,
        "y": 1.0563,
        "equityReturn": 0.7535,
        "unitMoney": ""
    }, {"x": 1567958400000, "y": 1.0687, "equityReturn": 1.1739, "unitMoney": ""}, {
        "x": 1568044800000,
        "y": 1.0735,
        "equityReturn": 0.4491,
        "unitMoney": ""
    }, {"x": 1568131200000, "y": 1.0603, "equityReturn": -1.2296, "unitMoney": ""}, {
        "x": 1568217600000,
        "y": 1.0687,
        "equityReturn": 0.7922,
        "unitMoney": ""
    }, {"x": 1568563200000, "y": 1.0748, "equityReturn": 0.5708, "unitMoney": ""}, {
        "x": 1568649600000,
        "y": 1.0562,
        "equityReturn": -1.7306,
        "unitMoney": ""
    }, {"x": 1568736000000, "y": 1.0631, "equityReturn": 0.6533, "unitMoney": ""}, {
        "x": 1568822400000,
        "y": 1.0798,
        "equityReturn": 1.5709,
        "unitMoney": ""
    }, {"x": 1568908800000, "y": 1.0835, "equityReturn": 0.3427, "unitMoney": ""}, {
        "x": 1569168000000,
        "y": 1.0679,
        "equityReturn": -1.4398,
        "unitMoney": ""
    }, {"x": 1569254400000, "y": 1.0928, "equityReturn": 2.3317, "unitMoney": ""}, {
        "x": 1569340800000,
        "y": 1.0844,
        "equityReturn": -0.7687,
        "unitMoney": ""
    }, {"x": 1569427200000, "y": 1.0608, "equityReturn": -2.1763, "unitMoney": ""}, {
        "x": 1569513600000,
        "y": 1.0677,
        "equityReturn": 0.6505,
        "unitMoney": ""
    }, {"x": 1569772800000, "y": 1.0653, "equityReturn": -0.2248, "unitMoney": ""}, {
        "x": 1570464000000,
        "y": 1.0732,
        "equityReturn": 0.7416,
        "unitMoney": ""
    }, {"x": 1570550400000, "y": 1.0714, "equityReturn": -0.1677, "unitMoney": ""}, {
        "x": 1570636800000,
        "y": 1.1078,
        "equityReturn": 3.3974,
        "unitMoney": ""
    }, {"x": 1570723200000, "y": 1.1109, "equityReturn": 0.2798, "unitMoney": ""}, {
        "x": 1570982400000,
        "y": 1.1181,
        "equityReturn": 0.6481,
        "unitMoney": ""
    }, {"x": 1571068800000, "y": 1.1132, "equityReturn": -0.4382, "unitMoney": ""}, {
        "x": 1571155200000,
        "y": 1.1261,
        "equityReturn": 1.1588,
        "unitMoney": ""
    }, {"x": 1571241600000, "y": 1.127, "equityReturn": 0.0799, "unitMoney": ""}, {
        "x": 1571328000000,
        "y": 1.1309,
        "equityReturn": 0.3461,
        "unitMoney": ""
    }, {"x": 1571587200000, "y": 1.1063, "equityReturn": -2.1753, "unitMoney": ""}, {
        "x": 1571673600000,
        "y": 1.1167,
        "equityReturn": 0.9401,
        "unitMoney": ""
    }, {"x": 1571760000000, "y": 1.0946, "equityReturn": -1.979, "unitMoney": ""}, {
        "x": 1571846400000,
        "y": 1.0893,
        "equityReturn": -0.4842,
        "unitMoney": ""
    }, {"x": 1571932800000, "y": 1.0981, "equityReturn": 0.8079, "unitMoney": ""}, {
        "x": 1572192000000,
        "y": 1.1232,
        "equityReturn": 2.2858,
        "unitMoney": ""
    }, {"x": 1572278400000, "y": 1.1289, "equityReturn": 0.5075, "unitMoney": ""}, {
        "x": 1572364800000,
        "y": 1.128,
        "equityReturn": -0.0797,
        "unitMoney": ""
    }, {"x": 1572451200000, "y": 1.1275, "equityReturn": -0.0443, "unitMoney": ""}, {
        "x": 1572537600000,
        "y": 1.1499,
        "equityReturn": 1.9867,
        "unitMoney": ""
    }, {"x": 1572796800000, "y": 1.1756, "equityReturn": 2.235, "unitMoney": ""}, {
        "x": 1572883200000,
        "y": 1.1739,
        "equityReturn": -0.1446,
        "unitMoney": ""
    }, {"x": 1572969600000, "y": 1.169, "equityReturn": -0.4174, "unitMoney": ""}, {
        "x": 1573056000000,
        "y": 1.1814,
        "equityReturn": 1.0607,
        "unitMoney": ""
    }, {"x": 1573142400000, "y": 1.1736, "equityReturn": -0.6602, "unitMoney": ""}, {
        "x": 1573401600000,
        "y": 1.1441,
        "equityReturn": -2.5136,
        "unitMoney": ""
    }, {"x": 1573488000000, "y": 1.1517, "equityReturn": 0.6643, "unitMoney": ""}, {
        "x": 1573574400000,
        "y": 1.1767,
        "equityReturn": 2.1707,
        "unitMoney": ""
    }, {"x": 1573660800000, "y": 1.1876, "equityReturn": 0.9263, "unitMoney": ""}, {
        "x": 1573747200000,
        "y": 1.177,
        "equityReturn": -0.8926,
        "unitMoney": ""
    }, {"x": 1574006400000, "y": 1.1841, "equityReturn": 0.6032, "unitMoney": ""}, {
        "x": 1574092800000,
        "y": 1.2157,
        "equityReturn": 2.6687,
        "unitMoney": ""
    }, {"x": 1574179200000, "y": 1.2194, "equityReturn": 0.3044, "unitMoney": ""}, {
        "x": 1574265600000,
        "y": 1.1982,
        "equityReturn": -1.7386,
        "unitMoney": ""
    }, {"x": 1574352000000, "y": 1.1561, "equityReturn": -3.5136, "unitMoney": ""}, {
        "x": 1574611200000,
        "y": 1.1391,
        "equityReturn": -1.4705,
        "unitMoney": ""
    }, {"x": 1574697600000, "y": 1.1423, "equityReturn": 0.2809, "unitMoney": ""}, {
        "x": 1574784000000,
        "y": 1.1292,
        "equityReturn": -1.1468,
        "unitMoney": ""
    }, {"x": 1574870400000, "y": 1.1279, "equityReturn": -0.1151, "unitMoney": ""}, {
        "x": 1574956800000,
        "y": 1.1065,
        "equityReturn": -1.8973,
        "unitMoney": ""
    }, {"x": 1575216000000, "y": 1.0957, "equityReturn": -0.9761, "unitMoney": ""}, {
        "x": 1575302400000,
        "y": 1.0971,
        "equityReturn": 0.1278,
        "unitMoney": ""
    }, {"x": 1575388800000, "y": 1.1028, "equityReturn": 0.5196, "unitMoney": ""}, {
        "x": 1575475200000,
        "y": 1.1169,
        "equityReturn": 1.2786,
        "unitMoney": ""
    }, {"x": 1575561600000, "y": 1.1227, "equityReturn": 0.5193, "unitMoney": ""}, {
        "x": 1575820800000,
        "y": 1.104,
        "equityReturn": -1.6656,
        "unitMoney": ""
    }, {"x": 1575907200000, "y": 1.1201, "equityReturn": 1.4583, "unitMoney": ""}, {
        "x": 1575993600000,
        "y": 1.1185,
        "equityReturn": -0.1428,
        "unitMoney": ""
    }, {"x": 1576080000000, "y": 1.1135, "equityReturn": -0.447, "unitMoney": ""}, {
        "x": 1576166400000,
        "y": 1.1062,
        "equityReturn": 1.8073,
        "unitMoney": "拆分：每份基金份额折算1.024791594份"
    }, {"x": 1576425600000, "y": 1.119, "equityReturn": 1.1571, "unitMoney": ""}, {
        "x": 1576512000000,
        "y": 1.1277,
        "equityReturn": 0.7775,
        "unitMoney": ""
    }, {"x": 1576598400000, "y": 1.1111, "equityReturn": -1.472, "unitMoney": ""}, {
        "x": 1576684800000,
        "y": 1.109,
        "equityReturn": -0.189,
        "unitMoney": ""
    }, {"x": 1576771200000, "y": 1.0965, "equityReturn": -1.1271, "unitMoney": ""}, {
        "x": 1577030400000,
        "y": 1.0857,
        "equityReturn": -0.985,
        "unitMoney": ""
    }, {"x": 1577116800000, "y": 1.0896, "equityReturn": 0.3592, "unitMoney": ""}, {
        "x": 1577203200000,
        "y": 1.0891,
        "equityReturn": -0.0459,
        "unitMoney": ""
    }, {"x": 1577289600000, "y": 1.0908, "equityReturn": 0.1561, "unitMoney": ""}, {
        "x": 1577376000000,
        "y": 1.0768,
        "equityReturn": -1.2835,
        "unitMoney": ""
    }, {"x": 1577635200000, "y": 1.0815, "equityReturn": 0.4365, "unitMoney": ""}, {
        "x": 1577721600000,
        "y": 1.1022,
        "equityReturn": 1.914,
        "unitMoney": ""
    }, {"x": 1577894400000, "y": 1.1038, "equityReturn": 0.1452, "unitMoney": ""}, {
        "x": 1577980800000,
        "y": 1.0981,
        "equityReturn": -0.5164,
        "unitMoney": ""
    }, {"x": 1578240000000, "y": 1.0917, "equityReturn": -0.5828, "unitMoney": ""}, {
        "x": 1578326400000,
        "y": 1.1144,
        "equityReturn": 2.0793,
        "unitMoney": ""
    }, {"x": 1578412800000, "y": 1.1055, "equityReturn": -0.7986, "unitMoney": ""}, {
        "x": 1578499200000,
        "y": 1.1465,
        "equityReturn": 3.7087,
        "unitMoney": ""
    }, {"x": 1578585600000, "y": 1.1473, "equityReturn": 0.0698, "unitMoney": ""}, {
        "x": 1578844800000,
        "y": 1.1566,
        "equityReturn": 0.8106,
        "unitMoney": ""
    }, {"x": 1578931200000, "y": 1.1466, "equityReturn": -0.8646, "unitMoney": ""}, {
        "x": 1579017600000,
        "y": 1.1548,
        "equityReturn": 0.7152,
        "unitMoney": ""
    }, {"x": 1579104000000, "y": 1.169, "equityReturn": 1.2297, "unitMoney": ""}, {
        "x": 1579190400000,
        "y": 1.1797,
        "equityReturn": 0.9153,
        "unitMoney": ""
    }, {"x": 1579449600000, "y": 1.1911, "equityReturn": 0.9663, "unitMoney": ""}, {
        "x": 1579536000000,
        "y": 1.2034,
        "equityReturn": 1.0327,
        "unitMoney": ""
    }, {"x": 1579622400000, "y": 1.1944, "equityReturn": -0.7479, "unitMoney": ""}, {
        "x": 1579708800000,
        "y": 1.1711,
        "equityReturn": -1.9508,
        "unitMoney": ""
    }, {"x": 1580659200000, "y": 1.136, "equityReturn": -2.9972, "unitMoney": ""}, {
        "x": 1580745600000,
        "y": 1.1782,
        "equityReturn": 3.7148,
        "unitMoney": ""
    }, {"x": 1580832000000, "y": 1.2051, "equityReturn": 2.2831, "unitMoney": ""}, {
        "x": 1580918400000,
        "y": 1.2481,
        "equityReturn": 3.5682,
        "unitMoney": ""
    }, {"x": 1581004800000, "y": 1.2379, "equityReturn": -0.8172, "unitMoney": ""}, {
        "x": 1581264000000,
        "y": 1.2328,
        "equityReturn": -0.412,
        "unitMoney": ""
    }, {"x": 1581350400000, "y": 1.2365, "equityReturn": 0.3001, "unitMoney": ""}, {
        "x": 1581436800000,
        "y": 1.2609,
        "equityReturn": 1.9733,
        "unitMoney": ""
    }, {"x": 1581523200000, "y": 1.2546, "equityReturn": -0.4996, "unitMoney": ""}, {
        "x": 1581609600000,
        "y": 1.2483,
        "equityReturn": -0.5022,
        "unitMoney": ""
    }, {"x": 1581868800000, "y": 1.2871, "equityReturn": 3.1082, "unitMoney": ""}, {
        "x": 1581955200000,
        "y": 1.2944,
        "equityReturn": 0.5672,
        "unitMoney": ""
    }, {"x": 1582041600000, "y": 1.2627, "equityReturn": -2.449, "unitMoney": ""}, {
        "x": 1582128000000,
        "y": 1.2836,
        "equityReturn": 1.6552,
        "unitMoney": ""
    }, {"x": 1582214400000, "y": 1.3016, "equityReturn": 1.4023, "unitMoney": ""}, {
        "x": 1582473600000,
        "y": 1.3275,
        "equityReturn": 1.9899,
        "unitMoney": ""
    }, {"x": 1582560000000, "y": 1.3431, "equityReturn": 1.1751, "unitMoney": ""}, {
        "x": 1582646400000,
        "y": 1.2918,
        "equityReturn": -3.8195,
        "unitMoney": ""
    }, {"x": 1582732800000, "y": 1.3159, "equityReturn": 1.8656, "unitMoney": ""}, {
        "x": 1582819200000,
        "y": 1.2835,
        "equityReturn": -2.4622,
        "unitMoney": ""
    }, {"x": 1583078400000, "y": 1.3222, "equityReturn": 3.0152, "unitMoney": ""}, {
        "x": 1583164800000,
        "y": 1.3629,
        "equityReturn": 3.0782,
        "unitMoney": ""
    }, {"x": 1583251200000, "y": 1.3482, "equityReturn": -1.0786, "unitMoney": ""}, {
        "x": 1583337600000,
        "y": 1.3647,
        "equityReturn": 1.2239,
        "unitMoney": ""
    }, {"x": 1583424000000, "y": 1.3777, "equityReturn": 0.9526, "unitMoney": ""}, {
        "x": 1583683200000,
        "y": 1.3447,
        "equityReturn": -2.3953,
        "unitMoney": ""
    }, {"x": 1583769600000, "y": 1.3423, "equityReturn": -0.1785, "unitMoney": ""}, {
        "x": 1583856000000,
        "y": 1.3229,
        "equityReturn": -1.4453,
        "unitMoney": ""
    }, {"x": 1583942400000, "y": 1.2821, "equityReturn": -3.0841, "unitMoney": ""}, {
        "x": 1584028800000,
        "y": 1.2623,
        "equityReturn": -1.5443,
        "unitMoney": ""
    }, {"x": 1584288000000, "y": 1.2031, "equityReturn": -4.6899, "unitMoney": ""}, {
        "x": 1584374400000,
        "y": 1.1969,
        "equityReturn": -0.5153,
        "unitMoney": ""
    }, {"x": 1584460800000, "y": 1.181, "equityReturn": -1.3284, "unitMoney": ""}, {
        "x": 1584547200000,
        "y": 1.1619,
        "equityReturn": -1.6173,
        "unitMoney": ""
    }, {"x": 1584633600000, "y": 1.1949, "equityReturn": 2.8402, "unitMoney": ""}, {
        "x": 1584892800000,
        "y": 1.1633,
        "equityReturn": -2.6446,
        "unitMoney": ""
    }, {"x": 1584979200000, "y": 1.1989, "equityReturn": 3.0603, "unitMoney": ""}, {
        "x": 1585065600000,
        "y": 1.2506,
        "equityReturn": 4.3123,
        "unitMoney": ""
    }, {"x": 1585152000000, "y": 1.2832, "equityReturn": 2.6067, "unitMoney": ""}, {
        "x": 1585238400000,
        "y": 1.2619,
        "equityReturn": -1.6599,
        "unitMoney": ""
    }, {"x": 1585497600000, "y": 1.2303, "equityReturn": -2.5042, "unitMoney": ""}, {
        "x": 1585584000000,
        "y": 1.2328,
        "equityReturn": 0.2032,
        "unitMoney": ""
    }, {"x": 1585670400000, "y": 1.2237, "equityReturn": -0.7382, "unitMoney": ""}, {
        "x": 1585756800000,
        "y": 1.2505,
        "equityReturn": 2.1901,
        "unitMoney": ""
    }, {"x": 1585843200000, "y": 1.2554, "equityReturn": 0.3918, "unitMoney": ""}, {
        "x": 1586188800000,
        "y": 1.2919,
        "equityReturn": 2.9074,
        "unitMoney": ""
    }, {"x": 1586275200000, "y": 1.2885, "equityReturn": -0.2632, "unitMoney": ""}, {
        "x": 1586361600000,
        "y": 1.3369,
        "equityReturn": 3.7563,
        "unitMoney": ""
    }, {"x": 1586448000000, "y": 1.3124, "equityReturn": -1.8326, "unitMoney": ""}, {
        "x": 1586707200000,
        "y": 1.3144,
        "equityReturn": 0.1524,
        "unitMoney": ""
    }, {"x": 1586793600000, "y": 1.339, "equityReturn": 1.8716, "unitMoney": ""}, {
        "x": 1586880000000,
        "y": 1.3338,
        "equityReturn": -0.3883,
        "unitMoney": ""
    }, {"x": 1586966400000, "y": 1.3623, "equityReturn": 2.1368, "unitMoney": ""}, {
        "x": 1587052800000,
        "y": 1.3492,
        "equityReturn": -0.9616,
        "unitMoney": ""
    }, {"x": 1587312000000, "y": 1.3893, "equityReturn": 2.9721, "unitMoney": ""}, {
        "x": 1587398400000,
        "y": 1.3741,
        "equityReturn": -1.0941,
        "unitMoney": ""
    }, {"x": 1587484800000, "y": 1.3863, "equityReturn": 0.8879, "unitMoney": ""}, {
        "x": 1587571200000,
        "y": 1.3918,
        "equityReturn": 0.3967,
        "unitMoney": ""
    }, {"x": 1587657600000, "y": 1.359, "equityReturn": -2.3567, "unitMoney": ""}, {
        "x": 1587916800000,
        "y": 1.3751,
        "equityReturn": 1.1847,
        "unitMoney": ""
    }, {"x": 1588003200000, "y": 1.3854, "equityReturn": 0.749, "unitMoney": ""}, {
        "x": 1588089600000,
        "y": 1.3675,
        "equityReturn": -1.292,
        "unitMoney": ""
    }, {"x": 1588176000000, "y": 1.3535, "equityReturn": -1.0238, "unitMoney": ""}, {
        "x": 1588694400000,
        "y": 1.3787,
        "equityReturn": 1.8618,
        "unitMoney": ""
    }, {"x": 1588780800000, "y": 1.3853, "equityReturn": 0.4787, "unitMoney": ""}, {
        "x": 1588867200000,
        "y": 1.4011,
        "equityReturn": 1.1405,
        "unitMoney": ""
    }, {"x": 1589126400000, "y": 1.382, "equityReturn": -1.3632, "unitMoney": ""}, {
        "x": 1589212800000,
        "y": 1.4112,
        "equityReturn": 2.1129,
        "unitMoney": ""
    }, {"x": 1589299200000, "y": 1.4582, "equityReturn": 3.3305, "unitMoney": ""}, {
        "x": 1589385600000,
        "y": 1.4392,
        "equityReturn": -1.303,
        "unitMoney": ""
    }, {"x": 1589472000000, "y": 1.4273, "equityReturn": -0.8268, "unitMoney": ""}, {
        "x": 1589731200000,
        "y": 1.4536,
        "equityReturn": 1.8426,
        "unitMoney": ""
    }, {"x": 1589817600000, "y": 1.4608, "equityReturn": 0.4953, "unitMoney": ""}, {
        "x": 1589904000000,
        "y": 1.435,
        "equityReturn": -1.7662,
        "unitMoney": ""
    }, {"x": 1589990400000, "y": 1.4474, "equityReturn": 0.8641, "unitMoney": ""}, {
        "x": 1590076800000,
        "y": 1.4098,
        "equityReturn": -2.5978,
        "unitMoney": ""
    }, {"x": 1590336000000, "y": 1.4203, "equityReturn": 0.7448, "unitMoney": ""}, {
        "x": 1590422400000,
        "y": 1.4615,
        "equityReturn": 2.9008,
        "unitMoney": ""
    }, {"x": 1590508800000, "y": 1.4245, "equityReturn": -2.5316, "unitMoney": ""}, {
        "x": 1590595200000,
        "y": 1.413,
        "equityReturn": -0.8073,
        "unitMoney": ""
    }, {"x": 1590681600000, "y": 1.4497, "equityReturn": 2.5973, "unitMoney": ""}, {
        "x": 1590940800000,
        "y": 1.4814,
        "equityReturn": 2.1867,
        "unitMoney": ""
    }, {"x": 1591027200000, "y": 1.4538, "equityReturn": -1.8631, "unitMoney": ""}, {
        "x": 1591113600000,
        "y": 1.4608,
        "equityReturn": 0.4815,
        "unitMoney": ""
    }, {"x": 1591200000000, "y": 1.4734, "equityReturn": 0.8625, "unitMoney": ""}, {
        "x": 1591286400000,
        "y": 1.4815,
        "equityReturn": 0.5497,
        "unitMoney": ""
    }, {"x": 1591545600000, "y": 1.4585, "equityReturn": -1.5525, "unitMoney": ""}, {
        "x": 1591632000000,
        "y": 1.4776,
        "equityReturn": 1.3096,
        "unitMoney": ""
    }, {"x": 1591718400000, "y": 1.504, "equityReturn": 1.7867, "unitMoney": ""}, {
        "x": 1591804800000,
        "y": 1.0,
        "equityReturn": -0.4141,
        "unitMoney": "拆分：每份基金份额折算1.497772262份"
    }, {"x": 1591891200000, "y": 1.0188, "equityReturn": 1.88, "unitMoney": ""}, {
        "x": 1592150400000,
        "y": 1.0343,
        "equityReturn": 1.5214,
        "unitMoney": ""
    }, {"x": 1592236800000, "y": 1.059, "equityReturn": 2.3881, "unitMoney": ""}, {
        "x": 1592323200000,
        "y": 1.0699,
        "equityReturn": 1.0293,
        "unitMoney": ""
    }, {"x": 1592409600000, "y": 1.0444, "equityReturn": -2.3834, "unitMoney": ""}, {
        "x": 1592496000000,
        "y": 1.0767,
        "equityReturn": 3.0927,
        "unitMoney": ""
    }, {"x": 1592755200000, "y": 1.0808, "equityReturn": 0.3808, "unitMoney": ""}, {
        "x": 1592841600000,
        "y": 1.1063,
        "equityReturn": 2.3594,
        "unitMoney": ""
    }, {"x": 1592928000000, "y": 1.1021, "equityReturn": -0.3796, "unitMoney": ""}, {
        "x": 1593360000000,
        "y": 1.1228,
        "equityReturn": 1.8782,
        "unitMoney": ""
    }, {"x": 1593446400000, "y": 1.1409, "equityReturn": 1.612, "unitMoney": ""}, {
        "x": 1593532800000,
        "y": 1.1174,
        "equityReturn": -2.0598,
        "unitMoney": ""
    }, {"x": 1593619200000, "y": 1.1025, "equityReturn": -1.3335, "unitMoney": ""}, {
        "x": 1593705600000,
        "y": 1.1301,
        "equityReturn": 2.5034,
        "unitMoney": ""
    }, {"x": 1593964800000, "y": 1.1257, "equityReturn": -0.3893, "unitMoney": ""}, {
        "x": 1594051200000,
        "y": 1.1483,
        "equityReturn": 2.0076,
        "unitMoney": ""
    }, {"x": 1594137600000, "y": 1.1589, "equityReturn": 0.9231, "unitMoney": ""}, {
        "x": 1594224000000,
        "y": 1.2007,
        "equityReturn": 3.6069,
        "unitMoney": ""
    }, {"x": 1594310400000, "y": 1.223, "equityReturn": 1.8572, "unitMoney": ""}, {
        "x": 1594569600000,
        "y": 1.2613,
        "equityReturn": 3.1316,
        "unitMoney": ""
    }, {"x": 1594656000000, "y": 1.2368, "equityReturn": -1.9424, "unitMoney": ""}, {
        "x": 1594742400000,
        "y": 1.2473,
        "equityReturn": 0.849,
        "unitMoney": ""
    }, {"x": 1594828800000, "y": 1.188, "equityReturn": -4.7543, "unitMoney": ""}, {
        "x": 1594915200000,
        "y": 1.2051,
        "equityReturn": 1.4394,
        "unitMoney": ""
    }, {"x": 1595174400000, "y": 1.199, "equityReturn": -0.5062, "unitMoney": ""}, {
        "x": 1595260800000,
        "y": 1.2375,
        "equityReturn": 3.211,
        "unitMoney": ""
    }, {"x": 1595347200000, "y": 1.2531, "equityReturn": 1.2606, "unitMoney": ""}, {
        "x": 1595433600000,
        "y": 1.2776,
        "equityReturn": 1.9552,
        "unitMoney": ""
    }, {"x": 1595520000000, "y": 1.1996, "equityReturn": -6.1052, "unitMoney": ""}, {
        "x": 1595779200000,
        "y": 1.2114,
        "equityReturn": 0.9837,
        "unitMoney": ""
    }, {"x": 1595865600000, "y": 1.2262, "equityReturn": 1.2217, "unitMoney": ""}, {
        "x": 1595952000000,
        "y": 1.2521,
        "equityReturn": 2.1122,
        "unitMoney": ""
    }, {"x": 1596038400000, "y": 1.2472, "equityReturn": -0.3913, "unitMoney": ""}, {
        "x": 1596124800000,
        "y": 1.2649,
        "equityReturn": 1.4192,
        "unitMoney": ""
    }, {"x": 1596384000000, "y": 1.2864, "equityReturn": 1.6997, "unitMoney": ""}, {
        "x": 1596470400000,
        "y": 1.2819,
        "equityReturn": -0.3498,
        "unitMoney": ""
    }, {"x": 1596556800000, "y": 1.2931, "equityReturn": 0.8737, "unitMoney": ""}, {
        "x": 1596643200000,
        "y": 1.2706,
        "equityReturn": -1.74,
        "unitMoney": ""
    }, {"x": 1596729600000, "y": 1.2476, "equityReturn": -1.8102, "unitMoney": ""}, {
        "x": 1596988800000,
        "y": 1.2508,
        "equityReturn": 0.2565,
        "unitMoney": ""
    }, {"x": 1597075200000, "y": 1.2305, "equityReturn": -1.623, "unitMoney": ""}, {
        "x": 1597161600000,
        "y": 1.1978,
        "equityReturn": -2.6575,
        "unitMoney": ""
    }, {"x": 1597248000000, "y": 1.19, "equityReturn": -0.6512, "unitMoney": ""}, {
        "x": 1597334400000,
        "y": 1.199,
        "equityReturn": 0.7563,
        "unitMoney": ""
    }, {"x": 1597593600000, "y": 1.2076, "equityReturn": 0.7173, "unitMoney": ""}, {
        "x": 1597680000000,
        "y": 1.2163,
        "equityReturn": 0.7204,
        "unitMoney": ""
    }, {"x": 1597766400000, "y": 1.1862, "equityReturn": -2.4747, "unitMoney": ""}, {
        "x": 1597852800000,
        "y": 1.1813,
        "equityReturn": -0.4131,
        "unitMoney": ""
    }, {"x": 1597939200000, "y": 1.193, "equityReturn": 0.9904, "unitMoney": ""}, {
        "x": 1598198400000,
        "y": 1.2087,
        "equityReturn": 1.32,
        "unitMoney": ""
    }, {"x": 1598284800000, "y": 1.2174, "equityReturn": 0.72, "unitMoney": ""}, {
        "x": 1598371200000,
        "y": 1.2193,
        "equityReturn": 0.16,
        "unitMoney": ""
    }, {"x": 1598457600000, "y": 1.2396, "equityReturn": 1.66, "unitMoney": ""}, {
        "x": 1598544000000,
        "y": 1.271,
        "equityReturn": 2.53,
        "unitMoney": ""
    }, {"x": 1598803200000, "y": 1.2643, "equityReturn": -0.53, "unitMoney": ""}, {
        "x": 1598889600000,
        "y": 1.2715,
        "equityReturn": 0.57,
        "unitMoney": ""
    }, {"x": 1598976000000, "y": 1.271, "equityReturn": -0.04, "unitMoney": ""}, {
        "x": 1599062400000,
        "y": 1.2641,
        "equityReturn": -0.54,
        "unitMoney": ""
    }, {"x": 1599148800000, "y": 1.2371, "equityReturn": -2.14, "unitMoney": ""}, {
        "x": 1599408000000,
        "y": 1.1933,
        "equityReturn": -3.54,
        "unitMoney": ""
    }, {"x": 1599494400000, "y": 1.1902, "equityReturn": -0.26, "unitMoney": ""}, {
        "x": 1599580800000,
        "y": 1.1486,
        "equityReturn": -3.5,
        "unitMoney": ""
    }, {"x": 1599667200000, "y": 1.1396, "equityReturn": -0.78, "unitMoney": ""}, {
        "x": 1599753600000,
        "y": 1.1562,
        "equityReturn": 1.46,
        "unitMoney": ""
    }, {"x": 1600012800000, "y": 1.1598, "equityReturn": 0.31, "unitMoney": ""}, {
        "x": 1600099200000,
        "y": 1.1727,
        "equityReturn": 1.11,
        "unitMoney": ""
    }, {"x": 1600185600000, "y": 1.1492, "equityReturn": -2.0, "unitMoney": ""}, {
        "x": 1600272000000,
        "y": 1.1374,
        "equityReturn": -1.03,
        "unitMoney": ""
    }, {"x": 1600358400000, "y": 1.1504, "equityReturn": 1.14, "unitMoney": ""}, {
        "x": 1600617600000,
        "y": 1.1376,
        "equityReturn": -1.11,
        "unitMoney": ""
    }, {"x": 1600704000000, "y": 1.1487, "equityReturn": 0.98, "unitMoney": ""}, {
        "x": 1600790400000,
        "y": 1.1745,
        "equityReturn": 2.25,
        "unitMoney": ""
    }, {"x": 1600876800000, "y": 1.1551, "equityReturn": -1.65, "unitMoney": ""}, {
        "x": 1600963200000,
        "y": 1.1619,
        "equityReturn": 0.59,
        "unitMoney": ""
    }, {"x": 1601222400000, "y": 1.1515, "equityReturn": -0.9, "unitMoney": ""}, {
        "x": 1601308800000,
        "y": 1.1712,
        "equityReturn": 1.71,
        "unitMoney": ""
    }, {"x": 1601395200000, "y": 1.1896, "equityReturn": 1.57, "unitMoney": ""}, {
        "x": 1602172800000,
        "y": 1.2194,
        "equityReturn": 2.51,
        "unitMoney": ""
    }, {"x": 1602432000000, "y": 1.2667, "equityReturn": 3.88, "unitMoney": ""}, {
        "x": 1602518400000,
        "y": 1.2827,
        "equityReturn": 1.26,
        "unitMoney": ""
    }, {"x": 1602604800000, "y": 1.2844, "equityReturn": 0.13, "unitMoney": ""}, {
        "x": 1602691200000,
        "y": 1.2699,
        "equityReturn": -1.13,
        "unitMoney": ""
    }, {"x": 1602777600000, "y": 1.2736, "equityReturn": 0.29, "unitMoney": ""}, {
        "x": 1603036800000,
        "y": 1.241,
        "equityReturn": -2.56,
        "unitMoney": ""
    }, {"x": 1603123200000, "y": 1.2545, "equityReturn": 1.09, "unitMoney": ""}, {
        "x": 1603209600000,
        "y": 1.2534,
        "equityReturn": -0.09,
        "unitMoney": ""
    }, {"x": 1603296000000, "y": 1.245, "equityReturn": -0.67, "unitMoney": ""}, {
        "x": 1603382400000,
        "y": 1.2109,
        "equityReturn": -2.74,
        "unitMoney": ""
    }, {"x": 1603641600000, "y": 1.2219, "equityReturn": 0.91, "unitMoney": ""}, {
        "x": 1603728000000,
        "y": 1.2553,
        "equityReturn": 2.73,
        "unitMoney": ""
    }, {"x": 1603814400000, "y": 1.2675, "equityReturn": 0.97, "unitMoney": ""}, {
        "x": 1603900800000,
        "y": 1.2975,
        "equityReturn": 2.37,
        "unitMoney": ""
    }, {"x": 1603987200000, "y": 1.2715, "equityReturn": -2.0, "unitMoney": ""}, {
        "x": 1604246400000,
        "y": 1.2697,
        "equityReturn": -0.14,
        "unitMoney": ""
    }, {"x": 1604332800000, "y": 1.2835, "equityReturn": 1.09, "unitMoney": ""}, {
        "x": 1604419200000,
        "y": 1.2849,
        "equityReturn": 0.11,
        "unitMoney": ""
    }, {"x": 1604505600000, "y": 1.2749, "equityReturn": -0.78, "unitMoney": ""}, {
        "x": 1604592000000,
        "y": 1.2457,
        "equityReturn": -2.29,
        "unitMoney": ""
    }, {"x": 1604851200000, "y": 1.2798, "equityReturn": 2.74, "unitMoney": ""}, {
        "x": 1604937600000,
        "y": 1.2518,
        "equityReturn": -2.19,
        "unitMoney": ""
    }, {"x": 1605024000000, "y": 1.2203, "equityReturn": -2.52, "unitMoney": ""}, {
        "x": 1605110400000,
        "y": 1.232,
        "equityReturn": 0.96,
        "unitMoney": ""
    }, {"x": 1605196800000, "y": 1.2321, "equityReturn": 0.01, "unitMoney": ""}, {
        "x": 1605456000000,
        "y": 1.2426,
        "equityReturn": 0.85,
        "unitMoney": ""
    }, {"x": 1605542400000, "y": 1.2057, "equityReturn": -2.97, "unitMoney": ""}, {
        "x": 1605628800000,
        "y": 1.1698,
        "equityReturn": -2.98,
        "unitMoney": ""
    }, {"x": 1605715200000, "y": 1.1786, "equityReturn": 0.75, "unitMoney": ""}, {
        "x": 1605801600000,
        "y": 1.1916,
        "equityReturn": 1.1,
        "unitMoney": ""
    }, {"x": 1606060800000, "y": 1.1875, "equityReturn": -0.34, "unitMoney": ""}, {
        "x": 1606147200000,
        "y": 1.1775,
        "equityReturn": -0.84,
        "unitMoney": ""
    }, {"x": 1606233600000, "y": 1.1435, "equityReturn": -2.89, "unitMoney": ""}, {
        "x": 1606320000000,
        "y": 1.1458,
        "equityReturn": 0.2,
        "unitMoney": ""
    }, {"x": 1606406400000, "y": 1.1491, "equityReturn": 0.29, "unitMoney": ""}, {
        "x": 1606665600000,
        "y": 1.1497,
        "equityReturn": 0.05,
        "unitMoney": ""
    }, {"x": 1606752000000, "y": 1.1851, "equityReturn": 3.08, "unitMoney": ""}, {
        "x": 1606838400000,
        "y": 1.1835,
        "equityReturn": -0.14,
        "unitMoney": ""
    }, {"x": 1606924800000, "y": 1.209, "equityReturn": 2.15, "unitMoney": ""}, {
        "x": 1607011200000,
        "y": 1.2241,
        "equityReturn": 1.25,
        "unitMoney": ""
    }, {"x": 1607270400000, "y": 1.2231, "equityReturn": -0.08, "unitMoney": ""}, {
        "x": 1607356800000,
        "y": 1.2289,
        "equityReturn": 0.47,
        "unitMoney": ""
    }, {"x": 1607443200000, "y": 1.2088, "equityReturn": -1.64, "unitMoney": ""}, {
        "x": 1607529600000,
        "y": 1.2317,
        "equityReturn": 1.89,
        "unitMoney": ""
    }, {"x": 1607616000000, "y": 1.22, "equityReturn": -0.95, "unitMoney": ""}, {
        "x": 1607875200000,
        "y": 1.2434,
        "equityReturn": 1.92,
        "unitMoney": ""
    }, {"x": 1607961600000, "y": 1.2415, "equityReturn": 0.98, "unitMoney": "拆分：每份基金份额折算1.011317113份"}, {
        "x": 1608048000000,
        "y": 1.248,
        "equityReturn": 0.52,
        "unitMoney": ""
    }, {"x": 1608134400000, "y": 1.2655, "equityReturn": 1.4, "unitMoney": ""}, {
        "x": 1608220800000,
        "y": 1.2518,
        "equityReturn": -1.08,
        "unitMoney": ""
    }, {"x": 1608480000000, "y": 1.2767, "equityReturn": 1.99, "unitMoney": ""}, {
        "x": 1608566400000,
        "y": 1.2781,
        "equityReturn": 0.11,
        "unitMoney": ""
    }, {"x": 1608652800000, "y": 1.2737, "equityReturn": -0.34, "unitMoney": ""}, {
        "x": 1608739200000,
        "y": 1.2683,
        "equityReturn": -0.42,
        "unitMoney": ""
    }, {"x": 1608825600000, "y": 1.2894, "equityReturn": 1.66, "unitMoney": ""}, {
        "x": 1609084800000,
        "y": 1.2834,
        "equityReturn": -0.47,
        "unitMoney": ""
    }, {"x": 1609171200000, "y": 1.2815, "equityReturn": -0.15, "unitMoney": ""}, {
        "x": 1609257600000,
        "y": 1.297,
        "equityReturn": 1.21,
        "unitMoney": ""
    }, {"x": 1609344000000, "y": 1.3156, "equityReturn": 1.43, "unitMoney": ""}, {
        "x": 1609689600000,
        "y": 1.3102,
        "equityReturn": -0.41,
        "unitMoney": ""
    }, {"x": 1609776000000, "y": 1.3336, "equityReturn": 1.79, "unitMoney": ""}, {
        "x": 1609862400000,
        "y": 1.3591,
        "equityReturn": 1.91,
        "unitMoney": ""
    }, {"x": 1609948800000, "y": 1.3705, "equityReturn": 0.84, "unitMoney": ""}, {
        "x": 1610035200000,
        "y": 1.3716,
        "equityReturn": 0.08,
        "unitMoney": ""
    }, {"x": 1610294400000, "y": 1.3751, "equityReturn": 0.26, "unitMoney": ""}, {
        "x": 1610380800000,
        "y": 1.3892,
        "equityReturn": 1.03,
        "unitMoney": ""
    }, {"x": 1610467200000, "y": 1.3675, "equityReturn": -1.56, "unitMoney": ""}, {
        "x": 1610553600000,
        "y": 1.3695,
        "equityReturn": 0.15,
        "unitMoney": ""
    }, {"x": 1610640000000, "y": 1.3662, "equityReturn": -0.24, "unitMoney": ""}, {
        "x": 1610899200000,
        "y": 1.3815,
        "equityReturn": 1.12,
        "unitMoney": ""
    }, {"x": 1610985600000, "y": 1.3539, "equityReturn": -2.0, "unitMoney": ""}, {
        "x": 1611072000000,
        "y": 1.4107,
        "equityReturn": 4.2,
        "unitMoney": ""
    }, {"x": 1611158400000, "y": 1.455, "equityReturn": 3.14, "unitMoney": ""}, {
        "x": 1611244800000,
        "y": 1.5367,
        "equityReturn": 5.62,
        "unitMoney": ""
    }, {"x": 1611504000000, "y": 1.5531, "equityReturn": 1.07, "unitMoney": ""}, {
        "x": 1611590400000,
        "y": 1.4934,
        "equityReturn": -3.84,
        "unitMoney": ""
    }, {"x": 1611676800000, "y": 1.4863, "equityReturn": -0.48, "unitMoney": ""}, {
        "x": 1611763200000,
        "y": 1.4314,
        "equityReturn": -3.69,
        "unitMoney": ""
    }, {"x": 1611849600000, "y": 1.4258, "equityReturn": -0.39, "unitMoney": ""}, {
        "x": 1612108800000,
        "y": 1.4585,
        "equityReturn": 2.29,
        "unitMoney": ""
    }, {"x": 1612195200000, "y": 1.4703, "equityReturn": 0.81, "unitMoney": ""}, {
        "x": 1612281600000,
        "y": 1.4747,
        "equityReturn": 0.3,
        "unitMoney": ""
    }, {"x": 1612368000000, "y": 1.4538, "equityReturn": -1.42, "unitMoney": ""}, {
        "x": 1612454400000,
        "y": 1.4825,
        "equityReturn": 1.97,
        "unitMoney": ""
    }, {"x": 1612713600000, "y": 1.4991, "equityReturn": 1.12, "unitMoney": ""}, {
        "x": 1612800000000,
        "y": 1.5275,
        "equityReturn": 1.89,
        "unitMoney": ""
    }, {"x": 1612886400000, "y": 1.5651, "equityReturn": 2.46, "unitMoney": ""}, {
        "x": 1613577600000,
        "y": 1.4965,
        "equityReturn": -4.38,
        "unitMoney": ""
    }, {"x": 1613664000000, "y": 1.5132, "equityReturn": 1.12, "unitMoney": ""}, {
        "x": 1613923200000,
        "y": 1.448,
        "equityReturn": -4.31,
        "unitMoney": ""
    }, {"x": 1614009600000, "y": 1.4274, "equityReturn": -1.42, "unitMoney": ""}, {
        "x": 1614096000000,
        "y": 1.3755,
        "equityReturn": -3.64,
        "unitMoney": ""
    }, {"x": 1614182400000, "y": 1.3713, "equityReturn": -0.31, "unitMoney": ""}, {
        "x": 1614268800000,
        "y": 1.3353,
        "equityReturn": -2.63,
        "unitMoney": ""
    }, {"x": 1614528000000, "y": 1.3534, "equityReturn": 1.36, "unitMoney": ""}, {
        "x": 1614614400000,
        "y": 1.3283,
        "equityReturn": -1.85,
        "unitMoney": ""
    }, {"x": 1614700800000, "y": 1.3506, "equityReturn": 1.68, "unitMoney": ""}, {
        "x": 1614787200000,
        "y": 1.2891,
        "equityReturn": -4.55,
        "unitMoney": ""
    }, {"x": 1614873600000, "y": 1.2927, "equityReturn": 0.28, "unitMoney": ""}, {
        "x": 1615132800000,
        "y": 1.2191,
        "equityReturn": -5.69,
        "unitMoney": ""
    }, {"x": 1615219200000, "y": 1.1836, "equityReturn": -2.91, "unitMoney": ""}, {
        "x": 1615305600000,
        "y": 1.211,
        "equityReturn": 2.31,
        "unitMoney": ""
    }, {"x": 1615392000000, "y": 1.2425, "equityReturn": 2.6, "unitMoney": ""}, {
        "x": 1615478400000,
        "y": 1.2447,
        "equityReturn": 0.18,
        "unitMoney": ""
    }, {"x": 1615737600000, "y": 1.1868, "equityReturn": -4.65, "unitMoney": ""}, {
        "x": 1615824000000,
        "y": 1.1935,
        "equityReturn": 0.56,
        "unitMoney": ""
    }, {"x": 1615910400000, "y": 1.2035, "equityReturn": 0.84, "unitMoney": ""}, {
        "x": 1615996800000,
        "y": 1.223,
        "equityReturn": 1.62,
        "unitMoney": ""
    }, {"x": 1616083200000, "y": 1.1984, "equityReturn": -2.01, "unitMoney": ""}];
/*累计净值走势*/
var Data_ACWorthTrend = [[1432137600000, 1.0], [1432224000000, 1.0], [1432483200000, 1.0], [1432569600000, 1.0015], [1432656000000, 0.9997], [1432742400000, 0.9916], [1432828800000, 0.9954], [1433088000000, 1.0068], [1433174400000, 1.0158], [1433260800000, 1.0157], [1433347200000, 1.0158], [1433433600000, 1.0137], [1433692800000, 1.0025], [1433779200000, 1.0027], [1433865600000, 1.0138], [1433952000000, 1.0206], [1434038400000, 1.032], [1434297600000, 0.9989], [1434384000000, 0.9687], [1434470400000, 0.9944], [1434556800000, 0.9349], [1434643200000, 0.8679], [1434988800000, 0.8774], [1435075200000, 0.8793], [1435161600000, 0.8469], [1435248000000, 0.7712], [1435507200000, 0.7113], [1435593600000, 0.7591], [1435680000000, 0.7278], [1435766400000, 0.689], [1435852800000, 0.6685], [1436112000000, 0.6472], [1436198400000, 0.596], [1436284800000, 0.5679], [1436371200000, 0.5748], [1436457600000, 0.5962], [1436716800000, 0.6237], [1436803200000, 0.6364], [1436889600000, 0.5998], [1436976000000, 0.6058], [1437062400000, 0.6395], [1437321600000, 0.6551], [1437408000000, 0.6674], [1437494400000, 0.6665], [1437580800000, 0.6835], [1437667200000, 0.6737], [1437926400000, 0.617], [1438012800000, 0.5958], [1438099200000, 0.6166], [1438185600000, 0.5776], [1438272000000, 0.5696], [1438531200000, 0.543], [1438617600000, 0.5769], [1438704000000, 0.5716], [1438790400000, 0.5644], [1438876800000, 0.5923], [1439136000000, 0.6249], [1439222400000, 0.6174], [1439308800000, 0.6042], [1439395200000, 0.6164], [1439481600000, 0.6176], [1439740800000, 0.62], [1439827200000, 0.5741], [1439913600000, 0.5875], [1440000000000, 0.5735], [1440086400000, 0.5435], [1440345600000, 0.4958], [1440432000000, 0.4481], [1440518400000, 0.4216], [1440604800000, 0.4381], [1440691200000, 0.4627], [1440950400000, 0.4467], [1441036800000, 0.4237], [1441123200000, 0.4184], [1441555200000, 0.4225], [1441641600000, 0.4406], [1441728000000, 0.4535], [1441814400000, 0.4462], [1441900800000, 0.4479], [1442160000000, 0.4238], [1442246400000, 0.4052], [1442332800000, 0.4283], [1442419200000, 0.425], [1442505600000, 0.4322], [1442764800000, 0.4503], [1442851200000, 0.4515], [1442937600000, 0.4491], [1443024000000, 0.4549], [1443110400000, 0.4421], [1443369600000, 0.4559], [1443456000000, 0.4498], [1443542400000, 0.4512], [1444233600000, 0.468], [1444320000000, 0.4711], [1444579200000, 0.4874], [1444665600000, 0.4929], [1444752000000, 0.495], [1444838400000, 0.5068], [1444924800000, 0.5093], [1445184000000, 0.505], [1445270400000, 0.5168], [1445356800000, 0.4975], [1445443200000, 0.5297], [1445529600000, 0.5507], [1445788800000, 0.5433], [1445875200000, 0.5521], [1445961600000, 0.5322], [1446048000000, 0.5338], [1446134400000, 0.5295], [1446393600000, 0.5151], [1446480000000, 0.5116], [1446566400000, 0.5437], [1446652800000, 0.5375], [1446739200000, 0.5485], [1446998400000, 0.5582], [1447084800000, 0.5606], [1447171200000, 0.5759], [1447257600000, 0.5748], [1447344000000, 0.5496], [1447603200000, 0.5581], [1447689600000, 0.5481], [1447776000000, 0.532], [1447862400000, 0.5459], [1447948800000, 0.5492], [1448208000000, 0.5461], [1448294400000, 0.5508], [1448380800000, 0.5741], [1448467200000, 0.5626], [1448553600000, 0.5254], [1448812800000, 0.5286], [1448899200000, 0.5315], [1448985600000, 0.5239], [1449072000000, 0.5358], [1449158400000, 0.5305], [1449417600000, 0.5383], [1449504000000, 0.5229], [1449590400000, 0.517], [1449676800000, 0.5164], [1449763200000, 0.5094], [1450022400000, 0.5182], [1450108800000, 0.5256], [1450195200000, 0.526], [1450281600000, 0.5379], [1450368000000, 0.5417], [1450627200000, 0.548], [1450713600000, 0.5521], [1450800000000, 0.5416], [1450886400000, 0.5415], [1450972800000, 0.5425], [1451232000000, 0.5296], [1451318400000, 0.5331], [1451404800000, 0.5412], [1451491200000, 0.5283], [1451836800000, 0.482], [1451923200000, 0.4688], [1452009600000, 0.4771], [1452096000000, 0.4351], [1452182400000, 0.4379], [1452441600000, 0.4049], [1452528000000, 0.4136], [1452614400000, 0.3974], [1452700800000, 0.4178], [1452787200000, 0.407], [1453046400000, 0.4166], [1453132800000, 0.4318], [1453219200000, 0.4238], [1453305600000, 0.4057], [1453392000000, 0.4083], [1453651200000, 0.411], [1453737600000, 0.3796], [1453824000000, 0.3749], [1453910400000, 0.3601], [1453996800000, 0.3756], [1454256000000, 0.3717], [1454342400000, 0.3858], [1454428800000, 0.3868], [1454515200000, 0.3954], [1454601600000, 0.3914], [1455465600000, 0.3914], [1455552000000, 0.4094], [1455638400000, 0.4041], [1455724800000, 0.4013], [1455811200000, 0.4042], [1456070400000, 0.4102], [1456156800000, 0.4075], [1456243200000, 0.4097], [1456329600000, 0.3772], [1456416000000, 0.372], [1456675200000, 0.3489], [1456761600000, 0.3561], [1456848000000, 0.371], [1456934400000, 0.3713], [1457020800000, 0.3553], [1457280000000, 0.3627], [1457366400000, 0.3673], [1457452800000, 0.3659], [1457539200000, 0.3588], [1457625600000, 0.3579], [1457884800000, 0.3716], [1457971200000, 0.3683], [1458057600000, 0.3647], [1458144000000, 0.3798], [1458230400000, 0.3932], [1458489600000, 0.4013], [1458576000000, 0.4022], [1458662400000, 0.4033], [1458748800000, 0.3959], [1458835200000, 0.3994], [1459094400000, 0.3961], [1459180800000, 0.3891], [1459267200000, 0.4056], [1459353600000, 0.4047], [1459440000000, 0.4005], [1459785600000, 0.4124], [1459872000000, 0.4143], [1459958400000, 0.4086], [1460044800000, 0.4058], [1460304000000, 0.4232], [1460390400000, 0.4228], [1460476800000, 0.428], [1460563200000, 0.4289], [1460649600000, 0.4263], [1460908800000, 0.4172], [1460995200000, 0.4184], [1461081600000, 0.3939], [1461168000000, 0.3904], [1461254400000, 0.3973], [1461513600000, 0.3954], [1461600000000, 0.4027], [1461686400000, 0.3989], [1461772800000, 0.4001], [1461859200000, 0.3974], [1462204800000, 0.4075], [1462291200000, 0.407], [1462377600000, 0.4097], [1462464000000, 0.3943], [1462723200000, 0.3792], [1462809600000, 0.3789], [1462896000000, 0.3791], [1462982400000, 0.3792], [1463068800000, 0.3773], [1463328000000, 0.3829], [1463414400000, 0.3926], [1463500800000, 0.3801], [1463587200000, 0.3811], [1463673600000, 0.3846], [1463932800000, 0.3888], [1464019200000, 0.3834], [1464105600000, 0.3831], [1464192000000, 0.3864], [1464278400000, 0.3837], [1464537600000, 0.3832], [1464624000000, 0.3978], [1464710400000, 0.399], [1464796800000, 0.4019], [1464883200000, 0.4061], [1465142400000, 0.4056], [1465228800000, 0.4045], [1465315200000, 0.4021], [1465747200000, 0.3834], [1465833600000, 0.3839], [1465920000000, 0.3935], [1466006400000, 0.3913], [1466092800000, 0.4009], [1466352000000, 0.4004], [1466438400000, 0.395], [1466524800000, 0.4022], [1466611200000, 0.3999], [1466697600000, 0.3958], [1466956800000, 0.4052], [1467043200000, 0.4119], [1467129600000, 0.4127], [1467216000000, 0.4139], [1467302400000, 0.4104], [1467561600000, 0.4181], [1467648000000, 0.4175], [1467734400000, 0.4194], [1467820800000, 0.4248], [1467907200000, 0.4247], [1468166400000, 0.4202], [1468252800000, 0.4272], [1468339200000, 0.4294], [1468425600000, 0.429], [1468512000000, 0.4245], [1468771200000, 0.4243], [1468857600000, 0.4259], [1468944000000, 0.4275], [1469030400000, 0.4282], [1469116800000, 0.4257], [1469376000000, 0.4257], [1469462400000, 0.4328], [1469548800000, 0.4123], [1469635200000, 0.4102], [1469721600000, 0.4101], [1469980800000, 0.4042], [1470067200000, 0.4074], [1470153600000, 0.41], [1470240000000, 0.4116], [1470326400000, 0.4076], [1470585600000, 0.4124], [1470672000000, 0.4164], [1470758400000, 0.4167], [1470844800000, 0.412], [1470931200000, 0.4174], [1471190400000, 0.4267], [1471276800000, 0.4306], [1471363200000, 0.4309], [1471449600000, 0.4294], [1471536000000, 0.4292], [1471795200000, 0.4256], [1471881600000, 0.4272], [1471968000000, 0.4277], [1472054400000, 0.4272], [1472140800000, 0.4307], [1472400000000, 0.4326], [1472486400000, 0.432], [1472572800000, 0.4317], [1472659200000, 0.4271], [1472745600000, 0.4248], [1473004800000, 0.4245], [1473091200000, 0.4313], [1473177600000, 0.4335], [1473264000000, 0.4339], [1473350400000, 0.4287], [1473609600000, 0.4145], [1473696000000, 0.4165], [1473782400000, 0.4152], [1474214400000, 0.4211], [1474300800000, 0.4205], [1474387200000, 0.4204], [1474473600000, 0.422], [1474560000000, 0.4208], [1474819200000, 0.414], [1474905600000, 0.4176], [1474992000000, 0.4164], [1475078400000, 0.4181], [1475164800000, 0.4199], [1476028800000, 0.4278], [1476115200000, 0.4282], [1476201600000, 0.4284], [1476288000000, 0.429], [1476374400000, 0.4291], [1476633600000, 0.4264], [1476720000000, 0.4304], [1476806400000, 0.4288], [1476892800000, 0.4285], [1476979200000, 0.4269], [1477238400000, 0.4286], [1477324800000, 0.4273], [1477411200000, 0.4288], [1477497600000, 0.4269], [1477584000000, 0.422], [1477843200000, 0.4221], [1477929600000, 0.4255], [1478016000000, 0.4224], [1478102400000, 0.4236], [1478188800000, 0.4231], [1478448000000, 0.4206], [1478534400000, 0.4231], [1478620800000, 0.4189], [1478707200000, 0.423], [1478793600000, 0.4235], [1479052800000, 0.4254], [1479139200000, 0.4264], [1479225600000, 0.4273], [1479312000000, 0.4277], [1479398400000, 0.4267], [1479657600000, 0.427], [1479744000000, 0.4302], [1479830400000, 0.4275], [1479916800000, 0.4239], [1480003200000, 0.4279], [1480262400000, 0.4312], [1480348800000, 0.4272], [1480435200000, 0.4304], [1480521600000, 0.432], [1480608000000, 0.4264], [1480867200000, 0.4257], [1480953600000, 0.4252], [1481040000000, 0.4274], [1481126400000, 0.4252], [1481212800000, 0.4243], [1481472000000, 0.4006], [1481558400000, 0.4008], [1481644800000, 0.3967], [1481731200000, 0.3985], [1481817600000, 0.4017], [1482076800000, 0.4007], [1482163200000, 0.4006], [1482249600000, 0.4028], [1482336000000, 0.4034], [1482422400000, 0.3998], [1482681600000, 0.4006], [1482768000000, 0.3974], [1482854400000, 0.3956], [1482940800000, 0.3939], [1483027200000, 0.3937], [1483113600000, 0.3937], [1483372800000, 0.396], [1483459200000, 0.3996], [1483545600000, 0.398], [1483632000000, 0.3945], [1483891200000, 0.3942], [1483977600000, 0.3917], [1484064000000, 0.3882], [1484150400000, 0.3856], [1484236800000, 0.3785], [1484496000000, 0.3629], [1484582400000, 0.3656], [1484668800000, 0.3626], [1484755200000, 0.3624], [1484841600000, 0.3678], [1485100800000, 0.3706], [1485187200000, 0.368], [1485273600000, 0.3698], [1485360000000, 0.3727], [1486051200000, 0.3716], [1486310400000, 0.3754], [1486396800000, 0.3744], [1486483200000, 0.3788], [1486569600000, 0.3811], [1486656000000, 0.3797], [1486915200000, 0.3826], [1487001600000, 0.381], [1487088000000, 0.3788], [1487174400000, 0.3793], [1487260800000, 0.3767], [1487520000000, 0.3785], [1487606400000, 0.3825], [1487692800000, 0.3825], [1487779200000, 0.3846], [1487865600000, 0.3861], [1488124800000, 0.3826], [1488211200000, 0.3829], [1488297600000, 0.384], [1488384000000, 0.3816], [1488470400000, 0.3826], [1488729600000, 0.3872], [1488816000000, 0.39], [1488902400000, 0.3877], [1488988800000, 0.3869], [1489075200000, 0.385], [1489334400000, 0.3873], [1489420800000, 0.3863], [1489507200000, 0.3854], [1489593600000, 0.388], [1489680000000, 0.3859], [1489939200000, 0.3863], [1490025600000, 0.386], [1490112000000, 0.3856], [1490198400000, 0.3851], [1490284800000, 0.3865], [1490544000000, 0.3851], [1490630400000, 0.3844], [1490716800000, 0.3812], [1490803200000, 0.3734], [1490889600000, 0.375], [1491321600000, 0.3793], [1491408000000, 0.3801], [1491494400000, 0.3809], [1491753600000, 0.3764], [1491840000000, 0.377], [1491926400000, 0.3744], [1492012800000, 0.3756], [1492099200000, 0.3717], [1492358400000, 0.3682], [1492444800000, 0.3638], [1492531200000, 0.3602], [1492617600000, 0.3599], [1492704000000, 0.3618], [1492963200000, 0.3554], [1493049600000, 0.3568], [1493136000000, 0.3578], [1493222400000, 0.3601], [1493308800000, 0.3614], [1493654400000, 0.3615], [1493740800000, 0.3601], [1493827200000, 0.3589], [1493913600000, 0.3552], [1494172800000, 0.3534], [1494259200000, 0.3558], [1494345600000, 0.3486], [1494432000000, 0.3448], [1494518400000, 0.3439], [1494777600000, 0.3443], [1494864000000, 0.3519], [1494950400000, 0.3532], [1495036800000, 0.3508], [1495123200000, 0.3525], [1495382400000, 0.3504], [1495468800000, 0.3436], [1495555200000, 0.3468], [1495641600000, 0.3485], [1495728000000, 0.3481], [1496160000000, 0.3445], [1496246400000, 0.3374], [1496332800000, 0.3396], [1496592000000, 0.3414], [1496678400000, 0.342], [1496764800000, 0.3504], [1496851200000, 0.3491], [1496937600000, 0.3499], [1497196800000, 0.346], [1497283200000, 0.3501], [1497369600000, 0.3496], [1497456000000, 0.3544], [1497542400000, 0.3524], [1497801600000, 0.3526], [1497888000000, 0.3518], [1497974400000, 0.3531], [1498060800000, 0.3487], [1498147200000, 0.3504], [1498406400000, 0.354], [1498492800000, 0.3568], [1498579200000, 0.3547], [1498665600000, 0.3566], [1498752000000, 0.3579], [1499011200000, 0.361], [1499097600000, 0.3571], [1499184000000, 0.3599], [1499270400000, 0.3578], [1499356800000, 0.357], [1499616000000, 0.3534], [1499702400000, 0.353], [1499788800000, 0.3512], [1499875200000, 0.3539], [1499961600000, 0.3492], [1500220800000, 0.3301], [1500307200000, 0.3281], [1500393600000, 0.3304], [1500480000000, 0.3327], [1500566400000, 0.3309], [1500825600000, 0.3316], [1500912000000, 0.3311], [1500998400000, 0.3285], [1501084800000, 0.3353], [1501171200000, 0.3332], [1501430400000, 0.3341], [1501516800000, 0.3348], [1501603200000, 0.3322], [1501689600000, 0.3335], [1501776000000, 0.3308], [1502035200000, 0.333], [1502121600000, 0.3364], [1502208000000, 0.3388], [1502294400000, 0.3368], [1502380800000, 0.3341], [1502640000000, 0.3396], [1502726400000, 0.3401], [1502812800000, 0.343], [1502899200000, 0.3439], [1502985600000, 0.3425], [1503244800000, 0.3434], [1503331200000, 0.3411], [1503417600000, 0.3414], [1503504000000, 0.3369], [1503590400000, 0.3399], [1503849600000, 0.3442], [1503936000000, 0.3439], [1504022400000, 0.3454], [1504108800000, 0.3471], [1504195200000, 0.3485], [1504454400000, 0.3497], [1504540800000, 0.3522], [1504627200000, 0.353], [1504713600000, 0.3528], [1504800000000, 0.3555], [1505059200000, 0.3535], [1505145600000, 0.3519], [1505232000000, 0.3522], [1505318400000, 0.3521], [1505404800000, 0.3506], [1505664000000, 0.3541], [1505750400000, 0.3547], [1505836800000, 0.356], [1505923200000, 0.3523], [1506009600000, 0.3511], [1506268800000, 0.3495], [1506355200000, 0.3476], [1506441600000, 0.3481], [1506528000000, 0.3479], [1506614400000, 0.3504], [1507478400000, 0.3544], [1507564800000, 0.3745], [1507651200000, 0.3716], [1507737600000, 0.3732], [1507824000000, 0.3748], [1508083200000, 0.365], [1508169600000, 0.3646], [1508256000000, 0.3655], [1508342400000, 0.368], [1508428800000, 0.3677], [1508688000000, 0.3709], [1508774400000, 0.3683], [1508860800000, 0.3729], [1508947200000, 0.3706], [1509033600000, 0.3683], [1509292800000, 0.36], [1509379200000, 0.3619], [1509465600000, 0.3602], [1509552000000, 0.3596], [1509638400000, 0.3557], [1509897600000, 0.3624], [1509984000000, 0.3665], [1510070400000, 0.364], [1510156800000, 0.3645], [1510243200000, 0.3654], [1510502400000, 0.3715], [1510588800000, 0.3708], [1510675200000, 0.3683], [1510761600000, 0.3717], [1510848000000, 0.3585], [1511107200000, 0.3597], [1511193600000, 0.3564], [1511280000000, 0.3573], [1511366400000, 0.3444], [1511452800000, 0.3438], [1511712000000, 0.3368], [1511798400000, 0.3421], [1511884800000, 0.3415], [1511971200000, 0.3395], [1512057600000, 0.344], [1512316800000, 0.3415], [1512403200000, 0.3346], [1512489600000, 0.3373], [1512576000000, 0.3392], [1512662400000, 0.3428], [1512921600000, 0.3476], [1513008000000, 0.3449], [1513094400000, 0.3491], [1513180800000, 0.3471], [1513267200000, 0.3469], [1513526400000, 0.3446], [1513612800000, 0.3474], [1513699200000, 0.346], [1513785600000, 0.349], [1513872000000, 0.3459], [1514131200000, 0.3456], [1514217600000, 0.3467], [1514304000000, 0.3434], [1514390400000, 0.3445], [1514476800000, 0.349], [1514649600000, 0.349], [1514822400000, 0.3491], [1514908800000, 0.3493], [1514995200000, 0.3496], [1515081600000, 0.3549], [1515340800000, 0.3558], [1515427200000, 0.3583], [1515513600000, 0.3556], [1515600000000, 0.3574], [1515686400000, 0.3559], [1515945600000, 0.3507], [1516032000000, 0.3525], [1516118400000, 0.3548], [1516204800000, 0.3547], [1516291200000, 0.3533], [1516550400000, 0.3565], [1516636800000, 0.3563], [1516723200000, 0.363], [1516809600000, 0.3618], [1516896000000, 0.3622], [1517155200000, 0.3574], [1517241600000, 0.359], [1517328000000, 0.3522], [1517414400000, 0.3414], [1517500800000, 0.3412], [1517760000000, 0.3379], [1517846400000, 0.323], [1517932800000, 0.3247], [1518019200000, 0.3301], [1518105600000, 0.3196], [1518364800000, 0.3304], [1518451200000, 0.3306], [1518537600000, 0.3327], [1519228800000, 0.3385], [1519315200000, 0.3378], [1519574400000, 0.3476], [1519660800000, 0.3471], [1519747200000, 0.3487], [1519833600000, 0.3542], [1519920000000, 0.3534], [1520179200000, 0.358], [1520265600000, 0.3644], [1520352000000, 0.3637], [1520438400000, 0.3701], [1520524800000, 0.3737], [1520784000000, 0.3771], [1520870400000, 0.372], [1520956800000, 0.3677], [1521043200000, 0.3669], [1521129600000, 0.3663], [1521388800000, 0.3761], [1521475200000, 0.3829], [1521561600000, 0.381], [1521648000000, 0.3788], [1521734400000, 0.3674], [1521993600000, 0.3808], [1522080000000, 0.3907], [1522166400000, 0.3892], [1522252800000, 0.3853], [1522339200000, 0.399], [1522598400000, 0.397], [1522684800000, 0.3953], [1522771200000, 0.3913], [1523203200000, 0.3934], [1523289600000, 0.3983], [1523376000000, 0.3968], [1523462400000, 0.4011], [1523548800000, 0.3959], [1523808000000, 0.4005], [1523894400000, 0.3907], [1523980800000, 0.3979], [1524067200000, 0.3995], [1524153600000, 0.3952], [1524412800000, 0.3898], [1524499200000, 0.3978], [1524585600000, 0.4119], [1524672000000, 0.4045], [1524758400000, 0.4144], [1525190400000, 0.4161], [1525276800000, 0.4116], [1525363200000, 0.4154], [1525622400000, 0.4219], [1525708800000, 0.4196], [1525795200000, 0.418], [1525881600000, 0.4267], [1525968000000, 0.4149], [1526227200000, 0.4124], [1526313600000, 0.4196], [1526400000000, 0.4222], [1526486400000, 0.4174], [1526572800000, 0.4182], [1526832000000, 0.4212], [1526918400000, 0.4286], [1527004800000, 0.4262], [1527091200000, 0.4299], [1527177600000, 0.4272], [1527436800000, 0.43], [1527523200000, 0.4179], [1527609600000, 0.4124], [1527696000000, 0.4255], [1527782400000, 0.4119], [1528041600000, 0.4096], [1528128000000, 0.4206], [1528214400000, 0.4236], [1528300800000, 0.4155], [1528387200000, 0.415], [1528646400000, 0.4052], [1528732800000, 0.4104], [1528819200000, 0.4022], [1528905600000, 0.3997], [1528992000000, 0.3943], [1529337600000, 0.3766], [1529424000000, 0.3886], [1529510400000, 0.3858], [1529596800000, 0.3902], [1529856000000, 0.392], [1529942400000, 0.3934], [1530028800000, 0.3834], [1530115200000, 0.379], [1530201600000, 0.393], [1530288000000, 0.3929], [1530460800000, 0.3924], [1530547200000, 0.3939], [1530633600000, 0.3845], [1530720000000, 0.3746], [1530806400000, 0.376], [1531065600000, 0.3905], [1531152000000, 0.393], [1531238400000, 0.3911], [1531324800000, 0.4015], [1531411200000, 0.4062], [1531670400000, 0.4102], [1531756800000, 0.4067], [1531843200000, 0.4023], [1531929600000, 0.3938], [1532016000000, 0.3952], [1532275200000, 0.386], [1532361600000, 0.3903], [1532448000000, 0.3973], [1532534400000, 0.3934], [1532620800000, 0.3899], [1532880000000, 0.3765], [1532966400000, 0.3781], [1533052800000, 0.3694], [1533139200000, 0.366], [1533225600000, 0.3542], [1533484800000, 0.3453], [1533571200000, 0.3539], [1533657600000, 0.3454], [1533744000000, 0.3568], [1533830400000, 0.3619], [1534089600000, 0.3665], [1534176000000, 0.366], [1534262400000, 0.3556], [1534348800000, 0.3544], [1534435200000, 0.3414], [1534694400000, 0.3381], [1534780800000, 0.3516], [1534867200000, 0.3489], [1534953600000, 0.3534], [1535040000000, 0.353], [1535299200000, 0.3683], [1535385600000, 0.3679], [1535472000000, 0.3668], [1535558400000, 0.3614], [1535644800000, 0.3553], [1535904000000, 0.3582], [1535990400000, 0.3635], [1536076800000, 0.3583], [1536163200000, 0.3555], [1536249600000, 0.3593], [1536508800000, 0.3529], [1536595200000, 0.3556], [1536681600000, 0.3488], [1536768000000, 0.3456], [1536854400000, 0.3403], [1537113600000, 0.3366], [1537200000000, 0.3441], [1537286400000, 0.3479], [1537372800000, 0.3463], [1537459200000, 0.3538], [1537804800000, 0.353], [1537891200000, 0.358], [1537977600000, 0.3569], [1538064000000, 0.3595], [1538928000000, 0.3453], [1539014400000, 0.3439], [1539100800000, 0.3395], [1539187200000, 0.3211], [1539273600000, 0.3235], [1539532800000, 0.3183], [1539619200000, 0.3104], [1539705600000, 0.3131], [1539792000000, 0.3006], [1539878400000, 0.3126], [1540137600000, 0.3298], [1540224000000, 0.3218], [1540310400000, 0.3179], [1540396800000, 0.3158], [1540483200000, 0.3128], [1540742400000, 0.3058], [1540828800000, 0.3096], [1540915200000, 0.3167], [1541001600000, 0.3198], [1541088000000, 0.3352], [1541347200000, 0.3344], [1541433600000, 0.3344], [1541520000000, 0.3335], [1541606400000, 0.3335], [1541692800000, 0.3331], [1541952000000, 0.3429], [1542038400000, 0.3484], [1542124800000, 0.3454], [1542211200000, 0.3496], [1542297600000, 0.3477], [1542556800000, 0.3474], [1542643200000, 0.3396], [1542729600000, 0.3412], [1542816000000, 0.3425], [1542902400000, 0.3317], [1543161600000, 0.3322], [1543248000000, 0.3352], [1543334400000, 0.3374], [1543420800000, 0.3325], [1543507200000, 0.3351], [1543766400000, 0.3469], [1543852800000, 0.3526], [1543939200000, 0.3526], [1544025600000, 0.3406], [1544112000000, 0.3339], [1544371200000, 0.3301], [1544457600000, 0.3345], [1544544000000, 0.3327], [1544630400000, 0.3353], [1544716800000, 0.3241], [1544976000000, 0.3203], [1545062400000, 0.3184], [1545148800000, 0.3089], [1545235200000, 0.3078], [1545321600000, 0.3044], [1545580800000, 0.3095], [1545667200000, 0.3097], [1545753600000, 0.3082], [1545840000000, 0.3061], [1545926400000, 0.3089], [1546185600000, 0.3088], [1546358400000, 0.2993], [1546444800000, 0.2964], [1546531200000, 0.3034], [1546790400000, 0.3051], [1546876800000, 0.3037], [1546963200000, 0.3046], [1547049600000, 0.3006], [1547136000000, 0.2992], [1547395200000, 0.2968], [1547481600000, 0.3015], [1547568000000, 0.3056], [1547654400000, 0.3044], [1547740800000, 0.3103], [1548000000000, 0.314], [1548086400000, 0.3084], [1548172800000, 0.3078], [1548259200000, 0.3087], [1548345600000, 0.3101], [1548604800000, 0.3074], [1548691200000, 0.3062], [1548777600000, 0.3034], [1548864000000, 0.3028], [1548950400000, 0.3124], [1549814400000, 0.3208], [1549900800000, 0.3252], [1549987200000, 0.3289], [1550073600000, 0.3302], [1550160000000, 0.3273], [1550419200000, 0.3406], [1550505600000, 0.3392], [1550592000000, 0.3364], [1550678400000, 0.3356], [1550764800000, 0.3405], [1551024000000, 0.3548], [1551110400000, 0.358], [1551196800000, 0.3535], [1551283200000, 0.364], [1551369600000, 0.3649], [1551628800000, 0.3718], [1551715200000, 0.3761], [1551801600000, 0.3782], [1551888000000, 0.3743], [1551974400000, 0.363], [1552233600000, 0.3797], [1552320000000, 0.3844], [1552406400000, 0.3774], [1552492800000, 0.3727], [1552579200000, 0.38], [1552838400000, 0.3939], [1552924800000, 0.3897], [1553011200000, 0.388], [1553097600000, 0.3895], [1553184000000, 0.3917], [1553443200000, 0.3878], [1553529600000, 0.3768], [1553616000000, 0.3838], [1553702400000, 0.3808], [1553788800000, 0.3969], [1554048000000, 0.4086], [1554134400000, 0.4072], [1554220800000, 0.4093], [1554307200000, 0.4069], [1554652800000, 0.401], [1554739200000, 0.4079], [1554825600000, 0.4101], [1554912000000, 0.3968], [1554998400000, 0.3954], [1555257600000, 0.3895], [1555344000000, 0.3951], [1555430400000, 0.3949], [1555516800000, 0.3908], [1555603200000, 0.394], [1555862400000, 0.393], [1555948800000, 0.3901], [1556035200000, 0.3952], [1556121600000, 0.3872], [1556208000000, 0.3858], [1556467200000, 0.3884], [1556553600000, 0.3889], [1557072000000, 0.3667], [1557158400000, 0.3738], [1557244800000, 0.3694], [1557331200000, 0.3626], [1557417600000, 0.3746], [1557676800000, 0.3747], [1557763200000, 0.3705], [1557849600000, 0.3796], [1557936000000, 0.3814], [1558022400000, 0.3722], [1558281600000, 0.3718], [1558368000000, 0.3778], [1558454400000, 0.3764], [1558540800000, 0.3667], [1558627200000, 0.3663], [1558886400000, 0.3723], [1558972800000, 0.3755], [1559059200000, 0.3726], [1559145600000, 0.3696], [1559232000000, 0.3685], [1559491200000, 0.3627], [1559577600000, 0.3582], [1559664000000, 0.3525], [1559750400000, 0.3475], [1560096000000, 0.3516], [1560182400000, 0.363], [1560268800000, 0.3608], [1560355200000, 0.362], [1560441600000, 0.3598], [1560700800000, 0.3579], [1560787200000, 0.3623], [1560873600000, 0.3656], [1560960000000, 0.3733], [1561046400000, 0.3774], [1561305600000, 0.3774], [1561392000000, 0.375], [1561478400000, 0.383], [1561564800000, 0.3863], [1561651200000, 0.3827], [1561824000000, 0.3826], [1561910400000, 0.3924], [1561996800000, 0.3985], [1562083200000, 0.3932], [1562169600000, 0.3879], [1562256000000, 0.3908], [1562515200000, 0.3831], [1562601600000, 0.3856], [1562688000000, 0.3856], [1562774400000, 0.3899], [1562860800000, 0.3907], [1563120000000, 0.3936], [1563206400000, 0.3924], [1563292800000, 0.3895], [1563379200000, 0.3831], [1563465600000, 0.3849], [1563724800000, 0.3825], [1563811200000, 0.3855], [1563897600000, 0.3891], [1563984000000, 0.3901], [1564070400000, 0.393], [1564329600000, 0.3896], [1564416000000, 0.392], [1564502400000, 0.3887], [1564588800000, 0.3875], [1564675200000, 0.3875], [1564934400000, 0.3837], [1565020800000, 0.3797], [1565107200000, 0.3798], [1565193600000, 0.3883], [1565280000000, 0.3884], [1565539200000, 0.3958], [1565625600000, 0.3949], [1565712000000, 0.4011], [1565798400000, 0.405], [1565884800000, 0.4073], [1566144000000, 0.4156], [1566230400000, 0.4185], [1566316800000, 0.4148], [1566403200000, 0.4161], [1566489600000, 0.4237], [1566748800000, 0.4244], [1566835200000, 0.4282], [1566921600000, 0.4251], [1567008000000, 0.4248], [1567094400000, 0.4241], [1567353600000, 0.4344], [1567440000000, 0.4313], [1567526400000, 0.4289], [1567612800000, 0.43], [1567699200000, 0.4332], [1567958400000, 0.4383], [1568044800000, 0.4403], [1568131200000, 0.4349], [1568217600000, 0.4383], [1568563200000, 0.4408], [1568649600000, 0.4332], [1568736000000, 0.436], [1568822400000, 0.4429], [1568908800000, 0.4444], [1569168000000, 0.438], [1569254400000, 0.4482], [1569340800000, 0.4447], [1569427200000, 0.4351], [1569513600000, 0.4379], [1569772800000, 0.4369], [1570464000000, 0.4401], [1570550400000, 0.4394], [1570636800000, 0.4543], [1570723200000, 0.4556], [1570982400000, 0.4586], [1571068800000, 0.4565], [1571155200000, 0.4618], [1571241600000, 0.4622], [1571328000000, 0.4638], [1571587200000, 0.4537], [1571673600000, 0.458], [1571760000000, 0.4489], [1571846400000, 0.4467], [1571932800000, 0.4504], [1572192000000, 0.4606], [1572278400000, 0.463], [1572364800000, 0.4626], [1572451200000, 0.4624], [1572537600000, 0.4716], [1572796800000, 0.4821], [1572883200000, 0.4814], [1572969600000, 0.4794], [1573056000000, 0.4845], [1573142400000, 0.4813], [1573401600000, 0.4692], [1573488000000, 0.4723], [1573574400000, 0.4826], [1573660800000, 0.4871], [1573747200000, 0.4827], [1574006400000, 0.4856], [1574092800000, 0.4986], [1574179200000, 0.5001], [1574265600000, 0.4914], [1574352000000, 0.4741], [1574611200000, 0.4672], [1574697600000, 0.4685], [1574784000000, 0.4631], [1574870400000, 0.4626], [1574956800000, 0.4538], [1575216000000, 0.4494], [1575302400000, 0.4499], [1575388800000, 0.4523], [1575475200000, 0.4581], [1575561600000, 0.4604], [1575820800000, 0.4528], [1575907200000, 0.4594], [1575993600000, 0.4587], [1576080000000, 0.4567], [1576166400000, 0.4649], [1576425600000, 0.4703], [1576512000000, 0.474], [1576598400000, 0.467], [1576684800000, 0.4661], [1576771200000, 0.4608], [1577030400000, 0.4563], [1577116800000, 0.4579], [1577203200000, 0.4577], [1577289600000, 0.4585], [1577376000000, 0.4526], [1577635200000, 0.4545], [1577721600000, 0.4632], [1577894400000, 0.4639], [1577980800000, 0.4615], [1578240000000, 0.4588], [1578326400000, 0.4684], [1578412800000, 0.4646], [1578499200000, 0.4819], [1578585600000, 0.4822], [1578844800000, 0.4861], [1578931200000, 0.4819], [1579017600000, 0.4854], [1579104000000, 0.4913], [1579190400000, 0.4958], [1579449600000, 0.5006], [1579536000000, 0.5058], [1579622400000, 0.502], [1579708800000, 0.4922], [1580659200000, 0.4774], [1580745600000, 0.4952], [1580832000000, 0.5065], [1580918400000, 0.5246], [1581004800000, 0.5203], [1581264000000, 0.5181], [1581350400000, 0.5197], [1581436800000, 0.5299], [1581523200000, 0.5273], [1581609600000, 0.5246], [1581868800000, 0.541], [1581955200000, 0.544], [1582041600000, 0.5307], [1582128000000, 0.5395], [1582214400000, 0.547], [1582473600000, 0.5579], [1582560000000, 0.5645], [1582646400000, 0.5429], [1582732800000, 0.5531], [1582819200000, 0.5394], [1583078400000, 0.5557], [1583164800000, 0.5728], [1583251200000, 0.5666], [1583337600000, 0.5736], [1583424000000, 0.579], [1583683200000, 0.5652], [1583769600000, 0.5642], [1583856000000, 0.556], [1583942400000, 0.5389], [1584028800000, 0.5305], [1584288000000, 0.5057], [1584374400000, 0.503], [1584460800000, 0.4964], [1584547200000, 0.4883], [1584633600000, 0.5022], [1584892800000, 0.4889], [1584979200000, 0.5039], [1585065600000, 0.5256], [1585152000000, 0.5393], [1585238400000, 0.5304], [1585497600000, 0.5171], [1585584000000, 0.5181], [1585670400000, 0.5143], [1585756800000, 0.5256], [1585843200000, 0.5276], [1586188800000, 0.543], [1586275200000, 0.5415], [1586361600000, 0.5619], [1586448000000, 0.5516], [1586707200000, 0.5524], [1586793600000, 0.5628], [1586880000000, 0.5606], [1586966400000, 0.5726], [1587052800000, 0.5671], [1587312000000, 0.5839], [1587398400000, 0.5775], [1587484800000, 0.5826], [1587571200000, 0.585], [1587657600000, 0.5712], [1587916800000, 0.5779], [1588003200000, 0.5823], [1588089600000, 0.5747], [1588176000000, 0.5689], [1588694400000, 0.5795], [1588780800000, 0.5822], [1588867200000, 0.5889], [1589126400000, 0.5808], [1589212800000, 0.5931], [1589299200000, 0.6129], [1589385600000, 0.6049], [1589472000000, 0.5999], [1589731200000, 0.6109], [1589817600000, 0.614], [1589904000000, 0.6031], [1589990400000, 0.6083], [1590076800000, 0.5925], [1590336000000, 0.5969], [1590422400000, 0.6143], [1590508800000, 0.5987], [1590595200000, 0.5939], [1590681600000, 0.6093], [1590940800000, 0.6226], [1591027200000, 0.611], [1591113600000, 0.614], [1591200000000, 0.6193], [1591286400000, 0.6227], [1591545600000, 0.613], [1591632000000, 0.621], [1591718400000, 0.6321], [1591804800000, 0.6295], [1591891200000, 0.6374], [1592150400000, 0.6439], [1592236800000, 0.6543], [1592323200000, 0.6589], [1592409600000, 0.6482], [1592496000000, 0.6617], [1592755200000, 0.6635], [1592841600000, 0.6742], [1592928000000, 0.6724], [1593360000000, 0.6811], [1593446400000, 0.6887], [1593532800000, 0.6789], [1593619200000, 0.6726], [1593705600000, 0.6842], [1593964800000, 0.6823], [1594051200000, 0.6918], [1594137600000, 0.6963], [1594224000000, 0.7139], [1594310400000, 0.7232], [1594569600000, 0.7393], [1594656000000, 0.729], [1594742400000, 0.7334], [1594828800000, 0.7085], [1594915200000, 0.7157], [1595174400000, 0.7131], [1595260800000, 0.7293], [1595347200000, 0.7359], [1595433600000, 0.7462], [1595520000000, 0.7134], [1595779200000, 0.7184], [1595865600000, 0.7246], [1595952000000, 0.7355], [1596038400000, 0.7334], [1596124800000, 0.7408], [1596384000000, 0.7499], [1596470400000, 0.748], [1596556800000, 0.7527], [1596643200000, 0.7432], [1596729600000, 0.7336], [1596988800000, 0.7349], [1597075200000, 0.7264], [1597161600000, 0.7126], [1597248000000, 0.7094], [1597334400000, 0.7131], [1597593600000, 0.7168], [1597680000000, 0.7204], [1597766400000, 0.7078], [1597852800000, 0.7057], [1597939200000, 0.7106], [1598198400000, 0.7172], [1598284800000, 0.7209], [1598371200000, 0.7217], [1598457600000, 0.7302], [1598544000000, 0.7434], [1598803200000, 0.7406], [1598889600000, 0.7436], [1598976000000, 0.7434], [1599062400000, 0.7405], [1599148800000, 0.7292], [1599408000000, 0.7108], [1599494400000, 0.7094], [1599580800000, 0.692], [1599667200000, 0.6882], [1599753600000, 0.6952], [1600012800000, 0.6967], [1600099200000, 0.7021], [1600185600000, 0.6922], [1600272000000, 0.6873], [1600358400000, 0.6927], [1600617600000, 0.6873], [1600704000000, 0.692], [1600790400000, 0.7029], [1600876800000, 0.6947], [1600963200000, 0.6976], [1601222400000, 0.6932], [1601308800000, 0.7015], [1601395200000, 0.7092], [1602172800000, 0.7217], [1602432000000, 0.7416], [1602518400000, 0.7483], [1602604800000, 0.749], [1602691200000, 0.7429], [1602777600000, 0.7445], [1603036800000, 0.7308], [1603123200000, 0.7365], [1603209600000, 0.736], [1603296000000, 0.7325], [1603382400000, 0.7181], [1603641600000, 0.7228], [1603728000000, 0.7368], [1603814400000, 0.7419], [1603900800000, 0.7545], [1603987200000, 0.7436], [1604246400000, 0.7429], [1604332800000, 0.7487], [1604419200000, 0.7493], [1604505600000, 0.745], [1604592000000, 0.7328], [1604851200000, 0.7471], [1604937600000, 0.7353], [1605024000000, 0.7221], [1605110400000, 0.727], [1605196800000, 0.7271], [1605456000000, 0.7315], [1605542400000, 0.716], [1605628800000, 0.7009], [1605715200000, 0.7046], [1605801600000, 0.71], [1606060800000, 0.7083], [1606147200000, 0.7041], [1606233600000, 0.6898], [1606320000000, 0.6908], [1606406400000, 0.6922], [1606665600000, 0.6924], [1606752000000, 0.7073], [1606838400000, 0.7066], [1606924800000, 0.7174], [1607011200000, 0.7237], [1607270400000, 0.7233], [1607356800000, 0.7257], [1607443200000, 0.7173], [1607529600000, 0.7269], [1607616000000, 0.722], [1607875200000, 0.7318], [1607961600000, 0.7369], [1608048000000, 0.7397], [1608134400000, 0.7471], [1608220800000, 0.7413], [1608480000000, 0.7519], [1608566400000, 0.7525], [1608652800000, 0.7506], [1608739200000, 0.7483], [1608825600000, 0.7573], [1609084800000, 0.7547], [1609171200000, 0.7539], [1609257600000, 0.7605], [1609344000000, 0.7684], [1609689600000, 0.7661], [1609776000000, 0.7761], [1609862400000, 0.7869], [1609948800000, 0.7917], [1610035200000, 0.7922], [1610294400000, 0.7937], [1610380800000, 0.7997], [1610467200000, 0.7905], [1610553600000, 0.7913], [1610640000000, 0.7899], [1610899200000, 0.7964], [1610985600000, 0.7847], [1611072000000, 0.8088], [1611158400000, 0.8277], [1611244800000, 0.8624], [1611504000000, 0.8694], [1611590400000, 0.844], [1611676800000, 0.841], [1611763200000, 0.8176], [1611849600000, 0.8153], [1612108800000, 0.8292], [1612195200000, 0.8342], [1612281600000, 0.836], [1612368000000, 0.8272], [1612454400000, 0.8394], [1612713600000, 0.8464], [1612800000000, 0.8585], [1612886400000, 0.8745], [1613577600000, 0.8453], [1613664000000, 0.8524], [1613923200000, 0.8247], [1614009600000, 0.8159], [1614096000000, 0.7939], [1614182400000, 0.7921], [1614268800000, 0.7768], [1614528000000, 0.7845], [1614614400000, 0.7738], [1614700800000, 0.7833], [1614787200000, 0.7571], [1614873600000, 0.7587], [1615132800000, 0.7274], [1615219200000, 0.7123], [1615305600000, 0.724], [1615392000000, 0.7373], [1615478400000, 0.7383], [1615737600000, 0.7137], [1615824000000, 0.7165], [1615910400000, 0.7208], [1615996800000, 0.7291], [1616083200000, 0.7186]];
/*累计收益率走势*/
var Data_grandTotal =
    [{
        "name": "华宝中证医疗指数",
        "data": [[1600358400000, 0], [1600617600000, -1.11], [1600704000000, -0.15], [1600790400000, 2.09], [1600876800000, 0.41], [1600963200000, 1.00], [1601222400000, 0.10], [1601308800000, 1.81], [1601395200000, 3.41], [1602172800000, 6.00], [1602432000000, 10.11], [1602518400000, 11.50], [1602604800000, 11.65], [1602691200000, 10.39], [1602777600000, 10.71], [1603036800000, 7.88], [1603123200000, 9.05], [1603209600000, 8.95], [1603296000000, 8.22], [1603382400000, 5.26], [1603641600000, 6.22], [1603728000000, 9.12], [1603814400000, 10.18], [1603900800000, 12.79], [1603987200000, 10.53], [1604246400000, 10.37], [1604332800000, 11.57], [1604419200000, 11.69], [1604505600000, 10.82], [1604592000000, 8.28], [1604851200000, 11.25], [1604937600000, 8.81], [1605024000000, 6.08], [1605110400000, 7.09], [1605196800000, 7.10], [1605456000000, 8.01], [1605542400000, 4.81], [1605628800000, 1.69], [1605715200000, 2.45], [1605801600000, 3.58], [1606060800000, 3.23], [1606147200000, 2.36], [1606233600000, -0.60], [1606320000000, -0.40], [1606406400000, -0.11], [1606665600000, -0.06], [1606752000000, 3.02], [1606838400000, 2.88], [1606924800000, 5.09], [1607011200000, 6.41], [1607270400000, 6.32], [1607356800000, 6.82], [1607443200000, 5.08], [1607529600000, 7.07], [1607616000000, 6.05], [1607875200000, 8.08], [1607961600000, 9.14], [1608048000000, 9.71], [1608134400000, 11.25], [1608220800000, 10.05], [1608480000000, 12.23], [1608566400000, 12.36], [1608652800000, 11.97], [1608739200000, 11.50], [1608825600000, 13.35], [1609084800000, 12.82], [1609171200000, 12.66], [1609257600000, 14.02], [1609344000000, 15.65], [1609689600000, 15.18], [1609776000000, 17.24], [1609862400000, 19.48], [1609948800000, 20.48], [1610035200000, 20.58], [1610294400000, 20.89], [1610380800000, 22.12], [1610467200000, 20.22], [1610553600000, 20.39], [1610640000000, 20.10], [1610899200000, 21.45], [1610985600000, 19.02], [1611072000000, 24.01], [1611158400000, 27.91], [1611244800000, 35.09], [1611504000000, 36.53], [1611590400000, 31.28], [1611676800000, 30.66], [1611763200000, 25.83], [1611849600000, 25.34], [1612108800000, 28.22], [1612195200000, 29.25], [1612281600000, 29.64], [1612368000000, 27.80], [1612454400000, 30.33], [1612713600000, 31.79], [1612800000000, 34.28], [1612886400000, 37.59], [1613577600000, 31.56], [1613664000000, 33.03], [1613923200000, 27.29], [1614009600000, 25.48], [1614096000000, 20.92], [1614182400000, 20.55], [1614268800000, 17.39], [1614528000000, 18.98], [1614614400000, 16.77], [1614700800000, 18.73], [1614787200000, 13.32], [1614873600000, 13.64], [1615132800000, 7.17], [1615219200000, 4.05], [1615305600000, 6.46], [1615392000000, 9.23], [1615478400000, 9.42], [1615737600000, 4.33], [1615824000000, 4.92], [1615910400000, 5.80], [1615996800000, 7.51], [1616083200000, 5.35]]
    }, {
        "name": "同类平均",
        "data": [[1600358400000, 0], [1600617600000, -0.68], [1600704000000, -1.68], [1600790400000, -1.22], [1600876800000, -3.11], [1600963200000, -3.10], [1601222400000, -3.20], [1601308800000, -2.70], [1601395200000, -2.77], [1602172800000, -0.59], [1602432000000, 2.14], [1602518400000, 2.43], [1602604800000, 1.84], [1602691200000, 1.46], [1602777600000, 1.32], [1603036800000, 0.51], [1603123200000, 1.31], [1603209600000, 0.80], [1603296000000, 0.39], [1603382400000, -0.93], [1603641600000, -1.06], [1603728000000, -0.78], [1603814400000, -0.23], [1603900800000, 0.36], [1603987200000, -1.35], [1604246400000, -0.77], [1604332800000, 0.52], [1604419200000, 0.93], [1604505600000, 2.52], [1604592000000, 2.12], [1604851200000, 4.09], [1604937600000, 3.28], [1605024000000, 2.09], [1605110400000, 2.29], [1605196800000, 1.70], [1605456000000, 2.57], [1605542400000, 2.02], [1605628800000, 1.96], [1605715200000, 2.53], [1605801600000, 3.07], [1606060800000, 4.00], [1606147200000, 3.67], [1606233600000, 2.17], [1606320000000, 2.18], [1606406400000, 3.03], [1606665600000, 2.65], [1606752000000, 4.54], [1606838400000, 4.54], [1606924800000, 4.48], [1607011200000, 4.73], [1607270400000, 4.02], [1607356800000, 3.94], [1607443200000, 2.56], [1607529600000, 2.68], [1607616000000, 1.59], [1607875200000, 2.33], [1607961600000, 2.63], [1608048000000, 2.59], [1608134400000, 3.71], [1608220800000, 3.46], [1608480000000, 4.77], [1608566400000, 2.87], [1608652800000, 3.76], [1608739200000, 3.16], [1608825600000, 4.03], [1609084800000, 3.98], [1609171200000, 3.57], [1609257600000, 5.02], [1609344000000, 6.78], [1609689600000, 8.30], [1609776000000, 9.54], [1609862400000, 10.05], [1609948800000, 11.01], [1610035200000, 10.98], [1610294400000, 9.85], [1610380800000, 12.18], [1610467200000, 11.59], [1610553600000, 10.28], [1610640000000, 10.17], [1610899200000, 11.64], [1610985600000, 10.59], [1611072000000, 11.70], [1611158400000, 13.23], [1611244800000, 13.42], [1611504000000, 13.92], [1611590400000, 11.71], [1611676800000, 12.03], [1611763200000, 9.26], [1611849600000, 8.41], [1612108800000, 9.52], [1612195200000, 10.93], [1612281600000, 10.38], [1612368000000, 9.58], [1612454400000, 9.28], [1612713600000, 10.69], [1612800000000, 12.86], [1612886400000, 14.57], [1613577600000, 14.51], [1613664000000, 15.05], [1613923200000, 12.56], [1614009600000, 12.21], [1614096000000, 9.92], [1614182400000, 10.20], [1614268800000, 7.88], [1614528000000, 9.73], [1614614400000, 8.72], [1614700800000, 10.53], [1614787200000, 7.59], [1614873600000, 7.46], [1615132800000, 4.24], [1615219200000, 2.04], [1615305600000, 2.34], [1615392000000, 4.71], [1615478400000, 4.91], [1615737600000, 3.07], [1615824000000, 3.79], [1615910400000, 4.32], [1615996800000, 5.13], [1616083200000, 3.17]]
    }, {
        "name": "沪深300",
        "data": [[1600358400000, 0], [1600617600000, -0.96], [1600704000000, -2.14], [1600790400000, -1.79], [1600876800000, -3.67], [1600963200000, -3.53], [1601222400000, -3.28], [1601308800000, -3.07], [1601395200000, -3.16], [1602172800000, -1.18], [1602432000000, 1.82], [1602518400000, 2.16], [1602604800000, 1.48], [1602691200000, 1.30], [1602777600000, 1.15], [1603036800000, 0.39], [1603123200000, 1.19], [1603209600000, 1.18], [1603296000000, 0.86], [1603382400000, -0.39], [1603641600000, -0.97], [1603728000000, -0.80], [1603814400000, 0.00], [1603900800000, 0.76], [1603987200000, -0.88], [1604246400000, -0.34], [1604332800000, 0.85], [1604419200000, 1.62], [1604505600000, 3.12], [1604592000000, 3.14], [1604851200000, 5.16], [1604937600000, 4.58], [1605024000000, 3.54], [1605110400000, 3.62], [1605196800000, 2.53], [1605456000000, 3.53], [1605542400000, 3.33], [1605628800000, 3.26], [1605715200000, 4.03], [1605801600000, 4.35], [1606060800000, 5.66], [1606147200000, 5.01], [1606233600000, 3.66], [1606320000000, 3.85], [1606406400000, 5.14], [1606665600000, 4.71], [1606752000000, 6.97], [1606838400000, 6.97], [1606924800000, 6.75], [1607011200000, 6.94], [1607270400000, 6.02], [1607356800000, 5.76], [1607443200000, 4.34], [1607529600000, 4.29], [1607616000000, 3.22], [1607875200000, 4.17], [1607961600000, 4.39], [1608048000000, 4.58], [1608134400000, 5.92], [1608220800000, 5.55], [1608480000000, 6.54], [1608566400000, 4.81], [1608652800000, 5.70], [1608739200000, 5.55], [1608825600000, 6.44], [1609084800000, 6.91], [1609171200000, 6.46], [1609257600000, 7.95], [1609344000000, 10.01], [1609689600000, 11.20], [1609776000000, 13.33], [1609862400000, 14.37], [1609948800000, 16.39], [1610035200000, 16.01], [1610294400000, 14.86], [1610380800000, 18.14], [1610467200000, 17.75], [1610553600000, 15.48], [1610640000000, 15.22], [1610899200000, 16.50], [1610985600000, 14.79], [1611072000000, 15.61], [1611158400000, 17.48], [1611244800000, 17.58], [1611504000000, 18.76], [1611590400000, 16.38], [1611676800000, 16.70], [1611763200000, 13.51], [1611849600000, 12.98], [1612108800000, 14.37], [1612195200000, 16.13], [1612281600000, 15.79], [1612368000000, 15.56], [1612454400000, 15.75], [1612713600000, 17.47], [1612800000000, 20.04], [1612886400000, 22.60], [1613577600000, 21.77], [1613664000000, 21.99], [1613923200000, 18.16], [1614009600000, 17.79], [1614096000000, 14.79], [1614182400000, 15.46], [1614268800000, 12.66], [1614528000000, 14.39], [1614614400000, 12.93], [1614700800000, 15.10], [1614787200000, 11.48], [1614873600000, 11.10], [1615132800000, 7.24], [1615219200000, 4.94], [1615305600000, 5.63], [1615392000000, 8.26], [1615478400000, 8.64], [1615737600000, 6.30], [1615824000000, 7.23], [1615910400000, 7.68], [1615996800000, 8.54], [1616083200000, 5.70]]
    }];
/*同类排名走势*/
var Data_rateInSimilarType =
    [
        {"x": 1440086400000, "y": 338, "sc": "340"}, {
        "x": 1440345600000,
        "y": 336,
        "sc": "340"
    }, {"x": 1440432000000, "y": 336, "sc": "341"}, {"x": 1440518400000, "y": 336, "sc": "341"}, {
        "x": 1440604800000,
        "y": 340,
        "sc": "345"
    }, {"x": 1440691200000, "y": 341, "sc": "345"}, {"x": 1440950400000, "y": 346, "sc": "350"}, {
        "x": 1441036800000,
        "y": 345,
        "sc": "350"
    }, {"x": 1441123200000, "y": 345, "sc": "350"}, {"x": 1441555200000, "y": 352, "sc": "357"}, {
        "x": 1441641600000,
        "y": 352,
        "sc": "357"
    }, {"x": 1441728000000, "y": 357, "sc": "362"}, {"x": 1441814400000, "y": 358, "sc": "363"}, {
        "x": 1441900800000,
        "y": 358,
        "sc": "363"
    }, {"x": 1442160000000, "y": 358, "sc": "363"}, {"x": 1442246400000, "y": 357, "sc": "366"}, {
        "x": 1442332800000,
        "y": 364,
        "sc": "369"
    }, {"x": 1442419200000, "y": 364, "sc": "369"}, {"x": 1442505600000, "y": 362, "sc": "369"}, {
        "x": 1442764800000,
        "y": 364,
        "sc": "372"
    }, {"x": 1442851200000, "y": 364, "sc": "372"}, {"x": 1442937600000, "y": 364, "sc": "372"}, {
        "x": 1443024000000,
        "y": 364,
        "sc": "374"
    }, {"x": 1443110400000, "y": 365, "sc": "378"}, {"x": 1443369600000, "y": 369, "sc": "384"}, {
        "x": 1443456000000,
        "y": 365,
        "sc": "387"
    }, {"x": 1443542400000, "y": 378, "sc": "397"}, {"x": 1444233600000, "y": 378, "sc": "412"}, {
        "x": 1444320000000,
        "y": 356,
        "sc": "416"
    }, {"x": 1444579200000, "y": 350, "sc": "416"}, {"x": 1444665600000, "y": 386, "sc": "416"}, {
        "x": 1444752000000,
        "y": 397,
        "sc": "415"
    }, {"x": 1444838400000, "y": 372, "sc": "415"}, {"x": 1444924800000, "y": 399, "sc": "423"}, {
        "x": 1445184000000,
        "y": 411,
        "sc": "424"
    }, {"x": 1445270400000, "y": 415, "sc": "424"}, {"x": 1445356800000, "y": 412, "sc": "424"}, {
        "x": 1445443200000,
        "y": 407,
        "sc": "424"
    }, {"x": 1445529600000, "y": 392, "sc": "425"}, {"x": 1445788800000, "y": 405, "sc": "425"}, {
        "x": 1445875200000,
        "y": 397,
        "sc": "425"
    }, {"x": 1445961600000, "y": 387, "sc": "425"}, {"x": 1446048000000, "y": 398, "sc": "433"}, {
        "x": 1446134400000,
        "y": 321,
        "sc": "433"
    }, {"x": 1446393600000, "y": 317, "sc": "436"}, {"x": 1446480000000, "y": 122, "sc": "436"}, {
        "x": 1446566400000,
        "y": 159,
        "sc": "436"
    }, {"x": 1446652800000, "y": 320, "sc": "436"}, {"x": 1446739200000, "y": 310, "sc": "440"}, {
        "x": 1446998400000,
        "y": 367,
        "sc": "440"
    }, {"x": 1447084800000, "y": 385, "sc": "440"}, {"x": 1447171200000, "y": 290, "sc": "440"}, {
        "x": 1447257600000,
        "y": 231,
        "sc": "440"
    }, {"x": 1447344000000, "y": 345, "sc": "446"}, {"x": 1447603200000, "y": 337, "sc": "447"}, {
        "x": 1447689600000,
        "y": 345,
        "sc": "449"
    }, {"x": 1447776000000, "y": 372, "sc": "451"}, {"x": 1447862400000, "y": 370, "sc": "451"}, {
        "x": 1447948800000,
        "y": 386,
        "sc": "452"
    }, {"x": 1448208000000, "y": 375, "sc": "452"}, {"x": 1448294400000, "y": 330, "sc": "452"}, {
        "x": 1448380800000,
        "y": 130,
        "sc": "453"
    }, {"x": 1448467200000, "y": 91, "sc": "454"}, {"x": 1448553600000, "y": 95, "sc": "456"}, {
        "x": 1448812800000,
        "y": 80,
        "sc": "456"
    }, {"x": 1448899200000, "y": 60, "sc": "456"}, {"x": 1448985600000, "y": 87, "sc": "456"}, {
        "x": 1449072000000,
        "y": 82,
        "sc": "456"
    }, {"x": 1449158400000, "y": 78, "sc": "456"}, {"x": 1449417600000, "y": 87, "sc": "456"}, {
        "x": 1449504000000,
        "y": 112,
        "sc": "454"
    }, {"x": 1449590400000, "y": 137, "sc": "454"}, {"x": 1449676800000, "y": 130, "sc": "454"}, {
        "x": 1449763200000,
        "y": 160,
        "sc": "454"
    }, {"x": 1450022400000, "y": 166, "sc": "454"}, {"x": 1450108800000, "y": 163, "sc": "460"}, {
        "x": 1450195200000,
        "y": 157,
        "sc": "460"
    }, {"x": 1450281600000, "y": 172, "sc": "460"}, {"x": 1450368000000, "y": 173, "sc": "460"}, {
        "x": 1450627200000,
        "y": 213,
        "sc": "460"
    }, {"x": 1450713600000, "y": 198, "sc": "460"}, {"x": 1450800000000, "y": 247, "sc": "460"}, {
        "x": 1450886400000,
        "y": 236,
        "sc": "460"
    }, {"x": 1450972800000, "y": 227, "sc": "460"}, {"x": 1451232000000, "y": 263, "sc": "460"}, {
        "x": 1451318400000,
        "y": 280,
        "sc": "460"
    }, {"x": 1451404800000, "y": 245, "sc": "461"}, {"x": 1451491200000, "y": 275, "sc": "461"}, {
        "x": 1451836800000,
        "y": 340,
        "sc": "461"
    }, {"x": 1451923200000, "y": 398, "sc": "461"}, {"x": 1452009600000, "y": 400, "sc": "461"}, {
        "x": 1452096000000,
        "y": 434,
        "sc": "461"
    }, {"x": 1452182400000, "y": 447, "sc": "461"}, {"x": 1452441600000, "y": 450, "sc": "461"}, {
        "x": 1452528000000,
        "y": 448,
        "sc": "461"
    }, {"x": 1452614400000, "y": 451, "sc": "461"}, {"x": 1452700800000, "y": 448, "sc": "461"}, {
        "x": 1452787200000,
        "y": 440,
        "sc": "461"
    }, {"x": 1453046400000, "y": 433, "sc": "461"}, {"x": 1453132800000, "y": 429, "sc": "461"}, {
        "x": 1453219200000,
        "y": 434,
        "sc": "461"
    }, {"x": 1453305600000, "y": 438, "sc": "461"}, {"x": 1453392000000, "y": 455, "sc": "461"}, {
        "x": 1453651200000,
        "y": 456,
        "sc": "461"
    }, {"x": 1453737600000, "y": 452, "sc": "461"}, {"x": 1453824000000, "y": 454, "sc": "461"}, {
        "x": 1453910400000,
        "y": 451,
        "sc": "461"
    }, {"x": 1453996800000, "y": 453, "sc": "461"}, {"x": 1454256000000, "y": 447, "sc": "461"}, {
        "x": 1454342400000,
        "y": 442,
        "sc": "461"
    }, {"x": 1454428800000, "y": 440, "sc": "461"}, {"x": 1454515200000, "y": 445, "sc": "461"}, {
        "x": 1454601600000,
        "y": 438,
        "sc": "461"
    }, {"x": 1455465600000, "y": 429, "sc": "461"}, {"x": 1455552000000, "y": 431, "sc": "462"}, {
        "x": 1455638400000,
        "y": 436,
        "sc": "462"
    }, {"x": 1455724800000, "y": 434, "sc": "462"}, {"x": 1455811200000, "y": 435, "sc": "462"}, {
        "x": 1456070400000,
        "y": 444,
        "sc": "462"
    }, {"x": 1456156800000, "y": 447, "sc": "463"}, {"x": 1456243200000, "y": 443, "sc": "463"}, {
        "x": 1456329600000,
        "y": 451,
        "sc": "463"
    }, {"x": 1456416000000, "y": 451, "sc": "463"}, {"x": 1456675200000, "y": 452, "sc": "464"}, {
        "x": 1456761600000,
        "y": 457,
        "sc": "464"
    }, {"x": 1456848000000, "y": 457, "sc": "464"}, {"x": 1456934400000, "y": 457, "sc": "464"}, {
        "x": 1457020800000,
        "y": 454,
        "sc": "464"
    }, {"x": 1457280000000, "y": 455, "sc": "464"}, {"x": 1457366400000, "y": 455, "sc": "464"}, {
        "x": 1457452800000,
        "y": 449,
        "sc": "464"
    }, {"x": 1457539200000, "y": 449, "sc": "464"}, {"x": 1457625600000, "y": 446, "sc": "464"}, {
        "x": 1457884800000,
        "y": 449,
        "sc": "464"
    }, {"x": 1457971200000, "y": 448, "sc": "464"}, {"x": 1458057600000, "y": 449, "sc": "464"}, {
        "x": 1458144000000,
        "y": 451,
        "sc": "464"
    }, {"x": 1458230400000, "y": 455, "sc": "464"}, {"x": 1458489600000, "y": 458, "sc": "464"}, {
        "x": 1458576000000,
        "y": 456,
        "sc": "464"
    }, {"x": 1458662400000, "y": 456, "sc": "465"}, {"x": 1458748800000, "y": 457, "sc": "465"}, {
        "x": 1458835200000,
        "y": 456,
        "sc": "465"
    }, {"x": 1459094400000, "y": 457, "sc": "465"}, {"x": 1459180800000, "y": 454, "sc": "463"}, {
        "x": 1459267200000,
        "y": 455,
        "sc": "463"
    }, {"x": 1459353600000, "y": 459, "sc": "467"}, {"x": 1459440000000, "y": 461, "sc": "467"}, {
        "x": 1459785600000,
        "y": 456,
        "sc": "467"
    }, {"x": 1459872000000, "y": 453, "sc": "467"}, {"x": 1459958400000, "y": 443, "sc": "467"}, {
        "x": 1460044800000,
        "y": 423,
        "sc": "467"
    }, {"x": 1460304000000, "y": 131, "sc": "467"}, {"x": 1460390400000, "y": 183, "sc": "467"}, {
        "x": 1460476800000,
        "y": 137,
        "sc": "467"
    }, {"x": 1460563200000, "y": 280, "sc": "467"}, {"x": 1460649600000, "y": 358, "sc": "467"}, {
        "x": 1460908800000,
        "y": 457,
        "sc": "467"
    }, {"x": 1460995200000, "y": 454, "sc": "467"}, {"x": 1461081600000, "y": 464, "sc": "467"}, {
        "x": 1461168000000,
        "y": 464,
        "sc": "469"
    }, {"x": 1461254400000, "y": 445, "sc": "469"}, {"x": 1461513600000, "y": 446, "sc": "469"}, {
        "x": 1461600000000,
        "y": 396,
        "sc": "470"
    }, {"x": 1461686400000, "y": 386, "sc": "469"}, {"x": 1461772800000, "y": 266, "sc": "469"}, {
        "x": 1461859200000,
        "y": 408,
        "sc": "469"
    }, {"x": 1462204800000, "y": 441, "sc": "470"}, {"x": 1462291200000, "y": 450, "sc": "470"}, {
        "x": 1462377600000,
        "y": 443,
        "sc": "470"
    }, {"x": 1462464000000, "y": 457, "sc": "470"}, {"x": 1462723200000, "y": 461, "sc": "469"}, {
        "x": 1462809600000,
        "y": 464,
        "sc": "469"
    }, {"x": 1462896000000, "y": 451, "sc": "469"}, {"x": 1462982400000, "y": 449, "sc": "469"}, {
        "x": 1463068800000,
        "y": 451,
        "sc": "469"
    }, {"x": 1463328000000, "y": 453, "sc": "470"}, {"x": 1463414400000, "y": 366, "sc": "470"}, {
        "x": 1463500800000,
        "y": 379,
        "sc": "470"
    }, {"x": 1463587200000, "y": 395, "sc": "470"}, {"x": 1463673600000, "y": 393, "sc": "470"}, {
        "x": 1463932800000,
        "y": 387,
        "sc": "470"
    }, {"x": 1464019200000, "y": 409, "sc": "470"}, {"x": 1464105600000, "y": 368, "sc": "470"}, {
        "x": 1464192000000,
        "y": 207,
        "sc": "470"
    }, {"x": 1464278400000, "y": 250, "sc": "470"}, {"x": 1464537600000, "y": 84, "sc": "470"}, {
        "x": 1464624000000,
        "y": 96,
        "sc": "470"
    }, {"x": 1464710400000, "y": 96, "sc": "470"}, {"x": 1464796800000, "y": 70, "sc": "470"}, {
        "x": 1464883200000,
        "y": 72,
        "sc": "470"
    }, {"x": 1465142400000, "y": 54, "sc": "470"}, {"x": 1465228800000, "y": 60, "sc": "470"}, {
        "x": 1465315200000,
        "y": 71,
        "sc": "470"
    }, {"x": 1465747200000, "y": 90, "sc": "470"}, {"x": 1465833600000, "y": 118, "sc": "470"}, {
        "x": 1465920000000,
        "y": 105,
        "sc": "468"
    }, {"x": 1466006400000, "y": 103, "sc": "468"}, {"x": 1466092800000, "y": 70, "sc": "468"}, {
        "x": 1466352000000,
        "y": 96,
        "sc": "468"
    }, {"x": 1466438400000, "y": 123, "sc": "468"}, {"x": 1466524800000, "y": 134, "sc": "468"}, {
        "x": 1466611200000,
        "y": 118,
        "sc": "467"
    }, {"x": 1466697600000, "y": 118, "sc": "467"}, {"x": 1466956800000, "y": 97, "sc": "467"}, {
        "x": 1467043200000,
        "y": 72,
        "sc": "467"
    }, {"x": 1467129600000, "y": 69, "sc": "467"}, {"x": 1467216000000, "y": 75, "sc": "467"}, {
        "x": 1467302400000,
        "y": 73,
        "sc": "467"
    }, {"x": 1467561600000, "y": 87, "sc": "467"}, {"x": 1467648000000, "y": 142, "sc": "467"}, {
        "x": 1467734400000,
        "y": 157,
        "sc": "467"
    }, {"x": 1467820800000, "y": 96, "sc": "467"}, {"x": 1467907200000, "y": 81, "sc": "467"}, {
        "x": 1468166400000,
        "y": 384,
        "sc": "467"
    }, {"x": 1468252800000, "y": 410, "sc": "467"}, {"x": 1468339200000, "y": 415, "sc": "468"}, {
        "x": 1468425600000,
        "y": 396,
        "sc": "468"
    }, {"x": 1468512000000, "y": 412, "sc": "468"}, {"x": 1468771200000, "y": 344, "sc": "468"}, {
        "x": 1468857600000,
        "y": 318,
        "sc": "468"
    }, {"x": 1468944000000, "y": 84, "sc": "468"}, {"x": 1469030400000, "y": 83, "sc": "469"}, {
        "x": 1469116800000,
        "y": 126,
        "sc": "469"
    }, {"x": 1469376000000, "y": 141, "sc": "469"}, {"x": 1469462400000, "y": 166, "sc": "469"}, {
        "x": 1469548800000,
        "y": 293,
        "sc": "469"
    }, {"x": 1469635200000, "y": 343, "sc": "469"}, {"x": 1469721600000, "y": 286, "sc": "469"}, {
        "x": 1469980800000,
        "y": 321,
        "sc": "469"
    }, {"x": 1470067200000, "y": 312, "sc": "469"}, {"x": 1470153600000, "y": 303, "sc": "469"}, {
        "x": 1470240000000,
        "y": 299,
        "sc": "469"
    }, {"x": 1470326400000, "y": 368, "sc": "469"}, {"x": 1470585600000, "y": 315, "sc": "469"}, {
        "x": 1470672000000,
        "y": 166,
        "sc": "469"
    }, {"x": 1470758400000, "y": 142, "sc": "469"}, {"x": 1470844800000, "y": 146, "sc": "470"}, {
        "x": 1470931200000,
        "y": 147,
        "sc": "470"
    }, {"x": 1471190400000, "y": 169, "sc": "471"}, {"x": 1471276800000, "y": 119, "sc": "471"}, {
        "x": 1471363200000,
        "y": 363,
        "sc": "471"
    }, {"x": 1471449600000, "y": 209, "sc": "471"}, {"x": 1471536000000, "y": 226, "sc": "471"}, {
        "x": 1471795200000,
        "y": 241,
        "sc": "473"
    }, {"x": 1471881600000, "y": 273, "sc": "473"}, {"x": 1471968000000, "y": 185, "sc": "473"}, {
        "x": 1472054400000,
        "y": 169,
        "sc": "473"
    }, {"x": 1472140800000, "y": 152, "sc": "474"}, {"x": 1472400000000, "y": 97, "sc": "476"}, {
        "x": 1472486400000,
        "y": 120,
        "sc": "476"
    }, {"x": 1472572800000, "y": 155, "sc": "476"}, {"x": 1472659200000, "y": 183, "sc": "476"}, {
        "x": 1472745600000,
        "y": 292,
        "sc": "476"
    }, {"x": 1473004800000, "y": 339, "sc": "476"}, {"x": 1473091200000, "y": 288, "sc": "476"}, {
        "x": 1473177600000,
        "y": 192,
        "sc": "476"
    }, {"x": 1473264000000, "y": 160, "sc": "476"}, {"x": 1473350400000, "y": 227, "sc": "476"}, {
        "x": 1473609600000,
        "y": 330,
        "sc": "476"
    }, {"x": 1473696000000, "y": 166, "sc": "476"}, {"x": 1473782400000, "y": 139, "sc": "476"}, {
        "x": 1474214400000,
        "y": 302,
        "sc": "477"
    }, {"x": 1474300800000, "y": 292, "sc": "477"}, {"x": 1474387200000, "y": 231, "sc": "476"}, {
        "x": 1474473600000,
        "y": 314,
        "sc": "476"
    }, {"x": 1474560000000, "y": 304, "sc": "476"}, {"x": 1474819200000, "y": 295, "sc": "476"}, {
        "x": 1474905600000,
        "y": 305,
        "sc": "476"
    }, {"x": 1474992000000, "y": 340, "sc": "476"}, {"x": 1475078400000, "y": 330, "sc": "476"}, {
        "x": 1475164800000,
        "y": 337,
        "sc": "477"
    }, {"x": 1476028800000, "y": 345, "sc": "488"}, {"x": 1476115200000, "y": 304, "sc": "488"}, {
        "x": 1476201600000,
        "y": 295,
        "sc": "488"
    }, {"x": 1476288000000, "y": 283, "sc": "488"}, {"x": 1476374400000, "y": 281, "sc": "488"}, {
        "x": 1476633600000,
        "y": 183,
        "sc": "487"
    }, {"x": 1476720000000, "y": 246, "sc": "487"}, {"x": 1476806400000, "y": 296, "sc": "487"}, {
        "x": 1476892800000,
        "y": 342,
        "sc": "487"
    }, {"x": 1476979200000, "y": 345, "sc": "487"}, {"x": 1477238400000, "y": 367, "sc": "489"}, {
        "x": 1477324800000,
        "y": 381,
        "sc": "489"
    }, {"x": 1477411200000, "y": 380, "sc": "491"}, {"x": 1477497600000, "y": 253, "sc": "491"}, {
        "x": 1477584000000,
        "y": 282,
        "sc": "492"
    }, {"x": 1477843200000, "y": 305, "sc": "492"}, {"x": 1477929600000, "y": 262, "sc": "492"}, {
        "x": 1478016000000,
        "y": 298,
        "sc": "492"
    }, {"x": 1478102400000, "y": 358, "sc": "492"}, {"x": 1478188800000, "y": 343, "sc": "492"}, {
        "x": 1478448000000,
        "y": 331,
        "sc": "493"
    }, {"x": 1478534400000, "y": 334, "sc": "493"}, {"x": 1478620800000, "y": 368, "sc": "493"}, {
        "x": 1478707200000,
        "y": 381,
        "sc": "493"
    }, {"x": 1478793600000, "y": 383, "sc": "493"}, {"x": 1479052800000, "y": 382, "sc": "493"}, {
        "x": 1479139200000,
        "y": 380,
        "sc": "493"
    }, {"x": 1479225600000, "y": 413, "sc": "493"}, {"x": 1479312000000, "y": 393, "sc": "494"}, {
        "x": 1479398400000,
        "y": 382,
        "sc": "494"
    }, {"x": 1479657600000, "y": 380, "sc": "494"}, {"x": 1479744000000, "y": 391, "sc": "494"}, {
        "x": 1479830400000,
        "y": 420,
        "sc": "494"
    }, {"x": 1479916800000, "y": 424, "sc": "494"}, {"x": 1480003200000, "y": 430, "sc": "494"}, {
        "x": 1480262400000,
        "y": 423,
        "sc": "494"
    }, {"x": 1480348800000, "y": 446, "sc": "494"}, {"x": 1480435200000, "y": 428, "sc": "496"}, {
        "x": 1480521600000,
        "y": 403,
        "sc": "496"
    }, {"x": 1480608000000, "y": 404, "sc": "496"}, {"x": 1480867200000, "y": 380, "sc": "496"}, {
        "x": 1480953600000,
        "y": 395,
        "sc": "496"
    }, {"x": 1481040000000, "y": 419, "sc": "496"}, {"x": 1481126400000, "y": 413, "sc": "496"}, {
        "x": 1481212800000,
        "y": 395,
        "sc": "496"
    }, {"x": 1481472000000, "y": 413, "sc": "496"}, {"x": 1481558400000, "y": 424, "sc": "496"}, {
        "x": 1481644800000,
        "y": 427,
        "sc": "496"
    }, {"x": 1481731200000, "y": 428, "sc": "496"}, {"x": 1481817600000, "y": 430, "sc": "496"}, {
        "x": 1482076800000,
        "y": 436,
        "sc": "497"
    }, {"x": 1482163200000, "y": 435, "sc": "497"}, {"x": 1482249600000, "y": 436, "sc": "497"}, {
        "x": 1482336000000,
        "y": 426,
        "sc": "497"
    }, {"x": 1482422400000, "y": 430, "sc": "497"}, {"x": 1482681600000, "y": 442, "sc": "500"}, {
        "x": 1482768000000,
        "y": 453,
        "sc": "500"
    }, {"x": 1482854400000, "y": 450, "sc": "500"}, {"x": 1482940800000, "y": 453, "sc": "502"}, {
        "x": 1483027200000,
        "y": 456,
        "sc": "502"
    }, {"x": 1483372800000, "y": 458, "sc": "502"}, {"x": 1483459200000, "y": 461, "sc": "502"}, {
        "x": 1483545600000,
        "y": 465,
        "sc": "502"
    }, {"x": 1483632000000, "y": 463, "sc": "502"}, {"x": 1483891200000, "y": 467, "sc": "502"}, {
        "x": 1483977600000,
        "y": 480,
        "sc": "503"
    }, {"x": 1484064000000, "y": 477, "sc": "503"}, {"x": 1484150400000, "y": 481, "sc": "505"}, {
        "x": 1484236800000,
        "y": 482,
        "sc": "505"
    }, {"x": 1484496000000, "y": 489, "sc": "505"}, {"x": 1484582400000, "y": 498, "sc": "505"}, {
        "x": 1484668800000,
        "y": 494,
        "sc": "505"
    }, {"x": 1484755200000, "y": 494, "sc": "505"}, {"x": 1484841600000, "y": 494, "sc": "505"}, {
        "x": 1485100800000,
        "y": 494,
        "sc": "505"
    }, {"x": 1485187200000, "y": 488, "sc": "505"}, {"x": 1485273600000, "y": 485, "sc": "504"}, {
        "x": 1485360000000,
        "y": 489,
        "sc": "504"
    }, {"x": 1486051200000, "y": 488, "sc": "506"}, {"x": 1486310400000, "y": 492, "sc": "506"}, {
        "x": 1486396800000,
        "y": 487,
        "sc": "506"
    }, {"x": 1486483200000, "y": 487, "sc": "506"}, {"x": 1486569600000, "y": 487, "sc": "506"}, {
        "x": 1486656000000,
        "y": 488,
        "sc": "507"
    }, {"x": 1486915200000, "y": 488, "sc": "509"}, {"x": 1487001600000, "y": 489, "sc": "509"}, {
        "x": 1487088000000,
        "y": 484,
        "sc": "509"
    }, {"x": 1487174400000, "y": 485, "sc": "509"}, {"x": 1487260800000, "y": 490, "sc": "509"}, {
        "x": 1487520000000,
        "y": 493,
        "sc": "509"
    }, {"x": 1487606400000, "y": 496, "sc": "509"}, {"x": 1487692800000, "y": 492, "sc": "509"}, {
        "x": 1487779200000,
        "y": 494,
        "sc": "511"
    }, {"x": 1487865600000, "y": 486, "sc": "511"}, {"x": 1488124800000, "y": 493, "sc": "511"}, {
        "x": 1488211200000,
        "y": 503,
        "sc": "514"
    }, {"x": 1488297600000, "y": 507, "sc": "514"}, {"x": 1488384000000, "y": 510, "sc": "514"}, {
        "x": 1488470400000,
        "y": 509,
        "sc": "514"
    }, {"x": 1488729600000, "y": 511, "sc": "514"}, {"x": 1488816000000, "y": 511, "sc": "514"}, {
        "x": 1488902400000,
        "y": 512,
        "sc": "514"
    }, {"x": 1488988800000, "y": 513, "sc": "515"}, {"x": 1489075200000, "y": 514, "sc": "515"}, {
        "x": 1489334400000,
        "y": 510,
        "sc": "515"
    }, {"x": 1489420800000, "y": 512, "sc": "515"}, {"x": 1489507200000, "y": 515, "sc": "516"}, {
        "x": 1489593600000,
        "y": 514,
        "sc": "516"
    }, {"x": 1489680000000, "y": 513, "sc": "516"}, {"x": 1489939200000, "y": 515, "sc": "517"}, {
        "x": 1490025600000,
        "y": 516,
        "sc": "517"
    }, {"x": 1490112000000, "y": 521, "sc": "523"}, {"x": 1490198400000, "y": 522, "sc": "523"}, {
        "x": 1490284800000,
        "y": 523,
        "sc": "523"
    }, {"x": 1490544000000, "y": 521, "sc": "523"}, {"x": 1490630400000, "y": 521, "sc": "523"}, {
        "x": 1490716800000,
        "y": 523,
        "sc": "526"
    }, {"x": 1490803200000, "y": 519, "sc": "523"}, {"x": 1490889600000, "y": 519, "sc": "523"}, {
        "x": 1491321600000,
        "y": 523,
        "sc": "526"
    }, {"x": 1491408000000, "y": 523, "sc": "526"}, {"x": 1491494400000, "y": 523, "sc": "526"}, {
        "x": 1491753600000,
        "y": 519,
        "sc": "527"
    }, {"x": 1491840000000, "y": 520, "sc": "527"}, {"x": 1491926400000, "y": 519, "sc": "527"}, {
        "x": 1492012800000,
        "y": 501,
        "sc": "527"
    }, {"x": 1492099200000, "y": 499, "sc": "524"}, {"x": 1492358400000, "y": 456, "sc": "524"}, {
        "x": 1492444800000,
        "y": 449,
        "sc": "529"
    }, {"x": 1492531200000, "y": 464, "sc": "529"}, {"x": 1492617600000, "y": 477, "sc": "529"}, {
        "x": 1492704000000,
        "y": 465,
        "sc": "529"
    }, {"x": 1492963200000, "y": 461, "sc": "529"}, {"x": 1493049600000, "y": 471, "sc": "533"}, {
        "x": 1493136000000,
        "y": 472,
        "sc": "533"
    }, {"x": 1493222400000, "y": 459, "sc": "533"}, {"x": 1493308800000, "y": 455, "sc": "533"}, {
        "x": 1493654400000,
        "y": 452,
        "sc": "533"
    }, {"x": 1493740800000, "y": 452, "sc": "530"}, {"x": 1493827200000, "y": 453, "sc": "533"}, {
        "x": 1493913600000,
        "y": 460,
        "sc": "533"
    }, {"x": 1494172800000, "y": 469, "sc": "533"}, {"x": 1494259200000, "y": 468, "sc": "532"}, {
        "x": 1494345600000,
        "y": 461,
        "sc": "534"
    }, {"x": 1494432000000, "y": 475, "sc": "534"}, {"x": 1494518400000, "y": 483, "sc": "534"}, {
        "x": 1494777600000,
        "y": 491,
        "sc": "534"
    }, {"x": 1494864000000, "y": 462, "sc": "534"}, {"x": 1494950400000, "y": 462, "sc": "534"}, {
        "x": 1495036800000,
        "y": 467,
        "sc": "534"
    }, {"x": 1495123200000, "y": 458, "sc": "534"}, {"x": 1495382400000, "y": 433, "sc": "534"}, {
        "x": 1495468800000,
        "y": 459,
        "sc": "541"
    }, {"x": 1495555200000, "y": 455, "sc": "541"}, {"x": 1495641600000, "y": 470, "sc": "538"}, {
        "x": 1495728000000,
        "y": 471,
        "sc": "538"
    }, {"x": 1496160000000, "y": 474, "sc": "541"}, {"x": 1496246400000, "y": 481, "sc": "541"}, {
        "x": 1496332800000,
        "y": 480,
        "sc": "541"
    }, {"x": 1496592000000, "y": 489, "sc": "544"}, {"x": 1496678400000, "y": 492, "sc": "544"}, {
        "x": 1496764800000,
        "y": 493,
        "sc": "544"
    }, {"x": 1496851200000, "y": 501, "sc": "546"}, {"x": 1496937600000, "y": 506, "sc": "546"}, {
        "x": 1497196800000,
        "y": 499,
        "sc": "547"
    }, {"x": 1497283200000, "y": 502, "sc": "549"}, {"x": 1497369600000, "y": 502, "sc": "548"}, {
        "x": 1497456000000,
        "y": 488,
        "sc": "548"
    }, {"x": 1497542400000, "y": 496, "sc": "551"}, {"x": 1497801600000, "y": 512, "sc": "551"}, {
        "x": 1497888000000,
        "y": 515,
        "sc": "551"
    }, {"x": 1497974400000, "y": 509, "sc": "552"}, {"x": 1498060800000, "y": 520, "sc": "552"}, {
        "x": 1498147200000,
        "y": 512,
        "sc": "552"
    }, {"x": 1498406400000, "y": 513, "sc": "552"}, {"x": 1498492800000, "y": 508, "sc": "552"}, {
        "x": 1498579200000,
        "y": 508,
        "sc": "552"
    }, {"x": 1498665600000, "y": 501, "sc": "552"}, {"x": 1498752000000, "y": 496, "sc": "552"}, {
        "x": 1499011200000,
        "y": 494,
        "sc": "554"
    }, {"x": 1499097600000, "y": 504, "sc": "554"}, {"x": 1499184000000, "y": 489, "sc": "554"}, {
        "x": 1499270400000,
        "y": 498,
        "sc": "554"
    }, {"x": 1499356800000, "y": 504, "sc": "554"}, {"x": 1499616000000, "y": 502, "sc": "555"}, {
        "x": 1499702400000,
        "y": 450,
        "sc": "556"
    }, {"x": 1499788800000, "y": 474, "sc": "556"}, {"x": 1499875200000, "y": 427, "sc": "556"}, {
        "x": 1499961600000,
        "y": 478,
        "sc": "557"
    }, {"x": 1500220800000, "y": 497, "sc": "557"}, {"x": 1500307200000, "y": 522, "sc": "557"}, {
        "x": 1500393600000,
        "y": 520,
        "sc": "557"
    }, {"x": 1500480000000, "y": 514, "sc": "558"}, {"x": 1500566400000, "y": 533, "sc": "558"}, {
        "x": 1500825600000,
        "y": 534,
        "sc": "558"
    }, {"x": 1500912000000, "y": 536, "sc": "559"}, {"x": 1500998400000, "y": 539, "sc": "559"}, {
        "x": 1501084800000,
        "y": 543,
        "sc": "563"
    }, {"x": 1501171200000, "y": 543, "sc": "563"}, {"x": 1501430400000, "y": 543, "sc": "563"}, {
        "x": 1501516800000,
        "y": 543,
        "sc": "563"
    }, {"x": 1501603200000, "y": 544, "sc": "564"}, {"x": 1501689600000, "y": 544, "sc": "564"}, {
        "x": 1501776000000,
        "y": 556,
        "sc": "565"
    }, {"x": 1502035200000, "y": 558, "sc": "565"}, {"x": 1502121600000, "y": 560, "sc": "566"}, {
        "x": 1502208000000,
        "y": 559,
        "sc": "566"
    }, {"x": 1502294400000, "y": 562, "sc": "568"}, {"x": 1502380800000, "y": 557, "sc": "568"}, {
        "x": 1502640000000,
        "y": 558,
        "sc": "568"
    }, {"x": 1502726400000, "y": 560, "sc": "568"}, {"x": 1502812800000, "y": 564, "sc": "568"}, {
        "x": 1502899200000,
        "y": 565,
        "sc": "570"
    }, {"x": 1502985600000, "y": 569, "sc": "574"}, {"x": 1503244800000, "y": 570, "sc": "574"}, {
        "x": 1503331200000,
        "y": 571,
        "sc": "574"
    }, {"x": 1503417600000, "y": 554, "sc": "572"}, {"x": 1503504000000, "y": 574, "sc": "574"}, {
        "x": 1503590400000,
        "y": 575,
        "sc": "575"
    }, {"x": 1503849600000, "y": 575, "sc": "575"}, {"x": 1503936000000, "y": 575, "sc": "575"}, {
        "x": 1504022400000,
        "y": 561,
        "sc": "575"
    }, {"x": 1504108800000, "y": 546, "sc": "575"}, {"x": 1504195200000, "y": 512, "sc": "576"}, {
        "x": 1504454400000,
        "y": 529,
        "sc": "581"
    }, {"x": 1504540800000, "y": 526, "sc": "581"}, {"x": 1504627200000, "y": 519, "sc": "582"}, {
        "x": 1504713600000,
        "y": 546,
        "sc": "583"
    }, {"x": 1504800000000, "y": 518, "sc": "583"}, {"x": 1505059200000, "y": 536, "sc": "583"}, {
        "x": 1505145600000,
        "y": 516,
        "sc": "583"
    }, {"x": 1505232000000, "y": 557, "sc": "586"}, {"x": 1505318400000, "y": 548, "sc": "586"}, {
        "x": 1505404800000,
        "y": 578,
        "sc": "586"
    }, {"x": 1505664000000, "y": 569, "sc": "586"}, {"x": 1505750400000, "y": 554, "sc": "586"}, {
        "x": 1505836800000,
        "y": 538,
        "sc": "586"
    }, {"x": 1505923200000, "y": 563, "sc": "586"}, {"x": 1506009600000, "y": 544, "sc": "586"}, {
        "x": 1506268800000,
        "y": 554,
        "sc": "586"
    }, {"x": 1506355200000, "y": 569, "sc": "586"}, {"x": 1506441600000, "y": 572, "sc": "586"}, {
        "x": 1506528000000,
        "y": 574,
        "sc": "584"
    }, {"x": 1506614400000, "y": 576, "sc": "587"}, {"x": 1507478400000, "y": 585, "sc": "595"}, {
        "x": 1507564800000,
        "y": 400,
        "sc": "595"
    }, {"x": 1507651200000, "y": 453, "sc": "595"}, {"x": 1507737600000, "y": 388, "sc": "595"}, {
        "x": 1507824000000,
        "y": 368,
        "sc": "595"
    }, {"x": 1508083200000, "y": 422, "sc": "597"}, {"x": 1508169600000, "y": 237, "sc": "597"}, {
        "x": 1508256000000,
        "y": 142,
        "sc": "598"
    }, {"x": 1508342400000, "y": 55, "sc": "598"}, {"x": 1508428800000, "y": 86, "sc": "598"}, {
        "x": 1508688000000,
        "y": 59,
        "sc": "599"
    }, {"x": 1508774400000, "y": 97, "sc": "599"}, {"x": 1508860800000, "y": 84, "sc": "599"}, {
        "x": 1508947200000,
        "y": 96,
        "sc": "599"
    }, {"x": 1509033600000, "y": 160, "sc": "600"}, {"x": 1509292800000, "y": 188, "sc": "600"}, {
        "x": 1509379200000,
        "y": 159,
        "sc": "602"
    }, {"x": 1509465600000, "y": 163, "sc": "602"}, {"x": 1509552000000, "y": 129, "sc": "603"}, {
        "x": 1509638400000,
        "y": 221,
        "sc": "606"
    }, {"x": 1509897600000, "y": 163, "sc": "604"}, {"x": 1509984000000, "y": 143, "sc": "604"}, {
        "x": 1510070400000,
        "y": 220,
        "sc": "604"
    }, {"x": 1510156800000, "y": 285, "sc": "604"}, {"x": 1510243200000, "y": 293, "sc": "608"}, {
        "x": 1510502400000,
        "y": 281,
        "sc": "606"
    }, {"x": 1510588800000, "y": 269, "sc": "606"}, {"x": 1510675200000, "y": 253, "sc": "606"}, {
        "x": 1510761600000,
        "y": 270,
        "sc": "606"
    }, {"x": 1510848000000, "y": 351, "sc": "608"}, {"x": 1511107200000, "y": 359, "sc": "606"}, {
        "x": 1511193600000,
        "y": 387,
        "sc": "606"
    }, {"x": 1511280000000, "y": 373, "sc": "606"}, {"x": 1511366400000, "y": 417, "sc": "606"}, {
        "x": 1511452800000,
        "y": 400,
        "sc": "610"
    }, {"x": 1511712000000, "y": 441, "sc": "609"}, {"x": 1511798400000, "y": 425, "sc": "610"}, {
        "x": 1511884800000,
        "y": 440,
        "sc": "610"
    }, {"x": 1511971200000, "y": 454, "sc": "611"}, {"x": 1512057600000, "y": 414, "sc": "613"}, {
        "x": 1512316800000,
        "y": 416,
        "sc": "611"
    }, {"x": 1512403200000, "y": 445, "sc": "611"}, {"x": 1512489600000, "y": 444, "sc": "613"}, {
        "x": 1512576000000,
        "y": 416,
        "sc": "613"
    }, {"x": 1512662400000, "y": 433, "sc": "617"}, {"x": 1512921600000, "y": 401, "sc": "615"}, {
        "x": 1513008000000,
        "y": 385,
        "sc": "615"
    }, {"x": 1513094400000, "y": 362, "sc": "617"}, {"x": 1513180800000, "y": 375, "sc": "617"}, {
        "x": 1513267200000,
        "y": 348,
        "sc": "621"
    }, {"x": 1513526400000, "y": 370, "sc": "619"}, {"x": 1513612800000, "y": 384, "sc": "619"}, {
        "x": 1513699200000,
        "y": 377,
        "sc": "619"
    }, {"x": 1513785600000, "y": 358, "sc": "621"}, {"x": 1513872000000, "y": 384, "sc": "623"}, {
        "x": 1514131200000,
        "y": 373,
        "sc": "616"
    }, {"x": 1514217600000, "y": 358, "sc": "617"}, {"x": 1514304000000, "y": 344, "sc": "622"}, {
        "x": 1514390400000,
        "y": 351,
        "sc": "623"
    }, {"x": 1514476800000, "y": 347, "sc": "626"}, {"x": 1514822400000, "y": 374, "sc": "624"}, {
        "x": 1514908800000,
        "y": 399,
        "sc": "624"
    }, {"x": 1514995200000, "y": 408, "sc": "624"}, {"x": 1515081600000, "y": 357, "sc": "626"}, {
        "x": 1515340800000,
        "y": 355,
        "sc": "623"
    }, {"x": 1515427200000, "y": 351, "sc": "623"}, {"x": 1515513600000, "y": 508, "sc": "623"}, {
        "x": 1515600000000,
        "y": 502,
        "sc": "623"
    }, {"x": 1515686400000, "y": 507, "sc": "625"}, {"x": 1515945600000, "y": 487, "sc": "623"}, {
        "x": 1516032000000,
        "y": 441,
        "sc": "623"
    }, {"x": 1516118400000, "y": 427, "sc": "623"}, {"x": 1516204800000, "y": 438, "sc": "623"}, {
        "x": 1516291200000,
        "y": 517,
        "sc": "625"
    }, {"x": 1516550400000, "y": 491, "sc": "623"}, {"x": 1516636800000, "y": 513, "sc": "623"}, {
        "x": 1516723200000,
        "y": 451,
        "sc": "622"
    }, {"x": 1516809600000, "y": 469, "sc": "622"}, {"x": 1516896000000, "y": 440, "sc": "624"}, {
        "x": 1517155200000,
        "y": 432,
        "sc": "622"
    }, {"x": 1517241600000, "y": 380, "sc": "622"}, {"x": 1517328000000, "y": 410, "sc": "622"}, {
        "x": 1517414400000,
        "y": 418,
        "sc": "624"
    }, {"x": 1517500800000, "y": 438, "sc": "624"}, {"x": 1517760000000, "y": 433, "sc": "624"}, {
        "x": 1517846400000,
        "y": 440,
        "sc": "624"
    }, {"x": 1517932800000, "y": 439, "sc": "624"}, {"x": 1518019200000, "y": 400, "sc": "624"}, {
        "x": 1518105600000,
        "y": 378,
        "sc": "624"
    }, {"x": 1518364800000, "y": 345, "sc": "624"}, {"x": 1518451200000, "y": 383, "sc": "619"}, {
        "x": 1518537600000,
        "y": 398,
        "sc": "621"
    }, {"x": 1519228800000, "y": 319, "sc": "622"}, {"x": 1519315200000, "y": 307, "sc": "624"}, {
        "x": 1519574400000,
        "y": 181,
        "sc": "624"
    }, {"x": 1519660800000, "y": 53, "sc": "624"}, {"x": 1519747200000, "y": 58, "sc": "624"}, {
        "x": 1519833600000,
        "y": 83,
        "sc": "626"
    }, {"x": 1519920000000, "y": 56, "sc": "628"}, {"x": 1520179200000, "y": 4, "sc": "630"}, {
        "x": 1520265600000,
        "y": 6,
        "sc": "630"
    }, {"x": 1520352000000, "y": 11, "sc": "630"}, {"x": 1520438400000, "y": 13, "sc": "631"}, {
        "x": 1520524800000,
        "y": 10,
        "sc": "633"
    }, {"x": 1520784000000, "y": 5, "sc": "628"}, {"x": 1520870400000, "y": 7, "sc": "628"}, {
        "x": 1520956800000,
        "y": 11,
        "sc": "628"
    }, {"x": 1521043200000, "y": 35, "sc": "628"}, {"x": 1521129600000, "y": 18, "sc": "630"}, {
        "x": 1521388800000,
        "y": 9,
        "sc": "628"
    }, {"x": 1521475200000, "y": 9, "sc": "628"}, {"x": 1521561600000, "y": 7, "sc": "628"}, {
        "x": 1521648000000,
        "y": 5,
        "sc": "629"
    }, {"x": 1521734400000, "y": 4, "sc": "631"}, {"x": 1521993600000, "y": 4, "sc": "633"}, {
        "x": 1522080000000,
        "y": 3,
        "sc": "633"
    }, {"x": 1522166400000, "y": 2, "sc": "636"}, {"x": 1522252800000, "y": 2, "sc": "636"}, {
        "x": 1522339200000,
        "y": 1,
        "sc": "635"
    }, {"x": 1522598400000, "y": 2, "sc": "635"}, {"x": 1522684800000, "y": 2, "sc": "635"}, {
        "x": 1522771200000,
        "y": 2,
        "sc": "637"
    }, {"x": 1523203200000, "y": 4, "sc": "638"}, {"x": 1523289600000, "y": 2, "sc": "638"}, {
        "x": 1523376000000,
        "y": 2,
        "sc": "638"
    }, {"x": 1523462400000, "y": 2, "sc": "638"}, {"x": 1523548800000, "y": 2, "sc": "640"}, {
        "x": 1523808000000,
        "y": 2,
        "sc": "638"
    }, {"x": 1523894400000, "y": 1, "sc": "635"}, {"x": 1523980800000, "y": 2, "sc": "635"}, {
        "x": 1524067200000,
        "y": 2,
        "sc": "636"
    }, {"x": 1524153600000, "y": 2, "sc": "639"}, {"x": 1524412800000, "y": 1, "sc": "635"}, {
        "x": 1524499200000,
        "y": 3,
        "sc": "635"
    }, {"x": 1524585600000, "y": 1, "sc": "635"}, {"x": 1524672000000, "y": 1, "sc": "632"}, {
        "x": 1524758400000,
        "y": 1,
        "sc": "634"
    }, {"x": 1525190400000, "y": 1, "sc": "640"}, {"x": 1525276800000, "y": 1, "sc": "640"}, {
        "x": 1525363200000,
        "y": 2,
        "sc": "642"
    }, {"x": 1525622400000, "y": 5, "sc": "646"}, {"x": 1525708800000, "y": 5, "sc": "646"}, {
        "x": 1525795200000,
        "y": 6,
        "sc": "646"
    }, {"x": 1525881600000, "y": 6, "sc": "646"}, {"x": 1525968000000, "y": 6, "sc": "651"}, {
        "x": 1526227200000,
        "y": 6,
        "sc": "654"
    }, {"x": 1526313600000, "y": 6, "sc": "654"}, {"x": 1526400000000, "y": 7, "sc": "654"}, {
        "x": 1526486400000,
        "y": 6,
        "sc": "654"
    }, {"x": 1526572800000, "y": 7, "sc": "657"}, {"x": 1526832000000, "y": 6, "sc": "654"}, {
        "x": 1526918400000,
        "y": 6,
        "sc": "651"
    }, {"x": 1527004800000, "y": 6, "sc": "654"}, {"x": 1527091200000, "y": 6, "sc": "655"}, {
        "x": 1527177600000,
        "y": 8,
        "sc": "656"
    }, {"x": 1527436800000, "y": 12, "sc": "654"}, {"x": 1527523200000, "y": 9, "sc": "654"}, {
        "x": 1527609600000,
        "y": 9,
        "sc": "654"
    }, {"x": 1527696000000, "y": 9, "sc": "654"}, {"x": 1527782400000, "y": 6, "sc": "656"}, {
        "x": 1528041600000,
        "y": 9,
        "sc": "654"
    }, {"x": 1528128000000, "y": 13, "sc": "654"}, {"x": 1528214400000, "y": 13, "sc": "654"}, {
        "x": 1528300800000,
        "y": 20,
        "sc": "655"
    }, {"x": 1528387200000, "y": 12, "sc": "659"}, {"x": 1528646400000, "y": 15, "sc": "659"}, {
        "x": 1528732800000,
        "y": 18,
        "sc": "659"
    }, {"x": 1528819200000, "y": 23, "sc": "659"}, {"x": 1528905600000, "y": 17, "sc": "659"}, {
        "x": 1528992000000,
        "y": 14,
        "sc": "661"
    }, {"x": 1529337600000, "y": 35, "sc": "660"}, {"x": 1529424000000, "y": 24, "sc": "660"}, {
        "x": 1529510400000,
        "y": 27,
        "sc": "664"
    }, {"x": 1529596800000, "y": 26, "sc": "666"}, {"x": 1529856000000, "y": 17, "sc": "666"}, {
        "x": 1529942400000,
        "y": 25,
        "sc": "666"
    }, {"x": 1530028800000, "y": 52, "sc": "666"}, {"x": 1530115200000, "y": 72, "sc": "666"}, {
        "x": 1530201600000,
        "y": 35,
        "sc": "668"
    }, {"x": 1530460800000, "y": 57, "sc": "665"}, {"x": 1530547200000, "y": 45, "sc": "665"}, {
        "x": 1530633600000,
        "y": 55,
        "sc": "667"
    }, {"x": 1530720000000, "y": 74, "sc": "667"}, {"x": 1530806400000, "y": 77, "sc": "669"}, {
        "x": 1531065600000,
        "y": 50,
        "sc": "669"
    }, {"x": 1531152000000, "y": 52, "sc": "667"}, {"x": 1531238400000, "y": 45, "sc": "667"}, {
        "x": 1531324800000,
        "y": 48,
        "sc": "667"
    }, {"x": 1531411200000, "y": 35, "sc": "671"}, {"x": 1531670400000, "y": 38, "sc": "670"}, {
        "x": 1531756800000,
        "y": 33,
        "sc": "667"
    }, {"x": 1531843200000, "y": 57, "sc": "667"}, {"x": 1531929600000, "y": 69, "sc": "674"}, {
        "x": 1532016000000,
        "y": 74,
        "sc": "676"
    }, {"x": 1532275200000, "y": 88, "sc": "674"}, {"x": 1532361600000, "y": 108, "sc": "676"}, {
        "x": 1532448000000,
        "y": 199,
        "sc": "676"
    }, {"x": 1532534400000, "y": 182, "sc": "680"}, {"x": 1532620800000, "y": 345, "sc": "684"}, {
        "x": 1532880000000,
        "y": 452,
        "sc": "682"
    }, {"x": 1532966400000, "y": 434, "sc": "680"}, {"x": 1533052800000, "y": 453, "sc": "679"}, {
        "x": 1533139200000,
        "y": 423,
        "sc": "679"
    }, {"x": 1533225600000, "y": 411, "sc": "681"}, {"x": 1533484800000, "y": 468, "sc": "679"}, {
        "x": 1533571200000,
        "y": 468,
        "sc": "677"
    }, {"x": 1533657600000, "y": 451, "sc": "677"}, {"x": 1533744000000, "y": 418, "sc": "677"}, {
        "x": 1533830400000,
        "y": 452,
        "sc": "679"
    }, {"x": 1534089600000, "y": 350, "sc": "676"}, {"x": 1534176000000, "y": 267, "sc": "678"}, {
        "x": 1534262400000,
        "y": 360,
        "sc": "678"
    }, {"x": 1534348800000, "y": 391, "sc": "680"}, {"x": 1534435200000, "y": 457, "sc": "680"}, {
        "x": 1534694400000,
        "y": 507,
        "sc": "679"
    }, {"x": 1534780800000, "y": 387, "sc": "675"}, {"x": 1534867200000, "y": 448, "sc": "675"}, {
        "x": 1534953600000,
        "y": 436,
        "sc": "677"
    }, {"x": 1535040000000, "y": 505, "sc": "677"}, {"x": 1535299200000, "y": 438, "sc": "676"}, {
        "x": 1535385600000,
        "y": 472,
        "sc": "676"
    }, {"x": 1535472000000, "y": 384, "sc": "676"}, {"x": 1535558400000, "y": 437, "sc": "678"}, {
        "x": 1535644800000,
        "y": 534,
        "sc": "678"
    }, {"x": 1535904000000, "y": 408, "sc": "679"}, {"x": 1535990400000, "y": 356, "sc": "679"}, {
        "x": 1536076800000,
        "y": 415,
        "sc": "679"
    }, {"x": 1536163200000, "y": 447, "sc": "679"}, {"x": 1536249600000, "y": 347, "sc": "680"}, {
        "x": 1536508800000,
        "y": 386,
        "sc": "682"
    }, {"x": 1536595200000, "y": 250, "sc": "680"}, {"x": 1536681600000, "y": 354, "sc": "680"}, {
        "x": 1536768000000,
        "y": 395,
        "sc": "683"
    }, {"x": 1536854400000, "y": 417, "sc": "685"}, {"x": 1537113600000, "y": 412, "sc": "686"}, {
        "x": 1537200000000,
        "y": 399,
        "sc": "686"
    }, {"x": 1537286400000, "y": 430, "sc": "686"}, {"x": 1537372800000, "y": 511, "sc": "683"}, {
        "x": 1537459200000,
        "y": 544,
        "sc": "688"
    }, {"x": 1537804800000, "y": 561, "sc": "680"}, {"x": 1537891200000, "y": 553, "sc": "690"}, {
        "x": 1537977600000,
        "y": 497,
        "sc": "687"
    }, {"x": 1538064000000, "y": 500, "sc": "689"}, {"x": 1538928000000, "y": 510, "sc": "694"}, {
        "x": 1539014400000,
        "y": 558,
        "sc": "694"
    }, {"x": 1539100800000, "y": 580, "sc": "695"}, {"x": 1539187200000, "y": 590, "sc": "696"}, {
        "x": 1539273600000,
        "y": 575,
        "sc": "699"
    }, {"x": 1539532800000, "y": 595, "sc": "698"}, {"x": 1539619200000, "y": 621, "sc": "698"}, {
        "x": 1539705600000,
        "y": 609,
        "sc": "694"
    }, {"x": 1539792000000, "y": 639, "sc": "698"}, {"x": 1539878400000, "y": 591, "sc": "700"}, {
        "x": 1540137600000,
        "y": 549,
        "sc": "696"
    }, {"x": 1540224000000, "y": 463, "sc": "698"}, {"x": 1540310400000, "y": 483, "sc": "698"}, {
        "x": 1540396800000,
        "y": 548,
        "sc": "698"
    }, {"x": 1540483200000, "y": 576, "sc": "701"}, {"x": 1540742400000, "y": 574, "sc": "698"}, {
        "x": 1540828800000,
        "y": 471,
        "sc": "698"
    }, {"x": 1540915200000, "y": 461, "sc": "698"}, {"x": 1541001600000, "y": 425, "sc": "699"}, {
        "x": 1541088000000,
        "y": 420,
        "sc": "701"
    }, {"x": 1541347200000, "y": 374, "sc": "699"}, {"x": 1541433600000, "y": 335, "sc": "697"}, {
        "x": 1541520000000,
        "y": 337,
        "sc": "697"
    }, {"x": 1541606400000, "y": 270, "sc": "698"}, {"x": 1541692800000, "y": 276, "sc": "701"}, {
        "x": 1541952000000,
        "y": 223,
        "sc": "698"
    }, {"x": 1542038400000, "y": 298, "sc": "700"}, {"x": 1542124800000, "y": 319, "sc": "702"}, {
        "x": 1542211200000,
        "y": 267,
        "sc": "701"
    }, {"x": 1542297600000, "y": 333, "sc": "704"}, {"x": 1542556800000, "y": 238, "sc": "702"}, {
        "x": 1542643200000,
        "y": 140,
        "sc": "702"
    }, {"x": 1542729600000, "y": 271, "sc": "702"}, {"x": 1542816000000, "y": 197, "sc": "702"}, {
        "x": 1542902400000,
        "y": 333,
        "sc": "704"
    }, {"x": 1543161600000, "y": 322, "sc": "702"}, {"x": 1543248000000, "y": 393, "sc": "702"}, {
        "x": 1543334400000,
        "y": 416,
        "sc": "702"
    }, {"x": 1543420800000, "y": 419, "sc": "702"}, {"x": 1543507200000, "y": 351, "sc": "706"}, {
        "x": 1543766400000,
        "y": 349,
        "sc": "705"
    }, {"x": 1543852800000, "y": 295, "sc": "706"}, {"x": 1543939200000, "y": 287, "sc": "708"}, {
        "x": 1544025600000,
        "y": 386,
        "sc": "708"
    }, {"x": 1544112000000, "y": 563, "sc": "710"}, {"x": 1544371200000, "y": 556, "sc": "709"}, {
        "x": 1544457600000,
        "y": 570,
        "sc": "709"
    }, {"x": 1544544000000, "y": 509, "sc": "709"}, {"x": 1544630400000, "y": 436, "sc": "711"}, {
        "x": 1544716800000,
        "y": 470,
        "sc": "713"
    }, {"x": 1544976000000, "y": 525, "sc": "711"}, {"x": 1545062400000, "y": 570, "sc": "711"}, {
        "x": 1545148800000,
        "y": 617,
        "sc": "713"
    }, {"x": 1545235200000, "y": 622, "sc": "713"}, {"x": 1545321600000, "y": 638, "sc": "716"}, {
        "x": 1545580800000,
        "y": 610,
        "sc": "709"
    }, {"x": 1545667200000, "y": 582, "sc": "709"}, {"x": 1545753600000, "y": 598, "sc": "708"}, {
        "x": 1545840000000,
        "y": 625,
        "sc": "710"
    }, {"x": 1545926400000, "y": 598, "sc": "712"}, {"x": 1546358400000, "y": 646, "sc": "715"}, {
        "x": 1546444800000,
        "y": 648,
        "sc": "716"
    }, {"x": 1546531200000, "y": 651, "sc": "719"}, {"x": 1546790400000, "y": 655, "sc": "716"}, {
        "x": 1546876800000,
        "y": 655,
        "sc": "716"
    }, {"x": 1546963200000, "y": 650, "sc": "716"}, {"x": 1547049600000, "y": 657, "sc": "718"}, {
        "x": 1547136000000,
        "y": 667,
        "sc": "721"
    }, {"x": 1547395200000, "y": 662, "sc": "718"}, {"x": 1547481600000, "y": 665, "sc": "718"}, {
        "x": 1547568000000,
        "y": 614,
        "sc": "718"
    }, {"x": 1547654400000, "y": 633, "sc": "720"}, {"x": 1547740800000, "y": 488, "sc": "722"}, {
        "x": 1548000000000,
        "y": 553,
        "sc": "722"
    }, {"x": 1548086400000, "y": 661, "sc": "723"}, {"x": 1548172800000, "y": 661, "sc": "724"}, {
        "x": 1548259200000,
        "y": 626,
        "sc": "726"
    }, {"x": 1548345600000, "y": 599, "sc": "731"}, {"x": 1548604800000, "y": 628, "sc": "730"}, {
        "x": 1548691200000,
        "y": 596,
        "sc": "730"
    }, {"x": 1548777600000, "y": 610, "sc": "730"}, {"x": 1548864000000, "y": 649, "sc": "725"}, {
        "x": 1548950400000,
        "y": 648,
        "sc": "727"
    }, {"x": 1549814400000, "y": 694, "sc": "737"}, {"x": 1549900800000, "y": 700, "sc": "737"}, {
        "x": 1549987200000,
        "y": 704,
        "sc": "737"
    }, {"x": 1550073600000, "y": 701, "sc": "741"}, {"x": 1550160000000, "y": 707, "sc": "744"}, {
        "x": 1550419200000,
        "y": 691,
        "sc": "742"
    }, {"x": 1550505600000, "y": 679, "sc": "742"}, {"x": 1550592000000, "y": 701, "sc": "742"}, {
        "x": 1550678400000,
        "y": 703,
        "sc": "742"
    }, {"x": 1550764800000, "y": 713, "sc": "748"}, {"x": 1551024000000, "y": 682, "sc": "746"}, {
        "x": 1551110400000,
        "y": 664,
        "sc": "746"
    }, {"x": 1551196800000, "y": 679, "sc": "749"}, {"x": 1551283200000, "y": 653, "sc": "755"}, {
        "x": 1551369600000,
        "y": 665,
        "sc": "757"
    }, {"x": 1551628800000, "y": 678, "sc": "757"}, {"x": 1551715200000, "y": 681, "sc": "757"}, {
        "x": 1551801600000,
        "y": 670,
        "sc": "757"
    }, {"x": 1551888000000, "y": 647, "sc": "759"}, {"x": 1551974400000, "y": 638, "sc": "761"}, {
        "x": 1552233600000,
        "y": 580,
        "sc": "762"
    }, {"x": 1552320000000, "y": 524, "sc": "762"}, {"x": 1552406400000, "y": 552, "sc": "763"}, {
        "x": 1552492800000,
        "y": 469,
        "sc": "764"
    }, {"x": 1552579200000, "y": 398, "sc": "764"}, {"x": 1552838400000, "y": 293, "sc": "764"}, {
        "x": 1552924800000,
        "y": 275,
        "sc": "765"
    }, {"x": 1553011200000, "y": 280, "sc": "765"}, {"x": 1553097600000, "y": 285, "sc": "768"}, {
        "x": 1553184000000,
        "y": 281,
        "sc": "768"
    }, {"x": 1553443200000, "y": 321, "sc": "772"}, {"x": 1553529600000, "y": 357, "sc": "772"}, {
        "x": 1553616000000,
        "y": 332,
        "sc": "773"
    }, {"x": 1553702400000, "y": 356, "sc": "773"}, {"x": 1553788800000, "y": 311, "sc": "770"}, {
        "x": 1554048000000,
        "y": 313,
        "sc": "770"
    }, {"x": 1554134400000, "y": 265, "sc": "770"}, {"x": 1554220800000, "y": 268, "sc": "772"}, {
        "x": 1554307200000,
        "y": 318,
        "sc": "773"
    }, {"x": 1554652800000, "y": 345, "sc": "772"}, {"x": 1554739200000, "y": 236, "sc": "770"}, {
        "x": 1554825600000,
        "y": 161,
        "sc": "770"
    }, {"x": 1554912000000, "y": 166, "sc": "770"}, {"x": 1554998400000, "y": 174, "sc": "773"}, {
        "x": 1555257600000,
        "y": 209,
        "sc": "775"
    }, {"x": 1555344000000, "y": 341, "sc": "776"}, {"x": 1555430400000, "y": 373, "sc": "778"}, {
        "x": 1555516800000,
        "y": 486,
        "sc": "779"
    }, {"x": 1555603200000, "y": 490, "sc": "775"}, {"x": 1555862400000, "y": 347, "sc": "779"}, {
        "x": 1555948800000,
        "y": 345,
        "sc": "784"
    }, {"x": 1556035200000, "y": 273, "sc": "787"}, {"x": 1556121600000, "y": 247, "sc": "791"}, {
        "x": 1556208000000,
        "y": 215,
        "sc": "791"
    }, {"x": 1556467200000, "y": 141, "sc": "790"}, {"x": 1556553600000, "y": 139, "sc": "790"}, {
        "x": 1557072000000,
        "y": 77,
        "sc": "795"
    }, {"x": 1557158400000, "y": 62, "sc": "795"}, {"x": 1557244800000, "y": 65, "sc": "795"}, {
        "x": 1557331200000,
        "y": 81,
        "sc": "794"
    }, {"x": 1557417600000, "y": 107, "sc": "795"}, {"x": 1557676800000, "y": 60, "sc": "790"}, {
        "x": 1557763200000,
        "y": 66,
        "sc": "795"
    }, {"x": 1557849600000, "y": 68, "sc": "795"}, {"x": 1557936000000, "y": 71, "sc": "795"}, {
        "x": 1558022400000,
        "y": 58,
        "sc": "795"
    }, {"x": 1558281600000, "y": 42, "sc": "795"}, {"x": 1558368000000, "y": 45, "sc": "795"}, {
        "x": 1558454400000,
        "y": 36,
        "sc": "795"
    }, {"x": 1558540800000, "y": 41, "sc": "795"}, {"x": 1558627200000, "y": 41, "sc": "795"}, {
        "x": 1558886400000,
        "y": 38,
        "sc": "800"
    }, {"x": 1558972800000, "y": 79, "sc": "801"}, {"x": 1559059200000, "y": 100, "sc": "801"}, {
        "x": 1559145600000,
        "y": 121,
        "sc": "801"
    }, {"x": 1559232000000, "y": 140, "sc": "801"}, {"x": 1559491200000, "y": 144, "sc": "801"}, {
        "x": 1559577600000,
        "y": 217,
        "sc": "801"
    }, {"x": 1559664000000, "y": 406, "sc": "801"}, {"x": 1559750400000, "y": 399, "sc": "802"}, {
        "x": 1560096000000,
        "y": 396,
        "sc": "804"
    }, {"x": 1560182400000, "y": 438, "sc": "805"}, {"x": 1560268800000, "y": 442, "sc": "805"}, {
        "x": 1560355200000,
        "y": 419,
        "sc": "807"
    }, {"x": 1560441600000, "y": 407, "sc": "808"}, {"x": 1560700800000, "y": 442, "sc": "809"}, {
        "x": 1560787200000,
        "y": 439,
        "sc": "809"
    }, {"x": 1560873600000, "y": 426, "sc": "811"}, {"x": 1560960000000, "y": 423, "sc": "816"}, {
        "x": 1561046400000,
        "y": 409,
        "sc": "816"
    }, {"x": 1561305600000, "y": 428, "sc": "816"}, {"x": 1561392000000, "y": 459, "sc": "817"}, {
        "x": 1561478400000,
        "y": 314,
        "sc": "821"
    }, {"x": 1561564800000, "y": 359, "sc": "819"}, {"x": 1561651200000, "y": 377, "sc": "819"}, {
        "x": 1561910400000,
        "y": 409,
        "sc": "810"
    }, {"x": 1561996800000, "y": 375, "sc": "817"}, {"x": 1562083200000, "y": 373, "sc": "818"}, {
        "x": 1562169600000,
        "y": 348,
        "sc": "819"
    }, {"x": 1562256000000, "y": 333, "sc": "819"}, {"x": 1562515200000, "y": 221, "sc": "818"}, {
        "x": 1562601600000,
        "y": 266,
        "sc": "820"
    }, {"x": 1562688000000, "y": 287, "sc": "820"}, {"x": 1562774400000, "y": 137, "sc": "820"}, {
        "x": 1562860800000,
        "y": 144,
        "sc": "820"
    }, {"x": 1563120000000, "y": 65, "sc": "822"}, {"x": 1563206400000, "y": 53, "sc": "827"}, {
        "x": 1563292800000,
        "y": 67,
        "sc": "827"
    }, {"x": 1563379200000, "y": 69, "sc": "828"}, {"x": 1563465600000, "y": 76, "sc": "828"}, {
        "x": 1563724800000,
        "y": 198,
        "sc": "829"
    }, {"x": 1563811200000, "y": 128, "sc": "829"}, {"x": 1563897600000, "y": 171, "sc": "830"}, {
        "x": 1563984000000,
        "y": 183,
        "sc": "831"
    }, {"x": 1564070400000, "y": 192, "sc": "835"}, {"x": 1564329600000, "y": 352, "sc": "835"}, {
        "x": 1564416000000,
        "y": 287,
        "sc": "835"
    }, {"x": 1564502400000, "y": 295, "sc": "835"}, {"x": 1564588800000, "y": 234, "sc": "835"}, {
        "x": 1564675200000,
        "y": 128,
        "sc": "835"
    }, {"x": 1564934400000, "y": 105, "sc": "835"}, {"x": 1565020800000, "y": 104, "sc": "835"}, {
        "x": 1565107200000,
        "y": 113,
        "sc": "835"
    }, {"x": 1565193600000, "y": 83, "sc": "836"}, {"x": 1565280000000, "y": 68, "sc": "837"}, {
        "x": 1565539200000,
        "y": 61,
        "sc": "838"
    }, {"x": 1565625600000, "y": 78, "sc": "838"}, {"x": 1565712000000, "y": 50, "sc": "838"}, {
        "x": 1565798400000,
        "y": 43,
        "sc": "838"
    }, {"x": 1565884800000, "y": 42, "sc": "840"}, {"x": 1566144000000, "y": 62, "sc": "840"}, {
        "x": 1566230400000,
        "y": 54,
        "sc": "841"
    }, {"x": 1566316800000, "y": 72, "sc": "842"}, {"x": 1566403200000, "y": 69, "sc": "843"}, {
        "x": 1566489600000,
        "y": 46,
        "sc": "846"
    }, {"x": 1566748800000, "y": 39, "sc": "847"}, {"x": 1566835200000, "y": 42, "sc": "851"}, {
        "x": 1566921600000,
        "y": 42,
        "sc": "851"
    }, {"x": 1567008000000, "y": 40, "sc": "851"}, {"x": 1567094400000, "y": 42, "sc": "851"}, {
        "x": 1567353600000,
        "y": 37,
        "sc": "851"
    }, {"x": 1567440000000, "y": 40, "sc": "851"}, {"x": 1567526400000, "y": 40, "sc": "851"}, {
        "x": 1567612800000,
        "y": 34,
        "sc": "858"
    }, {"x": 1567699200000, "y": 40, "sc": "858"}, {"x": 1567958400000, "y": 45, "sc": "858"}, {
        "x": 1568044800000,
        "y": 37,
        "sc": "858"
    }, {"x": 1568131200000, "y": 34, "sc": "855"}, {"x": 1568217600000, "y": 36, "sc": "855"}, {
        "x": 1568563200000,
        "y": 39,
        "sc": "863"
    }, {"x": 1568649600000, "y": 34, "sc": "863"}, {"x": 1568736000000, "y": 37, "sc": "863"}, {
        "x": 1568822400000,
        "y": 29,
        "sc": "863"
    }, {"x": 1568908800000, "y": 33, "sc": "863"}, {"x": 1569168000000, "y": 35, "sc": "864"}, {
        "x": 1569254400000,
        "y": 23,
        "sc": "864"
    }, {"x": 1569340800000, "y": 18, "sc": "864"}, {"x": 1569427200000, "y": 30, "sc": "870"}, {
        "x": 1569513600000,
        "y": 28,
        "sc": "866"
    }, {"x": 1569772800000, "y": 18, "sc": "867"}, {"x": 1570464000000, "y": 16, "sc": "875"}, {
        "x": 1570550400000,
        "y": 18,
        "sc": "877"
    }, {"x": 1570636800000, "y": 19, "sc": "877"}, {"x": 1570723200000, "y": 23, "sc": "878"}, {
        "x": 1570982400000,
        "y": 24,
        "sc": "878"
    }, {"x": 1571068800000, "y": 19, "sc": "880"}, {"x": 1571155200000, "y": 10, "sc": "883"}, {
        "x": 1571241600000,
        "y": 6,
        "sc": "883"
    }, {"x": 1571328000000, "y": 3, "sc": "883"}, {"x": 1571587200000, "y": 7, "sc": "883"}, {
        "x": 1571673600000,
        "y": 10,
        "sc": "884"
    }, {"x": 1571760000000, "y": 10, "sc": "885"}, {"x": 1571846400000, "y": 6, "sc": "885"}, {
        "x": 1571932800000,
        "y": 5,
        "sc": "885"
    }, {"x": 1572192000000, "y": 11, "sc": "887"}, {"x": 1572278400000, "y": 3, "sc": "887"}, {
        "x": 1572364800000,
        "y": 4,
        "sc": "887"
    }, {"x": 1572451200000, "y": 1, "sc": "892"}, {"x": 1572537600000, "y": 2, "sc": "893"}, {
        "x": 1572796800000,
        "y": 2,
        "sc": "894"
    }, {"x": 1572883200000, "y": 2, "sc": "893"}, {"x": 1572969600000, "y": 2, "sc": "893"}, {
        "x": 1573056000000,
        "y": 3,
        "sc": "893"
    }, {"x": 1573142400000, "y": 4, "sc": "900"}, {"x": 1573401600000, "y": 7, "sc": "900"}, {
        "x": 1573488000000,
        "y": 3,
        "sc": "900"
    }, {"x": 1573574400000, "y": 4, "sc": "900"}, {"x": 1573660800000, "y": 8, "sc": "901"}, {
        "x": 1573747200000,
        "y": 6,
        "sc": "901"
    }, {"x": 1574006400000, "y": 5, "sc": "902"}, {"x": 1574092800000, "y": 2, "sc": "902"}, {
        "x": 1574179200000,
        "y": 2,
        "sc": "904"
    }, {"x": 1574265600000, "y": 2, "sc": "907"}, {"x": 1574352000000, "y": 3, "sc": "907"}, {
        "x": 1574611200000,
        "y": 4,
        "sc": "908"
    }, {"x": 1574697600000, "y": 8, "sc": "909"}, {"x": 1574784000000, "y": 19, "sc": "909"}, {
        "x": 1574870400000,
        "y": 17,
        "sc": "909"
    }, {"x": 1574956800000, "y": 33, "sc": "913"}, {"x": 1575216000000, "y": 85, "sc": "915"}, {
        "x": 1575302400000,
        "y": 56,
        "sc": "917"
    }, {"x": 1575388800000, "y": 16, "sc": "917"}, {"x": 1575475200000, "y": 12, "sc": "917"}, {
        "x": 1575561600000,
        "y": 13,
        "sc": "920"
    }, {"x": 1575820800000, "y": 30, "sc": "922"}, {"x": 1575907200000, "y": 24, "sc": "924"}, {
        "x": 1575993600000,
        "y": 17,
        "sc": "926"
    }, {"x": 1576080000000, "y": 24, "sc": "927"}, {"x": 1576166400000, "y": 26, "sc": "927"}, {
        "x": 1576425600000,
        "y": 24,
        "sc": "926"
    }, {"x": 1576512000000, "y": 35, "sc": "928"}, {"x": 1576598400000, "y": 85, "sc": "928"}, {
        "x": 1576684800000,
        "y": 158,
        "sc": "927"
    }, {"x": 1576771200000, "y": 247, "sc": "931"}, {"x": 1577030400000, "y": 155, "sc": "932"}, {
        "x": 1577116800000,
        "y": 484,
        "sc": "931"
    }, {"x": 1577203200000, "y": 503, "sc": "926"}, {"x": 1577289600000, "y": 451, "sc": "932"}, {
        "x": 1577376000000,
        "y": 670,
        "sc": "942"
    }, {"x": 1577635200000, "y": 806, "sc": "942"}, {"x": 1577721600000, "y": 682, "sc": "942"}, {
        "x": 1577894400000,
        "y": 778,
        "sc": "942"
    }, {"x": 1577980800000, "y": 800, "sc": "942"}, {"x": 1578240000000, "y": 810, "sc": "942"}, {
        "x": 1578326400000,
        "y": 725,
        "sc": "942"
    }, {"x": 1578412800000, "y": 721, "sc": "944"}, {"x": 1578499200000, "y": 411, "sc": "944"}, {
        "x": 1578585600000,
        "y": 681,
        "sc": "944"
    }, {"x": 1578844800000, "y": 638, "sc": "944"}, {"x": 1578931200000, "y": 660, "sc": "945"}, {
        "x": 1579017600000,
        "y": 520,
        "sc": "945"
    }, {"x": 1579104000000, "y": 517, "sc": "945"}, {"x": 1579190400000, "y": 469, "sc": "946"}, {
        "x": 1579449600000,
        "y": 595,
        "sc": "946"
    }, {"x": 1579536000000, "y": 290, "sc": "948"}, {"x": 1579622400000, "y": 364, "sc": "940"}, {
        "x": 1579708800000,
        "y": 216,
        "sc": "940"
    }, {"x": 1580659200000, "y": 207, "sc": "959"}, {"x": 1580745600000, "y": 211, "sc": "959"}, {
        "x": 1580832000000,
        "y": 186,
        "sc": "959"
    }, {"x": 1580918400000, "y": 177, "sc": "962"}, {"x": 1581004800000, "y": 213, "sc": "964"}, {
        "x": 1581264000000,
        "y": 248,
        "sc": "964"
    }, {"x": 1581350400000, "y": 212, "sc": "964"}, {"x": 1581436800000, "y": 225, "sc": "964"}, {
        "x": 1581523200000,
        "y": 316,
        "sc": "968"
    }, {"x": 1581609600000, "y": 362, "sc": "969"}, {"x": 1581868800000, "y": 346, "sc": "971"}, {
        "x": 1581955200000,
        "y": 329,
        "sc": "972"
    }, {"x": 1582041600000, "y": 454, "sc": "973"}, {"x": 1582128000000, "y": 526, "sc": "975"}, {
        "x": 1582214400000,
        "y": 408,
        "sc": "978"
    }, {"x": 1582473600000, "y": 315, "sc": "980"}, {"x": 1582560000000, "y": 226, "sc": "981"}, {
        "x": 1582646400000,
        "y": 307,
        "sc": "982"
    }, {"x": 1582732800000, "y": 197, "sc": "982"}, {"x": 1582819200000, "y": 157, "sc": "988"}, {
        "x": 1583078400000,
        "y": 126,
        "sc": "992"
    }, {"x": 1583164800000, "y": 95, "sc": "994"}, {"x": 1583251200000, "y": 114, "sc": "995"}, {
        "x": 1583337600000,
        "y": 108,
        "sc": "997"
    }, {"x": 1583424000000, "y": 58, "sc": "1002"}, {"x": 1583683200000, "y": 14, "sc": "1005"}, {
        "x": 1583769600000,
        "y": 70,
        "sc": "1009"
    }, {"x": 1583856000000, "y": 57, "sc": "1011"}, {"x": 1583942400000, "y": 77, "sc": "1011"}, {
        "x": 1584028800000,
        "y": 112,
        "sc": "1013"
    }, {"x": 1584288000000, "y": 53, "sc": "1014"}, {"x": 1584374400000, "y": 75, "sc": "1014"}, {
        "x": 1584460800000,
        "y": 38,
        "sc": "1016"
    }, {"x": 1584547200000, "y": 114, "sc": "1020"}, {"x": 1584633600000, "y": 48, "sc": "1022"}, {
        "x": 1584892800000,
        "y": 33,
        "sc": "1022"
    }, {"x": 1584979200000, "y": 26, "sc": "1024"}, {"x": 1585065600000, "y": 14, "sc": "1029"}, {
        "x": 1585152000000,
        "y": 7,
        "sc": "1032"
    }, {"x": 1585238400000, "y": 8, "sc": "1035"}, {"x": 1585497600000, "y": 11, "sc": "1037"}, {
        "x": 1585584000000,
        "y": 14,
        "sc": "1042"
    }, {"x": 1585670400000, "y": 17, "sc": "1042"}, {"x": 1585756800000, "y": 16, "sc": "1034"}, {
        "x": 1585843200000,
        "y": 10,
        "sc": "1034"
    }, {"x": 1586188800000, "y": 15, "sc": "1042"}, {"x": 1586275200000, "y": 17, "sc": "1042"}, {
        "x": 1586361600000,
        "y": 14,
        "sc": "1042"
    }, {"x": 1586448000000, "y": 13, "sc": "1033"}, {"x": 1586707200000, "y": 13, "sc": "1035"}, {
        "x": 1586793600000,
        "y": 13,
        "sc": "1042"
    }, {"x": 1586880000000, "y": 13, "sc": "1044"}, {"x": 1586966400000, "y": 12, "sc": "1046"}, {
        "x": 1587052800000,
        "y": 12,
        "sc": "1048"
    }, {"x": 1587312000000, "y": 11, "sc": "1058"}, {"x": 1587398400000, "y": 10, "sc": "1063"}, {
        "x": 1587484800000,
        "y": 12,
        "sc": "1065"
    }, {"x": 1587571200000, "y": 11, "sc": "1065"}, {"x": 1587657600000, "y": 13, "sc": "1065"}, {
        "x": 1587916800000,
        "y": 13,
        "sc": "1065"
    }, {"x": 1588003200000, "y": 11, "sc": "1058"}, {"x": 1588089600000, "y": 11, "sc": "1058"}, {
        "x": 1588176000000,
        "y": 11,
        "sc": "1058"
    }, {"x": 1588694400000, "y": 31, "sc": "1066"}, {"x": 1588780800000, "y": 26, "sc": "1066"}, {
        "x": 1588867200000,
        "y": 23,
        "sc": "1066"
    }, {"x": 1589126400000, "y": 23, "sc": "1066"}, {"x": 1589212800000, "y": 23, "sc": "1066"}, {
        "x": 1589299200000,
        "y": 17,
        "sc": "1066"
    }, {"x": 1589385600000, "y": 14, "sc": "1066"}, {"x": 1589472000000, "y": 14, "sc": "1066"}, {
        "x": 1589731200000,
        "y": 27,
        "sc": "1065"
    }, {"x": 1589817600000, "y": 19, "sc": "1065"}, {"x": 1589904000000, "y": 18, "sc": "1068"}, {
        "x": 1589990400000,
        "y": 20,
        "sc": "1068"
    }, {"x": 1590076800000, "y": 20, "sc": "1068"}, {"x": 1590336000000, "y": 50, "sc": "1069"}, {
        "x": 1590422400000,
        "y": 21,
        "sc": "1071"
    }, {"x": 1590508800000, "y": 37, "sc": "1073"}, {"x": 1590595200000, "y": 43, "sc": "1074"}, {
        "x": 1590681600000,
        "y": 37,
        "sc": "1074"
    }, {"x": 1590940800000, "y": 33, "sc": "1074"}, {"x": 1591027200000, "y": 53, "sc": "1074"}, {
        "x": 1591113600000,
        "y": 79,
        "sc": "1075"
    }, {"x": 1591200000000, "y": 52, "sc": "1076"}, {"x": 1591286400000, "y": 37, "sc": "1079"}, {
        "x": 1591545600000,
        "y": 66,
        "sc": "1081"
    }, {"x": 1591632000000, "y": 69, "sc": "1081"}, {"x": 1591718400000, "y": 52, "sc": "1082"}, {
        "x": 1591804800000,
        "y": 40,
        "sc": "1082"
    }, {"x": 1591891200000, "y": 33, "sc": "1081"}, {"x": 1592150400000, "y": 27, "sc": "1082"}, {
        "x": 1592236800000,
        "y": 16,
        "sc": "1082"
    }, {"x": 1592323200000, "y": 17, "sc": "1081"}, {"x": 1592409600000, "y": 22, "sc": "1085"}, {
        "x": 1592496000000,
        "y": 21,
        "sc": "1085"
    }, {"x": 1592755200000, "y": 16, "sc": "1092"}, {"x": 1592841600000, "y": 18, "sc": "1083"}, {
        "x": 1592928000000,
        "y": 15,
        "sc": "1082"
    }, {"x": 1593360000000, "y": 16, "sc": "1099"}, {"x": 1593446400000, "y": 7, "sc": "1098"}, {
        "x": 1593532800000,
        "y": 12,
        "sc": "1095"
    }, {"x": 1593619200000, "y": 29, "sc": "1096"}, {"x": 1593705600000, "y": 22, "sc": "1105"}, {
        "x": 1593964800000,
        "y": 80,
        "sc": "1105"
    }, {"x": 1594051200000, "y": 74, "sc": "1105"}, {"x": 1594137600000, "y": 103, "sc": "1104"}, {
        "x": 1594224000000,
        "y": 169,
        "sc": "1105"
    }, {"x": 1594310400000, "y": 117, "sc": "1107"}, {"x": 1594569600000, "y": 137, "sc": "1111"}, {
        "x": 1594656000000,
        "y": 154,
        "sc": "1111"
    }, {"x": 1594742400000, "y": 87, "sc": "1111"}, {"x": 1594828800000, "y": 95, "sc": "1111"}, {
        "x": 1594915200000,
        "y": 42,
        "sc": "1115"
    }, {"x": 1595174400000, "y": 222, "sc": "1115"}, {"x": 1595260800000, "y": 89, "sc": "1115"}, {
        "x": 1595347200000,
        "y": 83,
        "sc": "1119"
    }, {"x": 1595433600000, "y": 85, "sc": "1127"}, {"x": 1595520000000, "y": 79, "sc": "1129"}, {
        "x": 1595779200000,
        "y": 86,
        "sc": "1129"
    }, {"x": 1595865600000, "y": 87, "sc": "1128"}, {"x": 1595952000000, "y": 82, "sc": "1131"}, {
        "x": 1596038400000,
        "y": 45,
        "sc": "1134"
    }, {"x": 1596124800000, "y": 46, "sc": "1134"}, {"x": 1596384000000, "y": 60, "sc": "1134"}, {
        "x": 1596470400000,
        "y": 44,
        "sc": "1134"
    }, {"x": 1596556800000, "y": 59, "sc": "1134"}, {"x": 1596643200000, "y": 77, "sc": "1134"}, {
        "x": 1596729600000,
        "y": 88,
        "sc": "1135"
    }, {"x": 1596988800000, "y": 88, "sc": "1139"}, {"x": 1597075200000, "y": 75, "sc": "1139"}, {
        "x": 1597161600000,
        "y": 160,
        "sc": "1139"
    }, {"x": 1597248000000, "y": 377, "sc": "1141"}, {"x": 1597334400000, "y": 410, "sc": "1144"}, {
        "x": 1597593600000,
        "y": 455,
        "sc": "1144"
    }, {"x": 1597680000000, "y": 613, "sc": "1146"}, {"x": 1597766400000, "y": 618, "sc": "1145"}, {
        "x": 1597852800000,
        "y": 443,
        "sc": "1145"
    }, {"x": 1597939200000, "y": 607, "sc": "1149"}, {"x": 1598198400000, "y": 544, "sc": "1152"}, {
        "x": 1598284800000,
        "y": 528,
        "sc": "1153"
    }, {"x": 1598371200000, "y": 484, "sc": "1154"}, {"x": 1598457600000, "y": 242, "sc": "1156"}, {
        "x": 1598544000000,
        "y": 185,
        "sc": "1156"
    }, {"x": 1598803200000, "y": 302, "sc": "1156"}, {"x": 1598889600000, "y": 274, "sc": "1157"}, {
        "x": 1598976000000,
        "y": 164,
        "sc": "1159"
    }, {"x": 1599062400000, "y": 180, "sc": "1159"}, {"x": 1599148800000, "y": 336, "sc": "1158"}, {
        "x": 1599408000000,
        "y": 457,
        "sc": "1159"
    }, {"x": 1599494400000, "y": 350, "sc": "1159"}, {"x": 1599580800000, "y": 462, "sc": "1159"}, {
        "x": 1599667200000,
        "y": 657,
        "sc": "1157"
    }, {"x": 1599753600000, "y": 652, "sc": "1159"}, {"x": 1600012800000, "y": 836, "sc": "1160"}, {
        "x": 1600099200000,
        "y": 930,
        "sc": "1160"
    }, {"x": 1600185600000, "y": 1011, "sc": "1161"}, {"x": 1600272000000, "y": 1038, "sc": "1161"}, {
        "x": 1600358400000,
        "y": 976,
        "sc": "1163"
    }, {"x": 1600617600000, "y": 1057, "sc": "1162"}, {"x": 1600704000000, "y": 986, "sc": "1162"}, {
        "x": 1600790400000,
        "y": 1001,
        "sc": "1162"
    }, {"x": 1600876800000, "y": 979, "sc": "1162"}, {"x": 1600963200000, "y": 966, "sc": "1164"}, {
        "x": 1601222400000,
        "y": 968,
        "sc": "1162"
    }, {"x": 1601308800000, "y": 999, "sc": "1162"}, {"x": 1601395200000, "y": 967, "sc": "1163"}, {
        "x": 1602172800000,
        "y": 276,
        "sc": "1171"
    }, {"x": 1602432000000, "y": 414, "sc": "1172"}, {"x": 1602518400000, "y": 405, "sc": "1170"}, {
        "x": 1602604800000,
        "y": 237,
        "sc": "1173"
    }, {"x": 1602691200000, "y": 548, "sc": "1173"}, {"x": 1602777600000, "y": 389, "sc": "1176"}, {
        "x": 1603036800000,
        "y": 735,
        "sc": "1178"
    }, {"x": 1603123200000, "y": 285, "sc": "1178"}, {"x": 1603209600000, "y": 604, "sc": "1178"}, {
        "x": 1603296000000,
        "y": 668,
        "sc": "1180"
    }, {"x": 1603382400000, "y": 926, "sc": "1180"}, {"x": 1603641600000, "y": 681, "sc": "1182"}, {
        "x": 1603728000000,
        "y": 541,
        "sc": "1186"
    }, {"x": 1603814400000, "y": 519, "sc": "1186"}, {"x": 1603900800000, "y": 295, "sc": "1186"}, {
        "x": 1603987200000,
        "y": 349,
        "sc": "1185"
    }, {"x": 1604246400000, "y": 507, "sc": "1185"}, {"x": 1604332800000, "y": 535, "sc": "1189"}, {
        "x": 1604419200000,
        "y": 526,
        "sc": "1188"
    }, {"x": 1604505600000, "y": 720, "sc": "1194"}, {"x": 1604592000000, "y": 742, "sc": "1193"}, {
        "x": 1604851200000,
        "y": 653,
        "sc": "1194"
    }, {"x": 1604937600000, "y": 741, "sc": "1194"}, {"x": 1605024000000, "y": 816, "sc": "1194"}, {
        "x": 1605110400000,
        "y": 626,
        "sc": "1194"
    }, {"x": 1605196800000, "y": 523, "sc": "1196"}, {"x": 1605456000000, "y": 467, "sc": "1195"}, {
        "x": 1605542400000,
        "y": 605,
        "sc": "1196"
    }, {"x": 1605628800000, "y": 827, "sc": "1196"}, {"x": 1605715200000, "y": 764, "sc": "1193"}, {
        "x": 1605801600000,
        "y": 754,
        "sc": "1195"
    }, {"x": 1606060800000, "y": 823, "sc": "1195"}, {"x": 1606147200000, "y": 882, "sc": "1195"}, {
        "x": 1606233600000,
        "y": 1018,
        "sc": "1195"
    }, {"x": 1606320000000, "y": 1057, "sc": "1196"}, {"x": 1606406400000, "y": 1078, "sc": "1197"}, {
        "x": 1606665600000,
        "y": 1083,
        "sc": "1196"
    }, {"x": 1606752000000, "y": 1057, "sc": "1195"}, {"x": 1606838400000, "y": 1063, "sc": "1196"}, {
        "x": 1606924800000,
        "y": 1023,
        "sc": "1196"
    }, {"x": 1607011200000, "y": 886, "sc": "1197"}, {"x": 1607270400000, "y": 784, "sc": "1196"}, {
        "x": 1607356800000,
        "y": 722,
        "sc": "1196"
    }, {"x": 1607443200000, "y": 649, "sc": "1196"}, {"x": 1607529600000, "y": 384, "sc": "1196"}, {
        "x": 1607616000000,
        "y": 501,
        "sc": "1196"
    }, {"x": 1607875200000, "y": 283, "sc": "1196"}, {"x": 1607961600000, "y": 233, "sc": "1194"}, {
        "x": 1608048000000,
        "y": 112,
        "sc": "1196"
    }, {"x": 1608134400000, "y": 77, "sc": "1197"}, {"x": 1608220800000, "y": 98, "sc": "1198"}, {
        "x": 1608480000000,
        "y": 85,
        "sc": "1198"
    }, {"x": 1608566400000, "y": 84, "sc": "1198"}, {"x": 1608652800000, "y": 218, "sc": "1200"}, {
        "x": 1608739200000,
        "y": 247,
        "sc": "1199"
    }, {"x": 1608825600000, "y": 220, "sc": "1196"}, {"x": 1609084800000, "y": 217, "sc": "1204"}, {
        "x": 1609171200000,
        "y": 252,
        "sc": "1209"
    }, {"x": 1609257600000, "y": 502, "sc": "1209"}, {"x": 1609344000000, "y": 518, "sc": "1203"}, {
        "x": 1609689600000,
        "y": 607,
        "sc": "1203"
    }, {"x": 1609776000000, "y": 584, "sc": "1203"}, {"x": 1609862400000, "y": 501, "sc": "1203"}, {
        "x": 1609948800000,
        "y": 535,
        "sc": "1203"
    }, {"x": 1610035200000, "y": 530, "sc": "1202"}, {"x": 1610294400000, "y": 491, "sc": "1202"}, {
        "x": 1610380800000,
        "y": 608,
        "sc": "1202"
    }, {"x": 1610467200000, "y": 695, "sc": "1202"}, {"x": 1610553600000, "y": 693, "sc": "1202"}, {
        "x": 1610640000000,
        "y": 667,
        "sc": "1203"
    }, {"x": 1610899200000, "y": 681, "sc": "1205"}, {"x": 1610985600000, "y": 676, "sc": "1205"}, {
        "x": 1611072000000,
        "y": 446,
        "sc": "1205"
    }, {"x": 1611158400000, "y": 288, "sc": "1205"}, {"x": 1611244800000, "y": 92, "sc": "1205"}, {
        "x": 1611504000000,
        "y": 64,
        "sc": "1206"
    }, {"x": 1611590400000, "y": 114, "sc": "1206"}, {"x": 1611676800000, "y": 218, "sc": "1209"}, {
        "x": 1611763200000,
        "y": 318,
        "sc": "1215"
    }, {"x": 1611849600000, "y": 488, "sc": "1215"}, {"x": 1612108800000, "y": 311, "sc": "1216"}, {
        "x": 1612195200000,
        "y": 307,
        "sc": "1216"
    }, {"x": 1612281600000, "y": 262, "sc": "1217"}, {"x": 1612368000000, "y": 314, "sc": "1217"}, {
        "x": 1612454400000,
        "y": 92,
        "sc": "1217"
    }, {"x": 1612713600000, "y": 66, "sc": "1217"}, {"x": 1612800000000, "y": 90, "sc": "1215"}, {
        "x": 1612886400000,
        "y": 68,
        "sc": "1218"
    }, {"x": 1613577600000, "y": 44, "sc": "1225"}, {"x": 1613664000000, "y": 27, "sc": "1225"}, {
        "x": 1613923200000,
        "y": 25,
        "sc": "1225"
    }, {"x": 1614009600000, "y": 23, "sc": "1223"}, {"x": 1614096000000, "y": 19, "sc": "1223"}, {
        "x": 1614182400000,
        "y": 14,
        "sc": "1224"
    }, {"x": 1614268800000, "y": 21, "sc": "1225"}, {"x": 1614528000000, "y": 42, "sc": "1226"}, {
        "x": 1614614400000,
        "y": 56,
        "sc": "1228"
    }, {"x": 1614700800000, "y": 85, "sc": "1231"}, {"x": 1614787200000, "y": 217, "sc": "1231"}, {
        "x": 1614873600000,
        "y": 154,
        "sc": "1231"
    }, {"x": 1615132800000, "y": 667, "sc": "1232"}, {"x": 1615219200000, "y": 712, "sc": "1232"}, {
        "x": 1615305600000,
        "y": 697,
        "sc": "1232"
    }, {"x": 1615392000000, "y": 682, "sc": "1233"}, {"x": 1615478400000, "y": 699, "sc": "1233"}, {
        "x": 1615737600000,
        "y": 962,
        "sc": "1233"
    }, {"x": 1615824000000, "y": 996, "sc": "1237"}, {"x": 1615910400000, "y": 1010, "sc": "1237"}, {
        "x": 1615996800000,
        "y": 967,
        "sc": "1239"
    }, {"x": 1616083200000, "y": 984, "sc": "1238"}];
/*同类排名百分比*/
var Data_rateInSimilarPersent = [[1440086400000, 0.5900], [1440345600000, 1.1800], [1440432000000, 1.4700], [1440518400000, 1.4700], [1440604800000, 1.4500], [1440691200000, 1.1600], [1440950400000, 1.1400], [1441036800000, 1.4300], [1441123200000, 1.4300], [1441555200000, 1.4000], [1441641600000, 1.4000], [1441728000000, 1.3800], [1441814400000, 1.3800], [1441900800000, 1.3800], [1442160000000, 1.3800], [1442246400000, 2.4600], [1442332800000, 1.3600], [1442419200000, 1.3600], [1442505600000, 1.9000], [1442764800000, 2.1500], [1442851200000, 2.1500], [1442937600000, 2.1500], [1443024000000, 2.6700], [1443110400000, 3.4400], [1443369600000, 3.9100], [1443456000000, 5.6800], [1443542400000, 4.7900], [1444233600000, 8.2500], [1444320000000, 14.4200], [1444579200000, 15.8700], [1444665600000, 7.2100], [1444752000000, 4.3400], [1444838400000, 10.3600], [1444924800000, 5.6700], [1445184000000, 3.0700], [1445270400000, 2.1200], [1445356800000, 2.8300], [1445443200000, 4.0100], [1445529600000, 7.7600], [1445788800000, 4.7100], [1445875200000, 6.5900], [1445961600000, 8.9400], [1446048000000, 8.0800], [1446134400000, 25.8700], [1446393600000, 27.2900], [1446480000000, 72.0200], [1446566400000, 63.5300], [1446652800000, 26.6100], [1446739200000, 29.5500], [1446998400000, 16.5900], [1447084800000, 12.500], [1447171200000, 34.0900], [1447257600000, 47.500], [1447344000000, 22.6500], [1447603200000, 24.6100], [1447689600000, 23.1600], [1447776000000, 17.5200], [1447862400000, 17.9600], [1447948800000, 14.6000], [1448208000000, 17.0400], [1448294400000, 26.9900], [1448380800000, 71.3000], [1448467200000, 79.9600], [1448553600000, 79.1700], [1448812800000, 82.4600], [1448899200000, 86.8400], [1448985600000, 80.9200], [1449072000000, 82.0200], [1449158400000, 82.8900], [1449417600000, 80.9200], [1449504000000, 75.3300], [1449590400000, 69.8200], [1449676800000, 71.3700], [1449763200000, 64.7600], [1450022400000, 63.4400], [1450108800000, 64.5700], [1450195200000, 65.8700], [1450281600000, 62.6100], [1450368000000, 62.3900], [1450627200000, 53.7000], [1450713600000, 56.9600], [1450800000000, 46.3000], [1450886400000, 48.7000], [1450972800000, 50.6500], [1451232000000, 42.8300], [1451318400000, 39.1300], [1451404800000, 46.8500], [1451491200000, 40.3500], [1451836800000, 26.2500], [1451923200000, 13.6700], [1452009600000, 13.2300], [1452096000000, 5.8600], [1452182400000, 3.0400], [1452441600000, 2.3900], [1452528000000, 2.8200], [1452614400000, 2.1700], [1452700800000, 2.8200], [1452787200000, 4.5600], [1453046400000, 6.0700], [1453132800000, 6.9400], [1453219200000, 5.8600], [1453305600000, 4.9900], [1453392000000, 1.3000], [1453651200000, 1.0800], [1453737600000, 1.9500], [1453824000000, 1.5200], [1453910400000, 2.1700], [1453996800000, 1.7400], [1454256000000, 3.0400], [1454342400000, 4.1200], [1454428800000, 4.5600], [1454515200000, 3.4700], [1454601600000, 4.9900], [1455465600000, 6.9400], [1455552000000, 6.7100], [1455638400000, 5.6300], [1455724800000, 6.0600], [1455811200000, 5.8400], [1456070400000, 3.9000], [1456156800000, 3.4600], [1456243200000, 4.3200], [1456329600000, 2.5900], [1456416000000, 2.5900], [1456675200000, 2.5900], [1456761600000, 1.5100], [1456848000000, 1.5100], [1456934400000, 1.5100], [1457020800000, 2.1600], [1457280000000, 1.9400], [1457366400000, 1.9400], [1457452800000, 3.2300], [1457539200000, 3.2300], [1457625600000, 3.8800], [1457884800000, 3.2300], [1457971200000, 3.4500], [1458057600000, 3.2300], [1458144000000, 2.8000], [1458230400000, 1.9400], [1458489600000, 1.2900], [1458576000000, 1.7200], [1458662400000, 1.9400], [1458748800000, 1.7200], [1458835200000, 1.9400], [1459094400000, 1.7200], [1459180800000, 1.9400], [1459267200000, 1.7300], [1459353600000, 1.7100], [1459440000000, 1.2800], [1459785600000, 2.3600], [1459872000000, 3.0000], [1459958400000, 5.1400], [1460044800000, 9.4200], [1460304000000, 71.9500], [1460390400000, 60.8100], [1460476800000, 70.6600], [1460563200000, 40.0400], [1460649600000, 23.3400], [1460908800000, 2.1400], [1460995200000, 2.7800], [1461081600000, 0.6400], [1461168000000, 1.0700], [1461254400000, 5.1200], [1461513600000, 4.9000], [1461600000000, 15.7400], [1461686400000, 17.7000], [1461772800000, 43.2800], [1461859200000, 13.0100], [1462204800000, 6.1700], [1462291200000, 4.2600], [1462377600000, 5.7400], [1462464000000, 2.7700], [1462723200000, 1.7100], [1462809600000, 1.0700], [1462896000000, 3.8400], [1462982400000, 4.2600], [1463068800000, 3.8400], [1463328000000, 3.6200], [1463414400000, 22.1300], [1463500800000, 19.3600], [1463587200000, 15.9600], [1463673600000, 16.3800], [1463932800000, 17.6600], [1464019200000, 12.9800], [1464105600000, 21.7000], [1464192000000, 55.9600], [1464278400000, 46.8100], [1464537600000, 82.1300], [1464624000000, 79.5700], [1464710400000, 79.5700], [1464796800000, 85.1100], [1464883200000, 84.6800], [1465142400000, 88.5100], [1465228800000, 87.2300], [1465315200000, 84.8900], [1465747200000, 80.8500], [1465833600000, 74.8900], [1465920000000, 77.5600], [1466006400000, 77.9900], [1466092800000, 85.0400], [1466352000000, 79.4900], [1466438400000, 73.7200], [1466524800000, 71.3700], [1466611200000, 74.7300], [1466697600000, 74.7300], [1466956800000, 79.2300], [1467043200000, 84.5800], [1467129600000, 85.2200], [1467216000000, 83.9400], [1467302400000, 84.3700], [1467561600000, 81.3700], [1467648000000, 69.5900], [1467734400000, 66.3800], [1467820800000, 79.4400], [1467907200000, 82.6600], [1468166400000, 17.7700], [1468252800000, 12.2100], [1468339200000, 11.3200], [1468425600000, 15.3800], [1468512000000, 11.9700], [1468771200000, 26.5000], [1468857600000, 32.0500], [1468944000000, 82.0500], [1469030400000, 82.3000], [1469116800000, 73.1300], [1469376000000, 69.9400], [1469462400000, 64.6100], [1469548800000, 37.5300], [1469635200000, 26.8700], [1469721600000, 39.0200], [1469980800000, 31.5600], [1470067200000, 33.4800], [1470153600000, 35.3900], [1470240000000, 36.2500], [1470326400000, 21.5400], [1470585600000, 32.8400], [1470672000000, 64.6100], [1470758400000, 69.7200], [1470844800000, 68.9400], [1470931200000, 68.7200], [1471190400000, 64.1200], [1471276800000, 74.7300], [1471363200000, 22.9300], [1471449600000, 55.6300], [1471536000000, 52.0200], [1471795200000, 49.0500], [1471881600000, 42.2800], [1471968000000, 60.8900], [1472054400000, 64.2700], [1472140800000, 67.9300], [1472400000000, 79.6200], [1472486400000, 74.7900], [1472572800000, 67.4400], [1472659200000, 61.5500], [1472745600000, 38.6600], [1473004800000, 28.7800], [1473091200000, 39.5000], [1473177600000, 59.6600], [1473264000000, 66.3900], [1473350400000, 52.3100], [1473609600000, 30.6700], [1473696000000, 65.1300], [1473782400000, 70.8000], [1474214400000, 36.6900], [1474300800000, 38.7800], [1474387200000, 51.4700], [1474473600000, 34.0300], [1474560000000, 36.1300], [1474819200000, 38.0300], [1474905600000, 35.9200], [1474992000000, 28.5700], [1475078400000, 30.6700], [1475164800000, 29.3500], [1476028800000, 29.3000], [1476115200000, 37.7000], [1476201600000, 39.5500], [1476288000000, 42.0100], [1476374400000, 42.4200], [1476633600000, 62.4200], [1476720000000, 49.4900], [1476806400000, 39.2200], [1476892800000, 29.7700], [1476979200000, 29.1600], [1477238400000, 24.9500], [1477324800000, 22.0900], [1477411200000, 22.6100], [1477497600000, 48.4700], [1477584000000, 42.6800], [1477843200000, 38.0100], [1477929600000, 46.7500], [1478016000000, 39.4300], [1478102400000, 27.2400], [1478188800000, 30.2800], [1478448000000, 32.8600], [1478534400000, 32.2500], [1478620800000, 25.3500], [1478707200000, 22.7200], [1478793600000, 22.3100], [1479052800000, 22.5200], [1479139200000, 22.9200], [1479225600000, 16.2300], [1479312000000, 20.4500], [1479398400000, 22.6700], [1479657600000, 23.0800], [1479744000000, 20.8500], [1479830400000, 14.9800], [1479916800000, 14.1700], [1480003200000, 12.9600], [1480262400000, 14.3700], [1480348800000, 9.7200], [1480435200000, 13.7100], [1480521600000, 18.7500], [1480608000000, 18.5500], [1480867200000, 23.3900], [1480953600000, 20.3600], [1481040000000, 15.5200], [1481126400000, 16.7300], [1481212800000, 20.3600], [1481472000000, 16.7300], [1481558400000, 14.5200], [1481644800000, 13.9100], [1481731200000, 13.7100], [1481817600000, 13.3100], [1482076800000, 12.2700], [1482163200000, 12.4700], [1482249600000, 12.2700], [1482336000000, 14.2900], [1482422400000, 13.4800], [1482681600000, 11.600], [1482768000000, 9.400], [1482854400000, 10.0], [1482940800000, 9.7600], [1483027200000, 9.1600], [1483372800000, 8.7600], [1483459200000, 8.1700], [1483545600000, 7.3700], [1483632000000, 7.7700], [1483891200000, 6.9700], [1483977600000, 4.5700], [1484064000000, 5.1700], [1484150400000, 4.7500], [1484236800000, 4.5500], [1484496000000, 3.1700], [1484582400000, 1.3900], [1484668800000, 2.1800], [1484755200000, 2.1800], [1484841600000, 2.1800], [1485100800000, 2.1800], [1485187200000, 3.3700], [1485273600000, 3.7700], [1485360000000, 2.9800], [1486051200000, 3.5600], [1486310400000, 2.7700], [1486396800000, 3.7500], [1486483200000, 3.7500], [1486569600000, 3.7500], [1486656000000, 3.7500], [1486915200000, 4.1300], [1487001600000, 3.9300], [1487088000000, 4.9100], [1487174400000, 4.7200], [1487260800000, 3.7300], [1487520000000, 3.1400], [1487606400000, 2.5500], [1487692800000, 3.3400], [1487779200000, 3.3300], [1487865600000, 4.8900], [1488124800000, 3.5200], [1488211200000, 2.1400], [1488297600000, 1.3600], [1488384000000, 0.7800], [1488470400000, 0.9700], [1488729600000, 0.5800], [1488816000000, 0.5800], [1488902400000, 0.3900], [1488988800000, 0.3900], [1489075200000, 0.1900], [1489334400000, 0.9700], [1489420800000, 0.5800], [1489507200000, 0.1900], [1489593600000, 0.3900], [1489680000000, 0.5800], [1489939200000, 0.3900], [1490025600000, 0.1900], [1490112000000, 0.3800], [1490198400000, 0.1900], [1490284800000, 0], [1490544000000, 0.3800], [1490630400000, 0.3800], [1490716800000, 0.5700], [1490803200000, 0.7600], [1490889600000, 0.7600], [1491321600000, 0.5700], [1491408000000, 0.5700], [1491494400000, 0.5700], [1491753600000, 1.5200], [1491840000000, 1.3300], [1491926400000, 1.5200], [1492012800000, 4.9300], [1492099200000, 4.7700], [1492358400000, 12.9800], [1492444800000, 15.1200], [1492531200000, 12.2900], [1492617600000, 9.8300], [1492704000000, 12.1000], [1492963200000, 12.8500], [1493049600000, 11.6300], [1493136000000, 11.4400], [1493222400000, 13.8800], [1493308800000, 14.6300], [1493654400000, 15.2000], [1493740800000, 14.7200], [1493827200000, 15.0100], [1493913600000, 13.7000], [1494172800000, 12.0100], [1494259200000, 12.0300], [1494345600000, 13.6700], [1494432000000, 11.0500], [1494518400000, 9.5500], [1494777600000, 8.0500], [1494864000000, 13.4800], [1494950400000, 13.4800], [1495036800000, 12.5500], [1495123200000, 14.2300], [1495382400000, 18.9100], [1495468800000, 15.1600], [1495555200000, 15.9000], [1495641600000, 12.6400], [1495728000000, 12.4500], [1496160000000, 12.3800], [1496246400000, 11.0900], [1496332800000, 11.2800], [1496592000000, 10.1100], [1496678400000, 9.5600], [1496764800000, 9.3800], [1496851200000, 8.2400], [1496937600000, 7.3300], [1497196800000, 8.7800], [1497283200000, 8.5600], [1497369600000, 8.3900], [1497456000000, 10.9500], [1497542400000, 9.9800], [1497801600000, 7.0800], [1497888000000, 6.5300], [1497974400000, 7.7900], [1498060800000, 5.8000], [1498147200000, 7.2500], [1498406400000, 7.0700], [1498492800000, 7.9700], [1498579200000, 7.9700], [1498665600000, 9.2400], [1498752000000, 10.1400], [1499011200000, 10.8300], [1499097600000, 9.0300], [1499184000000, 11.7300], [1499270400000, 10.1100], [1499356800000, 9.0300], [1499616000000, 9.5500], [1499702400000, 19.0600], [1499788800000, 14.7500], [1499875200000, 23.2000], [1499961600000, 14.1800], [1500220800000, 10.7700], [1500307200000, 6.2800], [1500393600000, 6.6400], [1500480000000, 7.8900], [1500566400000, 4.4800], [1500825600000, 4.3000], [1500912000000, 4.1100], [1500998400000, 3.5800], [1501084800000, 3.5500], [1501171200000, 3.5500], [1501430400000, 3.5500], [1501516800000, 3.5500], [1501603200000, 3.5500], [1501689600000, 3.5500], [1501776000000, 1.5900], [1502035200000, 1.2400], [1502121600000, 1.0600], [1502208000000, 1.2400], [1502294400000, 1.0600], [1502380800000, 1.9400], [1502640000000, 1.7600], [1502726400000, 1.4100], [1502812800000, 0.7000], [1502899200000, 0.8800], [1502985600000, 0.8700], [1503244800000, 0.7000], [1503331200000, 0.5200], [1503417600000, 3.1500], [1503504000000, 0], [1503590400000, 0], [1503849600000, 0], [1503936000000, 0], [1504022400000, 2.4300], [1504108800000, 5.0400], [1504195200000, 11.1100], [1504454400000, 8.9500], [1504540800000, 9.4700], [1504627200000, 10.8200], [1504713600000, 6.3500], [1504800000000, 11.1500], [1505059200000, 8.0600], [1505145600000, 11.4900], [1505232000000, 4.9500], [1505318400000, 6.4800], [1505404800000, 1.3700], [1505664000000, 2.9000], [1505750400000, 5.4600], [1505836800000, 8.1900], [1505923200000, 3.9200], [1506009600000, 7.1700], [1506268800000, 5.4600], [1506355200000, 2.9000], [1506441600000, 2.3900], [1506528000000, 1.7100], [1506614400000, 1.8700], [1507478400000, 1.6800], [1507564800000, 32.7700], [1507651200000, 23.8700], [1507737600000, 34.7900], [1507824000000, 38.1500], [1508083200000, 29.3100], [1508169600000, 60.3000], [1508256000000, 76.2500], [1508342400000, 90.8000], [1508428800000, 85.6200], [1508688000000, 90.1500], [1508774400000, 83.8100], [1508860800000, 85.9800], [1508947200000, 83.9700], [1509033600000, 73.3300], [1509292800000, 68.6700], [1509379200000, 73.5900], [1509465600000, 72.9200], [1509552000000, 78.6100], [1509638400000, 63.5300], [1509897600000, 73.0100], [1509984000000, 76.3200], [1510070400000, 63.5800], [1510156800000, 52.8100], [1510243200000, 51.8100], [1510502400000, 53.6300], [1510588800000, 55.6100], [1510675200000, 58.2500], [1510761600000, 55.4500], [1510848000000, 42.2700], [1511107200000, 40.7600], [1511193600000, 36.1400], [1511280000000, 38.4500], [1511366400000, 31.1900], [1511452800000, 34.4300], [1511712000000, 27.5900], [1511798400000, 30.3300], [1511884800000, 27.8700], [1511971200000, 25.7000], [1512057600000, 32.4600], [1512316800000, 31.9100], [1512403200000, 27.1700], [1512489600000, 27.5700], [1512576000000, 32.1400], [1512662400000, 29.8200], [1512921600000, 34.8000], [1513008000000, 37.4000], [1513094400000, 41.3300], [1513180800000, 39.2200], [1513267200000, 43.9600], [1513526400000, 40.2300], [1513612800000, 37.9600], [1513699200000, 39.1000], [1513785600000, 42.3500], [1513872000000, 38.3600], [1514131200000, 39.4500], [1514217600000, 41.9800], [1514304000000, 44.6900], [1514390400000, 43.6600], [1514476800000, 44.5700], [1514822400000, 40.0600], [1514908800000, 36.0600], [1514995200000, 34.6200], [1515081600000, 42.9700], [1515340800000, 43.0200], [1515427200000, 43.6600], [1515513600000, 18.4600], [1515600000000, 19.4200], [1515686400000, 18.8800], [1515945600000, 21.8300], [1516032000000, 29.2100], [1516118400000, 31.4600], [1516204800000, 29.7000], [1516291200000, 17.2800], [1516550400000, 21.1900], [1516636800000, 17.6600], [1516723200000, 27.4900], [1516809600000, 24.6000], [1516896000000, 29.4900], [1517155200000, 30.5500], [1517241600000, 38.9100], [1517328000000, 34.0800], [1517414400000, 33.0100], [1517500800000, 29.8100], [1517760000000, 30.6100], [1517846400000, 29.4900], [1517932800000, 29.6500], [1518019200000, 35.9000], [1518105600000, 39.4200], [1518364800000, 44.7100], [1518451200000, 38.1300], [1518537600000, 35.9100], [1519228800000, 48.7100], [1519315200000, 50.8000], [1519574400000, 70.9900], [1519660800000, 91.5100], [1519747200000, 90.7100], [1519833600000, 86.7400], [1519920000000, 91.0800], [1520179200000, 99.3700], [1520265600000, 99.0500], [1520352000000, 98.2500], [1520438400000, 97.9400], [1520524800000, 98.4200], [1520784000000, 99.2000], [1520870400000, 98.8900], [1520956800000, 98.2500], [1521043200000, 94.4300], [1521129600000, 97.1400], [1521388800000, 98.5700], [1521475200000, 98.5700], [1521561600000, 98.8900], [1521648000000, 99.2100], [1521734400000, 99.3700], [1521993600000, 99.3700], [1522080000000, 99.5300], [1522166400000, 99.6900], [1522252800000, 99.6900], [1522339200000, 99.8400], [1522598400000, 99.6900], [1522684800000, 99.6900], [1522771200000, 99.6900], [1523203200000, 99.3700], [1523289600000, 99.6900], [1523376000000, 99.6900], [1523462400000, 99.6900], [1523548800000, 99.6900], [1523808000000, 99.6900], [1523894400000, 99.8400], [1523980800000, 99.6900], [1524067200000, 99.6900], [1524153600000, 99.6900], [1524412800000, 99.8400], [1524499200000, 99.5300], [1524585600000, 99.8400], [1524672000000, 99.8400], [1524758400000, 99.8400], [1525190400000, 99.8400], [1525276800000, 99.8400], [1525363200000, 99.6900], [1525622400000, 99.2300], [1525708800000, 99.2300], [1525795200000, 99.0700], [1525881600000, 99.0700], [1525968000000, 99.0800], [1526227200000, 99.0800], [1526313600000, 99.0800], [1526400000000, 98.9300], [1526486400000, 99.0800], [1526572800000, 98.9300], [1526832000000, 99.0800], [1526918400000, 99.0800], [1527004800000, 99.0800], [1527091200000, 99.0800], [1527177600000, 98.7800], [1527436800000, 98.1700], [1527523200000, 98.6200], [1527609600000, 98.6200], [1527696000000, 98.6200], [1527782400000, 99.0900], [1528041600000, 98.6200], [1528128000000, 98.0100], [1528214400000, 98.0100], [1528300800000, 96.9500], [1528387200000, 98.1800], [1528646400000, 97.7200], [1528732800000, 97.2700], [1528819200000, 96.5100], [1528905600000, 97.4200], [1528992000000, 97.8800], [1529337600000, 94.7000], [1529424000000, 96.3600], [1529510400000, 95.9300], [1529596800000, 96.1000], [1529856000000, 97.4500], [1529942400000, 96.2500], [1530028800000, 92.1900], [1530115200000, 89.1900], [1530201600000, 94.7600], [1530460800000, 91.4300], [1530547200000, 93.2300], [1530633600000, 91.7500], [1530720000000, 88.9100], [1530806400000, 88.4900], [1531065600000, 92.5300], [1531152000000, 92.2000], [1531238400000, 93.2500], [1531324800000, 92.8000], [1531411200000, 94.7800], [1531670400000, 94.3300], [1531756800000, 95.0500], [1531843200000, 91.4500], [1531929600000, 89.7600], [1532016000000, 89.0500], [1532275200000, 86.9400], [1532361600000, 84.0200], [1532448000000, 70.5600], [1532534400000, 73.2400], [1532620800000, 49.5600], [1532880000000, 33.7200], [1532966400000, 36.1800], [1533052800000, 33.2800], [1533139200000, 37.7000], [1533225600000, 39.6500], [1533484800000, 31.0800], [1533571200000, 30.8700], [1533657600000, 33.3800], [1533744000000, 38.2600], [1533830400000, 33.4300], [1534089600000, 48.2200], [1534176000000, 60.6200], [1534262400000, 46.9000], [1534348800000, 42.500], [1534435200000, 32.7900], [1534694400000, 25.3300], [1534780800000, 42.6700], [1534867200000, 33.6300], [1534953600000, 35.6000], [1535040000000, 25.4100], [1535299200000, 35.2100], [1535385600000, 30.1800], [1535472000000, 43.2000], [1535558400000, 35.5500], [1535644800000, 21.2400], [1535904000000, 39.9100], [1535990400000, 47.5700], [1536076800000, 38.8800], [1536163200000, 34.1700], [1536249600000, 48.9700], [1536508800000, 43.4000], [1536595200000, 63.2400], [1536681600000, 47.9400], [1536768000000, 42.1700], [1536854400000, 39.1200], [1537113600000, 39.9400], [1537200000000, 41.8400], [1537286400000, 37.3200], [1537372800000, 25.1800], [1537459200000, 20.9300], [1537804800000, 17.500], [1537891200000, 19.8600], [1537977600000, 27.6600], [1538064000000, 27.4300], [1538928000000, 26.5100], [1539014400000, 19.6000], [1539100800000, 16.5500], [1539187200000, 15.2300], [1539273600000, 17.7400], [1539532800000, 14.7600], [1539619200000, 11.0300], [1539705600000, 12.2500], [1539792000000, 8.4500], [1539878400000, 15.5700], [1540137600000, 21.1200], [1540224000000, 33.6700], [1540310400000, 30.8000], [1540396800000, 21.4900], [1540483200000, 17.8300], [1540742400000, 17.7700], [1540828800000, 32.5200], [1540915200000, 33.9500], [1541001600000, 39.2000], [1541088000000, 40.0900], [1541347200000, 46.4900], [1541433600000, 51.9400], [1541520000000, 51.6500], [1541606400000, 61.3200], [1541692800000, 60.6300], [1541952000000, 68.0500], [1542038400000, 57.4300], [1542124800000, 54.5600], [1542211200000, 61.9100], [1542297600000, 52.7000], [1542556800000, 66.1000], [1542643200000, 80.0600], [1542729600000, 61.4000], [1542816000000, 71.9400], [1542902400000, 52.7000], [1543161600000, 54.1300], [1543248000000, 44.0200], [1543334400000, 40.7400], [1543420800000, 40.3100], [1543507200000, 50.2800], [1543766400000, 50.5000], [1543852800000, 58.2200], [1543939200000, 59.4600], [1544025600000, 45.4800], [1544112000000, 20.7000], [1544371200000, 21.5800], [1544457600000, 19.6100], [1544544000000, 28.2100], [1544630400000, 38.6800], [1544716800000, 34.0800], [1544976000000, 26.1600], [1545062400000, 19.8300], [1545148800000, 13.4600], [1545235200000, 12.7600], [1545321600000, 10.8900], [1545580800000, 13.9600], [1545667200000, 17.9100], [1545753600000, 15.5400], [1545840000000, 11.9700], [1545926400000, 16.0100], [1546358400000, 9.6500], [1546444800000, 9.5000], [1546531200000, 9.4600], [1546790400000, 8.5200], [1546876800000, 8.5200], [1546963200000, 9.2200], [1547049600000, 8.5000], [1547136000000, 7.4900], [1547395200000, 7.8000], [1547481600000, 7.3800], [1547568000000, 14.4800], [1547654400000, 12.0800], [1547740800000, 32.4100], [1548000000000, 23.4100], [1548086400000, 8.5800], [1548172800000, 8.7000], [1548259200000, 13.7700], [1548345600000, 18.0600], [1548604800000, 13.9700], [1548691200000, 18.3600], [1548777600000, 16.4400], [1548864000000, 10.4800], [1548950400000, 10.8700], [1549814400000, 5.8300], [1549900800000, 5.0200], [1549987200000, 4.4800], [1550073600000, 5.4000], [1550160000000, 4.9700], [1550419200000, 6.8700], [1550505600000, 8.4900], [1550592000000, 5.5300], [1550678400000, 5.2600], [1550764800000, 4.6800], [1551024000000, 8.5800], [1551110400000, 10.9900], [1551196800000, 9.3500], [1551283200000, 13.5100], [1551369600000, 12.1500], [1551628800000, 10.4400], [1551715200000, 10.0400], [1551801600000, 11.4900], [1551888000000, 14.7600], [1551974400000, 16.1600], [1552233600000, 23.8800], [1552320000000, 31.2300], [1552406400000, 27.6500], [1552492800000, 38.6100], [1552579200000, 47.9100], [1552838400000, 61.6500], [1552924800000, 64.0500], [1553011200000, 63.4000], [1553097600000, 62.8900], [1553184000000, 63.4100], [1553443200000, 58.4200], [1553529600000, 53.7600], [1553616000000, 57.0500], [1553702400000, 53.9500], [1553788800000, 59.6100], [1554048000000, 59.3500], [1554134400000, 65.5800], [1554220800000, 65.2800], [1554307200000, 58.8600], [1554652800000, 55.3100], [1554739200000, 69.3500], [1554825600000, 79.0900], [1554912000000, 78.4400], [1554998400000, 77.4900], [1555257600000, 73.0300], [1555344000000, 56.0600], [1555430400000, 52.0600], [1555516800000, 37.6100], [1555603200000, 36.7700], [1555862400000, 55.4600], [1555948800000, 55.9900], [1556035200000, 65.3100], [1556121600000, 68.7700], [1556208000000, 72.8200], [1556467200000, 82.1500], [1556553600000, 82.4100], [1557072000000, 90.3100], [1557158400000, 92.2000], [1557244800000, 91.8200], [1557331200000, 89.8000], [1557417600000, 86.5400], [1557676800000, 92.4100], [1557763200000, 91.7000], [1557849600000, 91.4500], [1557936000000, 91.0700], [1558022400000, 92.7000], [1558281600000, 94.7200], [1558368000000, 94.3400], [1558454400000, 95.4700], [1558540800000, 94.8400], [1558627200000, 94.8400], [1558886400000, 95.2500], [1558972800000, 90.1400], [1559059200000, 87.5200], [1559145600000, 84.8900], [1559232000000, 82.5200], [1559491200000, 82.0200], [1559577600000, 72.9100], [1559664000000, 49.3100], [1559750400000, 50.2500], [1560096000000, 50.7500], [1560182400000, 45.5900], [1560268800000, 45.0900], [1560355200000, 48.0800], [1560441600000, 49.6300], [1560700800000, 45.3600], [1560787200000, 45.7400], [1560873600000, 47.4700], [1560960000000, 48.1600], [1561046400000, 49.8800], [1561305600000, 47.5500], [1561392000000, 43.8200], [1561478400000, 61.7500], [1561564800000, 56.1700], [1561651200000, 53.9700], [1561910400000, 49.5100], [1561996800000, 54.1000], [1562083200000, 54.4000], [1562169600000, 57.5100], [1562256000000, 59.3400], [1562515200000, 72.9800], [1562601600000, 67.5600], [1562688000000, 65.00], [1562774400000, 83.2900], [1562860800000, 82.4400], [1563120000000, 92.0900], [1563206400000, 93.5900], [1563292800000, 91.9000], [1563379200000, 91.6700], [1563465600000, 90.8200], [1563724800000, 76.1200], [1563811200000, 84.5600], [1563897600000, 79.4000], [1563984000000, 77.9800], [1564070400000, 77.0100], [1564329600000, 57.8400], [1564416000000, 65.6300], [1564502400000, 64.6700], [1564588800000, 71.9800], [1564675200000, 84.6700], [1564934400000, 87.4300], [1565020800000, 87.5400], [1565107200000, 86.4700], [1565193600000, 90.0700], [1565280000000, 91.8800], [1565539200000, 92.7200], [1565625600000, 90.6900], [1565712000000, 94.0300], [1565798400000, 94.8700], [1565884800000, 95.00], [1566144000000, 92.6200], [1566230400000, 93.5800], [1566316800000, 91.4500], [1566403200000, 91.8100], [1566489600000, 94.5600], [1566748800000, 95.4000], [1566835200000, 95.0600], [1566921600000, 95.0600], [1567008000000, 95.3000], [1567094400000, 95.0600], [1567353600000, 95.6500], [1567440000000, 95.3000], [1567526400000, 95.3000], [1567612800000, 96.0400], [1567699200000, 95.3400], [1567958400000, 94.7600], [1568044800000, 95.6900], [1568131200000, 96.0200], [1568217600000, 95.7900], [1568563200000, 95.4800], [1568649600000, 96.0600], [1568736000000, 95.7100], [1568822400000, 96.6400], [1568908800000, 96.1800], [1569168000000, 95.9500], [1569254400000, 97.3400], [1569340800000, 97.9200], [1569427200000, 96.5500], [1569513600000, 96.7700], [1569772800000, 97.9200], [1570464000000, 98.1700], [1570550400000, 97.9500], [1570636800000, 97.8300], [1570723200000, 97.3800], [1570982400000, 97.2700], [1571068800000, 97.8400], [1571155200000, 98.8700], [1571241600000, 99.3200], [1571328000000, 99.6600], [1571587200000, 99.2100], [1571673600000, 98.8700], [1571760000000, 98.8700], [1571846400000, 99.3200], [1571932800000, 99.4400], [1572192000000, 98.7600], [1572278400000, 99.6600], [1572364800000, 99.5500], [1572451200000, 99.8900], [1572537600000, 99.7800], [1572796800000, 99.7800], [1572883200000, 99.7800], [1572969600000, 99.7800], [1573056000000, 99.6600], [1573142400000, 99.5600], [1573401600000, 99.2200], [1573488000000, 99.6700], [1573574400000, 99.5600], [1573660800000, 99.1100], [1573747200000, 99.3300], [1574006400000, 99.4500], [1574092800000, 99.7800], [1574179200000, 99.7800], [1574265600000, 99.7800], [1574352000000, 99.6700], [1574611200000, 99.5600], [1574697600000, 99.1200], [1574784000000, 97.9100], [1574870400000, 98.1300], [1574956800000, 96.3900], [1575216000000, 90.7100], [1575302400000, 93.8900], [1575388800000, 98.2600], [1575475200000, 98.6900], [1575561600000, 98.5900], [1575820800000, 96.7500], [1575907200000, 97.4000], [1575993600000, 98.1600], [1576080000000, 97.4100], [1576166400000, 97.2000], [1576425600000, 97.4100], [1576512000000, 96.2300], [1576598400000, 90.8400], [1576684800000, 82.9600], [1576771200000, 73.4700], [1577030400000, 83.3700], [1577116800000, 48.0100], [1577203200000, 45.6800], [1577289600000, 51.6100], [1577376000000, 28.8700], [1577635200000, 14.4400], [1577721600000, 27.6000], [1577894400000, 17.4100], [1577980800000, 15.0700], [1578240000000, 14.0100], [1578326400000, 23.0400], [1578412800000, 23.6200], [1578499200000, 56.4600], [1578585600000, 27.8600], [1578844800000, 32.4200], [1578931200000, 30.1600], [1579017600000, 44.9700], [1579104000000, 45.2900], [1579190400000, 50.4200], [1579449600000, 37.1000], [1579536000000, 69.4100], [1579622400000, 61.2800], [1579708800000, 77.0200], [1580659200000, 78.4200], [1580745600000, 78.0000], [1580832000000, 80.6000], [1580918400000, 81.6000], [1581004800000, 77.9000], [1581264000000, 74.2700], [1581350400000, 78.0100], [1581436800000, 76.6600], [1581523200000, 67.3600], [1581609600000, 62.6400], [1581868800000, 64.3700], [1581955200000, 66.1500], [1582041600000, 53.3400], [1582128000000, 46.0500], [1582214400000, 58.2800], [1582473600000, 67.8600], [1582560000000, 76.9600], [1582646400000, 68.7400], [1582732800000, 79.9400], [1582819200000, 84.1100], [1583078400000, 87.3000], [1583164800000, 90.4400], [1583251200000, 88.5400], [1583337600000, 89.1700], [1583424000000, 94.2100], [1583683200000, 98.6100], [1583769600000, 93.0600], [1583856000000, 94.3600], [1583942400000, 92.3800], [1584028800000, 88.9400], [1584288000000, 94.7700], [1584374400000, 92.6000], [1584460800000, 96.2600], [1584547200000, 88.8200], [1584633600000, 95.3000], [1584892800000, 96.7700], [1584979200000, 97.4600], [1585065600000, 98.6400], [1585152000000, 99.3200], [1585238400000, 99.2300], [1585497600000, 98.9400], [1585584000000, 98.6600], [1585670400000, 98.3700], [1585756800000, 98.4500], [1585843200000, 99.0300], [1586188800000, 98.5600], [1586275200000, 98.3700], [1586361600000, 98.6600], [1586448000000, 98.7400], [1586707200000, 98.7400], [1586793600000, 98.7500], [1586880000000, 98.7500], [1586966400000, 98.8500], [1587052800000, 98.8500], [1587312000000, 98.9600], [1587398400000, 99.0600], [1587484800000, 98.8700], [1587571200000, 98.9700], [1587657600000, 98.7800], [1587916800000, 98.7800], [1588003200000, 98.9600], [1588089600000, 98.9600], [1588176000000, 98.9600], [1588694400000, 97.0900], [1588780800000, 97.5600], [1588867200000, 97.8400], [1589126400000, 97.8400], [1589212800000, 97.8400], [1589299200000, 98.4100], [1589385600000, 98.6900], [1589472000000, 98.6900], [1589731200000, 97.4600], [1589817600000, 98.2200], [1589904000000, 98.3100], [1589990400000, 98.1300], [1590076800000, 98.1300], [1590336000000, 95.3200], [1590422400000, 98.0400], [1590508800000, 96.5500], [1590595200000, 96.0000], [1590681600000, 96.5500], [1590940800000, 96.9300], [1591027200000, 95.0700], [1591113600000, 92.6500], [1591200000000, 95.1700], [1591286400000, 96.5700], [1591545600000, 93.8900], [1591632000000, 93.6200], [1591718400000, 95.1900], [1591804800000, 96.3000], [1591891200000, 96.9500], [1592150400000, 97.5000], [1592236800000, 98.5200], [1592323200000, 98.4300], [1592409600000, 97.9700], [1592496000000, 98.0600], [1592755200000, 98.5300], [1592841600000, 98.3400], [1592928000000, 98.6100], [1593360000000, 98.5400], [1593446400000, 99.3600], [1593532800000, 98.9000], [1593619200000, 97.3500], [1593705600000, 98.0100], [1593964800000, 92.7600], [1594051200000, 93.3000], [1594137600000, 90.6700], [1594224000000, 84.7100], [1594310400000, 89.4300], [1594569600000, 87.6700], [1594656000000, 86.1400], [1594742400000, 92.1700], [1594828800000, 91.4500], [1594915200000, 96.2300], [1595174400000, 80.0900], [1595260800000, 92.0200], [1595347200000, 92.5800], [1595433600000, 92.4600], [1595520000000, 93.0000], [1595779200000, 92.3800], [1595865600000, 92.2900], [1595952000000, 92.7500], [1596038400000, 96.0300], [1596124800000, 95.9400], [1596384000000, 94.7100], [1596470400000, 96.1200], [1596556800000, 94.8000], [1596643200000, 93.2100], [1596729600000, 92.2500], [1596988800000, 92.2700], [1597075200000, 93.4200], [1597161600000, 85.9500], [1597248000000, 66.9600], [1597334400000, 64.1600], [1597593600000, 60.2300], [1597680000000, 46.5100], [1597766400000, 46.0300], [1597852800000, 61.3100], [1597939200000, 47.1700], [1598198400000, 52.7800], [1598284800000, 54.2100], [1598371200000, 58.0600], [1598457600000, 79.0700], [1598544000000, 84.0000], [1598803200000, 73.8800], [1598889600000, 76.3200], [1598976000000, 85.8500], [1599062400000, 84.4700], [1599148800000, 70.9800], [1599408000000, 60.5700], [1599494400000, 69.8000], [1599580800000, 60.1400], [1599667200000, 43.2200], [1599753600000, 43.7400], [1600012800000, 27.9300], [1600099200000, 19.8300], [1600185600000, 12.9200], [1600272000000, 10.5900], [1600358400000, 16.0800], [1600617600000, 9.0400], [1600704000000, 15.1500], [1600790400000, 13.8600], [1600876800000, 15.7500], [1600963200000, 17.0100], [1601222400000, 16.7000], [1601308800000, 14.0300], [1601395200000, 16.8500], [1602172800000, 76.4300], [1602432000000, 64.6800], [1602518400000, 65.3800], [1602604800000, 79.8000], [1602691200000, 53.2800], [1602777600000, 66.9200], [1603036800000, 37.6100], [1603123200000, 75.8100], [1603209600000, 48.7300], [1603296000000, 43.3900], [1603382400000, 21.5300], [1603641600000, 42.3900], [1603728000000, 54.3800], [1603814400000, 56.2400], [1603900800000, 75.1300], [1603987200000, 70.5500], [1604246400000, 57.2200], [1604332800000, 55.0000], [1604419200000, 55.7200], [1604505600000, 39.7000], [1604592000000, 37.8000], [1604851200000, 45.3100], [1604937600000, 37.9400], [1605024000000, 31.6600], [1605110400000, 47.5700], [1605196800000, 56.2700], [1605456000000, 60.9200], [1605542400000, 49.4100], [1605628800000, 30.8500], [1605715200000, 35.9600], [1605801600000, 36.9000], [1606060800000, 31.1300], [1606147200000, 26.1900], [1606233600000, 14.8100], [1606320000000, 11.6200], [1606406400000, 9.9400], [1606665600000, 9.4500], [1606752000000, 11.5500], [1606838400000, 11.1200], [1606924800000, 14.4600], [1607011200000, 25.9800], [1607270400000, 34.4500], [1607356800000, 39.6300], [1607443200000, 45.7400], [1607529600000, 67.8900], [1607616000000, 58.1100], [1607875200000, 76.3400], [1607961600000, 80.4900], [1608048000000, 90.6400], [1608134400000, 93.5700], [1608220800000, 91.8200], [1608480000000, 92.9000], [1608566400000, 92.9900], [1608652800000, 81.8300], [1608739200000, 79.4000], [1608825600000, 81.6100], [1609084800000, 81.9800], [1609171200000, 79.1600], [1609257600000, 58.4800], [1609344000000, 56.9400], [1609689600000, 49.5400], [1609776000000, 51.4500], [1609862400000, 58.3500], [1609948800000, 55.5300], [1610035200000, 55.9100], [1610294400000, 59.1500], [1610380800000, 49.4200], [1610467200000, 42.1800], [1610553600000, 42.3500], [1610640000000, 44.5600], [1610899200000, 43.4900], [1610985600000, 43.9000], [1611072000000, 62.9900], [1611158400000, 76.1000], [1611244800000, 92.3700], [1611504000000, 94.6900], [1611590400000, 90.5500], [1611676800000, 81.9700], [1611763200000, 73.8300], [1611849600000, 59.8400], [1612108800000, 74.4200], [1612195200000, 74.7500], [1612281600000, 78.4700], [1612368000000, 74.2000], [1612454400000, 92.4400], [1612713600000, 94.5800], [1612800000000, 92.5900], [1612886400000, 94.4200], [1613577600000, 96.4100], [1613664000000, 97.8000], [1613923200000, 97.9600], [1614009600000, 98.1200], [1614096000000, 98.4500], [1614182400000, 98.8600], [1614268800000, 98.2900], [1614528000000, 96.5700], [1614614400000, 95.4400], [1614700800000, 93.1000], [1614787200000, 82.3700], [1614873600000, 87.4900], [1615132800000, 45.8600], [1615219200000, 42.2100], [1615305600000, 43.4300], [1615392000000, 44.6900], [1615478400000, 43.3100], [1615737600000, 21.9800], [1615824000000, 19.4800], [1615910400000, 18.3500], [1615996800000, 21.9500], [1616083200000, 20.5200]];
/*规模变动 mom-较上期环比*/
var Data_fluctuationScale = {
    "categories": ["2020-03-31", "2020-06-30", "2020-09-30", "2020-12-31", "2021-02-19"],
    "series": [{"y": 7.45, "mom": "60.40%"}, {"y": 9.62, "mom": "29.05%"}, {"y": 9.36, "mom": "-2.66%"}, {
        "y": 9.46,
        "mom": "1.03%"
    }, {"y": 11.79, "mom": "--"}]
};
/*持有人结构*/
var Data_holderStructure = {
    "series": [{"name": "机构持有比例", "data": [5.6, 0.15, 0.66, 0.57]}, {
        "name": "个人持有比例",
        "data": [94.4, 99.85, 99.34, 99.43]
    }, {"name": "内部持有比例", "data": [0.071, 0.0242, 0.0228, 0.0139]}],
    "categories": ["2018-12-31", "2019-06-30", "2019-12-31", "2020-06-30"]
};
/*资产配置*/
var Data_assetAllocation = {
    "series": [{
        "name": "股票占净比",
        "type": null,
        "data": [94.02, 94.51, 94.26, 94.23],
        "yAxis": 0
    }, {"name": "债券占净比", "type": null, "data": [0, 0, 0, 0], "yAxis": 0}, {
        "name": "现金占净比",
        "type": null,
        "data": [6.79, 6.94, 6.15, 6.7],
        "yAxis": 0
    }, {"name": "净资产", "type": "line", "data": [7.4510177208, 9.6152838564, 9.3592814573, 9.4558339875], "yAxis": 1}],
    "categories": ["2020-03-31", "2020-06-30", "2020-09-30", "2020-12-31"]
};
/*业绩评价 ['选股能力', '收益率', '抗风险', '稳定性','择时能力']*/
var Data_performanceEvaluation = {
    "avr": "58.50",
    "categories": ["选证能力", "收益率", "跟踪误差", "超额收益", "管理规模"],
    "dsc": ["反映基金挑选证券而实现风险调整\u003cbr\u003e后获得超额收益的能力", "根据阶段收益评分，反映基金的盈利能力", "根据基金跟踪指数的密切程度评分", "反映基金投资的超额风险所带来的超额收益", "根据基金的资产规模评分"],
    "data": [60.0, 90.0, 50.0, 50.0, 70.0]
};
/*现任基金经理*/
var Data_currentFundManager = [{
    "id": "30191326",
    "pic": "https://pdf.dfcfw.com/pdf/H8_PNG30191326_1.jpg",
    "name": "胡洁",
    "star": 3,
    "workTime": "8年又159天",
    "fundSize": "512.74亿(17只基金)",
    "power": {
        "avr": "58.04",
        "categories": ["经验值", "收益率", "跟踪误差", "超额收益", "管理规模"],
        "dsc": ["反映基金经理从业年限和管理基金的经验", "根据基金经理投资的阶段收益评分，反映\u003cbr\u003e基金经理投资的盈利能力", "根据基金跟踪指数的密切程度评分，反\u003cbr\u003e应基金经理的管理能力", "根据基金经理投资的超额风险所带来的\u003cbr\u003e超额收益评分", "根据基金经理现任管理基金资产规模评分"],
        "data": [86.40, 83.40, 35.0, 51.50, 88.40],
        "jzrq": "2021-03-19"
    },
    "profit": {
        "categories": ["任期收益", "同类平均", "沪深300"],
        "series": [{
            "data": [{"name": null, "color": "#7cb5ec", "y": -23.7071}, {
                "name": null,
                "color": "#414c7b",
                "y": 22.01
            }, {"name": null, "color": "#f7a35c", "y": 3.43}]
        }],
        "jzrq": "2021-03-19"
    }
}];
/*申购赎回*/
var Data_buySedemption = {
    "series": [{"name": "期间申购", "data": [6.56, 0.00, 2.72, 0.00]}, {
        "name": "期间赎回",
        "data": [7.12, 0.00, 3.48, 0.00]
    }, {"name": "总份额", "data": [7.11, 7.03, 6.45, 7.79]}],
    "categories": ["2020-09-30", "2020-12-15", "2020-12-31", "2021-02-19"]
};
/*同类型基金涨幅榜（页面底部通栏）*/
var swithSameType = [['502023_鹏华国证钢铁行业指数_14.35', '168203_中融国证钢铁行业指数_13.96', '008189_国泰中证钢铁ETF联_12.82', '008190_国泰中证钢铁ETF联_12.80', '164908_交银中证环境治理(L_10.04'], ['008099_广发价值领先混合_34.15', '008437_九泰行业优选混合A_29.63', '008438_九泰行业优选混合C_29.62', '090018_大成新锐产业混合_28.33', '001300_大成睿景灵活配置混合_25.97'], ['003834_华夏能源革新股票_47.96', '001951_金鹰改革红利混合_47.42', '008099_广发价值领先混合_44.97', '002943_广发多因子混合_40.47', '000594_大摩进取优选股票_39.73'], ['005968_创金合信工业周期股票_148.64', '005969_创金合信工业周期股票_146.95', '005888_华夏新兴消费混合A_129.23', '005004_交银品质升级混合_128.16', '005889_华夏新兴消费混合C_128.11'], ['001679_前海开源中国稀缺资产_277.04', '002079_前海开源中国稀缺资产_275.94', '001875_前海开源沪港深优势精_204.25', '001643_汇丰晋信智造先锋股票_194.32', '001644_汇丰晋信智造先锋股票_190.17']];
