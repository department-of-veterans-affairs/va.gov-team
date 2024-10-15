
# Renewals Initiative Brief

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

### Before- MHV on VA.gov
![image](https://github.com/user-attachments/assets/ad701bf9-860c-4530-80a7-c898710c4516)
![image](https://github.com/user-attachments/assets/96073339-7262-4b40-81f0-0792a6566048)
![image](https://github.com/user-attachments/assets/d002b348-77ce-49a7-b694-7d91dc64a93d)


### Before- MYVA Health
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


<details>
<summary>Notes from PCP Meeting 8/28</summary>
  Questions: 
- How are you getting renewal requests today?
- What are your frustrations/concerns with how that works today?
- What would you want to make sure is included in a renewal request that is sent to you?
- Are any of you working at OH facilities today?
- Any issues for those renewals you’re getting today?
- What concerns do you have?

  Here are rough notes from that discussion: 

Dr. Scott Pawlikowski at Haines Medical Center- 
Notified of med refill in a variety of ways
Audiocare at Haines- automated view alert for proposed orders “right click renew”
some things not available for right click renew, like high risk meds
this is the most preferred by providers, quick, easy no additional steps by the provider
can include a note from pharmacy to request renewal
Secure message
Electronic messaging system- Message manager - only for VISN 12
Would be nice if the system automated the request and sends it to the right provider
If receive as a “view alert” can forward to the prescriber, can forward as a message manager can forward, if in MHV I respond back to the patient, “I’ll communicate this request on your behalf to your provider” then find that message in chart and put an addendum to it and put to the prescriber
Sometimes that prescriber doesn’t reply right away and then it’s hard to remove yourself from future refill requests
When renew a med in MHV there is a lag because the pharmacist needs to approve/recieve (1-2 business days) “pending”
Patient doesn’t see it in the system and then reach out again
Created guidance
PADR requests (PRN medicines)prior authorization drug request
May be years before the tube empties, will take a long time to finish, very very expired
So cumbersome to do that
Very consuming to find old orders
For expired, non forumlary it’s going to take a long time

Dr. Scott Hagan in San Diego-
1/3 of incoming messages to PCP triage groups are med renewal request, if could eliminate that that'd be great
His VISN has a separate triage group called “Where’s my med” they go into the chart and flag the provider if it needs a renewal
And tell veterans the recommended ways to renew
3/4 of the time uncomplicated and don’t need to go back and forth with the veteran
Better system to sign off in the chart
Sometimes flagged on a med renewal request from call center staff, hard to remove the action out of our inbox
B/c MHV isn’t part of the CPRS chart there is some concern in manually typing into CPRS and finding their chart
Dr. Christine Erickson -
MHV - not everything is sent to PCP
Audiocare sends message to the previous prescriber/ordering provider
Ask for everything at the same time in one message to one person
Sending to ordering provider would be the best way but there are sometimes where that doesn’t make sense
In MHV I often assign to another team, MHV doesn’t auto assign to anyone, lots of time not attached in secure messaging (some of those triage groups aren’t available)
Dr. Nilesh Shaw-
Request to send messages to the same message center pool that audio care does
What type of meds should have automated renew ie. Only those expired in last 120 days?
Proposed orders
Right click renew is the best for providers (CPRS)
In OH today (MyVA Health/Millennium) -
No easy way for a provider to renew
Provider needs to re-write the order, or go from the patients med list
OH loves to have multiple ways to do the same thing
If it needs renewal it would be in active and available to renew
Older meds must change a filter to find an older one
No in-active Rx are allowed to be renew
What is the criteria for renewal request-
Include last fill date
Only meds that have expired in the last 120 days
PRN
Summary: 
Renewal should come in in something easily signed, structured format for providers, SM is not the best way to do that today.

---
