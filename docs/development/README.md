---
sidebar: auto
---
# Development Manual

This document describes the common functions, services and related interfaces provided by the unified application platform, and guides the development of business applications based on the unified application platform.

## Front-end development

### Front-end engineering

The front end of the platform is developed based on the Vue.js framework. The application can build basic front-end projects based on the scaffolding tools provided by Vue.js. For specific methods, refer to the official Vue.js website. Vue.js scaffolding creates a set of basic engineering structures for users. If developers are familiar with various configuration tools for front-end engineering, they can also configure engineering projects themselves.

### General Services

* The platform front-end project defines a set of common css styles in accordance with the company's UX design specifications and is included in the default.css file. Each application should use this css style when developing the front-end. The specific style files are included in the content published by the platform
* The platform provides a general Ajax network request method, which supports POST, DELETE, GET, PUT, etc. Each application can directly use the relevant API during development. For specific methods, please refer to the http.js file published by the platform
* The platform provides public methods, including login user information, time formatting, and obtaining tokens. Each application can directly use the relevant API during development. For specific methods, please refer to the common.js file published by the platform.
* The front end of the platform manages login user information, including the current token, user ID and internationalization information, etc.
* The platform token is passed to the interface after the menu URL. The third-party application obtains the token by parsing the URL, and then adjusts the platform / user / session interface to obtain relevant login information
* PostMessage used by third parties to communicate with the platform. Support the following

    * Interface jump Message format

    ``` javascript
        {
            type: '1',
            param (id: '', params :())
        } 
    ```

    * Session timeout message format

    ``` javascript
        {
            type: '2'
        }
    ```

    * Token refresh message format

    ``` javascript
        {
            type: '3',
            param {token: 'Latest token'}
        }
    ```

    * The menu on the left is not displayed, and the tab item is displayed Message format

    ``` javascript
        {
            type: '4',
            param (id: '', params :())
        }
    ```
    Specific calling method:

    ``` javascript
        setTimeout (function () {
            top.postMessage ('String in json format', '*');
        }, 500);
    ```

    ::: warning
    1. The message format is a json string
    2. The menu on the left is not displayed, and the id in the tab item display is the menu id (the menu id associated with the custom menu)
    :::

### Front-end integration

The platform provides a universal login page and a menu tree generation and loading mechanism based on user permissions. Each application needs to link the application to the platform by adding a menu to the menu tree. New tenants should be configured in the following order (for more detailed application and application menu configuration, please refer to the user manual):

* The platform administrator creates a new application tenant
* Add menu custom combinations for tenants
* Add organization to newly created tenant
* Add administrator role to newly created tenant and associate menu
* Create administrator user and assign administrator role to new tenant
* Log in with the newly created administrator user
* Create application
* re-register

### Globalization

* Interface internationalization: The front-end project is based on Vue.js development. For internationalization, you can directly refer to the Vue.js official website.
* Menu internationalization: menu management interface provides menu internationalization configuration
* Internationalization of encoding: The encoding management interface provides the configuration of each internationalization of encoding
* Error message internationalization: direct front-end display error message returned by the interface (message)

## Backend development

### Back-end engineering

The platform backend is developed based on Spring Boot and encapsulates some common functions and methods. The following jar packages are included. Please determine whether to use or refer to the implementation based on the actual situation of the project.

1. uap-common: Provides request and response parameter encapsulation of the platform interface, session objects, and other utility methods
2. uap-client: provides permission verification request tool classes, exception interception, swagger documentation, permission interception and other basic spring-boot based annotation classes

