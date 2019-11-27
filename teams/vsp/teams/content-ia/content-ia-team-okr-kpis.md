# VSP Content & Information Architecture Team OKRs & KPIs

## Objectives and Key Results

### O: Enable VFS and VSP users to find crucial documentation resources on their own

- KR: Copy all crucial, nonsensitive documentation from `vets.gov-team` and `va.gov-vfs-teams` to `va.gov-team` and `va.gov-team-sensitive`
- KR: Implement interim solution for shared large file storage
- KR: Implement IA of sensitive documentation storage
- KR: Ensure that 100% of Slackbot and >85% of GitHub links to documentation are functional 

### O: Uphold content and information architecture standards with VFS teams without blocking their work processes 

- KR: Implement OOO coverage process for all team members
- KR: Acknowledge and schedule 100% of review requests within 3 business days
- KR: Implement ≥1 VFS-facing automated test for content or IA
- KR: Conduct initial collaboration on content and IA for >85% of VFS work efforts within 3 weeks of project kick off

### O: Ensure that 100% of VFS teams with contracts ending have captured crucial documentation about how to work on their product in an accessible and findable location

- KR: Determine and implement expectations for VFS teams regarding documentation offboarding
- KR: Complete documentation review for 100% of VFS teams before their contract end date

---

## Key Performance Indicators [WORK IN PROGRESS]

_Draft of KPI ideas as of 11/26/19. Note that measurement for *none* of these is currently implemented._

[Workshop with VSP Insights & Analytics](https://docs.google.com/spreadsheets/d/1eoYLCAV1pmE0CPXD4npgsPocJZMmvzp2E6lZJrMJgH4/edit#gid=1554481611)

[Pre-workshop planning](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsp/teams/content-ia/kpi-setting-pre-workshop.md)

| Idea of Metric | Related Hypothesis or Assumption | Notes on Implementation |
|---|---|---|
| # of changes that occur in final content review | Assumption: If teams follow design patterns and content of current product while they are building on VA.gov, then we assume the burden of manual review will decrease. | This would just involve Peggy manually counting changes every time. Seems not ideal? Is there another way?| 
| # (or %) of teams engaging with us within 3 weeks of project kick off | Hypothesis: If teams engage with us closer to the start of their project, then we expect the support and review process to go more smoothly and be more successful. | Need ability to better track all projects and when they kick of |
|Number of manual reviews per team| Assumption (INVALID): More manual reviews is a sign of failure. This is not something we assume, particularly bc it is at odds with our goal to collaborate early and often. But is it worth tracking this anyway? | Need better tracking of support requests (and to label with requesting VFS team?). |
| IA "health" of VA.gov | Hypothesis: If we effectively support VFS teams in implementing "good IA" on VA.gov, then the findability of key content on VA.gov should remain at a healthy, successful baseline. | Need to implement quarterly or 2x/year IA checks on VA.gov — is this something we can/should do as platform? | 
| # automated content & IA errors flagged for users | Hypothesis: As we implement better self-service and automated tests for content and/or IA, automated errors identified for teams building on VA.gov will increase. | Currently 0! At least we would know what we're starting with. |
| # manual content & IA errors flagged for users | Hypothesis: As we implement better self-service and automated tests for content and/or IA, manual errors (ex. during Peggy's content review) flagged for users will decrease. | Similar to first idea — measuring manual errors or changes would likely be very manual. |
| # broken Slack links to documentation | Assumption: People use Slackbot links to find documentation. | We know very little about Slackbot documentation links, so we'd have to start there.|
| # broken links within documentation itself | Hypothesis: If crosslinking within documentation is implemented correctly and effectively, self-service will improve. | We can measure this! (Maybe a combo of "links to outside of repo" and "broken links in repo"?) Does it make sense to implement this measurement for `va.gov-team` though when we are about to embark on a larger documentation site MVP? | 
| # clicks to find documentation | Hypothesis: If we put important documentation in places that are easy to find, people will have to click less to find it. | Seems very useful to know but how would we implement this? | 
| Time spent searching for documentation | Hypothesis: If we put important documentaion in places that are easy to find, people will spend less time searching for it. | Seems very useful to know but how would we implement this? | 
| User time spent on documentation site | Assumption (is this valid??): The more useful the documentation site is, the more time people will spend on it. | Could this be implemented fairly easily using Google Analytics? Can we use GA in GitHub? | 
