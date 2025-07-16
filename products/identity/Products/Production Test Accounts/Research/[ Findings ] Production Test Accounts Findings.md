# Production Test Accounts Product Team Usage Patterns Research Findings

## Executive Summary
Based on the a few conversations with product teams across the VA, product teams heavily rely on production test accounts because staging environments lack critical integrations with VA ecosystem services like secure messaging and pharmacy functionality, making it impossible to properly test real-world workflows before production releases. Teams use these production test accounts for smoke testing, regression testing, usability validation, and load testing since lower environments don't accurately simulate production conditions or usage patterns. The reliance on production testing has become particularly acute with Oracle Health rollouts and the MHV to VA.gov transition, where testing integrations and user flows is nearly impossible outside of the production environment.

## Research Overview
**Study Period:** July 2025 
**Participants:** 4 Product Teams with a mix of product managers, developers, QA engineers, researchers 
**Methodology:** Moderated Interviews  
**Teams Represented:** VEText, MHV to VA.gov transition team, telehealth, medical records, secure messaging

---

## Key Findings

### Production Test Account Usage

#### Current Practices
- The product teams we spoke to leverage production test accounts to validate features in a production environment after releases.  Most teams state that they use lower environments to perform preliminary tests but since these environments are not connected to all services throughout the VA ecosystem (and Oracle), it is challenging to simulate real-world interactions like secure messaging and pharmacy functionality.
- Teams perform a variety of standard tests in production including smoke testing, regression testing, usability testing, data validations, and load testing.
- Load testing in a staging environment is very difficult to accomplish since the usage is nowhere close to the same as it is in production.
- Teams also leverage back-end analysis to check external system interactions (with various services across the VA ecosysystem).  They do this to ensure that APIs are working as intended, and they are able to get the data they need for their feature(s)/product(s) to work properly.
- Some teams also had access to SME's and field testers who were able to test features after they were released to production.  However, access to field testers, "friends and family", SMEs, and etc. were varied and limited to outreach performed by the teams themselves.

#### Staging Environment Usage
- Teams follow a standard practice of developing on their local machines, leveraging dev and staging environments to preliminarily test features prior to releasing.
- However, these teams report that staging differs markedly from production since services across the VA does not always exist in staging.  This makes it impossible to test some workflows like secure messaging and refilling prescriptions.
- Teams also reported that they attempt to keep staging as "clean" as possible since multiple teams use the staging environment.

#### Release Strategies
- One team reported that they created a pre-prod/prod-Beta environment which is essentially a feature flag that is only accessible by a special link given only to specific members of the team.  This allows the team to test a feature in production heavily before it is rolled out to all users.  However, there is a limitation in that if a team member is using his/her own personal account, they may not see the functionality in the same manner as a Veteran.  They are also putting their own personal flows at risk e.g. requesting a prescription refill when they do not need a refill.
- Teams also reported that they have a roll-back strategy if things are released and found to be broken.
- Feature flags were another way teams rolled out new features.

#### Oracle Health
- In terms of Oracle Health, the "train" environment (B1930?) isn't tied to other services in the VA.  There are also limitations on which features work in the train environment.  For example, video visits are not enabled in the train environment.
- Production test accounts are used heavily with the roll-out of Oracle Health since it is nearly impossible to test any integrations in the lower environments.

---

## Validation of Hypotheses

### Hypothesis 1: Production test accounts are heavily relied upon
**Status:** Confirmed  
**Evidence:** As evidenced above, teams are limited in their ability to consistently test certain features in lower environments and leverage production test accounts for usability testing, load testing, feature validation and etc.

### Hypothesis 2: Environment inconsistencies create workflow friction
**Status:** Confirmed  
**Evidence:** Differences between staging and production make it extremely difficult for teams to validate how their features will perform prior to releasing to production.

### Hypothesis 3: Testing workflows vary significantly across teams
**Status:** Partially Confirmed  
**Evidence:** There are industry standard practices that teams leverage but once teams release to production, their testing workflows differ depending upon their resources, relationships and protocols.

### Hypothesis 4: Current processes create confidence gaps
**Status:** Partially confirmed     
**Evidence:** Testing in staging means that teams are not confident in how their features are performing.  However, access to PTAs has allowed teams to smoke test features and work with SMEs, field testers, Veterans to ensure their features are functioning as intended.

---

## Pain Points and Opportunities

### Critical Pain Points
1. **Inconsistencies in which services exist in which environments leads to a staging/pre-prod environment that isn't reflective of a production environment.**

2. **Testing the transition to Oracle Health is difficult outside of production.**
   
3. **Testing the transition from MHV to VA.gov is also difficult to simulate outside of a production environment.**
   

---

## Recommendations
1. Further conversations to understand Oracle Health requirements.
2. Determine the pain points/needs for testing as applications are migrated over to VA.gov from MHV.
3. Explore how we might enable more teams to complete usability testing through a process similar to OCTO's process.

---

**Research Conducted By:** Charlye Tran/ Identity  
**Date:** July 2025  
