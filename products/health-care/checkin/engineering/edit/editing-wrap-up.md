
# EDITING WRAP-UP 4/7/2022

## Purpose
The purpose of this is to document the state of the editing work as of 4/7/2022. The team had begun to work on a feature to allow Veterans, while using the pre-check-in application, to edit their information in-place. This included their demographis, emergency contact, and next of kin contact information. It was determined that our low-risk one-time-access (LoROTA) authenitcation would not be sufficient to allow Veterans to edit their personal information and that editing would require full authentication. The decision was then made to de-prioritize this editing work and pivot to simply providing Veterans with some messaging and link to their VA profile where they where they could update their information directly in their profile.

## Notes
- Current State
    - Front end
        - Developed POC for components to do the editing (Demographics, EC, & NOK) - shared components across these 3
        - Code is all merged to master, in production but behind a feature flag
    - Back end
        - Moving session cookie to custom cookie is done (so doesn't conflict with full auth)
        - Had discussions with Profile team
        - Started looking at address validation
        - Did not write any code
        - Still having discussion about whether CHIP would do the work to interact with VA Profile service
            - Think it would need to be CHIP (per Stephen)
- Gaps that will need tickets when we pick this back up
   - Mark's full auth [POC](https://github.com/department-of-veterans-affairs/vets-website/pull/20673)
   - Unit tests
   - e2e tests
   - address validation
   - address component refactor
   - API connection
   - UX review (about 70% done, still work to do)
   - Need to reflect any new work (like translations)
   - Mock API (have some but not comprehensive) 
   - Verbiage for each user flow needs to be revisited (header, CTA)
       - Did we resolve whether we wanted a "Yes/No" option in the edit flow? - need to revisit
   - Revisit Temporary addresses
   - Revisit how to display out of country addresses.
   - Meet with owners of EC and NOK data (Ruth Owens) about being a source of editing (even thought the data is funneled through VA Profile API)
   - Probably good to make a Platform-wide reusable component for editing so others can use it
   - Add Remove functionality for group of fields

