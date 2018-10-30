## Traffic migration
Approach: have caching configured and tuned on the reverse proxies, and then work with NSOC's awareness to start pointing all www.va.gov traffic to production VAEC servers. 

### Happy Path

1. Start call with NSOC
1. Wyatt routes 5% of production www.va.gov traffic through production VAEC
1. After 15 min, if static content mean 15m error rate < 99.9% and static content 90th percentile 15m latency < 3 seconds, move to next step
1. Wyatt routes 15% of production www.va.gov traffic through production VAEC
1. After 10 minutes end the call with NSOC
1. Brian disseminates Load Testing Status Report
1. After 24 hours, if static content mean 24h error rate < 99.9% and static content 90th percentile 24h latency < 3 seconds, move to next step
1. Wyatt routes 50% of production www.va.gov traffic through production VAEC
1. Brian disseminates Load Testing Status Report
1. After the weekend, if the latest static content mean 24h error rate < 99.9% and static content 90th percentile 15m latency < 3 seconds (not including partner service downtime or scheduled maintenance)
1. Wyatt routes 100% of production www.va.gov traffic through production VAEC
1. After 24 hours, if static content mean 15m error rate < 99.9% and static content 90th percentile 15m latency < 3 seconds, move to next step
1. Brian disseminates Load Testing Status Report
1. Continue forward, and respond to incidents based on existing SLOs and alert rules.

### Static Content Error rate >= 99.9% or Static Content 90th percentile latency >= 3 seconds

For the steps above, if the error rate and 90th percentile latency measurements trigger a stop at any stage, 100% of traffic should be rolled back to the initial pool configuration, and engineering will assess and replan the traffic migration.

Once 100% of traffic is routed at acceptable error rates and latency measurements for 24h, engineers will address issues based on existing SLOs and alert rules.

## Load Testing

We’re going to spend some time hardening our configuration for partner service integrations and API requests with preemptive scaling. We will not be running additional per product load tests, and will rely on existing testing that’s been done by those teams.

Then we'll coordinate with NSOC, EWIS, and AWS and perform load tests focused on local HTML assets and larger local assets (images, css, javascript), as well as proxied HTML assets, and lager proxied assets (images, css, javascript).

### Happy Path


1. establish baselines with traffic logs from www.va.gov
1. establish expected traffic requirements based on google analytics from previous major announcements / high traffic periods
1. load test local static traffic (small assets, large assets)
1. load test proxied traffic (small assets, large assets)
1. load test against representative traffic from baselines

***Details of the plays for crisis management to be defined by Oct 4***

## Dissemination of preview.va.gov

***Details of the plays for crisis management to be defined by Oct 12th***

