# 2025-02 Dependent Verification MVP Concept Testing 
## Topline Summary

[Research plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/dependents/research/2025-02-dependents-verification-mvp-research/research-plan.md)

[Discussion guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/dependents/research/2025-02-dependents-verification-mvp-research/conversation-guide.md)

[Interview transcripts](https://dvagov.sharepoint.com/:f:/r/sites/vaabdvro/Shared%20Documents/Dependents%20Management/research/2025%2002%20Dependents%20verification%20MVP%20research?csf=1&web=1&e=tABZyd)


This topline summary is a high level, top of mind summary of trends found in the sessions, but is not the final result of working with the data discovered. The information in this document may change following a deeper review and analysis of the data gathered. 

**The goal of this document is:**
 - To make sure everyone who observed the study is in alignment with the perceived findings
 - To gain insight from team/stakeholder/designers and determine specific directions to pursue as we analyze the data
 - To jump start synthesis by quickly organizing high level themes 

---
  
## Initial Findings


**Finding #1: Most participants (8 of 10) did not have a mental model of verification that aligned with the Mandatory Verification of Dependents (VA Form 21-0538)**

- We questioned participants about their understanding of dependent verification at multiple points throughout the session:
  - Prior to engaging the prototype, during foundational questioning
  - When reviewing the email notification
  - When engaging with the dependent verification MVP on VA.gov, either on Your VA Dependents or the first page of the form flow
- While 2 participants described dependent verification in a way that aligned with the Mandatory Verification of Dependents, the other 8 participants conflated it when providing evidence to initially make their dependency claim or other verification processes affiliated with other benefits.
- Due to this lack of clarity that dependent verification is connected to a mandatory form submission, **there is some perceived risk that the Veteran may not see a need to engage with the MVP experience beyond reviewing dependents if there is no need to make changes to their dependents.**
> _When asked "What does verification mean in this context?" when reviewing the email notification:_
> 
> “Just verifying that he's my legal husband to be on my benefits." (P2)
> 
> "Probably a birth certificate or something like that." (P3)

> _When asked "What action would you take here if you reviewed your dependents and they were correct?" when reviewing Your VA Dependents_
> 
> “If nothing has changed, [I would] close everything out." (P3)

**Recommendation #1: Provide adequate context around dependent verification's connection to the 8-year Mandatory Verification of Dependents at key touch points on VA.gov and in other VA communications.**
- In the future, consider building verification into the flow of adding and removing dependents.

**Finding #2: There are opportunities to improve the findability of dependent verification specifically and dependent management in general, both in the short-term (MVP launch) and long-term.**

- Findability of the the MVP experience was a big concern for us leading up to the study, so we engaged the Content & IA Centralized Team in a findability exploration that resulted in several [recommended improvements](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1717521751866/127cbff63df95bedf011a5463797989197bc069d?sender=u859fac93c61da901b7914439) for the dependent verification MVP. 
- These concerns were validated by our findings, including that most participants expected to find tools to manage their dependents either under the main benefits menu on VA.gov (4) or a hub like MyVA (3).
  - While you can find a link that leads to the dependent verification MVP under the main benefits menu, only one participant was able to locate that link.
  - Other participants expected to find dependent management tools via the authenticated menu (2), VA.gov search (1) and the Top Links section on VA.gov home (1).

**Recommendation 2: Implement recommendations from our findability exploration that were validated by the study.**
- For MVP launch, include context around verification at key touch points and cross-link pathways.
- Later, re-examine how dependent management is positioned on VA.gov's information architecture. 

**Finding #3: Some participants (2 of 7) were caused significant confusion when reviewing the "Dependents on your VA benefits" and "Dependents not on your VA benefits" sections on Your VA Dependents.**
- Veteran's dependents are displayed in 2 sections on Your VA Dependents with the following headers and descriptions:
  - Dependents on your VA benefits: These dependents are on your VA benefits. You can update these dependents any time.
  - Dependents not on your VA benefits: These dependents aren't on your VA benefits. They may not be eligible or we may need to determine their dependent status. You can update these dependents any time.
- One of these two shared that they would stop their progress and call the VA to confirm no mistakes had been made.
- Another was confused about why they were being shown dependents not on their benefits or why they were still referred to as "Dependents" if they were not eligible to be on the participant's benefits.

> "There's no way to know why this dependent is not on your benefits." (P6)

**Recommendation #3: Enrich dependent cards with clarifying information.**
- Dependent cards can be enriched with information like why a dependent is not on your benefits, date of removal, type of benefit the dependent is or was on, links out to eligibility information and next steps, etc. 

**Finding #4: All of the participants prompted with the need to correct personal information for their existing dependents (6 of 6) incorrectly chose to do so via the "Yes: Update" option.**
- For this scenario, we asked participants what they would do if they noticed that the name, date of birth, or social security number of one of their dependents was incorrect.
  - This is from the first step in the dependent verification MVP form, where Veterans are asked to review their dependents. The screen includes:
    - The info cards of the dependents on the Veteran's VA benefits
    - A note instructing Veterans to call the VA if they need to make changes to the personal information for the dependents on their VA benefits
    - The key decision point for the verification MVP that asks "Do you need to update any of the dependents on your VA benefits?" and the two options for answers:
      - "Yes: Update dependents with the online tool to add or remove dependents on your VA benefits (VA Forms 21-686c and 21-674)."
      - "No: Review and certify the information we’re submitting on your behalf for your verification of dependents (VA Form 21-0538)."
- This caused some confusion for participants who followed that path and saw only language to "add or remove" dependents.
- None of the prompted participants read the note regarding the need to call the VA.
- Despite this confusion, participants who were prompted with the happy path (needing to verify or add or remove a dependent) were able to correctly interpret the MVP key decision point.
  - All participants propmted with the scenario that their dependents are all correct from this screen chose "No: verify" with confidence. 

> "Update and edit is pretty much the same thing." (P3)

**Recommendation #4: Break up information on this page to improve readability and comprehension.**
- Rather than asking if the Veteran would like to update or verify on the same page as we’re providing directions for how to correct personal information for dependents, we can break up this information to reduce risk of confusion.
  - Increase clarity by breaking the flow into separate pages: 
    1. Correct dependent personal information
    2. Add/remove or verify 
- Alternatively (or in combination with breaking up content), use more specific language in the key decision point (i.e. "add/remove" in place of "update").
- [Go to suggested flow](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1709582312238/ae3de21fd188beba8c28668ee37a31841c6203bf?wid=0-1743019561703)
- [Go to recommendations in Figma](https://www.figma.com/design/bvj72inycD0iZkuCbjYTWL/Dependent-Verification-MVP?node-id=2809-74335&t=evfeXfHDOwDraz52-1)


**Finding #5: Many participants paused or were unclear about how to correct personal or contact information.**
- Most (6 of 9) participants prompted to correct their contact information expected changes to the form to also apply to their VA profile.
- Most (6 of 9) participants prompted to correct personal information would call the VA
  - Only 3 of those called because they read the directions to do so.
  - Some of those who would call expressed familiarity with that process.
  - Many participants (including some of those who would ultimately call the VA) looked for a way to update personal information from within the form.
    
> “Why do I have two different addresses?" (P6)

> "There are some people who will change their phone number as often as they change their underwear." (P8)

**Recommendation #5: Update designs to improve readability and meet Veteran expectations.**
- Consider alternative treatment of the note about calling the VA to change personal information (e.g. put into an alert or share directions on a separate page)
- Give Veterans the option to update profile information when updating contact information within the form, which already exists in a [VADS pattern](https://www.figma.com/design/1z3bAkQl4uR1IvAxmtyqZi/AE-Design-Patterns---Update-Prefill?node-id=4013-14358&t=MC0Edy1AehQfrVg0-1). This will force them to acknowledge that changes to contact information will not apply to profile information unless they opt in.

## Secondary Findings

**Secondary Finding #1: Most participants were unclear about how to interpret the mandated 8-year (21-0538) letter requesting verification.**
- We prompted participants with the scenario that they received the letter after having engaged with the MVP on VA.gov. We wanted to assess the risk of a Veteran ignoring the letter after having updated their dependents via the verification MVP on VA.gov.
- Several participants initially interpreted it as a confirmation of the actions they took in the verification MVP on VA.gov.
- Others were confused about why they were receiving the letter, seeing it as redundant, or were concerned that there had been some mistake.

> "This should be a confirmation of what I did online. And you already have a receipt of this [on the] website. It's very confusing." (P10)

**Secondary Finding #2: All participants with dependent children experienced pain points around the 18-year-old to school-age transition.**
- For participants with dependent children, this was often the first thing they mentioned when asked about their experiences managing dependents, so this pain point is both common and memorable.
- Two of our participants had children automatically age out at 18 before they graduated high school.
- One had their application for school-age benefits (VA Form 21-674) denied due to their child already receiving Chapter 35 benefits.
- Two experienced pain points around having to remove their children at 18 themselves (e.g. long wait times at the VA office or owing overpayments). These experiences occurred before automatic drop-off at 18 was in place. 

> “From an efficiency standpoint, there's got to be a better way to handle [children aging out while still in high school]." (P12)

**Recommendation #4: Work with our partners at VBA to align on notifications for dependent verification** and continue to share findings that broadly impact the users of our tools with our VBA partners to improve the dependent management experience in general. 
- Propose coordinated approach to verification notifications and sending of 8-year mandated batch letters so that we can avoid potential overlap of digital and paper notifications and causing the Veteran undue confusion or frustration. 
- Suggest a timeline for when specific steps in dependent verification notification launch should happen, including what's required of the online experience before the notification launch (e.g. waiting to launch until Veteran engagement with the online tool to add or remove dependents can generate a 21-0538).
- Work with VBA partners to find potential solutions to recurring pain points for users of our tools, such as the struggles around the 18-year-old to school-age transition.

