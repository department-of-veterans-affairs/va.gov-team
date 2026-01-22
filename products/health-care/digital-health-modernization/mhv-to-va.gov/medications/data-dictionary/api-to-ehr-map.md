# Medications on VA.gov | API to EHR Map

| API resource.property | MHV resource.property | VistA                 | Oracle Health Millennium resource |
| --------------------- | --------------------- | --------------------- | --------------------------------- |
| `prescriptionName`    | `drugName`            |   Drug Name           | (MD) `medicationCodeableConcept.coding.%Get(0).display` |
| `prescriptionId`      | `id`                  |   IEN                 | (MD) `medicationCodeableConcept.coding[0].code` |
| `prescriptionNumber`  | `prescriptionNumber`  |   Prescription Number | (MR) `id` |
| `orderedDate`         | `issueDate`           |   Issue Date/Time     | (MR) `authoredOn` |
| `sortedDispensedDate` | `sortedDispenseDate`  |   Release Date/Time   | (MD) `whenPrepared` |
| `dispStatus`          | `dispStatus`          |   Status              | (MD) `status` |
| `refillRemaining`     | `refillsRemaining`    |   Refills Remaining   | (MR) `dispenseRequest.numberOfRepeatsAllowed` |
| `expirationDate`      | `expirationCancelDate`|   Expiration Date     | (MR) `dispenseRequest.validityPeriod.end` |
| `trackingList[0].completeDateTime` |          |                       |  |
| `facilityName`        | `divisionName`        |   Facility Name       | (MD) `location.reference` |
| `sig`                 | `instructions`        |   SIG                 | (MD) `dosageInstruction.%Get(0).text` |
| `indicationForUse`    | `reason`              |   Reason              | (MR) `reasonCode.%Get(0).coding.%Get(0).display` |
| `quantity`            | `quantity`            |   Quantity            | (MD) `quantity.value` |
| `providerFirstName`   | `providerFirstName`   |   Provider            | (MR) `$p(requester.display, ", ", 1)` |
| `providerLastName`    | `providerLastName`    |   Provider            | (MR) `$p(requester.display, ", ", 2)` |
| `orderableItem`       |                       |        |  |

## Upstream Docs

- [MHV Prescription Refill/Renewal API](https://code.va.gov/catalog/default/api/mhv-api-rxr-v1)
- [Oracle Health Millennium Platform - MedicationDispense resource](https://docs.oracle.com/en/industries/health/millennium-platform-apis/mfrap/api-medicationdispense.html)
