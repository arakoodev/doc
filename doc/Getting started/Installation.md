---
sidebar_position: 2
hide_sidebar: true
---

# Installation 

### Initial setup

To set up EdgeChains, you will need to download the release jar.

### Downloading the release jar

> **Note:** EdgeChains requires Java version 17 or above to run. Please ensure that you have Java 17 installed on your system before proceeding.

You can download the release jars and associated files from the [latest release](https://github.com/arakoodev/EdgeChains/releases/tag/0.5.0). Make sure to download the jar(edgechain.jar) and associated files(source code (zip) or Source code(tar.gz)). A single jar file is necessary for running EdgeChains.

Once downloaded, Follow these steps:

1. Create a folder in your desired location and paste the contents of `Source code.zip` in it. 

2. Copy all the contents from the _Examples_ folder and paste them to your folder. The _Examples_ folder includes all the jsonnet files and `edgechain.jar` file.    

4. Navigate to the directory in which you have extracted the files in your preferred IDE.

> **Note:** You can use any IDE of your choice, but IntelliJ is recommended as it automatically indexes the project and selects the **Java SDK 17 or above**, which is required for EdgeChains. Additionally, ensure that you are using a <font color="red">**JBang project**</font>. You can set up JBang for IntelliJ by simply installing the JBang plugin extension. 

> Optionally, you may rename the file `EdgeChainApplication.java` to a name of your preference. You can then write your own code or modify the example implementation to meet your specific requirements.

---

### Run EdgeChains

Before running EdgeChains, Ensure that you have completed the following steps:

1. **Generate an OpenAI key**: In order to interact with the language models, EdgeChains requires a valid OpenAI key. You can generate an API key by following the instructions provided by OpenAI. Refer [How to get your OpenAI Key](https://www.arakoo.ai/blog/openai-api-key) for a detailed guide.

2. Open the `EdgeChainApplication.java` file and add your _OPENAI Auth Key_, inside the Starter class.

  ```java
  public class Starter {

      private final String OPENAI_AUTH_KEY = ""; // YOUR OPENAI KEY 
      ...
  }
  ```

  Once you have completed these steps, you are ready to run EdgeChains either as a service or as an application using jbang, like:

  ```bash
  # To start the application.
  java -jar flyfly.jar jbang EdgeChainApplication.java edgechain-app-1.0.0.jar
  ```
> <details>
> <summary>For a few things to note while using EdgeChainApplication.java, expand this section.</summary>
>
> ```json
> {
>   "id": "historycontext-571b0c2c-8d07-452b-a1d8-96bd5f82234e",
>   "maxTokens": 4096,
>   "message": "Session is created. Now you can start conversational question and answer"
> }
> ```
>
> </details>
  
  ---
## Understanding EdgeChains

At EdgeChains, we take a unique approach to development, viewing it as a deployment and configuration management challenge rather than solely focusing on the user interface and code library aspects. We understand the difficulties developers face when using OpenAI APIs, which can result in code complexity and prompt-related issues.  To overcome them, we have leveraged the power of jsonnet, the advanced library developed by Google based on their experience managing a vast amount of configuration code in the Borg infrastructure, which underlies their extensive cloud and Kubernetes clusters. And building on top of this, Edgechains gives you:

* **Versioning for Prompts**: Prompts are written in jsonnet. Makes them easily versionable and diffable. 
* **Automatic parallelism**: EdgeChains automatically parallelizes LLM chains & chain-of-thought tasks across CPUs, GPUs, and TPUs using the JVM.
* **Fault tolerance**: EdgeChains is designed to be fault-tolerant, and can continue to retry & backoff even if some of the requests in the system fail.
* **Scalability**: EdgeChains is designed to be scalable, and can be used to write your chain-of-thought applications on large number of APIs, prompt lengths and vector datasets.

With EdgeChains, you can make your product live from day one, thanks to its robust features and seamless integration capabilities.

### Tutorial - Document-based Chatting with EdgeChains

Sometimes the best way to understand a complicated system is to start by understanding a basic example. The following example illustrates how to run your own Automata agent. The agent will be initialized with a trivial instruction, and will then attempt to write code to fulfill the instruction. The agent will then return the result of its attempt.

EdgeChains can be used to chat with a document. For example, you can chat with a document about the topic of "Bitcoin" or "Machine Learning" or any topic of your choice. For this, you can use the `EdgeChainService` class. 

1. Fill in the `EdgeChainApplication.java` file with the appropriate OpenAI and Redis credentials.
2. Run the following command in the terminal:   
  
  ```bash
  java -jar flyfly.jar jbang EdgeChainServiceApplication.java edgechain-app-1.0.0.jar
  ```

Now, you have to create a chat context, similar to a Chat Session in ChatGPT. Use the following command:

  ```bash
  curl  -X POST \
  'localhost:8080/v1/examples/historycontext' \
  --header 'Accept: /' \
  --header 'User-Agent: Thunder Client (https://www.thunderclient.com/)' \
  --header 'Content-Type: application/json'
  --data-raw '{
    "maxTokens": 4096
  }'
  ```

You'll get a response like:

<details>
<summary>Click to see the sample response</summary>

```json
{
  "id": "historycontext-571b0c2c-8d07-452b-a1d8-96bd5f82234e",
  "maxTokens": 4096,
  "message": "Session is created. Now you can start conversational question and answer"
}
```
</details>

You will receive a response containing an `id` for the created session. Make sure to save this `id` for future use.

Now, Upsert a document to EdgeChains using the following command:

```bash
curl  -X POST \
  'localhost:8080/v1/redis/openai/upsert' \
  --header 'Accept: */*' \
  --header 'User-Agent: Thunder Client (https://www.thunderclient.com)' \
  --form 'file=@./8946-Article Text-12474-1-2-20201228.pdf'
```

Now, it's time to start chatting with the document by asking questions. For example, to inquire about the "transformer architecture," use the following command:

```bash
curl --location 'localhost:8080/v1/examples/redis/openai/chat?query=What%20is%20the%20transformer%20architecture%3F&namespace=machine-learning&id=historycontext%3A50756d25-e7e4-4d7c-862c-f81bf3f8eea0' \
--header 'Content-Type: application/json'
 --data-raw '{
    "query": "What is the transformer architecture?"
}
```
<!-- Please note that you should replace <HISTORY_CONTEXT_VALUE> in the last command with the actual value. -->

Here is a demo using the famous research paper [**Attention is all you need**](https://arxiv.org/pdf/1706.03762.pdf):

![Demo](https://s12.gifyu.com/images/SQ6y0.gif)

<!-- Add playground part when it is present -->

<!-- ## Playgrounds 

If you want to experiment with EdgeChains in a playground environment, you can access the online playgrounds provided by the EdgeChains team. Follow these steps:

1. Visit the [EdgeChains Playground](https://example.com/playground-edgechains).

2. Start exploring the features and capabilities of EdgeChains in the playground environment. -->


