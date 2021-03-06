# 微信的朋友圈

## 项目概述

开发一个我们生活中十分熟悉以及火热的页面。那就是 `微信的朋友圈`。

[](__split__)

## 项目结构

- moments.html 页面 HTML
- css 样式基本样式
- js 页面逻辑
- img 存放页面展示所需的图片
- dist 存放用webpack打包好的js文件
- readme.md 项目说明文档
- demo 效果展示图片

## 展示效果

![效果图片](https://github.com/Andychoi123/Circle-of-friends/raw/master/demo/momentDemo1.gif)

## 具体要求

### 1、实现四种消息类型

- 对于朋友圈页面，消息大致分成四种情况：
- 1.1、多图片消息 (消息 type 为0)
- 1.2、分享消息  (消息 type 为1)
- 1.3、单图片消息 (消息 type 为2)
- 1.4、无图片消息 (消息 type 为3)

### 2、实现回复按钮功能

- 点击信息的回复按钮，弹出回复操作面板
- 同时只能展现一个回复操作面板
- 点击非回复操作面板的区域，隐藏回复操作面板

### 3、实现点赞功能

- 对于未点赞的信息，点击回复按钮，展现点赞的按钮
- 对于已点赞的信息，点击回复按钮，展现取消点赞的按钮
- 点击点赞按钮，完成点赞
- 点击取消按钮，取消点赞

### 4、实现增加评论功能

- 点击回复按钮，底部展现输入框和发送按钮

### 5、点击图片放大功能

- 点击信息的图片，展示放大图片
- 点击放大展示的图片区域，隐藏放大图片区域
