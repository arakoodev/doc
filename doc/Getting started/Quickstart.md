---
sidebar_position: 3
---

# Quickstart

Follow these steps to quickly setup and run your first EdgeChains application in the next 10 minutes:

### Initial setup

**Step 1:** Go to the [latest release](https://github.com/arakoodev/EdgeChains/releases/tag/0.5.0) of EdgeChains. From the assets section, download the `jar(edgechain.jar)` and `associated files(source code (zip) or Source code(tar.gz))`. A single jar file is necessary for running EdgeChains.

**Step 2:** Create a new **Java JBang project** in your desired location.

> If you are not familiar with JBang projects, you can install the JBang plugin in IntelliJ IDE to easily set up and manage your project.

> **Note:** IntelliJ is recommended as it automatically indexes the project and selects the **Java SDK 17 or above**, which is required for EdgeChains.

**Step 3:** Copy all the contents from extracted `Source code.zip` and paste them into your working directory. Add the `flyfly.jar` file in the Script folder on the root directory and `edgechain-app-1.0.0.jar` in the FlySpring/edgechain-app/target directory.

**Step 4:** Navigate to the directory in which you have extracted the files within the IntelliJ IDE.

By following these steps, you are now ready to proceed with running your first EdgeChains application.

### Run EdgeChains

**Step 5:** Gather your **_OpenAI API key_**, **_Redis URL_**, **_Port_**, and ***Password***. If you don't have these handy, you can refer to the following blog sections for instructions on obtaining them:
- [How to get your OpenAI Key](https://www.arakoo.ai/blog/openai-api-key)
- [How to create a new instance in Redis](https://www.arakoo.ai/blog/redis)

**Step 6:** Create a Starter.java file (or rename it according to your convenience and requirements) and copy the code provided below into the file.
<details>
<summary>Click to expand</summary>

```java
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
```
</details>

**Step 7:** Add your _**OPENAI Auth Key**_ inside the `Starter` class and _**Redis URL**_, _**Password**_, and _**Port**_ inside the `redisEnv` method of the `RedisEnv` class.

**Step 7:** Now, run your first EdgeChains application using JBang.

```bash
java -jar flyfly.jar jbang Starter.java edgechain-app-1.0.0.jar
```

**Step 8:** Begin writing your code and building your LLM applications based on your requirements.

That's it! You are now ready to start building your EdgeChains application. _Happy coding!_ 

Feel free to modify, experiment and enhance the content as per your specific requirements.




