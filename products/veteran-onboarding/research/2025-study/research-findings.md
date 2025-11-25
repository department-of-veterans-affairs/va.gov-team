---
title: "Veteran Onboarding Modal Research Findings"
product: "Welcome to VA.gov Onboarding"
team: "Core Veteran Experience"
office: "Office of the CTO - Digital Experience (OCTO-DE)"
date: "2025-11-24"
researchers:
  - "David Pearl"
research_goals:
  - "Understand how new Veterans currently approach VA.gov and what causes decision paralysis"
  - "Evaluate effectiveness and preference between modal design approaches (application-focused vs. exploration-focused)"
methodology:
  - "Comparative usability testing with preference ranking"
  - "Remote moderated sessions"
  - "45-minute sessions combining semi-structured interviews and prototype testing"
devices_used:
    desktop: 7
    tablet: 1
    smartphone: 8
    assistive_technology: 0
participants_total: 16
demographics:
  veterans: 16
  service_members: 0
  caregivers: 0
  dependents: 0
  VA_staff: 0
  age:
    "25-34": 3
    "35-44": 5
    "45-54": 4
    "55-64": 3
    "65+": 1
    unknown: 0
  education:
    high_school: 0
    some_college: 3
    associates: 2
    bachelors: 6
    masters: 5
    doctorate: 0
    unknown: 0
  location:
    urban: 11
    rural: 5
    unknown: 0
  race:
    white: 10
    black: 2
    hispanic: 3
    biracial: 0
    asian: 1
    native: 0
  disability:
    cognitive: X
    AT_beginner: X
    AT_advanced: X
    screen_reader_desktop: X
    screen_reader_mobile: X
    magnification_zoom: X
    speech_input: X
    hearing_aids: X
    sighted_keyboard: X
    captions: X
key_findings:
  - "14 of 16 participants (88%) preferred application-focused modal over action-focused"
  - "Veterans want comprehensive benefit discovery but current tool falls short"
  - "Eligibility is psychological prerequisite but dense pages overwhelm"
  - "Veterans want personalized, status-based content using existing profile data"
  - "Three core benefits (Healthcare, Disability, Education) validated universally"
  - "My VA terminology creates confusion for new users"
  - "Content pages need simplification and consistency"
  - "Product tours universally rejected"
  - "Show modal first time only but make re-accessible"
  - "Critical accessibility needs for TBI, PTSD, older Veterans"
recommendations:
  - "Implement application-focused modal as primary onboarding experience"
  - "Design fourth 'Discover Your Benefits' option with true personalization"
  - "Use About/How-to page formats with integrated eligibility context"
  - "Implement dynamic content based on user enrollment status"
  - "Ensure consistent structure across all benefit pages"
  - "Make My VA terminology clearer or replace with alternatives"
  - "Show modal on first login only with easy re-access method"
  - "Implement trauma-informed design for cognitive/PTSD considerations"
kpi_alignment:
  - "Improve satisfaction with web and mobile products by 5 points (OCTO Objective 1, KR 1)"
  - "Increase successful benefit applications from new Veterans"
  - "Reduce time to first benefit application"
outcomes:
  user: "New Veterans can quickly navigate to and apply for the benefits they need during transition without confusion or overwhelm"
  business: "Increased benefit application completion rates and reduced support burden through clearer onboarding"
opportunity_areas:
  - "Personalized benefit recommendations based on profile data"
  - "Interconnected benefit discovery (e.g., disability rating unlocking healthcare)"
  - "Family/dependent benefit pathways"
  - "VA facility proximity checking before healthcare enrollment"
further_research_needed:
  - "Test dynamic content implementation with enrolled vs non-enrolled users"
  - "Validate fourth DYB option design with comprehensive benefit list"
underserved_groups_missing:
  - "Veterans using assistive technology (screen readers, magnification)"
  - "Veterans with documented cognitive disabilities"
  - "Non-English speaking Veterans"
