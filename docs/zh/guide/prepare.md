# 部署前的准备工作

本章介绍安装统一应用平台的准备工作，包括操作系统以及相关的工具和环境。

## 操作系统

### 统一应用平台支持Windows服务器或者Linux服务器，推荐使用Linux服务器。

支持的版本如下：

|  系统   | 版本  |
|  ----  | ----  |
| Windows  | Windows Server 10及以上 |
| Linux  | Redhat 6.5 Enterprise Edition及以上 |

### 安装操作系统

选定操作系统后，请按照对应的安装文档安装，需要完成统一应用平台运行服务器的操作系统和数据库服务器的操作系统的安装。

## 环境准备

### 统一应用平台需要用到以下相关工具或者运行环境

|  事项   | 版本  | 说明  |
|  ----  | ----  | ----  |
| JAVA  | JDK8（含）以上版本 | [http://www.oracle.com/technetwork/java/index.html](http://www.oracle.com/technetwork/java/index.html) | 
| Tomcat  | 9.0.17（含）以上版本 | [http://tomcat.apache.org](http://tomcat.apache.org) | 
| Database  | 支持MySql和Oracle,缓存用redis,文档数据库支持mongodb | MySql支持5.7以上，Oracle支持11g及以上，redis支持4.0以上，mongodb支持4.0以上 | 
| Browser  | 支持IE11以上IE系列浏览器,支持兼任ECMAScript5的浏览器 |  | 

::: warning
推荐数据库安装到独立的服务器上，请参考Mysql和Oracle、redis、mongodb官方说明选择操作系统和数据库版本
:::

### 安装数据库

根据选定的数据库操作系统获取对应Mysql、mongodb和Oracle，按照 官方说明安装数据库并完成相关配置。

根据选定的数据库操作系统获取对应的redis，按照官方说明安装redis并完成相关配置。开启redis的外部访问权限并为redis设置访问，同时redis必须设置密码。

::: warning
如果使用oracle数据库，必需确保oracle数据库的语言设置可以支持项目使用的语言。可执行以下语句查看oracle的字符集：
```
    select userenv('language') from dual;
```

如果使用mysql数据库，必需确保mysql的字符集设置为UTF-8，排序规则设置为utf8_bin。
:::

### 安装JDK

根据选定的统一应用平台运行的操作系统获取对应JDK版本，需要JDK8及以上版本，并按照JDK官方说明完成JDK的安装。

::: warning
安装完JDK后需要完成JAVA环境变量的配置。

[Win7下配置JAVA环境变量](https://jingyan.baidu.com/article/9f63fb91d87fb0c8400f0e93.html)

[Win10下配置JAVA环境变量](https://jingyan.baidu.com/article/e8cdb32bfa4b2f37052bad07.html)

[Linux下配置JAVA环境变量](https://www.cnblogs.com/beanbag/p/10766984.html)
:::

### 安装Tomcat

Tomcat版本需要和安装的JDK版本兼容，请参考Tomcat官方说明选定版本。Tomcat提供了压缩包版本或者安装版本。压缩包版本直接解压到目标运行路径即可，安装版本根据安装包提示一步步完成安装。安装完成后记住Tomcat的安装路径。

::: warning
安装完成后获取本机的IP地址,如本机地址为192.168.10.10，访问http://192.168.10.10:${port} 测试是否启动成功。
:::

### 安装浏览器

目前统一应用平台支持IE11及以上版本，以及兼容ECMAScript5的Chrome和Firefox。新下载的Chrome和Firefox都支持ECMAScript5，请根据需要下载安装。

### 统一应用平台安装包

统一应用平台安装包分成以下部分：

* 平台基础功能包
* 工作流功能包
* 定时任务功能包
* 系统监控功能包（需要mongodb）
* 消息服务功能包（需要mongodb）
* 前端包
* 数据库脚本和初始数据脚本

根据Release Notes的内容，从FTP服务器获取相关安装包文件。

::: warning
获取统一应用平台UAP安装包后，运行前请参考本文档后续章节配置。
:::




