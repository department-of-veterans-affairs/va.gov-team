# Profile Notification Settings, Add Email Channel Research Findings 
`draft`

**Office of the CTO - Digital Experience (OCTO-DE), Profile, Authenticated Experience**

Date: February 2023

Liz Lantz, liz.lantz@adhocteam.us

Research readout Link to come

**Jump to:**

[Hypotheses and conclusions](#hypotheses-and-conclusions)

[Key findings](#key-findings)

[Recommendations](#recommendations)

[Who we talked to](#who-we-talked-to)

[Further research needed](#further-research-needed)

## Research Goals
_First, set the context of this research by explaining how it fits into the Veteran’s journey. Explain what a Veteran might do before and after using this tool. What moments does this tool live in? Are there moments that matter to keep in mind? What are Veteran’s familiarity with tools like this? (do they use tools like this, or is this something new)._
_[See the Veteran journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf)_

_Then, describe your goals for this research_

_[See an example](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/post-mvp-releases/research/research-findings.md#research-goals)_



## Research Questions

_Research questions here_

_[See an example ](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/post-mvp-releases/research/research-findings.md#research-questions)_


* Question 
* Question
* Question

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

_The 5-10 top findings from your study should be listed here. Write your findings so that if someone reads only these bullets they can leave feeling they got useful information and the study was worthwhile. Examples might be "Most participants used the Search field to find the form, and searched for the term 'veteran health'" or "Most participants struggled with the secondary caregiver section on the form"._

_[See an example](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/post-mvp-releases/research/research-findings.md#key-findings)_

1. Our current auto-saved pattern worked well with additional channels and notifications, and all participants preferred it to the read/edit pattern.  (Jump to finding)
2. Finding two

3. Finding three

4. Finding four

5. Finding five

6. Finding six

7. Finding seven


## Details of Findings 

### Our current auto-saved pattern worked well with additional channels and notifications, and all participants preferred it to the read/edit pattern. 
Participants were easily able understand and interact with our current auto-save pattern, even with additional notifications and channels. Clicking an edit link to update settings on a separate page felt like more work to participants; 2 participants even suggested an auto-save approach prior to seeing it. 

> This could just be a toggle, so… you can get rid of a lot of this (mouses over edit button and bell icons), and you could get rid of this whole entire page (clicks edit link and navigates to page to manage notifications) - P1

> This [autosave prototype] is a lot simpler. It’s just easy, it just saves it and does it. I can quickly see that I don’t have it on and I can just turn it on - P4

> Instead of saying edit, it [autosave prototype] has the checkboxes right here which is infinitely better. - P12

 The addition of an email channel, and new notification groups didn’t introduce any usability hurdles for 6 of 8 participants. 2 participants felt commented that they didn’t need to see things that weren’t relevant to them, such has Board of Veteran’s Appeals hearing reminders. They were still able to navigate the page and update their settings.



### The read/edit pattern introduced some usability problems that weren’t present in the auto-save pattern.
People were able to work through these problems without significant guidance from the moderator, but still found the auto-save pattern to be easier and faster to navigate. This  further supports the findings from our [profile editing evaluation study](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Research/2022-09-profile-editing-evaluation/findings-summary.md) that a “one thing per page” approach is not ideal for the short forms in the VA.gov profile.

- 3 of the 8 participants in our study weren’t sure if the edit button would lead them to edit their profile, or the notifications themselves
> Just out of curiosity, I’m going to hit edit to see if it takes me to my profile. - P9
- 2 of the 8 participants tried to click the bell icons to update their notification settings, instead of hitting edit.
> I don’t really like that [going to a new page]. I would really like to be able to click on and off the little bells here. - P6

### No participants were confused by the lack of a save button.
People felt confident that their changes were saved because of the feedback provided by the input message pattern.

> ’Update saved’ makes me feel like something happened. - P4

> It’s notifying me that it’s been saved. I’m trusting that this is going to work and I don’t need to call. - P9

### Participants found the level of information provided about notifications to be sufficient for them to know whether or not they wanted to update the setting.
In both prototypes, each notification had a name, channel options (text and/or email), and displayed if it was turned on or off.  
[screenshot]

All participants understood the channel options and if the notification was turned on or off.  3 participants wondered why some notifications were only available by text or email, but were not bothered by it.

When asked, all participants stated the information displayed was generally for them to make a decision about whether to update a setting.  They had questions about some notifications (detailed in the next finding), but even without clear answers to those questions in the interface, they felt information was sufficient.

### People were not totally clear on what to expect from notifications we’ll be bringing over from My HealtheVet.

Multiple participants asked questions about the new notifications coming from MyHealtheVet.
- Some participants shared questions and comments about the MHV Newsletter notification:
	- 2 wondered if it would be sent in it’s entirety (preferred for email) or if they’d get a link to go read it somewhere else (preferred if available by text). 
	- 2 felt that “notification” was not an accurate label for the MHV newsletter, because they associate newsletters with subscriptions rather than notifications.
- 4 of 8 participants weren’t sure about “Medical images and reports”. They asked if this meant they’d get the images/reports sent to them in some kind of notification, or if it meant they would be notified that they were available and they’d have to go somewhere else to see them (this was their guess, and preference).  An extremely low-vision user wondered how they might understand an image with their screenreader:
> Medical images and reports… that might be tricky. For blind and low vision users… um… *giggles* I don’t know if it… actually I’ve never looked at a medical image using a screen reader so I don’t even know if it would give a description of the image… but if it’s an x-ray it might be a bit complicated to give an audio description of an image. - P10


### Most participants intuitively navigated the path to add their email address. 
- Going between the notification settings page and email form was intuitive.
- One participant was surprised there was only one form field. Since the link said “profile” they expected to go to a page with their entire profile information.
- **Note/Question:** Some participants missed the “update saved” banner at the top of the page- did this impact whether or not they felt like their email had actually been saved? How many participants?
- **Confirm:** 2 participants expected to be opted in immediately, simply by adding their email address

### Most participants were not bothered by the repetition of the prompt to add an email address.
- **Confirm:** X of 9 participants didn’t comment on the repetition, and easily navigated the pages.
- Screenreader users were not bothered by the repetition of the links.
- **Confirm:** X participants commented that the page had visual clutter, and after adding an email commented that it was “better”. This suggests the repetition was clutter to them.
- **Confirm**: Some participants were not sure if the links under a notification name would only add the email address for that particular notification.

### Both variations of the design were equally usable on desktop and mobile.
- A low vision user commented that the green background to the “update saved” alert, which extends the full width of the section, was a “waste of vision time” on desktop because there wasn’t anything on the right side.
> “It would be better if the highlight didn’t go the full width of this thing and only highlighted the text. when I see it going the full width, I wonder what’s over there and it’s a waste of my vision time.”

### Some participants were confused about where their notifications were going to go.
- **Confirm:** X participants didn’t recall the mobile number information at the top of the prototype, and asked about how they could add their mobile number after adding their email address
- It’s possible this was confusing to participants because it was a prototype that didn’t reflect their own information.
- One participant thought the phone number at the top was a number to call for help.
> It has a phone number here I can call. - P9

## Additional Insights
### Most sighted participants didn’t notice the background-only banner under the H1 telling them their update had been saved.
Screenreader participants heard the announcement immediately upon landing on the page, but X of 8  sighted participants didn’t notice it until it had been pointed out by the moderator.

> It said “update saved”— that’s some good information to let somebody with little to no vision what they typed was actually saved. - P10

### CodePen works well for HTML prototypes, and we learned ways to use it more effectively for future studies.

### People don’t intuitively understand the difference between their login email address and contact email address.

### SMS notifications that new medical information is available would be helpful to Veterans.

4 of 8 participants shared sentiment that they prefer to receive notifications about new secure messages or medical reports via SMS, instead of email. This was mostly due to the immediacy of text messaging and the burden of navigating a crowded inbox:
> It feels like text would be the most direct way of reaching a person. - P1

> Secure messaging - this is a good thing. And I wish it was a text. Email notifications coming to let me know I got a message on healtheVet get lost in my mailbox. A text to let me know someone has responded is a lot more helpful. - P4

They commented that for things like a newsletter, email would be more appropriate since the content isn’t urgent, and it would likely be too long to be appropriate for an SMS message.

## Research Process Insights
### Screener questions for assistive technology may be more effective if written to cover 

## Recommendations

### Consider a different pattern to confirm updates have been saved when users go to a new page after saving an update. 
    * Supported by finding: Most sighted participants didn’t notice the background-only banner under the H1 telling them their update had been saved.

### Learn more about content of My HealtheVet notifications, and update labels accordingly to set clear expectations about what they are.
- 

    * _Supporting evidence_


## Next Steps

_Next steps here. Include owners if appropriate._


## Further research needed

_If there are demographics that were not included in this study or you discovered that more research should be done, make note of that here._


## Appendix
- [Research plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/notification-preferences/discovery-and-research/usability-study-add-email-jan-2023/research-plan.md)
- [Conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/notification-preferences/discovery-and-research/usability-study-add-email-jan-2023/conversation-guide.md)
- [Session notes](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/notification-preferences/discovery-and-research/usability-study-add-email-jan-2023/session-notes)


## Tools used for Synthesis

e.g. mural boards, etc.  


## Pages and applications used

Link to prototypes or pages that were tested

## Secondary research
This study didn’t include any secondary research.

## Who we talked to 

**Recruitment criteria**

_If you had specific criteria that you recruited for, use this space to explain what those were along with other information you feel would be important to understanding your participants._

We talked to **x participants.**

Audience segment:
* Veterans: x 
* Caregivers: x 
* Family members of a Veteran: x  


Gender:
* Male: x 
* Female: x 


LGBTQ+:
* Transgender: x 
* Nonbinary, gender fluid, gender queer, Two-Spirit (Indigenous only), or another gender beyond man or woman: x
* Gay, lesbian, or bisexual: x


Devices used during study: 
* Desktop: x 
* Tablet: x 
* Smart phone: x 
* Assistive Technology: x


Age:
* 25-34: x
* 35-44: x
* 45-54: x
* 55-64: x
* 65+: x
* Unknown: x


Education:
* High school degree or equivalent: x
* Some college (no degree): x
* Associate's degree, trade certificate or vocational training: x
* Bachelor's degree: x
* Master's degree: x
* Doctorate degree: x
* Unknown: x


Geographic location:
* Urban: x
* Rural: x
* Unknown: x


Race:
* White: x
* Black: x
* Hispanic: x
* Biracial: x
* Asian: x
* Native: x


Disability and Assistive Technology (AT):
* Cognitive: x
* AT beginner: x
* AT advanced user: x
* Desktop screen reader: x
* Mobile screen reader: x
* Magnification/Zoom: x
* [Speech Input Technology](https://www.w3.org/WAI/perspective-videos/voice/) like Siri/Dragon Naturally Speaking: x
* Hearing aids: x
* Sighted keyboard: x
* Captions: x


## Underserved groups we haven’t talked to 

_[Complete the VA recruitment checker for marginalized Veteran groups](https://docs.google.com/spreadsheets/d/1pq7TSHZonfpzAQBJj6B2geGHlNUwZEs4DzEvxcRgu0o/edit#gid=1221033726)_

This research does not include the perspectives of the following marginalized Veteran groups:
_List all groups in red from the spreadsheet_
* Group 1
* Group 2
* Group 3

_[insert screenshot of completed recruitment checker]_
![VA-recruitment-checker](link - add image to github folder and link here with .png)
