
# Renewals on VA.gov

---
## Outcome Summary
Allow users to request a renewal of a prescription directly from within the Medications product on VA.gov to improve CSAT and user adoption of Medications on VA.gov. 

**Related/Associated product(s)**
[Medications product outline ](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medications)

## Problem
* Today on VA.gov when a prescription has 0 refills left or is expired, users are unable to refill the prescription and must request a renewal from their prescriber.  For these prescriptions today we give users a message with a link to the card to "Learn how to renew prescriptions".  This takes them to the landing page where they are given the option to renew by phone or by secure message.  If a user chooses to send a secure message they need to ensure they include a list of 7 details from their prescription information, that they already have today in the medications product.  This puts a heavy burden on the user to copy the information and go between multiple places on the patient portal.  
* Today MyVA Health users have the ability in the Medications product to request a renewal with this information pre-populated into a secure message directly.  When we integrate with OH we need to ensure users have the ability to renew a prescription directly from the medications product.  We also want to use this opportunity to look into improving this experience for the providers who need to approve of the renewals.
* In Medallia feedback on both VA.gov and MHV Classic this is the number one requested feature and would help users get their prescriptions more quickly.  This would directly improve the following OCTO OKRS: 1.1 CSAT (customer satisfaction) for our web products have increased by 5 points. 
1.2 Number of transactions processed using our products have increased by 25%. 
1.3 All new products have a faster transaction time than those they replaced. 


## Desired User Outcomes
- Faster, more direct way to request prescription renewals.  
- Users know how to get a medication they are prescribed no matter what the current status is.
- Users can accomplish all of their medication tasks within the Medications product of the patient portal.

## Undesired User Outcomes
- Requests for renewals get "stuck" somewhere in the system and the user does not get feedback on their request.
-
## Desired Business Outcomes
- Less burden on pharmacy's automated refill line
- Improved provider experience when managing/responding to secure message renewal requests. 
- Veterans get their prescriptions in a timely manner. 
- Veterans are able to accomplish all medications tasks within the patient portal.

## Undesired Business Outcomes
- More burden is placed on the providers to respond to renewal requests. 

---
## Measuring Success

### Key Performance Indicators (KPIs)
> 💡 *VA.gov products measure success against Ease of use, Service Completion, Trust/Satisfaction, Health.*<sup>1</sup>\
> 💡 *Identify balancing metrics to ensure you're not bringing about undesired outcomes.*

- Product KPI | Baseline | Target | Link to data source (e.g. GA, Domo)

---

## Discovery
### Assumptions/Risks
> *Identify risks related to usability, value to users, feasibility/implementation, and viability given organizational constraints<sup>2</sup>. 
> Indicate how you'll validate/test against these risks. Inspired by [SVPG's Four Big Risks](https://www.svpg.com/four-big-risks/).*

- **Value Risks** (will people use it): 
  - .
- **Usability Risks** (can people figure out how to use it):
  - .
- **[Technical] Feasibility Risks** (can we build it with available tech/data):
  - Examples:
    - Upstream/Downstream API/Data availability and reliability
    - Site performance impacts (see [Google Lighthouse](https://developers.google.com/web/tools/lighthouse), [WebPageTest](https://www.webpagetest.org/), #-daily-lighthouse-scan)
  
- **Organizational Viability Risks/Constraints** (will there be a positive organizational impact):
  - Examples: 
    - VA stakeholder testing, marketing, compliance requirements 

### What're you building
> *What's in scope for you to build with this initiative? Describe key features/flows. 
> *What have you explicitly decided to **not** include and why?*
> *How does this solution address your Assumptions & Risks?

#### Go-to-market 
> *What marketing, outreach, or communications are necessary for this product to be successful? Which groups/orgs are necessary to make this happen?*

--- 

## Launch Planning
### Collaboration Cycle
> 💡 *Use for any Collab Cycle tracking, questions.*

- [Kickoff ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/93196)

### Timeline 
> *Describe any major milestones for this initiative including organizational, legislative, etc. constraints.*

* [Link to Release Plan for this Initiative](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/release-plan-template.md)

#### Initiative Launch Dates
- *Target Launch Date*
  - Spring 2025
- *Actual Launch Date* 
  - tbd

---
   
## Screenshots

### Before
MHV on VA.gov today
![image](https://github.com/user-attachments/assets/ad701bf9-860c-4530-80a7-c898710c4516)
![image](https://github.com/user-attachments/assets/96073339-7262-4b40-81f0-0792a6566048)
![image](https://github.com/user-attachments/assets/d002b348-77ce-49a7-b694-7d91dc64a93d)

MyVA Health today 
![image](https://github.com/user-attachments/assets/81759577-522e-4715-9e8a-7f2e2d122df1)
![image](https://github.com/user-attachments/assets/dd18f890-2ec8-4663-8809-7301eb21e494)
![image](https://github.com/user-attachments/assets/dd819889-a295-49b6-8d7f-530e6bd705bd)

### After

---

#### Communications
- Team Name: Medications on VA.gov
- GitHub Label(s): 
- Slack channel: #mhv-medications-devs, #mhv-medications-rx
- Product POCs: Kaitlin Fink

#### Stakeholders
- OCC: Eric Spahn (RX), Patty Henry (SM) (if SM is the desired solution) 
- PCP SME Work group: Lead by Meredith Joesphs, Organized by Bresha Lipscomb

---
