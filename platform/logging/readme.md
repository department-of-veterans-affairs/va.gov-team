# Logging

Logs for platform services are available in [Grafana](http://grafana.vfs.va.gov/) using Loki as a data source. 

Logs are collected by Loki and available in Grafana for the following services: 

* Vets-API (server and worker)
* CMS
* Reverse Proxy aka "revproxy"
* Forward Proxy aka "fwdproxy"
* Platform utilities like Prometheus, Unbound, etc
* Kubernetes services running in Amazon Elastic Kubernetes Service (EKS)

Logs for AWS services (RDS, ALB, ELB, etc) are still available in AWS Cloudwatch. For access to AWS, [file a ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new/choose) using "Environment Access Request Template".

_Note: Logs for AWS services will be migrated at a later date._

Centralized Logging with Loki and Grafana is live in all environments.  


------

## Documentation

* [Centralized Logging with Loki - User Guide](https://depo-platform-documentation.scrollhelp.site/developer-docs/Centralized-Logging-with-Loki-and-Grafana.619119010.html)
* [GitHub - grafana/loki: Like Prometheus, but for logs.](https://github.com/grafana/loki)

------

### Point of contact

* Slack channel: [#vfs-platform-support](https://dsva.slack.com/channels/vfs-platform-support)
