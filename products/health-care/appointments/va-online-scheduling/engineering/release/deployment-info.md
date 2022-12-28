### Weekly deployment to prod(turning on feature flag in prod):

- Wednesdays at noon (12pm est).

- First sprint of the month: 

  - Create a GH ticket to track creation of feature flags for the month (this will usually be about 4).

  - Create New Feature Toggles for the month(4). Feature Toggle naming convention: vaos_deployment_date_sprint. i.e , vaos_Sept_18_sprint.

  - Remove feature Toggles for previous month (excluding last sprint of month)

  - Feature flags will contain all tickets worked on & completed during the sprint (exceptions can be made for urgent/Immediate bug fixes & large tickets). Large tickets will have separate feature toggles.

  - If a dev is working on a ticket that isn’t completed & validated by end of the sprint, the feature toggle in code will be updated to next sprint’s toggle.

