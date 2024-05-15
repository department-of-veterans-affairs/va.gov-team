# 2024-05-13 Find-a-form returning 404 for 10-10EZ after redirect

Fill out every section of this document, if there is no content for a particular section, explicitly call out that there is no content.

## Summary

The redirect from the old 1010ez application URL is not working with URLs adding any of the child pages in the path.  It's only matching /health-care/apply/application and /health-care/apply/application/, not anything under the path such as /health-care/apply/application/introduction. 

## Impact

 The link to the 1010ez from Find a Form (and potentially other places) is giving a 404 error.

- How many users were affected?
     - Potentially 800-1000 users could have been affected by this issue
          - Averageing the number of Find-a-Form searches from the previous month, about 116 users could have been affected by the error
          - The term "1010EZ" came up in 393 searches on VA.gov
          - The term "10-10ez" came up in 172 searches on VA.gov
          - The term "10-10EZ" came up in 293 searches on VA.gov
- What time period were users impacted?
     - 05/06/2024 11:20am ET to 05/13/2024 2:20pm ET
- What impact did this have on the SLO?
     - N/A

## Ownership

Team: 10-10 Health Apps team

PO: Patrick Bateman

Crew: Health Tools crew

## Stakeholders

List _all_ stakeholders that are or were involved and include at the very least (but may not be limited to):

Ensure that the list of stakeholders involved are recorded in the post-mortem and must include at the very least (but may not be limited to):

- Patrick Bateman
- Aparna Nittala - OOB Approver
- Adrian Rollett

