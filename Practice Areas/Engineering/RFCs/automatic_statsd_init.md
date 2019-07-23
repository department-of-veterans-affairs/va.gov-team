# RFC: Automatic StatsD Metric Initialization

- Date: 2019-07-22
- Related Issue: https://github.com/department-of-veterans-affairs/va.gov-team/issues/626

## Background
`vets-api` makes wide use of a mixin [`Monitoring.rb`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/common/client/concerns/monitoring.rb), specifically the [`with_monitoring`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/common/client/concerns/monitoring.rb#L7) block. In doing so, two dynamic StatsD metrics will be created:

```ruby
StatsD.increment("#{self.class::STATSD_KEY_PREFIX}.#{caller}.total")
StatsD.increment("#{self.class::STATSD_KEY_PREFIX}.#{caller}.fail")
```

It's important for StatsD counters to initialized to `0` at sartup. In short, prometheus will _not_ treat an increment from _nothing_ to 1 as an "increase" - which throws off the accuracy of our grafana reporting. [More reading on the subject.](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Practice%20Areas/Engineering/Sending%20Metrics%20Using%20StatsD.md#bonus-material-on-increment)

As an example, 4 GIBFT errors occurred from an external service. These 4 errors were caught by StatsD

## Motivation
We want like to de-couple `initializers/statsd.rb` and the use of `with_monitoring` because:

- new developers may not understand this implicit coupling and forget to initialize their metrics
- method names may change yet statsd metrics still wrongly initialized

## Design
_Explain the proposed changes in enough detail so that a team member with working knowledge 
of the project could implement the change themselves. Bonus points if this is easily mappable
to user stories or specs._

## Risks
_What are the risks of the proposed changes?_

## Alternatives
_What other alternatives solutions were considered, why weren't they chosen?_
