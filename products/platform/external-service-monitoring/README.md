# External Service Performance Monitoring 

This product is a collection of resources to help understand performance of external services from the VSP perspective.

### Documentation

- ['How to define your SLOs']()
- [`./service-documents/*.md`]() contains a document per-service outlining performance baselines, links and resources

### Grafana dashboards

- 🧦 [External Service Status](http://grafana.vfs.va.gov/d/000000025/external-service-status?orgId=1) - Use to determine if a given service is up
- 🧦 [External Service SLI](http://grafana.vfs.va.gov/d/pEgVdRlZk/external-service-availability-indicators?orgId=1) - Use to dig into specific service-level availability and performance metrics up to past 14 days
- 🧦 [Backend Service Report](http://grafana.vfs.va.gov/d/000000050/backend-service-report?orgId=1) - redundant?
- 🧦 [HTTP Request Timing](http://grafana.vfs.va.gov/d/lG2hMgBZk/http-request-timing?orgId=1) - detail latency
    dashboards
- 🧦 [Forward Proxy Details](http://grafana.vfs.va.gov/d/000000032/forward-proxy?orgId=1) - detailed HAProxy boards

### Stakeholder Reports

This report gives a high-level overview of all services and their relative performance over time:

- Report is currently compiled manually by backend tools engineers [upon request in #vsp-tools-be]().
- [Coming Soon!] Generate a 14-day SLO trend report by clicking [this link]().

### Changelog


