# Initiative Brief - Email Verification 

#### Overview

Veterans who use VA.gov create accounts using ID.me or Login.gov to verify their identity. However, the email address they use to create these accounts may differ from the contact email where they receive important communications from the VA. Currently, there is no verification process to ensure the provided contact email is valid or monitored by the user. This feature introduces a verification process for users' contact emails to ensure secure, reliable communication from VA.gov services.

Currently, emails are not confirmed, can be stale, and are relied upon heavily by us to communicate with users. We need to be able to communicate with our users in the event of a failure. Accounts with no email address in the VA.gov Profile make this more difficult.


## POCs
- **Slack channel**: [#accountexp-authexp](https://dsva.slack.com/channels/accountexp-authexp); [#va-profile](https://dsva.slack.com/channels/va-profile)
- [This is currently managed by the VA.gov authenticated experience team](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/README.md).

## Outcome Summary
The objective of this initiative is to improve the accuracy and completeness of contact information within VA.gov user profiles by building a contact email verification process. The goal is to ensure that VA Profile/VA Notify/VA.gov Profile are able to support sending timely and critical communications from the VA to verified email addresses, leading to improved engagement and reduced errors in delivery.

**Related/Associated product(s)**
- [Contact Information](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/contact-information#readme)
  
## Problem
Some VA.gov users have outdated or incorrect contact email addresses, leading to missed communications regarding benefits, healthcare, and other services. This issue affects veterans who rely on VA services, as well as VA staff who depend on accurate contact information for outreach.

- Users may provide incorrect, inactive, or outdated contact emails.
- Veterans are not notified if the contact email they've entered is unreachable.
- There's no clear indicator to show if a contact email is verified or not.


### Key Challenges:

- The current profile setup does not require email confirmation.
- Inaccurate or outdated emails contribute to missed notifications and delays in service completion

### Root Causes:
- Lack of mandatory email confirmation during profile setup.
- Users not being aware of the importance of maintaining updated contact details.
- Insufficient prompts and frictionless workflows encouraging updates. (IIR launched a product focused on new users onboarding to the VA. This will need to form part and parcel of that process and is something of an extension of what they launched)

## Alignment with OCTO-DE Goals:
- Enhances user engagement and trust by ensuring seamless communication.
- Supports VA’s mission of providing timely and accurate information to veterans.
- Strengthens VA.gov’s data integrity and service effectiveness.

---
## Measuring Success

### Key Performance Indicators (KPIs)

| KPI                                       | Baseline | Target | Data Source               |
|-------------------------------------------|----------|--------|---------------------------|
| Percentage of users with confirmed emails | X%       | Y%     | VA Profile                |
| Reduction in email bounce rate            | X%       | Y%     | GA? VA Profile, VA Notify |
| Increase in successful email deliveries   | X%       | Y%     | VA Notify                 |
| Improved user trust/satisfaction score    | X        | Y      | VA.gov feedback surveys   |


---

## Discovery
### Assumptions/Risks

- **Value Risks** (will people use it): 
  - Users may not see immediate value in confirming their email addresses.
  - Some users may abandon the process if it is too complex.
- **Usability Risks** (can people figure out how to use it):
  - We're forcing users to navigate to their email, some users w/cognitive impairments may not be able to complete the process end to end
- **[Technical] Feasibility Risks** (can we build it with available tech/data):
  - Ensuring a seamless verification flow without technical glitches (may need VA Notify and Identity team support)
  
- **Organizational Viability Risks/Constraints** (will there be a positive organizational impact):
  - Coordination with multiple VA departments for policy alignment.
  - Compliance with security and privacy regulations.

### What're you building

#### In Scope

- Implement a mandatory or strongly encouraged email confirmation step during profile updates.
- Introduce periodic prompts reminding users to verify their email addresses.
- Provide clearer messaging on why email confirmation is critical.
- Automate detection and alerts for invalid/bounced emails.

#### Out of Scope:
- Expanding verification to other contact details such as phone numbers (future consideration).

#### Go-to-market 
> *What marketing, outreach, or communications are necessary for this product to be successful? Which groups/orgs are necessary to make this happen?*

--- 

## Launch Planning
### Collaboration Cycle

- Kickoff ticket

### Timeline 
> *Describe any major milestones for this initiative including organizational, legislative, etc. constraints.*
TK
* [Link to Release Plan for this Initiative](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/release-plan-template.md)

#### Initiative Launch Dates
- *Target Launch Date*
  - tbd
- *Actual Launch Date* 
  - tbd

---

## Important Artifacts
- [Epic](https://github.com/department-of-veterans-affairs/va.gov-team/issues/104525)
  - [Experience Crew Product/Project Tracking Ticket](https://github.com/department-of-veterans-affairs/digital-experience-products/issues/1252)   
- [Mural for ideation](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1741604960245/d32c6003ed9134cebe4c30284a1e349177e035f7)
  
   
## Screenshots

### Before

### After

---

#### Communications

- Team Name: Authenticated Experience 
- GitHub Label(s): authenticated-experience, contact-information
- Slack channel: #accountexp-authexp
- Product POCs: Travis Cahill, Chante Lantos-Swett



