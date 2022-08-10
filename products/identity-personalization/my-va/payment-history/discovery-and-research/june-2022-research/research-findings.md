# My VA Benefit Payments and Debts 2022 Topline Summary
*Office of the CTO - Digital Experience (OCTO-DE), My VA, Authenticated Experience*

Date: 8/10/2022

Angela Agosto  [angela.agosto@adhocteam.us](mailto:angela.agosto@adhocteam.us) 

- [Research plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/payment-history/discovery-and-research/june-2022-research/research-plan.md)
- [Conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/payment-history/discovery-and-research/june-2022-research/conversation-guide.md)
- [Mural board](https://app.mural.co/t/vsa8243/m/vsa8243/1658864817536/d5bfb75923ee21bc25cb447f1569c38179e567b2?sender=uce014850ef6c5a8303e70396)

## Introduction
This topline summary is a high level, top of mind summary of trends found in the sessions.

### Document goal
* To compare research hypotheses to outcomes
* To summarize full research synthesis by quickly organizing high level themes

## Findings
### Our Hypothesis

**1. Users will be able to clearly see and read the notification at the top of the page and will know how to act on it if they wished to see more details or resolve a debt.**
- True

2. **Veterans will find the debt information useful and will be able to determine a path to resolve debts that are due from My VA.**
- True

3. **Veterans will be able to tell the difference between amounts that are due and amounts that have been paid to them on My VA.**
 - True

**4. Surfacing more details about debts and payments is important to Veterans and is something they would want to see upon logging into the site.**
- True

**5. There may be some confusion around whether copays should fall under debts or belong under a healthcare-related section because feedback on this topic has been split fairly even so far.**
- True

### Research questions
1. **Does the functionality work as expected, for all login types and across devices?**
- For the most part, yes.
- We observed successful redirects to My VA with ID.me, MHV, and DS Logon.
	- Since we have to stop recording when people log in, we can’t confirm whether or not we had a successful redirect with Login.gov. 
- Of the 10 participants in our study, 4 experienced unexpected and inconsistent issues logging in.
- 2 of those 4 participants logged in with a MHV credential, which now routes people to ID.me for the 2FA portion of the login experience. After completing that, 1 user was routed to My VA, and one was not.
- The other 2 participants got errors on eauth.va.gov that the identity team is not sure what to make of.

2. **What do people want to do once they’ve landed on My VA?**
- 8 participants wanted to complete a health care task.
	- 7 participants wanted to click a link under health care (secure messaging was most common)
	- 1 participant wanted to view lab results, and would’ve clicked “My Health” in the main navigation to do so.
- One participant felt like the page was “blank” and stated they’d go back to MHV to do what they needed to do, despite the fact that My VA had links to those same tasks on the page.
- One participant only logs into VA.gov to look for general news, VA updates, and went to the footer to try to find that information from My VA.
- One participant wanted to return to MHV since that’s the website they know.

3. **Are there any points of confusion?**
- There weren’t any points of confusion caused by starting on the homepage and landing on My VA once login was completed.
- The most significant points of confusion we observed were related to the login process.  The redirects and 2FA process of logging in are disruptive enough that participants are grateful to just be done with that by the time they get to My VA.
- One participant, who had health care but no upcoming appointments, felt unsure after landing on My VA. 

	> It’s kind of a weird screen….it’s got nothing on it. I’d have to chase it around [scroll] to get to where I need to go. - P2


### Additional findings
1. **Participants had a hard time figuring out how to go back to the homepage from My VA.**
- We had to skip this task for 1 participant. Of the 9 people we asked: 
	- 2 knew to click the logo to get back to the home page
	- 3 tried to use their browser back button, which triggered an error screen on a URL related to logging in
	- 2 looked for something called “home” in the main navigation menus
	- 2 had no idea how to get there

	> I’m shocked about clicking on the logo to get back to this page. That is not intuitive to me. - P13
- Since most participants tried to search when they couldn’t find a link on My VA, it will likely not be detrimental to their task completion if they can’t easily get back to the homepage. 

2. **5 participants preferred the homepage or the mobile app to My VA.**
- These participants quickly scanned the headings in the 4 quadrants to get a sense of what they could find on the page.

	> I just like one stop shopping. I’d rather see everything I might need in one place - P8, elaborating on their preference for the homepage over My VA
- 4 participants experienced very slow loading times, and 2 specifically mentioned that as being a drawback when comparing My VA to the homepage.

	> The dependability of coming here [homepage] and navigating quickly. I would use this instead of MHV or My VA - P13
- 3 participants mentioned the ease of logging in with biometrics as a benefit to the VA Mobile app over the homepage or My VA; one of those participants is 100% blind and relies on a screen reader.

	> The VA app is quicker because all I have to do is put my fingerprint on there - P7


3. **Participants mentioned a few tasks that are important to them that aren’t on My VA.**
- Viewing lab and test results
- Downloading their VA benefit letters
- Accessing their DD214
- 2 participants mentioned regularly checking on an appeal status that has been at a standstill for 2 years. When they logged in to My VA, they were shown the message that they had no claim updates within the last 30 days, which doesn’t help them complete their weekly task of seeing the status of their appeal. It would be better to show them the card with the status despite it not having changed within the last 30 days.

	> I always check the status of my appeal. It’s a ritual, but I shouldn’t have to. I’ve been waiting since 2020 for an answer. I check it at least once every week.” - P11

4. **Logging in is a pain point for at last half of our participants.**
- Participants expressed frustration about having to enter a 2FA code, and talked about preferring to use other VA digital properties, like the mobile app or eBenefits, because they don’t require that.

	> It’s a lot of steps just to get this far - P11, landing on My VA after 3 login attempts
- When participants used their back button after logging in, they were taken to an error screen related to the sign in process.
- 2 participants experienced an error on eauth.va.gov that prompted them to start the login process all over again.
- 2 participants were inexplicably forced to start over after entering their 2FA code.

5. **All participants we asked responded positively to the new observer method we piloted.**
- We had time to ask 8 of 10 participants. All 8 participants said they were fine with observers in the session. 
- 5 of the 8 felt strongly it was important to ask for consent.

	> If I look on there and I look at this screen and I see these people’s names, first thing I’m going to say is who are these people, and why are they on the call? Then I’m going to be hesitant to answer your questions because idk who these people are or what their purpose is - P8

	> That’s respect. I like that. - P2
- One shared that they have cognitive considerations and even if they gave consent when signing up for the survey, they might feel totally different the day of the session.
- 6 of 8 said having observers say a quick hello made them feel more welcome, though it was strange to them when they couldn’t see or hear someone.  
	- Participants on tablets and mobile devices could not see anyone on the call other than the moderator.
	- It was noticeable when a single observer chose not to say hello or turn on their camera.

5. **When we’re evaluating a flow that has a heavy dependency on another product outside of our team, we should include members of that team on our observer list.**
- We observed many technical difficulties related to the login experience. It would’ve been helpful to have members of the identity team on hand since we can’t record the actual sign in experience.
- It likely would’ve been a positive experience for the identity team to see these issues first hand, even if the issues hadn’t impacted our redirect.

6. **When conducting a research session with a participant who uses a screenreader, we need to allow 2 or even 2.5 times the amount of time for other sessions.**
- The nature of navigating the internet with a screenreader is slower than for sighted users.

	> This is time-consuming to a sighted person, but for me this is normal. I got nothing but time - P6
- We weren’t able to get through all tasks since another session was scheduled immediately after, and we had already gone over time.

## Recommendations and next steps
1. We should test internally on production with our own accounts and Login.gov to verify there aren’t any obvious problems with that credential and the redirect.
2. Meet with the analytics team to get their recommendations on how to measure the impact of this redirect.
3. Move forward with the My VA redirect and monitor our KPIs closely to determine how this is impacting people.
4. Create a Github issue to learn why the "View lab and test results" link isn’t showing on My VA anymore. It could be because we purposely removed it for accessibility reasons, or there may be a bug. We’re not sure at this time.
5. Create a Github issue to look at the Air Force logo in the name tag - the bottom of the logo was cut off for our Air Force Veteran participant.
