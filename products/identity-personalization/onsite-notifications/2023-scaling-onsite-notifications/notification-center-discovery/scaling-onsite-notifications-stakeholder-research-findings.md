# My VA 2023 Scaling On-site Notifications - Stakeholder Research Findings 

**Office of the CTO - Digital Experience (OCTO-DE), Authenticated Experience, My VA**

Last updated: 5/5/2023

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
* What immediate and long-term needs are there for VA.gov notifications for each team?
* What are OCTO stakeholders expectations around how we elevate notifications on VA.gov? How strong are their opinions about the outcome of this work?
* What could make or break Veteran trust as we scale this feature?
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

4. **A notification center on VA.gov may need to support messages as well as notifications in the future.**

5. **There will be special accessibility considerations for scaling notifications on VA.gov.**


## Details of Findings 

### Finding 1

**OCTO product owners have trust in the Authenticated Experience team to scale this feature and had only very high-level thoughts about how notifications might appear on VA.gov.** We were somewhat surprised by the lack of strong opinions about how notifications should look and function on VA.gov. We did get some high-level feedback to consider, but overall, OCTO product owners seem to trust the Authenticated Experience team to determine the best approach.

#### Supporting quotes and notes

> _"Just in terms of making our experience feel like all the other digital experience that people are familiar with like Netflix or banking; they want generally that same level of proactive interactivity, is something we hear [from Veterans]." - Matt Self_

> _"I definitely want to actively communicate that I'm not a designer, but just conceptually, I'm going through the exercise that our Veterans do of comparng our digital products to other similar experiences, and I think it'd be cool to have some kind of hierarchy or criteria for determining what kinds of information is most important to Veterans. And then if something meets that highest criteria, some way to surface it statically [like a banner on my banking website]. - Matt Self_

> _"I imagine that there needs to be someplace where a user can see a list of all of the notifications that they've received; whether it's a recent text message or email or onsite notification and they dismissed it too quickly and they want to see what it was or I'm sure there's a million use cases that we haven't thought of. I can imagine there's some sort of notification hub that lives somewhere on the site. I don't know where that is or what it's a part of. It seems like there's a use case for that." - Mikki Northuis_

> _"I'm never really concerned if there are designers who are trying to solve a problem thoughtfully. ...We're trying to encourage the things in the design system to be used and for folks not to reinvent the wheel. That said, we're getting into new territory. The design system today is made for a static content site and forms. It doesn't really cover the kinds of applications and tools that they're starting to develop today. We're trying to extend it to meet that need. This is one of the more complex areas. So it makes sense to me that there will be some growing pains where we start trying a thing and then try another thing and teams may diverge and then come back together, and that's okay. That's normal. Other design systems I've worked on have gone through that same kind of evolution." - Matt Dingee_

> _"I think we have a pretty good sense of what's important and what's valuable and we should feel free to try those things. We don't always need to investigate and inspect and research and synthesize and recommend - let's just try some things. We'll know pretty quickly if we're onto something. If there's something we can do that we feel pretty strongly about, then we should just go ahead and do it." - Chris Johnston_

* In the interview with the mobile app leads, Ryan Thurlwell expressed that our team should propose a solution and then just make sure the OCTO product owners are okay with it and indicated that stakeholder research isn't necessary for us to come to a conclusion that will work well.


### Finding 2

**Product owners for VFS teams have already thought about what types of notifications are most important to surface.** We could likely start building a backlog of notification types to support based on what we heard from OCTO product owners in this research study. Most of these notification types are not currently feasible but will be within the next 6 months to 2 years.

#### Supporting quotes and notes

> _"We hear pretty commonly that there should be acknowledgement of application submissions or failures, with actionable steps to take or what to expect next. I get that when I submit anything on any website." - Matt Self_

> _"If we had more informative, action-oriented claim statuses, like hey you indicated you had a private medical record to submit, we can't do anything with your claim until we get that document. That to my world's perspective is a MAJOR priority." - Matt Self_

> _"Information about appointments of any type [should be notifications]: appeals, CMP exams, hearings, anything about where a Veteran is expected to participate actively in a thing in service of moving a claim or decision review forward." - Matt Self_

