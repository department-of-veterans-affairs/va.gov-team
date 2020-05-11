<h2>What needs to be designed</h2>

Consolidated from [scope document](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Personalization/Notifications/%5BHCA%20MVP%5D%20Scope.md).

<h3>In-app</h3>

*Successful Submission | Validation Errors | Systems are Down*

* [Copy] In-app notification that lets users know we have submitted their application — something like "We've submitted your application and will let you know when it's received."
  * Will use existing design patterns for the visual design.
  
<h3>Emails</h3>

Still up for debate: Whether we will launch with an HTML email or plain text only. Should use testing to explore.

*Successful Submission, either synchronous or asynchronous*

* [Copy] Copy for an email that lets users know their application was received.
* [Copy] Any “standard copy” that would appear in every email (eg. “to update your email preferences, please sign into vets.gov.”).
* [Potential Design] Full visual design for an email notification template **if** we decide this is part of the MVP. This includes.

<h4>Logged in users</h4>

*Unsuccessful Submission: Validation error | Application submitted by a logged in user*

* [Copy] Copy for an email that let's users know that there was an error in the application which needs to be corrected so the appplication can be resubmitted. Includes CTA to fix error.
* Standard copy and any visual treatments (or lack thereof) applied to the successful submission would likely be applied here as well.

*Unsuccessful Submission: Systems down for 21 days | Application submitted by a logged in user*

* [Copy] Copy for an email that let's users know the application was not received and it needs to be resubmitted. Includes CTA.
* Standard copy and any visual treatments (or lack thereof) applied to the successful submission would likely be applied here as well.

<h4>Logged out users</h4>

*Unsuccessful Submission: Validation error | Application submitted by a logged out user*

* [Copy] Copy for an email that let's users know there was an error, and we were unable to submit their form.
  * No CTA since we do not have their data saved.
* Standard copy and any visual treatments (or lack thereof) applied to the successful submission would likely be applied here as well.

*Unsuccessful Submission: Systems down for 21 days | Application submitted by a logged out user*

* [Copy] Copy for an email that let's users know there was an error, and we were unable to submit their form.
  * No CTA since we do not have their data saved.
* Standard copy and any visual treatments (or lack thereof) applied to the successful submission would likely be applied here as well.

<h2>Questions</h2>

<h4>Technical questions</h4>

* What third-party tool should we use to send emails?
  * Look into govdelivery.
* Do we have a sense of how often systems go down so that we can’t submit applications?
* How long does it take for us to realize that the VA systems are down and we cannot submit the application right away?
  * Right away. We return an error immediately on vets.gov if we can't submit the application. Sometimes, the team that manages the HCA will let us know things are down.
* How long do we attempt to resubmit the application before we give up? Do we give up? Is there a use case where the user’s submission fails entirely?
  * Yes, applications can fail entirely because they're not validating because VA servers have different validation standards. Our validation should match the VA's *unless* they update theirs and we don't know.
  * We stop attempting to submit after 21 days.
* If we do need people to resubmit the application, how can we ensure that we are sending this request to people when the VA systems are back up?
* If a logged out user submits an application that eventually fails, do we have any of their data saved? Do they have to start their application from scratch?
  * Logged out info is not stored except locally for the session. Barring a different solution, they would have to start the application over.
* If users need to fix a validation error in their application, do we show that field with a red error state (like we show errors that validate immediately when they fill out the form)?


<h4>Design questions</h4>

* If we need people to resubmit the application, how can we request this without losing trust? Will this make people feel worse about the VA system?
* How can we prevent someone from having to submit an application from scratch if it fails and they are logged out when they submit?
* What is the existing error copy in the app when HCA submission fails?
* When there are system or validation errors, should we tell the user that we've submitted the application and only get back in touch with them when we are sure of the error?
* If systems are down for 21 days, aren't users going to be really mad that they didn't know their application wasn't being processed for 3 weeks?
* Should we have a designed email template or go with plain text at first?
