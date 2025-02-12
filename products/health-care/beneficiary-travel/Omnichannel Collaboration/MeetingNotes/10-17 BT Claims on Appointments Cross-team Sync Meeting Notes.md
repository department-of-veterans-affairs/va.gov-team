# Agenda 10-17-2024

- New updates from OCTO/IVC/VTP or others?
  - NONE
- Team Progress
  - Travel Pay
    - Vets-api work to determine if claim has already been submitted (Liz)
      - Target early to mid November for ready for CIE to integrate with (Mark would have info for test users in BTSSS)
    - Appointments API work (**Liz to reach out to Simi**)
      - Still need to figure this out
    - New Claim Form
      - A few blockers (on BTSSS side)
      - Looking for target for integration of early to mid November
    - Claim Status Tool
      - In production
  - CIE 
    - Frontend work to start 10/16 ([Wireframes](https://www.figma.com/design/RzugGEmu4drhCSHTyQ6hjl/Simple-mileage-only-travel-pay-claim-submission?node-id=2135-3&t=EB4SQXyZ7hTp0tFj-0))
- Is EOY for production still viable?
  - Ayush working with Kristen/Mark on potential blockers (work with external API team)
- Any collab cycle touchpoints or CAIA support to prepare for?
  - None at this time
- Questions
  - Which team & engineer are doing the backend vets-api work?
    - Travel Pay team (Liz) - the appointments team will have to step in and make some API calls as we wrap up the back-end work (see above), but the TP team is doing the majority of the work.
  - What feature flags are being used for this feature?
    - travel_pay_submit_mileage_expense
    - travel_pay_view_claim_details
  - When will there be a link in staging available for the new claim form?
    - ~Early to mid November; this is currently unclear - construction of the flow is still in progress; we are anticipating mid-November
  - What variables need to be passed to the new claim form? and how? (i.e. not putting PII in URL)
    - Need Appt Date/Time only
      - Could pass in the URL, but needs to be masked before it gets to GA or DD
      - Could store in Redux 
      - Pull patient from logged in user  
    - Currently, we’re able to pass on appointment date and time. In the future, we may also be able to have the internal representation of the appointment (might be an appointment ID or some other marker). Currently: PII in the URL is acceptable as long as it’s not stored in Datadog and Google Analytics; we will need to mask the URL before it gets to DD and GA.
    - Where do we document data flow, api responses, etc etc ?
      - Vets-api API responses are in swagger documentation (for the endpoints that we will create) - it’s hosted, but it’s unlikely that you will need to know the API responses here. As far as data flow goes, the information is hosted on the TP github
- Action items
  - Liz to reach out to Simi on Appointments API work
  - John reach out to Dan to determine what the URL of the form is & how to pass date/time
  


