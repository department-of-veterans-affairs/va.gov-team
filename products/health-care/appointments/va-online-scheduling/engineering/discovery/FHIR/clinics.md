# Clinics (WIP)
Status: 

## Services
### Current services used
- vaos/facilities/{facilityId}/clinics

### Equivalent FHIR resource
- http://hl7.org/fhir/organization.html

## Data
### Data to FHIR model mapping
- Data for each child facility:
  - siteCode (Unknown)
  - clinicId (Organization.identifier)
  - clinicName (Organization.name)
  - clinicFriendlyLocationName (Unknown)
  - primaryStopCode (Unknown)
  - secondaryStopCode (Unknown)
  - directSchedulingFlag (Unknown)
  - displayToPatientFlag (Unknown)
  - institutionName ((Organization.name)
  - institutionCode (Unknown)

**NOTE:**
See documention on FHIR search http://hl7.org/fhir/search.html

**Example URL**

GET [base]/Organization/?partof={parent organization id}

### Start from data inventory
N/A

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
- Can the type "CodeableConcept" be used to model
  - siteCode
  - primaryStopCode
  - secondaryStopCode
  - institutionCode
- How are flags modeled?
- Can the Organization.typeOf field be used to retrieve the siteId since Organization is hierarchical?
