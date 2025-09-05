# Medications on VA.gov | API to EHR Map

| API resource.property | MHV resource.property | VistaA | Oracle Health Millennium resource |
| --------------------- | --------------------- | ------ | --------------------------------- |
| `prescriptionName`    | `drugName`            |        | (MD) `medicationCodeableConcept.coding.%Get(0).display` |
| `prescriptionId`      |                       |        |  |
| `prescriptionNumber`  | `prescriptionNumber`  |        | (MR) `id` |
| `orderedDate`         | `issueDate`           |        | (MR) `authoredOn` |
| `sortedDispensedDate` |                       |        |  |
| `dispStatus`          |                       |        |  |
| `refillRemaining`     |                       |        | (MR) `dispenseRequest.numberOfRepeatsAllowed` |
| `expirationDate`      | `expirationCancelDate`|        | (MR) `dispenseRequest.validityPeriod.end` |
| `trackingList[0].completeDateTime` |          |        |  |
| `facilityName`        | `divisionName`        |        | (MD) `location.reference` |
| `sig`                 |                       |        | (MD) `dosageInstruction.%Get(0).text` |
| `indicationForUse`    | `reason`              |        | (MR) `reasonCode.%Get(0).coding.%Get(0).display` |
| `quantity`            | `quantity`            |        | (MD) `quantity.value` |
| `providerFirstName`   | `providerFirstName`   |        | (MR) `$p(requester.display, ", ", 1)` |
| `providerLastName`    | `providerLastName`    |        | (MR) `$p(requester.display, ", ", 2)` |
| `orderableItem`       |                       |        |  |

## Upstream Docs

- [MHV Prescription Refill/Renewal API](https://code.va.gov/catalog/default/api/mhv-api-rxr-v1)
- [Oracle Health Millennium Platform - MedicationDispense resource](https://docs.oracle.com/en/industries/health/millennium-platform-apis/mfrap/api-medicationdispense.html)
