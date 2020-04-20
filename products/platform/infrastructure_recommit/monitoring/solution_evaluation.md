# VSP Monitoring evaluation

## Introduction

The VSP team is currently evaluating alternatives to the current Prometheus + CloudWatch + Grafana setup as part of its Infrastructure Recommit project. This 

## Current solution

### Pros

Current things that make Prometheus successful:

- Service Discovery and generally little config on the server (in most cases)
- Customizability of Blackbox Exporter
- Generic alerting rules that cover patterns (nginx "components", haproxy backends, etc)
- Predictive rules (disk full in 8 hours)
- Alert routing using generic rules
- Observing traffic from every vantage point we have -- this will change over time, but: revproxy, vets-api, fwdproxy, external, checking things like DNS and others
- A significant amount of work tuning alerts, altering text, writing documentation
- Grafana
	- templated dashboards (easily switch dev -> staging -> prod, etc)
	- combine data sources (cloudwatch metrics + prometheus)
- Anyone within VA can sign up for a user

### Cons

- Config is more complicated than it needs to be in some scenarios
- Access to SOCKS or VA network is required
- Data retention is very short right now
- Version of Prometheus has been allowed to fall far behind current
- Alerting to PagerDuty requires TIC Gateway to be up, or more complicated solutions (we haven't done this yet)
- Alert consolidation exists, but not configured well

## Functionality absolutely required

Ideally we retain as many of the pros as we can without 

### Blackbox checking from multiple vantage points

Any new solution will need to be able to make arbitrary HTTP/HTTPS requests and DNS queries from both internal to our hosting environment and outside over the internet. We can deploy agents into an alternate AWS account to accomplish this.

Probably the trickiest thing we do is do is an HTTPS request to an IP address and set the `Host` header to force requests to a specific TIC Gateway.

### Gather metrics from current hosting components

Current needs:
- StatsD
- HAProxy + health check information is helpful (out-of-the-box DataDog doesn't have this last part, but definitely possible it can be turned on)
- OpenResty metrics
- Network stats
- CloudWatch metrics

### Ability to share dashboards with VA partners

An initiative currently in-flight is work around getting the monitoring information we have internally out to VA partners to communicate with them about what we are observing. This information is both tactical for active incidents and reporting for talking about reliability on a longer-term horizon. Ideally we can simply give them some form of guest access or allow self-service sign up, but exporting a dashboard automatically would work as well.

## Other considerations

### Logging

Currently it's unknown what we will end up being able to do with logging. Most likely, it won't be allowed to send logs to SaaS providers. Assuming that's correct, we'd like to look at products like Loki and Graylog as replacements for CloudWatch Logs. In the case of Loki (which is our current first choice), we'd still need Grafana. Grafana can plug into DataDog with an Enterprise license, so it could render some of the sharing or other points moot.

This gets a bit off-topic for this section, but Grafana is working on integration in this respect: https://grafana.com/blog/2020/03/31/how-to-successfully-correlate-metrics-logs-and-traces-in-grafana/

### APM

Both DataDog and NewRelic are in varying states of possibly having licenses we can use at VA. NewRelic's infrastructure monitoring components are weak and not being considered, but it is a contender for APM at the moment.

### Action required no matter what

When making this decision, while on the surface it looks like "stay put or go with another provider" we will not be able to maintain the current status quo. To stay with Prometheus we'll need to:

- Upgrade current and redo configuration or start from scratch
- Support new infrastructure components — the switch to Nomad + Consul + Vault will definitely change the way service discovery is configured and will require us to support additional components.
- Notifications stop working when the TIC Gateway goes down
- Current level of alert de-duplication is unsustainable. Work is required to reduce the number of pages and be 
