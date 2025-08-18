---
title: "VA Form 21P-0969 Usability Study Research Findings"
product: "VA Form 21P-0969"
team: "Pension and Burials Team"
office: "Office of the CTO - Digital Experience (OCTO-DE)"
date: "2025-08-15"
researchers:
  - "Chavie Cramer"
  - "Skyler Schain"
research_goals:
  - "Assess initial comprehension and mental load."
  - "Evaluate interaction with the “List and Loop” design pattern for income and assets."
  - "Test clarity of labels, categorization, and task completion across steps."
methodology:
  - "semi-structured interviews"
  - "high-fidelity prototype"
devices_used:
    desktop: 3
    tablet: 2
    smartphone: 2
    assistive_technology: 0
participants_total: 7
demographics:
  veterans: 7
  service_members: 0
  caregivers: 0
  dependents: 0
  VA_staff: 0
  age:
    "25-34": 0
    "35-44": 0
    "45-54": 0
    "55-64": 0
    "65+": 7
    unknown: 0
  education:
    high_school: 0
    some_college: 3
    associates: 2
    bachelors: 2
    masters: 0
    doctorate: 0
    unknown: 0
  location:
    urban: 4
    rural: 3
    unknown: 0
  race:
    white: 3
    black: 2
    hispanic: 1
    biracial: 1
    asian: 0
    native: 0
  disability:
    cognitive: unknown
    AT_beginner: unknown
    AT_advanced: unknown
    screen_reader_desktop: unknown
    screen_reader_mobile: unknown
    magnification_zoom: unknown
    speech_input: unknown
    hearing_aids: unknown
    sighted_keyboard: unknown
    captions: unknown
key_findings:
  - "When asked what level of effort was required to complete the form (1 being lowest and 5 being highest) 6 out of 7 users rated the experience between 1 to 3. This is particularly encouraging given that only 1 out of 7 described themselves as high in technical literacy."
  - "Users were able to successfully navigate the form and progress to completion without assistance in 12 out of 14 steps."
  - "When asked to rephrase key concepts or terminology during particularly dense or complex sections of the form in their own words, 5 out of 7 users were able to do so accurately."
  - "7 out of 7 users were able to identify next action steps if additional information was needed using contact information provided or personal research."
  - "6 out of 7 users did not understand they needed to enter each income separately when entering list and loop, with high frustration or anxiety exhibited before first income entry. Once the first entry was completed, users expressed a strong understanding of the pattern."
  - "6 out of 7 users were unclear about financial support rules based on existing content and were unable to recall the definition of a dependent without the additional info component."
  - "5 out of 7 users were confused by mention of supporting “evidence” on the Introduction page, leading them to believe they had to provide additional documentation to what might be requested by the VA."
  - "4 out of 7 users were confused when steps they were currently completing referenced previous steps by number rather than description."
  - "6 of 7 users did not recognize or select the “Expand all” option to review information before it was submitted, leading some to experience frustration when progressing to the confirmation page."
  - "7 of 7 users desired more transparency regarding when to expect a decision for their claim."

recommendations:
  - "Clarify language at list and loop start so users understand they will need to submit each income type and recipient separately."
  - "Adjust the definition of dependants to include emphasis on level of financial support provided to reduce confusion and help users determine what best applies in their situation."
  - "Continue to provide a reminder of the definition of “dependent” on the pages where it is most relevant to reduce the amount of recall required and potential mental load."
  - "Remove reference to supporting documents (or “evidence”) from the Introduction page to reduce anxiety and confusion for users."
  - "Determine if it is necessary to reference previous steps within the form; and if so, provide written descriptions of what information was gathered in the previous step rather than just the number."
  - "Set the accordion on the Review and Submit page to expand by default based on user inputs to better facilitate required action."
  - "Provide more transparency about what to expect regarding application processing times and assist in providing a thruline back to Pension or DIC applications (as 0969 is often triggered by another application being completed."
outcomes:
  user: "This research supports our desired user outcome by identifying areas of success and improvement that supports a positive experience for Veterans reporting complex financial information."
  business: "This research supports our desired business outcome by assessing Veteran comprehension of form instructions and ability to complete necessary actions to submit in a logical way."
