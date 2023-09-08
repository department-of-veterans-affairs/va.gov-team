# Initiative Brief - 527EZ Pension Form Reactivation
## Overview
* The digital pension 527EZ form is several versions behind the paper form, and it is missing fields that are now required to process pension claims. Currently, any user who submits a digital 527 claim receives a development letter asking them to resubmit their claim using the paper form.
---

## Outcome Summary
> *Brief statement describing opportunity you're pursuing e.g. "Increase Use of Search Tools on VA.gov." Include measurable outcome (i.e. metric) you're trying to affect.*
* Update the digital 527 pension form to align with the paper version of the form, so the digital form can be processed by downstream systems. The ideal outcome is 0% development of digital 527 forms.

**Related/Associated product(s)**
- Product | [527EZ and 530 digital forms](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/pension)

## Problem
> *Describe the challenge / pain point you seek to address.:* 
* What is the problem and who is affected? And, what evidence do we have of the problem?
   * The digital 527 form is so out of date that it's missing fields required for claim processing. 100% of digital 527 claims require development. Any user who submits a digital 527 form is mailed a development letter requesting more information.
   * The digital 527 form has many accessibility issues and uses depreciated form components, which leads to a poor user experience.
   * The intent to file (ITF) date that is captured it out of compliance with VBA requirements. The current form collects ITF as the date/time of submission when it should be collecting ITF at the first point the form is saved.
   * There is no backup form submission process if the claim fails to submit.
* How does this initiative help further OCTO-DE's mission and goals?
   * Resolving the stated issues with the digital 527 form will allow Veterans to receive pension benefits faster.

## Desired User Outcomes
- Users submit a processable 527 claim
- More users submit 527 claims through VA.gov.
- Users who do submit 527 claims thorugh VA.gov receive benefits faster (e.g., have a low development rate)
- Users receive the benefits they are entitled to because their ITF date aligns with VBA requirements (earliest claim save date)

## Undesired User Outcomes
- Users avoid using the digital 527 form because it's long and complicated.
- Users submit incomplete or incorrect information leading to additional claim development

## Desired Business Outcomes
- More users submit digital pension forms
- Processing claims faster
- Failed claims are submitted successfully through a backup process

## Undesired Business Outcomes
- Downstream systems cannot process updated digital pension form submissions
- Failed claims are not established

---
## Measuring Success

### Key Performance Indicators (KPIs)
> 💡 *VA.gov products measure success against Ease of use, Service Completion, Trust/Satisfaction, Health.*<sup>1</sup>\
> 💡 *Identify balancing metrics to ensure you're not bringing about undesired outcomes.*

|Product KPI|Baseline|Target|Link to data source (e.g. GA, Domo)|
|-----------|--------|------|-----------------------------------|
|Development Rate|100%|<5%|VBA|
|# of digital form submissions per month|850|900|Google Analytics|
|Claim processing time|??|??|VBA|
|# of failed claims|??|0|DataDog|

---

## Discovery
### Assumptions/Risks
> *Identify risks related to usability, value to users, feasibility/implementation, and viability given organizational constraints<sup>2</sup>. 
> Indicate how you'll validate/test against these risks. Inspired by [SVPG's Four Big Risks](https://www.svpg.com/four-big-risks/).*

- **Value Risks** (will people use it): 
  - Pension benefits can be a complicated, so many users may prefer to work with an expert (VSO) to submit their claim.
- **Usability Risks** (can people figure out how to use it):
  - The pension form is long and complex, so many users may prefer to work with a VSO to complete it rather than filling it out themselves.
- **[Technical] Feasibility Risks** (can we build it with available tech/data):
  - Not a lot is known (yet) about the downstream workflows of the digital pension application
  
- **Organizational Viability Risks/Constraints** (will there be a positive organizational impact):
  - VBA vs OMB consensus on required form fields
  - Availablility of stakeholders to test new form

### What're you building
- A 527 form that includes the required fields (as identified by the VBA pension team of Terrence Minaryd and Eric Henne)
- A form that uses the latest Platform Design System components
- A form that meets current accessibility requirements
- A form that correctly captures the intent to file date
- The following items are out of scope due to time contraints. The goal is to get a processable form up ASAP.
   - Form enhancements such as auto-filling contact and dependent information
   - Extensive user experience enhancements 

#### Go-to-market 
- The VBA will be communicating the availablility of an updated digital pension form to Veterans, VSO, and other stakeholders.
- We may partner with the VBA to support these outreach efforts.
- Users with previously in-progress forms that were affected by the [form deactivation initatitive](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/pension/form-deactivation/Initiative%20Brief-527EZ%20and%20530%20Temp%20Deactivation.md) may need to be notified and have their data migrated to the new form 

--- 

## Launch Planning
### Collaboration Cycle
> 💡 *Use for any Collab Cycle tracking, questions.*

- Kickoff ticket

### Timeline 
> *Describe any major milestones for this initiative including organizational, legislative, etc. constraints.*
- Form redesign: August-September 2023
- Form development: September-November 2023
- Form launch: November 2023

* [Link to Release Plan for this Initiative - TBD](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/release-plan-template.md)

#### Initiative Launch Dates
- *Target Launch Date*: November 2023
- *Actual Launch Date* : TBD

---
   
## Screenshots

### Before
- [Current 527 form url](https://www.va.gov/pension/application/527EZ/introduction)
- [Current form flow](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1683826730324/61b509f935adaa2acf2f7769a5ba911726a7b237?sender=u0e8ac1d6d7681bb7e1b80558)

### After
- [Future flow](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1691512530884/67e3bc6677c8d17cf6fc8848319a6e40ebced1af?wid=0-1691790334288&sender=u0e8ac1d6d7681bb7e1b80558)
---

#### Communications
*Where will you discuss this initiative?*
- Team Name: Benefits Non-Disability
- GitHub Label(s): Ubmrella, pension
- Slack channel: benefits-ce-non_disability_exp
- Product POCs:Laura Steele

#### Stakeholders
*What offices/departments are critical to make this initiative successful?*

|Office/Department|Contact|Role|
|-----------------|-------|----|
|OCTO|Emily Theis|PO|
|VBA|Terrence Minyard|Project Manager for electronic submissions|
|VBA|Eric Henne|Lead on paper form updates|

---
<sup>1</sup> [VA.gov Analytics - KPI Framework](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/analytics/Analytics%20Playbook/va-gov-platform-analytics-kpi-framework.pdf)\
<sup>2</sup> [SVPG: The Four Big Risks](https://svpg.com/four-big-risks/)