> _"In the VAMC product, there are 140 VA health care systems which encompasses over 2,000 facilities. The VAMC sites are maintained by public officers in the field. Veterans have the ability to subscribe to government delivery notifications. So if a facility is closed, PAOs (Public affairs officers) have the ability to essentially check a box that says, send an email message via gov delivery to all of those Veterans who have subscribed for VA gov delivery updates. ...The hypothesis is that Veterans would want instead of or in addition to email updates, to be able to view this in the authenticated experience or receive an email that funnels them into the authenticated experience. But because it's gov delivery, the management and subscription is all done through the gov delivery interface." - Dave Conlon_

> _"There are a handful of things that I think are kind of obvious, like hey there's a change in your claim status, or hey you need to upload a document. We probably already told you via email or text message but if you haven't done it yet, we should tell you [on the website]." - Chris Johnston_

* Matt Dingee has been leading a team who are templatizing form components and digitizing them for VA.gov and they have an email notification through VA Notify that says we received your submission. It might be worth having a record of that on VA.gov.

* Kay Lawyer said that a future notification need for the health team will be filling in the gaps for Veterans scheduling health appointments - like a notification that the scheduling staff needs something from the Veteran in order to confirm the appointment, or a referral is needed, for example. That sort of urgent notification would need to be accompanied by a push notificatio or an email.

* Kristen McConnell said the health team is working on making after-visit summaries available in the health space and that could be something that would need to be surfaced via notification on VA.gov.

* Kay Lawyer said a notification that an appointment request has been scheduled might be an easy one to surface on VA.gov. She also said alerting a Veteran that their medication is expiring would be a good candidate, but that does not exist yet and Veterans have to keep track of that themselves.

* Dave Conlon brought up the PACT Act as an example where notifications could be automatic and intelligent because we know their service history and can send them a notification that they may be eligible, and then provide subsequent notifications if and when they apply for those benefits.


### Finding 3

**We heard some common themes about challenges to consider with scaling notifications, like giving users some control so notifications don't become noise, and the need for notifications to talk to each other across any interfaces where they appear.** 

#### Supporting quotes and notes

> "_I think hierarchy would be important because you wouldn't want to be overwhelming people with noise. I've seen websites do that too." - Matt Self_

> "_Consistency is probably the biggest thing. And transparency. Like hey if we don't know an answer to something, tell people that. If the claim is moving back and forth, that's a place where the VA has reduced their transparency. That doesn't look good, but we've tried it both ways. There's more opposition to the less transparent model than the bouncing around model. There's a general lack of trust that the VA is working in your best interest [or working quickly at all]." - Matt Self_

> _"I think the key for notifications is making sure that they're super relevant and I want them to deep link to the actual thing that it's notifying them about. And I want it to link the systems."_ Mikki gave an example of how confirming an appointment via a notification doesn't update the staff at the health care clinic that the appointment is confirmed and said that that type of disconnect can create issues. _"If we're gonna do notifications, making sure that we can actually complete the thread is important." - Mikki Northuis_

> _"How do we provide Veterans control over notifications? And what is the right balance between you are automatically subscribed to this notification, versus a notification that a new notification option is available and you can choose whether to subscribe to it or not. And at what cadence? How do we not overwhelm them with notifications and options to subscribe? How do we empower Veterans to take control of their own healthcare benefits journey rather than having the VA make decisions on their behalf? I would hypothesize that Veterans feel subjected to VA's whims and decisions." - Dave Conlon_

> _"Getting lots and lots of notifications that are not of value to them would be the number one trust breaker. The other thing is because there are so many potential places a person could be managing noifications in relation to benefits and services, things getting lost. If the approach was kind of centralizing everything and making sure that people can find the notifications that are of real value to them and help them complete tasks or get things that they need." - Chante Lantos-Swett_

> _"If every time you log in there are new notifications, I could imagine that being too chatty. Maybe there are levels of notifications where you actually bother someone versus just tell them information and they don't have to take action on it." - Martha Wilkes_

