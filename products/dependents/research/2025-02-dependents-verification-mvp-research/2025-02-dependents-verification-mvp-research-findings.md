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
Veterans are mandated to verify their dependents' status every 8 years with VA Form 21-0538. The MVP initiative includes a partially digitized version of this form available on VA.gov and encourages Veterans to review and update or verify their dependents annually. This effort aims to reduce the approximately $250 million per year in debt resulting from overpayments that Veterans incur due to outdated dependent information. This form follows the standard interview-style format on VA.gov and will be familiar to Veterans who use VA.gov to complete forms for their VA benefits. 

The purpose of this research was to 
1. Understand the Veteran’s mental model of dependent verification on VA.gov and their expectations for finding tools and completing tasks around dependent verification.
2. Validate the usability of our 0538 email notification and VA.gov designs and determine whether they provide a clear path to verify and update dependents and
3. Understand how the flow, designs, and copy impact the Veteran’s understanding of the task.


## Research Questions

#### Mental Model Surrounding Dependent Verification
- How does the Veteran find dependent management info and tools on VA.gov?
- What actions and benefits do they associate with dependent management?
- How do Veterans expect to be able to accomplish tasks they associate with dependent management?

#### Dependent Verification Usability
- Do directions and other informative language provide clarity or confusion?
- Do the designs allow most Veterans to verify their dependents in one sitting?
- Do we see indicators that a Veteran would take action immediately upon receiving the email?
  - Do they currently receive VA.gov notifications?
- What content or IA decisions might impede the Veteran from completing the task to verify? Update?

#### Dependent Verification Goal and Task Comprehension
- Is the Veteran familiar with VA Form 0538?
- Does the Veteran’s mental model match the task they’re completing?
- Does the Veteran understand the impact of the dependency verification task?
- Do Veterans answer the yes/no question accurately and with clarity based on their dependents' situation.


## Methodology 

We conducted ten hour-long remote moderated research sessions via Zoom from February 10 to 14, 2025. Participants were asked a series of foundational questions regarding their experiences managing their dependents, specifically on VA.gov. They were then asked to engage with a Figma prototype representing the dependent verification experience on VA.gov. 

