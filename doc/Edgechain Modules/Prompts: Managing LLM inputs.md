# Prompts: Managing LLM inputs
LLMs have weird APIs. Although inputting prompts to LLMs in natural language should feel intuitive, it takes quite a bit of tweaking of the prompt until you get the desired output from an LLM. This process is called prompt engineering.
Once you have a good prompt, you may want to use it as a template for other purposes. Thus, Edgechain provides you with so-called PromptTemplates, which help you construct prompts from multiple components.

With the help of Edgechains, we can utilise Wikipedia as a prompt for the OpenAiChatCompletion API.

  Creating the Prompt for OpenAiChatCompletion API
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
With this, you will be able to fetch content from Wikipedia, create the prompt using the JSONnet file, and then pass it to the OpenAiChatCompletion API. This will enable you to utilize the powerful capabilities of OpenAI's language models for processing Wikipedia content and generating the desired output.

For further details on the same example check out-
 [Getting Wikipedia Content](https://www.arakoo.com/doc/API%20documentation/Examples)