further_research_needed:
  - "The team used scenario based testing of the 0969 form as a standalone experience following an ideal path. In order to test the true mental load that might be associated with the form, it may be necessary to test it as part of the full form flow with parent applications such as the Veteran’s Pension (527) and DIC (534) forms."
  - "We also may wish to introduce more complex paths that include less than ideal conditions."
  - "Based on the findings, additional research exploring Veteran mental models when applying for benefits as it related to financial reporting may also be beneficial in future."
  - We did not include caregivers or survivors as part of our participant base. These account for a different use case that is important to consider but was out of scope for this study." 
synthesis_tools_used:
  - "Mural"
  - "Affinity Mapping"

---

# VA Form 21P-0969 Usability Study Research Findings 

**Office of the CTO - Digital Experience (OCTO-DE), VA Form 21P-0969, Pension and Burials Team**

**Date:** 08/15/2025

**Contacts:** Chavie Cramer, Skyler Schain

[Link to Research Readout](https://dvagov.sharepoint.com/:w:/r/sites/vaabdvro/Shared%20Documents/Pension/0969%20Form/Research%20Plan%20for%20Digitizing%2021P-0969%20(Income%20%26%20Assets%20Statement).docx?d=wf827c07b7906403d8cf954170d0426ad&csf=1&web=1&e=fhpc0x)

**Jump to:**

- [Hypotheses and conclusions](#hypotheses-and-conclusions)
- [Key findings](#key-findings)
- [Recommendations](#recommendations)
- [Product User and Business Outcomes](#product-user-and-business-outcomes)
- [Next Steps](#next-steps)
- [Further research needed](#further-research-needed)
- [Who we talked to](#who-we-talked-to)


## Research Goals

The goal of this usability study was to evaluate Veterans’ comprehension, decision-making, and task success across key parts of the income and asset reporting experience using VA form 21P-0969. Specifically, we aimed to:
1. Assess initial comprehension and mental load.
2. Evaluate interaction with the “List and Loop” design pattern for income and assets.
3. Test clarity of labels, categorization, and task completion across steps.  

## Research Questions

Assess Initial Comprehension and Mental Load
- Do users feel overwhelmed by the introduction page content?
- Do they read, skim, or skip the onboarding information?
- Do they grasp what the form will ask of them before proceeding?

Evaluate Interaction with the “List and Loop” design pattern for Income and Assets
- Do users understand they are entering individual items into a repeatable list structure?
- Is the repeated flow of questions (e.g. asking the same details per entry) intuitive or frustrating?
- Do users clearly understand how to add income for multiple recipients and why certain inputs (like "Spouse name") reappear?
- Are any expected income types hard to categorize or missing altogether?

Test Clarity of Labels, Categorization, and Task Completion Across Steps
- Are income and asset categories labeled clearly and understood correctly?
- Can users differentiate between property and business assets without confusion?
- After submitting the 0969, do users know what comes next (e.g. uploading documents or returning to a different form)?
- Are participants confident they’ve included all relevant financial information?

## Methodology 

We conducted 90 minute semi-structured interviews using a set of fictional scenarios and a high-fidelity prototype. 

## Hypotheses and Conclusions

- **Veterans will be able to complete the 0969 form based on the scenarios provided with minimal friction.** 
  - **Mostly True**  
  - 6 of 7 users were able to complete the form with minimal assistance or confusion based on the existing form structure and flow.

- **Up-front and conditional questions will provide an efficient way to collect data from Veterans and ease their form filling burden.** 
  - **Mostly True**  
  - 7 of 7 users were able to proceed through the form in a logical fashion based on the conditional questions provided. The only exception was during list and loop pattern which presented some user difficulty (see below in more detail). 

- **Veterans will be able to understand the terms used in the form and answer all questions asked of them.** 
  - **Mostly True**  
  - 5 of 7 users described terminology and instructions in their own words accurately based on the information provided. 
 
- **Veterans express preference for using this form over a paper version in a real-life scenario.** 
  - **Maybe True**  
  - 6 of 7 users shared they would prefer to submit VA forms online as it provides a more streamlined experience compared to paper, but were speaking about forms in general (rather than 0969 in particular). 

## Key Findings

**1.** When asked what level of effort was required to complete the form (1 being lowest and 5 being highest) 6 out of 7 users rated the experience between 1 to 3. This is particularly encouraging given that only 1 out of 7 described themselves as high in technical literacy.    

**2.** Users were able to successfully navigate the form and progress to completion without assistance in 12 out of 14 steps.

**3.** When asked to rephrase key concepts or terminology during particularly dense or complex sections of the form in their own words, 5 out of 7 users were able to do so accurately.

**4.** 7 out of 7 users were able to identify next action steps if additional information was needed using contact information provided or personal research.

**5.** 6 out of 7 users did not understand they needed to enter each income separately when entering list and loop, with high frustration or anxiety exhibited before first income entry. Once the first entry was completed, users expressed a strong understanding of the pattern.

**6.** 6 out of 7 users were unclear about financial support rules based on existing content and were unable to recall the definition of a dependent without the additional info component.

**7.** 5 out of 7 users were confused by mention of supporting “evidence” on the Introduction page, leading them to believe they had to provide additional documentation to what might be requested by the VA.

**8.** 4 out of 7 users were confused when steps they were currently completing referenced previous steps by number rather than description.

**9.** 6 of 7 users did not recognize or select the “Expand all” option to review information before it was submitted, leading some to experience frustration when progressing to the confirmation page.

**10.** 7 of 7 users desired more transparency regarding when to expect a decision for their claim.


## Details of Findings 

**1. When asked what level of effort was required to complete the form (1 being lowest and 5 being highest) 6 out of 7 users rated the experience between 1 to 3. This is particularly encouraging given that only 1 out of 7 described themselves as high in technical literacy.**  

We asked participants to rate the level of effort needed to complete the form with 1 being lowest and 5 being highest. Most shared they felt a lower level of effort would be required ranging from 1-3. 

- _“I would rate it a 2. Overall it was pretty easy. It might take a few steps… a little time. But this is all information you should know.” (P10)_
- _“I would go back to my 2 or 3. There is a little tweak here or there, but the steps itself would be a 1.” (P7)_

It is important to note that 1 Veteran rated level of effort between 4 and 5; expressing  difficulty with the amount of information requested. Some also shared that while it was easy for them to complete the form, it might prove more difficult for particularly complicated financial circumstances or for Veterans with cognitive difficulties. To validate further, these factors may be worth considering in future research planning and recruitment. 

- _“It’s a 4 or 5. You are really asking for a lot. I mean phew. You have to be a really organized type person with a filing cabinet to get all these things together. Maybe if you had all this [a business, investments, other valuable assets] you would just have [the information available] but I’m not sure on that.” (P4)_
- _“I’d rate it a 2. But there’s probably people who might have a hard time… I’m thinking of friends with traumatic brain injury. They’d actually need to go to the Veterans group for help. But overall it’s a great form.” (P8)_ 
- _“Based on the information you gave me it’d be a 1, low effort. But I could imagine it might get a bit complicated if you had a lot of things to report on. Like annuities, big business, and such.” (P3)_

**2. 7 out of 7 users were able to successfully navigate the form and progress to completion without assistance in 12 out of 14 steps.**  

Users had no progress-blocking difficulties that interfered with completion of the form, and demonstrated a strong ability to navigate from section to section even if some confusion or difficulty existed (expanded on in subsequent findings). 

- _All users were able to understand and provide the information requested; talking aloud as they reviewed the prototype to confirm content understanding and clicking “start,” “continue,” and “submit” without explanation or prompting._

**3. When asked to rephrase key concepts or terminology during particularly dense or complex sections of the form in their own words, 5 out of 7 users were able to do so accurately.**

Throughout the form, users were asked to review content and describe what was being asked or conveyed. Most were able to successfully do so. 

2 of 7 users had challenges understanding terminology used, especially where limited examples or definitions were provided (e.g. annuities, trusts, etc) or they lacked a frame of reference to draw from. One example of note related to “waived income” and “deferred compensation.” Some did not understand the concept, stating they could not conceive of a situation where they would reject income they might otherwise be entitled to, especially if they were experiencing financial hardship. 

- _“I don’t know what ‘deferred compensation’ is. I have never heard of it before. Why would anyone want to delay [receiving money]? I’d have to look that one up.” (P1)_
- _“I would definitely say no [I do not have waived income to report] because it says you will be disqualified! This is the first I have heard of this.” (P4)_

**4. 7 out of 7 users were able to identify next action steps if additional information was needed using contact information provided or personal research.**

If clarification or additional information was needed or desired, all users felt confident about what actions they could take to find additional information. All were able to identify the VA helpline provided at the bottom of each page or that they might look online, utilizing YouTube or Google Search. Some also mentioned they would go to other trusted sources, such as a Veteran Service Officer; with 1 respondent noting the VSO lookup feature. 

- _“I like how they give examples [in Step 6]. It makes it easy to understand how it applies to me… [for unfamiliar terms] I would probably need to Google what I didn’t know and maybe call if I still had questions.” (P1)_
- _“I would have to do some research to make sure I had everything correct… the university of YouTube or Google and see what results I get.” (P7)_
- _“It’s great you have [the VSO locator] there… that’s important I think.” (P8)_

**5. 6 out of 7 users did not understand that they needed to enter each income separately when entering list and loop, with high frustration or anxiety exhibited before first income entry. Once the first entry was completed, users expressed a strong understanding of the pattern (Step 2).**

Most users when starting list and loop did not recognize that they needed to enter each source individually. Instead they tried to multi-select all recipients based on the scenario shared or sought additional clarification before proceeding. In the absence of explicit instruction, users relied on previous experience filling out consumer surveys where a multi-select might be more common, or other types of form. Once the first list and loop was completed, all users understood they needed to add the second source afterward without prompting or clarification. 

- _“Myself and my spouse qualify for recurring income… So I am trying to click everything that applies.” (P1)_
- _“There’s no statement on here ‘we are going to do one first and then the other.’ A little more information is needed.” (P7)_
- _“My wife receives income. They don’t count that as recurring? I tried to find a place to put it. I’d like to hit that ‘spouse’ and have it light up [as a multi-select].” (P8)_

**6. 6 out of 7 users were unclear about financial support rules based on existing content and were unable to recall the definition without additional info component (Step 2 and Step 3).**

Most users expressed confusion when reviewing the definition of a dependent. When selecting income recipients, users did not recognize instructions to forgo reporting for a child if they don’t provide financial support. Instead, they deferred to hint text that described additional conditions where you might report dependent income; such as full-time students under 23 years old. This led most users to incorrectly select “yes,” because the user thought they had to report income the child earned, even though they do not financially support them. Users were also unable to retain the definition of a dependent as they progressed through the form, utilizing the dropdown definition in real time as it was most relevant. 

- _“Is there a way you could change that to just say ‘legal dependants?’ It’s a financial issue right? Maybe say ‘Do you have financial responsibility for that child?’ That might help a bit.” (P9)_
- _“[References additional info component] They’re 18-23 and enrolled in school… So then yes I have income to report.” (P8)_

**7. 5 out of 7 users were confused by mention of supporting “evidence” on the Introduction page, leading them to believe they had to provide additional documentation than what might be requested by the VA. (Introduction page and Step 12).**

When reviewing the introduction page users did not understand why supporting documents were being referenced in advance. Confusion was compounded by using the term supporting “evidence” to describe what they might be asked to provide as they progressed through the form. 

- _“What exactly are they looking for? Bank statement, letter from employer? What are the documents they say we need to download? What qualifies?” (P4)_
- _“I wonder if [my] IRS form would be mentioned here… to upload another document that supports this form.” (P3)_
- _“I’ve been denied before [applying for benefits]. I’ve just learned you need to give them everything you can to get approved.” (P1)_

**8. 4 out of 7 users were confused when steps they were currently completing referenced previous steps by number rather than description. (Step 9 and Step 10).**

When previous steps were referenced, users questioned what information was shared during previous steps and how it may or may not apply to the current step they were attempting to complete. 

- _“This is confusing me right here… Are they still talking about irregular income? Or income from Step 1? [unable to remember what was included in Step 1]” (P1)_
- _“Based on the scenario that would be a no. But do you want me to go back to step 6? I don’t remember anything about that.” (P10)_  

**9. 6 out of 7 users did not recognize or select the “Expand all” option to review information before it was submitted, leading some to experience frustration when progressing to the confirmation page (Step 13).**

When interacting with the review and submit page, users did not acknowledge the “expand all +” button at the top of the page to review the information, instead skimming the closed accordion to search for any specific alerts or instructions related to each section. 1 user expressed frustration once they progressed to the confirmation page that they had not actually been able to review the information, assuming there would be another substep before submission where the accordion would be expanded.   

- _“Maybe you could put under the plus the documents you did upload [expanded by default]. That would help you be as accurate as you could be.” (P9)_
- _“Oh wait, I didn't see that earlier [on the review and submit page]. I can’t go back and check it now? [after reaching confirmation page]” (P3)_
- _“If I was confused about something I would use the plus sign to look at what I had put in. I guess that’s how you have to double check it.” (P10)_

**10. 7 out of 7 users desired more transparency regarding when to expect a decision for their claim (Confirmation page).**

Users appreciated transparency regarding how long it might take to be contacted by VA if additional action was needed, but all requested additional information about the benefit approval process. For some, they had previous experience with the VA where they had to wait extended periods of time before a decision was made. Others had applied for benefits and never received confirmation or received any communication back, prompting them to have to resubmit on their own or with assistance from others. 1 user described the lack of transparency as dismissive, which they felt undermined trust.

- _“This does not tell me how long it will take for the decision process. So I guess I’d have to call them. ‘Our decision can take as long as 90 days, 120 days…’ I guess it’s like a don’t call us, we’ll call you.” (P1)_
- _“They don’t always get back to you… It could be months and months and [like with travel pay] if you pay for something and this ends up getting denied. It could have been something we took care of another way.” (P10)_

---

## **Additional Insights**

**5 of 7 users shared that seeking live assistance from a VA or adjacent representative was critical to their success when filling out financial (and other required) forms to apply for benefits.**

As we consider further use cases and improvements to the 0969 and other relevant forms, this study validated that many Veterans may be completing their applications with assistance from others. 

- _“Sometimes you don’t know how to fill [the forms] out. When someone was helping me I realized this is what they want and that helped… When you do that a couple times then you know what you need to do.” (P1)_
- _“I’m working with the VA on some financial matters right now. I broke the code on some of the run around. I just didn’t understand the processes… One of the ladies submitted for me so I have no idea what was involved at that time.” (P3)_
- _“I sat down with the disability rep and it was a full session talking through things...” (P7)_
- _“I went through a VSO when I filed for disability. I’m human and I make mistakes. Sometimes I don’t take things as coherently as other people do.” (P8)_

**Those previously denied benefits, or who experienced negative interactions or outcomes with the VA, expressed more anxiety and concern for “getting the information right” and understanding what to expect when compared to those who had positive experiences.**

3 out of 7 users expressed concern or anxiety as they completed the form, based on prior experience being denied for benefits or having difficulty navigating complex systems like the VA. This underscores the importance of taking a trauma-informed approach to forms and experiences, to help support Veteran claims and build trust. 

- _“Forms scare me. I guess they scare a lot of people. I look at them and I think what does that mean? It’s not clear what the VA actually needs when you start. It needs to be dumbed down to the lowest level so everyone understands it.” (P1)_
- _“Usually they tell you this is qualified and this isn’t. You don’t want to have to guess… that’s my concern. If it tells you, you don’t have to waste your time going through if you are eligible or not.” (P4)_

**7 of 7 users initially applied their own dollar amount thresholds, or asked for clearer guidance, when determining if they should report items like cash or smaller income amounts from dependents.**

All users attempted to apply a specific dollar amount threshold when determining “what was worth” reporting. Identifying if specific financial thresholds exist and adjusting the content to reflect this may be beneficial in further clarifying expectations and reducing burden on the claimant to interpret what is being asked for; as well as the amount of information requested. 

- _“Is there a chart where you can go figure out if your interest is worth reporting? If it’s 0.1[%] is it even worth it? There should be a guideline. It doesn’t really move the needle on my income.” (P1)_
- _“Nobody has enough [cash to qualify] so I probably wouldn’t report it. Nobody is worried about that.” (P8)_
- _“My daughter doesn’t make enough money to put that into household. I’m not sure what a college student could contribute.” (P3)_

## Recommendations

1. **Clarify language at list and loop start so users understand they will need to submit each income type and recipient separately.**

2. **Adjust the definition of dependents to include emphasis on level of financial support provided to reduce confusion and help users determine what best applies in their situation.**

3. **Continue to provide a reminder of the definition of “dependent” on the pages where it is most relevant to reduce the amount of recall required and potential mental load.**

4. **Remove reference to supporting documents (or “evidence”) from the Introduction page to reduce anxiety and confusion for users.**

5. **Determine if it is necessary to reference previous steps within the form; and if so, provide written descriptions of what information was gathered in the previous step rather than just the number.**

6. **Set the accordion on the Review and Submit page to expand by default based on user inputs to better facilitate required action.**

7. **Provide more transparency about what to expect regarding application processing times and assist in providing a thruline back to Pension or DIC applications (as 0969 is often connected to another application being completed.)**


## Product User and Business Outcomes

- **Ease the burden of Veterans applying for pension benefits to complete the 21P-0969.**
  - This research supports our desired user outcome by identifying areas of success and improvement that supports a positive experience for Veterans reporting complex financial information.
 
- **Enable Veterans to provide income, asset and net worth information in a clear, streamlined online experience.**
  - This research supports our desired business outcome by assessing Veteran comprehension of form instructions and ability to complete necessary actions to submit in a logical way.

- **Deliver incremental value to Veterans in a timely fashion.**
  -  This research supports our desired business outcome by identifying the most high impact enhancements within existing constraints associated with 0969 improvement fast follow to MVP release. 

## Next Steps

We have met with OCTO Enablement Team partners to align on design enhancements to be included in MVP fast follow effort based on these findings. These will be released in line with the timing laid out on the Pension team roadmap.  


## Further research needed

Study results were strong in validating the general usability of the 0969 form and establishing several high impact low lift improvements to pursue. But there are some additional research opportunities to consider, especially if it’s planned as one element of a larger study. 

The team used scenario based testing of the 0969 form as a standalone experience following an ideal path. In order to test the true mental load that might be associated with the form, it may be necessary to test it as part of the full form flow with parent applications such as the Veteran’s Pension (527) and DIC (534) forms. We also may wish to introduce more complex paths that include less than ideal conditions. Based on the findings, additional research exploring Veteran mental models when applying for benefits as it related to financial reporting may also be beneficial in future. Lastly, we did not include caregivers or survivors as part of our participant base. These account for a different use case that is important to consider but was out of scope for this study.   


## Appendix

[Product Outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/pension/21P-0969-product-outline.md)
[Research plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/pension/research/2025%2004%20Pension%20Exploratory%20Research/research-plan.md)
[Conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/pension/research/2025%2004%20Pension%20Exploratory%20Research/conversation-guide.md)
[Interview transcripts](https://dvagov.sharepoint.com/:f:/r/sites/vaabdvro/Shared%20Documents/0%20-%20Benefits%20Portfolio%20-%20General/Research%20Recordings%20-%20Veteran-Staff-VSO/2025-07%200969%20Usability%20Study%20to%20Digitize%20Form?csf=1&web=1&e=fPL3k6)


## Tools used for Synthesis

Mural and Affinity Mapping  
  
## Pages and applications used

[Prototype](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/pension/research/2025-07%200969%20Usability%20Study/Prototype.md) 

## Who we talked to 

**Recruitment criteria**

_We recruited Veterans who were 65 years old and older with annual income under $50,000. This was to align with common demographics for those applying for needs-based programs such as Veteran’s Pension._

We talked to **7 participants.**

Audience segment:
* Veterans: 7 
* Caregivers: 0 
* Family members of a Veteran: 0  


Gender:
* Male: 5 
* Female: 2 


LGBTQ+:
* Transgender: Unknown 
* Nonbinary, gender fluid, gender queer, Two-Spirit (Indigenous only), or another gender beyond man or woman: Unknown
* Gay, lesbian, or bisexual: Unknown


Devices used during study: 
* Desktop: 3 
* Tablet: 2 
* Smart phone: 2
* Assistive Technology: 0


Age:
* 25-34: 0
* 35-44: 0
* 45-54: 0
* 55-64: 0
* 65+: 7
* Unknown: 0


Education:
* High school degree or equivalent: 0
* Some college (no degree): 3
* Associate's degree, trade certificate or vocational training: 2
* Bachelor's degree: 2
* Master's degree: 0
* Doctorate degree: 0
* Unknown: 0


Geographic location:
* Urban: 4
* Rural: 3
* Unknown: 0


Race:
* White: 3
* Black: 2
* Hispanic: 1
* Biracial: 1
* Asian: 0
* Native: 0


Disability and Assistive Technology (AT):
* Cognitive: Unknown
* AT beginner: Unknown
* AT advanced user: Unknown
* Desktop screen reader: Unknown
* Mobile screen reader: Unknown
* Magnification/Zoom: Unknown
* [Speech Input Technology](https://www.w3.org/WAI/perspective-videos/voice/) like Siri/Dragon Naturally Speaking: Unknown
* Hearing aids: Unknown
* Sighted keyboard: Unknown
* Captions: Unknown

