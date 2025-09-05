# Medications on VA.gov | API to EHR Map

| API resource.property | MHV resource.property |  MedicationRequest/MedicationDispense resource query |
| --------------------- | --------------------- | ----------------------------- |
| `prescriptionName`  | `drugName` | (MD) `medicationCodeableConcept.coding.%Get(0).display` |
| `prescriptionId`    | | |
| `prescriptionNumber` | `prescriptionNumber` | (MR) `id` |
| `orderedDate` | `issueDate` | (MR) `authoredOn` |
| `sortedDispensedDate` | | |
| `dispStatus` | | |
| `refillRemaining` | (MR) `dispenseRequest.numberOfRepeatsAllowed` | |
| `expirationDate` | `expirationCancelDate` | (MR) `dispenseRequest.validityPeriod.end` |
| `trackingList[0].completeDateTime` | | |
| `facilityName` | `divisionName` | (MD) `location.reference` |
| `sig` | (MD) `dosageInstruction.%Get(0).text` | |
| `indicationForUse` | `reason` | (MR) `reasonCode.%Get(0).coding.%Get(0).display` |
| `quantity` | `quantity` | (MD) `quantity.value` |
| `providerFirstName` | `providerFirstName` | (MR) `$p(requester.display, ", ", 1)` |
| `providerLastName` | `providerLastName` | (MR) `$p(requester.display, ", ", 2)` |
| `orderableItem` | | |


## Todo

- Add columns for Vista/OH/Cerner
