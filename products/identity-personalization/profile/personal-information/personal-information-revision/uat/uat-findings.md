# Personal information UAT Findings

DRAFT

06/22/2022

Christina Gednalske, Profile

- [Background](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/personal-information/personal-information-revision/uat/uat-findings.md##background)
- [Findings Details](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/personal-information/personal-information-revision/uat/uat-findings.md##findings-details)
- [Additional Findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/personal-information/personal-information-revision/uat/uat-findings.md##additional-findings)
- Next Steps
- Appendix


## Background
To mitigate issues around Veterans being addressed improperly at health appointments, our team has added two new fields to the Personal information section of the VA.gov Profile: Preferred name and Gender identity. These changes also allow Veterans to more accurately describe themselves within the VA.

See our [product brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/personal-information/personal-information-revision/README.md) for more details.

### Goals
The primary goal of our UAT is to confirm that the Personal information section functionality works as expected and Veterans can view and update their preferences for Preferred name and Gender identity.

As secondary goals, we’ll follow up on our last [research study](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/personal-information/personal-information-revision/research/research-plan.md) and the subsequent changes made to the designs:
1. We would like to evaluate whether or not Veterans understand what this information is and why we are asking for it.
2. We would like to validate that Veterans understand it is optional to provide this information. 
3. We would like to validate that no major usability hurdles have been introduced during our recent iterations.

### Approach
Summary of how you conducted UAT (include method, and number of participants)
- [UAT research plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/personal-information/personal-information-revision/uat/research-plan.md)
- [UAT conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/personal-information/personal-information-revision/uat/conversation-guide.md)

## Findings details
UAT went smoothly and no significant findings were uncovered to prevent launch. 

### Functionality:
All page elements functioned as expected. 

### UI: 
FAQs and hint text appeared much larger than they should have for a participant using a specific Android mobile device. The team is working on this post-launch. (Link to GitHub issue)

### Usability:
Participants were able to update their information easily and quickly. 

## Additional Findings

### Finding #1
**Participants had positive responses to the new fields.** 
- 6/7 had very positive responses upon viewing the page. 
- The remaining participant thought it was fine and understood why these fields were needed. 

_**Next step:** None_

### Finding #2
**Participants felt VA asks for this information to make Veterans feel comfortable and to minimize confusion.** 
- Some initially felt it was for medical rather than social reasons, and one felt it was also to contribute to demographic data. 
- All participants understood the health care aspect once they read more information about the fields, with a few wording elements that could be clarified.

_**Next step:** None_

### Finding #3
**Participants had trouble noticing the hint text component but noticed the FAQ dropdown fairly easily.** 
- 5/7 participants DID NOT notice the Preferred name hint text when first asked to look at the page for more information. 
	- 3 of these 5 participants later noticed this when looking at individual fields
	- 2 participants still didn’t notice it when looking at the individual fields
	- The remaining 2 participants also didn’t notice the drop down when first looking at the page, or when looking at the individual fields.

- 5/7 participants DID notice the Gender identity dropdown when first looking at the page
	- Two participants suggested using a similar dropdown in Preferred name as well. 

_**Next step:** Confirm that Preferred name hint text is sufficient and dropdown is not needed. [Link to GH issue]_

### Finding #4
**6/7 participants understood that the fields were NOT required.** 

Main reasons:
- (3/7) they didn't see anything stating the fields were required
- (3/7) in comparison, date of birth was required and could not be edited 
- (2/7) the gender identity dropdown information saying "if you would like to share"
- (2/7) the fields could be edited

_**Next step:** None_

### Finding #5
**All participants updated their information for both Preferred name and Gender identity.** 
- One participant (transgender) said they would need to think about the pros and cons of identifying with a specific Gender identity and chose “Prefer not to answer”

**Next step:** None

### Finding #6
**All participants were ok with not being able to remove information. However, 6/7 said it would be helpful to have the option to do so.**

_**Next step:** When technically possible, add Remove button to give Veterans more autonomy over selctions, particularly because some participants already had their Gender identity information auto-filled (see Finding #12)[Link to GH issue]_

### Finding #7
**Preferred name field: All participants had a positive response to the Preferred name field and found the information to be clear, useful, and the field easy to use.**
- 2 mentioned that using a preferred name is important for comfort within their interaction with VA 
- Reasons for use of Preferred name including nicknames or alternative versions of names, name changes, and correcting mistakes

_**Next step:** None_

### Finding #8
**Preferred name field: 2 participants mentioned that restrictions for how to enter Preferred name - such as character maximum and not allowing special characters or capitalization - could cause issues for Veterans.**

_**Next step:** Identify if character max or characters allowed can/should be changed for Preferred name. [Link to GH issue]_

### Finding #9
**Gender identity: Participants had a positive response to Gender identity and had no trouble updating their information, but had suggestions for how the field could be further improved.** 
- 2 participants noted that being able to write in an option for Gender identity would be important to a lot of people
- A transgender participant noted that the alphabetical order of the Gender identity selections may not be the best way to sort them. This participant also mentioned that transgender man/woman felt clunky and that normally people just say trans.

_**Next step:** Continue to work towards adding a text input field for Gender identity - reliant on API - and possibly consider revisiting order of terms listed. [Link to GH issue]_

### Finding #10
**Participants found the information included in the FAQ dropdowns relatively clear.**
- 2 participants were concerned with VA visibility and would like more information on who can view this information.
- 3 participants wondered why the NCM would need to see gender identity, but did not have a negative view on this
- 1 participant thought more information should be included for how to update their gender identity with their health care team and to define the “healthcare team” 

_**Next step:** Determine if any additional information is needed - return to discuss about Resources & Support article. [Link to GH issue]_

### Finding #12
**A Gender identity selection was already made for 2 participants who had not yet visited the page.**

_**Next step:** Determine how this factors into the inability to fully remove information once entered. [Link to GH issue]_ 

### Finding #13
**3 participants expressed a desire for the additional fields: Pronouns and Sexual orientation**. 
- 2 conveyed the need for Pronouns
- 1 requested Sexual orientation

_**Next step:** Continue work to add Pronouns and Sexual orienation once approved - pending PRA approval. [Link to GH issue]_

### Finding #14
**Some participants did not notice the FAQs at the top of the page.**
- All found them clear once they went through them
- One participant in the process of changing their legal name found this FAQ placement and information extremely helpful

_**Next step:** None_

### Finding 15
**All participants who tested the latency issue (3) found it confusing, but said they would not normally refresh the page this way.**

_**Next step:** Resolve latency issue (in progress) [Link to GH issue]_

## Next Steps:
1. _(Main finding)_ Resolve bugs shown on Android mobile device. 
2. _(#3)_ Confirm that Preferred name hint text is sufficient and dropdown is not needed. 
3. _(#6)_ When technically possible, add Remove button to give Veterans more autonomy over selctions, particularly because some participants already had their Gender identity information auto-filled (see Finding #12). 
4. _(#8)_ Identify if character max or characters allowed can/should be changed for Preferred name.  
5. _(#9)_ Continue to work towards adding a text input field for Gender identity - reliant on API - and possibly consider revisiting order of terms listed. 
6. _(#10)_ Determine if any additional information is needed - return to discuss about Resources & Support article. 
7. _(#13)_ Continue work to add Pronouns and Sexual orienation once approved - pending PRA approval.  
8. _(#15)_ Resolve latency issue (in progress).  


## Appendix
[Research plan](link here)
[Conversation guide](link here)
[Interview transcripts](link here)

### Tools used for Synthesis
[Mural Board](https://app.mural.co/t/vsa8243/m/vsa8243/1654721796209/c2e42a35ff78fe654a47f027581d7b20c2546a5f?invited=true&sender=u28f508d646c449cc1afe4873)  

### Pages and applications used
Link to pages that were tested

### Who we talked to 
_Complete the demographic info below using information from the Perigean recruitment survey. For those items where you didn't have participants, please mark with "0". You can use "unknown" if you aren't sure if your participants had a characteristic._ 
_[See an example](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/post-mvp-releases/research/research-findings.md#who-we-talked-to)_

**Recruitment criteria**

_If you had specific criteria that you recruited for, use this space to explain what those were along with other information you feel would be important to understanding your participants._

We talked to **x participants.**

Audience segment:
* Veterans: 6 
* Caregivers: x 
* Family members of a Veteran: 1  


Gender:
* Male: 1 
* Female: 1 
* Transgender: 1 
* Nonbinary, gender fluid, gender queer, Two-Spirit (Indigenous only), or another gender beyond man or woman: 3 (4?)
* Gay, lesbian, or bisexual: 1 (unknown)


Devices used during study: 
* Desktop: 6 
* Tablet: x 
* Smart phone: 1 
* Assistive Technology: 1


Age:
* 25-34: 1
* 35-44: 2
* 45-54: 1
* 55-64: 2
* 65+: 1
* Unknown: x


Education:
* High school degree or equivalent: 1
* Some college (no degree): 2
* Associate's degree, trade certificate or vocational training: 1
* Bachelor's degree: 1
* Master's degree: 2
* Doctorate degree: x
* Unknown: x


Geographic location:
* Urban: x
* Rural: x
* Unknown: 7


Race:
* White: 2
* Black: 1
* Hispanic: 
* Biracial: 2
* Asian: x
* Native: x


Disability and Assistive Technology (AT):
* Cognitive: 3
* AT beginner: x
* AT advanced user: x
* Desktop screen reader: x
* Mobile screen reader: x
* Magnification/Zoom: x
* [Speech Input Technology](https://www.w3.org/WAI/perspective-videos/voice/) like Siri/Dragon Naturally Speaking: x
* Hearing aids: 1
* Sighted keyboard: x
* Captions: x
* Prosthetic voice box: 1


### Underserved groups we haven’t talked to 

_[Complete the VA recruitment checker for marginalized Veteran groups](https://docs.google.com/spreadsheets/d/1pq7TSHZonfpzAQBJj6B2geGHlNUwZEs4DzEvxcRgu0o/edit#gid=1221033726)_

This research does not include the perspectives of the following marginalized Veteran groups:
_List all groups in red from the spreadsheet_
* Asian and Native participants
* Group 2
* Group 3

_[insert screenshot of completed recruitment checker]_
![VA-recruitment-checker](link - add image to github folder and link here with .png)
