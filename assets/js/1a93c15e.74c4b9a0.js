"use strict";(self.webpackChunkalekhaweb=self.webpackChunkalekhaweb||[]).push([[4355],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=r,g=u["".concat(l,".").concat(h)]||u[h]||d[h]||o;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8397:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:5},i="Core Concepts",s={unversionedId:"Core_concepts",id:"Core_concepts",title:"Core Concepts",description:"Components and Interactions",source:"@site/doc/Core_concepts.md",sourceDirName:".",slug:"/Core_concepts",permalink:"/doc/Core_concepts",draft:!1,editUrl:"https://github.com/arakoodev/doc/tree/main/doc/Core_concepts.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Creating an API with Plugin",permalink:"/doc/Tutorials/Creating an API from a Plugin"},next:{title:"Configuration and Customisation",permalink:"/doc/Config"}},l={},c=[{value:"Components and Interactions",id:"components-and-interactions",level:3},{value:"Workflow and Data Flow",id:"workflow-and-data-flow",level:3},{value:"Schematic for Quick Overview",id:"schematic-for-quick-overview",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"core-concepts"},"Core Concepts"),(0,r.kt)("h3",{id:"components-and-interactions"},"Components and Interactions"),(0,r.kt)("p",null,"EdgeChains consists of several key components that work together to provide its functionality:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Language Chain"),": Language Chains in EdgeChains refer to the specific chains that handle language-related tasks. These chains are responsible for generating and understanding natural language prompts, performing language-based computations, and interacting with the underlying LLM. Language Chains utilize the capabilities of the OpenAI GPT model and provide an interface for developers to work with natural language inputs effectively.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Reasoning+Acting (ReAct) Chains"),": ReAct combines language processing and computation logic to enable reasoning and acting capabilities for complex tasks. It allows language models to generate verbal reasoning traces and text actions in an interleaved manner. While actions receive feedback from the external environment, reasoning traces update the model's internal state by reasoning over the context and incorporating useful information for future reasoning and acting."))),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"OpenAI Client"),": The interface for communication with OpenAI's GPT or other LLM models.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Redis Service"),": Provides a fault-tolerant and scalable data storage solution for managing context and state within the EdgeChains system."))),(0,r.kt)("h3",{id:"workflow-and-data-flow"},"Workflow and Data Flow"),(0,r.kt)("p",null,"The workflow and data flow in EdgeChains follow a well-defined process:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Input"),": Language prompts or queries are provided to the Language Chain as input.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Language Chain Processing"),": The Language Chain processes the input by leveraging the LLM and other language-related components to generate relevant language-based outputs.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"ReAct Chain Integration"),": If necessary, the Language Chain output may be passed to the ReAct Chain for further reasoning and acting capabilities. ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Connectors Interaction"),": Connectors are used to interact with external services, APIs, or databases as needed. These connectors facilitate data retrieval, storage, or other operations required by the application.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Output"),": The final output, which could be a language-based response, an action execution, or any other desired result, is generated by the Chain and presented to the user or further processed by downstream components."))),(0,r.kt)("h3",{id:"schematic-for-quick-overview"},"Schematic for Quick Overview"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://mermaid-js.github.io/mermaid-live-editor/edit#pako:eNp9U8FOwzAM_ZUoJ5DYYXDrJKRRQAJNmsTggNod3MbrItIkSlqkauPfcdpuBAbk0KTPz36O7ex4aQTyhOe6cmC37Pl2lmtGy7fFgEiB0-zVtI6lRF0P1rDQng343Fp2pxvXWSN1sz6ffXGUqWQ50p5NA6onLwJ65KEWv2heZveqW1kndRVpSnGZpaYupEbBHudP7F4qXEeCG-u_HFm6eFj_raJkkd2JCtMtSO3ZQhYOXBeplUZrLBvjPImOR5Yq8B59LGosapDZkrb5AxEkUhlie7NFirEM20__X_Ly6N5liXFuqwHyUXIOhfTZU_gezCeaB7dR-hjl38pfRcKRHlUrCj_m-Hcg844OlMqWp4MTujv79nt1Eof6yCaT69DwEaFTj5BlRPrh6jG0RxJOe2RvoXyjGQHPjMZ-VFofRuLxBnS1j-LSvUYlnB4uMVzuJ3zICTVN_guRJhsoQ0xKux993890rvkFr9HVIAW9rF1wzjk1oMacJ3QU4N5yenEfxIO2MatOlzxpXIsXvLUCGryVQFWsebIB5fHjE4kHJKo"},(0,r.kt)("img",{parentName:"a",src:"https://mermaid.ink/img/pako:eNp9U8FOwzAM_ZUoJ5DYYXDrJKRRQAJNmsTggNod3MbrItIkSlqkauPfcdpuBAbk0KTPz36O7ex4aQTyhOe6cmC37Pl2lmtGy7fFgEiB0-zVtI6lRF0P1rDQng343Fp2pxvXWSN1sz6ffXGUqWQ50p5NA6onLwJ65KEWv2heZveqW1kndRVpSnGZpaYupEbBHudP7F4qXEeCG-u_HFm6eFj_raJkkd2JCtMtSO3ZQhYOXBeplUZrLBvjPImOR5Yq8B59LGosapDZkrb5AxEkUhlie7NFirEM20__X_Ly6N5liXFuqwHyUXIOhfTZU_gezCeaB7dR-hjl38pfRcKRHlUrCj_m-Hcg844OlMqWp4MTujv79nt1Eof6yCaT69DwEaFTj5BlRPrh6jG0RxJOe2RvoXyjGQHPjMZ-VFofRuLxBnS1j-LSvUYlnB4uMVzuJ3zICTVN_guRJhsoQ0xKux993890rvkFr9HVIAW9rF1wzjk1oMacJ3QU4N5yenEfxIO2MatOlzxpXIsXvLUCGryVQFWsebIB5fHjE4kHJKo?type=png",alt:null}))),(0,r.kt)("p",null,"The diagram illustrates the architecture of an application that utilizes EdgeChains, FlySpring, and your code. Here's a breakdown of the components and their relationships:"),(0,r.kt)("p",null,"In this architecture, your code contains the application's logic and serves as the entry point, connecting with the total app logic. The EdgeChains Library provides the connector classes to facilitate communication with external services, an OpenAI client for interacting with OpenAI's services, and other classes that support EdgeChains functionality. Additionally, EdgeChains Services make use of a Redis service and include other services to enhance the functionality of EdgeChains. FlySpring, on the other hand, consists of a combined JAR file that includes FlySpring CLI.    "),(0,r.kt)("p",null,"In your codebase, the combination of FlySpring and EdgeChains is represented as the overall code, where your code is packed as a single JAR file using JBang and connected with FlySpring. The EdgeChains Library and EdgeChains Services are also connected to your code. Lastly, the user-facing endpoints interact with FlySpring. It is recommended for each user to keep a separate file for the main() function, which serves as the entry point of the application."))}d.isMDXComponent=!0}}]);