---
title: "[Study] Research Findings"
product: "Product Name"
team: "Team Name"
office: "Office of the CTO - Digital Experience (OCTO-DE)"
date: "YYYY-MM-DD"
researchers:
  - "Researcher/Designer 1"
  - "Researcher/Designer 2"
research_goals:
  - "Goal 1"
  - "Goal 2"
methodology:
  - "Method 1"
  - "Method 2"
devices_used:
    desktop: X
    tablet: X
    smartphone: X
    assistive_technology: X
participants_total: X
demographics:
  veterans: X
  service_members: X
  caregivers: X
  dependents: X
  VA_staff: X
  age:
    "25-34": X
    "35-44": X
    "45-54": X
    "55-64": X
    "65+": X
    unknown: X
  education:
    high_school: X
    some_college: X
    associates: X
    bachelors: X
    masters: X
    doctorate: X
    unknown: X
  location:
    urban: X
    rural: X
    unknown: X
  race:
    white: X
    black: X
    hispanic: X
    biracial: X
    asian: X
    native: X
  disability:
    cognitive: X
    AT_beginner: X
    AT_advanced: X
    screen_reader_desktop: X
    screen_reader_mobile: X
    magnification_zoom: X
    speech_input: X
    hearing_aids: X
    sighted_keyboard: X
    captions: X
key_findings:
  - "Finding 1"
  - "Finding 2"
  # etc.
recommendations:
  - "Recommendation 1"
  - "Recommendation 2"
kpi_alignment:
  - "KPI 1"
  - "KPI 2"
outcomes:
  user: "Desired user outcome"
  business: "Desired business outcome"
opportunity_areas:
  - "Unmet need 1"
  - "Research gap 1"
further_research_needed:
  - "Area 1"
  - "Area 2"
underserved_groups_missing:
  - "Group 1"
  - "Group 2"
secondary_research:
  - "Web analytics"
  - "SME interviews"
synthesis_tools_used:
  - "Mural"
  - "Affinity Mapping"

---

# Email verification desk research findings

**Office of the CTO - Digital Experience (OCTO-DE), Email verification, Authenticated Experience Team**

**Date:** 09/15/2025

**Contacts:** Janelle Finnerty

**Research readout (PDF)**  
*Add a link to your research readout deck, if available.*

