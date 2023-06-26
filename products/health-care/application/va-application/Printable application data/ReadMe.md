# Print/Save application input - Initiative Brief
#### Overview
- We would like to provide an easy way for Veterans to print and/or save(dowload) their application data entry, in an accessible format, for future reference.
 
---

## Outcome Summary
- As a Veteran, I want to print and/or save(dowload) my completed and submitted application data, so I can save it for my records, reference it later and provide to Health Eligibility Center as proof if there was an issue with my submission.

**Related/Associated product(s)**
- [10-10EZ Veterans Health Care application](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/10-10EZ%20Health%20Care%20Application%20-%20Product%20Outline.md)

## Problem
- Veterans don't have a way to print or save(dowload) their application data
- Veterans can't remember what they put on the application, they are not confident on the answers they provided
- Veterans can only print or save(dowload) a submission confirmation page to prove they submitted their application
- This would help to further the "Service Completion", "Trust" and "Ease of Use" North Star themes

## Desired User Outcomes
- Veterans will print and/or save(dowload) their application data for future reference
- Veterans will feel more confident in their data they provided on their application

## Undesired User Outcomes
- The function will not be clear to Veterans
- Veterans will not understand how to print/save(dowload) their application data.

## Desired Business Outcomes
- Providing a way to print and/or save(dowload) a submitted application will alleviate any concern or frustration on what information was submitted to VA/HEC.

## Undesired Business Outcomes
- Any confusion or frustration in using the print/save(dowload) function may cause Veterans to lose trust in VA Services

---
## Measuring Success

### Key Performance Indicators (KPIs)

Data source - [Domo Dashboard](https://va-gov.domo.com/page/447193050)

| Product KPI | Baseline | Target | Post-Launch 1 week |Post-Launch 1 month|
|------------- |---------|-------|-------------- |------------- |
|KPI |TBD | TBD |TBD |TBD |
|KPI |TBD | TBD |TBD |TBD |
|KPI |TBD | TBD |TBD |TBD |
|KPI |TBD | TBD |TBD |TBD |
|KPI |TBD | TBD |TBD |TBD |
|KPI |TBD | TBD |TBD |TBD |
|KPI |TBD  |TBD |TBD |TBD |

---

## Discovery
### Assumptions/Risks
> *Identify risks related to usability, value to users, feasibility/implementation, and viability given organizational constraints<sup>2</sup>. 
> Indicate how you'll validate/test against these risks. Inspired by [SVPG's Four Big Risks](https://www.svpg.com/four-big-risks/).*

- **Value Risks** (will people use it): 
  - Veterans will not want to print or save(dowload) their application data, they don't need paper clutter or computer space taken up
  - Veterans will not be able to print or save(dowload) at the time of their application (no printer available, unable to save on device)
- **Usability Risks** (can people figure out how to use it):
  - Veterans will not know how to print or save(dowload) their application, even with on-screen prompts
  - Veterans will not have the equipment necessary to print or save(dowload) their application, and not understand why the function is not working
- **[Technical] Feasibility Risks** (can we build it with available tech/data):
  - Data availability and reliability risks
  - **Organizational Viability Risks/Constraints** (will there be a positive organizational impact):
  - VA stakeholder testing
  - Beyond Accessibility requirements

### What're you building

- **In-Scope**
     - Create an easy way for application data to be printed and/or saved(dowloaded) after submission
     - Ensure saved application is easy to read and accessible for those using assistive technology or have cognitive constraints
- **Out-of-scope**
     - Application data is saved and accessed online
          - The application data will only be available for print or save(dowload).  There will be no way to access the input later online after submission.
     - Application can be printed or saved(dowloaded) at a future time after submission
          - This function should only be available at the time of submission.  Once Veteran leaves the page, the option is no longer available 
#### Go-to-market 

- There are no specific marketing or communications needed for this feature.
--- 

## Launch Planning
### Collaboration Cycle

- Collab Cycle ticket [ticket number]
     - [x] Design Intent 
     - [x] Content and IA
     - [x] Research
     - [x] Midpoint
     - [ ] Contact Center guide
     - [ ] Analytics
     - [ ] Staging
     - [ ] Privacy & Security

### Incident Response info
- The 1010EZ form is currently in production; we are adding the ability to print and/or save (download) the application, with the Veteran's input, after submission is complete
- ???? Full application flow / less than 50% disability rating ([chart](https://www.sketch.com/s/da85cf44-4503-4e98-834e-ff068b242ef6/a/zxZzO2l))
- 1010EZ [Datadog monitoring dashboard](https://app.datadoghq.com/dashboard/8it-wik-f5q/vsa-1010-team)
- ??? GA Page to show downloads?  What about errors?

- 
### Timeline 
> *Describe any major milestones for this initiative including organizational, legislative, etc. constraints.*

* [Link to Release Plan for this Initiative](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/release-plan-template.md)

## Key deliverables

- Design documentation
   - [Proposed wireflows](https://www.sketch.com/s/da85cf44-4503-4e98-834e-ff068b242ef6/p/AE225764-D5BB-4CE6-9577-38E8F570392B/canvas)
   - [Sketch Design and User Flow](https://www.sketch.com/s/da85cf44-4503-4e98-834e-ff068b242ef6/p/208CCE1E-DC03-457F-B2FA-1232663983CF/canvas)
- [Research/Design folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/application/va-application/research/2022-10-Household%20Information%20Section)
- [UXPin Prototype](https://preview.uxpin.com/6a98bfd8c3a76816b8695fbdc6883bd477610024#/pages/159024257/simulate/no-panels)
- [Technical documentation folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/application/va-application/engineering)
- How to access and test
    - [Staging env](https://staging.va.gov/health-care/apply/application/introduction)
    - [Testing documentation - TestRail](https://dsvavsp.testrail.io/index.php?/reports/overview/10)
    - [Household section test/use cases & users](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/Household%20section%20redesign/Staging%20Review_QA/Household%20Section%20Optimization%20Use%20Cases.md)
    - [Household section a11y test case documentation](https://github.com/department-of-veterans-affairs/va.gov-team/issues/58694)
- [Release plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/Household%20section%20redesign/Product/Household%20section%20optimization%20-%20Release%20Plan.md)
- [Production env](https://www.va.gov/health-care/apply/application/introduction)


### Key Dates

- June 2023: Initial discovery
- ???? 2023: Kickoff with outline & begin design
-???? 2023: Design work ready
-???? 2023: Usability testing kickoff
- ???? 2023: Finalize designs, development
- ???? 2023: Complete QA
- ???? 2023: Complete UAT
- ???? 2023: Launched to ???% of users

---
   
## Screenshots

### Before

![screencapture-staging-va-gov-health-care-apply-application-confirmation-2023-06-26-15_12_18](https://github.com/department-of-veterans-affairs/va.gov-team/assets/92328831/fae5208a-fcad-4de5-9d44-7bbc1183adef)

### After

TBD

---

#### Communications
*Where will you discuss this initiative?*

<details>

- Team Name: 10-10 Heath Apps Team
- GitHub Label(s): ez-print-save
- Slack channel: #1010-health-apps
- Product POCs: Heather Justice, Alex Seelig, Emily Brown

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
