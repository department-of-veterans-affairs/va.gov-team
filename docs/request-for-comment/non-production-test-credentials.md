# Non-Production Test Credentials

| | | | |
| --- | --- | --- | --- |
|**Decision Made:**|Yes| **Decision Date:** | 06/26/2017 |
|**Revisit Decision:**| Yes | **Revisit Date:** | 9/26/2017 |

**Revisit Criteria:** Time or Change in Policy

**Decision Makers:** Vets.gov Engineering Team 

---
## Decision
Non production test credentials should be documented in GitHub and are allowed to be shared on Slack, when possible share the link the the documentation on Github instead of posting the credentials directly. If a situation arises where sharing the documentation is not readily accessible to the second party it is acceptable to share the credentials directly. Production credentials that are not publicly avaiable should remain secured. 

## Rationale
In the course of engineering events we often require test credentials for our various system integrations. These take the form of usernames and passwords or Tokens. These should remain in limited circulation, but they are tools to be used by the team to facilitate development, testing, and validation and as such they need to be shared between team members. A credential that is classified as Non-Production Test must not grant the bearer access to any system or record that contains valid personally identifiable information or other privileged information. 
