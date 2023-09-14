# 2023-08 Terms of use research findings - WIP

**Office of the CTO - Digital Experience (OCTO-DE), Terms of Use, Core Identity team**

Date: September 12, 2023

- Clayton Zook | clayton.zook@oddball.io
- Amanda Porter | ajohnson@clarityinnovates.com
- Charlye Tran | charlye@bluetiger.digital

[Research readout (to come)](link here)

Jump to:
- [Hypotheses and conclusions](#hypotheses-and-conclusions)
- [Key findings](#key-findings)
- [Recommendations](#recommendations)
- [Further research needed](#further-research-needed)
- [Who we talked to](#who-we-talked-to)

## Research Goals

## Research Questions

## Methodology 

## Hypotheses and Conclusions

## Key Findings

## Details of Findings 

## Recommendations
This section is specifically for our design and front end related changes. We have included Content CAIA Team, Office of General Council, and Platform Design System Team findings and recommendations in [Additional Insights and Recommendations](#additional-insights-and-recommendations)

1. Ensure the buttons to move past the terms of use are easy to find
   - Key Finding 2 - most folks want to move past terms of use as quickly as possible
2. Continue to utilize accordions and keep the full terms of use content collapsed in accordions by default
   - Key Finding 2 - we should make terms of use as easy as possible to move past
   - Key Finding 2 - folks who are interested in a section of the terms of use can easily open up that accordion to read more
   - Key Finding 6 - accordions use on this page resonates with folks
3. Ensure headings are clear 
   - Key Finding 6 - the top H1 heading and the first H2 heading seemed to overlap. While it isn’t final language, one of the H3 accordion headers was “Feedback” and folks weren’t sure what that referred to.
4. The PDF download doesn’t have to be prominent on the page, especially if the content can be easily found later on
   - Key Finding 6 - The PDF on the terms of use page was easy to find but not of interest
5. For future terms of use updates that require user input to accept, consider using a modal or another way to present instead of a full page with the standard VA header and navigation. For example a modal or a full page without standard site navigation are more standard presentations for terms of use.
   - Key Finding 6 - some folks thought the presentation of terms of use prototype was strange, and it may be because they are used to seeing other services display terms of use not on a standard site page
   - In addition, a modal could easily be used to stop people from navigating off page before they’ve accepted it
   - 2023-04 Proactive CSP Migration, Key Finding 1 - modals are disruptive, but in this case user input is required and compliance is compulsory before moving on, so this could warrant an interrupting modal
6. For future terms of use updates, we could consider adding a warning about signout before being signed out on selecting decline.
   - Key Finding 6 - if someone accidentally selects decline, they’d need to sign back in to accept the terms of use, which for some veterans, especially assistive technology users can take a significant amount of time.
   - It also came up that implementing a warning might be warning overkill, so it’s something we’d want to consider further and possibly also test further before implementing.


## Additional Insights and Recommendations

**Finding and recommendations related to the Platform design system team**

1. Screen magnification user felt the paragraph and heading level 3 text was too small even at 5 times zoom
   - Recommendation: Design system team and/or CAIA accessibility teams should test this more extensively with screen zoom users if this presents a new concern
2. Accordions played well for this use for terms of use
   - Recommendation: This design component has proven itself with broad understanding for this use, if there is interest to attach this research to that component


**Finding and recommendations related to the Office of General Council and CAIA Content team**
Finding with a legal focus:
1. Most folks probably won’t pay attention to the VA terms of use text, since they don’t normally read it, and generally move past quickly as possible
2. Many participants feel forced to accept terms of use, so they prefer it also includes some user protections
   - Recommendation: terms of use should have value to the user, things like data security and not selling data.
   - Recommendation: At the top bullet or otherwise highlight the value to the user. Consider including a section titled something like “protections for the user”
3. Terms of use might affect user trust in a positive way IF the user already has a positive view of VA AND they feel like the terms of use is fair and not predatory.
   - Recommendation: similar to ii. - make sure it protects the user as well, and make sure the VA is being reasonable on the protections it’s carving out for itself.
4. Our set of participants understood the negative consequences of not accepting a terms of use, and understood that reduced access would be one of those, whether on a private or government site
   - Recommendation: we should feel more comfortable about restricting access based on accepting the terms of use, however restricting access to the VA online can be seen as devastating to veterans, so also understand there will likely still be highly upset outliers who don’t want to accept and also don’t want to lose online access.
5. Should a user decline, they wouldn't want to be cut off immediately since they feel like their health data is theirs and access is important for their medical needs
   - Recommendation: allow some amount of time (like 24 hours) for the user to download important documents before being signed out by declining to the terms of use
6. On this and future terms of use updates, folks want to see just the changes, not the whole terms of use again since they have no frame of reference for what was changed if they see the whole thing. 
   - Recommendation: This terms of use update, since it’s seems like a major one, could find more folks actually skimming or reading if the most important items were bulleted at the top or perhaps highlighted in situ
   - Recommendation: Future terms of use updates, should bullet or otherwise summarize the changes front and center, with either a link to or then the entire text of the new terms of use next on page
      - A benefit here is more folks might be more likely to read more of it, if it’s super short with just a couple of changes.
7. Veterans want to be able to access terms of use on the site after accepting, but none of our participants were into downloading the PDF of it.
   - Recommendation: make sure terms of use can be found on site by either search or browse - don’t include accept/decline buttons
8. Some participants mentioned the desire to be able to approve certain parts of the terms of use in order to access only certain parts of the site
   - Recommendation: While it’s something that happens with online cookies, it’s not necessarily part of the mental model for terms of use at this point. Also since it would likely require more engineering time than we have with our current deadline, we don’t recommend moving forward with this.

Findings with a content focus:
1. Folks took to the accordions and seemed to like having the ability to read more about a topic where a header caught their eye (keeping in mind that most people will skim or skip entirely).
   a. Recommendation: leave accordions on page
2. The warning alert box for “what will happen if you decline” was found to be helpful
   a. Recommendation: Keep this feature on page
3. VA terms of use decline page was clear and met expectations (caveat - with folks who wouldn’t normally decline a terms of use)
   a. Recommendation: Keep the decline page short and easy to understand.
4. Buttons elicited no strong feelings, but both our current use of accept/decline as well as the option agree/disagree were well understood, and participants gravitated toward using one word on the negative answer button
   a. Recommendation: continue forward with the current accept/decline, or use agree/disagree as an alternative. Do not use yes/no since that lost context for some of our participants
5. The H1 and first H2 include "terms of use" and at least one participant found this confusing
   a. Recommendation: Consider if there is a way to reword one of those headers to increase the clarity between them
6. The PDF on the terms of use was easy to find, but not of interest
   a. Recommendation: The PDF download doesn’t have to be prominent on the page, especially if the terms of use can be easily found later on


## Further research needed

On future terms of use updates, we could consider and further research implementing the following options:
1. presenting terms of use content in a modal, on a page without the VA standard header and navigation, or some way other than a full standard templated page 
2. offering an additional warning on selecting “decline” before being signed out

   
## Appendix

- [Research plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/6e36ba79ed1a1af687a7ace47246e54bf8271e70/products/identity/Research/2023-07%20Terms%20of%20Use/2023-08%20Terms%20of%20Use%20research%20plan.md)
- [Conversation guide - sighted participants](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Research/2023-07%20Terms%20of%20Use/2023-08%20Terms%20of%20Use%20conversation%20guide.md)
- [Conversation guide - screen reader participants](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Research/2023-07%20Terms%20of%20Use/2023-08%20Terms%20of%20Use%20convo%20guide%20-%20screen%20reader.md)
- [Interview transcripts](https://app.mural.co/t/oddballinternal7486/m/oddballinternal7486/1690215396309/04dee4d029baa5e33c00b53d58be3540db30f4b5?sender=u6c46f747a0483ea836054483)
- [Research readout slide deck (to come](link here)


## Tools used for Synthesis

- [Mural Board](https://app.mural.co/t/oddballinternal7486/m/oddballinternal7486/1690215396309/04dee4d029baa5e33c00b53d58be3540db30f4b5?sender=u6c46f747a0483ea836054483)


## Pages and applications used

- [prototype](https://www.figma.com/file/Fhw9P7r6pyaCGXRmolruoQ/Terms-of-Use?type=design&mode=design&t=fIlIpt82ZqbV58GY-0)


## Secondary research

Include any secondary research you may have. 

E.g. web analytics, ForeSee data, SME interviews, competitive analysis, or other relevant research studies.


## Who we talked to 
_Complete the demographic info below using information from the Perigean recruitment survey. For those items where you didn't have participants, please mark with "0". You can use "unknown" if you aren't sure if your participants had a characteristic._ 
_[See an example](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/post-mvp-releases/research/research-findings.md#who-we-talked-to)_

**Recruitment criteria**

See also our [Research Plan section on recruitment criteria] (https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Research/2023-07%20Terms%20of%20Use/2023-08%20Terms%20of%20Use%20research%20plan.md#recruitment-criteria) 

We recruited 3 cohorts as follows:
- [Cohort 1: sighted desktop](https://github.com/department-of-veterans-affairs/va.gov-research-repository/issues/356)
   - 5 computer (desktop or laptop) users of VA.gov
   - 5 who will join the session on desktop or laptop
   - 1 cognitive disability
   - 1 who self-identifies race as other than white
- [Cohort 2: sighted mobile](https://github.com/department-of-veterans-affairs/va.gov-research-repository/issues/357)
   - 5 mobile users of VA.gov
   - 5 who will join the session on mobile
   - 1 cognitive disability
   - 1 who self-identifies race as other than white
- [Cohort 3: screen reader desktop](https://github.com/department-of-veterans-affairs/va.gov-research-repository/issues/358)
   - 3 screen reader participants
      - at least 1 who is less experienced using screen reader
      - at least 1 who is more experienced using screen reader 
   - 3 (all) joining session on desktop

We talked with **13 participants** out of 22 participants who were recruited

Audience segment:
* Veterans: 13 
* Caregivers: x 
* Family members of a Veteran: 4 (although this wasn't recruited for, and we didn't ask questions from this perspective)


Gender:
* Male: 9
* Female: 4 


LGBTQ+:
* Transgender: x 
* Nonbinary, gender fluid, gender queer, Two-Spirit (Indigenous only), or another gender beyond man or woman: x
* Gay, lesbian, or bisexual: 1


Devices used during study: 
* Desktop: 7
* Tablet: 1
* Smart phone: 5
* Assistive Technology: 1


Age:
* 25-34: 0
* 35-44: 5
* 45-54: 5
* 55-64: 1
* 65+: 2
* Unknown: x


Education:
* High school degree or equivalent: x
* Some college (no degree): 2
* Associate's degree, trade certificate or vocational training: 2
* Bachelor's degree: 3
* Master's degree: 6
* Doctorate degree: 0
* Unknown: 0
  

Geographic location:
* Urban: x
* Rural: x
* Unknown: 13


Race:
* White: 9
* Black: 3
* Hispanic: 1
* Biracial: 1
* Asian: 0
* Native: 0


Disability and Assistive Technology (AT):
* Cognitive: 5
* AT beginner: 0
* AT advanced user: 2 (only 1 used AT during the session)
* Desktop screen reader: 2 (none used during the sessions, one used magnification, the other used no AT during session)
* Mobile screen reader: 2 (none used during the session because prototype was not compatible)
* Magnification/Zoom: 1
* [Speech Input Technology](https://www.w3.org/WAI/perspective-videos/voice/) like Siri/Dragon Naturally Speaking: 1 (did not use during session
* Hearing aids: x
* Sighted keyboard: x
* Captions: x


## Underserved groups we haven’t talked to 

This research does not include the perspectives of the following marginalized Veteran groups:

* We didn't get a completed session with a user who used a screen reader during session.
* We didn't talk with anyone who identitfies as Asian or Native

_[insert screenshot of completed recruitment checker]_
![VA-recruitment-checker](link - add image to github folder and link here with .png)
