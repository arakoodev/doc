# Prompts: Managing LLM inputs
LLMs have weird APIs. Although inputting prompts to LLMs in natural language should feel intuitive, it takes quite a bit of tweaking of the prompt until you get the desired output from an LLM. This process is called prompt engineering.
Once you have a good prompt, you may want to use it as a template for other purposes. Thus, LangChain provides you with so-called PromptTemplates, which help you construct prompts from multiple components.
```
code
```
The above prompt can be viewed as a zero-shot problem setting, where you hope the LLM was trained on enough relevant data to provide a satisfactory response.
Another trick to improve the LLM’s output is to add a few examples in the prompt and make it a few-shot problem setting.
```
code
```
The above code will generate a prompt template and compose the following prompt based on the provided examples and input:
```
output
```
