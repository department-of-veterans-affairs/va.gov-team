# EVSS AWS GovCloud Migration

- GitHub Label: aws
- Slack channel: #gov-cloud
- Vets.gov link: n/a
- Demo video link: n/a

---

### Table of Contents

# Executive Summary 
- [User Problem Statement](#user-problem-statement)
- [Solution Goals](#solution-goals)
- [Assumptions](#assumptions)
- [Requirements and Constraints](#requirements-and-constraints)
- [Discovery Takeaways](#discovery-takeaways)
- [Solution Approach](#solution-approach)
- [Value Propositions](#value-propositions)
- [KPIs](#kpis)

# Implementation Information
- [Status](#status)
- [Solution Narrative](#solution-narrative)
- [Team](#team)
- [Resources and Documentation](#resources-and-documentation)
- [Screenshots](#screenshots)

---

## User Problem Statement

We want all of our products to exist on a server without defects or performance issues. 

Today, due to the limited space on existing servers, there is currently not enough room to host additional EVSS applications for vets.gov. If we ignore this problem; resources will need to increase to handle the cascading problems, and we may encounter significant performance issues across products that will result in poor user experience and compromise the quality of the site.

## Solution Goals

### User goals


### Business goals
- [ ] Work through legal requirements (per excel doc)
- [ ] Choose small non-live reference data service to do as the first transition
- [ ] CSRA to mock data for that reference data service
- [ ] Test in prod
- [ ] Choose larger, but not super complex, live service to do as second transition
- [ ] Test in prod
- [ ] Choose complex service (Claim Status and eFolder?) to do as third transition
- [ ] Test in prod
- [ ] Continue moving over remaining EVSS services 

## Assumptions


## Requirements and Constraints
 

## Discovery Takeaways

**Principle outputs**
Summary ([reference](reference_documents/EVSS_thoughts_by_LKirkby_Apr2017.docx)):
- EVSS production services are deployed on the AITC environment, which will soon be hitting a hard limit on number of services that can be deployed
- the AITC deployment process is too cumbersome to allow for iterative deployments
- in April 2017, vets.gov made a recommendation for EVSS to host new APIs on AWS GovCloud 

## Solution Approach


## Value Proposition


### Alignment with other VA Initiatives


## KPIs


# Implementation Information

## Status

## Solution Narrative

## Team

## Resources and Documentation

## Screenshots

---

