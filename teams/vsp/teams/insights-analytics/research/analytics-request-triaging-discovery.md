# Request Triaging Discovery

## VSP North Star
Empower teams across VA to contribute experiences and tools that enable Veterans to more easily and efficiently access their VA benefits and services.
## Overarching Problems
**Metrics Requests:** Performance, usability, and outcomes data for veteran facing services can be difficult to access and interpret because the VA’s data is scattered across multiple analytics systems or captured with nuances that our specialists need to interpret.  The scattered requests can cause redundant data specialist work as well as bottlenecks in acquiring product data for work to be done on VA.gov.

**Analytics Access Requests:** There is currently no consistent process in requesting data or access to data tools, such as Google Analytics. As with metrics requests, this can cause bottlenecks for users to acquire product data for work to be done on VA.gov. There are also several users with Google Analytics access who no longer work for the VA or do not have need for access, which is a data security concern.

**Analytics Implementation Requests:** In order to track metrics on their products, va.gov platform teams come to the Insights team with requests to implement Google Analytics tracking into their systems. There is currently no consistent process in requesting analytics implementation support from the Insights nor is there a standardized process for which analytics specialists can prioritize these requests.

Lack of process in both types of requests have caused confusion in prioritization and can hinder Insights’ abilities to efficiently deliver accurate data to stakeholders.
## User Groups
There are 3 main stakeholders in this process: product decision makers, storytellers, and the Insights team. The Insights team supports decision makers in order to provide input for product decision making. The Insights team also supports storytellers in order to provide input for va.gov advocacy. Storytellers champion the product team’s products. 
### 1) Product Decision Makers
1. Product Teams (Platform Development Teams)
2. Product Leads
3. Business Stakeholders - Product Owner

As a VA Product Decision Maker, I need to find a consistent way to easily request key VA.gov metrics, so that I can make data informed product decisions. 

As a VA Product Decision Maker, if I launch a new product on va.gov or deploy a fix or iteration, I need my product tracked in Google Analytics so that can I have baseline metrics and use know the health of my product for future decisions.
## 2) Data Specialists
1. Insights Team Members

User Story

As a VA Data Specialist, it is difficult to organize data requests that are delivered through different mediums as well as incomplete requests, which can hinder my ability to provide decision makers and storytellers the data they need on time. I need to be able to track requests so that I can know where the gaps are for users to find the data they need.
## 3) Storytellers
1. Internal DSVA Storytellers
2. VSP Leadership
3. External Leadership Storytellers (OIT, USDS HQ)

User Story

As a VA Storyteller,  I need to find a consistent way to easily request key VA.gov metrics so that I can advocate for our products on va.gov. 
## Goals
### User Goals - Outcomes

_Product Decision Makers_
1. When I do not have easy self-access to performance, usability, and outcomes metrics that will help inform my product decisions, I want to be able to easily request data in a timely manner so that I can evaluate user behavior, prioritize my team’s work, or confidently report my product’s health metrics to other platform teams.
    1. I want to be able to know who to reach out to and provide an accurate request that reduces the back and forth for clarification.
1. If there is existing and accessible data, I want to be able to know where to find it and confidently interpret the data so that my understanding of context and impact is accurate.
1. If there is uncaptured data, I want to be able to know what is not available for me to use.

_Data Specialists_

1. I want to be able to easily see if there is an analytics request with all the necessary information so I can deliver accurate data within the requestor’s time frame.
1. I want to be able to easily see if there is an implementation request with the all necessary information so I can deliver Google Analytics tracking within the requestor’s time frame.
1. I want to be able to deliver data to a Storyteller or Product Decision Maker in a format that is efficient to format, easily accessible to stakeholders, and automates most data sources.
1. I want to create implementation solutions that minimize front-end development and can be used in other applications more easily.

_Storytellers_

1. When I do not have easy self-access to performance, usability, and outcomes metrics that will help me advocate for va.gov, I want to be able to easily request data in a timely manner so that I can present the platform team’s work to the relevant audiences.
    1. I want to be able to know who to reach out to and provide an accurate request that reduces the back and forth for clarification.
1. If I have a recurring request, I want to be able to receive these in a timely manner.
1. (Placeholder, still in discovery by Leah: I need a couple great stories a month that demonstrate improvements for users + the biz or support the Digital Modernization Principles.)

