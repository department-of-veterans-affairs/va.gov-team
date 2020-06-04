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

The high-level design of the Product SLO process includes these steps:

1. VFS Product team works in conjunction with the VSP Tools teams to define SLOs
1. VSP Tools teams validates and configures the SLOs
1. SLO configurations are used by the monitoring tool(s) to track and monitor SLO performance over time
1. Product stakeholders use the monitoring tool(s) to prioritize product work based on SLO performance


**Workflow Diagram**

```

    +----------------------------+               +---------------------------------------+    +--------------------------+
    |                            +-----+---------+    SLO Configurations                 +--->>    Monitoring Tool(s)    |
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

Primarily, there are three distinct components to this design:

- Collaboaration Cycle updates
- SLO configuration catalog
- Monitoring & Reporting tools

##### Collaboration Cycle

`TODO: Need input from the VSP Experience teams`

**Read more about the VSP** [collaboration
    cycle](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/vsp-collaboration-cycle/vsp-collaboration-cycle.md)


  - Each product has 1-4 SLOs based on optimal user experience
  - VSP Tools teams help define SLIs in terms of available metrics
  - Product team stakeholders approve SLOs as appropriate for the product
- Work with VFS teams to configure sensible initial SLOs for each product -
    [reference](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/policies-work-norms/how-to-write-your-slos.md)
- Assign/identify appropriate stakeholders & VFS team for each application, updating `product/` docs as needed here

VFS team perspective:

- meet with VSP to do introduction of SLO requirement(s)
- define initial SLO based on engineer & stakeholder perspective of the product's optimal user experience
- get VSP and VFS stakeholder approval and consensus on practicality of proposed SLO definition
  - This is important for the SLO to be useful and effective
  - managers agree it's good enough for users, and anything below is unacceptable and worth spending engineering time to fix
  - developers agree that if error budget is exhausted, its worth spending time reducing risk to users
  - operations and vsp engineers agree its defensible and maintainable without significant toil or burnout
- translate into SLO configuration (being generous with initial thresholds)
- open PR(s) to "ship" the SLO into production
- continually monitor based on alerting rules
- follow protocol in collaboration cycle that engineering & product effort must be driven based on SLO performance

##### SLO Configuration Catalog

SLOs, once defined, will be appended to a centralized version-controlled source-of-truth. This is written in a
structured language (YAML) so that we can leverage it in the future building tools like reporting engines.

The YAML schema is as follows:

The most flexible way to approach this is in a configuration file format. `YAML` is used for portability, ease of
use, and templating compatibility.

Here are a set of example SLO configurations for the VA.gov web search product:

> Note: these are examples and subject to change. The objectives below may not reflect reality.

`vets-api`

```yaml
  # $SLO_DIR/products/search/api-slo-config.yml
  ---
  search:
    category: api
    action: 'index'
    controller: 'v0/search'
    description: >
      This product provides site-wide search functionality for VA.gov
    service_level_objectives:
      - uptime:
          type: availability
          numerator: 'count of all good requests'
          denominator: 'count of all requests'
          thresholds: 99.9 # thresholds for reporting/alerting
      - latency:
          type: latency
          numerator: 'promql-goes-here' # number of "good requests"
          denominator: 'promql-goes-here' # number of "all requests expected to be good"
          thresholds:
            p99: 1000
            p90: 500

```

`vets-website`

```yaml
  # $SLO_DIR/products/search/web-slo-config.yml
  ---
  search:
    category: api
    action: 'index' # which action?
    controller: 'v0/search' # which endpoint?
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

For the time being, we will use Prometheus notation for the meterics query language. This is because of existing tooling
that exists which currently uses PromQL. Future iterations of the implementation may expand to support other metrics
software - FluentD, DogstatsD, etc.

TODO: Rewrite :point_up:

- Error budgets generate (calculate with https://tryhexadecimal.com/sla-uptime-calculator) or something?

##### Monitoring & Reporting

Once SLOs have been defined, we will set up monitoring and alerting, so engineers are notified before error budgets are
expended.

- does the product and its transactions have a source of historical performance that work for the SLI?
- if not, a low-fidelity health-check could be setup to act as a placeholder
- time windows can vary, a rolling or calendar-aligned window for different reasons (this is part of the monitoring tool
    imo)
- Datadog/Grafana will be used as first step, in the future we'll build into the new tools
- Datadog has so much cool stuff we'll be able to leverage outside of the SOCKS requirement

_It is important to include assumptions about what external systems will provide. For example if this system has a method that takes a user id as input, will your implementation assume that the user id is valid? Or if a method has a string parameter, does it assume that the parameter has been sanitized against injection attacks? Having such assumptions explicitly spelled out here before you start implementing increases the chances that misunderstandings will be caught by a reviewer before they lead to bugs or vulnerabilities. Please reference the external system's documentation to justify your assumption whenever possible (and if such documentation doesn't exist, ask the external system's author to document the behavior or at least confirm it in an email)._

_Here's an easy rule of thumb for deciding what to write here: Think of anything that would be a pain to change if you were requested to do so in a code review. If you put that implementation detail in here, you'll be less likely to be asked to change it once you've written all the code._

Reporting with MD templates (see External service monitoring)
Generating stakeholder reports

### Code Location

VFS-facing and VSP-facing documentation will live in the existing VSP documentation (currently GitHub VA.gov-team repository)
SLO configuration YAML will exist in a dedicated repository generated by a script collecting all products from
manifests.json
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

- VFS users can interact w/ `#vfs-platform-support` channel if something is not working as expected
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
  - Collaboration cycle & documentation is updated with new process, launched to next teams


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

- Configuration for SLOs and reporting tools codified in TerraformA
- Dedicated SLO reporting engine allows for generating reports on product SLO performance agnostic of metrics tool
- Datadog widgets designed and configured for each Product and SLO
- Automatic integration with PagerDuty for alerting teams when error budget is nearing depletion
- Custom agent running on VFS product nodes in new infrastructure that report metrics

### Revision History

Date | Revisions Made | Author
-----|----------------|--------
June 04, 2020 | Initial draft | Keifer Furzland
