# Redis: In-Memory Data Store and Caching

## Introduction

Redis is a powerful, open-source, in-memory data store and caching system. It excels in providing low-latency data access and is widely used to improve application performance through caching.

## Table of Contents
1. [Key Redis Features](#key-redis-features)
2. [Redis Use Cases](#redis-use-cases)
3. [Caching with Redis](#caching-with-redis)
   - [Caching Principles](#caching-principles)
   - [Using Redis for Caching](#using-redis-for-caching)
   - [Caching in `ask_va_api`](#caching-in-ask_va_api)
4. [Cache Invalidation](#cache-invalidation)
   - [Cache Expiration](#cache-expiration)
   - [Cache Invalidation Strategies](#cache-invalidation-strategies)

## Key Redis Features

Redis boasts several key features that make it a popular choice for data storage and caching:

- In-Memory Storage
- Data Persistence
- Data Structures
- Atomic Operations
- Pub/Sub Messaging
- Lua Scripting
- Partitioning
- Replication
- Clustering
- High Throughput

## Redis Use Cases

Redis is versatile and finds application in various scenarios:

- Caching
- Session Management
- Real-Time Analytics
- Message Queues
- Leaderboards
- Geospatial Data
- Computed Data
- Content Delivery
- Search Results Caching

## Caching with Redis

### Caching Principles

Caching involves storing frequently accessed data in memory to reduce response times and server load. Key principles include:

- Cache Hit vs. Cache Miss
- Cache Invalidation
- Time To Live (TTL)

### Using Redis for Caching

Redis excels at caching due to its in-memory storage and high throughput. Basic caching steps:

1. Cache data in Redis with a TTL.
2. Check the cache before fetching data from the source.
3. Cache results of expensive operations.
4. Implement cache eviction strategies.

### Caching in `ask_va_api`

- API responses
- Session data
- User searches
- Real-time analytics
- Content delivery

### Module Functionality

1. **`self.redis_config_key(key)`**: This method sets up the Redis configuration for caching. It takes a `key` parameter and configures the Redis namespace, TTL, and key used for caching. The configuration for different keys is expected to be defined elsewhere (likely in a constant called `REDIS_CONFIG`).

2. **Attributes**:
   - `uuid`: An attribute used as the key for caching.
   - `response`: An attribute to store the cached response.

3. **`cached?(key:)`**: Checks if a cached response exists for a given `key`. It calls `self.class.find(key)` to see if a cached response is present in Redis.

4. **`do_cached_with(key:)`**: This method is used to either retrieve a cached response or create and cache a new response if it doesn't exist.
   - It first checks if a cached response exists using `cached?`.
   - If a cached response is found, it sets the response attributes and returns the cached response.
   - If not cached, it yields to a block (`yield`) to generate the response and then caches it using the `cache` method.

5. **`cache(key, response)`**: This method caches a response by setting the `uuid` and `response` attributes and then calling `save` to store it in Redis.

### How to Use Caching with the Module

To use caching with this module, follow these steps:

1. **Include the Module**: Include the `Common::CacheAside` module in a class that extends `Common::RedisStore`. For example:

   ```ruby
   class MyCachingClass < Common::RedisStore
     include Common::CacheAside
   end
   ```

2. **Configure Redis for Caching**: Configure the Redis settings for caching by calling `self.redis_config_key(key)` in class. Define Redis configurations in the `REDIS_CONFIG` constant.

   ```ruby
   class MyCachingClass < Common::RedisStore
     include Common::CacheAside

     REDIS_CONFIG = {
       some_key: {
         namespace: 'my_cache_namespace',
         each_ttl: 3600 # TTL in seconds
       }
     }

     self.redis_config_key(:some_key)
   end
   ```

3. **Implement the `#cache?` Method**: Ensure that the response class (the class that will be cached) implements a `#cache?` method that determines whether the response should be cached or not.

4. **Use Caching**:
   - To check if a response is cached, use `cached?(key:)`.
   - To retrieve or create and cache a response, use `do_cached_with(key:)` and pass a block that generates the response if it's not cached.

Example:

```ruby
class MyCachedResponse
  def self.cache?(response)
    # Implement logic to determine if this response should be cached or not.
    response.valid?
  end
end

class MyCachingClass < Common::RedisStore
  include Common::CacheAside

  REDIS_CONFIG = {
    my_cache_key: {
      namespace: 'my_cache_namespace',
      each_ttl: 3600 # TTL in seconds
    }
  }

  self.redis_config_key(:my_cache_key)
end

# To use caching:
my_key = 'some_unique_key'
cached_response = MyCachingClass.new
response = cached_response.do_cached_with(key: my_key) do
  # This block generates the response if it's not cached.
  MyCachedResponse.generate_response
end
```

In this example, `MyCachedResponse` is expected to have a `#cache?` method that determines whether a response should be cached. The `MyCachingClass` is configured to use Redis caching with the specified namespace and TTL. When `do_cached_with` is called with a key, it will either retrieve a cached response or create and cache a new one based on the logic in the provided block.

## Cache Invalidation

### Cache Expiration

TTL specifies how long data remains valid in the cache. Once TTL expires, the data is considered stale and needs to be refreshed or retrieved from the source.

### Cache Invalidation Strategies

Implement cache invalidation strategies to ensure data accuracy:

- Manual cache clearing
- Time-based invalidation
- Event-driven invalidation
- Cache versioning

### Notes:
- this allow us to customize settings for multiple `business lines`. 
