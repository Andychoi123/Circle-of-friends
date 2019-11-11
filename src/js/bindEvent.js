/**
 * 页面绑定事件函数：bindEvent
 */

//加载依赖模块data
var moduleData = require('./data.js');

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