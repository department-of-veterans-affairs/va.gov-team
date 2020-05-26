# WIP - Product SLO Tools Product Outline

> This document is in DRAFT status and is subject to change
> Last edited: 2020-05-26 by @kfrz


## Background

**What is an SLO and why is it important?**

We aim to define reliability metrics that are closely tied with business objectives. In order to be effective, we use
several tools in our planning and development efforts.

Translating business performance objectives into numerical targets allows for framing discussion about whether or not a
system is sufficiently reliable. These metrics inform engineering, design, and architectural decision making from a
purely data-driven methodology.

> **By implementing an SLO-driven decision process, we allow teams to own their performance and increase self-service by
adding "guardrails" to follow on the VSP.**

---

###### SLOs vs SLAs

**SLOs:** service level objectives. These are targets that a service team wants its system to achieve, and will measure and report its performance against those targets. However, there are no consequences if the objective is not met --- these are aspirational but realistic goals that the service team is communicating should be the performance of the measured service.

**SLAs:** service level agreements. These are targets that a service team intends its system to hit, with consequences if those targets are not hit.

Read more:

- [SLO Fundamentals](https://cloud.google.com/blog/products/gcp/sre-fundamentals-slis-slas-and-slos)
- [Defining SLOs](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/policies-work-norms/how-to-write-your-slos.md)
- [Google's SRE Approach](https://landing.google.com/sre/workbook/toc/)

## Problem Statement

VFS teams don't have a consistent way to drive product decisions based on performance metrics. In order to
improve self-service of teams building on VSP, we need to have a clear process in place for the entire SLO lifecycle.

This includes:

- defining service-level objectives for products based on user experience
- monitoring and alerting based on performance of SLOs
- finding support for this process

#### Requirements

This is what needs to happen with any implemented solution to achieve our desired outcome.

- define the list of products and the responsible team(s)
- define what documentation will be needed and where
  - provide templates & baseline definitions for SLO configuration
  - define the enforcement policy for SLO performance on VSP ( is this a checkbox in collab cycle? Or a metric-based PR failure?)
  - document VFS playbook for when the SLO suffers
- outline initial SLO touchpoint meeting with VFS team & VSP tools team


##### Acceptance Criteria

- SLOs are present and all stakeholders for the product approve
- People responsible for product agree it is possible to meet SLOs as defined
- Organization commits to using error budget for decision making/prioritizing work effort
- Process is in place for refining the SLO over time


## Proposed Solution

- Clearly delineate and define what makes a product on VSP, starting with the `Source-App-Name` header/`manifest.json`
- Assign/identify appropriate stakeholders & VFS team for each application, updating `product/` docs as needed
- Work with VFS teams to configure sensible initial SLOs for each product -
    [reference](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/policies-work-norms/how-to-write-your-slos.md)
- Define a centralized configuration template (JSON? YAML?) that can be used in monitoring, reporting, scripts, etc.
- Leverage this tool-agnostic configuration to centralize the source of truth for all product SLOs
- All SLO performance config could be in one place rather than disparate places (PagerDuty, Prometheus Alerts, Grafana,
    etc)

Proposed sample configuration, using search product:

  ```yaml
    ---
    search:
      action: 'index' # which action?
      controller: 'v0/search' # which endpoint?
      # describe the product
      description: >
        This product provides site-wide search functionality for VA.gov
      service_level_objectives:
        - uptime:
            type: availability
            numerator: 'promql-goes-here' # number of "good requests"
            denominator: 'promql-goes-here' # number of "all requests expected to be good"
            thresholds: 99.9 # thresholds for reporting/alerting
        - latency:
            type: latency
            numerator: 'promql-goes-here' # number of "good requests"
            denominator: 'promql-goes-here' # number of "all requests expected to be good"
            thresholds:
              p99: 1000
              p90: 500

  ```


VFS team perspective:

- meet with VSP to do introduction of SLO requirement(s)
- define initial SLO based on engineer & stakeholder perspective of the product's optimal user experience
- get VSP and VFS stakeholder approval and consensus on practicality of proposed SLO definition
- translate into SLO configuration (being generous with initial thresholds)
- open PR(s) to "ship" the SLO into production
- continually monitor based on alerting rules
- follow protocol in collaboration cycle that engineering & product effort must be driven based on SLO performance


## Assumptions

- We define a service or a product as a discrete block of functionality on VA.gov
- A `product` is some code that's compiled & released on networked infra that users access via the web
- Teams (VFS) may have responsibility for one-to-many products, each having one-to-many SLOs

Maturity level of a given product could be:

- greenfield - with no current deploys on the VSP
- existing system in production, with some form of monitoring, yet no formal objectives exist, thus no error budget and an implicit 100% uptime goal
- running deployments in production, with SLOs below 100%, yet with no common understanding on how to leverage SLO - "without teeth"

### Risks

- We don't know exactly what makes a useful product/service boundary from a code perspective which might make defining
    ownership difficult
- SLO compliance may be simply another KPI or metric that's not used as a decision-making tool (we need to build policy
    around this?)
- Increased confusion around how to configure and define applications, this may slow delivery
- VFS teams may not be able to improve/meet SLO because of external factors (partner services down, etc).

### Alternatives Considered

#### Define products and SLOs in [Datadog](https://www.datadoghq.com/blog/slo-monitoring-tracking/)

Datadog provides a nice set of tools for defining & monitoring SLOs, we could use this for the solution.

- This approach requires Datadog to be fully operational in our infrastructure
- This approach requires license & volume pricing for all teams, and costs scale per node + team

#### Build a dashboard manually in Grafana for each product

We could build a distinct SLO dashboard in Grafana for each product.

- This approach is slow and laborious
- Would require training VFS teams on Grafana & PromQL (or future tech)
- Tightly couples SLO configuration to dashboarding solution
- Data integrity and configuration requires updating & exporting from Grafana directly

#### Manual monitoring

- Status quo + "SLO" rough definitions based on variate VFS team understandings
- No real way to enforce the performance of a given product
