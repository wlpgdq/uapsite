---
sidebar: auto
---
# 开发手册

本文档描述统一应用平台提供的通用功能、服务和相关接口，指导基于统一应用平台业务应用的开发

## 前端开发

### 前端工程

平台前端基于Vue.js框架开发，应用可以基于Vue.js提供的脚手架工具搭建基本的前端工程，具体方法参考Vue.js官方网站。Vue.js脚手架为用户创建了一套基本工程结构，如果开发人员熟悉前端工程各个配置工具，也可以自行配置工程项目

### 通用服务

* 平台前端工程按照公司UX设计规范定义了一套通用的css样式，包含在default.css文件中，各个应用在开发前端时候应该使用此css样式，具体样式文件包括在平台发布的内容中
* 平台提供了通用ajax网络请求方法，支持POST、DELETE、GET、PUT等，各个应用在开发时候可以直接使用相关API，具体方法请参考平台发布的http.js文件
* 平台提供了公共的方法，包含登录用户信息，时间格式化，获取token等方法，各个应用在开发时候可以直接使用相关API，具体方法请参考平台发布的common.js文件
* 平台前端管理登录用户信息，包括当前Token，用户ID和国际化信息等
* 平台token跟在菜单URL后面传递给界面，第三方应用通过解析url获取token，再通过token调平台/user/session接口，获取相关登录信息
* 第三方与平台通信用postMessage。支持以下几种
    * 界面跳转 消息格式
        ``` javascript
            {
                type:'1',
                param{id:'',params:{}}
            }
        ``` 
    
    * 会话超时 消息格式 
         ``` javascript
            {
                type:'2'
            }
        ``` 
    * Token刷新 消息格式 
        ``` javascript
            {
                type:'3',
                param{token:'最新的token'}
            }
        ```
    
    * 左边菜单不显示，tab项显示 消息格式
        ``` javascript
            {
                type:'4',
                param{id:'',params:{}}
            }
        ```
        具体调用方法：
        ``` javascript
            setTimeout(function(){
                top.postMessage('json格式的字符串','*');
            },500);
        ```

    ::: warning
    1. 传递的消息格式为json格式的字符串
    2. 左边菜单不显示，tab项显示中的id为菜单id(定制菜单关联的菜单id)
    :::

### 前端集成

平台提供了通用的登录页面和基于用户权限的菜单树生成和加载机制，各个应用需要通过在菜单树新增菜单将应用链接到平台中。对于新的租户应该按照以下顺序对其进行配置（更细节的应用和应用菜单配置可以参考用户手册）：

* 平台管理员创建新的应用租户
* 为租户添加菜单定制组合
* 给新创建的租户添加组织
* 给新创建的租户添加管理员角色并关联菜单
* 给新建租户创建管理员用户并分配管理员角色
* 使用新创建的管理员用户登录
* 创建应用
* 重新登录

### 国际化

* 界面国际化：前端项目基于Vue.js开发，国际化可以直接参考Vue.js官网
* 菜单国际化：菜单管理界面提供了菜单国际化配置
* 编码国际化：编码管理界面提供了各个编码国际化配置
* 错误消息国际化：直接前端显示接口返回的错误消息（message）

## 后端开发

### 后端工程

平台后端基于Spring Boot开发，封装了一些公共功能和方法，包含在以下jar包，请结合项目实际情况确定是否使用或者参考实现

1. uap-common：提供了平台接口的请求和响应参数封装、会话对象和其他工具类方法
2. uap-client：提供权限校验请求工具类，异常拦截、swagger文档、权限拦截等基础的基于spring-boot的注解类

