```
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Primary;
import io.edgechains.common.security.ExcludeMappingFilter;
import java.util.List;

@Bean
@Primary
public ExcludeMappingFilter mappingFilter() {
    ExcludeMappingFilter mappingFilter = new ExcludeMappingFilter();
    mappingFilter.setRequestPost(
        List.of("/v1/examples/**", "/v1/signup", "/v1/login", "/v1/refreshToken"));
    mappingFilter.setRequestGet(List.of("/v1/examples/**"));
    mappingFilter.setRequestDelete(List.of("/v1/examples/**"));
    mappingFilter.setRequestPut(List.of("/v1/examples/**"));
    return mappingFilter;
}
```
