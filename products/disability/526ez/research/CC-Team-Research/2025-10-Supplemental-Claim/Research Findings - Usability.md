---
title: "[2025-10 Supplemental Claims Design Directions] Research Findings - Usability"
product: "Online Form 526 (Disability Claim) - Conditions Section, Supplemental Claims Flow"
team: "Conditions Team"
office: "Office of the CTO - Digital Experience (OCTO-DE)"
date: "2026-01-15"
researchers:
  - "Clara Fritz"
  - "Kim Ladin"
research_goals:
  - "Identify which design direction best supports Veterans in filing Supplemental Claims within Form 526."
  - "Gather feedback on Platform-recommended changes and differentiation of secondary conditions in the flow."
  - "Explore differentiating secondary conditions on the main ‘Add a condition’ screen."
methodology:
  - "Semi-structured, exploratory interviews and task-based usability testing comparing two prototypes."
devices_used:
    desktop: 7
    tablet: 2
    smartphone: 1
    assistive_technology: 0
participants_total: 10
demographics:
  veterans: 10
  service_members: 0
  caregivers: 0
  dependents: 0
  VA_staff: 0
  age:
    "25-34": 2
    "35-44": 0
    "45-54": 2
    "55-64": 1
    "65+": 5
    unknown: 0
  education:
    high_school: 5
    some_college: 0
    associates: 2
    bachelors: 2
    masters: 1
    doctorate: 0
    unknown: 0
  location:
    urban: 7
    rural: 3
    unknown: 0
  race:
    white: 5
    black: 4
    hispanic: 0
    biracial: 1
    asian: 0
    native: 0
  disability:
    cognitive: 0
    AT_beginner: 0
    AT_advanced: 0
    screen_reader_desktop: 0
    screen_reader_mobile: 0
    magnification_zoom: 0
    speech_input: 0
    hearing_aids: 0
    sighted_keyboard: 0
    captions: 0
key_findings:
  - "Veterans strongly prefer viewing all of their conditions, both rated and denied, on the ‘Add a condition’ screen, as in prototype Apple."
  - "It is extremely difficult for Veterans to differentiate between a Claim for Increase and a Supplemental Claim."
  - "Veterans expect to provide contextual information and evidentiary support about their claim, and were confused about how to do that and why they weren’t able to."
  - "Most participants were able to add a new condition on both versions of the ‘Add a condition’ screen, but a few struggled."
  - "Users were successful in adding secondary conditions, although they don’t know VA terminology."
  # etc.
recommendations:
  - "Implement Prototype Banana’s ‘Add a condition’ screen once the decision to support Supplemental Claims in the 526 form is finalized."
  - "Assume a Claim for Increase for rated conditions (vs a Supplemental Claim) to remove decision burden for users."
  - "Provide decision support to help Veterans understand the differences between a Claim for Increase and a Supplemental Claim."
  - "Make room for users to provide context and justification right after adding a condition."
  - "Make it clear and explicit that Veterans will be asked for evidence at a specific point later in the form."
  - "List conditions in alphabetical order on the ‘Add a condition’ screen."
  - "Explore asking Veterans to indicate whether their Supplemental Claim is based on new evidence or a change in law."
further_research_needed:
  - "The ease with which a Veteran can add a new condition on the ‘Add a condition’ screen that features tiled radio buttons, subheaders, list order method, and/or a combination of these UI adjustments."
  - "How Veterans respond to and interpret intent-oriented content changes to the screens regarding Supplemental Claims and Claims for Increase."
underserved_groups_missing:
  - "While we recruited for Veterans with other than honorable discharge, and had sessions scheduled with them, both either cancelled beforehand or were a no show."
  - "Additionally, because we tested in Figma we were not able to test with AT users."
synthesis_tools_used:
  - "[Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1763754263362/8090932e8c64bf7b1ce609df56a7f1ab1170e1ed): post-session debrief notes with observers, screen-specific feedback mapping, task-specific success/failure tracking, affinity mapping, analysis and synthesis, mental model mind maps"
  - "[Spreadsheet](https://docs.google.com/spreadsheets/d/1Wo8TDMxRVE3M7Wtc_HWiL0rsD8-S3EbLbRYAxNKONt0/edit?gid=1109817157#gid=1109817157): timestampled notes collection during sessions "
---


# 2025-10 Supplemental Claims Design Directions Research Findings - Usability 

