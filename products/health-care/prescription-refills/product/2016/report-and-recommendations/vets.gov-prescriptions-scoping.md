# Prescriptions Background and Scoping

### Who are we?
- Team Kudos (Kelly, Alex, Christine, Marc, Kam, Tiffany, Eugene)
- Gina (Assigned 75% until UX work is complete)
- Stacey (50% - potentially decreasing over time as need decreases or as additional resources are onboarded)
- Mary Ann (as needed for UX research)

### Why is this a high priority for vets.gov?
One of the most common online Veteran interactions with the VA is refilling, viewing, and tracking prescription medications.  Today, through MyHealtheVet, 1.3 million prescriptions are refilled each month. We're moving this functionality to vets.gov to build a centralized, cleaner, and easier prescription experience.  

### What we are building?
The first product we will ship needs to have the following capabilities:

- Veteran log in, log out, and account management (dependent on IAM project)
- Refill/renew prescriptions 
- Prescription history
- Prescription details (including tracking information) 
- Secure messaging with your doctor
- Content supporting veteran needs related to prescriptions

Without all of the above, we will not go live.  

Following iterations will likely have:

- Approved Veteran caregivers can log in and perform the appropriate actions
- Ability to download health records
- Shipment notifications (via secure message or email)
- Health Assessment

### What are we not building/migrating
We will **not** be building or migrating the following from the current product and/or the prototype:

- HealtheLiving Assessment
- All articles and content (we will write new content for any veteran needs we identify)
- Ability for user to input their own health information or over the counter medication (this needs to be communicated to stakeholders)
- Appointment tracking

### When will this be ready?
- It's too early to answer this question. To get a full answer we need:
  - To better understand login and how this will interact with MyHealtheVet id's.
  - Secure messaging. What API exists? How dependent is this on current code or processes? What features do we want to have (inbox, outbox, drafts, folders?)
  - To better understand the API's. Are they production ready? what load has been tested on them? 

 We have committed to having a better answer to this by June 6, 2016. 
  

### Where will this live?
- The landing page will be deployed at https://www.vets.gov/prescriptions.  Other URLs will be specified as we design the product, but likely will exist at places such as https://www.vets.gov/prescriptions/user/{user_id}/refill. 

