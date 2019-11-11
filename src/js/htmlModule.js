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