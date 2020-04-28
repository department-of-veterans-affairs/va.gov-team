# External Service Performance Monitoring 

This product is a collection of resources to help understand performance of external services from the VSP perspective.

### Documentation

- [`./service-documents/*.md`](./service-documents/) contains a "one-pager" document per-service outlining performance baselines, links to dashboards, and resources for each external service partner
- ['How to Write Your SLOs'](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/policies-work-norms/how-to-write-your-slos.md) contains instructions and reference for VFS teams to use when defining product SLOs

### Grafana dashboards

- 🧦 [External Service Status](http://grafana.vfs.va.gov/d/000000025/external-service-status?orgId=1) - high-level overview and network diagram used to determine if a given service is up
- 🧦 [External Service SLI](http://grafana.vfs.va.gov/d/pEgVdRlZk/external-service-availability-indicators?orgId=1) - service-level specific availability and performance metrics up to past 14 days
- 🧦 [Backend Service Report](http://grafana.vfs.va.gov/d/000000050/backend-service-report?orgId=1) - another view of external service request volume and latency
- 🧦 [HTTP Request Timing](http://grafana.vfs.va.gov/d/lG2hMgBZk/http-request-timing?orgId=1) - detailed HAProxy request latency dashboards
- 🧦 [Forward Proxy Details](http://grafana.vfs.va.gov/d/000000032/forward-proxy?orgId=1) - the highest level of detail for serious HAProxy debugging 🐉

### Stakeholder Reports

This report gives a high-level overview of all services and their relative performance over time:

- Request a report to be compiled by backend tools engineers by pinging us in [#vsp-tools-be](https://dsva.slack.com/archives/CQHBJ5U06).
- [Coming Soon!] Generate and view a 14-day SLO trend report by clicking [this link]().

### Changelog

#### Sprint 24 (2020-04-15 - 2020-04-28)

**v0.1**

- Implement baseline SLI definitions 
- Document and update Grafana dashboards related to external services
- Draft initial SLO documents for most external services
- Reorganize and rename product outline and folder documents
