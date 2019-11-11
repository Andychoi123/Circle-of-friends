/**
 * 循环：消息体 
 * @param {Object} messageData 对象
 */

//加载依赖模块messageModule
var modulehtmlM = require('./htmlModule.js');


function messageTpl(messageData) {
  var user = messageData.user;
  var content = messageData.content;
  var htmlText = [];
  htmlText.push('<div class="moments-item" data-index="0">');
  // 消息用户头像
  htmlText.push('<a class="item-left" href="#">');
  htmlText.push('<img src="' + user.avatar + '" width="42" height="42" alt=""/>');
  htmlText.push('</a>');
  // 消息右边内容
  htmlText.push('<div class="item-right">');
  // 消息内容-用户名称
  htmlText.push('<a href="#" class="item-name">' + user.name + '</a>');
  // 消息内容-文本信息
  htmlText.push('<p class="item-msg">' + content.text + '</p>');
  // 消息内容-图片列表 
  var contentHtml = '';
  // 目前只支持多图片消息，需要补充完成其余三种消息展示
  switch(content.type) {
      // 多图片消息
    case 0:
      contentHtml = modulehtmlM.multiplePicTpl(content.pics);
      break;
    case 1:
      // TODO: 实现分享消息
      contentHtml = modulehtmlM.shareMessageTpl(content.share);
      break;
    case 2:
      // TODO: 实现单张图片消息
      contentHtml = modulehtmlM.singlePicTpl(content.pics);
      break;
    case 3:
      // TODO: 实现无图片消息
      contentHtml = modulehtmlM.noPicTpl(content.pics);
      break;
  }
  htmlText.push(contentHtml);
  // 消息时间和回复按钮
  htmlText.push('<div class="item-ft">');
  htmlText.push('<span class="item-time">' + content.timeString + '</span>');
  htmlText.push('<div class="item-reply-btn" id="btn-hide">');
  htmlText.push('<span class="item-reply"></span></div>');
  //可在这个元素(div#btn-comment)添加点赞和评论按钮的HTML结构
  htmlText.push('<div id="btn-comment">');
  htmlText.push('<ul class="item-like-reply">');
  htmlText.push('<li class="item-like">' + '点赞' + '</li>');
  htmlText.push('<li class="item-comment">' + '评论' + '</li>');
  htmlText.push('</ul></div>');

  htmlText.push('</div>');
  // 消息回复模块（点赞和评论）
  //评论区域的HTML结构（包括评论输入框和发送按钮）
  htmlText.push('<div class="input">');
  htmlText.push('<div class="reply-input">');
          htmlText.push('<input type="text" id="reply-zone" placeholder="评论">');
          htmlText.push('<button id="send-btn">' + '发送' + '</button>');
          htmlText.push('</div></div>');

  htmlText.push(modulehtmlM.replyTpl(messageData.reply));

  //当图片放大时，可在这个元素(div#backgroud-style)添加图片放大时的背景样式
  htmlText.push('<div id="backgroud-style"></div>');
  htmlText.push('</div></div>');
  return htmlText.join('');
}

//模块messageBody暴露的接口
module.exports = {
  messageTpl: messageTpl
}