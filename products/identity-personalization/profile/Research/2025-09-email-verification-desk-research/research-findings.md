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

## Additional insights

### Additional insight 1

If referencing the user's sign-in provider, some Veterans struggle to remember which credentials they use, which can cause confusion.

- [04/12/2023 Deferred Identity Proofing Round 1: Usability - Research Findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/8f3127aa839f6a14936c3fb94ff5e207abc472bf/products/login.gov-adoption/research/2023-03-Deferred-Identity-Proofing-Round-1-Usability/research%20findings.md)


## Recommendations

1. **Recommendation:** Include clear deadlines, risks, or benefits of email verification in the alerts and emails to provide users clear direction on what needs to happen and why.

   - Supporting evidence: Key finding 1

2. **Recommendation:** Swap from use of verification to confirmation to match identity standards.

   - Supporting evidence: Key finding 2

3. **Recommendation:** Only use modals to communicate email verification when it is a user triggered action, such as adding or updating their email address.

   - Supporting evidence: Key finding 3

4. **Recommendation:** Consider including a checkbox to confirm the user has read the modal prior to allowing them to close it.

   - Supporting evidence: Key finding 3

5. **Recommendation:** For initial launch, or annual renewal, consider use of emails, alerts, and interstitials to communicate the action.

   - Supporting evidence: Key finding 3

6. **Recommendation:** Ensure that the user can easily swap between devices to confirm their email address, and that there is no requirement to stay on a single device.

   - Supporting evidence: Key finding 4


## Product user and business outcomes

The objective of this initiative is to improve the accuracy and completeness of contact information within VA.gov user profiles by building a contact email verification process. The goal is to ensure that VA Profile/VA Notify/VA.gov Profile are able to support sending timely and critical communications from the VA to verified email addresses, leading to improved engagement and reduced errors in delivery.

[Initiative Brief - Email Verification](https://github.com/department-of-veterans-affairs/va.gov-team/blob/479cc4a33514a922e71cd3b944ccdd703be289de/products/identity-personalization/profile/contact-information/email-verification/initiative-brief.md)

### Desired user outcome 
This research supports our desired user outcome by ensuring the content and process are not frustrating or confusing for our users, and match VA standards.
 
### Desired business outcome
This research supports our desired business outcome by ensuring more users interact with the email verification process to reduce silent failures.


## Key Performance Indicators

- Objective 1: VA’s digital experiences are the easiest and most efficient way to access VA health care and benefits.

  - Key Result 3: 100% of transactions received via our digital experiences are either processed correctly or we have notified the user of an error.

- Objective 2: OCTO’s platforms are the fastest, most efficient, and most secure way to deliver products at VA.

  - Key Result 2: We have reduced the total error rates in our platforms by 50% compared to Q4 2024, towards a goal less than 1% per endpoint.


### KPI 1.3 and 2.2

This research supports measurement of these KPIs by ensuring that if an email is unable to be sent that users are notified in their profile. As well as increase accuracy of emails on file by prompting users regularly to update.



## Next steps

*Outline immediate actions based on findings, including owners if applicable.*  


## Further research needed

*Identify gaps in the current study and areas requiring additional investigation––such as demographics that were not included in this study.* 


## Appendix

### Research documents
- [Product outline](https://github.com/department-of-veterans-affairs/va.gov-team/tree/479cc4a33514a922e71cd3b944ccdd703be289de/products/identity-personalization/profile/contact-information/email-verification)

  - [Initiative Brief - Email Verification](https://github.com/department-of-veterans-affairs/va.gov-team/blob/479cc4a33514a922e71cd3b944ccdd703be289de/products/identity-personalization/profile/contact-information/email-verification/initiative-brief.md#L5-L13)

  - [Email Verification (mobile) Product Brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/479cc4a33514a922e71cd3b944ccdd703be289de/products/identity-personalization/profile/contact-information/email-verification/mobile/product-brief.md)

- Research plan: None

- Conversation guide: None

- Interview transcripts: None

### Tools used for synthesis

*List tools or techniques used, e.g., Mural, affinity mapping.*  
  
### Pages and applications used

_None_

### Other supporting documents

- Figma files: [Existing ID.me and Login.gov designs](https://www.figma.com/design/kjhHcpanHjaEGPcT7Oe5uC/User-flows-for-modern-CSP-account-creation?node-id=0-1\&t=FlNGkr73TK8fhKYE-1)

- Website documentation: [Confirm your ID.me email address](https://help.id.me/hc/en-us/articles/202673934-Confirm-your-ID-me-email-address)

- Product documentation: [User flows for creating a new Login.gov and ID.me account on VA.gov and VA mobile app](https://github.com/department-of-veterans-affairs/va.gov-team/blob/c4bb620c917c48668d19247dd313f919f2a94ba3/products/identity/sign-in-transition/account-creation-user-flows-for-logingov-and-idme.md)

- Slack Canvas: [Identity Team's view on the use of "verify"](https://dsva.slack.com/docs/T03FECE8V/F09F0KK6YQJ)

### Secondary research

- [U.S. Web Design System (USWDS) | Modals](https://designsystem.digital.gov/components/modal/)

- [12/07/2023 Email Content Research Findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/479cc4a33514a922e71cd3b944ccdd703be289de/products/va-notify/research/Email%20Content%20Research%20Findings.md)

- [08/2023 \[2023-04-Household Information Section Usability\] Research Findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/research/2023-04-Household%20information%20section%20usability/research-findings.md#hypotheses-and-conclusions)

- [05/31/2023 Proactive CSP migration research findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/94976c2516081519456125273fe2e39954778017/products/identity/Research/2023-04%20Proactive%20CSP%20Migration/2023-04%20Proactive%20CSP%20Migration%20research%20findings.md)

- [04/12/2023 Deferred Identity Proofing Round 1: Usability - Research Findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/8f3127aa839f6a14936c3fb94ff5e207abc472bf/products/login.gov-adoption/research/2023-03-Deferred-Identity-Proofing-Round-1-Usability/research%20findings.md)

- [10/17/2022 Profile Editing Research Findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/353919145808779aaed1a3d7c7a5b827c5778db1/products/identity-personalization/profile/Research/2022-09-profile-editing-evaluation/findings-summary.md#profile-editing-research-findings)

- [9/29/22 Profile Editing Research - Topline Summary](https://github.com/department-of-veterans-affairs/va.gov-team/blob/353919145808779aaed1a3d7c7a5b827c5778db1/products/identity-personalization/profile/Research/2022-09-profile-editing-evaluation/topline-summary.md)

- [July 30, 2020 Disability Compensation Notifications Research Report](https://github.com/department-of-veterans-affairs/va.gov-team/blob/479cc4a33514a922e71cd3b944ccdd703be289de/products/va-notify/research/notifications-research-report.md#disability-compensation-notifications-research-report)


#### Not relevant, but shows in Co-pilot search

- [2024 Q4 quantitative data findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/479cc4a33514a922e71cd3b944ccdd703be289de/products/identity/Research/Ongoing%20-%20quantitative%20data/2024%20Q4%20quantitative%20data%20findings.md): Noting there is a finding here about an increase in confirmation email errors in relation to identity, but it’s due to MHV migration slowing down the system. This was almost a year ago.

[Conversation Guide for VA-MCT Logon Research, October 2019](https://github.com/department-of-veterans-affairs/va.gov-team/blob/479cc4a33514a922e71cd3b944ccdd703be289de/products/identity/login/ds-logon/research/user_session_notes/07_notes.md): Noting that confirmation emails are mentioned in this research, they’re in relation to 2FA, not confirming the email address.
