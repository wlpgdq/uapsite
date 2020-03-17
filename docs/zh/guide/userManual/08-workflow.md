---
title: 工作流
metaTitle: 工作流
sidebarDepth: 3
---

# 工作流

## 流程设计

菜单树点击工作流管理-> 流程设计，打开流程设计页面，如下图所示：

<img :src="$withBase('/userManual/processDesign.png')" alt="image">

* 左边是工作流流程分组树，点击流程分组节点，右边显示流程分组的信息
* 右边最上面为流程分组支持的操作，中间为流程分组的详细信息，下面为流程分组包含的流程列表


### 流程分组

点击右上角的新建按钮，系统弹出创建流程分组页面，完成信息填充后，点击确认完成分组的创建

<img :src="$withBase('/userManual/processGroup.png')" alt="image">

* 编辑流程分组

点击右上角的编辑按钮，系统弹出编辑流程分组页面，编辑完信息后，点击确认后完成分组的编辑

* 删除流程分组

点击右上角的删除按钮，系统弹出删除流程分组确认页面

* 发布流程分组

    * 点击右上角的发布按钮，系统弹出发布流程分组确认页面
    * 流程只有发布后才能被部署，系统会记录流程发布的版本

* 导出/导入流程分组

    * 系统支持通过文件导入导出的方式来管理分组，点击右上角`导入分组`和`导出分组`按钮实现相对应功能
    * 导入文件只能为.zip或 .xml格式文件，导出为.zip格式文件

### 流程

* 创建流程

    * 系统支持通过文件导入导出的方式来管理分组，点击右上角`导入分组`和`导出分组`按钮实现相对应功能
    * 导入文件只能为.zip或 .xml格式文件，导出为.zip格式文件

    <img :src="$withBase('/userManual/createProcess.png')" alt="image">

* 导入流程

    点击流程列表上的`导入模型`按钮，选择需要导入的流程模型描述文件，系统会根据流程描述文件建立对应流程

* 删除流程

    点击流程列表中一行流程，系统会打开流程详情页面，如下图所示：

    <img :src="$withBase('/userManual/deleteProcess.png')" alt="image">

* 编辑流程属性

    点击流程页面编辑按钮，打开流程属性编辑页面，如下图所示：

    <img :src="$withBase('/userManual/editProcessAttr.png')" alt="image">

* 编辑流程

    点击流程页面打开编辑器按钮，打开流程编辑页面，如下图所示：

    <img :src="$withBase('/userManual/editProcess.png')" alt="image">

    平台是通过集成Flowable流程引擎的方式来实现的工作流，流程编辑器直接复用的Flowable流程编辑器，具体使用可以参考Flowable的官方文档

    ::: warning
    编辑器Id不可为全数字
    :::

* 导出流程

    点击导出流程按钮导出流程

## 部署流程

菜单树点击工作流管理->部署流程，打开部署流程列表页面，如下图所示：

<img :src="$withBase('/userManual/deploymentProcess.png')" alt="image">

### 流程表单配置

* 点击流程表单按钮，系统打开流程表单配置页面，其中平台会根据流程配置自动生成步骤列表
* 流程流转到不同步骤时候，平台会根据此配置中每个步骤对应的表单URL打开对应的表单页面供用户操作，其中URL就是表单页面的地址。如果某个步骤没有配置对应表单，平台默认加载最后一项配置的默认表单页面

<img :src="$withBase('/userManual/processConfig.png')" alt="image">

### 部署信息查看

点击要部署流程操作列里面的部署按钮，系统打开流程部署详情，如下图所示：

<img :src="$withBase('/userManual/viewProcess.png')" alt="image">


## 流程实例

菜单树点击工作流管理-> 流程实例，打开流程实例列表页面，如下图所示：

<img :src="$withBase('/userManual/processInstance.png')" alt="image">

系统提供了按照状态和时间查询流程实例功能。点击流程实例可以查看流程实例详情，用户也可以强制结束流程实例，如下图所示:

<img :src="$withBase('/userManual/viewProcessInstance.png')" alt="image">

## 流程任务

菜单树点击工作流管理-> 流程任务，打开流程实例任务列表页面，如下图所示：

<img :src="$withBase('/userManual/processTask.png')" alt="image">

系统提供了按照状态、名称和时间查询流程任务。点击每一个流程任务，打开流程任务详细页面，如下图所示：

<img :src="$withBase('/userManual/viewProcessTask.png')" alt="image">

点击编辑，用户可以编辑流程任务的属性，如下图所示：

<img :src="$withBase('/userManual/editProcessTask.png')" alt="image">

点击完成任务，用户可以强制结束此流程任务。

## 页面配置

菜单树点击工作流管理-> 页面配置，打开页面配置页面，如下图所示：

<img :src="$withBase('/userManual/pageConfig.png')" alt="image">

左边为动态字段组合树，动态字段组合的子节点为系统支持的配置页面，点击页面节点，右边显示页面配置的字段列表。

::: warning
虽然系统提供了配置页面的增（ 创建动态字段组合）、删（删除）、改（编辑）和查（查看）功能，但是目前版本预定义了对任务管理里面的我的任务和历史任务页面进行配置，用户限定对这两个页面的显示字段进行配置。
:::


### 字段组合

对左边动态字段组合树节点的操作：依次为查看、新增、编辑、删除

<img :src="$withBase('/userManual/pageConfigGroup.png')" alt="image">

* 查看

    点击查看按钮查看动态字段组合详情

    <img :src="$withBase('/userManual/viewPageConfigGroup.png')" alt="image">

* 新增

    点击新增按钮新增动态字段组合详情

    <img :src="$withBase('/userManual/addPageConfigGroup.png')" alt="image">

* 编辑

    点击编辑按钮编辑动态字段组合详情，编辑完成后点击确认，完成修改

* 删除

    点击删除按钮，删除相应动态字段组合


### 字段

字段操作依次为：新增、删除、编辑、配置

<img :src="$withBase('/userManual/field.png')" alt="image">

* 新增字段

点击右上角的新增按钮，系统弹出新增字段界面，如下图所示：

<img :src="$withBase('/userManual/addField.png')" alt="image">

其中字段下拉框的值可以通过动态字段管理页面进行配置，请参考动态字段管理，宽度定义了此字段在列表中的显示大小

* 删除字段

点击每一个字段操作列的按钮，可以从页面列表中删除当前字段配置

* 编辑字段

点击每一个字段操作列的按钮，可以对当前字段属性进行配置，如下图所示：

<img :src="$withBase('/userManual/editField.png')" alt="image">

* 字段国际化

点击每一个字段操作列的按钮，可以对当前字段配置多个语言国际化标签，系统根据用户登录时候选择语言自动选择对应语言标签显示

<img :src="$withBase('/userManual/configField.png')" alt="image">


## 动态字段管理

菜单树点击工作流管理-> 动态字段管理，打开字段管理页面，如下图所示：

<img :src="$withBase('/userManual/dynamicFieldManagement.png')" alt="image">

页面显示所有配置的动态字段，对动态字段的操作依次为：新增、删除和编辑字段


* 新增字段

点击右上角的新增按钮，系统弹出新增字段页面，如下图所示：

<img :src="$withBase('/userManual/addDynamicField.png')" alt="image">

* 删除字段

点击每一个字段操作列的按钮，可以删除当前字段配置

* 编辑字段

点击每一个字段操作列的按钮，可以对当前字段属性进行配置

