from django.shortcuts import render, HttpResponse

from pyg2plot import Plot

import urllib3
import json

http = urllib3.PoolManager()


# Create your views here.

def get(url):
    data = http.request('get', url).data
    return list(json.loads(data))


def index(request):
    line = Plot('Line')

    data = get('https://gitee.com/hjhcos/hjhcos.gitlab.io/raw/master/json/visual/line.json')

    line.set_options({
        'data': data,
        'xField': 'Date',
        'yField': 'scales',
        'smooth': True,
        # stepType: 'vh' // 可选项：hv | vh | hvh | vhv
        'xAxis': {
               # 'type': 'timeCat'
            'tickCount': 5,
        },
    })
    line.render('graph.html')
    return HttpResponse(line.render_html())


def column(request):
    col = Plot('Column')

    # data = get('https://gitee.com/hjhcos/hjhcos.gitlab.io/raw/master/json/visual/column.json')
    data = get('https://gw.alipayobjects.com/os/antfincdn/8elHX%26irfq/stack-column-data.json')
    # data = get('https://gitee.com/hjhcos/hjhcos.gitlab.io/raw/master/json/visual/grouping-column-data.json')

    col.set_options({
        'data': data,
        'xField': 'year',
        'yField': 'value',
        # 'isGroup': True,    # 分组
        'isStack': True,    # 堆叠
        'seriesField': 'type',
        'label': {
            'position': 'middle',
            'layout': [
                # 柱形图数据标签位置自动调整
                {'type': 'interval-adjust-position'},
                # 数据标签防遮挡
                {'type': 'interval-hide-overlap'},
                # 数据标签文颜色自动调整
                {'type': 'adjust-color'},
            ]
        },
        # # 设置颜色
        # 'color': ['#1ca9e6', '#f88c24'],
        # # 设置间距
        # 'marginRatio': 0.1,
        # # 指定柱子的最大宽度
        # 'maxColumnWidth': 20,
        # # 指定柱子的最小宽度
        # 'minColumnWidth': 20,
        # # 指定柱子的圆角
        # 'columnStyle': {
        #     'radius': [20, 20, 0, 0]
        # },
        # # 设置柱子的背景样式
        # 'columnBackground': {
        #     'style': {
        #         'fill': 'rgba(0,0,0,0.1)'
        #     }
        # }
    })

    col.render("stack-column.html")
    return HttpResponse(col.render_html())


def bar(request):
    row = Plot('Bar')

    data = get('https://gitee.com/hjhcos/hjhcos.gitlab.io/raw/master/json/visual/line-data.json')

    row.set_options({
        'data': data,
        'xField': 'value',
        'yField': 'year',
        'seriesField': 'year',
        'legend': {
            'position': 'top-left',
        },
    })

    row.render("bar.html")
    return HttpResponse(row.render_html())


def area(request):
    are = Plot('Area')

    data = get('https://gitee.com/hjhcos/hjhcos.gitlab.io/raw/master/json/visual/area.json')

    are.set_options({
        'data': data,
        'xField': 'timePeriod',
        'yField': 'value',
        'xAxis': {
            'range': [0, 1],
        },
    })

    are.render("area.html")
    return HttpResponse(are.render_html())


def gauge(request):
    instrument = Plot('Gauge')

    instrument.set_options({
        # 设置仪表盘展示类型
        'innerRadius': 0.8,
        'type': 'meter',
        'meter': {
            'steps': 50,
            'stepRatio': 0.7,
        },
        'percent': 0.5,
        # 圆弧里圆心距离
        'radius': 0.75,
        # 自定义辅助圆弧的样式
        'range': {
            'ticks': [0, 1],
            # 'ticks': [0, 1 / 3, 2 / 3, 1],
            'color': ['l(0) 0:#F4664A 0.5:#FAAD14 1:#30BF78'],
            # 'color': ['#F4664A', '#FAAD14', '#30BF78'],
            # 'color': '#30BF78',
            'width': 32,
        },
        # 自定义指示器的样式
        'indicator': {
            'pointer': {
                'style': {
                    'stroke': '#FAAD14',
                },
            },
            'pin': {
                'style': {
                    'stroke': '#30BF78',
                }
            }
        },
        'statistic': {
            'content': {
                'style': {
                    'fontSize': '36px',
                    'lineHeight': '36px',
                },
            },
        },
        # 线端为圆弧
        # 'gaugeStyle': {
        #     'lineCap': 'round',
        # }
    })

    instrument.render("area.html")
    return HttpResponse(instrument.render_html())


def pie(request):
    p = Plot('Pie')

    data = get('https://gitee.com/hjhcos/hjhcos.gitlab.io/raw/master/json/visual/line-data.json')
    import math
    p.set_options({
        'data': data,
        'radius': 1,
        'appendPadding': 10,
        'angleField': 'value',
        'colorField': 'year',
        # 设置环图
        'innerRadius': 0.6,
        # 设置扇形图
        # 'startAngle': math.pi,
        # 'endAngle': math.pi * 1.5,

        'label': {
            'type': 'inner',
            'offset': '-50%',
            'content': '{value}',
            'style': {
                'textAlign': 'center',
                'fontSize': 14,
            },
        },
        'statistic': {
            'title': True,
            'content': {
                'style': {
                    'whiteSpace': 'pre-wrap',
                    'overflow': 'hidden',
                    'textOverflow': 'ellipsis',
                },
            },
        },
        'pieStyle': {
            'lineWidth': 4,
        },
    })

    p.render('pie.html')
    return HttpResponse(p.render_html())


