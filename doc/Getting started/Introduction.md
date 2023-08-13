---
sidebar_position: 0
---

# Introduction

**EdgeChains** is an powerful framework designed to simplify the creation of applications using large language models. It offers a comprehensive set of tools and functionalities that enable developers to leverage the capabilities of language models effectively. It offers a range of capabilities that enable developers to create applications with the following features:

**Data Integration**: Seamlessly connect language models with other data sources, allowing for rich and comprehensive information processing.

**Interactive Functionality**: Enable language models to interact with their environment, making applications more dynamic and responsive.

Built _specifically for Java_, EdgeChains is an open-source chain-of-thought engineering framework for Large Language Models (LLMs) and OpenAI GPT. It focuses on enterprise-grade applications and scalability, addressing the complexities and challenges associated with working with OpenAI APIs. 

Edgechains also has a framework for building Reasoning+Acting (shortly, ReAct) chains. By providing a streamlined workflow and addressing common challenges, EdgeChains empowers developers to build robust and scalable applications with ease.

---

We believe that traditional Generative AI frameworks primarily focus on the user interface and code library aspects of development. At EdgeChains, we approach development as a deployment and configuration management challenge. We understand that developers often encounter complexities and difficulties when working with OpenAI APIs, leading to code complexity and prompt-related issues. To overcome these challenges, we have built EdgeChains on top of **Jsonnet**, a powerful library developed by Google based on the insights gained from managing 180 million lines of configuration code within Google's Borg infrastructure. 

> Jsonnet is widely adopted for managing complex cloud and Kubernetes clusters.

With EdgeChains, you gain the following key advantages:

- **Versioning for Prompts**: With EdgeChains, prompts are written in jsonnet, enabling easy versioning and differentiation between prompt variations.

- **Automatic Parallelism**: EdgeChains automates the parallelization of LLM chains and chain-of-thought tasks across CPUs, GPUs, and TPUs using the Java Virtual Machine (JVM). This ensures efficient processing and optimal utilization of computing resources.

- **Fault Tolerance**: Designed with robustness in mind, EdgeChains is fault-tolerant and can gracefully handle failures. It employs mechanisms to retry and back off, maintaining the resilience of your applications.

- **Scalability**: EdgeChains is highly scalable, empowering you to develop chain-of-thought applications that can seamlessly handle a significant number of APIs, varied prompt lengths, and diverse vector datasets.

---

## Get started

To get started with EdgeChains, follow the installation instructions outlined in the [Quick Start](Quickstart.md). This guide will walk you through necessary steps to start building your own EdgeChains applications. 




### Key features and benefits

- **Simplified Integration**: EdgeChains abstracts away the complexities of working with language models, providing a user-friendly interface for integration into applications. It handles the underlying infrastructure, allowing developers to focus on application logic.

- **Efficient Prompting**: EdgeChains offers advanced prompt management and manipulation capabilities. Developers can easily define prompts, modify them, and control the interaction with language models to achieve desired outputs.

- **Scalability and Performance**: EdgeChains is designed for scalability and performance. It can handle large-scale applications with ease, leveraging parallelism and distributed computing to achieve optimal throughput.

### Use cases 

EdgeChains finds applications in a wide range of scenarios, including, but not limited to:

1. **Document Analysis and Summarization**: Extracting key information from documents, generating summaries, and performing content analysis.

2. **Chatbot Development**: Building conversational agents that can interact with users, provide responses, and offer personalized experiences.

3. **Code Analysis and Automation**: Assisting developers in analyzing code, generating code snippets, and automating repetitive programming tasks.

### Compatibility and Dependencies

EdgeChains is designed to be compatible with a wide range of programming languages and frameworks. It can seamlessly integrate into projects using Java, Python, JavaScript, and other popular languages. EdgeChains aims to keep dependencies minimal to ensure a smooth integration process. It leverages industry-standard libraries and frameworks to minimize the impact on your existing codebase. By reducing external dependencies, EdgeChains offers a lightweight solution that doesn't introduce unnecessary complexities or conflicts with your existing project dependencies.

### What you'll need

To get started with EdgeChains, you'll need [OpenAI API Keys](https://platform.openai.com/account/api-keys), **Java 11** or higher installed, and a clear **idea of the chain** you want to build.





### Additional resources

Join our vibrant community of developers, builders, and educators. Be inspired, learn, and connect with fellow enthusiasts in our thriving community.

<!-- Check out [YouTube tutorials](/docs/additional_resources/youtube.html) for great tutorials from folks in the community, and [Gallery](https://github.com/kyrolabs/awesome-langchain) for a list of awesome EdgeChains projects. -->

<h3><span style={{color:"#2e8555"}}> Support </span></h3>

Join us on [GitHub](https://github.com/arakoodev/edgechains) or [Discord](https://discord.gg/wgmvkVEKEn) where you can ask questions, share feedback, connect with like-minded developers, and engage in discussions about the future of large language models.

<!-- ## API reference

Head to the [reference](https://api.python.langchain.com) section for full documentation of all classes and methods in the EdgeChains. -->
