Zoom recording: https://zoom.us/rec/share/vcl8DIHxy2dJRK_K2ljkAI57OLXlT6a823Ib-6cMmEb652CyKitIy300f8RRDueJ 

### Goal of meeting

*   VSA-facilities team is prepared to update FE templates starting January 29
*   We’ve coordinated pair programming for the next two weeks, hopefully starting today. 
*   We’re aligned on how we work together


### Process decisions

**Issues in github**

If CMS team comes across an issue, we wil create it in va.gov-team and tag vsa-facilities as a label

**PRs**

Assign drupal related FE PRs on vets-website to Ethan Teague, for now.

**Slack** 

coordination in [#vsa-facilities](https://dsva.slack.com/channels/vsa-facilities)


### Technical overview


#### Decoupled architecture

metalsmith/graphql/drupal

*   Liquid templates
*   Graphql
*   Content api

### Issues for January, so far

*   Event bugs [https://va-gov.atlassian.net/browse/VAGOV-6401](https://va-gov.atlassian.net/browse/VAGOV-6401) 
*   Story [https://va-gov.atlassian.net/browse/VAGOV-6410](https://va-gov.atlassian.net/browse/VAGOV-6410) 


### Next steps

* Gibran and Ethan to coordinate more work on the two above tickets.
* Get Gibran accounts on cms prod that allows looking at /graphql/explorer 
  * Michelle or Gibran should write an email to VACMSSupport@va.gov requesting access with the role "Content API" and 
* Gibran needs a local drupal
    * follow steps on https://github.com/department-of-veterans-affairs/va.gov-cms and use [#cms-support](https://dsva.slack.com/channels/cms-support) for assistance
* Set up meeting for first week of February 
  * Design a coordination process within github issues for VAMC system backlog, between VAMC-upgrade team, CMS team, and VSA-facilities
* Get Gibran access to Zeplin templates (see slack thread at https://dsva.slack.com/archives/C0FQSS30V/p1579108854130000)
* Document learnings from this onboarding in (Kevin / CMS team)

