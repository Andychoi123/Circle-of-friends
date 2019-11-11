/**
 * 页面入口函数：init
 * 1、根据数据页面内容
 * 2、绑定事件
 */
//加载依赖模块render、bindEvent
var moduleRender = require('./render.js');
var modulebindEvent = require('./bindEvent.js');

function init() {
  // 渲染页面
  moduleRender.webRender();
  modulebindEvent.bindEvt();
}

init();