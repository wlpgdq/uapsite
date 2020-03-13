# redis configuration

Redis configuration has two modes, choose one of them, and the other one must be commented out

* Mode One
``` java
#### redis singleton configuration information ###
spring.redis.host = host
spring.redis.port = port
spring.redis.password = password
#which database is used
spring.redis.database = 1
```

* Mode Two
``` java
#### redis sentry mode configuration information ###
spring.redis.sentinel.master = mymaster
spring.redis.sentinel.nodes = host1: port1, host2: port2, ...
spring.redis.password = password ...
#which database is used
spring.redis.database = 1
```