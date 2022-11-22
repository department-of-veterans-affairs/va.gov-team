# Profile Editing Research Findings 

**Office of the CTO - Digital Experience (OCTO-DE), VA.gov Profile, Authenticated Experience**

10/17/2022

Liz Lantz, liz.lantz@adhocteam.us

Research Report PDF to come

**Jump to:**
- [Hypotheses and conclusions](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Research/2022-09-profile-editing-evaluation/findings-summary.md#hypotheses-and-conclusions)
- [Key findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Research/2022-09-profile-editing-evaluation/findings-summary.md#key-findings)
- [Details of findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Research/2022-09-profile-editing-evaluation/findings-summary.md#details-of-findings)
- [Recommendations](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Research/2022-09-profile-editing-evaluation/findings-summary.md#recommendations)
- [Further research needed](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Research/2022-09-profile-editing-evaluation/findings-summary.md#further-research-needed)
- [Who we talked to](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Research/2022-09-profile-editing-evaluation/findings-summary.md#who-we-talked-to)


## Research Goals
The VA.gov profile is a self-service tool for Veterans to manage their personal information, which is valuable at all stages of the Veteran journey. 

Accessibility specialists have been advocating for a “one thing per page” pattern for VA.gov forms for the last year. This pattern is known to improve the usability for complex forms by reducing cognitive load, improving error messages, reducing load times and more.

The profile time wanted to determine if there are user problems in the profile’s relatively simple forms that could be solved by a “one thing per page” pattern. To do this, we needed to identify any usability problems that might be solved by this approach.

Our specific goals were to:

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
1. 9 of 11 participants were able to update a VA.gov profile with in-line editing with relative ease. ([Link](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Research/2022-09-profile-editing-evaluation/findings-summary.md#9-of-11-participants-were-able-to-update-a-vagov-profile-with-in-line-editing-with-relative-ease))
2. 5 of 11 participants experienced some minor confusion during the address validation process. ([Link](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Research/2022-09-profile-editing-evaluation/findings-summary.md#2-5-of-11-participants-experienced-some-minor-confusion-during-the-address-validation-process))
3. In the contact information section, we observed some usability hurdles that slowed multiple people down. ([Link](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Research/2022-09-profile-editing-evaluation/findings-summary.md#3-in-the-contact-information-section-we-observed-some-usability-hurdles-that-slowed-multiple-people-down))
4. Participants were not bothered by encountering multiple alerts when updating contact information, though it took some longer than others to comprehend the information. ([Link](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Research/2022-09-profile-editing-evaluation/findings-summary.md#4-participants-were-not-bothered-by-encountering-multiple-alerts-when-updating-contact-information-though-it-took-some-longer-than-others-to-comprehend-the-information))
5. 6 of 11 participants were disrupted by having to leave the notification settings page to add a mobile number. ([Link](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Research/2022-09-profile-editing-evaluation/findings-summary.md#5-6-of-11-participants-were-disrupted-by-having-to-leave-the-notification-settings-page-to-add-a-mobile-number))
6. 5 participants missed the “Board of Veteran’s Affairs Hearing Reminder” notification name, which led to a misunderstanding about what the notification was for. ([Link](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Research/2022-09-profile-editing-evaluation/findings-summary.md#6-5-participants-missed-the-board-of-veterans-affairs-hearing-reminder-notification-name-which-led-to-a-misunderstanding-about-what-the-notification-was-for))
7. 9 of 11 participants, including screenreader users, found in-line editing and a “one thing per page” approach to be equally usable. ([Link](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Research/2022-09-profile-editing-evaluation/findings-summary.md#7-9-of-11-participants-including-screenreader-users-found-in-line-editing-and-a-one-thing-per-page-approach-to-be-equally-usable))

## Details of Findings 
### 1) 9 of 11 participants were able to update a VA.gov profile with in-line editing with relative ease.

We started our sessions by asking participants to update sections on the contact information page. All participants intuitively understood how to go from “read-only” to “edit” mode, to complete forms, and to save their changes. 

All but 1 participant easily navigated the longer address form. The 1 participant who did not had mistakenly checked the “I live on a United States military base” without realizing it and got  confused by the corresponding form fields.

Notably, the “alert followed by a modal” pattern that can occur in a couple of edge-case flows did not cause confusion or prevent any participant from successfully completing their task.

---

### 2) 5 of 11 participants experienced some minor confusion during the address validation process.

All participants triggered the address validation alert (some naturally, others with guidance), and were able to make a selection and move forward. However, the entire process was not intuitive for 5 participants, as follows:

- 2 participants who triggered the “confirm your address” validation message attempted to move onto another section without confirming their address.
- A screenreader participant encountered and used the edit button before the “use this address” and “cancel” buttons, unaware of all possible options.
- 3 participants did not see the edit buttons and weren’t sure how to edit their entry.

<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/images/address-validation-edit-buttons.png" alt="Screenshot of address validation UI, where edit buttons that are styled to look like links are embedded in a paragraph, and under a radio button option" width="320" />

> **Moderator**: How would you go back and change what you entered?
> 
> **P6**: I think if I click “update”, it should take me back.
> 
> **Moderator**: Take you back to edit the information?
> 
> **P6**: Yes, I think so.
>
> **Moderator**: Go ahead and try that.
> 
> **P6**: *clicks update button, form saves and returns to initial view* Oh. No. That didn’t do it.

---

### 3) In the contact information section, we observed some usability hurdles that slowed multiple people down.

The hurdles we observed were experienced by a minority of participants, but it’s important to note trouble spots that came up in our sessions. We hypothesized that Veterans with more severe cognitive considerations or less familiarity with technology would struggle more than those who successfully participated in remote usability testing.

Specific hurdles included:

- 4 participants didn’t realize their update hadn’t finished saving, and quickly moved onto another section, triggering the “you are currently editing” modal.  
	- 2 of these participants had also triggered the address validation alert without realizing it, and then confirmed the update without reading the alert content. 
	- It is possible they were rushing more than they normally would if they had been completing this task out of a real need to update contact info.
- Some button labels made 5 participants feel uncertain about which button to select to move forward with their task.  
> See how [the button] has “Yes, remove my information?” I think it should the cancel should be maybe “cancel and save”. Because I think the cancel could be interpreted as cancel what I just did, too, like it feels too similar to remove. - P3

- 3 participants, 2 of which were blind screenreader users, missed the remove button and expected to be able to remove contact information by clicking “Edit”, clearing the form field, and saving an empty form. All had to be guided by the moderator to find the remove button.

> If I did [hear the remove button read aloud], I forgot it. I would’ve been stuck there for a minute because to me, if I edit it [the form] and blank it out, and update it, that to me is the same as removing it.  - P11, screenreader user.

---

### 4) Participants were not bothered by encountering multiple alerts when updating contact information, though it took some longer than others to comprehend the information.

Though our team has hypothesized encountering multiple alerts when updating contact information would be frustrating, we observed the opposite during these sessions. Even when people triggered an address validation flow that was immediately followed by 2 different modal messages, they didn’t express any frustration about the modals or alerts.

- No participants expressed annoyance or frustration at encountering multiple alerts in a brief period of time. 
- 2 participants took more time than the other 9 participants to comprehend the content. They had to re-read the information in alerts with longer content before feeling confident about moving on.

> Well, a lot of things I have to read again. My sight is changing, and even though I have on glasses, sometimes I have to read things over just to be sure. Cause I’m elderly! I have to read things over and over sometimes, you know, to be certain. - P10

- 4 participants stated specific reasons they felt the alerts were valuable:

> Sometimes, we could get distracted, and these are great reminders of like, “Hey, you’re about to go in this area to do this thing”, and maybe I didn’t mean to go there.  I think the reminders are helpful. - P3

- We observed some participants moving too quickly to read the content in the alerts, though we should consider this could be due to the absence of any real risk in updating a fake profile.

---

### 5) 6 of 11 participants were disrupted by having to leave the notification settings page to add a mobile number.
It made sense to participants that they needed to add a mobile number before updating text message settings. They intuitively clicked the “Add a mobile number to your profile” link in the alert, which sent them directly to the mobile phone number section on the contact information page. 

Once on the contact page, the user flow requires the user to add a mobile number, and follow a link in the confirmation message to return to notification settings (screenshot below). The next steps confused some participants.

<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/images/notifications-add-mobile-number.png" alt="notification user flow showing the steps described in the next preceding this image" />

#### Specific points of confusion
- 3 participants did not realize the mobile phone number was in view (or the focus halo on the edit button). They spent time scrolling up and down the page looking for the mobile number field.
- 6 participants did not see the “manage text notifications” link in the save confirmation alert and either:
	- Scrolled up and down trying to figure out what to do next, eventually realizing they needed to navigate back to notification settings.
	-  Assumed they were now opted into notifications and didn’t need to do anything else.

> That little piece that says, “go ahead and update notifications now” -  it just totally went right past me. I totally just missed it. Maybe if it  jumped out at me, or had a big stop sign or something I probably would notice, but had you not said something, I would have missed it and thought “Okay, I’m good.” - P1

- A participant with cognitive challenges experienced a 5 second external disruption after landing on the page. [Download this redacted video clip](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/images/cognitive-consideration-redacted.mov) and observe that they could not recall what they were supposed to do after they focused back on the research session. Then, they went back and forth 3 times between the two pages to try to figure out what to do.  

**Once participants got back to the notification settings page, they found the radio button interface easy to use.**

---

### 6) 5 participants missed the “Board of Veterans’ Affairs Hearing Reminder” notification name, which led to a misunderstanding about what the notification was for.

These participants assumed the notification was for “Applications, claims, decision reviews, and appeals”, which is the name of the notification group. 

<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/images/notification-setttings-ui.png" alt="Screenshot of notification settings UI showing the Board of Veterans Affairs Hearing Reminder heading nested between an h3 and radio buttons" width="320" />

> **Moderator:** For this one that you just set up - what kind of notification will you get? 
>
> **P7:** I would think…let's say my application has been submitted. For claims, I would imagine that I would receive a text message, saying, “You have submitted your claim for disability compensation.” Maybe I would also receive a text message when a compensation and pension appointment has been scheduled, or when it moves from one phase to the next. Maybe if now it is being moved to a reviewer to decide, I would think that maybe I would receive a text message about that, and what final decision has been made.

> What I can see is that [hesitates] this is about any correspondence about anything having to do with VA as far as any of those. Applications, financial decisions, reviews, and appeals. So all correspondence about that, I believe. But then there's this board of veterans of affairs hearing reminder thing and I’m like, wait. What's that about? - P8

---

### 7) 9 of 11 participants, including screenreader users, found in-line editing and a “one thing per page” approach to be equally usable.

We built a [simple CodePen prototype](https://codepen.io/surfbird/full/vYjxQWy) representing a “one thing per page” approach for contact information, and asked users to review it as time allowed at the end of sessions (we ended up having time in all 11 sessions). 

No one commented on noticing they were going to a new page or staying on the same page without being prompted. Once prompted, 8 participants stated they had not noticed they were going to a new page in the prototype, and shared their thoughts about the different approaches:

- 2 participants stated they preferred the one-thing-per-page approach of the prototype, 4 participants preferred to be on one page, and 5 had no preference.

> It didn’t make a difference that it went to another page because my focus was just on updating the information. - P1

> It just feels more cohesive when everything’s on one screen. - P8

- Both participants who preferred the one-thing-per-page prototype said they preferred it because it felt simpler. This is likely due to the fact that the participants didn’t encounter any alerts like they did on VA.gov

> I feel like I If they were more steps to take in the other website [VA.gov] where this [prototype] feels a a little more concise and easier to me. - P3

> It’s not as complicated as the other page [VA.gov], you know, having to do this and push this button and that button. It’s just a lot simpler. - P10

- 3 participants shared concerns that loading a new page would negatively impact internet bandwidth.


## Additional Insights
### 4 participants had a hard time reading content due to the font size.

8 of the 11 participants in our study require some kind of font resizing or magnification to use the internet. 4 of them made comments related to legibility because of our font style (size and/or color).  Larger, bolder fonts were easier for them to read.

> Everything is blurry when I take off my glasses and my magnifier away. So it just takes me a minute to to do it, because the the font is so small - P1

> With the the pop up [modal], “you're currently adding a home phone number” That's good easy for me to see, because it's [heading] bigger and is bold. But the smaller grayer letters underneath are a little less legible. And I can't zoom in on those in this pop up. - P6

---

### The lack of a save or submit button on notification settings presented a minor problem for 2 participants.
- One did not feel confident their changes would be saved without a submit button 
> I guess I’m looking for like some kind of submit. Because right? Like, where do I go from here to confirm that I've made these updates and changes, and that this is what I want? - P3

- The other participant, a screenreader user, shared concerns about auto-saving leaving users with no way to clear or cancel a selection if they had done something by mistake.
> The only thing I didn’t like about that is that I would like the option to save it myself. Here, if you accidentally hit the space bar or whatever, it changes it whether you really wanted it to or not.  - P11, screenreader user

---

### The two screenreader users we talked to didn’t encounter any major points of confusion in profile, and felt it was generally easy to use.

We’ve worked hard on accessibility and it’s very encouraging to hear feedback from Veterans who use screen readers. 

> This site is actually pretty clear. It’s as clear as it can be. Nothing is ever going to be perfect, because what one person likes another person might not. One thing I will tell you is because a lot of times, on a lot of websites, those alerts don’t read. In other words, JAWS doesn’t hear that alert. And if JAWS didn’t hear that alert, I wouldn’t know that it had saved. It. But you’ve got it set up so that it does.  That’s the thing with screenreader technology you have to be sure the alerts get focus so they read out loud. - P11

---

### One participant with cognitive considerations struggled to complete tasks that required multiple pages or modal disruptions.

P9 exhibited signs of short term memory loss, and: 
- struggled to stay on task when having to go from one page to another, such as adding a mobile phone number while updating notification settings.  
- struggled to recall to navigate from page to page, despite having already used the navigation menu in the setting.
- repeatedly triggered the same modal, seemingly unsure how to resolve the problem.

## Recommendations
### For primary editing functionality, continue using the single page editing pattern that is in place today.
 (Supported by [finding 1](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Research/2022-09-profile-editing-evaluation/findings-summary.md#1-9-of-11-participants-were-able-to-update-a-vagov-profile-with-in-line-editing-with-relative-ease), [finding 4](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Research/2022-09-profile-editing-evaluation/findings-summary.md#4-participants-were-not-bothered-by-encountering-multiple-alerts-when-updating-contact-information-though-it-took-some-longer-than-others-to-comprehend-the-information), [finding 7](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Research/2022-09-profile-editing-evaluation/findings-summary.md#7-9-of-11-participants-including-screenreader-users-found-in-line-editing-and-a-one-thing-per-page-approach-to-be-equally-usable))

- All participants were able to use our existing pattern to update their information with no major hurdles.
- We didn’t see a significant improvement in the ability for people to update their information in the prototype over our website.  Those who found  the prototype easier commented on its simplicity, but the prototype didn’t include realistic alerts/warnings that would need to be in place on a live website.
 - At this time, we don’t have enough data to suggest that one-thing-per-page would be easier for people with cognitive or vision considerations. If we want to test this in the future, we should build out a more realistic prototype to more confidently evaluate how one-thing-per-page impacts usability.


### Improve the user experience for buttons in profile.
(Supported by [finding 2](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Research/2022-09-profile-editing-evaluation/findings-summary.md#2-5-of-11-participants-experienced-some-minor-confusion-during-the-address-validation-process), [finding 3](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Research/2022-09-profile-editing-evaluation/findings-summary.md#3-in-the-contact-information-section-we-observed-some-usability-hurdles-that-slowed-multiple-people-down))
 
- 5 of 11 people experienced hesitation and/or confusion over which button to choose, which demonstrates here are opportunities to be more consistent with our language and make options clearer to Veterans.
	- 2 expected “save” instead of “update” - consider reevaluating why we chose “update”
	- Reevaluate the labels on button pairs in the cancel confirmation modal, and the remove modal
- Both screenreader users missed the “remove” button and didn’t expect it to be there. We should consult with our accessibility specialists to learn how we might improve this experience.

### Review analytics around our “currently editing another section” alert.
(Supported by [finding 3](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Research/2022-09-profile-editing-evaluation/findings-summary.md#3-in-the-contact-information-section-we-observed-some-usability-hurdles-that-slowed-multiple-people-down))

- 4 of 11 participants triggered this by quickly moving on to a new section before an update had finished saving. This caused some confusion, as well as a rushed response to the address validation prompts.
- If analytics show that a similar percentage of users encounter this alert in sessions (~36%), we should consider how we might prevent this from happening in the first place.
   
### Explore how we might simplify the address validation flow, and how to leverage analytics to see if quantitative data support what we observed in the study.
(Supported by [finding 2](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Research/2022-09-profile-editing-evaluation/findings-summary.md#2-5-of-11-participants-experienced-some-minor-confusion-during-the-address-validation-process))

- The current UX wasn’t totally intuitive for 5 out of 11 people, and we already know it needs some accessibility improvements. There’s clearly room for a better UX with this flow.
- Address validation analytics could help us determine if what we saw in the study is indicative of a larger pattern.
- It’s possible some of the issues we saw are due to the facilitation and nature of being in a moderated research session.

### Explore solutions to improve the user experience of managing notification settings when no contact information is on file.
(Supported by [finding 5](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Research/2022-09-profile-editing-evaluation/findings-summary.md#5-6-of-11-participants-were-disrupted-by-having-to-leave-the-notification-settings-page-to-add-a-mobile-number))

- It confused more than half of participants to have to leave the page, and a few would have abandoned the task if they were not in a moderated session.
- As we add more channels for notification settings, this will become more critical and complicated.

### Improve the visibility of the notification name.
(Supported by [finding 6](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Research/2022-09-profile-editing-evaluation/findings-summary.md#6-5-participants-missed-the-board-of-veterans-affairs-hearing-reminder-notification-name-which-led-to-a-misunderstanding-about-what-the-notification-was-for))

- People missed the name of the notification and didn’t understand what they were opting in to (or out of, depending on the session).

### Keep the extreme “short term memory loss” use case at the forefront for future design iterations.
(Supported by [finding 5](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Research/2022-09-profile-editing-evaluation/findings-summary.md#5-6-of-11-participants-were-disrupted-by-having-to-leave-the-notification-settings-page-to-add-a-mobile-number), and [this additional finding](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Research/2022-09-profile-editing-evaluation/findings-summary.md#one-participant-with-cognitive-considerations-struggled-to-complete-tasks-that-required-multiple-pages-or-modal-disruptions))

- Observing P9’s experience of profile was a powerful reminder of the obstacles some Veterans have to overcome to use VA.gov. 
- It’s worth considering how we might learn more about this population to better understand their needs, and use what we learn to inform our work as we iterate on profile.
- Download [the redacted video](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/images/cognitive-consideration-redacted.mov) to observe P9 struggling to understand the next step to update their notification settings.

## Next Steps
- Review findings with VA.gov profile team and align on recommendations and next steps.
- We’ll address bugs observed in the studies.
- Share findings with larger VA.gov team.


## Further research needed
- It would be valuable to explore these research questions in an unmoderated study. It’s likely that some of the behavior and preferences we observed were influenced by the nature of a moderated, task-based interview.
- If we revisit the idea of “one thing per page” in the future, we’ll need to build a more realistic prototype that includes alerts and warnings.
-  We should do more research with folks with extreme short term memory loss to better understand how we can make VA.gov tasks easier for them to complete.

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
We talked to **11 participants.**

### Audience segment
* Veterans: 11 
* Caregivers: 1 
* Family members of a Veteran: 1  


### Gender
* Male: 5 
* Female: 6 


### LGBTQ+
* Transgender: 0 
* Nonbinary, gender fluid, gender queer, Two-Spirit (Indigenous only), or another gender beyond man or woman: 0
* Gay, lesbian, or bisexual: 0

### Devices used during study
* Desktop: 4 
* Tablet: 0 
* Smart phone: 8 
* Assistive Technology: 10

### Age
* 25-34: 1
* 35-44: 3
* 45-54: 2
* 55-64: 1
* 65+: 4
* Unknown: 0


### Education
* High school degree or equivalent: 1
* Some college (no degree): 2
* Associate's degree, trade certificate or vocational training: 1
* Bachelor's degree: 1
* Master's degree: 5
* Doctorate degree: 1
* Unknown: 0


### Geographic location
* Urban: 7
* Rural: 4
* Unknown: 0


### Race
* White: 2
* Black: 7
* Hispanic: 1
* Biracial: 0
* Asian: 1
* Native: 0

### Disability and Assistive Technology (AT)
* Cognitive: 10
* AT beginner: 0
* AT advanced user: 9
* Desktop screen reader: 2
* Mobile screen reader: 1
* Magnification/Zoom: 8
* [Speech Input Technology](https://www.w3.org/WAI/perspective-videos/voice/) like Siri/Dragon Naturally Speaking: 0
* Hearing aids: 0
* Sighted keyboard: 0
* Captions: 0


## Underserved groups we haven’t talked to 

This research does not include the perspectives of the following marginalized Veteran groups:
* Expats
* Members of the LGBTQ+ community
* Beginner AT users
* People who use the following assistive technology:   
	* Speech Input Tech (Siri, Dragon) 
	* Hearing Aids
	- Sighted Keyboard
	- Captions
	- Switch Device
	- Braille Reader


https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/images/2022-09-profile-editing-recruitment-equality.png

![VA recruitment checker report](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/images/2022-09-profile-editing-recruitment-equality.png)
