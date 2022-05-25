---
name: Staging Review
about: Request a Platform staging review
title: Staging Review [Team Name - Feature Name]
labels: collab-cycle-review, collaboration-cycle, governance-team, staging-review
assignees: ''

---
# NOTE
This template is being deprecated. If your kickoff meeting took place after May 25, 2022, you should be following the guidance specified in the Collaboration Cycle Rquest per the [May 25, 2022 change history post](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/Change-history.1846870032.html) instead. If you are unsure if this applies to you, please reach out to the Governance Team on the vfs-platform-support Slack channel.

# Steps to complete Staging Review

## Before meeting

**VFS Product Manager**
- [ ]   Create this issue and schedule meeting via Calendly (you are responsible for adding the VFS attendees).
- [ ]   Notify the Collaboration Cycle team of this ticket and scheduled date/time in #vfs-platform-support ([see Slack Workflow (User guide](https://depo-platform-documentation.scrollhelp.site/support/Getting-help-from-the-Platform-in-Slack.1439138197.html)).
- [ ]  Add artifacts listed below to the ticket at least 4 days before scheduled meeting.
- [ ]  Ensure you've provided staging access information for the tool or feature. (Don't put staging credentials in your va.gov-team ticket; store or reference them in a .md file in the va.gov-team-sensitive repository.)
- [ ]  If this product contains any [experimental design](https://design.va.gov/experimental-design/), add the experimental-design label and schedule a meeting with DSC to present the research findings.

 **Platform**
 
- [ ] Add the Platform reviewers to scheduled meeting
- [ ] Add Zoom information to scheduled meeting
- [ ] Create feedback tickets and link them to the Staging Review epic 

## After meeting

**VFS** 
- [ ] Respond to Platform feedback tickets.
- [ ] Close individual feedback tickets when the issue has been resolved or validated by your Product Owner. If a team has additional questions or needs Platform help validating the issue, please comment in the ticket.
- [ ] Update Staging Review ticket with the product’s launch date after it has gone live.
- [ ] Close Staging Review ticket when the review is complete and the product has launched.
- [ ] Communicate any and all known Accessibility issues that are not addressed prior to launch to the VA 508 Office via [Audit Request](https://depo-platform-documentation.scrollhelp.site/developer-docs/Instructions-for-VA-508-Office-document-review.1857913061.html#HowtorequestsupportfromtheVA508Office-AuditRequest). 

**Platform**

- [ ] [Update Platform Collaboration Point Tracker](https://docs.google.com/spreadsheets/d/1OgPyEvUlNF6EnaYMFAXJkV6FKOvZnlPnbOQ2fAJ7W7A/edit#gid=266151061).



## Artifacts

Provide links or documents for the following: 

- [ ] Staging URL and staging test-user information

<!-- 
Do not put staging credentials in your va.gov-team ticket; store or reference them in a .md file in the va.gov-team-sensitive repository. 

Use this accessible staging account template to do so:
https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-accessible-example.md
-->

- [ ] Product outline 
 
 <!--
[Template](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/product-outline-template.md)
--> 

- [ ] Release plan with the "Planning" sections completed 

<!-- 
Release plan template
https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/release-plan-template.md
--> 

### Content artifacts 

- [ ] Your product’s content source of truth
- [ ] Github ticket for any relevant static content page and entry point updates for tool or feature (if applicable)

### QA artifacts

[Learn more about QA test plans](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/quality-assurance/qa-artifacts.md#test-plan)

- [ ] Product test cases/test plan in TestRail with test execution logs 
- [ ] [Coverage for References](https://dsvavsp.testrail.io/index.php?/reports/view/12) 
- [ ] [Summary(Defects) reports in TestRail](https://dsvavsp.testrail.io/index.php?/reports/view/14) 

### Accessibility artifacts 

- [ ] [Completed TestRail Platform accessibility test plan](https://dsvavsp.testrail.io/index.php?/suites/view/14&group_by=cases:section_id&group_order=asc). **(Preferred)** OR, 

- [ ] List of known issues

     •	Issue 1
     •	Issue 2
     •	Issue 3


## Scheduling

- Open the [Calendly staging review calendar](https://calendly.com/collaboration-cycle/staging-review)
- Select a date and time and click “Confirm”
- Add your name and email
- Click "Add Guests" and enter the VFS meeting attendees email addresses. 
- Click Schedule Event
<!-- 
Please note: You are responsible for adding the VFS attendees. If you have more than 10 VFS attendees, you can forward the invite after it is scheduled. Platform will add the Platform reviewers. You will receive an email and the meeting will be automatically added to your calendar
-->


<!-- 
Please note:
- Staging reviews are scheduled on Thursdays.
- All times are shown in ET. 
- Available time slots are indicated with [STAGING BLOCK]. 
- When you reserve a time slot, the reserved meeting will show up alongside the [STAGING BLOCK]. 
- Please select a time slot at least 4 business days from request date.
-->


## Additional information

Please refer to [Platform Collaboration Cycle](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/index.html) or the [Staging Review Touchpoint](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/Staging-review.1810137181.html) on Platform website for more information about the Collaboration Cycle.

 FYI: @shiragoodman , @chaseakirby
