// 初始化
var department = echarts.init(document.getElementById("department"));
var quality = echarts.init(document.getElementById("quality"));
var qualityFooter = document.getElementById("quality-footer");
var stock = echarts.init(document.getElementById("stock"));
var workspaceMon = document.getElementById("workspace-mon");
var produce = echarts.init(document.getElementById("produce"));
// var workspaceEnv = document.getElementById("workspace-env");
// var env = echarts.init(workspaceEnv);
var condition = document.getElementById("condition")
var workspaceEnv = echarts.init(condition);
var machine = document.getElementById('machines');
var workspaceMac = echarts.init(machine);
var material = document.getElementById("material");
var storeMaterial = echarts.init(material);


// 配置项
department.setOption(WPMOptions(config));
quality.setOption(PQDOption(config));
creteTable(qualityFooter);
stock.setOption(WIMOption(config));
WMOption(workspaceMon);
produce.setOption(PRTOption(config));
workspaceEnv.setOption(WCEOption(config));
createSelect(condition, '厂房');
createEnv(condition);
workspaceMac.setOption(WMQOptions(config));
// createSelect(machine, '机器');
storeMaterial.setOption(SMOptions(config));



window.addEventListener("resize", ()=>{
    // 监听窗口大小
    config.rem = document.documentElement.clientWidth / 24;
    // var options = department.getOption();
    // options.series[0].data[0].value = 60;
    // console.log(options.series[0].data[0].value)
    update();
});

function update(){
    department.resize();
    department.setOption(WPMOptions(config));
    quality.resize();
    quality.setOption(PQDOption(config));
    stock.resize();
    stock.setOption(WIMOption(config));
    produce.resize();
    produce.setOption(PRTOption(config));
    workspaceEnv.resize();
    workspaceEnv.setOption(WCEOption(config));
    workspaceMac.resize();
    workspaceMac.setOption(WMQOptions(config));
    storeMaterial.resize();
    storeMaterial.setOption(SMOptions(config));
}