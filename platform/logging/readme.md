# Logging (WIP)

Logs on VSP are currently viewable in AWS Cloudwatch. For access, [file a ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new/choose) using "Environment Access Request Template".

**Coming Soon**: Logs aggregated by Loki will be accessible in [Grafana](http://grafana.vfs.va.gov/) (requires SOCKS access). This includes **logs from apps and services that use the Jenkins/BRD system**, as well as Kubernetes/EKS logs, _however not AWS logs like RDS, ALB, etc_. This is currently live in DEV, and will be availble in STAGING as of May 3, 2021. 


------

## Documentation

* [Centralized Logging with Loki - User Guide](./centralized-logging-user-guide.md)
* [GitHub - grafana/loki: Like Prometheus, but for logs.](https://github.com/grafana/loki)
* TODO: add user docs about logging from specific applications
* TODO: add user docs about PII and logging restrictions

------

### Point of contact

* Slack channel: [#vfs-platform-support](https://dsva.slack.com/channels/vfs-platform-support)
