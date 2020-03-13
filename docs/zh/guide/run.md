# 配置和运行

## tomcat配置

FTP服务器安装包下的子目录“tomcat配置”包含了Tomcat需要的配置文件。将子目录/uapconf复制到项目tomcat根目录下，把里面的mysql-connector-java-8.0.11.jar和ojdbc8.jar复制到tomcat的lib目录下。

## 配置文件

### 统一应用平台发布需要根据实际需要环境配置

平台的配置文件位于tomcat根目录下的uapconf里面的uap.properties
此配置文件中的通用配置项如下：

``` java
server.port=8080

#**********************1、数据库*********************
# MYSQL 数据库
# spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
# spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL5InnoDBDialect
# spring.datasource.url=jdbc:mysql://192.168.15.35:3306/uap_dev?serverTimezone=UTC&useSSL=false&useUnicode=true&characterEncoding=UTF-8
# spring.datasource.username=admin
# spring.datasource.password=Admin@123

#oracle数据库
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.Oracle10gDialect
spring.datasource.driver-class-name=oracle.jdbc.driver.OracleDriver
spring.datasource.url=jdbc:oracle:thin:@192.168.15.35:1521:ora11a
spring.datasource.username=uap_hzw
spring.datasource.password=1234

#是否显示SQL
spring.jpa.properties.hibernate.show_sql= false
#是否启用数据初始化
spring.flyway.enabled=false

# mongodb配置，如果不用mongodb，此配置可注释掉，目前消息中心和系统监控需要用到mongodb
spring.data.mongodb.uri=mongodb://admin:admin%40123@172.16.45.195:20000/uap_dev

#**********************数据库切换*********************
#消息中心，系统监控yes:mongodb,no:mysql/oracle
uap.nosql.enabled=no

#**********************1、数据库*********************


#**********************2、redis*********************
#redis配置
spring.redis.host=127.0.0.1
#端口号
spring.redis.port=6379
#密码
spring.redis.password=123456
#使用的数据库编号
spring.redis.database=1
#**********************2、redis*********************

#**********************3、UAP平台配置项*********************
# 是否清理日志和登陆历史标志
uap.clearLogFlag=false
# 接口调用日志保留月数
uap.logStoreMonth=1
# 登陆历史保留月数
uap.tokenStoreMonth=1
# 菜单点击日志保留月数
uap.menuLogStoreMonth=3
# 非法登陆日志保留月数
uap.illegalLogStoreMonth=3
# 登陆时密码可重试次数
uap.passwordRetryCount=5
# 密码重试超过允许的次数时用户被锁定的时间（毫秒）
uap.userLockTime = 300000
# token有效期（毫秒）
uap.tokenExpiration=3600000
# 刷新token有效期（毫秒）
uap.tokenRefreshExpiration=36000000
#licnese文件路径(绝对路径,例:E:/licenseTools/)
uap.licFilePath=
#**********************3、UAP平台配置项*********************

#**********************4、前端配置项*********************
#前端配置文件路径
uap.uiconfig.file=C:/download/apache-tomcat-9.0.13/uapconf/uiconfig.json
#**********************4、前端配置项*********************

#**********************5、平台接入*********************
#平台地址
uap.client.uapUrl=http://127.0.0.1:8080/uap

#**********************5、平台接入*********************

#**********************6、工作流配置项*********************

#**********************6、工作流配置项*********************

#**********************7、消息中心配置项*********************

#**********************7、消息中心配置项*********************

#**********************8、定时任务配置项*********************
#调度中心地址
uap.scheduleUrl=http://127.0.0.1:8080/uap-schedule
#job日志保存时间(天)
uap.job.log.save.days=30
#**********************8、定时任务配置项*********************

#**********************9、系统监控配置项*********************
# 采样时间间隔(秒,取值范围1-59)
uap.system.sampleInterval=10
# 本机IP
uap.system.ip-address=192.168.15.57
#**********************9、系统监控配置项*********************
```

### 各个模块有一些特定的配置项，在部署每个模块时要提前配置好该模块的配置
  
* UAP平台包  
    * uap.licFilePath：licnese文件路径(例E:/licenseTools/)
* UAP-BPM工作流包
* UAP-SCHEDULE定时任务包
    * uap.scheduleUrl：调度中心地址
    * uap.job.log.save.days：job日志保存时间(天)
* UAP-MSG消息中心包
* UAP-MONITOR系统监控包
    * uap.system.sampleInterval：采样时间间隔(秒,取值范围1-59)
    * uap.system.ip-address：本机IP
