# MHV on VA.gov Initiative Brief - Notification email update prompts
## Overview
- **Product**: My HealtheVet on VA.gov
- **Initiative**: Notification email update prompts
- **Description**: We won't send VA healthcare-related notifications to emails associated with MHV classic accounts in the future. For MHV on VA.gov users to continue getting notifications, they need the correct email associated with the "contact email" in the VA.gov profile. If they do not have the correct email address as their "contact email," these users might miss important notifications about their medications, records, and messages.
- **Goal**: Display content VA.gov and VAHB prompting users to either confirm, edit, or add an email address to the "contact email" section of their VA.gov profile.
      
<details>
 *There is roughly a 1:many relationship between products and initiatives, or our attempts to improve a product/achieve Veteran outcomes. The same goes for product outlines and initiative briefs. This template can be used as product documentation for the Collaboration Cycle, especially when iterating an existing product. In addition, the Brief is an important communication tool within a team and between the team and Crew Chief/PO/other teams.* 
</details>

On this page: 
- [Outcome summary](#outcome-summary)
- [Problem](#problem)
- [Measuring success](#measuring-success)
- [Discovery](#discovery)
- [Launch planning](#launch-planning)
- [Screenshots](#screenshots)

## Outcome Summary
- Veterans will verify, change, or add the email address that they want to use for receiving notifications

**Related/Associated product(s)**
- Web: MHV on VA.gov landing page, My VA landing page, Contact information page in VA.gov profile, Sign-in flow
- VAHB: Home screen, Health screen, Contact information screen in profile

## Problem
**What is the problem and who is affected? And, what evidence do we have of the problem?**
- 800,000 Veterans' VA.gov profile email address does not match their My HealtheVet email address where they have been receiving notifications from the My HealtheVet Classic notification system.  Another 66,000 have no email address in VA.gov Profile.  When the MHV Appointments, Messaging, Medications, Medical Records applications migrate their notifications to VA Notify later this year, these Veterans may not recieve important emails about their medical appointments, medications, messagages from providers, or medical images that are ready for download at their desired email address.

**Why do you think the problem is occurring? Other reasons why this might be occurring?**
- The My HealtheVet DBA recently ran a query to compare the two sets of email addresses.
- VA.gov isn't copying over contact email addresses into MHV.
  
**How does this initiative help further OCTO-DE's mission and goals?**
- It will ensure that Veterans reliably continue to receive their health notifications and know where to find related information on My HealtheVet.
    
<!--
## Desired User Outcomes
- *Why would a user want to use this?*
- *With this problem solved, what should users be able to do/achieve that they couldn't before?*

## Undesired User Outcomes

## Desired Business Outcomes

- *Why would your business want this to exist?*
- *With this problem solved, what should your business be able to do/achieve that they couldn't before?*

## Undesired Business Outcomes
-->

---
## Measuring Success

### Key Performance Indicators (KPIs)
> 💡 *VA.gov products measure success against Ease of use, Service Completion, Trust/Satisfaction, Health.*<sup>1</sup>\
> 💡 *Identify balancing metrics to ensure you're not bringing about undesired outcomes.*

Note: Because we do not copy over emails right now from VA.gov profile to MHV after they update them, it is possible that the number of mismatched emails may remain high. Even if users update or confirm their email. Therefore, we'll primarily measure success on the interactions with our components. From there, we can deduce whether users have confirmed, updated, or added a contact email address. View [our monitoring GH issue](https://github.com/department-of-veterans-affairs/va.gov-team/issues/118286) for more info.

| Product KPI | Baseline | Target | Link to data source (e.g. GA, Domo) |
| ----- | ---- | ---- | ---- |
| Veterans with mismatched VA Profile and MHV emails verify or change their email addresses | 0 | 800k | Data source is an SQL database query that cannot be linked. |
| Veterans without an email address in VA Profile add one | 66K | 0 | Data source is an SQL database query that cannot be linked. |

## Discovery
### Assumptions/Risks
> *Identify risks related to usability, value to users, feasibility/implementation, and viability given organizational constraints<sup>2</sup>. 
> Indicate how you'll validate/test against these risks. Inspired by [SVPG's Four Big Risks](https://www.svpg.com/four-big-risks/).*

**Value Risks** (will people use it)
- Veterans may ignore the prompt.  We will monitor number of clicks on prompts, number of emails confirmed, added, and changed.
  
**Usability Risks** (can people figure out how to use it)
- Veterans may not understand why they need to confirm their address.   We will provide clear instructions explaining why this is important.
  
**Technical Feasibility Risks** (can we build it with available tech/data)
  - None noted
  
**Organizational Viability Risks/Constraints** (will there be a positive organizational impact)
- Veterans do not change or add email addresses before VA Notify migration is completed and do not receive notifications at the desired email address.

### Supporting research
[2025-08 {MHV on VA.gov}: {Update Email Prompt} [Usability study] #978](https://github.com/department-of-veterans-affairs/va.gov-research-repository/issues/978)

### What're you building?
> *What's in scope for you to build with this initiative? Describe key features/flows.*
Display the following UX to all actively enrolled VHA patients. Stop displaying this UX after users have either confirmed, added, or updated their contact email address.

**Web**
- `Horizon team` Warning alert on MHV Landing page, /my-health/
- `Horizon team` Warning alert on My VA page, /my-va/
- `Horizon team` Warning Alert on VA.gov Profile page, /profile/contact-information#contact-email-address
- `Horizon team` and `Identity team` Interstitial after signing-in
   - Will discuss tech implementation details in 9/2 sync 

**Mobile**
- `Mobile team` Warning alert on home landing screen
- `Mobile team` Warning alert on health landing screen
- `Mobile team` Warning alert on profile contact info page

**After UX interventions**
<br>Stop displaying alerts altogether after VA leadership agrees we've reached an appropriate amount of users. At which point we will: 
- For people with no contact email in VA Profile still: Copy email from MHV database into contact email
- For people with a mismatch still: Use VA Profile contact email for VA Notify

**Other relevant interventions**
<br>We're going to have 1-2 more email campaigns prompting users to review their email. 

<details>
<summary>Example from July 7, 2025 email campaign</summary>

> **Action needed: Confirm your email address in your VA.gov profile**
> 
> We noticed your email address is different in your VA.gov profile than the email you had in the previous My HealtheVet experience. We want to make sure we’re sending email notifications to the correct email address for you.
> 
> Please review and confirm that your email address is correct in your VA.gov profile. If you need to change your email address, follow these instructions:
> 
> Sign in to VA.gov to manage your contact information
> Go to the email address section.
> Select **Edit** and enter your correct email address.
> Select **Save**.
> 
> **Act Now**
> Please complete this update **as soon as possible** to avoid missing critical communications. 
> Learn more about My HealtheVet on VA.gov https://www.va.gov/resources/my-healthevet-on-vagov-what-to-know/
> 
> **Note**: Please update your profile directly on VA.gov. DO NOT respond directly to this email with any personal information.

</details>

**What have you explicitly decided to **not** include and why?**
- Mobile won't include an interstitial after signing-in. Because this requires additional development effort. And we want to ship ASAP.

**Are you building for the VA Health and Benefits mobile application? Explain why or why not.**
- Yes, because this impacts all My HealtheVet users who receive notifications from VA.gov or VAHB.

**How does this solution address your Assumptions & Risks?**
- Solution decisions regarding designs, content, placement, and conditions under which they will be displayed were made with our risks and assumptions in mind.

#### Go-to-market 
> *What marketing, outreach, or communications are necessary for this product to be successful?*

> *Which groups/orgs are necessary to make this happen?*

## Launch Planning
### Collaboration Cycle
- [Kickoff ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/116216)

### Timeline 
> *Describe any major milestones for this initiative including organizational, legislative, etc. constraints.*
* [Link to Release Plan for this Initiative](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/release-plan-template.md)

#### Initiative Launch Dates
**Planned Launch Date**
- Web: tbd, 9/18 Staging review 
- Mobile: 9/23. Mobile work expected in 9/23 (2.59.0) release ([thread for reference](https://dsva.slack.com/archives/C018V2JCWRJ/p1756489806851979?thread_ts=1756326572.906019&cid=C018V2JCWRJ)).

**Actual Launch Date** 
  - tbd
   
## Screenshots
### Before
#### 1. My HealtheVet Landing Page (web)
<img width="400" alt="image" src="https://github.com/user-attachments/assets/5078c4db-4ae3-48f9-8378-59500e48f5b9" />

#### 2. VA.gov Profile landing page (web)
<img width="400" alt="image" src="https://github.com/user-attachments/assets/7d77a517-8e2d-47b9-8b08-8f64292f2a4d" />

#### 3. VA.gov Profile contact info page (web)
<img width="400" alt="image" src="https://github.com/user-attachments/assets/2f6788b3-5aec-4021-b188-324af141223c" />

#### 4. VAHB mobile app Health landing page
<img width="400" alt="image" src="https://github.com/user-attachments/assets/06b7bbd5-a795-4e87-beab-fa7fe9b83a6e" />

#### 5. VAHB mobile app Profile landing page
<img width="400" alt="image" src="https://github.com/user-attachments/assets/3e42d783-b43a-4972-a5a8-640f09ccc5b4" />

#### 6. VAHB mobile app Profile contact info page
<img width="400" alt="image" src="https://github.com/user-attachments/assets/c6731af0-d274-4a0b-b5eb-df5350172412" />

### After
[View designs in Figma](https://www.figma.com/design/CAChU51fWYMZsgDR5RXeSc/MHV-Landing-Page?node-id=5465-1304)

#### Communications
*Where will you discuss this initiative?*

<details>

- Team Name: MHV Horizon
- GitHub Label(s): mhv-horizon
- Slack channel: #mhv-horizon-team
- Product POCs: OCTO Lead: Marci McGuire; Product Manager: Bryan Ivie

</details>


#### Stakeholders
<details>
   
- Office/Department: VHA Office of Connected Care
- Contact(s): Theresa Hancock, Carnetta Scruggs
 
</details>

---
<sup>1</sup> [VA.gov Analytics - KPI Framework](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/analytics/Analytics%20Playbook/va-gov-platform-analytics-kpi-framework.pdf)\
<sup>2</sup> [SVPG: The Four Big Risks](https://svpg.com/four-big-risks/)
