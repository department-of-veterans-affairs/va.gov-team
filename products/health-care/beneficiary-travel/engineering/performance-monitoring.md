
## Attributes to monitor
|Attribute|Definition|Impact|Units|Datadog Syntax|
|---------|----------|------|-----|-----------|
|VA.gov - Endpoint error count|Number of non-200,201 status codes to va.gov endpoints|We're the first to know if our application begins experiencing errors|Count per `time_unit`|`I forget the syntax`|
|Travel Pay API - Endpoint error count|Number of non-200,201 status codes to travel pay API endpoints|We're the first to know if our application begins experiencing errors|Count per `time_unit`|`I forget the syntax`|
|VA.gov - Sustained high latency|p90 latency measures above `x` for `time`|Downstream system is unresponsive OR va.gov code is not performant|`seconds`|`some kind of latency metric`||
|Travel Pay API - Sustained high latency|p90 latency measures above `x` for `time`|Dependency is unresponsive|`seconds`|`some kind of latency metric with trace stuff`|


