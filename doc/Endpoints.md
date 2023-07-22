---
sidebar_position: 12
title: Endpoint Documentation
---

# Endpoint Documentation - Postman Collection

> Postman collection with various endpoints and their associated request and response details.

## Pinecone Controller

### 1. Open AI - Upsert
   - **Description:** Upload a file to update Open AI data in the Pinecone namespace.
   - **Method:** POST
   - **URL:** `localhost:8080/v1/examples/pinecone/openai/upsert?namespace=machine-learning`
   - **Headers:**
     ```
     Content-Type: multipart/form-data
     ```
   - **Body:**
     - Mode: formdata
     - Key: file
     - Type: file

**Request:**

``` bash
POST /v1/examples/pinecone/openai/upsert?namespace=machine-learning
Content-Type: multipart/form-data

file: <path_to_file>
```

### 2. Open AI - Query
   - **Description:**  Perform a query to retrieve results from Open AI in the Pinecone namespace.
   - **Method:** POST
   - **URL:** `localhost:8080/v1/examples/pinecone/openai/query?topK=6&namespace=machine-learning`
   - **Headers:**
     ```
     Content-Type: application/json
     ```

    - **Body:**
     - Mode: raw
     - Data: 

```json
{
    "query": "What is the collect stage for data maturity?"
}
```

**Request:**

``` bash
POST /v1/examples/pinecone/openai/query?topK=6&namespace=machine-learning
Content-Type: application/json

{
    "query": "What is the collect stage for data maturity?"
}
```

### 3. Pinecone Chat 
   - **Description:** Initiate a chat with Open AI in the Pinecone namespace.
   - **Method:** POST
   - **URL:** `localhost:8080/v1/examples/pinecone/openai/chat?namespace=machine-learning&id=historycontext:29557c60-715d-434c-acca-bf3a033783ad`
   - **Headers:** None
   - **Body:**
     - Mode: raw
     - data: 
```json
{
    "query": "What is the collect stage for data maturity?"
}
```

**Request:**

``` bash
POST /v1/examples/pinecone/openai/chat?namespace=machine-learning&id=historycontext:29557c60-715d-434c-acca-bf3a033783ad

{
    "query": "What is the collect stage for data maturity?"
}
```

### <font color="red">Delete All Pinecone Data</font>
   - **Description:** Delete all data in the Pinecone namespace for machine learning.
   - **Method:** DELETE
   - **URL:** `localhost:8080/v1/pinecone/deleteAll?namespace=machine-learning`
   - **Headers:**
     ```
     Content-Type: application/json
     ```

**Request:**

``` bash
DELETE /v1/pinecone/deleteAll?namespace=machine-learning
Content-Type: application/json
```

***
## Postgres Controller

### 1. Open AI - Upsert
   - **Description:** Upload a file to update Open AI data in the Postgres namespace.
   - **Method:** POST
   - **URL:** `localhost:8080/v1/examples/postgres/openai/upsert?table=spring_vectors&namespace=machine-learning`
   - **Headers:**
     ```
     Content-Type: multipart/form-data
     ```
   - **Body:**
     - Mode: formdata
     - Key: file
     - Type: file

**Request:**

``` bash
POST /v1/examples/postgres/openai/upsert?table=spring_vectors&namespace=machine-learning
Content-Type: multipart/form-data

file: <path_to_file>
```

### 2. Open AI - Query
   - **Description:** Perform a query to retrieve results from Open AI in the Postgres namespace.
   - **Method:** POST
   - **URL:** `localhost:8080/v1/examples/postgres/openai/query?topK=5&table=spring_vectors&namespace=machine-learning`
   - **Headers:**
     ```
     Content-Type: application/json
     ```

    - **Body:**
     - Mode: raw
     - Data: 

```json
{
    "query": "What is the collect stage for data maturity?"
}
```

**Request:**

``` bash
POST /v1/examples/postgres/openai/query?topK=5&table=spring_vectors&namespace=machine-learning
Content-Type: application/json

{
    "query": "What is the collect stage for data maturity?"
}
```

### 3. Open AI - Postgres Chat
   - **Description:** Initiate a chat with Open AI in the Postgres namespace.
   - **Method:** POST
   - **URL:** `localhost:8080/v1/examples/postgres/openai/chat?table=spring_vectors&id=historycontext:e350042b-d12b-4cb8-b072-51b854402ab3&namespace=machine-learning`
    - **Headers:**
     ```
     Content-Type: application/json
     ```
   - **Body:**
     - Mode: raw
     - data: 
