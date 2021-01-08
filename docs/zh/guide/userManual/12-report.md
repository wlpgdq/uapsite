---
title: 报表
metaTitle: 报表
sidebarDepth: 3
---

# 报表

## 自定义报表

报表功能可以根据已经做好的`模板文件`进行编辑，并将所创建的模板进行填充数据，实现了动态展示报表、下载报表的功能

### 配置数据源

每个报表的数据是通过数据库获取的，所以每次生成报表前都需要选择一个已配置成功的数据源，即可正常连接的数据库

1. 点击配置数据源

2. 查看所属租户是否正确

3. 点击添加

<img :src="$withBase('/develop/reportDataSource.jpg')" alt = "数据源">

------

**配置数据源信息**：数据源名称、数据库ip地址、数据库名称、数据库用户名、数据库密码

<img :src="$withBase('/develop/reportAdd.jpg')" alt = "添加数据源">


> 例子：

> 数据源名称：report

> 数据库ip：172.1.1.1

> 数据库名称：UAP

> 数据库用户名：Admin

> 数据库密码：123

可以通过`Test Connection`进行数据库连接测试，测试通过即代表成功，可点击确认按钮

### 配置报表模板

配置报表模板的前提是需要你已经用报表工具做出了已经编译好的.jasper文件，通过**report config**对做好的模板进行配置及数据填充。

- 添加报表组别

<img :src="$withBase('/develop/reportconfigAddName.jpg')" alt = "添加组别">

- 在组别内添加报表模板
- 设置模板名称
- 上传模板文件（上传前需配置properties文件中的dfs配置）
- 添加报表中的Key数据（需要和模板文件中的Key对应）

<img :src="$withBase('/develop/reportAddConfig.jpg')" alt = "配置模板">

### 配置报表模板实例

每个模板可以创建多个实例，创建出来的实例可以进行试运行、编辑、设置、删除以及设置角色权限的操作

1. 点击添加实例按钮

<img :src="$withBase('/develop/instAdd.jpg')" alt = "添加实例">

2. 为模板中定义的Key赋予别名（name），并且填充数据（value），在此之外还需要为当前实例添加名字以及选择数据源

<img :src="$withBase('/develop/instAdd2.jpg')" alt = "添加实例">

3. 配置好的实例可以点击实例右边的`√`按钮进行试运行，如可以运行，说明配置成功

4. 对于管理员来说，需要配置以上信息，平台用户仅需要在已有的模板实例上填充数据即可

### 用户使用

`Report View`选项卡是为用户操作所开发的功能，对于用户来说用户仅需要对已有的报表模板进行数据填充操作即可完成需求，因此用户仅需要了解该功能即可实现报表的查询、预览、下载等操作

<img :src="$withBase('/develop/reportView.jpg')" alt = "reportView">


## Jasper文件工具使用方法

安装TIBCO JasperSoft Studio 后打开TIBCO JasperSoft Studio 可以看到以下界面

<img :src="$withBase('/develop/TIBCO1.jpg')" alt = "reportView">

界面中大致分为四个区域
- 工程区：主要展示当前工程的文件
- 大纲区：主要展示当前报表文件的大纲
- 工作区：编辑报表文件的区域
- 组件区：报表文件所需要的组件

### TIBCO的基本使用方法

**新建工程**

File->new project->JasperReport project

<img :src="$withBase('/develop/TIBCONewPjct.jpg')" alt = "newProject">

<img :src="$withBase('/develop/TIBCONewPjct2.jpg')" alt = "newProject">

**新建文件** 

右键工程->new Jasper Report

<img :src="$withBase('/develop/TIBCONewPjct3.jpg')" alt = "newProject">

next->输入name->finish

<img :src="$withBase('/develop/TIBCONewPjct4.jpg')" alt = "newProject">

**工作区&左侧工程区**

<img :src="$withBase('/develop/TIBCONewPjct5.jpg')" alt = "newProject">

工作区：共有7个模块，对应不同的报表功能
左侧工程区：大纲有5个模块，帮助工作区完善功能

具体功能见表格

|        元素        |   名词   |       描述       |
| :--------------: | :----: | :------------: |
|      style       |   样式   |     创建全局样式     |
|    parameter     |   参数   |  相当于Key-value  |
|    sort Field    |  有序字段  |    有序的映射字段     |
|    scriptlets    |   脚本   |                |
|      Title       |   标题   | 除了第一页展示，其余不展示  |
|   Page Header    |   页头   |     表中列的列头     |
|  Column Header   |   列头   |     表中列的列头     |
|      Detail      |  内容区   |  重复出现的内容在此展示   |
|  Column Footer   |   列脚   |     表中列的列脚     |
|   Page Footer    |   页脚   |  每页都会展示，在页面下部  |
| Last Page Footer | 最后一页页脚 |    只在最后一页展示    |
|     Summary      |  统计区   | 报表最后一页中，一般用来统计 |
|    Background    |   背景   |   设置报表的背景样式    |

**编译报表文件**

右键.jrxml文件,点击编译即可

<img :src="$withBase('/develop/TIBCO2.jpg')" alt = "编译">

**Sql语句编写**

右键outline中的文件选择DataSet and QuerySet

<img :src="$withBase('/develop/TIBCO5.jpg')" alt = "编译">

在选项框中编写SQL语句，SQL语句查询出的数据，按照列的模式进行查询，可在工作区为每一列创建Field组件。

<img :src="$withBase('/develop/TIBCO6.jpg')" alt = "编译">

具体TIBCO使用方法文档可参照
[参考文档](https://www.jianshu.com/p/999d8e6c8f6c)