"use strict";(self.webpackChunkalekhaweb=self.webpackChunkalekhaweb||[]).push([[3544],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),g=i,m=c["".concat(l,".").concat(g)]||c[g]||u[g]||o;return n?a.createElement(m,r(r({ref:t},d),{},{components:n})):a.createElement(m,r({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:i,r[1]=s;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},4635:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const o={sidebar_position:0},r="Introduction",s={unversionedId:"Getting started/Introduction",id:"Getting started/Introduction",title:"Introduction",description:"EdgeChains is an powerful framework designed to simplify the creation of applications using large language models. It offers a comprehensive set of tools and functionalities that enable developers to leverage the capabilities of language models effectively. It offers a range of capabilities that enable developers to create applications with the following features:",source:"@site/doc/Getting started/Introduction.md",sourceDirName:"Getting started",slug:"/Getting started/Introduction",permalink:"/doc/Getting started/Introduction",draft:!1,editUrl:"https://github.com/arakoodev/doc/tree/main/doc/Getting started/Introduction.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/doc/category/getting-started"},next:{title:"Installation",permalink:"/doc/Getting started/Installation"}},l={},p=[{value:"Get started",id:"get-started",level:2},{value:"Key features and benefits",id:"key-features-and-benefits",level:3},{value:"Use cases",id:"use-cases",level:3},{value:"Compatibility and Dependencies",id:"compatibility-and-dependencies",level:3},{value:"What you&#39;ll need",id:"what-youll-need",level:3},{value:"Additional resources",id:"additional-resources",level:3}],d={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"EdgeChains")," is an powerful framework designed to simplify the creation of applications using large language models. It offers a comprehensive set of tools and functionalities that enable developers to leverage the capabilities of language models effectively. It offers a range of capabilities that enable developers to create applications with the following features:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Data Integration"),": Seamlessly connect language models with other data sources, allowing for rich and comprehensive information processing."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Interactive Functionality"),": Enable language models to interact with their environment, making applications more dynamic and responsive."),(0,i.kt)("p",null,"Built ",(0,i.kt)("em",{parentName:"p"},"specifically for Java"),", EdgeChains is an open-source chain-of-thought engineering framework for Large Language Models (LLMs) and OpenAI GPT. It focuses on enterprise-grade applications and scalability, addressing the complexities and challenges associated with working with OpenAI APIs. "),(0,i.kt)("p",null,"Edgechains also has a framework for building Reasoning+Acting (shortly, ReAct) chains. By providing a streamlined workflow and addressing common challenges, EdgeChains empowers developers to build robust and scalable applications with ease."),(0,i.kt)("hr",null),(0,i.kt)("p",null,"We believe that traditional Generative AI frameworks primarily focus on the user interface and code library aspects of development. At EdgeChains, we approach development as a deployment and configuration management challenge. We understand that developers often encounter complexities and difficulties when working with OpenAI APIs, leading to code complexity and prompt-related issues. To overcome these challenges, we have built EdgeChains on top of ",(0,i.kt)("strong",{parentName:"p"},"Jsonnet"),", a powerful library developed by Google based on the insights gained from managing 180 million lines of configuration code within Google's Borg infrastructure. "),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Jsonnet is widely adopted for managing complex cloud and Kubernetes clusters.")),(0,i.kt)("p",null,"With EdgeChains, you gain the following key advantages:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Versioning for Prompts"),": With EdgeChains, prompts are written in jsonnet, enabling easy versioning and differentiation between prompt variations.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Automatic Parallelism"),": EdgeChains automates the parallelization of LLM chains and chain-of-thought tasks across CPUs, GPUs, and TPUs using the Java Virtual Machine (JVM). This ensures efficient processing and optimal utilization of computing resources.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Fault Tolerance"),": Designed with robustness in mind, EdgeChains is fault-tolerant and can gracefully handle failures. It employs mechanisms to retry and back off, maintaining the resilience of your applications.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Scalability"),": EdgeChains is highly scalable, empowering you to develop chain-of-thought applications that can seamlessly handle a significant number of APIs, varied prompt lengths, and diverse vector datasets."))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"get-started"},"Get started"),(0,i.kt)("p",null,"To get started with EdgeChains, follow the installation instructions outlined in the ",(0,i.kt)("a",{parentName:"p",href:"/doc/Getting%20started/Installation"},"Installation Guide"),". This guide will walk you through necessary steps to start building your own EdgeChains applications. For a quick start, you can also follow the instructions in ",(0,i.kt)("a",{parentName:"p",href:"/doc/Getting%20started/Quickstart"},"EdgeChains Quickstart"),"."),(0,i.kt)("h3",{id:"key-features-and-benefits"},"Key features and benefits"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Simplified Integration"),": EdgeChains abstracts away the complexities of working with language models, providing a user-friendly interface for integration into applications. It handles the underlying infrastructure, allowing developers to focus on application logic.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Efficient Prompting"),": EdgeChains offers advanced prompt management and manipulation capabilities. Developers can easily define prompts, modify them, and control the interaction with language models to achieve desired outputs.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Scalability and Performance"),": EdgeChains is designed for scalability and performance. It can handle large-scale applications with ease, leveraging parallelism and distributed computing to achieve optimal throughput."))),(0,i.kt)("h3",{id:"use-cases"},"Use cases"),(0,i.kt)("p",null,"EdgeChains finds applications in a wide range of scenarios, including, but not limited to:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Document Analysis and Summarization"),": Extracting key information from documents, generating summaries, and performing content analysis.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Chatbot Development"),": Building conversational agents that can interact with users, provide responses, and offer personalized experiences.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Code Analysis and Automation"),": Assisting developers in analyzing code, generating code snippets, and automating repetitive programming tasks."))),(0,i.kt)("h3",{id:"compatibility-and-dependencies"},"Compatibility and Dependencies"),(0,i.kt)("p",null,"EdgeChains is designed to be compatible with a wide range of programming languages and frameworks. It can seamlessly integrate into projects using Java, Python, JavaScript, and other popular languages. EdgeChains aims to keep dependencies minimal to ensure a smooth integration process. It leverages industry-standard libraries and frameworks to minimize the impact on your existing codebase. By reducing external dependencies, EdgeChains offers a lightweight solution that doesn't introduce unnecessary complexities or conflicts with your existing project dependencies."),(0,i.kt)("h3",{id:"what-youll-need"},"What you'll need"),(0,i.kt)("p",null,"To get started with EdgeChains, you'll need ",(0,i.kt)("a",{parentName:"p",href:"https://platform.openai.com/account/api-keys"},"OpenAI API Keys"),", ",(0,i.kt)("strong",{parentName:"p"},"Java 11")," or higher installed, and a clear ",(0,i.kt)("strong",{parentName:"p"},"idea of the chain")," you want to build."),(0,i.kt)("h3",{id:"additional-resources"},"Additional resources"),(0,i.kt)("p",null,"Join our vibrant community of developers, builders, and educators. Be inspired, learn, and connect with fellow enthusiasts in our thriving community."),(0,i.kt)("h3",null,(0,i.kt)("span",{style:{color:"#2e8555"}}," Support ")),(0,i.kt)("p",null,"Join us on ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/arakoodev/edgechains"},"GitHub")," or ",(0,i.kt)("a",{parentName:"p",href:"https://discord.gg/wgmvkVEKEn"},"Discord")," where you can ask questions, share feedback, connect with like-minded developers, and engage in discussions about the future of large language models."))}u.isMDXComponent=!0}}]);