* 如果需要使用上述jar包
    * 应用需要在项目的maven配置中加入如下私服地址： 
    
        [http://172.30.12.181:8081/repository/maven-public](http://172.30.12.181:8081/repository/maven-public)

    * 在开发应用的pom中添加对jar的依赖，比如对uap-client依赖：
        ``` xml
        <dependency>
            <groupId>com.hexing.uap</groupId>
            <artifactId>uap-client</artifactId>
            <version>${uap.project.version}</version>
        </dependency>
        ```
* 如使用uap-client包

    需要添加如下应用的扫描basePackages中，如下：
    @ComponentScan(basePackages = {"com.hexing.uap.client.cfg"})
    
    对于uap-client包，开发应用的properties文件中加入client包下properties文件所提供的信息，如下：

    ``` properties
    #平台地址
    uap.client.uapUrl=http://192.168.15.12:9090/uap
    #本应用在平台的注册码
    uap.client.appCode=
    #本应用访问平台的密码
    uap.client.appScret=
    #本应用api接口扫描包
    uap.client.restBasePackage=
    #本应用token拦截排除的路径 多个以','隔开
    uap.client.excludePathPatterns=
    ```
    uap-client包提供如下功能：
    * 异常拦截器ClientExceptionHandler用以统一处理异常
    * ApiDocConfig用以配置swagger的地址及相关信息
    * AbstractClientResourceAspect类用于统一记录接口的访问日志等信息
    * ClientTokenInterceptor用于统一处理接口访问的权限校验

### 接口规范

平台后端接口按照Restful规范设计，接口的url由两部分组成：域名地址和方法映射地址。对于方法映射地址，需要遵循本文档的规范。平台集成了Swagger工具，开发时可以通过Swagger来查看接口详细信息

* Get请求规范

    Get请求用于查询，查询参数写在映射地址中，举例如下:
    
    <img :src="$withBase('/develop/getRequest.png')" alt="image">

    * 在这个接口中`@ApiOperation`和`@ApiParam`为Swagger注解，Swagger插件据此生成接口文档和接口信息
    * `@GetMapping`为Get请求类型，`value="/user/{userId}"`为接口的映射地址，`{userId}`为查询参数，根据restful规范，查询请求的参数要写在映射地址中。
    * `@PathVariable`用于获取映射地址中的参数
    * `ModelResponse<UapUser>`为接口的返回类型，平台提供三种通用的返回值类型：
        1. `CommonResponse`，用于返回无返回值的接口，主要用于返回接口的执行结果编码和编码信息
        2. `ListDataResponse<T>`，用于返回值为list类型的接口
        3. `ModelResponse<T>`，用于返回值为对象类型的接口
    * `produces="application/json"`用于声明接口返回值为json格式

* Post请求规范

    Post请求用于新增数据或者执行复杂的查询，也可用于复杂的更新、删除操作。举例如下：

    <img :src="$withBase('/develop/postRequest.png')" alt="image">

    post请求的映射地址中不需要添加参数信息
    `@RequestBody` 获取参数对象
    `ValidatortUtil.validate()`是平台提供的参数检验工具，该方法会根据在参数上添加的约束对参数做检验

* Put请求规范

    Put请求用于更新数据，待更新数据的唯一标识符要放到请求的映射地址中，用于表明要更新哪一条数据。举例如下：

    <img :src="$withBase('/develop/putRequest.png')" alt="image">

* Delete请求

    Delete请求用于删除数据，待删除数据的唯一标识符要放到请求的映射地址中。举例如下：

    <img :src="$withBase('/develop/deleteRequest.png')" alt="image">

* 接口的参数规范

    接口的参数如果为对象，需要在对象的属性上使用Swagger注解用于生成接口文档，对参数的约束信息要添加相关的检验约束，举例如下：

    <img :src="$withBase('/develop/requestParameter.png')" alt="image">

### 国际化

每个模块的提示信息的国际化文件都放在各个项目的资源文件目录中，路径一般为/java/Resources/i18n/。在国际化文件夹下存放多个语言的国际化文件。各个模块需要在本模块定义一个切面，切点为本模块的控制层(一般是在rest包里)的Resource文件(有的项目用Controller命名)的所有方法，在该切面中处理所有的返回信息码，并根据当前的系统语言选择对应的国际化文件，填写相应的提示信息。在uap-common.jar包里有提示信息工具类MessageUtil


## 工作流

平台工作流部分集成了Flowable工作流引擎并在其基础上进行了二次开发，工作流的使用规范符合平台前端、后端开发标准，其中集成的Flowable工作流引擎符合BPMN2.0规范，使用者可以部署BPMN 2.0流程定义（用于定义流程的行业XML标准）， 创建这些流程定义的流程实例，进行查询，访问运行中或历史的流程实例与相关数据等

### 设计流程

工作流要求把流程定义为BPMN 2.0格式，这是一个业界广泛接受的XML标准。流程定义可以看做是重复执行流程的蓝图。我们首先需要根据业务使用场景设计画出流程图（具体设计可参照用户手册3.8.1）并将相应的流程节点分配给相关处理人员（可以分配给具体人或具体角色），节点处理人选择页面如下图所示：

<img :src="$withBase('/develop/processDesign.png')" alt="image">

### 部署流程

流程图设计好之后需要进行部署让其运行于工作流引擎之中，具体部署操作参见用户手册
[部署流程](/zh/guide/userManual/08-workflow.html#部署流程)

### 应用开发

流程部署完成之后业务应用就可以通过调用平台工作流提供的相应接口去启动流程实例、查询并完成相关任务等。平台工作流接口调用符合平台接口调用规范，需要首先完成相关的权限配置

#### 启动流程实例

* 平台工作流提供了启动流程实例的接口：`POST:/bpm/task/start`
* 此接口权限类型为登陆，需要token
* 接口参数为json格式，主要包含以下字段：
    ``` java
    @ApiModelProperty(notes = "业务处理URL，当流程节点中未配置处理界面URL时则使用URL，若配置则优先使用节点配置的URL ")
    String businessUrl;
    @ApiModelProperty(notes = "业务标识")
    String businessKey;
    @ApiModelProperty(notes = "业务名称")
    String businessName;
    @NotNull()
    @Size(max = 64)
    @ApiModelProperty(notes = "流程定义标识，不可超过64位，对应着流程定义界面的Key")
    String processDefinitionKey;
    String startUserName;
    @NotNull()
    @Size(max = 255)
    @ApiModelProperty(notes = "该ID和流程定义标识一起确定需启动的流程，该Id与平台设计创建流程的appId保持一致，需要使用‘应用Id+@@@+租户Id’拼接组成")
    String tenappId;
    @ApiModelProperty(notes = "全局变量，可以传入相关业务参数，注：不可使用businessUrl、businessKey、businessName 三个字段作为map的key")
    Map<String, Object> globalVar;
    ```
#### 流程任务查询

* 流程实例启动后相关人员登录将可以查询到与其有关的流程任务，平台提供了待办任务和已办任务的查询接口：`POST:/bpm/task/history`
* 平台工作流我的任务部分已实现对该接口的调用参见[我的任务](/zh/guide/userManual/07-my-task.html)
* 此接口权限类型为登陆，需要token
* 接口参数为json格式，主要包含以下字段：
    ``` java
    @ApiModelProperty(notes = "true:已办；false:待办")
    boolean finished;
    @ApiModelProperty(notes = "起始位置，分页使用")
    int start;
    @ApiModelProperty(notes = "查询数量，分页使用")
    int limit;
    @ApiModelProperty(notes = "流程实例ID")
    String processInstanceId;
    @ApiModelProperty(notes = "工作项名称模糊查询")
    String nameLike;
    @ApiModelProperty(notes = "环节启动结束时间")
    Long dueBefore;
    @ApiModelProperty(notes = "环节启动开始时间")
    Long dueAfter;
    @ApiModelProperty(notes = "流程启动结束时间")
    Long createdBefore;
    @ApiModelProperty(notes = "流程启动开始时间")
    Long createdAfter;
    @ApiModelProperty(notes = "流程实例名称模糊查询")
    String processDefinitionNameLike;
    @ApiModelProperty(notes = "是同时否根据角色查询，false时只查分配给当前人的任务，true则还会查询分配给所传角色数组的任务")
    Boolean isByRole;
    @ApiModelProperty(notes = "配置组合:task:查询待办任务表单/history;查询已办任务表单")
    String type;
    @ApiModelProperty(notes = "角色数组，根据角色查询是使用")
    List<String> candidateGroups;
    ```

#### 签收/取消签收任务

* 平台工作流提供了签收任务接口：`POST:/bpm/task/claim/{taskId}`
* 取消签收接口：`POST:/bpm/task/unclaim/{taskId}`
* 此接口权限类型为登陆，需要token
* 平台工作流我的任务部分已实现对该接口的调用参见用户手册[我的任务](/zh/guide/userManual/07-my-task.html)

#### 完成任务

* 平台工作流提供了完成任务的接口：`POST:/bpm/task/complete`
* 此接口权限类型为登陆，需要token
    ::: warning
    若该任务为被委托给当前处理人则需要调用专门的接口处理,如下
    :::
* 接口参数为json格式，主要包含以下字段
    ``` java
    @ApiModelProperty(notes = "任务ID")
    String taskId;
    @ApiModelProperty(notes = "全局变量")
    Map<String, Object> globalVar;
    .@ApiModelProperty(notes = "局部变量，只在当前任务中生效")
    Map<String, Object> localVar;
    ```
#### 委托任务

* 平台工作流提供了委托任务接口：`POST:/bpm/task/delegate`
* 此接口权限类型为登陆，需要token
* 平台工作流我的任务部分已实现对该接口的调用参见用户手册[我的任务](/zh/guide/userManual/07-my-task.html)

#### 完成委托任务

* 若该待办列表中存在被委托给当前处理人的任务则完成此类型任务需要调用如下接口：
`POST:/bpm/task/resolve`
* 此接口权限类型为登陆，需要token
* 接口参数为json格式，主要包含以下字段：
    ``` java
    @ApiModelProperty(notes = "任务ID")
    String taskId;
    @ApiModelProperty(notes = "全局变量")
    Map<String, Object> globalVar;
    @ApiModelProperty(notes = "局部变量，只在当前任务中生效")
    Map<String, Object> localVar;
    ```

#### 任务拽回

* 平台工作流提供了拽回任务接口：`POST:/bpm/task/revoke`
* 此接口权限类型为登陆，需要token
* 平台工作流历史任务部分已实现对该接口的调用参见用户手册[历史任务](/zh/guide/userManual/07-my-task.html#历史任务)

#### 启动并完成第一个节点

* 平台工作流提供了启动流程实例并完成第一个节点接口：`POST:/bpm/task/start/first-node`
* 此接口权限类型为登陆，需要token
* 该接口针对第一个任务节点配置为“分配给流程启动人”类型的已部署流程调用，改接口会自动执行启动流程实例操作、第一节点设置签收人操作及完成第一节点操作
* 接口参数为json格式，主要包含以下字段：
    ``` java
    @ApiModelProperty(notes = "业务处理URL，当流程节点中未配置处理界面URL时则使用URL，若配置则优先使用节点配置的URL ")
    String businessUrl;
    @ApiModelProperty(notes = "业务标识")
    String businessKey;
    @ApiModelProperty(notes = "业务名称")
    String businessName;
    @NotNull()
    @Size(max = 64)
    @ApiModelProperty(notes = "流程定义标识，不可超过64位，对应着流程定义界面的Key")
    String processDefinitionKey;
    String startUserName;
    @NotNull()
    @Size(max = 255)
    @ApiModelProperty(notes = "该ID和流程定义标识一起确定需启动的流程，该Id与平台设计创建流程的appId保持一致，需要使用‘应用Id+@@@+租户Id’拼接组成")
    String tenappId;
    @ApiModelProperty(notes = "全局变量，可以传入相关业务参数，注：不可使用businessUrl、businessKey、businessName 三个字段作为map的key")
    Map<String, Object> globalVar;
    ```

## 定时任务

### 定时任务开发步骤

编写定时任务rest接口(job接口)-导入接口脚本-页面配置定时任务-任务执行-调度应用的rest接口-接口反写日志-执行日志查看

<img :src="$withBase('/develop/timedTask.png')" alt="image">

### 编写rest接口

定时任务的调度通过调用rest接口实现，各个模块把本模块要定时执行的任务封装成符合调度规范的rest接口，然后在定时任务配置界面配置执行计划。供调度调用的接口必需满足以下规范：

* 请求类型为http post请求
* 映射@PostMapping的value属性必需以"/schedule/"开头
* 接口的返回值必需是com.hexing.uap.common.bean.CommonResponse对象
* 接口参数必需是com.hexing.uap.common.bean.JobRestApiRequest对象
* 该对象包括如下字段：
* String param;//接口参数(任务配置界面填写的参数)
* Long logId;//本次调用产生的日志标识，如果要反写业务日志，可根据该标识更新日志
* Long totalSlice;//分片总数，在调度执行时自动根据可用的执行机数量填写，如果任务不是分片类型，该字段为空
* Long slice;//当前属于哪个分片，如果任务不是分片类型，该字段为空

接口举例如下：

<img :src="$withBase('/develop/timedRequest.png')" alt="image">

接口反写日志举例如下：

<img :src="$withBase('/develop/timedRequestLog.png')" alt="image">

### 调度执行过程

当在界面配置完成执行计划后，调度中心就会按照配置定时调度

1. 在任务触发后，首先会根据配置的日历类型和能否并行执行检查该任务是否符合要求，对于不满足配置条件的不会继续执行。然后会按照界面配置的接口和参数信息调用业务接口，在调用时会构建JobRestApiRequest对象，并把相关参数填入。业务接口解析JobRestApiRequest对象，得到需要的参数并执行任务。在执行完成后通过CommonResponse对象返回执行结果(成功或失败)。接口调用方式根据是否为微服务部署有所不同：

    * 非微服务模式，根据接口所属应用（uap_app表）里配置的应用URL和接口的URL拼接成调用URL，发送HTTP POST请求。
        ::: warning
        此模式需要保证应用在uap_app表里配置的URL为真实的机器IP和端口。
        :::

        示例如下:

        <img :src="$withBase('/develop/scheduleExecution1.png')" alt="image">

    * 微服务模式，调度中心和各个应用实例都注册到同一个注册中心（或注册中心集群）上，调度中心根据接口所属应用（uap_app表）里配置的应用编码（code字段）到注册中心获取应用实例，然后通过该实例发送HTTP POST请求

        ::: warning
        此模式必须保证应用在uap_app表里配置的code字段和应用在微服务中部署的服务名一致
        :::
        
        schedule在uap_app表中的code为uap-schedule，故此处配置的spring.application.name=uap-schedule，示例如下：

        <img :src="$withBase('/develop/scheduleExecution2.png')" alt="image">

2. 调度中心调用rest接口采用异步方式，在发送完HTTP请求后，等待5秒，如果没有信息（错误或成功）返回，调度中心自动结束。业务接口在执行完成后，要调用调度中心提供的写日志接口返回执行结果和业务侧的执行日志：[业务日志](/zh/development/#业务侧反写业务日志)

3. 调度中心根据以下条件判断任务是否执行完成：

    * 发送异步请求后等待5秒，在此期间如果有信息返回（无论成功或失败），即认为任务已经完成
    * 如果异步请求等待结束，没有信息返回，则会根据业务侧是否反写了日志来判断
    * 如果反写了日志，则认为任务已经完成
    * 如果不满足以上两点，调度中心有个任务最大执行时间的配置项，当超过该时间还没有收到反馈，调度中心也会把该任务标记为已执行完成

4. 配置

    ``` java
        # 任务最大执行时间（秒）
        uap.job.maxExecuteTime=3600
    ```

5. 对于分片的任务，必须所有分片都已执行完成，该任务才算完成，定时任务调度示意图如下:

<img :src="$withBase('/develop/taskScheduling.png')" alt="image">

### 业务侧反写业务日志

业务接口如果要填写业务日志，可以调用调度中心提供的写业务日志接口

* 该接口URL如下：`Put:/schedule/jobLog/{logId}`，其中logId为调度调用接口时传过去的logId
* 此接口权限类型为无需登陆，可直接调用，不需要token
* 接口参数为json格式，主要包含以下字段：
    ``` java
    @ApiModelProperty(notes = "业务日志,长度最大1024")
    private String log;
    @ApiModelProperty(notes = "业务执行时长(毫秒),长度最大10")
    private Long costTime;
    @Size(max = 10)
    @ApiModelProperty(notes = "业务执行结果,长度最大10")
    private String result;
    @Size(max = 255)
    @ApiModelProperty(notes = "业务出错原因,长度最大255")
    private String errorReason;
    @ApiModelProperty(notes = "当前属于哪个分片，长度不超过10")
    private Integer slice;
    ```
* 调用该接口方法微服务部署和非微服务有不同:

    * 微服务方式，调用的url为http://uap-schedule/schedule/jobLog/，后面拼接logId，其中uap-schedule为调度中心在注册中心的服务名
    * 非微服务方式，当前比较复杂，要先到uap_app表查询调度中心的应用url，再和接口的url拼接（后续准备优化此过程）

    ::: warning
    由于调度中心采用异步调用，所以一般情况下调度中心无法知道业务接口执行情况,对于不可并行执行的接口一定要反写业务日志，否则调度中心无法控制并行调用
    :::

### 检查接口

job接口开发完成后，把相关的脚本（接口脚本，接口关联菜单），菜单的权限类型为仅登陆。这个过程参考平台部分的应用管理和菜单管理

::: warning
配置完成后检查下平台的接口表(uap_rest_api)、菜单表(uap_menu)。找到接口表中刚才开发的job接口，确保type字段为1，确保菜单表中job接口对应的菜单的auth_type为1
:::

### 配置执行计划

启动uap，uap-schedule，uap-ui，登陆uap界面，到Task Configuration界面配置执行计划，如下图所示： 

<img :src="$withBase('/develop/taskConfig.png')" alt="image">

新增时可配置以下属性，日历功能（Date type），错过处理策略（Miss handling instruction），优先级（priority），排除日期（Exclusion time），路由策略（Route policy），Allow parallel（是否允许并行执行）：

<img :src="$withBase('/develop/addTask.png')" alt="image">

### 执行日志查看

job执行后会在job日志表(uap_job_log)中填写日志信息，可到表中查看job是否执行成功，以及出错原因、执行时间、执行耗时等信息

调度中心有查看日志的界面，也可到界面上查看


## 消息中心

### 消息topic

消息中心分为消息topic和消息体两大块，要发送消息，首先要在消息中心创建消息topic,有单独的消息类型管理页面，可以从页面里创建，注意：

* 消息类型挂在所属应用下，必须选择应用
* 消息code为调用消息发送接口必传参数，建议创建时建个有意义的code
* 消息level为这类消息的重要程度划分。
创建消息类型后要为消息类型分配接收人，有如下分配方式：
* 租户，只能选择当前用户自己所在的租户，租户下所有用户都能收到这类消息类型下的消息
* 角色，可多选，选择当前用户下多种角色，角色下用户都能收到消息类型下的消息
* 人员，可多选

### 消息发送

配置好消息类型后，就可发送消息，开发人员调用消息发送restful接口发送消息，`post:/msg/uapMsgInfo`,和调用uap正常接口一样，要传token.参数如下：

|  参数   | 类型  | 长度  | 描述 |
|  ----  | ----  | ---- | ---- |
|  code  | string  | 64 | 消息类型code |
|  msg_content  | string  | 2048 | 消息内容 |
|  msg_title  | string  | 128 | 消息标题 |
|  sender_nm  | string  | 128 | 发送方名称 |
当返回`code:operate.success`时，说明消息发送成功，可以从消息页面查看新发消息


## 权限管理开发

如何控制按钮操作权限

1. 配置菜单

    在菜单配置中，配置到功能菜单时，给某个功能菜单添加上`code`码，如下图：例如给用户界面的新增用户功能添加一个`code`为`ADD`

    <img :src="$withBase('/develop/rightsManagement.png')" alt="image">

2. 调uap后端接口

    接口为：`/user/function/code`，传入对应界面的菜单定制id用于获取页面所需的权限和编码资源

3. 前端开发

   调接口会返回当前界面的权限字段functions数组，如下图：例如用户界面返回

   <img :src="$withBase('/develop/functions.png')" alt="image">

   有code为ADD说明有新增权限,反之没有新增权限，对应界面可以做隐藏，置灰，报错等处理


### 数据权限

数据权限功能是对UAP的角色权限功能的增强，此功能能够在角色原有的权限基础上，对数据的权限进行更加细致的划分。

默认数据权限为64位，每位表示不同的数据内容，可以在角色选项卡中为每个角色动态的分配数据权限内容，以达到不同角色有不同的数据权限。

### 开启数据权限功能

1. 登录uap平台，在左侧菜单栏中点击`Application Settings`选项，选择`Mulit-tenant management` 
2. 在租户列表下，点击**设置**按钮
3. 开启`Data Privilege Enable`

按照以上步骤能够开启租户的数据权限功能

### 配置数据权限内容

1. 点击**Data Privilege**选项卡

<img :src="$withBase('/develop/dataPermissionMenu.jpg')" alt = "数据权限菜单">

<!-- ![数据权限菜单](D:\Typora\笔记\imgs\数据权限菜单2.jpg) -->

2. 点击每条记录中右侧的编辑按钮

<img :src="$withBase('/develop/dataPermissionEditor.jpg')" alt = "数据权限编辑">
<!-- ![数据权限编辑](D:\Typora\笔记\imgs\数据权限编辑.jpg) -->

3. 对每位数据进行编辑即可

### 增加数据权限位数

数据权限默认为**64位**数据，如果实际操作中数据类型较大，可以根据一些步骤扩充数据量

点击上图中的`Extended Digits` 按钮，选择想要扩充到的位数即可

<img :src="$withBase('/develop/dataPlus.jpg')" alt = "数据权限位数扩充">
<!-- ![数据权限位数扩充](D:\Typora\笔记\imgs\数据权限位数扩充.jpg) -->

### 为角色分配数据权限

数据权限可以对角色的权限进行增强，可以为每个角色分配不同的数据权限，用户可以通过被分配的角色来获取数据权限。

<img :src="$withBase('/develop/RolePermission.jpg')" alt = "Role分配权限">
<!-- ![Role分配权限](D:\Typora\笔记\imgs\Role分配权限.jpg) -->

<img :src="$withBase('/develop/RolePermissionEditor.jpg')" alt = "Role数据权限编辑">
<!-- ![Role数据权限编辑](D:\Typora\笔记\imgs\Role数据权限编辑.jpg) -->

可以勾选与对应角色相应的数据权限内容，为角色配置权限，**Advanced option**勾选后可以查看数值模式，数值1代表**已勾选**，0代表**未勾选**

### 同步权限

为角色分配完成数据权限后，可以点击`Synchronization`按钮，为所有角色下的用户更新当前的数据权限信息

用户可根据需要对权限进行取消，取消权限**不影响**角色本身权限以及其他用户权限