def histogram(request):

    his = Plot('Histogram ')
    data = get('https://gw.alipayobjects.com/os/antfincdn/RoliHq%2453S/histogram.json')

    his.set_options({
        'data': data,
        'binField': 'value',
        'binWidth': 2,
    })

    his.render('histogram.html')
    return HttpResponse(his.render_html())


def bullet(request):
    bul = Plot('Bullet')

    data = get('https://gitee.com/hjhcos/hjhcos.gitlab.io/raw/master/json/visual/bullet.json')

    bul.set_options({
        'data': data,
        'measureField': 'measures',
        'rangeField': 'ranges',
        'targetField': 'target',
        'xField': 'title',
        'color': {
            'range': ['#FFbcb8', '#FFe0b0', '#bfeec8'],
            'measure': '#5B8FF9',
            'target': '#39a3f4',
        },
        'label': {
            'measure': {
                'position': 'middle',
                'style': {
                    'fill': '#fff',
                },
            },
        },
        'xAxis': {
            'line': 'null',
        },
        'yAxis': False,
        'legend': {
            'custom': True,
            'position': 'bottom',
            'items': [
                {
                    'value': '差',
                    'name': '差',
                    'marker': {'symbol': 'square', 'style': {'fill': '#FFbcb8', 'r': 5}},
                },
                {
                    'value': '良',
                    'name': '良',
                    'marker': {'symbol': 'square', 'style': {'fill': '#FFe0b0', 'r': 5}},
                },
                {
                    'value': '优',
                    'name': '优',
                    'marker': {'symbol': 'square', 'style': {'fill': '#bfeec8', 'r': 5}},
                },
                {
                    'value': '实际值',
                    'name': '实际值',
                    'marker': {'symbol': 'square', 'style': {'fill': '#5B8FF9', 'r': 5}},
                },
                {
                    'value': '目标值',
                    'name': '目标值',
                    'marker': {'symbol': 'line', 'style': {'stroke': '#39a3f4', 'r': 5}},
                },
            ],
        },
    })

    bul.render('bullet.html')
    return HttpResponse(bul.render_html())


def waterfall(request):
    water_f = Plot('Waterfall')

    data = get('https://gitee.com/hjhcos/hjhcos.gitlab.io/raw/master/json/visual/waterfall.json')

    water_f.set_options({
        'data': data,
        'xField': 'type',
        'yField': 'money'
    })

    water_f.render('waterfall.html')
    return HttpResponse(water_f.render_html())


def liquid(request):
    liq = Plot('Liquid')

    liq.set_options({
        'percent': 0.25,
    })

    liq.render('liquid.html')
    return HttpResponse(liq.render_html())


def radar(request):
    rad = Plot('Radar')

    data = get('https://gitee.com/hjhcos/hjhcos.gitlab.io/raw/master/json/visual/radar.json')

    rad.set_options({
        'data': data,
        'xField': 'item',
        'yField': 'score',
        'seriesField': 'user',
        'meta': {
            'score': {
                'alias': '分数',
                'min': 0,
                'max': 80,
            },
        },
        'xAxis': {
            'line': 'null',
            'tickLine': 'null',
            'grid': {
                'line': {
                    'style': {
                        'lineDash': 'null',
                    },
                },
            },
        },
        # 开启面积
        'area': {},
        # 开启辅助点
        'point': {
            'size': 2,
        },
    })

    rad.render('radar.html')
    return HttpResponse(rad.render_html())


def scatter(request):
    sca = Plot('Scatter')

    # data = get('https://gitee.com/hjhcos/hjhcos.gitlab.io/raw/master/json/visual/scatter.json')
    data = get('https://gw.alipayobjects.com/os/bmw-prod/0b37279d-1674-42b4-b285-29683747ad9a.json')

    sca.set_options({
        'data': data,
        'appendPadding': 30,
        # 'xField': 'x',
        # 'yField': 'y',
        'xField': 'change in female rate',
        'yField': 'change in male rate',
        'sizeField': 'pop',
        'colorField': 'continent',
        'color': ['#ffd500', '#82cab2', '#193442', '#d18768', '#7e827a'],
        # 'size': 5,
        'size': [4, 30],
        'shape': 'circle',
        'pointStyle': {
            'fillOpacity': 0.8,
            'stroke': '#bbb',
            # 'stroke': '#777777',
            # 'lineWidth': 1,
            # 'fill': '#5B8FF9',
        },
        # 'regressionLine': {
        #     'type': 'quad',  # linear, exp, loess, log, poly, pow, quad
        # },
        'xAxis': {
            'min': -25,
            'max': 5,
            'grid': {
                'line': {
                    'style': {
                        'stroke': '#eee',
                    },
                },
            },
            'line': {
                'style': {
                    'stroke': '#aaa',
                },
            },
        },
        'yAxis': {
            'line': {
                'style': {
                    'stroke': '#aaa',
                },
            },
        },
        'quadrant': {
            'xBaseline': 0,
            'yBaseline': 0,
            'labels': [
                {
                    'content': 'Male decrease,\nfemale increase',
                },
                {
                    'content': 'Female decrease,\nmale increase',
                },
                {
                    'content': 'Female & male decrease',
                },
                {
                    'content': 'Female &\n male increase',
                },
            ],
        },
    })

    sca.render('scatter.html')
    return HttpResponse(sca.render_html())
