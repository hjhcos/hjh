function add0(m) {
    return m < 10 ? '0' + m : m
}
function format(date) {
    let time = new Date(parseInt(date));
    let y = time.getFullYear();
    let m = time.getMonth();
    let d = time.getDate();
    return (y + '-' + add0(m) + '-' + add0(d)).toString();
}
function realTimeGraph() {// 累计收益图
    const divStyles = {
        position: 'absolute',
        background: 'rgba(255,255,255,0.95)',
        boxShadow: 'rgb(174, 174, 174) 0px 0px 10px',
        borderRadius: '4px',
    };
    const setStyles = (container, styles) => {
        for (const key in styles) {
            container.style[key] = styles[key];
        }
    };
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
                xAxis: {
                    label: {
                        formatter: function (data){
                            return format(data)
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
            const createPie = (container, data) => {
                const piePlot = new Pie(container, {
                    data,
                    width: 120,
                    height: 120,
                    appendPadding: 10,
                    autoFit: false,
                    angleField: 'value',
                    colorField: 'type',
                    legend: false,
                    tooltip: false,
                    animation: false,
                    color: line.chart.themeObject.colors10,
                    label: {
                        type: 'inner',
                        offset: '-10%',
                        content: ({percent}) => `${(percent * 100).toFixed(0)}%`,
                    },
                });
                piePlot.render();
            };
            line.update({
                tooltip: {
                    customContent: (value, items) => {
                        const pieData = items.map((item) => ({
                            type: item.name,
                            value: Number(item.value),
                        }));
                        const container = document.createElement('div');
                        const pieContainer = document.createElement('div');
                        setStyles(container, divStyles);
                        createPie(pieContainer, pieData);
                        container.appendChild(pieContainer);
                        return container;
                    },
                },
            });
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