**Jump to:**
- [Key findings](#user-content-key-findings)
- [Recommendations](#user-content-recommendations)
- [Product user and business outcomes](#user-content-product-user-and-business-outcomes)
- [Next steps](#user-content-next-steps)
- [Further research needed](#user-content-further-research-needed)
- [Appendix](#user-content-appendix)


## Research goals
Identify and evaluate existing research on email verification to inform the new contact email address verification feature on VA.gov.

This research impacts all Veterans on VA.gov at any point of their journey.
[See the Veteran journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf)  

**Guiding questions:**  
- What are the best practices for how to message email verification to users?
- What are best practices for when and how to trigger email verification to users?
- What experiences currently exist within the VA ecosystem that we can pattern off of?
- Are there any industry standard UX patterns for email verification we can pattern off of?
- What are best practices for modals and when to use them?


## Methodology 

Desk research of existing VA research documentation.


## Key findings

1. When implementing policy changes, teams have found that users need **benefits and risks of opting in/out clearly and concisely provided.** In addition, VA Notify has researched and documented best practices for email content to help with any additional standards.

2. Identity recommends we **swap from email verification to email confirmation**. Which makes the experience seem easier to users, and matches existing VA standards.

3. Findings from VA.gov teams match USWDS standards and recommendations. In addition, it was a common theme that users are quick to dismiss modals without reading them. Due to this, **other migration strategies have focused on multiple touchpoints with users, such as email campaigns, alerts, interstitials, and modals.**

4. Confirming **email addresses is a common practice, especially during account set up.** When doing so, Veterans might swap between devices.


## Details of findings 

### Finding 1

When implementing policy changes, teams have found that users need **benefits and risks of opting in/out clearly and concisely provided.** In addition, VA Notify has researched and documented best practices for email content to help with any additional standards. Content standards include:

- If a policy change is required, a deadline with clear risks should be provided. If the policy is optional users need to know the clear benefits to convince them to make the change.

- Provide clear content and context in emails. More is better.

- Personalize the email content to increase confidence in the email’s authenticity.

- Do not require users to sign-in to find out details about an email.

- Make sure the email appears unique so it is not ignored.

- Provide a clear, concise, call to action.

  - [12/07/2023 Email Content Research Findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/479cc4a33514a922e71cd3b944ccdd703be289de/products/va-notify/research/Email%20Content%20Research%20Findings.md)

  - [05/31/2023 Proactive CSP migration research findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/94976c2516081519456125273fe2e39954778017/products/identity/Research/2023-04%20Proactive%20CSP%20Migration/2023-04%20Proactive%20CSP%20Migration%20research%20findings.md)

  - [04/12/2023 Deferred Identity Proofing Round 1: Usability - Research Findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/8f3127aa839f6a14936c3fb94ff5e207abc472bf/products/login.gov-adoption/research/2023-03-Deferred-Identity-Proofing-Round-1-Usability/research%20findings.md)


### Finding 2

Identity recommends we **swap from email verification to email confirmation**. Which makes the experience seem easier to users, and matches existing VA standards.

- The existing [ID.me](http://id.me) and [Login.gov](http://login.gov) experiences reference confirming the users email, rather than verifying the users email.

- Verification is often associated with a time-consuming and cumbersome process. When Veterans see the term they immediately think of the identity verification process enforced by the secure sign-in transition.

  - Figma files: [Existing ID.me and Login.gov designs](https://www.figma.com/design/kjhHcpanHjaEGPcT7Oe5uC/User-flows-for-modern-CSP-account-creation?node-id=0-1\&t=FlNGkr73TK8fhKYE-1)

  - Website documentation: [Confirm your ID.me email address](https://help.id.me/hc/en-us/articles/202673934-Confirm-your-ID-me-email-address)

  - Product documentation: [User flows for creating a new Login.gov and ID.me account on VA.gov and VA mobile app](https://github.com/department-of-veterans-affairs/va.gov-team/blob/c4bb620c917c48668d19247dd313f919f2a94ba3/products/identity/sign-in-transition/account-creation-user-flows-for-logingov-and-idme.md)

  - Slack Canvas: [Identity Team's view on the use of "verify"](https://dsva.slack.com/docs/T03FECE8V/F09F0KK6YQJ)


### Finding 3

Findings from VA.gov teams match USWDS standards and recommendations. In addition, it was a common theme that users are quick to dismiss modals without reading them. Due to this, **other migration strategies have focused on multiple touchpoints with users, such as email campaigns, alerts, interstitials, and modals.**

- **From USWDS:** Modals should appear as a result of an action made by the user, and should not surprise the user through automatically displaying. The exception being modals triggered due to consequences from user inactivity, or information that is required to be displayed (such as accepting cookies).

- **From USWDS:** If modals are being used as a “gate” to prevent users from moving forward without acknowledging or answering specific questions, they should not be able to close the modal without making a selection. The “close” button should be disabled on these modals.

   * [U.S. Web Design System (USWDS) | Modals](https://designsystem.digital.gov/components/modal/)

   * [08/2023 \[2023-04-Household Information Section Usability\] Research Findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/research/2023-04-Household%20information%20section%20usability/research-findings.md#hypotheses-and-conclusions)

   * [05/31/2023 Proactive CSP migration research findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/94976c2516081519456125273fe2e39954778017/products/identity/Research/2023-04%20Proactive%20CSP%20Migration/2023-04%20Proactive%20CSP%20Migration%20research%20findings.md)

   * [04/12/2023 Deferred Identity Proofing Round 1: Usability - Research Findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/8f3127aa839f6a14936c3fb94ff5e207abc472bf/products/login.gov-adoption/research/2023-03-Deferred-Identity-Proofing-Round-1-Usability/research%20findings.md)

   * [10/17/2022 Profile Editing Research Findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/353919145808779aaed1a3d7c7a5b827c5778db1/products/identity-personalization/profile/Research/2022-09-profile-editing-evaluation/findings-summary.md#profile-editing-research-findings)

   * [9/29/22 Profile Editing Research - Topline Summary](https://github.com/department-of-veterans-affairs/va.gov-team/blob/353919145808779aaed1a3d7c7a5b827c5778db1/products/identity-personalization/profile/Research/2022-09-profile-editing-evaluation/topline-summary.md)

   * [July 30, 2020 Disability Compensation Notifications Research Report](https://github.com/department-of-veterans-affairs/va.gov-team/blob/479cc4a33514a922e71cd3b944ccdd703be289de/products/va-notify/research/notifications-research-report.md#disability-compensation-notifications-research-report)


### Finding 4

Confirming **email addresses is a common practice, especially during account set up.** When doing so, Veterans might swap between devices.

- For example, it would be common for a Veteran to set up an account from their desktop or laptop, but confirm their email address on their phone.

   * [04/12/2023 Deferred Identity Proofing Round 1: Usability - Research Findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/8f3127aa839f6a14936c3fb94ff5e207abc472bf/products/login.gov-adoption/research/2023-03-Deferred-Identity-Proofing-Round-1-Usability/research%20findings.md)

---

## Additional Insights
*Include insights that do not represent patterns but are still valuable.*  
> **TIP:** These could be powerful user comments or unexpected issues worth noting


## Recommendations

*Summarize actionable recommendations based on findings.*  

1. **Recommendation:** [Insert action]  
   - _Supporting evidence: [Insert data]_  
2. **Recommendation:** [Insert action]  
   - _Supporting evidence: [Insert data]_

## Product User and Business Outcomes

*Explain how findings and recommendations align with the product's goals.*

> [!NOTE] 
> Refer back to your Product Outline. 

### Desired User Outcome 
This research supports our desired user outcome by....
 
### Desired Business Outcome
This research supports our desired business outcome by....


## Key Performance Indicators

*Explain how findings will support KPI measurement.*  

> [!NOTE]
> Refer back to your Product Outline. 

### KPI 1
This research supports measurement of this KPI by....


## Next Steps

*Outline immediate actions based on findings, including owners if applicable.*  


## Further research needed

*Identify gaps in the current study and areas requiring additional investigation––such as demographics that were not included in this study.* 


## Appendix

### Research documents
- [Product Outline](link here)
- [Research plan](link here)
- [Conversation guide](link here)
- [Interview transcripts](link here)

### Tools used for Synthesis

*List tools or techniques used, e.g., Mural, affinity mapping.*  
  
### Pages and applications used

*Link to prototypes or pages tested during the study.*  


### Other supporting documents created

*Include links to additional materials, e.g., personas, user flows.*  


### Secondary research

*Include any relevant secondary research, e.g., web analytics, SME interviews.*  

### Research participants 
_Complete the demographic info below using information from the Perigean recruitment survey. For those items where you didn't have participants, please mark with "0". You can use "unknown" if you aren't sure if your participants had a characteristic._ 

[Example Research participants](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/digital-experience/ADE/research/2025-05-save-in-progress/research-report.md#research-participants)

#### Recruitment criteria

_If you had specific criteria that you recruited for, use this space to explain what those were along with other information you feel would be important to understanding your participants._

#### Demographics 

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


#### Underserved groups we haven’t talked to 

_[Complete the VA recruitment checker for marginalized Veteran groups](https://docs.google.com/spreadsheets/d/1pq7TSHZonfpzAQBJj6B2geGHlNUwZEs4DzEvxcRgu0o/edit#gid=1221033726)_

This research does not include the perspectives of the following marginalized Veteran groups:
_List all groups in red from the spreadsheet_
* Group 1
* Group 2
* Group 3

_[insert screenshot of completed recruitment checker]_

![Table of underserved groups of Veterans showing how many of each were in this study as compared to target numbers. Data available in the table below this image](link - add image to github folder and link here with .png)

#### A more accessible version of the table in the above image
   
_[In the Markdown table below, fill in your study name and all "--" placeholders for numbers and percentages of participants from your screenshot of the completed recruitment checker.]_


### Recruitment of underserved groups in [Study name]

**Final # of participants:** --  
**# of AT users:** --  
**# of no shows:** --

#### General

| Category | % | Target | Study | p1 | p2 | p3 | p4 | p5 | p6 | p7 | p8 | p9 | p10 | p11 | p12 |
|----------|---|---------|-------|---|---|---|---|---|---|---|---|----|----|----|----|
| Age 55-64+ | --% | -- | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Cognitive Disability | --% | -- | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Mobile user | --% | -- | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Rural | --% | -- | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| No degree | --% | -- | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Other than honorable | --% | -- | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Immigrant origin | --% | -- | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Women | --% | -- | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Expat (living abroad) | --% | -- | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |

#### Race

| Category | % | Target | Study | p1 | p2 | p3 | p4 | p5 | p6 | p7 | p8 | p9 | p10 | p11 | p12 |
|----------|---|---------|-------|---|---|---|---|---|---|---|---|----|----|----|----|
| Black or African American | --% | -- | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Hispanic, Latino, or Spanish origin | --% | -- | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Biracial | --% | -- | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Asian | --% | -- | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Native Hawaiian or other Pacific Islander | --% | -- | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| First Nations (Canada) | --% | -- | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Native, American Indian or Alaska Native | --% | -- | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |

#### LGBTQ+

| Category | % | Target | Study | p1 | p2 | p3 | p4 | p5 | p6 | p7 | p8 | p9 | p10 | p11 | p12 |
|----------|---|---------|-------|---|---|---|---|---|---|---|---|----|----|----|----|
| Gay, lesbian, or bisexual | --% | -- | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Transgender | --% | -- | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Nonbinary, gender fluid, gender queer, Two-Spirit | --% | -- | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |

#### Assistive Tech (AT)

| Category | % | Target | Study | p1 | p2 | p3 | p4 | p5 | p6 | p7 | p8 | p9 | p10 | p11 | p12 |
|----------|---|---------|-------|---|---|---|---|---|---|---|---|----|----|----|----|
| Beginner AT User | --% | -- | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Experienced AT User | --% | -- | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Desktop Screen Reader (SR) | --% | -- | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Mobile Screen Reader (SR) | --% | -- | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Magnification/Zoom | --% | -- | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Speech Input Tech (Siri, Dragon) | --% | -- | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Hearing Aids | --% | -- | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Sighted Keyboard | --% | -- | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Captions | --% | -- | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Switch Device | --% | -- | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Braille Reader | --% | -- | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
