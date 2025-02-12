# 2024-08 Sign-in Research Findings

**Office of the CTO - Digital Experience (OCTO-DE), Sign-in Transition, Identity Experience Team**

- Researchers
  - Megan Driscoll | megan@bluetiger.digital
  - Charlye Tran | charlye@bluetiger.digital
  - Clayton Zook | clayton.zook@oddball.io

Jump to:
- [Hypotheses](#hypotheses)
- [Key findings](#key-findings)
- [Recommendations](#recommendations)
- [Who we talked to](#who-we-talked-to)
 
## Research materials
- [Research Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Research/2024-08%20Sign%20in%20transition/2024-08%20Sign%20in%20transition%20research%20plan.md)
- [Conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Research/2024-08%20Sign%20in%20transition/2024-08%20Sign%20in%20transition%20conversation%20guide.md)
- [Prototype](https://www.figma.com/proto/skWgD0gHYGlKSoLdH097OX/USiP-and-sign-in-modal---deemphasize-DSL%2FMHV?node-id=65-42645&t=pCsS806Lgd3tIEHz-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=65%3A42645&show-proto-sidebar=1)

  
## OCTO Identity Crew Objectives
- Objective 1: Create a smooth transition for Veterans from legacy to modern sign-in credentials
  - KR1: The number of users who have a MHV credential and neither ID.me or Login.gov is reduced to less than 500K by Oct 31, 2024 and to less than 100K by Jan 31, 2025
      - Baseline: 1.1M users in January 2024; 900K users in July 2024.
   - KR2: Sign-ins to VA web/mobile properties with the MHC credential are reduced to less than 1M per month by Oct 31, 2024 and to less than 200K per month by Jan 31, 2025
      - Baseline: 1.53M July '24 logins to VA.gov and the VA mobile app.
KR3: Retire the MHV in the targeted timeframe (last day available is January 31,
- Objective 2 Improve the Veteran sign-in experience. 
   - Retiring the MHV credential is only one of the improvements we intend to make to the sign in experience in the coming months. Changes in these metrics will likely capture work related to and separate from the transition.
   - KR1: Improve CSAT score from roughly 1.7 in FY24 rating to date to at least 2.2 by the end of Q2 FY2025 (March 2025).
   - KR2: [In progress: determining a KR for how we've impacted contact center support calls]

## Veteran Journey
Securely accessing VA online services can happen at any stage in the Veteran journey. The updated Sign-in page and modal will apply to everyone who signs into VA online and uses the authenticated experience.

## Research Goals
- Test newly created sign in or create an account modal with updated language to inform veterans of upcoming changes to CSPs
- Test preliminary interstitial content that provides more in-depth information about the MHV deprecation as part of the communications strategy 
- Test the usability of a prototype for the sign in page and/or sign in modal
- Explore veterans thinking around certain terms and phrases relating to sign in and credential migration
messaging

## Outcome
Uncover areas for improvement with our design and content by allowing veterans to interact with our prototype. This will allow us to update the UI and content in a way that better encourages veterans to stop using a deprecated credential and to instead use a modern credential. We expect to find both immediate next steps and to uncover insights for future work.

## Research questions
- Is our messaging clear enough to encourage veterans to make the transition and begin using the other CSPs? 
- Do folks understand the content around credential deprecation and whether that applies to them and what does that mean going forward?
- Do veterans understand the differences between MHV as a credential versus a site?
- Do veterans still sign in with a deprecated credential if they choose to do so and bypass our attempt to steer them to Login.gov or ID.me?
- Do veterans understand the language updates we plan to use to describe the benefits of a modern credential? 
- What are veterans’ sentiments around the deprecation?
- When would a veteran actually transition to Login.gov/ID.me?
- Are there any other gotchas or pain points that come up?


## Hypotheses
- H1: Based on the content updates, veterans will understand that MHV as a credential will be going away soon.  -  **True**
- H2: Veterans will be confused as to what will happen with the MHV site.  -  **Mostly True**
- H3: Veterans will continue to use their MHV credential when they sign into VA.gov.  - **True**
- H4: MHV credential users will not create a new modern credential if they are visiting VA.gov to complete a specific task.  -  **True**
- H5: Veterans will wait until the last minute to transition to Login.gov/ID.me.  -  **True**
- H6: Veterans will feel ambivalent about the messaging around credentials deprecation.  -  **True**


## Methodology
Remote usability testing will evaluate the prototype with participants. We’ll use Perigean’s Zoom account for these remote sessions


## Key Findings 
### General:
Labels: `AUD: Veterans`, `HDW: Desktop`, `HDW: Laptop`, `HDW: Smartphone`, `INTIVE: CX Executive Order`, `PRDT: Login`, `PRDT: VA.gov Profile`, `PRDT: Single-Sign-On (SSO)`, `RESRCH: Evaluative`, `RESRCH: Interviews`, `RESRCH: Remote`, `RESRCH: Usability`, `login.gov-adoption`
1. Most participants we spoke to were already prepared for the change.
2. Our existing content and messaging is working. 
3. New content is clear but participants only scanned headings and CTA buttons, skipping over help links and microcopy.
4. Most will wait until the last minute to adopt the new sign in option. 
5. Most experienced technical issues setting up their modern account with Login.gov or ID. me.

### Sign in page design:
Labels: `AUD: Veterans`, `HDW: Desktop`, `HDW: Laptop`, `HDW: Smartphone`, `INTIVE: CX Executive Order`, `PRDT: Login`, `PRDT: VA.gov Profile`, `PRDT: Single-Sign-On (SSO)`, `RESRCH: Evaluative`, `RESRCH: Interviews`, `RESRCH: Remote`, `RESRCH: Usability`, `login.gov-adoption`
1. Looked like what participants were already used to.
2. Some (3/10) said they would sign in with their modern account because the CTA was prioritized at the top of the page.
3. Most (7/10) would continue to select the My HealtheVet sign in option with reasons like: it’s faster (fewer clicks), it’s familiar, their password is saved on their browser or device, or their priority is completing their task quickly.

### Interstitial page deisgn:
Labels: `AUD: Veterans`, `HDW: Desktop`, `HDW: Laptop`, `HDW: Smartphone`, `INTIVE: CX Executive Order`, `PRDT: Login`, `PRDT: VA.gov Profile`, `PRDT: Single-Sign-On (SSO)`, `RESRCH: Evaluative`, `RESRCH: Interviews`, `RESRCH: Remote`, `RESRCH: Usability`, `login.gov-adoption`
1. Participants said the information was clear.
2. Repeating the deadline in the heading increased the sense of urgency.
3. On this page most (8/10) participants said they’d either sign in with their existing modern credentials or create a modern account.

### Sentiment:
Labels: `AUD: Veterans`, `HDW: Desktop`, `HDW: Laptop`, `HDW: Smartphone`, `INTIVE: CX Executive Order`, `PRDT: Login`, `PRDT: VA.gov Profile`, `PRDT: Single-Sign-On (SSO)`, `RESRCH: Evaluative`, `RESRCH: Interviews`, `RESRCH: Remote`, `RESRCH: Usability`, `login.gov-adoption`
1. Perception that setting up a new (modern) account will take too much time.
2. Discomfort with providing sensitive information to another website, such as SSN.
3. Frustration with scanning and uploading documents.
4. Liked the simplicity of fewer sign-in options and the ability to access everything in one place.
5. Some Veterans wanted more information to decide which modern account they should choose.
6. Veterans want easy access to support and expressed a preference for phone support or in-person support.
7. Veterans responded positively to learning about in-person signup days.
8. Veterans want reassurance that the new sign-in process will be easier for them.


#### Recommendations 

|   | Recommendation  |
|---|---|
| 1 | Implement new sign-in page and interstitial page for MHV users.  |
| 2 | Collect metrics on new sign-in page and interstitial page to get more reliable data on behavior.  |
| 3 | Audit user flows on desktop and mobile for account creation on Login.gov and ID.me.  |
| 4 | Collaborate with Login.gov and ID.me teams on content improvements in the product and documentation.  |
| 5 | Create (or update) service blueprints for MHV users transitioning to Login.gov and ID.me to identify gaps and opportunities to serve up specific help resources at the right time. |


### Who we talked to 

**Recruitment criteria**

See also our [Research Plan section on recruitment criteria]() 


We talked with  participants** out of 15 participants who were recruited

Gender:
* Male: 7
* Female: 3

LGBTQ+:
* Transgender:  0
* Nonbinary, gender fluid, gender queer, Two-Spirit (Indigenous only), or another gender beyond man or woman: 0
* Gay, lesbian, or bisexual: 0


Devices used during study: 
* Desktop or laptop: 6
* Tablet: 
* Smart phone: 4
* Assistive Technology: 1 (hearing aid)


Age:
* 25-34: 1
* 35-44: 0
* 45-54: 0
* 55-64+: 9
* Unknown: 0 


Education:
* High school degree or equivalent: 1
* Some college (no degree): 2
* Associate's degree, trade certificate or vocational training: 1
* Bachelor's degree: 4
* Master's degree: 2
* Doctorate degree: 
* Unknown: 

Race:
* White: 7
* Black: 
* Hispanic: 
* Biracial: 
* Asian: 
* Native: 1
* Unknown: 2

Disability and Assistive Technology (AT):
* Cognitive: 2
* Hearing aid: 1

## Underserved groups we haven’t talked to 

This research does not include the perspectives of the following marginalized Veteran groups:

* Identify as LGBTQ+.
* Identitfy as Black, Latino, Asian, or biracial
* Those using an assistive device for vision imparement
