# 21P-537 Form Digitization

---

## Overview
*After you've explored the problem and through testing / hypothesis have identified the ideal solution, write up one sentence describing the solution you'll be creating.*

## Problem Statement
*As part of the Benefits Intake Optimization Project, the VA has a goal to digitize 11 new forms by 11/11/2025. Form 21P-537 - Marital Status Questionnaire - is on the list of those 11 forms. Every year, about 1,900 surviving spouses of deceased Veterans who receive Dependency and Indemnity Compensation (DIC) receive a letter with the form in the mail asking them to complete the form and mail it back in the enclosed envelope within 60 days. Each surviving spouse receiving DIC benefits is mailed this letter approximately once every 8 years. The current process is entirely paper based, and dependent on physical mail. Currently, there is no option to submit this form electronically.*

## Desired User Outcomes

*Why would a user want to use this?*
- Digital submission avoids mailing delays and potentially reduces lost forms
- Offers flexibility: Instead of only mailing back the paper form, users could submit online from anywhere, with options to save progress, and receive confirmations
- This could give assistive technology users an option to complete the form without assistance, by leveraging an accessible, online version

*With this problem solved, what should users be able to do/achieve that they couldn't before?*

By digitizing VA Form 21P-0537, surviving spouses will gain new capabilities:
- Submit the form online quickly and securely
  - Users won't have to rely solely on paper mail
  - They'll receive confirmation that the VA received their submission
- Avoid unnecessary interruptions or overpayments
  - Completing the form digitally lowers the risk of missing deadlines or mailing errors that could cause benefit suspension or overpayment debts
- Access support resources in context
  - A digital workflow can link to additional supporting documentation, FAQs, or support lines, which are harder to surface in a static letter

## Undesired User Outcomes

### Users may be unaware of the digital form submission option
Currently, the letter that DIC beneficiaries receive provides specific instructions to return the form that is provided in the attached envelope within 60 days. Our analysis of online form downloads for the 21P-0537 form suggested that there were 0 downloads of the PDF form which is available on the VA Find-a-Form application from July, 2024 to August, 2025. This might suggest that unless claimants are specifically made aware that there is an electronic submission option, they would not go to the Find-a-form application and discover the electronic form.

### The digital form submission is more time consuming than the paper option
For beneficiaries who have not remarried since the death of the Veteran, the form requires filling out only 6 fields, which could take only 1-2 minutes. Leveraging an online version could be more time consuming than completing the paper form for some users.

## Desired Business Outcomes

*Why would your business want this to exist?*
The digitization of Form 21P-0537 form directly supports the VA's mandate to ensure accurate, timely, and efficient administration of Dependency and Indemnity Compensation (DIC). Specifically, digitization of Form 21P-0537 enables the business to:
- Reduce operational inefficiencies: Current processes require mailing, paper handling, and manual data entry, all of which consume staff time and increase error risk
- Improve compliance and oversight: The form is legally required to verify continued eligibility. A digital workflow makes it easier to track submissions, identify non-responses, and enforce policy consistently.
- Minimize overpayments and debts: The longer it takes to confirm a spouse’s marital status, the greater the chance of overpaying benefits that later must be recouped
- Digitization speeds up detection and reduces financial liabilities.
- Align with VA’s digital transformation goals: This supports the agency’s broader mandate to optimize benefits intake and provide modern, user-friendly services.
- Increase trust and satisfaction: Streamlined processes reduce complaints, appeals, and calls to VA centers about form receipt, processing delays, or benefit suspensions.

*With this problem solved, what should your business be able to do/achieve that they couldn't before?*
By solving this problem, VA will gain new capabilities that go beyond the paper-based process:
1. Process verifications faster and more accurately
- Electronic intake enables automation (e.g., automatic diary updates in VBMS, fewer data entry errors).
- Staff can focus on exceptions or complex cases instead of routine form handling.

2. Proactively manage risk and overpayments
- Earlier, cleaner data capture reduces the size and frequency of overpayments from unreported remarriages or deaths.
- This directly impacts VA’s fiduciary responsibility to taxpayers.

