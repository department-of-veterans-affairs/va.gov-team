---
name: Redirect, URL change, or vanity URL request
about: Submit a request to change a URL and/or implement a redirect for a URL. Also
  for vanity URL requests.
title: Redirect Request
labels: Redirect request, content-ia-centralized-team, ia-centralized-team, VA.gov frontend
assignees: va-agw, jonichan-ia

---

### Instructions
- Requests must be submitted **AT LEAST** 2 weeks in advance.  Some requests take a significant amount of time and coordination to implement, so start the process as soon as you know you will need one. 
- This issue will be used from initial request through implementation to ensure all individuals working on this are notified of status updates.  Please do not create multiple issues to track different steps.
- It is your responsibility to notify VA stakeholders as appropriate.

| POC | Github alias(es) |
--- | --- 
| Product team point(s) of contact: | @ |
| Content point of contact: | `CAIA will enter` |
| IA point of contact: | `IA will enter` |


### Type of request
- [ ] We are retiring or taking down a page and need to redirect the URL (complete redirect section)
- [ ] We are changing the URL of an existing page (complete redirect section)
- [ ] We need a custom vanity URL (complete vanity URL section)
- [ ] We are removing a temporary redirect  (add relevant background and link to original redirect request)

### Do you have a product technical team able to implement this redirect?
- [ ] Yes - Please note: Redirect still needs approval from IA.
  - [ ] Please verify your team has reviewed [Redirect governance](https://design.va.gov/components/url-standards/redirects) and [Redirect technical implementation information
](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/redirect-implementation-strategy.md) 
- [ ] No - CAIA will need to make Public Websites aware of the ticket.

### Implementation date
When does this request need to be live? **NOTE:** Redirects in vsp-platform-revproxy auto-deploy M-Th. Friday launches should be avoided.
Choose one:
- [ ] On a specific date, connected to a program or publishing requirement. **DATE:**
- [ ] Any day prior to a deadline/latest possible date. **DEADLINE:** 
- [ ] Any day after an earliest possible date. **EARLIEST DATE:**
- [ ] During a specific date range: ***EARLIEST DATE TO LATEST DATE:***
- [ ] No hard timing requirements, publish when possible.

### Redirects 
Current URL  |  Redirect Destination or New URL
---  |  ---
current URL | new URL

### Vanity URLs 
Vanity URL  |  Landing page
---  |  ---
requested URL | landing page URL

**Link to campaign landing page request issue, if relevant:**


### Process, Roles and Responsibilities
- [ ] Requesting team: Above information is provided
- [ ] Requesting team: All appropriate VA stakeholders are notified as appropriate
- [ ] IA: Request is vetted and documented and implementation plan is clear 
- [ ] IA: Request is assigned to appropriate team for implementation 
- [ ] Implementation team: Work is complete
- [ ] PR has received approval from redirect-approval group
- [ ] Implementation team: Validated in production
- [ ] Requesting team: Validates everything is correct in production and closes ticket
