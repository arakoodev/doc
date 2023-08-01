```
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Primary;

@Bean
@Primary
public RedisEnv redisEnv() {
    RedisEnv redisEnv = new RedisEnv();
    redisEnv.setUrl(""); // Specify the URL of your Redis instance
    redisEnv.setPort(12285); // Set the port number for the Redis instance
    redisEnv.setUsername("default"); // Set the username for authentication 
    redisEnv.setPassword(""); // Provide the password for authentication 
    redisEnv.setTtl(3600); // Configuring ttl for HistoryContext;
    return redisEnv;
}
```