secondary_research:
synthesis_tools_used:
  - "Mural"
  - "Excel for session notes"
  - "Affinity Mapping"
---

# Welcome to VA.gov Onboarding Research Findings 

**Office of the CTO - Digital Experience (OCTO-DE), Welcome to VA.gov Onboarding, Core Veteran Experience Team**

**Date:** 11/24/2025

**Contacts:** David Pearl

**[Research Readout (PDF)](link-here)**  
*Add a link to your research readout deck, if available.*

**Jump to:**
- [Hypotheses and conclusions](#user-content-hypotheses-and-conclusions)
- [Key findings](#user-content-key-findings)
- [Recommendations](#user-content-recommendations)
- [Product User and Business Outcomes](#user-content-product-user-and-business-outcomes)
- [Key Performance Indicators](#user-content-key-performance-indicators)
- [Next Steps](#user-content-next-steps)
- [Further research needed](#user-content-further-research-needed)
- [Appendix](#user-content-appendix)
- [Research participants](#user-content-research-participants)

## Research Goals
This research supports Veterans during the critical **Getting Out** and **Starting Up** phases of their journey, specifically addressing the moment when newly transitioned Veterans first access VA.gov to discover and apply for benefits. New Veterans experience decision paralysis when they first access VA.gov because the site offers so many options and pathways. Without clear guidance, Veterans struggle to know where to start, leading to frustration and potential abandonment of important tasks.

## Research Questions
This study aimed to answer the following questions from the research plan:
1. What are new Veterans’ current experiences and pain points when first accessing VA.gov?
2. How do new Veterans decide what to do first on VA.gov?
3. Which modal version (application-focused vs. action-focused) do new Veterans prefer and why?
4. What are the usability issues and pain points with each modal version?
5. How well do the modal options align with new Veterans’ actual priorities and needs?

## Methodology 
**Comparative Usability Testing with Preference Ranking**
60-minute remote sessions combining semi-structured interviews (15 minutes) and comparative usability testing of both high-fidelity interactive modal prototypes (45 minutes).

**Version Testing:**
- **Modal Version A (Application-focused):** Three benefit application options - VA Health Care, VA Disability Compensation, and VA Education Benefits
- **Modal Version B (Action-focused):** Three action options - My VA, My HealtheVet, and Discover Your Benefits Tool

**Two-Phase Approach:**
- Phase 1 (Participants 1-8): “Get benefit” anchor link pages
- Phase 2 (Participants 9-16): Refined “About/How to” pages based on Phase 1 feedback

**Study Period:** October 27 - November 4, 2025

**Sessions:** 16 completed (target: 16)

**Duration:** 60 minutes per session

**Format:** Remote moderated via Zoom

## Hypotheses and Conclusions

- **Hypothesis Statement 1:** Both modal versions will result in higher satisfaction and task completion rates compared to no onboarding guidance.
  - **Definitely True**  
  - Veterans consistently stated that having a modal would have been helpful when they first started using VA.gov, and would make the experience easier for new users.
  - Multiple participants said the modal "would have been helpful" when they were first transitioning
  - Participants described current VA.gov as overwhelming without guidance
  - The modal concept was universally well-received as a helpful onboarding tool

- **Hypothesis Statement 2:** Application-focused options (Version A) will be preferred by Veterans who know what they want to apply for, while action-focused options (Version B) will appeal to Veterans who are still exploring their options.
  - **Partially True**  
  - 14 of 16 participants (88%) preferred the application-focused modal (Version A), BUT the preference wasn't dependent on whether they "knew what they wanted" - even Veterans who were uncertain preferred the application-focused approach.
  - Veterans who knew exactly what they wanted: Preferred Version A and Veterans who were uncertain: Also preferred Version A
  - Only 2 participants preferred Version B (action-focused), and for specific reasons not related to "exploring options"
 
## Key Findings

1. **Most Veterans preferred the application-focused modal (Version A)** showing Healthcare, Disability, and Education as direct paths to benefit applications
2. **Veterans want “Discover Your Benefits” but current tool falls short** - they expect comprehensive personalized lists, not questionnaires
3. **Veterans expect personalized content** based on existing profile data and enrollment status, not a one-size-fits-all experiences
4. **Eligibility is psychological prerequisite** but dense eligibility pages overwhelm; “How to” formats with integrated context work better
5. **Three benefits universally validated** as the core pillars Veterans need during transition
6. **Most people” language doesn’t resonate** as well as "What would you like to do first?"
7. **Show modal first time only** but Veterans want easy way to re-access if needed

## Details of Findings 

### Finding 1: Most Veterans preferred the application-focused modal (88%)
14 of 16 participants preferred the Apply-focused modal. Veterans valued its direct pathway to the three core benefits they came to VA.gov to access. Veterans preferred the application-focused modal primarily due to direct access to primary benefits without being too specific.

- _These are things that they need to get squared away as they're getting out...there's so much going on during that time that some, you know, laser focus guidance on these are the most important things you need to be focusing right now, at least for VA. Kind of helps them draw priorities. – P14_
- _Having that direct path to that... it would have saved me time, you know, and taking me directly (to) what I was looking for. If you have data that says this is where the people go first, then giving it to them first instead of having to hunt around and find it, I think could be helpful to... a lot of people. –P12_
- _I prefer the left overall quite a bit... I'm here for those things, healthcare, disability, training. So having those three there and then if I get to that, presumably I can get to the others through some sort of a menu." - P17_
- _VA healthcare, disability and education... That's what most people are gonna look for first." - P15_
- _Broad enough overview without being too broad and without being too focused in. – P8_
- _It's straight to the point, you have your health care, your, your disability compensation, the education and training benefit, you know, that's all right there. You can click on each one of those and find out a lot of information. – P21A_
- _There is literally nothing more important than applying for benefits. That’s why we’re on VA.gov. - P1_

#### The Action Modal (Version B with "Go to My VA," "Manage your healthcare," and "Discover your benefits") didn't work well for several reasons including confusion about "My VA", focus on healthcare benefit, and potential redundancies. First-time users don’t understand what “My VA” means, where it will take them, or how it differs from other sections. The terminology that makes sense to established users is opaque to new Veterans.
- _I don't like it as much... I feel like this assumes that you know a little more about the VA and my VA versus the healthcare stuff. But I don't feel like that would be intuitive... the first time you signed on.– P8_
- _Most people think of manage as like an ongoing thing, not like a first thing... You put in your account for the first time, you have really no idea what this means, and then manage. It kind of seems like an ongoing thing, like making recurring things or not setting up for the first time, basically. – P15_
- _“This one is focused on health care” – P3_
- _Currently my health is in My VA. I could see almost the same information. So that one kind of cancel each other out... You could see that in MyVA so it's kind of redundant... You don't need two of these.– P1_

**Avoid using “My VA” in the onboarding modal. For new users who don’t have established context, this terminology is too vague. Use specific, descriptive benefit names instead. Once users have experience with VA.gov, “My VA” makes sense as a consolidated dashboard.**

### Finding 2: Veterans want “Discover Your Benefits” but current tool falls short
Many participants spontaneously requested adding "Discover Your Benefits" to the Apply modal. However, their expectations reveal a critical gap between what Veterans want and what the current tool provides. Veterans want a comprehensive personalized list of all benefits and a catch all for everything beyond the top 3 benefit, but were met with visual design issues, confusion about the tool's purpose, and more clicks. 
- _It’s missing one. I would like discover your benefits on that one. Like if you instead of three have four… That’d be the first one on the list because somebody that never been there, they want to know what benefits they have. - P1_
- _I expect to see what I qualify for and all the benefits that VA has for veterans… Yeah, I would want to know what I, you know, everything that I can get. - P21A_
- _[I expect] any and everything that the VA has for us, the service person and things that we're not aware of. – P21B_
- _Since you’ve already logged in with your profile, so they know who you are… use an AI strategy… to do a search to everything that you could possibly qualify for… since they know your family members, they know your rating. And so when you click on there, when you say discover my benefits, it should give you the ability to see everything that you could possibly qualify for.- P4_
- Discover your benefits could be nice on the left side, you know, like, as a less targeted option, you know, like more of like a tour thing. -P17

#### Veterans expected an instant, personalized list of benefits tailored to their profile, a comprehensive view of everything they're eligible for with smart recommendations based on their status. Instead, they encountered a questionnaire asking for information the VA already had, no comprehensive benefit list, and a confusing launch page that failed to deliver on these expectations.
– _"I would expect a long list of things that I may or may not be eligible for." – P12_
- _'This tool is not an application for benefits.' It means I got to go out and start over and find, you know, find where I can apply, and that's where people would get. You're sending people all over the place – P19_
- _I thought it was going to be kind of a list of health care, education, compensation, something like that. And then you can click that and then it lists kind of like go back to school, get a certification, trade, something kind of like that. – P13_
- _Oh, now I'm confused because it doesn't even tell me what type of benefits these are... Like, discover my benefits, find benefits I may want to apply for. And I would want to see such as this, this, this or the other thing... Then it says...This tool is not an application. Review benefits and doesn't confirm eligibility. – P24_
- _There's no long list of options. It just another click of asking a question of what you're here for. – P4_

The request for “Discover Your Benefits” reveals deeper needs:
1. **A fourth option** for “everything else” not covered by the top 3
2. **Comprehensive benefit information** - see all available benefits
3. **Personalization** - what do Veterans specifically qualify for based on existing profile data
4. **Psychological safety net** - “if those 3 don’t work for me, where do I go?”
- 
### Finding 3: Eligibility is psychological prerequisite
Veterans consistently wanted information before jumping to applications. However, formal “eligibility pages” proved too dense and overwhelming. “About” and “How to” pages that incorporated eligibility context performed significantly better in Phase 2 testing.

“I definitely think before any other information comes from that, it should go straight to an eligibility page. 110%… I wouldn’t want to go into something, find something that I’m like, oh, my God, this would be great. Come to find out I’m not eligible.” - P3
"I’m going to go to eligibility and then within eligibility I would want to see how to apply because once I see if I’m eligible, I don’t want to have to click on another screen to apply.” - P4
 “Maybe if eligibility down to apply online were kind of like the focus of what was on the main page… those are the main things I feel like people would come here for.” - P8

- _These are things that they need to get squared away as they're getting out...there's so much going on during that time that some, you know, laser focus guidance on these are the most important things you need to be focusing right now, at least for VA. Kind of helps them draw priorities. – P14_
- I wouldn't want to go into something, find something that I'm like, oh, my God, this would be great. Come to find out I'm not eligible. – P3
- 
#### The “Get [Benefit]” anchor link pages shown to Phase 1 participants were overwhelming. The “About” and “How to” pages shown to Phase 2 participants performed significantly better. 
**Phase 1 (P1, P3, P4, P8, P12, P13, P14, P15**): “Get VA health care”, “Get disability compensation”, “Get GI Bill education benefits”
“There’s so much info on VA.gov but sometimes it’s too much so takes time to navigate through everything.” - P1
“I think there’s too much on this page, I think it’s too cluttered.” - P4
“There’s a lot… sort of not what I’m looking for at first.” - P3
“First looking at it, you’re just. It’s overwhelming.” - P8

**What Didn’t Work:**
- Long anchor link pages with 10+ links
- Dense information all at once
- No clear hierarchy or priority

**Phase 2 (P16, P17, P19, P20, P21A, P21B, P24,P11)**: “About VA health care”, “How to apply for disability compensation”, “Get GI Bill” (unchanged) 
- _I would be very pleased if I with this page and it would help tremendously as it's the. At the beginning of my journey in familiar. Familiaring myself to the VA. _ P21B_
- _"It actually explains like how to, explains what you need to do and then it assists you. – P20_
- This is very good too... It tells you about VA health benefits that you might not know about. What's covered, what's not covered, how to apply. Learn more about VA healthcare, what happens after you apply. You know, this is very, very good" - P21A
- it's helpful. It tells you it's just straightforward. Tells you what you need to apply. There's the link. -P19

**What Works Better:**
- “How to” focused pages
- Action-oriented content (“apply”, “file”)
- Nested menus create better organization
- Progressive disclosure of details

### Finding 4: Veterans expect personalized content
Veterans consistently expressed desire for dynamic content that changes based on their account status, benefit enrollment, and family situation. The current one-size-fits-all approach creates confusion about which content is relevant. 

- _"If I do something personalized like this, I expect a personalized result." – P13_
- _“Since you’ve already logged in with your profile, so they know who you are… use an AI strategy… to do a search to everything that you could possibly qualify for… since they know your family members, they know your rating.” - P4_
- Personalized list rather than a full list that you're like I don't they're like be like oh, it'd be sweet to get into this and be like, oh, you have to be over like 60% or 50% disabled. I'm like, okay, well, yeah, it's like things like that. - P15
- _"This right here is what you're eligible for. Click on this, fill this out, and it'll send to everything that you're eligible for... Just give me everything I'm eligible for. Don't make me go hunting for it... You already got my information. They already know. I shouldn't have to type nothing in. I shouldn't have to send in any documents. The VA already has it. Stop making me dig for stuff that you already have." – P19_
- _I've already exhausted my GI, so this should be tailored to me... this page, when you click it should be tailored to your experience... The whole VA website should be tailored to the individual... It should know, hey, you did your GI Bill... We're not going to bother you with that stuff." – P19_
- _"I feel like the VA at this point... they know about me. I think by the point that I have this website access, it should know my military, my, I don't know, it doesn't know my service. It knows my time in service. It knows at least the beginning parts of things that I might be eligible for" – P12_
- _"Here's what we think you're eligible for. Here's some things you might not have known about that, you know, through your service you're eligible for from the VA. And if I looked at, you know, mine versus somebody else's who had different time and service or maybe there was a, a specific benefit that was for people who were in a specific area and the VA knows that...like the new benefits for burn pits and the new acts that have come out of Congress for expanding those." – P12
- _"If it's pulling my information, if I'm already logged in and it's got my information, I would like it to tell me if I'm eligible right off the rip or not, and then go from there." – P16_
- _"Depends on how much benefits that you have. So my benefit might be different from somebody else's." – P1_

#### **Every benefit area has two distinct user groups with different needs:**

**Healthcare:**
- **First-timers need:** Eligibility, how to apply, what documents needed, enrollment process, facility locator
- **Existing users need:** Appointments, doctors, messaging, prescription refills, managing existing care

**Disability Compensation:**
- **First-timers need:** How to file, what evidence needed, what conditions to claim, VSO connections, process steps
- **Existing users need:** Current rating, claims status, claims in progress, appeals

**Education Benefits:**
- **First-timers need:** What is it, how to apply, what programs qualify, eligibility, comparison of programs
- **Existing users need:** Benefits signed up for, months of credit remaining

### Finding 5: Three benefits universally validated
Veterans unanimously confirmed that Health Care, Disability Compensation, and Education Benefits are the right three core priorities for new users. These align with both the “mental model” of what VA does and actual behavior during transition. Based on this research, the most common reasons Veterans created VA.gov accounts  were to file disability claims / track claims, apply for healthcare, or access education benefits

“Those are like the top three things that I've used so far, really, in the VA and VA.gov.” - P20
“The VA does three things” - P3
“If I’m just starting the transition process… these are the things you should be focusing on as you’re transitioning.” - P14
“Monetary over everything else” - P15
"VA does your healthcare, VA does your education, and VA does your disability. Those are the three pillars of the VA" _ P4
the disability, the health care and the education benefits, that one was very, just clear. Like a broad enough overview without being too broad and without being too focused in. - P8
I like the three because it's not too many choices. I wouldn't want to be inundated with a whole bunch of choices. But I think, you know, these three are probably the most likely. For me, the most likely was VA disability. - P12
I think it's got the three most important things people care about when you get out... this is great as far as like especially getting out for first time. - P13
- P16 Because it's like those are, those are the topics, those are the things that the veterans want to look for is getting started in healthcare, disability compensation and education benefits.
- I don't know what else there would be beyond that. So that makes sense that most people start with those. - P17
- for me, those are like the top three things that I've used so far, really, in the VA and my va.gov. - P20

#### ### Priority Rankings

**Disability Compensation Often #1:**
- Most common first action
- Primary reason for creating VA.gov account
- Monetary benefits drive urgency

**Healthcare Critical for Many:**
Multiple participants noted healthcare as their first or second priority

**Education Important But Variable:**
But education was often mentioned as second priority after disability or healthcare.

-- 

### Finding 6: “Most people” language doesn’t resonate
Language framing content around “what most people do” or crowd behavior doesn’t resonate with Veterans. They want personal guidance for their situation only. Focus on “you” and “your needs” rather than “most Veterans”

“Most people. Because that's not true. Most people don't do that.” - P11
"I don't really care much about what most people are doing. I know why I'm here,” - P3
"I prefer the wording of the second, so... Welcome to VA.gov we verified your account.  You can now start exploring benefits. What would you like to do first via healthcare, via disability compensation, via education." - P24

--

### Finding 7: Show modal first time only
Most Veterans want to see the modal only on their first login, not repeatedly. However, they want an easy way to access it again if needed. There’s also anxiety about “losing” the modal after clicking one option.

“Generally I’m not a big fan. Too many pop ups. If it’s any more than like two, I probably start getting annoying.” - P14
“I think most of the time when you’re going, you’re going for a specific purpose… I don’t think people do multiple things at once… once you do your one thing, then you’re done with the site.” - P4
my impression of it is that it's like, hey, you just signed up. Like, here, this is what we can do for you. So in that regard, the first time I log in would make sense. - P17
"If this is the first time I'm logging in, I think it's helpful. If it was every time I logged in, I would not use it, but I think maybe the first couple times you log in, it comes up... maybe that's the first two or three times or something like that. - P12
"That's fine the first time, but if it comes up every time, then I'll be annoyed... I would probably exit the website if it kept on popping up." -P24
“How many countless tours I’ve been on. You know what I do with those tours? I just click away. Click, click.” - P1 


## Additional Insights


## Recommendations
1. **Recommendation:** Implement the Apply-focused modal as the primary onboarding experience. It aligns with how new Veterans approach VA.gov (with specific benefit goals during transition, not open-ended exploration).
   - Per Finding 1
2. **Recommendation:** Rather than simply adding the current “Discover Your Benefits” tool, consider a fourth option that provides comprehensive benefit exploration (true benefit finder or complete benefit list), and if possible, uses existing profile data to show personalized eligibility without interaction.
   - Per Finding 2
3. **Recommendation:** Use “About” and “How to” page formats that incorporate eligibility context naturally, rather than leading with dense standalone eligibility pages. Provide enough information for Veterans to self-assess relevance without overwhelming them or creating barriers to application.
  - Per Finding 3
4. **Recommendation:**  Implement dynamic content that changes based on user account status and benefit enrollment. Start with healthcare: test directing users without healthcare to application pathway and users with healthcare to My HealtheVet. Based on reception, expand to disability and education. Show Veterans that VA knows their situation and tailors the experience accordingly.
   - Per Finding 4

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
