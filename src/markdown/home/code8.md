```
Step 1: Load JSONnet File and Pass Arguments

JsonnetLoader loader = new FileJsonnetLoader("R:\\Github\\wiki.jsonnet")
    .put("keepMaxTokens", new JsonnetArgs(DataType.BOOLEAN, "true"))
    .put("maxTokens", new JsonnetArgs(DataType.INTEGER, "4096"));
Step 2: Extract Content from Wikipedia using the WikiEndpoint

WikiEndpoint wikiEndpoint = new WikiEndpoint();
Step 3: Communicate with OpenAiServices using the OpenAiEndpoint

OpenAiEndpoint openAiEndpoint = new OpenAiEndpoint(
    OPENAI_CHAT_COMPLETION_API,
    OPENAI_AUTH_KEY,
    "gpt-3.5-turbo",
    "user",
    0.7,
    stream,
    new ExponentialDelay(3, 5, 2, TimeUnit.SECONDS)
);
Step 4: Create the Prompt for OpenAiChatCompletion API

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
