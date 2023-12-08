# SMS Messages for Travel Reimbursement Claims

## Description 

During online check-in for a VA appointment, if Veterans answered "Yes" to all travel reimbursement questions and were successfully checked in to their appointment, then VA Notify will deliver an SMS message to the Veteran with the status of their claim submission. 

The response is delivered through SMS because the response time from the Beneficiary Travel Self Service System (BTSSS) can be greater than the time expected for a web page to load.  

## User Flow 

[Download user flow](https://github.com/department-of-veterans-affairs/va.gov-team/files/11442793/eCheck-in.w.Travel.WF_2023-05-10_14-11-04.pdf)

![eCheck-in w Travel WF_2023-05-10_14-03-28](https://github.com/department-of-veterans-affairs/va.gov-team/assets/101129355/2468c1e8-e4f3-4a64-8a9b-142f195811db)

## Design

Veterans will be directed to the following web page at the end of the check-in user flow, which includes information about receiving a text message. 

[View up to date Sketch design](https://www.sketch.com/s/c3e590f9-898d-4771-a3d4-9464ece91582/v/Z7xlPa/a/dglkPpm)

<img width="175" alt="O4_8_1 Confirmation" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/101129355/4d3ffb8f-544d-4ae9-9bad-9b56440aeac8">


## SMS Messages

[Download text messages](https://github.com/department-of-veterans-affairs/va.gov-team/files/11518194/SMS.Messages.for.Travel.Reimbursement.Claims.1.docx)

- Success response
     - We received your travel pay claim for {{ DATE }}. You can check the status of your claim ending in 1666 at https://va.gov/accessva-travel-claim.
- Claim already exists in BTSSS 
     - You already filed a travel pay claim for your appointment on {{ DATE }}. Check your claim status at https://va.gov/accessva-travel-claim. 
- There was a system error  
     - We’re sorry. We couldn’t process your travel pay claim. File your claim online within 30 days at https://www.va.gov/health-care/get-reimbursed-for-travel-pay.

