## May 4, 2022  Internal 10-10 team - discussion on Mulesoft - Queue proposal from Stakeholder

### Questions from the team:

#### **What are the requirements? What problem are we trying to solve?**
- **Initial problem (to implement Mulesoft)**
- **Current problem (now that MS is in place)**

Note on what is CARMA: Salesforce customized a system - CARMA - for Caregivers- [GH Notes](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/caregivers/Transition%20hub/In%20progress%20features/Mulesoft%20integration.md)

After reviewing the 2nd of 3 paths in the [Mulesoft Queue business options document](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/caregivers/Mulesoft%20Integration/Queuing/VA.gov%20Mulesoft%20Queue%20Business%20Options_04.29.2022.pdf)
1. How long does Mulesoft plan to make attempts to Salesforce?
     - Where would these success/fail emails/texts come from? (VA Notify?, Salesforce?)
     - How would we know if applicants prefer an email over text, etc?
          - If email, we may need a loopback to the email field so they can provide it (if they didn't before)
     - Note: If submission fails, applicant is required to start the application over again (does not save)

2. Why do we need to change from 2 calls to 1 call?
     - This would be a **_significant_** change to our Backend system

<details>
     
<Summary>**The questions in this dropdown came from Option 1, which is not in scope**</Summary>
     
>- Where does this (successful submission) ID Number come from? 
>     - We do not display an ID number with confirmation today
>- What would the applicant do with the ID Number?
>     - They can only call a representative today
>     - There is not a place to enter this ID Number online
>     - Would there be a phone number with the ID number to check on status?

</details>

---

Why was Mulesoft implemented to begin with?
- Mulesoft was implemented to maybe assist with a future endeavor of a Caregiver portal
- It was also supposed to assist with submission failures with CARMA/Salesforce
- We might be missing some information about the process used by the application processors
- We may be the only team using Mulesoft?
- We should ask the stakeholders for more information on this

>**Email response from Mili Ridoutt 5/9/22:**
>The overall goal is to give the users submitting an application a better experience and to ultimately reduce the number of failures to zero when they are submitting a 10-10CG. Queuing the data gives us an opportunity to present the user with a response (even if the system may need to continue to process things in the background) and will allow us to implement retry logic in cases where we encounter failures due to connectivity or timeout issues. Happy to discuss further on Friday's standing call if that works for you all. 

### Action Items
- [x] Heather will send note to CG team requesting a presentation/explanation to help us understand what problem was being resolved by implementing Mulesoft, and now that Mulesoft is implemented, what problem is now occuring that this new solution is being presented?
- [ ] Once we are in the discussion with the Caregiver teams, we can ask some of our questions that might inspire more thoughts on the solution, keeping the applicant experience in mind.
