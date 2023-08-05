# Example API for edgechains

These example APIs can be added to the `EdgeChainApplication.java` file in the source code to enhance the functionalities of EdgeChains. Below is a list of example APIs that you can use as reference and inspiration for your own implementations:

- [1. Adding CORS Configuration](#1-adding-cors-configuration-adding-cors-configuration)
- [2. Configuring Redis (Optional)](#2-configuring-redis-optional)
- [3. Configuring Supabase (Optional)](#3-configuring-supabase-optional)
- [4. Excluding API Calls from Filtering (Optional)](#4-excluding-api-calls-from-filtering-optional)
- [5. Getting Wikipedia Content](#5-getting-wikipedia-content)
- [6. Creating HistoryContext (Using Redis) Controller](#6-creating-historycontext-using-redis-controller)
- [7. Creating HistoryContext (Using PostgreSQL) Controller](#7-creating-historycontext-using-postgresql-controller)
- [8. PDF reader](#8-pdf-reader)
- [9. ReactChainApplication](#9-ReactChain-Application)

### 1. Adding CORS Configuration 

To enable Cross-Origin Resource Sharing (CORS) in your EdgeChains application and allow multiple origins, add the following code snippet to the `EdgeChainApplication.java` file:

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

In the provided code, we create a bean named corsEnableOrigins which enables CORS for the specified origins. The setOrigins method allows you to define the URLs for which CORS should be enabled. You can include multiple origins by adding them to the list within the method.

By implementing this configuration in your EdgeChains application, it will now accept requests from the designated origins, permitting interaction with the application from different sources. This is particularly useful when your application's frontend is hosted on a different domain or port than the backend, as it avoids CORS-related restrictions and allows for smooth communication between the two.

## 2. Configuring Redis (Optional)

If your EdgeChains application requires Redis integration, you can easily configure it by adding the following code snippet to the `EdgeChainApplication.java` file:
(if it is not required, simply remove this section from code.)

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
In the provided code, you should customize the values accordingly. In the `setUrl` method, specify the URL of your Redis instance; in the `setPort` method, provide the port number for the Redis instance; use the `setUsername method` to set the username for authentication; use the `setPassword` method to provide the password for authentication; and use the `setTtl` method to configure the time-to-live for the HistoryContext.

If you do not have a Redis URL,port etc in hand, refer to the blog section on [How to create an instance in Redis](https://www.arakoo.ai/blog/redis) for step-by-step instructions.

Note that these configuration steps are relevant only if you are using Redis in your EdgeChains application. If you are not using Redis, you may skip this configuration, and the application will continue to function as expected without it. However, if you are leveraging Redis, this configuration will enable seamless integration and utilization of Redis features within your application.

## 3. Configuring Supabase (Optional)

If you intend to use Supabase or PostgreSQL with your EdgeChains application, you can configure it by adding the following code to the file:

```
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

The provided code contains several methods that need to be configured accordingly for integrating Supabase with your EdgeChains application:

*setUrl*: This method should be used to specify the URL of your Supabase backend.
*setAnnonKey*: Use this method to provide the anonymous key used for authentication with Supabase.
*setJwtSecret*: Utilize this method to set the JSON Web Token (JWT) secret for secure communication and user authentication with Supabase.
*setDbHost*: This method requires you to provide the JDBC URL for connecting to the PostgreSQL database in Supabase.
*setDbUsername*: Use this method to set the username for the PostgreSQL database.
*setDbPassword*: Finally, this method should be used to provide the password for the PostgreSQL database, which is required for authentication and access.

If you need guidance on configuring Supabase, refer to the blog section on [Getting Started with Supabase](https://www.arakoo.ai/blog/Supabase)

Please note that these steps are only required if you are using Supabase or PostgreSQL in your EdgeChains application. If you are not using them, you can skip this configuration, and the application will function without it.

## 4. Excluding API Calls from Filtering (Optional)

If there are certain API calls in your EdgeChains application that you want to exclude from filtering based on access roles, you have the option to create and configure an ExcludeMappingFilter. To do so, add the following code to the file:

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

Customize the `mappingFilter` according to your specific requirements. In this example, certain API endpoints (`/v1/examples/**`, `/v1/signup`, `/v1/login`, and `/v1/refreshToken`) are excluded from filtering based on access roles. You can adjust the included API endpoints as needed to suit your application's access control needs.

Please note that these steps are entirely optional, and you can skip this configuration if you do not have the requirement to exclude specific API calls from filtering based on access roles. The ExcludeMappingFilter provides a way to fine-tune access control and ensure that certain endpoints are exempt from role-based filtering, allowing for more flexible and granular control over your application's security measures.

## 5. Getting Wikipedia Content

To accomplish the goal of retrieving content from Wikipedia and utilizing it as a prompt for the OpenAiChatCompletion API, the following steps should be followed:

*Step 1:* Load JSONnet File and Pass Arguments

```
JsonnetLoader loader = new FileJsonnetLoader("R:\\Github\\wiki.jsonnet")
    .put("keepMaxTokens", new JsonnetArgs(DataType.BOOLEAN, "true"))
    .put("maxTokens", new JsonnetArgs(DataType.INTEGER, "4096"));
```

*Step 2:*  Extract Content from Wikipedia using the WikiEndpoint

```
WikiEndpoint wikiEndpoint = new WikiEndpoint();
```

*Step 3:* Communicate with OpenAiServices using the OpenAiEndpoint

```
OpenAiEndpoint openAiEndpoint = new OpenAiEndpoint(
    OPENAI_CHAT_COMPLETION_API,
    OPENAI_AUTH_KEY,
    "gpt-3.5-turbo",
    "user",
    0.7,
    stream,
    new ExponentialDelay(3, 5, 2, TimeUnit.SECONDS)
);
```
*Step 4:*  Create the Prompt for OpenAiChatCompletion API
```
String query = arkRequest.getQueryParam("query");
boolean stream = arkRequest.getBooleanHeader("stream");

return new EdgeChain<>(wikiEndpoint.getPageContent(query))
    .transform(wiki -> {
        loader
            .put("keepContext", new JsonnetArgs(DataType.BOOLEAN, "true"))
            .put("context", new JsonnetArgs(DataType.STRING, wiki.getText()))
            .loadOrReload();
        return loader.get("prompt");
    })
    .transform(openAiEndpoint::getChatCompletion)
    .getArkResponse();
```

By following these steps, you will be able to fetch content from Wikipedia, create the prompt using the JSONnet file, and then pass it to the OpenAiChatCompletion API. This will enable you to utilize the powerful capabilities of OpenAI's language models for processing the Wikipedia content and generating the desired output.

## 6. Creating HistoryContext (Using Redis) Controller

The HistoryContext functionality allows your application to maintain conversation history or context for users during their interactions. This feature can be implemented using Redis as the storage mechanism to ensure efficient and reliable data management.

**step 1: Creating a HistoryContext Entry**

To create a new HistoryContext entry, you can use the following API endpoint:

**Endpoint:** `POST /examples/redis/historycontext`

**Usage:**
1. Make a POST request to the above endpoint.
2. A new HistoryContext entry will be created and assigned a unique identifier (UUID).
3. The generated UUID is returned in the response, which you can use for further interactions within the same context.

**step 2: Updating a HistoryContext Entry**

To update an existing HistoryContext entry, use the following API endpoint:

**Endpoint:** `PUT /examples/redis/historycontext`

**Usage:**
1. Make a PUT request to the above endpoint with the `id` of the context to be updated and the new `response` to be added.
2. The specified HistoryContext entry will be updated with the new response, ensuring continuity in the conversation.

**step 3: Retrieving a HistoryContext Entry**

To retrieve a specific HistoryContext entry from Redis, use the following API endpoint:

**Endpoint:** `GET /examples/redis/historycontext`

**Usage:**
1. Make a GET request to the above endpoint with the `id` of the desired HistoryContext.
2. The corresponding HistoryContext entry will be fetched from Redis and returned in the response.

**step 4: Deleting a HistoryContext Entry**

To remove a HistoryContext entry from Redis, use the following API endpoint:

**Endpoint:** `DELETE /examples/redis/historycontext`

**Usage:**
1. Make a DELETE request to the above endpoint with the id of the HistoryContext to be deleted.
2. The specified HistoryContext entry will be removed from Redis, ensuring clean-up and data management.


<details>
<summary>Click here for sample code</summary>

```java
/*** Creating HistoryContext (Using Redis) Controller ****/
    @PostMapping("/examples/redis/historycontext")
    public ArkResponse createRedisHistoryContext(ArkRequest arkRequest) {

      RedisHistoryContextEndpoint endpoint =
          new RedisHistoryContextEndpoint(new FixedDelay(2, 3, TimeUnit.SECONDS));

      return new ArkResponse(
          endpoint.create(
              UUID.randomUUID()
                  .toString())); // Here randomId is generated, you can provide your own ids....
    }

    @PutMapping("/examples/redis/historycontext")
    public ArkResponse putRedisHistoryContext(ArkRequest arkRequest) throws IOException {
      JSONObject json = arkRequest.getBody();

      RedisHistoryContextEndpoint endpoint =
          new RedisHistoryContextEndpoint(new FixedDelay(2, 3, TimeUnit.SECONDS));

      return new ArkResponse(endpoint.put(json.getString("id"), json.getString("response")));
    }

    @GetMapping("/examples/redis/historycontext")
    public ArkResponse getRedisHistoryContext(ArkRequest arkRequest) {
      String id = arkRequest.getQueryParam("id");

      RedisHistoryContextEndpoint endpoint =
          new RedisHistoryContextEndpoint(new FixedDelay(2, 3, TimeUnit.SECONDS));

      return new ArkResponse(endpoint.get(id));
    }

    @DeleteMapping("/examples/redis/historycontext")
    public void deleteRedisHistoryContext(ArkRequest arkRequest) {
      String id = arkRequest.getQueryParam("id");

      RedisHistoryContextEndpoint endpoint =
          new RedisHistoryContextEndpoint(new FixedDelay(2, 3, TimeUnit.SECONDS));

      endpoint.delete(id);
    }
```
</details>

## 7. Creating HistoryContext (Using PostgreSQL) Controller

The HistoryContext feature allows your application to maintain conversation history or context for users during their interactions. This functionality can be achieved using PostgreSQL as the storage mechanism, providing a robust and scalable solution for data management.


**step 1: Creating a HistoryContext Entry**

To create a new HistoryContext entry, you can use the following API endpoint:

**Endpoint:** `POST /examples/postgresql/historycontext`

**Usage:**
1. Make a POST request to the above endpoint.
2. A new HistoryContext entry will be created and assigned a unique identifier (UUID).
3. The generated UUID is returned in the response, which you can use for further interactions within the same context.

**step 2: Updating a HistoryContext Entry**

To update an existing HistoryContext entry, use the following API endpoint:

**Endpoint:** `PUT /examples/postgresql/historycontext`

**Usage:**
1. Make a PUT request to the above endpoint with the `id` of the context to be updated and the new `response` to be added.
2. The specified HistoryContext entry will be updated with the new response, ensuring continuity in the conversation.

**step 3: Retrieving a HistoryContext Entry**

To retrieve a specific HistoryContext entry from PostgreSQL, use the following API endpoint:

**Endpoint:** `GET /examples/postgresql/historycontext`

**Usage:**
1. Make a GET request to the above endpoint with the `id` of the desired HistoryContext.
2. The corresponding HistoryContext entry will be fetched from PostgreSQL and returned in the response.

**step 4: Deleting a HistoryContext Entry**

To remove a HistoryContext entry from PostgreSQL, use the following API endpoint:

**Endpoint:** `DELETE /examples/postgresql/historycontext`

**Usage:**
1. Make a DELETE request to the above endpoint with the id of the HistoryContext to be deleted.
2. The specified HistoryContext entry will be removed from PostgreSQL, ensuring clean-up and data management.

<details>
<summary>Click here for sample code</summary>

```java
/*** Creating HistoryContext (Using PostgreSQL) Controller ****/
    @PostMapping("/examples/postgresql/historycontext")
    public ArkResponse createPostgreSQLHistoryContext(ArkRequest arkRequest) {

      PostgreSQLHistoryContextEndpoint endpoint =
          new PostgreSQLHistoryContextEndpoint(new FixedDelay(2, 3, TimeUnit.SECONDS));

      return new ArkResponse(
          endpoint.create(
              UUID.randomUUID()
                  .toString())); // Here randomId is generated, you can provide your own ids....
    }

    @PutMapping("/examples/postgresql/historycontext")
    public ArkResponse putPostgreSQLHistoryContext(ArkRequest arkRequest) throws IOException {
      JSONObject json = arkRequest.getBody();

      PostgreSQLHistoryContextEndpoint endpoint =
          new PostgreSQLHistoryContextEndpoint(new FixedDelay(2, 3, TimeUnit.SECONDS));

      return new ArkResponse(endpoint.put(json.getString("id"), json.getString("response")));
    }

    @GetMapping("/examples/postgresql/historycontext")
    public ArkResponse getPostgreSQLHistoryContext(ArkRequest arkRequest) {
      String id = arkRequest.getQueryParam("id");

      PostgreSQLHistoryContextEndpoint endpoint =
          new PostgreSQLHistoryContextEndpoint(new FixedDelay(2, 3, TimeUnit.SECONDS));

      return new ArkResponse(endpoint.get(id));
    }

    @DeleteMapping("/examples/postgresql/historycontext")
    public void deletePostgreSQLHistoryContext(ArkRequest arkRequest) {
      String id = arkRequest.getQueryParam("id");

      PostgreSQLHistoryContextEndpoint endpoint =
          new PostgreSQLHistoryContextEndpoint(new FixedDelay(2, 3, TimeUnit.SECONDS));

      endpoint.delete(id);
    }
```
</details>

## 8. PDF reader

**Prerequisites**
Before proceeding with the integration, ensure you have the following:

- Access to Pinecone service and API key
- Access to OpenAI services (Embeddings and Chat Completion) and API key
- The pdfReader component is expected to be autowired, providing PDF processing functionalities.

### Namespace in VectorDB
VectorDb allows you to partition the vectors in an index into namespaces. Queries and other operations are then limited to one namespace, so different requests can search different subsets of your index. A namespace acts as a label or category for the indexed data, allowing you to organize and segregate data based on different criteria. If a namespace is null or empty, in Pinecone it will be prefixed as an empty string ("") and in Redis, it will be prefixed as "knowledge."

For example, you might want to define namespaces for indexing books by finance, law, medicine, etc. This feature can be used in various use-cases, such as when a user uploads a book, a unique namespace can be generated and associated with it. Subsequently, queries or conversations related to that book can be restricted to that specific namespace.

### PdfReader Dependency Injection
The PdfReader dependency is used to read and process PDF files for further indexing. Make sure the dependency is available and correctly set up to avoid any issues while processing PDF files.

```
@Autowired
private PdfReader pdfReader;
```

### Pinecone Upsert Endpoint

To upsert data (documents) into Pinecone, you can follow the steps below:
- Make a POST request to the `/examples/pinecone/openai/upsert` endpoint with the necessary parameters.
- The `namespace` parameter allows you to define a namespace for indexing specific categories of data. If not provided, it will use an empty string as the namespace.
- The `file` parameter should contain the data you want to upsert (e.g., a PDF file).

<details>
<summary>Click here for sample code</summary>

```java
@PostMapping(
        "/examples/pinecone/openai/upsert") // /v1/examples/openai/upsert?namespace=machine-learning
    public void upsertPinecone(ArkRequest arkRequest) throws IOException {

      String namespace = arkRequest.getQueryParam("namespace");
      InputStream file = arkRequest.getMultiPart("file").getInputStream();

      PineconeEndpoint pineconeEndpoint =
          new PineconeEndpoint(
              PINECONE_UPSERT_API,
              PINECONE_AUTH_KEY,
              namespace,
              new ExponentialDelay(3, 3, 2, TimeUnit.SECONDS));

      OpenAiEndpoint embeddingEndpoint =
          new OpenAiEndpoint(
              OPENAI_EMBEDDINGS_API,
              OPENAI_AUTH_KEY,
              "text-embedding-ada-002",
              new ExponentialDelay(3, 3, 2, TimeUnit.SECONDS));

      String[] arr = pdfReader.readByChunkSize(file, 512);

      Retrieval retrieval = new PineconeRetrieval(pineconeEndpoint, embeddingEndpoint);
      IntStream.range(0, arr.length).parallel().forEach(i -> retrieval.upsert(arr[i]));
    }
```
</details>

In the current version, the entire file is loaded into memory, later on it will be loaded in buffers.

Two Implementations will be present for Read by Sentence:

a) readBySentence(LangType, Your File):
The EdgeChains SDK provides predefined support to chunk the PDF by sentences. For example, say for five languages (English, French, German, Italian, Dutch, etc.). This method is suitable when you are using Redis. I

b) readBySentence(Custom OpenNLP Trained Model, Your File):
Alternatively, you can use a custom OpenNLP trained model to chunk the PDF file into sentences. This approach gives you more flexibility to work with other languages or specialized models.

---

### Pinecone Query Endpoint
To query data from Pinecone, you can use the following steps:

- Make a POST request to the /examples/pinecone/openai/query endpoint with the necessary parameters.
- The namespace parameter allows you to specify the namespace from which you want to query data. If not provided, it will use an empty string as the namespace.
- The query parameter should contain the input for which you want to find similar results.
- The topK parameter specifies the number of top results to retrieve.

<details>
<summary>Click here for sample code</summary>

```java
@PostMapping(
        value = "/examples/pinecone/openai/query",
        produces = {MediaType.APPLICATION_JSON_VALUE})
    public ArkResponse queryPinecone(ArkRequest arkRequest) {

      String namespace = arkRequest.getQueryParam("namespace");
      String query = arkRequest.getBody().getString("query");
      int topK = arkRequest.getIntQueryParam("topK");

      PineconeEndpoint pineconeEndpoint =
          new PineconeEndpoint(
              PINECONE_QUERY_API,
              PINECONE_AUTH_KEY,
              namespace,
              new ExponentialDelay(3, 3, 2, TimeUnit.SECONDS));

      OpenAiEndpoint embeddingEndpoint =
          new OpenAiEndpoint(
              OPENAI_EMBEDDINGS_API,
              OPENAI_AUTH_KEY,
              "text-embedding-ada-002",
              new FixedDelay(3, 5, TimeUnit.SECONDS));

      OpenAiEndpoint chatEndpoint =
          new OpenAiEndpoint(
              OPENAI_CHAT_COMPLETION_API,
              OPENAI_AUTH_KEY,
              "gpt-3.5-turbo",
              "user",
              0.7,
              new ExponentialDelay(3, 5, 2, TimeUnit.SECONDS));

      JsonnetLoader loader =
          new FileJsonnetLoader("R:\\Github\\pinecone-query.jsonnet")
              .put("keepMaxTokens", new JsonnetArgs(DataType.BOOLEAN, "true"))
              .put("maxTokens", new JsonnetArgs(DataType.INTEGER, "4096"));

      return new EdgeChain<>(
              embeddingEndpoint.getEmbeddings(
                  query)) 
          .transform(
              embeddings ->
                  new EdgeChain<>(pineconeEndpoint.query(embeddings, topK))
                      .get()) 
          .transform(
              embeddingsQuery -> {
                List<ChatCompletionResponse> resp = new ArrayList<>();
                Iterator<WordEmbeddings> iterator = embeddingsQuery.iterator();
                while (iterator.hasNext()) {

                  String pinecone = iterator.next().getId();

                  loader
                      .put("keepContext", new JsonnetArgs(DataType.BOOLEAN, "true"))
                      .put(
                          "context",
                          new JsonnetArgs(
                              DataType.STRING,
                              pinecone)) 
                      .loadOrReload();
                  resp.add(
                      EdgeChain.fromObservable(chatEndpoint.getChatCompletion(loader.get("prompt")))
                          .get()); // You can use both new EdgeChain<>() or
                }
                return resp;
              })
          .getArkResponse();
    }
```
</details>

---
## 9. ReactChain Application
React prompting as the name infer is a combination of reason and act (REason +ACt = REACT). An interaction takes place between external APIs such as Wikipedia and your chain in order to retrieve information. When you ask a question, your chain performs an action to retrieve the information and provide an answer based on the information retrieved. This is continued in a loop until the LLM returns “Finish” as a response. In our case, the LLM used is OpenAI Chat Completion.

<details>
<summary>Click here for sample code</summary>

```java
 @RequestMapping("/v1/examples")
  public class ExampleController {

    @GetMapping(value = "/react-chain")
    public String reactChain(ArkRequest arkRequest) {
      String prompt = (String) arkRequest.getBody().get("prompt");
      StringBuilder context = new StringBuilder();
      JsonnetLoader loader =
          new FileJsonnetLoader("./react-chain.jsonnet")
              .put("context", new JsonnetArgs(DataType.STRING, "This is context"))
              .put("gptResponse", new JsonnetArgs(DataType.STRING, ""))
              .loadOrReload();
      String preset = loader.get("preset");

      prompt = preset + " \nQuestion: " + prompt;

      String gptResponse =
          userChatEndpoint
              .chatCompletion(prompt, "React-Chain", arkRequest)
              .blockingFirst()
              .getChoices()
              .get(0)
              .getMessage()
              .getContent();
      context.append(prompt);
      loader.put("context", new JsonnetArgs(DataType.STRING, context.toString()));
      loader.put("gptResponse", new JsonnetArgs(DataType.STRING, gptResponse));

      while (!checkIfFinished(gptResponse)) {
        loader.loadOrReload();
        prompt = loader.get("prompt");
        gptResponse =
            userChatEndpoint
                .chatCompletion(prompt, "React-Chain", arkRequest)
                .blockingFirst()
                .getChoices()
                .get(0)
                .getMessage()
                .getContent();
        context.append("\n" + prompt);
        loader.put("context", new JsonnetArgs(DataType.STRING, context.toString()));
        loader.put("gptResponse", new JsonnetArgs(DataType.STRING, gptResponse));
      }
      return gptResponse.substring(gptResponse.indexOf("Finish[") + 7, gptResponse.indexOf("]"));
    }

    private boolean checkIfFinished(String gptResponse) {
      return gptResponse.contains("Finish");
    }
  }
}
```
</details>

The above code takes the initial Input, loads the JsonnetFile to extract the base prompt i.e “preset” then concatenates with the output provided by OpenAI Chat Completion. `prompt = preset + " \nQuestion: " + prompt` This entire thing happens in a loop where you are extracting the answer, passing it to jsonnet file and then again passing 
`${preset} + $ {output}` until Chat Completion returns “Finish”. `return gptResponse.contains("Finish")`.

 You have to be interactive so ask the queries one by one from the user to reach the final answer. Please provide a single Thought and single Action to the user so that the user can search the query of the action and provide you with the observation. When you have found the answer to the original prompt then the final response should be Action: Finish[Answer to the original prompt].
 
  ### For example, the chain would be like this:

```
 Question: Which magazine was started first Arthur's Magazine or First for Women?
                    Thought 1: I need to search Arthur's Magazine and First for Women, and find which was
                    started first.
                    Action 1: Search[Arthur's Magazine]
                    Observation 1: Arthur's Magazine (1844-1846) was an American literary periodical published
                    in Philadelphia in the 19th century.
                    Thought 2: Arthur's Magazine was started in 1844. I need to search First for Women
                    next.
                    Action 2: Search[First for Women]
                    Observation 2: First for Women is a woman’s magazine published by Bauer Media Group in the
                    USA.[1] The magazine was started in 1989.
                    Thought 3: First for Women was started in 1989. 1844 (Arthur's Magazine) < 1989 (First
                    for Women), so Arthur's Magazine was started first.
                    Action 3: Finish[Arthur's Magazine]

                    Question: Were Pavel Urysohn and Leonid Levin known for the same type of work?
                    Thought 1: I need to search Pavel Urysohn and Leonid Levin, find their types of work,
                    then find if they are the same.
                    Action 1: Search[Pavel Urysohn]
                    Observation 1: Pavel Samuilovich Urysohn (February 3, 1898 - August 17, 1924) was a Soviet
                    mathematician who is best known for his contributions in dimension theory.
                    Thought 2: Pavel Urysohn is a mathematician. I need to search Leonid Levin next and
                    find its type of work.
                    Action 2: Search[Leonid Levin]
                    Observation 2: Leonid Anatolievich Levin is a Soviet-American mathematician and computer
                    scientist.
                    Thought 3: Leonid Levin is a mathematician and computer scientist. So Pavel Urysohn
                    and Leonid Levin have the same type of work.
                    Action 3: Finish[yes]
```

    
---

