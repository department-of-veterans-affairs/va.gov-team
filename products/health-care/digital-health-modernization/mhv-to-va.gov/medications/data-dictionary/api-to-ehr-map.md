# Medications App | API to EHR Map

| API resource.property | MedicationRequest/MedicationDispense resource query |
| --------------------- | --------------------------------------------------- |
| `prescriptionName`  | (MD) `medicationCodeableConcept.coding.%Get(0).display` |
| `prescriptionId`    | |
| `prescriptionNumber` | (MR) `id` | 
| `orderedDate` | (MR) `authoredOn` |
| `sortedDispensedDate` | |
| `dispStatus` | |
| `refillRemaining` | (MR) `dispenseRequest.numberOfRepeatsAllowed` |
| `expirationDate` | (MR) `dispenseRequest.validityPeriod.end` |
| `trackingList[0].completeDateTime` | |
| `facilityName` | (MD) `location.reference` |
| `sig` | (MD) `dosageInstruction.%Get(0).text` |
| `indicationForUse` | (MR) `reasonCode.%Get(0).coding.%Get(0).display` |
| `quantity` | (MD) `quantity.value` |
| `providerFirstName` | (MR) `$p(requester.display, ", ", 1)` |
| `providerLastName` | (MR) `$p(requester.display, ", ", 2)` |
| `orderableItem` | |
