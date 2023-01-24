# Thoughts: 

> some high level thoughts around the technical implementation of the travel reimbursement tool

https://github.com/department-of-veterans-affairs/btsss-claim-ingest-svc

- Do we need to have on Azure or can we port this over to AWS?
  - a port would include a rewrite of the code to not be a proof of concept? 
- Is this appointmentid unique across systems? https://github.com/department-of-veterans-affairs/btsss-claim-ingest-svc/blob/master/ClaimIngest/ClaimIngestSvc/Model/Crm/BtsssAppointment.cs#L26


- A ton of API calls. 

```C#
// 1 call:To BTSSS, GET service settings
BtsssExternalServiceClient externalServiceClient = crmExternalClientService.CheckAccess(request.ClientNumber,httpClient);

// 0 Calls
CheckAppointmentDate(request.Appointment.AppointmentDateTime);

// 1 call:To BTSSS, GET Veteran by ICN
// 2 call:To BTSSS, If the veteran does not exist POST it and then GET it
// 1 call:To BTSSS, If creation fails, DELETE it  
BtsssContact contact = GetContact(request.ClaimantID, httpClient);

// 1 call: to VIA, to GET appointments (something in dynamics?), this is interesting. Things don't make sense
// 1 call: To BTSSS,  to GET appointmenst
BtsssAppointment appointment = crmAppointmentService.GetAppointment(contact, (DateTime)request.Appointment.AppointmentDateTime, httpClient);

// 1 call: To BTSSS, to POST claim
// 1 call: To BTSSS, to GET claim
BtsssClaim claim  = crmClaimService.CreateClaim(appointment, externalServiceClient, httpClient);

// 1 call: to BING, to get mileage
float mileage = spatialFunctionService.GetDistance($"{contact.Address1Latitude},{contact.Address1Longitude}", $"{appointment.BtsssFacility.BtsssGeoLat},{appointment.BtsssFacility.BtsssGeoLong}");

// 1 call: to BTSSS, to get milage rate
// 1 call: to BTSSS, to POST milage cost for the the claim (e.i, I travelled 100 at 0.50 per mile, so I get 50 back)
// 1 call: to BTSSS, to GET milage expense for the the claim
crmMileageExpenseService.CreateMileageExpense(mileage,contact, appointment, claim, request.MileageExpense, httpClient);

// 1 call: to BTSSS, PATCH to update the claim with the mileage expense and FireRulesEngineCounter by 1(?)
crmClaimService.SubmitClaim(claim, httpClient);
```

Total calls: 14 worst case, 11 best case