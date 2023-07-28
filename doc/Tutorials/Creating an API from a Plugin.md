---
sidebar_position: 3
title: Creating an API with Plugin
---

# Creating an API with External GPT Plugin Integration

This tutorial will guide you through the process of creating a robust API that leverages the functionality of an external GPT plugin. With this API, you can seamlessly integrate multiple plugin chains, and for an extensive collection of GPT plugins, you can explore [Plugin Library by Wellknown AI](https://www.wellknown.ai/).

The development of this plugin API involves three essential classes:

1. **openaiwiki/chains**: This class plays a crucial role in creating an Observable for the plugin chain.

2. **PluginOpenAiService**: In this class, you will define and declare essential information related to the plugin, setting a strong foundation for its integration.

3. **PluginController**: The PluginController class serves as the controller for the GPT plugin, orchestrating its functionalities seamlessly.

## Step-by-Step Guide

1. **Creating the Chain**:
   - Begin by creating a new class within the `openaiwiki/chains` package. This new class will represent the foundation of the plugin chain.
   - Within this class, set up an observable for the plugin chain, enabling efficient handling of its functionalities.

2. **Creating the Services**:
   - In the `openaiwiki/services/impl/PluginOpenAiServiceImpl` package, declare the Plugin URL and Spec URL. These essential declarations will facilitate communication with the GPT plugin.
   - Now, establish a constructor for the previously created plugin chain class, specifying the type of service you want to utilize.

3. **Creating the Controller**:
   - Within the `openaiwiki/controllers/PluginController` package, develop a robust controller to manage and interact with the GPT plugin seamlessly.
   - To ensure smooth operation, make sure to include the method `getScheduledObservableWithoutRetry()` at the end of the controller implementation.

By following these steps, you will have created a robust plugin API, providing advanced language processing capabilities for your applications. Feel confident in running the chain and thoroughly testing its functionalities to enhance your applications. Happy coding!
