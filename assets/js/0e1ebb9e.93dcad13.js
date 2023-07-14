"use strict";(self.webpackChunkalekhaweb=self.webpackChunkalekhaweb||[]).push([[6328],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=r,g=u["".concat(l,".").concat(h)]||u[h]||p[h]||i;return n?a.createElement(g,o(o({ref:t},d),{},{components:n})):a.createElement(g,o({ref:t},d))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7666:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={slug:"redis",title:"How to create a new instance in Redis",authors:{name:"Arakoo",title:"Arakoo Core Team",url:"https://github.com/arakoodev",image_url:"https://avatars.githubusercontent.com/u/114422989"},tags:["Redis","Arakoo"]},o=void 0,s={permalink:"/blog/redis",editUrl:"https://github.com/arakoodev/doc/tree/main/blog/2023-07-14-Redis/index.md",source:"@site/blog/2023-07-14-Redis/index.md",title:"How to create a new instance in Redis",description:"I. Introduction",date:"2023-07-14T00:00:00.000Z",formattedDate:"July 14, 2023",tags:[{label:"Redis",permalink:"/blog/tags/redis"},{label:"Arakoo",permalink:"/blog/tags/arakoo"}],readingTime:2.56,hasTruncateMarker:!1,authors:[{name:"Arakoo",title:"Arakoo Core Team",url:"https://github.com/arakoodev",image_url:"https://avatars.githubusercontent.com/u/114422989",imageURL:"https://avatars.githubusercontent.com/u/114422989"}],frontMatter:{slug:"redis",title:"How to create a new instance in Redis",authors:{name:"Arakoo",title:"Arakoo Core Team",url:"https://github.com/arakoodev",image_url:"https://avatars.githubusercontent.com/u/114422989",imageURL:"https://avatars.githubusercontent.com/u/114422989"},tags:["Redis","Arakoo"]},prevItem:{title:"How to create an instance in Pinecone",permalink:"/blog/Pinecone"},nextItem:{title:"How to Craft a Stellar GitHub Support Bot with GPT-3 and Chain-of-Thought",permalink:"/blog/github-gpt"}},l={authorsImageUrls:[void 0]},c=[{value:"I. Introduction",id:"i-introduction",level:2},{value:"II. Creating a free Redis Instance",id:"ii-creating-a-free-redis-instance",level:2},{value:"V. Obtaining Connection Details",id:"v-obtaining-connection-details",level:2}],d={toc:c},u="wrapper";function p(e){let{components:t,...i}=e;return(0,r.kt)(u,(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"i-introduction"},"I. Introduction"),(0,r.kt)("p",null,"Redis is an open-source, in-memory data structure store that can be used as a database, cache, or message broker. It is known for its fast performance and versatility, making it a popular choice for various applications, including EdgeChains."),(0,r.kt)("p",null,"One of the key benefits of Redis is its ability to store and retrieve data in memory, which allows for extremely fast read and write operations. This makes Redis well-suited for use cases that require low-latency data access, such as real-time applications and caching. Redis supports a wide range of data structures, including strings, lists, sets, hashes, and sorted sets. This flexibility enables developers to model complex data scenarios and perform advanced operations on the data stored in Redis."),(0,r.kt)("h2",{id:"ii-creating-a-free-redis-instance"},"II. Creating a free Redis Instance"),(0,r.kt)("p",null,"To get started with Redis in EdgeChains, you'll need to create a Redis instance. Follow these step-by-step instructions to create a Redis instance:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Sign in to the Redis site or dashboard using your credentials. If you do not have an account already, visit ",(0,r.kt)("a",{parentName:"li",href:"https://redis.com/"},"Redis website")," and click on Try Free in the top left corner. You have the option to sign up using your preferred email address and password, or alternatively, you can utilize your existing Google or github account for a seamless registration process.\n",(0,r.kt)("img",{alt:"Redis landing page",src:n(7209).Z,width:"1814",height:"943"}))),(0,r.kt)("p",null,"During the signing up process, you can also select a cloud vendor and region of your choice, and click on ",(0,r.kt)("em",{parentName:"p"},"Let's start free")," to continue. You will be directed to the redis dashboard. "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Redis signup page",src:n(2980).Z,width:"1338",height:"815"})),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},'Once logged in, locate the option to create a new instance. This may be labeled as "Create Instance.'),(0,r.kt)("li",{parentName:"ol"},"Choose the desired configuration for your Redis instance. This includes selecting the instance size, region, and any other relevant settings based on your requirements."),(0,r.kt)("li",{parentName:"ol"},"Set a meaningful name for the Redis instance."),(0,r.kt)("li",{parentName:"ol"},"Specify any additional settings that are applicable to your use case. For example, you may want to configure persistence options or enable replication for high availability."),(0,r.kt)("li",{parentName:"ol"},"Take a moment to review the configuration details you've provided. Ensure that everything is as per your requirements and preferences."),(0,r.kt)("li",{parentName:"ol"},'Once you\'ve reviewed the configuration, confirm the creation of the Redis instance. This may involve clicking a "Create" or "Confirm" button, depending on the Redis dashboard interface.')),(0,r.kt)("h2",{id:"v-obtaining-connection-details"},"V. Obtaining Connection Details"),(0,r.kt)("p",null,"After successfully creating a Redis instance, you need to obtain the connection details required to connect to it. Here's how you can retrieve the Redis URL, port, and password:"),(0,r.kt)("p",null,"By default, redis-cli connects to the server at the address 127.0.0.1 with port 6379. You can change the port using several command line options. To specify a different host name or an IP address, use the -h option."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Access the Redis site or dashboard"),(0,r.kt)("li",{parentName:"ol"},"Navigate to the instance details or settings"),(0,r.kt)("li",{parentName:"ol"},"Locate the Redis URL, port, and password"),(0,r.kt)("li",{parentName:"ol"},"Highlight the importance of keeping these details secure")),(0,r.kt)("p",null,"By following these steps, you can create a free Redis instance and obtain the necessary connection details to use Redis effectively in your EdgeChains or other applications."))}p.isMDXComponent=!0},7209:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/redis1-cd44672d2d11bebfad84ab03bb605621.png"},2980:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/redis2-a3d738edb251e87342d574bce73cbe60.png"}}]);