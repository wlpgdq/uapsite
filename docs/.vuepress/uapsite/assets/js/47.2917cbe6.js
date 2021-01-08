(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{504:function(t,e,v){"use strict";v.r(e);var a=v(14),_=Object(a.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"报表"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#报表"}},[t._v("#")]),t._v(" 报表")]),t._v(" "),v("h2",{attrs:{id:"自定义报表"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#自定义报表"}},[t._v("#")]),t._v(" 自定义报表")]),t._v(" "),v("p",[t._v("报表功能可以根据已经做好的"),v("code",[t._v("模板文件")]),t._v("进行编辑，并将所创建的模板进行填充数据，实现了动态展示报表、下载报表的功能")]),t._v(" "),v("h3",{attrs:{id:"配置数据源"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#配置数据源"}},[t._v("#")]),t._v(" 配置数据源")]),t._v(" "),v("p",[t._v("每个报表的数据是通过数据库获取的，所以每次生成报表前都需要选择一个已配置成功的数据源，即可正常连接的数据库")]),t._v(" "),v("ol",[v("li",[v("p",[t._v("点击配置数据源")])]),t._v(" "),v("li",[v("p",[t._v("查看所属租户是否正确")])]),t._v(" "),v("li",[v("p",[t._v("点击添加")])])]),t._v(" "),v("img",{attrs:{src:t.$withBase("/develop/reportDataSource.jpg"),alt:"数据源"}}),t._v(" "),v("hr"),t._v(" "),v("p",[v("strong",[t._v("配置数据源信息")]),t._v("：数据源名称、数据库ip地址、数据库名称、数据库用户名、数据库密码")]),t._v(" "),v("img",{attrs:{src:t.$withBase("/develop/reportAdd.jpg"),alt:"添加数据源"}}),t._v(" "),v("blockquote",[v("p",[t._v("例子：")])]),t._v(" "),v("blockquote",[v("p",[t._v("数据源名称：report")])]),t._v(" "),v("blockquote",[v("p",[t._v("数据库ip：172.1.1.1")])]),t._v(" "),v("blockquote",[v("p",[t._v("数据库名称：UAP")])]),t._v(" "),v("blockquote",[v("p",[t._v("数据库用户名：Admin")])]),t._v(" "),v("blockquote",[v("p",[t._v("数据库密码：123")])]),t._v(" "),v("p",[t._v("可以通过"),v("code",[t._v("Test Connection")]),t._v("进行数据库连接测试，测试通过即代表成功，可点击确认按钮")]),t._v(" "),v("h3",{attrs:{id:"配置报表模板"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#配置报表模板"}},[t._v("#")]),t._v(" 配置报表模板")]),t._v(" "),v("p",[t._v("配置报表模板的前提是需要你已经用报表工具做出了已经编译好的.jasper文件，通过"),v("strong",[t._v("report config")]),t._v("对做好的模板进行配置及数据填充。")]),t._v(" "),v("ul",[v("li",[t._v("添加报表组别")])]),t._v(" "),v("img",{attrs:{src:t.$withBase("/develop/reportconfigAddName.jpg"),alt:"添加组别"}}),t._v(" "),v("ul",[v("li",[t._v("在组别内添加报表模板")]),t._v(" "),v("li",[t._v("设置模板名称")]),t._v(" "),v("li",[t._v("上传模板文件（上传前需配置properties文件中的dfs配置）")]),t._v(" "),v("li",[t._v("添加报表中的Key数据（需要和模板文件中的Key对应）")])]),t._v(" "),v("img",{attrs:{src:t.$withBase("/develop/reportAddConfig.jpg"),alt:"配置模板"}}),t._v(" "),v("h3",{attrs:{id:"配置报表模板实例"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#配置报表模板实例"}},[t._v("#")]),t._v(" 配置报表模板实例")]),t._v(" "),v("p",[t._v("每个模板可以创建多个实例，创建出来的实例可以进行试运行、编辑、设置、删除以及设置角色权限的操作")]),t._v(" "),v("ol",[v("li",[t._v("点击添加实例按钮")])]),t._v(" "),v("img",{attrs:{src:t.$withBase("/develop/instAdd.jpg"),alt:"添加实例"}}),t._v(" "),v("ol",{attrs:{start:"2"}},[v("li",[t._v("为模板中定义的Key赋予别名（name），并且填充数据（value），在此之外还需要为当前实例添加名字以及选择数据源")])]),t._v(" "),v("img",{attrs:{src:t.$withBase("/develop/instAdd2.jpg"),alt:"添加实例"}}),t._v(" "),v("ol",{attrs:{start:"3"}},[v("li",[v("p",[t._v("配置好的实例可以点击实例右边的"),v("code",[t._v("√")]),t._v("按钮进行试运行，如可以运行，说明配置成功")])]),t._v(" "),v("li",[v("p",[t._v("对于管理员来说，需要配置以上信息，平台用户仅需要在已有的模板实例上填充数据即可")])])]),t._v(" "),v("h3",{attrs:{id:"用户使用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#用户使用"}},[t._v("#")]),t._v(" 用户使用")]),t._v(" "),v("p",[v("code",[t._v("Report View")]),t._v("选项卡是为用户操作所开发的功能，对于用户来说用户仅需要对已有的报表模板进行数据填充操作即可完成需求，因此用户仅需要了解该功能即可实现报表的查询、预览、下载等操作")]),t._v(" "),v("img",{attrs:{src:t.$withBase("/develop/reportView.jpg"),alt:"reportView"}}),t._v(" "),v("h2",{attrs:{id:"jasper文件工具使用方法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#jasper文件工具使用方法"}},[t._v("#")]),t._v(" Jasper文件工具使用方法")]),t._v(" "),v("p",[t._v("安装TIBCO JasperSoft Studio 后打开TIBCO JasperSoft Studio 可以看到以下界面")]),t._v(" "),v("img",{attrs:{src:t.$withBase("/develop/TIBCO1.jpg"),alt:"reportView"}}),t._v(" "),v("p",[t._v("界面中大致分为四个区域")]),t._v(" "),v("ul",[v("li",[t._v("工程区：主要展示当前工程的文件")]),t._v(" "),v("li",[t._v("大纲区：主要展示当前报表文件的大纲")]),t._v(" "),v("li",[t._v("工作区：编辑报表文件的区域")]),t._v(" "),v("li",[t._v("组件区：报表文件所需要的组件")])]),t._v(" "),v("h3",{attrs:{id:"tibco的基本使用方法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#tibco的基本使用方法"}},[t._v("#")]),t._v(" TIBCO的基本使用方法")]),t._v(" "),v("p",[v("strong",[t._v("新建工程")])]),t._v(" "),v("p",[t._v("File->new project->JasperReport project")]),t._v(" "),v("img",{attrs:{src:t.$withBase("/develop/TIBCONewPjct.jpg"),alt:"newProject"}}),t._v(" "),v("img",{attrs:{src:t.$withBase("/develop/TIBCONewPjct2.jpg"),alt:"newProject"}}),t._v(" "),v("p",[v("strong",[t._v("新建文件")])]),t._v(" "),v("p",[t._v("右键工程->new Jasper Report")]),t._v(" "),v("img",{attrs:{src:t.$withBase("/develop/TIBCONewPjct3.jpg"),alt:"newProject"}}),t._v(" "),v("p",[t._v("next->输入name->finish")]),t._v(" "),v("img",{attrs:{src:t.$withBase("/develop/TIBCONewPjct4.jpg"),alt:"newProject"}}),t._v(" "),v("p",[v("strong",[t._v("工作区&左侧工程区")])]),t._v(" "),v("img",{attrs:{src:t.$withBase("/develop/TIBCONewPjct5.jpg"),alt:"newProject"}}),t._v(" "),v("p",[t._v("工作区：共有7个模块，对应不同的报表功能\n左侧工程区：大纲有5个模块，帮助工作区完善功能")]),t._v(" "),v("p",[t._v("具体功能见表格")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",{staticStyle:{"text-align":"center"}},[t._v("元素")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("名词")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("描述")])])]),t._v(" "),v("tbody",[v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("style")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("样式")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("创建全局样式")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("parameter")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("参数")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("相当于Key-value")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("sort Field")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("有序字段")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("有序的映射字段")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("scriptlets")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("脚本")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("Title")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("标题")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("除了第一页展示，其余不展示")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("Page Header")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("页头")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("表中列的列头")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("Column Header")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("列头")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("表中列的列头")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("Detail")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("内容区")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("重复出现的内容在此展示")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("Column Footer")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("列脚")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("表中列的列脚")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("Page Footer")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("页脚")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("每页都会展示，在页面下部")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("Last Page Footer")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("最后一页页脚")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("只在最后一页展示")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("Summary")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("统计区")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("报表最后一页中，一般用来统计")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("Background")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("背景")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("设置报表的背景样式")])])])]),t._v(" "),v("p",[v("strong",[t._v("编译报表文件")])]),t._v(" "),v("p",[t._v("右键.jrxml文件,点击编译即可")]),t._v(" "),v("img",{attrs:{src:t.$withBase("/develop/TIBCO2.jpg"),alt:"编译"}}),t._v(" "),v("p",[v("strong",[t._v("Sql语句编写")])]),t._v(" "),v("p",[t._v("右键outline中的文件选择DataSet and QuerySet")]),t._v(" "),v("img",{attrs:{src:t.$withBase("/develop/TIBCO5.jpg"),alt:"编译"}}),t._v(" "),v("p",[t._v("在选项框中编写SQL语句，SQL语句查询出的数据，按照列的模式进行查询，可在工作区为每一列创建Field组件。")]),t._v(" "),v("img",{attrs:{src:t.$withBase("/develop/TIBCO6.jpg"),alt:"编译"}}),t._v(" "),v("p",[t._v("具体TIBCO使用方法文档可参照\n"),v("a",{attrs:{href:"https://www.jianshu.com/p/999d8e6c8f6c",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考文档"),v("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=_.exports}}]);