
Max CFI Explorations - Research Findings 

**Office of the CTO - Digital Experience (OCTO-DE), Benefits Delivery, Employee Experience Team**

Date: 11/17/2023

[Christine Steiffer](christine.steiffer@agile6.com), [Kim Ladin](kimladin@navapbc.com), [Carolyn Dew](carolyn@navapbc.com)

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

_Count of participants shown in ( )_

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

**Finding 5: There were mixed results on placement and behavior of the link to explanatory content.**

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

**Finding 6: Providing the maximum rating for only tinnitus leads some Veterans to think all other conditions are not at the maximum rating.**

Similar to our previous study, at least 1 participant saw the blue prototype that mimics our solution in production and (incorrectly) assumed all other conditions besides tinnitus were not at the maximum rating. The blue prototype listed migraines at 50% which is its maximum rating, but did not give any other specific indication that this was the maximum rating. This gives further weight to our concern that we are misleading Veterans with the current design.

> _“I’m still eligible for the other things, hypertension can be increased, everything else can be increased. If tinnitus doesn’t work, maybe pick something that tinnitus is contributing to, like migraines.” - P2_

> _“For migraines – I wouldn’t think there is an issue [with submitting a CFI], unless I know the schedular – especially if I see this [maximum rating message for Tinnitus] on the other line.” - P15_

**Recommendations**
- In order to avoid misleading Veterans, investigate the level of effort it might take to determine & display the maximum standard rating for all conditions, not just tinnitus.

**Finding 7: Seeing the maximum rating for all conditions was clear and helpful to a majority of participants.**

Labels: Design System Patterns: Content Presentation

![Purple - Maximum Possible Rating](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/abd-vro/2023-10-max-CFI-explorations%20/Images/Purple%20Open.jpeg)

In the purple prototype, we displayed the maximum rating for all conditions to see the impact that would make on Veteran perception of their eligibility. This provided the clearest explanation out of all the prototypes for which conditions still had room to apply for more benefits. When the purple prototype was viewed after another prototype, three of four participants mentioned how helpful it was to see the maximum possible rating. 

> _“I like that it says your current and max possible - I see each thing that I’m eligible for an increase too.” - P7_

This did cause 2 participants to suggest that seeing this might inspire them to apply for the maximum amount of benefits on all of their conditions.

> _“This makes me feel like… how can we push to get the maximum possible rating?” -P5_

**Recommendations**
- Make a note for future discovery research around this issue if we decide to pursue displaying the maximum rating for all conditions, so that we don’t unintentionally increase the number of baseless claims submitted.

**Finding 8: The majority of participants thought it made sense to see the conditions list separated by those at the maximum rating and those that are not.**

Labels: Design System Patterns: Content Presentation

![Yellow - One Conditions List](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/abd-vro/2023-10-max-CFI-explorations%20/Images/Yellow.jpeg) ![Green - Conditions List Separated](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/abd-vro/2023-10-max-CFI-explorations%20/Images/Green%20Closed.jpeg)

We presented the information about maximum rating either within the individual condition boxes or underneath a separate header. Seeing the maxed-out conditions under a separate header helped draw participants’ attention to the difference between the two sets of conditions and helped them understand how to move forward. 

> _“[The Green prototype] is set up better for Veterans that don’t understand the claims process. These can be increased, these - not so much.” - P14_

While over half of participants favored seeing the list of conditions separated, some were confused by the way this separation was displayed. 

> _“Are they connected? In the same group? They look separate just from scrolling… Where’s my tinnitus? Oh, it’s down here.” - P8_

**Recommendations**
- If it is possible to display the maximum rating for all conditions, do so in a separated list while considering design variations to keep the conditions list visually cohesive. 
  - In the meantime, order the list to put the maxed-out conditions at the bottom.


## Additional Insights

- We saw similar results as our previous test where some participants were frustrated that the system did NOT block them from submitting when the guidance tells them they have already reached the max. We may want to consider ways to educate Veterans on why we won’t block them from submitting even if it is unlikely to increase the benefit claim.

> _“Maybe they’re lazy in designing this because they didn’t put a parameter not to select things you’re already at the max for.” - P2_

- We saw a few Veterans get frustrated that their place didn’t change within the stepper component at the top of the 526 as they were moving through the pages within the form. We have seen this confusion expressed in previous studies as well, so this might be an area this team would want to look into.

Labels: Product: Form 526 ez

> _“When I clicked [onto the next page] I expected it [the steps] to be 3 of 5 but it’s 2 of 5 still. If it stayed like that long I’d get frustrated.” - P8_


## Recommendations

Overall Direction
- Focus the next round of work on strengthening the current intervention within the 526EZ flow
  - Discontinue work on Blue
  - Discontinue work on the View My Rated Disabilities page (outside of the 526 flow)
    - Assess the level of effort needed to provide maximum ratings for all conditions, not just tinnitus

Explanation Text
- Use explanation text to empower Veterans in making the best decision for their situation
- Use the longer explanatory text
- If possible, link to the explanation within the box for Tinnitus
- Explore whether the longer explanation could be contained within the main page
  - If not, explore where the explanation should live, and make sure it’s extremely easy to return to the application flow

Wording
- Use “maximum standard rating” or “highest standard rating”, with “maximum rating” as a short form when appropriate

Display 
- If we can provide the maximum rating for all conditions, do so with two separate lists within the 526EZ flow
  - In the meantime, order the list with Tinnitus at the bottom


## Next Steps