### Business Goals - Objectives
1. Create a consistent cadence for requesting data
1. Cut down on time from data request to data delivery
1. Record requests to create accessible data for recurring requests
1. Decrease data bottleneck and empower user’s ability to gather and interpret data
1. Create a strong orientation process for VSA teams
1. Create a consistent cadence for requesting analytics implementations
1. Increase efficiency for analytics implementation prioritization
1. Create a consistent cadence for requesting Google Analytics access
1. Reduce redundancies in Google Analytics and Google Tag Manager 

## Assumptions
1. We will be able to validate data (for accuracy, reliability, and aligned insights) that we collect from requests
1. **Historical and offline data is available for our team to aggregate and deliver**
1. We will be able to identify and connect with stakeholders for other sources of VA data
1. We will be able to get buy-in from other VA offices to triage their requests
1. The Insights team’s product health tool will alleviate many of these pain points

## Risks
1. Added processes can create added bottlenecks and bureaucracy
1. Added processes without proper communication can add confusion to both decision makers and data specialists on where requests originate from and live
1. Without proper guidelines and setting clear expectations, data specialists can be inundated with ‘urgent’ requests.

## Value Propositions
A streamlined analytics request process will create consistency across analytics reporting, access, and implementation requests, a more transparent and streamlined requesting route, and data for the Insights team to make analytics more accessible to users.

## Solution Approach
1. **Coordinate Requests**
- Communicate and redirect users to a form or space, such as the #VSP-Analytics Slack channel on DSVA, that creates consistency across requests and decreases bottlenecks based on being directed to a single person.
    - Add the instructions to the channel topic or pin the instructions for more visibility
    - Redirect users on Github to the channel
2. **Create a simple form (Github)**

    **_a. Requesting Platform Analytics Reports_**
- Create a simplified form that collects the following data:

    - Stakeholder 
        - Name
        - Drop contact information onto #VSP-Analytics with Github link
    - Product Area/Intent for Data
    - Date to be Completed By
    - Data Points Needed
- This form will provide request tracking, consistency, and transparency for requesters and specialists.

Example:

