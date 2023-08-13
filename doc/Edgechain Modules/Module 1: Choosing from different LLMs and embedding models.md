# Models: Choosing from different LLMs and embedding models  

Currently, many different LLMs are emerging. LangChain offers integrations to a wide range of models and a streamlined interface to all of them.
LangChain differentiates between three types of models that differ in their inputs and outputs:

-LLMs take a string as an input (prompt) and output a string (completion).
  ```
  code to be inserted
  ```
  -Chat models are similar to LLMs. They take a list of chat messages as input and return a chat message.
  
  -Text embedding models take text input and return a list of floats (embeddings), which are the numerical 
  representation of the input text.  Embeddings help extract information from a text. 
  This information can then be later used, e.g., for calculating similarities between texts (e.g., movie summaries).
  ```
code to be inserted
```
