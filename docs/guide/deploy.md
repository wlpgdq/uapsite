# Deploy

## Platform Basic Function Database

Before the service starts, you need to initialize or upgrade the database. There are currently two ways:
* The script is manually executed in the database. If you execute the script manually for the first time, you will also need to execute the upgrade script manually during subsequent upgrades. The database script of the unified application platform is placed in the published doc directory according to the path of "package-database Vendor-version". Please select a suitable script for execution according to the current deployment.

<!-- ![doc directory](/doc.png) -->
<img :src="$withBase('/deploy/doc.png')" alt="doc directory">

::: danger
For the first deployment of the UAP database, the scripts of each version need to be executed in order according to the version number.
For databases that have already deployed UAP, first check the currently deployed UAP version, and then execute the scripts in subsequent upgrade versions in turn.
:::

* To execute the script automatically, you need to set spring.flyway.enabled: true, and the default configuration is false (see 3.2 Configuration File). If the script is executed automatically for the first time using flyway, in subsequent upgrades, please continue to execute the script using flyway. The flyway shutdown is not performed automatically by default. Once the flyway script is executed, it cannot be changed. If you want to modify the data in the future, you need to write another upgrade script. War package released by unified application platform

Database scripts are included, so you don't need to copy the scripts in the doc directory.

Mysql: War package name \ WEB-INF \ classes \ db \ migration \ mysql \
Oracle: War package name \ WEB-INF \ classes \ db \ migration \ oracle \

<!-- ![Data script directory](/databaseSql.png) -->
<img :src="$withBase('/deploy/databaseSql.png')" alt="Data script directory">

::: warning
For the oralce database, if you use oracle management tools such as pl / sql to execute the script, you must configure the local environment variables LANG and NLS_LANG according to the language used by the project before executing the script.
:::

## Program

Starting from version 2.0.0.0, the unified application platform provides two deployment methods:

* The same way as the 1.x.x.x version of each module war package deployment
* Micro service jar package deployment method

If you upgrade from 1.x.x.x to 2.0.0.0 or later, you can choose to keep the original deployment method, or you can choose to use microservices to deploy. The war package deployment method directly copies the relevant war package published by UAP to the Tomcat webapps directory. For the micro-service deployment steps, please refer to the Unified Application Platform_Micro-Service Deployment Manual.