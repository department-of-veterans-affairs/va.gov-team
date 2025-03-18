# 2025-02 Dependent Verification MVP Research Findings 

**Office of the CTO - Digital Experience (OCTO-DE), Dependent Verification, Dependents Experience**

Date: 03/13/2025

Ajia Wallace ajia.wallace@softrams.com, Ruben Sun ruben@coforma.io

[Research readout](link here)

**Jump to:**

- [Hypotheses and conclusions](#hypotheses-and-conclusions)
- [Key findings](#key-findings)
- [Recommendations](#recommendations)
- [Further research needed](#further-research-needed)
- [Who we talked to](#who-we-talked-to)


## Research Goals
Veterans are mandated to verify their dependents' status every 8 years with VA Form 21-0538. This MVP is a partial digitization of this form for VA.gov and a call for Veterans to review and update or verify dependents annually to reduce the ~ $250 million per year of debt due to overpayments that Veterans accrue due to out-of-date dependents. This form follows the standard interview-style format on VA.gov and will be familiar to Veterans who use VA.gov to complete forms for their VA benefits. 

The purpose of this research was to 
1. Understand the Veteran’s mental model of dependent verification on VA.gov and their expectations for finding tools and completing tasks around dependent verification.
2. Validate the usability of our 0538 email notification and va.gov designs and determine whether they provide a clear path to verify and update dependents and
3. Understand how the flow, designs, and copy impact the Veteran’s understanding of the task.


## Research Questions

- How does the Veteran find dependent management info and tools on VA.gov?
- What actions and benefits do they associate with dependent management?
- How do Veterans expect to be able to accomplish tasks they associate with dependent management?

- Do directions and other informative language provide clarity or confusion?
- Do the designs allow most Veterans to verify their dependents in one sitting?
- Do we see indicators that a Veteran would take action immediately upon receiving the email?
  - Do they currently receive VA.gov notifications?
- What content or IA decisions might impede the Veteran from completing the task to verify? Update?

- Is the Veteran familiar with VA Form 0538?
- Does the Veteran’s mental model match the task they’re completing?
- Does the Veteran understand the impact of the dependency verification task?
- Do Veterans answer the yes/no question accurately and with clarity based on their dependents' situation.


## Methodology 

We conducted ten hour-long remote moderated research sessions via Zoom on February 10-14, 2025. Participants were asked a series of foundational questions regarding their experiences managing their dependents, specifically on VA.gov. They were then asked to engage with a Figma prototype representing the dependent verification experience on VA.gov. 

[Prototype](https://www.figma.com/proto/bvj72inycD0iZkuCbjYTWL/Dependent-Verification-MVP?page-id=704%3A13185&node-id=2218-77862&viewport=4550%2C30420%2C0.49&t=wyaR11IBNxWEvS5z-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=2041%3A15449&show-proto-sidebar=1)

Each participant was shown the following: 

- An email notification from VA.gov that would be sent annually to direct Veterans to review and verify or update their dependents on VA.gov
- The verification experience, beginning on Your VA Dependents
  - The verification flow that ends with the Veteran submitting a VA Form 21-0538
  - The update flow that ends with the introduction page for the online tool, Request to add or remove VA dependents (VA Forms 21-686c and/or 21-674)
- The batch request letter for VA Form 21-0538 that Veterans currently receive on an 8-year cadence

## Hypotheses and Conclusions

1. Most Veterans will be familiar with VA.gov notifications
    1. TRUE: Most participants already received notifications from VA.gov, though most of them were related to healthcare benefits (information about prescription refills, appointments, etc.) or newsletters. Participants were familiar with receiving notifications via text, email, mail, and via the app. 
1. Most Veterans will engage directly with the email notification
    1. TRUE: While some found the language “weak” or only saw the need to take action if one of the reasons to update applied to them, most would click the CTA or go to VA.gov directly “just to see” to review dependents.
1. Veterans will have clarity around the request, but may face lack of clarity with understanding the implications of the request
    1. MAYBE TRUE: Though most understood they were asked to review their dependents for accuracy and to update if needed, it’s not clear that participants associate “verification” with a form-related task. Half of participants were familiar with overpayments, hence with the benefit of keeping dependents up-to-date. However, it's unclear whether participants associate verification with fulfilling the 8-year mandate. There was some indication that participants would prefer to complete this task online for convenience. 
  
1. Veterans will use VA.gov’s search or benefits menu to find dependent management tools and information.
    1. LIKELY TRUE: Some participants would use search or the main menu. Others would look to the authenticated menu, an authenticated hub like MyVA, the top links on VA.gov, or would use the app to manage dependents. 
  
1. Most Veteran’s mental models will match the task to verify or update dependents.
    1. MAYBE TRUE: Veterans could complete the task, but it’s unclear whether participants understood the task's connection to the 8-year mandate. There was also some confusion around what "Update" means in regards to updating dependents in the MVP.
2. Most Veterans will understand that they must still respond to a paper 21-0538 request after completing the update or verify task on VA.gov (won’t disregard future paper requests)
     1. LIKELY FALSE: When prompted with receiving a paper 0538 after verifying on VA.gov caused confusion. Participants interpreted the 0538 batch letter as confirmation of verification on VA.gov or were confused/upset that they received this, seeing it as redundant. Many would call the VA to gain clarity.
4. Veterans will understand the difference between the tasks to verify and update
    1. LIKELY TRUE: Most participants accurately followed the update/verify paths, with 2 even reading the description below the selection header.
6. Veterans will expect to be able to edit, add, or remove individual dependents quickly
    1. DEFINITELY TRUE: Most participants expected to be able to update dependent information on VA.gov.
8. Most Veterans will complete the dependency verification task with clarity and in one sitting.
    1. LIKELY TRUE: When following the happy path, most participants completed the task and described it as "quick" and "easy." If participants saw personal information that needed correction or ran into other points of confusion, it would often prompt them to call the VA, risking abandonment of the task.
10. Some Veterans may find the tool unfamiliar or unexpected
    1. MAYBE FALSE: Most were familiar with the standard form layout, Your VA Dependents, and the dependents parent page. A couple of participants found it surprising that they were asked to review/confirm personal information as a part of verifying their dependents. 




## Key Findings

1. **Most participants (8 of 10) were unfamiliar with the relevant verification process** (the mandated verification of dependents via VA Form 21-0538) when asked about their experiences with verification. Instead, they described the initial verification of their dependents' identities (confirming documentation), regular updates of identification (perhaps connected to healthcare benefits), or other experiences that do not align with the 8-year mandate (verifying more frequently online or based on events like their dependents aging out at 18 years old). 

2. **Several participants (6 of 10 from the email and 3 of 10 from the VA.gov experience) indicated that they would not need to take action beyond confirming that their dependents are correct** to verify. This poses a risk of abandonment before Veterans complete the verification task and potentially calls for more transparency around the 8-year mandate and other benefits to the Veterand beyond avoiding the risk of overpayments. 

3. **There are several points in the designs that showed the potential to hinder participants from completing their verification and update tasks.**
   1. **Some particpants were confused by existing language on the Your VA Dependents page.** Of the participants prompted to review the sections "Dependents on your VA Benefits" and "Dependents not on your VA Benefits," 2 of 7 were caused significant confusion. One of these two shared that they would stop their progress and call the VA to confirm no mistakes had been made. If we continue to show these two sections, there are opportunities to improve clarity around what benefits these dependents are connected to and why they may or may not be currently connected.
   1. **All participants expected to be able to correct dependent info from within the form.** All of the 6 participants prompted with the need to correct personal information for their existing dependents chose to do so via the Yes: Update option, causing some confusion who followed that path and saw only language to "add or remove" dependents. None of the prompted partcipants read the note regarding the need  to call the VA.
      1. **Most participants (8 of 10) had no trouble interacting with the primary CTA.** Apart from the confusion around what the "Update" option covers, most participants had no trouble selecting a path from the primary CTA. One participant rushed through the prototype without talking through his thought process, so it's not clear whether he chose update because he needed to make changes. Another participant felt that the page with the CTA contained too much information and could be broken down better.
   1. **Most participants (6 of 9) were given pause or faced confusion when correcting personal or contact information** Of the 9 participants prompted to make corrections to their contact information, 6 expected changes to the contact information within the form to also apply to their VA profile permanently. While 6 of 9 participants prompted with the need to correct personal information would call Veteran's Services, only 3 of those called because they read the directions to do so. The other three would call because they didn't see any options to update from within the form. 

5. Finding four

6. Finding five

7. Finding six

8. Finding seven


## Details of Findings 

_To add images: ![text](link - add image to github folder and link here with .png)_

**1. Most participants did not have an accurate mental model of the dependency verification process**

Labels/Keywords: RESRCH: Comprehension testing; PRDT: 0538 Dependent-verification-letter; Dependents

**Most participants (8 of 10) were unfamiliar with the relevant verification process** (the mandated verification of dependents via VA Form 21-0538) when asked to describe their understanding of or experiences with dependent verification. Some described the initial verification of their dependents' identities (confirming documentation, birth certificates, marriage licenses, etc.). 

Others described processes that may be affiliated with other benefits such as healthcare, such as being asked to update identification on file every 2 years. Others described experiences that do not align with the 8-year mandate, such as verifying every 3 to 4 years or verifying online (a feature that isn't available yet for dependent verification). Some described verification as being related to life-events that could lead to needing to update dependents, such as a dependent child turning 18. 

This represents a risk that Veterans won't have context for dependency verification as related to the 8-year mandate and a need to provide that context at key entrypoints on VA.gov and elsewhere. 

> _Supporting data: "Just verifying that he's my legal husband to be on my benefits." (P2)_

> _Supporting data: "Probably a birth certificate or something like that." (P3)_


**2. Several participants suggested they did not see a need to take action beyond reviewing dependents for accuracy**

Labels/Keywords: RESRCH: Comprehension testing; PRDT: 0538 Dependent-verification-letter; Dependents

When asked to explain the ask from the email notification, 6 of 10 participants suggested that no further action would need to be taken beyond reviewing dependents for accuracy. Some indicated that if none of the reasons to update dependents in the bulletted list applied to them, they would not explore further. Others suggested that they only would have received this email if the VA knew that a life event had accurred that would necessitate updating their dependents. 

When interacting with the verification experience on VA.gov, 3 of 10 suggested that they would not need to take further action if their dependents looked correct. One participant expressed concerns that the "weak" language in the email and the on-platform alert ("We encourage") leading to Veterans not seeing a need to engage with the ask overall. 

This poses a risk of abandonment for the verification path. This may be remedied by providing more information around what verification means in this scenario, specifically that the ask to verify is connected to the submission of a VA form that the Veteran will eventually be required to complete. 

> _Supporting data: "If any of these [events] happen in my life, I would need to go click on this link" (P3, from email)_

> _Supporting data: "If nothing has changed, [I would] close everything out." (P3, from Your VA Dependents)_

> _Supporting data: "[I'm looking for] any changes in marriage or dependents' status." (P9)_

**3. There are several points in the designs that showed the potential to hinder participants from completing their verification and update tasks.**

**3.1 The sections "Dependents on your VA beneftis" and "Dependents not on your VA benefits" caused confusion for some participants.** 

Labels/Keywords: RESRCH: Comprehension testing; Dependents; PRDT: Content

2 of 7 participants who were prompted to review the sections "Dependents on your VA beneftis" and "Dependents not on your VA benefits" were caused significant confusion. One of these two shared that they would stop their progress and call the VA to confirm no mistakes had been made. Another was confused about why they were seeing dependents not on their benefits at all or why they were still referred to as "Dependents" if they were not eligible to be on the participant's benefits. One was confused as to why they saw dependents not connected to their benefits listed here at all. 

If we continue to show these two sections, there are opportunities to improve clarity around what benefits these dependents are connected to and why they may or may not be currently connected. We may also link out to eligibility requirements or other information on what actions can be taken to bring disconnected dependents back onto the Veteran's benefits. 

> _Supporting data: "This...one is throwing me off" (P3)_

> _Supporting data: "There's no way to know why this dependent is not on your benefits." (P6)_


**3.2 All participants expected to be able to correct dependent info from within the form, particularly via the "Update" option.** 

Labels/Keywords: RESRCH: Comprehension testing; Dependents; DSP: Help users to check personal information

All of the 6 participants prompted with the need to correct personal information for their existing dependents chose to do so via the "Yes: Update" option. This caused some confusion for participants who followed that path and saw only language to "add or remove" dependents. None of the prompted partcipants read the note regarding the need  to call the VA. This poses a risk that Veterans may grow frustrated with the form or give up on correcting inaccurate dependent information. 

> _Supporting data: "Update and edit is pretty much the same thing." (P3)_

**3.2.a Most participants had no trouble interacting with the primary CTA.** 

Labels/Keywords: RESRCH: Comprehension testing; Dependents; DSC: Form - Radio button

8 of 10 participants had no trouble progressing with their update or verify tasks when interacting with the primary CTA. Most participants understood the question "Do you need to update any of the dependents on your VA benefits?" and that a yes answer would take them to options to update dependents and a no answer would take them to options to verify, with two participants clearly reading through the specific forms they were connected to. One participant rushed through the prototype without talking through his thought process, so it's not clear whether he chose update because he needed to make changes. Another participant felt that the page with the CTA contained too much information and could be broken down better. There's an opportunity here to improve clarity by breaking up the asks around update and verify here to avoid risks of Veterans overlooking key information. 

> _Supporting data: "Make things simpler instead of putting everything there...It's a lot of words." (P6)_

**3.3 Most participants were given pause or faced confusion when correcting personal or contact information** 

Labels/Keywords: RESRCH: Comprehension testing; Dependents; DSP: Help users to check personal information

Of the 9 participants prompted to make corrections to their contact information, 6 expected changes to the contact information within the form to also apply to their VA profile permanently. While 6 of 9 participants prompted with the need to correct personal information would call Veteran's Services, only 3 of those called because they read the directions to do so. The other three would call because they didn't see any options to update from within the form. 2 participants were surprised that they needed to confirm personal information at all as a part of verifying their dependents. To avoid risks of abandonment or delay in form completion, we could use the pattern that explicitly gives users the option to have contact changes apply to the profile. We might also break up information so users are less likely to overlook the note on contacting Veteran's Services or (long-term) offer the possibility to update personal information on VA.gov. 

> _Supporting data: "Why do I have two different addresses?" (P6)_

> _Supporting data: "There are some people who will change their phone number as often as they change their underwear." (P8)_


## Additional Insights

_Any additional insights that aren't "key findings." These can be powerful comments from users that don’t represent a pattern in this study, but may be part of one outside this study._


## Recommendations

_Put together initial recommendations here based on your findings along with supporting evidence. Review with your team, then edit as needed._

* Recommendation 1
    * _Supporting evidence_
* Recommendation 2
    * _Supporting evidence_


## Next Steps

_Next steps here. Include owners if appropriate._


## Further research needed

_If there are demographics that were not included in this study or you discovered that more research should be done, make note of that here._


## Appendix

[Research plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/dependents/research/2025-02-dependents-verification-mvp-research/research-plan.md)

[Discussion guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/dependents/research/2025-02-dependents-verification-mvp-research/conversation-guide.md)

[Interview transcripts](https://dvagov.sharepoint.com/:f:/r/sites/vaabdvro/Shared%20Documents/Dependents%20Management/research/2025%2002%20Dependents%20verification%20MVP%20research?csf=1&web=1&e=tABZyd)


## Tools used for Synthesis

[Session notes and synthesis in Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1738934776556/8d3f69a690a08d5ca1c6fe7b4e0a21c367d52e95?sender=u859fac93c61da901b7914439)

[Task analysis in Slack list](https://dsva.slack.com/lists/T03FECE8V/F08DN1P3J7N)

## Pages and applications used

[Figma prototype](https://www.figma.com/proto/bvj72inycD0iZkuCbjYTWL/Dependent-Verification-MVP?page-id=704%3A13185&node-id=2218-77862&viewport=4550%2C30420%2C0.49&t=wyaR11IBNxWEvS5z-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=2041%3A15449&show-proto-sidebar=1)


## Other supporting documents created

[Verification MVP proposed flow in Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1709582312238/ae3de21fd188beba8c28668ee37a31841c6203bf?wid=0-1716382766670)

[Product planning in Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1709582312238/ae3de21fd188beba8c28668ee37a31841c6203bf?wid=0-1737739381239)

## Secondary research

[Information architecture analysis from CAIA](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1717521751866/127cbff63df95bedf011a5463797989197bc069d?sender=u859fac93c61da901b7914439)

[2023-09 Dependents research](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/dependents/research/2023-09-dependents-research)

[2020-11 Dependency verification research](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/dependents/research/2020-11-dependency-verification-research)

## Who we talked to 
_Complete the demographic info below using information from the Perigean recruitment survey. For those items where you didn't have participants, please mark with "0". You can use "unknown" if you aren't sure if your participants had a characteristic._ 
_[See an example](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/initiatives/2021-post-mvp-releases/research/research-findings.md#who-we-talked-to)_

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
