# Profile Notification Settings, Add Email Channel Research Findings 
`draft`

**Office of the CTO - Digital Experience (OCTO-DE), Profile, Authenticated Experience**

Date: February 6, 2023

Liz Lantz, liz.lantz@adhocteam.us

Research readout Link to come

**Jump to:**

[Hypotheses and conclusions](#hypotheses-and-conclusions)

[Key findings](#key-findings)

[Recommendations](#recommendations)

[Who we talked to](#who-we-talked-to)

[Further research needed](#further-research-needed)

## Research Goals

## Research Questions

## Methodology 

We conducted sessions remotely via Zoom, and asked participants to explore 2 HTML CodePen prototypes by completing 3 tasks.  

One prototype used our existing auto-save pattern, and another used a read/edit pattern similar to the other sections in profile.  We alternated which version we started with for each session.  Both prototypes had the same notification options available.
- [Auto-save prototype](https://codepen.io/surfbird/full/gOjmPyj)
- [Read/edit prototype](https://codepen.io/surfbird/full/PoBpwzO)

## Hypotheses and Conclusions

_Hypotheses or tasks for this research along with the conclusions you found If you conducted a usability test, list the success or task completion rate._

_[See an example](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/post-mvp-releases/research/research-findings.md#hypotheses-and-conclusions)_

_Hypothesis statement_

_("Maybe True", “Likely True”, “Definitely True”, “Likely False”, “Definitely False” or “Not enough information”) Why?_


## Key Findings
1. Our current auto-saved pattern worked well with additional channels and notifications, and all participants preferred it to the read/edit pattern.  (Jump to finding)
2. Finding two

3. Finding three

4. Finding four

5. Finding five

6. Finding six

7. Finding seven


## Details of Findings 


### Our existing auto-save edit pattern worked well with additional channels and notifications, and all participants preferred it to the read/edit pattern. 
The auto-save edit pattern in current designs was unanimously preferred to the read/edit (edit on a separate page) alternative. Participants were easily able understand and interact with our current auto-save pattern, even with more notifications and channels than we have on the page today. 

In the read/edit pattern, clicking an edit link to update settings on a separate page felt like more work to participants; 2 participants even suggested an auto-save approach prior to seeing it. 

> This could just be a toggle, so… you can get rid of a lot of this (mouses over edit button and bell icons), and you could get rid of this whole entire page (clicks edit link and navigates to page to manage notifications) - P1

> This [autosave prototype] is a lot simpler. It’s just easy, it just saves it and does it. I can quickly see that I don’t have it on and I can just turn it on - P4

> Instead of saying edit, it [autosave prototype] has the checkboxes right here which is infinitely better. - P12

 The addition of an email channel, and new notification groups didn’t introduce any usability hurdles for 6 of 8 participants. 2 participants commented that they didn’t need to see things that weren’t relevant to them, such has Board of Veteran’s Appeals hearing reminders. They were still able to navigate the page and update their settings.


### The read/edit pattern introduced some usability problems that weren’t present in the auto-save pattern.
People were able to work through these problems without significant guidance from the moderator, but still found the auto-save pattern to be easier and faster to navigate. This  further supports the findings from our [profile editing evaluation study](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Research/2022-09-profile-editing-evaluation/findings-summary.md) that a “one thing per page” approach is not ideal for the short forms in the VA.gov profile.

- 3 of the 8 participants in our study weren’t sure if the edit button would lead them to edit their profile, or the notifications themselves
> Just out of curiosity, I’m going to hit edit to see if it takes me to my profile. - P9
- 2 of the 8 participants tried to click the bell icons to update their notification settings, instead of hitting edit.
> I don’t really like that [going to a new page]. I would really like to be able to click on and off the little bells here. - P6

<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/images/notifications-read-edit-pattern.png" alt="Screenshot showing the three step process of updating a notification setting with the read edit pattern." width="100%" />

*In the screenshot above, the flow starts on the main notification settings page by clicking the edit button. The person would land on a dedicated page for that specific setting, and then be returned to the main notification settings page.*


### No one was confused by the lack of a save button.
The feedback provided by the input message pattern made people feel that there changes were saved, even though they didn’t interact with an explicit save button.

> ’Update saved’ makes me feel like something happened. - P4

> It’s notifying me that it’s been saved. I’m trusting that this is going to work and I don’t need to call. - P9

### People found the level of information provided to be sufficient for them to know whether or not they wanted to update the setting.
In both prototypes, each notification had a name, channel options (text and/or email), and displayed if it was turned on or off.  

[screenshot]

All participants understood the channel options and if the notification was turned on or off.  3 participants wondered why some notifications were only available by text or email, but were not bothered by it.

When asked, all participants stated the information displayed was generally for them to make a decision about whether to update a setting.  They had questions about some notifications (detailed in the next finding), but even without clear answers to those questions in the interface, they felt information was sufficient.  

A screenreader user especially appreciated the amount of content on the page:
> Us being low vision and visually impaired, we always have the fine line of getting enough feedback, and too much feedback. The feedback I was getting from this prototype was right on point - P10

### People were not totally clear on what to expect from notifications we’ll be bringing over from My HealtheVet.
Multiple participants asked questions about the new notifications coming from My HealtheVet.
- 4 of 8 participants weren’t sure about “Medical images and reports”. They asked if this meant they’d get the images/reports sent to them in some kind of notification, or if it meant they would be notified that they were available and they’d have to go somewhere else to see them (this was their guess, and preference).  An extremely low-vision user wondered how they might understand an image with their screenreader:
> Medical images and reports… that might be tricky. For blind and low vision users… um… *giggles* I don’t know if it… actually I’ve never looked at a medical image using a screen reader so I don’t even know if it would give a description of the image… but if it’s an x-ray it might be a bit complicated to give an audio description of an image. - P10

- 3 participants asked questions and shared comments about the My HealtheVet Newsletter notification:
	- They wondered if it would be sent in it’s entirety (preferred for email) or if they’d get a link to go read it somewhere else (preferred if available by text). 
	- They felt that “notification” was not an accurate label for the My HealtheVet newsletter, because they associate newsletters with signing up and subscriptions, rather than notifications.

> What is this [newsletter notification setting] doing? It says My HealtheVet newsletter and it says email notification off. If I turn this on, is it going to send me the newsletter, or is it going to let me know there IS a newsletter?  Newsletter is a sign up. It should just say sign-up for newsletter - P4

### 7 of 8 participants easily navigated the path to add their email address. 
Going between the notification settings page and email form was intuitive for the majority of participants. One participant was surprised to find the single form field. Since the link said “profile” they expected to go to a page with their entire profile information.

[screenshot]

People navigated to the email address form via whatever link was closest. 
- 3 participants added their email address via the alert at the top of the prototype
- 4 used a link under a specific notification (there was no pattern to which notification)
- We couldn’t tell which link a participant on a mobile device clicked to get to the form.

### The repetition of the prompt to add an email address wasn’t overwhelming for most people. 
Our team wondered whether or not the repetition of this call to action on the page is cumbersome for users, especially for screenreader users. 5 of 8 participants didn’t comment on the repetition, and easily navigated the prototypes, and screenreader users were not bothered by the repetition of the links.

[screenshot]

2 participants commented that the page had visual clutter, and after adding an email commented that it was “better” and “more streamlined”.

### Both variations of the design were equally usable on desktop and mobile.
Adding My HealtheVet notifications to our current page will nearly double the amount of content, so we wondered if the longer screen would present problems on mobile. It didn’t; the 3 participants who joined their session via a mobile device were able to use the page equally as easily as those on a desktop.

We got some unexpected feedback from a low vision user who joined on a desktop device. They commented that the green background to the “update saved” alert, which extends the full width of the section, was a “waste of vision time” on desktop because there wasn’t anything on the right side.
> “It would be better if the highlight didn’t go the full width of this thing and only highlighted the text. when I see it going the full width, I wonder what’s over there and it’s a waste of my vision time.”

[screenshot]

### Some participants were not clear about where their notifications would be delivered.
Our notification settings page has contact information under the h1 telling users where their notifications will be sent.

[screenshot]

4 of 8 participants either didn’t notice, or didn’t recall that information at the top of the prototype. Of these 4, some made comments that told us they didn’t understand the information, and others didn’t remark on it at all. 2 of the 4 were on a desktop, and 2 were on a laptop, so the screen size did not seem to contribute to missing this section of the page.

> It has a phone number here I can call. - P9, talking about the mobile phone number at the top of the prototype.

It’s possible this was confusing or insignificant to some participants because it was a prototype that didn’t reflect their own information. We also observed that 2 participants listed the contact information section as something that had been added to the page, once the alert disappeared and they added their email address.

## Additional Insights
### Most sighted participants didn’t notice the background-only banner under the H1 telling them their update had been saved.
Our screenreader participant heard the announcement immediately upon landing on the page, but 5 of 7 sighted participants didn’t notice it until it had been pointed out by the moderator.

[screenshot]

### People don’t intuitively understand the difference between their login email address and contact email address.
Multiple participants remarked that they would not encounter the missing email address scenario presented in the prototype, if they had logged into their own account. They felt this way specifically because they use an email address to log in.  They assume that they log in with an email address, that same email would automatically be used for notifications, which is not true.

### 3 participants weren’t clear about what would happen after they added a missing email address.
- 2 participants weren’t not sure if the links under a notification name would only add the email address for that particular notification.
- 1 participant used a link under a specific notification to add their email address, and expected to be automatically opted in by adding their email address. They didn’t understand opting in was a two-step process.

### A low vision user was confused by the checkmark icon on “update saved” message, since it was immediately above a checkbox input.
Once the message appeared, the user was confused about why there were suddenly 3 checkboxes. Upon closer inspection, they realized it was an icon - first thinking it was a chevron - and then stated it would be better if it was moved further away from the checkbox inputs.

[screenshot]

### Participants highlighted some missing items from the notification settings page that would be useful to them.
- A screenreader user wanted a way to find out if their pharmacy participated in prescription shipping notifications directly from the page.
> When I get to this, it should tell me whether or not my VA is eligible. - P10

- 1 participant wanted a direct link to see claim status from the Board of Veteran Appeals notification setting.
> I would love to see something more than just notify me. I would like to see something like give me an idea of when it arrived and that would give me an idea of how long it’s been sitting there. And where it’s going next. That would save me the time and trouble of calling the VSO. I don’t want to travel and see a VSO if I can see it here. - P9
- 3 participants wanted a way to update settings on all notifications with one click, such as an “subscribe to all” option.
- 1 participant expected to see options for notification payments under the Payments section.

### SMS notifications that new medical information is available would be helpful to Veterans.
4 of 8 participants shared sentiment that they prefer to receive notifications about new secure messages or medical reports via SMS, instead of email. This was mostly due to the immediacy of text messaging and the burden of navigating a crowded inbox:
> It feels like text would be the most direct way of reaching a person. - P1

> Secure messaging - this is a good thing. And I wish it was a text. Email notifications coming to let me know I got a message on healtheVet get lost in my mailbox. A text to let me know someone has responded is a lot more helpful. - P4

They commented that for things like a newsletter, email would be more appropriate since the content isn’t urgent, and it would likely be too long to be appropriate for an SMS message.

### The wording for the “add your email address” call to action confused some users.
- 1 person was confused by the word “profile” in the call to action to add their email address, and expected to go to a more complete profile page once clicking it. This led to them to feel like perhaps they were doing something incorrectly on the page with the single email address field.
- A screenreader user was confused by the whole call to action, which reads  “Want to get these notifications by email? First,  [add your email address to your profile](https://codepen.io/surfbird/full/GRBWJMe)” 
	- They commented that the word “period” was read out separately at the end of a sentence that contained the link, so they heard “Want to get these notifications by email? First link add your email address to your profile period”
	- This cost them some extra cognition to make sense of it. They also wondered then if a period would be mistakenly added to the end of their email address.
	- It also cost them some extra cognition to understand the “first” in the sentence (they expected to hear a second).
	
## Recommendations
### Use the pattern in the auto-save prototype for notification settings as we add channels and notification options.
- The auto-save approach worked well for all participants. 
- The prototype replaced the radio buttons we have today with checkboxes. This was easily understood by participants and allows us to cut the number of inputs in half, resulting in a cleaner user interface.

### Learn more about content of My HealtheVet notifications, and update content accordingly to set clear expectations about what they are.
At this point, we don’t know exactly what each notification contains. We should get a better understanding of that, and update the names of notifications accordingly. For example: 
- “Medical images and reports” might set more clear expectations if it were called “New medical images and reports available”.    
- The My HealtheVet newsletter email notification channel may be more clear as “Subscribe to weekly newsletter” than “Notify by email”
-  Supported by finding “People were not totally clear on what to expect from notifications we’ll be bringing over from My HealtheVet.”

### Reconsider how we are encouraging people to add their email address to their profile.
We have an opportunity to reduce clutter in the UI and set clearer expectations about the 2 step process of adding missing contact information. It’s worth exploring how we might present this important call to action in a clearer way. 

### Explore how we might make the input message pattern more accessible.
The input message pattern design caused some problems people using magnification. We should look into how we might improve the pattern to reduce that friction and make the design more accessible for all.  Two ideas are to remove the checkmark icon, and reduce the width of the green background.

### Explore how we might surface meaningful and relevant links to people in the notification settings section.
We know that claim status is incredibly important to Veterans who have a claim or appeal in progress.  How might we give them easier access to that information from profile? 

As we expand the prescription shipping notification options, we should also explore if there’s a way we can make it easier for people to check whether or not the notification is relevant to them based on their pharmacy.

## Research Process Insights
### Our latest screener questions for assistive tech users and people with cognitive considerations were more successful than previous versions, but we still have room to improve.
We asked for 4 participants who require screenreader software to use the internet, and were able to recruit 3 who satisfied the criteria we outlined.

Once we got into the sessions, 1 of the 3 participants didn’t use screenreader software, but rather used built in Windows assistive technology. While this was useful to see, and we learned a lot from this participant, it didn’t quite meet the criteria we outlined.

Another participant stated that they checked “yes” to indicate they had a cognitive consideration simply because there was not a no option.  We later saw that the screener form offered participants a single radio button input for this question, instead of a yes or no.

[insert-screenshot]

In our next study, we’ll provide people with multiple, clearly labeled options for special criteria may get us closer to talking to the folks who can answer our research questions.  We’ll include a “no” or something to negate the other options, as well as an “other” where people can type what they

### CodePen worked well as a tool for accessible HTML prototypes, and we learned ways to use it more effectively for future studies.
We set up our CodePen prototypes to mirror the accessible HTML we’d use on VA.gov, and found it to be a very successful way to get the research insights we hoped for across a variety of devices, assistive technologies, and skill level:
- 5 desktop participants
- 2 mobile participants
- 1 tablet participant
- 2 screenreader participants, one advanced, and one beginner
- 1 participant using Windows Adaptive technology and 400% zoom magnification

> I’m just impressed. As a screen reader, I’m going to say this form is very accessible. This definitely would be something that would be user friendly for anyone who is visually impaired. - P10, extremely low vision screenreader user.

We also learned ways we can improve the experience for future studies, and captured them here (link to come).

## Further research needed
### We need to re-evaluate the use of the background-only banner to confirm a save at the top of a page, once people can use their real information.
This was the first time we tested our new pattern of having a dedicated page for updating contact information.  Most people didn’t acknowledge the update, and that may be OK if they see their own information reflected back to them once it’s saved.  We should re-test the existing pattern in a future study, with people’s actual information to get a sense of how important it is for them to read this confirmation banner.

## Next Steps
- Review with product team and align on recommendations we’ll take action on.
- Share findings with the VA Notify and My HealtheVet teams.
- Create tickets for our backlog based on the recommendations.

## Appendix
- [Research plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/notification-preferences/discovery-and-research/usability-study-add-email-jan-2023/research-plan.md)
- [Conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/notification-preferences/discovery-and-research/usability-study-add-email-jan-2023/conversation-guide.md)
- [Session notes](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/notification-preferences/discovery-and-research/usability-study-add-email-jan-2023/session-notes)
- [Topline summary](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/notification-preferences/discovery-and-research/usability-study-add-email-jan-2023/topline-summary.md)


## Tools used for Synthesis
- [Mural board](https://app.mural.co/t/departmentofveteransaffairs9999/m/vsa8243/1673373506463/1612803cf5440529246a69f92f6bc1b00742f336?sender=ub868d471cfdb1c56cc0b4512)
- [Topline summary cross-check](https://docs.google.com/spreadsheets/d/1pukrgmkz_VRMxw-o98pBy35LEF8wnrWbMSFGWokvuw4/edit?usp=sharing)

## Pages and applications used
- [Auto-save prototype](https://codepen.io/surfbird/full/gOjmPyj)
- [Read/edit prototype](https://codepen.io/surfbird/full/PoBpwzO)

## Secondary research
This study didn’t include any secondary research.

## Who we talked to 
 [Recruitment criteria](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/notification-preferences/discovery-and-research/usability-study-add-email-jan-2023/research-plan.md#recruitment-criteria)

We talked to 9 participants, but one participant had such profound difficulty using Zoom with their screenreader that we were not able to get answers to the majority of our research questions.  That participants data was not included in these findings.

Audience segment:
* Veterans: 8 
* Caregivers: 0 
* Family members of a Veteran: 0  

Gender:
* Male: 4 
* Female: 4 


LGBTQ+:
We didn’t ask participants to disclose any LBGTQ+ information

Devices used during study: 
* Desktop: 5 
* Tablet: 1 
* Smart phone: 2 
* Assistive Technology: 2


Age:
* 25-34: 0
* 35-44: 2
* 45-54: 2
* 55-64: 3
* 65+: 1


Education:
* High school degree or equivalent: 0
* Some college (no degree): 2
* Associate's degree, trade certificate or vocational training: 2
* Bachelor's degree: 2
* Master's degree: 2
* Doctorate degree: 0
* Unknown: 0


Geographic location:
* Urban: 5
* Rural: 3
* Unknown: 0


Race:
* White: 4
* Black: 3
* Hispanic: 1*
* Biracial: 1*
* Asian: 1*
* Native: 1*
* *A single participant identified with all of these races


Disability and Assistive Technology (AT):
* Cognitive: 7
* AT beginner: 0
* AT advanced user: 2
* Desktop screen reader: 0
* Mobile screen reader: 1
* Magnification/Zoom: 1
* [Speech Input Technology](https://www.w3.org/WAI/perspective-videos/voice/) like Siri/Dragon Naturally Speaking: 0
* Hearing aids: 0
* Sighted keyboard: 0
* Captions: 0


## Underserved groups we haven’t talked to 

_[Complete the VA recruitment checker for marginalized Veteran groups](https://docs.google.com/spreadsheets/d/1pq7TSHZonfpzAQBJj6B2geGHlNUwZEs4DzEvxcRgu0o/edit#gid=1221033726)_

This research does not include the perspectives of the following marginalized Veteran groups:
_List all groups in red from the spreadsheet_
* Group 1
* Group 2
* Group 3

_[insert screenshot of completed recruitment checker]_
![VA-recruitment-checker](link - add image to github folder and link here with .png)
