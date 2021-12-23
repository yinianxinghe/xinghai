function loadXMLDoc() {
  var xmlhttp;
  if (window.XMLHttpRequest) {
    // IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
    xmlhttp = new XMLHttpRequest();
  }
  else {
    // IE6, IE5 浏览器执行代码
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      var myArr = JSON.parse(this.responseText);
      baiDu(myArr);
      weiBo(myArr);
      weiXin(myArr);
      zhiHu(myArr)
    }

  }
  xmlhttp.open("GET", "hotnews.json", true);
  xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xmlhttp.send();
}


function baiDu(arr) {
  var baidu = "";
  var i;
  for (i = 0; i < arr.baidu.length; i++) {
    baidu += arr.baidu[i].id + '&nbsp;&nbsp;' + '<a href="' + arr.baidu[i].url + '">' +
      arr.baidu[i].title + '</a>' + '&nbsp;&nbsp;' + arr.baidu[i].hotNum + '<br>';
  }
  document.getElementById("hot1_tb").innerHTML = baidu;
}
function weiBo(arr) {
  var weibo = "";
  var i;
  for (i = 0; i < arr.weibo.length; i++) {
    weibo += arr.weibo[i].id + '&nbsp;&nbsp;' + '<a href="' + arr.weibo[i].url + '">' +
      arr.weibo[i].title + '</a>' + '&nbsp;&nbsp;' + arr.weibo[i].hotNum + '<br>';
  }
  document.getElementById("hot2_tb").innerHTML = weibo;
}
function weiXin(arr) {
  var weixin = "";
  var i;
  for (i = 0; i < arr.weixin.length; i++) {
    weixin += arr.weixin[i].id + '&nbsp;&nbsp;' + '<a href="' + arr.weixin[i].url + '">' +
      arr.weixin[i].title + '</a>' + '&nbsp;&nbsp;' + arr.weixin[i].hotNum + '<br>';
  }
  document.getElementById("hot3_tb").innerHTML = weixin;
}
function zhiHu(arr) {
  var zhihu = "";
  var i;
  for (i = 0; i < arr.zhihu.length; i++) {
    zhihu += arr.zhihu[i].id + '&nbsp;&nbsp;' + '<a href="' + arr.zhihu[i].url + '">' +
      arr.zhihu[i].title + '</a>' + '&nbsp;&nbsp;' + arr.zhihu[i].hotNum + '<br>';
  }
  document.getElementById("hot4_tb").innerHTML = zhihu;
}
loadXMLDoc();