> _"Especially if they are waiting for something, people obsessively check and we almost enable that obsession. Because traditionally the VA has made decisions at random times, even in the middle of the night. It feels akin to people obsessively playing slot machines because it feels so truly random to them. So people have said on Reddit they have had to uninstall the app because they were checking all day and all night long. **We don't want to enable or create obsessiveness.** Once these notifications start being really timely and actionable, maybe let people schedule them? Maybe let people in a trauma-informed way choose not only the method but the time. Also the format - people get texts, emails, now potentially notifications, so do people want to be bombarded with bad news by three methods? And if and when people dismiss it, really dismiss it and don't let it come back even in another format." - Martha Wilkes_

> _"My biggest concern is that with varying EHRs and depending on the technical solution within those spaces there could be a potential for data discrepencies. We're trying to make things easier, use plain language, but they might get a letter out of VistA for example, that calls it a different clinic name and that might cause confusion. We're trying to figure out how we can minimize that for the Veteran so that when they come to our site, they know that what they see is true and accurate." - Kay Lawyer_

> _"There's so many different notifications that we can send, but if we do too many, then eventually that becomes noise." - Kristen McConnell

> _"Certainly there's a lot of different mediums that notifications have to persist across, like if I get a notification via email or text message, I expect that to persist on the mobile app and the website and I expect there to be some connection between those things. So if I get a notification that I have a secure message and I read that message, I don't expect to see that notification as unread anywhere else. **I think that Veterans are wanting to trust that these tools are talking to each other.**" - Lauren Alexanderson_

 > _"Being annoying about those things [notifications] and not giving any control can break Veteran trust." - Chris Johnston_
 
 > _"We often refer to notification preferences like what they get notified about and where they get notified about it as being valuable and important. I fundamentally believe that's true but there's a fine line between that and too much control. Like when you're presenting people with five pages of stuff they can be notified about and 4 columns [of notification methods] and they're just not gonna do any of it." - Chris Johnston_

* Mikki said if you dismiss a notification in one place of VA.gov but it still appears on another page, that would break Veteran trust and create noise.
* The health team said it's important to allow for Veterans to elect preferences for notifications and for us to honor those preferences, because the spectrum is wide of how many notifications Veterans like to receive.
* Chris Johnston said we can build Veteran trust by proactively notifying them about things they may not be aware of, like if there's a change in their dependent status, their disability payments may change (and help them avoid debt).


### Finding 4

**A notification center on VA.gov may need to support messages as well as notifications in the future.** 

#### Supporting quotes and notes

> _"I have this very vague sense of a more **enterprise messaging center**, I'm not exactly sure what to call it. But the idea is that all of the digital conversations that you're having with VA can be in a place. So whether I sent a note to support about the status of my GI bill, or I asked VBA about a particular claim, or I'm sending a note to my doctor about setting up an appointment, this idea that there could be an inbox where I'm managing these messages makes sense. You don't have a different Gmail account for every single person that you email like VA makes you have. It's possible that notifications get blended in there as well." - Chris Johnston_

> _"Something we hear from Veterans is 'I wish there was a way for me to see all the times I've been in contact with VA and have that information so I can reference it when I'm talking to a new person.'" - Chante Lantos-Swett_

* Chris Johnston mentioned that we don't want to burden the user with having to remember if something was a message or a notification if those things are separate and they want to go back and reference it, so that's a good reason to have them in the same place.


### Finding 5

**There will be special accessibility considerations for scaling notifications on VA.gov.**

#### Supporting quotes and notes

> _"We've heard from our partners and friends at VSOs like Blinded Veterans Association and Veterans in research that our consistency of navigation and how we templatize our pages really helps them get comfortable with our stuff and use it very efficiently as they learn. So I could imagine that if the notifications go in the header somwhere, then we would have to tread carefully and make sure that that is a smooth transition from unauth to auth experience." - Martha Wilkes_

> _"When you're a screen reader user, how do you alert them without bugging them? There's a fine line between we're telling you about something and now we're nagging you about it. And that's for people who can see the thing as well as hear the thing. It will be an especially challenging design problem to alert people at the right momemt and let them manage that alert but be able to bring it back if they want to. As a sighted peson, you can see the little bell icon that you have a notification and you can choose to ignore it. As a blind person, how would I know about that but not be annoyed by it? **We'll need to check in with folks who use assistive tech early on** because that will be key to this experience." - Martha Wilkes_

