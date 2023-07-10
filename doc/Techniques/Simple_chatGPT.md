# Build your own simple chatGPT

The "Simple ChatGPT" implementation is a basic chatbot powered by EdgeChains. It utilizes the capabilities of ChatGPT to generate responses based on user prompts while maintaining a history of the conversation. This allows the chatbot to provide contextual responses by considering the previous messages, creating a more engaging and interactive chat experience.

To run the "Simple ChatGPT" implementation, please follow these steps:

1. Make sure you have the `edgechain-app-VERSION_NUMBER.jar`and the `flyfly.jar` files available.
If you haven't downloaded them yet, please refer to the [Installation Guide](/doc/Getting%20started/Installation.md)  for instructions. Additionally, the [Quickstart](/doc/Getting%20started/Quickstart.md) guide provides a helpful overview and easy setup for your project.

2. Open your terminal or command prompt and navigate to the directory where the JAR files are located.

> **Note:** Remember to configure the OpenAI key to ensure the chatbot functions correctly.

The following sample code serves as an excellent reference point to get started. Feel free to experiment, customize, and bring your unique touch to the implementation. 

<details>
<summary>Click here for a sample starter code</summary>

```java
package com.edgechain;

import com.edgechain.lib.configuration.RedisEnv;
import com.edgechain.lib.endpoint.impl.OpenAiEndpoint;
import com.edgechain.lib.openai.client.OpenAiClient;
import com.edgechain.lib.openai.request.ChatCompletionRequest;
import com.edgechain.lib.openai.request.ChatMessage;
import com.edgechain.lib.openai.response.ChatCompletionResponse;
import com.edgechain.lib.rxjava.retry.impl.ExponentialDelay;
import com.edgechain.lib.rxjava.transformer.observable.EdgeChain;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.TimeUnit;

import static com.edgechain.lib.constants.EndpointConstants.OPENAI_CHAT_COMPLETION_API;

@SpringBootApplication
public class GptConversation {

    private final String OPENAI_AUTH_KEY = ""; // YOUR OPENAI KEY

    public static void main(String[] args) {
        System.setProperty("server.port", "8080");
        SpringApplication.run(GptConversation.class, args);
    }

    @Bean
    public RedisEnv redisEnv() {
        RedisEnv redisEnv = new RedisEnv();
        redisEnv.setUrl("");
        redisEnv.setPort(11837);
        redisEnv.setUsername("default");
        redisEnv.setPassword("");
        redisEnv.setTtl(3600); // Configuring ttl for HistoryContext;
        return redisEnv;
    }


    @RestController
    @RequestMapping("/v1/examples")
    public class Conversation {
        private List<ChatMessage> messages;

        public Conversation() {
            messages = new ArrayList<>();
            messages.add(new ChatMessage("system", "You are a helpful, polite, old English assistant. Answer the user prompt with a bit of humor."));
        }

        @PostMapping("/gpt/ask")
        public ResponseEntity<String> ask(@RequestBody String prompt) {
            updateMessageList("user", prompt);
            String model = "gpt-3.5-turbo";
            ChatCompletionRequest chatCompletionRequest = new ChatCompletionRequest(
                    model,
                    messages,
                    0.7,
                    false
            );
            OpenAiClient openAiClient = new OpenAiClient();
            OpenAiEndpoint chatEndpoint =
                    new OpenAiEndpoint(
                            OPENAI_CHAT_COMPLETION_API,
                            OPENAI_AUTH_KEY,
                            model,
                            "user",
                            0.7,
                            false,
                            new ExponentialDelay(3, 3, 2, TimeUnit.SECONDS));
            EdgeChain<ChatCompletionResponse> chatCompletion = openAiClient.createChatCompletion(chatEndpoint, chatCompletionRequest);
            String response = chatCompletion.get().getChoices().get(0).getMessage().getContent();

            updateMessageList("assistant", response);
            return new ResponseEntity<>(response, HttpStatus.OK);
        }

        private void updateMessageList(String role, String content) {
            messages.add(new ChatMessage(role, content));

            if(messages.size() > 20) {
                messages.remove(0);
            }
        }

    }
}
```

</details>

The above code for **Simple chatGPT** implementation follows these steps:

1. It utilizes a list of `ChatMessages`, where a message with the system role is added in the constructor. This helps define the behavior of the assistant.

2. A `Post` mapping endpoint is created, which accepts a prompt from the user in the request body and generates a response accordingly.

3. The `ChatMessages list` is crucial for maintaining context, as the assistant's responses are stored in it.

4. To control the list's size, the implementation removes the first element if it exceeds 20 entries.

5. The endpoint can be accessed at `localhost:8080/v1/examples/gpt/ask`. 

> **Note:**  Please remember to replace `localhost:8080` with the appropriate host and port if you are running the chatbot on a different environment.

Feel free to modify the code and experiment with different prompts to engage in a conversation with the chatbot.


3. To start the chatbot, execute the following command:

   ```bash
   java -jar flyfly.jar jbang GptConversation.java edgechain-app-1.0.0.jar
    ```

This command will initiate the chatbot and prepare it to receive prompts from users.

4. To interact with the chatbot, you can utilize the provided curl command:

   ```bash
   curl --location 'localhost:8080/v1/examples/gpt/ask' \
--header 'Content-Type: application/json' \
--data '{
    "prompt": "Who was Nikola Tesla?"
}'
    ```
Simply replace the prompt with your own message to receive a response from the chatbot. The chatbot will provide a contextual message based on the conversation history.

Here's a sample response:

> Ah, Nikola Tesla, a name that sparks both curiosity and admiration! Allow me to enlighten you, for Mr. Tesla was a brilliant inventor and electrical engineer. He was known for his groundbreaking work in the field of electricity and magnetism, and his contributions to alternating current (AC) power systems. Some even consider him a true wizard of the electrical realm!


Feel free to experiment with different prompts and engage in a conversation with the **Simple ChatGPT** application.





