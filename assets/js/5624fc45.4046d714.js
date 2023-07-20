"use strict";(self.webpackChunkalekhaweb=self.webpackChunkalekhaweb||[]).push([[7509],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),s=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=s(a),k=r,d=c["".concat(o,".").concat(k)]||c[k]||u[k]||l;return a?n.createElement(d,i(i({ref:t},m),{},{components:a})):n.createElement(d,i({ref:t},m))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=k;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[c]="string"==typeof e?e:r,i[1]=p;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},7490:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const l={sidebar_position:12,title:"Endpoint Documentation"},i="Endpoint Documentation - Postman Collection",p={unversionedId:"Endpoints",id:"Endpoints",title:"Endpoint Documentation",description:"Postman collection with various endpoints and their associated request and response details.",source:"@site/doc/Endpoints.md",sourceDirName:".",slug:"/Endpoints",permalink:"/doc/Endpoints",draft:!1,editUrl:"https://github.com/arakoodev/doc/tree/main/doc/Endpoints.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12,title:"Endpoint Documentation"},sidebar:"tutorialSidebar",previous:{title:"Contributing to EdgeChains",permalink:"/doc/Contribute"}},o={},s=[{value:"Pinecone Controller",id:"pinecone-controller",level:2},{value:"1. Open AI - Upsert",id:"1-open-ai---upsert",level:3},{value:"2. Open AI - Query",id:"2-open-ai---query",level:3},{value:"3. Pinecone Chat - Upsert",id:"3-pinecone-chat---upsert",level:3},{value:'<font color="red">Delete</font>',id:"delete",level:3},{value:"Redis Controller",id:"redis-controller",level:2},{value:"1. Open AI - Upsert",id:"1-open-ai---upsert-1",level:3},{value:"2. Open AI - Query",id:"2-open-ai---query-1",level:3},{value:"3. Redis Chat",id:"3-redis-chat",level:3},{value:"4. Redis Similarity Search",id:"4-redis-similarity-search",level:3},{value:'<font color="red">Delete</font>',id:"delete-1",level:3},{value:"Wiki Controller",id:"wiki-controller",level:2},{value:"1. Wiki Summary",id:"1-wiki-summary",level:3},{value:"HistoryContext",id:"historycontext",level:2},{value:"1. Create",id:"1-create",level:3},{value:"2. Update",id:"2-update",level:3},{value:"3. Get",id:"3-get",level:3},{value:'<font color="red">Delete</font>',id:"delete-2",level:3},{value:"Doc2Vec",id:"doc2vec",level:2},{value:"1. Build",id:"1-build",level:3},{value:"2. Upsert",id:"2-upsert",level:3},{value:"3. Redis Similarity Search",id:"3-redis-similarity-search",level:3}],m={toc:s},c="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"endpoint-documentation---postman-collection"},"Endpoint Documentation - Postman Collection"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Postman collection with various endpoints and their associated request and response details.")),(0,r.kt)("h2",{id:"pinecone-controller"},"Pinecone Controller"),(0,r.kt)("h3",{id:"1-open-ai---upsert"},"1. Open AI - Upsert"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Description:")," Upload a file to update Open AI data in the Pinecone namespace."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Method:")," POST"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"URL:")," ",(0,r.kt)("inlineCode",{parentName:"li"},"localhost:8080/v1/examples/pinecone/openai/upsert?namespace=machine-learning")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Headers:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"Content-Type: multipart/form-data\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Body:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Mode: formdata"),(0,r.kt)("li",{parentName:"ul"},"Key: file"),(0,r.kt)("li",{parentName:"ul"},"Type: file")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Request:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"POST /v1/examples/pinecone/openai/upsert?namespace=machine-learning\nContent-Type: multipart/form-data\n\nfile: <path_to_file>\n")),(0,r.kt)("h3",{id:"2-open-ai---query"},"2. Open AI - Query"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Description:")," Execute a query on Open AI data in the Pinecone namespace."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Method:")," GET"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"URL:")," ",(0,r.kt)("inlineCode",{parentName:"li"},"localhost:8080/v1/examples/pinecone/openai/query?topK=4&query=What is the collect stage for data maturity?&namespace=machine-learning")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Headers:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"Content-Type: application/json\n")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Request:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"GET /v1/examples/pinecone/openai/query?topK=4&query=What is the collect stage for data maturity?&namespace=machine-learning\nContent-Type: application/json\n")),(0,r.kt)("h3",{id:"3-pinecone-chat---upsert"},"3. Pinecone Chat - Upsert"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Description:")," Execute a chat message on Open AI data in the Pinecone namespace."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Method:")," GET"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"URL:")," ",(0,r.kt)("inlineCode",{parentName:"li"},"localhost:8080/v1/examples/pinecone/openai/chat?query=Are neural networks part of data maturity?&namespace=machine-learning&id=historycontext:9838938-1e-ff-2fff2-ddd")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Headers:")," None"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Body:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Mode: raw"),(0,r.kt)("li",{parentName:"ul"},"Raw JSON Body: ",(0,r.kt)("inlineCode",{parentName:"li"},'{"query": "What is the collect stage for data maturity?"}'))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Request:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"GET /v1/examples/pinecone/openai/chat?query=Are neural networks part of data maturity?&namespace=machine-learning&id=historycontext:9838938-1e-ff-2fff2-ddd\n")),(0,r.kt)("h3",{id:"delete"},(0,r.kt)("font",{color:"red"},"Delete")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Description:")," Delete all data in the Pinecone namespace for the specified machine-learning pattern."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Method:")," DELETE"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"URL:")," ",(0,r.kt)("inlineCode",{parentName:"li"},"localhost:8080/v1/examples/pinecone/deleteAll?namespace=machine-learning")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Headers:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"Content-Type: application/json\n")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Request:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"DELETE /v1/examples/pinecone/deleteAll?namespace=machine-learning\nContent-Type: application/json\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"redis-controller"},"Redis Controller"),(0,r.kt)("h3",{id:"1-open-ai---upsert-1"},"1. Open AI - Upsert"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Description:")," Upload a file to update Open AI data in the Redis namespace."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Method:")," POST"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"URL:")," ",(0,r.kt)("inlineCode",{parentName:"li"},"localhost:8080/v1/examples/redis/openai/upsert?namespace=machine-learning")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Headers:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"Content-Type: multipart/form-data\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Body:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Mode: formdata"),(0,r.kt)("li",{parentName:"ul"},"Key: file"),(0,r.kt)("li",{parentName:"ul"},"Type: file"),(0,r.kt)("li",{parentName:"ul"},"Source: ",(0,r.kt)("inlineCode",{parentName:"li"},"/R:/Fiverr/alekhaweb (client)/spark-openai-files/spark/introduction-to-natural-language-processing.pdf"))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Request:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"POST /v1/examples/redis/openai/upsert?namespace=machine-learning\nContent-Type: multipart/form-data\n\nfile: <path_to_file>\n")),(0,r.kt)("h3",{id:"2-open-ai---query-1"},"2. Open AI - Query"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Description:")," Execute a query on Open AI data in the Redis namespace."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Method:")," GET"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"URL:")," ",(0,r.kt)("inlineCode",{parentName:"li"},"localhost:8080/v1/examples/redis/openai/query?topK=10&query=What is lexicography? Can you also explain social network analysis&namespace=machine-learning")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Headers:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"Content-Type: application/json\n")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Request:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"POST /v1/examples/redis/openai/upsert?namespace=machine-learning\nContent-Type: multipart/form-data\n\nfile: <path_to_file>\n")),(0,r.kt)("h3",{id:"3-redis-chat"},"3. Redis Chat"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Description:")," Execute a chat message on Open AI data in the Redis namespace."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Method:")," GET"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"URL:")," ",(0,r.kt)("inlineCode",{parentName:"li"},"localhost:8080/v1/examples/redis/openai/chat?query=Then, what is social engineering?&namespace=machine-learning&id=historycontext:9838938-1e-ff-2fff2-ddd")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Headers:")," None"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Body:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Mode: raw"),(0,r.kt)("li",{parentName:"ul"},"Raw JSON Body: ",(0,r.kt)("inlineCode",{parentName:"li"},'{"query": "What is the collect stage for data maturity?"}'))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Request:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"GET /v1/examples/redis/openai/chat?query=Then, what is social engineering?&namespace=machine-learning&id=historycontext:9838938-1e-ff-2fff2-ddd\n")),(0,r.kt)("h3",{id:"4-redis-similarity-search"},"4. Redis Similarity Search"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Description:")," Perform a similarity search on Open AI data in the Redis namespace."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Method:")," GET"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"URL:")," ",(0,r.kt)("inlineCode",{parentName:"li"},"localhost:8080/v1/examples/redis/openai/similarity-search?topK=7&query=What is lexicography? Can you also explain social network analysis&namespace=machine-learning")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Headers:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"Content-Type: application/json\n")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Request:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"GET /v1/examples/redis/openai/similarity-search?topK=7&query=What is lexicography? Can you also explain social network analysis&namespace=machine-learning\nContent-Type: application/json\n")),(0,r.kt)("h3",{id:"delete-1"},(0,r.kt)("font",{color:"red"},"Delete")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Description:")," Delete data in the Redis namespace matching the specified pattern."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Method:")," DELETE"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"URL:")," ",(0,r.kt)("inlineCode",{parentName:"li"},"localhost:8080/v1/examples/redis/delete?pattern=machine-learning*")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Headers:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"Content-Type: application/json\n")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Request:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"DELETE /v1/examples/redis/delete?pattern=machine-learning*\nContent-Type: application/json\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"wiki-controller"},"Wiki Controller"),(0,r.kt)("h3",{id:"1-wiki-summary"},"1. Wiki Summary"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Description:")," Retrieve a summary of a given query from the Wiki."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Method:")," GET"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"URL:")," ",(0,r.kt)("inlineCode",{parentName:"li"},"localhost:8080/v1/examples/wiki-summary?query=Barack Obama")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Headers:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"Content-Type: application/json\nstream: false\n")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Request:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"GET /v1/examples/wiki-summary?query=Barack Obama\nContent-Type: application/json\nstream: false\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"historycontext"},"HistoryContext"),(0,r.kt)("h3",{id:"1-create"},"1. Create"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Description:")," Create a new HistoryContext."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Method:")," POST"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"URL:")," ",(0,r.kt)("inlineCode",{parentName:"li"},"localhost:8080/v1/examples/historycontext")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Headers:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"Content-Type: application/json\n")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Request:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"POST /v1/examples/historycontext\nContent-Type: application/json\n")),(0,r.kt)("h3",{id:"2-update"},"2. Update"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Description:")," Update a specific HistoryContext with a new response."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Method:")," PUT"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"URL:")," ",(0,r.kt)("inlineCode",{parentName:"li"},"localhost:8080/v1/examples/historycontext?contextId=9838938-1e-ff-2fff2-ddd")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Headers:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"Content-Type: application/json\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Body:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Mode: raw"),(0,r.kt)("li",{parentName:"ul"},"Raw JSON Body: ",(0,r.kt)("inlineCode",{parentName:"li"},'{"id": "historycontext:3045b527-a146-4c17-8cc5-574380fd3de5", "response": "How are you? Is the key getting updated...."}'))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Request:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'PUT /v1/examples/historycontext?contextId=9838938-1e-ff-2fff2-ddd\nContent-Type: application/json\n\n{\n    "id": "historycontext:3045b527-a146-4c17-8cc5-574380fd3de5",\n    "response": "How are you? Is the key getting updated...."\n}\n')),(0,r.kt)("h3",{id:"3-get"},"3. Get"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Description:")," Retrieve a specific HistoryContext using its ID."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Method:")," GET"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"URL:")," ",(0,r.kt)("inlineCode",{parentName:"li"},"localhost:8080/v1/examples/historycontext?id=historycontext:fe56580e-e3a1-447b-9dfc-a1a12007e151")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Headers:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"Content-Type: application/json\n")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Request:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"GET /v1/examples/historycontext?id=historycontext:fe56580e-e3a1-447b-9dfc-a1a12007e151\nContent-Type: application/json\n")),(0,r.kt)("h3",{id:"delete-2"},(0,r.kt)("font",{color:"red"},"Delete")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Description:")," Delete a specific HistoryContext using its ID."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Method:")," DELETE"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"URL:")," ",(0,r.kt)("inlineCode",{parentName:"li"},"localhost:8080/v1/examples/historycontext?id=historycontext:b5d97e7b-1ae0-4bd8-89e7-64f356abcc19")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Headers:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"Content-Type: application/json\n")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Request:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"DELETE /v1/examples/historycontext?id=historycontext:b5d97e7b-1ae0-4bd8-89e7-64f356abcc19\nContent-Type: application/json\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"doc2vec"},"Doc2Vec"),(0,r.kt)("h3",{id:"1-build"},"1. Build"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Description:")," Build Doc2Vec data."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Method:")," POST"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"URL:")," ",(0,r.kt)("inlineCode",{parentName:"li"},"localhost:8080/v1/examples/doc2vec")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Headers:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"Content-Type: application/json\n")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Request:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"POST /v1/examples/doc2vec\nContent-Type: application/json\n")),(0,r.kt)("h3",{id:"2-upsert"},"2. Upsert"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Description:")," Upload a file to update Doc2Vec data in the Redis namespace."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Method:")," POST"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"URL:")," ",(0,r.kt)("inlineCode",{parentName:"li"},"localhost:8080/v1/examples/redis/doc2vec/upsert?namespace=doc2vec")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Headers:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"Content-Type: multipart/form-data\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Body:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Mode: formdata"),(0,r.kt)("li",{parentName:"ul"},"Key: file"),(0,r.kt)("li",{parentName:"ul"},"Type: file"),(0,r.kt)("li",{parentName:"ul"},"Source: ",(0,r.kt)("inlineCode",{parentName:"li"},"/R:/Fiverr/alekhaweb (client)/spark-openai-files/spark/introduction-to-natural-language-processing.pdf"))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Request:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"POST /v1/examples/redis/doc2vec/upsert?namespace=doc2vec\nContent-Type: multipart/form-data\n\nfile: <path_to_file>\n")),(0,r.kt)("h3",{id:"3-redis-similarity-search"},"3. Redis Similarity Search"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Description:")," Perform a similarity search on Doc2Vec data in the Redis namespace."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Method:")," GET"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"URL:")," ",(0,r.kt)("inlineCode",{parentName:"li"},"localhost:8080/v1/examples/redis/doc2vec/similarity-search?topK=3&query=What is lexicography? Can you also explain social network analysis&namespace=machine-learning")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Headers:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"Content-Type: application/json\n")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Request:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"GET /v1/examples/redis/doc2vec/similarity-search?topK=3&query=What is lexicography? Can you also explain social network analysis&namespace=machine-learning\nContent-Type: application/json\n")),(0,r.kt)("hr",null))}u.isMDXComponent=!0}}]);