---
title: Application Settings
metaTitle: Application settings
sidebarDepth: 3
---

# Application settings

Application settings provide configuration and management of multiple applications, menus and background interfaces for each application

## Application

In the menu tree, click Application Settings-> Application to open the application page, as shown in the figure below:

<img :src = "$withBase('/userManual/application.png')" alt = "image">

The application management page lists the current system configuration applications (the range is the application that the logged-in user can operate), including the application name, encoding, type, superior application, and application address, which can be queried based on the application name

### New application

Click the add button in the upper right corner, and the system will pop up a new application page, as shown below:

<img :src = "$withBase('/userManual/addAapplication.png')" alt = "image">

The application code and application authentication password are the account and password that this application needs to provide when it subsequently calls other application interfaces.

### Edit application

Click the edit button in the action bar, the application information edit page pops up, save after modification

### Delete application

Click the delete button in the action bar, and the application delete confirmation page pops up

::: warning
If an app is already in use, it is prohibited to delete this app.
:::


### Sync application (not available on this button platform)

Click the synchronization button in the operation column, the system will automatically refresh all the interfaces implemented by the application. You can view the corresponding interface of the application through the interface management page.

### Start and stop applications

The application list `enabled` column is used to indicate whether the corresponding application is enabled or disabled. Disabling an app is equivalent to providing tombstone of the app.

::: warning
The platform initialization data script is configured with predefined application configuration data. Normally, only the server addresses of these predefined applications need to be updated according to the deployment environment. No other configuration data needs to be modified.
:::

## Menu

Menu tree Click Application Settings-> Menu to open the menu page, as shown below:

<img :src = "$withBase('/userManual/menu.png')" alt = "image">

The page contains two parts. The menu tree on the left can select menus under different applications (the selected application range is the application that the logged-in user can operate). Click the tree node on the left, and the information of the selected menu is displayed on the right, including basic information and internationalization. Configuration and menu corresponding API information

### New menu

* Click the Add button in the upper right corner, and the basic information, internationalization, and API pages on the right become editable. On the basic information page, the system automatically fills the `apps` as the currently selected application. After editing the content of each page, click Save finish creating new menu
* If no menu is selected before clicking the Add button, a first-level menu is created by default
* If you select a menu before clicking the Add button, the system automatically fills the selected menu as the parent node of the new menu

<img :src = "$withBase('/userManual/addMenu.png')" alt = "image">

#### Field description:

* `Menu Type` The system supports" Menu Grouping "," Menu-Function Menu "," Function "," Menu-Workflow "," Menu-Scheduled Task "," Menu-Other "by default. The first three items correspond to the first, second and third level menus in the menu tree. The system will display the first two levels. The last three items are only distinguished by type. The user can expand the menu type through "coding management".
* `Authorization Type` is used to define this menu to display the prerequisites, including no login required (such as login function menu), login (such as virtual menu and favorite menu functions, etc.), login and authorization.
* The `Encoding` platform controls whether the“ feature ”type menu is available under different roles through menu encoding. For example, for the "Add User" function menu configuration code is "Add", the front-end page can obtain whether the function menu list contains the "Add" code to determine whether to display the Add User button for the current user.
* `URL type` is not currently used
* `Function type` system defines three function menus, system general functions, system advanced functions and business functions. Among them, the management role only loads the system general function and system advanced function menu after login, and the ordinary role loads only the system general function and business function menu after login.
* `Icon` At present, the Font Awesome icon library is integrated on the platform. Find the tags corresponding to the icons and fill them, such as" fa fa-user-o ".
* `Internationalization` Click Internationalization Tab as shown below:

    <img :src = "$withBase('/userManual/menuLocate.png')" alt = "image">

You can add multiple language tags to the current menu by clicking the Add button in the upper-left corner of the Internationalized Tab. You can also delete the configured language tags by using the Delete button. After the user logs in, the system automatically displays the corresponding menu label according to the language selected by the user.

* `API` Click API Tab as shown below:

    <img :src = "$withBase('/userManual/menuAPI.png')" alt = "image">

API Tab page is only valid for function menu for operation

The lower right part is a list of interfaces filtered according to the application, and the upper right part is a list of interfaces configured in the current menu. The binding of the menu page and the page access interface is completed by configuring the corresponding interface for the current menu.

### Edit menu

Select a menu and click the edit button in the upper right corner. The basic information, internationalization, and API pages on the right become editable. After modifying the contents of each page, click Save to complete the editing of the new menu.

### Delete menu

Select a menu and click the delete button in the upper right corner, the delete confirmation page pops up

::: warning
* Menus already in use cannot be deleted
* Although the system provides the above various functions, because the platform initialization data script contains the menu configuration data of each predefined application, under normal circumstances, only the internationalized resources need to be configured for the menu, and no other configuration data needs to be modified.
:::

## Menu customization

In the menu tree, click Application Settings-> Menu Customization to open the menu customization page, as shown in the figure below:

<img :src = "$withBase('/userManual/menuCustom.png')" alt = "image">

The page contains two parts. The left menu tree can select different custom menus. Click the left tree node, and the right side displays the information of the selected menu, including basic information, internationalization configuration and related menu information

### New menu customization

