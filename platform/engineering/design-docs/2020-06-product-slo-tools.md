---- 


# We've moved our docs!

### This document is no longer maintained.

### Please visit the [Platform website](https://depo-platform-documentation.scrollhelp.site/) for the latest information or contact the Platform Support Team via [#vfs-platform-support](https://dsva.slack.com/archives/CBU0KDSB1).


----
# Product SLO Tools Design Doc

- **Author(s):** Keifer Furzland
- **Last Updated:** June 04, 2020
- **Status:** Draft <!-- | _In Review_ | _Approved_ -->
- **Approvers:** Dror Matalon \[ \], Andrew Gunsch \[ \], Wyatt Walter \[ \], John Paul Ashenfelter \[ \], Rian Fowler
    \[ \]

## Overview

> The intended audience for this document is software engineers working on the VSP.

### Objective

The VSP objective is to build pathways for teams at VA to easily launch consistent, high-quality digital products **_informed by data_**. In order for teams to actively work to improve product performance, some sort of performance objective must be defined. This is where service level objectives (SLOs) are valuable.

The objectives of this product include:

- provide processes and tooling for product teams to define and iterate SLOs
- provide a source of truth for SLO performance

### Background

Engineering effort is a scarce resource, and should be invested in the most important work. A thoughtful, engaged, sophisticated SLO process allows for data-informed decisions about opportunity cost of improved reliability. Another benefit of adopting SLO-based decision making is allowing teams experiment and iterate features more safely, by reducing risk of end-user impact.

Product based SLOs are concerned with the reliability of a specific product on VA.gov.

Example products include:

- [Global Site - Search](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/global/search)
- [Personalized Experience - Direct Deposit](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/direct-deposit)
- [Facilities Locator](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/facilities/facility-locator)

---

**Read more**

