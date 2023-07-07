---
sidebar_position: 4
---

# Getting Started

Get started by **[creating a new chain](https://www.arakoo.ai/doc/category/Tutorials)**.

Or **try EdgeChains immediately** by trying out existing **[Examples](https://www.arakoo.ai/doc/category/Examples)**.

## Installation Instructions

To install EdgeChains, follow these steps:

1. Open your terminal or command prompt.

2. Choose one of the following installation methods:

<!-- to be added -->

## System Requirements

Make sure your system meets the following requirements to run EdgeChains:

<!-- add system requirements  -->

## Basic Setup and Configuration

You can get EdgeChains by either downloading the release jar or compiling it yourself. We recommend the former.

### Downloading the release jar

You can download the release jars from the [releases page](https://github.com/arakoodev/EdgeChains/releases). Download both flyfly.jar and edgechain-app-VERSION_NUMBER.jar.

### Compiling it yourself

There are 2 jar files to compile - `flyfly.jar` and `edgechain-app-1.0.0.jar`. You can compile EdgeChains yourself by following the instructions below:


1. Clone the git repository using:
  ```bash
  git clone https://github.com/arakoodev/EdgeChains.git
  ```
2. Go to the FlySpring repository using:

```bash
cd FlySpring
```

#### Compiling flyfly.jar

1. Compile the flyfly.jar file using:

```bash
cd autoroute
mvn clean package -P gofly
cd ../flyfly
mvn clean package -P gofly
```

The `flyfly.jar` file will be generated in the `Script` folder on the root directory.

### Compiling edgechain-app-VERSION_NUMBER.jar

1. Compile the edgechain-app-VERSION_NUMBER.jar file using:

```bash
cd edgechain-app
mvn clean package
```
The `edgechain-app-VERSION_NUMBER.jar` file will be generated in the `FlySpring/edgechain-app/target` directory.

## What does it look like ?

### Schematic for Quick Overview

```mermaid
graph TD
    subgraph ide1[Your Code]
        ep([Your App Entrypoint])
        logic([Your Total App Logic])
    end
    subgraph ide2[FlySpring]
        id2[Combined JAR File]
        fps[FlySpring CLI]
    end
    subgraph lib[EdgeChains Library]
        connectors[Connector Classes]
        openai[OpenAI Client]
        others[Other Classes]
    end
    subgraph service[EdgeChains Services]
        redis[Redis Service]
        otherServices[Other Services]
    end
    subgraph ide3[EdgeChains]
        lib
        service
    end
    subgraph overall[Our Code]
        ide2
        ide3
    end
    fps --> id2
    id2 --> fps
    logic --> ep
    ide1 --> |packed as one JAR using JBang| id2
    lib --> ide1
    service --> ide1
    fps --> enp([User-facing endpoints])
```

### Integrating EdgeChains into your code

You can play around with the base EdgeChains library, or integrate it into your existing codebase as well! Just follow the instructions below:

1. Create a folder called `dependencies` in your root project folder, ie., the one having the `pom.xml`.

2. Place the `edgechain-app-VERSION_NUMBER.jar` app file in the `dependencies` folder.

3. Add the following to your `pom.xml` file:

```xml
<dependency>
    <groupId>com.edgechain</groupId>
    <artifactId>edgechain-app</artifactId>
    <version>VERSION_NUMBER</version>
    <scope>system</scope>
    <systemPath>${basedir}/dependencies/edgechain-app-VERSION_NUMBER.jar</systemPath>
</dependency>
```

4. Now you can run `mvn clean install`. This will install the EdgeChains library into your local maven repository.

### Running EdgeChains

Now, you can run EdgeChains as a service or as an application using jbang, like:

```bash
java -jar flyfly.jar jbang EdgeChainServiceApplication.java edgechain-app-1.0.0.jar
```
to start the service and
```bash
java -jar flyfly.jar jbang EdgeChainApplication.java edgechain-app-1.0.0.jar
```
to start the application.

## Usage

Here are a few fun tutorials that can help you get started!

### Document-based Chatting with EdgeChains

EdgeChains can be used to chat with a document. For example, you can chat with a document about the topic of "Bitcoin" or "Machine Learning". To do this, you can use the `EdgeChainService` class. 

1. First, fill up the `EdgeChainApplication.java` file with the appropriate OpenAI and Redis credentials.
2. Then run the command on the terminal:
  
  ```bash
  java -jar flyfly.jar jbang EdgeChainServiceApplication.java edgechain-app-1.0.0.jar
  ```

1. Now, you have to create a context for the chat. Think of it like a Chat Session in ChatGPT. You can do it by:
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

```json
{
  "id": "historycontext-571b0c2c-8d07-452b-a1d8-96bd5f82234e",
  "maxTokens": 4096,
  "message": "Session is created. Now you can start conversational question and answer"
}
```
Save the `id` somewhere. You'll need it later.

4. Now you need to upsert a document to EdgeChains. You can do it so by:

```bash
curl  -X POST \
  'localhost:8080/v1/redis/openai/upsert' \
  --header 'Accept: */*' \
  --header 'User-Agent: Thunder Client (https://www.thunderclient.com)' \
  --form 'file=@./8946-Article Text-12474-1-2-20201228.pdf'
```

5. Now, you can start chatting with the document. For example, we ask the question "What is the transformer architecture?". We do this by:

```bash
curl  -X POST \
  'localhost:8080/v1/redis/openai/query/context/<HISTORY_CONTEXT_VALUE>' \
  --header 'Accept: */*' \
  --header 'User-Agent: Thunder Client (https://www.thunderclient.com)' \
  --header 'Content-Type: application/json' \
  --data-raw '{
    "query": "What is the transformer architecture?"
}
'
```
Here is a demo using the famous research paper [**Attention is all you need**](https://arxiv.org/pdf/1706.03762.pdf):

[![](https://s12.gifyu.com/images/SQ6y0.gif)](https://s12.gifyu.com/images/SQ6y0.gif)

## Playgrounds 

If you want to experiment with EdgeChains in a playground environment, you can access the online playgrounds provided by the EdgeChains team. Follow these steps:

1. Visit the [EdgeChains Playground](https://example.com/playground-edgechains).

2. Start exploring the features and capabilities of EdgeChains in the playground environment.

