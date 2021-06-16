var config = {
    rem: document.documentElement.clientWidth / 24,
    color: '#fff',
    title: {
        padding: 2,
        top: 2,
        left: 'center'
    },
    series: {
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisLabel: {
            show: false
        },
        pointer: {
            show: false
        }
    },
    data: {}
};


// 厂房人员监控 
var numMax = 300;//最大人数 
var numMin = 0;//最少人数 
var departmentA = 120;//A部门人数 
var departmentB = 80;//B部门人数 
var departmentC = 60;//C部门人数 
var departmentD = 210;//外来人数 

function WPMOptions(config) {//参数函数
    var seriesProgress = {
        show: true,
        width: config.rem / 8
    };
    var seriesAxisLine = {
        show: true,
        lineStyle: {
            width: config.rem / 8
        }
    };
    var opRadius = '70%';
    var opCenter = [
        ["14%", "75%"],
        ["38%", "75%"],
        ["62%", "75%"],
        ["86%", "75%"],
    ];
    return {
        title: {
            text: '厂房人员监控',
            textStyle: {
                color: config.color,
                fontSize: config.rem / 6 * 1.5
            },
            top: config.title.top,
            left: config.title.left,
            padding: config.title.padding
        },
        series: [
            // 部门A
            {
                type: 'gauge',
                center: opCenter[0],
                radius: opRadius,
                startAngle: 210,
                endAngle: -30,
                min: numMin,
                max: numMax,
                progress: seriesProgress,
                axisLine: seriesAxisLine,
                axisTick: config.series.axisTick,
                splitLine: config.series.splitLine,
                axisLabel: config.series.axisLabel,
                pointer: config.series.pointer,
                itemStyle: {
                    color: '#b20a2c'
                },
                detail: {
                    color: config.color,
                    fontWeight: 'normal',
                    fontFamily: 'sans-serif',
                    fontSize: config.rem / 6,
                    lineHeight: config.rem / 6 * 1.2,
                    offsetCenter: [0, 0],
                    formatter: '{value}\n部门A'
                },
                data: [{
                    value: departmentA
                }]
            },
            // 部门B
            {
                type: 'gauge',
                center: opCenter[1],
                radius: opRadius,
                startAngle: 210,
                endAngle: -30,
                min: numMin,
                max: numMax,
                progress: seriesProgress,
                axisLine: seriesAxisLine,
                axisTick: config.series.axisTick,
                splitLine: config.series.splitLine,
                axisLabel: config.series.axisLabel,
                pointer: config.series.pointer,
                itemStyle: {
                    color: '#fc4a1a'
                },
                detail: {
                    color: config.color,
                    fontWeight: 'normal',
                    fontFamily: 'sans-serif',
                    fontSize: config.rem / 6,
                    lineHeight: config.rem / 6 * 1.2,
                    offsetCenter: [0, 0],
                    formatter: '{value}\n部门B'
                },
                data: [{
                    value: departmentB
                }]
            },
            // 部门C
            {
                type: 'gauge',
                center: opCenter[2],
                radius: opRadius,
                startAngle: 210,
                endAngle: -30,
                min: numMin,
                max: numMax,
                progress: seriesProgress,
                axisLine: seriesAxisLine,
                axisTick: config.series.axisTick,
                splitLine: config.series.splitLine,
                axisLabel: config.series.axisLabel,
                pointer: config.series.pointer,
                itemStyle: {
                    color: '#f7b733'
                },
                detail: {
                    color: config.color,
                    fontWeight: 'normal',
                    fontFamily: 'sans-serif',
                    fontSize: config.rem / 6,
                    lineHeight: config.rem / 6 * 1.2,
                    offsetCenter: [0, 0],
                    formatter: '{value}\n部门C'
                },
                data: [{
                    value: departmentC
                }]
            },
            // 部门D
            {
                type: 'gauge',
                center: opCenter[3],
                radius: opRadius,
                startAngle: 210,
                endAngle: -30,
                min: numMin,
                max: numMax,
                progress: seriesProgress,
                axisLine: seriesAxisLine,
                axisTick: config.series.axisTick,
                splitLine: config.series.splitLine,
                axisLabel: config.series.axisLabel,
                pointer: config.series.pointer,
                itemStyle: {
                    color: '#cac531'
                },
                detail: {
                    color: config.color,
                    fontWeight: 'normal',
                    fontFamily: 'sans-serif',
                    fontSize: config.rem / 6,
                    lineHeight: config.rem / 6 * 1.2,
                    offsetCenter: [0, 0],
                    formatter: '{value}\n部门D'
                },
                data: [{
                    value: departmentD
                }]
            }
        ]
    }
};


// 产品质检数据
var PQDOdata = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [10, 10, 9, 7, 8, 7, 7, 9, 7, 9]
];