**Office of the CTO - Digital Experience (OCTO-DE), Online Form 526 (Disability Claim) - Conditions Section, Supplemental Claims Flow, Conditions Teame**

**Date:** 01/15/2026

**Contacts:** [Clara Fritz](https://github.com/maddiefritz), [Kim Ladin](https://github.com/KimLadin)

**Research Readout (PDF) - forthcoming**  

**Jump to:**
- [Background](#user-content-background)
- [Research goals](#user-content-research-goals)
- [Methodology](#user-content-methodology)
- [Key findings](#user-content-key-findings)
- [Additional insights](#user-content-additional-insights)
- [Recommendations](#user-content-recommendations)
- [Next Steps](#user-content-next-steps)
- [Appendix](#user-content-appendix)
- [Research participants](#user-content-research-participants)

## Background
The current online Form 526 only allows Veterans to claim a new condition or request an increase for a previously rated condition. Veterans who wish to file a Supplemental Claim — a contestable issue for a previously denied or previously rated condition, which requires new and relevant evidence — must currently use the separate Supplemental Claim form (VA Form 0995).

The challenge is to seamlessly incorporate the ability to claim contestable (supplemental) issues directly into the Form 526 online flow, allowing Veterans to claim supplemental conditions, or a mix of new, increase, and supplemental conditions, all within a single application. This enhanced filing approach supports VA’s “no wrong door” policy, ensuring a Veteran is connected to necessary services regardless of how they seek help. The design must accommodate this new condition category without disrupting the already successful mental model for "New" and "Increase" conditions.

This work will involve iterating on the existing 526 online form, and it will affect authenticated users.
In addition, there is a companion report that focuses specifically on Veterans’ mental models around disability claims. These insights will directly inform our work on the Conditions flow, and we hope also be of value to other teams across the VA working on the disability benefits user experience.

Link to [Product overview](https://github.com/department-of-veterans-affairs/va.gov-team/issues/115464)

## Research Goals
This research had two goals:

1. Primarily, we want to learn which of two design directions best meets user needs when filing a Supplemental Claim within the online 526EZ form, without negatively impacting the user experience of filing a standard disability claim, and
2. Secondly, we want to understand Veterans’ mental models around disabilities and the claims and appeals processes so we can adjust the structure of the conditions flow to best meet Veteran expectations.

>[!NOTE]
>Another report document contains the mental model definition. This report is dedicated to our usability-oriented findings from our research.

Both of these goals support the Getting Out, Taking Care of Myself, and Retiring stages of the [Veteran journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf). In the Getting Out stage, Veterans are engaging with VA to access benefits and services, especially healthcare and disability support. In the Taking Care of Myself stage, they are continuing to engage in support services, like seeking disability compensation for service-related chronic and/or mental health needs. In the Retiring stage, Veterans are finding additional sources of income, like disability compensation. Regardless of the specific experiences unique to each stage, enhancements made to the form as a result of this research will improve the overall disability filing experience.

When time allowed, we also asked Veterans about secondary conditions to understand their familiarity with the term and concept to further inform our understanding of their mental models. Lastly, we gathered Veteran feedback and responses to some UI changes recommended by the Platform team.


## Research Questions

### Goal: Determine which of the design directions best meets user needs when filing a Supplemental Claim within the online 526, without negatively impacting the user experience of filing a standard disability claim.
- Is one design easier to navigate and understand than the others?
- How well does each design communicate to users that they can create a Supplemental Claim for a condition within the 526 flow?
- How easy is it for users to add a supplemental condition to their claim?
- Are there any usability problems introduced by the new design that might affect Veterans’ ability to file a new or increase claim?
- How do Veterans react to seeing a list of conditions that have been denied?
- Do Veterans experience form fatigue or get overwhelmed by the number of options?
- Does the design create confusion, especially in areas which could negatively impact the outcome of their claim?
- Which design is perceived by Veterans as easier to use or more supportive?
- Does the prototype help Veterans understand the basic evidentiary requirements for Supplemental Claims?
- For “CFI distinction,” do Veterans understand the difference between filing a Claim for Increase versus a Supplemental Claim?

### Goal: Explore some of the recommended changes suggested by Platform in our Design Intent meeting.
- What is the effect of clustering the conditions list with subheads?
- What are the advantages and disadvantages of using tiles instead of radio buttons on the “Add a condition” screen?

### Goal: Explore differentiating secondary conditions on the main ‘Add a condition’ screen.
- Are Veterans familiar with the concept of a secondary condition?
- Are Veterans familiar with the term “secondary condition”?
- How would a Veteran add a secondary condition to their claim?


## Methodology 

### Participants
We interviewed 10 Veterans with a mix of experience in filing disability claims. 9 were receiving disability compensation, and 3 of them had filed an appeal to challenge a VA disability decision. 7 joined the session on a computer; 2 used a tablet; and one used a phone. More details on the participants can be found in the Appendix.

### Testing structure
Our methodology combined semi-structured, exploratory interviews with task-based usability testing to compare two different prototypes. In these sessions, we asked Veterans to share their screens and think aloud as they fill out a section of the online 526 application. The scenarios focused on adding several different types of conditions (new, rated, and denied) to a disability claim. Veterans saw both prototypes in each session, and we swapped the prototype order between sessions.

Sessions were 75 minutes. They were structured as follows:

- 5 minutes for introduction and housekeeping
- 10-15 minutes for open discussion of disabilities, claims, and appeals
- 10-15 minutes of scenario-based usability testing for the first prototype
- 10-15 minutes of scenario-based usability testing for the second prototype
- 5-10 minutes for comparing prototypes
- 5-10 minutes for reflection questions and session wrap-up

### Data collection
- Capture interview transcripts and notes for mental model and language analysis
- Record scenario completion rates
- Capture qualitative feedback through think-aloud protocol
- Record observations of user behavior that may reveal points of clarity or confusion, confidence or hesitation, facility or frustration
- Collect stated preferences between competing prototypes

### Location and device
Sessions were conducted remotely, over Zoom. Participants joined from a computer, tablet, or smartphone.

### Research materials
- [Convesation guide V1](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/CC-Team-Research/2025-10-Supplemental-Claim/Conversation%20guide%20-%202025-10-Supplemental-Claim.md)
- [Conversation guide V2](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/CC-Team-Research/2025-10-Supplemental-Claim/Conversation%20guide%20v2%20-%202025-10-Supplemental-Claim.md)
- [Prototype](https://www.figma.com/proto/P6IUm8gN00H3Yi1XzN80fj/-526ez--Condition-information-entry?page-id=6174%3A18589&node-id=6524-47192&viewport=653%2C-7741%2C0.75&t=UWlAy6DgYnnYEKOL-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=6524%3A47192&show-proto-sidebar=1)

>[!NOTE]
>Participants 1-5 consistently struggled with differentiating between a Supplemental Claim and a Claim for Increase. Because it was a major goal of this study to understand how Veterans perceive the two claim types, we worked with our VA partners to tweak the prototypes with the intent to further clarify the intent of these claims. These updates necessitated minor changes to the conversation guide. The V2 conversation guide was used for all sessions after participant 5, and reflected language changes made to the Supplemental Claim info screen in prototype Apple, language changes made to the previously denied conditions and rated condition follow-up screens in prototype Banana, and the removal of a redundant Supplemental Claim information screen in prototype Banana.


## Key Findings

1. [Veterans strongly prefer viewing all of their conditions, both rated and denied, on the ‘Add a condition’ screen, as in the prototype Apple.](#user-content-finding-1-veterans-strongly-prefer-viewing-all-of-their-conditions-both-rated-and-denied-on-the-add-a-condition-screen-as-in-prototype-apple)
2. [It is extremely difficult for Veterans to differentiate between a Claim for Increase and a Supplemental Claim.](#user-content-finding-2-it-is-extremely-difficult-for-veterans-to-differentiate-between-a-claim-for-increase-and-a-supplemental-claim)
3. [Veterans expect to provide contextual information and evidentiary support about their claim, and were confused about how to do that and why they weren’t able to.](#user-content-finding-3-veterans-expect-to-provide-contextual-information-and-evidentiary-support-about-their-claim-and-were-confused-about-how-to-do-that-and-why-they-weren't-able-to)
4. [Participants had trouble adding a new condition in prototype Apple.](#user-content-finding-4-participants-had-trouble-adding-a-new-condition-in-protoype-apple)
5. Users were successful in adding secondary conditions, although they don’t know VA terminology.


## Details of Findings 

### Finding 1: Veterans strongly prefer viewing all of their conditions, both rated and denied, on the ‘Add a condition’ screen, as in prototype Apple.
[IMAGE - FORTHCOMING]

#### The conditions list

9 of the 10 participants strongly appreciated seeing the full conditions list on a single page, supporting user orientation and recall. 
  > **P8:** “It showed me immediately those things that were not approved and those that were denied. Especially when people are not physically well or have mental health issues or they have PTSD…are you really going to remember what you were denied in the past?”

  > **P10:** “Everything is right there, I don’t have to click on something else and wait for another page to load.”

While users had an easy time adding a Supplemental Claim on both prototypes, Banana imposed more cognitive burden by requiring Veterans to remember their denied conditions rather than displaying them up front. Denied conditions were hidden on a secondary page, requiring extra clicks and delaying clarity. This approach also conflicted with Veterans' outcome-driven expectations by postponing information about other claim pathways. Several Veterans expressed doubt they'd remember everything they'd been denied:
  > **P8:** “I guess your memory would have to be very good. You’d have to know whether you’d claimed it before and whether or not it was previously denied.”

  > **P13:** “What if I don’t remember what I applied for?”

Contrary to what we expected, Veterans expressed no adverse reactions to seeing a list of denied conditions.

#### Prototype-specific preferences

Various factors informed the preferences between the two prototypes:

- For prototype Apple:
  - 9 Veterans prefer seeing their denied conditions on the ‘Add a new condition’ screen
  - 4 expressed appreciation for the incorporation of subheaders dividing rated from denied conditions
  - 2 explicitly stated that Apple was easier to scan
  - 4 preferred the standard radio button approach
  - 2 struggled and 1 failed to add a new condition to their claim
- For prototype Banana:
  - 3 Veterans perceived Banana to introduce more cognitive burden
  - 5 said they were unlikely to remember their denied conditions, and disliked having to navigate to a different page to view them
  - 5 preferred the tiled radio button approach
    - While the content of Apple’s ‘Add a condition’ screen was preferred, there was strong visual preference for the tiled radio buttons in Banana.
  - 0 failed to add a new condition to their claim


### Finding 2: It is extremely difficult for Veterans to differentiate between a Claim for Increase and a Supplemental Claim. 
Building on our mental model findings (explored in detail in a separate, dedicated report), Veterans frame disability filing around goals and reasons - not procedural pathways. Requiring Veterans to think in terms of procedural categories caused problems at one critical point in Prototype Banana.

Prototype Banana allows users to file a Supplemental Claim for a rated disability (not just a denied condition, like in prototype Apple). When a user adds a rated disability to their claim, they are asked to choose between a Claim for Increase and a Supplemental Claim. This requirement caused so much confusion in the first four research sessions that we modified the prototype, adding more explanatory content before requiring them to choose. But this new content did little to reduce confusion. 

[IMAGE - FORTHCOMING]

>[!NOTE]
>This distinction only appeared in Prototype Banana; Prototype Apple did not offer the choice of a Supplemental Claim on a rated disability.

#### Perceived differences between claim options
Veterans perceived both options as the same thing: trying to get a higher rating by adding more evidence.
  > **P1:** “These are the same, they’re just worded differently. For both, you’re trying to get an increase… Why is it different if I have evidence for all of them?”

  > **P3:** “It’s giving me two options, two ways to claim this. They seem very closely similar.”

  > **P6, Adviser:** “If your condition’s gotten worse, then we’re asking them to increase it. But then when you’re talking about filing an appeal, that’s going to confuse some Veterans because they think, OK, I disagree with my rating. So, is that an increase or I’m disagreeing with my rating that I have now?"

The confusion prompted some Veterans to express distrust. 
  > **P1:** “It didn’t really explain what the Supplemental Claim was. It only shows me this [information about evidence] if I click the ‘Appealing’ one. However, if you click the increase, I might have evidence for that as well, but it doesn’t show me this when I click on the ‘Increase.’ **I think that’s misinformation.**”

#### Task success vs. conceptual understanding
On the other hand, most participants actually chose the correct option on the CFI Distinction screen in Banana. It was when we asked them to explain the difference or when they reached the ‘Review your conditions’ screen that they became confused.
- We believe their ability to choose correctly may be an artifact of the test environment. The moderator laid out clear scenarios and set intent specific to either increase or appeal. In the real world, Veterans are likely to reach this screen with the intention to "get a higher percentage" and then become confused about which option to choose.

#### Context screens work when they resolve uncertainty
The ‘Supplemental Claim info’ screen (which appeared after the user chose a denied condition to add) was valued when it answered a decision question, but was otherwise redundant or confusing.

[IMAGE - FORTHCOMING]


### Finding 3: Veterans expect to provide contextual information and evidentiary support about their claim, and were confused about how to do that and why they weren’t able to.
Telling their story and providing evidence are primary pillars of Veterans’ mental model around disability benefits. But the online 526 structure does not match that model.

[IMAGE - FORTHCOMING]

#### Submitting evidence
In particular, Veterans know that evidence is critical to getting their claim approved. When the form doesn’t clearly show where, when, and how to add that evidence, it reduces confidence and causes confusion.

Participants often mentioned expecting to upload evidence. 
  > **P1:** “I expect I’ll be able to upload my evidence on the next screen.”

  > **P10:** “I have new evidence so I'm expecting something on the next page where I have the opportunity to provide that new evidence.”

  > **P13:** “I would hit edit once again for the Hypertension... It would bring up a screen and I could show them my new evidence to prove the rating needs to go up.”

Although one information screen mentions they’ll be able to upload evidence in a later step, it was not enough to set expectations, and most did not read or acknowledge the text at all. (Version 1, which explicitly mentions “step 4,” did garner more attention than the more general “later in this application” in version 2).
- This pattern / perspective combined with the literal interpretation of language (see Additional Insights) inform the evidence-first reasoning and narrative expectation pillars of Veterans’ mental model around disabilities, claims, and appeals.

[IMAGE - FORTHCOMING]

#### Telling their story
Veterans expect more than the ability to upload evidence—they also want to provide context and justify their request. As a result, participants found a selection-only flow insufficient. Many expressed surprise and confusion when they were not given an opportunity to add details about their conditions, describing the experience as incomplete. Notably, even without being prompted, 6 of the 10 participants volunteered that they expected to be able to add more detail.
  > **P1:** “I’m expecting the next screen to be something where I could add a reason, maybe some documents, for wanting that increase.”

  > **P6:** “The next screen will probably ask me … why I’m filing for asthma. I’m hoping it comes up with something for me to say why.”

  > **P8:** “Wouldn't they want some sort of explanation for why I want my hypertension reviewed? Are they just going to do that by looking at my medical records without any input from me?!”

Some Veterans also wanted to indicate the basis for their Supplemental Claim. Participant 13, for example, looked for a radio button on the Supplementary Claim info screen. When that didn’t show up and she landed on the Review your conditions screen, she wanted to click “Edit” to make the selection.
  > **P13:** “I would expect it to have a bubble [radio button] to say whether you have new evidence or you would like to review based on the new law.”

#### Collateral damage on the Review screen
The lack of follow-up questions also led to confusion when users reached the ‘Review your conditions’ screen. Getting to this screen feels sudden, as though a step is missing.
  > **P1:** “The biggest challenge is that it just jumps straight to the review. I’m not seeing where I can add anything [re: evidence].”

  > **P3:** “I’d expect it to be like: here’s my issue, here’s my documents, then on to the next one [condition].”

This confusion may be one reason our participants were eager to interact with the ‘Edit’ buttons within each condition card on the review page:
  > **P5:** “I would click edit to re-open the case so I can re-file … I could state my case why it should be increased.”

  > **P13:** “I would hit edit and see if I can edit what they want me to edit I would put down due to the fact that the law has changed … I would expect that it would bring up a screen and I could show them my new evidence to prove the rating needs to go up.”

We did not see this kind of confusion in our previous study, probably because that study focused more heavily on adding new conditions. New conditions have the kind of follow-up questions that Veterans expect, so the Review your conditions screen made sense when they reached it.


### Finding 4: Participants had trouble adding a new condition in Prototype Apple.


---

## Additional Insights
*Include insights that do not represent patterns but are still valuable.*  
> **TIP:** These could be powerful user comments or unexpected issues worth noting


## Recommendations

*Summarize actionable recommendations based on findings.*  

1. **Recommendation:** [Insert action]  
   - _Supporting evidence: [Insert data]_  
2. **Recommendation:** [Insert action]  
   - _Supporting evidence: [Insert data]_

## Product User and Business Outcomes

*Explain how findings and recommendations align with the product's goals.*

> [!NOTE] 
> Refer back to your Product Outline. 

### Desired User Outcome 
This research supports our desired user outcome by....
 
### Desired Business Outcome
This research supports our desired business outcome by....


## Key Performance Indicators

*Explain how findings will support KPI measurement.*  

> [!NOTE]
> Refer back to your Product Outline. 

### KPI 1
This research supports measurement of this KPI by....
  

## Next Steps

*Outline immediate actions based on findings, including owners if applicable.*  

> [!TIP]
> Once your **Recommendations** and **Next Steps** are finalized, you can quickly turn them into GitHub issues using the reusable Copilot prompt in [`create-issues-from-research-findings-prompt.md`](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/copilot-prompts/research-report/create-issues-from-research-findings-prompt.md).  
> **After creating issues, add their hyperlinks back here under their corresponding "Recommendation" or "Next Step."**
> 
> If you need Github Copilot Enterprise Access, please complete this [Issue](https://github.com/department-of-veterans-affairs/copilot-onboarding/issues/new?template=copilot-onboarding.yml).

## Further research needed

*Identify gaps in the current study and areas requiring additional investigation––such as demographics that were not included in this study.* 


## Appendix

### Research documents
- [Product Outline](link here)
- [Research plan](link here)
- [Conversation guide](link here)
- [Interview transcripts](link here)

### Tools used for Synthesis

*List tools or techniques used, e.g., Mural, affinity mapping.*  
  
### Pages and applications used

*Link to prototypes or pages tested during the study.*  


### Other supporting documents created

*Include links to additional materials, e.g., personas, user flows.*  


### Secondary research

*Include any relevant secondary research, e.g., web analytics, SME interviews.*  

> [!IMPORTANT]
> **After completing the demographic information below and saving this file**, use the [GitHub Copilot Research Findings Frontmatter Completion Prompt](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/copilot-prompts/research-report/research-findings-frontmatter-completion-prompt.md) to automatically populate the YAML frontmatter section at the top of this document with: 
> - Participant demographics (counts, age ranges, education levels, etc.)
> - Key findings and recommendations
> - Research goals and methodology
> - Appropriate research repository tags
>
> The prompt will parse the demographic data from this section and structure it correctly for the frontmatter's nested YAML format. 

### Research participants 
_Complete the demographic info below using information from the Perigean recruitment survey. For those items where you didn't have participants, please mark with "0". You can use "unknown" if you aren't sure if your participants had a characteristic._ 

[Example Research participants](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/digital-experience/ADE/research/2025-05-save-in-progress/research-findings.md#research-participants)

#### Recruitment criteria

_If you had specific criteria that you recruited for, use this space to explain what those were along with other information you feel would be important to understanding your participants._

#### Demographics 

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


#### Underserved groups we haven’t talked to 
> [!NOTE]
_Complete the [VA recruitment checker for marginalized Veteran groups](https://docs.google.com/spreadsheets/d/1pq7TSHZonfpzAQBJj6B2geGHlNUwZEs4DzEvxcRgu0o/edit#gid=1221033726):_
> 1. Duplicate the ***Template*** worksheet
> 1. Enter your participant information **(see the *Template Instructions* worksheet for details)**
> 1. Make a screenshot of the cells that you want to share and paste it into this report below
> 1. Generate an accessible version of those cells using Github Copilot Chat:
>    - Start a new Github Copilot chat
>    - Enter: "I want to convert these spreadsheet cells into a table in markdown:" 
>    - Copy and paste the cells from the recruitment checker spreadsheet that you've filled in
>    - Copy the resulting markdown table by clicking the copy icon in the Copilot chat, and paste it into this report below 
>    - (If Copilot returns an error, try using a different AI model, such as "Claude Sonnet 3.7 Thinking")

This research does not include the perspectives of the following marginalized Veteran groups:
_List all groups in red from the spreadsheet_
* Group 1
* Group 2
* Group 3

➡️ _[insert screenshot of completed recruitment checker in the format below]_

![Table of underserved groups of Veterans showing how many of each were in this study as compared to target numbers. Data available in the table below this image](link - add image to github folder and link here with .png)

#### A more accessible version of the table in the above image

### Recruitment of underserved groups in [Study name]

➡️ _[paste markdown table of completed recruitment checker from Github Copilot chat]_
