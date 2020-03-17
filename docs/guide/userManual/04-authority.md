---
title: Rights Management
metaTitle: Rights Management
sidebarDepth: 3
---

## Roles

Single-click on permission management-> role to open the role page, as shown in the figure below:

<img :src = "$withBase('/userManual/role.png')" alt = "image">

* The role management page provides the role query function, and the query results are displayed in the role list below
* The platform administrator can filter roles by the tenant. Users in other tenants will display the list based on whether the selected role of the logged-in user is the root role. If the root role has no parent role, the role and its child roles and their cascading children will be displayed. Role, if it is a parent role, show its child roles and their cascading child roles
* Double-click any role in the role list, and the right side will display the configurable menu items of the current role in a menu tree. The menu configuration of the current role can be modified through the menu tree on the right. Click Submit to complete the update of the current role configuration menu items.
* function list

    From left to right: delete role, edit role, configure (assign selected role to user)

### Add character

Click the add button in the upper right corner of the list to open the role addition page, as shown below:

<img :src = "$withBase('/userManual/addRole.png')" alt = "image">

* The role type supports `management role` and` ordinary role`

    The management role can operate all system menus, including general and advanced, while the ordinary role can only operate business menus and system general menus. For specific menu type configuration, please refer to the relevant section of `Menu`

* Role inheritance type is used to define the scope of authority of the added role

    Select `Inherit`. When adding a child role to the current role, the child role can only have a subset of the permissions that the parent role has.

::: warning
* If you do not select a new role, the selected registrant role is set to the parent role by default, or one of the selected roles is selected as the parent role.
* The role added when the user does not make a choice under the platform tenant is the root role
* Character code cannot contain characters "-"
:::

### Delete role

Click the delete button in the action bar, the role deletion confirmation page pops up, click OK to delete the role

::: warning
If a role has been assigned to a user, the role has been assigned a menu, and the role has a sub-role, the system prohibits the deletion of this role
:::

### Edit role

Click the edit button in the action column. The role edit page pops up. After editing the information, click OK to finish editing the role

<img :src = "$withBase('/userManual/editRole.png')" alt = "image">

### Start and stop roles

The role list `Enable / Disable` column is used to indicate whether the corresponding role is enabled or disabled.
::: warning
When enabling a role, make sure its parent role is enabled, and when deactivating a role, make sure its child role is disabled
:::

### Role Assignment Menu

Double-click a role in the role list, check the menu in the menu list on the right, and click the OK button to assign a menu to the role

<img :src = "$withBase('/userManual/configRoleMenu.png')" alt = "image">

::: warning
When the parent role adds a new permission menu, the child role is added by default, and the child role and its cascading child roles are not modified.
:::

### Configuration (assigning roles to users)

Click the Configure User button in the action column, the system opens the Configure User page, as shown below

<img :src = "$withBase('/userManual/configRole.png')" alt = "image">

The page contains three sections:
* Click the button above to return to the role list page
* On the right is a list of users in the selected organization. Check to add the corresponding role for the current user
* The left side is the assigned role of the selected user. Click the button to delete the role that the user has configured.