# 2023-04 Proactive CSP migration research findings
**Office of the CTO - Digital Experience (OCTO-DE), Sign in, Identity Team**
- Date: May 31, 2023
- [Research readout slide deck](https://github.com/department-of-veterans-affairs/va.gov-team/blob/e6795e2ecf0ddebf3b35e0d7add08031937db258/products/identity/Research/2023-04%20Proactive%20CSP%20Migration/Proactive%20Migration%20Research%20Readout.pdf)
- Researchers
   - Clayton Zook clayton.zook@oddball.io
   - Amanda Porter ajohnson@clarityinnovates.com
   - Charlye Tran charlye@bluetiger.digital

**Jump to:**

- [Hypotheses and conclusions](#hypotheses-and-conclusions)
- [Key findings](#key-findings)
- [Recommendations](#recommendations)
- [Who we talked to](#who-we-talked-to)
- [Further research needed](#further-research-needed)


## Research Goals
There are currently multiple ways to sign in to access VA services online. Some of these Credential Service Providers (CSPs) don't meet required security standards and having so many choices creates user frustration and confusion. We need to migrate Veterans from legacy credential service providers (especially DS Logon) to Login.gov or ID.me. 

During the discovery research, the Login.gov Adoption (LGA) team defined different pathways for migration including organic adoption. This research looks further at a part of that pathway that we are calling proactive migration.
- Test the usability and success of a [mobile modal prototype](https://www.figma.com/proto/8vobVoSl1UqLnXsni3rcvO/Login.gov-Adoption%3A-Design-Flows?node-id=1375-5590&scaling=scale-down&page-id=944%3A3979) that encourages veterans to migrate to Login.gov credentials before it’s mandatory
- Identify which terms are most understandable and resonate most when describing identity concepts like verified (ID proofed) account and authentication.
- Find out ways to encourage more veterans to migrate CSPs before sunsetting of legacy account.


## Research Questions
- Is the modal useful in encouraging proactive adoption of a modern CSP?
- Would any changes make the modal more helpful or more encouraging?
- What word or phrase will best convey to veterans the concept of “ID proof” or “verified account”?
- How might we encourage more veterans to migrate their CSP now, on their own, and before sunsetting forces them?

## Methodology
We conducted an interview discussion segment to evaluate use of words and phrases that best convey account and sign in concepts to veterans. We paired this with remote usability testing, to evaluate a modal prototype with participants who access VA online via mobile devices.

## Hypotheses and Conclusions

1. Veterans will have a term or phrase for identity concepts like “verified account” that we can use to better speak to the process.
   - **Partly True** - most participants understood identity concepts, but there wasn't clear coalescing around specific terms
2. Most veterans will not understand how CSPs are different from their account.
   - **Mostly True** - Some participants understand Login.gov as credentialing or a way to sign in, but especially those unfamiliar with Login.gov mistakenly thought it was a new place to access their VA benefits and healthcare online.
3. Some veterans will be motivated to migrate from a legacy CSP with encouragement from the modal prototype.
   - **Mostly False** - A few participants expressed openness to changing CSPs and an interest in learning more about this change. However, all wanted to keep their current CSP given the information in the modal, and some also expressed that 20 minutes would be too long of a commitment in the moment.
4. Most veterans will choose to ignore the modal their first time seeing it.
   - **Definitely True** - most participants found that the modal was a nuisance because it interrupted their reason for accessing the VA online and their task at hand. Most wanted to get past the modal.
5. Older Veterans will be less likely to set up a Login.gov account from their mobile device as compared with a laptop or desktop computer.
   - **True** - Many participants preferred to use a computer to update accounts or complete complex tasks, citing larger text, easier typing, and the ability to see different windows side-by-side.
6. Most veterans will choose to continue to use their current (legacy) credential unless they have no other choice for logging in to access their benefits online.
   - **Mostly True** - Veterans are unlikely to switch to a new credential after using theirs for many years without issue. Many veterans don’t want to take the estimated 20 minutes to sign up for a modern CSP unless it’s required. Some veterans are also apprehensive about using a single sign on for multiple gov accounts, since some have experienced issues causing them to lose access for several days or longer.

> "I'll roll with the punches as they come" - Participant 9

## Key Findings

1. Modals are disruptive and annoying, and veterans don't want to be interrupted by a modal in the middle of a task, especially for something that’s not required.
2. Participants want to be told or sold to change CSP, but the modal copy is only suggestive and not persuasive enough, leaving confusion about why they should change.
3. In considering migrating to Login.gov or ID.me, some veterans like options, but many just want to be told what to do.
4. Some participants have a Login.gov or ID.me account but still choose to use My HealtheVet (MHV) as their CSP.
5. Veterans unfamiliar with Login.gov thought it was either a VA service and/or understood it as a place to go, as opposed to a way to sign in.
6. Veterans want to keep their personal information secure but also want their information to easily port to other VA services.
7. Participants largely understand MFA, although several found SMS to be a hassle. A couple participants expressed extreme dislike of or anxiety around SMS MFA.
8. Some verbiage, terms, and phrasings caused confusion around identity, but this doesn’t have to be a hurdle for or affect credential migration.



## Details of Findings 

**1. Modals are disruptive and annoying, and veterans don't want to be interrupted by a modal in the middle of a task, especially for something that’s not required.**

Labels: `AUD: Veterans`, `DSC: Modal`, `HDW: Smartphone`, `INTIVE: CX Executive Order`, `PRDT: Login.gov`, `PRDT: Login`, `RESRCH: Evaluative`, `RESRCH: Interviews` 

- Related to Hypothesis 4
- Builds on [Deferred Identity Proofing research - Key Finding 2](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/login.gov-adoption/research/2023-03-Deferred-Identity-Proofing-Round-1-Usability/research%20findings.md#key-findings)
- See also modal use references: [NN/G](https://www.nngroup.com/articles/modal-nonmodal-dialog/) and [VA.gov Design System](https://design.va.gov/components/modal#examples)

This finding confirms UX best practice and VA design system standards to carefully consider modal use. Most participants found the modal, immediately after signing, in to be disruptive and interrupted the task at hand. Most wanted to get past it immediately. Even when we prompted some participants to read further, some stated that they would still just close the modal and move on with their task or reason for signing in. However, participants did report that they would be more open to other channels of communication, like email, and would expect to hear important news through multiple channels of communication.

> _"The close button is at the top right of that page. That's where I'm going" - Participant 7_

> _“For me to go on a site where I'm trying to take care of my business and have a popup, it's like yeah, no. Click, close" - Participant 15_


**2. Veterans want to be told or sold to change CSP, but the modal copy is only suggestive and also not persuasive enough, leaving confusion about why they should change.**

Labels: `AUD: Veterans`, `HDW: Smartphone`, `INTIVE: CX Executive Order`, `PRDT: Content`, `PRDT: Login.gov`, `PRDT: Login`, `RESRCH: Evaluative`, `RESRCH: Interviews` 

- Related to Hypotheses 3 and 6
- Builds on Deferred Identity Proofing research - Key Findings 1 and 2 and on Login.gov Adoption Discovery Key Finding 1

Participants wanted to be sold or told on why they should create a verified account through Login.gov. The veterans we spoke with had two conditions for moving - either forcing them or giving them added benefits that they are truly interested in. We call this “tell me or sell me.”

The “tell me” group were comfortable with their current sign in flow and would move only if they were forced, like with a deadline. Folks saw the language in this modal as suggestive and not imperative, so weren’t prompted to make a change.

The “sell me” group were interested in the benefits of a modern CSP. They read between the lines that this means they’ll be forced to make a change in the future. Still they weren’t convinced with the call to action in this modal. Some didn’t fully understand the benefits of migrating or were unclear about the content and wanted to be better sold on it.

> _"It should say that somewhere, that My HealtheVet login will be no longer active, and that's why you need to use the login.gov account."  - Participant 10_

> _"The key thing would be to try to convince someone to opt in. To achieve that, it's got to appear to be better" - Participant 8_

> _"My first question is 'why.' What I'm doing works fine now. Why change it?" - Participant 2_


**3. In considering migrating to either Login.gov or ID.me, some veterans like options, but again many just want to be told what to do.**

Labels: `AUD: Veterans`, `INTIVE: CX Executive Order`, `PRDT: Content`, `PRDT: Login.gov`, `PRDT: Login`, `RESRCH: Evaluative`, `RESRCH: Interviews` 

The modal we usability tested presented only the Login.gov option for migrating to a new credential account. Veterans were mostly comfortable with having a single option. Some were indifferent and some liked the idea of having choice. The ones who were comfortable with a single option also felt the most strongly about being overwhelmed by having options or exasperated at the VA for not just deciding on a clear path forward.

> _"I want one option to login" - Participant 9_

> _"[If presented with 2 options] I would think they don't know what they want us to do” - Participant 2_

**4. Some participants already have a Login.gov or ID.me but still choose to use My HealtheVet (MHV) as their CSP.**

Labels: `AUD: Veterans`, `INTIVE: CX Executive Order`, `PRDT: Content`, `PRDT: Login.gov`, `PRDT: Login`, `RESRCH: Interviews`
- Related to Hypotheses 2 and 6
- Builds on Deferred Identity Proofing research - Key Findings 7 and on Login.gov Adoption Discovery Key Finding 6

Some participants previously created or attempted to create a Login.gov or ID.me account. Sometimes with the intent to migrate or just to try it. Specifically with the use of ID.me many veterans create an account to get veteran discounts at certain websites. Even if they have a modern CSP, veterans still prefer to use their legacy credentials since they’ve used them for a long time and are more comfortable with it. Others aren’t interested in a long or cumbersome process to ID verify and remarked that 20 minutes is a long time when they’re trying to complete a different action with the VA, like sending a message to their healthcare provider.

> _“If it's going to be arduous for me to change to the new system, then I'm going to stick to the old system until you drag me kicking and screaming.” - Participant 7_


**5. Veterans unfamiliar with Login.gov thought it was either a VA service and/or understood it as a place to go as opposed to a way to sign in.**

Labels: `AUD: Veterans`, `INTIVE: CX Executive Order`, `PRDT: Content`, `PRDT: Login.gov`, `PRDT: Login`, `RESRCH: Evaluative`, `RESRCH: Interviews`

- Related to Hypothesis 2 

Veterans understood that they had options for signing into their account and some recognized Login.gov as one of those options. However, taken in the context of this modal, some participants, especially those unfamiliar with Login.gov, understood it as a new place where they could access their VA information. A mostly overlapping group of folks, but also including some familiar with Login.gov, understood it as a VA product.

> _“I'd have to learn the user interface on the new site, but I would hope that it would make things easier to use." - Participant 8_

> _"There would be some kind of an intermediate page, I think. Because they won't know where I'm going [social security or VA]” - Participant 5_

**6. Veterans want to keep their personal information secure but also want their information to easily port to other VA services.**

Labels: `AUD: Veterans`, `HDW: Smartphone`, `INTIVE: CX Executive Order`, `PRDT: Content`, `PRDT: Login.gov`, `PRDT: Login`, `RESRCH: Evaluative`, `RESRCH: Interviews` 

- Related to Hypotheses 5
- Builds on Login.gov Adoption Discovery Key Finding 4

Some veterans are cautious about sharing their information due to security concerns or being hacked or scammed in the past. They like to understand the validity of links or information inputs before using them. At the same time veterans also don’t want to reenter information about themselves if the VA already has it. This relates to the previous finding with confusion that Login.gov is a VA product and the VA already has all my information, but there is consequence in perceived ease of signing up for Login.gov

> _"I usually don't like putting my social security number out there, unless it's the last four" - Participant 3_

> _"Since I've logged in, take and auto fill almost everything except for 'hey send us your ID' " - Participant 6_

> _“You're asking me for some other stuff and I'm not sure I want to give it to you. You already have my SSN and my phone number... why do you need it again?” - Participant 7_

**7. Participants largely understand MFA, although several found SMS to be a hassle and a couple participants expressed extreme dislike of or anxiety around SMS MFA.**

Labels: `AUD: Veterans`, `HDW: Smartphone`, `INTIVE: CX Executive Order`, `PRDT: Content`, `PRDT: Login.gov`, `PRDT: Login`, `RESRCH: Evaluative`, `RESRCH: Interviews`
- Related to Hypotheses 5
- Builds on Login.gov Adoption Discovery Key Finding 5

All veterans we spoke with had a baseline understanding of the login process including MFA. While some participants are annoyed by MFA or get anxious by having a limited time to type in a code, others proactively set up MFA on important accounts in order to keep them secure. As other studies have shown, our participants overwhelmingly used SMS for MFA. A couple were also familiar with using an authenticator app.

> _“I love that process because it makes me feel more secure" but “it’s nerve racking because sometimes you forget if they are going to send it to your phone [or email]” - Participant 13_

> _"It's a bad process where it's 3 or 4 levels of authentication or verification" - Participant 14_



**8. Some verbiage, terms, and phrasings caused confusion around identity, but this doesn’t have to be a hurdle for or affect credential migration.**

Labels: `AUD: Veterans`, `HDW: Smartphone`, `INTIVE: CX Executive Order`, `PRDT: Content`, `PRDT: Login`, `RESRCH: Evaluative`, `RESRCH: Interviews`

- Related to Hypotheses 2 and 6
- Builds on Deferred Identity Proofing research - Key Findings 4 and 5

While participants have a baseline understanding of login and account creation processes, they didn’t understand the nuances between some terms. Still their understanding of these terms doesn’t seem to affect their ability or willingness to set up or verify their accounts. However, it can make it difficult for veterans to understand the limitations of an unverified account, as stated in the previous research.

Let’s look specifically at some terms used when creating or logging into an account or to encourage folks to migrate credentials
- Authenticate vs verify - most participants either felt there wasn't a substantial difference between these terms or couldn't verbalize the difference as the VA Identity team understands it
- Multi-Factor Authentication - Most participants understood the concept of MFA and could even recall the term or a near related term, even if they weren’t a fan of the process.
- Upgrade - Most participants viewed "upgrade" as an added benefit or that they would get something more. However several folks were confused by the modal's use of it or found it disingenuous, since the call to action is to move to a new sign in method not upgrading the currently used one.
- "VA online tools" caused confusion - most participants, even those who understood the VA’s meaning of it, got caught up in what that phrase might mean, derailing the CTA of this modal. When asked what term or phrase might work better, a few were offered, but many participants didn’t see a need to have a classifying term like this. They tended to more simply view the place or places they go to as how they access the VA online.

> _“Probably not a substantial difference [between authenticate and verify]… I could switch those words around very easily" - Participant 5_

> _"When you say 'the VA' it just encompasses everything" - Participant 1_


## Additional Insights
1. The modal "remind me later" option is overwhelmingly seen as performing an action
   a. From Midpoint Review feedback, this means this should be a button not a link
2. The VA app ecosystem causes confusion with this set of participants
   a. Unsure of which app to use, or feelings that it’s not as easy for them to use as going online via a browser.
3. Veterans who primarily interact with the VA online through the MHV site are less familiar with VA.gov and this might be where some of the confusion lies.
   a. The veterans we talked with, who were 55+ years old and connect with the VA primarily for health benefits using MHV, tended to visit VA.gov only when MHV redirected them there, or in order to research certain benefits without being signed in.
   b. One participant had recently filed for disability. They considered the application more of a one-and-done type of reason to go to VA.gov, where instead they access My HealtheVet to manage their healthcare multiple times a week.

> _“I go to [VA.gov] for research. I don't believe, I don't think I have ever logged into VA.gov” - Participant 6_

> _"The main thing is healthcare, the HealtheVet website. Second thing would be for travel reimbursement." - Participant 9_


## Recommendations

1. Set a clear sunset date before expecting veterans to widely change CSP.
2. Develop a comprehensive proactive migration strategy that doesn’t rely on an interrupting modal.
3. Better educate veterans about MFA options other than SMS
4. Better label Login.gov as a partner, not part of VA
5. Update the approach used with some identity related terminology and verbiage usage
6. Allow veterans to reuse their information from VA as they sign up for Login.gov or ID.me
7. Work with MHV partners to help MHV users better understand the difference between MHV the CSP vs MHV as the place to go

## Recommendations Detailed

**1. Set a clear sunset date before expecting veterans to widely change CSP.**
- Supported by Hypotheses 3 and 6 and Key Findings 4 and 6
- Builds on Deferred Identity Proofing Recommendation 2
- The direct impact of proactive migration work will likely be minimal. Most veterans prefer to keep their current way of signing in. Even those who are open to migrating are not likely to do so unless they are forced to, like with knowing a sunset date. The proactive migration strategy should be seen as a way to prepare veterans and begin to set their expectations, and not as a way to migrate a significant number of folks to a modern CSP.

**2. Develop a comprehensive proactive migration strategy that doesn’t rely on an interrupting modal.**
- Supported by Hypotheses 3, 4, and 6 and Key Findings 1, 2, and 3
- Builds on Deferred Identity Proofing Recommendation 2, 7, and 8 and Adoption Discovery Recommendation 1
- Most of the veterans we talked with viewed this modal as an inconvenience and an interruption to their task at hand. A modal is not a winning strategy for Proactive Migration. Consider using alternative communications channels like:
   - An interstitial page veterans see after selecting DS Login option, but before inputting their credentials or being signed in.
   - Information in a banner or other information sharing way that aligns with the VA design system.
- A comprehensive proactive migration communications strategy as part of a combined communications roadmap
- Research what migration incentives are most persuasive for veterans. A couple veterans we talked with were interested in the suggestion to change CSPs, but didn’t feel like there was enough benefit to them at this time.
   - This could help us develop more persuasive language 
- This communications strategy could include email, postal mail, blogs, social media, and physical signage at VA facilities. Communications should include the intersecting topic of Login.gov as a way to sign in and not place to go
- Target proactive migration communications to veterans who already have an ID.me or Login.gov account and offer them a clear call to action.
   - Direct those with ID.me IAL1 or no drivers license to ID.me
   - Direct others to Login.gov
   - Explore ways to segment veterans and automating communications on which option will be best for them
- Don’t blatantly prefer login.gov or ID.me externally or declare one as better since this can cause future issues. Instead direct veterans based on their situation like an existing account or what type of ID they have.
- Better educate veterans on the difference between how they access, or their sign in method, and where they go


**3. Better educate veterans about MFA options other than SMS**
- See Hypothesis 1 and Key Finding 8
- Builds on Adoption Discovery Recommendation 6
- Utilize FAQs and the overall identity communication strategy to educate folks who are apprehensive about using SMS as their MFA method. Some who don’t see SMS as secure enough or who get anxious around the short time to input the SMS-sent code could benefit from using another method and have a better overall sign in experience.


**4. Better label Login.gov as a partner, not part of VA**
- See Hypothesis 2 and Key Finding 3
- Builds on Deferred Identity Proofing Recommendation 4 
- Most veterans we spoke with who were unfamiliar with Login.gov assumed it was a service that was controlled or owned by the VA. Clearly designating this has potential to clear up multiple confusion points like where to go for sign in help and who has access to or is storing personal information.


**5. Update the approach used with some identity related terminology and verbiage usage**
- See Hypothesis 1 and Key Finding 2, 6, 7, and 8
- Builds on Deferred Identity Proofing Recommendation 3 
- Create guidance on a consistent, shared set of verbiage across all communication channels and across all Identity teams for both external and internal communications
   - This research will feed into the effort that Sitewide Content team with the VA content brief for sign in and identity verification
- Multi factor authentication - as long as this phrase is used in context, no change is needed based on this research. Veterans are largely familiar with this phrase specifically in relation to SMS Multi factor authentication.
- Verification - use clear context when communicating about this term. Many veterans interchange this term with the term authentication and see it either expressing a similar idea or don’t see it having the same definition as VA Identity teams. Still we don’t see this being a major hurdle to veterans migrating CSPs or ID proofing a modern CSP account they already have so long as communications use context clues. 
   - Examples “verify your account by proving your address” or ““verify your identity by submitting a photo ID” are better than “verify your account” or “ID proof”
- Upgrade - should not be used to describe migrating CSPs. Veterans see it as disingenuous in this context since the don’t see this as a clear upgrade. Other terms like “change” or “new” when referring to migrating accounts may work better.
- VA online tools - should not use this term in the context of identity communications or CSP migration when we’re already presenting new or difficult concepts. Even veterans who seem to understand the VA’s use of this phrasing got hung up on it. Most of the veterans we talked with did not have a clear understanding of the meaning or didn’t feel like this was the clearest most understandable phrase to use.
For internal communications Identity teams should also stick to settled-on terms to reduce internal confusion.


**6. Allow veterans to reuse their information from VA as they sign up for Login.gov or ID.me**
- See Hypotheses 2 and 6 and Key Finding 5
- The Core Identity Team had previously worked with Login.gov on a way to autofill veteran information as they sign up for a new account. At the time it was viewed as not a priority for resource allocation and so was shelved. We recommend picking this work back up and to clearly give veterans the option to use their information from the VA to autofill over on Login.gov to reduce the burden on signing up for an account.


**7. Work with MHV partners to help MHV users better understand the difference between MHV the CSP vs MHV as the place to go**
- See Hypothesis 2 and Key Findings 3 and 4
- This work will ultimately be up to our MHV partners, but among our suggestions is to look into reducing the sign in options from the 3 to just the one, the one they’ll see when MHV moves over to VA.gov. This can help prepare them for what to expect as we move forward. 


## Next Steps

Continue tickets that have come out of this research, including setting up additional research


## Further research needed

- Why veterans who have successfully set up either an ID.me or Login.gov account revert back to using MHV or DSLogin as their CSP
- How many veterans have multiple CSP and which one do they actively use
- What veteran segments make the most sense for automating communications about migration?
- What language will be more persuasive to each veteran segment?


## Appendix

[Research readout slide deck](https://github.com/department-of-veterans-affairs/va.gov-team/blob/e6795e2ecf0ddebf3b35e0d7add08031937db258/products/identity/Research/2023-04%20Proactive%20CSP%20Migration/Proactive%20Migration%20Research%20Readout.pdf)

[Research plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Research/2023-04%20Proactive%20CSP%20Migration/2023-04%20Proactive%20CSP%20Migration%20research%20plan.md)

[Conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Research/2023-04%20Proactive%20CSP%20Migration/2023-04%20Proactive%20CSP%20Migration%20conversation%20guide.md)

[Session notes](https://app.mural.co/t/oddballinternal7486/m/oddballinternal7486/1681396854554/ff9d23f8eef22907cccb8d45cf46f81f5686684d?sender=u6c46f747a0483ea836054483)

## Tools used for Synthesis

[Mural Board](https://app.mural.co/t/oddballinternal7486/m/oddballinternal7486/1681396854554/ff9d23f8eef22907cccb8d45cf46f81f5686684d?sender=u6c46f747a0483ea836054483)


## Pages and applications used

[prototype](https://www.figma.com/proto/8vobVoSl1UqLnXsni3rcvO/Login.gov-Adoption%3A-Design-Flows?node-id=1375-5590&scaling=scale-down&page-id=944%3A3979)



## Who we talked to 


**Recruitment criteria**

We recruited specifically for veterans who use DS Login or MHV credentials to sign in to the VA and who don’t use Login.gov or ID.me credentials to sign in to the VA.

Based on gaps in recent related Identity research we recruited for mobile users, cognitive disabilities, and LGBTQ+ veterans. While we didn't specify recruitment goals for age, it so happened that all of this studies participants are 55+

We talked to **14 participants** out of 15 recruited

Audience segment:
* Veterans: 14 
* Caregivers: 2 (we didn't speficially recruit for or discuss topic related to caregiving) 
* Family members of a Veteran: 2 (we didn't speficially recruit for or discuss topic related to family memebers of veterans)


Gender:
* Male: 9
* Female: 4 


LGBTQ+:
* Transgender: 0 
* Nonbinary, gender fluid, gender queer, Two-Spirit (Indigenous only), or another gender beyond man or woman: 1
* Gay, lesbian, or bisexual: 3


Devices used during study: 
* Desktop: 10
* Tablet: 1
* Smart phone: 3 
* Assistive Technology: 0


Age:
* 25-34: 0
* 35-44: 0
* 45-54: 0
* 55-65: 6
* 65+: 7
* Unknown: 1


Education:
* High school degree or equivalent: 1
* Some college (no degree): 5
* Associate's degree, trade certificate or vocational training: 2
* Bachelor's degree: 3
* Master's degree: 3
* Doctorate degree: 1
* Unknown: 0


Geographic location:
* Urban: 0
* Rural: 0
* Unknown: 14


Race:
* White: 11
* Black: 1
* Hispanic: 1
* Biracial: 0
* Asian: 0
* Native: 1


Disability and Assistive Technology (AT):
* Cognitive: 6
* AT beginner: 0
* AT advanced user: 0
* Desktop screen reader: 0
* Mobile screen reader: 0
* Magnification/Zoom: 1
* [Speech Input Technology](https://www.w3.org/WAI/perspective-videos/voice/) like Siri/Dragon Naturally Speaking: 0
* Hearing aids: 0
* Sighted keyboard: 0
* Captions: 0


## Underserved groups we haven’t talked to 

This research study does not include the perspectives of the following marginalized Veteran groups:
* Immigrant origin
* Black, biracial, or Asian
* Assistive tech users

When taken as a body of Identity work, the most recent three Identity research study's underrepresented the following marginalized Veteran groups:
- Immigrant origin
- Transgender
- Assistive tech users

_[insert screenshot of completed recruitment checker]_
![VA-recruitment-checker](link - add image to github folder and link here with .png)
