```bash
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Primary;

@Bean
@Primary
public SupabaseEnv supabaseEnv() {
    SupabaseEnv env = new SupabaseEnv();
    env.setUrl(""); // SupabaseURL
    env.setAnnonKey(""); // Supabase AnnonKey
    env.setJwtSecret(""); // Supabase JWTSecret
    env.setDbHost(""); // jdbc:postgresql://${SUPABASE_DB_URK}/postgres
    env.setDbUsername("postgres");
    env.setDbPassword("");
    return env;
}
```
