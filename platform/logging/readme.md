# Logging (WIP)

Logs on VSP are currently viewable in AWS Cloudwatch. For access, [file a ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new/choose) using "Environment Access Request Template".

**Coming Soon**: 

Centralized Logging with Loki is currently live in DEV, and will be live in STAGING on or around May 3, 2021. 

Logs aggregated by Loki are accessible in [Grafana](http://grafana.vfs.va.gov/) _(requires SOCKS access)_.

**NOTE:** This will include **logs from apps and services that use the Jenkins/BRD system**, as well as Kubernetes/EKS logs, _however not AWS logs like RDS, ALB, etc_. 


------

## Documentation

* [Centralized Logging with Loki - User Guide](./centralized-logging-user-guide.md)
* [GitHub - grafana/loki: Like Prometheus, but for logs.](https://github.com/grafana/loki)
* TODO: add user docs about logging from specific applications
* TODO: add user docs about PII and logging restrictions

------

### Point of contact

* Slack channel: [#vfs-platform-support](https://dsva.slack.com/channels/vfs-platform-support)