* If you need to use the above jar package

    * The application needs to add the following private server address to the project's maven configuration:

        [http://172.30.12.181:8081/repository/maven-public](http://172.30.12.181:8081/repository/maven-public)

    * Add a dependency on jar in the pom of the development application, such as dependency on uap-client:

        ``` xml
        <dependency>
            <groupId> com.hexing.uap </groupId>
            <artifactId> uap-client </artifactId>
            <version> ${uap.project.version} </version>
        </dependency>
        ```
* If using uap-client package

    You need to add the following scanning basePackages to the application, as follows:
    @ComponentScan (basePackages = {"com.hexing.uap.client.cfg"})

    For the uap-client package, add the information provided by the properties file under the client package to the properties file of the development application, as follows:

    ``` properties    
    #Platform address    
    uap.client.uapUrl = http: //192.168.15.12: 9090 / uap    
    #Registration code of this application on the platform    
    uap.client.appCode =    
    #Password for this application to access the platform    
    uap.client.appScret =    
    #This application api interface scan package    
    uap.client.restBasePackage =    
    #This application excludes the path blocked by multiple tokens, separated by ','    
    uap.client.excludePathPatterns =    
    ```    
    The uap-client package provides the following functions:    
    * ClientExceptionHandler is used to handle exceptions uniformly    
    * ApiDocConfig is used to configure the address and related information of swagger    
    * The AbstractClientResourceAspect class is used to uniformly record the interface's access log and other information    
    * ClientTokenInterceptor is used to uniformly handle the permission verification of interface access    

### Interface Specification

The platform back-end interface is designed according to the Restful specification. The url of the interface consists of two parts: the domain name address and the method mapping address. For method mapping addresses, the specifications of this document need to be followed. The platform integrates the Swagger tool, and you can view the interface details through Swagger during development

* Get request specification

    The Get request is used for querying, and the query parameters are written in the mapping address, as an example:

    <img :src = "$withBase('/develop/getRequest.png')" alt = "image">

    * `@GetMapping` is the Get request type,`value = "/user/{userId}"`is the mapping address of the interface, and`{userId}`is the query parameter. According to the restful specification, the parameters of the query request are written in the mapping address in.
    * `@PathVariable` is used to get the parameters in the mapped address
    * `ModelResponse<UapUser>` is the return type of the interface. The platform provides three general return value types:
        1. `CommonResponse`, used to return an interface without a return value, mainly used to return the execution result encoding and encoding information of the interface
        2. `ListDataResponse<T>`, which is used to return an interface whose type is list
        3. `ModelResponse<T>` for returning an interface whose value is an object type
    * `produces="application/json"` is used to declare that the interface return value is json format

* Post request specification
    Post requests are used to add data or perform complex queries, and can also be used for complex update and delete operations. For example:
    
    <img :src = "$withBase('/develop/postRequest.png')" alt = "image">

    No parameter information needs to be added to the mapped address of the post request
    `@RequestBody` get parameter object
    `ValidatortUtil.validate()` is a parameter verification tool provided by the platform. This method will verify the parameters according to the constraints added on the parameters.

* Put request specification

    The Put request is used to update data. The unique identifier of the data to be updated is placed in the mapping address of the request to indicate which piece of data is to be updated. For example:
    
    <img :src = "$withBase('/develop/putRequest.png')" alt = "image">

* Delete request

    The Delete request is used to delete data, and the unique identifier of the data to be deleted should be placed in the requested mapping address. For example:

    <img :src = "$withBase('/develop/deleteRequest.png')" alt = "image">

* Interface parameter specification

    If the parameters of the interface are objects, you need to use the Swagger annotations on the properties of the object to generate the interface document. You need to add the relevant test constraints to the parameter constraint information, for example:

    <img :src = "$withBase('/develop/requestParameter.png')" alt = "image">

### Globalization

The internationalization file of the prompt information of each module is placed in the resource file directory of each project, and the path is generally /java/Resources/i18n/. Store internationalization files in multiple languages ​​under the internationalization folder. Each module needs to define an aspect in this module. The point ofcut is all methods of the resource file (some items are named Controller) of the control layer (usually in the rest package) of this module. All return information is processed in this aspect. Code, and select the corresponding internationalization file according to the current system language, and fill in the corresponding prompt information. There is a message tool class MessageUtil in the uap-common.jar package

## Workflow

The platform workflow part integrates the Flowable workflow engine and conducts secondary development based on it. The usage specifications of the workflow conform to the front-end and back-end development standards of the platform. The integrated Flowable workflow engine conforms to the BPMN 2.0 specification. Users You can deploy BPMN 2.0 process definitions (industry XML standards for defining processes), create process instances of these process definitions, make queries, access running or historical process instances and related data, etc.

### Design Flow

Workflow requires the process to be defined in the BPMN 2.0 format, which is a widely accepted XML standard in the industry. Process definitions can be viewed as a blueprint for repeating processes. We first need to draw a flowchart based on the business use scenario design (for specific design, refer to the user manual 3.8.1) and assign the corresponding process nodes to the relevant processing personnel (can be assigned to specific people or specific roles), and the node processing person selects the page As shown below:

<img :src = "$withBase('/develop/processDesign.png')" alt = "image">


### Deployment process

After the flowchart is designed, it needs to be deployed to run in the workflow engine. For detailed deployment operations, see the user manual.
[Deployment process](/guide/userManual/08-workflow.html#deployment-process)

### Application Development

After the process deployment is completed, the business application can start the process instance, query and complete related tasks by calling the corresponding interface provided by the platform workflow. The platform workflow interface call conforms to the platform interface call specification, and the relevant permission configuration needs to be completed first

#### Start process instance

* The platform workflow provides an interface to start the process instance: `POST:/bpm/task/start`
* This interface permission type is login and requires token
* The interface parameters are in json format and mainly include the following fields:
    ``` java
    @ApiModelProperty (notes = "Business processing URL, when the processing interface URL is not configured in the process node, the URL will be used, if configured, the URL configured by the node will be used preferentially")
    String businessUrl;
    @ApiModelProperty (notes = "Business Identity")
    String businessKey;
    @ApiModelProperty (notes = "Business Name")
    String businessName;
    @NotNull ()
    @Size (max = 64)
    @ApiModelProperty (notes = "Process definition ID, it cannot exceed 64 bits, corresponding to the Key of the process definition interface")
    String processDefinitionKey;
    String startUserName;
    @NotNull ()
    @Size (max = 255)
    @ApiModelProperty (notes = "This ID together with the process definition identifier determines the process to be started. This Id is consistent with the appId of the platform design and creation process. It needs to be composed of 'application Id + @@@ + tenant Id'.")
    String tenappId;
    @ApiModelProperty (notes = "Global variables, related business parameters can be passed in. Note: businessUrl, businessKey, and businessName fields cannot be used as map keys")
    Map <String, Object> globalVar;
    ```
#### Process task query

* After the process instance is started, relevant personnel can log in to query related process tasks. The platform provides query interfaces for to-do tasks and completed tasks: `POST:/bpm/task/history`
* The platform workflow My task part has implemented the call to this interface See [My task](/guide/userManual/07-my-task.html#my-task-2)
* This interface permission type is login and requires token
* The interface parameters are in json format and mainly include the following fields:

    ``` java
    @ApiModelProperty (notes = "true: done; false: pending")
    boolean finished;
    @ApiModelProperty (notes = "starting position, used by pagination")
    int start;
    @ApiModelProperty (notes = "Number of queries, pagination use")
    int limit;
    @ApiModelProperty (notes = "Process instance ID")
    String processInstanceId;
    @ApiModelProperty (notes = "Fuzzy query of work item name")
    String nameLike;
    @ApiModelProperty (notes = "End and end of session start")
    Long dueBefore;
    @ApiModelProperty (notes = "Ticket start time")
    Long dueAfter;
    @ApiModelProperty (notes = "Process start end time")
    Long createdBefore;
    @ApiModelProperty (notes = "Process start time")
    Long createdAfter;
    @ApiModelProperty (notes = "Fuzzy query of process instance name")
    String processDefinitionNameLike;
    @ApiModelProperty (notes = "Whether query by role at the same time, if false, only the tasks assigned to the current person will be checked, true will also query tasks assigned to the passed role array"
    Boolean isByRole;
    @ApiModelProperty (notes = "Configuration combination: task: query to-do list / history; query to-do list")
    String type;
    @ApiModelProperty (notes = "Role array, used by role query")
    List <String> candidateGroups;
    ```

#### Sign/Cancel Sign Task

* The platform workflow provides a sign-in task interface: `POST:/bpm/task/claim/{taskId}`
* Cancel signing interface: `POST:/bpm/task/unclaim/{taskId}`
* This interface permission type is login and requires token
* The platform workflow My Task part has implemented the call to this interface, see the user manual [My Task](/guide/userManual/07-my-task.html#my-task-2)

#### Mission accomplished

* The platform workflow provides an interface to complete tasks: `POST:/bpm/task/complete`
* This interface permission type is login and requires token
    ::: warning
    If the task is delegated to the current handler, you need to call a special interface to handle it, as follows
    :::
* The interface parameters are in json format and mainly include the following fields
    ```java
    @ApiModelProperty (notes = "Task ID")
    String taskId;
    @ApiModelProperty (notes = "Global Variables")
    Map <String, Object> globalVar;
    @ApiModelProperty (notes = "Local variables, only effective in the current task")
    Map <String, Object> localVar;
    ```
#### Delegated tasks

* The platform workflow provides a delegated task interface: `POST:/bpm/task/delegate`
* This interface permission type is login and requires token
* The platform workflow My Task part has implemented the call to this interface, see the user manual [My Task](/guide/userManual/07-my-task.html#my-task-2)

#### Complete delegated tasks

* If there is a task entrusted to the current processor in the to-do list, the following interface needs to be called to complete this type of task: `POST:/bpm/task/resolve`
* This interface permission type is login and requires token
* The interface parameters are in json format and mainly include the following fields:
    ```java
    @ApiModelProperty (notes = "Task ID")
    String taskId;
    @ApiModelProperty (notes = "Global Variables")
    Map <String, Object> globalVar;
    @ApiModelProperty (notes = "Local variables, only effective in the current task")
    Map <String, Object> localVar;
    ```

#### Task drag back

* The platform workflow provides a pullback task interface: `POST:/bpm/task/revoke`
* This interface permission type is login and requires token
* The platform workflow history task part has implemented the call to this interface, see the user manual [history task](/guide/userManual/07-my-task.html#history-mission)

#### Start and complete the first node

* The platform workflow provides a startup process instance and completes the first node interface: `POST:/bpm/task/start/first-node`
* This interface permission type is login and requires token
* This interface is called for the deployed task that the first task node is configured as "assigned to the process initiator". The interface will automatically perform the process of starting the process instance, the first node setting the signatory operation, and the first node operation
* The interface parameters are in json format and mainly include the following fields:
    ```java
    @ApiModelProperty (notes = "Business processing URL, when the processing interface URL is not configured in the process node, the URL will be used, if configured, the URL configured by the node will be used preferentially")
    String businessUrl;
    @ApiModelProperty (notes = "Business Identity")
    String businessKey;
    @ApiModelProperty (notes = "Business Name")
    String businessName;
    @NotNull ()
    @Size (max = 64)
    @ApiModelProperty (notes = "Process definition ID, it cannot exceed 64 bits, corresponding to the Key of the process definition interface")
    String processDefinitionKey;
    String startUserName;
    @NotNull ()
    @Size (max = 255)
    @ApiModelProperty (notes = "This ID together with the process definition identifier determines the process to be started. This Id is consistent with the appId of the platform design and creation process. It needs to be composed of 'application Id + @@@ + tenant Id '.")
    String tenappId;
    @ApiModelProperty (notes = "Global variables, related business parameters can be passed in. Note: businessUrl, businessKey, and businessName fields cannot be used as map keys")
    Map <String, Object> globalVar;
    ```

## Scheduled tasks

### Timing task development steps

Write timed task rest interface (job interface)-import interface script-page configuration timed task-task execution-schedule the application's rest interface-interface back write log-execution log view

<img :src = "$withBase('/develop/timedTask.png')" alt = "image">

### Writing the rest interface

Scheduled task scheduling is implemented by calling the rest interface. Each module encapsulates the tasks to be executed regularly by this module into a rest interface that meets the scheduling specifications, and then configures the execution plan on the scheduled task configuration interface. The interface for dispatch calls must meet the following specifications:

* Request type is http post request
* The value attribute of mapping @PostMapping must start with "/schedule/"
* The return value of the interface must be a com.hexing.uap.common.bean.CommonResponse object
* The interface parameter must be a com.hexing.uap.common.bean.JobRestApiRequest object
* This object includes the following fields:
* String param; // Interface parameters (parameters filled in the task configuration interface)
* Long logId; // The log ID generated by this call, if you want to write back the business log, you can update the log based on this ID
* Long totalSlice; // The total number of slices, which is automatically filled according to the number of available execution machines when scheduling execution. If the task is not a slice type, this field is empty
* Long slice; // To which slice the current belongs, if the task is not a slice type, this field is empty

Examples of interfaces are as follows:

<img :src = "$withBase('/develop/timedRequest.png')" alt = "image">

An example of an interface writeback log is as follows:

<img :src = "$withBase('/develop/timedRequestLog.png')" alt = "image">

### Scheduling the execution process

After the execution plan is configured on the interface, the scheduling center will schedule the schedule according to the configuration.

1. After the task is triggered, it will first check whether the task meets the requirements according to the configured calendar type and whether it can be executed in parallel, and will not continue to execute if the task does not meet the configuration conditions. Then the business interface will be called according to the interface configuration and parameter information of the interface configuration. When it is called, the JobRestApiRequest object will be constructed and the relevant parameters will be filled in. The business interface parses the JobRestApiRequest object, obtains the required parameters, and executes the task. After the execution is completed, the execution result (success or failure) is returned through the CommonResponse object. The interface invocation method is different depending on whether it is deployed for microservices:
    * In non-micro service mode, according to the application URL (uap_app table) configured in the interface, the URL of the interface is spliced ​​into the calling URL, and an HTTP POST request is sent.

        ::: warning
        This mode needs to ensure that the URL configured by the application in the uap_app table is the real machine IP and port.
        :::
        
        Examples are as follows:

        <img :src = "$withBase('/develop/scheduleExecution1.png')" alt = "image">

    * In micro service mode, the dispatch center and each application instance are registered in the same registry (or registry cluster). The dispatch center obtains the application from the registry according to the application code (code field) configured in the application (uap_app table) that the interface belongs to Instance, and then send an HTTP POST request through the instance

        ::: warning
        This mode must ensure that the code field configured by the application in the uap_app table is consistent with the service name    deployed by the application in the microservice.
        :::

        The code of schedule in the uap_app table is uap-schedule, so the spring.application.name = uap-schedule configured here is as follows:
        
        <img :src = "$withBase('/develop/scheduleExecution2.png')" alt = "image">

2. The dispatch center calls the rest interface asynchronously. After sending the HTTP request, it waits for 5 seconds. If no information (error or success) is returned, the dispatch center automatically ends. After the business interface is executed, it is necessary to call the write log interface provided by the dispatch center to return the execution result and the execution log on the business side: [business log](/development/#business-side-write-back-business-log)

3. The dispatch center judges whether the task is completed according to the following conditions:

    * Wait for 5 seconds after sending an asynchronous request. During this period, if any information is returned (regardless of success or failure), the task is considered completed.
    * If the asynchronous request waits for the end and no information is returned, it will be judged based on whether the business side has written back the log
    * If the log is reversed, the task is considered completed
    * If the above two points are not met, the scheduling center has a configuration item for the maximum execution time of the task. When no feedback is received after this time, the scheduling center will mark the task as completed

4. Configuration

    ```java
        # Maximum task execution time (seconds)
        uap.job.maxExecuteTime = 3600
    ```

5. For sharded tasks, all shards must have been executed before the task is considered complete. The timing task scheduling diagram is as follows:

<img :src = "$withBase('/develop/taskScheduling.png')" alt = "image">

### Business side write back business log

Business interface If you want to fill the business log, you can call the write business log interface provided by the dispatch center

* The URL of the interface is as follows: `Put: / schedule / jobLog / {logId}`, where logId is the logId passed in when the interface is scheduled to be called
* This interface permission type is no login required, can be called directly, no token is required
* The interface parameters are in json format and mainly include the following fields:
    ```java
    @ApiModelProperty (notes = "Business log, maximum length 1024")
    private String log;
    @ApiModelProperty (notes = "Business execution time in milliseconds, the maximum length is 10")
    private Long costTime;
    @Size (max = 10)
    @ApiModelProperty (notes = "Business execution results, maximum length 10")
    private String result;
    @Size (max = 255)
    @ApiModelProperty (notes = "Business error cause, the maximum length is 255")
    private String errorReason;
    @ApiModelProperty (notes = "Which shard does it currently belong to, no longer than 10")
    private Integer slice;
    ```
* Calling this interface method is different between microservice deployment and non-microservice:

    * Micro service method, the calling URL is http://uap-schedule/schedule/jobLog/, followed by the logId, where uap-schedule is the service name of the dispatch center in the registry
    * Non-micro service method, which is currently more complicated. You must first query the application URL of the dispatch center in the uap_app table, and then stitch it with the interface URL.

    ::: warning
    Because the dispatching center uses asynchronous calls, the dispatching center cannot generally know the execution of the business interface. For interfaces that cannot be executed in parallel, the business log must be written back, otherwise the dispatching center cannot control the parallel calls
    :::

### Check interface

After the job interface is developed, the relevant script (interface script, interface related menu) is set, and the permission type of the menu is login only. This process refers to the application management and menu management of the platform part

::: warning
After the configuration is complete, check the platform's interface table (uap_rest_api) and menu table (uap_menu). Find the job interface just developed in the interface table, make sure the type field is 1, and make sure that the auth_type of the menu corresponding to the job interface in the menu table is 1.
:::

### Configure execution plan

Start uap, uap-schedule, uap-ui, log in to the uap interface, and configure the execution plan in the Task Configuration interface, as shown in the following figure:

<img :src = "$withBase('/develop/taskConfig.png')" alt = "image">

The following attributes can be configured when adding, calendar function (Date type), Miss handling instruction, Priority, Exclusion time, Route policy, Allow parallel carried out):

<img :src = "$withBase('/develop/addTask.png')" alt = "image">

### Execution log view

After the job is executed, the log information is filled in the job log table (uap_job_log). You can check whether the job was successfully executed in the table, as well as the error cause, execution time, and execution time.

The dispatch center has an interface for viewing logs, or you can view it on the interface


## Message Center

### Message topic

The message center is divided into a message topic and a message body. To send a message, you must first create a message topic in the message center. There is a separate message type management page, which can be created from the page. Note:

* The message type is hung under the app, you must select the app
* The message code is a required parameter for calling the message sending interface. It is recommended to create a meaningful code when creating the message.
* Message level is a division of the importance of such messages.
After creating a message type, assign recipients to the message type in the following ways:
* Tenant, only the current user's own tenant can be selected, all users under the tenant can receive messages under this type of message
* Role, you can select multiple roles, select multiple roles under the current user, users under the role can receive messages under the message type
* Personnel, multiple choices

### Message sending

After the message type is configured, the message can be sent. The developer calls the message sending restful interface to send the message. `Post:/msg/uapMsgInfo`, just like calling the normal interface of uap, you need to pass the token. The parameters are as follows:

Parameters | Type | Length | Description |
| ---- | ---- | ---- | ---- |
code | string | 64 | Message type code |
| msg_content | string | 2048 | Message Content |
| msg_title | string | 128 | Message Title |
sender_nm | string | 128 | sender name |
When `code: operate.success` is returned, the message was sent successfully. You can view the new message from the message page.


## Rights Management Development

How to control button operation permissions

1. Configuration menu

    In the menu configuration, when configuring to the function menu, add a `code` code to a function menu, as shown below: For example, add a` code` to `ADD` to a new user function in the user interface.

    <img :src = "$withBase('/develop/rightsManagement.png')" alt = "image">

2. Back-end interface

    The interface is: `/user/function/code`, used to obtain the permissions and coding resources required by the page

3. Front-end development

    The public method http.js has the encapsulated method `getCodeAndMenus`, which is introduced into http.js and uses this method as follows:

    ```javascript
    // Get the permissions and coding resources required by the page
    HTTP.getCodeAndMenus (This, function (res) {
        // other
        
        // Processing after obtaining permissions
        This.userAuthentication (res.data.functions);

        // other
    }

    / **
     * According to the configuration user menu permissions
        * @param {Object} usermenus
        * /
    userAuthentication: function (usermenus) {
        if (usermenus.length> 0) {
            for (var i = 0; i <usermenus.length; i ++) {
                // If add permission, give user add permission, otherwise add button is disabled
                if (usermenus [i] .code == "ADD") {
                    this.addDisabled = false;
                }
                if (usermenus [i] .code == "EDIT") {
                    this.editDisabled = false;
                }
                if (usermenus [i] .code == "USERROLE") {
                    this.roleChooseDisabled = false;
                }
                if (usermenus [i] .code == "STATE") {
                    this.stateDisabled = false;
                }
                if (usermenus [i] .code == "USER_MANAGE_UNIT") {
                    this.manageUnitDisabled = false;
                }
            }
        }
    }
    
    ```

    ::: warning
    Judgment in the code `usermenus [i] .code ==" ADD "`, the code is the code previously configured in the menu, the code must be consistent with the code configured in the menu, that is, the code for adding permissions is known as "ADD"
    :::
