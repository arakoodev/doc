---
sidebar_position: 3
---

# Quickstart

Follow these steps to quickly setup and run your first EdgeChains application in the next 10 minutes:

### Initial setup

**Step 1:** Download Output.zip by clicking on the Latest Build&Run once you reach the [actions page](https://github.com/arakoodev/EdgeChains/actions) of Arakoo.

**Step 2:**  Once Output.zip is downloaded, then extract the folder and put this file into the directory.

**Step 3:**  Now, Open the directory using IntelliJ ==> It will index automatically and then always use Java SDK 17 or above.


> **Note:** The starter.java file can be renamed to any name


**Step 4:**  Write your code & build phenomenal applications using EdgeChainsSDK. 

By following these steps, you are now ready to proceed with running your first EdgeChains application.

### Run EdgeChains

**Step 5:** For Debugging purpose, you can run it via IntelliJ or else with jbang (especially where you are using external libs such as Thymeleaf i.e., java -jar edgechain.jar jbang Starter.java.

**Step 6:** If you are using Redis, specify the following properties: 
<details>
<summary>Click to expand</summary>

```java
properties.setProperty("redis.url", "");
properties.setProperty("redis.port","12285");
properties.setProperty("redis.username", "default");
properties.setProperty("redis.password", "");
properties.setProperty("redis.ttl", "3600");
```
</details>

**Step 7:** If you are using Postgres, specify the following properties: 
<details>
<summary>Click to expand</summary>

```java
properties.setProperty("postgres.db.host", "");
properties.setProperty("postgres.db.username", "postgres");
properties.setProperty("postgres.db.password", ""); 
```
</details>

**Step 8:** If you want to use Supabase, specify the following properties: 
<details>
<summary>Click to expand</summary>

```java

properties.setProperty("supabase.url", "https://itlgddqhlxhdbncdqowa.supabase.co%22/); properties.setProperty("supabase.annon.key", ""); 

```
</details>
####For JWT decoding:
If you aren't using Supabase and want to use EdgeChains Authentication feature, therefore make sure your jwt must contain these two fields: 
a) email:  "..."
b) role: "authenticated, user_create"
<details>

<summary>Click to expand</summary>

```java

properties.setProperty("jwt.secret", "");

```
</details> 



```bash
package com.edgechain;

import static com.edgechain.lib.constants.EndpointConstants.OPENAI_CHAT_COMPLETION_API;

import com.edgechain.lib.endpoint.impl.OpenAiEndpoint;
import com.edgechain.lib.endpoint.impl.WikiEndpoint;
import com.edgechain.lib.jsonnet.JsonnetArgs;
import com.edgechain.lib.jsonnet.JsonnetLoader;
import com.edgechain.lib.jsonnet.enums.DataType;
import com.edgechain.lib.jsonnet.impl.FileJsonnetLoader;
import com.edgechain.lib.request.ArkRequest;
import com.edgechain.lib.response.ArkEmitter;
import com.edgechain.lib.response.ArkResponse;
import com.edgechain.lib.rxjava.retry.impl.ExponentialDelay;
import com.edgechain.lib.wiki.response.WikiResponse;
import java.util.*;
import java.util.concurrent.TimeUnit;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
public class Starter {

  public static void main(String[] args) {
    Starter
    System.setProperty("server.port", "8080");

    Properties properties = new Properties();

    // Define your custom properties like this;
    properties.setProperty("cors.origins", "http://localhost:4200");
    properties.setProperty("spring.jpa.show-sql", "true");
    properties.setProperty("spring.jpa.properties.hibernate.format_sql", "true");

    new SpringApplicationBuilder(Starter.class).properties(properties).run(args);
  }

  @RestController
  public class WikiController {

    @GetMapping("/v1/myThing")
    public ArkResponse m1(ArkRequest arkRequest) {
          // Do Your Implementation
    }

  }
}
```




