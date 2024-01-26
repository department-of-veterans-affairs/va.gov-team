
## Attributes to monitor
|Attribute|Definition|Impact|Units|Datadog Syntax|
|---------|----------|------|-----|-----------|
|VA.gov - Endpoint error count|Number of non-200,201 status codes to va.gov endpoints|We're the first to know if our application begins experiencing errors|Count per `time_unit`|`I forget the syntax`|
|Travel Pay API - Endpoint error count|Number of non-200,201 status codes to travel pay API endpoints|We're the first to know if our application begins experiencing errors|Count per `time_unit`|`I forget the syntax`|
|VA.gov - Sustained high latency|p90 latency measures above `x` for `time`|Downstream system is unresponsive OR va.gov code is not performant|`seconds`|`some kind of latency metric`|
|Travel Pay API - Sustained high latency|p90 latency measures above `x` for `time`|Dependency is unresponsive|`seconds`|`some kind of latency metric with trace stuff`|
|Travel Pay API - Synthetic API montior|Hits the `ping` endpoint periodically|Detects downtime or degraded performance of the Travel Pay API|`binary`|`dunno yet`|
|VA.gov - Throughput|VA.gov repsonses w/in a custom time frame|Allows scaleability decisions, error predictions, and confident information sharing|count per `time unit`|`some kind of count metric`|
|VA.gov - Status counts|Number of individual statuses|Collect information about how many claims are in which status|`count`|`some kind of count metric`|

