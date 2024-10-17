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
    - A: Liz
  - What feature flags are being used for this feature?
    - One for showing details/claims and one for submitting (John has)
    - ![image](https://github.com/user-attachments/assets/5e8671f5-9e28-48a8-943c-109a70f6515d)
  - When will there be a link in staging available for the new claim form?
    - Early to mid November
  - What variables need to be passed to the new claim form? and how? (i.e. not putting PII in URL)
    - Need Appt Date/Time only
      - Could pass in the URL, but needs to be masked before it gets to GA or DD
      - Could store in Redux 
    - Pull patient from logged in user 
- Action items
  - Liz to reach out to Simi on Appointments API work
  - John reach out to Dan to determine what the URL of the form is & how to pass date/time
  


