---
title: 登录和首页
metaTitle: 登录和首页
---

## 登录

通过浏览器打开统一应用平台登录界面，如下图所示：

<img :src="$withBase('/userManual/login1.png')" alt="doc directory">

选择语言，输入正确登录名和密码，点击登录按钮进入主页。
* 6次登录失败以后账户锁掉，必须联系管理员重置密码；
* 用户第一次登录系统需要修改密码，密码等级和有效期根据租户配置进行限制。
* 如果登录报错，并且用户设置密码提示(修改密码界面配置)就会显示如下:

<img :src="$withBase('/userManual/login2.png')" alt="doc directory">

## 首页

首页如下图所示：

<img :src="$withBase('/userManual/homepage1.png')" alt="doc directory">

用户主页分成三个部分：左侧的菜单树，顶部的工具栏以及右下方的功能区。

<img :src="$withBase('/userManual/homepage2.png')" alt="doc directory">

* 菜单树

    系统根据当前用户的角色和角色对应的菜单配置生成用户可访问的菜单树。其中置顶的“快捷方式”用于展示用户收藏的菜单列表，方便用户快速访问对应功能。关于用户角色和角色对应菜单的配置请参考对应章节。

* 工具栏

    工具栏为用户提供一些通用的操作,从左到右依次为:
    
    1. 用于控制左侧菜单树的显示和隐藏
    2. 搜索菜单，根据输入模糊匹配用户可用菜单列表，默认显示最近访问的最多十个菜单列表
    3. 消息
    4. 用户是否收藏此功能的标记
    5. 控制系统全屏显示
    6. 登录用户管理，点击后可以编辑个人信息，修改密码和登出系统

        * 编辑个人信息

            <img :src="$withBase('/userManual/editUserMessage.png')" alt="doc directory">

        * 修改密码

            <img :src="$withBase('/userManual/editUserPassword.png')" alt="doc directory">
        
* 功能区

    用户点击菜单后，系统会在功能区以Tab页面的方式加载菜单对应页面，具体页面内容由各个功能定义。系统提供了功能区Tab页面管理功能，包括设为首页、关闭当前Tab页，关闭所有Tab 页，定位到Tab页以及刷新Tab页功能。