# Automated Content Review Product Outline

#### Communications
- Team Name: VSP Content & Information Architecture
- GitHub Label: none
- Slack channel: #vsp-content-ia
- Product POCs: Megan K
- Stakeholders: VA.gov content writers and other team members writing static or dynamic content on VA.gov; VSP content editor(s)

#### Team Members

|Name|Role|Slack|
|---|---|---|
|Megan|Product Manager (VSP Content & IA) |@Megan Kelley|
|Bill|Frontend Engineer|@Bill Fienberg|
|Keifer|Backend Engineer|@Keifer [VSP/BE Tools]|
|Peggy|Content Editor|@peggygannon|
|Alex|Product Manager (VSP BE Tools - supporting team)|@Alex Pappas|

---

## Overview
Automated content reviews allows team members writing static and dynamic content on VA.gov to embrace self-service while adhering to content and plain language standards across the website.

## Problem Statement
Content reviews are currently an entirely manual process. VSP provides, in collaboration with VFS Public Websites, extensive content best practices for teams to reference, but the validation and reviews (to ensure that teams have followed those best practices) require extensive manual support. This support is immensely time consuming for VSP's content editor — raising concerns of scalability — and results in VFS teams at times being inevitably blocked by waiting for content reviews.

_How might we reduce the burden of manual content support, thus improving scalability of Platform's services, and embrace self-service for VFS teams while ensuring that VA.gov products meet VSP standards?_
 
## User Goals

- Launch error-free and plain language content for VA.gov
- Adhere to VSP standards without being blocked by the VSP review process

## Business Goals

- Improve scalability of Platform's services
- Ensure that VA.gov products meet VSP standards 

## Assumptions

- We **assume** that VFS teams will engage with automated content validations, and make changes based on the warnings shown.

## Questions

- If we can put these content validations in a place that makes sense in a VFS team's workflow, could the automated review entirely replace at least one VSP checkpoint? Or, are we only ever hoping to reduce the time a review takes and reduce the back-and-forth of the review process? 

## Solution Approach

- [Vale](https://github.com/apps/vale-linter) as plain language linter
- MVP approach as of January 2020: Launch Vale as a GitHub action in the `vets-website` repository. Collaborate closely with 1-2 VFS product teams surrounding rollout to control messaging and gather feedback.
- This solution is a pivot from the previous approach. [Decision documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/content/automated-content-review/decisions.md).
- Long term plan is to intergrate with Drupal CMS so that automated content validations are served as part of the CMS user's workflow

## Value Propositions

We believe that automated content reviews will:

- Save VSP content editor(s) time
- Improve scalability of Platform's services
- Decrease the chance of missing content issues in review due to human error

## KPIs

- No. of automated content errors flagged for users

Specific to GitHub action iteration: 

- TBD

Specific to CMS iteration:

- Errors per preview node over time

## Current Phase Requirements

#### In Current Scope

- Validate use of Vale as plain laguage linter
- GitHub action to affect users building content as part of VA.gov tools

#### Out of Current Scope

- Drupal CMS integration
- Blocking content validations (current scope is warnings only)

---

## Solution Narrative

### Current Status

### Key Decisions

---
   
## Screenshots

### Before

### After
