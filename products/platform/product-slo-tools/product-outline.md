# Product SLO Tools Product Outline

> This document is in **DRAFT** status and is subject to change

> Last edited: 2020-06-04 by @kfrz

#### Communications

**Slack**: `[#vsp-tools-be](https://dsva.slack.com/channels/vsp-tools-be), [#vsp-tools-fe](https://dsva.slack.com/channels/vsp-tools-fe)`

#### Team Members

| Name | Team | Role |
| ---| --- |--- |
| Dror Matalon | DEPO | Product Owner |
| Alex Pappas | VSP BE Tools | Product Manager |
| Keifer Furzland | VSP BE Tools | BE Engineer |
| - | VSP FE Tools | FE Engineer |

---

## Overview

In order to improve the data-driven experience on VSP, we need to have a clear process in place for the entire service level objective (SLO) lifecycle.

## Problem Statement

VFS teams need to drive product decisions based on SLO performance.

VFS teams do not have a consistent, documented process for defining and tracking SLOs.

VSP is unable to manage and track all VFS product SLOs in a robust manner.


### Background

**What is an SLO and why is it important?**

SLOs allow for safer, faster, and easier iteration and experimentation by setting performance boundaries from which a service can be improved. Here's a quick summary from [Datadog](https://www.datadoghq.com/blog/slo-monitoring-tracking/):

> SLOs set precise targets for your SLIs, which are the metrics that reflect the health and performance of a service. For instance, if you want to ensure that typical user requests are serviced quickly, you might use your service’s median latency as an SLI. You could then define an SLO such as, “the median latency of all user requests (as computed every minute) will be less than 250 milliseconds 99 percent of the time in any calendar month.”

> Translating business performance objectives into numerical targets allows for framing discussion about whether or not a system is sufficiently reliable. These metrics inform engineering, design, and architectural decision making from a purely data-driven methodology.


**What products should define SLOs?**

Anything that has a VA.gov user-facing system should have at least one availability SLO defined

**How do VFS teams refine their SLOs?**

VFS teams will monitor SLOs via the monitoring & reporting tools available on VSP and iterate based on this data.

---

###### SLOs vs SLAs

**SLOs:** service level objectives. These are targets that a service team wants its system to achieve, and will measure and report its performance against those targets. However, there are no consequences if the objective is not met --- these are aspirational but realistic goals that the service team is communicating should be the performance of the measured service.

**SLAs:** service level agreements. These are targets that a service team intends its system to hit, with consequences if those targets are not hit.

Read more:

- [SLO Fundamentals](https://cloud.google.com/blog/products/gcp/sre-fundamentals-slis-slas-and-slos)
- [Defining SLOs](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/policies-work-norms/how-to-write-your-slos.md)
- [Google's SRE Approach](https://landing.google.com/sre/workbook/toc/)


## User Goals

- As a VFS team member, I understand the requirements for SLO performance as documented in the collaboration cycle
- As a VFS team member, I understand how to add, monitor, and update SLIs and SLOs
- As a VSP team member, I can view and manage all SLIs and SLOs

## Business Goals

- As a DEPO stakeholder, I can view visualize the overall status of all platform-based SLOs

## Assumptions

- By implementing an SLO-driven decision process, we allow teams to own their performance and increase self-service by
adding "guardrails" to follow on the VSP
- _Products_ are defined as the modules found in `vets-website` [manifest](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/registry.json) -- as the application gen docs lay it out: https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/platform/tools/generator/
- Products like forms will have different user performance needs than search or claims, so each SLO may vary

- VFS teams and stakeholders will benefit from data-driven decision making based on SLO performance tracking
- We define a service or a product as a discrete block of functionality on VA.gov
- A `product` is some code that's compiled & released on networked infra that users access via the web
- Teams (VFS) may have responsibility for one-to-many products, each having one-to-many SLOs

Maturity level of a given product could be:

- greenfield - with no current deploys on the VSP
- existing system in production, with some form of monitoring, yet no formal objectives exist, thus no error budget and an implicit 100% uptime goal
- running deployments in production, with SLOs below 100%, yet with no common understanding on how to leverage SLO - "without teeth"


## Solution Approach

SLOs are a vital tool in an organization's decision making toolkit. This design includes tools and processes that will
directly involve engineers, product owners, and stakeholders.


1. Understand and document what to measure and why it matters
1. Define and approve service level indicators, objectives, and error budgets
1. Configure monitoring and reporting tools so that VFS stakeholders can make the right decisions

These steps are repeated as needed throughout the Collaboration Cycle. VFS teams are responsible for setting and
maintaining their products to meet defined SLOs.

This product includes collaboration cycle process amendment as well as a collection of documentation and tools for
working with SLOs.

- test run this process with a VFS team or two
- outline initial SLO touchpoint meeting with VFS team & VSP tools team
See [design doc]()

#### Collaboration Cycle
We aim to work alongside VFS teams to define reliability metrics, SLIs, and SLOs that are closely tied with VFS business objectives.

_**During the collaboration cycle**_,

...**VSP tools teams** will:

- provide templates, documentation, and baseline definitions for SLO configuration
- define the enforcement policy for SLO performance on VSP
- hold a touchpoint meeting to answer questions, provide support, and define SLOs

...**the VFS team** will be responsible for:

- defining list of products, transactions, and responsible team members
- committing to using the error budget for decision making via an error budget policy
- determining if the SLOs are possible to meet for the product
- obtaining stakeholder sign-off on SLOs as being appropriate for the product

#### Documentation & Tools

VSP tools teams will...

- document a VFS-facing playbook for when an SLO suffers
- manage updates to SLO management interface

See the [design doc]() for more detailed technical design details.

## KPIs

- Number of teams with active SLOs
- Number of products with active SLOs

## Solution Narrative

- **May 2020:** BE Tools began discovery and design for SLO implementation
