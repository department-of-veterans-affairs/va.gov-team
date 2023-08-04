# Initiative Brief - EVSS to LH > Disabilities Rating
#### Overview

Product: Profile > Nametag > Disabilities Rating
Initiative: Disabilities Rating LH API

## Outcome Summary
All endpoints provided by EVSS need to be migrated to LightHouse(LH). The initiative is to make use of the endpoint that's being migrated by the Benefits team. 

**Related/Associated product(s)**
- Product | [Link to product outline ](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/nametag)

## Problem
EVSS is being sunset and will no longer be supported. We need to leverage the new LH API. 


## Measuring Success

### Key Performance Indicators (KPIs)

-[ Product KPI Metrics](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/nametag#kpimetrics)

---

## Discovery
### Assumptions/Risks

- **[Technical] Feasibility Risks** (can we build it with available tech/data):
There are concerns around disability rating not having an end to end setup in staging. We're using mock data for testing which plugs into a sandbox environment on the LH side and does not provide a complete end to end process. 

### What're you building
We're simply changing the endpoint we're using to read the Disability rating which then displays in the nametag

## Launch Planning

#### Initiative Launch Dates
- *Target Launch Date*
  - 8/29/2023
- *Actual Launch Date* 
  - tbd

### Communications

- **Github labels**: vsa-authenticated-exp; profile;nametag
- **Slack channel**: [#accountexp-authexp](https://dsva.slack.com/channels/accountexp-authexp); [#vfs-evss-service-migration](https://dsva.slack.com/channels/vfs-evss-service-migration)


