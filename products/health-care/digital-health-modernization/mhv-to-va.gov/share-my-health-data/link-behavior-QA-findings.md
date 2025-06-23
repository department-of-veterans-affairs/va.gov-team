# Share my health data (SMHD) link behavior
The link on the landing page, "Share your personal health data on the Share My Health Data website,"  was added to the medical records card May 2025. 
[Ticket for this work](https://github.com/orgs/department-of-veterans-affairs/projects/1420/views/1?pane=issue&itemId=107332146&issue=department-of-veterans-affairs%7Cva.gov-team%7C108088)
[PR for this work](https://github.com/department-of-veterans-affairs/vets-website/pull/36133)

## Behavior based on environment
- On non-production env (e.g. staging) the smhd link is 'https://veteran.apps-staging.va.gov/smhdWeb'
- On production env, the smhd link is 'https://veteran.apps.va.gov/smhdWeb'.

### On staging, the following issues were identified:
- The link will only work if the tester clicks on it in a browser within the CAG network
- When following the instruction in the bullet just before this one, sometimes the site would require the tester to sign in again to VA.gov

### On prod (during GNG on May 16) these issues were resolved:
- In prod, the link works as expected when the tester clicks the link in a browser outside of CAG
- In prod, the tester is not required to sign in again on VA.gov upon clicking the link

These issues with the SMHD link in the medical records box were sufficiently addressed, allowing GNG to be a success.
