# Medication Wording 

## Outcome Summary

An OIG/Congressional request came in to add content helping Veterans understand how to review their medications ahead of an appointment to various points where Veterans encounter their appointments. The objective is to remind Veterans to be ready to talk about any medication, supplement, vitamins, etc that they have been prescribed or are taking from any provider, VA clinic, or local store. This initiative aims to improve communication and support veterans in managing their medication effectively.

**Impacts Related/Associated product(s)**
- VA.gov web appointments
- MHV Classic
- My VA Health portals
- Pre-check-in
- Mobile app
- Email reminders
- Text message reminders/pre-check-in
- Others TBD

[Full list of products and touchpoints.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/projects/2024-05-medication-language-update/medication-content-locations.md)

## Problem

The problem were addressing is the need to improve medication-related communication with veterans across various channels. The challenge lies in ensuring that veterans are adequately informed and prepared to discuss their medications during their appointments.

The affected parties include:

- Veterans: They may face difficulties in remembering or accurately communicating their medications during appointments, which can impact the quality of their healthcare.
- Healthcare Providers: Inadequate information about a patient's medications can lead to potential errors in diagnosis, treatment, or medication management.
- Administrative Staff: They may encounter issues related to scheduling, reminders, and updating patient information across multiple platforms.

The evidence of this problem is evident from the congressional request, which indicates a need to add medication-related content to appointment notifications and detail pages across various channels.

This initiative help further OCTO-DE's mission and goals by improving the quality of care for veterans and ensuring that their healthcare providers have accurate and comprehensive information about their medications.

<!--
## Desired User Outcomes
- Enhance existing content and add medication wording to appointment notifications 

## Undesired User Outcomes
- Unrelatable notifications/

-->

---
## Measuring Success

### Key Performance Indicators (KPIs)
> 💡 Medication Disclosure Rate
> 💡 User Engagement with Medication Content

---

## Discovery

### Assumptions/Risks

- **Value Risks** (will people use it): 
  - User Adoption and Engagement
  - Effectivness of communication
  - Integration and Consistency Across Channels

- **Organizational Viability Risks/Constraints** (will there be a positive organizational impact): 
    - Technical Integration and Scalability
    - Regulatory Compliance and Data Security
    - Alignment with Stakeholder Objectives

### What're you building

- Collecting information on how Veterans can prepare for their appointment in details pages and pre-check-in
- Adding a new section explaining how to review their medications
- Working with [other teams](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/projects/2024-05-medication-language-update/medication-content-locations.md) to add this content to relevant appointment touchpoints.

#### Go-to-market 
- Notifications push/communications to larger teams/groups  

--- 

## Launch Planning

### Collaboration Cycle

- Kickoff ticket

### Timeline 
> *Describe any major milestones for this initiative including organizational, legislative, etc. constraints.*

- [Link to Release Plan for this Initiative](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/release-plan-template.md)

#### Initiative Launch Dates
- *Target Launch Date*
  - 6/14/24
- *Actual Launch Date* 
  - tbd

---

## Implementation 

See spike [#83322](https://app.zenhub.com/workspaces/appointments-team-603fdef281af6500110a1691/issues/gh/department-of-veterans-affairs/va.gov-team/83322)

### Pilot solution

We will hard-code the content version upon approval. 
   
### Potential future solution

Leverage Drupal to store content that is fetched by a design system component to maintain consistency.
  - Integrate content into the design system as a reusable component that teams can incorporate. 
  - Depend on specific components in the design system, such as the OMB info component, to be used with Drupal as the backend for content management.
  - Ideally Drupal could store this content using something like [config pages](https://www.drupal.org/project/config_pages) to reduce the risk of a node getting deleted or moved.

We could explore using this content as a proof of concept for this implementation in the future. The value is having a way to keep content consistent across all appointment spaces. But work has to be done on the platform side before this is feasible.

### Not doing 

Utilize an existing pattern to fetch the text via API. We're not following this route because generally it's best practice to let the frontend handle content, wording, and UX-related material that's generated for the user. We want the api to only be concerned with facilitating the sending and receiving of data from our data sources, and transforming that data as appropriate. The wording of text content doesn't fall into that category so we don't want to delegate that responsibility to the api.

If the particular messages and wording are going to be tied to specific attributes in the data we receive, then that would be relatively easy to have the api return. I generally like to not assume that's the case though, since lots of frontends can implement these kinds of UX changes that don't have anything to do with the data returned.


## Screenshots

![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/154380850/37f8382b-a758-4c07-bed7-c484e9942c7f)


<img width="610" alt="image" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/154380850/804f0a3e-841b-4277-9d11-8506d1d2af5f">


### Before

Appointment details:
- [User flows](https://www.figma.com/design/ugE1APC20v8OcArGB2IMQy/User-Flows-%7C-Appointments-FE?node-id=1-2925&t=OIEbtEV8mKYZd2Iz-4)
- [Detail pages](https://www.figma.com/design/q1lq0bwvDMCg6RADZddYMX/Details-Pages-Specs-(WIP)-%7C-Appointments-FE?node-id=0-1)
- Content will be added to Upcoming and Canceled appts, not Past appts or any requests.

[Pre-check-in](https://www.figma.com/design/7Ib7RxiIC4QB53FDBO2a8c/Unified-check-in-%7C-PCI?node-id=937-28573)

### After

[Appointment detail pages](https://www.figma.com/design/zdLjBmeymTyHALf5lBzVgI/Medication-Review-Language-%7C-UAE?node-id=13-32911&t=T01MiIR72FzJaeLO-4)

[Pre-check-in](https://www.figma.com/design/zdLjBmeymTyHALf5lBzVgI/Medication-Review-Language-%7C-UAE?node-id=13-32909&t=T01MiIR72FzJaeLO-4)

---

#### Communications
*Where will you discuss this initiative?*

<details>

- Team Name: Appointments team 
- GitHub Label(s): appointments 
- Slack channels: #-appointments-instructions, #appointments-team
- Product POCs: Adam Oyenuga 

</details>


#### Stakeholders
Higher level Stakeholders 

- NAPMIS
The medication review language will need to be reviewed by stakeholders before it can be finalized/implemented.

<details>
  
- Office/Department: 
- Contact(s):
 
