# Initiative Brief - EVSS to LightHouse > Disabilities Rating API Update

**Last updated: September 12, 2023 -- updated launch dates**

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

### Objective: Maintain or improve performance for disability rating.

**KPI: Maintain a greater than 95% success rate for retrieving disability rating.**

|KPI|Rate (%) 1 month pre-launch (7/30/2023-8/29/2023)|1 week @10% (8/30/23 - 9/5/23)| 1 week @25% (9/6/23 - 9/12/23) |1 week @50% (9/13/23 - 9/19/23)|1 week @100% (9/20/23 - 9/26/23)| 1 month @100% (9/20/23 - 10/19/23) | 2nd month @100% of users (10/20/23 - 11/19/23)|
|---|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|% of successful retrievals|||||||
|% of failed retrievals|||||||


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
- Launch to 10%: August 30, 2023
- Launch to 25%: September 6, 2023
- Launch to 50%: September 12, 2023

### Communications

- **Github labels**: vsa-authenticated-exp; profile;nametag
- **Slack channel**: [#accountexp-authexp](https://dsva.slack.com/channels/accountexp-authexp); [#vfs-evss-service-migration](https://dsva.slack.com/channels/vfs-evss-service-migration)


