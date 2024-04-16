

---

#  Research Findings for 2024-03 Dot Indicator and Slim Alert Usability Study

**Office of the CTO - Digital Experience (OCTO-DE), Authenticated Experience, My VA**

Date: 04/03/2024

[Matt Marino](matt.marino@adhocteam.us)

[Research readout](link here)

**Jump to:**

- [Hypotheses and conclusions](#hypotheses-and-conclusions)
- [Key findings](#key-findings)
- [Recommendations](#recommendations)
- [Further research needed](#further-research-needed)
- [Who we talked to](#who-we-talked-to)


## Research Goals
My VA is now the first destination when a Veteran logs into VA.gov and it is critical that we present the most relevant updates as quickly and clearly as possible on the page. Accomplishing this through the use of indicators, if successful, would fulfill [OCTO priorities](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/strategy/OCTO-DE%20Priorities%202023.md) of solidifying the VA.gov platform and enhancing Veterans’ personalized online experiences.

<b> 1. Determine the effectiveness of dot and badge indicators to draw attention to important updates and when it's appropriate to use each kind of indicator. </b>
 - Where on VA.gov do users expect to see these types of notifications?
 - What do users think a dot means in different use cases? What about a badge?
 - How do users expect a dot or a badge indicator to disappear?
 - Are there instances where a dot or a badge introduces confusion rather than being useful?

<b> 2. Test with assistive tech users and colorblind participants in order to determine the accessibility implications of the dot or badge indicator. </b>
 - What aria labels would give a screen reader user as close to the same experience as a sighted user? When should aria labels be surfaced in the order of the page?
 - How do screen reader users experience dot and badge indicators as notifications on other websites? What's an ideal experience and what's not ideal?
 - Does colorblindness prevent users from being able to see and interpret a red dot or badge indicator? What colors are most accessible for them to interpret notifications on other websites and apps?

<b> 3. Gain understanding of how slim alert banners embedded in claims cards are interpreted by users in order to assess how we might use/improve them for My VA </b>
-  How do Veterans with experience in filing claims understanding the messaging displayed? 
- What additional information might be valuable for Veterans to see on these banners and cards?

<b> 4. Document any other possible notification types or information that are important for Veterans which we could surface as personalized content for authenticated users.</b>

## Research Questions

As part of research, some questions varied from test to test due to accessibility considerations and technical difficulties, as well as responses from participants related to claims that prompted further inquiry. The main questions pursued as part of this study included:

* What elements stands out first to users on My VA? Are the indicators being tested (dots, badges) among them?
* Do colorblind participants have any trouble seeing the dot or badge indicators?
* How are the badges with numbers perceived?
* What do users expect to see when a dot or badge is next to a link related to their healthcare (the contexts of inbox, prescriptions, and lab results)?
* How do participants think dots or badges on My VA will go away? What actions do they believe will cause them to vanish?
* Is aria text sufficient to indicate to screen reader users the meaning of dots/badges?
 
* How are claim status cards for Step 3 (evidence requests) perceived by participants?
* Do participants have a general understanding of what the content of new slim alert on claim cards means? ("We need more information from you")
* Do users have difficulty reading the slim alert or seeing it in general?
* What do participants believe will make the slim alert disappear?

* What do participants believe would be useful to learn ahead of time before filing claims?

* What other things would participants like to be notified of by the VA, on the website or otherwise?

## Methodology 

Moderated remote user testing was performed using Zoom, with recruitment of participants through Perigean Technologies. Testing took place March 11th, 2024 through April 1st. Fifteen Veterans participated in the study.

## Hypotheses and Conclusions

### Hypothesis

Past research for My VA tells us that users want to see timely personalized updates upon logging into VA.gov. They expect a mix of links and widgets to complete tasks on their homepage, and want clear labels to understand next steps. It is our hope that additions like indicators for unread, unseen, and important things will help to deliver this kind of personalized and streamlined experience that users expect when logging into VA.gov.

We hypothesize that:

- There will be a need for more than one type of indicator, i.e. both a badge with a count and a dot, as we've seen in other popular design systems, such as Material Design. (Conclusion: not enough information - a clear preference from users was shown for the badge indicator, but the content of the tests didn't expressly provide much insight into whether multiple indicator types that are similar are necessary)
- We expect that we may need to use a dark red color for the indicator to be useful for colorblind and low vision users, but that they will still be able to see and interpret the indicators. (Conclusion: Likely True - all colorblind tested users had no difficulty, but we only received feedback from 2 people)
- We expect that the aria labels we have implemented for dot and badge indicators will deliver as close to the same experience as possible for screen reader users as a sighted user would have. ("Not enough information" - we did not complete any successful screen reader tests, with one user who utilized a nonstandard tool not hearing the aria tags called out)
- We expect that there may be interesting findings for when screen reader users would like to be alerted to indicators. We think there may be a better way to announce indicators than waiting until a user navigates to the specific link where the indicator is. (Not enough information - not enough assistive tech users participated)
- We expect the new content of claim card slim alerts for evidence requests will will be effective in conveying that a claim requires Veteran attention/action to provide more documentation and details. (Conclusion: Likely True - the majority of participants not only understood action needs to be taken, but also expressed a general understanding of what might be required without any additional context provided)


## Key Findings

1. The badge indicator was the preferred method of communicating healthcare updates on My VA, as opposed to dot indicators (9 of 15 participants, but only 11 actually assessed them).

2. Veterans want more proactive communication about what impacts them personally - healthcare, claims, benefits, and events (12 of 15 participants). 

3. The majority of participants cited the next appointment card in the Health Care section of My VA as the first thing that stands out to them, not the dot indicator nor the badge indicator (8 of 15 participants, of 11 actually assessing them).

4. The majority of participants correctly identified the meaning of "We need more information from you" as featured on claims card alerts in the research study (9 of 15 participants, but only 11 actually assessed them).

5. The majority of participants expressed desire to know more key information before filing claims (11 of 15 participants). 

6. The majority of participants indicated they were interested in being informed of VA news, events, alerts, and info about related Veterans organizations (8 of 15 participants). This is a possible opportunity area for personalized content. 

## Details of Findings 

### Finding 1: The badge indicator was the preferred method of communicating healthcare updates on My VA, as opposed to dot indicators (9 of 15 participants, but only 11 actually assessed them).

Labels: My VA - Dot indicator, My VA - Numbered badge indicator 

A strong preference for the numbered badge, which indicated the amount of items that need user attention, versus the dot indicator (a notification type that applies for 1+ items) was expressed by the majority of participants ((9 of 15 participants, but only 11 actually assessed them). 

> "Well [the badge is better], 'cause it actually tells me how many that I have unread because if I'm using just a red dot system, I may think there's only one...and I'll go to the first one and then I'll think that's it and then I'll get out. But if I know there's two, I'm looking for another one." (P6)

> "That is a lot clearer...just looking at it, I got two things I need to action in, you know, the first two and then one for the VA medical records." (P4)

>  "...the number twos and that is more detailed on that, because other one's the red circle and it could be questionable. Hmm. You don't really know how much messages you have." (P18)

<br>

### Finding 2: Veterans want more proactive communication about what impacts them personally - healthcare, claims, benefits, and events (12 of 15 participants).

Labels: My VA, Claim status

Participants indicated the desire for earlier and more substantive communication from the VA about what matters to them, with claim status being a recurring topic mentioned by Veterans. Frustration over a lack of updates was expressed as well.


> "I don't think I get a text message saying it's been shipped - that would be good. Like a text message to my phone from the pharmacy.", referred to MyChart's healthcare notifications. (P7)

> "It's frustrating when weeks have gone by and we get a letter in the mail and it says "we're still working on your claim" and it's like uh, ok, what [is happening]... is there a hold up somewhere?", also referenced MyChart's notifications positively. (P8)

<br>

### **Finding 3: The majority of participants cited the next appointment card in the Health Care section of My VA as the first thing that stands out to them, not the dot indicator nor the badge indicator (8 of 15 participants, of 11 actually assessing them).**

Labels: My VA - Dot indicator, My VA - Numbered badge indicator, Claim status

Participants were asked to indicate what stood out to them first in the Health Care section on the initial My VA prototype they viewed. Eight of the eleven participants who went through the prototype responded that the Next Appointment card was the first thing they noticed, not the indicators being tested. This raises the question of whether the dot and the badge indicator do enough to call out action items for users.

> "When my next appointment is for my healthcare at my local VA clinic, that's what pops that first" (P7)

> "Just right away because it's boxed and tells me my next appointment and then, yeah, the boxing [sic] actually makes it stand out" (P6)

<br>

### **4. The majority of participants correctly identified the meaning of "We need more information from you" as featured on claims card alerts in the research study (9 of 15 participants, but only 11 actually assessed them).**

Labels: Claim status, PRDT: Claim-status-tool, CLMSTS: Timeline

Participants were shown a prototype version of the My VA page that included a claim status card in Step 3 of the application process, with a slim alert inside of it indicating additional evidence is required from the Veteran ("An item needs your attention"). This card currently is live in the Claims Status Tool (CST), but not My VA. With this test, new slim alert content was tested - the hypothesis being this text, created by CAIA, would be more direct in letting users know 1) they need to take action, and 2) they will need to provide more details/documentation. The majority of participants not only understood action needs to be taken, but also expressed a general understanding of what might be required without any additional context provided.

> "You know, depending on what, you know, it would depend on what the claim was for. It would either have to have maybe a doctor, a doctor's report or a eyewitness to a, to an accident, you know, to what, what happened to you. You know, it depend on what the claim would was in for." (P22)

<br>

### **5. The majority of participants expressed desire to know more key information before filing claims (11 of 15 participants).**

Labels: Claim status, PRDT: Claim-status-tool, CLMSTS: Timeline

Most participants indicated the wish to know more information before they had filed claims in the past. Several topics were mentioned that were related: being provided examples of completed forms to look at for reference and directed to viewing them, getting estimates of time taken for claim processing steps, promoting honesty and full disclosure when filing claims, and simply being informed that they have the right and eligibility to apply. 

> "If they could have provided me some kind of sample of how you would complete the claim, that would've been very helpful." (P12)

> "Other than I didn't know I could file one...my first claim was for tinnitus and I didn't, you know, because I was on a diesel submarine and had three diesel train engines running, and my ears been ringing for years and years. And I ne I never knew that, you know, I could file a claim for it, you know. And then, then with my eyes and eye doc, I was talking with an eye doctor and telling the military history and everything and she said, did you file a claim? And I says, no, I didn't know I could, you know" (P22)

> "Well the big thing with vets is we never tell the whole story right away. I got really lucky because I had a physician that was, that was also a veteran. I had just got out, I served four years in Marine Corps, went on a combat deployment and I went to the appointment saying nothing was wrong, like nothing hurt. And she's like, that's literally impossible. Four years of active duty, physical military experience, she got deployed, there's no way nothing hurts, you're not, you know, Iron Man or whatever. So she kind of got it outta me but if I were to tell anybody any tips a hundred percent do not leave any information out. Tell everything that's wrong so when you go through the process you don't have to give more evidence because that's really what they're looking for." (P11)

<br>

### **6. The majority of participants indicated they were interested in being informed of VA news, events, alerts, and info about related Veterans organizations (8 of 15 participants). This is a possible opportunity area for personalized content.**

Labels: *none apply currently, need to create new ones*

Eight of the fifteen participants expressed interest in being updated about general VA news, alerts, and info about more specific news and Veterans organizations that may be relevant to them personally. 

> "Is there a way you could put a, I would say a bulletin board or information board...Is there a way you could pull it like a, when you're going to the site, some kind of bulletin dictate what happened, what coming up?" (P12)

<br>

## Additional Insights

Multiple Veterans complained about issues with their claims and coverage that were related to VA locations and systems not sharing information effectively.


## Recommendations

_Put together initial recommendations here based on your findings along with supporting evidence. Review with your team, then edit as needed._

* Recommendation: badge indicators should be considered as an option for a new notification type to use for health care messaging and updates, and in turn added to the VA Design System so it can be consumed by other teams for additional items that need user attention.
   * See Finding 1 for more details
  
* Recommendation 2: the slim alert for evidence requests on claim cards should be introduced to My VA, for the sake of better informing Veterans of when they need to act and provide more evidence/details, as well as consistency with the Claim Status Tool.
   * See Finding 4 for more details

## Next Steps

1. Determine with Authenticated Experience leadership how to address incorporation of badge indicators for health care notifications
2. Plan for the future implementation of the slim alert for claim cards


## Further research needed

Screen reader usability was not properly assessed, and further testing is ideal. In addition, more insight into how to best surface important notifications for Veterans beyond the badge indicator or claim status slim alerts - they are not at the forefront for users. 


## Appendix

[Research plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/onsite-notifications/dot-indicator/research/2024-03%20Dot%20Indicator%20and%20Slim%20Alert%20Usability%20Study/dot-indicator-research-plan.md)

[Conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/onsite-notifications/dot-indicator/research/2024-03%20Dot%20Indicator%20and%20Slim%20Alert%20Usability%20Study/dot-indicator-convo-guide.md)

[Screen reader guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/onsite-notifications/dot-indicator/research/2024-03%20Dot%20Indicator%20and%20Slim%20Alert%20Usability%20Study/dot-indicator-convo-guide-for-screen-readers.md)


## Tools used for Synthesis

[Mural board](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1709061562188/1dfb9cdf6dbb59004be7cfff6714b3c704d7fa37?sender=u32ca7987ad64375cb5bb9275)
EnjoyHQ

## Pages and applications used
Codepen:
- [Two dots](https://bit.ly/3TsleZe)
- [Badge indicator](https://bit.ly/4anyJ2j)
- [Slim Alert](https://bit.ly/4a6B7dk)
- [Badge indicator - AT Specific](https://bit.ly/3wMJtbU)

## Who we talked to 

**Recruitment criteria**

Originally we wanted 16 participants (with 12 minimum sessions completed) to be the goal. After difficulty with no shows, cancellations, and candidates that didn't meet all our desired criteria, we ended up with 22 participants as the recruitment goal. Ultimately we had 15 participant sessions. 

Time of service, branch, location type, education, age, gender, and sexual orientation were not considerations for recruitment due to much of the focus being on web usability. Recruitment of assistive technology users, as well as users with cognitive impairments and colorblindess, was a priority. The related recruitment goals were initially: 
- Screen reader: 3+
- Magnification/zoom and font resizing: 3+
- Cognitive impairment: 2
- Colorblind: 3


We talked to **15 participants.**

Audience segment:
* Veterans: 15 (with 1 family member actively participating in a call as well)


Gender:
* Male: 12
* Female: 2
* Non-binary: 1 


LGBTQ+:
Unknown (not a recruitment criteria)


Devices used during study: 
* Desktop: 8
* Tablet: 3
* Smart phone: 4 
* Assistive Technology: 14, with 0 secondary AT devices


Age:
* 25-34: 1
* 35-44: 1
* 45-54: 1
* 55-64: 5
* 65+: 7
* Unknown: 0


Education:
* High school degree or equivalent: 3
* Some college (no degree): 4
* Associate's degree, trade certificate or vocational training: 1
* Bachelor's degree: 5
* Master's degree: 2
* Doctorate degree: 0
* Unknown: 0


Geographic location:
* Urban: 8
* Rural: 7
* Unknown: 0


Race:
* White: 9
* Black: 3
* Hispanic: 2
* Biracial: 2
* Asian: 2
* Native: 0


Disability and Assistive Technology (AT):
* Cognitive: 0
* AT users: 14 (but not all used tech successfully)
* Desktop screen reader: 4
* Mobile screen reader: 2
* Magnification/Zoom: 9
* [Speech Input Technology](https://www.w3.org/WAI/perspective-videos/voice/) like Siri/Dragon Naturally Speaking: 0
* Hearing aids: UNK
* Sighted keyboard: UNK
* Captions: 0


## Underserved groups we haven’t talked to 

This research does not include the perspectives of the following marginalized Veteran groups:
* Immigrants (unknown number of participants)
* LGBTQ+ (unknown number of participants)
* Native (0 participants recruited)
* Cognitive disability (0 participants recruited)
* Other than honorable

Participant accessibility assessment (including callout of participants who were no shows and cancellations)

<img width="912" alt="a11y assessment 1" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/151555388/162a88e4-0b03-42b7-8a81-6d3154eccc06">
<img width="913" alt="a11y assessment 2" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/151555388/0d19fe91-b7c1-4bb6-9bcd-5358e1a36373">
