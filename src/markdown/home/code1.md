``` 
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Primary;

@Bean
@Primary
public CorsEnableOrigins corsEnableOrigins() {
    CorsEnableOrigins origins = new CorsEnableOrigins();
    origins.setOrigins(Collections.singletonList(
        "http://localhost:4200", "http://localhost:4201", "http://localhost:4202"));
    return origins;
}
```
