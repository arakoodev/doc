---
sidebar_position: 7
---

# Using EdgeChains with Maven
### Integrate EdgeChains into your code

Integrating EdgeChains into your Maven project is a straightforward process. By following the steps below, you can seamlessly incorporate EdgeChains into your codebase:

1. Create a new directory named `dependencies` within the root folder of your project, where the `pom.xml` file is located.

2. Copy the `edgechain-app-VERSION_NUMBER.jar` app file into the newly created `dependencies` folder.

3. Open your `pom.xml` file and add the following XML code within the `<dependencies>` section:

```xml
<dependency>
    <groupId>com.edgechain</groupId>
    <artifactId>edgechain-app</artifactId>
    <version>VERSION_NUMBER</version>
    <scope>system</scope>
    <systemPath>${basedir}/dependencies/edgechain-app-VERSION_NUMBER.jar</systemPath>
</dependency>
```
> **Note:** Make sure to replace VERSION_NUMBER with the actual version number of the EdgeChains library you are using.

4. Execute the following command in your terminal or command prompt:

```bash
mvn clean install
```

This command will install the EdgeChains library into your local Maven repository, making it available for use in your project.

### What is Maven?

Maven is a build automation tool primarily used for Java projects. It provides a comprehensive and standardized way to manage project dependencies, build processes, and project documentation. Maven uses a declarative XML-based configuration file called `pom.xml` (Project Object Model) to define project settings, dependencies, and build instructions.

With Maven, you can easily manage project dependencies, resolve transitive dependencies, and ensure consistent builds across different environments. Maven also provides plugins and lifecycle management to automate various build phases, such as compilation, testing, packaging, and deployment.