# redis配置

redis配置有两种模式，选用其中一种，另外一种就得注释掉

* 模式一
``` java
####redis单例模式的配置信息###
spring.redis.host=host
spring.redis.port=port
spring.redis.password=password
#采用哪个数据库
spring.redis.database=1
```

* 模式二
``` java
####redis哨兵模式的配置信息###
spring.redis.sentinel.master=mymaster
spring.redis.sentinel.nodes=host1:port1,host2:port2,...
spring.redis.password=password......
#采用哪个数据库
spring.redis.database=1
```