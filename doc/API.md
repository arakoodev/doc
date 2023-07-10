---
sidebar_position: 8
---

# API Reference

## SDKs and Client Libraries

Follow these steps to effectively use the EdgeChainsSDK:

**Step 1:** Visit [EdgeChains actions](https://github.com/arakoodev/EdgeChains/actions). Click on Latest ***Build and Run*** and then download Output.zip file.

**Step 2:** Once the download is complete, extract the contents of the `Output.zip` file. Move the extracted folder to your desired directory.hj

**Step 3:** Open the extracted directory using IntelliJ. The IDE will automatically index the project.

> **Note:**
> - EdgeChains requires **Java version 17** or above to run. 
> - Make sure to use **Jbang project**.

**Step 4:** Begin writing your code and building your LLM applications based on your requirements.

<details>
<summary>Click here for a sample starter file</summary>

```java
{
  package com.edgechain;

import com.edgechain.lib.configuration.RedisEnv;
import com.edgechain.lib.request.ArkRequest;
import com.edgechain.lib.response.ArkResponse;
import io.reactivex.rxjava3.core.Observable;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.*;

import static com.edgechain.lib.constants.EndpointConstants.*;

@SpringBootApplication
public class Starter {

    private final String OPENAI_AUTH_KEY = ""; // YOUR OPENAI KEY
    private final String PINECONE_AUTH_KEY = ""; // YOUR PINECONE API KEY
    private final String PINECONE_QUERY_API = ""; // YOUR PINECONE QUERY API
    private final String PINECONE_UPSERT_API = ""; // YOUR PINECONE UPSERT API
    private final String PINECONE_DELETE = ""; // YOUR PINECONE DELETE

    public static void main(String[] args) {
        System.setProperty("server.port", "8080");
        SpringApplication.run(Starter.class, args);
    }


    @Bean
    public RedisEnv redisEnv() {
        RedisEnv redisEnv = new RedisEnv();
        redisEnv.setUrl("");
        redisEnv.setPort(12285);
        redisEnv.setUsername("default");
        redisEnv.setPassword("");
        redisEnv.setTtl(3600); // Configuring ttl for HistoryContext;
        return redisEnv;
    }

    @RestController
    @RequestMapping("/v1/examples")
    public class ExampleController {

      // ArkRequest can only accept Content-Type application/json & multipart/form-data ~ Define explicitly in your client.
        @GetMapping
        public ArkResponse m1(ArkRequest arkRequest) {
            return new ArkResponse(Observable.just("Hello, My Starter API is working...."));
        }

    }


}
}
```

</details>

**Step 5:** For debugging purposes, you have two options; Run the application through IntelliJ or you can use jbang by executing the following command in your terminal: 


```bash
java -jar flyfly.jar jbang Starter.java edgechain-app-1.0.0.jar
```