![App 1](https://i.ibb.co/D58HS6X/image.png)
![App 1a](https://i.ibb.co/KGK0VkQ/image.png)

- Add automatic assignees from the Insights team
- Add the following labels:
        - `analytics-insights`
        - `analytics-request`

     **_b. Requesting access to GA_**
     - Attach a form that outlines how to request GA implementation:
        - How to link your account to a Gmail: https://support.google.com/accounts/answer/176347?co=GENIE.Platform%3DDesktop&hl=en 
     - Stakeholder
        - Name
        - Drop contact information onto #VSP-Analytics with Github link
     - Stakeholder Team/Context for team’s project
     
Example:

![App 2](https://i.ibb.co/30k0vz9/image.png)

- Add automatic assignees from the Insights team
- Add the following labels:
        - `analytics-insights`
        - `analytics-request`

     **_c. Requesting Google Analytics Implementation_**
     - Create a simplified form that collects the following data:
        - Stakeholder 
          - Name
          - Drop contact information onto #VSP-Analytics with Github link
        - Product Area
        - The Domain where GA needs to be implemented
        - Date to be Completed By/Product Launch Date
        - Data Points Needed to Track/Typical Website Interactions to Track
            - **Conversions - Understanding the User Flow**:  Provide URLs that are part of the application from introduction page to successful form completion; conditional pages that are visible depending on an applicant’s answer should be marked accordingly
            - **Other User Interactions**: Sample users when authentication is required
        - Additional Comments
    - This form will provide request tracking, consistency, and transparency for requesters and specialists. It will also provide prioritization for specialists.

Example:

![App 3](https://i.ibb.co/fGn0dxH/image.png)
![App 3b](https://i.ibb.co/f1xKkrW/image.png)

- Add automatic assignees from the Insights team
- Add the following labels:
        - `analytics-insights`
        - `analytics-request`

3. **Annually audit Google Analytics Access**
- Groom the current Google Analytics users for an access audit. Start by gathering the list of current users in a spreadsheet for us to groom internally. Then email remaining users with permissions to inquire if they still need Google Analytics access and give a month’s time for responses (in case anyone is out of office, etc.). Remove access for users who responded that they no longer need access or did not respond within the time frame.
Example Email:
```
Dear User,

The Insights and Analytics is performing an annual Google Analytics audit. Please reply to this email with a “YES” by DATE if you are still using or will still need to use Google Analytics. We will rescind access on DATE.

Thank you,
VA VSP Analytics and Insights
```

- Include Google Analytics in off-boarding process on Slack Channel, #VFS-Platform-Support.

4. **Surface the data that we’re already tracking**
- We are already recording individual analytics requests and will need to surface our historical requests in a way that is understandable so that we can establish a more coherent process. We will also need these requests to track the number, frequency, and delivery efficiency of requests.
5. **Use data to create analytics self-service**
- Once we have collected data, our team can begin to prototype and output open data sources to empower users to reach accurate analytics on their own. 
- We can use this data to iterate and improve on current analytics dashboard efforts.
..- Data to be collected for Insights team
....- Recurring metrics requests
....- Metrics that we do not have access to (in order to add them to data that needs to be tracked down)
....- Number of requests
......- Overall
......- From each team
....- Timeframe of requests (are requests usually made before, during, or after launches? Over time, are there certain sprints where platform decision makers need more data?)
..- Check in with stakeholders to determine ease of use and satisfaction
## Success Metrics
### Target Outcomes
In the first quarter that these processes are released, we will need to measure the number of requests and current data user satisfaction for requesting data.

1. Improve platform decision makers’ data confidence in recurring data outputs

| Baseline KPI | Implementation | New KPI |
| ---------- | -------------- | ---------- |
| CSAT | Survey platform decision makers with: How confident are you in interpreting the following data (include researched recurring metrics) | CSAT |
| # of data clarification correspondences | Determine the number of correspondence for data clarification after metrics have been disbursed. | # of data clarification correspondences |


Rebaseline: CSAT for data confidence increases after the first quarter of process implementation. Number of requests for data clarification decreases.

2. Improve platform decision makers’ self-service access

| Baseline KPI | Implementation | New KPI |
| ---------- | -------------- | ---------- |
| # of requests for recurring analytics | Use request data to iterate self-service platform analytics dashboards to include more recurring analytics | # of requests for recurring analytics
| Usage of analytics dashboards | Use request data to iterate self-service platform analytics dashboards to include more recurring analytics | Usage of analytics dashboards |

Rebaseline: Number of requests for recurring analytics should decrease between quarters and continued dashboard iterations. Usage of analytics dashboards should increase. (Is there a way to measure dashboard usage?)

3. Improve platform decision makers’ satisfaction for requesting data

| Baseline KPI | Implementation | New KPI |
| ---------- | -------------- | ---------- |
| CSAT | Survey platform decision makers with: Satisfaction for requesting data | CSAT |
		
Rebaseline: CSAT for data confidence increases after the first quarter of process implementation.

4. Data specialists are able to focus more sprint time to supporting higher level platform analytics and more complex requests

| Baseline KPI | Implementation | New KPI |
| ---------- | -------------- | ---------- |
| Closed issues | Measure throughput for time spent in sprints for recurring data requests (using cumulative flow diagrams on Zenhub). | Closed Issues |

Rebaseline: Closed issues for the recurring requests pipelines should decrease with time (from the first quarter that the process is released) on the cumulative flow diagrams.

## Supporting Documents
- [Discovery Issue in Github](https://github.com/department-of-veterans-affairs/va.gov-team/issues/543)
- 5/22/19: [GA Access Issue template](https://github.com/department-of-veterans-affairs/va.gov-team/issues/543) - vets.gov-team repo created
- Request GA Access. Previous process: https://github.com/department-of-veterans-affairs/vets-external-teams/blob/master/Request-Reviews/request-google-analytics.md#request-google-analytics
- [Original Discovery](https://docs.google.com/document/d/1GQQFx6lhWmJlpLbfBdJxrZFoUjDSeUaV2l0NJ1vchPE/edit#heading=h.tcgsd82scnl6)
- [Analytics Reporting Request Aggregation](https://docs.google.com/spreadsheets/d/1jeiXuynfbwVBa0O9JsYS5SCU8Clroea_8kkKm6W96OU/edit#gid=0) -7/16/19
- [Analytics Requests Miro Board](https://miro.com/app/board/o9J_kxRELus=/)
- [Google Tag Manager Overview](https://docs.google.com/document/d/1MlKWlW2MMVdnRGcvqDgp9AgXlVY9O9ulW6uxysXO1Ds/edit?ts=5d2f7e3e)
