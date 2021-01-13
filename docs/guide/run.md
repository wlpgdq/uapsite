# Configure and run

## Tomcat configuration

The subdirectory "tomcat configuration" under the FTP server installation package contains the configuration files required by Tomcat. Copy the subdirectory / uapconf to the root directory of the project tomcat, and copy the mysql-connector-java-8.0.11.jar and ojdbc8.jar to the lib directory of tomcat.

## Configuration file

### The unified application platform release needs to be configured according to the actual needs of the environment

The platform configuration file is located in uap.properties in uapconf under the tomcat root directory
The common configuration items in this configuration file are as follows:

```java
server.port = 8080

# ********************** 1.Database *********************
# mysql database
# spring.datasource.driver-class-name = com.mysql.cj.jdbc.Driver
# spring.jpa.properties.hibernate.dialect = org.hibernate.dialect.MySQL5InnoDBDialect
# spring.datasource.url = jdbc:mysql://`database address`:`port`/`library name`? serverTimezone=UTC & useSSL=false & useUnicode=true & characterEncoding=UTF-8
# spring.datasource.username = `username`
# spring.datasource.password = `password`

# oracledatabase
spring.jpa.properties.hibernate.dialect = org.hibernate.dialect.Oracle10gDialect
spring.datasource.driver-class-name = oracle.jdbc.driver.OracleDriver
spring.datasource.url = jdbc:oracle:thin:@`database address`:`port`:`library name`
spring.datasource.username = `username`
spring.datasource.password = `password`

# whether to display sql
spring.jpa.properties.hibernate.show_sql = false
# whether to enable data initialization
spring.flyway.enabled = false

# mongodb configuration. If mongodb is not used, this configuration can be commented out. Currently, mongodb is required for message center and system monitoring.
spring.data.mongodb.uri = mongodb://`username`:`password`@`database address`:`port`/`library name`

# ********************** Database switch *********************
# message center, system monitoring yes: mongodb, no: mysql / oracle
uap.nosql.enabled = no

# ********************** 1.Database  end*********************


# ********************** 2.redis *********************
# redisConfiguration
spring.redis.host = `redis address`
# the port number
spring.redis.port = 6379
# password
spring.redis.password = `password`
# used database number
spring.redis.database = 1
# ********************** 2.redis end *********************

# ********************** 3.UAP platform configuration items *********************
# whether to clear logs and login history flags
uap.clearLogFlag = false
# Interface call log retention months
uap.logStoreMonth = 1
# Login history retention months
uap.tokenStoreMonth = 1
# Menu click log retention months
uap.menuLogStoreMonth = 3
# Illegal login log retention months
uap.illegalLogStoreMonth = 3
# Password retry times at login
uap.passwordRetryCount = 5
# User locked time when password retry exceeds allowed times (ms)
uap.userLockTime = 300000
# token validity period (ms)
uap.tokenExpiration = 3600000
# Refresh token validity period (ms)
uap.tokenRefreshExpiration = 36000000
#licnese file path (absolute path, example: E: / licenseTools /)
uap.licFilePath =
# ********************** 3.UAP platform configuration items end *********************

# ********************** 4.Front-end configuration items *********************
#Front end configuration file path
uap.uiconfig.file = C: /download/apache-tomcat-9.0.13/uapconf/uiconfig.json
# ********************** 4.Front-end configuration items end *********************

# ********************** 5. Platform access *********************
#Platform address
uap.client.uapUrl = http://127.0.0.1:8080/uap

# ********************** 5. Platform access end*********************

# ********************** 6. Workflow configuration items *********************

# ********************** 6. Workflow configuration items end*********************

# ********************** 7, message center configuration items *********************

# ********************** 7, message center configuration items end*********************

# ********************** 8. Scheduled task configuration items *********************
# Dispatch center address
uap.scheduleUrl = http: //127.0.0.1:8080/uap-schedule
#job log save time (days)
uap.job.log.save.days = 30
# ********************** 8. Scheduled task configuration items end*********************

# ********************** 9, system monitoring configuration items *********************
# Sampling interval (seconds, value range 1-59)
uap.system.sampleInterval = 10
# Native IP
uap.system.ip-address = `ip address`
# ********************** 9, system monitoring configuration items end *********************
```

### Each module has some specific configuration items, and the configuration of the module must be configured in advance when deploying each module
  
* UAP platform package
    * uap.licFilePath: path of licensee file (eg:E:/licenseTools/)
* UAP-BPM workflow package
* UAP-SCHEDULE scheduled task package
    * uap.scheduleUrl: address of dispatch center
    * uap.job.log.save.days: job log save time (days)
