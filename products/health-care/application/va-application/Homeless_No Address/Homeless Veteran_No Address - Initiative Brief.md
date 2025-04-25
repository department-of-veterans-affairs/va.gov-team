# ❗ Feature on hold until Summer 2025 due to the VES team working on a new API that will incorporate the option to receive the data from VA.gov 10-10EZ form.

# Homeless Veteran/No Address - Initiative Brief
- Epic - [#103256](https://github.com/department-of-veterans-affairs/va.gov-team/issues/103256)
- Design file - TBD

## Outcome Summary
- We want to add an option on the 10-10EZ Form for homeless Veterans to indicate they do not have a home or mailing address.
     - Today, the staff member will enter the facility address in VES and there is some sort of bad address indicator
- This will allow more Veterans, who do not have an address they want to input, to successfully submit the EZ Form online.

**Related/Associated product(s)**
- Product | [10-10EZ product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/10-10EZ%20Health%20Care%20Application%20Product%20Outline.md)

## Problem
- The online 10-10EZ Form requires a mailing and home address, which homeless Veterans may not have. This restricts homeless Veterans from applying for VA health benefits online, forcing them to either visit a facility in-person or avoid obtaining benefits at all. 
- This initiative helps further OCTO-DE's mission and goals by improving digital access to VA health benefits and services for homeless Veterans. 
## Desired User Outcomes
- More Veterans will be able to apply for VA health benefits online
- Homeless Veterans will have more digital options available to them

## Desired Business Outcomes

- The business can better serve the needs of homeless Veterans and ensure that they have access to the benefits and services they deserve.
- the business will be able to increase the number of homeless Veterans who successfully submit the EZ Form online and access VA benefits and services.


---
## Measuring Success

### Key Performance Indicators (KPIs)
**OBJ: Increase submissions for homeless Veterans through an available online option to apply for VA health care**


| Metric| Baseline | Target | 1 Month|
|-------| ------- | ------- | -------|
|EZ Form Submissions from Homeless Veterans | TBD | TBD | TBD|
|EZ Form Submissions (overall) | TBD | TBD | TBD|


---

## Discovery
### Assumptions/Risks

- **Value Risks** (will people use it): 
  - There is a risk that homeless Veterans will not be aware of the option to apply for VA health care online if they do not have a mailing address/home address to input.
  - There is also a risk that homeless Veterans will not want to apply for VA health care online, and indicate that they do not have an address to input. 
- **Usability Risks** (can people figure out how to use it):
  - There is a risk that homeless Veterans will not have access to a device to apply online.  They may struggle with or are not familiar with how to use the device or fill out online forms.
- **[Technical] Feasibility Risks** (can we build it with available tech/data):
  - The 10-10EZ team can build this, however the “bad address” indicator to send downstream is not currently available for receiving by Enrollment System. There may be additional work needed there.
  
- **Organizational Viability Risks/Constraints** (will there be a positive organizational impact):
  - The HEC stakeholders will support this change, and we will be following the same manual process they have in place today, defaulting to the selected preferred facility address.

### What're you building
- Adding an option on the EZ Form for homeless veterans to indicate they do not have an address.
     - When this option is selected, the form will default to the selected facility address and send a "bad address" indicator to the Enrollment System.

#### Go-to-market 
- The 10-10 team will work with the HEC stakeholders to consider a communications strategy for reaching homeless Veterans
--- 

## Launch Planning
### Collaboration Cycle

- Kickoff ticket
   - [ ] PO & Platform sync
   - [ ] Design Intent
   - [ ]  Research Review
   - [ ]  Architecture Intent review
   - [ ]  IA Review
   - [ ]  Midpoint Review
   - [ ]  Staging Review
   - [ ]  Privacy & Security
   - [ ]  Contact Center guide review

### Incident Response info
- The 1010EZ form is currently in production; we are only changing the content and flow of the application's questions.  The information being sent after submission to the Enrollment System remains unchanged.
- There are no new endpoints implemented with this change
- This change applies to the full application flow, as well as the Short Form flow (more than 50% disability rating) 
- We will use the following 1010EZ applications for any latency or errors being logged
     - [Datadog monitoring dashboard](https://app.datadoghq.com/dashboard/8it-wik-f5q/vsa-1010-team)
     - [Datadog Real User Monitoring dashboard](https://vagov.ddog-gov.com/rum/performance-monitoring?query=%40application.id%3A9d5155fd-8623-4bc9-8580-ad8ec2cdd7fa&from_ts=1687971959215&to_ts=1688058359215&live=true)
     - [Sentry](http://sentry.vfs.va.gov/organizations/vsp/issues/)
- If there are any errors or issues found as a result of this change, we will disable the code by switching off the feature toggle which will result in the change being reverted to its previous state prior to release.  We will then begin triaging the root cause and determining a solution.
     - Timeline for triage and solution implementation will be fast-tracked to complete within 1-3 days.
- Main POCs:
     - Heather Justice (heather.justice@adhocteam.us) - Product Manager
     - TBD - Engineering
     - Patrick Bateman (patrick.bateman@adhocteam.us) - Product Owner


### Timeline 

* [Link to Release Plan for this Initiative](TBD)

#### Initiative Launch Dates
- *Target Launch Date*
  - tbd
- *Actual Launch Date* 
  - tbd

---
   
## Screenshots

### Before
- ![image](https://github.com/user-attachments/assets/818755f3-e08f-4752-a71b-b9586e5b1d5e)
- ![image](https://github.com/user-attachments/assets/74148f80-9a7f-463e-8cf6-71c323d44df0)



### After

---

#### Communications
*Where will you discuss this initiative?*

<details>

- Team Name: 10-10 Health Apps team
- GitHub Label(s): 1010-team
- Slack channel: 1010-health-apps
- Product POCs: Heather Justice

</details>


#### Stakeholders
*What offices/departments are critical to make this initiative successful?*

<details>
  
- Office/Department: OCTO-DE
- Contact(s): Lauren Alexanderson, Patrick Bateman

 
</details>

