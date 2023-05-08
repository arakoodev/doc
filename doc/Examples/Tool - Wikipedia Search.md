# Tool - WikiSearch

- This example demonstrates an example chain called **WikiChain** which provides current time (updated) information to GPT-3 and asks it to search Wikipedia for the given query.


- The chain is composed of two Service Classes: **BuilderService** and **WikiClientService**. 


- **BuilderService** is responsible for building the chain and **WikiClientService** is responsible for interacting with the Wikipedia API.
 
# To run the chain go to:

``
localhost:8080/builder/openai-wiki?query=Question : YOUR_QUERY
``

# Example Queries can be:
 
- “Author David Chanoff has collaborated with a U.S. Navy admiral who served as the ambassador to the United Kingdom under which President?”
- “What is the name of the 1994 film starring Keanu Reeves and Sandra Bullock?”


This example demonstrates the use of a Tool called WikiSearch. A searching tool like this can be implemented for various other purposes like:- 
- on a database for querying internal databases of companies or organizations.
- on a search engine for querying the web.