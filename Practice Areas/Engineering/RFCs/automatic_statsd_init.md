# RFC: Automatic StatsD Metric Initialization

- Date: 2019-07-22
- Related Issue: https://github.com/department-of-veterans-affairs/va.gov-team/issues/626

## Background
`vets-api` makes wide use of a mixin [`Monitoring.rb`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/common/client/concerns/monitoring.rb), specifically the [`with_monitoring`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/common/client/concerns/monitoring.rb#L7) block. For each usage, two dynamic StatsD metrics will be created:

```ruby
StatsD.increment("#{self.class::STATSD_KEY_PREFIX}.#{caller}.total")
StatsD.increment("#{self.class::STATSD_KEY_PREFIX}.#{caller}.fail")
```

It's important for StatsD counters to initialized to `0` at sartup. In short, prometheus will _not_ treat an increment from _nothing_ to 1 as an "increase" - which throws off the accuracy of our grafana reporting. [More reading on the subject.](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Practice%20Areas/Engineering/Sending%20Metrics%20Using%20StatsD.md#bonus-material-on-increment)

As an example, 4 GIBFT errors occurred from an external service. These 4 errors were caught by StatsD:
![image](https://user-images.githubusercontent.com/3077884/61728023-58c0fc00-ad42-11e9-964b-f2443530c2aa.png)

However, when graphed in Grafana, it displayed `0` errors:

![image](https://user-images.githubusercontent.com/3077884/61728074-77bf8e00-ad42-11e9-8efd-54f36eac7c1e.png)

## Motivation
We want like to de-couple `initializers/statsd.rb` and the use of `with_monitoring` because:

- new developers may not understand that using `with_monitoring` also requires that you initialize your metrics to `0` at startup
- method names may change causing the metrics in `initializers/statsd.rb` to become out of sync

## Design
### Redis
Use Redis to maintain a running list of StatsD metric names that we are incrementing. Upon initialization of a `vets-ap` server, read from said Redis table to initialize all of the metrics to `0`. This requires that every time a call to `StatsD.increment()` is made, we make a call to redis to save the metric name. The `TTL` for each row in Redis will be `1 week` which should allow for infrequently used metrics to not expire too soon, and for those used frequently, they will constantly be refreshed.

### `initializers/statsd.rb`
This file will continue to exist and we can continue hard-coding a select few metrics names to initialize to `0`. If performance becomes an issue, we can put all of the listed metric names into a map or array and put a guard clause on the save to Redis for refreshing.


## Risks
### Performance
A call to save to redis is not that bad performance-wise, but when you consider how frequently StatsD counters are incrememented, all those `redis.save()` calls could really add up. 

## Alternatives
### Unit Test
Using a test (maybe rspec) to dynamically determine which classes are either:
- making use of `with_monitoring`
- making direct calls to `StatsD.increment()`
and _fail_ if said metric name is not being initialized to `0` in `initializers/statsd.rb`. This will force developers to initialize their metrics to `0` when incrementing StatsD.
