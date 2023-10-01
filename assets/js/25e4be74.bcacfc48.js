"use strict";(self.webpackChunkalekhaweb=self.webpackChunkalekhaweb||[]).push([[8521],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=p(n),m=i,u=h["".concat(l,".").concat(m)]||h[m]||d[m]||r;return n?a.createElement(u,o(o({ref:t},c),{},{components:n})):a.createElement(u,o({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9310:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const r={slug:"Article-writer",title:"How to Build a Article Writer Prompt with EdgeChains",authors:{name:"Aditya Pandey",title:"Arakoo Core Team",url:"https://github.com/arakoodev",image_url:"https://avatars.githubusercontent.com/u/114422989"},tags:["Article Writer","Arakoo"]},o="How to: Build a Article Writer Prompt with EdgeChains !",s={permalink:"/blog/Article-writer",editUrl:"https://github.com/arakoodev/doc/tree/main/blog/2023-09-16-article-writer/index.md",source:"@site/blog/2023-09-16-article-writer/index.md",title:"How to Build a Article Writer Prompt with EdgeChains",description:"Generates an article for you using OpenAI API in Java and EdgeChain.",date:"2023-09-16T00:00:00.000Z",formattedDate:"September 16, 2023",tags:[{label:"Article Writer",permalink:"/blog/tags/article-writer"},{label:"Arakoo",permalink:"/blog/tags/arakoo"}],readingTime:10.735,hasTruncateMarker:!1,authors:[{name:"Aditya Pandey",title:"Arakoo Core Team",url:"https://github.com/arakoodev",image_url:"https://avatars.githubusercontent.com/u/114422989",imageURL:"https://avatars.githubusercontent.com/u/114422989"}],frontMatter:{slug:"Article-writer",title:"How to Build a Article Writer Prompt with EdgeChains",authors:{name:"Aditya Pandey",title:"Arakoo Core Team",url:"https://github.com/arakoodev",image_url:"https://avatars.githubusercontent.com/u/114422989",imageURL:"https://avatars.githubusercontent.com/u/114422989"},tags:["Article Writer","Arakoo"]},prevItem:{title:"Notion-Chatbot",permalink:"/blog/2023/10/01/Notion-Chatbot"},nextItem:{title:"How to Build Semantic Search using EdgeChains",permalink:"/blog/Semantic-Search"}},l={authorsImageUrls:[void 0]},p=[{value:"Pre Requisites",id:"pre-requisites",level:2},{value:"Configuration of the Database",id:"configuration-of-the-database",level:2},{value:"Explanation of the Code",id:"explanation-of-the-code",level:2},{value:"Article Writer Controller",id:"article-writer-controller",level:2},{value:"Postman Testing",id:"postman-testing",level:2},{value:"Full Working Code",id:"full-working-code",level:3},{value:"JSONnet for the Code",id:"jsonnet-for-the-code",level:2}],c={toc:p},h="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(h,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Generates an article for you using OpenAI API in Java and EdgeChain.")),(0,i.kt)("p",null,"Consider you have to write an article about Global Warming:\nNormally you have to find information about it in various websites, but this particular model helps you in generating the article by just providing the title of the article.\nEdgeChain is a streamlined solution for developing GenAI applications, offering simplicity through a single script file and jsonnet file setup. It emphasizes versioning for prompts, automatic parallelism across various processors, fault tolerance, and scalability, making it a robust choice for chain-of-thought applications with extensive API integration and data sets. While LangChain primarily focuses on a specific set of principles, EdgeChain takes a unique stance, emphasizing declarative prompt and chain orchestration as pivotal components of its architecture. To delve deeper into EdgeChain and explore its capabilities, you can refer to GitHub repository ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/arakoodev/edgechains#why-do-you-need-declarative-prompt--chain-orchestration-"},"https://github.com/arakoodev/edgechains#why-do-you-need-declarative-prompt--chain-orchestration-"),". This platform offers a comprehensive view of EdgeChains' vision and how it differentiates itself from LangChain."),(0,i.kt)("h2",{id:"pre-requisites"},"Pre Requisites"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"You need to make an account in OpenAI, Postgres so that from there you can retrieve the AUTH key, org id and etc. which are needed for the code.\n",(0,i.kt)("img",{alt:"OpenAI Landing Page",src:n(1446).Z,width:"1762",height:"960"})),(0,i.kt)("li",{parentName:"ol"},"You need to download the edgechains jar file from this url ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/arakoodev/EdgeChains/releases"},"https://github.com/arakoodev/EdgeChains/releases"),"."),(0,i.kt)("li",{parentName:"ol"},"Download the .java and .jsonnet file and put them in the same folder.  "),(0,i.kt)("li",{parentName:"ol"},"In the code according to the folder structure you have to write about the path.")),(0,i.kt)("h2",{id:"configuration-of-the-database"},"Configuration of the Database"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Go to the Supabase website (",(0,i.kt)("a",{parentName:"li",href:"https://supabase.io"},"https://supabase.io"),") and sign up for an account."),(0,i.kt)("li",{parentName:"ol"},"Create a new Project by clicking the \u201cNew Project\u201d button."),(0,i.kt)("li",{parentName:"ol"},"Configure your project settings including the project name, region, and the plan."),(0,i.kt)("li",{parentName:"ol"},"Once your project is created, you\u2019ll be directed to the project dashboard."),(0,i.kt)("li",{parentName:"ol"},"Click the \u201cCreate Database\u201d button to create a new PostgreSQL database."),(0,i.kt)("li",{parentName:"ol"},"After the database is created, you can access its credentials, including the database URL, API URL and service role key.\n",(0,i.kt)("img",{alt:"Supabase Landing Page",src:n(314).Z,width:"1736",height:"969"}))),(0,i.kt)("h2",{id:"explanation-of-the-code"},"Explanation of the Code"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Load the edgechains package.  ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Import the OPENAI_Chat_Completion API. Here we have to import the static constants from other classes. These classes are  of OpenAI.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Import the Spring Framework related classes and annotations.  ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The code relies on external libraries and dependencies, such as  ",(0,i.kt)("inlineCode",{parentName:"p"},"com.edgechain.lib"),"  and  ",(0,i.kt)("inlineCode",{parentName:"p"},"io.reactivex.rxjava3"),".These dependencies provide additional functionality and utilities for the code.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Classes such as   ",(0,i.kt)("inlineCode",{parentName:"p"},"OpenAiEndpoint"),",  ",(0,i.kt)("inlineCode",{parentName:"p"},"WikiEndpoint"),",  ",(0,i.kt)("inlineCode",{parentName:"p"},"ArkRequest"),", and  ",(0,i.kt)("inlineCode",{parentName:"p"},"CompletionRequest")," are used to interact with specific endpoints or APIs, such as OpenAI and Wikipedia.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"RxJava and Retry Logic: The code uses RxJava and includes classes like  ",(0,i.kt)("inlineCode",{parentName:"p"},"ExponentialDelay"),"  and  ",(0,i.kt)("inlineCode",{parentName:"p"},"EdgeChain"),".These are used for implementing retry logic and handling asynchronous operations.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The code includes a constant  ",(0,i.kt)("inlineCode",{parentName:"p"},"OPENAI_CHAT_COMPLETION_API"),", which represents the endpoint for OpenAI chat completion.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"A class named  ",(0,i.kt)("inlineCode",{parentName:"p"},"WikiExample"),"  is present that includes several static variables and a  ",(0,i.kt)("inlineCode",{parentName:"p"},"JsonnetLoader"),"  instance. Here's an explanation of the that:")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Static Variables:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"OPENAI_AUTH_KEY"),": This variable represents the OpenAI authentication key. It is a string that should be replaced with your actual OpenAI authentication key."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"OPENAI_ORG_ID"),": This variable represents the OpenAI organization ID. It is a string that should be replaced with your actual OpenAI organization ID."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"gpt3Endpoint"),": This variable is an instance of the  ",(0,i.kt)("inlineCode",{parentName:"li"},"OpenAiEndpoint"),"  class, which is used to communicate with OpenAI services."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"gpt3StreamEndpoint"),": This variable is another instance of the  ",(0,i.kt)("inlineCode",{parentName:"li"},"OpenAiEndpoint"),"  class, which is likely used for streaming communication with OpenAI services."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"wikiEndpoint"),": This variable is an instance of the  ",(0,i.kt)("inlineCode",{parentName:"li"},"WikiEndpoint"),"  class, which is used to communicate with the Wikipedia API."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"JsonnetLoader"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"-   `loader`: This variable is an instance of the  `JsonnetLoader`  class, which is used to load and process Jsonnet files.\n-   `FileJsonnetLoader`: This class is a specific implementation of the  `JsonnetLoader`  interface that loads Jsonnet files from the file system.\n-   The  `FileJsonnetLoader`  constructor takes three arguments:\n    -   The first argument represents the probability (in percentage) of executing the first file (`./wiki1.jsonnet`). In this case, there is a 70% chance of executing  `./wiki1.jsonnet`.\n    -   The second argument is the path to the first Jsonnet file (`./wiki1.jsonnet`).\n    -   The third argument is the path to the second Jsonnet file (`./wiki2.jsonnet`).\n")),(0,i.kt)("p",null,"The purpose of this code is to create an instance of  ",(0,i.kt)("inlineCode",{parentName:"p"},"FileJsonnetLoader"),"  that loads Jsonnet files with a certain probability. Depending on the probability, either  ",(0,i.kt)("inlineCode",{parentName:"p"},"./wiki1.jsonnet"),"  or  ",(0,i.kt)("inlineCode",{parentName:"p"},"./wiki2.jsonnet"),"  will be executed.\n",(0,i.kt)("img",{alt:"Main Method Page",src:n(1844).Z,width:"1920",height:"1080"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The main method is the entry point of the application.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"}," Setting Server Port:\n")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'System.setProperty("server.port", "8080")'),": This line sets the server port to 8080. It configures the application to listen on port 8080 for incoming requests."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"Configuring Properties:\n")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Properties properties = new Properties()"),": This line creates a new instance of the  ",(0,i.kt)("inlineCode",{parentName:"li"},"Properties"),"  class, which is used to store key-value pairs of configuration properties."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'properties.setProperty("cors.origins", "http://localhost:4200")'),": This line sets the CORS (Cross-Origin Resource Sharing) origins property to allow requests from  ",(0,i.kt)("inlineCode",{parentName:"li"},"http://localhost:4200"),". CORS is used to control access to resources from different origins."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"Configuring JPA and Hibernate Properties:\n")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'properties.setProperty("spring.jpa.show-sql", "true")'),": This line sets the property to show SQL queries executed by JPA (Java Persistence API)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'properties.setProperty("spring.jpa.properties.hibernate.format_sql", "true")'),": This line sets the property to format the SQL queries executed by Hibernate."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"Configuring PostgreSQL Database Properties:\n")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'properties.setProperty("postgres.db.host", "jdbc:postgresql://db.rkkbllhnexkzjyxhgexm.supabase.co:5432/postgres")'),": This line sets the PostgreSQL database host URL."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'properties.setProperty("postgres.db.username", "postgres")'),": This line sets the username for the PostgreSQL database."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'properties.setProperty("postgres.db.password", "jtGhg7?JLhUF$fK")'),": This line sets the password for the PostgreSQL database."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"Starting the Spring Boot Application:\n")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"new SpringApplicationBuilder(WikiExample.class).properties(properties).run(args)"),": This line creates a new instance of  ",(0,i.kt)("inlineCode",{parentName:"li"},"SpringApplicationBuilder"),"  with the  ",(0,i.kt)("inlineCode",{parentName:"li"},"WikiExample"),"  class as the main application class. It sets the configured properties and runs the Spring Boot application."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"Initializing Endpoints:\n-   `wikiEndpoint = new WikiEndpoint()`: This line creates an instance of the  `WikiEndpoint`  class, which is used to communicate with the Wikipedia API.\n-   `gpt3Endpoint = new OpenAiEndpoint(...)`: This line creates an instance of the  `OpenAiEndpoint`  class, which is used to communicate with OpenAI services. It sets various parameters such as the OpenAI chat completion API, authentication key, organization ID, model, temperature, and delay.\n-   `gpt3StreamEndpoint = new OpenAiEndpoint(...)`: This line creates another instance of the  `OpenAiEndpoint`  class, which is likely used for streaming communication with OpenAI services. It sets similar parameters as the  `gpt3Endpoint`, but with an additional flag for streaming.\n")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"Endpoints",src:n(4221).Z,width:"1463",height:"476"})))),(0,i.kt)("h2",{id:"article-writer-controller"},"Article Writer Controller"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"It is a ",(0,i.kt)("inlineCode",{parentName:"li"},"RestController"),"  class named  ",(0,i.kt)("inlineCode",{parentName:"li"},"ArticleController"),"  that handles HTTP GET requests for the  ",(0,i.kt)("inlineCode",{parentName:"li"},"/article"),"  endpoint. Here's an explanation of the code within the class:")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"@RestController"),"  Annotation:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"This annotation is used to indicate that the class is a REST controller, which means it handles HTTP requests and returns the response in a RESTful manner."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},'@GetMapping("/article")'),"  Annotation:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"This annotation is used to map the HTTP GET requests with the  ",(0,i.kt)("inlineCode",{parentName:"li"},"/article"),"  endpoint to the  ",(0,i.kt)("inlineCode",{parentName:"li"},"generateArticle"),"  method."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"generateArticle"),"  Method:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"This method is responsible for generating an article based on the provided query parameter."),(0,i.kt)("li",{parentName:"ul"},"It takes an  ",(0,i.kt)("inlineCode",{parentName:"li"},"ArkRequest"),"  object as a parameter, which is likely a custom request object that contains query parameters."),(0,i.kt)("li",{parentName:"ul"},"The method throws an  ",(0,i.kt)("inlineCode",{parentName:"li"},"Exception"),"  if any error occurs during the generation process."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Generating the Prompt:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},'The method prepares a prompt for the article generation by concatenating the string "Write an article about " with the value of the  ',(0,i.kt)("inlineCode",{parentName:"li"},"title"),"  query parameter from the  ",(0,i.kt)("inlineCode",{parentName:"li"},"arkRequest"),"  object."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Sending a Request to the OpenAI API:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The method uses the  ",(0,i.kt)("inlineCode",{parentName:"li"},"gpt3Endpoint"),"  instance (which is an instance of the  ",(0,i.kt)("inlineCode",{parentName:"li"},"OpenAiEndpoint"),"  class) to send a request to the OpenAI API for generating the article."),(0,i.kt)("li",{parentName:"ul"},"It uses the  ",(0,i.kt)("inlineCode",{parentName:"li"},"chatCompletion"),"  method of the  ",(0,i.kt)("inlineCode",{parentName:"li"},"gpt3Endpoint"),"  to perform the chat completion."),(0,i.kt)("li",{parentName:"ul"},"The  ",(0,i.kt)("inlineCode",{parentName:"li"},"chatCompletion"),'  method takes the prompt, a chat model name ("React-Chain"), and the  ',(0,i.kt)("inlineCode",{parentName:"li"},"arkRequest"),"  object as parameters."),(0,i.kt)("li",{parentName:"ul"},"The generated article is stored in the  ",(0,i.kt)("inlineCode",{parentName:"li"},"gptre"),"  variable."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Returning the Generated Article:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The method returns the generated article as a response to the HTTP GET request.")))),(0,i.kt)("h2",{id:"postman-testing"},"Postman Testing"),(0,i.kt)("p",null,"After all this we will be using the postman to test and give the requests for the same in the following manner:\n",(0,i.kt)("strong",{parentName:"p"},"Title")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Description: Perform a query to retrieve results from Open AI."),(0,i.kt)("li",{parentName:"ul"},"Method: POST "),(0,i.kt)("li",{parentName:"ul"},"URL:",(0,i.kt)("a",{parentName:"li",href:"http://localhost:8080/pinecone/upsert?namespace=machine-learning"},"localhost:8080/article?title=Global warming")," "),(0,i.kt)("li",{parentName:"ul"},"Headers: Content-Type: application/json"),(0,i.kt)("li",{parentName:"ul"},"Body: raw")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Postman Page",src:n(5714).Z,width:"1920",height:"1080"})),(0,i.kt)("h3",{id:"full-working-code"},"Full Working Code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'package com.edgechain;\n\nimport com.edgechain.lib.endpoint.impl.OpenAiEndpoint;\nimport com.edgechain.lib.endpoint.impl.WikiEndpoint;\nimport com.edgechain.lib.jsonnet.JsonnetArgs;\nimport com.edgechain.lib.jsonnet.JsonnetLoader;\nimport com.edgechain.lib.jsonnet.enums.DataType;\nimport com.edgechain.lib.jsonnet.impl.FileJsonnetLoader;\nimport com.edgechain.lib.openai.response.ChatCompletionResponse;\nimport com.edgechain.lib.request.ArkRequest;\nimport com.edgechain.lib.response.ArkResponse;\nimport com.edgechain.lib.rxjava.retry.impl.ExponentialDelay;\nimport com.edgechain.lib.rxjava.transformer.observable.EdgeChain;\nimport com.edgechain.lib.openai.request.CompletionRequest;\n\n\nimport io.reactivex.rxjava3.core.Observable;\nimport java.util.*;\nimport java.util.concurrent.TimeUnit;\n\nimport com.edgechain.lib.wiki.response.WikiResponse;\nimport org.springframework.boot.autoconfigure.SpringBootApplication;\n\nimport org.springframework.boot.builder.SpringApplicationBuilder;\nimport org.springframework.web.bind.annotation.GetMapping;\nimport org.springframework.web.bind.annotation.RestController;\nimport org.springframework.web.bind.annotation.RequestParam;\n\nimport static com.edgechain.lib.constants.EndpointConstants.OPENAI_CHAT_COMPLETION_API;\n\n@SpringBootApplication\npublic class WikiExample {\n\n  private static final String OPENAI_AUTH_KEY = ""; // YOUR OPENAI AUTH KEY\n  private static final String OPENAI_ORG_ID = ""; // YOUR OPENAI ORG ID\n\n  /* Step 3: Create OpenAiEndpoint to communicate with OpenAiServices; */\n  private static OpenAiEndpoint gpt3Endpoint;\n\n  private static OpenAiEndpoint gpt3StreamEndpoint;\n\n  private static WikiEndpoint wikiEndpoint;\n\n  // There is a 70% chance that file1 is executed; 30% chance file2 is executed....\n  private final JsonnetLoader loader =\n      new FileJsonnetLoader(70, "./wiki1.jsonnet", "./wiki2.jsonnet");\n\n  public static void main(String[] args) {\n    System.setProperty("server.port", "8080");\n\n    // Optional, for logging SQL queries (shouldn\'t be used in prod)\n    Properties properties = new Properties();\n\n    // Adding Cors ==> You can configure multiple cors w.r.t your urls.;\n    properties.setProperty("cors.origins", "http://localhost:4200");\n\n    properties.setProperty("spring.jpa.show-sql", "true");\n    properties.setProperty("spring.jpa.properties.hibernate.format_sql", "true");\n\n    properties.setProperty("postgres.db.host", "");\n    properties.setProperty("postgres.db.username", "");\n    properties.setProperty("postgres.db.password", "");\n\n    new SpringApplicationBuilder(WikiExample.class).properties(properties).run(args);\n\n    wikiEndpoint = new WikiEndpoint();\n\n    gpt3Endpoint =\n        new OpenAiEndpoint(\n            OPENAI_CHAT_COMPLETION_API,\n            OPENAI_AUTH_KEY,\n            OPENAI_ORG_ID,\n            "gpt-3.5-turbo",\n            "user",\n            0.7,\n            new ExponentialDelay(3, 5, 2, TimeUnit.SECONDS));\n\n    gpt3StreamEndpoint =\n        new OpenAiEndpoint(\n            OPENAI_CHAT_COMPLETION_API,\n            OPENAI_AUTH_KEY,\n            OPENAI_ORG_ID,\n            "gpt-3.5-turbo",\n            "user",\n            0.7,\n            true,\n            new ExponentialDelay(3, 5, 2, TimeUnit.SECONDS));\n  }\n  @RestController\n  public class ArticleController {\n      @GetMapping("/article")\n      public String generateArticle(ArkRequest arkRequest) throws Exception {\n          // Prepare the prompt\n          String prompt = "Write an article about " + arkRequest.getQueryParam("title") + ".";\n\n          // Use the OpenAiService to send a request to the OpenAI API\n          // GPT-3 model is used with the provided prompt, max tokens is set to 500 for the article length\n          // and temperature is set to 0.7 which is a good balance between randomness and consistency\n          // Echo is set to true to include the prompt in the response\n          /*CompletionRequest completionRequest = CompletionRequest.builder()\n                  .prompt(prompt)\n                  .model("gpt-3.5-turbo")\n                  .maxTokens(500)\n                  .temperature(0.7)\n                  //.echo(true)\n                  .build();*/\n          String gptre=new EdgeChain<>(gpt3Endpoint.chatCompletion(prompt, "React-Chain", arkRequest))\n                  .get()\n                  .getChoices()\n                  .get(0)\n                  .getMessage()\n                  .getContent();\n          // Send the request\n          //ChatCompletionResponse response = gpt3Endpoint.chat(completionRequest);\n          //Observable<ChatCompletionResponse> response = gpt3Endpoint.chatCompletion(completionRequest.getPrompt(), "", arkRequest);\n\n          // Extract the generated text from the response\n          //String generatedArticle = response.getChoices().get(0).getGeneratedText();\n          //return response.blockingFirst().getChoices().get(0).toString();\n          return gptre;\n\n          // Return the generated article\n//          return generatedArticle;\n      }\n  }\n}\n')),(0,i.kt)("h2",{id:"jsonnet-for-the-code"},"JSONnet for the Code"),(0,i.kt)("p",null,"Data is at the heart of nearly every aspect of technology. Whether you're configuring software, managing infrastructure, or exchanging information between systems, having a clean and efficient way to structure and manipulate data is essential. This is where JSONnet steps in as a valuable tool."),(0,i.kt)("p",null,"JSONnet is a versatile and human-friendly programming language designed for one primary purpose: simplifying the way we work with structured data. At its core, JSONnet takes the familiar concept of JSON (JavaScript Object Notation), a widely-used format for data interchange, and elevates it to a whole new level of flexibility and expressiveness. It has a declarative way of defining and describing the prompts and chains.\n",(0,i.kt)("strong",{parentName:"p"},"The JSONnet for the above code")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'local keepMaxTokens = payload.keepMaxTokens;\nlocal maxTokens = if keepMaxTokens == "true" then payload.maxTokens else 5120;\n\nlocal preset = |||\n                 You are a Summary Generator Bot. For any question other than summarizing the data, you should tell that you cannot answer it.\n                    You should detect the language and the characters the user is writing in, and reply in the same character set and language.\n\n                    You should follow the following template while answering the user:\n\n                    ```\n                    1. <POINT_1> - <DESCRIPTION_1>\n                    2. <POINT_2> - <DESCRIPTION_2>\n                    ...\n                    ```\n                    Now, given the data, create a 5-bullet point summary of:\n               |||;\nlocal keepContext = payload.keepContext;\nlocal context = if keepContext == "true" then payload.context else "";\nlocal prompt = std.join("\\n", [preset, context]);\n{\n    "maxTokens": maxTokens,\n    "typeOfKeepContext": xtr.type(keepContext),\n    "preset" : preset,\n    "context": context,\n    "prompt": if(std.length(prompt) > xtr.parseNum(maxTokens)) then std.substr(prompt, 0, xtr.parseNum(maxTokens)) else prompt\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"KeepMaxTokens and maxTokens - These are used to determine the maximum number of the tokens that will be considered while generating the article."),(0,i.kt)("li",{parentName:"ul"},"preset- This is a string that contains the instructions. Here it tells the bot that it should only answer questions pertaining to giving the summary of the data and it should detect the language and character set of the user's input and respond in the same language and character set ,it kind of gives you the structure of its responses."),(0,i.kt)("li",{parentName:"ul"},"keepContext and context -Used to determine whether the bot should consider the context from the payload when generating the article"),(0,i.kt)("li",{parentName:"ul"},"prompt -It is here where the context and preset are combined to create the final prompt for the bot .If the length of the prompt exceeds the maximum number of the tokens, then the prompt is truncated to fit within the limit."),(0,i.kt)("li",{parentName:"ul"},"The Final object- This is the output of the script. It includes everything.")))}d.isMDXComponent=!0},4221:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Endpoint-ebc740ce5df943d111662586831a797e.png"},1844:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Main-efb93d4c314f9bedfcd2225cd0aede30.png"},1446:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/OpenAi-caf33559ffca936cf46002ddd9944813.png"},5714:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Postman-8d91b2af815b72e15badb21d66f66aca.png"},314:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Supabase-94eb4189ad361c945a583dba8be62efc.png"}}]);