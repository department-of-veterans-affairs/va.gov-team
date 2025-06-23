# Print/Save form input - Initiative Brief
#### Overview
- We would like to provide an easy way for Veterans to print and/or save (download) their form data entry, in an accessible format, for future reference.
- There have been past research findings indicating that Veterans prefer to print and/or save (download) a copy of their form input.
     - [2023 Supplemental Claims - PACT Act](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/decision-reviews/Supplemental-Claims/Research/1222-PACT-Act/research-findings.md#finding-9)

- There is also historical data on the 10-10CG form that indicates applicants download the completed form just about every time (and sometimes more than once!)
     - Google Analytics - [Submissions and PDF Form downloads](https://analytics.google.com/analytics/web/#/dashboard/u4Zg-ougQpq-87e5dGIH_w/a50123418w177519031p184624291/_u.date00=20230101&_u.date01=20230630/)

<details>
     <summary>Current Screenshot of 10-10CG form - Confirmation screen (click to expand)</summary>
     
![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/92328831/1dde92ef-cecf-4973-a338-8436f8c1696e)
     
</details>

---

## Outcome Summary
- As a Veteran, I want to print and/or save (download) my completed and submitted form data, so I can save it for my records, reference it later and provide to Health Eligibility Center as proof if there was an issue with my submission.

**Related/Associated product(s)**
- [10-10EZR Health Care update form](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/health-update-form/10-10EZR%20Product%20Brief%20(standalone%20form).md)

## Problem
- Veterans don't have a way to print or save (download) their form data
- Veterans can't remember what they put on the form, they are not confident on the answers they provided
- Veterans can only print or save (download) a submission confirmation page to prove they submitted their form
- This would help to further the "Service Completion", "Trust" and "Ease of Use" North Star themes

## Desired User Outcomes
- Veterans will print and/or save (download) their form data for future reference
- Veterans will feel more confident in their data they provided on their form

## Undesired User Outcomes
- The function will not be clear to Veterans
- Veterans will not understand how to print/save (download) their form data.

## Desired Business Outcomes
- Providing a way to print and/or save (download) a submitted form will alleviate any concern or frustration on what information was submitted to VA/HEC.

## Undesired Business Outcomes
- Any confusion or frustration in using the print/save (download) function may cause Veterans to lose trust in VA Services

---
## Measuring Success

### Key Performance Indicators (KPIs) - ‼️ SECTION NEEDS UPDATING with actual monitoring links

- Data source
  - [TBD - (EZ Datadog Service tracking)](https://vagov.ddog-gov.com/apm/resource/healthcare-form/rack.request/fed2018843dbdd46?query=env%3Aeks-staging%20operation_name%3Arack.request%20resource_name%3A%22V0%3A%3AHealthCareformsController%23download_pdf%22%20service%3Ahealthcare-form&env=eks-prod&fromUser=false&start=1744641831958&end=1745246631958&paused=false)
  - [TBD - (EZ Datadog monitor)](https://vagov.ddog-gov.com/monitors/355136)
#### Objective: Veterans will find that they want to print and/or save their completed form for future reference
- Result #1: At least 25% of submissions will show the Veteran selecting to print/save their completed form
- Result #2: There will be zero errors experienced when Veterans select to print/save their completed form


| Product KPI | Baseline | Target | Post-Launch 1 week |Post-Launch 1 month|
|------------- |---------|-------|-------------- |------------- |
|Print/save form button |NEW | 1,100k monthly (25% of submissions) |TBD |TBD |
|Errors when print/save|NEW | 0 errors |TBD |TBD |
---

## Discovery
### Assumptions/Risks

- **Value Risks** (will people use it): 
  - Veterans will not want to print or save (download) their form data, they don't need paper clutter or computer space taken up
  - Veterans will not be able to print or save (download) at the time of their form (no printer available, unable to save on device)
- **Usability Risks** (can people figure out how to use it):
  - Veterans will not know how to print or save (download) their form, even with on-screen prompts
  - Veterans will not have the equipment or software necessary to print or save (download) their form, and not understand why the function is not working
- **[Technical] Feasibility Risks** (can we build it with available tech/data):
  - Data availability and reliability risks
- **Organizational Viability Risks/Constraints** (will there be a positive organizational impact):
  - VA stakeholder testing
  - Beyond Accessibility requirements

### What're you building

- **In-Scope**
     - Create an easy way for form data to be downloaded and printed after submission
     - Ensure saved form is easy to read and accessible for those using assistive technology or have cognitive constraints
- **Out-of-scope**
     - form data is saved and accessed online
          - The form data will only be available for print or save (download).  There will be no way to access the input later online after submission.
     - form can be printed or saved (downloaded) at a future time after submission
          - This function should only be available at the time of submission.  Once Veteran leaves the page, the option is no longer available 

#### Go-to-market 

- There are no specific marketing or communications needed for this feature.
--- 

## Launch Planning

### Incident Response info - ‼️ SECTION NEEDS UPDATING with actual monitoring links and POCs
- The 1010EZR form is currently in production; we are adding the ability to print and/or save (download) the form, with the Veteran's input, after submission is complete
- We will use the following 1010EZR monitoring forms for any latency or errors being logged
     - [Datadog monitoring dashboard](https://app.datadoghq.com/dashboard/8it-wik-f5q/vsa-1010-team)
     - [Datadog Real User Monitoring dashboard](https://vagov.ddog-gov.com/rum/performance-monitoring?query=%40form.id%3A9d5155fd-8623-4bc9-8580-ad8ec2cdd7fa&from_ts=1687971959215&to_ts=1688058359215&live=true)
     - [Datadog Service tracking](https://vagov.ddog-gov.com/apm/resource/healthcare-form/rack.request/fed2018843dbdd46?query=env%3Aeks-staging%20operation_name%3Arack.request%20resource_name%3A%22V0%3A%3AHealthCareformsController%23download_pdf%22%20service%3Ahealthcare-form&env=eks-prod&fromUser=false&start=1744641831958&end=1745246631958&paused=false)
- If there are any errors or issues found as a result of this change, we will disable the code by switching off the feature toggle which will result in the change being reverted to its previous state prior to release.  We will then begin triaging the root cause and determining a solution.
     - Timeline for triage and solution implementation will be fast-tracked to complete within 1-3 days.
- Main POCs:
     - (? Product Manager)
     - (? Engineering lead)
     - (? Product Owner)
- 
### Timeline - ‼️ SECTION NEEDS UPDATING with actual release plan link
* Link to Release Plan for this Initiative

## Key deliverables - ‼️ SECTION NEEDS UPDATING with actual design link
- Figma Design and User Flow - TBD
- [Production env](https://www.va.gov/my-health/update-benefits-information-form-10-10ezr/introduction)


### Key Dates - ‼️ SECTION NEEDS UPDATING with actual dates

- TBD

---
   
## Screenshots - ‼️ SECTION NEEDS UPDATING with actual screenshots

### Before

TBD

### After

TBD


---

#### Communications
*Where will you discuss this initiative?*

<details>

- Team Name: 10-10 Heath Apps Team
- GitHub Label(s): 1010-print-save
- Slack channel: #1010-health-apps
- Product POCs: 

</details>


#### Stakeholders
*What offices/departments are critical to make this initiative successful?*

<details>
  
- Office/Department: OCTO-DE
- Contact(s): Lauren Alexanderson, Patrick Bateman
 
</details>

---
