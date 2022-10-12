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
We conducted this research through moderated sessions over Zoom. We asked participants to update profile information in a test account on VA.gov, and also review a prototype.

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
	* Likely true

## Key Findings


## Details of Findings 

_For each finding, list details with supporting quotes and images when possible. Please **add relevant keywords/labels to your findings** selected from the [research repository label list](https://github.com/department-of-veterans-affairs/va.gov-research-repository/labels?page=1&sort=name-asc). Adding keywords/labels to your findings will help others find research relevant to their work._

### The majority of participants were able to update a VA.gov profile with in-line editing with relative ease.

We started our sessions by asking participants to update sections on the contact information page. All participants intuitively understood how to go from read-only to edit mode, complete forms and save their changes. The participants who actually read the alert content easily understood what it meant.

### 5 of 11 participants experienced some minor confusion during the address validation process.

All participants triggered the address validation alert (some naturally, others with guidance), and were able to make a selection and move forward. However, the entire process was not intuitive for 4 participants:
- 2 participants who triggered the “confirm your address” validation message attempted to move onto another section without confirming their address
- 3 participants did not see the edit buttons and weren’t sure how edit their entry
- A screenreader participant encountered the edit button before the “use this address” and “cancel” buttons, and went back to edit before understanding all possible options.


### In the contact information section, we observed some usability hurdles in that slowed multiple people down.

The hurdles we observed were experienced by a minority of participants, but it’s important to note trouble spots that came up in our sessions. We hypothesize that Veterans with more severe cognitive considerations or less familiarity with technology would struggle more than those who successfully participated in remote usability testing.

- 4 participants didn’t realize their update hadn’t finished saving, and quickly moved onto another section.  2 of these participants had triggered the address validation alert and then confirmed the update without reading the alert content. It is possible they were rushing more than they normally would if they had been completing this task because they had a real need to do so.
- 5 participants felt uncertain about which button to select to move forward with there task, when multiple buttons were present:
	- 2 participants expected to see “Save” instead of “Update” at the bottom of a form
	- We observed 2 participants hesitate and take more time (compared to other tasks they completed) when choosing between “Continue editing” or “Cancel” in the confirmation alert that appeared when they hit “Cancel” with unsaved changes.
	- 1 participant was confused by the buttons in the alert confirming removal of information.
> See how [the button] has “Yes, remove my information?” I think it should the cancel should be maybe “cancel and save”. Because I think the cancel could be interpreted as cancel what I just did, too, like it feels too similar to remove. - P3

TK: insert screenshot of buttons

- 3 participants, 2 of which were blind screenreader users, missed the remove button and expected to be able to remove contact information by clicking “Edit”, clearing the form field, and saving an empty form. All had to be guided by the moderator to find the remove button.

> If I did [hear the remove button read aloud], I forgot it. I would’ve been stuck there for a minute because to me, if I edit it [the form] and blank it out, and update it, that to me is the same as removing it.  - P11, screenreader user.
	
- 




### Most participants, including screenreader users, found little difference between in-line editing and a “one thing per page” approach and found them to be equally usable.

- No one commented on noticing they were going to a new page or staying on the same page without being prompted. Once prompted, 8 participants stated they had not noticed they were going to a new page in the prototype.
- 2 participants stated they preferred the one-thing-per-page approach of the prototype, 4 participants preferred to be on one page, and 5 had no preference.

> It didn’t make a difference that it went to another page because my focus was just on updating the information. - P1

> It just feels more cohesive when everything’s on one screen. - P8

- Both participants who preferred the one-thing-per-page prototype said they preferred it because it felt simpler. This is likely due to the fact that the participants didn’t encounter any alerts like they did on VA.gov

> I feel like I If they were more steps to take in the other website [VA.gov] where this [prototype] feels a a little more concise and easier to me. - P3

> It’s not as complicated as the other page [VA.gov], you know, having to do this and push this button and that button. It’s just a lot simpler. - P10

- 3 participants shared concerns that loading a new page would negatively impact internet bandwidth.


Labels: Accessibility, AUD: Veterans, HDW: Smartphone, HDW: Laptop, PRDT: VA.gov Profile, RESRCH: Evaluative, RESRCH: Remote, RESRCH: Usability, SFTW: Screenreader, SFTW: Website, SPG: Blind/Visually Impaired,  SPG: Cognitive Consideration


### Most participants found all the alerts and modals they encountered to be useful.

Labels: Accessibility, AUD: Veterans, DSC: Alert boxes, HDW: Smartphone, HDW: Laptop, PRDT: VA.gov Profile, RESRCH: Evaluative, RESRCH: Remote, RESRCH: Usability, SFTW: Screenreader, SFTW: Website, SPG: Blind/Visually Impaired,  SPG: Cognitive Consideration

- No participants were bothered or slowed down by encountering these alerts as they updated contact information.
- Many commented they were helpful and would prevent a mistake.
- Some participants moved too quickly to read the content in the alerts.

### The notification settings interface was intuitive for most participants, but the user flow and notification labels were confusing.

Labels: label 1, label 2 


- All but 2 participants understood the radio button options and that the update saved without clicking a button.
	- One participant landed on the page and was immediately confused by the lack of a button, and that a radio button was already selected.
	- A screen reader participant expected a checkbox instead of a radio button and did not realize there were 2 options until prompted to look more.
- The process of adding a mobile number and then updating notification settings was not intuitive for most participants. 
	- Many missed the “manage text notifications” link in the confirmation box and weren’t sure how to get back without guidance.
	- Some thought by adding a mobile number, they had updated their notification settings and had completed the process.

> That little piece that says, “go ahead and update notifications now” -  it just totally went right past me. I totally just missed it. - P1

- 5 of 11 missed the “Board of Veterans’ Appeals hearing reminder” label, and thought the notification was about Applications, Claims, and Decision Reviews

> Once I [update my setting], I can receive notifications on applications claims, decisions, and appeals. 


# Additional Insights
_Any additional insights that aren't "key findings." These can be powerful comments from users that don’t represent a pattern in this study, but may be part of one outside this study._

### Some participants had a hard time reading content due to the font size
8 of the 11 participants in our study require some kind of font resizing or magnification to use the internet. 4 of them commented on the legibility of our font size:

> Well, no, everything is blurry when I take off my glasses and my magnifier away. So it just takes me a minute to to do it, because the the font is so small - P1

# Recommendations

_Put together initial recommendations here based on your findings along with supporting evidence. Review with your team, then edit as needed._

* Recommendation 1
    * _Supporting evidence_
* Recommendation 2
    * _Supporting evidence_


# Next Steps

_Next steps here. Include owners if appropriate._


# Further research needed

_If there are demographics that were not included in this study or you discovered that more research should be done, make note of that here._


# Appendix

[Research plan](link here)

[Conversation guide](link here)

[Interview transcripts](link here)


## Tools used for Synthesis

e.g. mural boards, etc.  


## Pages and applications used

Link to prototypes or pages that were tested


## Other supporting documents created

e.g. user flows, personas, etc.


## Secondary research

Include any secondary research you may have. 

E.g. web analytics, ForeSee data, SME interviews, competitive analysis, or other relevant research studies.


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
