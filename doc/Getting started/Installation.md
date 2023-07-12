---
sidebar_position: 2
---

# Installation 

### Initial setup

EdgeChains can be setup by downloading the release jar.

### Downloading the release jar

> **Note:** EdgeChains requires Java version 17 or above to run. Please make sure you have Java 17 installed on your system before proceeding.

The release jars can be downloaded from the [latest Build and release](https://github.com/arakoodev/EdgeChains/actions) in EdgeChains actions. Click on Latest ***Build and Run***. Download the output.zip file that contains two jar files `flyfly.jar` and `edgechain-app-VERSION_NUMBER.jar`. Both these jar files are need for running edgechains. 

Once downloaded, Follow these steps:

1. Create a new folder in your desired location and Extract the contents of the downloaded `output.zip` file into the newly created folder.

2. Clone the Edgechains repository

```bash
# Clone the repository
 git clone https://github.com/arakoodev/EdgeChains.git 

 # Go to Examples folder
 cd Examples
```
3. Copy or clone all the contents from the _Examples_ folder and paste to the folder where you extracted the `output.zip` file. The _Examples_ folder includes all the jsonnet files and `EdgeChainApplication.java` file.

4. Open the directory where you extracted the output in IntelliJ.

> **Note:** You can use an IDE of your choice, but IntelliJ is preferred as it will index the project automatically and choose **Java SDK 17 or above**, which is necessary for EdgeChains. Also ensure to use a **JBang project**. 

> Optionally, you can rename the file `EdgeChainApplication.java` to your desired name. Write your own code or modify the example implementation according to your requirements.
