# 2024-05-13 Find-a-form returning 404 for 10-10EZ after redirect

Fill out every section of this document, if there is no content for a particular section, explicitly call out that there is no content.

## Summary

The redirect from the old 1010ez application URL, it's only matching /health-care/apply/application and /health-care/apply/application/, not anything under the path. 
## Impact

 The link to the 1010ez from find a form (and potentially other places) is giving a 404 error.

- How many users were affected?
     - Averageing the number of searches from the previous month, potentially 116 users could have been affected by the error
- What time period were users impacted?
     - 05/06/2024 11:20am ET to 05/13/2024 2:20pm ET
- What impact did this have on the SLO?
     - I don't know what the SLO is.

## Ownership

Team: 10-10 Health Apps team
PO: Patrick Bateman
Crew: Health Tools crew

## Stakeholders

List _all_ stakeholders that are or were involved and include at the very least (but may not be limited to):

Ensure that the list of stakeholders involved are recorded in the post-mortem and must include at the very least (but may not be limited to):

- Patrick Bateman
- Brandon Dech
- Ken Mayo
- Adrian Rollett

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

- `2020-01-02 @ 12:34 PM`: The [build](https://build.reference.url/details) ran
- `2020-01-03 @ 02:34 PM`: The problem was identified by Team T1 through X & Y, and [issue #123](https://github.com/department-of-veterans-affairs/${REPO_NAME}/issues/123) was created to track it
- `2020-01-03 @ 02:40 PM`: [Issue #123](https://github.com/department-of-veterans-affairs/${REPO_NAME}/issues/123) was fully understood by team T1
- `2020-01-03 @ 02:40 PM`: The incident rose to the level requiring a post-mortem due to factors X and Y.
- `2020-01-03 @ 02:45 PM`: Team T1 produced [Pull Request #124](https://github.com/department-of-veterans-affairs/${REPO_NAME}/pull/124) to resolve the issue
- `2020-01-03 @ 02:50 PM`: The PR was approved by a member of Team T1 and a member of Team T2 because T2 has interests 'I' in this
- ...

## Contributors

- [@contributor_a](https://github.com/@contributor_a)
- [@contributor_b](https://github.com/@contributor_b)
