# Mar 3, 2025
# CR# VES-24470 - Create Registration Only Form on va.gov - Status & Requirement Discussion

- **Attendees**:
     - Heather Justice
     - Emily Brown
     - Jessica Stump
     - Patrick Bateman
     - Frye, Ashuntus L. 
     - Muthupalaniappan, Meenatchi M.
     - Campbell, Michael E.
     - Orem, Ruth N.
     - Edwards, Shawn R.
     - Mitch
     - Jess Woodin
     - Brandon
     - Renata

## Registration
- **Shawn** goes over background
- ![image](https://github.com/user-attachments/assets/bcf5dc61-6edb-4575-b55f-cbe85e8fdbe1)

* **Patrick** - what is User Need here?
    * Why would a Veteran land here?
    * **Shawn** - If they have ACA, can register.
    * **Patrick** - We need to understand how a Veteran would know that they need to only register for care, How does a Veteran know they would Register vs Enroll?
        * As a Veteran, I need to .., So that I …
    * **Patrick** - Is there a process for Veterans to direct them here (to register)?
* **Meena** - Concerned because VES has already done the work (in SQA)
* **Patrick** - Provided example of Veteran registering at time of scheduling appointment
    * Having Reg endpoint is great, but we dont think we have a product built around it
    * Putting a form on it does not seem like the right thing to do
* **Shawn** - Need to have the business involved
- [ ] **HDJ - Action item** to set up meeting with Simone & Team

## NoK/EC
* Ready and in SQA smoke testing this week!
    * Once done, will be ready for consuming and testing
* VA Profile using this, which would call this new service
* Also update will be pushed to VA Profile
* Whatever JF says to do, that is what our team can do
* In the past, for this kind of Associated Person info has gone thru VA Profile, reading off VES and updating via VA Profile
- [ ] **Action Item**: Confirm with Josh F: Do we call VES? Or do we call VA Profile that updates VES?

---
# Notes from Shawn Edwards
**Description (From VES CR):**



* Desired Functionality: The online form will be a short form to collect the Veterans information Name, SSN, DOB, Address, Phone Number, Military Service Dates and Reason for Registration Only. This information will feed into VES and place the Veteran in a Registration Only status if they do not wish to enroll. If the Veteran is already known to the system, we will capture and update existing information if it is different.

**Discussion Items:**



* VA.gov Status
    * Completed review of Veteran interests and ~25-27% did select the registration option on the online form.
    * There is not a lot of information for Veterans to understand the difference (Registration vs. Enrollment).
* VES Status
    * Model is built and ready to consume.
* API Integration Testing
    * VES can complete internal testing and then decide how to proceed with building the front-end solution on va.gov.
    * Action Item: VES team will provide Swagger-UI endpoint to the va.gov team.
        * [https://dev.ves.va.gov/ves-registration-svc/swagger-ui/index.html](https://dev.ves.va.gov/ves-registration-svc/swagger-ui/index.html)
        * Done
* Path forward
    * VA.gov team needs a user story for why the Veteran would choose to register vs enroll.
    * Intent is to make sure the Veteran is aware of why they are choosing to enroll.
    * **Action Item**: VA.gov team to schedule additional meetings with stakeholders and will include VES team as needed.
        * Done
* Associate (EC/NOK) Service
    * VES service is ready in SQA.
    * Ruth: Intended patter is for consumers to call VA Profile and then VA Profile will interface with VES. VA Profile doesn’t have any current consumers, but VA.gov could be one instead of going directly to VES.
    * VA.gov team will confirm with Josh F.
