# Print/Save application input - Initiative Brief
#### Overview
- We would like to provide an easy way for Veterans to print and/or save (download) their application data entry, in an accessible format, for future reference.
- There have been past research findings indicating that Veterans prefer to print and/or save (download) a copy of their application input.
     - [2023 Supplemental Claims - PACT Act](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/decision-reviews/Supplemental-Claims/Research/1222-PACT-Act/research-findings.md#finding-9)

- There is also historical data on the 10-10CG application that indicates applicants download the completed application just about every time (and sometimes more than once!)
     - Google Analytics - [Submissions and PDF Form downloads](https://analytics.google.com/analytics/web/#/dashboard/u4Zg-ougQpq-87e5dGIH_w/a50123418w177519031p184624291/_u.date00=20230101&_u.date01=20230630/)

<details>
     <summary>Current Screenshot of 10-10CG application - Confirmation screen (click to expand)</summary>
     
![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/92328831/1dde92ef-cecf-4973-a338-8436f8c1696e)
     
</details>

---

## Outcome Summary
- As a Veteran, I want to print and/or save (download) my completed and submitted application data, so I can save it for my records, reference it later and provide to Health Eligibility Center as proof if there was an issue with my submission.

**Related/Associated product(s)**
- [10-10EZ Veterans Health Care application](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/10-10EZ%20Health%20Care%20Application%20-%20Product%20Outline.md)

## Problem
- Veterans don't have a way to print or save (download) their application data
- Veterans can't remember what they put on the application, they are not confident on the answers they provided
- Veterans can only print or save (download) a submission confirmation page to prove they submitted their application
- This would help to further the "Service Completion", "Trust" and "Ease of Use" North Star themes

## Desired User Outcomes
- Veterans will print and/or save (download) their application data for future reference
- Veterans will feel more confident in their data they provided on their application

## Undesired User Outcomes
- The function will not be clear to Veterans
- Veterans will not understand how to print/save (download) their application data.

## Desired Business Outcomes
- Providing a way to print and/or save (download) a submitted application will alleviate any concern or frustration on what information was submitted to VA/HEC.

## Undesired Business Outcomes
- Any confusion or frustration in using the print/save (download) function may cause Veterans to lose trust in VA Services

---
## Measuring Success

### Key Performance Indicators (KPIs)

- Data source
  - [Datadog action tracking](https://vagov.ddog-gov.com/notebook/12606?cell_id=b043htjf&tpl_var_action.name=%2A)
  - [Datadog Service tracking](https://vagov.ddog-gov.com/apm/resource/healthcare-application/rack.request/fed2018843dbdd46?query=env%3Aeks-staging%20operation_name%3Arack.request%20resource_name%3A%22V0%3A%3AHealthCareApplicationsController%23download_pdf%22%20service%3Ahealthcare-application&env=eks-prod&fromUser=false&start=1744641831958&end=1745246631958&paused=false)
  - [Datadog monitor](https://vagov.ddog-gov.com/monitors/355136)
#### Objective: Veterans will find that they want to print and/or save their completed application for future reference
- Result #1: At least 25% of submissions will show the Veteran selecting to print/save their completed form
- Result #2: There will be zero errors experienced when Veterans select to print/save their completed form


| Product KPI | Baseline | Target | Post-Launch 1 week |Post-Launch 1 month|
|------------- |---------|-------|-------------- |------------- |
|Print/save application button |NEW | 4k monthly (25% of submissions) |TBD |TBD |
|Errors when print/save|NEW | 0 errors |TBD |TBD |
---

## Discovery
### Assumptions/Risks
> *Identify risks related to usability, value to users, feasibility/implementation, and viability given organizational constraints<sup>2</sup>. 
> Indicate how you'll validate/test against these risks. Inspired by [SVPG's Four Big Risks](https://www.svpg.com/four-big-risks/).*

- **Value Risks** (will people use it): 
  - Veterans will not want to print or save (download) their application data, they don't need paper clutter or computer space taken up
  - Veterans will not be able to print or save (download) at the time of their application (no printer available, unable to save on device)
- **Usability Risks** (can people figure out how to use it):
  - Veterans will not know how to print or save (download) their application, even with on-screen prompts
  - Veterans will not have the equipment or software necessary to print or save (download) their application, and not understand why the function is not working
- **[Technical] Feasibility Risks** (can we build it with available tech/data):
  - Data availability and reliability risks
- **Organizational Viability Risks/Constraints** (will there be a positive organizational impact):
  - VA stakeholder testing
  - Beyond Accessibility requirements

### What're you building

- **In-Scope**
     - Create an easy way for application data to be printed and/or saved (downloaded) after submission
     - Ensure saved application is easy to read and accessible for those using assistive technology or have cognitive constraints
- **Out-of-scope**
     - Application data is saved and accessed online
          - The application data will only be available for print or save (download).  There will be no way to access the input later online after submission.
     - Application can be printed or saved (downloaded) at a future time after submission
          - This function should only be available at the time of submission.  Once Veteran leaves the page, the option is no longer available 
#### Go-to-market 

- There are no specific marketing or communications needed for this feature.
--- 

## Launch Planning

### Incident Response info
- The 1010EZ form is currently in production; we are adding the ability to print and/or save (download) the application, with the Veteran's input, after submission is complete
- This change applies to the full application flow, as well as the Short Form flow (less than 50% disability rating) ([chart](https://www.sketch.com/s/da85cf44-4503-4e98-834e-ff068b242ef6/a/zxZzO2l))
- We will use the following 1010EZ monitoring applications for any latency or errors being logged
     - [Datadog monitoring dashboard](https://app.datadoghq.com/dashboard/8it-wik-f5q/vsa-1010-team)
     - [Datadog Real User Monitoring dashboard](https://vagov.ddog-gov.com/rum/performance-monitoring?query=%40application.id%3A9d5155fd-8623-4bc9-8580-ad8ec2cdd7fa&from_ts=1687971959215&to_ts=1688058359215&live=true)
     - [Datadog Service tracking](https://vagov.ddog-gov.com/apm/resource/healthcare-application/rack.request/fed2018843dbdd46?query=env%3Aeks-staging%20operation_name%3Arack.request%20resource_name%3A%22V0%3A%3AHealthCareApplicationsController%23download_pdf%22%20service%3Ahealthcare-application&env=eks-prod&fromUser=false&start=1744641831958&end=1745246631958&paused=false)
- If there are any errors or issues found as a result of this change, we will disable the code by switching off the feature toggle which will result in the change being reverted to its previous state prior to release.  We will then begin triaging the root cause and determining a solution.
     - Timeline for triage and solution implementation will be fast-tracked to complete within 1-3 days.
- Main POCs:
     - Heather Justice (heather.justice@adhocteam.us) - Product Manager
     - Brandon Cooper (brandon.cooper@adhocteam.us) - Engineering lead
     - Patrick Bateman (patrick.bateman@adhocteam.us) - Product Owner
- 
### Timeline 
* [Link to Release Plan for this Initiative](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/Printable%20application%20data/Print_save%20PDF%20-%20Release%20Plan.md)

## Key deliverables
- [Figma Design and User Flow](https://www.figma.com/design/UljiHam46o5DItC5iDgmPd/10-10EZ?node-id=8542-43880&p=f&t=7tGwC8uLqFhra4H1-0)
- [Production env](https://www.va.gov/health-care/apply-for-health-care-form-10-10ez/introduction)


### Key Dates

- June 2023: Initial discovery
- March 2025: Finalize designs, development
- April 2025: Complete QA
- April 21-25, 2025: Phased launch to 100% of users

---
   
## Screenshots

### Before

![screencapture-staging-va-gov-health-care-apply-application-confirmation-2023-06-26-15_12_18](https://github.com/department-of-veterans-affairs/va.gov-team/assets/92328831/fae5208a-fcad-4de5-9d44-7bbc1183adef)

### After

![image](https://github.com/user-attachments/assets/93ad3f43-3127-4339-b944-159e95941242)


---

#### Communications
*Where will you discuss this initiative?*

<details>

- Team Name: 10-10 Heath Apps Team
- GitHub Label(s): ez-print-save
- Slack channel: #1010-health-apps
- Product POCs: Heather Justice, Alex Seelig

</details>


#### Stakeholders
*What offices/departments are critical to make this initiative successful?*

<details>
  
- Office/Department: OCTO-DE
- Contact(s): Lauren Alexanderson, Patrick Bateman
 
</details>

---
<sup>1</sup> [VA.gov Analytics - KPI Framework](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/analytics/Analytics%20Playbook/va-gov-platform-analytics-kpi-framework.pdf)\
<sup>2</sup> [SVPG: The Four Big Risks](https://svpg.com/four-big-risks/)