3. Enhance data quality and integration
- Digital submissions can flow directly into VA systems (e.g., Share, VBMS) with structured data fields, improving the reliability of the corporate record
- This also supports cross-business functions like Education benefits or VR&E notifications when marital/dependent status changes.

4. Monitor performance with real-time insights
- Digital workflows enable metrics (e.g., response rates, processing times, number of benefits preserved/adjusted) that are not easily available in the mail-based process.

5. Scale more easily to meet the 11/11/2025 digitization goal
- Lessons learned from digitizing this form can be applied to the other 10 forms on the list, creating repeatable patterns and technical efficiencies.
  
## Undesired Business Outcomes
If the VA does not digitize Form 21P-0537 as required by the Benefits Intake Optimization Project and the PWS (which emphasizes digital form intake, reduced processing burden, and timely claims resolution ):
- Operational inefficiencies
  - Continued reliance on manual mailing, scanning, and data entry increases processing time and staff workload.

- Resources are diverted to paper handling instead of higher-value casework.
  - Higher error and rework rates
  - Paper forms increase the risk of incomplete submissions, misfiled documents, and data entry errors, leading to additional correspondence and delays.

- Increased overpayments and debts
  - Without timely marital status updates, DIC may be paid in error (e.g., to remarried spouses no longer eligible). Recovering overpayments is costly, burdensome, and often causes hardship for beneficiaries

- Inability to meet modernization goals
  - The PWS stresses digitization and improved customer service. Failing to digitize puts VA at risk of missing its 11/11/2025 target, undermining credibility with stakeholders.

- Reduced trust and satisfaction
  - Survivors losing benefits due to administrative failures erodes trust in VA services.
  - Negative outcomes may lead to increased Congressional inquiries or oversight.

- Lost opportunity for analytics and improvement
  - Paper workflows prevent VA from collecting real-time data on response rates, processing times, and systemic bottlenecks that could drive policy and process improvements.

---
## Measuring Success


### Key Performance Indicators (KPIs)
* *What data (qual or quant) will you look at to understand if your initial set of functionality is meeting your desired user and business outcomes, and not bringing about the undesired outcomes?* (see answers below)
* _What are the most important metrics that track with this product/initiative's success?_ (see answers below)
* _Include links to Domo or Google Analytics Dashboards/Reports_ (see answers below)
* _**Limit 5-6 KPIs per product**__ (see answers below)

Quantitative data
- Form submission rate (digital vs. paper).
- Average time from user receiving request to form submission.
- Number of incomplete or rejected submissions.
- Overpayment and debt occurrences tied to marital status misreporting.
- Call center volume/tickets related to “form receipt” or “marital status verification.”

Qualitative data
- User satisfaction survey feedback (ease of use, confidence in completion, perceived fairness).
- Direct comments in usability testing and post-submission surveys.
- Feedback from VSOs (Veterans Service Organizations) and survivor advocates.

5–6 Most Important KPIs
1. Digital Submission Adoption Rate
- % of VA Form 21P-0537 submissions completed digitally vs. paper.
- Tracks whether users prefer and successfully adopt the digital option.
- (Source: Domo Benefits Intake Dashboard.)

2. On-Time Response Rate
- % of users who return the form within 60 days.
- Directly tied to preventing undesired user outcome (loss of DIC benefits).
- (Source: Google Analytics event tracking for submission timestamps.)

3. Error/Incomplete Submission Rate
- % of submissions requiring correction, follow-up, or rework.
- High rates indicate user confusion or poor design.
- (Source: Domo Intake QA/Error Reports.)

4. Processing Time (Cycle Time)
- Average time from user submission → marital status decision update in VBMS.
- Critical for business efficiency and reducing backlog.
- (Source: Domo VBA Claims Processing Dashboard.)

5. Overpayments Detected from Marital Status Errors
- $ value and frequency of overpayments linked to outdated marital status.
- Measures if digitization helps reduce financial risk.
- (Source: VA Debt Management dashboards in Domo.)

