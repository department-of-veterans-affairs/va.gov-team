# Clinics
Status: Blocked by questions

## Services
### Current services used
- vaos/facilities/{facilityId}/clinics

### Equivalent FHIR resource
- http://hl7.org/fhir/healthcareservice.html

## Data
### Data to FHIR model mapping
- Data for each child facility:
  - siteCode (HealthcareService.location)
  - clinicId (HealthcareService.identifier)
  - clinicName (HealthcareService.name)
  - clinicFriendlyLocationName (HealthcareService.name?)
  - primaryStopCode (Unknown)
  - secondaryStopCode (Unknown)
  - directSchedulingFlag (Unknown)
  - displayToPatientFlag (Unknown)
  - institutionName (HealthcareService.location.name)
  - institutionCode (HealthcareService.location.identifier)

**NOTE:**
See documention on FHIR search http://hl7.org/fhir/search.html

## Missing/incomplete data list
- primaryStopCode
- secondaryStopCode
- directSchedulingFlag
- displayToPatientFlag

## Differences in scope of data returned
N/A

## Outstanding questions
- Can the type "CodeableConcept" be used to model
  - primaryStopCode
  - secondaryStopCode
  - directSchedulingFlag (Unknown)
  - displayToPatientFlag
