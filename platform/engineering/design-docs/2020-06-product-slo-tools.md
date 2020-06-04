# Product SLO Tools Design Doc

- **Author(s):** Keifer Furzland
- **Last Updated:** June 04, 2020
- **Status:** Draft <!-- | _In Review_ | _Approved_ -->
- **Approvers:** Dror Matalon \[ \], Andrew Gunsch \[ \], Wyatt Walter \[ \], Andrea Hewitt \[ \]

## Overview

### Objective

The objective of this product is to
- provide a source of truth for VFS teams to set, manage, and monitor service level objectives (SLO)
- provide documented pathways to successful SLO implementation for teams working on VSP
- provide an interface and process for product teams to iteratively improve SLOs

The intended audience for this document are software engineers working on the VSP.

### Background

The VSP vision is to make it easy for teams at VA to build and evolve consistent, high-quality digital products **_informed by data_**. In order for teams to actively work to improve their product performance, some sort of performance objective must be defined. This is where service level objectives come in.

A benefit of adopting SLO-based decision making is allowing teams experiment and iterate features more safely, by
reducing risk of end-user impact through data.

**Read more**

- :link: [Product SLO Tools - Product Outline](../../products/platform/product-slo-tools/product-outline.md)
- Engineers should read [Chapter
2](https://landing.google.com/sre/workbook/chapters/implementing-slos/) of the Google SRE book, which explains the
basics of setting and implementing SLOs.
- Datadog provides [well written docs](https://docs.datadoghq.com/monitors/service_level_objectives/monitor/) for SLOs

### High Level Design

The high-level design of the Product SLO process includes these steps:

1. VFS Product team works in conjunction with the VSP Tools teams to define SLO configurations

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

##### Collaboration cycle details (link out)
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
- translate into SLO configuration (being generous with initial thresholds)
- open PR(s) to "ship" the SLO into production
- continually monitor based on alerting rules
- follow protocol in collaboration cycle that engineering & product effort must be driven based on SLO performance

##### Defined SLO configurations file schema

SLOs, once defined, will be appended to a centralized version-controlled source-of-truth.

The most flexible way to approach this is in a configuration file format. `YAML` is used for portability, ease of
use, and templating compatibility.

Here are a set of example SLO configurations for the VA.gov web search product:

> Note: these are examples and subject to change. The objectives below may not reflect reality.

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

- Error budgets generate (calculate with https://tryhexadecimal.com/sla-uptime-calculator) or something?

##### Monitor, Track, Report


- Datadog/Grafana first step


_It is important to include assumptions about what external systems will provide. For example if this system has a method that takes a user id as input, will your implementation assume that the user id is valid? Or if a method has a string parameter, does it assume that the parameter has been sanitized against injection attacks? Having such assumptions explicitly spelled out here before you start implementing increases the chances that misunderstandings will be caught by a reviewer before they lead to bugs or vulnerabilities. Please reference the external system's documentation to justify your assumption whenever possible (and if such documentation doesn't exist, ask the external system's author to document the behavior or at least confirm it in an email)._

_Here's an easy rule of thumb for deciding what to write here: Think of anything that would be a pain to change if you were requested to do so in a code review. If you put that implementation detail in here, you'll be less likely to be asked to change it once you've written all the code._

### Code Location


_The path of the source code in the repository._

### Testing Plan

- Set a baseline SLO for the API healthcheck (or other non-VFS pages) for "sanity check"

_How you will verify the behavior of your system. Once the system is written, this section should be updated to reflect the current state of testing and future aspirations._

### Logging

- Logs for retained SLO data in the reporting tool?

    _What your system will record and how._

### Debugging

- VFS users can interact w/ `#vfs-platform-support` channel
- VSP users can inspect x,y,z

    _How users can debug interactions with your system. When designing a system it's important to think about what tools you can provide to make debugging problems easier. Sometimes it's unclear whether the problem is in your system at all, so a mechanism for isolating a particular interaction and examining it to see if your system behaved as expected is very valuable. Once a system is in use, this is a great place to put tips and recipes for debugging. If this section grows too large, the mechanisms can be summarized here and individual tips can be moved to another document._

### Caveats

- Reporting tool and metrics might change over time (infra restructure, etc)
_Gotchas, differences between the design and implementation, other potential stumbling blocks for users or maintainers, and their implications and workarounds. Unless something is known to be tricky ahead of time, this section will probably start out empty._

_Rather than deleting it, it's recommended that you keep this section with a simple place holder, since caveats will almost certainly appear down the road._

_To be determined._

### Security Concerns
_This section should describe possible threats (denial of service, malicious requests, etc) and what, if anything, is being done to protect against them. Be sure to list concerns for which you don't have a solution or you believe don't need a solution. Security concerns that we don't need to worry about also belong here (e.g. we don't need to worry about denial of service attacks for this system because it only receives requests from the api server which already has DOS attack protections)._

### Privacy Concerns
_This section should describe any risks related to user data, PII that are added by this new application. Think about flows of user data through systems, places data is stored and logged, places data is displayed to users. Where is user data stored or logged? How long is it stored?_

### Open Questions and Risks
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

_This section should describe design questions that have not been decided yet, research that needs to be done and potential risks that could make make this system less effective or more difficult to implement._

_Some examples are: Should we communicate using TCP or UDP? How often do we expect our users to interrupt running jobs? This relies on an undocumented third-party API which may be turned off at any point._

_For each question you should include any relevant information you know. For risks you should include estimates of likelihood, cost if they occur and ideas for possible workarounds._


### Work Estimates

Milestones:

- Configuration is defined and released
- First team is tested w/
- Reserach & iteration
- Boards are built

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

- Tool for templating and genearting an output configuration/report based on dynamic input (CLI)
- Dedicated SLO reporting engine allows for generating reports on product SLO performance
- Datadog widgets designed and configured for each SLO
- Configuration for SLOs and Datadog widgets are codified in TerraformA
- Build an agent running on VFS product nodes that report to Datadog

### Revision History

Date | Revisions Made | Author
-----|----------------|--------
June 04, 2020 | Initial draft | Keifer Furzland
