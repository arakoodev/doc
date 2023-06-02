---
sidebar_position: 2
---

# Plugin - Klarna Shopping Search

This plugin is a wrapper for the Klarna Shopping Search API. It allows you to search for products and get product details.

- You can add as many plugin chains as you want, the tutorial can be **[found here.](https://www.arakoo.ai/doc/category/Tutorials)**

The creation of this plugin API was done using **3 classes:** 

- **KlarnaChain** - This class creates an Observable for this chain.
- **PluginOpenAiService** - This class will contain information and declaration of the plugin.
- **PluginController** - This class will contain the controller for the plugin. 

# To run the chain go to:

``
localhost:8080/plugin/Klarna?query=YOUR_QUERY
``

# Example Queries can be:

- “What is the price of the iPhone 12 at Klarna?”
- "What black t-shirts are available at Klarna?"