* Click the Add button in the upper right corner, and the basic information, internationalization and related menu pages on the right become editable. After editing the content of each page, click Save to complete the creation of the new menu
* If no menu is selected before clicking the Add button, a first-level menu is created by default
* If a menu is selected before clicking the Add button, the system automatically fills the selected menu as the parent node of the new menu

<img :src = "$withBase('/userManual/addMenuCustom.png')" alt = "image">

::: warning
New menu custom ID cannot contain the character "-"
:::

#### Field introduction

* `Menu Type` The system supports" Combination "," Grouping ", and" Menu "by default. These three items correspond to the one, two, and three levels of the menu tree, and the system displays the next two levels.
* `Internationalization` Click the Internationalization Tab button, you can add multiple language tags to the current menu, or you can delete the configured language tags through the button. After the user logs in, the system automatically displays the corresponding menu label according to the language selected by the user.

* `Related menu` Click on the associated menu Tab as shown below:

    <img :src = "$withBase('/userManual/contextMenu.png')" alt = "image">

    * Related menu Tab page operation related menu, in which the right part is a list of menus filtered according to the application, by binding the corresponding menu for the current menu to complete the menu customization page and page access interface binding
    * If you need to sort after binding, you need to manually set the rankId to sort
    * View linked menus
    <img :src = "$withBase('/userManual/viewContextMenu.png')" alt = "image">



### Delete menu customization

Click the delete button to delete the menu customization

::: warning
When deleting menu customization, you must first cancel the permission menu related to the role that has been granted to the role.
:::


## API interface

In the menu tree, click Application Settings-> API Interface to open the interface page, as shown in the figure below:

<img :src = "$withBase('/userManual/api.png')" alt = "image">

* The page provides query interface functions according to different conditions. Optional query conditions include status, application, menu type, URL, menu name and label. The menu name supports fuzzy matching.

### New interface

Click the Add button in the upper right corner, the interface for adding a new interface pops up, as shown below:

<img :src = "$withBase('/userManual/addApi.png')" alt = "image">

The name, ID, interface label, URL, and application are required. The encoding and the new menu encoding can achieve the same function. The log type is filled according to the needs. The full name of the log processing interface class

### Delete interface

Click the delete button in the operation column of the interface to be deleted. The interface deletion confirmation page pops up.

::: warning
If the interface is already in use, the system prohibits deleting the interface
:::

### Editing excuses

Click the edit button in the operation column of the interface to be edited, the interface edit page pops up, save it after modification

### View configuration menu

Click the view button in the operation column of the interface you want to view.

<img :src = "$withBase('/userManual/viewApi.png')" alt = "image">

### Start-stop interface

The interface list enable column is used to indicate whether the corresponding interface is enabled or disabled. Disabling an interface is equivalent to providing tombstone for the interface.

::: warning
Although the system provides the above various functions, because the platform initialization data script contains the interface configuration data of each predefined application, the user does not need to modify the data in the interface list under normal circumstances. Unless there is a special need, you can use the "Synchronize Application" operation in "Application Management" to complete the interface data synchronization with the actual system data
:::

## Multitenancy

In the menu tree, click Application Settings-> Multitenancy to open the Multitenancy page, as shown in the figure below:

<img :src = "$withBase('/userManual/tenant.png')" alt = "image">

* Multi-tenant management page lists all tenant information, including tenant name, logo, tax ID, email, mobile phone number and address

* The functional items below the tenant information are: personalize tenant configuration, edit tenant, refresh tenant, delete tenant

### Add tenant

Click the Add button in the upper right corner, and the system will pop up the interface for adding a tenant, as shown in the figure below:

<img :src = "$withBase('/userManual/addTenant.png')" alt = "image">

The name is required, you can modify the logo picture by clicking the logo picture

### Delete tenant

Click the delete button of the tenant you want to delete.

::: warning
If the tenant is already in use, the system prohibits deleting the tenant
:::

### Edit tenant

Click the edit button of the tenant to be edited, the system will edit the tenant edit page, save it after modification

### Flush the cache

Click to refresh tenant cache

### Personalized tenant configuration

Click the configuration button of the tenant to be configured, the system will pop up the tenant configuration page, as shown below:

<img :src = "$withBase('/userManual/configTenant.png')" alt = "image">

::: warning
* Menu customization is associated with the application, and the application is automatically associated according to the selected menu combination.

    Menu customization is to customize the display menu of the tenant's home page, and task customization is to customize the display fields of the My Tasks and History Tasks pages.

* The homepage is the homepage of the tenant. After modifying the menu customization, the homepage must be modified accordingly.
* The password expiration reminder is configured to limit the number of days left before the user account password of the tenant expires.
* The password validity time is configured to limit the user account password validity time under the tenant.
* The number of password history is limited to how many times the user account password of the tenant can be changed and cannot be repeatedly configured.
* The password strength is configured to limit the user account password of the tenant.
:::


## Tenant Information

Click Application Settings-> Tenant Information in the menu tree to open the tenant information page, as shown in the figure below:

<img :src = "$withBase('/userManual/tenantInfo.png')" alt = "image">

The tenant information page displays detailed information about the tenant to which the currently logged in user belongs, including basic information and configuration information such as the tenant name, logo, tax ID, email address, mobile phone number, address, associated custom menus, custom tasks, and applications.
Modify tenant letter