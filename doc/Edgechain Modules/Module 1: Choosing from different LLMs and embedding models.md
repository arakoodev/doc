---
sidebar_position: 5
---

# Models: Choosing from different LLMs and embedding models  

Currently, many different LLMs are emerging. Edgechain offers integrations to a wide range of models and a streamlined interface to all of them.
Edgechain differentiates between three types of models that differ in their inputs and outputs:

-LLMs take a string as an input (prompt) and output a string (completion).
  ```
  @PostMapping("/chat")
    public ArkResponse chat(ArkRequest arkRequest) {

      OpenAiEndpoint gpt4Endpoint =
              new OpenAiEndpoint(
                      OPENAI_CHAT_COMPLETION_API,
                      OPENAI_AUTH_KEY,
                      "gpt-3.5-turbo",
                      "user",
                      0.7,
                      new ExponentialDelay(3, 5, 2, TimeUnit.SECONDS));

      String prompt = "Arakoo has a cat. What animal is Arakoo;s pet";

      EdgeChain<ChatCompletionResponse> chatChain = 
              new EdgeChain<>(gpt4Endpoint.chatCompletion(prompt, "ChatChain", arkRequest));

      return chatChain.getArkResponse();
    }
  ```
  -Chat models are similar to LLMs. They take a list of chat messages as input and return a chat message.
  
  -Text embedding models take text input and return a list of floats (embeddings), which are the numerical 
  representation of the input text.  Embeddings help extract information from a text. 
  This information can then be later used, e.g., for calculating similarities between texts (e.g., movie summaries).
  ```
 @PostMapping("/embedding")
    public ArkResponse embedding(ArkRequest arkRequest) {

      OpenAiEndpoint ada002Embeddings =
              new OpenAiEndpoint(
                      OPENAI_EMBEDDINGS_API,
                      OPENAI_AUTH_KEY,
                      "",//orgId
                      "text-embedding-ada-002",
                      "user",
                      0.7,
                      false,
                      new ExponentialDelay(3, 3, 2, TimeUnit.SECONDS));;

      String input = "Alice has a parrot. What animal is Alice;s pet";

      EdgeChain<ChatCompletionResponse> embeddingChain =
              new EdgeChain<>(gpt4Endpoint.embeddings(input, "EmbeddingChianChain", arkRequest));

      return embeddingChain.getArkResponse();
    }
```
