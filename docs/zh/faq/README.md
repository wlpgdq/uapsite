---
title: FAQ
meteTitle: FAQ
sidebarDepth: auto
---



# FAQ



## Q：什么是HX UAP？

A：HX UAP是面向系统事业部的统一应用平台，它是海兴从多年应用软件研制过程中提炼出来的模型、模板、开发工具、应用框架、基础技术类库及研发模式等成果，采用可视化开发模式，提供覆盖软件全生命周期的开发、集成、运行、管理等功能于一体的统一应用平台。



## Q：HX UAP部署需要准备什么软件或文件？ 

A： 部署需要

* JAVA环境（JDK8）
* Tomcat9及以上版本
* 所需部署的war包或jar包
* MySQL数据库 或 oracle数据库
* Redis、MongoDB
* Chrome浏览器



## Q：war包应该放在哪里？

A：war包放置在Tomcat安装目录下的/webapps下，例如：

>  D:/apache-tomcat-9.0.17/webapps/ {war包}



## Q：为什么修改Tomcat中的配置文件后，配置仍不生效？

A：可以尝试清除Tomcat的缓存文件。

Tomcat缓存清理步骤：

1. 进入Tomcat安装路径，将temp文件夹下的文件清空
2. work文件夹下的Catalina文件夹下的文件删除
3. 重启Tomcat




## Q：为什么Tomcat启动时总是报错？

A：首先查看报错信息，可以进入Tomcat目录下的logs文件夹，根据日期找到当时报错的.txt文件，之后查看文件，找到错误信息。

如不能自行解决，可找相关人员咨询。

Tomcat报错的可能原因：

- uapconfig配置出错，请仔细检查uap的配置文件是否正确，可对照uap文档检查

- JDK版本与Tomcat版本是否兼容

- uiconfig.json文件配置有错

- war包不是是最新版的




## Q：为什么Tomcat启动不起来或者自动退出？

A：可能造成的原因：

- 进入Tomcat下的uapconf文件夹下，打开uap.properties文件，检查License路径配置是否正确，需要配置绝对路径。

  > uap.licFilePath=D:/UAP/license/uap_Local.dll

- Tomcat文件缺损、或是损坏，可通过重新下载安装完成修复。




## Q：管理员用户与普通用户的区别是什么？

A：管理员用户权限可以修改**所有用户**数据

​      普通用户权限仅能修改**所属组织的平级及下级用户**数据

> 数据包括：
>
> 组织分配、添加用户、删除用户、修改用户等




## Q：如何判断账户是否为管理员角色？

A：用户可以根据Menus选项卡的 `Functional types`选项进行判断

|      | Business functions | General function of system | Advanced system function |
| :--: | :----------------: | :------------------------: | :----------------------: |
| 管理员  |         √          |             √              |            √             |
| 商务人员 |         √          |             √              |                          |
| 开发人员 |                    |             √              |            √             |

根据表格可以得知，管理员的菜单选项有三个选项，分别为**商务功能**、**通用功能**和**开发功能**

另外两个角色只拥有与其相关的两个功能接口

## Q：License文件问题

A1：Tomcat启动时显示License提示为`The License is illegal, please re-apply for a new license![7D4FC688D5F714A470257823DFE97BD2]`

表明当前的License已过期或不合法，请再次申请。点击右上角的**License申请** 按钮

A2：Tomcat启动时显示License提示硬件码位置并没有数据时，表明用户未配置**license的路径**，请在`uap.properties`文件中添加。

A3：Tomcat启动时显示License提示`[/lincese]`打印出路径，表示没有lincese的申请工具文件,如.so文件或是.dll文件