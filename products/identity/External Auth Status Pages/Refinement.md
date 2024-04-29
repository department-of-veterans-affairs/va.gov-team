## Problem Statement

There is currently inadequate external-facing status pages for VA.gov authentication services. This lack of transparency can lead to confusion and frustration for VA.gov users when issues arise. An external-facing status page would help mitigate these problems by providing real-time updates on the status of these services, leading to clearer communication and better overall service.

### Discussion around the problem statement
- We already have maintenance banners, why not them?
  - We need to confirm all downtimes are displaying correctly on the sign-modal & page.
    - Waiting on CoP FE approval.
    - [Riley added "maintenance_windows"](https://api.va.gov/v0/backend_statuses)
      - PR in Frontend that accompanies this change
  - We can use them, but we need to document our internal process for enabling them.
    - Or automate it.
  - Also, CAIA/Design system error message are not correct for our team.
- Statuspage.io is currently a free plan and we don't have much flexibility with it.
    - Research possible statuspage.io replacements and decide if we keep status page or develop new
      - Where would new be hosted?
        - Must be in an already approved infrastructure
          - k8
          - github
          - statuspage
          - vets-api
