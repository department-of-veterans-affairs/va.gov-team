# Facilities

Status: Blocked by questions

## Services
### Current services used
- /vaos/facilities
- /vaos/systems/{system_id}/direct_scheduling_facilities
- /facilities/va

### Equivalent FHIR resource

- Organization
- Location

## Data
### Data to FHIR model mapping

- VA parent facilities (Organization)
   - Data for each parent facility:
      - Id (Organization.identifier)
      - Friendly name (Organization.name)
      - City (Organization.address[].city)
      - State (Organization.address[].state)
      - Root site id (**Organization.identifier**)
- VA child facilities (Location)
   - Data for each facility:
      - Id (Location.identifier)
      - Friendly name (Location.name)
      - requestSupported (**Unknown**)
      - directSchedulingSupported (**Unknown**)
      - institutionTimezone (**Unknown**)

### Missing/incomplete data list

- directSchedulingSupported
- requestSupported
- institutionTimezone

### Differences in scope of data returned

- Child facilities are fetched by VistA id and type of care id, but Location doesn't have any search parameters related to type of care

## Outstanding questions

- How can we get the timezone for a Location?
- How do we get request/direct scheduling supported flag information?
- Sometimes there are five digit "parent" VAMCs, are those considered Organizations or Locations?
- Do we have different fields for friendly vs institution name?
   - No, based on loking at the Organization and Location responses in staging
