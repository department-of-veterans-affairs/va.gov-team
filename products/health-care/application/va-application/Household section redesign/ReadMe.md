# Initiative Brief - 10-10EZ Household section optimization
- [Household section optimization epic #41403](https://github.com/department-of-veterans-affairs/va.gov-team/issues/41403)

### Figma Link
| Purpose | Form | Figma Link |
|-----------------------------------------------------------|-----------------|-----------------| 
| Household information section (refects production)| 10-10EZ | [Figma designs](https://www.figma.com/design/UljiHam46o5DItC5iDgmPd/10-10EZ?node-id=0-7393) |


## Outcome Summary

The 10-10EZ is easier for applicants to understand and complete without having to exit the application.
- Reduce drop-off/exit rates on the Household section pages
- Increase application submissions
- Reduce number of sessions to submission
- Relieve painpoints reported to the Call Center


**Related/Associated product(s)**
- Product | [10-10EZ product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/10-10EZ%20Health%20Care%20Application%20Product%20Outline.md)

## Problem

- During Discovery research we identified how difficult the Household section is for people to work through
     - (examples: Pause to talk to spouse, have to find financial paperwork, need to finish taxes, etc.)
- We have noticed a 12-month trend of drop-offs around the Financial Disclosure page (4%), the Annual Income page (5.2%) and Spouse page (6.9%).  
     - it was first brought to our attention because they showed the highest drop-off rates of all the pages in the form, compared to the other pages with an average of 0-2% exit rates.
- HEC team (Also from HEC Director, Stacey Echols) also has heard this section is painful and is eager to update to improve completion rate (in their mind this is next after short form)

## Desired User Outcomes
- Applicants will be able to proceed through the application easily and confidently
- Applicants will be better prepared to complete the application the first time, without having to save and return

## Undesired User Outcomes
- Applicants will be more confused and unable to complete the application
- Applicants feel the application is long and drawn out

## Desired Business Outcomes
- Applications will be completed and submitted quicker
- More applications that are started will be submitted in a single session
- Drop-off/exit rates will decrease
- Reduce call center activity pertaining to the Household section

## Undesired Business Outcomes
- The Household section will cause confusion for applicants
- The drop-off/exit rates will not decrease
- Application submissions will not increase

---
## Measuring Success

### Objective: Update the 10-10EZ, so it is easier for applicants to understand and complete without having to exit the application.

#### **Key Result #1:** Reduce drop-off/exit rate for the Household section pages by a third.

Data source - [Domo Dashboard](https://va-gov.domo.com/page/447193050)
- Note: Total Apps started do not include Short Form flow, as those applications do not flow through the section we are monitoring

| Product KPI | 2021| 2022 | Jan-Jun 2023 |Target | Post-Launch 1 month|Post-Launch 3 months|
|------------- |---------|-------|-------|-------------- |-------------- |-------------- |
|Total Apps started |173,669|346,625 |81,431 |N/A  |21,353 |73,238 |
|Household section drop-off |14% (23,803)|28% (98,209) |34% (27,715) |10% |39% (10,346) |24% (17,555) |
|Financial Disclosure |4% (1,464)|0.3% (477) | 0% (no drop) |no change | 20% (4,148) |2.1% (1,211) |
|Annual Income |26.3% (40,791) |30% (75,416) | 24% (12,417) |10% |23% (3,722) |29% (16,087) |
|Deductible Expenses |6% (9,704)|8% (13,911) | 8% (3,296) |5% |3% (432) |9% (3,404) |


#### **Key Result #2:** Increase application submissions by 5%, and submissions within a single session by 5%
This is based on a third of current exit rates converting to successful submissions

Data source - [Domo Dashboard](https://va-gov.domo.com/page/447193050)

| Product KPI | 2022 Baseline | Jan-Jun 2023 | Target | Post-Launch 1 month|Post-Launch 3 months|
|------------- |---------|-------|-------|-------------- |-------------- |
|Application Submissions | 59.8% (138,687k)  | 61.4% (63,084) | 65% |78.6% (20,926) |78.9% (57,784)|
|Single-session Submissions | 60.5% (83,941) | 62.2% (39,232) | 77%  |72.7% (15,205) |72.25% (41,749)|


#### **Key Result #3:** Veterans feel prepared when they begin the Household section

#### **Key Result #4:** Veterans understand what is being asked of them and why, feeling comfortable in providing the information.

Data source - Qualitative research and usability feedback

#### **Key Result #5:** Reduced call center complaints on the Household section of questions

Data source - Call Center team/TBD

---

## Discovery
### Assumptions/Risks

- **Value Risks** (will people use it): 
  - The Value risk is that some applicants may find the Household section confusing or complicated.
     - Research sessions will be conducted to ensure we are making the appropriate, informed changes, as needed.
- **Usability Risks** (can people figure out how to use it):
  - The Usability Risk is similar to Value risk, in that an optimization could cause confusion or further complicate the section, causing more drop-offs.
  - The application may feel too long and applicants won't want to spend the time completing all the information.

- **[Technical] Feasibility Risks** (can we build it with available tech/data):
  - None at the time
  
- **Organizational Viability Risks/Constraints** (will there be a positive organizational impact):
  - The positive impacts to the organization will be an increase in completed applications, and less call center activity requesting assistance with the Household section.
  - The risk/constraint is that the stakeholders will not have favorable feedback on the changes


### Solution Summary

- In-Scope
     - Optimization of the Household Section only
     - Revisit content of questions, choice-answers and help text/drop-downs
- Out-of-Scope
     - Redesign of other sections of the application
     - Removal or additions of questions within the section
--- 

## Launch Planning
### Collaboration Cycle

- Collab Cycle ticket [#47766](https://app.zenhub.com/workspace/o/department-of-veterans-affairs/va.gov-team/issues/47766)
     - [x] Design Intent
     - [x] Content and IA
     - [x] Research
     - [x] Midpoint
     - [x] Contact Center guide
     - [N/A] Analytics
     - [x] Staging
     - [x] Privacy & Security

### Incident Response info
- The 1010EZ form is currently in production; we are only changing the content and flow of the application's questions.  The information being sent after submission to the Enrollment System remains unchanged.
- There are no new endpoints implemented with this change
- This change applies to the full application flow, as well as the Short Form flow (less than 50% disability rating) ([chart](https://www.sketch.com/s/da85cf44-4503-4e98-834e-ff068b242ef6/a/zxZzO2l))
- We will use the following 1010EZ applications for any latency or errors being logged
     - [Datadog monitoring dashboard](https://app.datadoghq.com/dashboard/8it-wik-f5q/vsa-1010-team)
     - [Datadog Real User Monitoring dashboard](https://vagov.ddog-gov.com/rum/performance-monitoring?query=%40application.id%3A9d5155fd-8623-4bc9-8580-ad8ec2cdd7fa&from_ts=1687971959215&to_ts=1688058359215&live=true)
     - [Sentry](http://sentry.vfs.va.gov/organizations/vsp/issues/)
- If there are any errors or issues found as a result of this change, we will disable the code by switching off the feature toggle which will result in the change being reverted to its previous state prior to release.  We will then begin triaging the root cause and determining a solution.
     - Timeline for triage and solution implementation will be fast-tracked to complete within 1-3 days.
- Main POCs:
     - Heather Justice (heather.justice@adhocteam.us) - Product Manager
     - Matt Long (matt.long@adhocteam.us) - Engineering lead
     - Patrick Bateman (patrick.bateman@adhocteam.us) - Product Owner

---
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

- May 2022: Initial discovery
- June 2022: Kickoff with outline & begin design
- Oct 2022: Design work ready
- Dec 2022: Usability testing kickoff
- June 2023: Finalize designs, development
- June 2023: Complete QA
- Aug 2023: Launched to 100% of users (8/11)
- Sept 2023: Complete UAT

---
   
## Screenshots

### Before

#### Financial Disclosure
![FD1](https://user-images.githubusercontent.com/92328831/166976635-8c747dab-ee14-413d-81a7-13f002da02a9.png)
![FD2](https://user-images.githubusercontent.com/92328831/166976704-2bca6994-f0be-48d8-8194-50de58213b23.png)
--- 
#### Spouse's Information
![image](https://user-images.githubusercontent.com/92328831/166976490-855187d1-4fb0-40e5-a177-3a628b5721b2.png)
![image](https://user-images.githubusercontent.com/92328831/166976527-9a9c19df-ea7f-45f9-84bb-9c66297525c4.png)
![image](https://user-images.githubusercontent.com/92328831/166976570-2ef0287e-4aa3-477a-bcdb-55c531a66c9f.png)
---
#### Dependents 
![image](https://user-images.githubusercontent.com/92328831/166976314-52243e8b-eee1-4dc6-854d-3cd9c2cd7a92.png)
![image](https://user-images.githubusercontent.com/92328831/166976364-fceca993-a899-409a-9449-f212d28e1911.png)
![image](https://user-images.githubusercontent.com/92328831/166976403-1fa3a8e1-7ba0-44c2-9d8b-d4f1f291b6bc.png)
---
#### Annual Income 
![image](https://user-images.githubusercontent.com/92328831/166976262-da588c52-0feb-4ec6-afc4-6cd7d8f15499.png)
---
#### Deductable Expenses 
![image](https://user-images.githubusercontent.com/92328831/166976108-1a09cb42-a825-4b11-8454-042cd92c07f1.png)

### After

TBD

---

#### Communications
*Where will you discuss this initiative?*

<details>

- Team Name: 10-10 Health Apps team
- GitHub Label(s): household-info-optimization
- Slack channel: #1010-health-apps
- Product POCs: Heather Justice & Mark Fallows


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
