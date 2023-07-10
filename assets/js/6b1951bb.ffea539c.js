"use strict";(self.webpackChunkalekhaweb=self.webpackChunkalekhaweb||[]).push([[1790],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>g});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(a),h=r,g=c["".concat(s,".").concat(h)]||c[h]||u[h]||i;return a?n.createElement(g,o(o({ref:t},d),{},{components:a})):n.createElement(g,o({ref:t},d))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},6984:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:3},o="Quickstart",l={unversionedId:"Getting started/Quickstart",id:"Getting started/Quickstart",title:"Quickstart",description:"Installation and Usage",source:"@site/doc/Getting started/Quickstart.md",sourceDirName:"Getting started",slug:"/Getting started/Quickstart",permalink:"/doc/Getting started/Quickstart",draft:!1,editUrl:"https://github.com/arakoodev/doc/tree/main/doc/Getting started/Quickstart.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/doc/Getting started/Installation"},next:{title:"Techniques",permalink:"/doc/category/techniques"}},s={},p=[{value:"Installation and Usage",id:"installation-and-usage",level:3},{value:"Downloading the release jar",id:"downloading-the-release-jar",level:3},{value:"Integrate EdgeChains into your code",id:"integrate-edgechains-into-your-code",level:3},{value:"Run EdgeChains",id:"run-edgechains",level:3},{value:"Understanding EdgeChains",id:"understanding-edgechains",level:2},{value:"Tutorial - Document-based Chatting with EdgeChains",id:"tutorial---document-based-chatting-with-edgechains",level:3},{value:"Playgrounds",id:"playgrounds",level:2}],d={toc:p},c="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"quickstart"},"Quickstart"),(0,r.kt)("h3",{id:"installation-and-usage"},"Installation and Usage"),(0,r.kt)("p",null,"Install edgechains following instructions outlined in the ",(0,r.kt)("a",{parentName:"p",href:"/doc/Getting%20started/Installation"},"Installation Guide"),". "),(0,r.kt)("h3",{id:"downloading-the-release-jar"},"Downloading the release jar"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note:")," EdgeChains requires ",(0,r.kt)("strong",{parentName:"p"},"Java version 17")," or above to run. Please make sure you have Java 17 installed on your system before proceeding. Also make sure to use a ",(0,r.kt)("strong",{parentName:"p"},"JBang")," project. ")),(0,r.kt)("p",null,"The release jars can be downloaded from the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/arakoodev/EdgeChains/releases"},"releases page"),". Download both flyfly.jar and edgechain-app-VERSION_NUMBER.jar. Both the jar files need to be compiled. "),(0,r.kt)("p",null,"Once downloaded, Follow these steps:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Clone the repository\n git clone https://github.com/arakoodev/EdgeChains.git && cd FlySpring\n\n# Compile flyfly.jar\ncd autoroute && mvn clean package -P gofly\ncd ../flyfly && mvn clean package -P gofly\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"flyfly.jar")," file will be generated in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Script")," folder on the root directory."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Compile edgechain-app-VERSION_NUMBER.jar\ncd edgechain-app && mvn clean package\ncd ../flyfly && mvn clean package -P gofly\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"edgechain-app-VERSION_NUMBER.jar")," file will be generated in the ",(0,r.kt)("inlineCode",{parentName:"p"},"FlySpring/edgechain-app/target")," directory."),(0,r.kt)("h3",{id:"integrate-edgechains-into-your-code"},"Integrate EdgeChains into your code"),(0,r.kt)("p",null,"You have the flexibility to explore and experiment with the base EdgeChains library, or seamlessly incorporate it into your existing codebase. To get started, simply follow the step-by-step instructions below:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Within your root project folder, which contains the ",(0,r.kt)("inlineCode",{parentName:"p"},"pom.xml"),"file, create a new directory named ",(0,r.kt)("inlineCode",{parentName:"p"},"dependencies"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Copy the ",(0,r.kt)("inlineCode",{parentName:"p"},"edgechain-app-VERSION_NUMBER.jar")," app file into the newly created ",(0,r.kt)("inlineCode",{parentName:"p"},"dependencies")," folder.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open your ",(0,r.kt)("inlineCode",{parentName:"p"},"pom.xml")," file and add the following XML code:"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>com.edgechain</groupId>\n    <artifactId>edgechain-app</artifactId>\n    <version>VERSION_NUMBER</version>\n    <scope>system</scope>\n    <systemPath>${basedir}/dependencies/edgechain-app-VERSION_NUMBER.jar</systemPath>\n</dependency>\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Execute the command")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mvn clean install\n")),(0,r.kt)("p",null,"This command will install the EdgeChains library into your local Maven repository, making it available for your project's use."),(0,r.kt)("h3",{id:"run-edgechains"},"Run EdgeChains"),(0,r.kt)("p",null,"Before running EdgeChains, Ensure that you have completed the following steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Generate an OpenAI key"),": In order to interact with the language models, EdgeChains requires a valid OpenAI key. You can generate an API key by following the instructions provided by OpenAI.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Create a Redis instance"),": EdgeChains uses Redis for data storage and caching. To proceed, you will need to create a Redis instance. You can create a free Redis instance on ",(0,r.kt)("a",{parentName:"p",href:"https://redislabs.com/"},"Redis Labs"),". Sign up for an account and create a new Redis instance for your EdgeChains application. After creating the Redis instance, ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"take note of the Redis host and port")),", as you will need them for the configuration."))),(0,r.kt)("p",null,"Once you have completed these steps, you are ready to run EdgeChains either as a service or as an application using jbang, like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd Examples\n# To start the application.\njava -jar flyfly.jar jbang EdgeChainApplication.java edgechain-app-1.0.0.jar\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"understanding-edgechains"},"Understanding EdgeChains"),(0,r.kt)("p",null,"At EdgeChains, we take a unique approach to development, viewing it as a deployment and configuration management challenge rather than solely focusing on the user interface and code library aspects. We understand the difficulties developers face when using OpenAI APIs, which can result in code complexity and prompt-related issues.  To overcome them, we have leveraged the power of jsonnet, the advanced library developed by Google based on their experience managing a vast amount of configuration code in the Borg infrastructure, which underlies their extensive cloud and Kubernetes clusters. And building on top of this, Edgechains gives you:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Versioning for Prompts"),": Prompts are written in jsonnet. Makes them easily versionable and diffable. "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Automatic parallelism"),": EdgeChains automatically parallelizes LLM chains & chain-of-thought tasks across CPUs, GPUs, and TPUs using the JVM."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Fault tolerance"),": EdgeChains is designed to be fault-tolerant, and can continue to retry & backoff even if some of the requests in the system fail."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Scalability"),": EdgeChains is designed to be scalable, and can be used to write your chain-of-thought applications on large number of APIs, prompt lengths and vector datasets.")),(0,r.kt)("p",null,"With EdgeChains, you can make your product live from day one, thanks to its robust features and seamless integration capabilities."),(0,r.kt)("h3",{id:"tutorial---document-based-chatting-with-edgechains"},"Tutorial - Document-based Chatting with EdgeChains"),(0,r.kt)("p",null,"Sometimes the best way to understand a complicated system is to start by understanding a basic example. The following example illustrates how to run your own Automata agent. The agent will be initialized with a trivial instruction, and will then attempt to write code to fulfill the instruction. The agent will then return the result of its attempt."),(0,r.kt)("p",null,'EdgeChains can be used to chat with a document. For example, you can chat with a document about the topic of "Bitcoin" or "Machine Learning" or any topic of your choice. For this, you can use the ',(0,r.kt)("inlineCode",{parentName:"p"},"EdgeChainService")," class. "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Fill in the ",(0,r.kt)("inlineCode",{parentName:"p"},"EdgeChainApplication.java")," file with the appropriate OpenAI and Redis credentials.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run the following command in the terminal:   "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"java -jar flyfly.jar jbang EdgeChainServiceApplication.java edgechain-app-1.0.0.jar\n")))),(0,r.kt)("p",null,"Now, you have to create a chat context, similar to a Chat Session in ChatGPT. Use the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl  -X POST \\\n'localhost:8080/v1/examples/historycontext' \\\n--header 'Accept: /' \\\n--header 'User-Agent: Thunder Client (https://www.thunderclient.com/)' \\\n--header 'Content-Type: application/json'\n--data-raw '{\n  \"maxTokens\": 4096\n}'\n")),(0,r.kt)("p",null,"You'll get a response like:"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Click to see the sample response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "historycontext-571b0c2c-8d07-452b-a1d8-96bd5f82234e",\n  "maxTokens": 4096,\n  "message": "Session is created. Now you can start conversational question and answer"\n}\n'))),(0,r.kt)("p",null,"You will receive a response containing an ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," for the created session. Make sure to save this ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," for future use."),(0,r.kt)("p",null,"Now, Upsert a document to EdgeChains using the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl  -X POST \\\n  'localhost:8080/v1/redis/openai/upsert' \\\n  --header 'Accept: */*' \\\n  --header 'User-Agent: Thunder Client (https://www.thunderclient.com)' \\\n  --form 'file=@./8946-Article Text-12474-1-2-20201228.pdf'\n")),(0,r.kt)("p",null,'Now, it\'s time to start chatting with the document by asking questions. For example, to inquire about the "transformer architecture," use the following command:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl --location 'localhost:8080/v1/examples/redis/openai/chat?query=What%20is%20the%20transformer%20architecture%3F&namespace=machine-learning&id=historycontext%3A50756d25-e7e4-4d7c-862c-f81bf3f8eea0' \\\n--header 'Content-Type: application/json'\n --data-raw '{\n    \"query\": \"What is the transformer architecture?\"\n}\n")),(0,r.kt)("p",null,"Please note that you should replace <HISTORY_CONTEXT_VALUE> in the last command with the actual value."),(0,r.kt)("p",null,"Here is a demo using the famous research paper ",(0,r.kt)("a",{parentName:"p",href:"https://arxiv.org/pdf/1706.03762.pdf"},(0,r.kt)("strong",{parentName:"a"},"Attention is all you need")),":"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://s12.gifyu.com/images/SQ6y0.gif",alt:"Demo"})),(0,r.kt)("h2",{id:"playgrounds"},"Playgrounds"),(0,r.kt)("p",null,"If you want to experiment with EdgeChains in a playground environment, you can access the online playgrounds provided by the EdgeChains team. Follow these steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Visit the ",(0,r.kt)("a",{parentName:"p",href:"https://example.com/playground-edgechains"},"EdgeChains Playground"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Start exploring the features and capabilities of EdgeChains in the playground environment."))))}u.isMDXComponent=!0}}]);