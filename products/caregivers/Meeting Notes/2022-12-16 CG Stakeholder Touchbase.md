## December 16, 2022 CG Stakeholder Touchbase

### Notes
- Review page 
     - 10-10 Health Apps team researched technical feasibility, design and accessibility concerns around making the Review page defaulted to expanded, rather than condensed as it is today. 
     - At this time, it is not technically feasible to display the review page information expanded by default.
     - The team will continue to consider other ways to encourage applicants to review their data input
          - This task is difficult given that we do not know the cause of the uptick in mistakes, or the kind of mistakes being made.

- Demo VAMC search from CARMA
     - Incoming call system (contact log) in CARMA to find VAMC
          - Enter zip code
               - City and state populate
               - VA MC field populates based on zip code
          - Use case with multi cities with same zip
               - Will pop up all cities and select one
               - City & state populate
               - VAMC populates based on selection
          - Can search on City, state and facility name
               - Showing only 5 limit right now - can show 10-20 or however many are desired
          - Location Table is in CARMA system
               - Pulls zip codes (ext system FTP server file)
                    - Mulesoft job looks at file every day for any updates, then pulls
               - Maintains dataset of VAMCs
                    - Future - update VAMC will be updated by Facilities API
               - Salesforce has GEO location coordinates, will use for nearest in future



---

### Notes from 11/18/22 Meeting (keeping here since we have outstanding questions)
- **Duplicate info entered on applications**
     - Application is considered duplicate info, even if there is new information too
     - Scenario:
          - Veteran wants to add new 2nd
          - Applies and lists primary again along with new 2nd
          - Application goes thru duplicate process
          - Veteran has to apply again without primary listed
     - Can we call MPI for approved caregiver?
          - Don't want to block if it is approved, but can we check for matching info in same position?
     - **Opportunity** We could add some info to the form about this
     - Do we know the volume of applications that are considered duplicate?
          - **Pending CG Team review**
 
- **Additional questions are pending CG team review and response:**
     - Do we know the ratio or volume or applications that are approved vs declined?  
          - We don't have visibility into this metric and wondered what the most common reasons for rejection, if there is a significant volume
          - Our question to ourselves would be Is there anything we can change that could help reduce the volume of rejected applications?
     - **Pending CG Team review**

     - We are looking for topic trends regarding Veterans or Caregivers calling in that may pertain to the application process or information. 
          - One trend we are seeing from the survey data is that some people are confused, trying to apply to get a Caregiver assigned to them by VA, or trying to apply for a Caregiver job (as opposed to a Caregiver for a specific Veteran).
          - Are there other trends like this that we should consider when looking at improvements and content updates?
     - **Pending CG Team review**

     - Is there a way to obtain the volume of rerouted applications, due to Veterans’ preferred facility selections?
          - We are considering this as an important metric, once we can deploy the updated Facility Selection page update.
     - **Pending CG Team review**





