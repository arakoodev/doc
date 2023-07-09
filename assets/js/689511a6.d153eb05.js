"use strict";(self.webpackChunkalekhaweb=self.webpackChunkalekhaweb||[]).push([[9373],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,g=d["".concat(s,".").concat(m)]||d[m]||c[m]||r;return n?a.createElement(g,o(o({ref:t},u),{},{components:n})):a.createElement(g,o({ref:t},u))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},122:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const r={sidebar_position:1},o="EdgeChains",l={unversionedId:"intro",id:"intro",title:"EdgeChains",description:"EdgeChains is an powerful framework designed to simplify the creation of applications using large language models. It offers a comprehensive set of tools and functionalities that enable developers to leverage the capabilities of language models effectively.",source:"@site/doc/intro.md",sourceDirName:".",slug:"/intro",permalink:"/doc/intro",draft:!1,editUrl:"https://github.com/arakoodev/doc/tree/main/doc/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Getting Started",permalink:"/doc/category/getting-started"}},s={},p=[{value:"Key features and benefits",id:"key-features-and-benefits",level:3},{value:"Use Cases",id:"use-cases",level:3},{value:"Compatibility and Dependencies",id:"compatibility-and-dependencies",level:3},{value:"What you&#39;ll need",id:"what-youll-need",level:3},{value:'Contents <a name="contents"></a>',id:"contents-",level:2},{value:"Getting Started",id:"getting-started",level:3},{value:"Core concepts",id:"core-concepts",level:3},{value:"Configuration and Customization",id:"configuration-and-customization",level:3},{value:"Best Practices",id:"best-practices",level:3},{value:"API Reference",id:"api-reference",level:3},{value:"Frequently Asked Questions (FAQ)",id:"frequently-asked-questions-faq",level:3},{value:"Community and Support",id:"community-and-support",level:3},{value:"Contributing to EdgeChains",id:"contributing-to-edgechains",level:3}],u={toc:p},d="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"edgechains"},"EdgeChains"),(0,i.kt)("p",null,"EdgeChains is an powerful framework designed to simplify the creation of applications using large language models. It offers a comprehensive set of tools and functionalities that enable developers to leverage the capabilities of language models effectively."),(0,i.kt)("p",null,"Built specifically for Java, EdgeChains is an open-source chain-of-thought engineering framework for Large Language Models (LLMs) and OpenAI GPT. It focuses on enterprise-grade applications and scalability, addressing the complexities and challenges associated with working with OpenAI APIs. Edgechains also has a framework for building  Reasoning+Acting (shortly, ReAct) chains. By providing a streamlined workflow and addressing common challenges, EdgeChains empowers developers to build robust and scalable applications with ease."),(0,i.kt)("p",null,"We believe that traditional Generative AI frameworks primarily focus on the user interface and code library aspects of development. However, at EdgeChains, we approach development as a deployment and configuration management challenge. We understand that developers often encounter complexities and difficulties when working with OpenAI APIs, leading to code complexity and prompt-related issues. To overcome these challenges, we have built EdgeChains on top of jsonnet, a powerful library developed by Google based on the insights gained from managing 180 million lines of configuration code within Google's Borg infrastructure. Jsonnet is widely adopted for managing complex cloud and Kubernetes clusters."),(0,i.kt)("p",null,"With EdgeChains, you gain the following key advantages:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Versioning for Prompts"),": With EdgeChains, prompts are written in jsonnet, enabling easy versioning and differentiation between prompt variations.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Automatic Parallelism"),": EdgeChains automates the parallelization of LLM chains and chain-of-thought tasks across CPUs, GPUs, and TPUs using the Java Virtual Machine (JVM). This ensures efficient processing and optimal utilization of computing resources.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Fault Tolerance"),": Designed with robustness in mind, EdgeChains is fault-tolerant and can gracefully handle failures. It employs mechanisms to retry and back off, maintaining the resilience of your applications.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Scalability"),": EdgeChains is highly scalable, empowering you to develop chain-of-thought applications that can seamlessly handle a significant number of APIs, varied prompt lengths, and diverse vector datasets."))),(0,i.kt)("h3",{id:"key-features-and-benefits"},"Key features and benefits"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Simplified Integration"),": EdgeChains abstracts away the complexities of working with language models, providing a user-friendly interface for integration into applications. It handles the underlying infrastructure, allowing developers to focus on application logic.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Efficient Prompting"),": EdgeChains offers advanced prompt management and manipulation capabilities. Developers can easily define prompts, modify them, and control the interaction with language models to achieve desired outputs.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Scalability and Performance"),": EdgeChains is designed for scalability and performance. It can handle large-scale applications with ease, leveraging parallelism and distributed computing to achieve optimal throughput."))),(0,i.kt)("h3",{id:"use-cases"},"Use Cases"),(0,i.kt)("p",null,"EdgeChains finds applications in a wide range of scenarios, including, but not limited to:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Document Analysis and Summarization"),": Extracting key information from documents, generating summaries, and performing content analysis.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Chatbot Development"),": Building conversational agents that can interact with users, provide responses, and offer personalized experiences.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Code Analysis and Automation"),": Assisting developers in analyzing code, generating code snippets, and automating repetitive programming tasks."))),(0,i.kt)("h3",{id:"compatibility-and-dependencies"},"Compatibility and Dependencies"),(0,i.kt)("p",null,"EdgeChains is designed to be compatible with a wide range of programming languages and frameworks. It can seamlessly integrate into projects using Java, Python, JavaScript, and other popular languages. EdgeChains aims to keep dependencies minimal to ensure a smooth integration process. It leverages industry-standard libraries and frameworks to minimize the impact on your existing codebase. By reducing external dependencies, EdgeChains offers a lightweight solution that doesn't introduce unnecessary complexities or conflicts with your existing project dependencies."),(0,i.kt)("h3",{id:"what-youll-need"},"What you'll need"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://platform.openai.com/account/api-keys"},"OpenAI API Keys")),(0,i.kt)("li",{parentName:"ul"},"Java 11 or higher"),(0,i.kt)("li",{parentName:"ul"},"Any build tool (Maven, Gradle, etc)"),(0,i.kt)("li",{parentName:"ul"},"Idea for your chain.")),(0,i.kt)("h2",{id:"contents-"},"Contents ",(0,i.kt)("a",{name:"contents"})),(0,i.kt)("h3",{id:"getting-started"},(0,i.kt)("a",{parentName:"h3",href:"category/getting-started"},"Getting Started")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Installation Instructions"),(0,i.kt)("li",{parentName:"ul"},"System Requirements"),(0,i.kt)("li",{parentName:"ul"},"Basic Setup and Configuration"),(0,i.kt)("li",{parentName:"ul"},"Playgrounds")),(0,i.kt)("h3",{id:"core-concepts"},(0,i.kt)("a",{parentName:"h3",href:"Core_concepts"},"Core concepts")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Components and Interactions"),(0,i.kt)("li",{parentName:"ul"},"Workflow and Data Flow"),(0,i.kt)("li",{parentName:"ul"},"Schematic Representation")),(0,i.kt)("h3",{id:"configuration-and-customization"},(0,i.kt)("a",{parentName:"h3",href:"Config"},"Configuration and Customization")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Configuration Options and Parameters"),(0,i.kt)("li",{parentName:"ul"},"Customizing Language Chains"),(0,i.kt)("li",{parentName:"ul"},"Provide examples of customizations"),(0,i.kt)("li",{parentName:"ul"},"Customizing ReAct Chains"),(0,i.kt)("li",{parentName:"ul"},"Configuration Files and Formats")),(0,i.kt)("h3",{id:"best-practices"},"Best Practices"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Efficient Usage of EdgeChains"),(0,i.kt)("li",{parentName:"ul"},"Performance Optimization"),(0,i.kt)("li",{parentName:"ul"},"Scalability Considerations"),(0,i.kt)("li",{parentName:"ul"},"Error Handling and Resilience"),(0,i.kt)("li",{parentName:"ul"},"Testing and Debugging")),(0,i.kt)("h3",{id:"api-reference"},"API Reference"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Introduction to the EdgeChains API"),(0,i.kt)("li",{parentName:"ul"},"Endpoint Documentation"),(0,i.kt)("li",{parentName:"ul"},"Authentication and Authorization"),(0,i.kt)("li",{parentName:"ul"},"SDKs and Client Libraries")),(0,i.kt)("h3",{id:"frequently-asked-questions-faq"},"Frequently Asked Questions (FAQ)"),(0,i.kt)("h3",{id:"community-and-support"},(0,i.kt)("a",{parentName:"h3",href:"Community_and_Support"},"Community and Support")),(0,i.kt)("h3",{id:"contributing-to-edgechains"},(0,i.kt)("a",{parentName:"h3",href:"Contribute"},"Contributing to EdgeChains")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Reporting Issues"),(0,i.kt)("li",{parentName:"ul"},"Making Code Contributions"),(0,i.kt)("li",{parentName:"ul"},"Submitting Pull Requests"),(0,i.kt)("li",{parentName:"ul"},"Feature Requests and Suggestions"),(0,i.kt)("li",{parentName:"ul"},"Engaging with the Community")))}c.isMDXComponent=!0}}]);