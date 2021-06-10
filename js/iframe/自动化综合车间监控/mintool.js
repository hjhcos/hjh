$(document).ready(function(){
    scrollUp();
    var time = 50;
    var mytimer = setInterval(scrollUp, time);
    area.οnmοuseοver = function () {
        clearInterval(mytimer);
    }
    area.οnmοuseοut = function () {
        mytimer = setInterval(scrollUp, time);
    }
})



// 向上滚动
var area =document.getElementById('scrollBox');
function scrollUp() {
    if (area.scrollTop >= area.offsetHeight) {
        area.scrollTop = 0;
    } else {
        area.scrollTop++;
    }
}