# VA.gov / MHV Weekly Design Review meeting note log

## Date: 2/1/2023 

MC: Brian Riley  
Notetaker: Coulton Bunney

**Round-Robin Updates**

* Secure Messaging
  * UCD: Research into interstitial ongoing. 9 sessions so far. Adjusting content, etc. 
  * Development:Continuing to make way through defects list. 
  * Testing: <Missed update>
  * Product: With the help of  UCD, gettin close to submitting collab cycle reviews upcoming - contact center and readiness review. 

* Medical Records
  * UCD: Planning complete lofi designs by end of this week, early next and hand off to ByLight shortly thereafter.
  * Development: Continuing to build out scaffolding for front end. Early days with setting up backend/FHIR infrastructure.
  * Testing: No updates.
  * Product: Working through the list of domains, laying out sample roadmaps for how to get this work through collab cycle. Also looking forward to PI planning in a few weeks.  

	

**Topic 1 - Hight fidelity design review** 

Presenter: Lexi
Time: 20 mins

* High fidelity designs are mostly done and ready to be usability tested.
* Hasn't been reviewed by content/IA. 
* At first, vaccines will not include sort/search/filter. Based on research will add this functionality back in.
* Included both download and print on the vaccine list. How this will be designed in flux, but at first will be buttons. 
* Still researching some questions, such as whether we can tell if a vaccine is part of a series. 

**Topic 2 - Testing for save draft, Advanced search**

Presenting: Mike Moyer, Aaron Read

* How long should we wait before auto-saving? 3 seconds seems too short, 15 seems too long. Landed on 5 seconds.
* Advanced search is effectively going away. It is become an expanded view on the list view of each folder in Messages.  






## Date: 11/16/2022
MC: Brian Riley

Notetaker: Marci McGuire

### Notes
- No design, research, or dev demos this week

#### Round-Robin Updates
* Secure Messaging
  * UCD: Secure messaging usability testing ongoing.  Added more sessions to balance age groups as first round skewed younger
  * Development: Front-end dev continued. Working on tickets to get ready for midpoint review
  * Testing: Synching up test cases with screens.  There are some possible issues that need to be discussed with UCD.
  * Product: Working on artifacts for midpoint review; staging review pushed out closer to Phase 0 

* Medical Records
  * UCD: Synthesizing user interviews; readout and strategy meetings tomorrow and Friday.
  * Development: No updates 
  * Product: Bryan is meeting with 6-7 MHV developers next week and will be reviewing the onboarding documentation on GitHub; may be the team who will build Medical Records
- Patty asked if the concept of search my record is something we are aware of? Were those requirements handed over to us?  She doesn't want that to drive our design, but wants to know it is being considered.  Jonathan confirmed that it is.

#### Topic 1 - Road Map
- Marci walked through the road map
   - Ro asked what tool this was; it's ZenHub on top of GitHub
   - Most teams on VA.gov use ZenHub; gives us a bird's eye view of all the teams involved

#### Topic 2 - Phase 0 for Secure Messaging
- Lauren is trying to find out definitively if  we are indeed blocked by the unified T&C; Carnetta may be the only person who can answer that
- Ro said that is the same conversation she had with Carnetta
- Haritha is writing the account creation API and they have a dependency on the unified T&C
- Carnetta will be back next week and we can find out about T&C
- Lauren would like the white list for Phase 0 to be 100-200 people at a minimum
- Ro asked if this is different than the Pharmacy on VA.gov, which we already have; they weren't blocked by Terms & Conditions
- Lauren - We need to, by the end of the year, define what must be true to move into each phase of the rollout
	- Needs to cross each discipline
	- Marci is working on a draft that we can collaborate on; will put in a Mural board
		- Patty's team refers to that as success criteria
		- We may be able to work on this together during PI planning


## Date: 11/9/2022
MC: Bryan Riley  
Notetaker: Coulton Bunney

### Notes

#### Round Robin Updates

* Secure Messaging
  * UCD: Secure messaging usability testing ongoing. 
  * Development: Front-end dev continued. Working on tickets to get ready for collaboration cycle next steps.
  * Testing: <Missed this update - audio cut out>
  * Product: Working on artifacts for collab cycle. 
