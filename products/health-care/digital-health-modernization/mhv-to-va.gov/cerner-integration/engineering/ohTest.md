# Oracle Health - Test Environment Surveillance Tool 
* Idea for Oracle Health (OH) B1930 observability tool
* Code Name: OH TEST (OH Test Environment Surveillance Tool) 

## TL;DR:
This tool will allow non-technical staff to use a UX to build and execute calls to the OH B1930 FHIR Ignite API and then view responses. 

### Potential benefits/use cases: 
* Abstracts the need to know how to get a token and execute calls against B1930 using Postman or CURL
* Find test patients with specific criteria in their medical record and quickly see what that data looks like 
* Make new appointments 

### What might an MVP look like?
* A box where a FHIR query can be pasted with a `Go` button 
* A select box with a list of known Patient IDs that returns all associated data as a FHIR Bundle

### What might full scope look like? 
* Ability to select specific criteria in the UX and see parsed responses:
    * Specific test patient ID (show me the details for this Patient)
    * Specific test patient ID and related Resources (show me all the Allergies for Patient 123)
    * Specific Resources (show me data for any test Patient that has Allergies and Immunizations)
    * Ability to easily fetch and display any Referenced FHIR Resources
    * Ability to schedule an appointment for a specific patient

### Architecture:  
* modeled after the [PCI Appointment Tool](https://github.com/department-of-veterans-affairs/cie-staging-scheduler)
* FE: react app hosted with Github Pages
* BE: Java app hosted in MHV 
    * we could also deploy a simple Lambda to vaec-cms to support this
    * potentially a DB if we want to track what test patients have what resources available (would need a data refresh strategy) 
* Auth is managed with access to the Github repository hosting the FE

### LOE: 
* likely a couple of weeks part time for a couple of engineers 
