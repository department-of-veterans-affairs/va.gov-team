# Initiative Brief - 10-10EZ Household section optimization
- [Household section optimization epic #41403](https://github.com/department-of-veterans-affairs/va.gov-team/issues/41403)

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
- HEC team (especially Stacey Echols) also has heard this section is painful and is eager to update to improve completion rate (in their mind this is next after short form)

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

| Product KPI | 2021 | Target | Post-Launch 1 week |Post-Launch 1 month|
|------------- |---------|-------|-------------- |-------------- |-------------- |
|Total Apps started |173,669| | TBD |TBD |
|Household section |14.4% (23,803)|8% | TBD |TBD |
|Financial Disclosure |4% (1,464)|% () | TBD |TBD |
|Spouse Info |6.5%|% | TBD |TBD |
|Dependent info |%|% |% | TBD |TBD |
|Annual Income |5.5% (40,791) |% | TBD |TBD |
|Deductible Expenses |1.4% (9,704)|% | TBD |TBD |


#### **Key Result #2:** Increase application submissions by 5%, and submissions within a single session by 5%
This is based on a third of current exit rates converting to successful submissions

Data source - [Domo Dashboard](https://va-gov.domo.com/page/447193050)

| Product KPI | 2022 Baseline | Target | Post-Launch 1 week |Post-Launch 1 month|
|------------- |---------|-------|-------------- |-------------- |
|Application Submissions | 58% (137.5k)  | 63% | TBD|TBD|
|Single-session Submissions | 67% (92k) | 72% | TBD|TBD|


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
     - [x] Design Intent 10/14/22
     - [x] Content and IA
     - [ ] Research
     - [ ] Midpoint
     - [ ] Contact Center guide
     - [ ] Analytics
     - [ ] Staging
     - [ ] Privacy & Security

### Incident Response info
- The 1010EZ form is currently in production; we are only changing the content and flow of the application's questions
- Full application flow/ less than 50% disability rating ([chart](https://www.sketch.com/s/da85cf44-4503-4e98-834e-ff068b242ef6/a/zxZzO2l))
- 1010EZ [Datadog monitoring dashboard](https://app.datadoghq.com/dashboard/8it-wik-f5q/vsa-1010-team)

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
    - Testing documentation - TestRail
    - [Household section test/use cases & users](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/Household%20section%20redesign/Staging%20Review_QA/Household%20section%20optimization%20-%20Use%20Cases.md)
    - Household section a11y test case documentation
- Release plan
- [Production env](https://www.va.gov/health-care/apply/application/introduction)


### Key Dates

- May 2022: Initial discovery
- June 2022: Kickoff with outline & begin design
- Oct 2022: Design work ready
- Dec 2022: Usability testing kickoff
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
