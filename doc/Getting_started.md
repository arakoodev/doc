---
sidebar_position: 4
---

# Getting Started

Get started by **[creating a new chain](https://www.arakoo.ai/doc/category/Tutorials)**.

Or **try EdgeChains immediately** by trying out existing **[Examples](https://www.arakoo.ai/doc/category/Examples)**.

## Installation and Usage

### Initial setup

EdgeChains can be setup either by downloading the release jar or compiling it yourself. We recommend the former.

### Downloading the release jar

> **Note:** EdgeChains requires Java version 17 or above to run. Please make sure you have Java 17 installed on your system before proceeding.

The release jars can be downloaded from the [releases page](https://github.com/arakoodev/EdgeChains/releases). Download both flyfly.jar and edgechain-app-VERSION_NUMBER.jar. Both the jar files need to be compiled. 

Once downloaded, Follow these steps:

```bash
# Clone the repository
 git clone https://github.com/arakoodev/EdgeChains.git && cd FlySpring

# Compile flyfly.jar
cd autoroute && mvn clean package -P gofly
cd ../flyfly && mvn clean package -P gofly
```
The `flyfly.jar` file will be generated in the `Script` folder on the root directory.

```bash
# Compile edgechain-app-VERSION_NUMBER.jar
cd edgechain-app && mvn clean package
cd ../flyfly && mvn clean package -P gofly
```
The `edgechain-app-VERSION_NUMBER.jar` file will be generated in the `FlySpring/edgechain-app/target` directory.

### Integrate EdgeChains into your code

You have the flexibility to explore and experiment with the base EdgeChains library, or seamlessly incorporate it into your existing codebase. To get started, simply follow the step-by-step instructions below:

1. Within your root project folder, which contains the `pom.xml`file, create a new directory named `dependencies`.

2. Copy the `edgechain-app-VERSION_NUMBER.jar` app file into the newly created `dependencies` folder.

3. Open your `pom.xml` file and add the following XML code:

```xml
<dependency>
    <groupId>com.edgechain</groupId>
    <artifactId>edgechain-app</artifactId>
    <version>VERSION_NUMBER</version>
    <scope>system</scope>
    <systemPath>${basedir}/dependencies/edgechain-app-VERSION_NUMBER.jar</systemPath>
</dependency>
```

4. Execute the command
```bash
mvn clean install
```

This command will install the EdgeChains library into your local Maven repository, making it available for your project's use.

### Run EdgeChains

Before running EdgeChains, Ensure that you have completed the following steps:

1. **Generate an OpenAI key**: In order to interact with the language models, EdgeChains requires a valid OpenAI key. You can generate an API key by following the instructions provided by OpenAI.

2. **Create a Redis instance**: EdgeChains uses Redis for data storage and caching. To proceed, you will need to create a Redis instance. You can create a free Redis instance on [Redis Labs](https://redislabs.com/). Sign up for an account and create a new Redis instance for your EdgeChains application. After creating the Redis instance, ***take note of the Redis host and port***, as you will need them for the configuration.

Once you have completed these steps, you are ready to run EdgeChains either as a service or as an application using jbang, like:

```bash
cd Examples
# To start the application.
java -jar flyfly.jar jbang EdgeChainApplication.java edgechain-app-1.0.0.jar
```
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
  'localhost:8080/v1/history-context/create' \
  --header 'Accept: */*' \
  --header 'User-Agent: Thunder Client (https://www.thunderclient.com)' \
  --header 'Content-Type: application/json' \
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
curl  -X POST \
  'localhost:8080/v1/redis/openai/query/context/<HISTORY_CONTEXT_VALUE>' \
  --header 'Accept: */*' \
  --header 'User-Agent: Thunder Client (https://www.thunderclient.com)' \
  --header 'Content-Type: application/json' \
  --data-raw '{
    "query": "What is the transformer architecture?"
}
```
Please note that you should replace <HISTORY_CONTEXT_VALUE> in the last command with the actual value.

Here is a demo using the famous research paper [**Attention is all you need**](https://arxiv.org/pdf/1706.03762.pdf):

![Demo](https://s12.gifyu.com/images/SQ6y0.gif)

## Playgrounds 

If you want to experiment with EdgeChains in a playground environment, you can access the online playgrounds provided by the EdgeChains team. Follow these steps:

1. Visit the [EdgeChains Playground](https://example.com/playground-edgechains).

2. Start exploring the features and capabilities of EdgeChains in the playground environment.

