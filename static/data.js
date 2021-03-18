function add0(m) {
    return m < 10 ? '0' + m : m
}
function format(date) {
    let time = new Date(parseInt(date));
    let y = time.getFullYear();
    let m = time.getMonth()+1;
    let d = time.getDate();
    return (y + '-' + add0(m) + '-' + add0(d)).toString();
}
function realTimeGraph() {// 累计收益图
    fetch('/static/data.json')
        .then((data) => data.json())
        .then((data) => {
            data = data['Data_grandTotal']
            console.log(data)
            let line = new Line('real-time-graph', {
                padding: 'auto',
                appendPadding: [50, 0, 0, 0],
                data,
                xField: 'date',
                yField: 'earnings',
                meta: {
                    date: {
                        formatter: (v) => {
                            return format(v)
                        }
                    }
	},
                seriesField: 'name',
                interactions: [{type: 'brush'}],
                tooltip: {
                    follow: true,
                    enterable: true,
                    offset: 18,
                    shared: true,
                    marker: {lineWidth: 0.5, r: 3},
                },
            });
            line.render();
        });
}
function IOPVGraph() {// 单位净值走势图
    fetch('/static/data.json')
        .then((res) => res.json())
        .then((data) => {
            data = data['Data_netWorthTrend']
            let area = new Area('IOPV-graph', {
                data,
                xField: 'x',
                yField: 'y',
                appendPadding: [50, 0, 0, 0],
                annotations: [
                    {
                        type: 'regionFilter',
                        start: ['min', 'median'],
                        end: ['max', '0'],
                        color: '#F4664A',
                    },
                    {
                        type: 'text',
                        position: ['min', 'median'],
                        content: '中位数',
                        offsetY: -4,
                        style: {
                            textBaseline: 'bottom',
                        },
                    },
                    {
                        type: 'line',
                        start: ['min', 'median'],
                        end: ['max', 'median'],
                        style: {
                            stroke: '#F4664A',
                        },
                    },
                ],
                meta: {
                    y: {
                        alias: '单位净资',
                        formatter: (v) => {
                            return v + ' 元'
                        }
                    },
                    x: {
                        formatter: (v) => {
                            return format(v)
                        }
                    }
                },
                slider: {
                    start: 0.8,
                    end: 1,
                    formatter: (v) => {
                        return format(v)
                    },
                    trendCfg: {
                        isArea: true,
                    },
                },
            });
            area.render();
        });
}
function scaleActionGraph() {// 规模变动图
    fetch('/static/data.json')
        .then((res) => res.json())
        .then((data) => {
            data = data['Data_fluctuationScale']['series']
            let dualAxes = new DualAxes('scale-action-graph', {
                data: [data, data],
                appendPadding: [50, 0, 0, 0],
                xField: 'time',
                yField: ['y', 'mom'],
                yAxis: {
                    mom: false
                },
                geometryOptions: [
                    {
                        geometry: 'column',
                        label: {
                            position: 'middle',
                            style: {
                                fill: '#FFFFFF',
                                opacity: 0.6,
                            }
                        }
                    },
                    {
                        geometry: 'line',
                        lineStyle: {
                            lineWidth: 0,
                        }
                    }
                ],
                meta: {
                    y: {
                        alias: '净资产规模',
                        formatter: (v) => {
                            return v + ' 亿元'
                        }
                    },
                    mom: {
                        alias: '较上期环比',
                        formatter: (v) => {
                            return v + ' %'
                        }
                    }
                }
            });
            dualAxes.render();
        })
}
function init() {
    realTimeGraph();
    IOPVGraph();
    scaleActionGraph();
}
init();
