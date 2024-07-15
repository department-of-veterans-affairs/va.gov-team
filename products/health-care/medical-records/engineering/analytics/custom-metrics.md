# Custom Metrics

> BLUF: What is as  custom metric, why use them and how too use them 

## Why use them

- Longer retention than pure logs, currently 15 months vs 30s days
- Shine when trying get numbers, 

## How to set up a new one and one a dashboard

1. Go the [metrics page and click new metric](https://vagov.ddog-gov.com/logs/pipelines/generate-metrics)
1. Add your log and named spaced name
  1. Creating the log is the hard part. This views allows creation based on API logs only
1. Go your dashboard and add the widget

## Create from RUM

1. To create a custom metric from RUM event data, navigate to Digital Experience > Application Management > Generate Metrics and click + New Metric.
1. Add your RUM query
1. Go your dashboard and add the widget


## Statsd vs Custom Metric

- StatsD is better for tracking events
- Custom Metrics are great log retention
- StatsD are for creating the raw data that be quered later
- Custom Metrics are for storing queries that are very usefuls, solely based on logs

## Tips and Lessons learned

- Namespacing metrics is super useful

## links

- [Datadog Docs](https://docs.datadoghq.com/metrics/custom_metrics/)
- [Create New Metric page](https://vagov.ddog-gov.com/logs/pipelines/generate-metrics)