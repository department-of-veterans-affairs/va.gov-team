## Background
As a Veteran, I want to have my personal information automatically filled in on VA.gov forms based on my authenticated user data, so I can save time, reduce errors, and complete forms more efficiently when applying for benefits or services.

Across the VA ecosystem, many teams have implemented a 'prefill' component within their form following [guidance from the VA Design System](https://design.va.gov/components/form/prefill). Guidance around helping users know when their information is prefilled is also found into a separate pattern: [Know how their information is updated](https://design.va.gov/patterns/help-users-to/know-how-their-information-is-updated). While guidance exists in these separate pages, teams still use this component and pattern inconsistently and ask for additional guidance on specific use cases in Slack. 

We wanted to answer questions about whether users understood that we could prefill some data from their profile, how should we display the prefilled information and whether we should update the profile data as well as the form data.

## Hypothesis

We believe that creating a comprehensive pattern for form prefill based on authenticated user data, including guidance, example code, and design resources, will:
- Enable easier implementation of form prefill across various VA.gov applications
- Promote consistency in how form pre-fill is implemented across the platform
- Lay the groundwork for future improvements in Veterans' form completion experience
- Facilitate more complete and up-to-date Veteran profiles as applications adopt this pattern
- Reduce the need for custom code related to form prefilling, leading to more maintainable and consistent applications


## Discovery

We reached out to product teams including the Authenticated Experience team (#accountexp-authexp), the Veteran Facing Forms team (#veteran-facing-forms), Disability Benefits team (#benefits-disability) and others to gather their feedback on their current prefill usage (see feedback mural and prefill in the wild mural) and any pain points or wishes they had for prefill in the future. We have documented our findings in:
- [Prefill Feedback Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1721841580875/c3be52d2e6ba2ab27b04562b9c97ee0f05f843eb?sender=u11b5f7711188298523d03159)
- [Prefill in the Wild Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1721249754513/f02ba038a943ebb6dbe07355b5b1d473f42dc16b?sender=u11b5f7711188298523d03159)

### Assumptions/Risks
 
### What're you building

We believe this pattern should consist of:
- one or more visual indications that form data has been prefilled, including but not limited to:
    - page-level alerts
    - inline alerts
    - additional info component
    - address/details component
    - input styling
    - directions to update profile data 

### Finalized Pattern

We have completed our [research study](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/authenticated-patterns/Design%20and%20Research/2024-07-Research%20Initiative-One-Prefill/Prefill%20Research%20Report%2009_2024.md) and finalized our recommendations for this pattern which can be found [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/authenticated-patterns/patterns/prefill/Help-users-to-Know-when-their-information-is-prefilled.md).


--- 

## Launch Planning
### Collaboration Cycle
**Staging review will be required for adoption into VADS.**

- [Kickoff ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/90181)

### Timeline 

#### Initiative Launch Dates
- *Target Submission Date*
  - Oct. 1, 2024
- *Actual Submission Date* 
  - Sept 27. 24

---
   
## Screenshots

### Before

### After

---

#### Communications
<details>

- Team Name: Authenticated Experience Design Patterns
- GitHub Label(s): 
- Slack channel: tmf-auth-exp-design-patterns
- Product POCs: Becky Phung (VA Product Owner), Lynn Stahl (Agile6 Product Manager)

</details>


#### Stakeholders
<details>
  
- Office/Department: OCTO/VA Design System, USDS/USWDS
- Contact(s): Matt Dingee (VADS), Kevin Hoffman (VADS), 
 
</details>