function PQDOption(config) {
    return {
        title: {
            text: '产品质检数据',
            textStyle: {
                color: config.color,
                fontSize: config.rem / 6 * 1.5
            },
            top: config.title.top,
            left: config.title.left,
            padding: config.title.padding,
        },
        tooltip: {
            trigger: 'axis',
            confine: true,
            formatter: '{a}：{c}',
            padding: config.rem / 8,
            textStyle: {
                fontSize: config.rem / 5
            },
            enterable: true
        },
        legend: {
            data: ['评分'],
            show: false
        },
        xAxis: {
            data: PQDOdata[0],
            type: 'category',
            boundaryGap: false,
            axisLabel: {
                fontSize: config.rem / 6
            },
            splitLine: config.series.splitLine,
            axisLine: config.series.axisLine,
            axisTick: config.series.axisTick
        },
        yAxis: {
            min: 7,
            type: 'value',
            interval: 0.5,
            axisLabel: {
                fontSize: config.rem / 6
            },
            splitLine: config.series.splitLine,
            axisLine: config.series.axisLine,
            axisTick: config.series.axisTick
        },
        grid: {
            left: '10%',
            top: '75%',
            bottom: '75%',
            right: '2%'
        },
        series: [{
            name: '评分',
            type: 'line',
            showSymbol: false,
            data: PQDOdata[1],
            smooth: true,
            areaStyle: {
                color: '#0044F0'
            },
            lineStyle: {
                color: '#0044F0',
                width: config.rem / 32,
            }
        }]
    }
};

// 创建表格
function creteTable(element) {
    var data = {
        th: ['产品类型', '产品纯度', '产品净度', '检测率', '发货率', '检测时间'],
        tr: [
            ['产品一', 80, 100, 70, 80, '21/5/29'],
            ['产品二', 80, 100, 70, 80, '21/5/29'],
            ['产品三', 80, 100, 70, 80, '21/5/29'],
            ['产品四', 80, 100, 70, 80, '21/5/29'],
            ['产品五', 80, 100, 70, 80, '21/5/29'],
            ['产品六', 80, 100, 70, 80, '21/5/29']
        ],
        data: '',
    }
    // 1. 创建表格
    var table = document.createElement('div');
    var thead = document.createElement('div');
    var tbody = document.createElement('div');
    var tr = document.createElement('div');
    var th = document.createElement('div');
    var td = document.createElement('div');

    for (var i = 0; i < 6; i++) {
        var th = '<div class="th">' + data.th[i] + '</div>'
        data.data += th;
    }

    tr.setAttribute('class', 'tr');
    tr.innerHTML = data.data;

    thead.appendChild(tr);

    data.data = '';
    trList = ''
    for (var i = 0; i < 6; i++) {
        for (var j = 0; j < 6; j++) {
            var td = '<div class="td">' + data.tr[i][j] + '</div>'
            data.data += td
        }
        var tr = '<div class="tr" data-row="' + (i + 1) + '">' + data.data + '</div>'
        trList += tr;
        data.data = '';
    }

    table.setAttribute('class', 'table');

    thead.setAttribute('class', 'thead');
    table.appendChild(thead);

    tbody.setAttribute('class', 'tbody');
    tbody.setAttribute('id', 'scrollBox');
    tbody.innerHTML = trList;
    table.appendChild(tbody);

    element.appendChild(table);
}

// 库房库存量监控
function WIMOption(config) {
    WIMdata = [
        { value: 1048, name: '物料一' },
        { value: 735, name: '物料二' },
        { value: 580, name: '物料三' },
        { value: 484, name: '物料四' },
        { value: 300, name: '物料五' }
    ]
    return {
        title: {
            text: '库房库存量监控',
            textStyle: {
                color: config.color,
                fontSize: config.rem / 6 * 1.5
            },
            top: config.title.top,
            left: config.title.left,
            padding: config.title.padding,
        },
        tooltip: {
            trigger: 'item',
            confine: true,
            padding: config.rem / 8,
            textStyle: {
                fontSize: config.rem / 5
            },
            enterable: true
        },
        legend: {
            data: ['物料一', '物料二', '物料三', '物料四', '物料五'],
            padding: config.rem/32, 
            itemGap: config.rem / 8, 
            itemWidth: config.rem / 4, 
            itemHeight: config.rem / 4, 
            top: '12%', 
            textStyle: {
                color: 'auto', 
                fontSize: config.rem / 6
            }
        },
        series: [{
            type: 'pie',
            radius: ['30%', '55%'],//内外圈
            avoidLabelOverlap: false,//标签不重叠
            center: ['50%', '65%'],
            itemStyle: {
                borderRadius: config.rem / 20,
                borderWidth: 0
            },
            label: {
                show: true,
                formatter: '{a|{c}}\n{hr|}\n{a|{b}}',
                rich: {
                    a: {
                        color: 'auto',
                        lineHeight: config.rem / 4,
                        align: 'center',
                        fontSize: config.rem / 6
                    },
                    hr: {
                        borderColor: 'auto',
                        width: '100%',
                        borderWidth: 1,
                        height: 0
                    },
                }
            },
            emphasis: {//高亮设置
                label: {
                    show: true,
                    fontSize: config.rem / 6,
                }
            },
            labelLine: {//标签引导线
                show: true,
                color: 'auto',
                lineStyle: {
                    width: config.rem / 30,
                },
                length: config.rem / 8,
                length2: config.rem / 2,
            },
            data: WIMdata,
        }]
    }
}

