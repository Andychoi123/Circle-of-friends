/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// TODO: 用户名称需修改为自己的名称
var userName = 'Andy';

// 朋友圈页面的数据
var data = [{
  user: {
    name: '阳和', 
    avatar: './img/avatar2.png'
  }, 
  content: {
    type: 0, // 多图片消息
    text: '华仔真棒，新的一年继续努力！',
    pics: ['./img/reward1.png', './img/reward2.png', './img/reward3.png', './img/reward4.png'],
    share: {},
    timeString: '3分钟前'
  }, 
  reply: {
    hasLiked: false,
    likes: ['Guo封面', '源小神'],
    comments: [{
      author: 'Guo封面',
      text: '你也喜欢华仔哈！！！'
    },{
      author: '喵仔zsy',
      text: '华仔实至名归哈'
    }]
  }
}, {
  user: {
    name: '伟科大人',
    avatar: './img/avatar3.png'
  },
  content: {
    type: 1, // 分享消息
    text: '全面读书日',
    pics: [],
    share: {
      pic: 'http://coding.imweb.io/img/p3/transition-hover.jpg',
      text: '飘洋过海来看你'
    },
    timeString: '50分钟前'
  },
  reply: {
    hasLiked: false,
    likes: ['阳和'],
    comments: []
  }
}, {
  user: {
    name: '深圳周润发',
    avatar: './img/avatar4.png'
  },
  content: {
    type: 2, // 单图片消息
    text: '很好的色彩',
    pics: ['http://coding.imweb.io/img/default/k-2.jpg'],
    share: {},
    timeString: '一小时前'
  },
  reply: {
    hasLiked: false,
    likes:[],
    comments: []
  }
}, {
  user: {
    name: '喵仔zsy',
    avatar: './img/avatar5.png'
  },
  content: {
    type: 3, // 无图片消息
    text: '以后咖啡豆不敢浪费了',
    pics: [],
    share: {},
    timeString: '2个小时前'
  }, 
  reply: {
    hasLiked: false,
    likes:[],
    comments: []
  }
}];