* UAP-MSG Message Center Package
* UAP-MONITOR system monitoring package
    * uap.system.sampleInterval: sampling interval (seconds, value range 1-59)
    * uap.system.ip-address: local IP
* UAP-UI front-end package
    * uap.uiconfig.file: Specify the full path where the front-end run parameter configuration file uiconfig.json is located. Pay attention to the linux and windows file path formats.
* The running parameter configuration file uiconfig.json provides the following running parameter configuration:
    * app_name: system display name, this configuration will be displayed on the browser's tab page title bar, login page and system page title bar, pay attention to the current language
    * app_foot: copyright information, pay attention to internationalization
    * app_code: unique identifier for multiple applications, which must be the same as the application code configured through UAP
    * rest_url/menu_url: Multi-application background address/foreground address.
    * languages: language configuration supported by the system-language code configuration is as follows:
        * Simplified Chinese (zh-CN)
        * English (en)
        * French (fr)
::: warning
The uiconfig.json template file provided by the system has been configured with UAP application-related parameters. You need to modify the rest_url and menu_url of the UAP application according to the current deployment environment. You do not need to modify the app_code of the UAP application. For business applications, you can add and configure according to UAP application examples.
:::

#### Uniconfig.json file format is as follows:

```json
{
    "app_name": "UAP",
    "app_foot": "",
    "deploy_nodes": [
        {
            "app_code": "uap",
            "rest_url": "http://127.0.0.1:8080/uap/",
            "menu_url": "http://127.0.0.1:8080/uap-ui/"
        }, {
            "app_code": "uap-bpm",
            "rest_url": "http://127.0.0.1:8080/uap-bpm/",
            "menu_url": "http://127.0.0.1:8080/uap-ui/"
        }, {
            "app_code": "uap-schedule",
            "rest_url": "http://127.0.0.1:8080/uap-schedule/",
            "menu_url": "http://127.0.0.1:8080/uap-ui/"
        }, {
            "app_code": "uap-message",
            "rest_url": "http://127.0.0.1:8080/uap-msg/",
            "menu_url": "http://127.0.0.1:8080/uap-ui/"
        }, {
            "app_code": "uap-monitor",
            "rest_url": "http://127.0.0.1:8080/uap-monitor/",
            "menu_url": "http://127.0.0.1:8080/uap-ui/"
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

If you need more flexible configuration on the code, you can modify the following code file, $ {tomcat_home}/webapps/uap-ui/WEB-INF/classes/static/ui/constant.js

Set isUserJsFile to true, the uiconfig content in the configuration file, and the configuration method is the same as the previous configuration file.

#### The format of the uiconfig.json file is as follows:

``` javascript
var Constant = {
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
            rest_url: "http://127.0.0.1:8080/uap/",
            menu_url: "http://" + location.hostname + ":" + location.port + "/uap-ui/"
        },
        {
            app_code: "uap-schedule",
            rest_url: "http://127.0.0.1:8080/uap-schedule/",
            menu_url: "http://" + location.hostname + ":" + location.port + "/uap-ui/"
        },
        {
            app_code: "uap-bpm",
            rest_url: "http://127.0.0.1:8080/uap-bpm/",
            menu_url: "http://" + location.hostname + ":" + location.port + "/uap-ui/"
        },
        {
            app_code: "uap-message",
            rest_url: "http://127.0.0.1:8080/uap-msg/",
            menu_url: "http://" + location.hostname + ":" + location.port + "/uap-ui/"
        },
        {
            app_code: "uap-monitor",
            rest_url: "http://127.0.0.1:8080/uap-monitor/",
            menu_url: "http://" + location.hostname + ":" + location.port + "/uap-ui/"
        }
    ]
}
}

