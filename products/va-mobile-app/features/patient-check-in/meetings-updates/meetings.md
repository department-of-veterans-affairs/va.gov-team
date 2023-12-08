**Engineering Sync***

## 5/24/23

Action Items:

**Mobile**
- Share all of the raw data that we know about a single appt (info that is shared and not shared with the front-end)
- Documentation link shared in meeting https://department-of-veterans-affairs.github.io/va-mobile-app/api/#operation/getAppointments

**CIE**
- Provide example responses for demographics fetch and patch, as well as appointment check in
Both Teams
- Async on initial api needs to determine eligibility
- Pull together list of questions that you may have.  We can work to answer via async as well as our next session
- Meko to work with Lori & Anita to expand our meeting time from 30 min to 1hr

## 6/7/23

Recap: CIE team will need in order to implement their endpoints:
- Find the station number. This could be the location ID or be related to it. There is an on-going VAOS task to document this.
  - Jayson is confident that location ID is the station number and the mapping is only staging related.  Will confirm, and documentation will be great to have
- get the patient DFN for the given station number.
avoid the staff apps endpoint, look for ways in vets-api to do this that already exist.
Jason to follow up on the DFN to figure out how to get that information
- the mobile team will also need a list of appointment IENs. Those are being added to the VAOS payload now.
Mobile team will follow up and confirm the ETA with the VAOS team
- CIE team will continue creating the design and will share specs once ready
- Jason to share the link to the SIS documentation
- List of endpoints to be developed by the CIE team - Proposed sequence:
 - An endpoint to determine appointment eligibility. Requires station number and appointment IEN. Returns true/false.
 - An endpoint for initiating check-in. On the chip side this fetches statuses for demographics and insurance. Vets-api returns the statuses and demographics data if confirmation needed.
 - An endpoint for patching the updated demographics statuses
 - An endpoint to check the patient in.

## 6/14/23

- Upstream appointments team have agreed to add an e-check in flag Jira ticket [6665](https://issues.mobilehealth.va.gov/browse/VAOSR-6665); prioritization to do this work has not been confirmed.  Stephen will follow up on this next week
- If e-check in flag is avail, then there will not be a need for an eligibility endpoint to be created, as long as mobile is able to identify the additional attributes needed to determine eligibility.  Thread of convo here
- Additional ticket with the appointments team Jira ticket [6625](http://vaosr-6625/) to surface IEN is also with the Appointments engineering team.  Timing on this being ready is estimated to be 7/11. Kay to check if this can be moved up earlier
- A working session was suggested for CIE and mobile engineers to work together to construct response request and body for the check in endpoint.  This could also help with mobile team to start build mocks and documentation to inform implementation.  Brian to schedule to check in with team and schedule meeting. 