- [Product SLO Tools - Product Outline](../../products/platform/product-slo-tools/product-outline.md)
- [Chapter 2](https://landing.google.com/sre/workbook/chapters/implementing-slos/) of the Google SRE book explains the basics of setting and implementing SLOs
- Datadog maintains [well written docs](https://docs.datadoghq.com/monitors/service_level_objectives/monitor/) for SLOs

### High Level Design

The high-level design of the Product SLO lifecycle includes these steps:

1. VFS Product team works in conjunction with the VSP Tools teams to define SLOs
1. VSP Tools teams validates and configures the SLOs in the configuration catalog
1. SLO configurations are used by the monitoring and reporting tools to track SLO performance over time
1. Product stakeholders use the monitoring tool(s) to prioritize product work based on SLO performance
1. SLOs are updated in response to iterated product performance objectives


**Workflow Diagram**

```

    +----------------------------+               +---------------------------------------+    +--------------------------+
    |                            +-----+---------+    SLO Configurations Catalog         +--->>    Monitoring Tool(s)    |
+-->+     VFS Product Team       |     |         +---------------------------------------+    +--------------------------+
|   |                            |     |         |                                       |    |                          |
|   +--------------^-------------+     |         |   type: Availability, Latency, etc.   |    |    Datadog SLO Widget    |
|                  |                   |         |   numerator:                          |    |                          |
|            Collab|Cycle              |         |   denominator:                        |    |    Grafana Dashboard     |
|                  |                   |         |   threshold:                          |    |                          |
|                  |                   |         |                                       |    |    Reporting Engine      |
|      +-----------v----------+        |         +---------------------------------------+    +------+---------^---------+
|      |                      +--------+                                                             |         |
|      |       VSP Tools      |                                                                      |         |
|      |                      |                                                               +------v---------+---------+
|      +----------------------+                                                               |                          |
+----------------------------------------Decisions & Priorities-------------------------------+   Product Stakeholders   |
                                                                                              |                          |
                                                                                              +--------------------------+


```

> _[Diagram made with Asciiflow](https://asciiflow.com/) - copy/paste content of diagram into `Import` dialog on Asciiflow to
edit._

## Specifics

### Detailed Design

Primarily, there are three distinct components to the initial design:

- Collaboration Cycle updates
- SLO configuration catalog
- Monitoring & Reporting tools

##### Collaboration Cycle

`TODO: Need input from the VSP Experience teams`

The process of interacting with VSP teams to define initial SLOs will be at-home in the VSP Collaboration Cycle.

**Read more about the VSP** [collaboration
    cycle](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/vsp-collaboration-cycle/vsp-collaboration-cycle.md)
**Writing SLOs**[reference](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/policies-work-norms/how-to-write-your-slos.md)

###### Notes:

- Each product has 1-4 SLOs based on optimal user experience
- VSP Tools teams will help define SLIs in terms of available metrics
- Product team stakeholders approve SLOs as appropriate for the product
- Work with VFS teams to configure sensible initial SLOs for each product -
- Assign/identify appropriate stakeholders & VFS team for each application, updating `product/` docs as needed here

Steps from the VFS team perspective:

- meet with VSP to do introduction of SLO requirement(s), answer questions
- define initial SLO based on the product's optimal user experience
- get stakeholder approval and consensus on practicality of proposed SLO definition
  - This is important for the SLO to be useful and effective
  - managers agree it's good enough for users, and anything below is unacceptable and worth spending engineering time to fix
  - developers agree that if error budget is exhausted, its worth spending time reducing risk to users
  - operations and VSP engineers agree its defensible and maintainable without significant toil or burnout
- continually monitor based on alerting rules
- follow protocol in collaboration cycle that engineering & product effort must be driven based on SLO performance

##### SLO Configuration Catalog

SLOs, once defined, will be appended to a centralized version-controlled source-of-truth. This is written in a
structured language so that we can leverage it in the future building tools like reporting engines.

The most flexible way to approach this is in a configuration file format. `YAML` is used for portability, ease of
use, and templating compatibility.

Here are a set of example SLO configurations for the VA.gov web search product:

> Note: these are examples and subject to change. The objectives below may not reflect reality.

<!-- TODO: Refer to devops repo configs for alerting -->

`vets-api`

```yaml
  # $SLO_DIR/products/search/api-slo-config.yml
  ---
  name: Search # Name of the product or product component
  description: > # Describe the product or product component
    This product provides site-wide search functionality for VA.gov
  service_level_objectives:
    - name: api_search_uptime
      disable: false
      action: 'get'
      address: 'v0/search'
      objectivePercent: 99.99
      service_level_indicator:
        prometheus:
          numeratorQuery: |
            sum(
              increase(api_rack_request_success{code~="5.."}[5m]))'
          denominatorQuery: |
            sum(
              increase(api_rack_request_success[5m]))'
```

`vets-website`

```yaml
  # $SLO_DIR/products/search/web-slo-config.yml
  ---
  name: Search # Name of the product or product component
  description: > # Describe the product or product component
    This product provides site-wide search functionality for VA.gov
  service_level_objectives:
    - name: web_search_uptime
      disable: false
      action: 'get'
      address: '/search'
      objectivePercent: 99.99
      service_level_indicator:
        prometheus:
          numeratorQuery: |
            sum(
              increase(http_request_success{code~="5.."}[5m]))'
          denominatorQuery: |
            sum(
              increase(http_request_success[5m]))'

```

<!--
TODO: Need to look more into the edge case SLOs

```yaml
  # $SLO_DIR/products/search/jobs-slo-config.yml
  ---
  search:
    category: jobs
    description: >
      This job provides sitemap generation functionality for VA.gov
    service_level_objectives:
      - freshness:
          type: freshness
          numerator: 'count of requests with latest timestamp <= 1m ago'
          denominator: 'count of requests'

```
-->

For the time being, we will use Prometheus-style notation for the metrics query language. This is because of existing tooling
that exists which currently uses PromQL. Future iterations of the implementation may expand to support other standards.

Error budgets should be generated -  can calculate with https://tryhexadecimal.com/sla-uptime-calculator or something
else similar.

##### Monitoring & Reporting

Once SLOs have been defined, we will set up monitoring and alerting, so engineers are notified before error budgets are
expended.

Initially, we will configure a Grafana dashboard, accessible by SOCKS proxy, to monitor a rolling 14-day window.

Datadog widgets will be built as the tooling is made available. These widgets are accessible without SOCKS access.

- does the product and its transactions have a source of historical performance that work for the SLI?
- if not, a low-fidelity health-check could be setup to act as a placeholder
- time windows can vary, a rolling or calendar-aligned window for different reasons
-
_It is important to include assumptions about what external systems will provide. For example if this system has a method that takes a user id as input, will your implementation assume that the user id is valid? Or if a method has a string parameter, does it assume that the parameter has been sanitized against injection attacks? Having such assumptions explicitly spelled out here before you start implementing increases the chances that misunderstandings will be caught by a reviewer before they lead to bugs or vulnerabilities. Please reference the external system's documentation to justify your assumption whenever possible (and if such documentation doesn't exist, ask the external system's author to document the behavior or at least confirm it in an email)._

_Here's an easy rule of thumb for deciding what to write here: Think of anything that would be a pain to change if you were requested to do so in a code review. If you put that implementation detail in here, you'll be less likely to be asked to change it once you've written all the code._

### Code Location

VFS-facing and VSP-facing documentation will live in the existing VSP documentation (currently GitHub VA.gov-team repository)

SLO configuration YAML will exist in a dedicated repository generated by a script collecting all products from
manifests.json and validated/prettified w/ yaml-lint on git pre-commmit hook or github action?

This script will live in an existing directory (or create vsp-toolkit repo for tools code)

Reporting tool
_The path of the source code in the repository._

### Testing Plan

- Set a baseline SLO for the API healthcheck (or other non-VFS pages) for "sanity check"

_How you will verify the behavior of your system. Once the system is written, this section should be updated to reflect the current state of testing and future aspirations._

### Logging

Logging will not be a major concern for this product.

We may, in the future, consider storing logs for SLO data in the reporting tool, or augmenting logs where needed, but no logs
specific to this process are being considered at this time.

### Debugging

- VFS users can interact w/ [#vfs-platform-support](https://dsva.slack.com/channels/vfs-platform-support) channel if something is not working as expected
- VSP users can inspect logging configuration or reporting tools as needed for debugging
- VFS users can provide feedback in a survey for the collaboration cycle (?)

### Caveats

- Reporting tool and metrics will likely change over time due to infrastructure restructure or other factors
- This product's initial implementation will focus on human-centered process design (collaboration cycle) and understanding the finer pain points as we iterate to develop systematized SLO tools

### Security Concerns
_This section should describe possible threats (denial of service, malicious requests, etc) and what, if anything, is being done to protect against them. Be sure to list concerns for which you don't have a solution or you believe don't need a solution. Security concerns that we don't need to worry about also belong here (e.g. we don't need to worry about denial of service attacks for this system because it only receives requests from the api server which already has DOS attack protections)._

### Privacy Concerns
_This section should describe any risks related to user data, PII that are added by this new application. Think about flows of user data through systems, places data is stored and logged, places data is displayed to users. Where is user data stored or logged? How long is it stored?_

### Open Questions and Risks

- How do we roll out this process for all existing & new teams? Seems like a lot of scheduling, manual work.
- What if VFS team builds not in `vets-api` or `vets-website`?
- Where is the best way to get product listing (website manifest(s)?)
- Does each API endpoint need a valid SLO
- YAML vs JSON?
- Who owns and manages updates to this configuration?
- Who can monitor/access reporting? Is it on the scorecard? Is it on the proxy?
- Does this cover external service SLOs?
- Do product families, like forms, have common SLOs that can be defined?
- We don't know exactly what makes a useful product/service boundary from a code perspective which might make defining
    ownership difficult in some cases like when endpoints are used by multiple apps
- SLO compliance may be simply another KPI or metric that's not used as a decision-making tool (we need to build policy
    around this?)
- Increased confusion around how to configure and define applications, this may slow delivery
- VFS teams may not be able to improve/meet SLO because of external factors (partner services down, etc).
- How do we manage maintenance windows/known outages?

_This section should describe design questions that have not been decided yet, research that needs to be done and potential risks that could make make this system less effective or more difficult to implement._

_Some examples are: Should we communicate using TCP or UDP? How often do we expect our users to interrupt running jobs? This relies on an undocumented third-party API which may be turned off at any point._

_For each question you should include any relevant information you know. For risks you should include estimates of likelihood, cost if they occur and ideas for possible workarounds._


### Work Estimates

Milestones:

Sprint 28
  - Initial templates & documentation drafted, approved

Sprint 29
  - First VFS team is tested w/ new documentation
  - Second VFS team is tested w/ new documentation

Sprint 30
  - Research & iteration of feedback from :point-up:
  - Collaboration cycle & documentation is updated with new process, launched to all teams over Q3


_Split the work into milestones that can be delivered, put them in the order that you think they should be done, and estimate roughly how much time you expect it each milestone to take. Ideally each milestone will take one week or less._

### Alternatives

_This section contains alternative solutions to the stated objective, as well as explanations for why they weren't used. In the planning stage, this section is useful for understanding the value added by the proposed solution and why particular solutions were discarded. Once the system has been implemented, this section will inform readers of alternative solutions so they can find the best system to address their needs._

#### Define products and SLOs directly in [Datadog](https://www.datadoghq.com/blog/slo-monitoring-tracking/)

Datadog provides a nice set of tools for defining & monitoring SLOs, we could use this for the entire solution.

- This approach requires Datadog to be fully operational in our infrastructure (6mo + timeline)
- This approach requires license & volume pricing for all teams, and costs scale per node + team
- Will be ahead-of-the-game for the infrastructure recommit
- Can codify the SLO widgets with Terraform
- Can possibly leverage the static-file approach directly w/ templating
- Should be included de facto with our Datadog license

#### Build a dashboard manually in Grafana for each product

We could build a distinct SLO dashboard in Grafana for each product.

- This approach is slow and laborious and doesn't scale
- but it uses things we already use and doesn't need more infra, relatively copy/pasteable
- Would require training VFS teams on Grafana & PromQL (or future tech)
- Tightly couples SLO configuration to dashboarding solution - not in terraform
- Data integrity and configuration requires updating & exporting from Grafana directly
- prometheus might go away, maybe grafana too

#### Manual monitoring & Reporting

- Status quo + "SLO" rough definitions based on variate VFS team understandings
- No real way to enforce the performance of a given product

### Future Work

Product SLO Tools improvements we are considering for future iterations:

- Automatic Report/Digest from templates (see External service monitoring)
- Configuration for SLOs and reporting tools codified with Terraform providers
    - [Datadog](https://www.terraform.io/docs/providers/datadog/index.htm://www.terraform.io/docs/providers/datadog/index.html)
    - [Grafana](https://www.terraform.io/docs/providers/grafana/index.html)
- Dedicated SLO reporting engine allows for generating reports on product SLO performance agnostic of metrics tool
- Datadog widgets designed and configured for each Product and SLO
- Automatic integration with PagerDuty for alerting teams when error budget is nearing depletion
- Custom agent running on VFS product nodes in new infrastructure that report metrics

### Revision History

Date | Revisions Made | Author
-----|----------------|--------
June 04, 2020 | Initial draft | Keifer Furzland
