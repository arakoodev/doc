# Upcoming features

Sources Used: In this example, we will be using the OpenAI service as our primary source for natural language processing.

Endpoint Classes: The core of the project revolves around the Endpoint classes. These classes serve as the center of gravity for the entire project. For more details, you can refer to the section on Endpoint Classes.

Retry Strategy: We have implemented a retry strategy for connecting to the Open AI API. If any error is returned during the connection attempt, we utilize retry mechanisms to handle it. The two types of retry mechanisms used are:

FixedDelay(): This mechanism specifies how many times the request should be retried at fixed intervals if there is an error.
ExponentialDelay(): This mechanism provides faster retries but will eventually return an error if the API is not responsive.
Please note that the endpoint classes won't perform any retries if the retry mechanism is not explicitly specified.

---

Both @Bean and @Primary are powerful annotations in Spring, allowing you to define and control the creation and injection of beans in your application context.  Note that this configuration will only be required if you are using Redis in your application. If Redis is not needed, you can remove this configuration.If you are not using Redis, you can safely remove the above configuration. However, if you are using Redis, this bean definition with @Primary annotation ensures that this specific instance of RedisEnv will be used as the primary bean when autowiring, in case there are multiple RedisEnv instances defined.

@Bean is used to indicate that a method is a Spring Bean factory method. When Spring scans the configuration classes, it detects methods annotated with @Bean and considers them as factory methods that produce bean instances. These bean instances are managed by the Spring container, and they can be autowired into other parts of the application.

@Primary is used in conjunction with @Bean to indicate that a particular bean should be given higher preference when multiple beans of the same type are available for autowiring. If multiple beans of the same type are defined, the one marked with @Primary will be considered as the primary candidate for autowiring.

---

## Supabase Environment

before supabase environment
postgressSQL uses a DB, similar to firebase. If I do not want to use supabase and only need postgressSQL DB in cloud, use env.setDBHost and setDBUsername and setDbPassword. 

By default, every API must be authenticated. But if we want to exclude some API calls from, use Exclude mapping filter. 
Skip every api starting from v1/examples remove all

if login is removed, we get unauthorised login error. 

---

retry not with wiki
retry is a backup mechanism in a hope that it wil give 200 success response. 