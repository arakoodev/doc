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

//          loader.put("query", new JsonnetArgs(DataType.STRING, prompt))
//                  .put("gptResponse", new JsonnetArgs(DataType.STRING, ""))
//                  .loadOrReload();
//
//          String gptResponse = getGptResponse(prompt, arkRequest);
//          logger.info("gpt response {} ", gptResponse);
//
//          loader.put("gptResponse", new JsonnetArgs(DataType.STRING, gptResponse)).loadOrReload();
//
//          String gptResult = loader.get("prompt");
//          logger.info("Extracted result from GPT result {} ", gptResult);

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
