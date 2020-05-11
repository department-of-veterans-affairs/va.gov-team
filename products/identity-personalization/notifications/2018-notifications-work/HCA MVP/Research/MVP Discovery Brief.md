# Discovery Project Brief & Planning Template

### Project Name

Healthcare Application Notification MVP 

### Problem Statement / How Might We statements

This is part of a larger effort to incorporate external notifications across vets.gov. We already have a [project-level discovery brief](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Personalization/Notifications/Notifications%20Discovery%20Brief.md) and a [project-level product outline](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Personalization/Notifications/Product%20Outline.md).

Specifically for the HCA notification MVP, we are using this as an effort to establish baseline standards and functionality for external notifications across vets.gov. We will be designing and testing an email confirmation that lets users know their healthcare application has been received. Additionally, we are addressing asynchronous application submission as part of this effort (ie. allowing user to submit applications VA systems are down, and holding onto them and submitting them once systems are back up).

We are doing this primarily because there is no way to keep vets.gov users updated on the status of claims and appeals, to send  confirmations, or to send users suggestions outside of ves.gov. We want to create a robust system for external notifications that can be used meaningfully across vets.gov. This effort will serve as the foundation for all notifications going forward.

### What Sprint Teams Are Associated with this Discovery? 

Dragons (Personalization)

### Discovery Sprint Roles
See also: Discovery Sprint How-to about [makeup of a discovery sprint team](DiscoverySprintHowTo.md#makeup-of-a-discovery-sprint-team).

* Product Lead: Steve Kovacs and Ben Barone
* Discovery Sprint Lead: Samara Strauss
* Engineer: Frontend — Nick Sullivan and Ben Shyong
* Designer: Samara Strauss and Mel Woodard
* Researcher: Samara Strauss
* Other people from the Sprint Team:
* SME:

### Stakeholders
* VA business owner: N/A
* Stakeholders who will be involved or interviewed: N/A


## DISCOVERY PLANNING

### Project Details

[HCA MVP Flow](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Personalization/Notifications/HCA%20MVP/%5BHCA%5D%20MVP%20Flow.png)

* What do we know?
  * Vets.gov does not have any external notifications.
  * Confirmation emails have been requested in VIC 2.0 research.
  * VA call centers get a significant number of calls about peoples' claims statuses.
  * The healthcare application does not currently allow for asynchronous applications.
* What don't we know?
  * Whether people want confirmation emails for applications.
  * What other notifications may be useful to people.
  * How people prefer to receive notifications.
  * Whether this population would like notifications via text message.
  * How notifications may integrate into the profile or dashboard.
  * How users will react to receiving a plain text email confirmation.
* Are any of the above assumptions that need to be verified?
  * That people want confirmation emails for notifications.
  * Users will not mind receiving a plain text confirmation email.
* How are we going to find out answers?
  * We will be testing an MVP created with InVision that evaluates the confirmation flow for submitted healthcare applications.
  * We will also be using these sessions as an opportunity to do some additional discovery around veterans general preferences around notifications. What notifications are useful? What notifications are noise? How do they prefer to receive them? When dealing with the VA in the past, at what points would have email/text notifications been useful?
* What kinds of users are likely to benefit from solving this problem (bonus points for our personas)?
  * For the HCA MVP, any users who apply for healthcare on vets.gov.
  * In general, vets.gov users who fit into the following categories have the potential to benefit from notifications, for which this engagement sets the foundation:
    * People who apply healthcare and education benefits via vets.gov (and other benefits as applications are added).
    * People who track claims and appeals through vets.gov.
    * People who use vets.gov to track prescriptions or message their healthcare team through vets.gov.
    * VA call centers, since it is possible they will receive fewer calls if people have more insight into progress in the claims and appeals process.
* Who do we need to talk to (stakeholders, Veterans, MHV Coordinators, etc.)? (Try to get a wide variety of people to get a range of perspectives – both higher ups and people on the ground doing the work. Meet with people in person whenever possible.)
  * We do not need to talk to any stakeholder for discovery.
  * We may want to try to find someone within the VA who can get us answers on whether we can specify certain non-PII (eg. application type or discharge status) in emails.
* What secondary research should we do (google, facebook, internal documents)?
  * We've already done the following:
    * Reviewed previous discussions in GitHub on notifications.
    * Reviewed this [privacy fact sheet](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Personalization/Notifications/Privacy%20Fact%20Sheet.pdf).
    * Researched [notification best practices](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Personalization/Notifications/Research/Notification%20best%20practices.md).
    * Researched [plain text vs. HTML emails](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Personalization/Notifications/Research/Email%20research%20—%20plain%20text%20or%20HTML.md).
    * Competitive analysis on [confirmation emails](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Personalization/Notifications/Research/Competitive%20research%20—%20Confirmation%20Emails.md).
* Are there any intentional project constraints (things we're intentionally deeming out of scope)?
  * For this MVP, we are deeming some of the healthcare application submission use cases out of scope, namely:
    * When VA systems are down for 21 days or more
    * When validation errors cause the submission on an application to fail
* Are there any challenges or risks that will make this discovery sprint hard to complete (tricky politics, technology complications, etc.)?
  * One of the things we are interested in is how veterans will react to a confirmation email if it is not sent for a few hours — will they notice? Will they think it's weird they didn't get a confirmation right away? However, simulating a time lapse in user testing is challenging, and any circumstances we simulate may not allow us to accurately evaluate how people will react to this situation.


### Timeline

* Are there any hard and fast deadlines for completing the discovery work?
  * No.
* When will the following take place?
  * Discovery Prep: January 2018
  * Discovery (ideally 1-2 weeks): February 2018
  * User Research: Early March 2018
  * Complete & Readout: End of March 2018

## Upon Completion
_To be filled out by the sprint team._

* Lessons learned (about the discovery process)
* Links to key documents (discovery readout, charter, etc.)
