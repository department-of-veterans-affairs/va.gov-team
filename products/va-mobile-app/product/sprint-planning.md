### VA Mobile team- Sprint Planning


## Goals/Objectives-Sprint 10/13/21 - 10/26/21

- ### Vaccine Records (Top Priority)
  - Refine content if necessary  on Vaccine records once feedback is received (pending content feedback)
  - Connect backend/front end wire frames 
  - Complete vaccine code mapping in order to show Provider details
  - Implement Vaccine error states (vaccine service is down, empty state) 
  - Demo in staging
  - Align on Covid IA; how we present in the app how to get to info
  - Implement on solution

- ### Push Notifications - Secure Messaging Appointments
   - Secure Messaging (Product)
      - Take action on  guidance received regarding technical/architectural design decision for VANotify
     - Get alignment with VeText, escalate if needed
     - Follow up with Shane to get stats (Ayush)

  - Appointments 
     - Complete testing & QA for Appt Push notifications
     - Target next release implementation
     - Extend survey to increase participation by MHV coordinators for appointment push notifications

- ### Redesign
  - Hold redesign working session Part 2
    - Identify plan of action & priorities

  - Dark Mode 
    - Review Dark mode revisions and consensus on path forward 
    - Decision to be made by 11/2 
    - Complete implementation plan for dark mode v.1 in order to inform clear action items for the design/ FE development team
        - List  of hex codes 
        - Stretch goal - complete 1st session of paired programming 
  - Personalization 
     - Complete comparative analysis work 
    - Hold brainstorm session (?) Verify with Jen 

  - Confirmation
    - Complete documentation and UI for using Material/HIG components for confirmations

- ### Co-Design & Research
    - Research synthesis → Create report of findings and recommendations and do a readout @ end of sprint 

- ### Tech/Design Debt & Maintenance
     - Set up alerts in DataDog 
     - Follow up on a11y bugs (1586)
      - Analyze  the use of react-query to handle async operations between our app and the server (enables better management of our loading statuses) to determine          path forward (confirm with Narin)
    - Remove unused .env files
    - Determine implementation approach for Enhanced Demo Mode 

- ### Documentation Sites (Q4)
  - Gather outline for high level structure/site map from each workstream 
  - Start filling out sections/migrating existing documentation
  - Begin work on React Component Library (stretch, Vaccine is priority)

- ### Analytics 
  - Audit existing metrics (complete) 
  - Prioritize and add additional events; update new feature tickets to encompass all analytics


- ### Secure Messaging Refinements
  - Complete design for “Delete draft messages” 
  - Complete “display message signature” (started in past sprint)

- ### RX Refill
  - Submit research plan for approval
  - Schedule sessions with Veterans
  - Conduct sessions

- ### Post Launch-Scale
  - Document downstream services for on call procedures
  - Work with Travis to understand what is currently being tracked as part of playbook
  - Identify opportunities to partner
  - Continue building relationship with call center team on Platform - Ayush follow up with Jason

















## Goals/Objectives-Sprint 10/13/21 - 10/26/21

- Vaccine Records
  - Connect backend/front end wire frames 
  - Adjust details screens
  - Get approval from content team and submit to Covid Joint task team
  - Provide screenshots
  - Unhappy path/error states
  - Wrap up content and designs
  - Demo in staging

- Co-Design & Research
  - Conduct user research sessions (card sorts)
  - Start synthesis at the end of the sprint

- Redesign
  - Complete Destructive actions 
  - Accessibility review
  - Action Audit -Mobile Alert
  - Add to UI & documentation
  - Finish up Dark mode revisions on feedback from Martha & Travis
  - Sketch library improvements - wrap up 
  - Kickoff brainstorm redesign session
  - Identify plan of action & priorities

- Tech/Design Debt & Maintenance
  - Kickoff DataDog Analysis & Document findings
  - Connect with with VSP team to get an overview DataDog and what it offers
  - Create a list of all available metrics & identify how they can be used to recreate the Grafana dashboards 
  - Stretch Goal- start re-creating dashboards
  - Sev 2-3 defects
  - Meko, Ken H, Tom work on scrubbing and prioritizing existing bugs defects

- Documentation Sites
  - Set up /implementation of Github pages

- Post Launch-Scale
  - Meet with communications team at VA  (meeting scheduled 10/13/21) 
  - Document downstream services for on call procedures
    - Work with Travis to understand what is currently being tracked as part of playbook
    - Identify opportunities to partner
  - Privacy Policy: Identify POC and what is needed to update Privacy Policy- (Leanna will follow up) 
  - Establish connections with call center 
    - Ashley/Ayush meet with Leanna 

- Push Notifications - Secure Messaging

  - Get guidance on technical/architectural design decision (e.g should we use VANotify, since LH is may not be an option) 
  - Decisions to be made
    - Where will this live
    - What needs to be built to solve
     - Who will own development

- RX Refill
  - Create usability test plan for the existing RX Refill App

- Impediments/Risks
  - Vaccine Records: LH API data structure may require existing design tweaks for MVP
  - Vaccine Records:  Need assistance in getting API-Key installed  
  - Test account users to support various use cases
  - SM Push Notifications: Support from VEText
