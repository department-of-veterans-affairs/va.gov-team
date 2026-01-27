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
- [Convesation guide V1](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/CC-Team-Research/2025-10-Supplemental-Claim/Conversation%20guide.md)
- [Conversation guide V2](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/CC-Team-Research/2025-10-Supplemental-Claim/Conversation%20guide%20v2.md)
- [Prototype](https://www.figma.com/proto/P6IUm8gN00H3Yi1XzN80fj/-526ez--Condition-information-entry?page-id=6174%3A18589&node-id=6524-47192&viewport=653%2C-7741%2C0.75&t=UWlAy6DgYnnYEKOL-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=6524%3A47192&show-proto-sidebar=1)

>[!NOTE]
>Participants 1-5 consistently struggled with differentiating between a Supplemental Claim and a Claim for Increase. Because it was a major goal of this study to understand how Veterans perceive the two claim types, we worked with our VA partners to tweak the prototypes with the intent to further clarify the intent of these claims. These updates necessitated minor changes to the conversation guide. The V2 conversation guide was used for all sessions after participant 5, and reflected language changes made to the Supplemental Claim info screen in prototype Apple, language changes made to the previously denied conditions and rated condition follow-up screens in prototype Banana, and the removal of a redundant Supplemental Claim information screen in prototype Banana.


## Key Findings

1. [Veterans strongly prefer viewing all of their conditions, both rated and denied, on the ‘Add a condition’ screen, as in the prototype Apple.](#user-content-finding-1-veterans-strongly-prefer-viewing-all-of-their-conditions-both-rated-and-denied-on-the-add-a-condition-screen-as-in-prototype-apple)
2. [It is extremely difficult for Veterans to differentiate between a Claim for Increase and a Supplemental Claim.](#user-content-finding-2-it-is-extremely-difficult-for-veterans-to-differentiate-between-a-claim-for-increase-and-a-supplemental-claim)
3. [Veterans expect to provide contextual information and evidentiary support about their claim, and were confused about how to do that and why they were not able to.](#user-content-finding-3-veterans-expect-to-provide-contextual-information-and-evidentiary-support-about-their-claim-and-were-confused-about-how-to-do-that-and-why-they-were-not-able-to)
4. [Participants had trouble adding a new condition in Prototype Apple.](#user-content-finding-4-participants-had-trouble-adding-a-new-condition-in-prototype-apple)
5. [Users were successful in adding secondary conditions, although they do not know VA terminology.](#user-content-finding-5-users-were-successful-in-adding-secondary-conditions-although-they-do-not-know-va-terminology)


## Details of Findings 

### Finding 1: Veterans strongly prefer viewing all of their conditions, both rated and denied, on the ‘Add a condition’ screen, as in prototype Apple.

|<img width="641" height="861" alt="Screenshot 2026-01-16 at 12 44 21" src="https://github.com/user-attachments/assets/2726b44d-8202-4474-88b5-efc503390620" />|
|---|

#### The conditions list

9 of the 10 participants strongly appreciated seeing the full conditions list on a single page, supporting user orientation and recall. 
  - _“It showed me immediately those things that were not approved and those that were denied. Especially when people are not physically well or have mental health issues or they have PTSD…are you really going to remember what you were denied in the past?”**(P8)**_
  - _“Everything is right there, I don’t have to click on something else and wait for another page to load.” **(P10)**_

While users had an easy time adding a Supplemental Claim on both prototypes, Banana imposed more cognitive burden by requiring Veterans to remember their denied conditions rather than displaying them up front. Denied conditions were hidden on a secondary page, requiring extra clicks and delaying clarity. This approach also conflicted with Veterans' outcome-driven expectations by postponing information about other claim pathways. Several Veterans expressed doubt they'd remember everything they'd been denied:
  - _“I guess your memory would have to be very good. You’d have to know whether you’d claimed it before and whether or not it was previously denied.” **(P8)**_
  - _“What if I don’t remember what I applied for?” **(P13)**_

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

|<img width="601" height="843" alt="Screenshot 2026-01-16 at 12 39 47" src="https://github.com/user-attachments/assets/83f0cf04-20fc-44ed-a6e2-d7dc988b1f9d" />|
|---|

>[!NOTE]
>This distinction only appeared in Prototype Banana; Prototype Apple did not offer the choice of a Supplemental Claim on a rated disability.

#### Perceived differences between claim options
Veterans perceived both options as the same thing: trying to get a higher rating by adding more evidence.
  - _“These are the same, they’re just worded differently. For both, you’re trying to get an increase… Why is it different if I have evidence for all of them?” **(P1)**_
  - _“It’s giving me two options, two ways to claim this. They seem very closely similar.” **(P3)**_
  - _“If your condition’s gotten worse, then we’re asking them to increase it. But then when you’re talking about filing an appeal, that’s going to confuse some Veterans because they think, OK, I disagree with my rating. So, is that an increase or I’m disagreeing with my rating that I have now?" **(P6, Adviser)**_

The confusion prompted some Veterans to express distrust. 
  - _“It didn’t really explain what the Supplemental Claim was. It only shows me this [information about evidence] if I click the ‘Appealing’ one. However, if you click the increase, I might have evidence for that as well, but it doesn’t show me this when I click on the ‘Increase.’ **I think that’s misinformation.**” **(P1)**_

#### Task success vs. conceptual understanding
On the other hand, most participants actually chose the correct option on the CFI Distinction screen in Banana. It was when we asked them to explain the difference or when they reached the ‘Review your conditions’ screen that they became confused.
- We believe their ability to choose correctly may be an artifact of the test environment. The moderator laid out clear scenarios and set intent specific to either increase or appeal. In the real world, Veterans are likely to reach this screen with the intention to "get a higher percentage" and then become confused about which option to choose.

#### Context screens work when they resolve uncertainty
The ‘Supplemental Claim info’ screen (which appeared after the user chose a denied condition to add) was valued when it answered a decision question, but was otherwise redundant or confusing.

|<img width="610" height="837" alt="Screenshot 2026-01-16 at 12 50 43" src="https://github.com/user-attachments/assets/c9bb0693-e78b-4480-9c14-3f73b5acbb1b" />|
|---|


### Finding 3: Veterans expect to provide contextual information and evidentiary support about their claim, and were confused about how to do that and why they were not able to.
Telling their story and providing evidence are primary pillars of Veterans’ mental model around disability benefits. But the online 526 structure does not match that model.

|<img width="1559" height="440" alt="Screenshot 2026-01-27 at 09 26 54" src="https://github.com/user-attachments/assets/3e783ba3-564d-49a6-ba73-448e2be485dd" />|
|---|

#### Submitting evidence
In particular, Veterans know that evidence is critical to getting their claim approved. When the form doesn’t clearly show where, when, and how to add that evidence, it reduces confidence and causes confusion.

Participants often mentioned expecting to upload evidence. 
  - _“I expect I’ll be able to upload my evidence on the next screen.” **(P1)**_
  - _“I have new evidence so I'm expecting something on the next page where I have the opportunity to provide that new evidence.” **(P10)**_
  - _“I would hit edit once again for the Hypertension... It would bring up a screen and I could show them my new evidence to prove the rating needs to go up.” **(P13)**_

Although one information screen mentions they’ll be able to upload evidence in a later step, it was not enough to set expectations, and most did not read or acknowledge the text at all. (Version 1, which explicitly mentions “step 4,” did garner more attention than the more general “later in this application” in version 2).
- This pattern / perspective combined with the literal interpretation of language (see Additional Insights) inform the evidence-first reasoning and narrative expectation pillars of Veterans’ mental model around disabilities, claims, and appeals.

|<img width="626" height="858" alt="Screenshot 2026-01-16 at 13 03 25" src="https://github.com/user-attachments/assets/644c3af1-4ee4-478b-a251-d5265a651621" />|
|---|


#### Telling their story
Veterans expect more than the ability to upload evidence—they also want to provide context and justify their request. As a result, participants found a selection-only flow insufficient. Many expressed surprise and confusion when they were not given an opportunity to add details about their conditions, describing the experience as incomplete. Notably, even without being prompted, 6 of the 10 participants volunteered that they expected to be able to add more detail.
  - _“I’m expecting the next screen to be something where I could add a reason, maybe some documents, for wanting that increase.” **(P1)**_
  - _“The next screen will probably ask me … why I’m filing for asthma. I’m hoping it comes up with something for me to say why.” **(P6, Adviser)**_
  - _“Wouldn't they want some sort of explanation for why I want my hypertension reviewed? Are they just going to do that by looking at my medical records without any input from me?!” **(P8)**_

Some Veterans also wanted to indicate the basis for their Supplemental Claim. Participant 13, for example, looked for a radio button on the Supplementary Claim info screen. When that didn’t show up and she landed on the Review your conditions screen, she wanted to click “Edit” to make the selection.
  - _“I would expect it to have a bubble [radio button] to say whether you have new evidence or you would like to review based on the new law.” **(P13)**_

#### Collateral damage on the Review screen
The lack of follow-up questions also led to confusion when users reached the ‘Review your conditions’ screen. Getting to this screen feels sudden, as though a step is missing.
  - _“The biggest challenge is that it just jumps straight to the review. I’m not seeing where I can add anything [re: evidence].” **(P1)**_
  - _“I’d expect it to be like: here’s my issue, here’s my documents, then on to the next one [condition].” **(P3)**_

This confusion may be one reason our participants were eager to interact with the ‘Edit’ buttons within each condition card on the review page:
  - _“I would click edit to re-open the case so I can re-file … I could state my case why it should be increased.” **(P5)**_
  - _“I would hit edit and see if I can edit what they want me to edit I would put down due to the fact that the law has changed … I would expect that it would bring up a screen and I could show them my new evidence to prove the rating needs to go up.” **(P13)**_

We did not see this kind of confusion in our previous study, probably because that study focused more heavily on adding new conditions. New conditions have the kind of follow-up questions that Veterans expect, so the Review your conditions screen made sense when they reached it.


### Finding 4: Participants had trouble adding a new condition in Prototype Apple.
Adding a new condition was more difficult in prototype Apple than prototype Banana, and more difficult than we saw in [previous testing](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/CC-Team-Research/2025-06%20New%20or%20Increase%20at%20Condition%20Level/New%20or%20Increase%20at%20Condition%20level%20-%20Reseach%20Findings.md). (June 2025 testing of the new Conditions flow found 100% success with no hesitation in selecting “a condition I haven’t claimed before.”)
- Most participants tended to focus first on the subheadings, then on the individual options. The result is that they noticed the ‘A condition I haven’t claimed before’ option **later** in prototype Apple than in prototype Banana or in previous testing.

|<img width="638" height="861" alt="Screenshot 2026-01-16 at 13 06 54" src="https://github.com/user-attachments/assets/e46d78f0-f1bf-4314-b79b-1d4ae9e20216" />|
|---|

Eventually, all but one of the 8 participants who were given this task in Prototype Apple was able to find the correct option. The participants who struggled the longest with this task looked in the list of rated and denied conditions for something related. 
  - _“Maybe under Knee condition? If I clicked, it might take me to another survey with more options.” **(P5)**_
  - _“I would make an assumption and hit knee replacement… ” **(P13)**_

With prototype Banana, participants had an easier time. We believe it’s due in part to the tiled radio buttons which have the effect of individually emphasizing each available option within the conditions list. Of the 7 participants who were given the task, all were successful without . 

In 2025, new conditions typically represented 82-86% of all conditions submitted in the online 526 (per [Datadog](https://dsva.slack.com/archives/C04AZ8T7XN1/p1767819120902409?thread_ts=1767818877.619919&cid=C04AZ8T7XN1)). Given that adding a new condition is the most common use case for this form, this is a risk with the Apple design. 


### Finding 5: Users were successful in adding secondary conditions, although they do not know VA terminology.
Due to time constraints, we were only able to ask 4 of the 10 participants about secondary conditions, but all 4 correctly guessed that they’d claim a secondary condition by selecting ‘A condition I haven’t claimed before’ from the ‘Add a condition’ screen. 

All 4 expressed familiarity with the concept, but weren’t sure how the VA referred to it (except for an adviser). We introduced the concept by describing a situation in which a secondary condition was present, and asked the participants if they knew what this might be called and if they were familiar with that scenario.
  - _“Yes! I’ve heard of it and I’m sure I’m experiencing it.” **(P4)**_ (When asked if they might know how VA refers to this situation, they said _“No.”_)
  - _“Oh, like a secondary?” **(P12, Adviser)**_


---


## Additional Insights

### 1. The “Cancel adding this condition” button draws negative attention.
The “Cancel adding this condition” button is the first button that appears on every screen in the Conditions loop right after the primary information entry. Several participants paused on this button as they were looking to move to the next screen. Two participants reacted negatively to its prominence, interpreting it as the VA’s way of discouraging them from claiming the condition.
  - _“They really want you to cancel adding this condition because it’s really highlighted - they’re fishing!” **(P7)**_
  - _“I would hit continue because I don’t want to cancel - I want more money, thank you!” **(P8)**_

The prominence of the “Cancel…” button also made the Review screen more confusing. When Veterans saw the ‘Delete’ button on each condition card on the Review screen, it seemed redundant but inconsistent with the previous ‘Cancel…’ button. 
  - _“Edit or delete? I don’t understand … Why delete if it gave me the opportunity to cancel on the previous screen?” **(P8)**_

|<img width="995" height="853" alt="Screenshot 2026-01-16 at 13 12 50" src="https://github.com/user-attachments/assets/762c94e1-1dc0-490b-8ccb-0e7105105036" />|
|---|


### 2. The 'Date worsened' screen is still a usability problem.
The Claim for Increase path features a ‘Date worsened’ screen asking participants to define when their condition began worsening. 5 of 10 participants had difficulty with this screen.
  - _“I wouldn’t know the day and year. I don’t pay attention to the exact date. I just noticed that overall things got worse.” **(P1)**_
  - _“How do you know exactly when something got worse?” **(P10)**_
  - _“A lot of the vets don’t know that answer because they don’t have the record in front of them, so a lot of times those dates are left blank.” **(P12, Adviser)**_


### 3. Veterans generally understood the evidentiary requirements for a Supplemental Claim. 
The prototypes informed users of the different evidentiary requirements (“new and relevant evidence” or “a change in law”) for Supplemental Claims. Veterans generally understood these concepts, but “evidence” was better understood than “change in law.”

#### New, relevant evidence
Most participants understood the idea of “new evidence.” This makes sense, since it’s a place where the Veteran’s intent matches the VA procedural requirement -- mapping naturally to Veterans’ mental models. 
But it also heightened Veterans’ anxiety about how they would provide that evidence to VA. 
  - _“How do I actually submit those letters? … I would hope I’d be able to scan the letters into the system and attach it to my request or that I’d be provided with very specific instructions on how to submit my relevant evidence.” **(P8)**_
  - _“I’m never going to wait on the VA to gather documents for me.” **(P4)**_
  - This relates to [Finding 3: Veterans expect to provide contextual information and evidentiary support about their claim, and were confused about how to do that and why they weren’t able to.](#user-content-finding-3-veterans-expect-to-provide-contextual-information-and-evidentiary-support-about-their-claim-and-were-confused-about-how-to-do-that-and-why-they-were-not-able-to)

#### Change in law
“Change in law” was more difficult to understand, dipping into legal territory that is understandably intimidating.
  - _“The only thing that confuses me is the ‘change in law’ because is that really a law, the PACT Act? Even though it’s an act, and I know it got passed…” **(P4)**_
  - _“‘Oh goodness, I don’t know… laws… maybe I need to delete this because I don’t want to do something I’m not supposed to do.’ When you start saying ‘law,’ people get kind of … eerie.” **(P12, Adviser)**_
  - P12, an adviser, said Veterans often seek confirmation when confronted with an unknown: _“Like, wait a minute - a new law? Let me confirm what it is.”_

2 non-adviser participants understood both requirements and were able to clearly articulate the difference.


### 4. Subheaders that group conditions by type (rated or denied) support quick recognition and scannability of the conditions list.
4 of the 10 participants expressed explicit preference for condition grouping via subheaders.
  - _“The way my brain works, I start sorting by groups. Banana, I have to read everything in it. Apple, I can scan the headers and go straight to denied conditions.” **(P3)**_
  - _“I like the bold print that divided the conditions.” **(P12)**_


### 5. Some participants wanted to see the conditions list in order. 
5 of the 10 participants wish the conditions list was organized according to an order, whether alphabetically, or by rating percentage. Some participants said that denied conditions should appear before rated conditions within the list to visually prioritize the conditions with the perceived greatest opportunity for change: _“so I can see if there’s something I can try to do.” **(P4)**_

|<img width="593" height="808" alt="Screenshot 2026-01-16 at 13 18 17" src="https://github.com/user-attachments/assets/ccaa5a04-ad0c-4421-ba5f-06f028b6064f" />|
|---|

  - _“My logical brain would like to see the higher percentage ones on top, like what I’m more disabled on, and then what I could work on with 0% at the bottom.” **(P4)**_
  - _“I’d like to see this list in alpha order or in accordance to rating percentage, probably lower to higher because here it feels all over the place and I’d like to see a little order.” **(P10)**_
  - _“I’d rather see these in alpha order. It’s not even listed by percentage. I would do something like that, not random like this.” **(P13)**_


### 6. The dynamic conditions list was understood and appreciated
Most participants noticed that conditions disappeared from the ‘Add a condition’ screen after they’d been added to the claim. They appreciated this behavior as a way to prevent errors. This echoes our finding in the previous study.
  - _“Makes sense because you don’t want to create multiple of the same [claim] by accident.” **(P3)**_
  - _“It’s good that hypertension is gone so I don’t make a mistake and claim the same thing I claimed before. I could forget.” **(P1)**_
  - _“Oh wait the two that I did are gone. That’s cool - so I can’t open a claim on one I’ve already opened a claim on. I can’t go screw those up or edit and mess them up.” **(P4)**_


### 7. Form fatigue was present, but not prevalent.
1 of the 10 participants expressed fatigue with the number of screens or length of the form. Another participant, an adviser, predicted that the form’s screen count would contribute to Veteran confusion. 
  - _“They [Veterans] want the least time-consuming and most simple approach so that the average older Veteran is able to understand it … [they] want fewer screens to go through.” **(P6, Adviser)**_
  - _“This is going to take forever! My finger is getting tired!” and when asked what they think is going to happen or what they would expect the next screen to show, said “They’re going to ask me a bunch of other weird questions … It’ll be a bunch of questions over and over again. Why won’t these people just pick up the phone and call me because it would take less time.” **(P7)**_

Veterans were typically more fatigued by the process of application, not the form itself.
  - _“I don't want to file until you all put this on the website cause it's so overwhelming right now. I need to have a day where my head isn't hurting, where I’m not super anxious. Whereas if I had this it'd be easy peasy.” **(P4)**_
  - _“It [filing to disagree with a VA decision] was frustrating. They said favorable findings but they didn't want to accept that. I could have pursued it more but I was frustrated with the process… They said I needed to go to a nexus. I didn't want to pay out of pocket and I left it alone.” **(P10)**_
  - When asked how they’d advise a new Veteran about the disability benefits application process: _“Most importantly, grab all your paperwork. I'm sure they have electronic files now. Get copies of everything. Go down to the VA and plan on spending the whole day there. Take your time, try not to get frustrated. It's a slow process, nothing goes quickly.” **(P3)**_


## Recommendations

### 1. Implement Prototype Banana’s ‘Add a condition’ screen once the decision to support Supplemental Claims in the 526 form is finalized.
Support for Supplemental Claims in the 526 form is currently on hold. Referencing a previous datapoint, in 2025, new conditions typically represented 82-86% of all conditions submitted in the online 526 (per [Datadog](https://dsva.slack.com/archives/C04AZ8T7XN1/p1767819120902409?thread_ts=1767818877.619919&cid=C04AZ8T7XN1)). Given that adding a new condition is the most common use case for this form, this is a serious problem with the Apple design. 
  - There is an opportunity to explore future iterations of this page as detailed in the [Next Steps](#user-content-next-steps) section.


### 2. Assume a Claim for Increase for rated conditions (vs a Supplemental Claim) to remove decision burden for users.
The paper intake process operates per this same assumption, and the online experience should align with that approach. Since participants struggled to distinguish between a Claim for Increase and a Supplemental Claim (see [Finding 2](#user-content-finding-2-it-is-extremely-difficult-for-veterans-to-differentiate-between-a-claim-for-increase-and-a-supplemental-claim)).


### 3. Provide decision support to help Veterans understand the differences between a Claim for Increase and a Supplemental Claim.
If we decide to let users choose between either claim pathway for rated disabilities, the UI needs to include intent-oriented context so that Veterans understand the options and are able to make a confident decision.
  - Provide plain-language guidance that starts with Veteran’s intent rather than VA terminology. It may be helpful to anchor the options in relation to different points in time.
    - Example: My condition has worsened over time > Claim for Increase; I’m challenging the original decision > Supplemental Claim.
  - We will need to test the content again with users.


### 4. Make room for users to provide context and justification right after adding a condition.
This could be as simple as introducing a free-text field that allows the user to satisfy their narrative expectation. 
  - The current paper versions of form 21-526EZ for disability benefits and Claims for Increase and form 20-0995 for Supplemental Claims both allow for addendums and evidence attachments, so incorporating a free text field on the digital version of this form for Veteran context further aligns the online and paper forms.


### 5. Make it clear and explicit that Veterans will be asked for evidence at a specific point later in the form.
This approach better aligns with Veterans’ mental model of filing - an intent-based process focused on “helping the VA say yes” - and reduces anxiety about whether their submission is complete.


### 6. List conditions in alphabetical order on the ‘Add a condition’ screen. 
This will promote scannability and user wayfinding at the outset of the Conditions step of the disability application process. 


### 7. Explore asking Veterans to indicate whether their Supplemental Claim is based on new evidence or a change in law.
Consistent with [recommendation 5](#user-content-5-make-it-clear-and-explicit-that-veterans-will-be-asked-for-evidence-at-a-specific-point-later-in-the-form), Veterans expect the opportunity to not only contextualize the why of how they’re filing, but to provide justification as well. They are outcome-oriented when it comes to filing for disability benefits. 


## Next Steps
  - Further work on these designs is on hold until outstanding questions about the paper version of the forms (526 and 0995), specifically whether or not it will support the filing of Supplemental Claims, are resolved.
  - There are opportunities for further research, specifically:
    - The ease with which a Veteran can add a new condition on the ‘Add a condition’ screen that features tiled radio buttons, subheaders, list order method, and/or a combination of these UI adjustments.
    - How Veterans respond to and interpret intent-oriented content changes to the screens regarding Supplemental Claims and Claims for Increase.


## Appendix

### Research documents
  - [Research plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/CC-Team-Research/2025-10-Supplemental-Claim/Research%20Plan%20-%202025-10-Supplemental-Claim.md)
  - [Conversation guide V1](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/CC-Team-Research/2025-10-Supplemental-Claim/Conversation%20guide.md)
  - [Conversation guide V2](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/CC-Team-Research/2025-10-Supplemental-Claim/Conversation%20guide%20v2.md)
  - [Interview transcripts](https://dvagov.sharepoint.com/:f:/r/sites/vaabdvro/Shared%20Documents/0%20-%20Benefits%20Portfolio%20-%20General/Research%20Recordings%20-%20Veteran-Staff-VSO/2025-11%20526EZ%20Supplemental%20Claims%20Design%20Direction?csf=1&web=1&e=bXiWUN)

### Tools used for Synthesis
  - [Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1763754263362/8090932e8c64bf7b1ce609df56a7f1ab1170e1ed): post-session debrief notes with observers, screen-specific feedback mapping, task-specific success/failure tracking, affinity mapping, analysis and synthesis, mental model mind maps
  - [Spreadsheet](https://docs.google.com/spreadsheets/d/1Wo8TDMxRVE3M7Wtc_HWiL0rsD8-S3EbLbRYAxNKONt0/edit?gid=1109817157#gid=1109817157): timestampled notes collection during sessions

### Pages and applications used
  - [Prototype Apple](https://www.figma.com/proto/P6IUm8gN00H3Yi1XzN80fj/-526ez--Condition-information-entry?page-id=6174%3A18589&node-id=6225-28762&viewport=487%2C-7286%2C0.7&t=iysFGHlWrbJqCNTW-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=6225%3A28762&show-proto-sidebar=1)
  - [Prototype Banana](https://www.figma.com/proto/P6IUm8gN00H3Yi1XzN80fj/-526ez--Condition-information-entry?page-id=6174%3A18589&node-id=6241-54179&viewport=487%2C-7286%2C0.7&t=iysFGHlWrbJqCNTW-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=6241%3A54179&show-proto-sidebar=1)

### Previous research on Conditions flow
  - [2025-06 New/Increase at Condition Level](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/CC-Team-Research/2025-06%20New%20or%20Increase%20at%20Condition%20Level/New%20or%20Increase%20at%20Condition%20level%20-%20Reseach%20Findings.md)

### Research participants 
#### Recruitment criteria
We, in partnership with Perigean, recruited Veterans across the following categories:
  - Have previously filed a disability claim of any type within the last 15 years AND never appealed a disability decision
  - Have previously filed a disability claim of any type within the last 15 years AND an appeal to a disability decision
  - Have never filed a disability claim
  - Have experience helping other Veterans file disability claims (2) (haven’t necessarily filed a claim themselves)

In terms of Veteran backgrounds, we aimed for a balanced group across demographics. Because we’ll use Figma wireframes for testing, we did not recruit for AT users. We also aimed to over-recruit for groups that were under-represented in our most recent study (see “2025-06 New/Increase Conditions” tab in the VA Recruitment Checker for Equality; this study’s equality metrics are tracked in the “2025-10 Supplemental Claims in 526” tab of the same spreadsheet).

#### Demographics 

We talked to **10 participants.**

Audience segment:
* Veterans: 10
* Caregivers: 0 
* Family members of a Veteran: 0


Gender:
* Male: 3
* Female: 7


LGBTQ+:
* Transgender: 0
* Nonbinary, gender fluid, gender queer, Two-Spirit (Indigenous only), or another gender beyond man or woman: 0
* Gay, lesbian, or bisexual: 2


Devices used during study: 
* Desktop: 7
* Tablet: 2
* Smart phone: 1
* Assistive Technology: 0


Age:
* 25-34: 2
* 35-44: 0
* 45-54: 2
* 55-64: 1
* 65+: 5
* Unknown: 0


Education:
* High school degree or equivalent: 5
* Some college (no degree): 0
* Associate's degree, trade certificate or vocational training: 2
* Bachelor's degree: 2
* Master's degree: 1
* Doctorate degree: 0
* Unknown: 0


Geographic location:
* Urban: 7
* Rural: 3
* Unknown: 0


Race:
* White: 5
* Black: 4
* Hispanic: 0
* Biracial: 1
* Asian: 0
* Native: 0


Disability and Assistive Technology (AT):
* Cognitive: 0
* AT beginner: 0
* AT advanced user: 0
* Desktop screen reader: 0
* Mobile screen reader: 0
* Magnification/Zoom: 0
* [Speech Input Technology](https://www.w3.org/WAI/perspective-videos/voice/) like Siri/Dragon Naturally Speaking: 0
* Hearing aids: 0
* Sighted keyboard: 0
* Captions: 0


#### Underserved groups we haven’t talked to 
While we recruited for Veterans with other than honorable discharge, and had sessions scheduled with them, both either cancelled beforehand or were a no show. 

Additionally, because we tested in Figma we were not able to test with AT users.

|<img width="923" height="719" alt="Screenshot 2026-01-16 at 15 09 52" src="https://github.com/user-attachments/assets/c16a9c61-e8a6-4523-a74e-3c6713580828" />|
|---|

<br>
<br>
<br>

➡️ _**markdown table of completed recruitment checker follows:**_

|                                                                                                                                                                                                                                                                                                                                                                | Category                                                   | Target % | Target # | \# in Study | Target Achieved? | p1  | p2  | p3  | p4  | p5  | p6  | p7  | p8  | p9  | p10 | p11 | p12 | p13 |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- | -------- | -------- | ----------- | ---------------- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| All participants                                                                                                                                                                                                                                                                                                                                               | Total                                                      | n/a      | n/a      | 13          | n/a              | 1   | n/a | 1   | 1   | 1   | 1   | 1   | 1   | n/a | 1   | n/a | 1   | 1   |
| Assistive Tech (AT) users                                                                                                                                                                                                                                                                                                                                      | Total                                                      | n/a      | n/a      | 0           | n/a              | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a |
| No-show participants                                                                                                                                                                                                                                                                                                                                           | Total                                                      | n/a      | n/a      | 3           | n/a              | n/a | N   | n/a | n/a | n/a | n/a | n/a | n/a | N   | n/a | N   | n/a | n/a |
| [Age 55-64+](https://www.va.gov/VETDATA/docs/SurveysAndStudies/VETPOP.pdf)                                                                                                                                                                                                                                                                                     | General                                                    | 50%      | 7        | 6           | no               | 0   | N   | 0   | 0   | 1   | 1   | 1   | 1   | 0   | 0   | 0   | 1   | 1   |
| [Cognitive Disability](https://www.census.gov/content/dam/Census/library/working-papers/2016/demo/Holder-2016-01.pdf)                                                                                                                                                                                                                                          | General                                                    | 50%      | 7        | 0           | no               | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   |
| [Mobile user](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6125614/#:~:text=The%20rate%20of%20smartphone%20ownership,low%20levels%20of%20current%20engagement.)                                                                                                                                                                                                | General                                                    | 50%      | 7        | 1           | no               | 0   | 0   | 0   | 0   | 0   | 0   | 1   | 0   | 0   | 0   | 0   | 0   | 0   |
| [Rural](https://www.ruralhealth.va.gov/aboutus/ruralvets.asp)                                                                                                                                                                                                                                                                                                  | General                                                    | 25%      | 4        | 3           | no               | 0   | 0   | 1   | 0   | 0   | 0   | 0   | 1   | 0   | 0   | N   | 0   | 1   |
| [No degree](https://www.luminafoundation.org/wp-content/uploads/2019/10/veterans-without-degrees.pdf)                                                                                                                                                                                                                                                          | General                                                    | 25%      | 4        | 4           | yes              | 1   | 0   | 1   | 0   | 1   | 1   | 0   | 0   | 0   | 0   | 0   | 0   | 0   |
| [Other than honorable](https://veteransaidbenefit.org/correcting_military_discharge.htm#:~:text=Honorable%3A%2078.29%20percent,Bad%20Conduct%3A%200.49%20percent)                                                                                                                                                                                              | General                                                    | 21%      | 3        | 0           | no               | 0   | N   | 0   | 0   | 0   | 0   | 0   | 0   | N   | 0   | 0   | 0   | 0   |
| [Immigrant origin](https://www.migrationpolicy.org/article/immigrant-veterans-united-states-2018)                                                                                                                                                                                                                                                              | General                                                    | 17%      | 3        | 0           | no               | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   |
| [Women](https://www.womenshealth.va.gov/womenshealth/latestinformation/facts.asp#:~:text=Women%20Veterans%20Health%20Care,-Facts%20and%20Statistics&text=The%20current%20projected%20percentage%20of,years%20for%20their%20male%20counterparts.)                                                                                                               | General                                                    | 10%      | 2        | 7           | yes              | 0   | 0   | 0   | 1   | 0   | 1   | 1   | 1   | N   | 1   | 0   | 1   | 1   |
| [Expat (living abroad)](https://expatresearch.com/files/4915/0501/3576/McNulty_Fisher_Hicks_and_Kane_2014_-_Military_Expatriates-US_Veterans_Living_Abroad_The_Civilian_Lives_of_U.S._Veterans_Part_2.pdf#:~:text=How%20Many%20U.S.%20Veterans%20Live%20Abroad%3F&text=today%E2%80%94about%2021.6%20million.,Veterans%20Analysis%20and%20Statistics%202015\).) | General                                                    | .4%      | 1        | 0           | no               | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   |
| Black or African American                                                                                                                                                                                                                                                                                                                                      | [Race](https://www.va.gov/HEALTHEQUITY/Race_Ethnicity.asp) | 15%      | 2        | 4           | yes              | 1   | 0   | 1   | 0   | 0   | 1   | 0   | 0   | 0   | 0   | 0   | 1   | 0   |
| Hispanic, Latino, or Spanish origin                                                                                                                                                                                                                                                                                                                            | [Race](https://www.va.gov/HEALTHEQUITY/Race_Ethnicity.asp) | 12%      | 2        | 0           | no               | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   |
| Biracial                                                                                                                                                                                                                                                                                                                                                       | [Race](https://www.va.gov/HEALTHEQUITY/Race_Ethnicity.asp) | 3.9%     | 1        | 1           | yes              | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   |
| Asian                                                                                                                                                                                                                                                                                                                                                          | [Race](https://www.va.gov/HEALTHEQUITY/Race_Ethnicity.asp) | 2.7%     | 1        | 0           | no               | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   |
| Native Hawaiian or other Pacific Islander                                                                                                                                                                                                                                                                                                                      | [Race](https://www.va.gov/HEALTHEQUITY/Race_Ethnicity.asp) | .3%      | 1        | 0           | no               | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   |
| First Nations (Canada)                                                                                                                                                                                                                                                                                                                                         | [Race](https://www.va.gov/HEALTHEQUITY/Race_Ethnicity.asp) | n/a      | 1        | 0           | no               | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   |
| Native, American Indian or Alaska Native                                                                                                                                                                                                                                                                                                                       | [Race](https://www.va.gov/HEALTHEQUITY/Race_Ethnicity.asp) | 1.6%     | 1        | 0           | no               | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | N   | 1   | 0   |
| Gay, lesbian, or bisexual                                                                                                                                                                                                                                                                                                                                      | LGBTQ+                                                     | n/a      | 1        | 2           | yes              | 0   | 0   | 0   | 0   | 1   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 1   |
| Transgender                                                                                                                                                                                                                                                                                                                                                    | LGBTQ+                                                     | n/a      | 1        | 0           | no               | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   |
| Nonbinary, gender fluid, gender queer, Two-Spirit (Indigenous only), or another gender beyond man or woman                                                                                                                                                                                                                                                     | LGBTQ+                                                     | n/a      | 1        | 0           | no               | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   |
| Beginner AT User                                                                                                                                                                                                                                                                                                                                               | AT                                                         | 50%      | 0        | 0           | n/a              | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   |
| Experienced AT User                                                                                                                                                                                                                                                                                                                                            | AT                                                         | 50%      | 0        | 0           | n/a              | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   |
| Desktop Screen Reader (SR)                                                                                                                                                                                                                                                                                                                                     | AT                                                         | 20%      | 0        | 0           | n/a              | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   |
| Mobile Screen Reader (SR)                                                                                                                                                                                                                                                                                                                                      | AT                                                         | 20%      | 0        | 0           | n/a              | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   |
| Magnification/Zoom                                                                                                                                                                                                                                                                                                                                             | AT                                                         | 20%      | 0        | 0           | n/a              | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   |
| [Speech Input Tech (Siri, Dragon)](https://www.w3.org/WAI/perspective-videos/voice/)                                                                                                                                                                                                                                                                           | AT                                                         | 20%      | 0        | 0           | n/a              | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   |
| Hearing Aids                                                                                                                                                                                                                                                                                                                                                   | AT                                                         | 20%      | 0        | 0           | n/a              | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   |
| Sighted Keyboard                                                                                                                                                                                                                                                                                                                                               | AT                                                         | 10%      | 0        | 0           | n/a              | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   |
| Captions                                                                                                                                                                                                                                                                                                                                                       | AT                                                         | n/a      | 1        | 0           | no               | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   |
| Switch Device                                                                                                                                                                                                                                                                                                                                                  | AT                                                         | n/a      | 1        | 0           | no               | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   |
| Braille Reader                                                                                                                                                                                                                                                                                                                                                 | AT                                                         | n/a      | 1        | 0           | no               | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   |


