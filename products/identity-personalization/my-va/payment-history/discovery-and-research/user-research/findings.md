# My VA Payment Info and Onsite Notifications Research Findings
*Office of the CTO - Digital Experience (OCTO-DE), Profile, Authenticated Experience*

Date: 1/25/2022

Researcher: Liz Lantz [liz.lantz@adhocteam.us](mailto:liz.lantz@adhocteam.us)

*Jump to:*
* [Hypotheses and conclusions](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/payment-history/discovery-and-research/user-research/findings.md#hypotheses-and-conclusions)
* [Key findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/payment-history/discovery-and-research/user-research/findings.md#key-findings)
* [Recommendations](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/payment-history/discovery-and-research/user-research/findings.md#recommendations)
* [Who we talked to](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/payment-history/discovery-and-research/user-research/findings.md#who-we-talked-to)
* [Further research needed](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/payment-history/discovery-and-research/user-research/findings.md#further-research-needed)

## Research Goals
The MVP we tested in this research focused on surfacing payment and debt information to Veterans. Though this is relevant at all stages of the Veteran journey ([review complete journey map](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf)), it’s particularly important when Veterans are **Starting up, Putting down roots, and Retiring** and actively managing finances at those stages. 

The purpose of this research was to:

1. Validate that our proposed payment information IA matches the Veteran mental model.

2. Understand the financial information that is most important to Veterans.
What information do users want to know about new debts, existing debts, and payments from the VA?

3. Validate that our onsite notification MVP meets Veterans' needs.

## Research Questions
### Proposed payment information IA
* Where do users expect to see new information about their payments and debts on [VA.gov](http://va.gov/)?
* Can users find the payment information that they're looking for?
* Do users expect to see a travel reimbursement link under health care or payment information?
* What is the order of importance of the existing sections on My VA + payment information?
* How do users expect their action items to be structured in relation to non-action item information?

### Financial information
* What information do users want to know about new debts, existing debts, and payments from the VA?
	* Is it important for them to know how many new debts have been added, or only that they have new debt?
* Are we missing any additional links?
* How long do users expect to have access to historical financial information (debts + payments) on My VA?
* Does providing a link allow users to sufficiently take action on their payments and debts, and manage direct deposit?

### Onsite notifications
* Does the proposed MVP solution (a single dismissible debt notification displayed at the top of the page) help Veterans to more easily take action on their payments or debts?
	* Why would a user want to dismiss this alert?
	* What do users expect to happen after an alert has been dismissed? How and when would they see that information again?
	* Are there any areas where the design does not meet Veteran needs?
* When does a user expect to see an alert about new debt?

## Methodology
We conducted 30 minute remote moderated sessions via zoom on *January 12-14, 2022.* Participants were asked to log in to VA.gov and provide feedback on two parts of My VA: onsite notifications, and the Benefits payments and debts section.

<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/payment-history/discovery-and-research/images/research-my-va-call-outs.png" width="60%" />

*Caption: screenshot of My VA, with the two parts we tested called out.*

## Hypotheses and Conclusions
* We believe Veterans will be able to more easily manage their debts and view payment history using the links in My VA.
	* **True**
* We believe Veterans will not need to use site search to find their payment or debt information from My VA.
	* **True**
* We believe Veterans will want to see more details about the financial information than we're surfacing on My VA, and that providing a link will be a sufficient way for them to get those details.
	* **True**
* We believe the design for action items and alerts will be effective at drawing attention to important information.
	* **Mostly true**
* We believe there may be some confusion about why some alerts are at the top of the page, and others are within distinct sections of My VA.
	* **Mostly false**

## Key Findings
### 1. Proposed payment information IA
1.1 Participants intuitively found recent information about payments under “View payment history” links on the homepage, and My VA. 

1.2 Participants weren’t confident about where to find debt information from the homepage, but clearly understood where to find that information on My VA.

1.3 Participant expectations about where to find the travel reimbursement information were varied.

1.4 Participants preferred My VA sections to be ordered by on their VA benefits and services. 

1.5 Displaying important information at the top of the page was effective at getting participants’ attention. 

### 2. Financial information

2.1 Amount is the most critical piece of information to participants for both payment and debts.

2.2 Some participants found it helpful to know the number of outstanding debts.

2.3 Two pieces of information were repeatedly named as being missing from the Benefit payments and debts section: remaining education benefits, and debt status.

2.4 Seeing the most recent payment on My VA was sufficient for participants, since the information is accompanied by the View Payment History link.

2.5 The majority of participants intuitively used the View payment history and Manage your direct deposit links; the exception was a participant using screen magnification software.
### 3. Onsite notifications

3.1 Participants could intuitively take action on a notification via a link.

3.2 Participants expected that if they dismissed an alert, it would display on My VA until they had completed the action they were being alerted about.

3.3 Multiple participants commented that the light yellow color for the alert did not stand out to them, and one participant stated it made the text very difficult to read.

## Details of Findings
### 1. Proposed payment information IA
#### 1.1 Participants intuitively found recent information about payments under “View payment history” links on the homepage, and My VA. 
*Labels:  AUD: Veterans, PRDT: My VA*

When asked where they’d look for information about their payments on VA.gov, 11 of 12 participants went to the view payment history link under the relevant benefit from the homepage. One participant used the site wide navigation to look for payment information under Pension.

All participants noticed the view payment history link on My VA as soon as they scrolled down to the Benefit payment and debt section of the page.  
* 11 of 12 participants expected to see detailed, historical information about payments from VA if they clicked it. 
* One participant wasn’t confident what they’d see if they clicked the link:
> I am not sure if that’s me paying the VA for my debt or if that’s the VA paying me. That’s not clear to me. - P12

#### 1.2 Participants weren’t confident about where to find debt information from the homepage, but clearly understood where to find that information on My VA.
*Labels:  AUD: Veterans, PRDT: My VA*

All but one participant in this group were unfamiliar with VA debt, so they had no context around looking for such information. Some participants, including the one participant with debt, guessed they might find debt information under payment history. This aligns with what other VA.gov team’s have noted in research. In both the [VBA debt portal usability](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/debt-letters-mvp/research/usability-july20/usability-readout.md#usability-key-takeaways-in-depth) and [VHA copayment discovery research](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/Debt%20Resolution/Medical_Copays/research/apr-2021/readout.md#when-searching-vagov-for-information-about-money-owed-to-va-veterans-often-search-within-the-lens-of-the-hub-theyre-dealing-with), Veterans narrowed in on the “View your payment history” link on the homepage and expected all payments received from and owed to VA would live there.

Once they visited My VA, it was clear to them that they would see information about any debts under the “Benefit payments and debts section”.  6 participants also commented on the onsite debt notification at the top of the page as soon as they landed on My VA.

#### 1.3 Participant expectations about where to find the travel reimbursement information were varied.
*Labels:  AUD: Veterans, BNFT: Healthcare, PRDT: My VA*

After reviewing the page, we asked 10 of 12 participants where they might find a link for travel pay on My VA. Many of them quickly stated an answer, but then about it making sense in two places (usually Benefit payments and debts and Health care) Their initial responses were:
* Benefit payments and debts - 4 participants
* Health care - 3 participants
* Claims & appeals - 2 participants

1 participant didn’t think they’d find that information on My VA and wanted to use search. 

We didn’t get to discuss this with each person due to time constraints, but all of those we spoke to thought it would be helpful to have a link to request travel pay on My VA, regardless of exactly where it was.

#### 1.4 Participants preferred My VA sections to be ordered by on their VA benefits and services. 
*Labels:  AUD: Veterans, PRDT: My VA*

Each participant had different feedback about which section of My VA mattered most to them. They each stated the highest priority section was the one containing information about the benefit they used most. A few commented that the most important section to them would change over time.
> Claims and appeals, sooner or later that’s going to go away. So then it’d be health care. - P17

* For participants who used VA health care, that section was highest priority for them. 
* Others stated Benefit payment and debts.
* Others stated Claims and appeals. 
* One participant said the Applying for benefits section would be the most important.

#### 1.5 Displaying important information at the top of the page was effective at getting participants’ attention. 
*Labels: AUD: Veterans, PRDT: My VA, DSP: Notifications, HDW: Smartphone*

Many participants immediately commented on the onsite notification as soon as they landed on My VA. 
> I'm instantly drawn to that. Yes, I like that.
> *Moderator: What do you like about that?*
> It's automatically alerting me that I need to check something out, just in case I missed a correspondence or I didn't know. Now I feel like I'm informed. - P2

The top of the page was a logical placement. This was especially true for time sensitive information, and users on mobile devices.
> If its at the top, it’s the first thing that grabs your eyes and attention. - P12

> If you don’t bother to scroll down, and you’re on the phone, if you have a lot of stuff going on, you won’t see it.  - P16

Our prototype had two similar debt-related alerts in different locations on the page.

<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/payment-history/discovery-and-research/images/research-my-va-two-similar-alerts.png" width="50%" />

*Caption: Screenshot of My VA, showing two debt related alerts. The first alert reads “You have a new debt, [link] Manage your VA Debt”, and the second alert reads “You have 3 outstanding debts, [link] Manage your VA debt.”*

This served as an effective reminder, especially for something as important as debt.
> I don’t see any problem with that at all . . . It’s stuff that people tend to overlook. And you’ve got to constantly remind them.  - P11

> Just in case you you're a little busy and you go right down to [the] benefit payments [section], I’m being reminded that it's right there. - P2

However, 3 participants thought the alerts were identical because they had the same link. 2 different participants explicitly stated they were confused by the repetition (they understood the difference in content), commenting that the alerts meant essentially the same thing.
> ”They’re worded differently but they mean the same. For lack of a better term, it doesn’t look very professional and it’s just confusing.”  - P15

### 2. Financial information
#### 2.1 Amount is the most critical piece of information to participants for both payment and debts.
*Labels:  AUD: Veterans, PRDT: My VA, PRDT: Payment-history*

When it comes to financial information, amount was the most important piece of information for participants. This was true whether it was an amount being paid or an amount owed.

Participants mentioned secondary information as also being important, and talked about hoping to find this information if they clicked on the “View payment history” or “Manage your VA debt links” from My VA:
- The date a payment was deposited into their account
- The due date for a debt
- The reason for a debt
- How to pay a debt
- Someone to contact if they had questions about their debt

> The amount, and when it is going to be deposited, or when it's due. Those are probably the most important pieces of information.  - Pilot

Not surprisingly, participants who had been long-time recipients of steady compensation payments weren’t overly concerned about seeing deposit amounts, since it had been reliable for so many years.

#### 2.2 Some participants found it helpful to know the number of outstanding debts.
*Labels:  AUD: Veterans, PRDT: My VA*

Of the 6 participants we were able to ask about the specific number of outstanding debts, 5 stated it would be important for them to see the number.  Their comments suggest that including the number of debts in the alert would spur them into action more than simply knowing there was a new debt.
> I think it’s important to know because up top, it just tells me I have a debt but you go down here and then see I have 3 debts. Oh man. 3 debts? Let me go in there and see what’s going on. - P13

> I would want to see a number there. Especially, because if it didn’t, and it says you have an outstanding debt, and there was a new debt, I wouldn’t know. - P10, *did not seem to understand the difference in content between the two alerts*

> I like it where it’s straightforward, 3 outstanding debts with a hyperlink. Instead of [the page] kicks off with “you have new debt” and I’m assuming it’s alluding to those 3 [debts]. You have 3 outstanding debts, do that first. - P 15

#### 2.3 Two pieces of information were repeatedly named as being missing from the Benefit payments and debts section: remaining education benefits, and debt status.
*Labels:  AUD: Veterans, PRDT: My VA, BNFT: Education*

All 4 participants who had education benefits shared that it was not easy to figure out how much education benefit they had remaining, and that it would be useful to see that information on this page.
> I had to inquire about how much I have left available If I wanted to transfer my post 9/11 to one of my kids. If there was a link on here for those that are still eligible, that would go in with the whole idea of one stop shop. - P13

> I know I will be trying to get a PhD, I just can’t remember how many months I have left. I will use the rest of my GI Bill. I can’t recall all of the details right now but that [My VA] would be the easiest way to find it. - P16

Participants wanted to see the status of their debt, even if they had no outstanding debt with VA.
- Some expected the new debt alert to be replaced with a confirmation of payment, once they had paid.
> It should say no debt. Or give a confirmation that it your debt has been paid in full. - P3

-  Some wanted My VA to reflect that they did not have any outstanding debt.  
> Even if I have a zero balance owed, it would be cool to be able to confirm that. - Pilot

#### 2.4 Seeing the most recent payment on My VA was sufficient for participants, since the information is accompanied by the View Payment History link.
*Labels:  AUD: Veterans, PRDT: My VA*

Most participants rely on information from their bank to get payment information. Still, they thought it was helpful to see the last payment history. In particular, they felt it would be useful for situations where they need to provide specific income information, such as taxes.

Multiple people talked about wanting to see the last payment regardless of how far in the past it was, but expected to go to another page to view detailed payment information.

#### 2.5 The majority of participants intuitively used the View payment history and Manage your direct deposit links; the exception was a participant using screen magnification software.
*Labels:  AUD: Veterans, PRDT: My VA, Accessibility, SPG: Blind/Visually Impaired*

Almost all participants easily found the links to take action on their payments, and had no trouble navigating back to My VA after viewing the information. 
A participant using ZoomText, a screen enlargement software with a speech component, eventually found the “Manage your direct deposit” link but shared feedback about challenges navigating multi-column layouts. They stated that it was unlikely they would have found it had they not been in a moderated research session.
> When I move it over to see manage your direct deposit [link], then I can’t see manage your benefit and payment debts [heading]. To make the screen large enough to read manage your direct deposit, I can’t see that other part [heading]. 
> 
> *Moderator: How does that impact the way you understand what you’re looking at?*
> 
> Well, it’s one of those things, once you get used to it, you know you got to do it, it’s ok. But I did one for a survey for something the other day, and they put the next button way down on the lower right corner. Well, so I gotta answer the question and you have to search for the next. Rather than having it right next to right next to it or right under the question or something. See, if you hadn’t mentioned changing that, I probably never would’ve moved over there and found that manage your direct deposit. 

<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/payment-history/discovery-and-research/images/research-my-va-zoomed-in.png" width="40%" />

*Caption: Screenshot of an approximation of a zoomed in view, which shows that links in the right column are difficult to find.*

### 3. Onsite notifications
#### 3.1 Participants could intuitively take action on a notification via a link.
*Labels:  AUD: Veterans, DSP: Notifications, PRDT: My VA*

All participants clearly understood the hyperlink in our notification design, and understood that it would allow them to take action on the information they were being alerted about. Participants expected to find more detailed financial information on subsequent pages.
> It [a link] is sufficient. I don’t think it should be on the first screen. Some of it you will need the next page. You may need privacy in that particular area. - P7 

#### 3.2 Participants expected that if they dismissed an alert, it would display on My VA until they had completed the action they were being alerted about.  
*Labels:  AUD: Veterans, DSP: Notifications, PRDT: My VA*

No participants dismissed the alert without prompting. This could be due to being previously warned they were viewing a prototype and not all items were clickable. Once prompted, they easily understood the `x` would dismiss the alert. 

Only 2 participants thought that because the alert said “new debt” it would go away after they viewed, but not paid their debt. The remaining participants stated they expected the alert to be visible until the debt had been paid.
> *Moderator: So now, if you came back here another time and your debt hadn’t been paid -*
>  It would pop back up. - P13

Toward the end of the sessions, we asked participants how they expected to see the onsite notification again once they dismissed it. All participants stated they could access similar information by going down to Benefit payment and debts. This makes sense, since they had already been exposed to the content. If they dismissed the alert without scrolling down first, it’s likely they would feel unsure about how to see that information again. That could cause a moment of panic if they had caught a glimpse of the debt related content just before dismissing it.

#### 3.3 Multiple participants commented that the light yellow color for the alert did not stand out to them, and one participant stated it made the text very difficult to read.
*Labels: AUD: Veterans, Accessibility, DSP Experimental, DSP: Notifications, PRDT: My VA, SPG: Blind/Visually Impaired**
While many participants noticed the alerts right away, several commented that the light yellow did not communicate the appropriate level of urgency that should accompany a message about outstanding debt or unread health care messages.
> This is a soft soothing yellow, it’s kind of chill - it doesn’t strike urgency. - P15

> Because they’re beige, they don’t hit you in the face like maybe they should. Like if it was red or a brighter orange. Like, hello hello you have two messages! - P7 

A legally blind participant stated they could not read the text against that color background..
> That, yellow or brown, whatever that color is, it makes it hard for me to read in that color. - P17

## Additional findings
### 2 participants wanted a heading above the alert section at the top of the page to provide additional context.
*Labels: AUD: Veterans, Accessibility, SPG: Blind/Visually Impaired, PRDT: My VA*

We first heard this when an internal VA accessibility consultant tested our prototype with their screenreader, prior to kicking off our study. They had no context for the content in the alert. It was confusing for them to hear their screenreader read out “My VA, Go to profile [link], You have a new debt, Manage your VA debt [link]”.

During the study, another participant wasn’t totally confident what the message about new debt was.
> I am guessing is a notification up here. It seems that way, but even then put “recent notifications” up here instead of going to profile (*mouses over link*) debt (*mouses over alert*), then health care (*mouses over health care heading*). Nothing says notification or messages here (*mouses in space between go to profile link, and alert*)|

<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/payment-history/discovery-and-research/images/research-my-va-no-heading.png" width="40%" />

*Caption: Screenshot of top portion of My VA, with an arrow pointing to where a heading would appear above the onsite notification*

### 2 participants shared frustration with the new process to request travel reimbursement.
*Labels: AUD: Caregivers, AUD: Veterans, BNFT: Healthcare*

We asked participants where they expected to find a link for travel reimbursement on My VA. After this question, 2 participants shared lengthy stories and significant frustration at the new, online process to submit travel pay.  

They stated the onsite kiosk was significantly easier, because it automatically calculated mileage and knew they checked it for their appointments.

### When asked where they would expect to find a link to co-pay information, participants were split between 2 sections.
We added another question mid-study to get feedback from Veterans on where they expected to find a link to information about co-pays. 
- 2 participants expected to find it under Health care
- 2 participants expected to find it under Benefit payments and debts
- 1 participant stated they wouldn’t expect to see that on My VA and would use site search to find it.

### Participants shared a variety of information that would be helpful to have on My VA.
At the end of the session, we asked participants if anything was missing from My VA. The clear trends are shared above in finding 2.3 (debt amount and remaining education benefit), but we thought it was worthwhile to share items named by single participants.
- More prominent call outs to contact VA for help or with questions.
- Additional crisis line call outs.
- Specific floor and room number for upcoming appointment information.
- A link to access their financial statement for tax purposes.
- A link to download benefit payment letters.
- Confirmation that their disability rating had not changed, especially in context with payment information.
> “It can keep me updated as to if my rates are lowered. I would have to wait for a month to get a letter in the mail to be told I was reduced.”

## Recommendations
1. **Put the travel reimbursement link under health care.** 
	- Participants associated travel pay with health care.
	- This aligns with where travel pay information is found in other parts of VA.gov.
2. **Keep onsite notifications at the top of the page, and within sections.**
	- The top of the page placement made alerts clearly noticeable.
	- Most participants didn’t have a problem with repeated information on the page. 
	- All participants felt alert content throughout the page was important and helpful.
3. **Create logic so that alerts can only be permanently dismissed once the action is addressed, rather than by a person’s action.**
	- Participants expected alerts to display on My VA until they completed the action they were being alerted about.
	- Most participants felt that dismissing the debt alert would be OK since they had a back-up in the Benefit payment and debt section. They only knew this since they were participating in a moderated session and had been asked to review the page.
4. **Include specific information in debt alerts, including the total amount and number of debts.**
	* Across all sessions, participant stated amount was the most important piece of information about a debt.
	* Many participants stated the number of debts was helpful to know up front, especially if the number was more than 1.
6. **Display a “you have no debt” confirmation message in Benefit payments and debts, and possibly also a link to debt management so Veterans can get more information.**
	* Participants with and without debt expressed they would like confirmation that their debt had been resolved.
	* At least 3 participants did not understand how a person could have debt with VA.
	* Since the section heading is “Benefit payments and debts”, displaying a message stating there was no debt, rather than not displaying anything at all, would reduce any doubts the user had that something wasn’t displaying correctly.
7. **Include amount of remaining education benefits and a link to information about how what’s left in the Benefit payment and debt section**.
	- Participants who used their education benefits shared that it’s difficult to figure out how much education benefit they have left.  All wanted to see their most recent education payment, regardless of how long ago it was, because it would be a starting point to do the math of figuring out what remained.
	- 2 participants weren’t sure if they were eligible to use any remaining benefits, or if they could transfer those benefits to their children.
8. **Iterate on the alert design to improve usability for people with low vision. Also, consider changes that will more clearly communicate a sense of urgency.**
	- Our legally blind participant struggled to read the text on the alert due to the yellow background color.
	- Our accessibility review revealed that we have an opportunity to improve the design to more clearly communicate the significance of the alerts without relying so much on color.
	- All but 1 participant noticed the alerts right away, so they certainly stand out from the page. However, the light yellow color caused 4 participants to not feel a sense of urgency to take action on the alerts.
9. **Add a heading for the onsite notification section at the top of the page, when there is a notification to display.**
	* A blind, screenreader user became confused when encountering the debt notification at the top of the page because they had no context for the alert.
	* One participant in our study had to guess at what the alert meant because there was no heading.

## Next Steps
Review findings and recommendations with team

## Further research needed
In our next round of research, we should include participants that:
- Have debt with VA, so we can get information based on lived experience.
- Use magnification, so we can better understand any usability hurdles of My VA’s multi-column layout.
- Identify has having cognitive considerations, so we can validate that our alert pattern works for that population.

We will also aim to recruit a majority BIWOC participant group, since this round of research included mostly white, male participants.

We’ll need to conduct additional research to better understand Veteran expectations around co-pay information, since we didn’t get definitive conclusions on that in this study.

## Lessons about research logistics
### Recruiting criteria could have been more clear.
The recruiting roster indicated that almost all participants had some form of non-health debt with VA, but  only 1 participant actually had debt. This meant we had to resort to our UX Pin prototype, rather than allow people to explore their own My VA account as we had hoped.

**Recommendation**:  Be more explicit in future studies, and ask recruiters to verify with participant prior to scheduling them for a session.

### We got clarity halfway through the study that it is permissible to record PII.
As a result, we were able to create detailed transcripts for half the sessions.  Moving forward, we know now that we can record PII as long as we pause the recording during the actual login process. Of course, we need to follow our usual protocol of destroying recordings as soon as analysis is complete.

### Increase the session time to allow for late arrivals and participant set up.
Our sessions were scheduled for 30 minutes, which was *exactly* enough time for our tasks.  We didn’t allow buffers for late arrivals, technical hurdles, or people requiring assistance during the session (2 participants had their spouse with them to help with Zoom).  This meant that we had to pick and choose some questions as we neared the end of our session time.
**Recommendation:** Add 15 minutes to the amount of time required to complete tasks in future studies.

### Set a limit for the maximum number of sessions per day.
We had 7 sessions scheduled for the last day of research. With the 50% cancellation/no-show rate, that seemed feasible - until all but one participant showed up! We were grateful for the sessions, but were fatigued by the end of the day. It was challenging to bring the same level of energy to each session as the day went on.
**Recommendation:** Specify a maximum number (5) sessions per day in the research plan, and add an extra day of sessions if needed. 


## Appendix
[Research plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/payment-history/discovery-and-research/user-research/payment-information-research-plan.md)

[Conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/payment-history/discovery-and-research/user-research/payment-information-conversation-guide.md)

### Tools used for Synthesis
[Interview transcripts](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va/payment-history/discovery-and-research/user-research/session-notes)

[Mural board](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va/payment-history/discovery-and-research/user-research/session-notes)

### Pages and applications used
VA.gov
[Desktop prototype](https://preview.uxpin.com/45251888896c8dd47ef62aa20d3a89a334726ac1#/pages/145483168/simulate/no-panels?mode=i) 
[Mobile prototype](https://preview.uxpin.com/45251888896c8dd47ef62aa20d3a89a334726ac1#/pages/145483175/simulate/no-panels?mode=i)

### Who we talked to
[Recruitment criteria](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/payment-history/discovery-and-research/user-research/payment-information-research-plan.md#recruitment-criteria)

We talked to *12 participants*, including a pilot participant

Audience segment:

* Veterans: 12
* Caregivers: 0
* Family members of a Veteran: 0

Gender:

* Male: 8
* Female: 4

LGBTQ+:

* Transgender: 0
* Nonbinary, gender fluid, gender queer, Two-Spirit (Indigenous only), or another gender beyond man or woman: 2
* Gay, lesbian, or bisexual: 2

Devices used during study:

* Desktop: 10
* Tablet: 0
* Smart phone: 2
* Assistive Technology: 5

Age:

* 25-34: 0
* 35-44: 2
* 45-54: 1
* 55-64: 3
* 65+: 5
* Unknown: 1

Education:

* High school degree or equivalent: 0
* Some college (no degree): 4
* Associate's degree, trade certificate or vocational training: 1
* Bachelor's degree: 3
* Master's degree: 3
* Doctorate degree: 0
* Unknown: 1

Geographic location:

* Urban: 8
* Rural: 2
* Unknown: 2

Race:

* White: 8
* Black: 3
* Hispanic: 0
* Biracial: 1
* Asian: 0
* Native: 0

Disability and Assistive Technology (AT):

* Cognitive: 3
* AT beginner: 0
* AT advanced user: 0
* Desktop screen reader: 1
* Mobile screen reader: 0
* Magnification/Zoom: 1
* [Speech Input Technology](https://www.w3.org/WAI/perspective-videos/voice/) like Siri/Dragon Naturally Speaking: 0
* Hearing aids: 5
* Sighted keyboard: 0
* Captions: 1

## Underserved groups we haven’t talked to
This research does not include the perspectives of the following marginalized Veteran groups: /List all groups in red from the spreadsheet/

* Veterans with cognitive disabilities
* Mobile users
* Veterans with other than honorable discharge
* Veterans who have an immigrant origin
* Expat Veterans (living abroad)
* Veterans who identify as Hispanic, Asian, or Native 
* Transgender Veterans
* Beginning and experienced AT users 
* Users of the following assistive technologies: mobile screen readers, keyboards attached to mobile devices or tablets, switch devices and braille readers.

<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/payment-history/discovery-and-research/images/research-recruitment-checker.png" />

_Caption: Screenshot of VA Recruitment Checker, capturing the data above in spreadsheet form._
