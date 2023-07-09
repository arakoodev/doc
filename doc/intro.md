---
sidebar_position: 1
---

# EdgeChains

EdgeChains is an powerful framework designed to simplify the creation of applications using large language models. It offers a comprehensive set of tools and functionalities that enable developers to leverage the capabilities of language models effectively.

Built specifically for Java, EdgeChains is an open-source chain-of-thought engineering framework for Large Language Models (LLMs) and OpenAI GPT. It focuses on enterprise-grade applications and scalability, addressing the complexities and challenges associated with working with OpenAI APIs. Edgechains also has a framework for building  Reasoning+Acting (shortly, ReAct) chains. By providing a streamlined workflow and addressing common challenges, EdgeChains empowers developers to build robust and scalable applications with ease.

We believe that traditional Generative AI frameworks primarily focus on the user interface and code library aspects of development. However, at EdgeChains, we approach development as a deployment and configuration management challenge. We understand that developers often encounter complexities and difficulties when working with OpenAI APIs, leading to code complexity and prompt-related issues. To overcome these challenges, we have built EdgeChains on top of jsonnet, a powerful library developed by Google based on the insights gained from managing 180 million lines of configuration code within Google's Borg infrastructure. Jsonnet is widely adopted for managing complex cloud and Kubernetes clusters.

With EdgeChains, you gain the following key advantages:

- **Versioning for Prompts**: With EdgeChains, prompts are written in jsonnet, enabling easy versioning and differentiation between prompt variations.

- **Automatic Parallelism**: EdgeChains automates the parallelization of LLM chains and chain-of-thought tasks across CPUs, GPUs, and TPUs using the Java Virtual Machine (JVM). This ensures efficient processing and optimal utilization of computing resources.

- **Fault Tolerance**: Designed with robustness in mind, EdgeChains is fault-tolerant and can gracefully handle failures. It employs mechanisms to retry and back off, maintaining the resilience of your applications.

- **Scalability**: EdgeChains is highly scalable, empowering you to develop chain-of-thought applications that can seamlessly handle a significant number of APIs, varied prompt lengths, and diverse vector datasets.

### Key features and benefits

- **Simplified Integration**: EdgeChains abstracts away the complexities of working with language models, providing a user-friendly interface for integration into applications. It handles the underlying infrastructure, allowing developers to focus on application logic.

- **Efficient Prompting**: EdgeChains offers advanced prompt management and manipulation capabilities. Developers can easily define prompts, modify them, and control the interaction with language models to achieve desired outputs.

- **Scalability and Performance**: EdgeChains is designed for scalability and performance. It can handle large-scale applications with ease, leveraging parallelism and distributed computing to achieve optimal throughput.

### Use Cases   

EdgeChains finds applications in a wide range of scenarios, including, but not limited to:

1. **Document Analysis and Summarization**: Extracting key information from documents, generating summaries, and performing content analysis.

2. **Chatbot Development**: Building conversational agents that can interact with users, provide responses, and offer personalized experiences.

3. **Code Analysis and Automation**: Assisting developers in analyzing code, generating code snippets, and automating repetitive programming tasks.



### Compatibility and Dependencies

EdgeChains is designed to be compatible with a wide range of programming languages and frameworks. It can seamlessly integrate into projects using Java, Python, JavaScript, and other popular languages. EdgeChains aims to keep dependencies minimal to ensure a smooth integration process. It leverages industry-standard libraries and frameworks to minimize the impact on your existing codebase. By reducing external dependencies, EdgeChains offers a lightweight solution that doesn't introduce unnecessary complexities or conflicts with your existing project dependencies.


### What you'll need

- [OpenAI API Keys](https://platform.openai.com/account/api-keys)
- Java 11 or higher
- Any build tool (Maven, Gradle, etc)
- Idea for your chain.

## Contents <a name="contents"></a>

### [Getting Started](category/getting-started)
- Installation Instructions
- System Requirements
- Basic Setup and Configuration
- Playgrounds

### [Core concepts](Core_concepts)
- Components and Interactions
- Workflow and Data Flow
- Schematic Representation


### [Configuration and Customization](Config)
- Configuration Options and Parameters
- Customizing Language Chains
- Provide examples of customizations
- Customizing ReAct Chains
- Configuration Files and Formats

### Best Practices
- Efficient Usage of EdgeChains
- Performance Optimization
- Scalability Considerations
- Error Handling and Resilience
- Testing and Debugging

###  API Reference
- Introduction to the EdgeChains API
- Endpoint Documentation
- Authentication and Authorization
- SDKs and Client Libraries

### Frequently Asked Questions (FAQ)

### [Community and Support](Community_and_Support)

### [Contributing to EdgeChains](Contribute)
- Reporting Issues
- Making Code Contributions
- Submitting Pull Requests
- Feature Requests and Suggestions
- Engaging with the Community
