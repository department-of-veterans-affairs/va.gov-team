# Travel Claims Kickoff 


## 8/22 10am ET

### Attendees
 - Mark Dewy - Travel PO for FE and BE
 - Jeff Roof - Ad Hoc will be on the new contract
 - Beverly Nelson - OCTO PO for notifications
 - Absent - Kay - Patient check-in, appointments former VAOS
 - Absent - Kristen - Design lead, working on travel pilot with one facility
 - VA Mobile - Jayson, Jen, Tim, Matt, Adam, Rachel 

### Existing Travel - Check-in Travel claims prototype
 - Veterans go to their apointment, check-in and file a travel claim all at once
 - Tested successfully in 4 facilities
   - pilot ended last month, will roll out more at VISM level
   - Targeting full roll out end of 2024 
 - Oly allows for simple claims
   - round trip milage when a Vet uses their own vehicle
   - Honor system 
 - Veteran starts the check-in process (text , QR)
   - Submit some check-in required info
   - In the middle Simple Claim questions are asked
   - Veteran submits travel claim
      - sends request to BTSSS (background process)
      - 25-45 seconds
    - While that request is sent the Veteran completes the check-in process
    - Once BTSSS procsses travel claims request
       - Veteran will receive a SMS with the results (submitted successfully, declined, or error)
       - If submitted successfully it goes in the facilities manual review queue
         - Time to review varies widely for each facility as each facility manual reviews their travel claim request   
         - ~70-80% of TC are manually reviewed today thus not increasing the volume just that the volume is coming from mobile vs paper
         - 84% of claims are paid out in less than a week
         - Future feature external of mobile is to move subimssions from manual review to systematic review    
   - Research on this found that Veterans are 50/50 on if this should be in claims or in appointments

 ### Open Questions
  - Mobile brought up their open questions and had a discussion with the group
  - Questions located in the epic - if answered in the closed questions section
  - [Epic 1255](https://github.com/department-of-veterans-affairs/va-mobile-app/issues/1255)

  
  ### Mobile Solution
   - Unified starting point
      - One claim area accessed in multiple areas (Apts and Claims)
      - See the OG Acceptance criteria Test A and Test B
   - API
      - Any latency or API concerns
        - API takes 30+ seconds per API doc which is used to run the request through the business rules
          - New contract that starts in Sept is set to pick up a prototype endpoint to speed up this API so should be available soon
        - MS Dyanmics is the supporting system which can handle the volume
      - There is an API that will give an ICN that gives us a list of claims
      - Want to earmark where traffic is coming from - mobile vs web
    - No new notifications
    - Inclusion of Travel Claim Payments in Mobile Payments is not yet supported by BTSSS 

 ### Rollout 
   - Talks about only showing for certain facilities like Check-In
     - Mobile could follow Check-In TC rollout

 ### Value
   - Improving the submission process in order to reduce the need for manual review which improves the turnaround time
   - Systemtatic improvement would help staffing
     
 ### Firsts
   - First time mobile app will handle a claim submission
   - First time having users answers questions to initiatve a process


### Teams to be involved
   - Want to coordinate web and mobile on this project
   - Appointment Team
      - Web appointment team is working on an after-visit summary
      - Mobile will need to build this at some point 
   - Patient Check-In
   - Travel Team - Jeff's team
   - BTSSS Prototype Endpoint team - waiting for new contract to start next month 

### Collaboration and Communications
  - Unified Slack channel
  - Meeting cadenance - expect it may be too early at this point - agreed to setup follow-up question meeting meeting
  - Creating a central jira board like Mobile/Web doing for Check-In
  - Adam to chat with Meko on best practices


### Action items
  - Mark to shared prototype findings and readout
  - Mark to share timeline / list of improvements - completed 8/22
  - Mark - add payments to BTSSS roadmap - completed  8/22
  - Mark - set up slack channel - completed 8/25
  - Adam - schedule 2nd kickoff / question meeting - completed 8/25
  - Adam - check with Meko on collaboration best practices - completed 8/24
      - Challenges: need to ensure MVP is clear and aligned across teams, identify blockers and try to prevent earlier, make sure everyone is aligned and prioritizing the work the same
      - Helpful: Slack channel, regular meetings, central board  



## 8/25 10am ET

### Attendees
 - Mark Dewy - Travel PO for FE and BE
 - Kay - Patient check-in, appointments former VAOS
 - Kristen - Design lead, working on travel pilot with one facility
 - VA Mobile - Jayson, Jen, Adam, Ryan 

### Open question review
 - Mobile brought up their open questions and had a discussion with the group
  - Questions located in the epic - if answered in the closed questions section
  - [Epic 1255](https://github.com/department-of-veterans-affairs/va-mobile-app/issues/1255)

### Decisions
 - Check-In Travel Claims is outside of the scope - should add a ticket for the backlog for future integration but it will not be part of this process
 - Displaying Travel Claims Payments is not part of MVP as its not supported by BTSSS
 - Confirmed steps 1-6 of Test A and Test B can be done with current BTSSS functionality
    1)  User navigates to Health/Appointment/Past
    2) For an eligible appointment, user sees option to start a travel claim
       - Eligible appointment = Veteran is Checked-In and appointment date is < 30 days old
    3) User sees messages on tasks to do before submitting a claim and getting reimbursed. User is redirected to do these tasks
       - Submit Claim API 
    4) For users who have already successfully submitted a claim and got reimbursed, do not show message(s) in step 3
    5) User submits a claims
    6) User tracks claim
       - Get Status API 
 - Mobile to coordinate with Call Center on training/material needs for rollout