// 厂房视频监控画面
function WMOption(element) {
    var WMdata = [
        '/img/iframe/自动化综合车间/gif1.gif',
        '/img/iframe/自动化综合车间/gif2.gif',
        '/img/iframe/自动化综合车间/gif3.gif',
        '/img/iframe/自动化综合车间/gif4.gif'
    ]
    var WMdiv = document.createElement("div");
    var imgList = ''
    for (var i = 0; i < 4; i++) {
        var img = '<img src="' + WMdata[i] + '"/>';
        imgList += img;
    }
    WMdiv.innerHTML = imgList;
    element.appendChild(WMdiv);
}


// 生产实时监控
function PRTOption(config) {
    var PRTdata = [
        ['date', '生产订单', '物料投入'],
        ['5月1日', 43.3, 85.8],
        ['5月2日', 83.1, 73.4],
        ['5月3日', 65.2, 82.5],
        ['5月4日', 53.9, 39.1],
        ['5月5日', 43.3, 85.8],
        ['5月6日', 83.1, 73.4],
        ['5月7日', 65.2, 82.5],
        ['5月8日', 53.9, 39.1]
    ]
    return {
        title: {
            text: '生产实时监控',
            textStyle: {
                color: config.color,
                fontSize: config.rem / 6 * 1.5
            },
        },
        legend: {
            show: true,
            itemGap: config.rem / 8,
            itemWidth: config.rem / 4,
            itemHeight: config.rem / 4,
            textStyle: {
                color: 'auto',
                fontSize: config.rem / 6
            }
        },
        tooltip: {
            trigger: 'axis',
            confine: true,
            padding: config.rem / 8,
            textStyle: {
                fontSize: config.rem / 5
            },
            enterable: true
        },
        dataset: {
            source: PRTdata
        },
        xAxis: {
            type: 'category',
            boundaryGap: true,
            axisLabel: {
                fontSize: config.rem / 6
            },
            splitLine: config.series.splitLine,
            axisLine: config.series.axisLine,
            axisTick: config.series.axisTick
        },
        yAxis: {
            axisLabel: {
                fontSize: config.rem / 6
            },
            splitLine: config.series.splitLine,
            axisLine: config.series.axisLine,
            axisTick: config.series.axisTick
        },
        grid: {
            left: '10%',
            top: '80%',
            bottom: '70%',
            right: 0
        },
        series: [
            {
                type: 'bar',
                // todo: 显示生产订单total
            },
            {
                type: 'bar',
                // todo: 显示物料投入total
            },
        ]
        // todo: 具有分割正方形的效果
    };
}


