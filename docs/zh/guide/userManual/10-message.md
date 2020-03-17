---
title: 消息中心
metaTitle: 消息中心
sidebarDepth: 3
---

# 消息中心

## 用户消息

菜单树点击消息中心->用户消息，打开用户消息页面，如下图所示：

<img :src="$withBase('/userManual/userMsg.png')" alt="image">

* 消息搜索

根据消息等级、是否已读、标题或者内容、时间段来对用户消息列表进行检索

* 查看消息

点击查看按钮查看单个消息详情，如下图所示：

<img :src="$withBase('/userManual/viewUserMsg.png')" alt="image">

* 消息删除

点击删除按钮删除单个消息，支持选择多条数据，点击批量删除

* 消息置为已读

支持选择多条数据，点击批量已读


## 所有消息

管理员可以看到所有消息，菜单树点击消息中心-> 消息，打开消息页面，如下图所示：

<img :src="$withBase('/userManual/adminMsg.png')" alt="image">

* 消息搜索

根据消息等级、标题或者内容、时间段来对消息列表进行检索。

* 查看消息

点击查看消息按钮查看单个消息详情

* 配置消息主题

管理员可以配置消息主题，菜单树点击消息中心->消息类型，打开消息类型页面，如下图所示：

<img :src="$withBase('/userManual/typeConfig.png')" alt="image">

* 消息主题搜索

根据应用、是否启用、消息等级、code或者名称、时间段队检索消息类型列表进行检索，首次进入消息类型页面的时候，应用会默认为第一个应用

* 新增消息主题

点击新增按钮新增一个消息主题，新增主题是填写主题的基本信息，如下图所示：

<img :src="$withBase('/userManual/addType.png')" alt="image">

* 编辑消息主题

点击编辑按钮编辑一个消息主题，编辑主题是修改主题的基本信息，如下图所示：

<img :src="$withBase('/userManual/editType.png')" alt="image">

* 配置消息主题

点击配置按钮配置一个消息主题，配置主题是配置改主题的接收者，如下图所示：

<img :src="$withBase('/userManual/typeConfig.png')" alt="image">

左边为系统下所有的租户或者角色或者用户，右边为已配置的接收者

::: tip
接收者分为三类：租户、角色、用户；其中租户一般情况下是当前用户所属的租户，角色是当前用户所在租户下的所有角色，用户是当前用户所在租户下的所有用户，只能选择是三个类型中一种类型，每种类型支持搜索和多选
:::

* 查看接收者

点击查看阿牛查看一个消息主题所配置的接收者，如下图所示：

<img :src="$withBase('/userManual/viewReceives.png')" alt="image">


## 配置消息类型的颜色

管理员可以配置消息类型的颜色，菜单树点击消息中心-> 配置颜色，打开配置颜色页面，如下图所示：

<img :src="$withBase('/userManual/color.png')" alt="image">

* 新增消息类型颜色

点击新增按钮新增一个消息类型的颜色，如下图所示：

<img :src="$withBase('/userManual/addColor.png')" alt="image">

::: warning
其中code和name是唯一的，不能重复，在新增一个消息主题选择消息类型的时候，下拉框数据时根据code从小到大排序的
:::

* 编辑消息类型颜色

点击编辑按钮可以修改一个消息类型颜色的名称和颜色


