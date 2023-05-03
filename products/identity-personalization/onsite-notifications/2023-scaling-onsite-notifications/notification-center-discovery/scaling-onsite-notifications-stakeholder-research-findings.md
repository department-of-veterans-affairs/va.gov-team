# My VA 2023 Scaling On-site Notifications - Stakeholder Research Findings 

**Office of the CTO - Digital Experience (OCTO-DE), Authenticated Experience, My VA**

Last updated: 5/2/2023

[Angela Agosto - email](angela.agosto@adhocteam.us)

**Jump to:**

[Methodology](#methodology)

[Key findings](#key-findings)

[Recommendations](#recommendations)

[Further research needed](#further-research-needed)

<br>

## Research Goals
Since Veterans can apply for and manage their benefits on VA.gov any time after getting out of the military, this work impacts the [Veteran journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf) from Starting Up and beyond.

Our goals for this stakeholder research study were:

* Gather insights about action items from product owners and identify trends.
* Determine if there's a clear consensus on the vision for notifications on VA.gov.
* Identify any challenges or things to consider that we were not already aware of on the Authenticated Experience team.

## Research Questions
* Have other teams talked to users about how they expect to see notifications or action items represented on VA.gov?
* What relevant studies or data should we reference outside of the authenticated experience team as part of this discovery work?
* What are OCTO stakeholders expectations around how we elevate notifications on VA.gov? How strong are their opinions about the outcome of this work?
* What could make or reak Veteran trust as we scale this feature?
* Are there any important factors to consider that we haven't already addressed in this study?

## Methodology 

We conducted stakeholder interviews via Zoom with OCTO product owners:

* Chris Johnston - Portfolio lead
* Rachel Han, Jen Ecker, Ryan Thurlwell, Matt Hall - Mobile app leads
* Lauren Alexanderson, Kay Lawyer, Kristen McConnell - Health leads
* Dave Conlon - Sitewide lead
* Matt Self - Benefits lead
* Mikki Northuis - IA/Nav lead
* Chante Lantos-Swett - Account experience and customer support lead
* Martha Wilkes - Accessibility lead
* Matt Dingee - Design lead
* Ray Wang - Platform lead

## Key Findings

1. **OCTO product owners have trust in the Authenticated Experience team to scale this feature and had only very high-level thoughts about how notifications might appear on VA.gov.**

2. **Product owners for VFS teams have already thought about what types of notifications are most important to surface.**

3. **We heard some common themes about challenges to consider with scaling notifications, like giving users some control so notifications don't become noise, and the need for notifications to talk to each other across any interfaces where they appear.**

4. **A notification center on VA.gov would likely need to support messages as well as notifications in the future.**

5. **Finding**


## Details of Findings 

**Finding 1**

**OCTO product owners have trust in the Authenticated Experience team to scale this feature and had only very high-level thoughts about how notifications might appear on VA.gov.** We were somewhat surprised by the lack of strong opinions about how notifications should look and function on VA.gov. We did get some high-level feedback to consider, but overall, OCTO product owners seem to trust the Authenticated Experience team to determine the best approach.

### Supporting quotes and notes

> _"Just in terms of making our experience feel like all the other digital experience that people are familiar with like Netflix or banking; they want generally that same level of proactive interactivity, is something we hear [from Veterans]." - Matt Self_

> _"I definitely want to actively communicate that I'm not a designer, but just conceptually, I'm going through the exercise that our Veterans do of comparng our digital products to other similar experiences, it would be I think cool to have some kind of hierarchy or criteria for determining what kinds of information is most important to Veterans. And then if something meets that highest criteria, some way to surface it statically [like a banner on my banking website]. - Matt Self_

> _"I imagine that there needs to be someplace where a user can see a list of all of the notifications that they've received; whether it's a recent text message or email or onsite notifications and they dismissed it too quickly and they want to see what it was or I'm sure there's a million use cases that we haven't thought of. I can imagine there's some sort of notification hub that lives somewhere on the site. I don't know where that is or what it's a part of. It seems like there's a use case for that." - Mikki Northuis


**Finding 2**

**Product owners for VFS teams have already thought about what types of notifications are most important to surface.** We could likely start building a backlog of notification types to support based on what we heard from OCTO product owners in this research study. Most of these notification types are not currently feasible but will be within the next 6 months to 2 years.

### Supporting quotes and notes

> _"We hear pretty commonly that there should be acknowledgement of application submissions or failures, with actionable steps to take or what to expect next. I get that when I submit anything on any website." - Matt Self_

> _"If we had more informative, action-oriented claim statuses, like hey you indicated you had a private medical record to submit, we can't do anything with your claim until we get that document. That to my world's perspective is a MAJOR priority." - Matt Self_

> _"Information about appts of any type [should be notifications]: appeals, CMP exams, hearings, anything about where a Veteran is expected to participate actively in a thing in service of moving a claim or decision review forward." - Matt Self_

> _"In the VAMC product, there are 140 VA health care systems which encompasses over 2,000 facilities. The VAMC sites are maintained by public officers in the field. Veterans have the ability to subscribe the government delivery notifications. So if a facility is closed, PAOs (Public affair officers) have the ability to essentially check a box that says, send an email message via gov delivery to all of those Veterans who have subscribed for VA gov delivery updates. ...The hypothesis is that Veterans would want instead of or in addition to email updates, to be able to view this in the authenticated experience or receive an email that funnels them into the authenticated experience. But because it's gov delivery, the management and subscription is all done through the gov delivery interface." - Dave Conlon_

* Matt Dingee has been leading a team who are templatizing form components and digitizing them for VA.gov and they have an email notification through VA Notify that says we received your submission. It might be worth having a record of that on VA.gov.

* 

**Finding 3**

**We heard some common themes about challenges to consider with scaling notifications, like giving users some control so notifications don't become noise, and the need for notifications to talk to each other across any interfaces where they appear.** Details

### Supporting quotes and notes

> "_I think heriarchy would be important because you wouldn't want to be overwhelming people with noise. I've seen websites do that too." - Matt Self_

> "_Consistency is probably the biggest thing. And transparency. Like hey if we don't know an answer to something, tell people that. If the claim is moving back and forth, that's a place where the VA has reduced their transparency. That doesn't look good, but we've tried it both ways. There's more oppostion to the less transparent model than the bouncing around model. There's a general lack of trust that the VA is working in your best interest [or working quickly at all]." - Matt Self_

> "_

**Finding 4**

**A notification center on VA.gov would likely need to support messages as well as notifications in the future.** Details

### Supporting quotes and notes

> _"

> _"Something we hear from Veterans is 'I wish there was a way for me to see all the times I've been in contact with VA and have that information so I can reference it when I'm talking to a new person.'" - Chante Lantos-Swett_

**Finding 5**

**Finding** Details

### Supporting quotes and notes


## Additional Insights

* Chante informed us that the functionality that was poorly implemented with Ask VA will be implemented on VA.gov. This is currently a form where users can submit questions to VA and is integrated with Microsoft Dynamics CRM.
* Luciana manages virtual agent (Chat bot) / main VA 411 number (calling into VA for support) and Chante said we may want to talk to them about any upcoming needs for notifications.
* Mikki let us know that there will be some changes to the navigation because it's so focused around benefits which hasn't scaled well and there's no logical place for some tools. There may be a new space for those tools. She also said three initiatives will strongly impact the navigation of the site over the next 6 months to 2 years: sitewide crew changes to the unauth content (healthcare and disability content(; MHV functionality moving over to VA.gov; and the authenticated experience work that Liz has started research on. These are iniatives that we will have to consider and teams we'll need to work closely with as we propose solutons for notifications.


## Recommendations

* 


## Next Steps




## Further research needed



## Appendix

[Research plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/onsite-notifications/2023-scaling-onsite-notifications/notification-center-discovery/scaling-onsite-notifications-stakeholder-research-plan.md)

[Conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/onsite-notifications/2023-scaling-onsite-notifications/notification-center-discovery/scaling-onsite-notifications-stakeholder-convo-guide.md)

[Observation notes](https://docs.google.com/spreadsheets/d/1Djq6XrRmygzS0ab8ZJdWKE-gznf_lE2QZOdy9vaGfII/edit#gid=0)
