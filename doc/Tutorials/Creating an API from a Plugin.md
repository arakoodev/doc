---
sidebar_position: 2
---

# Creating an API from a Plugin

This tutorial will show you how to create an API that uses an external GPT plugin. 
 - you can add as many plugin chains as you want, some GPT plugins can be **[found here.](https://www.wellknown.ai/)**

The creation of this plugin API was done using **3 classes:** 
 - **openaiwiki/chains** - This class creates an Observable for this chain.
 - **PluginOpenAiService** - This class will contain information and declaration of the plugin.
 - **PluginController** - This class will contain the controller for the plugin.

## Creating the chain
 - Create a new chain by creating a new class in the openaiwiki/chains package and create an observable for the chain.

## Create the services
 - in package openaiwiki/services/impl/PluginOpenAiServiceImpl declare the Plugin URL and Spec URL.
 - Now, create a constructor for the chain created in the previous step and define what kind of service you want to use

## Create the controller
- in package openaiwiki/controllers/PluginController create a controller for the plugin.
- Remember to add the method **.getScheduledObservableWithoutRetry()** in the end.

That's it! You have created a plugin API. Now you can run the chain and test it out.