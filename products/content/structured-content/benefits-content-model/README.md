# Product Outline - Benefits Content Model (BCM)

## Overview
We will build within the Drupal CMS a central content model for Benefits which can function as a single source of truth, enabling the objective of COPE (create once, publish everywhere).

## Problem Statement

Currently, benefit content is well-structured for Veterans as a web experience within the Benefit Hubs (e.g., https://www.va.gov/health-care). However, that content is not structured within the CMS so that it can be leveraged by any other channel, nor can it be re-used within the Benfit Hubs on the web. 

This causes a lot of waste:
- When changes are needed, they must be coordinated across all the places the old information exists
- Each product team has to manage a content creation process for new features or content
- The content team has to do a lot of manual work interacting with all these product teams

This also impacts Veterans:
- In the best case, Veterans can encounter different versions of the same information
- When information is changing, Veterans can encounter contradictory information as different products are updated on independent schedules
- Updates can be missed entirely by some products

**How might we build a single source of truth so that benefit content can be updated once and then propagate to all Veteran-facing products automatically, ensuring that content is consistent and accurate?**

## Desired User Outcomes

- VAgov product teams can build products that will always present current and accurate information, without product teams having to touch code
- Content creators and editors will be able to create once for all products and be able to make changes in only one place
- Content owners will not have to chase down multiple product teams to ensure information is updated

## Undesired User Outcomes

- Degradation of language presented in any given channel – e.g., plain language compromised by content that can't adapt to a given product's voice, grammatical context, etc.

## Desired Business Outcomes

- Save money and resources by removing inefficiencies
- Compliance with changes required by external stakeholders is much easier to monitor and report
- Increase Veteran trust by saying the same thing about benefits across channels

## Undesired Business Outcomes

- Governance problems around responsibility for quality of language in products

---
## Governance of BCM

Since this is a CMS product, we intend to govern construction of the BCM under the [CMS Collaboration Cycle](https://va-gov.atlassian.net/wiki/spaces/VAGOV/pages/1791459333/CMS+Collaboration+Cycle).

Products that consume the BCM will go through Platform Collab Cycle.

Benefit content will be managed and governed by the Sitewide Content team.

---
## Measuring Success


### Key Performance Indicators (KPIs)


#### Initial hypothesis for KPIs - Minimum Viable Product (MVP)

_Note: this content model is not a Veteran-facing product itself_

**At least two products** are able to leverage the Benefits Content model (BCM) MVP 
- Existing CMS consumers - Benefit Hubs (including Benefit Landing Pages and Benefit Detail Pages), possibly Resources & Support
  - These pages currently present benefit information in an unstructured ("blobby") way
- Chatbot, aka Virtual Service Agent
  - Currently has a semi-manual process for acquiring content from benefit hubs and adapting it to their product

Each product team will have its own documentation and Platform Collab Cycle process when they are ready to build products around the BCM MVP.

#### Baseline KPI Values
n/a

### Objectives and Key results (OKRs)

These will be set by individual product teams that consume BCM.

---

## Assumptions
- *Include indication of which assumption you think is most risky. Your Solution Approach (next section) should describe how you'll validate that assumption w/your initial set of functionality*

- A technical means will be made available for products to access Drupal data outside of the content-build process.
- A content model can be constructed such that product teams can incorporate it into their existing content style and voice.
- It's actually possible to distill a useful and relatively simple content model from the complexity and differences among the myriad VA benefits.

## Solution Approach

- We are going to build a new content type in Drupal, and each VA benefit will have a node.
- There were no competing ideas for how to centralize content, and COPE is a well-established strategy at VA and across the industry.
- Our MVP will consist of the benefits themselves and some additional fields related to applying for the benefit. We tend to group these fields under "How to apply," as that is a content area that is present in the existing benefit detail pages for the vast majority of benefits.
- We will decide how to evolve and add onto the BCM based on iteration and feedback with the MVP consumers (at least 2 products, as stated above under "Initial hypothesis for KIPs").
- Benefits will be nodes. We are aware that the content-build time is node-count driven, so the addition of a few dozen benefit node will have a non-zero impact on build times in the current publishing model. However, no alternative architecture was identified.

### Initiatives
*Include initiatives (iterations, new features, etc.) to improve this product. See the [Initiative Brief Template](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/product/initiative-brief-template.md)*

- Initiative | [Link to Initiative Brief](#)

--- 

## Launch Strategy
- *How are Veterans and others using this product going to know it exists?*
- *What marketing, outreach, or communications are necessary for this product to be successful?*
- [Link to Release Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/release-plan-template.md)

## Launch Dates
- *Target Launch Date*
  - tbd
- *Actual Launch Date* 
  - tbd
- *What date will you evaluate impact after launch (and when do you expect to have your Impact Review)?*
  - tbd

---

## Solution Narrative

### Current Status

### Key Decisions

---
   
## Screenshots

### Before

### After

---

#### Communications

<details>

- Team Name: Sitewide Public Websites
- GitHub Label: 
- Slack channel: #sitewide-public-websites
- Product POCs: Wes Rowe (PM), Jill Adams (DM)
- Stakeholders: 

</details>

#### Team Members

<details>
 
 - OCTO-DE Lead: Michelle Middaugh (PO for Public Webites and CMS teams)
 - PM: Wes Rowe
 - Engineering: Daniel Sasser
 - Research/Design: Dave Pickett (content design)
 
</details>


#### Stakeholders

<details>
 
_What offices/departments are critical to make this initiative successful?_
 
</details>

