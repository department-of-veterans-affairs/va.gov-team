# WIP - Product/Service SLO Tools

> This document is in DRAFT status and is subject to change

## Problem Statement

VFS teams currently don't have a consistent way to drive decisions on the platform based on product performance metrics.

We aim to enforce an SLO culture, and in order to allow teams to drive decisions we need SLOs defined.

## Proposed Solution

- Clearly delineate and define what makes a product on VSP
- Work with VFS teams to configure sensible initial SLO on each product
- Define a configuration template (YAML?) that can be used in monitoring, reporting, scripts, etc.

## Assumptions

- We define a service or a product as a discrete block of functionality on VA.gov
- A `service` is some code that's compiled & released on networked infra that users access via the web
- A `product` is a collection of `services`?

Maturity level of a given product could be:

- greenfield - with no current deploys on the VSP
- existing system in production, with some form of monitoring, yet no formal objectives exist, thus no error budget and an implicit 100% uptime goal
- running deployments in production, with SLOs below 100%, yet with no common understanding on how to leverage SLO - "without teeth"

In order to reach a productive positive feedback loop, the following state needs to be true for a given product:

- SLOs are present and all stakeholders for the product approve
- People responsible for product agree it is possible to meet SLOs as defined
- Organization commits to using error budget for decision making/prioritizing work effort
- Process is in place for refining the SLO over time

### Risks

- We don't know exactly what makes a useful product/service boundary
- SLO compliance may be simply another KPI or metric that's not used as a decision-making tool
- Increase confusion around how to configure and define applications
- VFS teams aren't able to improve/meet SLO because of external factors

### Alternatives

- Define products in DataDog
- Build a dashboard with Grafana for each product

TODO:

- [ ] templates for SLIs that we suggest using for products that make sense in our realm
  - [ ] numerator, denominator, threshold
- [ ] what's our feedback loop look like?
- [ ] where does this live in the product onboarding cycle & collaboration cycle?
- [ ] how do we enforce/adopt decision-by-data design?
