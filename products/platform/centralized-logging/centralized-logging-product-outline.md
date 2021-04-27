## Centralized Logging - Log Collection, Aggregation, Search, Query, & Analysis 

## Product Overview

The Platform’s Centralized Logging solution provides developers with tools that aggregate time-series data from systems and applications. Logs contain events related to the health, performance, and security of services running on the platform. This info is aggregated and made searchable through a powerful dashboard that aids in debugging, troubleshooting, and analysis. 

### Key Features & Benefits

- Real-time observability of the health and integrity of applications and services running on the platform
- Metadata and tagging of event data allow for separation of logs by environment, application, and type 
- Powerful aggregation and search help developers to rapidly identify issues with applications
- Streamlines developer operations with easy-to-use, web-based tools, and log data visualization

## Key Personas

- VFS Developers
- Platform Developers

## Problem Statement 

Current logging solutions on the platform are overly complex and insufficient for current needs. It is challenging for developers to understand how applications are performing so that they can take steps to improve the software on their own. Because of the difficulty of finding important logging information, developers are heavily dependent on platform support. 

### Existing Pain Points & Limitations

- Overly complex tools are difficult to manage, hard to understand, and require a steep learning curve 
- Multiple sources for log data can lead to confusion around the accuracy of available information 
- Reliance on Platform support prevents VFS developers from resolving problems on their own, resulting in a frustrating experience
- The current logging solution uses AWS CloudWatch, which requires that additional permissions be provisioned in order for developers to access logs
- The current logging solution does not provide 100% coverage of important events from all applications and services

## Measuring Success

### Key Performance Indicators (KPIs)

- Decrease the amount of time it takes for a developer to access logs
- Logs for all applications and services are being aggregated and available through Grafana 
- Increase in the number of users accessing logs via Grafana
- Decrease in the number of users accessing logs via CloudWatch
- Fewer support requests for issues relating to finding relevant logs on the platform
- Fewer pain points from feedback related to logging on the platform

### Baseline KPI Values
- Baseline values for critical metrics _(TBD)_

## Assumptions

- The solution will provide developers with important operational capabilities  
- The solution will be flexible enough to address current and future developer needs 
- The solution will be implemented using Grafana Loki
- Loki will be deployed in distributed microservices mode for scalability
- Loki will be deployed to EKS (in support of the Platform’s Infrastructure Recommit effort)

## Solution Approach

The Platform Operations team will implement the open-source logging system called [Loki](https://grafana.com/oss/loki/), which leverages the existing Grafana user interface for data visualization and analysis that developers are familiar with (and which is already deployed on the Platform).

The Platform Operations team will host, deploy, and configure the centralized logging solution so that developers can have access to system and application logs reliably and securely, without having to worry about the underlying infrastructure or systems administration of these components. 

Additionally, Platform Operations will handle the ongoing maintenance of the centralized logging system to ensure that important logs and information are captured and made available to developers. 

### High-level aspects of the Centralized Logging solution using Loki

- Open-source solution built on the VA’s Amazon AWS GovCloud, providing a horizontally scalable, highly-available, multi-tenant log aggregation system that leverages the existing Grafana dashboard for graphical user interface for accessing logs
- Loki provides the bulk of its important features “out-of-the-box”, is highly supported, and is lightweight with respect to the resources that are needed to set up, configure, install, and maintain it
- Loki + Promtail are deployed using GitHub actions and ArgoCD for CI/CD, and EKS for deployments to the platform’s container orchestration infrastructure
- Promtail sends all the logs from Kubernetes to the Loki endpoint (essentially, Promtail tails individual log files and ships the events to Loki)
- Beyond Promtail, other methods can be employed for the shipment of log events, ie docker containers and be configured to send directly to the Loki endpoint 
- The Platform does not yet have parity with all of the log information that is currently available in the CloudWatch (on the VA’s Amazon AWS GovCloud account, but this is on the roadmap for the future
- The Platform Operation team will continue to work with other teams and their developers to get important log events into Loki, as well as prepare the system for the production environment as we move into Q3, 2021. 

## Solution Design 

Centralized Logging Design Doc _(TBD)_

## Launch Dates

Ready in STAGING May 3, 2021 

**NOTE:** Loki is also already available in DEV. Both DEV & STAGING include **all logs from applications and services that utilize the Jenkins/BRD system** for deployment, as well as EKS/Kubernetes cluster and service logs; _however, AWS logs like RDS, ALB, are not yet included_ but are planned for a future release. 

Reference Material

- VFS-facing Product README (in `/platform`) _(Coming soon!)_
- Centralized Logging with Loki - User Guide _(Coming soon!)_
- [VFS Grafana User Interface](http://grafana.vfs.va.gov) - for viewing logs aggregated by Loki
- [Grafana Loki Product Page](https://grafana.com/oss/loki/) - external product info and documentation

## Communications

- Team Name: Platform Operations 
- GitHub Label: "operations"
- Slack Channel: #vsp-operations

### Product POCs: 

- Jesse House - Product Manager for Platform Operations (Ad Hoc)
- Demian Ginther - Engineering Lead for Platform Operations (Ad Hoc)

### Stakeholders

- Product Owner: Dror Matalon (OCTO-DE)

