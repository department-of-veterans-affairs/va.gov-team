# Submitting Travel Claim on VA.gov and VAHB Mobile App

## Goals

- Structure the Sequence to support complex claims
- Create an observable flow that does not let and claims fall through the cracks
- Provide a re-usable workflow for the other applications (namely VAHB)

## Questions with answers

Q: Which API is responsible for building the claim?
- Vets-API will "build" the claim to submit to the Travel Pay API
- The steps to submit a SMOC claim are:
  - Create claim (requires the BTSSS internal appt ID)
  - Attach mileage expense
  - Submit claim

Q: Where can check for eligibility of Veteran? Do we need to?
- Because the business rules may change and/or vary, we only handle submission of the claim, the Rules Engine and Travel Clerks will determine eligiblity of the Veteran and approve or deny the travel claim accordingly.
- Currently the Veteran must already be in the BTSSS system to submit a claim
  - Travel Pay API team is working to allow a Veteran who is not already a contact in the BTSSS system to create an account in order to submit a claim from VA.gov/VAHB.

Q: Where can check for eligibility of appointment Do we need to?
- Must submit within 30 days of the appointment
- However, only certain types should see the submit link on VA.gov/VAHB App:
  - In Person Appointment (at VA facility, Community Care not eligible to submit through VA.gov/VAHB)
  - Video Visit at a VA Facility
  - Initial C&P exams
  - Possibly others, still gathering requiements from VTP
- For initial SMOC MVP: A Veteran must be able to submit for every appointment (even if on the same day at the same facility)
  - See above re: the Rules Engine and Travel Clerks handle approving/denying the claim.
  - Per VTP, there are cases where a Veteran can be eligible for reimbursement for multiple trips in a day.

## Open questions

Q: What do we do with partially submitted claims?

Q: Should we use the forms system?
- For VA.gov, still under review
- VAHB does not support the Forms Library.

## Next steps

- Align on submission sequence
- Create and prioritize requirements

## Documents 


TBD