* Medical Records
  * UCD: Continiuing generative research for medical records this week - hope to wrap up by week's end.
  * Development: No updates 
  * Product: Bylight working to onboard resources for medical records. 

 #### Topic 1: 45 day alert message
  * Context: Users will receive this message when it has been 45 days since the last reply on a message from a provider. This will help encourage new conversation rather than continually replied to. 
  * Legacy design: Reviewed the existing content. Found that the language was a bit accusatory and did not present a clear next step to resolve. Additionally, using red is not the right choice as this is not an error. Finally, the page includes reply buttons that must be pressed first to throw the "cannot reply" error message.
  * Problem to be solved: How might we give notice to users that they can no longer reply to a conversation thread?
  * New design: 
    * Information alert
    * Provided informational content that explains that a user cannot reply and why they can't reply. 
    * Provides a way to compose a new message in respone. 
  * Discussion: 
	   * Patti: Would reconsider the language used, "aren't allowed" to "are no longer allowed" 
    * Bhanu: Users did not like that there was no reply button in line. That's why we kept the reply button in line. This probably won't be in JIRA, it would be in our old system. There may be a user story in the sharepoint that you can refer to. You should also consider how this impacts drafts that would be more than 45 days old.
    * Bhanu then shared a demo of this functionality in legacy. Today, we allow users to open a draft that is a reply that is 45 days old but tell them the draft message has expired. 
    * Danielle: Quick note from content team: Contractions are part of the conversational tone of plain language. But in this case, there may be a different way to phrase this altogether (like the suggestion of "no longer allowed" or something similar).
  * **Action items:**
      1. Submit copy to content team for review
      2. Consider what happens to draft replies when the 45 day mark is hit.
        

## Date: 11/2/2022

MC: Bryan Riley  
Notetaker: Coulton Bunney

### Notes

#### Administrative 
* Brief Update/Reminder to new format (Bryan Riley) – 5 min
* Reviewed goals, expectations, and agenda format (Coulton Bunney)

#### Round Robin Updates

* Secure Messaging
  * UCD: Started secure messaging usability testing this week. Testing usability of 911 alert, message threads, etc. Will run through Nov 16. Anybody is welcome to 
  * Development: Front-end dev continued. Moving messages, searching for messages. Makin excellent progress on backend and API development. Getting ready for collaboration cycle next steps.
  * Testing: Created accessibility testing plan. Reaching out to teams as necessary. Created Cypress Ax API tests to test accessibility as part of testing cycle.
  * Product: Had meeting on core KPIs for SM. Also working on contact center artifacts for collab cycle. 
* Medical Records
  * UCD: Started generative research for medical records this week. Also been coordinating with eng to learn more about the APIs and how that might impact design.
  * Development: Looking into APIs available today. Trying to compare and contrast different APIs that are available and any changes that may be needed. 
  * Product: Bylight working to onboard resources for medical records. 

#### Topic 1: Introduction to triage group research (Anne Costello) – 15 min

 * Problem to be solved: Veterans are confused by triage group names.
 * Additional context: Very early stages of discovery research into triage research. Spending time to learn what it is.
 * Notes:
   * Research goals:
      * Understand the triage group naming.
      * How are triage group names created? 
   * Primary research approach: 
      * SME interviews. 
      * MHV coordinator survey.
      * 1:1 interviews with MHV and Cerner coordinators. 
   * Secondary research approach:
      * Looked over past research. Did some background knowledge sharing with Tracey Martin. And more. 
   * Learnings so far: 
     * Triage group naming conventions.
     * Triage process. What happens when a Veteran sends a message to a triage group.
     * Initial hypothesis: There are frontend solutions that will make it easier for Veterans to undrestand who they are messagin and make it easier for coordinators and other staff to create triage groups without changing the current naming conventions.
 * Discussion: 
   * Patti: This is really helpful and grateful that Anne is coming in unbiased. 
   * Ro: We have a power BI dashboard that has tracked customer satisfication issues and surveys. We can use this to potentially learn more about issues that Veterans are having with SM, including triage group names. 
   
#### Topic 2: Overview of generative research for Medical Records (Robyn Singleton) – 15 min
  * Problem to be solved: We need to gain greater insight into how Veterans perceive medical records. How do Veterans use the current medical records functionality in MHV? How do Veterans understand the current terminology used in MHV?
  * Additional context: Coulton and Jenny conducted discovery research that shed light on areas that we need to explore by conducting Veterans facing research. 
  * Notes 
    * Veterans and caregivers are participants. 24 in total. 
    * Using direct questions in an interview style. Also using a basic card sort to help understand how Veterans use the categories. Finally, presenting different scenarios to participants to see how they would go about them. 
    * Goal is to generate lo-fidelity prototypes based on information gleaned during this research. 
    * Planning to finish up by Nov 11. 

Research plan: https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/research/2022-10_Generative-research/2022-10-medical-records-research-plan.md


#### Ad Hoc Discussion (time permitting)
 * Ro: Showed the Power BI dashboard. 
