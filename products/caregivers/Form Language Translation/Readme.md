### Resources
- Reference [Check-in team's JSON file](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/translations/spanish-round-3/spanish-round-3.json) as an example

### UPDATE 7/2023
- [Notes from 7/28/2023 meeting with CG Stakeholders](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/caregivers/Meeting%20Notes/2023-07-28%20CG%20Stakeholder%20Touchbase.md)
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
          **- Matt - Work is happening in the background regarding regulation and possible changes to the program.
               - Would rather hold off on any changes to the form providing guidance or clarity on the roles or how to complete it
               - Will come back to the team when we are ready to discuss any regulatory changes and what might be done to improve the process**
