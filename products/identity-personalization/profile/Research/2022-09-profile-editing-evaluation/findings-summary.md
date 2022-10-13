# Profile Editing Research Findings 
`draft`

**Office of the CTO - Digital Experience (OCTO-DE), VA.gov Profile, Authenticated Experience**

10/12/2022

Liz Lantz, liz.lantz@adhocteam.us

[Research Report PDF] (link here)

**Jump to:**
- [Hypotheses and conclusions](insert link to section)
- [Key findings](insert link to section)
- [Recommendations](insert link to section)
- [Who we talked to](insert link to section)
- [Further research needed](insert link to section)

## Research Goals
_First, set the context of this research by explaining how it fits into the Veteran’s journey. Explain what a Veteran might do before and after using this tool. What moments does this tool live in? Are there moments that matter to keep in mind? What are Veteran’s familiarity with tools like this? (do they use tools like this, or is this something new)._
_[See the Veteran journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf)_

_Then, describe your goals for this research_

_[See an example](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/post-mvp-releases/research/research-findings.md#research-goals)_
1. Learn whether or not our edit-in-place pattern presents major usability problems for people with cognitive disabilities on mobile devices.
2. Identify any other usability hurdles in profile.

**Note:** For this study, we recruited a group of Veterans that would thought would most likely to have challenges with edit in place functionality: people with cognitive disabilities, those who use assistive technology, and those who have limited screen real estate. These are the people we are referring to when we say “people” or “participants” throughout the rest of this document.

## Research Questions
1. What challenges do people encounter related to in-line editing, especially address information and notification preferences?
2. How easily can people understand and navigate address validation?
3. Do people encounter any usability hurdles with updating notification settings?

## Methodology 
We conducted this research through moderated sessions over Zoom. We asked participants to update profile information in a test account on VA.gov, and had them review a bare-bones HTML prototype in CodePen as time allowed.

## Hypotheses and Conclusions
* People will be able to easily update 1-2 field forms (such as phone number) with in-line editing.
	* Definitely true, since all participants were able to update their phone numbers, and even mailing addresses, without guidance.
* People will encounter usability hurdles with more complex forms/flows such as address validation.
	* Maybe true, because some participants:
		*  were rushing and didn’t notice the alerts
		* Attempted to edit another section without making a selection
		* were unsure how to get back to edit their entry
* People will not encounter significant usability hurdles when updating their notification settings.
	* Likely false, because some participants:
		* did not notice the name of the notification they were updating
		* thought they were finished updating their settings after adding their mobile number
		* were not sure what to do next after adding their mobile number
		* expected a save or submit button (rather than the auto-save function)
* If people can edit their profile without major challenges, we can be more confident our in-line editing pattern works well for *all* Veterans.
	* Likely true, since this is the first time we have tested this pattern with a group of Veterans with cognitive considerations that also use assistive technology.

## Key Findings
1. The majority of participants were able to update a VA.gov profile with in-line editing with relative ease.
2. 5 of 11 participants experienced some minor confusion during the address validation process.
3. In the contact information section, we observed some usability hurdles in that slowed multiple people down.
4. Participants were not bothered by encountering multiple alerts when updating contact information, though it took some longer than others to comprehend the information.
5. Having to leave the notification settings page to add a mobile number was disruptive to 6 of 11 participants.
6. 5 participants missed the “Board of Veteran’s Affairs Hearing Reminder” notification name, which led to a misunderstanding about what the notification was for.
7. Most participants, including screenreader users, found in-line editing and a “one thing per page” approach to be equally usable.

## Details of Findings 
### The majority of participants were able to update a VA.gov profile with in-line editing with relative ease.

We started our sessions by asking participants to update sections on the contact information page. All participants intuitively understood how to go from read-only to edit mode, complete forms and save their changes. 

All but 1 participant easily navigated the longer address form. The 1 participant who did not had mistakenly checked the “I live on a United States military base” without realizing it and was confused by the correlating form fields.

The “alert followed by a modal” pattern that can occur in a couple of edge-case flows did not cause a problem for any participant.

*Labels: Accessibility, AUD: Veterans, HDW: Smartphone, HDW: Laptop, PRDT: VA.gov Profile, RESRCH: Evaluative, RESRCH: Remote, RESRCH: Usability, SFTW: Screenreader, SFTW: Website, SPG: Blind/Visually Impaired,  SPG: Cognitive Consideration*

### 5 of 11 participants experienced some minor confusion during the address validation process.

All participants triggered the address validation alert (some naturally, others with guidance), and were able to make a selection and move forward. However, the entire process was not intuitive for 5 participants:

- 2 participants who triggered the “confirm your address” validation message attempted to move onto another section without confirming their address.
- A screenreader participant encountered the edit button before the “use this address” and “cancel” buttons, and went back to edit before understanding all possible options.
- 3 participants did not see the edit buttons and weren’t sure how edit their entry.

<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/images/address-validation-edit-buttons.png" alt="Screenshot of address validation UI, where edit buttons that are styled to look like links are embedded in a paragraph, and under a radio button option" width="320" />

> **Moderator**: How would you go back and change what you entered?
> **P6**: I think if I click “update”, it should take me back.
> **Moderator**: Take you back to edit the information?
> **P6**: Yes, I think so.
> **Moderator**: Go ahead and try that.
> **P6**: *clicks update button, form saves and returns to initial view* Oh. No. That didn’t do it.

*Labels: Accessibility, AUD: Veterans, DSC: Alert box, HDW: Smartphone, HDW: Laptop, PRDT: VA.gov Profile, RESRCH: Evaluative, RESRCH: Remote, RESRCH: Usability, SFTW: Screenreader, SFTW: Website, SPG: Blind/Visually Impaired,  SPG: Cognitive Consideration*

### In the contact information section, we observed some usability hurdles in that slowed multiple people down.

The hurdles we observed were experienced by a minority of participants, but it’s important to note trouble spots that came up in our sessions. We hypothesize that Veterans with more severe cognitive considerations or less familiarity with technology would struggle more than those who successfully participated in remote usability testing.

- 4 participants didn’t realize their update hadn’t finished saving, and quickly moved onto another section.  2 of these participants had triggered the address validation alert and then confirmed the update without reading the alert content. It is possible they were rushing more than they normally would if they had been completing this task because they had a real need to do so.
- 5 participants felt uncertain about which button to select to move forward with there task, when multiple buttons were present:
	- 2 participants expected to see “Save” instead of “Update” at the bottom of a form.
	- We observed 2 participants hesitate and take more time (compared to other tasks they completed) when choosing between “Continue editing” or “Cancel” in the confirmation alert that appeared when they hit “Cancel” with unsaved changes.
	- 1 participant was confused by the buttons in the alert confirming removal of information.
> See how [the button] has “Yes, remove my information?” I think it should the cancel should be maybe “cancel and save”. Because I think the cancel could be interpreted as cancel what I just did, too, like it feels too similar to remove. - P3

TK: insert screenshot of buttons

- 3 participants, 2 of which were blind screenreader users, missed the remove button and expected to be able to remove contact information by clicking “Edit”, clearing the form field, and saving an empty form. All had to be guided by the moderator to find the remove button.

> If I did [hear the remove button read aloud], I forgot it. I would’ve been stuck there for a minute because to me, if I edit it [the form] and blank it out, and update it, that to me is the same as removing it.  - P11, screenreader user.

*Labels: Accessibility, AUD: Veterans, DSC: Alert box, DSC: buttons, HDW: Smartphone, HDW: Laptop, PRDT: VA.gov Profile, RESRCH: Evaluative, RESRCH: Remote, RESRCH: Usability, SFTW: Screenreader, SFTW: Website, SPG: Blind/Visually Impaired,  SPG: Cognitive Consideration*

### Participants were not bothered by encountering multiple alerts when updating contact information, though it took some longer than others to comprehend the information.

Our team has hypothesized that the multiple alerts people can encounter when updating contact information would be confusing and frustrating, particularly address validation. We observed the opposite during these sessions, even when people triggered an address validation flow that was immediately followed by 2 different modal messages.

- No participants expressed annoyance or frustration at encountering multiple alerts in a brief period of time. 
- 2 participants took more time than the other 9 participants to comprehend the content. They had to re-read the information in alerts with longer content before feeling confident about moving on.

> Well, a lot of things I have to read again. My sight is changing, and even though I have on glasses, sometimes I have to read things over just to be sure. Cause I’m elderly! I have to read things over and over sometimes, you know, to be certain. - P10

- 4 participants stated specific reasons they felt the alerts were valuable:

> Sometimes, we could get distracted, and these are great reminders of like, “Hey, you’re about to go in this area to do this thing”, and maybe I didn’t mean to go there.  I think the reminders are helpful. - P3

- We observed some participants moving too quickly to read the content in the alerts, though we hypothesize this is due to being in a research session and not having to actually complete the task.

*Labels: Accessibility, AUD: Veterans, DSC: Alert boxes, HDW: Smartphone, HDW: Laptop, PRDT: VA.gov Profile, RESRCH: Evaluative, RESRCH: Remote, RESRCH: Usability, SFTW: Screenreader, SFTW: Website, SPG: Blind/Visually Impaired,  SPG: Cognitive Consideration*

### Having to leave the notification settings page to add a mobile number was disruptive to 6 of 11 participants.
It made sense to participants that they needed to add a mobile number before updating text message settings. They intuitively clicked the “Add a mobile number to your profile” link in the alert, which sent them directly to the mobile phone number section on the contact information page. 

The next steps confused some participants:
- 3 participants did not realize the mobile phone number was in view (or the focus halo on the edit button). They spent time scrolling up and down the page looking for the mobile number field.
- 6 participants did not see the “manage text notifications” link in the save confirmation alert and either:
	- Scrolled up and down trying to figure out what to do next, eventually realizing they needed to navigate back to notification settings.
	-  Assumed they were now opted into notifications and didn’t need to do anything else.

> That little piece that says, “go ahead and update notifications now” -  it just totally went right past me. I totally just missed it. Maybe if it  jumped out at me, or had a big stop sign or something I probably would notice, but had you not said something, I would have missed it and thought “Okay, I’m good.” - P1

- One of the 6 participants experienced a 5 second external disruption after landing on the page. In this redacted video clip, you can observe that they could not recall what they were supposed to do after they focused back on the research session. Then, they went back and forth 3 times between the two pages to try to figure out what to do.  

Once participants got back to the notification settings page, they found the radio button interface easy to use.

*Labels: Accessibility, AUD: Veterans, HDW: Smartphone, HDW: Laptop, PRDT: VA.gov Profile, RESRCH: Evaluative, RESRCH: Remote, RESRCH: Usability, SFTW: Screenreader, SFTW: Website, SPG: Blind/Visually Impaired,  SPG: Cognitive Consideration*

### 5 participants missed the “Board of Veteran’s Affairs Hearing Reminder” notification name, which led to a misunderstanding about what the notification was for.

These participants assumed the notification was for “Applications, claims, decision reviews, and appeals”, which is the name of the notification group. 

> **Moderator:** For this one that you just set up - what kind of notification will you get? 
> **P7:** I would think…let's say my application has been submitted. For claims, I would imagine that I would receive a text message, saying, “You have submitted your claim for disability compensation.” Maybe I would also receive a text message when a compensation and pension appointment has been scheduled, or when it moves from one phase to the next. Maybe if now it is being moved to a reviewer to decide, I would think that maybe I would receive a text message about that, and what final decision has been made.

> What I can see is that [hesitates] this is about any correspondence about anything having to do with VA as far as any of those. Applications, financial decisions, reviews, and appeals. So all correspondence about that, I believe. But then there's this board of veterans of affairs hearing reminder thing and I’m like, wait. What's that about? - P8


### Most participants, including screenreader users, found in-line editing and a “one thing per page” approach to be equally usable.

We built a [simple CodePen prototype](https://codepen.io/surfbird/full/vYjxQWy) representing a “one thing per page” approach for contact information, and asked users to review it as time allowed at the end of sessions (we ended up having time in all 11 sessions). 

No one commented on noticing they were going to a new page or staying on the same page without being prompted. Once prompted, 8 participants stated they had not noticed they were going to a new page in the prototype, and shared their thoughts about the different approaches:

- 2 participants stated they preferred the one-thing-per-page approach of the prototype, 4 participants preferred to be on one page, and 5 had no preference.

> It didn’t make a difference that it went to another page because my focus was just on updating the information. - P1

> It just feels more cohesive when everything’s on one screen. - P8

- Both participants who preferred the one-thing-per-page prototype said they preferred it because it felt simpler. This is likely due to the fact that the participants didn’t encounter any alerts like they did on VA.gov

> I feel like I If they were more steps to take in the other website [VA.gov] where this [prototype] feels a a little more concise and easier to me. - P3

> It’s not as complicated as the other page [VA.gov], you know, having to do this and push this button and that button. It’s just a lot simpler. - P10

- 3 participants shared concerns that loading a new page would negatively impact internet bandwidth.

*Labels: Accessibility, AUD: Veterans, HDW: Smartphone, HDW: Laptop, PRDT: VA.gov Profile, RESRCH: Evaluative, RESRCH: Remote, RESRCH: Usability, SFTW: Screenreader, SFTW: Website, SPG: Blind/Visually Impaired,  SPG: Cognitive Consideration*

# Additional Insights
### Some participants had a hard time reading content due to the font size
8 of the 11 participants in our study require some kind of font resizing or magnification to use the internet. 4 of them made comments related to legibility because of our font style (size and/or color). 

> Well, no, everything is blurry when I take off my glasses and my magnifier away. So it just takes me a minute to to do it, because the the font is so small - P1

> With the the pop up [modal], “you're currently adding a home phone number” That's good easy for me to see, because it's [heading] bigger and is bold. But the smaller grayer letters underneath are a little less legible. And I can't zoom in on those in this pop up. - P6

### The lack of a save or submit button on notification settings presented a minor problem for 2 participants.
- One did not feel confident their changes would be saved without a submit button 
> I guess I’m looking for like some kind of submit. Because right? Like, where do I go from here to confirm that I've made these updates and changes, and that this is what I want? - P3

- The other participant, a screenreader user, shared concerns about auto-saving leaving users with no way to clear or cancel a selection if they had done something by mistake.
> The only thing I didn’t like about that is that I would like the option to save it myself. Here, if you accidentally hit the space bar or whatever, it changes it whether you really wanted it to or not.  - P11, screenreader user

### Screenreader users felt profile was generally easy to use and didn’t encounter any major points of confusion.

This is a huge win! We’ve worked hard on accessibility and it’s encouraging to hear feedback from screenreader users who are not on our VA.gov team.


## Recommendations
### Don’t redesign the VA.gov profile to use a one-thing-per-page pattern.
    * All participants were able to use our existing pattern to update their information with this pattern major hurdles.
    * We didn’t see a significant improvement in the ability for people to update their information in the prototype over our website. 
    * At this time, we don’t have enough data to suggest that one-thing-per-page would be easier for people with cognitive or vision considerations.

### Work with the content team to improve our button labels.
- 5 of 11 people experienced hesitation and/or confusion over which button to choose when presented with a pair.
- There are opportunities to be more consistent with our language and make options clearer to Veterans.

### Review analytics around our “currently editing another section” alert.
- 4 of 11 participants triggered this by quickly moving on to a new section before an update had finished saving. This caused some confusion, as well as a rushed response to the address validation prompts.
- If analytics show a similar percentage of users encounter this alert in sessions (~36%), we should consider how we might prevent this from happening in the first place.
   
### Explore how we might simplify the address validation flow, and review address validation analytics to see if quantitative data can corroborate what we observed in the study.
    * The current UX wasn’t totally intuitive for 5 out of 11 people, and we already know it needs some accessibility improvements. There’s clearly room for a better UX with this flow.
    * Analytics could help us determine if what we saw in the study is indicative of a larger pattern.
    * It’s possible some of the issues we saw are due to the facilitation and nature of being in a moderated research session.

### Explore solutions to allow people to edit contact information from the notification settings page
- It confused people to have to leave the page, and a few would’ve abandoned the task if they were not in a moderated session
- As we add more channels for notification settings, this will become more critical and complicated

### Improve the visibility of the notification name
- People missed the name of the notification and didn’t understand what they were doing.

## Next Steps
- Review findings with VA.gov profile team and align on recommendations and next steps
- We created some tickets for bugs observed in the studies.
- Present findings to larger VA.gov team


## Further research needed
It would be valuable to explore these research questions in an unmoderated study. It’s likely that some of the behavior and preferences we observed were influenced by the nature of a moderated, task-based interview.

## Appendix

- [Research plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Research/2022-09-profile-editing-evaluation/research-plan.md)
- [Conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Research/2022-09-profile-editing-evaluation/conversation-guide.md)
- [Interview transcripts](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/Research/2022-09-profile-editing-evaluation/session-notes)


### Tools used for Synthesis
[Mural board](https://app.mural.co/invitation/mural/vsa8243/1664275463723?sender=lizlantz1528&key=19066bf4-337c-4dcb-8196-34268562e07f)

### Pages and applications used

- staging.va.gov/profile/contact-information
- [Codepen prototype](https://codepen.io/surfbird/full/vYjxQWy)
	
## Who we talked to 
_Complete the demographic info below using information from the Perigean recruitment survey. For those items where you didn't have participants, please mark with "0". You can use "unknown" if you aren't sure if your participants had a characteristic._ 
_[See an example](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/post-mvp-releases/research/research-findings.md#who-we-talked-to)_

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
