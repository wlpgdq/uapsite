---
title: Login and Home
metaTitle: Login and Home
---

## Log In

Open the unified application platform login interface through a browser, as shown in the following figure:

<img :src="$withBase('/userManual/login1.png')" alt="image">

Select the language, enter the correct login name and password, and click the login button to enter the home page.
* After 6 login failures, the account is locked, you must contact the administrator to reset the password;
* The user needs to change the password when logging in to the system for the first time. The password level and validity period are restricted according to the tenant configuration.
* If the login error is reported, and the user sets the password prompt (modify the password interface configuration) will be displayed as follows:

<img :src="$withBase('/userManual/login2.png')" alt="image">

## Home

The home page is shown below:

<img :src="$withBase('/userManual/homepage1.png')" alt="image">

The user homepage is divided into three sections: the menu tree on the left, the toolbar at the top, and the ribbon on the bottom right.

<img :src="$withBase('/userManual/homepage2.png')" alt="image">

* Menu Tree

    The system generates a user-accessible menu tree according to the role of the current user and the menu configuration corresponding to the role. The top-ranked "shortcut" is used to display the user's favorite menu list, so that users can quickly access the corresponding functions. For the configuration of user roles and role corresponding menus, please refer to the corresponding sections.

* Toolbar

    The toolbar provides some common operations for users, from left to right:
    
    1. Used to control the display and hide of the left menu tree
    2. Search for menus, fuzzy match the user's menu list according to the input, and display the list of up to ten recently visited by default
    3. Message
    4. Whether the user bookmarks this feature
    5. Control system full screen display
    6. Login user management, click to edit personal information, change password and log out of the system

        * Edit Personal Information

            <img :src="$withBase('/userManual/editUserMessage.png')" alt="image">

        * Change Password

            <img :src="$withBase('/userManual/editUserPassword.png')" alt="image">
        
* Ribbon

    After the user clicks the menu, the system will load the corresponding page of the menu as a tab page in the ribbon. The specific page content is defined by each function. The system provides the function of managing tab pages in the ribbon, including the functions of setting the home page, closing the current tab page, closing all tab pages, navigating to the tab page, and refreshing the tab page.