* UAP-UI前端包
    * uap.uiconfig.file：指定前端运行参数配置文件uiconfig.json所在的完整路径，要注意linux和windows文件路径格式。
* 运行参数配置文件uiconfig.json文件提供以下运行参数配置：
    * app_name: 系统显示名称，此配置会显示到浏览器Tab页标题栏、登录页和系统页面的标题栏上，注意按照当前语言配置
    * app_foot: 版权信息，注意国际化
    * app_code：多应用唯一标识，需要和通过UAP配置的应用Code一致
    * rest_url/menu_url：多应用后台地址/前台地址。
    * languages：系统支持的语言配置--语言code配置如下：
        * 简体中文（zh-CN）
        * 英语（en）
        * 法语（fr）
::: warning
系统提供的uiconfig.json模板文件已经配置好UAP应用相关的参数，需要根据当前部署环境修改UAP应用的rest_url和menu_url，不需要修改UAP应用的app_code。对于业务应用，可以根据UAP应用示例添加并配置。
:::

#### uniconfig.json文件格式如下：

``` json
{
	"app_name": "UAP",
	"app_foot": "",
	"deploy_nodes": [
		{
			"app_code": "uap",
			"rest_url": "http://192.168.15.145:8080/uap/", 
			"menu_url": "http://192.168.15.145:8080/uap-ui/"
		}, {
			"app_code": "uap-bpm",
			"rest_url": "http://192.168.15.135:8080/uap-bpm/", 
			"menu_url": "http://192.168.15.135:8080/uap-ui/"
		}, {
			"app_code": "uap-schedule",
			"rest_url": "http://192.168.15.145:8080/uap-schedule/", 
			"menu_url": "http://192.168.15.145:8080/uap-ui/"
		}, {
			"app_code": "uap-message",
			"rest_url": "http://192.168.15.145:8080/uap-msg/", 
			"menu_url": "http://192.168.15.145:8080/uap-ui/"
		}, {
			"app_code": "uap-monitor",
			"rest_url": "http://192.168.15.57:8080/uap-monitor/", 
			"menu_url": "http://192.168.15.57:8080/uap-ui/"
		}
	],
	"languages": [
		{
			"code": "en",
			"text": "English"
		}
	]
}
```

如果需要更灵活代码上的配置，可以通过修改下面的代码文件,${tomcat_home}/webapps/uap-ui/WEB-INF/classes/static/ui/constant.js 

设置isUserJsFile成true,配置文件中的uiconfig内容，配置方式和前述配置文件一致。

#### uiconfig.json文件格式如下：

``` json
var Constant = {
	/**
	 * default :false;
	 * false read urlconfig.json
	 * true read constant.js
	 * calendar_type日历配置 gregorian公历 iran伊朗日历  nepal 尼泊尔日历  默认公历(不配置或者为gregorian)
	 */
	isUseJsFile: true,
	uiConfig: {
		app_name: "UAP",
		app_foot: "Copyright © 2019-2022 All Rights Reserved",
		calendar_type: "gregorian",
		languages: [{
				code: "en",
				text: "English"
			}
		],
		deploy_nodes: [
			{
				app_code: "uap",
				// rest_url: "http://172.26.21.21:8081/uap/",
				rest_url: "http://192.168.15.155:8091/uap/",
				menu_url: "http://"+location.hostname+":"+location.port+"/uap-ui/"
			},
			{
				app_code: "uap-schedule",
				rest_url: "http://192.168.15.108:9001/uap-schedule/",
				menu_url: "http://"+location.hostname+":"+location.port+"/uap-ui/"
			},
			{
				app_code: "uap-bpm",
				rest_url: "http://192.168.15.108:9001/uap-bpm/",
				menu_url: "http://"+location.hostname+":"+location.port+"/uap-ui/"
			},
			{
				app_code: "uap-message",
				rest_url: "http://172.26.21.21:8083/uap-msg/",
				menu_url: "http://"+location.hostname+":"+location.port+"/uap-ui/"
			},
			{
				app_code: "uap-monitor",
				rest_url: "http://192.168.15.108:9001/uap-monitor/",
				menu_url: "http://"+location.hostname+":"+location.port+"/uap-ui/"
			}
		]
	}
}

```

## UAP前端图片替换

前端图片存放在uap-ui包解压目录下:${tomcat_home}/webapps/uap-ui/WEB-INF/classes/static/img/

* 顶部是hxlogo.ico
* 登录页图标是login_logo.png
* 主页左上角图标是logo.png

