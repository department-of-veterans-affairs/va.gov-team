# In Product Education Initative Brief

## Outcome Summary
As we transition Veterans to our new MHV portal we want a way to introduce them to draw their attention to new features, patterns and expectations.  This initative is meant to gain users trust and give them confidence in the new MHV portal.  The outcome of this feature should lead to increased user satistisfaction of the MHV portal on VA.gov and an increase in user adoption of the portal. 

**Related/Associated product(s)**
- [MHV on VA.gov product outline](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/digital-health-modernization/mhv-to-va.gov)
- [Medications product outline ](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medications)
- [Secure messaging product outline](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/digital-health-modernization/mhv-to-va.gov/secure-messaging/product)

## Problem
* VADS and USWDS don't have an in product education component that helps users note and understand changes to the UI as a means to help onboard them to new use patterns / expectations.
* Users are used to behaviors and patterns in MHV and are sometimes confused or unsure of how to interact with things that change in the UI on MHV on VA.gov.
* For example:
  * On Secure Messaging - we have moved the secondary folders (drafts, trash, sent, my folders) from left side navigation to tabs at the top of the UI.  Users have reported through Medallia feedback that we have removed these from VA.gov becuase they aren't able to find them.
  * On Medications - we've consolidated multiple lists on MHV into one list on MHV. Users have reported through Medallia feedback that their lists are too long or they can't find what their looking for like active prescriptions.  Filters on VA.gov was launched in December 2025 as an accoridon but users may not be familiar with this feature or why they should use it.
* This initative contributes to OCTOs OKR of improving satisfaction with our web and mobile products by 5 points.

## Desired User Outcomes
- Users read the educational content within the new IPE component and familiarize themselves with the changes and new behaviors on VA.gov to be able to get the most out of their experience.
- Users should become more confident in using the new MHV portal and increase their trust and satisfaction on the MHV on VA.gov portal.

## Undesired User Outcomes
- Users dismiss the IPE before reading comprehending the content.
- Users get too familiar with this component and stop reading the content inside.
- User satisfaction on the MHV on VA.gov portal goes down.

## Desired Business Outcomes
- Behavior changes get communicated to users.
- We are able to confidently move users to the new portal experience due to increased CSAT and improved user communciations.

## Undesired Business Outcomes
- UX teams over use the component and it becomes overlooked by users.

---
## Measuring Success

### Key Performance Indicators (KPIs)
> 💡 *VA.gov products measure success against Ease of use, Service Completion, Trust/Satisfaction, Health.*<sup>1</sup>\
> 💡 *Identify balancing metrics to ensure you're not bringing about undesired outcomes.*
#### Primary
- Number of clicks to expand Medications filter accordion increases | Baseline XX | Goal after 3 months | Link
- Number of clicks on SM "More Folders" link increases | Baseline XX | Goal after 3 months | Link
#### Secondary
- Positive Meds CSAT increases over time | Baseline 65% | Goal 75% after 3 months | Monthly reports
- Positive SM CSAT increases over time | Baseline XX% | Goal XX% after 3 months | Monthly reports
- Negative Meds CSAT decreases over time | Baseline 26% | Goal 20% after 3 months | Monthly reports
- Negative SM CSAT decreases over time | Baseline XX% | Goal XX% after 3 months | Monthly reports
- Total % of MHV on VA.gov veteran users stays consistent or increases | Baseline XX% | Goal XX% | Datadog

---

## Discovery
### Assumptions/Risks
> *Identify risks related to usability, value to users, feasibility/implementation, and viability given organizational constraints<sup>2</sup>. 
> Indicate how you'll validate/test against these risks. Inspired by [SVPG's Four Big Risks](https://www.svpg.com/four-big-risks/).*

- **Value Risks** (will people use it): 
  - Veterans get banner blindness and dismiss without reading or comprehending.
  - Veterans get used to seeing IPE throughout the product and ignore it.
  - Veterans comprehend the IPE messaging but are not willing to change behaviors.
- **Usability Risks** (can people figure out how to use it):
  - Accessibility risks with adding a visual component to the screen tied directly to a UI element.
  - Veterans don't understand how to dismiss or the logic in place to dismiss after X number of sessions. 
- **[Technical] Feasibility Risks** (can we build it with available tech/data):
  - Building a component that is only displayed for 3 sessions is a new concept within MHV on VA.gov.  Need to underestand feasibility.
  - Adding a new component to the UI that will be re-usable by multiple teams before it's apart of the VADS. 
- **Organizational Viability Risks/Constraints** (will there be a positive organizational impact):
  - Adding a shared component into MHV that isn't governed by the VADS team yet, teams could over use or not follow the guidance outlined.

### What're you building
- Temporary and dismissible component that draws the users attention to a change or update on the page, similar to in product education in other web applications.  This should be different from a tool tip, additional information component, or alert.
- The component should visually stand apart from the tool UI ie. not using the same colors as alerts, etc. But it should not disrupt the tool interface or overlap with any page content or UI elements.  The component should be clearly associated with the UI element being referenced in the educational content for both sighted and non-sighted users.
- Content should be clear and concise and limited to 2 sentences with a max of 120 characters total.  The first sentence of the component will be announced to screen readers when focusing on the related elements so it must include the most important content.  
- The component should be used sparingly for changes that impact a lot of users or a critical function to use the tool effectively.  Ideally there should only be 1 IPE per page and not used on every page. It should not be used for important information needed to perform a task.  It should not be nested within a page or used for complex interactions.
   [Figma File](https://www.figma.com/design/5uTyxzQa92awJV0dcVEhM6/Z---Navigation%2C-IA-%2B-In-Product-Education?node-id=4127-92994&t=PjEFG7nzKv601LsX-0)

#### Go-to-market 
> *What marketing, outreach, or communications are necessary for this product to be successful? Which groups/orgs are necessary to make this happen?*

#### Additional Resources 

- Design inspiration - [Google Rich Tooltip](https://m3.material.io/components/tooltips/specs)
--- 

## Launch Planning
### Collaboration Cycle
- [Medications IPE Collab Cycle Ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/101328)
- [SM IPE Collab Cycle Ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/90137) - This inital collab cycle ticket was split into two different initatives.

### Timeline 

#### Secure Messaging
- Design intent - 8/20
- Midpoint review - 12/2
- Designs complete - 1/2
- Development in progress - 

#### Medications
- Goal is to have IPE in production for Medications filters before Milestone 1 - March 15
- Designs complete - 
- 

#### Initiative Launch Dates
- *Target Launch Date*
  - Medications -
  - SM - 
- *Actual Launch Date* 
  - tbd

---
   
## Screenshots
![image](https://github.com/user-attachments/assets/6b7c4d90-5222-4699-8372-7ce686fb9ce0)

---

#### Communications
- Team Name: MHV on VA.gov, Medications, Secure Messaging
- GitHub Label(s): MHV-Medications, MHV-Secure Messaging
- Slack channel: #mhv-health-portal-coordination, #mhv-medications-rx, #mhv-secure-messaging
- Product POCs: Kay Lawyer, Patrick Bateman, Design POC: Kaitlin Fink


#### Stakeholders
- OCC: Eric Spahn (Meds), Patty Henry (SM)

