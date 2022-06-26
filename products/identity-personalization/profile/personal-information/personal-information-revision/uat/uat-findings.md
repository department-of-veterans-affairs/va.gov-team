# Personal information UAT Findings

06/22/2022

Christina Gednalske, Profile

- [Background](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/personal-information/personal-information-revision/uat/uat-findings.md##background)
- [Findings Details](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/personal-information/personal-information-revision/uat/uat-findings.md##findings-details)
- [Additional Findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/personal-information/personal-information-revision/uat/uat-findings.md##additional-findings)
- [Next Steps](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/personal-information/personal-information-revision/uat/uat-findings.md##next-steps)
- [Appendix](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/personal-information/personal-information-revision/uat/uat-findings.md##appendix)


## Background
To mitigate issues around Veterans being addressed improperly at health appointments, our team has added two new fields to the Personal information section of the VA.gov Profile: Preferred name and Gender identity. These changes also allow Veterans to more accurately describe themselves within the VA.

See our [product brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/personal-information/personal-information-revision/README.md) for more details.

### Goals
The primary goal of our UAT was to confirm that the Personal information section functionality works as expected and Veterans can view and update their preferences for Preferred name and Gender identity.

As secondary goals, we followed up on our last [research study](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/personal-information/personal-information-revision/research/research-plan.md) and the subsequent changes made to the designs:
1. We evaluated whether or not Veterans understood what this information is and why we are asking for it.
2. We validated that Veterans understood it is optional to provide this information. 
3. We validated that no major usability hurdles were introduced during our recent iterations.

### Approach
We conducted remote, moderated interviews using Zoom with 7 participants. The sessions were moderated using VA.gov. We had participants go through a list of specific tasks for UAT, and then asked follow-up questions to get feedback on our content/IA related questions. Our intended audience for this research was Veterans who are part of the LGTBQ community.

- [UAT research plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/personal-information/personal-information-revision/uat/research-plan.md)
- [UAT conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/personal-information/personal-information-revision/uat/conversation-guide.md)

--------

## Findings details
UAT went smoothly and no significant findings were uncovered to prevent launch. 

### Functionality:
- All page elements functioned as expected. 

### UI: 
- FAQs and hint text appeared much larger than they should have for a participant using a specific Android mobile device. The team is looking into this post-launch. (Link to GitHub issue)
- RESOLVED - Phone number was not clickable. ([Link to GitHub issue](https://github.com/department-of-veterans-affairs/va.gov-team/issues/42758))

### Usability:
- Participants were able to update their information easily and quickly. 

--------

## Additional Findings

1. Participants had positive responses to the new fields.
2. Participants felt VA asks for this information to make Veterans feel comfortable and to minimize confusion.
3. Participants had trouble noticing the hint text component but noticed the FAQ dropdown fairly easily.
4. 6/7 participants understood that the fields were NOT required.
5. All participants decided to update their information for both Preferred name and Gender identity and were ok with not being able to remove information. However, 6/7 said it would be helpful to have the option to do so.
6. Preferred name: All participants had a positive response to the Preferred name field and found it to be clear, useful, and easy to use.
7. Preferred name: 2 participants mentioned that restrictions for how to enter Preferred name - such as character maximum and not allowing special characters or capitalization - may cause issues for some Veterans.
8. Gender identity: Participants had a positive response to Gender identity and had no trouble updating their information, but a few had suggestions for how the field could be further improved.
9. Gender identity: Participants found the information included in the FAQ dropdowns relatively clear.
10. Gender identity: A Gender identity selection was already made for 2 participants who had not yet visited the page.
11. 3 participants expressed a desire for the additional fields on the page: Pronouns and Sexual orientation.
12. Some participants did not notice the FAQs at the top of the page.
13. All participants who tested the latency issue (3) found it confusing, but said they would not normally refresh the page this way.

### DETAILS 

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
	- 3 of these 5 participants later noticed this when looking at individual fields.
	- 2 participants still didn’t notice it when looking at the individual fields.
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
**All participants decided to update their information for both Preferred name and Gender identity and were ok with not being able to remove information. However, 6/7 said it would be helpful to have the option to remove their answers.** 
- One participant (transgender) said they would need to think about the pros and cons of identifying with a specific Gender identity and chose “Prefer not to answer”

_**Next step:** Add Remove button to give Veterans more autonomy over selctions, particularly because some participants already had their Gender identity information auto-filled (see Finding #12). [Link to GH issue]_

### Finding #6
**Preferred name: All participants had a positive response to the Preferred name field and found it to be clear, useful, and easy to use.**
- 2 mentioned that using a preferred name is important for comfort within their interaction with VA. 
- Reasons for use of Preferred name including nicknames, name changes, and correcting mistakes.

_**Next step:** None_

### Finding #7
**Preferred name: 2 participants mentioned that restrictions for how to enter Preferred name - such as character maximum and not allowing special characters or capitalization - may cause issues for some Veterans.**

_**Next step:** Identify if character max or characters allowed for Preferred name can/should be changed. [Link to GH issue]_

### Finding #8
**Gender identity: Participants had a positive response to Gender identity and had no trouble updating their information, but a few had suggestions for how the field could be further improved.** 
- 2 participants noted that being able to write in an option for Gender identity would be important to a lot of people.
- A transgender participant mentioned that the alphabetical order of the Gender identity selections may not be the best way to sort them. This participant also noted that transgender man/woman felt clunky and that "normally people just say trans."

_**Next step:** Continue to work towards adding a text input field for Gender identity - reliant on API - and possibly consider revisiting order of terms listed. [Link to GH issue]_

### Finding #9
**Gender identity: Participants found the information included in the FAQ dropdowns relatively clear.**
- 2 participants were concerned with VA visibility and would like more information on who can view this information.
- 3 participants wondered why the NCM would need to see gender identity, but did not have a negative view on this.
- 1 participant thought more information should be included for how to update their gender identity with their health care team and to define the “healthcare team.” 

_**Next step:** Determine if any additional information is needed in Gender identity FAQ - return to discuss about Resources & Support article. [Link to GH issue]_

### Finding #10
**Gender identity: A Gender identity selection was already made for 2 participants who had not yet visited the page.**

_**Next step:** Determine how this factors into the inability to fully remove information once entered. [Link to GH issue]_ 

### Finding #11
**3 participants expressed a desire for the additional fields on the page: Pronouns and Sexual orientation**. 
- 2 participant conveyed the need for Pronouns.
- 1 participant requested Sexual orientation.

_**Next step:** Add Pronouns once approved ([Link to GH issue](https://github.com/department-of-veterans-affairs/va.gov-team/issues/38951)) Add Sexual orientation once approved ([Link to GH issue](https://github.com/department-of-veterans-affairs/va.gov-team/issues/38954))- pending PRA approval._

### Finding #12
**Some participants did not notice the FAQs at the top of the page.**
- All participants found the top FAQs to be clear once they went through them
- One participant in the process of changing their legal name found the related FAQ information and prominent placement extremely helpful.

_**Next step:** None_

### Finding #13
**All participants who tested the latency issue (3) found it confusing, but said they would not normally refresh the page this way.**

_**Next step:** Resolve latency issue (in progress). [Link to GH issue]_

--------

## Next Steps:
1. _(Main finding)_ Resolve bugs shown on Android mobile device. 
2. _(Main finding)_ Make phone number clickable. RESOLVED ([Link to GH issue](https://github.com/department-of-veterans-affairs/va.gov-team/issues/42758))
3. _(#3)_ Confirm that Preferred name hint text is sufficient and dropdown is not needed. 
4. _(#5)_ Add Remove button to give Veterans more autonomy over selctions, particularly because some participants already had their Gender identity information auto-filled (see Finding #12). 
5. _(#7)_ Identify if character max or characters allowed for Preferred name can/should be changed.  
6. _(#8)_ Continue to work towards adding a text input field for Gender identity - reliant on API - and possibly consider revisiting order of terms listed. 
7. _(#9)_ Determine if any additional information is needed in Gender identity FAQ - return to discuss about Resources & Support article. 
8. _(#10)_ Determine how this factors into the inability to fully remove information once entered.
9. _(#11)_ Add Pronouns once approved ([Link to GH issue](https://github.com/department-of-veterans-affairs/va.gov-team/issues/38951)) Add Sexual orientation once approved ([Link to GH issue](https://github.com/department-of-veterans-affairs/va.gov-team/issues/38954))- pending PRA approval.  
10. _(#13)_ Resolve latency issue (in progress).  

--------

## Appendix
- [Research plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/personal-information/personal-information-revision/uat/research-plan.md)
- [Conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/personal-information/personal-information-revision/uat/conversation-guide.md)
- [Interview transcripts](link here) - _in progress_

### Tools used for Synthesis
[Mural Board](https://app.mural.co/t/vsa8243/m/vsa8243/1654721796209/c2e42a35ff78fe654a47f027581d7b20c2546a5f?invited=true&sender=u28f508d646c449cc1afe4873)  

### Pages and applications used
Sketch files: [Desktop](https://www.sketch.com/s/ba254d92-3c3d-4eba-825d-d7f5bda35565/a/dlVxdm3) & [Mobile](https://www.sketch.com/s/ba254d92-3c3d-4eba-825d-d7f5bda35565/a/ZODxr23)

### Who we talked to 

**Recruitment criteria**

For this study, our goal was to recruit as many Veterans identifying as part of the LGBTQ+ community as possible, particularly transgender and non-binary folks. We were aiming to recruit 4 transgender and 4 non-binary participants. Recruitment fell slightly short of this goal with only 1 transgender participant. However, non-binary folks and members of the LGBTQ+ community were well-represented overall.

We talked to **7 participants.**

Audience segment:
* Veterans: 6 
* Caregivers: x 
* Family members of a Veteran: 1  


Gender:
* Male: 1 (possibly 2 - may have been confusion with term cis-gender)
* Female: 1 
* Transgender: 1 
* Nonbinary, gender fluid, gender queer, Two-Spirit (Indigenous only), or another gender beyond man or woman: 4 (possibly 3 - may have been confusion with term cis-gender)
* Gay, lesbian, or bisexual: 1 (other participants unknown)


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
* White: 4
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

_[VA recruitment checker for marginalized Veteran groups](https://docs.google.com/spreadsheets/d/1qfATPSXkhbDiJb1maOxvM08vutSIffMaHl8kNdiANkw/edit#gid=1440553662)_

This research does not include the perspectives of the following marginalized Veteran groups:
_List all groups in red from the spreadsheet_
* Asian and Native participants
* Screen reader users due to no-shows

<img width="762" alt="Screen Shot 2022-06-26 at 2 07 57 PM" src="https://user-images.githubusercontent.com/79372956/175833868-8694692e-2215-4646-a9d4-b4a2bd12c836.png">

