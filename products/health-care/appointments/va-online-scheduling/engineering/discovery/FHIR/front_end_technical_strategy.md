# FE FHIR API architecture

## Problem

EAS will provide us with a new set of services with data in FHIR format. This will differ from the current services and data formats.

How do we migrate to these new services without replacing them all at once?

## Dependencies

1. A working service in SQA to test against and get a full understanding of th intended flow
2. Services will be released in production as they are completed, not all at once in September. If we don't do this, we increase risk for VAOS-R up to September and for both VAOS-R and EAS in September.

## Technical approach

The front end needs to be able keep the codebase as consistent as possible when using EAS endpoints or var-resources endpoints. Running a fork or separate branch is not acceptable.

In general, we should focus on pushing the differences down as close the api call layer as possible. Ideally, we do not have to do any switching at the React component layer to accommodate FHIR vs VAR differences. 

This likely means that we'll need to map either VAR or FHIR into a common format, and potentially create a layer that can consolidate different endpoints together to make our code sync up between the two services.

As far as data mapping, we have three options:

1. Map FHIR data to existing VAR format
2. Map VAR format to FHIR format
3. Map both to simplified FHIR format

## Individual strategies

Individual strategies should include:
1. Code layer where feature flag switching would live
   - API, Redux action, Redux reducer, React component, utilities, etc
2. Rough steps in the strategy
3. Complexity estimate

### Appointments List
### New Appointment Flow
#### Types of care
#### Community Care eligibility
#### Facilities
#### VA eligibility
#### Clinics
#### Time slots (both request and self schedule)
#### Appointment request submission
#### Community Care request submission
#### Direct schedule appointment submission
