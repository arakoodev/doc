"use strict";(self.webpackChunkalekhaweb=self.webpackChunkalekhaweb||[]).push([[8555],{3905:(e,a,t)=>{t.d(a,{Zo:()=>d,kt:()=>p});var o=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function n(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?n(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,o,r=function(e,a){if(null==e)return{};var t,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)t=n[o],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)t=n[o],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),l=function(e){var a=o.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},d=function(e){var a=l(e.components);return o.createElement(c.Provider,{value:a},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var a=e.children;return o.createElement(o.Fragment,{},a)}},m=o.forwardRef((function(e,a){var t=e.components,r=e.mdxType,n=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(t),m=r,p=u["".concat(c,".").concat(m)]||u[m]||h[m]||n;return t?o.createElement(p,i(i({ref:a},d),{},{components:t})):o.createElement(p,i({ref:a},d))}));function p(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var n=t.length,i=new Array(n);i[0]=m;var s={};for(var c in a)hasOwnProperty.call(a,c)&&(s[c]=a[c]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<n;l++)i[l]=t[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8556:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>n,metadata:()=>s,toc:()=>l});var o=t(7462),r=(t(7294),t(3905));const n={slug:"Vector-Database",title:"Vector-Databas-at-a-Glance",authors:{name:"Arakoo",title:"Arakoo Core Team",url:"https://github.com/arakoodev",image_url:"https://avatars.githubusercontent.com/u/114422989"},tags:["Vector Database","Arakoo"]},i=void 0,s={permalink:"/blog/Vector-Database",editUrl:"https://github.com/arakoodev/doc/tree/main/blog/2023-02-28-vector-database/index.md",source:"@site/blog/2023-02-28-vector-database/index.md",title:"Vector-Databas-at-a-Glance",description:"Vector Database At A Glance",date:"2023-02-28T00:00:00.000Z",formattedDate:"February 28, 2023",tags:[{label:"Vector Database",permalink:"/blog/tags/vector-database"},{label:"Arakoo",permalink:"/blog/tags/arakoo"}],readingTime:5.735,hasTruncateMarker:!1,authors:[{name:"Arakoo",title:"Arakoo Core Team",url:"https://github.com/arakoodev",image_url:"https://avatars.githubusercontent.com/u/114422989",imageURL:"https://avatars.githubusercontent.com/u/114422989"}],frontMatter:{slug:"Vector-Database",title:"Vector-Databas-at-a-Glance",authors:{name:"Arakoo",title:"Arakoo Core Team",url:"https://github.com/arakoodev",image_url:"https://avatars.githubusercontent.com/u/114422989",imageURL:"https://avatars.githubusercontent.com/u/114422989"},tags:["Vector Database","Arakoo"]},prevItem:{title:"how to get OpenAI API key",permalink:"/blog/openai-api-key"}},c={authorsImageUrls:[void 0]},l=[{value:"Vector Database At A Glance",id:"vector-database-at-a-glance",level:2},{value:"Introduction \u2013",id:"introduction-",level:2},{value:"Vector Database?",id:"vector-database",level:2},{value:"Importance of Vector Database",id:"importance-of-vector-database",level:2},{value:"Use-Case Of Vector Database",id:"use-case-of-vector-database",level:2},{value:"Edgechain and Vector Database-",id:"edgechain-and-vector-database-",level:2}],d={toc:l},u="wrapper";function h(e){let{components:a,...t}=e;return(0,r.kt)(u,(0,o.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"vector-database-at-a-glance"},"Vector Database At A Glance"),(0,r.kt)("h2",{id:"introduction-"},"Introduction \u2013"),(0,r.kt)("p",null,"A vector database is a type of database that stores data as high-dimensional vectors, which are mathematical representations of features or attributes. Each vector has a certain number of dimensions, which can range from tens to thousands, depending on the complexity and granularity of the data. The vectors are usually generated by applying some kind of transformation or embedding function to the raw data, such as text, images, audio, video, and others. The embedding function can be based on various methods, such as machine learning models, word embeddings, feature extraction algorithms. Edegchian uses vector database and enhances the backend capabilities of applications built with the framework, enabling developers to create advanced and interactive applications powered by large language models."),(0,r.kt)("h2",{id:"vector-database"},"Vector Database?"),(0,r.kt)("p",null,"Information comes in many forms. Some information is unstructured\u2014like text documents, rich media, and audio\u2014and some is structured\u2014like application logs, tables, and graphs. Innovations in artificial intelligence and machine learning (AI/ML) have allowed us to create a type of ML model\u2014embedding models. Embeddings encode all types of data into vectors that capture the meaning and context of an asset. This allows us to find similar assets by searching for neighboring data points. Vector search methods allow unique experiences like taking a photograph with your smartphone and searching for similar images.\nVector databases provide the ability to store and retrieve vectors as high-dimensional points. They add additional capabilities for efficient and fast lookup of nearest-neighbors in the N-dimensional space. They are typically powered by k-nearest neighbor (k-NN) indexes and built with algorithms like the Hierarchical Navigable Small World (HNSW) and Inverted File Index (IVF) algorithms. Vector databases provide additional capabilities like data management, fault tolerance, authentication and access control, and a query engine.\nFor example, you can use a vector database to:\n\u2022\tfind images that are similar to a given image based on their visual content and style\n\u2022\tfind documents that are similar to a given document based on their topic and sentiment\n\u2022\tfind products that are similar to a given product based on their features and ratings\nTo perform similarity search and retrieval in a vector database, you need to use a query vector that represents your desired information or criteria. The query vector can be either derived from the same type of data as the stored vectors (e.g., using an image as a query for an image database), or from different types of data (e.g., using text as a query for an image database). Then, you need to use a similarity measure that calculates how close or distant two vectors are in the vector space. The similarity measure can be based on various metrics, such as cosine similarity, euclidean distance, hamming distance, jaccard index.\nThe result of the similarity search and retrieval is usually a ranked list of vectors that have the highest similarity scores with the query vector. You can then access the corresponding raw data associated with each vector from the original source or index."),(0,r.kt)("h2",{id:"importance-of-vector-database"},"Importance of Vector Database"),(0,r.kt)("p",null,"Your developers can index vectors generated by embeddings into a vector database. This allows allowing them to find similar assets by querying for neighboring vectors.\nVector databases provide a method to operationalize embedding models. Application development is more productive with database capabilities like resource management, security controls, scalability, fault tolerance, and efficient information retrieval through sophisticated query languages.\nVector databases ultimately empower developers to create unique application experiences. For example, your users could snap photographs on their smartphones to search for similar images.\nDevelopers can use other types of machine learning models to automate metadata extraction from content like images and scanned documents. They can index metadata alongside vectors to enable hybrid search on both keywords and vectors. They can also fuse semantic understanding into relevancy ranking to improve search results.\nInnovations in generative artificial intelligence (AI) have introduce new types of models like ChatGPT that can generate text and manage complex conversations with humans. Some can operate on multiple modalities; for instance, some models allow users to describe a landscape and generate an image that fits the description.\nGenerative models are, however, prone to hallucinations, which could, for instance, cause a chatbot to mislead users. Vector databases can complement generative AI models. They can provide an external knowledge base for generative AI chatbots and help ensure they provide trustworthy information.\nHow are vector databases used?\nVector databases are typically used to power vector search use cases like visual, semantic, and multimodal search. More recently, they\u2019re paired with generative artificial intelligence (AI) text models to create intelligent agents that provide conversational search experiences.\nThe development process starts with building an embedding model that\u2019s designed to encode a corpus like product images into vectors. The data import process is also called data hydration. The application developer can now use the database to search for similar products by encoding a product image and using the vector to query for similar images.\nWithin the model, the k-nearest neighbor (k-NN) indexes provide efficient retrieval of vectors and apply a distance function like cosine to rank results by similarity. "),(0,r.kt)("h2",{id:"use-case-of-vector-database"},"Use-Case Of Vector Database"),(0,r.kt)("p",null,"Vector databases are for developers who want to create vector search powered experiences. An application developer can use open-source models, automated machine learning (ML) tools, and foundational model services to generate embeddings and hydrate a vector database. This requires minimal ML expertise.\nA team of data scientists and engineers can build expertly tuned embeddings and operationalize them through a vector database. This can help them deliver artificial intelligence (AI) solution faster.\nOperations teams benefit from managing solutions as familiar database workloads. They can use existing tools and playbooks.\nWhat are the benefits of vector databases?\nVector databases allow developers to innovate and create unique experiences powered by vector search. They can accelerate artificial intelligence (AI) application development and simplify the operationalization of AI-powered application workloads.\nVector databases provide an alternative to building on top of bare k-nearest neighbor (k-NN) indexes. That kind of index requires a great deal of additional expertise and engineering to use, tune and operationalize.\nA good vector database provides applications with a foundation through features like data management, fault tolerance, critical security features, and a query engine. These capabilities allow users to operationalize their workloads to simplify scaling, maintain high scalability, and support security requirements.\nCapabilities like the query engine and SDKs simplify application development. They also allow developers to perform more advanced queries (like searching and filtering) on metadata as part of a k-NN search. They also have the option to use hybrid relevancy scoring models that blend traditional term frequency models like BM25 with vector scores to enhance information retrieval."),(0,r.kt)("h2",{id:"edgechain-and-vector-database-"},"Edgechain and Vector Database-"),(0,r.kt)("p",null,"The following API Examples will give you brief description of how edgechain uses vector databases -"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#6-creating-historycontext-using-redis-controller"}," Creating HistoryContext (Using Redis) Controller")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#7-creating-historycontext-using-postgresql-controller"}," Creating HistoryContext (Using PostgreSQL) Controller"))))}h.isMDXComponent=!0}}]);