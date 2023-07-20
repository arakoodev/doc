"use strict";(self.webpackChunkalekhaweb=self.webpackChunkalekhaweb||[]).push([[6874],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(n),h=a,m=c["".concat(s,".").concat(h)]||c[h]||g[h]||r;return n?i.createElement(m,l(l({ref:t},u),{},{components:n})):i.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},2189:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>g,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var i=n(7462),a=(n(7294),n(3905));const r={sidebar_position:3,title:"Creating an API with Plugin"},l="Creating an API with External GPT Plugin Integration",o={unversionedId:"Tutorials/Creating an API from a Plugin",id:"Tutorials/Creating an API from a Plugin",title:"Creating an API with Plugin",description:"This tutorial will guide you through the process of creating a robust API that leverages the functionality of an external GPT plugin. With this API, you can seamlessly integrate multiple plugin chains, and for an extensive collection of GPT plugins, you can explore Plugin Library by Wellknown AI.",source:"@site/doc/Tutorials/Creating an API from a Plugin.md",sourceDirName:"Tutorials",slug:"/Tutorials/Creating an API from a Plugin",permalink:"/doc/Tutorials/Creating an API from a Plugin",draft:!1,editUrl:"https://github.com/arakoodev/doc/tree/main/doc/Tutorials/Creating an API from a Plugin.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Creating an API with Plugin"},sidebar:"tutorialSidebar",previous:{title:"Tutorials",permalink:"/doc/category/tutorials"},next:{title:"Core Concepts",permalink:"/doc/Core_concepts"}},s={},p=[{value:"Step-by-Step Guide",id:"step-by-step-guide",level:2}],u={toc:p},c="wrapper";function g(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"creating-an-api-with-external-gpt-plugin-integration"},"Creating an API with External GPT Plugin Integration"),(0,a.kt)("p",null,"This tutorial will guide you through the process of creating a robust API that leverages the functionality of an external GPT plugin. With this API, you can seamlessly integrate multiple plugin chains, and for an extensive collection of GPT plugins, you can explore ",(0,a.kt)("a",{parentName:"p",href:"https://www.wellknown.ai/"},"Plugin Library by Wellknown AI"),"."),(0,a.kt)("p",null,"The development of this plugin API involves three essential classes:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"openaiwiki/chains"),": This class plays a crucial role in creating an Observable for the plugin chain.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"PluginOpenAiService"),": In this class, you will define and declare essential information related to the plugin, setting a strong foundation for its integration.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"PluginController"),": The PluginController class serves as the controller for the GPT plugin, orchestrating its functionalities seamlessly."))),(0,a.kt)("h2",{id:"step-by-step-guide"},"Step-by-Step Guide"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Creating the Chain"),":"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Begin by creating a new class within the ",(0,a.kt)("inlineCode",{parentName:"li"},"openaiwiki/chains")," package. This new class will represent the foundation of the plugin chain."),(0,a.kt)("li",{parentName:"ul"},"Within this class, set up an observable for the plugin chain, enabling efficient handling of its functionalities."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Creating the Services"),":"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"In the ",(0,a.kt)("inlineCode",{parentName:"li"},"openaiwiki/services/impl/PluginOpenAiServiceImpl")," package, declare the Plugin URL and Spec URL. These essential declarations will facilitate communication with the GPT plugin."),(0,a.kt)("li",{parentName:"ul"},"Now, establish a constructor for the previously created plugin chain class, specifying the type of service you want to utilize."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Creating the Controller"),":"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Within the ",(0,a.kt)("inlineCode",{parentName:"li"},"openaiwiki/controllers/PluginController")," package, develop a robust controller to manage and interact with the GPT plugin seamlessly."),(0,a.kt)("li",{parentName:"ul"},"To ensure smooth operation, make sure to include the method ",(0,a.kt)("inlineCode",{parentName:"li"},"getScheduledObservableWithoutRetry()")," at the end of the controller implementation.")))),(0,a.kt)("p",null,"By following these steps, you will have created a robust plugin API, providing advanced language processing capabilities for your applications. Feel confident in running the chain and thoroughly testing its functionalities to enhance your applications. Happy coding!"))}g.isMDXComponent=!0}}]);