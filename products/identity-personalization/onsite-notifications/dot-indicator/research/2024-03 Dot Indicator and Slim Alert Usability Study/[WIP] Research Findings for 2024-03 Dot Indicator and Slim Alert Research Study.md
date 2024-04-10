

---

#  Research Findings for 2024-03 Dot Indicator and Slim Alert Research Findings

**Office of the CTO - Digital Experience (OCTO-DE), Authenticated Experience, My VA**

Date: 04/03/2024

[Matt Marino](matt.marino@adhocteam.us)

_Once you've presented your research readout to your team, if you have a deck, insert a link to it here_ [Research readout](link here)

**Jump to:**

- [Hypotheses and conclusions](#hypotheses-and-conclusions)
- [Key findings](#key-findings)
- [Recommendations](#recommendations)
- [Further research needed](#further-research-needed)
- [Who we talked to](#who-we-talked-to)


## Research Goals
My VA is now the first destination when a Veteran logs into VA.gov and it is critical that we present the most relevant updates as quickly and clearly as possible on the page. Accomplishing this through the use of indicators, if successful, would fulfill [OCTO priorities](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/strategy/OCTO-DE%20Priorities%202023.md) of solidifying the VA.gov platform and enhancing Veterans’ personalized online experiences.

### Veteran Journey
Since Veterans can apply for and manage their benefits any time after getting out of the military, this work impacts the [Veteran journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf) from Starting Up and beyond.


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

7. Several participants brought up friction between the experiences of the VA website and the VA mobile application (4 of 15 participants).


## Details of Findings 

_For each finding, list details with supporting quotes and images when possible. Please **add relevant keywords/labels to your findings** selected from the [research repository label list](https://github.com/department-of-veterans-affairs/va.gov-research-repository/labels?page=1&sort=name-asc). Adding keywords/labels to your findings will help others find research relevant to their work._


_To add images: ![text](link - add image to github folder and link here with .png)_


__Finding 1: The badge indicator was the preferred method of communicating healthcare updates on My VA, as opposed to dot indicators (9 of 15 participants, but only 11 actually assessed them).__

Labels: My VA - Dot indicator, My VA - Numbered badge indicator 

A strong preference for the numbered badge, which indicated the amount of items that need user attention, versus the dot indicator (a notification type that applies for 1+ items) was expressed by the majority of participants ((9 of 15 participants, but only 11 actually assessed them). 

> "Well [the badge is better], 'cause it actually tells me how many that I have unread because if I'm using just a red dot system, I may think there's only one...and I'll go to the first one and then I'll think that's it and then I'll get out. But if I know there's two, I'm looking for another one." (P6)

> "That is a lot clearer...just looking at it, I got two things I need to action in, you know, the first two and then one for the VA medical records." (P4)

>  "...the number twos and that is more detailed on that, because other one's the red circle and it could be questionable. Hmm. You don't really know how much messages you have." (P18)


<br>

**Finding 2: Veterans want more proactive communication about what impacts them personally - healthcare, claims, benefits, and events (12 of 15 participants).**

Labels: My VA, Claim status

Participants indicated the desire for earlier and more substantive communication from the VA about what matters to them, with claim status being a recurring topic mentioned by Veterans. Frustration over a lack of updates was expressed as well.


> "I don't think I get a text message saying it's been shipped - that would be good. Like a text message to my phone from the pharmacy.", referred to MyChart's healthcare notifications. (P7)

> "It's frustrating when weeks have gone by and we get a letter in the mail and it says "we're still working on your claim" and it's like uh, ok, what [is happening]... is there a hold up somewhere?", also referenced MyChart's notifications positively. (P8)

<br>

**Finding 3: The majority of participants cited the next appointment card in the Health Care section of My VA as the first thing that stands out to them, not the dot indicator nor the badge indicator (8 of 15 participants, of 11 actually assessing them).**

Labels: My VA - Dot indicator, My VA - Numbered badge indicator, Claim status

Participants were asked to indicate what stood out to them first in the Health Care section on the initial My VA prototype they viewed. Eight of the eleven participants who went through the prototype responded that the Next Appointment card was the first thing they noticed, not the indicators being tested. This raises the question of whether the dot and the badge indicator do enough to call out action items for users.

> "When my next appointment is for my healthcare at my local VA clinic, that's what pops that first" (P7)

> "Just right away because it's boxed and tells me my next appointment and then, yeah, the boxing [sic] actually makes it stand out" (P6)

<br>

**4. The majority of participants correctly identified the meaning of "We need more information from you" as featured on claims card alerts in the research study (9 of 15 participants, but only 11 actually assessed them).**

Labels: Claim status, PRDT: Claim-status-tool, CLMSTS: Timeline

Participants were shown a prototype version of the My VA page that included a claim status card in Step 3 of the application process, with a slim alert inside of it indicating additional evidence is required from the Veteran ("An item needs your attention"). This card currently is live in the Claims Status Tool (CST), but not My VA. With this test, new slim alert content was tested - the hypothesis being this text, created by CAIA, would be more direct in letting users know 1) they need to take action, and 2) they will need to provide more details/documentation. The majority of participants not only understood action needs to be taken, but also expressed a general understanding of what might be required without any additional context provided.

>

> 

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
_[See an example](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/initiatives/2021-post-mvp-releases/research/research-findings.md#who-we-talked-to)_

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
* Male: x 
* Female: x
* Non-binary: 1 


LGBTQ+:
Unknown (not a recruitment criteria)


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
