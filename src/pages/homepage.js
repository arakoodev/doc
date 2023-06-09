import React from "react";
import "../css/home.css";
import MDXContent from '@theme/MDXContent';
import TableCont from '../markdown/table.mdx';
export default function Homepage(){
return(<>

<div align="center">

  <img src="https://img.shields.io/github/repo-size/arakoodev/EdgeChains?style=for-the-badge" />
  <img src="https://img.shields.io/github/issues/arakoodev/EdgeChains?style=for-the-badge" />
  <img src="https://img.shields.io/github/issues-pr/arakoodev/EdgeChains?style=for-the-badge" />
  <img src="https://img.shields.io/github/issues-pr-closed-raw/arakoodev/EdgeChains?style=for-the-badge" />
  <img src="https://img.shields.io/github/license/arakoodev/EdgeChains?style=for-the-badge" />
  <img src="https://img.shields.io/github/forks/arakoodev/EdgeChains?style=for-the-badge" />
  <img src="https://img.shields.io/github/stars/arakoodev/EdgeChains?style=for-the-badge" />
  <img src="https://img.shields.io/github/contributors/arakoodev/EdgeChains?style=for-the-badge" />
  <img src="https://img.shields.io/github/last-commit/arakoodev/EdgeChains?style=for-the-badge" />
  </div><br/>
  <div className="aboutcont">
<div align="center" >
<img src="https://user-images.githubusercontent.com/76883/226261289-21a6fd42-ff6f-4d7a-9c59-3c7f149e0f56.png" width="400px" height="400px" style={{margin:"20px"}}/>
  </div>
  <div className="aboutcon2">
<div style={{color:"white" , marginBottom:"10px"}}><h1>What is Arakoo?</h1></div>
<span style={{color:"black",fontWeight:"700",fontSize:"20px" , backgroundColor:"cyan"}}><b style={{color:"red"}}>EdgeChains : LLM chains on-the-edge</b> chain-of-thought engineering for LLM and OpenAI GPT. Built for Java. Built for Enterprise.</span><br/><br/>

Built for Scale EdgeChains, a framework for building large-scale distributed machine learning systems. EdgeChains is built on top of JAX, and provides a number of features that make it well-suited for building distributed machine learning systems, including:<br/>
<br/>
<b style={{color:"yellow"}}> Automatic parallelism </b>: EdgeChains automatically parallelizes LLM chains & chain-of-thought tasks across CPUs, GPUs, and TPUs using the JVM.<br/><br/>
<b style={{color:"yellow"}}>Fault tolerance </b>: EdgeChains is designed to be fault-tolerant, and can continue to retry & backoff even if some of the requests in the system fail.<br/><br/>
<b style={{color:"yellow"}}>Scalability</b>: EdgeChains is designed to be scalable, and can be used to write your chain-of-thought applications on large number of APIs, prompt lengths and vector datasets.
</div>
</div><br/>

<div className="commgui">
<div className="home">
    <h1>🎊 Community</h1>
    
    <p><b>We would be very grateful if you could take 5 seconds to star our repository on Github. It helps get the word out to more LLM developers & open source committers about edgechains.</b><br/><br/>

    <h4>Connect with Us:</h4>
    <div>
        <ul style={{listStyle:"disc"}}>
            <li>Follow us on:<a href="https://twitter.com/arakoodev"> Twitter</a></li>
            <li>Join <a href="https://discord.gg/MtEPK9cnSF"> Discord</a> to write code, get help, or to chat with us!!!</li>
            <li>Open a <a href="https://github.com/arakoodev/edgechains/discussions/new">Discussion</a> with your question</li>
            <li>Open a <a href="https://github.com/arakoodev/edgechains/issues/new">BUG </a></li>
            <li>Check open <a href="https://github.com/arakoodev/edgechains/issues">Github Issues </a></li>
            <li>Make sure to read our <a href="https://github.com/arakoodev/.github/blob/main/CLA.md">contributing CLA </a>.</li>
        </ul>
        
    </div>
    </p>
</div>

<div className="home">
    <h1>🧐 Contributing Guidelines (There is only one)</h1>

    <p>This project hopes and requests for clean pull request merges. the way we merge is squash and merge. This fundamentally can only work if you <b>NEVER ISSUE A PULL REQUEST TWICE FROM THE SAME LOCAL BRANCH</b>. If you create another pull request from same local branch, then the merge will always fail.
    <br/><br/>
    <span style={{color:"#25c2a0"}}>SOLUTION IS SIMPLE</span> - <span style={{color:"yellow"}}><b>ONE BRANCH PER PULL REQUEST</b></span>. We Follow this strictly. if you have created this pull request using your master/main branch, then follow these steps to fix it:<br/><br/>

<TableCont/>
    </p>
</div>
</div>
<div className="home">
    <h1>💌 Acknowledgements</h1>

    <p>
        <ul>
<li>First Hat tip to  <a href="https://github.com/spring-projects/spring-framework"> Spring</a></li>
<li>We are inspired by the spirit of <a href="https://github.com/vercel/next.js/"> Nextjs</a></li>
<li>All the other .<a href="https://github.com/wootzapp/wootz-browser/graphs/contributors"> Contributors</a></li>
<li>Respect to LangChain, Anthropic, Mosaic and the rest of the opensource LLM community</li>
</ul><br/>
We are deeply grateful for sharing your knowledge and never turning anyone away.
We love contributors! Feel free to contribute to this project but please read the <a href="https://github.com/wootzapp/.github/blob/main/CLA.md">CLA</a> first!
    </p>
</div>
<br/>
<div className="home">
    <h1>📜 License</h1>

    <p>Edgechains is open-source OSS software licensed under the MIT license.
    </p>
</div>
<div style={{width:"100%" ,display:"flex", justifyContent:"center" , marginTop:'60px'}}><a href="https://github.com/arakoodev/edgechains/graphs/contributors" >
  <img src="https://contrib.rocks/image?repo=arakoodev/edgechains&max=300&columns=12&anon=0" />
</a></div>
</>);
}