data_fluctuationScale();

// show有部分问题 设置为true不显示 false也不显示
var titleShow = true;
var legendShow = true;
var axisTickShow = true;
var axisTickLength = 3;
var fontColor = "#000";// #98a6ad
var fontWeight = "200";
var fontFamily = "Roboto";


function data_fluctuationScale(){

    var y = [];
    Data_fluctuationScale['series'].forEach(function(data){
        y.push(data['y']);
    });

    var myChart = echarts.init(document.getElementById('Data_fluctuationScale'));

    var option = {
        title: {
            // show: titleShow,
            text: '规模变动',
            textStyle: {
                color: fontColor,
                fontWeight: fontWeight,
                fontFamily: fontFamily
            }
        },
        legend: {
            // show: legendShow,
            data:['净资产']
        },
        xAxis: {
            type: 'category',
            axisTick: {
                show: axisTickShow,
                alignWithLabel: true,
                length: axisTickLength
            },
            axisLabel: {
                formatter: function(v){
                    // 03-31 06-30 slice(start, end)
                    return v.slice(5)
                }
            },
            data: Data_fluctuationScale['categories']
        },
        yAxis: {},
        tooltip: {},
        series: [{
            name: '净资产',
            type: 'bar',
            data: y
        }]
    };
    myChart.setOption(option);
}
