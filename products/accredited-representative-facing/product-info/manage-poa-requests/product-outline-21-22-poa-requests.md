# Accredited Representative Portal - Form 21-22 / Manage Power of Attorney Requests - Product Outline

### February 2026 update
We are adding a more granular permission set to this feature to better reflect the needs and workflows of VSOs. Although Form 21-22 grants POA to an organization, not an individual, field 16A allows the claimant to name an accredited representative representing that organization (who countersigns the paper form in field 23A). The initial release of this feature gave a portal user either access to all 21-22s for an organization or none of them -- the new permission level will show 21-22s *that name the user* in 16A. The sections below will be updated accordingly.

## Overview
We will create a site for accredited representatives hosted on VA.gov yet visually distinct where VSOs are able to accept or decline representation requests from Form 21-22.

Objectives:
- Develop a user-friendly website that enables Veteran Service Organizations (VSOs) to manage power of attorney (POA) requests from veterans efficiently.
- Ensure the site's design accommodates future expansions for additional tasks accredited representatives perform.

## Problem Statement
The current systems for accepting or denying representation requests by Form 21-22 are either hosted on a deprecated site (SEP) or are entirely on paper. It is very slow process and does not provide a method for notifying the Veteran if the request has been accepted or rejected.

This project asks how might we digitize the acceptance of Form 21-22 and host it on a more modern site? This is a complement to the the Accredited Representative Management (ARM) team's work (see their [product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representation-management/product-documentation/appoint-a-representative/product-outline-appoint-a-representative.md)).
 
## Desired User Outcomes
 - Veteran Service Organizations are able to accept or reject a claimant’s request for power of attorney (Form 21-22) 
 - Veteran Service Officer representatives (VSO representatives) with the ability to accept or decline are notified when a POA request is pending for my review 
 - VSO representatives have a secure login system to verify accreditation and identity 
 - VSO representatives who are also Veterans can be confident that they are affecting only the Veteran’s files and not their own
 - Veterans are notified whether their POA request was accepted or rejected 
  - The site increases the number of claims accepted or rejected digitally
 - VSO representatives begin to use and trust the site
 - VSO representatives are able to immediately start working on a claimant's needs as soon as they accept the representation request
 - National Veteran Service Organizations have administrative control over who can manage POA requests within their organization

## Desired Business Outcomes
 - Increased use of digital forms which is a current OCTO priority
 - Decrease in forms that are unanswered or unresponded to

## Measuring Success

### Key Performance Indicators (KPIs)
 - Increased use of digital acceptance of forms
 - Positive customer feedback
 - Decrease in time between when a VSO accepts a Form 21-22 and when the rep can access a Veteran's records

### Objectives and Key Results (OKRs)
- The majority of representatives report an easy experience with the process of using the site
- The time between acceptance of representation and access to the Veteran's record is shortened

## Assumptions
- VSOs want to be able to digitally accept or reject Form 21-22
- Representatives want an online digital representative portal
- Representatives are unhappy with the current approach
- VSO representatives who are Veterans are concerned that the site not be confused with the Veteran-facing VA.gov

## Solution Approach
- Create a flexible site built on VA.gov that can be expanded to allow other rep facing tasks
- Create a visually distinctive site that still conforms to VA.gov look and feel
- Create a site that allows VSOs to accept or reject Form 21-22

### Initiatives
Parallel effort to conduct research with accredited representatives to further explore what a representative site could be used for and prioritize those needs. 

## Launch Strategy
We will collaborate with Office of General Counsel and VBA VSO liaison (Marty Calloway) in addition to the Office of Public and Intergovernmental Affairs to make VSO aware of the new site and encourage adoption.

## Launch Dates
Target Launch Date: Mar 11, 2025

## Supporting Documentation
- [Product Playbook/Incident Response Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representative-facing/product-info/manage-poa-requests/launch-materials/product-playbook-incident-response-plan.md)
- [Release Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representative-facing/product-info/manage-poa-requests/release-plan-manage-poa-requests-v0.md)

#### Communications

- Team Name: Accredited Representative Facing
- GitHub Label: accredited-rep-facing
- Slack channel: [#benefits-representative-facing](https://dsva.slack.com/archives/C05SUUM4GAW)

#### Team Leads
 
 - DEPO Lead: Jennifer Bertsch
 - PM: Candi Lemoine
 - Technical Architect: Alex Prokop
 - Engineering: Oren Mittman
 - Research/Design: Eva Heintzelman 
 
#### Stakeholders

- Marty Calloway
- Brandi Traylor

What offices/departments are critical to make this initiative successful?
- Lighthouse (connections to their APIs)
