---
title: Timed Task
metaTitle: Timed Task
sidebarDepth: 3
---

# Scheduled tasks

## Scheduled task configuration

In the menu tree, click Scheduled Task Management-> Scheduled Task Configuration to open the Scheduled Task Configuration page, as shown in the figure below:

<img :src = "$withBase('/userManual/scheduledTaskConfig.png')" alt = "image">

On the left is the timing task interface tree. You can conditionally filter the interfaces according to the application. The data shows the interface whose interface type is a timing task. Click the tree node. The right side displays a detailed list of timing tasks.

The top right is the operations supported by scheduled tasks, which are: view, create, execute scheduled tasks immediately, pause scheduled tasks, resume scheduled tasks, the operations in the list are: delete, edit

* View timing task interface information

    Click the view details button in the upper left corner, and the system will view the task interface page

* Create timed tasks

    Click the new button in the upper right corner, and the system will create a scheduled task page, as shown below:

    <img :src = "$withBase('/userManual/addScheduledTask.png')" alt = "image">

    After filling in the information, click OK to complete the creation of the scheduled task.

* Edit timed tasks

    Click the edit button in the action column of the task to be edited. The task information edit page pops up. After editing, click OK.

* Delete scheduled tasks

    Click the delete button in the action column of the task to be deleted, and the system will pop up the task deletion confirmation page. After deletion, the scheduled tasks belonging to the task will be deleted together

* Run scheduled tasks immediately

    Select a task in the task list and click the execute now button in the upper right corner. The scheduled task will be executed and the task status is normal.

* Pause scheduled tasks

    Select a task in the task list and click the pause button in the upper right corner. The scheduled task will be suspended and the status of the task will be paused.

* Resume scheduled tasks

    Select a task in the task list and click the resume button in the upper right corner. The scheduled task will be resumed and the task status will be normal.


## Execution history

In the menu tree, click Scheduled Task Management-> Execution History to open the task execution history page, as shown in the figure below:

<img :src = "$withBase('/userManual/executiveHistory.png')" alt = "image">

The list displays the information of the scheduled task log list. The logs can be queried based on the task name and execution results.