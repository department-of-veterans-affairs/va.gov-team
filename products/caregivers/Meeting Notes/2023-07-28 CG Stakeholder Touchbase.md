07/28/23 CG Stakeholder Touchbase

- Notes
     - CG Spanish language translation
          - How does CARMA database handle characters with accents, and other characters that take up more than one byte?
               - There is a known issue where other teams are encountering character limits being exceeded on the backend system, even though the typed input appears to be within the character limits on the frontend UI
               - For example, if we have a 30 character limit on the first name field, what is the input field constraint in the database?

          - Mili - will have to get back to us
               - MPI may strip out special characters - to be verified
               - Concerned with not getting a match to MPI and it is rejected before going to CARMA
          - Matt - Paper form is in spanish
               - Not an issue now
               - Don't want to create an issue for the sake of having it online
               - Just rely on having spanish paper form, and not having online version
     - Update on Facilities work
          - Working on development
          - API is currently in testing and should be available soon
          - Once dev is done, we want to have a demo prior to usability testing with Veterans & Caregivers
     - Question on How often are Caregivers changed/replaced?
          - Matt - Work is happening in the background regarding regulation and possible changes to the program.
               - Would rather hold off on any changes to the form providing guidance or clarity on the roles or how to complete it
               - Will come back to the team when we are ready to discuss any regulatory changes and what might be done to improve the process

### Notes from Tham
- CG Form Spanish Translation is almost done by the State dept.  Pending the JSON file so we can begin development!
     - Need to talk about how characters with accents are handled in CARMA
     - There has been feedback on other systems that the character with an accent on it is registering as two characters, so while data input appears on the front end to stay within field character limits, it is failing on the backend as exceeding limits due to the character now counting as two.
     - How does CARMA handles the character on other languages ? Does special/other language characters count as multi byte characters?
          - As all the records passes through MPI, we need to check on MPI rule for special/language characters (Today, MPI filters out special characters and stores the data, so it can reduce the chances of getting a match) and with more information, SPS can help verifying the salesforce side of impacts.
          - Changing into online 1010CG with Spanish language might cause technical problems and take up capacity, as it impacts on MPI data. For now, we can keep the current process of paper 1010CG for Spanish.

     - FYI: Facility page work continues, we are proceeding with development while Lighthouse API v1 is being tested (Lighthouse ETA for deployment in August).
         - Once connected, we plan to schedule usability sessions with Veterans & Caregivers
     - How often updates to Caregivers are done?
          - Any report to show the data of caregivers changes, who are already in the program and updating/adding secondary or discharged and adding another
          - SPS can try with CPP/CPR relationship data, we keep CPR with per caregiver with a status but there is no direct report settings.
          - Matt - We are working on the program regulatory rule making and would suggest to hold on to this, for now.
