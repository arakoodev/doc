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

### <font color="black"> In Redis</font>
### a. Create
   - **Description:** Create a new HistoryContext in redis.
   - **Method:** POST
   - **URL:** `localhost:8080/v1/examples/redis/historycontext`
   - **Headers:**
     ```
     Content-Type: application/json
       ```
   - **Body:**
   - Mode: raw
   - data: (empty)

**Request:**

``` bash
POST /v1/examples/redis/historycontext
Content-Type: application/json
```

### b. Update
   - **Description:**  Update a HistoryContext in Redis.
   - **Method:** PUT
   - **URL:** `localhost:8080/v1/examples/redis/historycontext`
   - **Headers:**
     ```
     Content-Type: application/json
     ```
   - **Body:**
     - Mode: raw
     - Date:
```json
{
    "id": "historycontext:209fa722-1aa7-4495-ac5c-462beba721ae",
    "response": ""
}
```

**Request:**

``` bash
PUT /v1/examples/redis/historycontext
Content-Type: application/json

{
    "id": "historycontext:209fa722-1aa7-4495-ac5c-462beba721ae",
    "response": ""
}
```

### c. Get
   - **Description:** Get a specific HistoryContext from Redis.
   - **Method:** GET
   - **URL:** `localhost:8080/v1/examples/redis/historycontext?id=historycontext:209fa722-1aa7-4495-ac5c-462beba721ae`
   - **Headers:**
     ```
     Content-Type: application/json
     ```

**Request:**

``` bash
GET /v1/examples/redis/historycontext?id=historycontext:209fa722-1aa7-4495-ac5c-462beba721ae
Content-Type: application/json
```


### <font color="red"> Delete HistoryContext</font>

   - **Description:** Delete a specific HistoryContext using it's ID from Redis.
   - **Method:** DELETE
   - **URL:** `localhost:8080/v1/examples/redis/historycontext?id=historycontext:af7c750f-f67e-4d9a-94e0-b10f6f434b07`
   - **Headers:**
     ```
     Content-Type: application/json
     ```

**Request:**

``` bash
DELETE /v1/examples/redis/historycontext?id=historycontext:af7c750f-f67e-4d9a-94e0-b10f6f434b07
Content-Type: application/json
```

***

### <font color="black"> In PostgreSQL</font>
### a. Create
   - **Description:** Create a new HistoryContext in PostgreSQL.
   - **Method:** POST
   - **URL:** `localhost:8080/v1/examples/postgresql/historycontext`
   - **Headers:**
     ```
     Content-Type: application/json
       ```
   - **Body:** (empty)

**Request:**

``` bash
POST /v1/examples/postgresql/historycontext
Content-Type: application/json
```

### b. Update
   - **Description:** Update a HistoryContext in PostgreSQL.
   - **Method:** PUT
   - **URL:** `localhost:8080/v1/examples/postgresql/historycontext`
   - **Headers:**
     ```
     Content-Type: application/json
     ```
   - **Body:**
     - Mode: raw
     - Data:
```json
{
    "id": "historycontext:0bbde9f8-88e6-413f-97d6-786033d59b7d",
    "response": ""
}
```

**Request:**

``` bash
PUT /v1/examples/postgresql/historycontext
Content-Type: application/json

{
    "id": "historycontext:0bbde9f8-88e6-413f-97d6-786033d59b7d",
    "response": ""
}
```

### c. Get
   - **Description:** Get a specific HistoryContext from PostgreSQL.
   - **Method:** GET
   - **URL:**  `localhost:8080/v1/examples/postgresql/historycontext?id=historycontext:e350042b-d12b-4cb8-b072-51b854402ab3`
   - **Headers:**
     ```
     Content-Type: application/json
     ```

**Request:**

``` bash
GET /v1/examples/postgresql/historycontext?id=historycontext:e350042b-d12b-4cb8-b072-51b854402ab3
Content-Type: application/json
```


### <font color="red"> Delete HistoryContext</font>

   - **Description:** Delete a specific HistoryContext from PostgreSQL.
   - **Method:** DELETE
   - **URL:** `localhost:8080/v1/examples/postgresql/historycontext?id=historycontext:437282ce-e31c-4ef7-b4bd-79a62ec98271`
   - **Headers:**
     ```
     Content-Type: application/json
     ```

**Request:**

