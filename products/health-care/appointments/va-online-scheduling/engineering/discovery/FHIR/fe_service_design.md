# Service design doc

This will document:

1. The different exported functions we need in each service
2. The FHIR and VAR APIs used by each

This organization may change depending on our understanding of the flow.

## Data mapping guidelines:

- Use the data mapping in the discovery notes documents to determine the mapping
- Guessing on some properties is ok, as long as the field exists in the FHIR spec
- Any data that does have a place in the FHIR spec that we know of, put inside an object called `legacyVAR` for each resouce object
- When you need to generate an `id` value, prefix it with `var` and use the existing id from the current vets-api service

## FHIR service usage guidelines

- Don't rely on a resource `id` for any meaningful information, use a value from the `identifier` list.
  - Vista Scheduling Provider ids are opaque and not useful to us, but for data we're mapping from var-resources, that will not be the case, because we're creating them.
- Use the FHIR terminology by default, instead of VistA/var-resources terms.

## Services

### Organization

#### Functions
- getOrganizations

#### APIs covered
- /vaos/facilities
- /Organization?

#### Feature flag

### Location

### HealthcareService

### Schedule

### Slot

### Appointment