### Other notes
 - Discussed checked out
    - Originally Travel Claim required Veteran to have checked out of an appointment and appointment was in the past 30 days
    - For Check-In Travel Claims since its being done at check-in claim needed to be submitted at check-in and not check out - leading to manual review
      - BTSSS will need to explore the rules when automating digital claims but outside of Mobile
      - Targeting changes in Sept / Oct
 - Agent training
   - Though all facilities use a single system they all use it differently (no standardization)
   - There is a need to realign how to use the tool
   - Check-In Travel Claims created a FAQ
   - Training needs are going to be dependent on what Mobile normally does and the changes - mobile to work with call center on specifics
 - For rollout should we consider what appointment types we enable to help control the rollout
 - Only 1 claim per appointment per facility per day in a specific radius
    - 5 appointments in Pitt VA = 1 claim
    - 1 appoint in Pitt VA & 1 NYC VA in the same day = 2 claims
 - Brought up creating / using an agnostic system platorm for mobile and web to use - not much discussion 

### Error handling 
 - In the event that Submit Claim API errors out, for check-in the Veteran is notified in SMS
    - Message tells the Veteran to submit the claim a different manner
 - Will need to see how that is handled within the API
 - Mobile should consider tracking these errors 
        
### Client Side Front End Restrictions
- Identified and determined that client side (mobile) should add logic to prevent multiple submissions for the same app
- Submit Claim API does not stop submitting multiple claims for the same appointment, however the business engine does and will decline them
- At this time the only restriction logic for mobile to add is once the Vet in the mobile app submits a claim for an appointment, FE / UI should prevent them from submitting it again for the same appointment
  - May need to block telehealth appointments through restriciton logic but Mark to verify 
  -   

### Appointment Eligibility 
  - Veteran has a checked-in status for an appointment that happened in the last 30 days
    - Kay/ Mark discussion on different statuses and values
    - mark confirmed that the new team will be iterating and improveing the rules engine that enforces the eligibility

### Check Claim Status 
  - BTSSS just rolled out the Get Status API but has not been used yet
  - This provides some level of details that could be displayed to the Veteran to align with mobile's acceptance crteria
  - There are status changes - details in Github
    - Future opportunity for notification to the Veteran when claim status change happens  

### Next steps 
  - Mobile targeting work next sprint for BE and UX discovery
    - BE focus on APIs; UX focus on discovery / research 
  - Once Mobile has design ready then need to review with the Travel Office  
  - Kay meeting with Web today to talk about web / mobile doing work simultaneously 


