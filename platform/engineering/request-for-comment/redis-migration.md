## Motivations
1. We are 2 major version behind. We're using 3.2.4 and the latest major version is 5.0.8. At the time of writing, AWS supports up to 5.0.5.
2. Would be nice to have separate Redis instances for our sidekiq stuff and the rest of our application cache. See https://github.com/mperham/sidekiq/wiki/Using-Redis#multiple-redis-instances
3. Having the AWS EC at 3.2.4 prevents us from upgrading our `redis` gem, which in turn prevents us from using the new Rails Cache feature.

3. Want to use rails cache but cant because redis gem needs to be 4 (but our aws engine is 3.2.4)


## What Uses Redis
- vets-api-server
  - as a cache - `redis_store.rb`
    - Most prominently, `session.rb`
    - [full list](https://github.com/department-of-veterans-affairs/vets-api/blob/master/config/redis.yml)
    - longest duration is `30 days`
  - breakers
  - statsd-roster
    - keeps a running list of StatsD keys for the purpose of initializing them to 0 at server startup
- vets-api-worker
  - sidekiq
    - processes
    - schedules
    - schedules-changed
    - sidekiq-scheduler
    
### An Idea of What Our Redis Cache Looks Like

![image](https://user-images.githubusercontent.com/3077884/79758846-eb9bc080-82eb-11ea-8e5e-5d54db785fba.png)

* _Generated from a locally running Redis and `vets-api` server + sidekiq processes_


## Option 1: Maintain Two Running Redis Instances in Parallel

Standup the new elasticache in VAGOV that runs in parallel to the Redis instance we have now.

### Vets-api Cache

Add code to `vets-api` `redis_store.rb` that saves data to both redis instances - this migrates data in real time. After 30 days (the longest configured ttl in `redis.yml`), both instances will have the exact same data and we can safely remove the older redis from the `vets-api` code.

### Sidekiq Stuff

Only write new jobs to the new Redis instance while still executing jobs off the old Redis instance. This could be done by either:

1. Running 2 sidekiq processes on each `vets-api-worker` instance - one that reads from new Redis and one that reads from the old Redis.
2. Create a new deployment (say, `vets-api-worker-old`) that is configured to only read from the older Redis instance, whereas `vets-api-worker` will only read from the new Redis.
3. Pop an existing `vets-api-worker` instance out of the ASG so that it continues to process jobs from the old Redis (but it will not get updated `vets-api` code)

### Pros
- Zero downtime

### Cons
- Performance hit when writing to 2 redis instances instead of 1
- Takes a long time (30 days)

## Option 2: In-Place Migration

< TODO >

### Pros
- Faster - somewhere between 30 seconds and a few minutes

### Cons
- Will require a small amount of downtime ~(30s - 2 minutes)

## Nice To Haves
- Separate vets-api cache data and sidekiq data on separate Redis servers
- Namespace vets-api cache data to a root folder, so as not to confuse it with redis "utility" data such as `breakers` & `statsd-roster`
