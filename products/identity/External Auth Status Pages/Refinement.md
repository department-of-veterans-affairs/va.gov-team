## Problem Statement

There is currently inadequate external-facing status pages for VA.gov authentication services. This lack of transparency can lead to confusion and frustration for VA.gov users when issues arise. An external-facing status page would help mitigate these problems by providing real-time updates on the status of these services, leading to clearer communication and better overall service.

### Discussion around the problem statement
- We already have maintenance banners, why not them?
  - We need to confirm all downtimes are displaying correctly on the sign-modal & page.
    - Waiting on CoP FE approval.
    - Riley added ["maintenance_windows"](https://api.va.gov/v0/backend_statuses)
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

## Deliverables
- Documented process for publishing downtime/uptime/maintenance
  - What info specifically will this entail?
    - Three types of downtime
      1. Manually set by team when they need to inform users of a problem
      2. Auto set by datadog monitors
      3. Set ahead of time for scheduled maintenance
  - Decision on what we will use to determine if our services are up or down or degraded.
  - Decision on where we are going to host current status and outage messages for va.gov auth services
- Workflow/Process for publishing outage banner alerts or planned maintenance with roles/responsibilities/timelines
  - Through CAIA/Partner teams 
  - Each CSP
  - In general
- Updated content for banner messages to ensure accuracy/consistency
- Alternative methods for Veterans to achieve tasks, if any.
  - Document within the scheduled outage how VA.gov users can perform the same task in an alternate way.
    - Example: making a direct deposit change by calling the Veteran Support Help Desk.
