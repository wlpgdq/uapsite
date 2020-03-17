---
title: System Settings
metaTitle: System settings
sidebarDepth: 3
---

## System coding

In the menu tree, click System Settings-> System Code to open the system code page, as shown in the figure below:

<img :src = "$withBase('/userManual/systemCode.png')" alt = "image">

The page contains two sections:
* The coding tree on the left can choose the coding under different applications (the selected application range is the application that the logged-in user can operate)
* Click the tree node on the left, and the selected encoding information is displayed on the right, including basic information and international configuration
* Functions from left to right are: add, edit, delete

### Add encoding

Click the Add button in the upper right corner, and the basic information and internationalization interface on the right become editable as a new encoding interface.

* If a coding node has been selected before clicking the Add button, the system automatically sets this coding node as the parent node of the newly added node, and this coding node information is automatically filled into the parent coding and parent coding values ​​of the basic information interface. Apps are also automatically set to the currently selected app

* Basic Information

    The system supports coded packets. When you add a new code, you can select the coding type as the coded packet to create a packet-type code.
    <img :src = "$withBase('/userManual/addSystemCode.png')" alt = "image">

* globalization
    <img :src = "$withBase('/userManual/addSystemCode1.png')" alt = "image">



### Edit encoding

Select the coding node to be edited on the left tree, click the edit button in the upper right corner, and the basic information and internationalization interface on the right become editable. After modification, click Save to complete the coding editing

### Delete encoding

Select the coding node to be deleted on the left tree, click the delete button in the upper right corner, and the system asks if you want to confirm the deletion

::: warning
Used encodings cannot be deleted
:::


## API Interface Log

In the menu tree, click System Settings-> API Interface Log to open the API excuse log page, as shown below:

<img :src = "$withBase('/userManual/apiLog.png')" alt = "image">

Display the log record list of the interface status of the tenant to which the currently logged in user is configured. The interface management needs to set the log status to enabled. The system will save any access logs for this interface, each call parameter, and general results, and save the interface. Call time

System provides time and access URL query log function

### View detailed log information

As shown in the figure:

<img :src = "$withBase('/userManual/apiLogInfo.png')" alt = "image">

## Login log

In the menu tree, click System Settings-> Login Log to open the login log page, as shown in the figure below:

<img :src = "$withBase('/userManual/loginLog.png')" alt = "image">

This page displays a list of user login logs in the tenant to which the currently logged in user belongs, showing detailed information such as login account, user, login time, log out time, IP, etc.

The system provides the function of querying logs according to time

## Calendar management

In the menu tree, click System Settings-> Calendar Management to open the calendar management page, as shown below:

<img :src = "$withBase('/userManual/dateLog.png')" alt = "image">

* This page shows whether a tenant's day is a working day
* Used to set the tenant as a working day or a rest day
* The default interface initializes the current year's data of the first tenant and displays the data of the current date and month

Initialization

    Select a certain year, and click the `Initialize` button. By default, the Saturday and Sunday of the current year are rest days, and other days are workdays.

Reset

    Select a certain year and click the `Reset` button to restore the calendar data of the current year to the initial data

3. Set the calendar data

    * Select and initialize the date of a certain day, right-click
        Click `Resting` to set the currently clicked date as the rest day;
        Click `Overtime` to set the current clicked date as a working day;
        Click `Cancel` to remove the date mark of the current click;
        Click `Back` to close the setting box

    * Click the `Save` button to set the date of the currently selected year, month, and day
    * Click the `Reset` button to cancel the date setting of the currently selected year and month

    <img :src = "$withBase('/userManual/setDate.png')" alt = "image">

4. Query

    Select a certain year and month to query whether all the dates of this month are working days or closed days

::: warning
Can only initialize the current year and the next four years at most
:::

## Illegal login log

In the menu tree, click System Settings-> Illegal Login Log to open the Illegal Login Log page, as shown below:

<img :src = "$withBase('/userManual/illegalLog.png')" alt = "image">

This page mainly displays the list of user login illegal logs in the tenant to which the currently logged in user belongs. The page displays the user account, username, request start time, brief results, and the IP information system provides the function of querying illegal logs according to time

## Menu log

In the menu tree, click System Settings-> Menu Log to open the menu log page, as shown in the figure:

<img :src = "$withBase('/userManual/menuLog.png')" alt = "image">

This page mainly displays the user operation interface record list under the tenant to which the currently logged in user belongs. The page displays the user account, user name, menu name, and operation time. The system provides querying the menu log according to time.