```json
{
    "query": "What is the collect stage for data maturity?"
}
```

**Request:**

``` bash
POST /v1/examples/postgres/openai/chat?table=spring_vectors&id=historycontext:e350042b-d12b-4cb8-b072-51b854402ab3&namespace=machine-learning
Content-Type: application/json

{
    "query": "What is the collect stage for data maturity?"
}
```

### <font color="red">Delete All Postgres Data</font>
   - **Description:** Delete all data in the Postgres namespace for machine learning.
   - **Method:** DELETE
   - **URL:** `localhost:8080/v1/examples/postgres/deleteAll?table=spring_vectors&namespace=machine-learning`
   - **Headers:**
     ```
     Content-Type: application/json
     ```

**Request:**

``` bash
DELETE /v1/examples/postgres/deleteAll?table=spring_vectors&namespace=machine-learning
Content-Type: application/json
```

***
## Redis Controller

### 1. Open AI - Upsert
   - **Description:** Upload a file to update Open AI data in the Redis namespace.
   - **Method:** POST
   - **URL:** `localhost:8080/v1/examples/redis/openai/upsert?namespace=machine-learning&indexName=vector_index`
   - **Headers:**
     ```
     Content-Type: multipart/form-data
     ```
   - **Body:**
     - Mode: formdata
     - Key: file
     - Type: file

**Request:**

``` bash
POST /v1/examples/redis/openai/upsert?namespace=machine-learning&indexName=vector_index
Content-Type: multipart/form-data

file: <path_to_file>
```

### 2. Open AI - Query
   - **Description:**  Perform a query to retrieve results from Open AI in the Redis namespace.
   - **Method:** POST
   - **URL:** `localhost:8080/v1/examples/redis/openai/query?topK=7&namespace=machine-learning&indexName=vector_index`
   - **Headers:**
     ```
     Content-Type: application/json
     ```
   - **Body:**
   - Mode: raw
   - data: 
```json
{
    "query":  "What is lexicography? Can you also explain social network analysis?"
}
```

**Request:**

``` bash
POST /v1/examples/redis/openai/query?topK=7&namespace=machine-learning&indexName=vector_index
Content-Type: application/json

{
    "query": "What is lexicography? Can you also explain social network analysis?"
}
```

### 3. Redis Chat
   - **Description:** Initiate a chat with Open AI in the Redis namespace.
   - **Method:** POST
   - **URL:** `localhost:8080/v1/examples/redis/openai/chat?namespace=machine-learning&id=historycontext:edd1e8d8-8734-4b8e-aa3d-de6a38f45ca9&indexName=vector_index`
   - **Headers:** None
   - **Body:**
   - Mode: raw
   - data: 
```json
{
    "query":  "What is lexicography? Can you also explain social network analysis?"
}
```


**Request:**

``` bash
POST /v1/examples/redis/openai/chat?namespace=machine-learning&id=historycontext:edd1e8d8-8734-4b8e-aa3d-de6a38f45ca9&indexName=vector_index

{
    "query": "What is lexicography? Can you also explain social network analysis?"
}
```

### 4. Redis Similarity Search
   - **Description:** Perform a similarity search on Open AI data in the Redis namespace.
   - **Method:** POST
   - **URL:** `localhost:8080/v1/examples/redis/openai/similarity-search?topK=7&namespace=machine-learning&indexName=vector_index`
   - **Headers:**
     ```
     Content-Type: application/json
     ```
   - **Body:**
   - Mode: raw
   - data: 
```json
{
    "query": "What is lexicography? Can you also explain social network analysis?"
}
```

**Request:**

``` bash
POST /v1/examples/redis/openai/similarity-search?topK=7&namespace=machine-learning&indexName=vector_index
Content-Type: application/json

{
    "query": "What is lexicography? Can you also explain social network analysis?"
}
```

### <font color="red">Delete Redis Data</font>

   - **Description:** Delete all data in the Redis namespace that matches the specified pattern.
   - **Method:** DELETE
   - **URL:** `localhost:8080/v1/examples/redis/delete?pattern=machine-learning*`
   - **Headers:**
     ```
     Content-Type: application/json
     ```


**Request:**

``` bash
DELETE /v1/examples/redis/delete?pattern=machine-learning*
Content-Type: application/json
```

***

## Wiki Controller

