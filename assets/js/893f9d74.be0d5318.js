"use strict";(self.webpackChunkalekhaweb=self.webpackChunkalekhaweb||[]).push([[7705],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(a),d=r,h=c["".concat(l,".").concat(d)]||c[d]||g[d]||o;return a?n.createElement(h,i(i({ref:t},u),{},{components:a})):n.createElement(h,i({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5747:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const o={slug:"Supabase",title:"Getting Started with Supabase",authors:{name:"Arakoo",title:"Arakoo Core Team",url:"https://github.com/arakoodev",image_url:"https://avatars.githubusercontent.com/u/114422989"},tags:["Supabase","Arakoo"]},i=void 0,s={permalink:"/blog/Supabase",editUrl:"https://github.com/arakoodev/doc/tree/main/blog/2023-07-22-Supabase/index.md",source:"@site/blog/2023-07-22-Supabase/index.md",title:"Getting Started with Supabase",description:"Introduction",date:"2023-07-22T00:00:00.000Z",formattedDate:"July 22, 2023",tags:[{label:"Supabase",permalink:"/blog/tags/supabase"},{label:"Arakoo",permalink:"/blog/tags/arakoo"}],readingTime:2.92,hasTruncateMarker:!1,authors:[{name:"Arakoo",title:"Arakoo Core Team",url:"https://github.com/arakoodev",image_url:"https://avatars.githubusercontent.com/u/114422989",imageURL:"https://avatars.githubusercontent.com/u/114422989"}],frontMatter:{slug:"Supabase",title:"Getting Started with Supabase",authors:{name:"Arakoo",title:"Arakoo Core Team",url:"https://github.com/arakoodev",image_url:"https://avatars.githubusercontent.com/u/114422989",imageURL:"https://avatars.githubusercontent.com/u/114422989"},tags:["Supabase","Arakoo"]},prevItem:{title:"How to Build Semantic Search using EdgeChains",permalink:"/blog/Semantic-Search"},nextItem:{title:"How to create an index in Pinecone",permalink:"/blog/Pinecone"}},l={authorsImageUrls:[void 0]},p=[{value:"Introduction",id:"introduction",level:2},{value:"Supabase Integration with EdgeChains",id:"supabase-integration-with-edgechains",level:2},{value:"How to Get Configuration Parameters for Supabase Integration",id:"how-to-get-configuration-parameters-for-supabase-integration",level:2}],u={toc:p},c="wrapper";function g(e){let{components:t,...o}=e;return(0,r.kt)(c,(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Supabase")," is a powerful, open-source platform that simplifies the creation of secure and high-performance Postgres backends, offering functionalities similar to Firebase, such as authentication and real-time database. When used with ",(0,r.kt)("strong",{parentName:"p"},"EdgeChains"),", Supabase enhances the backend capabilities of applications built with the framework, enabling developers to create advanced and interactive applications powered by large language models."),(0,r.kt)("h2",{id:"supabase-integration-with-edgechains"},"Supabase Integration with EdgeChains"),(0,r.kt)("p",null,"In the EdgeChains configuration, the following parameters need to be configured for Supabase integration:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"SupabaseURL"),": The URL of the Supabase backend, which allows EdgeChains to communicate with the Supabase service.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Supabase AnnonKey"),": The anonymous key used for authentication when interacting with the Supabase backend.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Supabase JWTSecret"),": The JSON Web Token (JWT) secret for secure communication and user authentication.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Supabase DBhost:"),": The JDBC URL for connecting to the PostgreSQL database in Supabase. This URL provides the necessary information to establish a connection to the database. ",(0,r.kt)("em",{parentName:"p"},"ie, jdbc:postgresql://${SUPABASE_DB_URK}/postgres"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"DbUsername"),": The username for the PostgreSQL database in Supabase. In this example, it is set to ",(0,r.kt)("em",{parentName:"p"},"postgres"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"DbPassword"),": The password for the PostgreSQL database in Supabase, which is required for authentication and access to the database."))),(0,r.kt)("p",null,"By providing the appropriate values for these configuration parameters, EdgeChains can seamlessly integrate with Supabase, enabling developers to leverage the features and functionalities of Supabase as the backend for their language model-powered applications."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"how-to-get-configuration-parameters-for-supabase-integration"},"How to Get Configuration Parameters for Supabase Integration"),(0,r.kt)("p",null,"To integrate Supabase with EdgeChains and obtain the necessary configuration parameters, follow these step-by-step instructions:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 1: Visit the Supabase website")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If you already have an account, click on the ",(0,r.kt)("em",{parentName:"li"},"Dashboard")," button in the top right corner and  and log in using your credentials."),(0,r.kt)("li",{parentName:"ul"},"If you don't have an account, click on the ",(0,r.kt)("em",{parentName:"li"},"Sign in")," button to either log in or create a new account.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Pinecone landing page",src:a(9165).Z,width:"1837",height:"907"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You can sign up using your email address or opt for a seamless registration process using your GitHub or SSO credentials.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Pinecone landing page",src:a(819).Z,width:"1849",height:"907"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 2: Create a New Project")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"After logging in or signing up, you will be directed to the dashboard. Click on the ",(0,r.kt)("em",{parentName:"li"},"New project")," button to initiate the project creation process.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Pinecone landing page",src:a(4235).Z,width:"1834",height:"914"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Enter the necessary details for the database, including the Name, and set up a strong password for added security."),(0,r.kt)("li",{parentName:"ul"},"Select your preferred region. For the free pricing plan, choose the default option.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Pinecone landing page",src:a(5215).Z,width:"1828",height:"913"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Finally, click on the ",(0,r.kt)("em",{parentName:"li"},"Create new project")," button to have Supabase set up your new project.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 3: Access Project Settings")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"After your project is set up, go to the databases section and then proceed to the settings section of the database.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Pinecone landing page",src:a(8592).Z,width:"1821",height:"908"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Pinecone landing page",src:a(2452).Z,width:"1829",height:"903"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In this section, you will find the Host, User, and Password, which you need to take note of for using with EdgeChains. These parameters will facilitate the integration of Supabase with EdgeChains and enable seamless communication between the two platforms.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 4: Obtain API Credentials")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In the Supabase dashboard, navigate to the API section, where you can access the required URL and anonymous key.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Pinecone landing page",src:a(8427).Z,width:"1820",height:"910"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Continue scrolling down to find the JWT settings, where you can obtain the JWT secret as well.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Pinecone landing page",src:a(8022).Z,width:"1822",height:"911"})),(0,r.kt)("p",null,"By following these steps and obtaining the necessary configuration parameters, you will successfully integrate Supabase with EdgeChains. These parameters will enable you to leverage Supabase's powerful features as the backend for your language model-powered applications, creating secure and high-performance Postgres backends with ease."),(0,r.kt)("hr",null))}g.isMDXComponent=!0},8427:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/API-32673c13b8b71462da72bbb1c960a8ec.png"},2452:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/DBsettings-ebd529ce0a335b50c32b33a08e629602.png"},8022:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/JWT-701e6621991add8c93d71f8b9d069886.png"},5215:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/createDB-431811431be0f2622bcbc86e01da9d75.png"},8592:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/created-1f6941ed035d838b826dee70cbaf3d4d.png"},9165:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/landing-7ceededd9b282d201a1ca501c65eb63e.png"},4235:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/newproj-a59758f2d4b41b390854b1397e6b694e.png"},819:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/signup-e709aef6fbb1bc28b9ec2e90dd2c84e7.png"}}]);