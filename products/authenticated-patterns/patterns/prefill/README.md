## Background
As a Veteran, I want to have my personal information automatically filled in on VA.gov forms based on my authenticated user data, so I can save time, reduce errors, and complete forms more efficiently when applying for benefits or services.

Across the VA ecosystem, many form teams have implemented a 'prefill' component, but there is no common usage or guidelines for implementation, leading to many different versions and implementations of prefill. We have reached out to product teams including myVA, Authenticated Experience, Forms Library, Benefits and others to gather their feedback on their current prefill usage ([see feedback mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1721841580875/c3be52d2e6ba2ab27b04562b9c97ee0f05f843eb?sender=u11b5f7711188298523d03159) and [prefill in the wild mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1721249754513/f02ba038a943ebb6dbe07355b5b1d473f42dc16b?sender=u11b5f7711188298523d03159)) and any pain points or wishes they had for prefill in the future.   

We wanted to answer questions about whether users understood that we could prefill some data from their profile, how should we display the prefilled information and whether we should update the profile data as well as the form data.

## Hypothesis

We believe that creating a comprehensive pattern for form prefill based on authenticated user data, including guidance, example code, and design resources, will:
- Enable easier implementation of form prefill across various VA.gov applications
- Promote consistency in how form pre-fill is implemented across the platform
- Lay the groundwork for future improvements in Veterans' form completion experience
- Facilitate more complete and up-to-date Veteran profiles as applications adopt this pattern
- Reduce the need for custom code related to form prefilling, leading to more maintainable and consistent applications


## Discovery
### Assumptions/Risks

- **Value Risks** (will people use it): 
  - .
- **Usability Risks** (can people figure out how to use it):
  - .
- **[Technical] Feasibility Risks** (can we build it with available tech/data):
  - .  
- **Organizational Viability Risks/Constraints** (will there be a positive organizational impact):
  - .
 
### What're you building

We believe this pattern should consist of:
- one or more visual indications that form data has been prefilled, including but not limited to:
    - page-level alerts
    - inline alerts
    - additional info component
    - address/details component
    - input styling
    - directions to update profile data 

--- 

## Launch Planning
### Collaboration Cycle
**Staging review will be required for adoption into VADS.**

- Kickoff ticket

### Timeline 

#### Initiative Launch Dates
- *Target Launch Date*
  - Oct. 1, 2024
- *Actual Launch Date* 
  - tbd

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

