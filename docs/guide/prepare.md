# Preparation for deployment

This chapter describes preparations for installing the unified application platform, including the operating system and related tools and environments.

## Operating system

### The unified application platform supports Windows server or Linux server. Linux server is recommended.

The supported versions are:

| System | Version |
| ---- | ---- |
| Windows | Windows Server 10 and above |
| Linux | Redhat 6.5 Enterprise Edition and above |

### Install operating system

After the operating system is selected, install it according to the corresponding installation documents. You need to complete the installation of the operating system of the server running the unified application platform and the operating system of the database server.

## Environmental preparation

### Unified application platform requires the following related tools or operating environment

Matters | Version | Instructions |
| ---- | ---- | ---- |
| JAVA | JDK8 (inclusive) and above | [http://www.oracle.com/technetwork/java/index.html](http://www.oracle.com/technetwork/java/index.html) |
| Tomcat | 9.0.17 (inclusive) and above | [http://tomcat.apache.org](http://tomcat.apache.org) |
Database | Supports MySql and Oracle, cache for redis, document database supports mongodb | MySql supports 5.7 and above, Oracle supports 11g and above, redis supports 4.0 and above, mongodb supports 4.0 and above |
Browser | Support IE11 and above IE series browsers, and support ECMAScript5 browsers | |

::: warning
It is recommended to install the database on a separate server. Please refer to Mysql and Oracle, redis, mongodb official instructions to select the operating system and database version.
:::

### Install database

Get the corresponding Mysql, mongodb, and Oracle according to the selected database operating system, install the database and complete the related configuration according to the official instructions.

Obtain the corresponding redis according to the selected database operating system, install redis according to the official instructions and complete the related configuration. Enable redis external access permissions and set access for redis. At the same time, redis must set a password.

::: warning
If you use an oracle database, you must ensure that the language setting of the oracle database can support the language used by the project. You can execute the following statement to view the character set of oracle:
```
    select userenv ('language') from dual;
```

If you use a mysql database, you must ensure that mysql's character set is set to UTF-8 and the collation is set to utf8_bin.
:::

### Install JDK

To obtain the corresponding JDK version according to the operating system selected by the unified application platform, you need JDK8 or above, and complete the JDK installation according to the official JDK instructions.

::: warning
After installing the JDK, you need to configure the JAVA environment variables.

[Configure JAVA environment variables under Win7](https://jingyan.baidu.com/article/9f63fb91d87fb0c8400f0e93.html)

[Configure JAVA environment variables under Windows 10](https://jingyan.baidu.com/article/e8cdb32bfa4b2f37052bad07.html)

[Configure JAVA environment variables under Linux](https://www.cnblogs.com/beanbag/p/10766984.html)
:::

### Install Tomcat

The Tomcat version needs to be compatible with the installed JDK version. Please refer to the Tomcat official instructions for the selected version. Tomcat provides a compressed version or installation version. The compressed package version can be directly decompressed to the target running path. The installation version completes the installation step by step according to the installation package prompts. Remember the Tomcat installation path after the installation is complete.

::: warning
Obtain the IP address of the machine after the installation is complete. If the machine's address is 192.168.10.10, visit http://192.168.10.10:${port} to test whether the startup is successful.
:::

### Install browser

Currently the unified application platform supports IE11 and above, as well as Chrome and Firefox compatible with ECMAScript5. Newly downloaded Chrome and Firefox support ECMAScript5, please download and install as needed.

### Unified Application Platform Installation Package

The unified application platform installation package is divided into the following parts:

* Platform basic function package
* Workflow Feature Pack
* Scheduled task function package
* System monitoring feature pack (requires mongodb)
* Message Service Feature Pack (requires mongodb)
* Front-end package
* Database script and initial data script

Obtain the relevant installation package files from the FTP server according to the contents of Release Notes.

::: warning
After obtaining the UAP installation package for the unified application platform, please refer to the subsequent sections of this document for configuration before running.
:::