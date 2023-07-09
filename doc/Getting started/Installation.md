---
sidebar_position: 2
---

# Installation 

### Initial setup

EdgeChains can be setup either by downloading the release jar or compiling it yourself. We recommend the former.

### Downloading the release jar

> **Note:** EdgeChains requires Java version 17 or above to run. Please make sure you have Java 17 installed on your system before proceeding.

The release jars can be downloaded from the [releases page](https://github.com/arakoodev/EdgeChains/releases). Download both flyfly.jar and edgechain-app-VERSION_NUMBER.jar. Both the jar files need to be compiled. 

Once downloaded, Follow these steps:

```bash
# Clone the repository
 git clone https://github.com/arakoodev/EdgeChains.git && cd FlySpring

# Compile flyfly.jar
cd autoroute && mvn clean package -P gofly
cd ../flyfly && mvn clean package -P gofly
```
The `flyfly.jar` file will be generated in the `Script` folder on the root directory.

```bash
# Compile edgechain-app-VERSION_NUMBER.jar
cd edgechain-app && mvn clean package
cd ../flyfly && mvn clean package -P gofly
```
The `edgechain-app-VERSION_NUMBER.jar` file will be generated in the `FlySpring/edgechain-app/target` directory.

### Integrate EdgeChains into your code

You have the flexibility to explore and experiment with the base EdgeChains library, or seamlessly incorporate it into your existing codebase. To get started, simply follow the step-by-step instructions below:

1. Within your root project folder, which contains the `pom.xml`file, create a new directory named `dependencies`.

2. Copy the `edgechain-app-VERSION_NUMBER.jar` app file into the newly created `dependencies` folder.

3. Open your `pom.xml` file and add the following XML code:

```xml
<dependency>
    <groupId>com.edgechain</groupId>
    <artifactId>edgechain-app</artifactId>
    <version>VERSION_NUMBER</version>
    <scope>system</scope>
    <systemPath>${basedir}/dependencies/edgechain-app-VERSION_NUMBER.jar</systemPath>
</dependency>
```

4. Execute the command
```bash
mvn clean install
```

This command will install the EdgeChains library into your local Maven repository, making it available for your project's use.