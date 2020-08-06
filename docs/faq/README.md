---
title: FAQ
meteTitle: FAQ
sidebarDepth: auto
---



# FAQ



## Q：What is HX UAP？

A：HX UAP is a unified application platform for the system business department. It is a model, template, development tool, application framework, basic technology library and research and development model that HeXing has extracted from the development process of application software for many years. It adopts a visual development model. , Provide a unified application platform that covers the full life cycle of the software development, integration, operation, management and other functions.

## Q：What software or files should be prepared for HX UAP deployment？

A：Deployment need

- JAVA environment (JDK8)
- Tomcat9 and above
-  required war package or jar package
- MySQL database or oracle database
- Redis, MongoDB 
- Chrome browser



## Q：Where should the war package be placed？

A：The war package is placed under /webapps in the Tomcat installation directoryFor example:

> D:/apache-tomcat-9.0.17/webapps/ {war package}



## Q：Why does the configuration still not take effect after modifying the configuration file in Tomcat？

A：You can try to clear the cache files of Tomcat.

Tomcat cache cleaning steps:

1. Enter the Tomcat installation path and empty the files in the temp folder
2. Delete the files in the Catalina folder under the work folder
3. Restart Tomcat



## Q：Why does Tomcat always report errors when starting？

A：First check the error message, you can enter the logs folder under the Tomcat directory, find the .txt file that reported the error according to the date, and then check the file to find the error message.If you can't solve it by yourself, you can consult relevant personnel.

Possible reasons for Tomcat error:

- uapconfig configuration error, please carefully check whether the uap configuration file is correct, you can check with uap documentation
- -Is the JDK version compatible with the Tomcat version
- -The uiconfig.json file configuration is wrong



Q: Why does Tomcat fail to start or exit automatically?

A: Possible reasons:

- Go to the uapconf folder under Tomcat, open the uap.properties file, and check whether the license path configuration is correct, you need to configure the absolute path.    

  > uap.licFilePath=D:/UAP/license/uap_Local.dll


- The Tomcat file is missing or damaged, which can be repaired by downloading and installing again.



## Q: Why does Tomcat fail to start or exit automatically？

A：Possible reasons:

- Go to the uapconf folder under Tomcat, open the uap.properties file, and check whether the license path configuration is correct, you need to configure the absolute path.   

  > uap.licFilePath=D:/UAP/license/uap_Local.dll

- The Tomcat file is missing or damaged, which can be repaired by downloading and installing again.



## Q：What is the difference between an administrator user and a normal user?

A：Administrator user rights can modify **all user** data 

​      Ordinary user permissions can only modify **the data of the peer and subordinate users of the organization to which they belong** 

> The data includes:Organize assignment, add users, delete users, modify users, etc.



## Q：How to determine whether the account is an administrator role?

A：Users can judge based on the `Functional types` option of the Menus tab

|                    | Business functions | General function of system | Advanced system function |
| :----------------: | :----------------: | :------------------------: | :----------------------: |
|       Admin        |         √          |             √              |            √             |
| Business Personnel |         √          |             √              |                          |
|     Developer      |                    |             √              |            √             |

According to the table, there are three options for the administrator’s menu options, namely **business functions**, **general functions** and **development functions**

The other two roles only have two functional interfaces related to them