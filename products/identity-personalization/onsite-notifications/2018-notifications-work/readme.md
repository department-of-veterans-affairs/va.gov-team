# Notifications Product Outline
- GitHub Label: dragons
- Slack channel: 
- **Analytics**: [GovDelivery Emails](https://analytics.google.com/analytics/web/?authuser=0#/report/content-event-overview/a50123418w107014820p177246755) *(Need to verify)*
- VA.gov link: n/a
- Demo Invision: [MVP](https://adhoc.invisionapp.com/share/6ZSAXS0A8XM#/screens)

---

### Table of Contents

# Executive Summary 
- [User Problem Statement](#user-problem-statement)
- [Solution Goals](#solution-goals)
- [Assumptions](#assumptions)
- [Questions](#questions)
- [Requirements and Constraints](#requirements-and-constraints)
- [Considerations](#considerations)
- [Competitive Analysis](#competitive-analysis)
- [Discovery Takeaways](#discovery-takeaways)
- [Solution Approach](#solution-approach)
- [Value Propositions](#value-propositions)
- [OKRs](#okrs)

# Implementation Information
- [Status](#status)
- [Solution Narrative](#solution-narrative)
- [Team](#team)
- [Resources and Documentation](#resources-and-documentation)

---

# Executive Summary

## User Problem Statement

VA.gov users have no way of understanding what's happening with their various VA applications, appointment, or benefits/services when they're not on the website itself. This may contribute to the perception of opacity Veterans have about VA, since an application status may change, an attempted address update might not be successful, there might be a new document or online tool available, and the Veteran won't know about any of that unless they receive a letter in the mail about it from VA, or they happen to log onto the website and poke around. Even when they're on the website, there isn't a consolidated place where they can see what's changed about them, they'd have to look into each product separately to get a sense of whether there are any updates or movement or action needed on their part.

## Solution Goals
  * Start with a concise use-case
  * Build MVP first to inform product direction

### User Goals

We will confirm user goals in user testing. 

### Business Goals
* To meet users where they are by creating a notification system that reaches out from VA.gov.

* To have a way to more directly prompt users to action without requiring they be signed into VA.gov to receive that message (eg. an application is about to expire and needs to be completed).

* To have a way to more directly keep users up-to-date on the status of applications, claims and appeals, prescriptions, messages, and appointments.

* [Future] To have a way to more directly suggest features and products of interest to users.

## Assumptions

We are assuming that:

* Not having notifications has resulted in a less than ideal user experience.
* Notifications — like confirmation messages, reminders, and suggestions — will be seen helpful and not as noise.
* People want to receive notifications over text or email.
* Notifications will prevent people from logging in unprompted to check the status of claim or appeal.
* People need to manage their notification preferences via a settings section in their profile.
* Separate, discrete product from the profile / dashboard / action center work
* Helpful to start with the work Lihan and VIC team has built with HCA

## Questions

* What is the content of the notification?
* How is data stored, processed?
* What needs to happen to get us on the path towards MVP?
* How / when does this fit in with the Vets.gov product roadmap?
  * What other teams, individuals, do we need to collaborate with?
* What level, type of personalization do users want?
* What about the "not-logged-in" users
  * Are the types of notifications for these users different?
    
* Do we have product scope for HCA use case?
  * User stories
  * Expected outcome

## Requirements and Constraints
* Can currently send emails, but text is future possibility

## Considerations
* Many types of user interactions possible:
  1. Mark as read
  2. Click “x” and it goes away
  3. Flag “yes” or “no”
* Areas of exploration
  1. “Log in as guest”
  2. power user notifications -> daily digest
  3. facebook has a place where you can come back and look at notifications

## Competitive Analysis
* Walgreens, CVS use text updates for Rx

## Discovery Takeaways


<h4>Design Discovery</h4>

* We compiled a [complete list of vets.gov products that may require notifications](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Personalization/Notifications/Products%20that%20may%20require%20notifications.md).
* We also created interaction maps that outline notification opportunities for the following flows:
  * [Healthcare Application Interaction Map](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Personalization/Notifications/Healthcare%20Application%20—%20Interaction%20Map.png)
  * [Education Application Interaction Map](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Personalization/Notifications/Education%20Application%20—%20Interaction%20Map.png)
  * [Disability Application Interaction Map](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Personalization/Notifications/Disability%20Application%20—%20Interaction%20Map.png)
  * [Claims & Appeals Interaction Map](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Personalization/Notifications/Claims%20%26%20Appeals%20—%20Interaction%20Map.png)
  * [Prescription & Messaging Interaction Map](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Personalization/Notifications/Prescriptions%20%26%20Messaging%20—%20Interaction%20Map.png)
* In terms of privacy, we can not send anything with PHI/PII over email or text. For more on what we can and can not send, reference this [privacy fact sheet](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Personalization/Notifications/Privacy%20Fact%20Sheet.pdf).
* We research and outlined [notification best practices](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Personalization/Notifications/Research%20—%20Notification%20best%20practices.md).


## Solution Approach

* Design discovery
* Technical discovery
* MVP — functional prototype (actual code; not InVision)

### MVP Solution

<h4>HCA MVP</h4>

* [Prototype](https://adhoc.invisionapp.com/share/QYFXJH6RVNE#/screens/279927642_01-Home)
* [Research Synthesis](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Personalization/Notifications/HCA%20MVP/Research/March2018_Notes/Notifications%20synthesis.md)
* [Discovery Brief](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Personalization/Notifications/HCA%20MVP/Research/MVP%20Discovery%20Brief.md)
* [Technical considerations](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Personalization/Notifications/HCA%20MVP/%5BHCA%20MVP%5D%20Design%20and%20technical%20considerations.md)
* [Conversation Guide](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Personalization/Notifications/HCA%20MVP/Research/Conversation%20Guide.md)
* [Research Planning Guide](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Personalization/Notifications/HCA%20MVP/Research/MVP%20Discovery%20Brief.md)




We will be using the healthcare application to create an MVP for external notifications across Vets.gov. We will explore the following flow for the MVP:

* Users submit their application.
* We show a "We've submitted your application" confirmation message.
* We send a "The VA has recceived your application" email (plain text).

This flow applies to the following use cases/user states:

* Users can be logged in or logged out.
* The VA database is up and able to accept applications.
* The VA database is down but comes back up within 21 days. In this case, we will continue to try to submit an application until it is accepted.
* There are no validation errors returned by the VA database.

Note: Users will perceive no difference on the frontend if the VA systems are up or down. The only thing they might notice is if they do not receive a "we've received your application" confirmation email right away. However, this shouldn't be an issues since there isn't a precedent for confirmation emails on vets.gov, and since plenty of sites accept forms without sending confirmation emails.

### Optimal End-Product Vision

The optimal end product is an established and effective notification system across vets.gov that:
* Allows users to receive meaningful notices and updates about the status of their applications, claims & appeals, prescriptions, and messages.
* Informs users of benefits for which they may be eligible.
* Lets us meaningfully reach out to users about new features and other updates.
* Allows developers and other vets.gov team members to create and manage notifications easily and effectively.

## Value Propositions
[Prioritization spreadsheet](...)

#### User Value

#### Business Value
* VA spends $200 million sending paper notifications

## OKRs

<h4>Background</h4>

* There is no way to keep veterans informed about the status of their applications and benefits that are tracked on vets.gov without requirng that they log in to vets.gov.
* Vets.gov does not accept the submission of applications if VA databases are down, which might mean people fill out an application only to not be able to submit it.
* Calls to VA call centers about claims status account for a large percentage of their calls, even though this information is trackable online. (source?)
* Veterans request greater transparency into where their applications are in processing.
* Veterans want to know what they are eligible for with regards to benefits, and they want us (the VA) to inform them of that.

<h4>Objectives</h4>

* Establish foundation for vets.gov external notification system.

<h4>Key Results</h4>

* Vets.gov allows healthcare applications to be submitted synchronously or asynchronously. For applications with no validation errors, 100% of applications are received, resulting in zero failed submissions.
* Vets.gov successfully generates 100% of confirmation emails (via a third-party tool) when the healthcare application is submitted and received.
* 98% of confirmation emails are received and not marked as SPAM (98% is cited as [GovDelivery's success rate](https://insights.govdelivery.com/Communications/CommunicationsCloud/Getting_Started/Deliverability). 

Note: In this first phase, we are not evaluating success based on user metrics, but we will do this in the future.


---

# Implementation Info

## Status
- 6/19/2018 Emails are live, being sent for the HCA with asynchronous submissions


## Technical Documentation
- GovDelivery Gem

   We are using [GovDelivery's gem](https://github.com/govdelivery/govdelivery-tms-ruby) for interacting with the GovDelivery Targeted Messaging API.  This gem allows us to configure `:govdelivery_tms` as our ActionMailer delivery method.  This gem also allows us to hit GovDelivery's API and retrieve data about emails that we sent.
   
- From addresses.

   In production, our 'from' address is 'va-notifications@public.govdelivery.com'.  In non-production environments it is 'stage.va-notifications@public.govdelivery.com'. These addresses are tied to GovDelivery's 'stage' and 'production' environments respectively.

- Google Analytics Implementation/Access

   We are tracking email activity via Google Analytics.  We use GA events to track email generation, failures and opens.  Email clicks (i.e. when the user clicks on a link inside the email) are tracked via a GA campaign. A [view for GovDelivery email analytics](https://analytics.google.com/analytics/web/?authuser=0#/report/content-event-overview/a50123418w107014820p177246755) was created. 
   
   Regarding the events for the HCA submission failure email:
   - all have an Event Label of 'hca--submission-failed'
   - all have an Event Category of 'email'
   - all have an Event Action.  The Action will be one of the following:
     - 'completed' - A 'completed' Event will be posted for every email that was generated.  Look at these events for a count of how many emails were generated for a time period.
     - 'failed' - A 'failed' Event will be posted for every email that GovDelivery marked as 'failed' to reach it's destination.
     - 'open' - An 'open' event will be posted when the end user opens the email.
     There is an `HCA::SubmissionFailureEmailAnalyticsJob` job that runs nightly. It gathers data from GovDelivery about the previous days emails and posts 'completed' and 'failed' events to GA at that time.  'open' events post at the time the end user opens the email.

- Google Data Studio Implementation/Access

   Using Google Analytics as the source, Google Data Studio can display our data. A Data Studio dashboard displaying email events can be found [here](https://datastudio.google.com/open/1443raaDI-ZTdPiQnytAgdpZ-Fg-4CNuK)

## Solution Narrative
- After discussion with Mark Shaughnessy and the HCA stakeholder, it was discovered that the Enrollment System already sends out emails upon successful receipt of Healthcare applications. So for this initial use case, Vets.gov will only be sending out emails to users in the case that their application is not properly received by the Enrollment System.

## Team

- VA Digital Strategist(s) `*`: Matt Self matthew.self2@va.gov
- Product Manager `*`: Ryan Luu ryan.luu@adhocteam.us
- Design Lead: Samara Strauss samara.strauss@va.gov
- Eng Lead: Lihan Li lihan@adhocteam.us
- Production Testing Partner(s): Richard Fong (Granicus) Richard.Fong@granicus.com
- Content Writer(s): Peggy Gannon peggy@thesocompany.com
- Front-end Engineer(s): Rian Fowler rian.fowler@adhocteam.us 
- Back-end Engineer(s): Johnny Holton johnny@oddball.io
- Analytics: Nedie Recel nedie.recel@empiricalpath.com 

`*` = approval required for launch
