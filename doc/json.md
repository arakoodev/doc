# Endpoint documentation

>Postman collection with various endpoints and their associated request and response details.

# Pinecone controller

## Open AI

### Upsert

**Request:**

``` bash
POST /v1/examples/pinecone/openai/upsert?namespace=machine-learning
Content-Type: multipart/form-data

file: <path_to_file>
```

**Response**

(empty, as the "response" field is an empty array)


### Query

**Request:**

``` bash
GET /v1/examples/pinecone/openai/query?topK=4&query=What is the collect stage for data maturity?&namespace=machine-learning
Content-Type: application/json
```

**Response**

(empty, as the "response" field is an empty array)

## Pinecone Chat

### Upsert

**Request:**

``` bash
GET /v1/examples/pinecone/openai/chat?query=Are neural networks part of data maturity?&namespace=machine-learning&id=historycontext:9838938-1e-ff-2fff2-ddd
```

**Response**

(empty, as the "response" field is an empty array)

### Delete

**Request:**

``` bash
DELETE /v1/examples/pinecone/deleteAll?namespace=machine-learning
Content-Type: application/json
```

**Response**

(empty, as the "response" field is an empty array)

# Redis Controller

## Open AI

**Request:**

``` bash
POST /v1/examples/redis/openai/upsert?namespace=machine-learning
Content-Type: multipart/form-data

file: <path_to_file>
```

**Response**

(empty, as the "response" field is an empty array)

## Query

**Request:**

``` bash
POST /v1/examples/redis/openai/upsert?namespace=machine-learning
Content-Type: multipart/form-data

file: <path_to_file>
```

**Response**

(empty, as the "response" field is an empty array)

## Redis Chat

**Request:**

``` bash
GET /v1/examples/redis/openai/chat?query=Then, what is social engineering?&namespace=machine-learning&id=historycontext:9838938-1e-ff-2fff2-ddd
```

**Response**

(empty, as the "response" field is an empty array)

## Redis Similarity Search

**Request:**

``` bash
GET /v1/examples/redis/openai/similarity-search?topK=7&query=What is lexicography? Can you also explain social network analysis&namespace=machine-learning
Content-Type: application/json
```

**Response**

(empty, as the "response" field is an empty array)

## Delete

**Request:**

``` bash
DELETE /v1/examples/redis/delete?pattern=machine-learning*
Content-Type: application/json
```

**Response**

(empty, as the "response" field is an empty array)

# Wiki Controller

## Wiki Summary

**Request:**

``` bash
GET /v1/examples/wiki-summary?query=Barack Obama
Content-Type: application/json
stream: false
```

**Response**

(empty, as the "response" field is an empty array)

# HistoryContext

## Create

**Request:**

``` bash
POST /v1/examples/historycontext
Content-Type: application/json
```

**Response**

(empty, as the "response" field is an empty array)

## Update

**Request:**

``` bash
PUT /v1/examples/historycontext?contextId=9838938-1e-ff-2fff2-ddd
Content-Type: application/json

{
    "id": "historycontext:3045b527-a146-4c17-8cc5-574380fd3de5",
    "response": "How are you? Is the key getting updated...."
}
```

**Response**

(empty, as the "response" field is an empty array)

## Get

**Request:**

``` bash
GET /v1/examples/historycontext?id=historycontext:fe56580e-e3a1-447b-9dfc-a1a12007e151
Content-Type: application/json
```

**Response**

(empty, as the "response" field is an empty array)

## Delete

**Request:**

``` bash
DELETE /v1/examples/historycontext?id=historycontext:b5d97e7b-1ae0-4bd8-89e7-64f356abcc19
Content-Type: application/json
```

**Response**

(empty, as the "response" field is an empty array)

# Doc2Vec

## Build

**Request:**

``` bash
POST /v1/examples/doc2vec
Content-Type: application/json
```

**Response**

(empty, as the "response" field is an empty array)

## Upsert

**Request:**

``` bash
POST /v1/examples/redis/doc2vec/upsert?namespace=doc2vec
Content-Type: multipart/form-data

file: <path_to_file>
```

**Response**

(empty, as the "response" field is an empty array)

## Redis Similarity Search

**Request:**

``` bash
GET /v1/examples/redis/doc2vec/similarity-search?topK=3&query=What is lexicography? Can you also explain social network analysis&namespace=machine-learning
Content-Type: application/json
```

**Response**

(empty, as the "response" field is an empty array)