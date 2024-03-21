# YYYY-MM-DD - TITLE

Fill out every section of this document, if there is no content for a particular section, explicitly call out that there is no content.

## Summary

Enter a concise summary of the event including the different (team-level) actors in the event.

## Impact

Quantified statement about the impact of the incident.

- How many users were affected?
- What time period were users impacted?
- What impact did this have on the SLO?

## Ownership

Team: List the team that owns the root cause of the incident
PO: The Product Owner of the team
Crew: The OCTO-DE Crew of the team

## Stakeholders

List _all_ stakeholders that are or were involved and include at the very least (but may not be limited to):

Ensure that the list of stakeholders involved are recorded in the post-mortem and must include at the very least (but may not be limited to):

- The Product Owner for each affected features, including which features they are PO of.
- The OCTO DE Lead who approved the Out-Of-Band deploy when such an OOB Deploy was requested; noting that this is regardless of whether the OOB Deploy was approved.
- At least one OCTO DE Platform Lead (which may be the same individual as the individual who dealt with the OOB Deploy request)

Ensure that the [timeline](#event-timeline) includes timestamps of when each individual, listed stakeholder was notified of the event.

## Action Items

Ensure the listed owners are the _teams_ that own the action item, every action items must have a link to an issue.

| Description | Type | Owning Team | Issue # |
| --- | --- | --- | --- |
| Enforce Branch Code Coverage to 'X% per file' in CI | Engineering Work | [@owning-team](https://github.com/orgs/department-of-veterans-affairs/teams/owning-team) | [REPO_NAME - ISSUE_ID](https://github.com/department-of-veterans-affairs/${REPO_NAME}/issues/1) |

## Root Cause Analysis

This section provides a detailed analysis of the event and provides this analysis from a systemic vantage point. Post-mortems are not intended as a "self-criticism" event, but rather as an opportunity to document, learn and improve. This section focuses on providing that input into the learning and adaptation process.

### What happened?

Describe in detail what actually happened and what the downstream effect of the event was outside of the information provided in the "Impact" section. Provide insight into the dependencies between the different moving parts of the problem-space. Start from earliest known trigger and work your way through the cascading events.

### Why did it happen?

- Which mitigations were in place that should have prevented this, but failed to prevent it? How and why did these mitigations fail?
- What should ordinarily have been done to prevent this, but wasn't done?
- What could have been done to prevent this, but isn't part of our modus operandi right now.

### What will we change to ensure this doesn't happen again?

Provide recommendations and concrete plans of action of how you will provide a systemic defense against this type of issue happening again in the future, including how will you ensure these recommendations are implemented & measured? How will you know if these new activities fail(ed)? In most cases, steps listed here should have corresponding action items.

## Resolution

Which steps were taken to resolve the incident. Include the link to the #oncall channel for conversation if a thread in #oncall exists.

### What went well

What went better than expected and deserves a call-out? Think more broadly than just "we got a fix out quickly", instead think about "what were the _enablers_ for X, Y going well".

### What went wrong

Describe instances where our standard operating procedure around how getting to a resolution for this issue failed. This is a meta-question and deals with the process of this specific incident (not the process in general).
Explicitly list 'N/A' if there are no such instances.

### Where we got lucky

Describe cases where, ordinarily, you would have expected to or could have encountered a roadblock, or a hurdle in getting to the resolution, but this _accidentally_ didn't happen (i.e. we got _lucky_). Do not include items that are part of standard operating procedure. In other words, describe instances where the process failed successfully. You can also use this to describe where safeguards did kick in, provided those safeguards prevented much worse from precipitating.

## Event Timeline

Include the step that describes when and how the issue was identified (i.e. how you detected that the issue existed).

- `2024-03-21 @ 02:22 PM`: Slack alert in #health-tools-1010-apm channel for "1010CG Non-submission controller error rate is above 10%"
- `2024-03-21 @ 03:15 PM`: Patrick elevated CG error
- `2024-03-21 @ 03:26 PM`: Patrick posted to Platform Support channel that the aggregate error rates seem very elevated since 3pm ET on vets-api.
- `2024-03-21 @ 03:30 PM`: Lindsay Insco acknowledged and tagged in Kshitiz Shrestha and Lindsey Hattamer
- `2024-03-21 @ 03:33 PM`: Lindsay Insco confirmed a warning oppoed up about 20 minutes prior indicating feature toggles Synthetics monitor
- `2024-03-21 @ 03:37 PM`: Lindsey Hattamer believes this [commit change](https://github.com/department-of-veterans-affairs/vets-api/commit/9f443e0e836248f196ddaf00c1d83080f772991d) will resolve the issue
- `2024-03-21 @ 03:38 PM`: Maintenance window is in place for the 10-10CG form
- `2024-03-21 @ 03:45 PM`: Per Lindsey Hattamer, the build is in process right now for the fix.  Anticipate recovery to take minutes, up to 20 minutes tops.
- `2024-03-21 @ 03:51 PM`: Lindsey Hattamer informed us that there is another PR being prepped
- `2024-03-21 @ 03:56 PM`: Lindsey Hattamer confirmed the fix was just merged in, and will take affect in 20 minutes or less
- `2024-03-21 @ 04:02 PM`: Sync-up happening now
- `2024-03-21 @ 04:20 PM`: Per Eric Boehs, the isusue has been fixed. Root cause analysis is in progress, as reverting their original suspect did not fix it.
- `2024-03-21 @ 04:20 PM`: PagerDuty maintenance window has been removed.  Monitors are being watched
- `2024-03-21 @ 03:56 PM`:
- `2024-03-21 @ 03:56 PM`: 
- ...

## Contributors

- [@contributor_a](https://github.com/@contributor_a)
- [@contributor_b](https://github.com/@contributor_b)