::: warning
图片替换名称不能改变(包括图片的类型)
:::

## 国际化

统一应用平台默认提供英文版本，如果需要支持其他语言，请根据需要配置国际化资源。

* 前端国际化
前端国际化主要是国际化前端界面元素，新的国际化文件需要放置在uap-ui包解压目录下:
${tomcat_home}/webapps/uap-ui/WEB-INF/classes/static/js/i18next/

新的国际化文件需要按照如下规则命名：
    translation-${language_code}.json

其中language_code为你需要添加的语言，要和3.2里面语言code保持一致。新的国际化文件可以基于默认的translation-en.json翻译产生。

* 菜单国际化
统一应用平台提供了菜单国际化数据库脚本模板，位于发布包的如下路径：
    * doc/数据库脚本/语言包/版本/uap_code_local_template.sql
    * doc/数据库脚本/语言包/版本/uap_menu_local_template.sql

模板默认是英文版本，请根据需要自行翻译里面的文本内容。
对于uap_code_local_template.sql里面每一条记录，需要修改如下红色框字段的值，分别代表此条记录主键、国际化信息、国际化语言Code。

::: warning
需要保证修改后的主键和数据库不冲突
国际化code要和3.2里面语言code保持一致。
除了红色框出的三个字段，后面的字段不能更改。
:::

对于uap_menu_local_template.sql里面每一条记录，需要修改如下红色框字段的值，分别代表此条记录主键、国际化信息、国际化语言Code。

<!-- ![国际化图片1](/local1.png) -->
<img :src="$withBase('/deploy/local1.png')" alt="国际化图片1">

::: warning
需要保证修改后的主键和数据库不冲突
国际化code要和3.2里面语言code保持一致
除了红色框出的三个字段，后面的字段不能更改
保数据库字符集设置支持新加的国际化语言
:::

<!-- ![国际化图片2](/local2.png) -->
<img :src="$withBase('/deploy/local2.png')" alt="国际化图片2">

完成此两个模板文件国际化修改后，通过直接执行新的文件，完成菜单新国际化资源添加。

## tomcat运行和关闭

切换到bin目录下面，如前面所示，对于Windows系统，执行startup.bat启动Tomcat,Tomcat执行时候会打开新的Console。如果需要停止Tomcat，只需关闭对应Console

<!-- ![windows下运行tomcat](/windows-tomcat-start.png) -->
<img :src="$withBase('/deploy/windows-tomcat-start.png')" alt="windows下运行tomcat">

对于Linux系统，执行startup.sh，启动Tomcat,关闭Tomcat，可以先找到tomcat进程，然后通过kill命令关闭

<!-- ![linux下运行tomcat](/linux-tomcat-start.png) -->
<img :src="$withBase('/deploy/linux-tomcat-start.png')" alt="linux下运行tomcat">
<!-- ![linux下关闭tomcat](/linux-tomcat-stop.png) -->
<img :src="$withBase('/deploy/linux-tomcat-stop.png')" alt="linux下关闭tomcat">

## lincense 配置

FTP服务器安装包下的子目录“license配置”包含了license需要的配置文件。
根据不同系统复制不同文件到uap.properties 中uap.licFilePath配置的相应路径下，不配置uap.licFilePath时，获取如下默认路径：

* window: uap_local.dll放入AppData\Local\Hexing\路径下
* linux: uap_local.so放入/etc/Hexing路径

运行系统，系统打印：

``` java
The License is illegal, please re-apply for a new license!
[7D4FC688D5F714A470257823DFE97BD2]
```
中括号中的是返回的hardware_code.根据UAP部署系统不同，选择到不同系统机器执行如下命令：

``` java
java -classpath ${your_path}/uap-licTools.jar license.Tools ${hardware_code}
```
License工具根据当前系统生成对应的readme文件，将readme文件复制到uap.licFilePath配置的路径下，不配置时默认路径如下：

* window: 放入AppData\Local\Hexing\路径下
* linux: 放入/etc/Hexing路径

再次运行系统，执行成功。

## 系统监控配置

系统监控受用微服务jar包形式提供，要采用微服务的部署方式，参照《统一应用平台_微服务部署手册》。

## 打开统一应用平台

打开浏览器，在地址栏输如下信息：

```
http://${uap_server_ip}:${uap_server_port}/uap-ui/ui/page/login.html
```

其中uap_server_ip 代表Tomcat所在服务器的ip地址，uap_server_port为Tomcat配置的Web服务端口，默认为8080。
