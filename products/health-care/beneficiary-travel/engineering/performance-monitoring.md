
## Attributes to monitor
|Attribute|Definition|Impact|Units|Status|
|---------|----------|------|-----|------|
|VA.gov - Endpoint error count|Number of non-200,201 status codes to va.gov endpoints|We're the first to know if our application begins experiencing errors|Count per `time_unit`|**Implemented**|
|Travel Pay API - Endpoint error count|Number of non-200,201 status codes to travel pay API endpoints|We're the first to know if our application begins experiencing errors|Count per `time_unit`|**Implemented**|
|VA.gov - Sustained high latency|p90 latency measures above `x` for `time`|Downstream system is unresponsive OR va.gov code is not performant|`seconds`|**Implemented**|
|~Travel Pay API - Sustained high latency~|p90 latency measures above `x` for `time`|Dependency is unresponsive|`seconds`|*Not Needed for MVP*|
|Travel Pay API - Synthetic API montior|Hits the `ping` endpoint periodically|Detects downtime or degraded performance of the Travel Pay API|`binary`|Not Implemented|
|VA.gov - Throughput|VA.gov repsonses w/in a custom time frame|Allows scaleability decisions, error predictions, and confident information sharing|count per `time unit`|Not Implemented|
|VA.gov - Status counts|Number of individual statuses|Collect information about how many claims are in which status|`count`|Not Implemented|

