
Max CFI Explorations - Research Findings 

**Office of the CTO - Digital Experience (OCTO-DE), Benefits Delivery, Employee Experience Team**

Date: 11/17/2023

[Christine Steiffer] [christine.steiffer@agile6.com], [Kim Ladin] [kimladin@navapbc.com], [Carolyn Dew] [carolyn@navapbc.com]

**Jump to:**

- [Hypotheses and conclusions](#hypotheses-and-conclusions)
- [Key findings](#key-findings)
- [Recommendations](#recommendations)
- [Further research needed](#further-research-needed)
- [Who we talked to](#who-we-talked-to)


## Background
The VA receives many claims for increase (CFIs) for conditions where a Veteran is already at the maximum rating for that condition. In most cases, the condition will be “confirmed and continued” (denied) by a claims processor. We’d like to reduce the amount of time claims processors spend on these contentions by reducing the number of CFIs that Veterans file in this situation. Our initial work has focused on Tinnitus because it represents by far the largest category of CFIs where the Veteran is already at the maximum disability rating (over 20,000 such claims in FY2022). Tinnitus is also a good test case because it is virtually never granted over 10%.

We focused on the Rated Disabilities page within the online 526EZ application flow, adding language to inform Veterans when they’re already at the highest rating for Tinnitus. A first round of concept testing with 9 Veterans showed promise for the idea. The team then launched a live pilot on VA.gov, in which 50% of target users saw the added language in the 526 application, while 50% did not. Based on the results so far, the added language is dissuading about 20% of Veterans from filing a CFI compared to the group that didn’t see the new language.

Having seen some success in real cases, we turned our attention to improving on the initial solution. We explored several possible improvements and then took those into a new round of concept testing with Veterans. This report focuses on this most recent round of user research.

### Concepts tested
We tested four different prototypes which contained a mix of ideas for improving on the initial solution, including:
- Adding information outside of the 526 flow
- Adding greater friction within the 526 flow.
- Providing a better explanations of extra-scheduler ratings (the unusual but not impossible case in which a rating is granted over the maximum listed in the Rating Schedule)

### Project Context
This work supports [Octo Priority 7](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/strategy/OCTO-DE%20Priorities%202023.md):Fast-track disability claims, starting with PACT Act claims, and it fits into the [Veteran Journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf) in the Living Civilian Life phase. It’s related to the Moment That Matters called “Managing primary care and chronic health issues.”
**Benefits to Veterans**: Avoid unnecessary administrative burden for claims that would only get denied. Other claims can be processed more quickly by reducing the number of CFIs already at the maximum.

## Research Goals
**Project Goals:**
Goal 1: Evaluate the effectiveness of different interventions of reducing the number of maxed-out tinnitus claims.
Goal 2: Determine the value of showing the maximum possible rating for other conditions.
Goal 3: Determine what the final design should be based on feedback from variations between models.
**OCTO Goals:**
Goal 1: Provide accurate and timely information to Veterans.
Goal 2: Empower Veterans to make informed decisions over their disability claims.

## Research Questions

**Goal 1: Understand which intervention is the most effective in reducing the number of claims to help us decide if we should move forward with any of them.**
- Which method is most likely to dissuade them from submitting a CFI?
- Do Veterans have a preference between the methods they reviewed? Why or why not? 
- Do Veterans understand the educational content in the Yellow scenario? What action would they take after reading it?
- What do Veterans think about the separated list of conditions at their maximum rating in the Green scenario?
- Would the Veteran still submit their claim with the added friction in the Blue scenario? Why or why not?

**Goal 2: Determine how important it is to display maximum ratings for other conditions outside of Tinnitus.**
- By seeing all the possible maximum ratings listed with their conditions, how likely would a Veteran be to submit a CFI? How will that information factor into their decision-making process to determine if they will submit a CFI and for which conditions?
- Some designs that make a bigger impact for Tinnitus might be misleading for other conditions. Is that the case with Migraines? Do Veterans think they can get an increase in the Blue scenario?

**Goal 3: Get feedback on each of the designs to determine what details we should refine.**
- How well does each concept communicate to Veterans what their choices are?
- Do any concepts help Veterans feel more confident in their choice?
- Do any concepts make Veterans feel the VA is on their side?
- Does the information seem trustworthy?
- How do the designs make them feel about their experience on VA.gov?
- Is there additional information Veterans need when deciding what to do?

## Methodology 

- Thirteen remote 1:1 interviews with Veterans conducted over Zoom.
- Four prototypes were tested
  - Two of the prototypes used the View My Rated Disabilities page on VA.gov; the other two used the online 526 application flow.
  - Each Veteran saw either two or three prototypes in their session
  - The prototypes were distributed across the thirteen sessions so that each would be seen the same number of times but in a different order.

**Prototype distribution**

How many times each prototype was seen across 13 sessions

|                             | Yellow | Green | Purple | Blue |
|:--------------------------- | :----: | :---: | :----: | :--: |
| Total times tested          |    9   |   10  |    8   |   8  |
| Times used first in session |    3   |    3  |    4   |   3  |

- Participants were asked to imagine they were a Veteran currently rated for several disabilities, including Tinnitus and Degenerative Arthritis. These two conditions had recently worsened. We asked them to walk us through how they might find out if they could get higher compensation and how they might apply for more compensation.

## Hypotheses and Conclusions

| Hypothesis                            | Conclusion                  |
| :------------------------------------ | :-------------------------- |
| By implementing design modifications to the current 526 workflow, we will reduce the number of claims that end up getting ‘confirmed and continued’ at the maximum rating for Tinnitus. | **Inconclusive** No strong signal either way to conclude any of our scenarios would be more successful than the others, or more successful than our current intervention, in dissuading Veterans from filing CFIs on conditions at the maximum rating. |
| By adding educational content outside of the claims flow, we can reduce the number of maximum CFI claims submitted and help Veterans understand whether they still might want to request the increase even if they’re already at the maximum. | **Inconclusive** No strong evidence to show that intervening on the Rated Disabilities page would be more or less effective than within the 526 flow. Due to additional complications with changing this page, we do not recommend pursuing this option for now. |
| By adding more friction to the application process for conditions already at their rated maximum, we can dissuade more Veterans from filing and reduce their overall confusion. | **Partially True** While the added friction did dissuade more Veterans from filing, their overall confusion was not reduced and in some cases it increased. For that reason, we do not recommend pursuing this direction. |

- Although our results are inconclusive, we have been able to identify a recommended path forward. There are some design elements within the various prototypes that we believe will be more likely to help us reach our overall goals, and they are detailed in the report below. 

## Key Findings

**Dissuading Veterans from filing maxed-out CFIs**

1. All four prototypes were somewhat effective in dissuading Veterans from filing a Tinnitus CFI, but there was no clear evidence that any prototype was more effective than others or more effective than the current intervention. The next round of work should focus on strengthening the current intervention.
2. The friction provided in the Blue scenario worked better in dissuading participants from filing, but also caused the most frustration. Do not continue work on Blue.

**Educational Content**

3. The longer educational content better equipped Veterans to make an informed choice regarding whether or not to file. This should be the text we implement. 
4. The phrase ‘Maximum Standard Rating’ provided the most accurate definition of the concept. Use “maximum standard rating” or “highest standard rating”, with “maximum rating” as a short form when appropriate.
5. There were mixed results on placement and behavior of the link to explanatory content. If possible, link to the explanation within the box for Tinnitus. Explore whether the longer explanation could be contained within the main page. If not, explore where the explanation should live, and make sure it’s very easy to return to the application flow.

**Maximum Ratings for Other Conditions**

6. Providing the maximum rating for only tinnitus leads some Veterans to think all other conditions are not at the maximum rating. In order to avoid misleading Veterans, investigate the level of effort it might take to determine & display the maximum standard rating for all conditions, not just tinnitus.
7. Seeing the maximum rating for all conditions was clear and helpful to a majority of participants. Make a note for future discovery research around this issue if we decide to move forward with displaying the maximum rating for all conditions so that we don’t unintentionally increase the number of baseless claims submitted.

**Grouping Conditions**

8. The majority of participants thought it made sense to see the conditions list separated by those at the maximum rating and those that are not. If we can determine which conditions are at the maximum rating, display those conditions under a separate header.

## Details of Findings 

**Finding 1: All four prototypes were somewhat effective in dissuading Veterans from filing a Tinnitus CFI, but there was no clear evidence that any prototype was more effective than others or more effective than the current intervention.**

Labels: Initiative - Toxic Exposure, Legislation: PACT Act, Disability - Claims Status 

Across 13 different interviews and 35 prototype scenarios, we saw roughly half of Veterans dissuaded from filing a claim for Tinnitus when it was at the maximum rating. This result is consistent with our previous round of concept testing. Caveat: this dissuasion rate is much higher than what we’ve seen in real-world conditions with the pilot. 

This consistency with the previous round of testing, combined with the feedback we heard from participants, means it’s not clear whether any of the designs would significantly improve the dissuasion rate over the current intervention. In addition, we didn’t receive a clear signal about which of the prototypes was likely to be more effective in dissuasion. There is a weak signal that Blue was more effective, but we don’t recommend pursuing this direction for reasons we’ll discuss later.

There are several numerical ways to assess the results of the testing. We show three of them in the table below. Before reading this table, it’s critical to note that the numbers don’t approach anything even remotely like statistical significance. We show the results as percentages not to indicate statistical precision, but to account for the fact that some prototypes were shown more than others.

**Effectiveness of each prototype in dissuading Veteran from filing**

|              | Yellow | Green | Purple | Blue |
| :----------- | :----: | :---: | :----: | :--: |
| **Dissuasion before explanation** How many participants were dissuaded from filing **before** they read the explanatory text. | 56% (5) | 60% (6) | 50% (4) | 38% (3) |
| **Dissuasion after explanation** How many participants were dissuaded from filing **after** they read the explanatory text. | 67% (6) | 50% (5) | 25% (2) | 50% (4) |
| **Participation assessment of dissuasion** At the end of each session, participants told us which prototype was more likely to influence their decision not to file. | 22% (2) | 30% (3) | 13% (1) | 50% (4) |

Count of participants shown in ( )

The most important observation from these numbers is how close together they are. As a result, the decision about which designs to move forward with will depend on the qualitative feedback collected during this testing rather than on numerical results.

**A spectrum of persuadability**

One interesting pattern was that Veterans came to the table with different stances toward being told “no.” 4 Veterans told us they would file a claim for increase regardless of how much the website tried to dissuade them.

> _“It’s telling me I'm at the max and I need to do more work, but if it’s acting up I'm still going to go ahead with it. They’re not going to stop me.” - P16_

> _“Hell yeah I’m going to apply for more. Why is this my problem? This is your problem now!” - P2_

On the other hand, 2 Veterans were very easily dissuaded, telling us they wouldn’t waste their time or risk a reduction in the benefits they’re already receiving. 

> _“With all of them [the prototypes], I’d let it go. It’s a lot of hassle with very little benefit.” - P1_

With 6 Veterans at opposite ends of a persuadability spectrum, the remaining 7 fell somewhere in a persuadable middle.

> _“I’d reflect on whether I have a way to prove this. If not, I’d click No.” - P9_

> _“I would go to Learn more about VA disabilities -- learn what criteria I need to get to the next step.” - P3_
>
> **Recommendations**
> -  The next round of work should focus on strengthening the current intervention


**Finding 2: The friction provided in the Blue scenario worked better in dissuading participants from filing, but also caused the most frustration.**

Labels: Design System Components - Alert Expandable, Design System Components - Alert Boxes 

In the Blue prototype, the Rated Disabilities screen has a simple message in the Tinnitus box and then a follow-on screen to warn and then re-confirm their request for an increase for Tinnitus.

![Blue - Rated Disabilities](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/abd-vro/2023-10-max-CFI-explorations%20/Images/Blue1.jpeg) ![Blue - Friction Confirmation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/abd-vro/2023-10-max-CFI-explorations%20/Images/Blue%20Friction%20Open.jpeg)

Among participants who saw the Blue prototype, half said it was the most effective in influencing their decision to file.

> _“The confirmation page would influence me: Hey are you sure you want to do that? Usually they don’t ask you twice, it makes me feel like I need to review something before I do it.” - P16_

Participants noted the warning box was effective in drawing their attention, but some said the messaging felt negative.

> _“I like that one because it was like, ‘Alert!’ It brought you to your attention… It stood out.” - P12_

> _“The yellow caught my attention more... but the phrasing was harsh… The language needs to be more informational, less harsh.” -P15_

Participants were also frustrated that they were taken to an additional page in order to confirm what they already provided on the previous page. While this did convince some not to file, one was actually more inspired to file as a result of this added frustration.

> _“This one feels like “whoa whoa whoa hey are you sure?” Yes, that’s why I’m here! This makes it a little more frustrating.” - P2_

> _“With Blue, it doesn’t tell you in advance, you have to go through that work first. With Yellow or Green, it does the work for you.” - P9_

 **Recommendations**
 
 - Do not continue work on Blue

**Finding 3: The longer educational content better equipped Veterans to make an informed choice regarding whether or not to file.**

Labels: Design System Components: Additional Info  

To explain maximum ratings and empower Veterans to make more informed decision, we included explanatory text in all the prototypes. One prototype (Yellow) had a separate page with a longer, more detailed explanation; the other three had shorter text within an in-page dropdown link.

![Yellow - Link inside card](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/abd-vro/2023-10-max-CFI-explorations%20/Images/Yellow.jpeg) ![Yellow - Longer Explanation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/abd-vro/2023-10-max-CFI-explorations%20/Images/Yellow%20Explanation.jpeg)

![Green - Dropdown Above](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/abd-vro/2023-10-max-CFI-explorations%20/Images/Green%20Open.jpeg) ![Purple - Dropdown below](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/abd-vro/2023-10-max-CFI-explorations%20/Images/Purple%20Open.jpeg) ![Blue - Alert Dropdown](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/abd-vro/2023-10-max-CFI-explorations%20/Images/Blue%20Friction%20Open.jpeg)

Participants seemed to understand and gain confidence from the longer explanatory text included in the Yellow prototype.

> _“The [longer] content is good and gives you a good explanation. Then it elaborates how you can go about it, and what the criteria for going above are.” - P16_

> _“That makes perfect sense. I didn’t understand what that meant at all, but you click on that and it makes sense.” - P11_

For some participants, the shorter text explanations actually encouraged them to submit a claim for increase after previously stating they would not before reading it. 

> _“They say in rare cases, but it’s possible, so I’m glad I clicked it anyway” - P6_

> _“If it’s gotten more distracting and more frequent that’s probably an unusual experience so I would go ahead and try and push on and see what happens.” - P5_

**Recommendations**

- Use the longer explanatory text

**Finding 4: The phrase ‘Maximum Standard Rating’ provided the most accurate definition of the concept.**

Labels: Design System Patterns: Content Presentation

We wanted to test a few variations on this phrase so that we could determine the best way to describe the concept without confusing Veterans. We tested four different phrases across the scenarios: 

- Maximum Schedular Rating
- Maximum Standard Rating
- Maximum Possible Rating
- Maximum Rating

Participants had strong negative reactions to the ‘Maximum Schedular Rating’ phrase, feeling that the phrase was confusing and they were unclear what it meant.

> _“What is that?! Now you gotta go do research to figure out what that is.” -P3_

While more participants mentioned liking ‘Maximum Possible Rating’ or just ‘Maximum Rating’, the phrase ‘Maximum Standard Rating’ seemed to most accurately convey the concept and was easy for participants to understand. 

> _“Highest standard is standard - you can get more if you do ‘xyz’.” - P16_

**Recommendations**
- Use “maximum standard rating” or “highest standard rating”, with “maximum rating” as a short form when appropriate

**Finding 5:There were mixed results on placement and behavior of the link to explanatory content.**

Labels: Design System Patterns: Content Presentation

The prototypes offered different ways for users to see explanatory content about maximum ratings. Green, Purple, and Blue used an “Additional Info” drop-down link to show the explanatory text within the current page. Yellow showed the link within the box for the specific condition, and the link took users to a new page to read the explanatory text. 

Participants were twice as likely to click the link without  prompting in Yellow versus the other prototypes. They tended not to see the Additional Info elements on the other prototypes. This may have been due to placement of the link, or to its visual treatment, or both. 

> _“[Green] doesn't give you the option to do any more research.” - P9_

> _“I wasn’t necessarily able to see the link for more info on the Purple right away.” - P5_

Although the link in Yellow  was easier to see, users did not like going to a separate page to see the explanatory content.

> _“I'd rather be here so I don't have to leave the form. The most important thing is, I don't want to leave this form because I'm in the middle of applying and then I have to get back to it. And it might not have saved my data so far.” - P2_

> _“[Yellow] takes me to another page. This one [Green] is just a little tab drop-down and this, this allows easier flow. The other one is pretty much the same thing just on a different page and it's a little bit more headache to go back.” - P16_

**Recommendations**
- If possible, link to the explanation within the box for Tinnitus
- Explore whether the longer explanation could be contained within the main page
  - If not, explore where the explanation should live, and make sure it’s extremely easy to return to the application flow.

**Finding 6:Providing the maximum rating for only tinnitus leads some Veterans to think all other conditions are not at the maximum rating.**

Similar to our previous study, at least 1 participant saw the blue prototype that mimics our solution in production and (incorrectly) assumed all other conditions besides tinnitus were not at the maximum rating. The blue prototype listed migraines at 50% which is its maximum rating, but did not give any other specific indication that this was the maximum rating. This gives further weight to our concern that we are misleading Veterans with the current design.

> _“I’m still eligible for the other things, hypertension can be increased, everything else can be increased. If tinnitus doesn’t work, maybe pick something that tinnitus is contributing to, like migraines.” - P2_

> _“For migraines – I wouldn’t think there is an issue [with submitting a CFI], unless I know the schedular – especially if I see this [maximum rating message for Tinnitus] on the other line.” - P15_

**Recommendations**
- In order to avoid misleading Veterans, investigate the level of effort it might take to determine & display the maximum standard rating for all conditions, not just tinnitus.
******************

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

[Research plan](link here)

[Conversation guide](link here)

[Interview transcripts](link here)


## Tools used for Synthesis

e.g. mural boards, etc.  


## Pages and applications used

Link to prototypes or pages that were tested


## Other supporting documents created

e.g. user flows, personas, etc.


## Secondary research

Include any secondary research you may have. 

E.g. web analytics, ForeSee data, SME interviews, competitive analysis, or other relevant research studies.


## Who we talked to 
_Complete the demographic info below using information from the Perigean recruitment survey. For those items where you didn't have participants, please mark with "0". You can use "unknown" if you aren't sure if your participants had a characteristic._ 
_[See an example](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/post-mvp-releases/research/research-findings.md#who-we-talked-to)_

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