//模块messageBody暴露的接口
module.exports = {
  userName: userName,
  messageData: data
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * 页面入口函数：init
 * 1、根据数据页面内容
 * 2、绑定事件
 */
//加载依赖模块render、bindEvent
var moduleRender = __webpack_require__(2);
var modulebindEvent = __webpack_require__(5);

function init() {
  // 渲染页面
  moduleRender.webRender();
  modulebindEvent.bindEvt();
}

init();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * 页面渲染函数：render
 */
 // 相关 DOM

var $page = $('.page-moments');
var $momentsList = $('.moments-list');

//加载依赖模块data、messageBody
var moduleData = __webpack_require__(0);
var moduleMessageBody = __webpack_require__(3);

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

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * 循环：消息体 
 * @param {Object} messageData 对象
 */

//加载依赖模块messageModule
var modulehtmlM = __webpack_require__(4);


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

/***/ }),
/* 4 */
/***/ (function(module, exports) {

/**
 * 点赞内容 HTML 模板
 * @param {Array} likes 点赞人列表
 * @return {String} 返回html字符串
 */
 
function likesHtmlTpl(likes) {
  if (!likes.length) {
    return '';
  }
  var  htmlText = ['<div class="reply-like"><i class="icon-like-blue"></i>'];
  // 点赞人的html列表
  var likesHtmlArr = [];
  // 遍历生成
  for(var i = 0, len = likes.length; i < len; i++) {
    likesHtmlArr.push('<a class="reply-who" id="like-who" href="#">' + likes[i] + '</a>');
  }
  // 每个点赞人以逗号加一个空格来相隔
  var likesHtmlText = likesHtmlArr.join(', ');
  htmlText.push(likesHtmlText);
  htmlText.push('</div>');
  return htmlText.join('');
}
/**
 * 评论内容 HTML 模板
 * @param {Array} likes 点赞人列表
 * @return {String} 返回html字符串
 */
function commentsHtmlTpl(comments) {
  if (!comments.length) {
    return '';
  }
  var  htmlText = ['<div class="reply-comment">'];
  for(var i = 0, len = comments.length; i < len; i++) {
    var comment = comments[i];
    htmlText.push('<div class="comment-item"><a class="reply-who" href="#">' + comment.author + '</a>：' + comment.text + '</div>');
  }
  htmlText.push('</div>');
  return htmlText.join('');
}
/**
 * 评论点赞总体内容 HTML 模板
 * @param {Object} replyData 消息的评论点赞数据
 * @return {String} 返回html字符串
 */
function replyTpl(replyData) {
  var htmlText = [];
  htmlText.push('<div class="reply-zone">');
  htmlText.push(likesHtmlTpl(replyData.likes));
  htmlText.push(commentsHtmlTpl(replyData.comments));
  htmlText.push('</div>');
  return htmlText.join('');
}
/**
 * 多张图片消息模版 （可参考message.html）
 * @param {Object} pics 多图片消息的图片列表
 * @return {String} 返回html字符串
 */
function multiplePicTpl(pics) {
  var htmlText = [];
  htmlText.push('<ul class="item-pic">');
  for (var i = 0, len = pics.length; i < len; i++) {
    htmlText.push('<img class="pic-item" src="' + pics[i] + '">');
  }
  htmlText.push('</ul>');
  htmlText.push('<script type="text/javascript">' + 'window.firstScreen = Date.now();' + '</script>');
  return htmlText.join('');
}

/**
*分享消息模板  （可参考message.html）
*@param {Object} share 分享消息的图片和文本内容
*@return {String} 返回html字符串
*/
function shareMessageTpl(share) {
  var htmlText = [];
  htmlText.push('<ul class="share">');
  htmlText.push('<img class="share-pic" src="' + share.pic + '">');
  htmlText.push('<p class="share-text">' + share.text + '</p>');
  htmlText.push('</ul>');
  return htmlText.join('');
}

/**
*单张图片消息模板   （可参考message.html)
*@param {Array} pics 单图片消息的图片列表
*@return {String} 返回html字符串
*/
function singlePicTpl(pics) {
  var htmlText = [];
  htmlText.push('<ul class="item-singlepic">');
  for (var i = 0, len = pics.length; i < len; i++) {
    if (i < 1) {
  htmlText.push('<img class="single-pic" src="' + pics[0] + '">');
    }
  }
  htmlText.push('</ul>');
  return htmlText.join('');
}

/**
*无图片消息模板   （可参考message.html)
*@param {Array} pics 图片消息的图片列表
*@return {String} 返回html字符串
*/
function noPicTpl(pics) {
if (pics.length = 0) {
  return '';
}
}

//模块messageModule暴露的接口
module.exports = {
  likesHtmlTpl: likesHtmlTpl,
  commentsHtmlTpl: commentsHtmlTpl,
  replyTpl: replyTpl,
  multiplePicTpl: multiplePicTpl,
  shareMessageTpl: shareMessageTpl,
  singlePicTpl: singlePicTpl,
  noPicTpl: noPicTpl
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * 页面绑定事件函数：bindEvent
 */

//加载依赖模块data
var moduleData = __webpack_require__(0);

// var $ = require('../../node_modules/jquery');


function bindEvent() {


//给按钮绑定事件委托，当点击时出现另外两个按钮：点赞和评论
  $('.moments-list').on('click', '.moments-item .item-reply-btn', function likereplay() {
      //通过事件冒泡，找到按钮相对应父元素的索引
      var i = $(this).parents('.moments-item').index();
          // console.log(i);
      var itemPosition = $('.moments-list').children('.moments-item').eq(i);
          // console.log(itemPosition);
          //添加点赞和评论按钮的开关
      itemPosition.find('.item-like-reply').toggleClass('btn-switch');
      })

      // 点赞和评论按钮的开关
    $(window).on('click', function(event) {
      var target = event.target;
      if (target.className !== 'item-reply') {
        $('.item-like-reply').removeClass('btn-switch');

      }
    })

      //点击评论输入框和发送按钮之外的区域时，移除评论输入框和发送按钮
    $(window).on('click', function(event) {
      var target = event.target;
      if (target.className !== 'item-comment' && target.id !== 'reply-zone' && target.id !== 'send-btn') {
        // $('.reply-input').remove();

        $('.input').removeClass('reply-switch');

      }
    })

      //给点赞按钮绑定事件委托，实现点赞/取消按钮之间的相互转换，同时点赞状态添加到点赞列表中
      $('.moments-list').on('click', '.moments-item .item-like', function() {
          // $(this).text('取消');
                //通过事件冒泡，找到按钮相对应父元素的索引
          var i = $(this).parents('.moments-item').index();
          // console.log(i);
          var itemPosition = $('.moments-list').children('.moments-item').eq(i);
          // console.log(itemPosition);

          var likeSwitch = itemPosition.find('.item-like');
          if (likeSwitch.text() === '点赞') {
            likeSwitch.text('取消');
            var likeHtml = [];
            likeHtml.push('<a href="#" class="reply-who" id="like-who">' + ', ' + moduleData.userName + '</a>');
            itemPosition.find('.reply-like').append(likeHtml.join(''));
          } else if (likeSwitch.text() === '取消') {
            likeSwitch.text('点赞');
            itemPosition.find('#like-who:last-child').remove();
          }
        })

      //绑定评论按钮的点击事件
      $('.moments-list').on('click', '.moments-item .item-comment', function() {
          //通过事件冒泡，找到按钮相对应父元素的索引
          var i = $(this).parents('.moments-item').index();
          // console.log(i);
          var itemPosition = $('.moments-list').children('.moments-item').eq(i);
          // console.log(itemPosition);
          itemPosition.find('.input').toggleClass('reply-switch');
          itemPosition.find('#reply-zone').focus();
      })

      //绑定评论发送按钮的点击事件
      $('.moments-list').on('click', '.moments-item #send-btn', function() {

          //通过事件冒泡，找到按钮相对应父元素的索引
          var i = $(this).parents('.moments-item').index();
          // console.log(i);
          var itemPosition = $('.moments-list').children('.moments-item').eq(i);
          // console.log(itemPosition);
          var replyText = itemPosition.find('#reply-zone').val().trim();
          if (replyText === '') {
            itemPosition.find('.input').removeClass('reply-switch');
            itemPosition.find('#reply-zone').val('');
            return;
          }
          else {
          var sendContentHtml = [];
          sendContentHtml.push('<div class="comment-item">' + '<a class="reply-who" href="#">' + moduleData.userName + '</a>' + ': ' + replyText + '</div>');
          itemPosition.find('.reply-comment').append(sendContentHtml.join(''));
          itemPosition.find('.input').removeClass('reply-switch');
          itemPosition.find('#reply-zone').val('');
        }

      })

        //点击图片放大功能
            $('.moments-list').on('click', '.moments-item .pic-item, .moments-item .single-pic', function() {
          //通过事件冒泡，找到按钮相对应父元素的索引
          var i = $(this).parents('.moments-item').index();
          // console.log(i);
          var itemPosition = $('.moments-list').children('.moments-item').eq(i);
          // console.log(itemPosition);

          //通过事件冒泡，找到图片相对应元素的索引
          var j = $(this).index();
          itemPosition.find('.pic-item').eq(j).attr('id', 'pic-zoom');
          itemPosition.find('.single-pic').eq(j).attr('id', 'single-pic-zoom');
          itemPosition.find('#backgroud-style').addClass('item-background');


      })

            //放大图片的开关
              $('.moments-list').on('click', '.moments-item #backgroud-style', function() {
              $(this).removeClass('item-background');
              $('.pic-item, .single-pic').removeAttr('id');
            })


}

//模块bindEvent暴露的接口
module.exports = {
  bindEvt: bindEvent
}

/***/ })
/******/ ]);