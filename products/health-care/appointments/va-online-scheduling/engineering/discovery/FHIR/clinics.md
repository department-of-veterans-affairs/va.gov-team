# Clinics
Status: Blocked by questions

## Services
### Current services used
- vaos/facilities/{facilityId}/clinics

### Equivalent FHIR resource
- http://hl7.org/fhir/location.html

## Data
### Data to FHIR model mapping
- Data for each child facility:
  - siteCode (Unknown)
  - clinicId (Location.identifier)
  - clinicName (Location.name)
  - clinicFriendlyLocationName (Unknown)
  - primaryStopCode (Unknown)
  - secondaryStopCode (Unknown)
  - directSchedulingFlag (Unknown)
  - displayToPatientFlag (Unknown)
  - institutionName (Location.name)
  - institutionCode (Unknown)

**NOTE:**
See documention on FHIR search http://hl7.org/fhir/search.html

**Example URL**

GET [base]/Location/?partof={parent organization id}

## Missing/incomplete data list
- siteCode
- clinicFriendlyLocationName
- primaryStopCode
- secondaryStopCode
- directSchedulingFlag
- displayToPatientFlag
- institutionName
- institutionCode

## Differences in scope of data returned
N/A

## Outstanding questions
- What resource do clinics map to?
  - Location, HealthcareService, Schedule?
- Can the type "CodeableConcept" be used to model
  - siteCode
  - primaryStopCode
  - secondaryStopCode
  - institutionCode
- How are flags modeled?
- Can the Organization.typeOf field be used to retrieve the siteId since Organization is hierarchical?
