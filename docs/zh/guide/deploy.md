# 部署

## 平台基础功能数据库

服务启动前，需要进行数据库初始化或者升级，目前有两种方式：
* 脚本放到数据库中手动执行。如果首次执行脚本使用的手动方式，后续升级版本时，也要用手动方式执行升级脚本。统一应用平台的数据库脚本按照“包--数据库Vendor-版本”路径放置在发布的doc目录下，请根据当前部署情况选择合适脚本执行。

<!-- ![doc目录](/doc.png) -->
<img :src="$withBase('/deploy/doc.png')" alt="doc目录">

::: danger
对于首次部署UAP的数据库，需要按版本号顺序依次执行各个版本的脚本。
对于已经部署过UAP的数据库，先检查当前部署的UAP版本，然后依次执行后续升级版本里的脚本。
:::

* 自动执行脚本，需设置spring.flyway.enabled:true，默认配置为false（见3.2配置文件）。如果首次执行脚本使用flyway自动执行，后续升版本时，请继续使用flyway执行脚本。默认flyway关闭不会自动执行。flyway脚本一旦执行，不能再更改，后续如果要对数据做修改，需要另外写升级脚本。统一应用平台发布的war包

已经包含了数据库脚本，不需要再拷贝doc目录下的脚本。

Mysql: War包名\WEB-INF\classes\db\migration\mysql\
Oracle: War包名\WEB-INF\classes\db\migration\oracle\

<!-- ![数据脚本目录](/databaseSql.png) -->
<img :src="$withBase('/deploy/databaseSql.png')" alt="数据脚本目录">

::: warning
对于oralce数据库，如果使用pl/sql等oracle管理工具执行脚本，在执行脚本前要根据项目使用的语言配置本机的LANG和NLS_LANG这两个环境变量。
:::

## 程序

从2.0.0.0版本开始，统一应用平台提供两种部署方式：

* 与1.x.x.x版本相同的各模块war包部署方式
* 微服务jar包部署方式

如果从1.x.x.x版本升级到2.0.0.0或之后的版本，可选择继续保持原有的部署方式，也可选择改用微服务方式部署。war包部署方式直接将UAP发布的相关war包copy到Tomcat的webapps目录下。微服务方式部署操作步骤请参照《统一应用平台_微服务部署手册》。

