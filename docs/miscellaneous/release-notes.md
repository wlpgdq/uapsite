---
sidebar: auto
---

# Release Notes
### new function

| Function points | Description | Remarks |
| ---- | ---- | ---- |
| Contains all UAP 3.0.0.0 | Refer to UAP3.0.0.0 Release Notes | |
| Menu customization security audit | Provide audit function for menu customization | |
| Blacklist | Blacklist and whitelist mechanism based on IP user login | Need to expand the classes that need to be audited |
| UAP permission script simplification | Simplify the steps of UAP authentication and reduce code redundancy | |
| UAP Client new cache function | Support cache files | |
| Delete homepage | User can delete custom homepage | Display the tenant's default homepage after deletion |
| Organization Management Function | UAP Organization Management | |

### Bug fixes and optimization

| Question | Description | Remarks |
| ---- | ---- | ---- |
| Optimize UAP login time | Optimize UAP login time is too long | |
## Version: UAP 3.0.0.0

### New Function

| Function points | Description | Remarks |
| ---- | ---- | ---- |
| Contains all UAP 2.3.0.0 | Refer to UAP2.3.0.0 Release Notes | |
| Tenant upload and download | Provide tenants with upload and download functions of the distributed file system | |
| Audit function | Support for auditing the fields that need to be audited | Need to extend the classes that need to be audited |
| Menu drag & drop | Support menu drag & drop copy | |
| License file internationalization conversion tool | Supports mutual conversion of properties files and Json format files | Address in Uap-Site |

## Bug fixes and optimizations

| Problem | Description | Remarks |
| ---- | ---- | ---- |
| Back-end internationalization coding refinement | Refine the back-end prompt information, as much as possible | Optimize |

### 3.0.0.0 version upgrade notes

The `UAP3.0.0.0` version is a major version upgrade in the UAP version update process. Due to the addition and optimization of most of the functions, the content of this version has changed a lot, and users need to update some of the content

::: warning
For developers: This upgrade needs to update the `uap-common` package version to `3.0.0.0-RELEASE` for development projects that use the `uap-common` package after upgrading the database script.
:::

```xml
     <!-- The dependent version should be changed to the following -->
     <dependency>
        <groupId>com.hexing.uap</groupId>
        <artifactId>uap-common</artifactId>
        <version>3.0.0.0-RELEASE</version>
     <dependency/>
```

## Version: UAP 2.3.0.0

### New Function

| Function points | Description | Remarks |
| ---- | ---- | ---- |
| Contains all UAP 2.0.0.0 | Refer to UAP2.0.0.0 Release Notes | |
| Configuration Center | Provide custom configuration for administrators | |
| Report function | Support custom report function | Need to generate .jasper file through report tool in advance |
| Data Permission | Added Data Permission Function | Better Segmentation Permissions |
| Configure database data | Add the function of database configuration data | |

### Bug fixes and optimizations

| Problem | Description | Remarks |
| ---- | ---- | ---- |
| Time issue of Iranian calendar data export | Data conversion issue | Optimization |


## Version: UAP 2.0.0.0

### New Function

Function points | Description | Remarks |
| ---- | ---- | ---- |
Include UAP 1.3.0.0 all | See UAP 1.3.0.0 Release Notes | |
Microservice architecture | The platform supports microservice deployment. For details, please refer to the microservice deployment manual.
Message Center | Support Message Management Configuration and Message Center |
| System Monitoring | Added System Monitoring Function | |
Workdays | Add workday management features | |
Scheduled task upgrade | Support task sharding and distributed deployment |
Workflow Upgrade | Flowable Version Upgrade | |

### Bug fixes and optimizations

| Problem | Description | Remarks |
| ---- | ---- | ---- |
Oracle Data Script Cannot Be Repeated | Data Script | Optimization |

### 2.0.0.0 version upgrade notes

The `UAP2.0.0.0` version is a major version upgrade in the UAP version update process. Due to the addition and optimization of most functions, the content of this version has changed a lot, and users need to update some of the content

::: warning
For developers: This upgrade optimizes the structure of the `uap-common` package, and puts the TokenUtil.class under the `uap-common` package into the util package
:::

```
Old version reference tool class: com.hexing.uap.common.TokenUtil.class
New version reference tool class: com.hexing.uap.util.TokenUtil.class
```

<img :src="$withBase('/develop/update1.png')" alt = "update">

::: warning
For developers: merge `TokenResponseCode.class` into `ResponseCode.class`, and refine and delete some codes
:::

<img :src="$withBase('/develop/update2.png')" alt = "update">

Partially refined Code:

<img :src="$withBase('/develop/update3.png')" alt = "update">

## Version: UAP 1.3.0.0

### New Function

Function points | Description | Remarks |
| ---- | ---- | ---- |
| Cache refresh | New cache refresh function | |
Message Center | New Message Function Module | |
Workflow upgrade | Workflow core engine upgraded from 6.3.0 to 6.4.2 | |
User password reminder | User can set password reminder message | |
User lock messages | Support user lock messages via Message Center | |


### Bug fixes and optimizations

| Problem | Description | Remarks |
| ---- | ---- | ---- |
Message internationalization moved to front-end configuration | Internationalization | Optimization |
Oracle Data Script Cannot Be Repeated | Data Script | Optimization |



## Version: UAP 1.2.0.3

### New Function

Function points | Description | Remarks |
| ---- | ---- | ---- |
User's organization can be modified | User's organization can be modified | |
Interface optimization | Application mode first-level menu display optimization | |

### Bug fixes and optimizations

| Problem | Description | Remarks |
| ---- | ---- | ---- |
Message internationalization moved to front-end configuration | Internationalization | Optimization |
Oracle Data Script Cannot Be Repeated | Data Script | Optimization |


## Version: UAP 1.1.0.2

### New Function

Function points | Description | Remarks |
| ---- | ---- | ---- |
The platform releases the default language to English | When other languages ​​are needed, language files can be added, and the platform provides templates for internationalized documents that need to be translated |
Add Inherited Type as Inherited Role Authorization Restriction | Inherited Type is Inherited Role Sub-role cannot modify permissions of its parent role | |

### Bug fixes and optimizations

| Problem | Description | Remarks |
| ---- | ---- | ---- |
| Fixed the problem that the login log view interface will refresh the token record every year.
Message internationalization moved to front-end configuration | Internationalization | Optimization |