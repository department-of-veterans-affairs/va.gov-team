Meeting with MHV to discuss technical feasibility of getting appointments data from MHV. 

Attendees:
Ken Graham (MHV), Patrick Vinograd, Kam Karshenas, Natalie Moore

## Meeting Notes
### MHV vs. HDR/Pathways
- Confirmed that HDR Pathways service is the source of truth for appointments data and is the place from which MHV is pulling the data.
- MHV provides business logic to parse the results from HDR
  - Filtering out facilities that don't apply to a user
  - Filtering out non-health appointments (raw appointments data also appointments for pensions and other benefits hearings)
  - Data translation for types of appointments, etc.
- MHV does error handling/retry logic in case HDR service is unavailable.
- Business logic is non-trivial, but relatively static
- There is a mandate (not sure at what level) within VA for all PHR data to go through one endpoint, which is currently MHV.
  
### Appointments Data and PHR Refresh
- Confirmed that appointments data in general is subject to needing to do PHR refresh process (i.e. it's not just because it happens to be in the blue button report). A green-field MHV appointments API would need to do a refresh process.
- However, MHV has the ability to do fine-grained refresh of appointments data only. Not currently exposed in MHV's API, but could be as part of a putative MHV appointments API. 
- Average time for appointments-only refresh is < 3 seconds.
- vets.gov could do a coarse refresh and then check the status of the refresh to see if the appointments part is complete, no need to wait for full refresh.
- Still subject to once-per-calendar-day refresh limit (which exists to protect VistA from excessive load).

### Sample Appointment Text Data
- Time/date is exactly as retrieved from HDR - lack of timezone, only reasonable interpretation is timezone of facility of appointment.
- Other fields - location, phone, clinic - are potentially free-form text, entered by a VistA user in a facility. MHV is doing some cleaning of this data.
- Bigger problem is missing data - most prominently many appointments don't include a location. MHV had been defaulting based on instance from which data was received, but this turned out to be bad logic and now they just default to a blanket "contact your provider" if no location.
- No link in source data to a facility code or anything like that - just a location name - so we'd have to derive that ourselves somehow if we want to do anything other than display the provided text.
- Semantics - "clinic" does not generally refer to a location per se, frequently just a treatment type at a larger location.

### Other Discussion
- Ken is willing to help us do an audit of production data to get all possible values for all fields - either at MHV level or HDR level - would be helpful in validating parsing logic. 
- There is a cost to generating the blue button report - if used interactively in an appointments UI, could grow to be significant and MHV would likely ask us to do some caching.
- Generating a blue button report shows up in the user-viewable Account Activity Log in MHV - so generating blue button reports for the purpose of parsing them would show to the user as generating a bunch of blue button reports - likely to be a point of confusion/complaints.

## Analysis
#### Patrick Vinograd
- The long-term right solution is probably an MHV appointment-specific API. MHV could continue to be the clearinghouse for business logic around data cleaning, definitions, translation, etc. A purpose-built appointments API would be much more efficient than even an appointments-only blue button report, since it could do a fine-grained refresh and skip the rest of the report generation and storage work needed for blue button. It could also avoid polluting the Account Activity Log.
- We have not met with the HDR team yet, and so far in email conversations they are reluctant provide much in the way of API access or even documentation until we have in some sense signed on as a client. Based on the interaction so far it seems like working with HDR may be a drawn-out process. Their SOAP API is likely to present some technical challenges for which we would ultimately be duplicating the effort of the MHV team in integrating with this service.
- The remaining short-term option, parsing blue button reports, has some drawbacks, mainly around user experience. We have the same refresh and data freshness UX challenges as with the main health records feature; we need to explain to the user why they are seeing unexpected account activity; we'll also need to implement some kind of caching to avoid overloading MHV's API.
- The actual text parsing of the blue button contents is unlikely to be a major challenge; the data we get back is not particularly rich so we can't do much other than parse the dates and present the other attributes of each appointment record as-is. 
