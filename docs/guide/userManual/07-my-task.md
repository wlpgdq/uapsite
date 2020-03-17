---
title: My Mission
metaTitle: My mission
sidebarDepth: 3
---

# My task

After the user logs in to the system, he can view the pending tasks through the task management related functions, query the processed historical tasks, and view the processes submitted by himself.

## My task

Click My Tasks-> To Do Task in the menu tree to open the To Do Task page, as shown below:

<img :src = "$withBase('/userManual/myTask.png')" alt = "image">

* The page provides the query function of pending tasks. Login users can perform filtering query of pending tasks according to process number, name, work item name, and time.
* Before the user "processes" or "delegates" the task, it is necessary to "sign in" the task, and the unprocessed task "sign in" can be "canceled"
* Select a pending task and click to view the flowchart to open the flowchart corresponding to the current task's workflow. The flowchart will show which step has been processed so far

The specific business processing interface is designed by each business and is bound to the workflow through workflow configuration. The platform will load the business interface corresponding to the current process step through the binding data. For details, please refer to "Workflow Management"

## History Mission

Click on My Tasks-> History Tasks in the menu tree to open the History Tasks page, as shown below:

<img :src = "$withBase('/userManual/historyTask.png')" alt = "image">

* Click the historical task list in the historical task list to view the details of the currently processed task. The historical task interface also provides the function of viewing flowcharts.
* For tasks that have been processed but have not yet been processed by the next processor, the current processor can withdraw their processing

## My process instance

Click My Task-> My Process Instance in the menu tree to open the process instance page, as shown in the figure below:

<img :src = "$withBase('/userManual/myProcessInstance.png')" alt = "image">

* The page displays the process examples submitted by the currently logged in user, including those that are being processed and those that have been processed
* Users can query process instances based on status and time