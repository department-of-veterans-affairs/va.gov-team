# Cross-team kickoff agenda to support travel reimbursement for past appointments on VA.gov

Date: Tuesday, July 30, 2024

## General MVP scope

- **[Appointments/Check-in Team] File a BT claim from Appointments on VA.gov:** Veterans have the ability to start the process of filing a beneficiary travel (BT) reimbursement claim for an “eligible” appointment from their past appointments list on VA.gov. E.g., an in-person appointment that was “completed” yesterday or up to the previous 30 days and hasn’t had a BT claim already filed for this day _and_ at this facility (using the BTSSS Get Claim Status API). 
   - “Completed” is in quotations because a BT claim can be submitted to BTSSS even if it’s not in a CHECKED-OUT status in VistA. (BTSSS rules engine picks up the process from this point.)
   - If there has not been a claim already filed for today at that facility, then navigate the user to the mileage-only BT claim form flow on VA.gov. 
- **[BTSSS Team] File a BT claim form flow on VA.gov:** When a link is selected from a past appointment on Appointments on VA.gov, the Appointments application will pass the patient ICN and appointment date and time to the BT claim flow tool. Veterans will be able to file a mileage-only claim for that appointment, which will then be routed into BTSSS for processing. 
- **[Appointments/Check-in and BTSSS Teams] Check a BT claim status on VA.gov:** Veterans have the ability to check the status of their BT claim on VA.gov with the VA.gov Travel Reimbursement Status tool (not to be confused with the Benefits Claims Status tool).
   - In addition, there will be a link to navigate to the VA.gov Travel Reimbursement Status tool from past appointments on Appointments on VA.gov. When the appointment detail page loads, the BTSSS Get Claim Status API needs to be hit to determine if a Veteran has filed a claim for the day at that facility. If there has been a claim already filed, show information to the Veteran to review information on VA.gov about BT eligibility and how long they have to file after an appointment. 
   - Note: this scope **_does not_** include displaying a BT claim’s status on the appointment detail pages. E.g., In Review, Submitted, Ready for Payment, Paid, Denied, etc.
 
### Eligible past appointment types

