---
slug: Article-writer
title: How to Build Notion Chatbot with EdgeChains
authors:
  name: Aditya Pandey
  title: Arakoo Core Team
  url: https://github.com/arakoodev
  image_url: https://avatars.githubusercontent.com/u/114422989
tags: [Article Writer, Arakoo]
---
# How to Build Notion Chatbot using EdgeChains.

Consider you have a created your notes on a particular topic using Notion and that has became huge and now you want to find a particular about it .This Chatbot would come in quite handy when such situations arises.
[Edgechains](https://github.com/arakoodev/edgechains) is a streamlined solution for developing GenAI applications, offering simplicity through a single script file and jsonnet file setup. It emphasizes versioning for prompts, automatic parallelism across various processors, fault tolerance, and scalability, making it a robust choice for chain-of-thought applications with extensive API integration and data sets. While Langchain primarily focuses on a specific set of principles, EdgeChains takes a unique stance, emphasizing declarative prompt and chain orchestration as pivotal components of its architecture. To delve deeper into EdgeChains and explore its capabilities, you can refer to our [GitHub repository](https://github.com/arakoodev/edgechains#why-do-you-need-declarative-prompt--chain-orchestration-) .

## Pre Requisites
 1. You need to make an account in OpenAI, Notion so that from there you can retrieve the AUTH key, org id and etc. which are needed for the code.
 2.  You need to download the edgechains jar file from this url https://github.com/arakoodev/EdgeChains/releases.
3. Download the .java and .jsonnet file and put them in the same folder.  
4. In the code according to the folder structure you have to write about the path.

## Notion API
The Notion API (Application Programming Interface) allows developers to interact with Notion's data programmatically. This means we can read, create, update, and delete data in Notion directly from our own code, enabling a wide range of integrations with other software and services.

Here are some key points about the Notion API:

-   **API Operations**: The API supports CRUD operations (Create, Read, Update, Delete) which allow you to interact with data stored in Notion. For example, you can read data from a Notion page, create a new page, update an existing page, or delete a page .

-   **Endpoints**: The API provides various endpoints, each allowing interaction with a specific type of data in Notion. For example, the  `/v1/pages`  endpoint is used to interact with pages, and the  `/v1/blocks`  endpoint is used to interact with blocks (pieces of content within a page).

-   **Authorization**: To use the Notion API, we need an authorization key, which is obtained by creating an integration inside your Notion workspace. This key must be included in the headers of your API requests.

-   **Data Format**: The API uses the JSON format for both request and response data. When creating or updating data, we need to structure our request data according to the specifications in the API documentation.

## Explanation of the Code 

 -  Load the edgechains package.  
 - Import the OPENAI_Chat_Completion API. Here we have to import the static constants from other classes. These classes are  of OpenAI.
 - The main class of a Spring Boot application named  `Notion`. Here's a breakdown of what it does:

1.  `@SpringBootApplication`: This is a convenience annotation that adds all of the following:
    -   `@Configuration`: Tags the class as a source of bean definitions for the application context.
    -   `@EnableAutoConfiguration`: Tells Spring Boot to start adding beans based on classpath settings, other beans, and various property settings.
    -   `@ComponentScan`: Tells Spring to look for other components, configurations, and services in the  `com.edgechain`  package, allowing it to find and register the  `Interpreter`  controller.

2.  `OPENAI_AUTH_KEY`: This is a constant for the OpenAI authorization key. It's currently set to an empty string.

3.  `gpt3Endpoint`: This is a static variable that will hold an instance of  `OpenAiEndpoint`, which is used to interact with the OpenAI GPT-3 API.

4.  `loader`: This is a static final variable that holds an instance of  `FileJsonnetLoader`, which is used to load a Jsonnet file located at  `./notion.jsonnet`.

5.  `NOTION_API_KEY`: This is a constant for the Notion API key.

6.  `main`  method: This is the entry point of the Spring Boot application. It does the following:
    -   Sets the server port to 8080.
    -   Starts the Spring Boot application.
    -   Initializes  `gpt3Endpoint`  with the OpenAI chat completion API endpoint, the OpenAI authorization key, the model to use (gpt-3.5-turbo), the user, the temperature for the AI's output, and a retry strategy (`ExponentialDelay`).

The  `ExponentialDelay`  is a retry strategy that starts with an initial delay (3 seconds in this case), and for each subsequent retry attempt, the delay is multiplied by a factor (2 in this case), up to a maximum delay (5 seconds in this case). This strategy is used when making requests to the OpenAI GPT-3 API.
-  This part of the code defines a REST controller named  `Interpreter`  in the Spring Boot application. Here's a breakdown of what it does:

1.  `@RestController`: This annotation is used to define a controller for RESTful web services.

2.  `@RequestMapping("/v1/examples")`: This annotation is used to map web requests to specific handler classes or handler methods. In this case, it's mapping requests to the  `/v1/examples`  path to this controller.

3.  `Interpreter`  class: This is the controller class. It has a  `Logger`  instance for logging and a single method  `interpret`.

4.  `@PostMapping("/code-interpreter")`: This annotation is used to map POST requests to the  `/code-interpreter`  path to the  `interpret`  method.

5.  `interpret`  method: This method does the following:
    -   Extracts a prompt from the request body.
    -   Extracts keywords from the prompt using the  `extractKeywords`  method.
    -   Retrieves a specific page from Notion using the  `getPage`  method (not shown in this code snippet).
    -   Searches the page content for the extracted keywords using the  `searchByKeywords`  method (not shown in this code snippet).
    -   Returns a list of strings that match the keywords.

6.  `extractKeywords`  method: This method extracts keywords from a string. The keywords are expected to be enclosed in square brackets. If the string does not contain square brackets or if the closing bracket comes before the opening bracket, the method returns an empty string.

- This part of the code defines a method  `searchByKeywords`  that searches a JSONObject for a given set of keywords and returns a list of strings that contain the keywords. Here's a breakdown of what it does:

1.  `searchByKeywords`  method: This method takes two parameters: a string of keywords and a JSONObject. It does the following:
    -   Creates an empty list  `perfectResponse`  to store the search results.
    -   Retrieves an array of blocks from the JSONObject.
    -   Iterates over each block in the array. For each block:
        -   Retrieves the block type.
        -   If the block type is "paragraph", it retrieves the text of the paragraph. If the paragraph has no text, it sets the text to an empty string.
        -   Checks if the text contains the  `<markdown>`  or  `Tags`  strings. If it doesn't, it adds the text to the  `perfectResponse`  list.
    -   Prints each string in the  `perfectResponse`  list.
    -   Returns the  `perfectResponse`  list.

This method is used to search a Notion page (represented as a JSONObject) for a given set of keywords. It only considers blocks of type "paragraph" and ignores blocks that contain the  `<markdown>`  or  `Tags`  strings. The search is case-sensitive and exact, meaning it won't match partial words or ignore case differences.

- The two methods that are being used.

1.  `getGptResponse`  method: This method sends a chat completion request to the GPT-3 API and returns the content of the first choice from the response. Here's how it works:
    -   It takes two parameters: a prompt string and an  `ArkRequest`  object.
    -   It calls the  `chatCompletion`  method of the  `gpt3Endpoint`  object, passing the prompt, a hardcoded string "planner", and the  `ArkRequest`  object. This sends a chat completion request to the GPT-3 API.
    -   It calls  `get`  on the returned  `EdgeChain`  object to get the response from the GPT-3 API.
    -   It retrieves the first choice from the response and gets its message content.
    -   It returns the message content.

2.  `getPage`  method: This method retrieves a specific page from Notion. Here's how it works:
    -   It takes a page ID as a parameter.
    -   It creates a  `RestTemplate`  object, which is a Spring class for making HTTP requests.
    -   It creates an  `HttpHeaders`  object and sets the authorization and Notion-Version headers.
    -   It creates an  `HttpEntity`  object with the headers.
    -   It sends a GET request to the Notion API to retrieve the children of the block with the given page ID. The  `exchange`  method of the  `RestTemplate`  object is used to send the request.
    -   It gets the response body as a string and creates a  `JSONObject`  from it.
    -   It returns the  `JSONObject`.

The  `getPage`  method is used in the  `interpret`  method to retrieve a specific page from Notion, which is then searched for the extracted keywords.

```
package com.edgechain;

import com.edgechain.lib.rxjava.retry.impl.ExponentialDelay;
import com.edgechain.lib.rxjava.transformer.observable.EdgeChain;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.json.JSONArray;
import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.edgechain.lib.endpoint.impl.OpenAiEndpoint;
import com.edgechain.lib.jsonnet.JsonnetLoader;
import com.edgechain.lib.jsonnet.impl.FileJsonnetLoader;
import com.edgechain.lib.request.ArkRequest;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.TimeUnit;

import static com.edgechain.lib.constants.EndpointConstants.OPENAI_CHAT_COMPLETION_API;

@SpringBootApplication
public class Notion {

    private static final String OPENAI_AUTH_KEY = "";

    private static OpenAiEndpoint gpt3Endpoint;
    private static final JsonnetLoader loader = new FileJsonnetLoader("./code-interpreter.jsonnet");
    private static final String NOTION_API_KEY = "secret_pfwhxxug0io51HA1uOle3dcbqlC6jJ6GQtMHloI4e8P";

    public static void main(String[] args) {
        System.setProperty("server.port", "8080");
        new SpringApplicationBuilder(Notion.class).run(args);

        gpt3Endpoint = new OpenAiEndpoint(
                OPENAI_CHAT_COMPLETION_API,
                OPENAI_AUTH_KEY,
                "gpt-3.5-turbo",
                "user",
                0.7,
                new ExponentialDelay(3, 5, 2, TimeUnit.SECONDS)
        );
    }

    @RestController
    @RequestMapping("/v1/examples")
    public class Interpreter {

        Logger logger = LoggerFactory.getLogger(getClass());

        @PostMapping("/code-interpreter")
        public List<String> interpret(ArkRequest arkRequest) throws JsonProcessingException {

            String prompt = arkRequest.getBody().getString("prompt");
            String extractKeywords = extractKeywords(prompt);
            System.out.println("extract keywords: " + extractKeywords);
            String pageId = "a176fa2b26fb4541831aec642f85465f";
            JSONObject pageContent = getPage(pageId);
            return searchByKeywords(extractKeywords, pageContent);
        }

        private String extractKeywords(String prompt) {
            int start = prompt.indexOf("[");
            int end = prompt.indexOf("]");

            if (start != -1 && end != -1 && end > start) {
                return prompt.substring(start + 1, end);
            } else {
                // Handle the case where the prompt does not contain the expected format
                // This could be returning a default value, throwing an exception, etc.
                return ""; // Returning an empty string as default
            }
        }
       
        private List<String> searchByKeywords(String keywords, JSONObject jsonObject) {
            List<String> perfectResponse = new ArrayList<>();
            JSONArray blocks = jsonObject.getJSONArray("results");
            System.out.println("json array length " + blocks.length());

            for (int i = 0; i < blocks.length(); i++) {
                JSONObject block = blocks.getJSONObject(i);
                String type = block.getString("type");

                String text;
                if ("paragraph".equals(type)) {
                    JSONArray textArray = block.getJSONObject("paragraph").getJSONArray("text");
                    if (!textArray.isEmpty()) {
                        text = textArray.getJSONObject(0).getJSONObject("text").getString("content");
                    } else {
                        text = "";
                    }

                    // need this logic to use keyword searching
                    if (!text.contains("<markdown>") && !text.contains("Tags")) {
                        perfectResponse.add(text);
                    }
                }
            }

            for (String res :
                    perfectResponse) {
                System.out.println(res);
                System.out.println();
            }
            return perfectResponse;
        }

        private String getGptResponse(String prompt, ArkRequest arkRequest) {
            return new EdgeChain<>(gpt3Endpoint.chatCompletion(prompt, "planner", arkRequest))
                    .get()
                    .getChoices()
                    .get(0)
                    .getMessage()
                    .getContent();
        }

        private JSONObject getPage(String pageId) throws JsonProcessingException {
            RestTemplate restTemplate = new RestTemplate();
            HttpHeaders headers = new HttpHeaders();
            headers.setBearerAuth(NOTION_API_KEY);
            headers.set("Notion-Version", "2021-05-11"); // Set the desired API version here
            HttpEntity<String> entity = new HttpEntity<>("parameters", headers);
            ResponseEntity<String> response = restTemplate.exchange(
                    "https://api.notion.com/v1/blocks/" + pageId + "/children",
                    HttpMethod.GET,
                    entity,
                    String.class);

            return new JSONObject(response.getBody());
        }
    }
}
```

## JSONnet for the Code 
Data is at the heart of nearly every aspect of technology. Whether you're configuring software, managing infrastructure, or exchanging information between systems, having a clean and efficient way to structure and manipulate data is essential. This is where JSONnet steps in as a valuable tool.

JSONnet is a versatile and human-friendly programming language designed for one primary purpose: simplifying the way we work with structured data. At its core, JSONnet takes the familiar concept of JSON (JavaScript Object Notation), a widely-used format for data interchange, and elevates it to a whole new level of flexibility and expressiveness. It has a declarative way of defining and describing the prompts and chains. 

**The JSONnet for the above code**
```
local preset = |||
                 You are a Notion Bot, which should assist with the user queries.For any queries other than Notion page, you should tell that you cannot answer it.
                    You should detect the language and the characters the user is writing in, and reply in the same character set and language.

	You must always follow this format:

                  User query: the query from the user
                  Thought: you should always describe your thoughts
                  Result: operation title potentially relevant for the query

                                
                Here are some examples:

                 User query: Can you get me all the impacts of Global Warming
                Thought: getImpacts can be used to get all impacts.
                Result: The rise in temperatures has led to extreme weather events, melting ice caps, and rising sea levels.

	User query: tell me about Nodejs
                Thought: Sorry, this page doesn't consist of any such data.
                Result: [NOT_APPLICABLE]
               |||;
# local keepContext = payload.keepContext;
# local context = if keepContext == "true" then payload.context else "";
local query = "User query:" + payload.query;
local prompt = std.join("\n", [query, preset]);
{
    "preset" : preset,
    "query": query,
    "prompt": prompt
}
```

1.  `local preset = ||| ... |||;`: This line defines a local variable named  `preset`  and assigns it a multi-line string value. The string contains instructions and examples for the Notion Bot. It provides guidance on how the bot should respond to user queries. The instructions state that the bot should assist with user queries related to Notion pages. If the query is not related to a Notion page, the bot should inform the user that it cannot answer the query. The instructions also mention that the bot should detect the language and characters the user is writing in and reply in the same character set and language. 

2.  `local query = "User query:" + payload.query;`: This line constructs a string variable named  `query`  by concatenating the string "User query:" with the value of  `payload.query`. The  `payload.query`  represents the user's query that is passed as input to the code.

3.  `local prompt = std.join("\n", [query, preset]);`: This line constructs a string variable named  `prompt`  by joining the  `query`  and  `preset`  strings with a newline character ("\n") in between. The  `std.join`  function is used to concatenate the strings.

4.  The code then returns an object with the  `preset`,  `query`, and  `prompt`  values. This object is likely used as input for further processing or communication with the Notion Bot.

Overall, this code sets up the instructions and format for the Notion Bot's responses based on the user's query. It ensures that the bot follows a consistent structure and provides relevant information or operations related to the query.