``` bash
DELETE /v1/examples/postgresql/historycontext?id=historycontext:437282ce-e31c-4ef7-b4bd-79a62ec98271
Content-Type: application/json
```

***

## Doc2Vec

### 1. Build
   - **Description:** Build a Doc2Vec model.
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
     - Date: `file: (file data)`

**Request:**

``` bash
POST /v1/examples/redis/doc2vec/upsert?namespace=doc2vec
Content-Type: multipart/form-data

file: (file data)
```

### 3. Redis Similarity Search
   - **Description:** Perform a similarity search on Doc2Vec data in the Redis namespace.
   - **Method:** GET
   - **URL:** `localhost:8080/v1/examples/redis/doc2vec/similarity-search?topK=3&namespace=machine-learning&query=What is lexicography?`
   - **Headers:**
     ```
     Content-Type: application/json
     ```

**Request:**

``` bash
GET /v1/examples/redis/doc2vec/similarity-search?topK=3&namespace=machine-learning&query=What is lexicography?
Content-Type: application/json
```
***


## Supabase

### 1. Login
   - **Description:** Authenticate the user and get an access token.
   - **Method:** POST
   - **URL:** `localhost:8080/v1/login`
   - **Headers:** (none)
   - **Body:**
     - Mode: raw
     - Data:
```json
{
    "email": "hiyafi2304@nmaller.com",
    "password": "123456789"
}
```

**Request:**

``` bash
POST /v1/login

{
    "email": "hiyafi2304@nmaller.com",
    "password": "123456789"
}
```

### 2. Signup
   - **Description:** Create a new user account.
   - **Method:** POST
   - **URL:** `localhost:8080/v1/signup`
   - **Headers:**
     ```
     Content-Type: application/json
     ```
  - **Body:**
     - Mode: raw
     - Data:
```json
{
    "email": "hiyafi2304@nmaller.com",
    "password": "123456789"
}
```

**Request:**

``` bash
POST /v1/signup
Content-Type: application/json

{
    "email": "hiyafi2304@nmaller.com",
    "password": "123456789"
}
```

### 3. Refresh Token
   - **Description:** Get a new access token using the refresh token.
   - **Method:** POST
   - **URL:** `localhost:8080/v1/refreshToken`
   - **Headers:** (none)
   - **Body:**
     - Mode: raw
     - Data:
```json
{
    "refreshToken": "sb7benGoy1fnPSR_CONpJg"
}
```
**Request:**

``` bash
POST /v1/refreshToken

{
    "refreshToken": "sb7benGoy1fnPSR_CONpJg"
}
```


### 4. Signout
   - **Description:** Sign out the user by invalidating the access token.
   - **Method:** POST
   - **URL:** `localhost:8080/signout`
    - **Headers:**
     ```
     Authorization: Bearer eyJhbGciOiJIUzI1NiIsImtpZCI6IjZEME1JeERTQ0lpa3o2QjUiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNjg5Njk4MTY0LCJpYXQiOjE2ODk2OTQ1NjQsImlzcyI6Imh0dHBzOi8vaHR0cHM6Ly9pdGxnZGRxaGx4aGRibmNkcW93YS5zdXBhYmFzZS5jby9hdXRoL3YxIiwic3ViIjoiZWYzNjU3NmMtY2FkOC00OGZmLWExNzktNzExMzQwNjAxZjgwIiwiZW1haWwiOiJoaXlhZmkyMzA0QG5tYWxsZXIuY29tIiwicGhvbmUiOiIiLCJhcHBfbWV0YWRhdGEiOnsicHJvdmlkZXIiOiJlbWFpbCIsInByb3ZpZGVycyI6WyJlbWFpbCJdfSwidXNlcl9tZXRhZGF0YSI6e30sInJvbGUiOiJhdXRoZW50aWNhdGVkIiwiYWFsIjoiYWFsMSIsImFtciI6W3sibWV0aG9kIjoicGFzc3dvcmQiLCJ0aW1lc3RhbXAiOjE2ODk2OTQ1NjR9XSwic2Vzc2lvbl9pZCI6ImYwOGJmNGJhLWFlOWEtNGRkMC04NTI3LWE0YWJjMjRmOGM5ZSJ9.0Cg9XmmgPYxu4ekZ0A_d65kzEtvjkJfA-REAsJ1JvLE
     ```

**Request:**

``` bash
POST /signout
Authorization: Bearer YOUR_ACCESS_TOKEN
```
***