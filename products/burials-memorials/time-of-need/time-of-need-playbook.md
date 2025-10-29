# Time of Need Playbook

> NOTE  
> - Links to complete data for each of the sections below are welcome and encouraged.  
> - This document serves as the required incident response procedure for the product and should be iterated as changes occur.

## Product Description
- Product outline: https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/burials-memorials/time-of-need/documents/Product-Outline.md
- Purpose: Support Veterans and families during time‑of‑need workflows (claims, memorials, burial benefits, etc.).
- Status: (Add current prod status, last major release date)
- Dependencies: vets-api, mulesoft API, CaMEO

## Routes to Code
Add links to:
- Frontend application directory https://github.com/department-of-veterans-affairs/vets-website
- Related content-build repository areas https://github.com/department-of-veterans-affairs/content-build
- API specs (vets-api endpoints used)
- Feature documentation
- Terraform / infrastructure (if any)

Issue tracking:
- GitHub epics / labels for incidents: (link)
- Known error log: (link to living doc)

## Contacts

### Team Members
- DSVA Product Lead: Skipper Soloman, Laura Stephens
- Product Manager: Catherine Hughes – catherine.hughes2@va.gov
- Tech Lead: Kenneth Santiago – kenneth.santiago@va.gov
- Design / Research: Carly Yamrus - carly.yamrus@va.gov
- Design / Research: Brian Campbell - brian.campbell5@va.gov

### Outage / Incident Contacts
- Primary On-Call (if defined): (name, email, Slack handle)
- Secondary / Backup: (name, email)
- PagerDuty: (email / service name / escalation policy link)
- Slack Channels: #va-gov-mbs-notifications

### Escalation Path
1. Page on-call (PagerDuty / Slack)
2. Notify Product + Tech Lead
3. Post in #vfs-platform-support with summary
4. Open incident ticket (template link)
5. Schedule incident huddle (include Zoom/Teams link)

## Troubleshooting

### Observability & Metrics
Add links to:
- Sentry dashboard (frontend errors)
- Datadog / Prometheus (if applicable)
- Google Analytics / Matomo dashboards (user impact)
- Build pipeline status (GitHub Actions / Jenkins)
- Uptime monitoring (Pingdom / internal)

Key metrics to watch:
- Error rate (Sentry) – threshold: (define)
- API 4xx / 5xx rates (endpoint list)
- Form completion success rate
- Session abandonment at step (N)

### Common Error Patterns
| Symptom | Possible Cause | Action |
|---------|----------------|--------|
| Form submission 500 | Backend dependency timeout | Retry, capture request ID, escalate to API team |
| Missing feature flag | Registry not deployed | Rebuild content or verify flag config |
| Stale bundle | CDN cache delay | Invalidate path or wait propagation (~15m) |

(Expand as discovered.)

### Issue Investigation Steps
1. Confirm user impact (repro steps, environment, scope).
2. Check Sentry for grouped issue (search by URL or component).
3. Grab trace/request IDs (if API calls failed).
4. Validate feature flags / build hashes.
5. If data issue: confirm whether PII present before sharing logs.
6. Open/associate an incident ticket; document timeline.
7. Draft root cause hypothesis; validate.
8. If resolved, add resolution + preventive action.

### Flipper Features and Rollback
- No Flipper feature currently. Rollbacks use the `vagovprod` flag in the content build repository registry file.
- Emergency rollback steps:
  1. Revert offending commit (frontend) or disable registry exposure.
  2. Trigger rebuild: `yarn build --entry=time-of-need` (adjust entry name).
  3. Verify deployment (check bundle hash and load in prod).
  4. Close out with incident summary.

(Consider adding a controlled feature flag for safer gradual enablement.)

## Deployment
- Build command (all): `yarn build`
- Scoped build (example): `yarn build --entry=time-of-need`
- Dev watch: `yarn watch --env entry=time-of-need`
- Expected entryName: (confirm from manifest)
- Content deploy dependency: (yes/no; link to content build pipeline)

## Security

### Data Classification
- Handles PII: Yes (list specific fields: name, address, SSN last 4?, DOB, etc.)
- PHI: No (or specify if any)
- PCI: No

### Logging & Privacy
- PII is scrubbed/masked before logging.
- Sentry configuration: (link to scrubbing rules)
- Do not share raw logs containing user-submitted data in open Slack channels.

### Known Risks / Accepted Exceptions
- (List any accepted security exceptions w/ tracking ticket links)

### Required Actions During Incident
- If potential data exposure: escalate to Security (provide contact) within defined SLA.
- Capture timeline but exclude raw PII in notes.

## Accessibility
- Component library: VA.gov design system (Web Components)
- Recent a11y review date: (add)
- Known a11y issues: (link to tracking ticket list)

## Post-Incident Review Template
1. Summary
2. Impact (users affected, duration)
3. Timeline (UTC)
4. Root Cause
5. Mitigations Applied
6. Preventive Actions (owners + target dates)
7. Artifacts (logs, Sentry issues, PRs)
8. Lessons Learned


---

Last Updated: (add date)  
Owner: (name / email)