> _"These things are so personal and core to people's lives, their finances, their health, their claims, especially if they get denied. **These notifications are the first step, first potential trigger of a traumatic situation for them if it was a negative answer.** If that notification comes through and they were denied, especially for MST survivors, that's like the VA has told them, we don't believe it happened. So it's just not this little text message. Some people had to suffer for years and finally get the courage to apply for a thing. To just see that in a little text message, I don't know. We could probably put some thought behind that and I trust you guys to do that." - Martha Wilkes_

* Martha said she's not sure if it's against accessibility best practices to have a very different unauth and auth experience and we would need to do research to determine that. She said it's possible that the difference is actually **too** subtle now and hard for both sighted an blind users to tell they are logged in.
* Martha said Karen Cuthright would be a good person to talk to if we want more insight into MST survivors.


## Additional Insights

* Chante informed us that the functionality that was poorly implemented with Ask VA will be implemented on VA.gov. This is currently a form where users can submit questions to VA and is integrated with Microsoft Dynamics CRM.
* Luciana manages virtual agent (Chat bot) / main VA 411 number (calling into VA for support) and Chante said we may want to talk to them about any upcoming needs for notifications.
* Mikki let us know that there will be some changes to the navigation because it's so focused around benefits which hasn't scaled well and there's no logical place for some tools. There may be a new space for those tools. She also said three initiatives will strongly impact the navigation of the site over the next 6 months to 2 years: sitewide crew changes to the unauth content (healthcare and disability content(; MHV functionality moving over to VA.gov; and the authenticated experience work that Liz has started research on. These are iniatives that we will have to consider and teams we'll need to work closely with as we propose solutons for notifications.
* Jen Ecker shared via Slack that the mobile app supports push notifications for appointment reminders and secure message alerts but they currently kick the user to the homepage of the app and don't deep link. There is a settings feature in the app that lets the user toggle those notifications on or off.
* Ray Wang informed us that security review would be especially important for this work and the collab cycle is currently being altered to include security early on in the cycle instead of just at the end.
* The appointments team (Peter Russo) did a service design study that produced a user journey for all the touchpoints that a user may have across the appointments space. They found that users may get 15 notifications about their appointment or they may get none. They shared this research with us and after reviewing, it seems to be a research approach that could be useful for diving into specific spaces where there are a lot of touchpoints, like maybe claims and appeals. 
* Kristen McConnell said that as of now, My HealtheVet is set to be sunsetted by October 2024.
* **Lauren Alexanderson said she would like to see all the teams who are working on notification-related work to collaborate continuously.**


## Recommendations

* Schedule a regular touchpoint for all teams working on notifications (like how we used to have one for teams working on debt).
* Since we heard most OCTO product owners mention needing to give users some control over this feature, we need to put some thought into how to design onsite notification preferences in conjunction with the notification preferences that already exist in the profile. Liz and Angela should begin collaborating on this work.
* Start creating a list or backlog of notifications that may be potential candidates for VA.gov and include any information we have about when they will be available and what the limitations are.
* A notification on VA.gov will need to exist and it will need to consider how it can also include a record of messages/all digital interactions with VA. Where it lives on the website and how those notifications are surfaced to users is TBD.
* Notifications should have a hierarchy of importance and we should determine how to surface actionable notifications of the most high importance differently than informational notifications.


## Next Steps

- The Authenticated Experience team should:
  - Schedule a biweekly touchpoint for teams working in the notification space: health team, appointments, and claims and appeals. Any others?
  - Angela and Liz should collaborate on notification preferences.
  - Angela should record options and pros and cons to each for how and where to present notifications on VA.gov in Mural and present that to the team with recommendations of which options make the most sense to pursue in usability research.


## Further research needed

* We may want to test a couple different options of how to present notifications on VA.gov with users.
* We will need to test the notifications feature with assistive tech users before moving forward with any solution.

## Appendix

[Research plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/onsite-notifications/2023-scaling-onsite-notifications/notification-center-discovery/scaling-onsite-notifications-stakeholder-research-plan.md)

[Conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/onsite-notifications/2023-scaling-onsite-notifications/notification-center-discovery/scaling-onsite-notifications-stakeholder-convo-guide.md)

[Observation notes](https://docs.google.com/spreadsheets/d/1Djq6XrRmygzS0ab8ZJdWKE-gznf_lE2QZOdy9vaGfII/edit#gid=0)
