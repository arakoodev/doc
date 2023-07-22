---
slug: Supabase
title: Getting Started with Supabase 
authors:
  name: Arakoo
  title: Arakoo Core Team
  url: https://github.com/arakoodev
  image_url: https://avatars.githubusercontent.com/u/114422989
tags: [Supabase, Arakoo]
---

## Introduction
**Supabase** is a powerful, open-source platform that simplifies the creation of secure and high-performance Postgres backends, offering functionalities similar to Firebase, such as authentication and real-time database. When used with **EdgeChains**, Supabase enhances the backend capabilities of applications built with the framework, enabling developers to create advanced and interactive applications powered by large language models.

In the EdgeChains configuration, the following parameters need to be configured for Supabase integration:

- **SupabaseURL**: The URL of the Supabase backend, which allows EdgeChains to communicate with the Supabase service.

- **Supabase AnnonKey**: The anonymous key used for authentication when interacting with the Supabase backend.

- **Supabase JWTSecret**: The JSON Web Token (JWT) secret for secure communication and user authentication.

- **jdbc:postgresql://${SUPABASE_DB_URK}/postgres**: The JDBC URL for connecting to the PostgreSQL database in Supabase. This URL provides the necessary information to establish a connection to the database.

- **DbUsername**: The username for the PostgreSQL database in Supabase. In this example, it is set to "postgres."

- **DbPassword**: The password for the PostgreSQL database in Supabase, which is required for authentication and access to the database.

By providing the appropriate values for these configuration parameters, EdgeChains can seamlessly integrate with Supabase, enabling developers to leverage the features and functionalities of Supabase as the backend for their language model-powered applications.
