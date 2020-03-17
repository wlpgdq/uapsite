---
title: Organization Management
metaTitle: Organization Management
sidebarDepth: 3
---

## Users
Click Organization Management-> User in the menu tree to open the user page, as shown in the figure below:

<img :src="$withBase('/userManual/orgUser.png')" alt="image">

The page contains two parts. On the left is the organizational structure tree corresponding to each tenant. The platform administrator can filter the organization by the tenant. Users under other tenants can only display the organization under the tenant to which the login user belongs.

Select any node in the organization structure tree, and the user list of the corresponding organization is displayed on the right. The system provides filtering by status and fuzzy matching by name.

::: warning
When you open the user page for the first time, the list of all users configured by the current tenant is displayed by default on the right
:::

### User operation list introduction

From left to right: edit user, configuration (configure user role), configuration management unit, reset password, password modification record

<img :src="$withBase('/userManual/userConfigList.png')" alt="image">

### New users

Find the organization to which the new user belongs from the organization tree, select the node of the organization tree, and click the Add button. The system prompts the user to enter the new user information, as shown in the following figure:

<img :src="$withBase('/userManual/addUser.png')" alt="image">

* Password must include numbers, uppercase and lowercase letters, special characters, and be longer than 8
* Mobile number must be numeric
* Email and IP must conform to the standard format
* Binding IP is used to set this user can only log in based on this IP
* The avatar must choose a picture format
* `Validity period` means that the user is only valid during the login period, and is not set to be permanent
* `Valid login time` means that the user is valid for login during the time period in a day, and is not set to be valid for one day

After completing the information, click OK to complete the new user addition

### Edit user

Click the edit button in the action column. The user edit interface pops up. After modifying the corresponding information, click the confirm button to complete the information submission.

### Configure (configure roles for users)

::: tip
Function: configure one or more roles for the user
:::

Click the configuration button in the action bar, the user edit interface pops up, as shown below

<img :src="$withBase('/userManual/configUser.png')" alt="image">

The left is a list of roles that have been configured in the current system.

* Click the plus button to add the corresponding role for the current user, and on the right is a list of roles that the current user has configured
* Click the delete button to delete the corresponding role for the current user
* Click the back button at the top to return to the user page

### Configuration snap-in

::: tip
Function: configure one or more organization permissions for the user
:::

Click the configuration management unit button in the operation column, the system will pop up the configuration management unit page, as shown below:

<img :src="$withBase('/userManual/configOrg.png')" alt="image">

* The right side is the user selectable organization, the left tree is the organization tree of the root node of the currently logged-in user, and the right table corresponds to the current user optional organization
* Click the delete button to delete the corresponding organization for the current user
* Click the top back button to return to the user interface

### Reset Password

Click the reset password button in the action bar. After confirming the reset password, a random password will be generated.

::: tip
The user can log in with the random password. After logging in, the user can change the password by changing the password.
:::

<img :src="$withBase('/userManual/resetPassword.png')" alt="image">

### Password modification records

Click the re-password modification record button in the operation list. The system pops up a dialog box to view the specific modification time.

<img :src="$withBase('/userManual/resetPasswordRecord.png')" alt="image">

### Start and stop users

* The "Enable column" in the user list is used to indicate whether the corresponding user is enabled or disabled
* Disabled users cannot log in to the system, and various system functions cannot be used normally. Disabled users are equivalent to providing tombstone for users
* New users are enabled by default, and users cannot enable or disable themselves

<img :src = "$withBase('/userManual/startStopUser.png')" alt = "image">

## Organization

In the menu tree, click Organization Management-> Organization to open the Organization Management page, as shown below:

<img :src = "$withBase('/userManual/org.png')" alt = "image">

* The page contains two sections

    On the left is the organizational structure tree corresponding to each system tenant. The platform administrator can filter the organization by the tenant. Users under other tenants can only display the organization under the tenant to which the logged-in user belongs. List, the system provides filtering by status and fuzzy matching by name

* Operation list

    From left to right: edit organization, move up, move down

::: warning
When you open the organization page for the first time, the list of all the first-level organizations configured by the current tenant is displayed on the right by default.
:::

### Add organization

Click the Add button to open the new organization interface, as shown below:

<img :src = "$withBase('/userManual/addOrg.png')" alt = "image">

* The parent organization is automatically populated as the user selects the organization in the left organization tree before clicking the Add button
* If no node in the organization tree is selected before clicking the Add button, the parent organization will be set to empty, which means that the newly created organization is the first-level organization of the current application
* After completing the other information, click OK to complete the creation of the new organization

### Edit organization

Click the edit button in the action column, the system edit interface pops up, as shown below:

<img :src = "$withBase('/userManual/editOrg.png')" alt = "image">

After modifying the corresponding information, click the confirm button to complete the information submission

### Organization sort

Click the sort button in the action column to finish moving up or down the current organization

### Start-stop organization

* The organization list `Enable column` is used to indicate whether the corresponding organization is enabled or disabled
* Deactivating an organization is equivalent to providing tombstone for the organization


## Management unit configuration

::: tip
Function: Assign organizations to users
:::
    

Click on Organization System Management-> Management Unit Configuration in the menu tree to open the management unit configuration page, as shown in the figure below:

<img :src = "$withBase('/userManual/managementUnitConf.png')" alt = "image">

* The page contains three sections

    On the left is the organization tree of the tenant to which the currently logged in user belongs. Select any node in the organization structure tree, and a list of all users in the organization is displayed in the middle. The system provides the function of filtering users based on status filtering and fuzzy matching. This user has been assigned a list of organizations

* Click the top to return to the organization system management page

::: warning
When you open the basic organization management page for the first time, the list of all the first-level basic organizations configured by the current application is displayed on the right by default.
:::

### Add User Assignment Organization

Click the plus button in the operation bar, and the distribution organization interface pops up on the right, as shown in the figure below:

<img :src = "$withBase('/userManual/addManagementUnit.png')" alt = "image">

The page contains two parts. The left side is the organization tree of the current logged-in user's organization as the root node. Select any node of the organization structure tree. The right side displays all the organization's optional child nodes under the organization. The system provides the name. Fuzzy match filtering organization function selects the organization to be assigned

Click the OK button, the user is successfully organized

### Delete user assigned organization

Click the delete button in the operation bar in the list of assigned organizations to delete the assigned organization corresponding to the currently selected user

<img :src = "$withBase('/userManual/deleteManagementUnit.png')" alt = "image">