"use strict";(self.webpackChunkalekhaweb=self.webpackChunkalekhaweb||[]).push([[6947],{3905:(e,t,n)=>{n.d(t,{Zo:()=>g,kt:()=>u});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},g=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},l="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,g=p(e,["components","mdxType","originalType","parentName"]),l=c(n),d=o,u=l["".concat(s,".").concat(d)]||l[d]||m[d]||i;return n?r.createElement(u,a(a({ref:t},g),{},{components:n})):r.createElement(u,a({ref:t},g))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[l]="string"==typeof e?e:o,a[1]=p;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3825:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const i={},a=void 0,p={permalink:"/blog/2023/10/01/Notion-Chatbot",editUrl:"https://github.com/arakoodev/doc/tree/main/blog/2023-10-01-Notion-Chatbot/index.md",source:"@site/blog/2023-10-01-Notion-Chatbot/index.md",title:"Notion-Chatbot",description:"",date:"2023-10-01T00:00:00.000Z",formattedDate:"October 1, 2023",tags:[],readingTime:2.125,hasTruncateMarker:!1,authors:[],frontMatter:{},nextItem:{title:"How to Build a Article Writer Prompt with EdgeChains",permalink:"/blog/Article-writer"}},s={authorsImageUrls:[]},c=[],g={toc:c},l="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(l,(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'package com.edgechain;\n\nimport com.edgechain.lib.rxjava.retry.impl.ExponentialDelay;\nimport com.edgechain.lib.rxjava.transformer.observable.EdgeChain;\nimport com.fasterxml.jackson.core.JsonProcessingException;\nimport org.json.JSONArray;\nimport org.json.JSONObject;\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\nimport org.springframework.boot.autoconfigure.SpringBootApplication;\nimport org.springframework.boot.builder.SpringApplicationBuilder;\nimport org.springframework.http.*;\nimport org.springframework.web.bind.annotation.PostMapping;\nimport org.springframework.web.bind.annotation.RequestMapping;\nimport org.springframework.web.bind.annotation.RestController;\nimport org.springframework.web.client.RestTemplate;\n\nimport com.edgechain.lib.endpoint.impl.OpenAiEndpoint;\nimport com.edgechain.lib.jsonnet.JsonnetLoader;\nimport com.edgechain.lib.jsonnet.impl.FileJsonnetLoader;\nimport com.edgechain.lib.request.ArkRequest;\n\nimport java.util.ArrayList;\nimport java.util.List;\nimport java.util.concurrent.TimeUnit;\n\nimport static com.edgechain.lib.constants.EndpointConstants.OPENAI_CHAT_COMPLETION_API;\n\n@SpringBootApplication\npublic class Notion {\n\n    private static final String OPENAI_AUTH_KEY = "";\n\n    private static OpenAiEndpoint gpt3Endpoint;\n    private static final JsonnetLoader loader = new FileJsonnetLoader("./code-interpreter.jsonnet");\n    private static final String NOTION_API_KEY = "secret_pfwhxxug0io51HA1uOle3dcbqlC6jJ6GQtMHloI4e8P";\n\n    public static void main(String[] args) {\n        System.setProperty("server.port", "8080");\n        new SpringApplicationBuilder(Notion.class).run(args);\n\n        gpt3Endpoint = new OpenAiEndpoint(\n                OPENAI_CHAT_COMPLETION_API,\n                OPENAI_AUTH_KEY,\n                "gpt-3.5-turbo",\n                "user",\n                0.7,\n                new ExponentialDelay(3, 5, 2, TimeUnit.SECONDS)\n        );\n    }\n\n    @RestController\n    @RequestMapping("/v1/examples")\n    public class Interpreter {\n\n        Logger logger = LoggerFactory.getLogger(getClass());\n\n        @PostMapping("/code-interpreter")\n        public List<String> interpret(ArkRequest arkRequest) throws JsonProcessingException {\n\n            String prompt = arkRequest.getBody().getString("prompt");\n            String extractKeywords = extractKeywords(prompt);\n            System.out.println("extract keywords: " + extractKeywords);\n\n//          loader.put("query", new JsonnetArgs(DataType.STRING, prompt))\n//                  .put("gptResponse", new JsonnetArgs(DataType.STRING, ""))\n//                  .loadOrReload();\n//\n//          String gptResponse = getGptResponse(prompt, arkRequest);\n//          logger.info("gpt response {} ", gptResponse);\n//\n//          loader.put("gptResponse", new JsonnetArgs(DataType.STRING, gptResponse)).loadOrReload();\n//\n//          String gptResult = loader.get("prompt");\n//          logger.info("Extracted result from GPT result {} ", gptResult);\n\n            String pageId = "a176fa2b26fb4541831aec642f85465f";\n            JSONObject pageContent = getPage(pageId);\n            return searchByKeywords(extractKeywords, pageContent);\n        }\n\n        private String extractKeywords(String prompt) {\n            int start = prompt.indexOf("[");\n            int end = prompt.indexOf("]");\n\n            if (start != -1 && end != -1 && end > start) {\n                return prompt.substring(start + 1, end);\n            } else {\n                // Handle the case where the prompt does not contain the expected format\n                // This could be returning a default value, throwing an exception, etc.\n                return ""; // Returning an empty string as default\n            }\n        }\n       \n        private List<String> searchByKeywords(String keywords, JSONObject jsonObject) {\n            List<String> perfectResponse = new ArrayList<>();\n            JSONArray blocks = jsonObject.getJSONArray("results");\n            System.out.println("json array length " + blocks.length());\n\n            for (int i = 0; i < blocks.length(); i++) {\n                JSONObject block = blocks.getJSONObject(i);\n                String type = block.getString("type");\n\n                String text;\n                if ("paragraph".equals(type)) {\n                    JSONArray textArray = block.getJSONObject("paragraph").getJSONArray("text");\n                    if (!textArray.isEmpty()) {\n                        text = textArray.getJSONObject(0).getJSONObject("text").getString("content");\n                    } else {\n                        text = "";\n                    }\n\n                    // need this logic to use keyword searching\n                    if (!text.contains("<markdown>") && !text.contains("Tags")) {\n                        perfectResponse.add(text);\n                    }\n                }\n            }\n\n            for (String res :\n                    perfectResponse) {\n                System.out.println(res);\n                System.out.println();\n            }\n            return perfectResponse;\n        }\n\n        private String getGptResponse(String prompt, ArkRequest arkRequest) {\n            return new EdgeChain<>(gpt3Endpoint.chatCompletion(prompt, "planner", arkRequest))\n                    .get()\n                    .getChoices()\n                    .get(0)\n                    .getMessage()\n                    .getContent();\n        }\n\n        private JSONObject getPage(String pageId) throws JsonProcessingException {\n            RestTemplate restTemplate = new RestTemplate();\n            HttpHeaders headers = new HttpHeaders();\n            headers.setBearerAuth(NOTION_API_KEY);\n            headers.set("Notion-Version", "2021-05-11"); // Set the desired API version here\n            HttpEntity<String> entity = new HttpEntity<>("parameters", headers);\n            ResponseEntity<String> response = restTemplate.exchange(\n                    "https://api.notion.com/v1/blocks/" + pageId + "/children",\n                    HttpMethod.GET,\n                    entity,\n                    String.class);\n\n            return new JSONObject(response.getBody());\n        }\n    }\n}\n')))}m.isMDXComponent=!0}}]);