Ensure that the [timeline](#event-timeline) includes timestamps of when each individual, listed stakeholder was notified of the event.

## Action Items

Ensure the listed owners are the _teams_ that own the action item, every action items must have a link to an issue.

| Description | Type | Owning Team | Issue # |
| --- | --- | --- | --- |
| Collaborate with Platform, CAIA and PW teams to create an outline of review and testing steps to successfully validate the URL redirect | QA and Engineering Work | [@vfs-10-10](https://github.com/orgs/department-of-veterans-affairs/teams/vfs-10-10) and [@1010-health-apps-frontend](https://github.com/orgs/department-of-veterans-affairs/teams/1010-health-apps-frontend) | [va.gov-team - #83172](https://github.com/department-of-veterans-affairs/va.gov-team/issues/83172) |

## Root Cause Analysis

The issue resulted from missing some regex that handles child paths in the URL redirect.

### What happened?

The 10-10EZ URL was changed from /health-care/apply/application/ to /health-care/apply-for-health-care-form-10-10ez/.  The [redirect request](https://github.com/department-of-veterans-affairs/va.gov-team/issues/80756) was submitted on 4/15/2024. 
The 10-10 team coordinated with IA to implement the redirect. On 5/2/2024, Matt Long (10-10 team engineer) commented in the Redirect request ticket that there was one redirect that was not working in the Review Instance we were testing in.  The finding was that if you search for "10ez" on VA.gov, the returned results on the 2nd option would be a `404`.  The issue was reviewed with Fran Cross and Jill Adams on Public Websites team.  On 5/3/2024, this is where Jill Adams mentions that "If this were a standard redirect, usually that would mean we're missing some regex that handles child paths. I think your PR should already be handling that".  Jill then refers to other engineers on the Public Websites team to take a look.  One of the engineers, Randi Mays, commented on 5/6/2024 that this looked to be common to the Review Instance behavior and happens with other URLs.
Matt Long merged the code on 5/6/2024.  Once the code was merged, the search steps were duplicated and produced a successful redirect, giving an assumption that there was no issue and that the Review Instance behavior was isolated.

On 5/14/2024, Adrian Rollett discovered that the redirect was matching only /health-care/apply/application and /health-care/apply/application/, but not any other child pages under the path.  This was due to 

### Why did it happen?

- Which mitigations were in place that should have prevented this, but failed to prevent it? How and why did these mitigations fail?
     - Testing in the Review Instance uncovered the issue, of a redirect not working from the Search function and selecting the 2nd option on the page, prior to deploying to Staging and Production. The issue was discussed and reviewed by multiple people on teams that are responsible for the redirect and search page successful functions.  The advisement was that this issue was that this was "Review instance behavior", having seen it on other URLs with similar child page setup.
- What should ordinarily have been done to prevent this, but wasn't done?
     - There does not seem to be any action that was not done that could have prevented this issue.  The testing was performed by several people in multiple environments, the impacted teams were engaged appropriately.  The redirect was reported as working as expected upon deployment to staging and production and there were no other indicators that an issue existed until 5/13/2024 when Adrian Rollett brought it to the 10-10 team's attention.
- What could have been done to prevent this, but isn't part of our modus operandi right now.
     - 10-10 team could have gone further to ask about the potential of a regex issue, as mentioned by Jill Adams.  The team could have also opened a Platform ticket to validate the Review Instance behavior.

### What will we change to ensure this doesn't happen again?

The 10-10 team will collaborate with the Platform, CAIA and Public Websites team to improve the current guidance on URL changes, especially around regex.  We can create an outline of testing and code review steps that must be completed in all environments when a URL is being changed and a redirect is implemented.  


## Resolution

Update was needed to change the redirect (from /health-care/apply/application/ to /health-care/apply-for-health-care-form-10-10ez/) to match all child pages under /health-care/apply/application/.

### What went well

The regex issue was easily found and remedied quickly, due to the expertise and experience of the Platform team, specifically Adrian Rollett

### What went wrong

N/A

### Where we got lucky

N/A

## Event Timeline

Include the step that describes when and how the issue was identified (i.e. how you detected that the issue existed).

- `2024-05-13 @ 11:03 AM`: Adrian Rollett found an issue with the 10-10EZ redirect causing a `404` error when accessing the form via the Find a Form page.  This was brought to the 10-10 team's attention as well as a request to review the [PR #14311](https://github.com/department-of-veterans-affairs/devops/pull/14311) that Adrian had submitted to resolve the redirect issue.
- `2024-05-13 @ 11:09 AM`: the [PR #14311](https://github.com/department-of-veterans-affairs/devops/pull/14311) was reviewed by one of the 10-10 team's engineers Joshua Drumm, and approved
- `2024-05-13 @ 11:11 AM`: Adrian Rollett requested an [OOB deployment](https://github.com/department-of-veterans-affairs/va.gov-team/issues/82928) for the redirect fix
- `2024-05-13 @ 11:16 AM`: Anthony Flowers acknowledged the OOB request
- `2024-05-13 @ 12:07 PM`: Aparna Nittala approved the OOB deployment, and also requested that there be time to test in staging 
- `2024-05-13 @ 01:08 PM`: Brandon Dech reached out to the platform-security-team and in their channel for a security review
- `2024-05-13 @ 01:23 PM`: Patrick Black triggered the build
- `2024-05-13 @ 01:45 PM`: Dev deployment is successful
- `2024-05-13 @ 01:49 PM`: Adrian tested and confirmed fix is implemented in Dev environment successfully
- `2024-05-13 @ 02:50 PM`: Ken Mayo from the Platform Security team reviewed and approved [PR #14311](https://github.com/department-of-veterans-affairs/devops/pull/14311) deployment, with the direction to ensure testing is continued as each environment is deployed
- `2024-05-13 @ 02:08 PM`: Adrian Rollett validated and confirmed fix is deployed successfully in Staging environment
- `2024-05-13 @ 02:09 PM`: Patrick Black triggered the Production deployment
- `2024-05-13 @ 02:17 PM`: Adrian Rollett validated and confirmed fix is deployed successfully in Production environment
- `2024-05-13 @ 02:22 PM`: Adrian Rollett informed 10-10 team of successful deployment of the fix, and advised to complete a Postmortem document.
- `2024-05-13 @ 02:34 PM`: Heather Justice tagged PO Patrick Bateman for awareness


- ...

## Contributors

- [@hdjustice](https://github.com/hdjustice)
- [@arollett](https://github.com/arollett)