### 1. Wiki Summary
   - **Description:** Retrieve a summary of a given query from the Wiki.
   - **Method:** GET
   - **URL:** `localhost:8080/v1/examples/wiki-summary?query=Barack Obama`
   - **Headers:**
     ```
     Content-Type: application/json
     stream: false
     ```
   - **Body:**
   - Mode: raw
   - data: (empty)

**Request:**

``` bash
GET /v1/examples/wiki-summary?query=Barack Obama
Content-Type: application/json
stream: false
```

***

## HistoryContext

### 1. Create
   - **Description:** Create a new HistoryContext.
   - **Method:** POST
   - **URL:** `localhost:8080/v1/examples/historycontext`
   - **Headers:**
     ```
     Content-Type: application/json
     ```

**Request:**

``` bash
POST /v1/examples/historycontext
Content-Type: application/json
```

### 2. Update
   - **Description:** Update a specific HistoryContext with a new response.
   - **Method:** PUT
   - **URL:** `localhost:8080/v1/examples/historycontext?contextId=9838938-1e-ff-2fff2-ddd`
   - **Headers:**
     ```
     Content-Type: application/json
     ```
   - **Body:**
     - Mode: raw
     - Raw JSON Body: `{"id": "historycontext:3045b527-a146-4c17-8cc5-574380fd3de5", "response": "How are you? Is the key getting updated...."}`

**Request:**

``` bash
PUT /v1/examples/historycontext?contextId=9838938-1e-ff-2fff2-ddd
Content-Type: application/json

{
    "id": "historycontext:3045b527-a146-4c17-8cc5-574380fd3de5",
    "response": "How are you? Is the key getting updated...."
}
```

### 3. Get
   - **Description:** Retrieve a specific HistoryContext using its ID.
   - **Method:** GET
   - **URL:** `localhost:8080/v1/examples/historycontext?id=historycontext:fe56580e-e3a1-447b-9dfc-a1a12007e151`
   - **Headers:**
     ```
     Content-Type: application/json
     ```

**Request:**

``` bash
GET /v1/examples/historycontext?id=historycontext:fe56580e-e3a1-447b-9dfc-a1a12007e151
Content-Type: application/json
```


### <font color="red">Delete</font>

   - **Description:** Delete a specific HistoryContext using its ID.
   - **Method:** DELETE
   - **URL:** `localhost:8080/v1/examples/historycontext?id=historycontext:b5d97e7b-1ae0-4bd8-89e7-64f356abcc19`
   - **Headers:**
     ```
     Content-Type: application/json
     ```

**Request:**

``` bash
DELETE /v1/examples/historycontext?id=historycontext:b5d97e7b-1ae0-4bd8-89e7-64f356abcc19
Content-Type: application/json
```

***

## Doc2Vec

### 1. Build
   - **Description:** Build Doc2Vec data.
   - **Method:** POST
   - **URL:** `localhost:8080/v1/examples/doc2vec`
   - **Headers:**
     ```
     Content-Type: application/json
     ```

**Request:**

``` bash
POST /v1/examples/doc2vec
Content-Type: application/json
```

### 2. Upsert
   - **Description:** Upload a file to update Doc2Vec data in the Redis namespace.
   - **Method:** POST
   - **URL:** `localhost:8080/v1/examples/redis/doc2vec/upsert?namespace=doc2vec`
   - **Headers:**
     ```
     Content-Type: multipart/form-data
     ```
   - **Body:**
     - Mode: formdata
     - Key: file
     - Type: file
     - Source: `/R:/Fiverr/alekhaweb (client)/spark-openai-files/spark/introduction-to-natural-language-processing.pdf`

**Request:**

``` bash
POST /v1/examples/redis/doc2vec/upsert?namespace=doc2vec
Content-Type: multipart/form-data

file: <path_to_file>
```

### 3. Redis Similarity Search
   - **Description:** Perform a similarity search on Doc2Vec data in the Redis namespace.
   - **Method:** GET
   - **URL:** `localhost:8080/v1/examples/redis/doc2vec/similarity-search?topK=3&query=What is lexicography? Can you also explain social network analysis&namespace=machine-learning`
   - **Headers:**
     ```
     Content-Type: application/json
     ```

**Request:**

``` bash
GET /v1/examples/redis/doc2vec/similarity-search?topK=3&query=What is lexicography? Can you also explain social network analysis&namespace=machine-learning
Content-Type: application/json
```
***

