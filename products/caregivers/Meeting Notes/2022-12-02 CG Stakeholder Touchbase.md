## December 2, 2022 CG Stakeholder Touchbase

### Notes

- **Facilities questions**
     - Question as it appears online today:  "Please select the VA medical center or clinic where the Veteran receives or plans to receive health care services."
     - How can we ask this question differently to get the information needed?
          - The information needed is the facility with Caregiver Support for application processing and supporting the Caregiver.
          - Today, we provide the list of Caregiver support facilities to select from, but the question asks about the Veteran’s preferred facility, so it could be misleading
               - The PDF generated will show the Caregiver support facility, which could cause more confusion
          - Can we simply rephrase the question, asking for the applicants to select
               - The Caregiver support facility of their choice?
               - The closest one to their home or Veteran’s preferred facility?
          - Can we ask them to select the Veteran’s preferred facility and display the associated Caregiver support facility so that they know what information is being captured?
               - Select Veterans Preferred Facility
               - [display CG facility] Here is the Caregiver support facility where a Caregiver Support Coordinator will review this application
     - Feedback received indicates confusion on the state where the preferred facility is located, especially when they live near the border between states
          - Applicants may not realize that the facility is actually located in another state
     - Options to consider
          - Salesforce API exposed to VA.gov and maybe use it for facility search by zip code
          - FUTURE: Consider CARMA as source, integrated with LH API
          - City field as optional?
          - Facilities field with type ahead?
     - **AI Bhagat & team**: Demo VAMC search from CARMA in next touchbase


- Review page 
     - There has been an uptick in mistakes on applications
     - Looking for ways to reduce this before the application is submitted
     - Can we expand the Review page sections, instead of showing condensed as default?
          - **AI 10-10 Health Apps team**: Team will research technical feasibility, design and accessibility concerns.  Reply to audience with findings
     - Required fields must be valid and correct
     - Business is looking at doing cheatsheets & video on how to complete the form accurately

- Eligibility Widget
     - Is it possible to create an Eligibility widget to access first before starting the application (like a checklist or something?)?
     - Matt Brown: Not ideal
     - Patrick: Not a technical challenge, however agree this is not ideal

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