6. User Satisfaction Score (Post-Submission Survey)
- % of users reporting the digital form was “easy to complete and submit.”
- Ensures the product improves user confidence and experience.
- (Source: VA.gov Google Analytics survey module / Medallia dashboards.)

| Category | Ease of use | Service completion | Trust/Satisfaction | Health |
|----------|-------------|--------------------|--------------------|--------|
| KPI      |             |                    |                    |        |
| KPI      |             |                    |                    |        |

#### Baseline KPI Values
* _Baseline values for those most critical metrics. These may come from other systems other than VA.gov e.g. eBenefits._
Ensure surviving spouses can easily, quickly, and confidently verify their marital status online so that Dependency and Indemnity Compensation (DIC) benefits are protected without interruption, while reducing the burden of paper processes.

### Objectives and Key results (OKRs)
_What are the measurable targets you're aiming for that delivers value for Veterans?_

- Objective:
  - Key result 1: Increase digital adoption of Form 21P-0537 to at least 75% of submissions by 11/11/2025.
    - Value to Veterans: More survivors can complete the form electronically, avoiding mail delays and uncertainty.
    - (Source alignment: Supports PWS call for digitized forms and Benefits Intake Optimization)
  - Key result 2: Achieve 95% on-time response rate (within 60 days) for marital status verification forms by FY26.
    - Value to Veterans: Reduces risk of DIC benefit suspension due to missed or lost forms
    - (Source alignment: Addresses undesired user outcomes (benefit interruption, stress))
  - Key result 3: Reduce error/incomplete submission rate by 50% compared to paper baseline.
    - Value to Veterans: Less back-and-forth with VA, faster confirmation, fewer denied or delayed benefits.
    - (Source alignment: Directly addresses business inefficiency and user confusion noted in M21-1)
  - Key result 4: Cut average processing time (submission → VBMS update) by 30%.
    - Value to Veterans: Faster confirmation that benefits are secure, reducing anxiety.
    - (Source alignment: Matches PWS focus on timeliness and reduced manual burden)

---

## Assumptions
- *Include indication of which assumption you think is most risky. Your Solution Approach (next section) should describe how you'll validate that assumption w/your initial set of functionality*

## Solution Approach

- *What are you going to build now, and why have you decided to start there?*
- *Why this solution / approach over other solutions / approaches?*
- *What have you explicitly decided to not include in this initial set of functionality, and why?*
- *How will the solution / approach evolve after this initial build (knowing that this will likely change as you learn from users along the way)?*
- *Does your solution include the VA Health and Benefits mobile application? Explain why or why not.*

### Supporting research

- *Is this work supported by user research?* 
  - *If this work **is supported by user research**, please cite the user research by providing links to our [VA.gov research repo](https://github.com/department-of-veterans-affairs/va.gov-research-repository)*
  - *If this work is **not supported by existing user research**, will this work include user research?*
    - *If this work **will include user research**, please briefly state what you hope to learn from that research.*
    - *If this work **does not cite nor include user research**, please state why and be prepared to defend your decision.*

### Initiatives
*Include initiatives (iterations, new features, etc.) to improve this product. See the [Initiative Brief Template](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/product/initiative-brief-template.md)*

- Initiative | [Link to Initiative Brief](#)

--- 

## Launch Strategy
- *How are Veterans and others using this product going to know it exists?*
- *What marketing, outreach, or communications are necessary for this product to be successful?*
- [Link to Release Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/release-plan-template.md)

## Launch Dates
- *Target Launch Date*
  - tbd
- *Actual Launch Date* 
  - tbd
- *What date will you evaluate impact after launch (and when do you expect to have your Impact Review)?*
  - tbd

---

## Solution Narrative

### Current Status

### Key Decisions

---
   
## Screenshots

### Before

### After

---

#### Communications

<details>

- Team Name: 
- GitHub Label: 
- Slack channel: 
- Product POCs:
- Stakeholders: 

</details>

#### Team Members

<details>
 
 - DEPO Lead: 
 - PM: 
 - Engineering:
 - Research/Design: 
 
</details>


#### Stakeholders

<details>
 
_What offices/departments are critical to make this initiative successful?_
 
</details>