```

## UAP front-end picture replacement

The front-end image is stored in the uap-ui package decompression directory: $ (tomcat_home) / webapps / uap-ui / WEB-INF / classes / static / img /

* Top is hxlogo.ico
* The login page icon is login_logo.png
* The icon in the upper left corner of the homepage is logo.png

::: warning
Picture replacement name cannot be changed (including picture type)
:::

## Globalization

The unified application platform is provided in English by default. If you need to support other languages, configure international resources as required.

* Front-end internationalization
Front-end internationalization is mainly internationalized front-end interface elements. New internationalization files need to be placed in the uap-ui package decompression directory:

$ {tomcat_home}/webapps/uap-ui/WEB-INF/classes/static/ui/js/i18next/

The new internationalization file needs to be named according to the following rules:
    translation-${language_code} .json

The language_code is the language you need to add, which must be consistent with the language code in 3.2. New internationalization files can be generated based on the default translation-en.json translation.

* Back-end internationalization

The back-end internationalization is mainly the internationalization page prompt, the new internationalization file needs to be placed in the uap package decompression directory:

${tomcat_home}/webapps/uap/WEB-INF/classes/

The new internationalization file needs to be named according to the following rules: massages_${language_code}.properties

* Menu internationalization
The unified application platform provides a menu internationalization database script template, which is located in the following path of the release package:
    * doc/database script/language pack/version/uap_code_local_template.sql
    * doc/database script/language pack/version/uap_menu_local_template.sql

The template is in English by default, please translate the text content as needed.
For each record in uap_code_local_template.sql, you need to modify the values ​​in the red box fields below to represent the primary key, internationalization information, and internationalization code of this record, respectively.

::: warning
Need to ensure that the modified primary key does not conflict with the database
The internationalization code must be consistent with the language code in 3.2.
Except for the three fields outlined in red, the following fields cannot be changed.
:::

For each record in uap_menu_local_template.sql, you need to modify the values ​​in the red box fields below to represent the primary key, internationalization information, and internationalization code of this record, respectively.

<!-- ![Internationalized picture 1](/local1.png) -->
<img :src="$withBase('/deploy/local1.png')" alt="Internationalized picture 1">

::: warning
Need to ensure that the modified primary key does not conflict with the database
The internationalization code must be consistent with the language code in 3.2
Except for the three fields outlined in red, the following fields cannot be changed
Database database character set settings support new international languages
:::

<!-- ![Internationalized picture 2](/local2.png) -->
<img :src="$withBase('/deploy/local2.png')" alt="Internationalized picture 2">

After completing these two template file internationalization modifications, you can complete the menu new internationalization resource addition by directly executing the new file.

## Menu icon configuration

1. Copy the menu_icon directory located in the release package doc/icons/ path to
${tomcat_home}/webapps/ next
2. Menu customization interface configuration Select the corresponding picture and save the menu icon that needs to be configured
3. Copy the corresponding menu icon picture to the menu_icon directory

::: warning
Note: Menu icon images are divided into before and after images. For example, user.png before clicking
The name of the picture after clicking is user_hover.png.
Menu icon images can only be in png format
:::

## Tomcat run and close

Switch to the bin directory. As shown earlier, for Windows systems, run startup.bat to start Tomcat, and Tomcat will open a new console when it is executed. If you need to stop Tomcat, just close the corresponding Console

<!-- ![Run tomcat under windows](/windows-tomcat-start.png) -->
<img :src="$withBase('/deploy/windows-tomcat-start.png')" alt="Run tomcat under windows">

For Linux systems, execute startup.sh, start Tomcat, and close Tomcat. You can find the tomcat process first, and then use the kill command to close it.

<!-- ![Run tomcat under linux](/linux-tomcat-start.png) -->
<img :src="$withBase('/deploy/linux-tomcat-start.png')" alt="Run tomcat under linux">
<!-- ![Close tomcat under linux](/linux-tomcat-stop.png) -->
<img :src="$withBase('/deploy/linux-tomcat-stop.png')" alt="Close tomcat under linux">

## Lincense configuration

The sub-directory "license configuration" under the FTP server installation package contains the configuration files required by the license.
Copy different files to the corresponding path configured by uap.licFilePath in uap.properties according to different systems. When uap.licFilePath is not configured, the following default path is obtained:

* window: uap_local.dll is placed in AppData\Local\Hexing\
* linux: uap_local.so put in /etc/Hexing path

Run the system, the system prints:

``` java
The License is illegal, please re-apply for a new license!
[7D4FC688D5F714A470257823DFE97BD2]
```
In square brackets is the returned hardware_code. Depending on the UAP deployment system, select different system machines and execute the following command:

``` java
java -classpath $ {your_path} /uap-licTools.jar license.Tools $ {hardware_code}
```
The license tool generates the corresponding readme file according to the current system and copies the readme file to the path configured by uap.licFilePath. The default path when not configured is as follows:

* window: put in AppData \Local\Hexing\
* linux: put in /etc/Hexing path

Run the system again and the execution was successful.

## System monitoring configuration

The system monitoring and receiving microservice jar package is provided, and the microservice deployment method should be adopted, refer to the Unified Application Platform_Microservice Deployment Manual.

## Open unified application platform

Open your browser and enter the following information in the address bar:

```
http://${uap_server_ip}:$ {uap_server_port}/uap-ui/ui/page/login.html
```

Where uap_server_ip represents the IP address of the server where Tomcat is located, and uap_server_port is the web service port configured by Tomcat. The default is 8080.