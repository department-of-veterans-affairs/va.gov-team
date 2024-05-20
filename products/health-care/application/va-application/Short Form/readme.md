# Initiative Brief - 10-10EZ Short Form

## Outcome Summary

Reduce time taken in completing the 10-10EZ application and increase the number of overall submissions.

**Related/Associated product(s)**
- Product | [10-10EZ  product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/10-10EZ%20Health%20Care%20Application%20-%20Product%20Outline.md)

## Problem
Veterans are either not completing the application due to additional information that is required but may not be necessary; or may not be completing due to the amount of time required to complete the application.
The introduction of the short form will remove questions that are not necessary for a given Veteran's circumstances, and reduce the amount of time and effort required to complete the initial form.

## Desired User Outcomes
- Shorten the amount of time taken to complete the application.
- Reduce the number of visits required to complete the application.

## Undesired User Outcomes
- Confusion about what information needs to be provided and what doesn't.

## Desired Business Outcomes
- Fewer applications are abandoned.

## Undesired Business Outcomes
- Confusion on what information needs to be filled out, leading to Veterans abandoning applications.

---
## Measuring Success

### Objective: More health care applications submitted.

Data source - [10-10EZ Domo Dashboard](https://va-gov.domo.com/page/447193050)


**Key Result 1:** Target 30% of total application submissions through Short Form flow

| KPI / Metric | Post-launch October (phased launch) | Post-launch November | Post-launch December |
| ------------ | ------------- | ------------------ | ------------------- |
| Total applications submitted | 11,292 | 10,878 | 10,343 |
| Short Form applications submitted | 961 | 3,421 | 3,114 |
| Pct. Short Form Applications | 8.37% | 31.45% | 30.08% |

**Key Result 1:** Increase number of application submissions
*Using last 6 months (Jan-June 2022) to calculate Baselines*
| KPI / Metric | Baseline: Jan-June 2022 | Post-launch November | Post-launch December |
| ------------ | ------------- | ------------------ | ------------------- |
| Avg. Application starts per Month | 21,264 | 17,509 | 15,124 |
| Avg. Submissions per Month | 13,034 | 10,878 | 10,343 |
| Pct. Applications Completed | 61.3% | 62.1% | 68.4% |

**Key Result 2:** Reduce Sesssions / Time taken to complete application 
| KPI / Metric | Baseline: Jan-June 2022 | Post-launch November | Post-launch December |
| ------------ | ------------- | ------------------ | ------------------- |
| Avg. Sesions per Submission | 1.52 | 1.44 | 1.43 |
| Avg. Single sessions per Month | 8,103 | 7,126 | 6,808 |
| Avg. 2 sessions per Month | 2,857 | 1,940| 1,800 |
| Avg. 3 or more sessions per Month | 1,764 | 763 | 733 |

**Key Result 3:** Reduce abandoned applications

| KPI / Metric |Baseline: Jan-June 2022 | Post-launch November | Post-launch December |
| ------------ | ------------------ | ------------------- |------------------- |
|Applications Abandoned per month |40% (8,638 of 21,605 started)| 38% (6,631 of 17,509 started) | 32% (4,781 of 15,124 started) |

---


## Discovery
### Assumptions/Risks

- **Value Risks** (will people use it): 
  - The value risk that Veterans may become confused when they transition to the short form, and spend time looking for where to input the information that is no longer necessary.
- **Usability Risks** (can people figure out how to use it):
  - There is a risk that the incorrect disability rating will be selected, meaning they might not fill out the correct version of the form.
- **[Technical] Feasibility Risks** (can we build it with available tech/data):
   - None
  
- **Organizational Viability Risks/Constraints** (will there be a positive organizational impact):
  - Increase in application submissions.


### Solution Summary
- In-scope:
     - Implementation of short form for users with a disability rating equal to or greater than 50% based on information stored in the user's profile.
     - Implementation of short form for users with a disability rating equal to or greater than 50% based on self-disclosed information.
     - Implementation of short form for users with a combat veteran status (TBD).
- Out of scope:
     - Implementation of the short form for any other reasons.
     - Any clean-up / changes to the existing form.
--- 

## Launch Planning

### Timeline 
- June 2022: Complete QA
- July 2022: Launched to users

#### Initiative Launch Dates
- *Target Launch Date*
  - 4/7/2022
  - 9/5/2022 - relaunch
- *Actual Launch Date* 
  - 7/25/2022 - 5%
  - 7/27/2022 - 100%
  - 7/29/2022 - 0% - disabled feature toggle due to [production issue](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/Short%20Form/7-29-22%20-%20Prod%20Issue%20with%20Short%20Form.md)
  - 9/19/2022 - 5% (ES deployed their fix on 9/17)
  - 10/17/2022 - 25%
  - 10/24/2022 - 50%
  - 10/26/2022 - 75%
  - 10/31/2022 - 100%

---
   
## Screenshots
[Authenticated Workflow](https://preview.uxpin.com/acda277e33e9629a7ab817f6c93c251b4a60ac56#/pages/141488399/simulate/no-panels?mode=i)

[Unauthenticated Workflow](https://preview.uxpin.com/2a1ce93f62d447e101cfce3c803d20941fba7203#/pages/141808810/simulate/no-panels?mode=i)

### After

[Authenticated and UnAuthenticated workflow](https://www.sketch.com/s/da85cf44-4503-4e98-834e-ff068b242ef6/p/A71F1C96-FF98-42A2-9ADD-6D4B7A1DDB20)

[Screenshots of all screens](https://www.sketch.com/s/da85cf44-4503-4e98-834e-ff068b242ef6/p/4EEB69A5-43C1-45B3-B5B6-58D7DA435BD1)

---

#### Communications
*Where will you discuss this initiative?*

<details>

- [Short Form epic #27679](https://app.zenhub.com/workspace/o/department-of-veterans-affairs/va.gov-team/issues/27679)
- Team Name: 10-10 Health Apps team
- GitHub Label(s): 1010-short-form
- Slack channel: 1010-health-apps
- Product POCs: Heather Justice, Mark Fallows

</details>


#### Stakeholders
*What offices/departments are critical to make this initiative successful?*

<details>
  
- Office/Department: OCTO-DE
- Contact(s): Lauren Alexanderson, Patrick Bateman
 
</details>
