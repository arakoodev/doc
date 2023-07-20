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
   - **Description:** Execute a query on Open AI data in the Pinecone namespace.
   - **Method:** GET
   - **URL:** `localhost:8080/v1/examples/pinecone/openai/query?topK=4&query=What is the collect stage for data maturity?&namespace=machine-learning`
   - **Headers:**
     ```
     Content-Type: application/json
     ```

**Request:**

``` bash
GET /v1/examples/pinecone/openai/query?topK=4&query=What is the collect stage for data maturity?&namespace=machine-learning
Content-Type: application/json
```

### 3. Pinecone Chat - Upsert
   - **Description:** Execute a chat message on Open AI data in the Pinecone namespace.
   - **Method:** GET
   - **URL:** `localhost:8080/v1/examples/pinecone/openai/chat?query=Are neural networks part of data maturity?&namespace=machine-learning&id=historycontext:9838938-1e-ff-2fff2-ddd`
   - **Headers:** None
   - **Body:**
     - Mode: raw
     - Raw JSON Body: `{"query": "What is the collect stage for data maturity?"}`

**Request:**

``` bash
GET /v1/examples/pinecone/openai/chat?query=Are neural networks part of data maturity?&namespace=machine-learning&id=historycontext:9838938-1e-ff-2fff2-ddd
```

### <font color="red">Delete</font>
   - **Description:** Delete all data in the Pinecone namespace for the specified machine-learning pattern.
   - **Method:** DELETE
   - **URL:** `localhost:8080/v1/examples/pinecone/deleteAll?namespace=machine-learning`
   - **Headers:**
     ```
     Content-Type: application/json
     ```

**Request:**

``` bash
DELETE /v1/examples/pinecone/deleteAll?namespace=machine-learning
Content-Type: application/json
```

***

## Redis Controller

### 1. Open AI - Upsert
   - **Description:** Upload a file to update Open AI data in the Redis namespace.
   - **Method:** POST
   - **URL:** `localhost:8080/v1/examples/redis/openai/upsert?namespace=machine-learning`
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
POST /v1/examples/redis/openai/upsert?namespace=machine-learning
Content-Type: multipart/form-data

file: <path_to_file>
```

### 2. Open AI - Query
   - **Description:** Execute a query on Open AI data in the Redis namespace.
   - **Method:** GET
   - **URL:** `localhost:8080/v1/examples/redis/openai/query?topK=10&query=What is lexicography? Can you also explain social network analysis&namespace=machine-learning`
   - **Headers:**
     ```
     Content-Type: application/json
     ```

**Request:**

``` bash
POST /v1/examples/redis/openai/upsert?namespace=machine-learning
Content-Type: multipart/form-data

file: <path_to_file>
```

### 3. Redis Chat
   - **Description:** Execute a chat message on Open AI data in the Redis namespace.
   - **Method:** GET
   - **URL:** `localhost:8080/v1/examples/redis/openai/chat?query=Then, what is social engineering?&namespace=machine-learning&id=historycontext:9838938-1e-ff-2fff2-ddd`
   - **Headers:** None
   - **Body:**
     - Mode: raw
     - Raw JSON Body: `{"query": "What is the collect stage for data maturity?"}`


**Request:**

``` bash
GET /v1/examples/redis/openai/chat?query=Then, what is social engineering?&namespace=machine-learning&id=historycontext:9838938-1e-ff-2fff2-ddd
```

### 4. Redis Similarity Search
   - **Description:** Perform a similarity search on Open AI data in the Redis namespace.
   - **Method:** GET
   - **URL:** `localhost:8080/v1/examples/redis/openai/similarity-search?topK=7&query=What is lexicography? Can you also explain social network analysis&namespace=machine-learning`
   - **Headers:**
     ```
     Content-Type: application/json
     ```

**Request:**

``` bash
GET /v1/examples/redis/openai/similarity-search?topK=7&query=What is lexicography? Can you also explain social network analysis&namespace=machine-learning
Content-Type: application/json
```

### <font color="red">Delete</font>

   - **Description:** Delete data in the Redis namespace matching the specified pattern.
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

