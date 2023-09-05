"use strict";(self.webpackChunkalekhaweb=self.webpackChunkalekhaweb||[]).push([[2951],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var i=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function M(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,i,r=function(e,t){if(null==e)return{};var a,i,r={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=i.createContext({}),s=function(e){var t=i.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):M(M({},t),e)),a},c=function(e){var t=s(e.components);return i.createElement(u.Provider,{value:t},e.children)},N="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},D=i.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),N=s(a),D=r,g=N["".concat(u,".").concat(D)]||N[D]||l[D]||n;return a?i.createElement(g,M(M({ref:t},c),{},{components:a})):i.createElement(g,M({ref:t},c))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,M=new Array(n);M[0]=D;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[N]="string"==typeof e?e:r,M[1]=o;for(var s=2;s<n;s++)M[s]=a[s];return i.createElement.apply(null,M)}return i.createElement.apply(null,a)}D.displayName="MDXCreateElement"},1406:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>j,frontMatter:()=>M,metadata:()=>u,toc:()=>c});var i=a(7462),r=(a(7294),a(3905)),n=a(6717);a(6557);const M={slug:"pipe",title:"How Pipe went from prototype to production in 11 days with Hasura",talking:"Peter Downs",tags:["facebook","gagag","docusaurus"],image:"./image.svg",descriptions:"Pipe, a fintech startup, has achieved tremendous success in just a year - over 3,500 customers and over $1 Billion in ARR - and all this with just 11 engineers. Helping fuel this efficiency was Pipe\u2019s decision early on to make Hasura an essential part of their technical architecture, which has provided tangible benefits to their dev processes and their bottom line.",timeline:["11 days from prototype to production","$600K USD saved annually (50% fewer devs)","90% reduction in time for new feature dev"],featured:!0},o=void 0,u={permalink:"/case-studies/pipe",source:"@site/case-studies/pipe/index.md",title:"How Pipe went from prototype to production in 11 days with Hasura",description:"<SpeakerCard",date:"2023-09-05T16:47:25.000Z",formattedDate:"September 5, 2023",tags:[{label:"facebook",permalink:"/case-studies/tags/facebook"},{label:"gagag",permalink:"/case-studies/tags/gagag"},{label:"docusaurus",permalink:"/case-studies/tags/docusaurus"}],readingTime:1.945,hasTruncateMarker:!1,authors:[],frontMatter:{slug:"pipe",title:"How Pipe went from prototype to production in 11 days with Hasura",talking:"Peter Downs",tags:["facebook","gagag","docusaurus"],image:"./image.svg",descriptions:"Pipe, a fintech startup, has achieved tremendous success in just a year - over 3,500 customers and over $1 Billion in ARR - and all this with just 11 engineers. Helping fuel this efficiency was Pipe\u2019s decision early on to make Hasura an essential part of their technical architecture, which has provided tangible benefits to their dev processes and their bottom line.",timeline:["11 days from prototype to production","$600K USD saved annually (50% fewer devs)","90% reduction in time for new feature dev"],featured:!0},prevItem:{title:"How Philips Healthcare accelerated development by up to 4X with Hasura",permalink:"/case-studies/philips"},nextItem:{title:"How Pulley Cut Development Time by 50% with Hasura",permalink:"/case-studies/pulley"}},s={image:a(2958).Z,authorsImageUrls:[]},c=[{value:"The Problem",id:"the-problem",level:3},{value:"Performance",id:"performance",level:3},{value:"Security &amp; Authorization",id:"security--authorization",level:3},{value:"The Solution",id:"the-solution",level:3}],N=(l="ImageExplained",function(e){return console.warn("Component "+l+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var l;const D={toc:c},g="wrapper";function j(e){let{components:t,...a}=e;return(0,r.kt)(g,(0,i.Z)({},D,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(n.Z,{quote:"Hasura is a fantastic way to create a data fetching layer to our database. It\u2019s ultra-stable and often better at planning queries than ones we were writing ourselves.",name:"Peter Downs",title:"Director of Engineering, Pipe",image:"/alekhaweb/img/peter.png",mdxType:"SpeakerCard"}),(0,r.kt)("h3",{id:"the-problem"},"The Problem"),(0,r.kt)("h1",{id:"pipes-challenge"},"Pipe's Challenge"),(0,r.kt)("p",null,"\u201cWe needed 50% fewer frontend developers than we thought we needed. Hasura and GraphQL reduced the toil to build and iterate on the frontend.\u201d"),(0,r.kt)("p",null,"Peter Downs",(0,r.kt)("br",{parentName:"p"}),"\n","Director of Engineering, Pipe "),(0,r.kt)("p",null,"Pipe\u2019s development team needed to thread the needle balancing the immediate requirements of the business while also building for the future. Their technical architecture started with a Postgres database, Go as their backend language, REST APIs, and React for their web front-end running on Google Cloud. As they rapidly grew, they needed to consider additional concerns:"),(0,r.kt)("p",null,"Fast Time to Market ","&"," Feature Innovation Pipe\u2019s team needed to quickly create or change features based to gain new customers and respond to user feedback.Flexible ArchitectureOne of Pipe\u2019s architectural goals was to keep the architecture as agile as possible, where changes to the underlying database and frontend UX could happen rapidly.Small Development TeamPipe\u2019s 11 engineers needed to stay agile and flexible - understanding all layers of their system - database, backend, integrations, and the frontend web UI Flexible Web APIs"),(0,r.kt)("p",null,"  One of their early challenges was inflexibility of utilizing REST APIs, where they encountered multiple variations of similar request types, but each requiring its own REST endpoint because of differing requirements."),(0,r.kt)("h3",{id:"performance"},"Performance"),(0,r.kt)("p",null,"Pipe\u2019s website needed to run quickly to provide a great user experience, and scale to meet the traffic of their rapidly growing customer base."),(0,r.kt)("h3",{id:"security--authorization"},"Security ","&"," Authorization"),(0,r.kt)("p",null,"Pipe\u2019s system stores sensitive financial and customer data of their customers and they needed to make sure that the data was secure and that users could only view data they were authorized to see."),(0,r.kt)(n.Z,{quote:"\u201c\u2026 Basically, we\u2019re seeing that it takes only about a tenth of the time to develop a new page in our application or a new component based on having adopted Hasura.\u201d",name:"Peter Downs",title:"Director of Engineering, Pipe",image:"",mdxType:"SpeakerCard"}),(0,r.kt)("h3",{id:"the-solution"},"The Solution"),(0,r.kt)("h1",{id:"why-pipe-chose-hasura"},"Why Pipe chose Hasura"),(0,r.kt)("p",null,"As Pipe started investigating solutions to these challenges, they discovered Hasura and went into production with it within 11 days."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://hasura.io/static/pipe_arch-8fa7fde158eefeed4f700072cc8b543d.png",alt:"MarineGEO circle logo"})),(0,r.kt)(N,{mdxType:"ImageExplained"}," Pipe architecture diagram "))}j.isMDXComponent=!0},6717:(e,t,a)=>{a.d(t,{Z:()=>r});var i=a(7294);function r(e){let{quote:t,name:a,title:r,image:n}=e;return i.createElement("div",{className:" bg-neutral-800 rounded-xl p-4 justify-center items-center shadow-lg overflow-hidden flex flex-col md:flex-row mb-4"},n&&i.createElement("img",{className:"h-72",src:n,alt:""}),i.createElement("div",{className:"px-2 md:px-6 py-4"},i.createElement("h2",{className:"text-base md:text-2xl font-bold mb-2"},'"',t,'"'),i.createElement("div",{className:"pt-4"},i.createElement("p",{className:"text-lg font-semibold m-0"},a),i.createElement("p",{className:"text-neutral-400"},r))))}},6557:(e,t,a)=>{a(7294)},2958:(e,t,a)=>{a.d(t,{Z:()=>i});const i="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTY5IiBoZWlnaHQ9Ijc0IiB2aWV3Qm94PSIwIDAgMTY5IDc0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDBfMjE5NF8yOTUzKSI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNzAuNzAzMyA1OS41NjI0VjQ4LjA2NDdDNzAuOTM5OCA0OC4yNTU4IDcxLjE2MDEgNDguNDQwNSA3MS4zNzExIDQ4LjYxNzJDNzEuODI3NiA0OC45OTk5IDcyLjI0MDcgNDkuMzQ2MiA3Mi42ODI0IDQ5LjY0MzNDNzcuMzYyNSA1Mi43OTA4IDg0LjUwOTYgNTEuNjUwNCA4OC40OTI4IDQ3LjA4NjlDOTEuODAxNSA0My4yOTQ2IDkyLjY5MjkgMzguODEzNCA5MS44NTI5IDMzLjk2NDdDOTAuNzE5NSAyNy40NzQ0IDg2LjUxMTYgMjIuNDcwOSA3OS4yOTAzIDIyLjIyNzhDNzUuOTA5MSAyMi4xMTUgNzIuODgwNSAyMi45NTY5IDcwLjYwNzkgMjUuNjg3M0M3MC41Njk2IDI1LjczNDIgNzAuNTEwMyAyNS43NjM3IDcwLjQxNTMgMjUuODExQzcwLjM1ODkgMjUuODM4OSA3MC4yOTAzIDI1Ljg3MzEgNzAuMjA2IDI1LjkyMDdWMjMuMTc2OUg2Mi41ODY1VjU5LjU2MjRINzAuNzAzM1pNNzcuMjIxNiA0My43Mzg1QzczLjQ5MzggNDMuNzQwNCA3MC4zNjggNDAuNTc3NSA3MC4zNDEyIDM2Ljc3NTVINzAuMzQzMkM3MC40ODc5IDMzLjY2NDQgNzIuNjA4IDI5Ljg5MTEgNzcuMTM3OSAyOS44Nzc2Qzc4Ljk2NDQgMjkuODY5OSA4MC43MTc2IDMwLjU5ODcgODIuMDA0MiAzMS45MDFDODMuMjkxIDMzLjIwMzIgODQuMDAzNSAzNC45Njk2IDgzLjk4MiAzNi44MDQzQzgzLjk0MiA0MC42NTU5IDgwLjk0OTUgNDMuNzM2NSA3Ny4yMjE2IDQzLjczODVaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTExNS43OTggNTkuNTYyNFY0OC4xOTc5QzExNi4xNDIgNDguNDM0NyAxMTYuNDcxIDQ4LjY3NzUgMTE2Ljc5MyA0OC45MTU3QzExNy40NzIgNDkuNDE3NSAxMTguMTI0IDQ5Ljg5ODkgMTE4LjgzNiA1MC4yNjE4QzEyMy45NzEgNTIuODc0IDEzMC45NDMgNTAuOTg5OSAxMzQuNDMxIDQ2LjA2OTFDMTM3LjM0NyA0MS45NTQ3IDEzNy44ODcgMzcuMzgxOSAxMzYuNjQ4IDMyLjYwNDRDMTM1LjM0OCAyNy41ODgxIDEzMi40NjggMjMuODYzNiAxMjcuMjExIDIyLjY2NzRDMTIyLjg1IDIxLjY3NTYgMTE4LjcyNyAyMi4xNTMzIDExNS41NjQgMjUuODU0OUMxMTUuNTUzIDI1Ljg2NzcgMTE1LjUxNSAyNS44NTc3IDExNS40NTEgMjUuODQxQzExNS40MSAyNS44MzA0IDExNS4zNTkgMjUuODE3IDExNS4yOTkgMjUuODA1MlYyMy4yMTc3SDEwNy43MDlWNTkuNTYyNEgxMTUuNzk4Wk0xMjIuMzEzIDQzLjc1NjlDMTE4LjU3MSA0My43NDM1IDExNS40NTMgNDAuNTg0NiAxMTUuNDQgMzYuNzkzMkwxMTUuNDM4IDM2Ljc5MTRDMTE1LjU5MiAzMy42NTkzIDExNy43MzEgMjkuOTEzNiAxMjIuMjUyIDI5LjkxMzZDMTI0LjA4IDI5LjkwNTMgMTI1LjgzNSAzMC42MzUxIDEyNy4xMjEgMzEuOTM4NkMxMjguNDA3IDMzLjI0MjIgMTI5LjExNSAzNS4wMDk3IDEyOS4wODcgMzYuODQyOUMxMjkuMDI5IDQwLjY5OTMgMTI2LjA1NCA0My43NzAyIDEyMi4zMTMgNDMuNzU2OVoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTQ2LjcyIDM4LjY3MDJIMTY2LjU5NkMxNjcuNzU3IDMyLjk0NSAxNjQuNzE4IDI0LjkwODQgMTU2LjY1NSAyMi43Mzg1QzE0OS4wMTIgMjAuNjg4IDE0MS41MDUgMjQuODY5OSAxMzkuNCAzMi4yMTkzQzEzNy4yNDIgMzkuNzQ4NyAxNDEuMzc3IDQ3LjQ1NjQgMTQ4Ljc3NSA0OS42MjYzQzE1Ni41MzcgNTEuOTA0NiAxNjMuNDEgNDcuMzkyIDE2NS44MDcgNDEuMTk0N0MxNjUuODAxIDQxLjE4ODUgMTY1Ljc5MyA0MS4xODA2IDE2NS43ODcgNDEuMTcyNkMxNjUuNzczIDQxLjE1NjkgMTY1Ljc2MSA0MS4xNDE0IDE2NS43NDggNDEuMTQxNEMxNjUuMTYyIDQxLjE0MDEgMTY0LjU3NSA0MS4xMzcgMTYzLjk4OCA0MS4xMzM3QzE2Mi4xOTQgNDEuMTI0MiAxNjAuNDA0IDQxLjExNDYgMTU4LjYxMSA0MS4xNTYxQzE1OC4wNzMgNDEuMTc2NCAxNTcuNTU5IDQxLjM3OTEgMTU3LjE1OCA0MS43Mjk0QzE1NS40NzMgNDMuMzUzNSAxNTMuNDggNDMuODMxMiAxNTEuMjExIDQzLjQ2MzlDMTQ4LjY5MSA0My4wNTA0IDE0Ni43MzYgNDAuOTc4IDE0Ni43MiAzOC42NzAyWk0xNTEuOTM2IDI4LjkzNzhDMTU1LjQ5NyAyOC42ODI0IDE1OC4yMDIgMzAuMzk4NSAxNTguNzY1IDMzLjM3MzFIMTQ2LjkyQzE0Ni45OCAzMS4zNTc2IDE0OS4xODYgMjkuMTM0NCAxNTEuOTM2IDI4LjkzNzhaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMC4zNTUwMzkgNTkuNTYxOVY1OC44MzczQzAuMzU1MDM5IDQ5Ljc2NyAwLjM0MjEzNiA0MC42OTY2IDAuMzU1MDM5IDMxLjYxOUMwLjM2NDI1NSAyNi45Mjk0IDMuNDg4NTkgMjMuMDY1NSA4LjA1OTg4IDIyLjM2ODVDMTAuMDY5IDIyLjA2MzIgMTIuMTYxMSAyMi4zMTcgMTQuMzUyOCAyMi4zMTdWMjMuMDgwMkMxNC4zNTI4IDMxLjk5NzMgMTQuMzUyOCA0MC45MTQzIDE0LjM1MjggNDkuODMxNEMxNC4zNTI4IDU1LjUzMjUgMTAuMzMwOCA1OS41MzI1IDQuNjE4NTEgNTkuNTUyOEMzLjI0ODk2IDU5LjU2NTcgMS44NjgzNiA1OS41NjE5IDAuMzU1MDM5IDU5LjU2MTlaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMTkuMDIwOSA0My45NTU0VjE0LjQzNzdDMjEuNjE3MyAxNC41NzMyIDI0LjIwNDQgMTQuMTEyNSAyNi43MTQgMTUuMDE4NUMzMC40MDk4IDE2LjMyNjQgMzIuOTIyOCAxOS45MjgxIDMyLjk5MjUgMjQuMDE2OUMzMy4wNDI1IDI3LjMwOCAzMy4wMjIxIDMwLjU5OTEgMzMuMDA5MiAzMy44OTAzQzMyLjk4NTIgMzkuNTA0NSAyOS40MDQ1IDQzLjU3MDEgMjQuMDc1MSA0My45NTc0QzIyLjQyNDIgNDQuMDU4IDIwLjc2MjMgNDMuOTU1NCAxOS4wMjA5IDQzLjk1NTRaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMTAzLjA0MiA1MC4yMjU1SDk1LjI2MjZWMjMuNzczMkgxMDMuMDQyVjUwLjIyNTVaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMTAzLjA0MiAxNC40MzczVjIwLjY2MTNIOTUuMjYyNlYxNC40MzczSDEwMy4wNDJaIiBmaWxsPSJ3aGl0ZSIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzIxOTRfMjk1MyI+CjxyZWN0IHdpZHRoPSIxNjguMDQyIiBoZWlnaHQ9IjQ1LjEyNDUiIGZpbGw9IndoaXRlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDE0LjQzNzcpIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg=="}}]);