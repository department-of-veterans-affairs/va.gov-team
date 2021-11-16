# Stage 1 - Complete basic pre-checkin flow

## End goal
Veteran can complete the pre-checkin flow and review demographic/NoK data - if answers are “yes” to all, the appointment status can be set to pre-checkin complete and the Checkin and staff app will know that the veteran has confirmed that their data is correct.

## Workflow

- VEText calls chip endpoint
- CHIP stores appointment + demographic data in LoROTA and returns UUID to VEText
- Veteran visits link sent by VEText after they confirm their appointment
- Veteran authenticates with Last Name + Last 4
- FE pulls data previously stored in LoROTA and confirms demo + NoK data, storing answers in local storage
- If all answers are “yes”, FE calls endpoint to set pre-checkin complete

## Accountabilities
- VEText
  - Call /actions/initiate-precheckin endpoint and send link to veteran
- CHIP
  - Create /actions/initiate-precheckin endpoint
  - Create /actions/pre-check-in/{uuid} endpoint
- BE
  - Provide link to /actions/pre-check-in/{uuid} endpoint in vets-api
- FE
  - Create pre-checkin app and pages, call vets-api to set checkin status to pre-checkin complete for all appts if the veteran responds “yes” to all questions.

# Stage 2 - Store veteran’s responses

## End goal

Veteran’s yes/no responses are stored along with the time they were made. Pre-checkin, checkin and staff apps can access these data.

## Additions to Workflow

- After a veteran finishes answering questions, the FE app stores the responses somewhere TBD. (Provisionally DynamoDB)
- Answers are keyed by StationNo + PatientDFN so that they are not tied to any specific appointment 
- Apps may then query this data to improve the veteran experience, for example:
  - checkin doesn’t re-ask the questions if they have been recently confirmed
  - staff app may highlight that a veteran said that their NoK data is out of date

## Accountabilities
- CHIP
  - Create CRU(D?) endpoints for veteran confirmation data (needs discussion)
- BE
  - Provide link to above endpoints in vets-api
- FE
  - Store and make use of the response data in the Pre-checkin and Checkin apps
- Staff App
  - Retrieve and use response data as appropriate

## Questions to be answered
- Where does the response data live? (Likely to be DynamoDB unless someone screams)
- What does the API for creating/reading/updating these data look like?

# Stage 3 - Improve the Veteran Experience

## End goal

The veteran never sees incorrect or out-of date data. To do this, we need to pro-actively refresh the appointment, demographic & response data as the veteran uses the pre-checkin app.

## Additions to Workflow
- CHIP adds a timestamp to the data stored in LoROTA to indicate when it was retrieved
- FE uses this timestamp to determine when to ask for updated data
- BE may automatically trigger an update when the veteran visits the authentication page

## Accountabilities
- Chip
  - add timestamp(s) to data in LoROTA
  - update refreshAppointments endpoint to inspect the data in LoROTA and either fetch appointments for the current day (for the checkin use case) or refresh the specific appointments already stored (for the pre-checkin use case)
  - add refreshDemographics endpoint
- BE
  - provide link for refreshDemographics endpoint
  - update api for refreshAppointments endpoint to allow passing appointmentDate and appointmentIENs parameters
  - maybe: automatically trigger data refresh when an auth token is requested (to improve load time for first page after auth is completed)
- FE
  - call refresh endpoints as needed to ensure the displayed data is always up to date

## Questions to be answered

- Should the BE automatically trigger a data refresh when the veteran first loads the pre-checkin app? (before auth is completed)
- How should we handle things when the veteran re-visits a link after completing pre-checkin?