[Appt type documentation](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/appointments/va-online-scheduling/feature-reference#appointment-details-views)

- In-person appointments
- In-person vaccine appointments 
- Video at a VA facility appointment

  

## Existing design and research artifacts 

- **Userflow:** [User flow for filing a BT claim from past appointments on VA.gov](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1722263210448/33062955940eb08d097dbd88a8dc98488ac2ffcc?sender=u37bb983bd3fc3cc00c7d3286) _Added 07/29/2024_
- **Form wireframes:** [Up-to-date designs](https://www.figma.com/design/pnR05o7NPJDS0KFUSQ0eE3/LoROTA-Travel-Reimbursement-%7C-PCI?node-id=3592-4824&t=JbmPVn8Znw5BOZVZ-1), with BTSSS starting on the [form intro page](https://www.figma.com/design/pnR05o7NPJDS0KFUSQ0eE3/LoROTA-Travel-Reimbursement-%7C-PCI?node-id=3593-3077&t=JbmPVn8Znw5BOZVZ-1).
   - If SMS messages are going to be used to let Veterans know if the claim was or wasn’t successfully saved in BTSSS, then some of the links in the messages (from the Figma file) might need to change, e.g., to navigate users to the new VA.gov Travel Reimbursement Status tool.
- **Appointment detail pages on VA.gov wireframes:** The [appointment detail page wireframes](https://www.figma.com/design/pnR05o7NPJDS0KFUSQ0eE3/LoROTA-Travel-Reimbursement-%7C-PCI?node-id=3594-8284&t=JbmPVn8Znw5BOZVZ-1) will get updated as part of this process based on scope changes since the initial research was conducted.
- **Research:**
  - [2022-12 Patient Check In Travel Reimbursement Veteran Intercept at Wilkes-Barre](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/checkin/research/2022-12%20Patient%20Check%20In%20Travel%20Reimbursement%20Veteran%20Intercept%20at%20Wilkes-Barre)
    - Method: On-site UAT for mileage-only travel reimbursement pilot release
    - Path tested: Text check-in > Receive check-in link > Complete check-in + travel flow
  - [2022-12 Patient Check In Travel Reimbursement Staff Interviews at Wilkes-Barre](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/checkin/research/2022-12%20Patient%20Check%20In%20Travel%20Reimbursement%20Staff%20Interviews%20at%20Wilkes-Barre)
    - Method: On-site staff interviews
  - [2023-04 Unified Check-In Experience Usability Study](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/checkin/research/2023-04%20Unified%20Check-In%20Experience%20Usability%20Study)
    - Method: Usability testing for unified check-in flow, including mileage-only travel reimbursement screens
    - Path tested: Text message reminder > Appointment list > Complete check-in + travel flow from task card or details page
  - [2023-11 Past Appointments Travel Reimbursement Generative Usability Study](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/checkin/research/2023-11%20Past%20Appointments%20Travel%20Reimbursement%20Generative%20Usability%20Study)
    - Method: Questions around travel reimbursement, claim status exercise, and usability testing for filing a mileage-only travel reimbursement claim for a past appointment
    - Path tested: Email reminder/notification > Appointment list > File a mileage only claim from task card or details page


### Other resources

- [Service blueprint for filing travel reimbursement at Oracle Health facilities](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1707427471672/75fb6b9eea27c7b854e8b31c0e9017e2a54bb95a?sender=u37bb983bd3fc3cc00c7d3286)

## What's in progress from BTSSS?

- VA.gov Travel Reimbursement Status tool: https://staging.va.gov/my-health/travel-claim-status
 
## Collab cycle process

- Plan to use one [collab cycle ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/87696).
- Schedule Design Intent when userflow is updated.

## Release planning

- IVC might want to do VISN by VISN pilot or rollout.
- Released before EOY 2024.
- Provide OCTO an update on timing once teams are ready to share. 

## Miscellaneous

- CAIA support team is up to date: Laura L., Sara S.
- CAIA is aware for the need to create a Resource page on VA.gov to create awareness for feature. No ticket has been submitted to date. 

## Question log 

| Question | <br><br>Answer &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;|
| ------------------- | ----------  | 
| Can we deeplink to a specific claim? If so, what's the structure of the url parameters and how do we determine what values to include? And, should this be considered for MVP depending on level of effort? |  Not for MVP. _(Confirmed with Micah and Cara on 07/30/2024)_ |
| What's our plan for research needs? |  In-person Veteran intercept and staff interviews due to the need to test the end-to-end experience, including how BT claims are appearing in MS Dynamics for staff. In addition, include links to past research in collab cycle ticket, while making note of number of AT users that have participated. |
| How do the Medication Review changes impact the Appointment Detail Page designs?<br><br> | TBD. |
| How are we planning to roll out this feature? Ayush to discuss with IVC during BT/Staff/API recurring meetings. E.g., VISN to VISN rollout? | Cara and Micha mentioned Mark Dewey would like to plan a single facility pilot. _Updated on 07/30/2024_<br><br> |
| Knowing that Appointments/Check-in has language translations for the BT question workflow, does BTSSS want or plan to use those? | Most likely not for MVP. _Updated on 07/30/2024_ |

## To do's

| To do | <br><br>Status &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;|
| ------------------- | ----------  | 
| Add links to research findings to design artifacts section. [Christina]<br><br> | Complete<br><br> |
| Identify and update latest BT workflow wireframes link (not including appt detail pages) in the design artifcats section. [Christina]<br><br> | Complete<br><br> | 
| Set up bi-weekly with Appts/Check-in and BTSSS Teams. [Ben]<br><br> |  Scheduled first meeting. <br><br>| 
| Set up design/research meeting to discuss userflow and any other design-related next steps. [Ben]<br><br> | Complete<br><br> | 

## Communication plan 

- Bi-weekly collaboration meetings
- Collaboration conversations should take place in DSVA in #travel-pay (which allows Mobile App to stay in the loop)
- Ayush to continue attending BT/Staff/API recurring meetings and provide progress updates on initiative. Add in other teammates when needed for demos, etc. 


