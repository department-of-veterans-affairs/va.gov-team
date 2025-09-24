# Medications on VA.gov | Prescription Path

[`/my-health/medications/prescription/1`](https://staging.va.gov/my-health/medications/prescription/1)

![Prescription view](images/web-prescription-details.png)

## Medications on VA.gov | PrescriptionDetails Component

[source code](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/mhv-medications/containers/PrescriptionDetails.jsx)

[vets-api code for endpoint used](https://github.com/department-of-veterans-affairs/vets-api/blob/master/modules/my_health/app/controllers/my_health/v1/prescriptions_controller.rb)

Endpoint used `/my_health/v1/prescriptions/{$id}`

| Name/Label | data-test-id | resource.property |
| ---------- | ------------ | ----------------- |
| name | `prescription-name` | `rx?.prescriptionName` or `rx?.orderableItem` |
| documented on | `rx-last-filled-date` | `prescription?.orderedDate` |
| last filled | `rx-last-filled-date` | [`prescription.sortedDispensedDate`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/models/prescription_details.rb) |
| prescription number | `prescription-number` | `prescription.prescriptionNumber` |
| status | `status` | `prescription.dispStatus` |
| refills left | `refills-left` | `prescription.refillRemaining` |
| expiration date | `expiration-date` | ` prescription.expirationDate` |
| facility | `facility-name` | `prescription.facilityName` |
| pharmacy phone | `pharmacy-phone` | [`pharmacyPhoneNumber(rx)`](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/mhv-medications/util/helpers/pharmacyPhoneNumber.js) |
| instructions | `rx-instructions` | `prescription?.sig` |
| reason for use | `rx-reason-for-use` | `prescription?.indicationForUse` |
| quantity | | `prescription.quantity` |
| prescribed on | `ordered-date` | `prescription.orderedDate` |
| prescribed by | `prescribed-by` | `prescription?.providerFirstName` `prescription?.providerLastName` |

### PrescriptionDetails Component | Variations

...
