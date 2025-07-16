# Production Test Accounts Product Team Usage Patterns Research Findings

## Executive Summary
*[Brief overview of key findings and recommendations - 2-3 paragraphs]*

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

## Detailed Findings by Research Question

### Primary Questions

#### How do developers and product managers currently use production test accounts?
*[Detailed findings with specific examples and quotes]*

#### What testing activities happen in staging vs. production?
*[Breakdown of testing activities by environment]*

#### What does the typical workflow look like?
*[Detailed workflow mapping with variations]*

### Secondary Questions

#### What challenges exist in current testing workflows?
*[Categorized list of pain points with severity/frequency]*

#### How do teams coordinate testing activities?
*[Coordination patterns and communication methods]*

#### What features/scenarios are most difficult to test?
*[Specific challenging scenarios with examples]*

#### How confident do teams feel about feature quality?
*[Confidence levels and factors affecting confidence]*

#### What workarounds have teams developed?
*[Unofficial processes and creative solutions]*

---

## Pain Points and Opportunities

### Critical Pain Points
1. **[Pain Point 1]**
   - Impact: *[Description of impact]*
   - Affected Teams: *[Which teams experience this]*
   - Frequency: *[How often this occurs]*

2. **[Pain Point 2]**
   - Impact: *[Description of impact]*
   - Affected Teams: *[Which teams experience this]*
   - Frequency: *[How often this occurs]*

### Improvement Opportunities
1. **[Opportunity 1]**
   - Potential Impact: *[Expected benefits]*
   - Implementation Complexity: *[Low/Medium/High]*
   - Teams Interested: *[Which teams would benefit]*

2. **[Opportunity 2]**
   - Potential Impact: *[Expected benefits]*
   - Implementation Complexity: *[Low/Medium/High]*
   - Teams Interested: *[Which teams would benefit]*

---

## Recommendations
1. *[Specific actionable recommendation]*
2. *[Specific actionable recommendation]*

---

## Supporting Data

### Participant Breakdown
| Role | Team | Experience Level | Key Insights |
|------|------|------------------|--------------|
| *[Role]* | *[Team]* | *[Years]* | *[Brief insight]* |

### Common Themes
- **Theme 1:** *[Description and frequency]*
- **Theme 2:** *[Description and frequency]*
- **Theme 3:** *[Description and frequency]*

---

**Research Conducted By:** Charlye Tran/ Identity  
**Date:** July 2025  
