# Postmortem for VAMC Breadcrumbs

Date: June 26, 2020

Authors: 
- Michelle Middaugh, Ad Hoc

Status: Resolving

## What happened?
When the "Home" breadcrumb was suppressed for the work in [#10038](https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/issues/department-of-veterans-affairs/va.gov-team/10038), it was also inadvertently removed from VA.gov pages outside the VAMC system.  

## Background
In addition to the VAMC systems, CMS (Drupal) also currently supports
- Benefits hubs (eg www.va.gov/health-care and 10 other benefits hubs)
- Homepage and Global UX elements such as the header, footer, and homepage alerts
- Benefits outreach hub 

The Facilities team is relatively new to the VAMC system product and still building knowledge on liquid templates. 

## Detection
At 2:38 PM MT on June 23, 2020, Mikki Northuis posted a message in vsa-facilities that the "Home" component of the breadcrumb appeared to be missing from the entire site.

## Impact
During the time the code was deployed, Veterans visiting pages powered by Drupal would not be able to use the "Home" breadcrumb for navigation.

## Root Causes
Changes made to suppress the "Home" breadcrumb for VAMC system pages were inadvertently applied to Drupal liquid templates used on pages outside the VAMC system.

## Resolution
The code was reverted at 8:59 AM MT on June 24, 2020. A fix was deployed to Staging for through testing on June 29, 2020. 

## Documentation links
- [Slack Thread](https://dsva.slack.com/archives/C0FQSS30V/p1592944713085900)
- [Slack Thread](https://dsva.slack.com/archives/C0FQSS30V/p1592946876091800)
- [Original issue #10038](https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/issues/department-of-veterans-affairs/va.gov-team/10038)
- [Pull request #13195](https://github.com/department-of-veterans-affairs/vets-website/pull/13195)
- [Revert Pull Request #13241](https://github.com/department-of-veterans-affairs/vets-website/pull/13241)


## Action Items

| Description                    | Type    | Owner        | Issue # |
| ------------------------------ | ------- | ------------ | ------- |
| Build front-end engineer foundational knowledge of Drupal |  Training | Facilities | N/A |
| Improve end to end testing |  Process | Facilities | N/A |
| Strengthen front end acceptance criteria |  Process | Michelle | [New front end issue template](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/.github/ISSUE_TEMPLATE/front-end-issue.md) |

## Lessons Learned

### What went well
- Team was immediately responsive and worked together to determine the root cause. 
- Ethan was able to succinctly identify the templates with impact outside VAMC systems, which helped to scope the fix and focus testing. 
- As a result of this work, the team learned how to map backwards from a given page to its template. 

### What went wrong
- Front-end engineers did not have foundational knowledge about liquid templates, including mapping to pages. 
- Front-end engineers are not familiar with Drupal, causing blind spots in testing and troubleshooting. 
- The impact on pages outside the VAMC system was not identified during code review. 
- It is hard to tell which pages are affected by the templates given the current structure in which all layouts are in the same directory. Based on feedback from other teams, this will be difficult to change. 

### Where we got lucky
- The team has Ethan (embedded Drupal engineer) with strong template knowledge who immediately jumped in to assist with troublehsooting. 

### Takeaways
- Even if they will not be working directly in Drupal, our team needs familiarity with the system and hierachy. 

## Timeline 
|Date                   | Time       | Description       | 
| --------- | ---------  | --------------------|
| 6/22/2020 | 9:45 AM MT | Code merged to Master |
| 6/22/2020 | | Code applied to production during afternoon deployment cycle |
| 6/23/2020 | 2:38 PM MT | Issue detected |
| 6/23/2020 | 3:20 PM MT | Meeting with Gibran Rodriguez, Michael Pelz-Sherman, Ethan Teague and Michelle Middaugh to review impact and identify affected templates |
| 6/23/2020 | 4:19 PM MT | PR submitted to revert code [#13241](https://github.com/department-of-veterans-affairs/vets-website/pull/13241) |
| 6/24/2020 | 8:52 AM MT | PR approved |
| 6/24/2020 | 8:59 AM MT | Revert code merged to main |
| 6/25/2020 | 11:15 AM MT | Fix PR sumitted for approval |
| 6/25/2020 | 3:24 PM MT | Fix PR approved by 2 team members |
| 6/26/2020| 10:25 AM MT | Fix PR approved by FE Review group |
| 6/29/2020 | 8:39 AM MT | Fix PR merged to Staging for testing | 