[Prototype](https://www.figma.com/proto/bvj72inycD0iZkuCbjYTWL/Dependent-Verification-MVP?page-id=704%3A13185&node-id=2218-77862&viewport=4550%2C30420%2C0.49&t=wyaR11IBNxWEvS5z-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=2041%3A15449&show-proto-sidebar=1)

Each participant was shown the following: 

- An email notification from VA.gov that would be sent annually to direct Veterans to review and verify or update their dependents on VA.gov
- The verification experience, beginning with Your VA Dependents
  - The verification flow that ends with the Veteran submitting a VA Form 21-0538
  - The "update" flow that ends with the introduction page for the online tool Request to add or remove VA dependents (VA Forms 21-686c and/or 21-674)
- The batch request letter for VA Form 21-0538 that Veterans currently receive on an 8-year cadence

## Hypotheses and Conclusions

#### Receive Notification
> ##### Most Veterans will be familiar with VA.gov notifications.
> TRUE: Most participants already received notifications from VA.gov, though most were related to healthcare benefits (information about prescription refills, appointments, etc.) or newsletters. Participants were familiar with receiving notifications via text, email, mail, and via the app.

> ##### Most Veterans will engage directly with the email notification.
> MAYBE TRUE: While some found the language “weak” or only saw the need to take action if one of the reasons to update applied to them, most would click the call-to-action or go to VA.gov directly “just to see” to review dependents.

> ##### Veterans will understand the request clearly, but they may lack clarity about its implications.
> MAYBE TRUE: While most participants understood that they were asked to review the accuracy of their dependents and update the information if necessary, it remains unclear whether they associate "verification" with a task related to forms. Half of the participants were familiar with overpayments and recognized the benefit of keeping their dependents up-to-date. However, it's unclear whether participants associate verification with fulfilling the 8-year mandate. Most were unfamiliar with the 8-year mandate. There was some indication that participants would prefer to complete this task online for convenience.

#### Locate Verification Tool
> ##### Veterans will use VA.gov’s search or benefits menu to find dependent management tools and information.
> MAYBE TRUE: Some participants would use search or the main menu. Others would look to the authenticated menu, an authenticated hub like MyVA, or the top links on VA.gov, or they would use the app to manage dependents.

#### Comprehend Request
> ##### Most Veterans’ mental models will match the task to verify or update dependents.
> NOT ENOUGH INFORMATION: Veterans could complete the task, but it’s unclear whether participants understood the task's connection to the 8-year mandate. There was also some confusion around what "Update" means regarding updating dependents in the MVP.

> ##### Most Veterans will understand that they must still respond to a paper 21-0538 request after completing the update or verify task on VA.gov (won’t disregard future paper requests)
> LIKELY FALSE: When prompted with receiving a paper 0538 after verifying on VA.gov caused confusion. Participants interpreted the 0538 batch letter as confirmation of verification on VA.gov or were confused/upset that they received this, seeing it as redundant. Many would call the VA to gain clarity.

#### Determine primary action ('to verify' or 'to update'
> ###### Veterans will understand the difference between the tasks to verify and update.
> LIKELY TRUE: Most participants accurately followed the update/verify paths, with 2 even reading the description below the selection header.

> ##### Veterans will expect to be able to edit, add, or remove individual dependents quickly.
> DEFINITELY TRUE: Most participants expected to be able to update dependent information on VA.gov. Some participants who expected to be able to change their dependent’s personal information but could not do so in the flow of the form found it frustrating.

#### Complete verification
> ###### Most Veterans will complete the dependency verification task clearly and in one sitting.
> LIKELY TRUE: When following the happy path, most participants completed the task and described it as "quick" and "easy." If participants saw personal information that needed correction or ran into other points of confusion, it would often prompt them to call the VA, risking abandonment of the task.

> ##### Some Veterans may find the tool unfamiliar or unexpected.
> MAYBE FALSE: Most were familiar with the standard form layout, Your VA Dependents, and the dependents' parent page. A couple of participants found it surprising that they were asked to review/confirm personal information as a part of verifying their dependents.




## Key Findings

1. **Most participants were not familiar with the dependent verification process in general, and this lack of familiarity shows a risk of inaction on the verification ask in our designs.**

   1. **Most participants (8 of 10) were unfamiliar with the relevant verification process** (the mandated verification of dependents via VA Form 21-0538) when asked about their experiences with verification. Instead, they described the initial verification of their dependents' identities (confirming documentation), regular updates of identification (perhaps connected to healthcare benefits), or other experiences that do not align with the 8-year mandate (verifying more frequently online or based on events like their dependents aging out at 18 years old). 

   1. **Several participants (6 of 10 from the email and 3 of 10 from the VA.gov experience) indicated that they would not need to take action beyond confirming that their dependents are correct** to verify. This poses a risk of abandonment before Veterans complete the verification task and potentially calls for more transparency around the 8-year mandate and other benefits to the Veteran beyond avoiding the risk of overpayments.
  
2. **There are opportunities to improve the findability of dependent verification specifically and dependent management in general, both in the short-term (MVP launch) and long-term.**

    1. **Participants would benefit from greater context at verification entry points.** While most participants could navigate back to the verification entry point, Your VA Dependents, within the same session using the back button or breadcrumb links, it's unclear whether Veterans who exit their session would be able to find Your VA Dependents again with the same ease. Our findability explorations prior to the study, as well as results prompting participants to locate dependent management tools from the VA.gov homepage, suggest they might face difficulty. For the MVP launch, we recommend adding content to provide context for our dependent verification experience to key entry points, like the About VA Form 21-0538 page and the dependent's parent static page.
   
     1. **Most participants, when prompted to locate dependent management tools from the VA.gov home, expected to find them under the main menu (4) or a hub like MyVA (3).** We should consider these expectations when planning for how dependents are represented on VA.gov's information architecture in order to ensure the findability of dependent management and dependent verification align with Veteran expectations. 

3. **Several design points showed the potential to hinder participants from completing their verification and update tasks.**
   1. **Some participants were confused by the existing language on the Your VA Dependents page.** Of the participants prompted to review the sections "Dependents on your VA Benefits" and "Dependents not on your VA Benefits," 2 of 7 were significantly confused. One of these two shared that they would stop their progress and call the VA to confirm no mistakes had been made. If we continue to show these two sections, there are opportunities to improve clarity around what benefits these dependents are connected to and why they may or may not be currently connected.
   1. **All participants expected to be able to correct identifying dependent information, such as SSN, DOB, etc., from within the form.** All 6 participants prompted with the need to correct personal information for their existing dependents chose to do so via selecting the “Yes: Update” option, causing some confusion for those who followed that path and saw only the language to "add or remove" dependents. None of the prompted participants read the note mentioning to call the VA.
      1. **Most participants (8 of 10) had no trouble interacting with the primary CTA.** The primary CTA here is a radio button component where the user is asked if they need to update their dependents and offered the options to answer "Yes" to add or remove dependents via the online tool for 686c/674 or "No" to verify that all dependents are correct with our online MVP for VA Form 21-0538. Apart from the confusion around what the "Update" option covers, most participants had no trouble selecting a path from the primary CTA. One participant rushed through the prototype without talking through his thought process, so it's not clear whether he chose to update because he needed to make changes. Another participant felt that the page with the CTA contained too much information and could be broken down better.
   1. **Most participants (6 of 9) were given pause or faced confusion when correcting personal or contact information** Of the 9 participants prompted to make corrections to their contact information, 6 expected changes to the contact information within the form to also apply to their VA profile permanently. While 6 of 9 participants prompted to correct personal information would call Veteran's Services, only 3 of those called because they read the directions to do so. The other three would call because they didn't see any options to update from within the form. 

4. **There are several opportunities to streamline notifications and avoid the risk of confusion and rework as related to dependent management in general and dependent notifications specifically.** Our product team can take action on these opportunities primarily by keeping open lines of communication with VBA, coordinating with them on timely launches, and making recommendations to them based on what we're seeing in this study and others.
   1. **All of our participants with dependent children experienced pain points around the 18-year-old to school-age transition.** There are opportunities here to provide greater clarity around eligibility and next steps in a timely manner for Veterans with dependent children. 
   1. **Most of our participants misinterpreted the 0538 batch letter requesting the 8-year mandated verification** as a confirmation of their actions to verify on VA.gov. Others were confused or frustrated by why they were receiving the letter, seeing it as redundant, wondering why they verified on VA.gov if they were still going to receive this letter or concerned that there had been some sort of mistake. This shows the need to coordinate any outreach directing Veterans to the verification MVP on VA.gov with 0538 batch letters being sent to avoid this confusion. 


## Details of Findings 

_To add images: ![text](link - add image to github folder and link here with .png)_

**1. Most participants were not familiar with the dependent verification process in general, and this lack of familiarity shows a risk of not taking action on the verification ask in our designs.**

**1.1 Most participants did not have an accurate mental model of the dependency verification process**

Labels/Keywords: RESRCH: Comprehension testing; PRDT: 0538 Dependent-verification-letter; Dependents

When asked to describe their understanding of or experiences with dependent verification, most participants (8 of 10) were unfamiliar with the relevant verification process (the mandated verification of dependents via VA Form 21-0538). Some described the initial verification of their dependents' identities (confirming documentation, birth certificates, marriage licenses, etc.). 

Others described processes that may be affiliated with other benefits such as healthcare, such as being asked to update identification on file every 2 years. Others described experiences that do not align with the 8-year mandate, such as verifying every 3 to 4 years or verifying online (a feature that isn't available yet for dependent verification). Some described verification as being related to life events that could lead to needing to update dependents, such as a dependent child turning 18. 

This represents a risk that Veterans won't have context for dependency verification related to the 8-year mandate, and there is a need to provide that context at key entry points on VA.gov and elsewhere. 

> _Supporting data: "Just verifying that he's my legal husband to be on my benefits." (P2)_

> _Supporting data: "Probably a birth certificate or something like that." (P3)_


**1.2. Several participants suggested they did not see a need to take action beyond reviewing dependents for accuracy**

Labels/Keywords: RESRCH: Comprehension testing; PRDT: 0538 Dependent-verification-letter; Dependents

When asked to explain the ask from the email notification, 6 of 10 participants suggested that no further action would need to be taken beyond reviewing dependents for accuracy. Some indicated that if none of the reasons to update dependents in the bulleted list applied to them, they would not explore further. Others suggested that they only would have received this email if the VA knew that a life event had accurred that would necessitate updating their dependents. 

When interacting with the verification experience on VA.gov, 3 of 10 suggested that they would not need to take further action if their dependents looked correct. One participant expressed concerns that the "weak" language in the email and the on-platform alert ("We encourage") led to Veterans not seeing a need to engage with the ask overall. 

This poses a risk of abandonment for the verification path. This may be remedied by providing more information about what verification means in this scenario, specifically that the ask to verify is connected to the submission of a VA form that the Veteran will eventually be required to complete. 

> _Supporting data: "If any of these [events] happen in my life, I would need to go click on this link" (P3, from email)_

> _Supporting data: "If nothing has changed, [I would] close everything out." (P3, from Your VA Dependents)_

> _Supporting data: "[I'm looking for] any changes in marriage or dependents' status." (P9)_

**2. There are opportunities to improve the findability of dependent verification specifically and dependent management in general, both in the short-term (MVP launch) and long-term.**

Labels/Keywords: RESRCH: Comprehension testing; Dependents; PRDT: VA.gov home page

**2.1 Participants would benefit from greater context at verification entry points.**

While most participants could navigate back to the verification entry point, Your VA Dependents, within the same session using the back button or breadcrumb links, it's unclear whether Veterans who exit their session would be able to find Your VA Dependents again with the same ease. Our findability explorations prior to the study, as well as results prompting participants to locate dependent management tools from the VA.gov homepage, suggest they might face difficulty. For the MVP launch, we recommend adding content to provide context for our dependent verification experience to key entry points, like the About VA Form 21-0538 page and the dependent's parent static page.

**2.2 Most participants, when prompted to locate dependent management tools from VA.gov home, expected to find them under the main menu (4) or a hub like MyVA (3).** 

We should consider these expectations when planning for how dependents are represented on VA.gov's information architecture in order to ensure the findability of dependent management and dependent verification align with Veteran expectations. Other paths our participants took to locate dependent management on VA.gov included the authenticated menu (2), VA.gov search (1) and the Top Links section on VA.gov home (1).

**3. There are several points in the designs that showed the potential to hinder participants from completing their verification and update tasks.**

**3.1 The sections "Dependents on your VA benefits" and "Dependents not on your VA benefits" caused confusion for some participants.** 

Labels/Keywords: RESRCH: Comprehension testing; Dependents; PRDT: Content

2 of 7 participants who were prompted to review the sections "Dependents on your VA benefits" and "Dependents not on your VA benefits" caused significant confusion. One of these two shared that they would stop their progress and call the VA to confirm no mistakes had been made. Another was confused about why they were seeing dependents not on their benefits at all or why they were still referred to as "Dependents" if they were not eligible to be on the participant's benefits. One was confused as to why they saw dependents not connected to their benefits listed here at all. 

If we continue to show these two sections, there are opportunities to improve clarity around what benefits these dependents are connected to and why they may or may not be currently connected. We may also link out to eligibility requirements or other information on what actions can be taken to bring disconnected dependents back onto the Veteran's benefits. 

> _Supporting data: "This...one is throwing me off" (P3)_

> _Supporting data: "There's no way to know why this dependent is not on your benefits." (P6)_


**3.2 All participants expected to be able to correct dependent info from within the form, particularly via the "Update" option.** 

Labels/Keywords: RESRCH: Comprehension testing; Dependents; DSP: Help users to check personal information

All of the 6 participants prompted with the need to correct personal information for their existing dependents chose to do so via the "Yes: Update" option. This caused some confusion for participants who followed that path and saw only language to "add or remove" dependents. None of the prompted participants read the note regarding the need  to call the VA. This poses a risk that Veterans may grow frustrated with the form or give up on correcting inaccurate dependent information. 

> _Supporting data: "Update and edit is pretty much the same thing." (P3)_

**3.2.a Most participants had no trouble interacting with the primary CTA.** 

Labels/Keywords: RESRCH: Comprehension testing; Dependents; DSC: Form - Radio button

8 of 10 participants had no trouble progressing with their update or verify tasks when interacting with the primary CTA. Most participants understood the question "Do you need to update any of the dependents on your VA benefits?" and that a yes answer would take them to options to update dependents and a no answer would take them to options to verify, with two participants clearly reading through the specific forms they were connected to. One participant rushed through the prototype without talking through his thought process, so it's not clear whether he chose to update because he needed to make changes. Another participant felt that the page with the CTA contained too much information and could be broken down better. There's an opportunity here to improve clarity by breaking up the asks around "update" and "verify" here to avoid risks of Veterans overlooking key information. 

> _Supporting data: "Make things simpler instead of putting everything there...It's a lot of words." (P6)_

**3.3 Most participants were given pause or faced confusion when correcting personal or contact information** 

Labels/Keywords: RESRCH: Comprehension testing; Dependents; DSP: Help users to check personal information

Of the 9 participants prompted to correct their contact information, 6 expected changes to the contact information within the form to also apply to their VA profile permanently. While 6 of 9 participants prompted with the need to correct personal information would call Veteran's Services, only 3 of those called because they read the directions to do so. The other three would call because they didn't see any options to update from within the form. 2 participants were surprised that they needed to confirm personal information at all as a part of verifying their dependents. To avoid risks of abandonment or delay in form completion, we could use the pattern that explicitly gives users the option to have contact changes apply to the profile. We might also break up information so users are less likely to overlook the note when contacting Veteran's Services or (long-term) offer the possibility to update personal information on VA.gov. 

> _Supporting data: "Why do I have two different addresses?" (P6)_

> _Supporting data: "There are some people who will change their phone number as often as they change their underwear." (P8)_

**4. There are several opportunities to streamline notifications and avoid the risk of confusion and rework as related to dependent management in general and dependent notifications specifically.**

Labels/Keywords: Dependents; DSP: Notifications

There are some opportunities for our product team to take action on these opportunities though most of our impact will be felt by keeping open lines of communication with VBA, coordinating with them on timely launches, and making recommendations to them based on what we're seeing in this study and others.

**4.1 All of our participants with dependent children experienced pain points around the 18-year-old to school-age transition.**

Two of our participants had children automatically age out at 18 before they graduated high school. One had their application for school-age benefits (VA Form 21-674) denied due to their child already receiving Chapter 35 benefits. Two experienced pain points around having to remove their children at 18 themselves, whether long wait times at the VA office or owing overpayments due to not removing the child right away. There are opportunities here to provide greater clarity around eligibility and next steps in a timely manner for Veterans with dependent children. VBA might also consider where dependent children's birthday falls in the school year when applying automatic removal or providing a more streamlined path for Veterans to alert the VA to the fact that their child will still be in high school when they turn 18.

> _Supporting data: "From an efficiency standpoint, there's got to be a better way to handle [children aging out while still in high school]." (P12)_

**4.2 Most of our participants misinterpreted or were confused by the 0538 batch letter requesting the 8-year mandated verification** 

We prompted participants to receive the 0538 batch letter requesting the 8-year mandated verification after having verified on VA.gov to assess risk if such a thing were to happen post-launch. This is important because, for the initial MVP, updating dependents will not generate a 21-0538, meaning Veterans would still be responsible for the 8-year mandated verification if they only updated through the verification experience on VA.gov. 

Several participants initially interpreted it as a confirmation of their actions to verify on VA.gov. Others were confused or frustrated by why they were receiving the letter, seeing it as redundant, wondering why they verified on VA.gov if they were still going to receive this letter, or concerned that there had been some mistake. Most participants who realized the letter was requesting action from the Veteran indicated they would call to confirm what they needed to do. This shows the need to coordinate any outreach directing Veterans to the verification MVP on VA.gov with 0538 batch letters being sent to avoid this confusion. 

> _Supporting data: "This should be a confirmation of what I did online. And you already have a receipt of this website. It's very confusing" (P10)_

## Additional Insights

_Any additional insights that aren't "key findings." These can be powerful comments from users that don't represent a pattern in this study but may be part of one outside this study._


## Recommendations

1. **Provide more context to Veterans around what dependent verification means** within the context of the 8-year mandate via VA Form 21-0538. This context can be provided at key entry points to the MVP on VA.gov, such as the parent page for dependent management (View or change dependents), Your VA Dependents, the About VA Form 21-0538 page, and a potential future parent page for dependent verification. Specifically, let Veterans know that verification entails submission of a specific form, which would lessen the risk of abandonment due to the possibility of interpreting "verification" as merely confirming existing dependents are correct. 
   1. We also need to coordinate with VBA to share information about the option to verify on VA.gov in their communications (such as the 0538 batch letter) once the online experience is ready.
   2. When planning for the long-term vision of dependent management on VA.gov, the option to verify might be integrated into the existing 686c/674 experience (e.g., asking the Veteran to verify after making a change to dependents). This would entail ensuring proper context around what verification means is included in this addition to the 686c/674 experience.

2. **Implement findability improvements suggested by the CAIA team and validated by research.** Leading up to this study, our team conducted some findability explorations that we shared with the team formerly known as CAIA, who made several [recommendations](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1717521751866/127cbff63df95bedf011a5463797989197bc069d?sender=u859fac93c61da901b7914439) both for dependent verification on VA.gov specifically and for dependent management more generally. Our study reinforced some of those recommendations:
   1. Again, provide context for dependent verification on key pages related to dependent management and other cross-link pathways.
   2. Provide richer information for dependent cards on Your VA Dependents, including what benefits these dependents are (or have been) connected to, information around eligibility for other benefits, and links out to further information and next steps, upcoming changes, or life events, and links to quickly remove, re-add, or correct dependents with auto-fill. _Images of card mocks here_
   3. Improvements to dependent management findability on VA.gov overall, including a more obvious home in the main menu and enrichment of search keywords.
  
3. **Break down steps in verify or update flow to improve readability and comprehension, especially regarding correction handling.** Rather than asking if the Veteran would like to update or verify on the same page as we're providing directions for how to correct personal information for dependents, we can break up this information in the following way: _Images of new mocks here also_
   1. Do you need to update your dependents?
      1. Yes
         1. Add or remove a dependent
            1. 686c/674 online tool
         2. Correct existing dependent info
            1. Call Veteran's Services to correct this information.
      2. No
         1. Would you like to verify your dependents?

4. While Veterans were more familiar with the process of calling to correct personal information for themselves, **breaking down personally identifying information in a similar way could improve readability and avoid the risk of confusion,** with an eye toward exploring the possibility of allowing personal information to be updated on VA.gov, which would align with many Veterans' expectations.
   
5. **Give Veterans the option to update profile information when updating contact information within the form,** which already exists in a [VADS pattern](https://www.figma.com/design/1z3bAkQl4uR1IvAxmtyqZi/AE-Design-Patterns---Update-Prefill?node-id=4013-14358&t=MC0Edy1AehQfrVg0-1). This will force them to acknowledge that contact information updates do not apply to profile information unless they opt-in.

6. **Move confirmation of Veteran's personal and contact info to the beginning of the form flow to align with other forms.** Also, ensure we're providing context around why we're asking the Veteran to review this information (it's required for VA Form 21-0538 and we'll use it to contact you for further information if needed).
7. **Work with VBA to align on notifications for dependent verification and dependent management in general**
   1. Share the risks and potential solutions of coordinating a dependent verification notification launch with 8-year mandated batch letters.
   2. Create a suggested timeline for when specific steps in a dependent verification notification launch should happen (including what's required of the online experience before the notification launch, such as generating 21-0538 forms from dependent updates).
   3. Share other findings that may be relevant to VBA, such as the pattern of pain points around the 18-year-old to school-age transition. 

## Next Steps

_Next steps here. Include owners if appropriate._


## Further research needed

_If there are demographics that were not included in this study or you discovered that more research should be done, make a note of that here._


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

We talked to **10 participants.**

Audience segment:
* Veterans: 10
* Caregivers: 0
* Family members of a Veteran: 0


Gender:
* Male: 6
* Female: 4 


LGBTQ+:
* Transgender: Unknown
* Nonbinary, gender fluid, gender queer, Two-Spirit (Indigenous only), or another gender beyond man or woman: Unknown
* Gay, lesbian, or bisexual: Unknown


Devices used during study: 
* Desktop: 7
* Tablet: 2
* Smart phone: 1
* Assistive Technology: 0


Age:
* 25-34: 0
* 35-44: 1
* 45-54: 5
* 55-64: 2
* 65+: 2
* Unknown: 0


Education:
* High school degree or equivalent: 0
* Some college (no degree): 3
* Associate's degree, trade certificate or vocational training: 3
* Bachelor's degree: 1
* Master's degree: 2
* Doctorate degree: 1
* Unknown: 0


Geographic location:
* Urban: 6
* Rural: 4
* Unknown: 0


Race:
* White: 7
* Black: 2
* Hispanic: 0
* Biracial: 1
* Asian: 1
* Native: 1


Disability and Assistive Technology (AT):
* Cognitive: 4
* AT beginner: 0
* AT advanced user: 0
* Desktop screen reader: 0
* Mobile screen reader: 0
* Magnification/Zoom: 0
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

**Underserved categories not captured in recruitment survey**

- LGBTQ+: This group we definitely want to screen for in future research, as we want to be sure our designs work for non-traditional families, LGBTQ+ and otherwise.
- Discharge type
- Immigrant origin
- Expat living abroad

**Groups to recruit for in future research**
- LGBTQ+ members
- AT users
- Veterans with no degree
- Veterans of Hispanic, Latino, or Spanish origin
- Native, American Indian or Alaska Native Veterans

_[insert screenshot of completed recruitment checker]_
![VA-recruitment-checker](link - add image to github folder and link here with .png)
