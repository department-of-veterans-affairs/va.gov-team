# Postmortem for VAMC Breadcrumbs

Date: June 26, 2020

Authors: 
- Michelle Middaugh, Ad Hoc

Status: Resolved

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
The code was reverted at 8:59 AM MT on June 24, 2020. 

## Documentation links
- [Slack Thread](https://dsva.slack.com/archives/C0FQSS30V/p1592944713085900)
- [Slack Thread](https://dsva.slack.com/archives/C0FQSS30V/p1592946876091800)
- [Original issue #10038](https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/issues/department-of-veterans-affairs/va.gov-team/10038)
- [Pull request #13195] (https://github.com/department-of-veterans-affairs/vets-website/pull/13195)
- [Revert Pull Request #13241](https://github.com/department-of-veterans-affairs/vets-website/pull/13241)


## Action Items

| Description                    | Type    | Owner        | Issue # |
| ------------------------------ | ------- | ------------ | ------- |
| | | | |

## Lessons Learned

### What went well

### What went wrong

### Where we got lucky

### Takeaways

## Timeline 
|Date                   | Time       | Description       | 
| --------- | ---------  | --------------------|
| 6/22/2020 | 9:45 AM MT | Code merged to Master |
| 6/22/2020 | | Code applied to production during afternoon deployment cycle |
| 6/23/2020 | 2:38 PM MT | Issue detected |
| 6/23/2020 | 3:20 PM MT | Meeting with Gibran Rodriguez, Michael Pelz-Sherman, Ethan Teague and Michelle Middaugh to review impact and identify affected templates |
| 6/23/2020 | 4:19 PM MT | PR submitted to revert code [#13241](https://github.com/department-of-veterans-affairs/vets-website/pull/13241) |
| 6/24/2020 | 8:52 AM MT | PR approved |
| 6/24/2020 | 8:59 AM MT | Revert code merged to master |
