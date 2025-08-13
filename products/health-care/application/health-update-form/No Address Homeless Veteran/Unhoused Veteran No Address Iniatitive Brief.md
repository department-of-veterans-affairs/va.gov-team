# Unhoused Veteran No Address Iniative Brief
Heather Justice, 08/13/2025
- [Epic #116870](https://github.com/department-of-veterans-affairs/va.gov-team/issues/116870)

## Outcome Summary
- We want to add an option on the **online** 10-10EZR Form for homeless Veterans to indicate they do not have a home or mailing address.
     - Today, the staff member will enter the facility address in VES and there is some sort of bad address indicator
- This will allow more Veterans, who do not have an address they want to input, to successfully submit the EZR Form **online**.

<details>
     <Summary>Email Q&A with Josh F on how VES works</Summary>

Convo with Josh Faulkner :
> 2. When we talked with Simone about how staff handles a Veteran who does not have a permanent address (unhoused, does not want to provide, etc), she mentioned that they would use the preferred facility address and somehow have a "bad address" flag on it
> 
> - I can't remember what the screen looks like, is there a checkbox or some way to indicate that the Veteran does not have a permanent address?
>      - **[Josh F]** Not exactly, it’s a dropdown with a reason list, they will select the reason of Homeless in this use case where they use the facility address, other reason for bad address is Undeliverable.
> - Do you know if there Is any special handling for these Veterans, other than using the facility address as their mailing address?
>      - **[Josh F]** There is no special handling in terms of their eligibility or enrollment determinations. A residential address is required in order to do community care referrals though.
> - Does this create a manual workflow/review process, even if the Veteran does not have any Toxic exposure or special eligibilities?
>      - **[Josh F]** No, their mailing address is not relevant to their eligibility decision, but it is still important for them to receive their correspondence around those decisions.
> - We are looking at ways we might be able to do this on VA.gov, allowing some sort of indicator that they don't have an address to provide.  Open to any thoughts you might have from your perspective
>      - **[Josh F]** It can be as simple as providing a bad address reason/flag, which from self service should only be for reason of homeless, that I can think of. In that case we can auto set it to their preferred facility address and set the bad address reason.

</details>

<details>
     <Summary>Slack Convo with Josh F - Volumes</Summary>
     
> **Heather Justice**
>- is there any way to pull data on how many Veterans have that 'bad address' indicator (based on not providing a home or mailing address)?
> 
> **Joshua Faulkner**
>- not the second part with it based on not being provided, it has to be provided unless they are homeless
> 
> **Heather Justice**
>- Gotcha.  Would you be able to pull any volume on the "homeless" attribute?
> 
> **Joshua Faulkner**
>- yes, homeless is one of the bad address reason. it is not an 'indicator' as commonly referenced, the field is bad address reason, not bad address indicator. Few mins.
> 
>      - OTHER - 5597
>      - ADDRESS NOT FOUND - 747
>      - HOMELESS - 2740
> 
>- that is among enrolled vets only

</details>

**Related/Associated product(s)**
- Product | [10-10EZR product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/health-update-form/10-10EZR%20Product%20Brief%20(standalone%20form).md)

## Problem

- Veterans who do not have an address, or do not wish to provide one, cannot currently fill out the 10-10EZR without having to provide an address. 
- Veterans need a home address to complete a 1010EZR and in some cases, maintain their healthcare without copays.
- The 1010EZR was not designed for Veterans without addresses, and thus address was a required field despite not being required in VES. 
- This improves the experience for the vulnerable unhoused Veteran population. 

## Desired User Outcomes
- More Veterans will be able to apply for VA health benefits online
- Homeless Veterans will have more digital options available to them

## Desired Business Outcomes

- *Why would your business want this to exist?*
- *With this problem solved, what should your business be able to do/achieve that they couldn't before?*

---
## Measuring Success

### Key Performance Indicators (KPIs)
**OBJ: Increase submissions for homeless Veterans through an available online option to update their health record information**

| Metric| Baseline | Target | 1 Month|
|-------| ------- | ------- | -------|
|EZR Form Submissions from Homeless Veterans | TBD | TBD | TBD|
|EZR Form Submissions (overall) | TBD | TBD | TBD|

---

## Discovery
### Assumptions/Risks
> *Identify risks related to usability, value to users, feasibility/implementation, and viability given organizational constraints<sup>2</sup>. 
> Indicate how you'll validate/test against these risks. Inspired by [SVPG's Four Big Risks](https://www.svpg.com/four-big-risks/).*

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
- Adding an option on the EZR Form for homeless veterans to indicate they do not have an address.
     - When this option is selected, either the form will default to the selected facility address and send a "bad address" indicator to the Enrollment System **-OR-**
     - Once that is indicated, when the EZR is submitted to VES, VES automatically populates the Veteran's address as their preferred facility and indicates that they're homeless.
- Content updates

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
- The 1010EZR form is currently in production; we are only changing the content and flow of the application's questions.  The information being sent after submission to the Enrollment System remains unchanged.
- There are no new endpoints implemented with this change
- This change applies to the full application flow 
- We will use the following 1010EZR monitoring for any latency or errors being logged
     - [Datadog monitoring dashboard](https://vagov.ddog-gov.com/dashboard/kjp-9wp-u47/10-10ezr?fromUser=false&refresh_mode=sliding&from_ts=1755025316070&to_ts=1755111716070&live=true)
     - [Datadog Real User Monitoring dashboard](https://vagov.ddog-gov.com/rum/performance-monitoring?query=%40application.id%3Ad6b6178d-eef9-4252-baae-896432d38d45%20%40session.type%3Auser&agg_m=%40view.loading_time&fromUser=false&from_ts=1754506934358&to_ts=1755111734358&live=true)
- If there are any errors or issues found as a result of this change, we will disable the code by switching off the feature toggle which will result in the change being reverted to its previous state prior to release.  We will then begin triaging the root cause and determining a solution.
     - Timeline for triage and solution implementation will be fast-tracked to complete within 1-3 days.
- Main POCs:
     - Heather Justice (heather.justice@adhocteam.us) - Product Manager
     - TBD - Engineering
     - TBD (tbd) - Product Owner

### Timeline 
> *Describe any major milestones for this initiative including organizational, legislative, etc. constraints.*

* [Link to Release Plan for this Initiative](TBD)

#### Initiative Launch Dates
- *Target Launch Date*
  - tbd
- *Actual Launch Date* 
  - tbd

---
   
## Screenshots

### Before

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
  
- Office/Department:
- Contact(s): 
 
</details>

---
<sup>1</sup> [VA.gov Analytics - KPI Framework](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/analytics/Analytics%20Playbook/va-gov-platform-analytics-kpi-framework.pdf)\
<sup>2</sup> [SVPG: The Four Big Risks](https://svpg.com/four-big-risks/)
