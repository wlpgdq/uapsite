---
title: Workflow
metaTitle: Workflow
sidebarDepth: 3
---

# Workflow

## Process Design

In the menu tree, click Workflow Management-> Process Design to open the process design page, as shown in the figure below:

<img :src = "$withBase('/userManual/processDesign.png')" alt = "image">

* The left side is the workflow process grouping tree. Click the process grouping node, and the right side displays the process grouping information.
* The top right is the operations supported by the process group, the middle is the detailed information of the process group, and the following is the list of processes included in the process group


### Process grouping

Click the new button in the upper right corner, the system will pop up the create process group page. After filling in the information, click OK to complete the group creation

<img :src = "$withBase('/userManual/processGroup.png')" alt = "image">

* Edit process group

Click the edit button in the upper right corner, the editing process grouping page pops up. After editing the information, click OK to complete the group editing.

* Delete process group

Click the delete button in the upper right corner, the delete process group confirmation page pops up

* Release process grouping

    * Click the release button in the upper right corner, and the system will pop up the confirmation page of the release process grouping
    * The process can be deployed only after it is released, and the system records the version released by the process

* Export / import process grouping

    * The system supports group management through file import and export. Click the `Import Group` and` Export Group` buttons in the upper right corner to implement the corresponding functions.
    * The import file can only be a .zip or .xml format file, and the export can be a .zip format file

### Process

* Creation process

    * The system supports group management through file import and export. Click the `Import Group` and` Export Group` buttons in the upper right corner to implement the corresponding functions.
    * The import file can only be a .zip or .xml format file, and the export can be a .zip format file

    <img :src = "$withBase('/userManual/createProcess.png')" alt = "image">

* Import process

    Click the `Import Model` button on the process list and select the process model description file to be imported. The system will create the corresponding process according to the process description file

* Delete process

    Click a process in the process list, and the system will open the process details page, as shown in the figure below:

    <img :src = "$withBase('/userManual/deleteProcess.png')" alt = "image">

* Edit process properties

    Click the process page edit button to open the process property edit page, as shown below:

    <img :src = "$withBase('/userManual/editProcessAttr.png')" alt = "image">

* Editing process

    Click the process page to open the editor button to open the process edit page, as shown below:

    <img :src = "$withBase('/userManual/editProcess.png')" alt = "image">

    The platform is a workflow implemented by integrating the Flowable process engine. The flow editor is directly reusable by the Flowable process editor. For specific use, please refer to the official document of Flowable.

    ::: warning
    Editor Id cannot be all numbers
    :::

* Export process

    Click the Export Process button to export the process

## Deployment process

Click Workflow Management-> Deployment Process in the menu tree to open the deployment process list page, as shown in the figure below:

<img :src = "$withBase('/userManual/deploymentProcess.png')" alt = "image">

### Process form configuration

* Click the process form button to open the process form configuration page, where the platform will automatically generate a list of steps based on the process configuration
* When the process flow goes to different steps, the platform will open the corresponding form page for user operation according to the form URL corresponding to each step in this configuration, where URL is the address of the form page. If the corresponding form is not configured for a certain step, the platform loads the default configured default form page by default.

<img :src = "$withBase('/userManual/processConfig.png')" alt = "image">

### View deployment information

Click the deploy button in the action column of the process to be deployed, the system opens the process deployment details, as shown in the figure below:

<img :src = "$withBase('/userManual/viewProcess.png')" alt = "image">


## Process instance

In the menu tree, click Workflow Management-> Process Instance to open the process instance list page, as shown in the figure below:

<img :src = "$withBase('/userManual/processInstance.png')" alt = "image">

The system provides the function of querying process instances according to status and time. Click the process instance to view the details of the process instance, and the user can also forcefully end the process instance, as shown in the following figure:

<img :src = "$withBase('/userManual/viewProcessInstance.png')" alt = "image">

## Process task

In the menu tree, click Workflow Management-> Process Task to open the process instance task list page, as shown below:

<img :src = "$withBase('/userManual/processTask.png')" alt = "image">

The system provides query tasks by status, name, and time. Click on each process task to open the process task detail page, as shown below:

<img :src = "$withBase('/userManual/viewProcessTask.png')" alt = "image">

Click Edit, the user can edit the properties of the process task, as shown in the figure below:

<img :src = "$withBase('/userManual/editProcessTask.png')" alt = "image">

Click to complete the task, the user can forcibly end this process task.

## Page configuration

In the menu tree, click Workflow Management-> Page Configuration to open the page configuration page, as shown in the figure below:

<img :src = "$withBase('/userManual/pageConfig.png')" alt = "image">

The left side is the dynamic field combination tree. The child nodes of the dynamic field combination are the configuration pages supported by the system. Click the page node, and the right side displays a list of fields configured on the page.

::: warning
Although the system provides functions for adding (creating dynamic field combinations), deleting (deleting), modifying (editing), and checking (viewing) configuration pages, the current version predefines the My Task and History Task pages in Task Management. Configuration, user-defined configuration of the display fields of these two pages.
:::


### Field Combination

Operations on the left dynamic field combination tree node: view, add, edit, delete

<img :src = "$withBase('/userManual/pageConfigGroup.png')" alt = "image">

* View

    Click the View button to see details of dynamic field combinations

    <img :src = "$withBase('/userManual/viewPageConfigGroup.png')" alt = "image">

* Added

    Click the Add button to add dynamic field combination details

    <img :src = "$withBase('/userManual/addPageConfigGroup.png')" alt = "image">

* Edit

    Click the edit button to edit the dynamic field combination details. After editing, click OK to complete the modification.

* Delete

    Click the delete button to delete the corresponding dynamic field combination


### Field

Field operations are: add, delete, edit, configure

<img :src = "$withBase('/userManual/field.png')" alt = "image">

* New field

Click the Add button in the upper right corner, and the interface for adding new fields will pop up, as shown in the figure below:

<img :src = "$withBase('/userManual/addField.png')" alt = "image">

The value of the field drop-down box can be configured through the dynamic field management page, please refer to the dynamic field management, the width defines the display size of this field in the list

* Delete field

Click the button of each field operation column to delete the current field configuration from the page list

* Edit field

Click the button of each field operation column to configure the current field properties, as shown in the figure below:

<img :src = "$withBase('/userManual/editField.png')" alt = "image">

* Field internationalization

Click the button of each field operation column, you can configure multiple language internationalization tags for the current field. The system automatically selects the corresponding language tag display according to the language selected when the user logs in.

<img :src = "$withBase('/userManual/configField.png')" alt = "image">


## Dynamic field management

In the menu tree, click Workflow Management-> Dynamic Field Management to open the field management page, as shown below:

<img :src = "$withBase('/userManual/dynamicFieldManagement.png')" alt = "image">

The page displays all configured dynamic fields. Operations on dynamic fields are: add, delete, and edit fields.


* New field

Click the new button in the upper right corner, the system will pop up a new field page, as shown below:

<img :src = "$withBase('/userManual/addDynamicField.png')" alt = "image">

* Delete field

Click the button of each field operation column to delete the current field configuration

* Edit field

Click the button of each field operation column to configure the current field properties