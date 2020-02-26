# RFC: Automatic StatsD Metric Initialization

- Date: 2019-07-22

## Background
`vets-api` makes wide use of a mixin [`Monitoring.rb`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/common/client/concerns/monitoring.rb), specifically the [`with_monitoring`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/common/client/concerns/monitoring.rb#L7) block. For each usage, two dynamic StatsD metrics will be created:

```ruby
StatsD.increment("#{self.class::STATSD_KEY_PREFIX}.#{caller}.total")
StatsD.increment("#{self.class::STATSD_KEY_PREFIX}.#{caller}.fail")
```

It's important for StatsD counters to initialized to `0` at sartup. In short, prometheus will _not_ treat an increment from _nothing_ to 1 as an "increase" - which throws off the accuracy of our grafana reporting. [More reading on the subject.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/backend/sending-metrics-using-statsd.md#bonus-material-on-increment)

As an example, 4 GIBFT errors occurred from an external service. These 4 errors were caught by StatsD:
![image](https://user-images.githubusercontent.com/3077884/61728023-58c0fc00-ad42-11e9-964b-f2443530c2aa.png)

However, when graphed in Grafana, it displayed `0` errors:

![image](https://user-images.githubusercontent.com/3077884/61728074-77bf8e00-ad42-11e9-8efd-54f36eac7c1e.png)

## Motivation
We want like to de-couple `initializers/statsd.rb` and the use of `with_monitoring` because:

- new developers may not understand that using `with_monitoring` also requires that you initialize your metrics to `0` at startup
- method names may change causing the metrics in `initializers/statsd.rb` to become out of sync

## Design
In short, we will use Redis to keep a running list of the metrics we increment, such that we can use this list to initialize to `0` at startup time.

### At Vets-Api Initialization Time
At `vets-api` startup (or "initialization"), we want to make sure that we initialize as many known StatsD metrics to `0` that we are aware of. This known list comes from two sources:

1. Statically defined in `initializers/statsd.rb` - which we do already do currently today.
2. A read from Redis. We will use Redis to maintain a running list of StatsD metric names that we are incrementing.

We will merge these two list together and iterate over it to initialize all of the metric names inside of it to `0`.


### At Metric Increment Time
Each time we increment a metric, we will add that metric name to a running list of metric names. I will call this list `inremented_metrics`.

### Redis
The `TTL` (Time to Live) of each row in the Redis table will be:

- long enough such that, infrequently incremented metrics don't erroneously expire from Redis
- short enough such that, metric names that will never be incremented (e.g. code was deleted) don't continue to be initialized to 0 and give the illusion that the metric still exists

A `TTL` of `1 week` seems like a fair trade-off but can be tweaked as we see fit.

### Sidekiq Cron Job
We will use a Sidekiq cron job for writing the list of `inremented_metrics` to Redis. This serves 2 purposes:

1. Add new entries to Redis that did not previously exist
2. Refresh the `TTL` of already-existing entries

We don't wan't to run the cron job too frequently, so as to add too many jobs to our sidekiq queue. We also don't want to run it too infrequently which could mean that a `vets-api` instance is cycled offline (e.g. autoscaling) before it's `inremented_metrics` could be written to Redis.

A frequency of every `30 minutes` seems reasonable, but again, we can tweak as need be.

## Risks
### Performance
~A call to save to redis is not that bad performance-wise, but when you consider how frequently StatsD counters are incrememented, all those `redis.save()` calls could really add up.~ This risk is addressed by batching writes to Redis in Sidekiq cron jobs.


## Alternatives
### Unit Test
Using a test (maybe rspec) to dynamically determine which classes are either:
- making use of `with_monitoring`
- making direct calls to `StatsD.increment()`
and _fail_ if said metric name is not being initialized to `0` in `initializers/statsd.rb`. This will force developers to initialize their metrics to `0` when incrementing StatsD.
