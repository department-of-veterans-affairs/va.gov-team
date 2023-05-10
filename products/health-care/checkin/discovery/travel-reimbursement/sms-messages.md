# SMS Messages for Travel Reimbursement Claims

## Description 

During online check-in for a VA appointment, if Veterans answered "Yes" to all travel reimbursement questions and were successfully checked in to their appointment, then VA Notify will deliver an SMS message to the Veteran with the status of thier claim submission. 

## User Flow 

[Download user flow](https://github.com/department-of-veterans-affairs/va.gov-team/files/11442793/eCheck-in.w.Travel.WF_2023-05-10_14-11-04.pdf)

![eCheck-in w Travel WF_2023-05-10_14-03-28](https://github.com/department-of-veterans-affairs/va.gov-team/assets/101129355/2468c1e8-e4f3-4a64-8a9b-142f195811db)

## SMS Messages

- Success response
     - We received your travel pay claim for {{ DATE }}. Your claim number is {{ CLAIM NUMBER }}. Check your claim status at https://va.gov/accessva-travel-claim
- Claim already exists in BTSSS 
     - You already filed a travel pay claim for your appointment on {{ DATE }}. Check your claim status at https://va.gov/accessva-travel-claim 
- There was a system error  
     - We’re sorry. We couldn’t process your travel pay claim. File your claim online within 30 days at https://va.gov/resources/how-to-file-a-va-travel-reimbursement-claim-online/ 
