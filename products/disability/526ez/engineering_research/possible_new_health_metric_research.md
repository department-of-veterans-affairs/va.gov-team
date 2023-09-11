# Possible New Health Metric Research

## Purpose

- Document discovery and ideation around KPIs for enhancing our 526 health monitoring.
- Propose Next steps

## Context

- [The Ticket]([url](https://app.zenhub.com/workspaces/disability-benefits-experience-team-carbs-6470c8bfffee9809b2634a52/issues/gh/department-of-veterans-affairs/va.gov-team/61907)https://app.zenhub.com/workspaces/disability-benefits-experience-team-carbs-6470c8bfffee9809b2634a52/issues/gh/department-of-veterans-affairs/va.gov-team/61907)

We want to beef up our alerting around 526 health, and the ask is to propose / implement new 'metrics' that we can use as indicators of form health.  I'm using the term 'metrics' loosly as a catch all for any sort of event (statsD or logs) we can use as an actionable indicator.

One additional goal here is to use logs / stats we already have in place, or at least minimize code required to itterate.

## Proposals

### 1. The "stared but didn't stop" check

At the moment we have several methods "wrapped" in logging using a previously developed feature, [outlined here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/implementation/reusable_logging_with_third_party_transaction_logger.md)
Each of these wrapper logs has a `started_at` and `ended_at` value in the respective log.  If we develop a query that checks for `started_at` logs that do not have an associated `ended_at` value, we should be able to pinpoint third party API failures, and alert if we start seeing a lot in one specific 3PI.

#### The Query
Using the method submit_form_4142 as and example
```
a = @payload.wrapped_method:Form526Submission#submit_form_4142 AND @payload.end_time:*
b = @payload.wrapped_method:Form526Submission#submit_form_4142 AND @payload.start_time:*
diff = a / b
```
The value `diff` should almost always be 1.  If we see a variation, we alert that we are having an outage for the endpoint used by this method

<img width="1042" alt="Screenshot 2023-09-11 at 2 32 21 PM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/15328092/50431410-518c-414e-9d2e-2b449fbef66c">

#### Alternate implemenation with StatsD

We could also (probably) add a statsD `start` and `stop` counter for each metric.  This would allow us to simplify the queries, making them faster and more grokable, but would require some coding work.

### 2. The "Completion Percentile" check

This would be a check where we are looking only for `ended_at` logs against each of the existing KPIs (logged possible failure points).  If we knew the average rate at which sub steps were completed relative to the completion of the entire flow, it would be possible to see if the ratios changed.  The benefit of tracking ratios rather than simple count of completion is that we would have a more wholistic view of where users dropped off in form completion irrespective of possible external factors.  For instance, a low number of failures in a 24 hour day might actually be high relative to the number of forms started.

#### The Query

[TODO] implement a query that aggrigates this data
