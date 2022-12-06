<h2>5/17/18 Notes</h2>

* [Old claim status mockups](https://github.com/department-of-veterans-affairs/vets.gov-team/tree/master/Products/Global/Claim%20Status/track-claim-status/design-documents/UI/mockups)

Statuses

* Claim received
* Initial review 
  * What does this mean?
* Evidence gathering and review
  * Meatiest part of the process
  * Requests are where we ask people for information.They can define the "type" in a pre-populated dropdown of different kinds of documents.
  * At any point, people can submit additional evidence through the Files tab. This will show up in the list as "You submitted (correspondence, photographs, etc)." Participants can choose a description of what they are submitting from a pre-populated list.
* Preparation for decision notification
* Complete

Use Cases

* User action
  * User submits an application
  * User responds to a request (evidence gathering) or adds additional evidence (any phase)
* VA action
  * Application is received
  * Claim moves to a new phase, including a decision
  * There is a new request for information

**Questions**

1. What is each phase?
  * Claim received — Claim has been received by the VA.
  * Initial review — Claim has been assigned a reviewer, and they are determining whether additional evidence is needed.
  * Evidence gathering and review — Additional evidence is requested and reviewed as needed. A decision is made and approved.
  * Preparation for decision notification — A packet outlining the decision is assembled.
  * Complete — The packet has been mailed, the status is updated on eBenefits, and someone is able to receive benefits.
2. Are "requests" the only "action required" use case, or are there others? Can they happen in any phase, or just evidence gathering?
  * Requests are the only "action required" state.
  * This only happens in phase 3.
3. Are there any other instances of updates on the VA side besides requests and when a claim moves to a new phase?
  * Yes — receiving evidence, reviewing something a user submitted, and closing a request.
    * **Confirm** this through technical discovery.
4. "You or others submitted X. We'll let you know when we review it." Do they actually let people know? How? Through the interface?
  * Yes, though we should confirm through technical discovery.
5. From a technical perspective, is a new "update" only when a claim moves to a new phase, or when there is a change within a phase?
  * Any change within a phase.

<h2>What should we do for MVP</h2>

<h4>Thoughts on using claims and appeals</h4>

*Questions*

1. Would this bring in stakeholder complexity? Would we need to consult any larger VA stakeholders if we added an "Updated" state/flag on the new dashboard? What about if we sent an email (eg. You have an update on Vets.gov)?

2. After there is an update to the status of a claim, how long does it take for that to show in Vets.gov? What triggers that UI change?

*What an MVP might look like*

Most basic MVP

1. Make it clear on the dashboard that there is an update to a claim.
  - Would not require changes to any existing copy. Would pull in data we use to populate existing Track Your Claims & Appeals page.
2. No email.
3. No separate notification in-app.

MVP level 2

1. Make it clear on the dashboard that there is an update to a claim.
  - Would not require changes to any existing copy. Would pull in data we use to populate existing Track Your Claims & Appeals page.
2. No email.
3. Add a separate notification in-app via a notification center.

MVP level 3

1. Make it clear on the dashboard that there is an update to a claim.
  - Would not require changes to any existing copy. Would pull in data we use to populate existing Track Your Claims & Appeals page.
2. When a claim is updated, email a user with something very basic like "You have an update on Vets.gov." Link them into the application from here.
3. Add a separate notification in-app via a notification center.

<h4>Thoughts on using "application received" notification</h4>

*Questions*

1. Is this even technically possible? Do we log what people submit?
2. Where would a list of submitted/received applications live? Does this list need to persist? For how long?
3. Is this actually *more* complex because we don't have a place where we list all received applications?
4. Do users even want to track their submitted applications?
5. Might it be helpful to have a place to have a place to track submitted applications for a future where we can more robustly update the status of non-disability applications online (eg. show when a decision has been made about a healthcare application)?

*What an MVP might look like*

Most basic MVP

1. When user logs into Vets.gov, they see they have a notification.
2. Clicking on this notification shows them "The VA receieved your application on X."

MVP level 2

1. When a user submits an application, they receive a "we've received your application" email.
2. In this email, there is a link that takes them to their dashboard.
3. On the dashboard or in a notification center, we show a notification that says "The VA receieved your application on X."

MVP level 3

1. When user logs into Vets.gov, they see they have a notification.
2. Clicking on this notification shows them "The VA receieved your application on X."
3. This notification is clickable and takes people to a page that tracks their received applications.

MVP level 4

1. When a user submits an application, they receive a "we've received your application" email.
2. In this email, there is a link that takes them to their dashboard.
3. On the dashboard or in a notification center, we show a notification that says "The VA receieved your application on X."
4. This notification is clickable and takes people to a page that tracks their received applications.
