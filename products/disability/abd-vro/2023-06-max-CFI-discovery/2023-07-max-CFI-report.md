 # Tinnitus claims for increase - Research findings 

**Office of the CTO - Digital Experience (OCTO-DE), Disability Benefits Employee Experience Team**

**Date:** 07/28/23

**Researchers:** Carolyn Dew carolyn@navapbc.com, Kim Ladin kimladin@navapbc.com, Christine Rose Steiffer christine.steiffer@agile6.com

**Jump to:**

[Hypotheses and conclusions](#hypotheses-and-conclusions)

[Key findings](#key-findings)

[Additional insights](#additional-insights)

[Recommendations](#recommendations)

[Appendix](#appendix)
<br>
## Background 
The VA receives many claims for increase (CFIs) for conditions where a Veteran is already at the maximum rating for that condition. In most cases, the condition will be “confirmed and continued” (denied) by a claims processor. We’d like to reduce the amount of time claims processors spend on these contentions by reducing the number of CFIs Veterans that file in this situation.

Our first effort will target Tinnitus CFIs. With nearly 25,000 claims filed in FY2022, Tinnitus represents the largest category of CFIs where the Veteran is already at the maximum disability rating. Tinnitus is also a good test case because it is virtually never (0.0001% of the time) granted over 10%.

This work supports [OCTO Priority 7](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/strategy/OCTO-DE%20Priorities%202023.md): Fast-track disability claims, starting with PACT Act claims, and it fits into the [Veteran Journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf) in the Living Civilian Life phase. It’s related to the Moment That Matters called “Managing primary care and chronic health issues.” 

Benefits to Veterans: 
Avoid unnecessary administrative burden for claims that would only get denied
Other claims can be processed more quickly by reducing the number of CFIs already at the maximum
## Research Goals
Goal 1: Assess whether our intervention could modify Veteran behavior. 

Goal 2: Evaluate early concept(s).

Goal 3: Learn how Veterans think and speak about CFIs and tinnitus.

## Methodology 
* Nine remote 1:1 interviews with veterans conducted over Zoom. 
* Each Veteran saw two prototypes, one where all the text was contained within the tinnitus box, and one where more information was available in an Additional Info component elsewhere on the page.

## Hypotheses and Conclusions
_Hypothesis statement_

> By educating Veterans that they’re already at the schedular maximum and what their options are in the 526 disability compensation application flow on VA.gov, we can reduce the number of VA.gov CFI that are bound for C&C, thereby reducing VSR/RVSR burden of processing those claims and Veteran stress of submitting a claim that will ultimately be C&Ced.

**Likely True** - We expect this education-only intervention to have an impact of up to 10 percent. Participants said they would not file a CFI in 8 of 18 scenarios. This suggests that we would be able to dissuade some number of Veterans from filing a claim that would only be C&Ced. However we can’t know for sure until we test results in real-world scenarios in a limited-release pilot. 

## Key Findings

### Finding 1: The prototypes were somewhat successful in persuading Veterans not to request a claim for increase for Tinnitus because it was already at the maximum rating.
We tested 18 scenarios in all. The intervention was successful in 8 of these and failed in the other 10.

**Number of veterans who would or would not file by prototype tested.**
| Prototype      | Would not file | Would file |
| ----------- | ----------- | ----------- |
| Mild language, two sentences in tinnitus box ([Yellow](https://github.com/department-of-veterans-affairs/va.gov-team/blob/bca1fdcc5b9e80dd52127b7b5cf869be623e7b50/products/disability/abd-vro/2023-06-max-CFI-discovery/images/Yellow-screenshot.png))    | 1 out of 3 | 2 out of 3 |
| Strong language, one sentence in tinnitus box ([Orange](https://github.com/department-of-veterans-affairs/va.gov-team/blob/bca1fdcc5b9e80dd52127b7b5cf869be623e7b50/products/disability/abd-vro/2023-06-max-CFI-discovery/images/Orange-screenshot.png))     | 3 out of 6 | 3 out of 6 |
| Mild language, one sentence in tinnitus box, </br> and Additional Info component at top ([Blue](https://github.com/department-of-veterans-affairs/va.gov-team/blob/bca1fdcc5b9e80dd52127b7b5cf869be623e7b50/products/disability/abd-vro/2023-06-max-CFI-discovery/images/Blue-screenshot.png))    | 1 out of 5 | 4 out of 5|
| Mild language, one sentence in tinnitus box. Includes  </br>Additional info component at bottom with stronger language. ([Purple](https://github.com/department-of-veterans-affairs/va.gov-team/blob/bca1fdcc5b9e80dd52127b7b5cf869be623e7b50/products/disability/abd-vro/2023-06-max-CFI-discovery/images/Purple-screenshot.png))    | 3 out of 4 | 1 out of 4 |

**Reasons for filing an increase:**
* At this point in the process, might as well file
* Just let VA give me an answer
* Still feels like there’s enough of a chance (“I’m thinking I have a 5-10% chance of getting increased")

**Reasons for not filing:**
* There’s no point in filing if I’m at the max/going to get denied (Orange)
* Previous claims experience was ‘rigamarole’ of appointments and paperwork 

### Finding 2. The most successful prototype (Orange) used strong language in the Tinnitus checkbox and did not include an additional information component. 

This intervention was successful three out of six times. While the prototype with strong language in the Additional Information Component (purple) was more effective in dissuading users from filing, it also caused more confusion and negative reactions 
> “Why are you denying 99.9% of the claims?!?" - Veteran 9 

Participants were confused by the language that explained how to file for a secondary condition (Purple and Blue, in the Additional Information component). 

### Finding 3. Only two participants out of eight noticed the Additional Info component without additional prompts.

Four participants noticed the component only after further questions about the screen.

Two out of the five participants who saw Scenario Blue – where it was located above the rated conditions list – missed the component entirely until it was directly pointed out. 

### Finding 4. Participants assumed that the absence of the ‘max rating’ messaging on all other conditions in the prototype meant that those were eligible for higher ratings, even though migraines was listed at its maximum rating (50%).

### Finding 5. Some participants were confused why they could still select tinnitus on their claim when it said they were at the maximum rating.

When asked, they expected to be blocked from claiming an increase for tinnitus if they were already at the highest rating, or they expected a more prominent alert to appear.

## Additional Insights
1. Participants had varying levels of understanding of the rating schedule.
2. Veterans think about how conditions relate to each other - both as secondary conditions and how they impact their overall rating. They compare conditions to strategize how to get an increased overall rating.
3. Bad previous experiences with the VA influences a Veteran’s current attitudes.
   > “The site is user-friendly, but not geared towards my best interests." - Veteran 2
4. A number of veterans praised the information they received in their decision letters to understand their rating level. 
## Recommendations
* Launch a limited-release pilot testing the real-world effects of Scenario Orange, with the goal of learning more about Veteran behavior. 
* Explore the following ideas to expand on this concept after pilot: 
  * Include information about the maximum rating for all conditions on the Rated Disabilities screen of the 526EZ
Note: while it’s exceedingly rare for veterans to get a rating higher than the maximum for tinnitus, it’s more common for other conditions (such as migraines). 
  * Create an information page that more thoroughly explains what a maximum rating is, and what are the criteria you need to meet to get a rating above the maximum. 
  * Include maximum rating information for conditions listed on the “View your VA disability ratings” page in VA.gov to provide Veterans information before they start filling out an application.
  * Find ways to introduce more friction when Veterans apply for an increase for a condition that is already at the maximum rating, without fully blocking them.
## Appendix
[Research plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/abd-vro/2023-06-max-CFI-discovery/2023-06-max-CFI-discovery-research-plan.md)

[Conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/abd-vro/2023-06-max-CFI-discovery/2023-06-max-CFI-discovery-conversation-guide.md)

[Interview notes](https://dvagov.sharepoint.com/:f:/r/sites/vaabdvro/Shared%20Documents/0%20-%20Benefits%[…]0and%20transcripts%20(Contains%20PII)?csf=1&web=1&e=ifuVcz)
### Tools used for Synthesis
[Synthesis Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1689302928811/cb963247dbd1c9f4aa9842439693d513510069ad?wid=0-1689362846223&sender=carolyn1198)
### Pages and applications used

[Sketch prototype - Yellow and Blue](https://sketch.com/s/7b704520-bd67-4e58-8187-2164d7616bd4/a/1VxlAbp/play)

[Sketch prototype - Orange and Blue](https://sketch.com/s/7b704520-bd67-4e58-8187-2164d7616bd4/a/w5roKWw/play)

[Sketch prototype - Orange and Purple](https://sketch.com/s/7b704520-bd67-4e58-8187-2164d7616bd4/a/3oGzdnz/play)

### Prototype screenshots 
With added text highlighted

| Scenario Yellow | Scenario Orange | Scenario Blue | Scenario Purple | 
| --- | --- | --- |  --- | 
| ![Screenshot of primary screen in Scenario Yellow, showing mild language within the tinnitus box.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/35f24debfd36b87a9e3148bb06eaef1168b05449/products/disability/abd-vro/2023-06-max-CFI-discovery/images/Yellow-screenshot.png) | ![Screenshot of primary screen in Scenario Orange, showing strong language within the tinnitus box.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/35f24debfd36b87a9e3148bb06eaef1168b05449/products/disability/abd-vro/2023-06-max-CFI-discovery/images/Orange-screenshot.png) | ![Screenshot of primary screen in Scenario Blue, showing an expanded Additional Info component above the rated disabilities list and mild language within the tinnitus box.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/35f24debfd36b87a9e3148bb06eaef1168b05449/products/disability/abd-vro/2023-06-max-CFI-discovery/images/Blue-screenshot.png) | ![Screenshot of primary screen in Scenario Purple, showing an expanded Additional Info component below the rated disabilities list and strong language within the tinnitus box.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/35f24debfd36b87a9e3148bb06eaef1168b05449/products/disability/abd-vro/2023-06-max-CFI-discovery/images/Purple-screenshot.png) |


