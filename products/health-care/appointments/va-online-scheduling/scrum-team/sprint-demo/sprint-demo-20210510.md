# VAOS Sprint 38 (a & b) Demo

## Agenda

### Welcome
- Lauren - Agenda (no deck)

### Backend
- AJ
  - Review instances of {strict: false} on schema validation across VAOS
  - VAOS controllers returning 401 exceptions that are not tied to VAMF errors
  - VAOS Service Integration (GET Available Slots) 

- Brad
  - Replace connect() with hooks 
  - Surface eligibility enrollment data to vets-website
  - VAOS Service Integration (GET Patient Metadata) 

- Corey
  - VAOS Service Integration (GET Clinics)

### Frontend
- Jennie
  - #23478 update design and state changes on appointment list cards
  - Explore converting a page component to React-Redux's useSelector and useDispatch hooks
  - Replace connect() with hooks
  - Add facility info to vaccine submission
  
- Tony
  - Add heading to how to cancel message in appointment details
  - Simplify transformed format of in person VA appointments
  - Simplify transformed data format for VA and CC requests
  - Replace connect() with hooks
  - Move mock data into individual tests

- Kevin
  - Update vaccine flow single facility available view to match regular appointment flow 
  - Weekend Appts Do Not Display for Primary Care or Specialty Care clinics bug 
  - Replace connect() with hooks  
  - Add canceler info to appointment details
  - Direct schedule confirmation (Homepage Refresh)

- Jeff
  - Replace connect() with hooks
  - Announce appointment list preference change to screen reader
  - [Unenrolled POC] Set up scaffolding
  - Bug roundup from staging and Sentry pass
  - Clean up Community Care appointment and request transform
  - Create functions to fetch VATS settings in Location service

- Lance
  - Add Cypress tests to cover both contact facilities page variations in vaccine flow
  - Cheetah code reference clean-up
  - Replace connect() with hooks
  

## Rules of engagement
- Camera on - let's be a real audience for our presenters.
- Be present and ask questions if you have any. Safe space!
- If you're a presenter, have a visual. If you're not demoing an interaction or data exchange, screenshots or graphs are great too!
  - If you're reviewing a bug, explain the issue and how you found the fix. Include any additional learnings or related info that could be useful for knowledge-sharing.