// 厂房选择下拉器
var ESdata = {
    data: ['workspace-1', 'workspace-2', 'workspace-3', 'workspace-4']
}
function createSelect(element, name) {
    var envSelect = document.createElement('select');
    envSelect.setAttribute('id', 'env-select');
    var str = '<option value="">- - -</option>';
    for (var i = 0; i < 4; i++) {
        str += '<option value="' + ESdata.data[i] + '">' + name + (i + 1) + '</option>'
    }
    envSelect.innerHTML = str;
    element.appendChild(envSelect)
}
// 厂房环境监控
function WCEOption(config) {
    return {
        title: {
            text: '厂房环境监控',
            textStyle: {
                color: config.color,
                fontSize: config.rem / 6 * 1.5
            },
            left: config.title.left,
            subtext: '环境各项指标',
            subtextStyle: {
                fontSize: config.rem/6
            }
        },
    }
}
// 环境指数
var WEdata = [
    [{
        before: '废气',
        value: '12',
        after: 't/a'
    }, {
        before: '废水',
        value: '12',
        after: 'm³/a',
    }, {
        before: '湿度',
        value: '12',
        after: '%RH'
    }], [{
        before: '噪音',
        value: '12',
        after: 'dB(A)'
    }, {
        before: '粉尘',
        value: '12',
        after: 'mg/NM³'
    }, {
        before: '温度',
        value: '12',
        after: '℃'
    }]
]
function createEnv(element) {
    var div = document.createElement('div');
    div.setAttribute('id', 'envBox');
    element.appendChild(div);
    for (var i = 0; i < 2; i++) {
        var col = document.createElement('div');
        col.setAttribute('class', 'colEnv-' + i);
        $('#envBox').append(col);
        for (var j = 0; j < 3; j++) {
            var data = WEdata[i][j]
            var box = document.createElement('div');
            box.setAttribute('class', 'envBox-' + i + '-' + j);
            box.innerHTML = data.value;
            $('.colEnv-' + i).append(box);
        }
    }
}
// 厂房设备监控
var WMQdata = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [10, 30, 20, 50, 30, 40, 43, 20, 60]
]
function WMQOptions(config) {
    return {
        title: {
            text: '厂房设备监控',
            textStyle: {
                color: config.color,
                fontSize: config.rem / 6 * 1.5
            },
            left: config.title.left,
        },
        tooltip: {
            trigger: 'axis',
            confine: true,
            formatter: '{a}：{c}',
            padding: config.rem / 8,
            textStyle: {
                fontSize: config.rem / 5
            }
        },
        legend: {
            data: ['评分'],
            show: false
        },
        xAxis: {
            data: WMQdata[0],
            type: 'category',
            boundaryGap: false,
            axisLabel: {
                fontSize: config.rem / 6
            },
            splitLine: config.series.splitLine,
            axisLine: config.series.axisLine,
            axisTick: config.series.axisTick
        },
        yAxis: {
            interval: 10,
            axisLabel: {
                fontSize: config.rem / 6
            },
            splitLine: config.series.splitLine,
            axisLine: config.series.axisLine,
            axisTick: config.series.axisTick
        },
        grid: {
            left: '10%',
            top: '80%',
            bottom: '70%',
            right: '5%'
        },
        series: [{
            name: '评分',
            type: 'line',
            showSymbol: false,
            data: WMQdata[1],
            smooth: true,
            areaStyle: {
                color: '#0044F0'
            },
            lineStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 1, color: '#c6ffdd' // 0% 处的颜色
                    }, {
                        offset: 0.5, color: '#fbd786'
                    }, {
                        offset: 0, color: '#f7797d' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                },
	width: config.rem / 32
            },
            areaStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 0,
                    colorStops: [{
                        offset: 0, color: '#c6ffdd' // 0% 处的颜色
                    }, {
                        offset: 0.5, color: '#fbd786'
                    }, {
                        offset: 1, color: '#f7797d' // 100% 处的颜色
                    }],
                    global: false
                }
            },
            width: config.rem / 32,
        }]
    }
}
// 物料存储数据
var SMdata = [
    ['物料五', '物料四', '物料三', '物料二', '物料一'],
    [{
        value: 500,
        itemStyle: {
            color: '#1565c0'
        }
    }, {
        value: 580,
        itemStyle: {
            color: '#fbd786'
        }
    }, {
        value: 625,
        itemStyle: {
            color: '#00b09b'
        }
    }, {
        value: 700,
        itemStyle: {
            color: '#6dd5fa'
        }
    }, {
        value: 800,
        itemStyle: {
            color: '#8e2de2'
        }
    }]
]
function SMOptions(config) {
    return {
        title: {
            text: '物料存储数据',
            textStyle: {
                color: config.color,
                fontSize: config.rem / 6 * 1.5
            },
            left: config.title.left,
        },
        tooltip: {
            trigger: 'axis',
            confine: true,
            padding: config.rem / 8,
            textStyle: {
                fontSize: config.rem / 5
            },
            enterable: true
        },
        xAxis: {
            type: 'value',
            boundaryGap: false,
            axisLabel: {
                show: false,
            },
            splitLine: config.series.splitLine,
            axisLine: config.series.axisLine,
            axisTick: config.series.axisTick
        },
        yAxis: {
            type: 'category',
            data: SMdata[0],
            axisLabel: {
                fontSize: config.rem / 6
            },
            splitLine: config.series.splitLine,
            axisLine: config.series.axisLine,
            axisTick: config.series.axisTick
        },
        grid: {
            left: '15%',
            top: '100%',
            bottom: '80%',
            right: '20%'
        },
        series: [{
            type: 'bar',
            data: SMdata[1],
            label: {
                normal: {
                    formatter: function (data) {
                        return data.value;
                    },
                    show: true,
                    fontSize: config.rem / 6,
                    position: 'right',
                    distance: config.rem / 6,
                    color: '#fff',
                    backgroundColor: '#1D3039',
                    padding: config.rem / 8,
                    borderRadius: config.rem / 4,
                }
            },
            barCategoryGap: '45%'
        }]
    }
}