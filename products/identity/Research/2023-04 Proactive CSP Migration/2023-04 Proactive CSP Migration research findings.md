# WIP - Proactive CSP migration research findings
Office of the CTO - Digital Experience (OCTO-DE), Sign in, Identity Team
> **Date: MM/DD/YYYY**

Clayton Zook clayton.zook@oddball.io, Amanda Porter ajohnson@clarityinnovates.com, Charlye Tran charlye@bluetiger.digital

> **[Research readout](link here)**

**Jump to:**

[Hypotheses and conclusions](#hypotheses-and-conclusions)

[Key findings](#key-findings)

[Recommendations](#recommendations)

[Who we talked to](#who-we-talked-to)

[Further research needed](#further-research-needed)


## Research Goals
There are currently multiple ways to sign in to access VA services online. Some of these Credential Service Providers (CSPs) don't meet required security standards and having so many choices creates user frustration and confusion. We need to migrate Veterans from legacy credential service providers (especially DS Logon) to Login.gov or ID.me. During discovery research, the Login.gov Adoption (LGA) team defined different pathways for migration including organic adoption. This research looks further at a part of that pathway that we are calling proactive migration.
- Test the usability and success of a [mobile modal prototype](https://www.figma.com/proto/8vobVoSl1UqLnXsni3rcvO/Login.gov-Adoption%3A-Design-Flows?node-id=1375-5590&scaling=scale-down&page-id=944%3A3979) that encourages veterans to migrate to a login.gov before it’s mandatory
- Identify which terms are most understandable and resonate most when describing identity concepts like verified (ID prooded) account and authentication.
- Find out ways to encourage more veterans to migrate CSPs before sunsetting of legacy account


## Research Questions
- Is the modal useful in encouraging proactive adoption of a modern CSP?
- Would any changes make the modal more helpful or more encouraging?
- What word or phrase will best convey to veterans the concept of “ID proof” or “verified account”?
- How might we encourage more veterans to migrate their CSP now, on their own, and before sunsetting forces it?

## Methodology
We conducted an interview discussion segment to evaluate use of words and phrases to best convey account and sign in concepts to veterans. We paired this with remote usability testing to evaluate a modal prototype with participants who access VA online via mobile devices.

## Hypotheses and Conclusions

1. Veterans will have a term or phrase for identity concepts like “verified account” that we can use to better speak to the process.
   - **Partly True** - most participants understood identity concepts, but there wasn't clear coalescing around specific terms
2. Most veterans will not understand how CSPs are different from their account
   - **Mostly True** - Some participants understand Login.gov as credentialing or a way to sign in, but especially those unfamiliar with Login.gov mistakenly thought it was a new place to access their VA benefits and healthcare online.
3. Some veterans will be motivated to migrate from a legacy CSP with encouragement from the modal prototype
   - **Mostly False** - A few participants expressed openness to changing CSPs and an interest in learning more about this change. However, all wanted to keep their current CSP given the information in the modal, and some also expressed that 20 minutes would be too long of a commitment in the moment.
4. Most veterans will choose to ignore the modal their first time seeing it
   - **Definitely True** - most participants found that the modal was a nuisance because it interrupted their reason for accessing the VA online and their task at hand. Most wanted to get past the modal.
5. Older Veterans will be less likely to set up a Login.gov account from their mobile device as compared with a laptop or desktop computer
   - **True** - Many participants preferred to use a computer to update accounts or complete complex tasks, citing larger text, easier typing, and the ability to see different windows side-by-side
6. Most veterans will choose to continue to use their current (legacy) credential unless they have no other choice for logging in to access their benefits online.
   - **Mostly True** - Veterans are unlikely to switch to a new credential after using theirs for many years without issue. Many veterans don’t want to take the estimated 20 minutes to sign up for a modern CSP unless it’s required. Some veterans are also apprehensive about using a single sign on for multiple gov accounts since some have experienced issues causing them to lose access for several days or longer.

> "I'll roll with the punches as they come" - Participant 9

## Key Findings

1. Modals are disruptive and annoying, and veterans don't want to be interrupted by a modal in the middle of a task, especially for something that’s not required.
2. Participants want to be told or sold to change CSP, but the modal copy is only suggestive and also not persuasive enough, leaving confusion about why.
3. In considering migrating to Login.gov or ID.me, some veterans like options, but many just want to be told what to do.
4. Some participants have a Login.gov or ID.me but still choose to use My HealtheVet (MHV) as their CSP.
5. Veterans unfamiliar with Login.gov thought it was either a VA service and/or understood it as a place to go as opposed to a way to sign in.
6. Veterans want to keep their personal information secure but also want their information to easily port to other VA services.
7. Participants largely understand MFA, although several found SMS to be a hassle and a couple participants expressed extreme dislike of or anxiety around SMS MFA.
8. Some verbiage, terms, and phrasings caused confusion around identity, but this doesn’t have to be a hurdle for or affect credential migration.



## Details of Findings 

**1. Modals are disruptive and annoying, and veterans don't want to be interrupted by a modal in the middle of a task, especially for something that’s not required.**

Labels: `AUD: Veterans`, `DSC: Modal`, `HDW: Smartphone`, `INTIVE: CX Executive Order`, `PRDT: Login.gov`, `PRDT: Login`, `RESRCH: Evaluative`, `RESRCH: Interviews` 

- Related to Hypothesis 4
- Builds on [Deferred Identity Proofing research - Key Finding 2](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/login.gov-adoption/research/2023-03-Deferred-Identity-Proofing-Round-1-Usability/research%20findings.md#key-findings)
- See also modal use references: [NN/G](https://www.nngroup.com/articles/modal-nonmodal-dialog/) and [VA.gov Design System](https://design.va.gov/components/modal#examples)

This finding confirms UX best practice and VA design system standards to carefully consider modal use. Most participants found the modal, immediately after signing, in to be disruptive and interrupted the task at hand. Most wanted to get past it immediately. Even when we prompted some participants to read further, some stated that they would still just close the modal and move on with their task or reason for signing in. However, participants did report that they would be more open to other channels of communication, like email, and would expect to hear important new through multiple channels of communication.

> _"The close button is at the top right of that page. That's where I'm going" - Participant 7_

> _“For me to go on a site where I'm trying to take care of my business and have a popup, it's like yeah, no. Click, close" - Participant 15_


**2. Veterans want to be told or sold to change CSP, but the modal copy is only suggestive and also not persuasive enough, leaving confusion about why.**

Labels: `AUD: Veterans`, `HDW: Smartphone`, `INTIVE: CX Executive Order`, `PRDT: Content`, `PRDT: Login.gov`, `PRDT: Login`, `RESRCH: Evaluative`, `RESRCH: Interviews` 

- Related to Hypotheses 3 and 6
- Builds on Deferred Identity Proofing research - Key Findings 1 and 2 and on Login.gov Adoption Discovery Key Finding 1

Participants wanted to be sold or told on why they should create a verified account through Login.gov. The veterans we spoke with had two conditions for moving - either forcing them or giving them added benefits that they are truly interested in. We call this “tell me or sell me.”
The “tell me” group were comfortable with their current sign in flow and would move only if they were forced, like with a deadline. Folks saw the language in this modal as suggestive and not imperative, so weren’t prompted to make a change. 
The “sell me” group were interested in the benefits of a modern CSP and read between the lines that this means they’ll be forced to make a change in the future. Still they weren’t convinced with the call to action in this modal. Some didn’t fully understand the benefits of migrating or were unclear about the content and wanted to be better sold on it.

> _"It should say that somewhere, that My HealtheVet login will be no longer active, and that's why you need to use the login.gov account."  - Participant 10_

> _"The key thing would be to try to convince someone to opt in. To achieve that, it's got to appear to be better" - Participant 8_

> _"My first question is 'why.' What I'm doing works fine now. Why change it?" - Participant 2_


**Finding 3**

Labels: label 1, label 2 

_List all labels that apply to this finding from the [research repository label list](https://github.com/department-of-veterans-affairs/va.gov-research-repository/labels?page=1&sort=name-asc)._

Brief description

> _Supporting data: Quote here_

> _Supporting data: Quote here_


## Additional Insights

_Any additional insights that aren't "key findings." These can be powerful comments from users that don’t represent a pattern in this study, but may be part of one outside this study._


## Recommendations

_Put together initial recommendations here based on your findings along with supporting evidence. Review with your team, then edit as needed._

1. Set a clear sunset date before expecting veterans to widely change CSP.
2. Develop a comprehensive proactive migration strategy that doesn’t rely on an interrupting modal.
3. Better educate veterans about MFA options other than SMS
4. Better label Login.gov as a partner, not part of VA
5. Update the approach used with some identity related terminology and verbiage usage
6. Allow veterans to reuse their information from VA as they sign up for Login.gov or ID.me
7. Work with MHV partners to help MHV users better understand the difference between MHV the CSP vs MHV as the place to go



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

This study recruited for mobile users, with a recent sign in to the VA online. We were particularly interseted in veterans who sign in using DSLogon or My HealtheVet login CSPs. For diversity and inclusion (based on gaps of two recent identity related studies) we requested veterans with cognitive disability, 
who are LGBTQ+, and who have immigrant origin. Unfortunately we didn't talk with anyone with immigrant origin, but recruitment surpassed our request with cognative disability and LGBTQ+ participants.

Note: while we didn't specify recruitment goals for age, it so happened that all of this studies participants are 55+

We talked to **14 participants.**

Audience segment:
* Veterans: 14 
* Caregivers: 0 
* Family members of a Veteran: 2


Gender:
* Male: 9
* Female: 4 


LGBTQ+:
* Transgender: 0 
* Nonbinary, gender fluid, gender queer, Two-Spirit (Indigenous only), or another gender beyond man or woman: 1
* Gay, lesbian, or bisexual: 3


Devices used during study: 
* Desktop: 0
* Tablet: 1
* Smart phone: 3 
* Assistive Technology: 0


Age:
* 25-34: 0
* 35-44: 0
* 45-54: 0
* 55-65: 7
* 65+: 7
* Unknown: 0


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
