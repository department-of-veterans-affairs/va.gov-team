This meeting is to discuss and address any dependencies between the VA Mobile Shared Systems teams and the Flagship teams that are using their systems.

**Agenda/Notes**

03/19/24
* **DS Link Component in Flagship app (Kelly)**
   * Have at it!
   * [H&B Epic](https://app.zenhub.com/workspaces/va-mobile-60f1a34998bc75000f2a489f/issues/gh/department-of-veterans-affairs/va-mobile-app/7669)
   * [Global Epic](https://app.zenhub.com/workspaces/va-mobile-60f1a34998bc75000f2a489f/issues/gh/department-of-veterans-affairs/va-mobile-app/7668)
* **Updating Epic cards (Kelly)**
   * How can we build into our process a way for us to keep Epic cards updated consistently?
* **Team Health (Jen, Tim, Matt)**
   * How to measure the health of our teams?


02/20/24
* **DS Button Component in Flagship app (Kelly)**
   * All Stories are closed, are we all done?
       * Binny confirmed "VAButton and Button do not exist as components in the current develop branch so I think that’s a safe assumption as to 100% adoption."
* **Lovell/Oracle Transition (Alayna)** 
  *  Coordinating AF and backened changes
  *  See epic: https://github.com/department-of-veterans-affairs/va-mobile-app/issues/7828

  


  
02/06/24
* **Removing White Button Variant and old colors from Flagship app (Kelly)**
   * [Colors ticket](https://app.zenhub.com/workspaces/va-mobile-60f1a34998bc75000f2a489f/issues/gh/department-of-veterans-affairs/va-mobile-library/120)
   * No Epic/Story yet for redesigning the Login screen
   * Kelly to send over to Ameet to handle as able
* **Let's talk about getting Labs and Tests into the app, API seems to be ready ( Tim W )**
   * Need to work with VA Health PO for Labs & Tests to find out priority (Marci McGuire)
   * Stacy to reach out to Marci and keep Alayna in the loop
* **1/23/24 Follow-up  Collaborate with Mobile's OCTO POs in how to handle test account creation and data prepping need which are then documented (Adam - not here its a FYI)** 
   * OCTO POs (Janie / Kay) said to try and use the VA Platform [Test User Dashboard Guide](https://depo-platform-documentation.scrollhelp.site/developer-docs/test-user-dashboard-guide) as a starting point; QA confirmed they do this today but not always useful 
       * Its a real gap that OCTO acknowledges - no centralized team and own struggles they have to work through on this but they have contacts that help them 
   * Moving forward - QA will attempt to use Test User Dashboard proactively, if not able to find testing accounts / data needs there then QA will rely on Team PMs to coordinate testing needs with relevant OCTO POs to get unblocked
      * If Team PMs want to delegate this work to their QA person please create a ticket and be aware it will take away from QA capacity for other work also please make initial introduction with OCTO POs 
* **Open House**
   * re-use Q1 KR discussions, and OCTO presentation resources
   * Health POs are the first group of attendees

01/23/24
* **Discuss implementation of Design System components into the Flagship app (Kelly)**
  * Flagship teams to implement components in the app
  * Kelly to continue to create Epics for the Flagship teams but they can prioritize as they see fit
  * We will reassess once the DS team has build out more components
* **Discuss Flagship building new components for the DS - Personalization (Kelly)**
  * Flagship team to build new UI not as full components until they have been user tested and refined, then the DS team can create full components
* **Governance between teams on accessibility requirements (Matt)**
  * How to ensure the app keeps good accessibility
      * Have accessibility guidelines for designers
      * Engage Brea at the wireframe & especially mockup stage
      * Engage Brea during Visual QA
  * Brea is a resource for accessibility, but not the enforcer
  * If the QA/Release team is the enforcer, they will need to be fully informed
  * Adam to follow up with Brea to see what gaps need to be filled
* **Test account management and data prepping process (Adam)**
  * Baseline:
      * Mobile does not have access to prep our own test accounts or test data - making us reliant on VA teams to make the changes for us
      * Multiple areas use test accounts (research, review, testing, etc)
      * VA owns test account creation and modification & can modify the data when they need to - which can unexpectedly break existing Mobile tests or delay project testing  
      * Mobile's test account needs will require involving different VA areas and their different processes (VAOS for Appts, Prescriptions for RX, etc) 
      * Currently QA can help identify what is needed but is reliant on the Team PM to coordinate with the OCTO PM on VA's processes 
      * Long Term Platform Strategy expectation is Test Account Management and Data prep would be done outside of QA
      * Though Global is not working on specific H&B projects, Global's testing needs will involve test accounts with H&B needs like Personalization currently does
  * Problem 
      *  Not owning our own test accounts or means to modify test data leads to Mobile's reliance to VA processes and timing for test account needs 
         * Need to know VA PO process to create test accounts
         * Need to konw VA PO process to modify test accounts
   * Proposal
      * Include in Step 2 test account / data conversations
      * Collaborate with Mobile's OCTO POs in how to handle test account creation and data prepping need which are then documented
      * Renew discussion with Rachel on Mobile getting our own test accounts and our own process to modify the data - upgrade default process 
 * **News (Matt)**
   * Mobile Open House
      * Have newer VA POs come and meet the PMs and learn the roles of the teams, also we would learn about them
      * Create and share documentation about the teams, etc.
      * Matt to share list of POs once we learn more from Rachel
   * How to define the roles between what we do and what our VA POs do
   * OKR Sessions
      * Prior to Open House so we have them set
      * Flagship - this week
      * Platform - next week
  * **This Meeting Purpose**
   * Team/Program Sturcture discussions
   * Potentially do a Retro on the structure changes
   * 
     


01/09/24
* Q1 Planning plan
