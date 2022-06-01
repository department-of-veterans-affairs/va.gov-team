# Initiative Brief - 10-10EZ Household section redesign

## Outcome Summary

The 10-10EZ is easier for applicants to understand and complete without having to exit the application.
- Reduce drop-off/exit rates on the Household section pages
- Increase application submissions


**Related/Associated product(s)**
- Product | [10-10EZ product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/10-10EZ%20Health%20Care%20Application%20Product%20Outline.md)

## Problem

- During Discovery research we identified how difficult the Household section is for people to work through
     - (examples: Pause to talk to spouse, have to find financial paperwork, need to finish taxes, etc.)
- We have noticed a 12-month trend of drop-offs around the Financial Disclosure page (4%), the Annual Income page (5.2%) and Spouse page (6.9%).  
     - it was first brought to our attention because it showed the highest drop-off rate
- HEC team (especially Stacey) also has heard this section is painful and is eager to update to improve completion rate (in their mind this is next after short form)

## Desired User Outcomes
- Applicants will be better prepared to complete the application the first time

## Undesired User Outcomes
- Applicants will be more confused and unable to complete the application

## Desired Business Outcomes
- Applications will be completed and submitted quicker
- More applications that are started will be submitted in a single session
- Drop-off/exit rates will decrease

## Undesired Business Outcomes
- The Household section will cause confusion for applicants
- The drop-off/exit rates will not decrease
- Application submissions will not increase

---
## Measuring Success

### Objective: Update the 10-10EZ, so it is easier for applicants to understand and complete without having to exit the application.

**Key Result #1:** Reduce drop-off/exit rate for the Household section pages by half.

Data source - [Domo Dashboard](https://va-gov.domo.com/page/447193050?userId=228456075)

| Product KPI | 12mo Baseline | Target | Post-Launch |
|------------- |---------|-------|-------------- |
|Financial Disclosure page | 4% | 2% | TBD|
|Spouse page | 6.9% | 3.5% | TBD|
|Dependent page | 0% | 0% | TBD|
|Annual Income page | 5.2% | 2.5% | TBD|
| Deductible Expenses page | 1.4% | .75% | TBD|


**Key Result #2:** Increase application submissions by 10%, and submissions within a single session by 5%

Data source - [Domo Dashboard](https://va-gov.domo.com/page/447193050?userId=228456075)

| Product KPI | 12mo Baseline | Target | Post-Launch |
|------------- |---------|-------|-------------- |
|Application Submissions | 14% (114k)  | 25% | TBD|
|Single-session Submissions | 70% (80k) | 75% | TBD|

---

## Discovery
### Assumptions/Risks

- **Value Risks** (will people use it): 
  - The Value risk is that some applicants may find the Household section confusing or complicated.
     - Research sessions will be conducted to ensure we are making the appropriate, informed changes, as needed.
- **Usability Risks** (can people figure out how to use it):
  - The Usability Risk is similar to Value risk, in that a redesign could cause confusion or further complicate the section, causing more drop-offs.

- **[Technical] Feasibility Risks** (can we build it with available tech/data):
  - None at the time
  
- **Organizational Viability Risks/Constraints** (will there be a positive organizational impact):
  - The positive impacts to the organization will be an increase in completed applications, and less call center activity requesting assistance with the Household section.


### Solution Summary

- In-Scope
     - Redesign/reorganization of the Household Section only
     - Revisit content of questions, choice-answers and help text/drop-downs
- Out-of-Scope
     - Redesign of other sections of the application
     - Removal or additions of questions within the section
--- 

## Launch Planning
### Collaboration Cycle

- Kickoff ticket [#]()
- Design Intent ticket [#]()
- Content ticket [#]()
- Midpoint ticket [#]()
- Contact Center guide ticket [#]()
- Analytics ticket [#]()
- Staging ticket [#]()
- Privacy & Security ticket [#]()

### Incident Response info
- The 1010EZ form is currently in production; we are only changing the flow of the application's questions
- Full application flow/ less than 50% disability rating ([chart](https://www.sketch.com/s/da85cf44-4503-4e98-834e-ff068b242ef6/a/zxZzO2l))
- 1010EZ [Datadog monitoring dashboard](https://app.datadoghq.com/dashboard/8it-wik-f5q/vsa-1010-team)

---
## Key deliverables

- Design documentation
- [Research/Design folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/application/va-application/Household%20section%20redesign/Research)
- Technical documentation
- How to access and test
    - [Staging env](https://staging.va.gov/health-care/apply/application/introduction)
    - Testing documentation - TestRail
    - Household section test/use cases & users
    - Household section a11y test case documentation
- Release plan
- [Production env](https://www.va.gov/health-care/apply/application/introduction)


### Key Dates

- May 2022: Initial discovery
- June 2022: Kickoff with outline & begin design
- ???? 2022: Design work finalized
- ???? 2022: Usability testing kickoff
- ???? 2022: Finalize designs, development
- ???? 2022: Complete QA
- ???? 2022: Complete UAT
- ???? 2022: Launched to ???% of users


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

---

#### Communications
*Where will you discuss this initiative?*

<details>

- Team Name: 10-10 Health Apps team
- GitHub Label(s): 
- Slack channel: #1010-health-apps
- Product POCs: Heather Justice & Mark Fallows


</details>


#### Stakeholders
*What offices/departments are critical to make this initiative successful?*

<details>
  
- Office/Department: OCTO-DE
- Contact(s): Lauren Alexanderson

 
</details>

---
<sup>1</sup> [VA.gov Analytics - KPI Framework](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/analytics/Analytics%20Playbook/va-gov-platform-analytics-kpi-framework.pdf)\
<sup>2</sup> [SVPG: The Four Big Risks](https://svpg.com/four-big-risks/)
