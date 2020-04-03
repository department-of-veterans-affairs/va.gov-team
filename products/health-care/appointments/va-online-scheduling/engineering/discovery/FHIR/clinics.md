# Clinics (WIP)
Status: 

## Services
### Current services used
- vaos/systems/{system_id}/clinic_institutions

### Equivalent FHIR resource
- http://hl7.org/fhir/organization.html

## Data
### Data to FHIR model mapping
- Data for each child facility:
  - Id (Organization.identifier)
  - Friendly name (Organization.name)
  - City (Organization.address[].city)
  - State (Organization.address[].state)
  - zipcode (Organization.address[].postalCode)
  - Main phone (Organization.telcom[].value

**NOTE:**
See documention on FHIR search http://hl7.org/fhir/search.html

**Example URL**

GET [base]/Organization/?partof={parent organization id}

### Start from data inventory
N/A

## Missing/incomplete data list
N/A

## Differences in scope of data returned
N/A

## Outstanding questions
