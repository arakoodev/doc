"use strict";(self.webpackChunkalekhaweb=self.webpackChunkalekhaweb||[]).push([[7066],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=i,g=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return n?o.createElement(g,r(r({ref:t},u),{},{components:n})):o.createElement(g,r({ref:t},u))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:i,r[1]=l;for(var s=2;s<a;s++)r[s]=n[s];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1582:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var o=n(7462),i=(n(7294),n(3905));const a={slug:"Pinecone",title:"How to create an instance in Pinecone",authors:{name:"Arakoo",title:"Arakoo Core Team",url:"https://github.com/arakoodev",image_url:"https://avatars.githubusercontent.com/u/114422989"},tags:["Pinecone","Arakoo"]},r=void 0,l={permalink:"/blog/Pinecone",editUrl:"https://github.com/arakoodev/doc/tree/main/blog/2023-07-14-Pinecone/index.md",source:"@site/blog/2023-07-14-Pinecone/index.md",title:"How to create an instance in Pinecone",description:"Introduction",date:"2023-07-14T00:00:00.000Z",formattedDate:"July 14, 2023",tags:[{label:"Pinecone",permalink:"/blog/tags/pinecone"},{label:"Arakoo",permalink:"/blog/tags/arakoo"}],readingTime:.795,hasTruncateMarker:!1,authors:[{name:"Arakoo",title:"Arakoo Core Team",url:"https://github.com/arakoodev",image_url:"https://avatars.githubusercontent.com/u/114422989",imageURL:"https://avatars.githubusercontent.com/u/114422989"}],frontMatter:{slug:"Pinecone",title:"How to create an instance in Pinecone",authors:{name:"Arakoo",title:"Arakoo Core Team",url:"https://github.com/arakoodev",image_url:"https://avatars.githubusercontent.com/u/114422989",imageURL:"https://avatars.githubusercontent.com/u/114422989"},tags:["Pinecone","Arakoo"]},nextItem:{title:"How to create a new instance in Redis",permalink:"/blog/redis"}},c={authorsImageUrls:[void 0]},s=[{value:"Introduction",id:"introduction",level:2},{value:"Key Features",id:"key-features",level:2},{value:"Step-by-Step Instructions",id:"step-by-step-instructions",level:2},{value:"Configuration Options",id:"configuration-options",level:2},{value:"Best Practices",id:"best-practices",level:2},{value:"Obtaining Connection Details",id:"obtaining-connection-details",level:2},{value:"Integration with EdgeChains",id:"integration-with-edgechains",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Conclusion",id:"conclusion",level:2},{value:"Additional Resources",id:"additional-resources",level:2}],u={toc:s},p="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Overview of Pinecone and its relevance to EdgeChains")),(0,i.kt)("h2",{id:"key-features"},"Key Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Highlights of Pinecone's key features and benefits")),(0,i.kt)("h2",{id:"step-by-step-instructions"},"Step-by-Step Instructions"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Sign up for a Pinecone account"),(0,i.kt)("li",{parentName:"ol"},"Access the Pinecone dashboard"),(0,i.kt)("li",{parentName:"ol"},"Navigate the user interface"),(0,i.kt)("li",{parentName:"ol"},"Create a new Pinecone instance"),(0,i.kt)("li",{parentName:"ol"},"Select configurations and settings")),(0,i.kt)("h2",{id:"configuration-options"},"Configuration Options"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Explanation of available configuration options for Pinecone instances")),(0,i.kt)("h2",{id:"best-practices"},"Best Practices"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Recommendations for optimizing Pinecone performance in EdgeChains")),(0,i.kt)("h2",{id:"obtaining-connection-details"},"Obtaining Connection Details"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Access the Pinecone site or dashboard"),(0,i.kt)("li",{parentName:"ol"},"Retrieve the Pinecone URL, API keys, and authentication details")),(0,i.kt)("h2",{id:"integration-with-edgechains"},"Integration with EdgeChains"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Code snippets and examples for integrating Pinecone with EdgeChains")),(0,i.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Common issues and solutions for creating Pinecone instances in EdgeChains")),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Recap of key points and benefits of Pinecone integration with EdgeChains"),(0,i.kt)("li",{parentName:"ul"},"Encouragement to explore further documentation and resources")),(0,i.kt)("h2",{id:"additional-resources"},"Additional Resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Links to relevant Pinecone documentation, tutorials, and community resources")))}d.isMDXComponent=!0}}]);