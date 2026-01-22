# **Mobile: Overpay MVP Release Plan**

## **Step 1: Development**

List the feature toggles here.

| Toggle name | Description |
| ----- | ----- |
| Overpayments Feature Flag | When enabled, Veterans will be able to view and take actions on their Overpayments within the mobile App. Veterans will see the Overpayments tile on the Home tab under the Activity tile, and in the Payments tab. Once a user clicks on Overpayments they will have a new page displaying the debts list and can access the debt detail page as well as resolve an overpayment. New pages will open if a Veteran makes a payment, requests help, or disputes an Overpayment.|

## **Step 2: Validation**

---

Before enabling your feature toggle in production, you'll need to:

- [ ] Follow [best practices for QA](https://depo-platform-documentation.scrollhelp.site/developer-docs/qa-and-accessibility-testing).  
- [ ] Have your team perform as much validation in staging as possible. Validation may be challenging for some teams and systems due to downstream requirements, but the staging system should mimic the production system as much as possible.  
- [ ] Work any downstream or dependent systems proactively to ensure that the feature is ready for use once it hits production.  
- [ ] Have a go/no go meeting with the team to ensure that the feature is ready for use and signed off by each discipline and your DEPO/OCTO contact. During this meeting, you'll need to:  
  - [ ] Review the plan with your DEPO/OCTO representative.  
  - [ ] Review the release plan with your team.

## **Step 3: Production rollout**

---

## **Define the Rollback process** 

* Developer, Product Manager, and OCTO representative will monitor analytics and logging at each rollout phase. These individuals will coordinate with the Debt Management Center (DMC) to ensure the Overpayment API keeps up with the volume of requests.   
* If there is a significant increase in overpayment API errors or unexpected behavior, the team will disable the feature flag for all users. 

### **Phase I: moderated production testing (also known as User Acceptance Testing, or UAT)**

#### **Planning**

1. Working with Denise Coveyduc on finding Veterans to test in Test Flight.  
2. Work with the VA Mobile App Lead, Jon Bindbeutel to create a UAT group with the Veterans' emails within Test Flight.  
3. Testers will need to install Test Flight, select “**insert build name**” and toggle on the “**insert name**” remote configuration.
4. UAT testing is scheduled from **insert dates once confirmed**
5. Refer to our **insert UAT AC documentation** 

#### **Results**

* Number of users:   
* Number of bugs identified/fixed:   
* Was any downstream service affected by the change?:   
* Any changes necessary based on the logs, feedback on user challenges, or VA challenges? 

### **Phase II: Staged Rollout (also known as unmoderated production testing)**

We recommend that the rollout plan has five stages, each increasing the number of Veterans. This plan is a strongly recommended guideline but should only be deviated for precise reasons.

#### **Rollout Planning**

* Desired date range: **February 24 \- March 2, 2026**  
  * **Note**: For the mobile release to occur on February 24, 2026 all work needs to be finalized by the release branch of **February 11, 2026\.**  
* How will you make the product available in production while limiting the number of users who can find/access it:   
  * We will be turning on the feature flag for a small percentage of users and increasing every few days as long if metrics meet our success criteria.   
  * We will plan to check the metrics around 10:00am ET and then determine to increase at that time, so that the MFS and FM team can immediately identify any issues.   
* **What metrics-based criteria will you look at before advancing rollout to the next stage ("success criteria")**?: **Work in Progress**  
  * Debts Controller Latency (measure of time for when the debts came through and when they are able to respond) \- Want this less than 2 seconds within a given 24-hour period.   
  * DMC Get Debts Endpoint Success (Mobile equivalent): Needs to be created
  * DMC Get Debts Endpoint Failure (Mobile equivalent): Needs to be created   
    * We will track counts of success and failure and will define 
* Who is monitoring the dashboard(s)?: Natalie Gibbons, Dave Formanek, and FM Management Team BE 

### **Stage A: Canary**

#### **Planning**

* Length of time: **February 24, 2026**  
* Percentage of Users: 10% of users

#### **Results**

* Number of unique users: \[FILL\_IN\]  
* Metrics at this stage (per your "success criteria"):  
  * Update once finalized  
* Was any downstream service affected by the change?:   
* Types of errors logged:   
* What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? 

### **Stage B: 25% of users**

#### **Planning**

* Length of time: **February 25, 2026**  
* Percentage of Users (and roughly how many users do you expect this to be): 25%

#### **Results**

* Number of unique users: \[FILL\_IN\]  
* Metrics at this stage (per your "success criteria"):  
  * Update once finalized  
* Was any downstream service affected by the change?:   
* Types of errors logged:   
* What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? 

### **Stage C: 50% of users**

#### **Planning**

* Length of time: **February 26, 2026**  
* Percentage of Users (and roughly how many users do you expect this to be): 50%

#### **Results**

* Number of unique users: \[FILL\_IN\]  
* Metrics at this stage (per your "success criteria"):  
  * Update once finalized  
* Was any downstream service affected by the change?:   
* Types of errors logged:  
* What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? 

### **Stage D: 75% of users**

#### **Planning**

* Length of time: **February 27, 2026**  
* Percentage of Users (and roughly how many users do you expect this to be): 75%

#### **Results**

* Number of unique users: \[FILL\_IN\]  
* Metrics at this stage (per your "success criteria"):  
  * Update once finalized  
* Was any downstream service affected by the change?:   
* Types of errors logged:   
* What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? 

### **Stage E: 100% of users**

#### **Planning**

* Length of time: **March 2, 2026**  
* Percentage of Users (and roughly how many users do you expect this to be): 100%

#### **Results**

* Number of unique users: \[FILL\_IN\]  
* Metrics at this stage (per your "success criteria"):  
  * Update once finalized  
* Was any downstream service affected by the change?:   
* Types of errors logged:   
* What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? 

## **Post Launch metrics**

---

Continue to check in on the KPIs of your feature at periodic intervals to ensure everything is working as expected. We recommend one-week and one-month check-ins, but this is only minimal.

### **1-week results post 100% rollout**

* Number of page views: \[FILL\_IN\]  
* Percentage of CONFIRMED users : \[FILL\_IN\]  
* Percentage of NOT CONFIRMED users : \[FILL\_IN\]  
* Percentage breakdown of NOT CONFIRMED status reasons : \[FILL\_IN\]  
* Percentage breakdown of API response codes : \[FILL\_IN\]  
* Any issues with VA handling/processing?: \[PICK\_ONE\]: yes | no | N/A  
* Types of errors logged: \[FILL\_IN\]  
* Any changes necessary based on the logs, feedback on user challenges, or VA challenges? \[PICK\_ONE\]: yes | no | N/A  
* If yes, what: \[FILL\_IN\]

### **1-month results post 100% rollout**

* Number of page views: \[FILL\_IN\]  
* Percentage of CONFIRMED users : \[FILL\_IN\]  
* Percentage of NOT CONFIRMED users : \[FILL\_IN\]  
* Percentage breakdown of NOT CONFIRMED status reasons : \[FILL\_IN\]  
* Percentage breakdown of API response codes : \[FILL\_IN\]  
* Any issues with VA handling/processing?: \[PICK\_ONE\]: yes | no | N/A  
* Types of errors logged: \[FILL\_IN\]  
* Any UX changes necessary based on the logs, feedback on user challenges, or VA challenges? \[PICK\_ONE\]: yes | no | N/A  
* If yes, what: \[FILL\_IN\]

## **Post-launch Questions**

---

## *To be completed once you have gathered your initial set of data, as outlined above.*

1. How do the KPIs you gathered compare to your pre-launch definition(s) of "success"?  
2. What qualitative feedback have you gathered from users or other stakeholders?  
3. Which assumptions you listed in your product outline were/were not validated?  
4. How might your product evolve now or in the future based on these results?  
5. What technical tasks are needed to clean up (i.e., removal of feature toggles) 