Our next steps are to work with the appropriate teams to refine our design recommendations and create an accessible prototype to test with assistive technology users. The results of that test will help us determine if our new design will have a greater impact on the number of Veterans filing CFIs on conditions at the maximum rating than our current intervention. By exploring the effort needed to show the maximum rating for all conditions, we will have a better way to judge whether the impact will be worth the time it will take to make it happen.


## Further research needed

Our next round of research will recruit users of assistive technology, those with cognitive disabilities and members of the LGBTQIA+ community, among others. We are building out the prototype in a tool  that is accessible for screen readers. While this previous round of testing included Veterans with cognitive disabilities, we might consider recruiting again from this population to ensure the solution we implement addresses their needs.


## Appendix

[Research plan](https://dvagov.sharepoint.com/:w:/r/sites/vaabdvro/Shared%20Documents/Employee%20Experience/Research%20and%20Design/2023%2010%20Max%20CFI%20explorations%20preference%20testing/Max%20CFI%20Explorations%20Veteran%20Research%20Plan.docx?d=wf987e831ec4148cd880ea18f1b448e7c&csf=1&web=1&e=YOz183)
[Conversation guide](https://dvagov.sharepoint.com/:w:/r/sites/vaabdvro/Shared%20Documents/Employee%20Experience/Research%20and%20Design/2023%2010%20Max%20CFI%20explorations%20preference%20testing/Max%20CFI%20Explorations%20Veteran%20Conversation%20Guide.docx?d=w6948548315024b5088e119884bddbcbd&csf=1&web=1&e=WgnVt9)

[Interview transcripts](https://dvagov.sharepoint.com/sites/vaabdvro/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2Fvaabdvro%2FShared%20Documents%2FEmployee%20Experience%2FResearch%20and%20Design%2F2023%2010%20Max%20CFI%20explorations%20preference%20testing%2FRecordings%20and%20Transcripts&viewid=3fa7a9bb%2D3d4e%2D44c2%2Db93f%2D629268a08e72)


## Tools used for Synthesis

[Synthesis](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1698183162672/82f141d730ea00f0c984bbf41cc3efe1d7867827?sender=f31b97a9-48af-4b33-ba7f-b22a70a81e05) 

[Research Results Spreadsheet](https://dvagov.sharepoint.com/:x:/r/sites/vaabdvro/Shared%20Documents/0%20-%20Benefits%20Portfolio%20-%20business/Veteran%20Research/2023%2010%20Max%20CFI%20explorations%20preference%20testing/CFI%20Veteran%20Research%20Oct%202023%20-%20Results%20(002).xlsx?d=w38dc584c5b4541a6b1e630792d5876e1&csf=1&web=1&e=Ehjk5g) 

[Research Repository](https://app.enjoyhq.com/projects/1o7nvamEy/overview) 

## Pages and applications used

[Sketch Prototype - Yellow](https://www.sketch.com/s/bf1a0cd3-1fae-4321-a081-82db48fa3d3a/a/qbM2nmz)

[Sketch Prototype - Green](https://www.sketch.com/s/bf1a0cd3-1fae-4321-a081-82db48fa3d3a/a/w58znkE)

[Sketch Prototype - Purple](https://www.sketch.com/s/bf1a0cd3-1fae-4321-a081-82db48fa3d3a/a/71ADWxp)

[Sketch Prototype - Blue](https://www.sketch.com/s/bf1a0cd3-1fae-4321-a081-82db48fa3d3a/a/w58z0mm)

## Secondary research

[Initial Max CFI Research Report](https://dvagov.sharepoint.com/:f:/r/sites/vaabdvro/Shared%20Documents/0%20-%20Benefits%20Portfolio%20-%20business/Veteran%20Research/2023-07%20Claims%20for%20Increase%20Veteran%20Research?csf=1&web=1&e=r2I3kO) 


## Who we talked to 

**Recruitment criteria**

We talked to **13 participants.**

Audience segment:
* Veterans: 13
* Caregivers: 0 
* Family members of a Veteran: 0 


Gender:
* Male: 6
* Female: 7 


LGBTQ+:
* Transgender: _unknown_
* Nonbinary, gender fluid, gender queer, Two-Spirit (Indigenous only), or another gender beyond man or woman: _unknown_
* Gay, lesbian, or bisexual: _unknown_


Devices used during study: 
* Desktop: 13
* Tablet: 0
* Smart phone: 1 
* Assistive Technology: 0


Age:
* 25-34: 1
* 35-44: 5
* 45-54: 4
* 55-64: 3
* 65+: 0
* Unknown: 0


Education:
* High school degree or equivalent: 1
* Some college (no degree): 3
* Associate's degree, trade certificate or vocational training: 1
* Bachelor's degree: 2
* Master's degree: 4
* Doctorate degree: 1
* Unknown: 1


Geographic location:
* Urban: _unknown_
* Rural: _unknown_
* Unknown: _unknown_


Race:
* White: 7
* Black: 4
* Hispanic: 1
* Biracial: 2
* Asian: 1
* Native: 1


Disability and Assistive Technology (AT):
* Cognitive: 7
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

This research does not include the perspectives of the following marginalized Veteran groups: - 
* Mobile Users
* Rural
* Other than honorable
* Immigrant origin
* Expat
* Hispanic
* Biracial
* LQBTQ+ Users
* AT Users


![VA-recruitment-checker](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/abd-vro/2023-10-max-CFI-explorations%20/Images/Recruitment%20Checker%20for%20Equality%20-%20Max%20CFI%20Study.png)
