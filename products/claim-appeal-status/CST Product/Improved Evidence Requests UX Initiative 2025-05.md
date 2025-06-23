# Improved Evidence Requests UX Initiative 2025-05

## Overview

There is a 1:many relationship between products and initiatives. This initiative focuses
on improving the evidence and information request process within the VA Claims Status
Tool (CST), ensuring clarity, accessibility, and usability for Veterans. This initiative
aligns with OCTO-DE&#39;s mission to enhance Veteran outcomes by streamlining claim
evidence submission and increasing transparency.

**Product:** Claims Status Tool (CST)

Written by: Saliha Ghaffar

Last updated: March 18, 2025

**Product owner:** Amy Lai

## Outcome Summary

**Goal:** Increase the ease of use for evidence requests in CST, reducing the time claims
spend on hold (&quot;in suspense&quot;) before a VSR can review their claim.

**Target Metric:** % of Veterans who respond to evidence requests within 7 days

## Problem

**Challenge:**

Evidence requests are often unclear, leading to incomplete submissions, Veteran
frustration, and additional administrative burden. Veterans frequently encounter issues
understanding evidence requirements due to language complexity.

**Who is affected:**

- Primarily Veterans and other claimants who have submitted a claim, but also VA staff
who must assist or process incomplete/misunderstood submissions.

**Evidence of the problem:**

- Feedback indicates confusion regarding request language and actions.

- A significant percentage of incomplete submissions due to unclear instructions.

# Causes:

- Current evidence requests derive from print-based API templates

- Lack of plain language and optimization for digital contexts

- Current design pattern for evidence requests doesn’t support consistent display
of alternate content elements

## Relevance to OCTO-DE’s Mission:

This initiative enhances Veteran interactions with CST by addressing usability,
accessibility, and consistency—key pillars of OCTO-DE&#39;s mission.

## Measuring Success

Product KPI 

Baseline 

Target 

**Data Source**

Evidence submission rate 

TBD xx% 

GA/Domo

## What we are building

**In Scope:**

- Development of new design patterns for evidence requests on VA.gov and in the
VAHB mobile app.

- Plain language content for 6 common evidence requests (e.g., 4142 form).

- Standardized content elements (response deadlines, next steps).

- Standardized mechanism to supply evidence request content alternatives to API
data, making use of design pattern elements

- Evidence request content alternatives to API data are supplied to web and VAHB
mobile app in the same source

**Out of Scope:**

- Non-digital submission processes.

- Changes to print-based evidence request templates.

**User stories**

As a claimant, I can use Claim Status Tool on VA.gov or in the VAHB mobile app to understand
the evidence VA is requesting and the actions I can take so I can respond quickly and
confidently.

As a VA SME or OCTO team member, I can provide some or all pieces of alternative content
described in the design pattern, so I can provide the best match for the specific evidence
request and the most appropriate content for web and mobile.

As a VA SME or OCTO team member, I can provide alternative content to the Benefits Claims
API tracked items content using consistent data fields, so I can provide information (including
bulleted lists) and links that work within the evidence request card and details design patterns
for web and mobile

As an OCTO team member, I should be able to submit feedback on the content.

As an OCTO team member, I can learn which evidence requests have been reviewed and/or
alternate content provided so I can ensure we make progress in improving usability of specific
evidence requests.

As an OCTO team member, I can use Datadog or Google Analytics to assess response rate for
specific evidence requests (in addition to aggregate response rates) and to distinguish between
1 st -party and 3 rd party requests so I can ensure we improve requests with low response rates

**Communications**

#benefits-management-tools

**Stakeholders**

VBA: Andrew Gray, Alejandro Mendiolaflores
