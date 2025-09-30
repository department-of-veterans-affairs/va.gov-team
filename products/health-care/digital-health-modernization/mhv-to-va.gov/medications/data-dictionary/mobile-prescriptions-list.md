# VA: Health and Benefits Mobile App | Prescriptions list

<img src="images/mobile-prescriptions-index.png" width="270" />

## VA: Health and Benefits Mobile App | PrescriptionListItem Component

[source code](https://github.com/department-of-veterans-affairs/va-mobile-app/blob/develop/VAMobile/src/screens/HealthScreen/Pharmacy/PrescriptionCommon/PrescriptionListItem.tsx)

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
| va facility | `facilityName` |
