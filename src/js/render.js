/**
 * 页面渲染函数：render
 */
 // 相关 DOM

var $page = $('.page-moments');
var $momentsList = $('.moments-list');

//加载依赖模块data、messageBody
var moduleData = require('./data.js');
var moduleMessageBody = require('./messageBody.js');

function render() {
  // TODO: 目前只渲染了一个消息（多图片信息）,需要展示data数组中的所有消息数据。
  // var messageHtml = messageTpl(data[0]);
  // $momentsList.html(messageHtml);

//遍历数组data每个元素，渲染多图片信息/分享信息/单图片信息/无图片信息，需要展示data数组中的所有消息数据。
  var message = [];
  var dt = moduleData.messageData;
  dt.forEach(function(item){
    messageHtml = moduleMessageBody.messageTpl(item);
    message.push(messageHtml);
  })
  $momentsList.html(message.join(''));
}
//另外一种遍历方法：
// var len = data.length;
//   for(var i = 0; i < len; i++) {
//     var messageHtml = messageTpl(data[i]);
//     message.push(messageHtml);
//   }
//     $momentsList.html(message.join(''));
//   }

//模块render暴露的接口
module.exports = {
	webRender: render
}