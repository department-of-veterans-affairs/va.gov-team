# VA: Health and Benefits Mobile App | Prescriptions details

<img src="images/mobile-prescriptions-show.png" width="270" />

## VA: Health and Benefits Mobile App | PrescriptionDetails component

[source code](https://github.com/department-of-veterans-affairs/va-mobile-app/blob/develop/VAMobile/src/screens/HealthScreen/Pharmacy/PrescriptionDetails/PrescriptionDetails.tsx)

[vets-api code for endpoint used](https://github.com/department-of-veterans-affairs/vets-api/blob/master/modules/mobile/app/controllers/mobile/v0/prescriptions_controller.rb)

Endpoint used `/v0/health/rx/prescriptions`

| Name/Label | resource.property |
| ---------- | ----------------- |
| name | `prescriptionName` |
| rx # | `prescriptionNumber` |
| status | `refillStatus` |
| instructions | `instructions` |
| refills left | `refillRemaining` |
| fill date | `refillDate` |
| quantity | `quantity` |
| expires on | `expirationDate` |
| ordered on | `orderedDate` |
| va facility | `facilityName` |
