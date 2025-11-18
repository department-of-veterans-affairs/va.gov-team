
# Product Outline - Self-Service Authentication

**Team**: Accredited Representative Crew

Product URL: [VA Accredited Representative Portal](https://www.va.gov/representative)

## Overview
Allowing users to authenticate into the Accredited Representative Portal using Login.gov or ID.me authentication services.

## Problem Statement
As we introduce the Accredited Represenatative Portal on VA.gov, how might we allow users to authenticate with the Login.gov and ID.me services that they're accustomed to on the main VA.gov site?

How might we distinguish between users who are authenitcated (have valid login credentials) vs. authorized (are confirmed to be an accredited representative)? 

## Desired User Outcomes

- We believe connecting access to the portal through OGC's ICN API would allow us to easily provide tools to reps
- We would ensure that only accredited representatives would have access to features within the portal (i.e. authorized)
- We can revoke access seamlessly if an accredited representative's accreditation has been terminated

## Undesired User Outcomes
- Accredited representatives are unable to log into the portal
- Non-accredited individuals are able to access portal features, reserved for accredited representatives

## Desired Business Outcomes

- Consistent and Efficient Representative Responses
Accredited representatives consistently provide accurate, timely, and guidance using tools provided by the portal.

- Data Integrity Across VA and OGC Systems
Fewer data inconsistencies through proactive corrections and validated update processes.

## Undesired Business Outcomes
- Unresolved or Delayed Data Corrections
Issues are stalled or misrouted, increasing resolution times and harming Veteran experience.
- Staff Reliance on Workarounds
Teams bypass the standardized process, leading to inconsistent outcomes and loss of accountability.
- Increased Complaints or Escalations
Veterans escalate issues to leadership, the White House hotline, or external advocacy groups due to poor experiences.

## Assumptions
- Representatives will be able to log into the portal using Login.gov
- Representatives will not be able to log into the portal if their accreditation is revoked

---
## Measuring Success
80% of Accredited Representatives are able to log into the portal

### Key Performance Indicators (KPIs)
* Successful logins
* Frequent logins to the portal to utilize its tools

### Objectives and Key results (OKRs)
  - Ensure accredited representatives have a seamless experience but signing into the portal for the first time and after

---

## Release History

### Login.gov | [Release Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representative-facing/product-info/self-service-auth/release-plan-self-service-auth-login-gov.md)
The Accredited Representative Portal was released on March 25, 2025, with Login.gov authentication services. 

### ID.me | [Release Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representative-facing/product-info/self-service-auth/release-plan-self-service-auth-id-me.md)
The ID.me service addition is targeted to release in November 2025.

## Solution Approach
- Utilize existing login methods from VA.gov to provide access to the Accredited Representative Portal, such as Login.gov
- Connect to the OGC database through the ICN API in order to validate the representative's accreditation

--- 

## **Supporting Documentation**

TBD

## **Communications**

1. **Team Name**: Accredited Representation Crew
2. **GitHub Label**: ar-crew
3. **Slack channel**: #benefits-accredited-rep-crew


## **Team Leads**

1. **DEPO Lead**: Jennifer Bertsch
2. **PM**: Lindsay Li-Smith
3. **Engineering**: Jeff Wallace and Kevin Beddingfield
4. **UX Research/Design**: Marisa Dominguez


## **Stakeholders**

1. Martin Martinez, Deputy VSO Liaison
2. Christa Shriber, Deputy Chief Counsel
