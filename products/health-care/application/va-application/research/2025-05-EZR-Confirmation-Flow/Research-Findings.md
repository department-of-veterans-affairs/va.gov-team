

# EZR Confirmation Flow Research Findings 

**Office of the CTO - Digital Experience, Health Enrollment Team, 10-10EZR**

**07/24/2025**

**Hieu Vo and Renata Keck**

**[Link to Research Readout](link-here)**  
*Add a link to your research readout deck, if available.*

**Jump to:**

- [Hypotheses and conclusions](#hypotheses-and-conclusions)
- [Key findings](#key-findings)
- [Recommendations](#recommendations)
- [Product User and Business Outcomes](#product-user-and-business-outcomes)
- [Key Performance Indicators](#key-performance-indicators)
- [Next Steps](#next-steps)
- [Further research needed](#further-research-needed)
- [Who we talked to](#who-we-talked-to)


## Research Goals
*Provide context for this research by explaining how it fits into the Veteran’s journey.*  
[See the Veteran journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf)  

**Guiding Questions:**  
- What are the key moments this tool supports in the Veteran’s journey?  
- What outcomes are we aiming to achieve for Veterans and stakeholders?  

[Example Research Goals](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/initiatives/2021-post-mvp-releases/research/research-findings.md#research-goals) 



## Research Questions

**Spouse Information:** Test the usability of the spouse information section to see if the Veterans follow the conditional logic, what information can be updated, and whether the information presented is comprehensible.

**Confirmation Flow:** Validate that the confirmation flow (Option Red), using the List&Loop component, is more efficient than the existing MVP approach (Option Green).

**Gray Reference Card:** Understand how the Veterans expect the previous year’s data to be prefilled, and do they understand the hierarchy of the information.

## Methodology 

- Semi-structured interviews
- Moderated usability testing on [3] tasks, using the think-aloud protocol:
  - Task 1: Updating spouse's address
  - Task 2: Fill out your previous year’s financial information
  - Task 3: Edit an error in your spouse’s financial information

Note that after the spouse section, users will fork for A/B testing of the proposed confirmation flow and MVP experience:

- Cohort A will see Option Green first, called Prototype Green [Existing version of the Financial Information, moderator provides last year’s financial information]
- Cohort B will see Option Red first, called Prototype Red [Confirmation Flow version with the gray box reference, moderator does not provide last year’s financial information]

[Example Methodology](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/initiatives/2021-post-mvp-releases/research/research-findings.md#methodology)


## Hypotheses and Conclusions

- **Hypothesis Statement: The participant will understand the Spouse Information and Financial Information shown in List&Looop's review page** 
  - **Likely True**  
  - 8/10 participants expressed a clear understanding of spouse and financial information List & Loop component.  

- **Hypothesis Statement: The participant will prefer the Confirmation Flow (Option Red) over the existing MVP flow (Option Green)**   
  - **Maybe True**  
  - 6/10 participants prefer Option Red while 4/10 participants prefer Option Green.

- **Hypothesis Statement: The participant will ask more questions, require more time to understand the content in the gray reference card component**  
  - **"Maybe True"
  - Several participants showed hesitation and/or confusion at the initial with the Gray Box reference but 6/10 participants indicated that the entire section was not confusing and straightforward to go through.


## Key Findings

*Summarize the 5–10 most impactful findings from your study.* 

**1.** Participants expressed a clear understanding of the spouse and financial information List&Loop component.

**2.** There is a slightly higher preference for Optional Red (Confirmation Flow) over Option Green (existing MVP flow). 

**3.** Many participants expected VA.gov to operate in ways consistent with their mental models.


## Details of Findings 

*Provide detailed descriptions and supporting evidence for each key finding.*  

**Finding 1:**  
Participants generally understood the List&Loop component for the spouse and financial information, but want more contextual guidance and content consolidation around the List & Loop's intro and review pages. 
- 7 out of 10 participants found that the financial section was easy to understand in both prototypes.
- Participants expressed a need for the List & Loop to have clear guidance or to consolidate its content.
    - 3 participants felt that the Dependent List&Loop Intro should be merged with the next page.
    - 5 participants wanted more dynamic content or upfront information on gathering the required financial information.
- 4 participants suggested adding details like Date of Marriage to the Spouse Review page to reduce the need for checking or backtracking.

  *P3: "Why don't you combine the 2 (financial intro and income pages) again? It's just this question, right? It's just this question. And then whne you click next, it all expands out to include what I'm trying to put in".*

  *P8: "A little synopsis of just like these questions in the [review accordion]. So that when they come back...they can verify it without having to click the edit button" (re: spouse review page).*

**Finding 2:**  
Participants showed a slight preference for Option Red (Confirmation Flow) over Option Green (existing MVP flow) due to the perceived speed and helpful reference information. 

- 6 out of 10 participants preferred Option Red, citing efficiency and helpful reference cues. The remaining 4 preferred Option Green. (MVP flow)
- 5 out of 10 participants noted that both flows felt similar and 2 of those did not express a strong preference for either.
- 6 out of 10 participants found that the gray box referencing previously filled information to be helpful for context, even if the information wasn't directly relevant to them.

  *P3: "Fast, and that's why I think Option Red would be better in terms of speed and knocking this out".*
  *P3: "If I don't know 2023's gross (income) off the top of my head, that requires me to open up another document in my files for the gross income. So that's very, very helpful" (re: gray box reference).
  *P6: "I think it's useful to have this information just so you can kind of sometimes, you know, like 'did I earn more money this year?' ".*
  *P8: "I'm kinda on the fence. I like the gray boxes with information, but I also like the clean slate of just knowing to put what's focused for 2024".*

**Finding 3:**  
Participants expected VA.gov to align with their mental models around progress tracking, data handling, and form behavior. Any mismatch in these areas led to confusion and frustration.
- 5 participants found the Stepper Progress Bar to be confusing and unhelpful. One participant suggested an alternative, like a checklist or task list, for better orientation.

  *P4: "How much longer is this going to take? I'm still on number 2".*
  *P6: "Even if you click on next page, you're still not moving, kind of, this one bar".*

- 3 participants expect an option for spouse address to match the Veteran's address.

  *P4: "If your spouse's address is different from the Veterans, you know, then give me this option (to edit)".*

- 3 participants assumed that the prefilled information is from their VA profile.

  *P7: "This is stuff that you put in when you first create a VA account. So this again, you moved, or something, got a new phone, this is not going to change."

- 1 participant, who works with homeless services, noted that improving online accessibility and standardized support communications could reduce wait times and make it easier for homeless Veterans to receive timely assistance.

  *P9: "The biggest issue, I think, that I see my vets have is setting up their MyHealtheVet. That is the biggest problem: they get confused. They can't remember their password. I tell them, 'Go into the VA, they got an office set up for that.' So that's a barrier in and of itself".*
  *P9: Veteran not accessing this (health care portal), it delays them by weeks. They have to go do the paper form, so they have to get it, fill it out, take it into enrollment and eligibility. They're waiting on this to be completed so they can get homeless services versus if this were more accessible. It would be just be easier for them".*

---

## **Additional Insights**

**Additional Insights 1.** 
Participants found the flow easy to use, reinforcing patterns from previous studies around clarity and supportive UI elements.
- All participants had recently used VA.gov.
- Every section of the form has several participants, indicating the form is clear and straightforward.
- Like past studies, many participants responded positively to the save-in-progess messages, hint text, pre-fill, and additional information component.
  - 7 participants expanded the additional information component to read the description, with 5 expilicity indicating it is helpful.
  - 6 participants mentioned that the save-in-progess alert is good.
 
  *P1: "I would be zipping through this. This isn't rocket science, really".*
  *P9: "These dropdown boxes are awesome". (re: additional information component*

**Additional Insight 2:** 
Participants prefer the online experience over the phone for making updates.
- 3 participants expressed a clear preference for self-service editing over calling, citing long wait times and complicated menus.
  *P5: "I hate having to call 800 number to do things, especially if it's the VA general number trying to work through a menu to get the right person. It's never fun."

**Additional Insight 3:** 
The are drawbacks to using Figma for Prototype testing.
- 9 out of 10 participants have a service-connected disability rating of 50% or higher, meaning they aren't usually required to fill out the financial section.

  *P1: "None of this would be pertinent to me".*
  *P4: "I've never been asked for any of my financial information. Very invasive. I think".*

## Recommendations

**Recommendation 1: Improve the List & Loop clarity**
- Due to the rigid nature of the List&Loop, we will not be able to dynamically consolidate the Introduction screen with the succeeding screen in the Dependent and Spouse section. We can, however, improve the guidance with informational content at the List&Loop introduction pages. 
- For the List&Loop review screen, 

**Recommendation 2: Optimize the flow to be more aligned with the Veteran's mental model**
- Cosmetic update for the border around Personal Info
- Cosmetic update for Marital Status (radio button option)
- Prefilled Spouse Address? No

**Recommendation 3: Optimize Confirmation Flow (Option Red)**
- Adopt or hybridize the Confirmation Flow.
- Consider a customized Contact Information (Address, phone, and email)
- Explore ways to make the  Gray Reference box clearer. 

**Recommendation 4: Improve Accessibility for at-risk groups**
- Unhoused/homeless address option
- Standardized communication?? 

**Recommendation 5: Va.gov**
- Redesign the stepper component
- VA Profile 

**Recommendation 6: Prototype Testing**
- Frame the scenario clearly
- Supplement Figma tests? 

## Product User and Business Outcomes

*Explain how findings and recommendations align with the product's goals.*

> [!NOTE] 
> Refer back to your Product Outline. 

- **Desired User Outcome**
  - This research supports our desired user outcome by....
 
- **Deisred Business Outcome**
  - This research supports our desired business outcome by....


## Key Performance Indicators

*Explain how findings will support KPI measurement.*  

> [!NOTE]
> Refer back to your Product Outline. 

- **KPI 1**
  -  This research supports measurement of this KPI by....


## Next Steps

*Outline immediate actions based on findings, including owners if applicable.*  


## Further research needed

*Identify gaps in the current study and areas requiring additional investigation––such as demographics that were not included in this study.* 


## Appendix
[Product Outline](link here)

[Research plan](link here)

[Conversation guide](link here)

[Interview transcripts](link here)


## Tools used for Synthesis

*List tools or techniques used, e.g., Mural, affinity mapping.*  
  
## Pages and applications used

*Link to prototypes or pages tested during the study.*  


## Other supporting documents created

*Include links to additional materials, e.g., personas, user flows.*  


## Secondary research

*Include any relevant secondary research, e.g., web analytics, SME interviews.*  

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
* Female: 3 
* Did not answer: 1 


LGBTQ+:
* Transgender: x 
* Nonbinary, gender fluid, gender queer, Two-Spirit (Indigenous only), or another gender beyond man or woman: x
* Gay, lesbian, or bisexual: x


Devices used during study: 
* Desktop: 8 
* Tablet: x 
* Smart phone: 2 
* Assistive Technology: x


Age:
* 25-34: 2
* 35-44: 2
* 45-54: 1
* 55-64: 2
* 65+: 3
* Unknown: x


Education:
* High school degree or equivalent: x
* Some college (no degree): 2
* Associate's degree, trade certificate or vocational training: 2
* Bachelor's degree: 2
* Master's degree: 3
* Doctorate degree: x
* Unknown: 1


Geographic location:
* Urban: 9
* Rural: 1
* Unknown: x


Race:
* White: 6
* Black: 1
* Hispanic: 1
* Biracial: 1
* Asian: x
* Native: x
* No answer: 1


Disability and Assistive Technology (AT):
* Cognitive: 2
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

This research does not include the perspectives of the following marginalized Veteran groups:

* Veterans with other than honorable discharge
* Veterans with immigrant origin
* Expat (living abroad) veteran
* Asian Veterans
* Native American Veterans
* Gay, lesbian, or bisexual Veterans
* Transgender Veterans
* Veterans that use assistive tech 


<img width="583" height="483" alt="Screenshot 2025-07-24 at 5 54 09 PM" src="https://github.com/user-attachments/assets/c18a07fe-75a4-4d21-b8c0-b6cf74b8de60" />
