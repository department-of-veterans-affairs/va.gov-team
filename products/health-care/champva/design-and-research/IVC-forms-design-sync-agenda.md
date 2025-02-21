# Running Design and Research Agenda

## February 18 2025
 - Attendees: Jamie Fiore, Lois Lewis, Andrea Merrell, Bo Altes, Jina Ryu, Rachel Pope, Luis Simauchi
     - ### Agenda Topics
         - UX roadmap
         - CHAMPVA Application/Claims Blueprints
         - FMP Blueprints/Thoughts on the meeting with FMP Claims last week
         - 1010D/OHI merge stakeholder research
	 - Contact questions for CHAMPVA

     - ### Notes
         - UX roadmap
          	- Putting focus on service blueprints work and OHI interim merge solution 
         - CHAMPVA Application/Claims Blueprints
          	- Lets revisit the blueprint on a regular basis to make updates and the process evolves. It needs to be a living doc
          	- We work  in the VES backend mapping on a future blueprint. There is a recording on the demo available to help with this.
           	- Premal, Lois and Rachel will send their notes to Jamie to compile and determine changes needed. 

         - FMP Blueprints
         	- We completed the first revision of the FMP application blueprint. We still need to fill in a lot of gaps with the stakeholders
          	- Jamie to send out the link to the FMP application blueprint to Premal and Lois
           	- Designers are working on the FMP claims portion of the blueprint this week which will capture a higher level process from Adam’s demo
          
	- Thoughts on the meeting with FMP Claims last week
 		- Adam stated that they just need one pdf for each claim submission
   		- Multiple claims seems like it will work but we will need to revisit with the PEGA to see if they can manage the docs appropriatel
     		- We need to think about how this news might apply to the CHAMPVA Claim. Keep in mind that there is a little more complexity with the EOB and secondary insurance with CHAMPVA Claims to think about. 

         - 1010D/OHI merge stakeholder research
         	- We need to think about when it is the right timing to have these conversations now that we need to move fast on an interim solution. We can put some of these conversations after OHI is released.
         	- We may need to have some smaller conservations about the interim solution as well.
          	- We could use this time to ask about why we collect certain insurance info and if we need all of this info?
           	- Consider working these questions into the blueprint service conversations with them.
           	- Consider during the next CHAMPVA meeting we can go over what our merge plans are with them. They seem more concerned with how the data gets over to them rather than the new U
           	- Build up a user story surrounding this but talk about what they should be prepared for during each phase in terms of enrollment processing and data.
           	- We should come up with a solid staged plan for the CHAMPVA app/OHI integration. 

	 - Contact questions for CHAMPVA
  		- Ask more about if we have different applicants (main applicants vs the dependents) who are receiving what.
    		- Email may be an ineffective way to ask these questions. We should schedule this during our regular meeting with them and walk them through the questions using visuals (the paper form and/or the digital form.paper form and walk them through this.
      		- Consider adding these improvements while we are working on the OHI interim solution
   

     - ### Action Items
     	- Lois will get Luis up to speed on IVC data capture.
        -  Premal and Bo can introduce Luis to our Datadog
        -  Jamie to send an agenda to CHAMPVA partners prior to the meetings.
        -  Set up more automations to cancel meetings with no agenda items.
        -  Premal, Lois and Rachel will send their notes form teh CHAMPVA service blueprint meeting with the partners to Jamie to compile and determine changes needed.
        -  Jamie to send out the link to the FMP application blueprint to Premal and Lois. Lois and Premal to review the mural and leave comments. We can talk more during next weeks sync 	


## February 10 2025
 - Attendees: Jamie Fiore, Lois Lewis, Andrea Merrell, Bo Altes, Jina Ryu
     - ### Agenda Topics
         - UX roadmap
         - Entry point decision for OHI launch
         - What Lois learned re: IA for FMP + OHI
         - Research Workshop with CHAMPVA partners on OHI/1010d merge
         - Thoughts on the latest 1010d OHI Merge


     - ### Notes
       - UX roadmap
           - Included more work on the CHAMPVA/FMP service blueprints in the next column
           - Jina did some [work on the FMP direct deposit](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1738102756013/35b161555725af4051c763f264312d980eff7e4d) in the next column  so designers need to review her work before pointing our ticket
           - Supporting Docs stakeholder research in the next column but may move to the later column if the service blueprint works overtakes it. 
           - Continued work on the 1010d/OHI merge and 1010d improvements
       - Entry point decision for OHI launch
           - OHI is now pulling ahead of FMP in terms of priority
           - No strong feelings on the approach we take on entry points
           - We may have contact for CAIA (Randi) to work on react widgets
           - Discussed supported as a standalone form or do we want it on the 1010d but Mikki (CAIA) stated that can’t put a form out there with an orphaned page. The OHI form must link to other relevant forms (meaning the 1010d)
           - We are considering doing a fast follow to update the 1010d with small tweaks and content updates to accommodate the OHI being live
           - Create ticket for looking into the interim solution with the least amount of engineering work
       - What Lois learned re: IA for FMP + OHI
           - Mikki (CAIA) has correct URLs, redirect and breadcrumbs
           - The difference between CHAMPVA (family benefits) and FMP (Veteran Healthcare) is that FMP needs to be in a “manage your benefits” area of the site and CHAMPVA is in a “get your benefits/file a claim” are of the site
           - FMP needs to have an engineering ticket to update the IA on FMP
           - In the future we need to make sure we have before we need to go into staging review.
           - Make sure CHAMPVA claims it has the correct IA in place. We should already have in the CHAMPVA family member benefits IA but we should double check.
           - When we merge OHI or move CHAMPVA to the new authenticated experience we will need to rework IA with CAIA.
           - Links shared:
             - [FMP IA Github](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/information-architecture/ia-design-docs/foreign-medical-program-claim.md)
             - [CHAMPVA IA ]([https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/information-architecture/ia-design-docs/foreign-medical-program-claim.md](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1702677961676/13148d7aadd948a857eaa8fe5e04f6a9b09c3f9e))
       - Thoughts on the latest 1010d OHI Merge
           - Designers need to look for a reference on how to format and where to ask yes/no health questions with the form
           - I think we can remove the Medicare Part A and B with prescription. Medicare Part D would be the same thing
           - We should clean up the flow at some point so it’s easier to follow. Reference the Healthcare team’s files
           - Not sure where the HI selector would be based on the current flow. Designer should demonstrate that on the Figma
           - Need to remove the list and loop for insurances because there are engineering and UX problems when it’s nested in another loop. We can treat it as the current OHI figma does (with no loop but a duplicate of insurance questions to capture data about an applicant's secondary insurance). We do need to represent these extra insurance screens on the figma file
           - Double check the eyebrow headers. They aren’t consistent with the work done the 0781/526 work.
           - Shared some more [research on Forms with a Form](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/3712) for designers to review
       - Research Workshop with CHAMPVA partners on OHI/1010d merge
           - Discussed briefly on the structure of the workshop Starting with some basic background context, our research and the flow of the current vs merge form process
     

## January 27 2025
 - Attendees: Jamie Fiore, Rachel Pope, Lois Lewis, Andrea Merrell, Bo Altes, Premal Shah, Jina Ryu
     - ### Agenda Topics
         - Design Roadmap
         - Review of the Multiple Claims flow options
         - Review of health insurance selector for 1010D
         - Review of additional desk research for 1010d/OHI merge
         - Review of new updates to CHAMPVA service blueprint
         - Questions involving how CHAMPA uses addresses and phone numbers of each of the different roles in the form: Signer, Sponsor and Applicant.
      
     - ### Notes
          - Multiple claims
               - Should we ask for a third party liability question for each claim? Would we need multiple pdfs to be able submit an answer to the work/auto injury claim for every upload? Would there be extra burden on the claim processors if we create multiple cover sheets (pdfs) for each form submission/group of claims? Do the work/auto injury radio buttons on every upload make the page too busy and more difficult for the user to navigate?
               - Do we need to ask for file types on the uploads?
               - Would applying the type of doc be useful for the processor? Do we need to ask the user for the document type?
               - Jina has some examples to look at and some uploads for claims
               - We can try to ask the work/auto injury questions at the end: Are any of these claims the cause of a work-related injury/auto accident?
               - Do RX claims need to answer the work-related or auto accident questions? Check the stakeholder meeting video or ask the claims processors.
               - Consider making it clearer that users need to upload the EOB as well as the billing statement.
               - Co-design with the new workflow partners/processors. Show them the prototype. Ask if the workflows would be helpful to them.  Ask engineering if current prototypes are possible before we talk to the partners.
        - The service blueprint
             - Design used the RX Benefits service blueprint for reference which shows the separate tracks for digital and analog user experiences.
             - On the CHAMPVA blueprint the front stage row needs to show the digital and analog processes which makes the blueprint really complex.
             - We also need to keep the user journey timeline to show the differences in the analog and digital paths. Lois suggests that we try to reformat it. We can try to make it horizontal or a separate part of the blueprint to further simplify the design.
             - We can try to identify each process with digital and analog icons to help simplify the blueprint. Look into adding a data row if needed like the example that Lois shared.
             - The questions about the processes are marked with yellow stickies, most of them dealing with the self batches and how data gets entered into the system.
             -  We can get these questions answered when we share this with the CHAMPVA partners.
        - Gender Options
            - Premal flagged the design system team on this question about genders now that there’s a new executive order about how this question appears on government forms.
            - The design system will create something that is compliant with EO
            - We ask for sex assigned at birth and not gender on the CHAMPVA application and claims form so we may not fall within the EO.
       - Jamie to follow up Premal and Lois about the other items we didn’t get to discuss on the call
             - The insurance selector on the 1010D
             - The desk research on the 1010d/OHI merge
             - Questions involving how CHAMPVA uses addresses and phone numbers 

## January 21 2025
- Attendees: Jamie Fiore, Lois Lewis, Andrea Merrell, Bo Altes, Premal Shah, Jina Ryu
	- ### Agenda Topics
      - Design Roadmap
      - Discuss future multiple claims research
      - Review Update CHAMPVA Service Blueprint
      - Discuss FMP Direct Deposit and future research with past participants
 
-  ### Notes
    - Design Roadmap
      * Rachel to present some options for the CHAMPVA multiple claims later in the sprint now that we have better stakeholder feedback on how they can process multiple claims. This won’t be for MVP but a future improvement
      * It may be better to wait on working on the FMP Multiple Claims until we get some data on how the single claim is  working post launch.
      * Continue research and design work on the  OHI/ 1010D merge
      * Design will start to pull in 1010D post-launch improvements from [the spreadsheet] (https://docs.google.com/spreadsheets/d/1lrho8WwCQQ-7Lzje-AG5YN-zadPy-6c5SQRId_nQbYg/edit?gid=0#gid=0) as time permits within each sprint. This will span over multiple sprints.
    - Research Planning
      * Pre-fill from VA profile research will move to after the supporting docs in the next column on the [Research Planning Mural (https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1734718276719/2519a072b8fcd048659b4e146c7ba9bf73158871): Look into beneficiary profile. What do I see if I log in?. Lois suggested relying on the AE team to conduct the research on these on roles and relationships. We can re-evalutate the need to do our own research after we have looked at other team's research. 
      * Premal heard in a stakeholder meeting there's a problem with doc uploads. Design is already working on a UX improvement: Ticket: [#98909] (https://github.com/orgs/department-of-veterans-affairs/projects/1533/views/1?pane=issue&itemId=90587480&issue=department-of-veterans-affairs%7Cva.gov-team%7C98909)
      * Swap priority of supporting docs priority with CHAMVPA Pre-fill. Supporting docs may need to be broken down a little more. There are several topics within that area (duplicate HI cards, marriage doc, optional docs, mail-in docs, upload success messages)
      * Consider talking to CHAMPVA stakeholders again about how processing of the 1010d digital form is going to find improvements that may be needed.
      * Lois and Premal want to revisit conducting in-person research with the multiple claims processors at a later date. UX team suggested that in-person research may allow us to capture meaningful interactions that we can’t see remotely. We may be able to work some more in-person research with our users during that travel time to make it more valuable. If this is not deemed valuable we can conduct remote sessions.
    - Service Blueprint 
      * Premal getting new data on processing times. Keep fleshing this out. Lois to provide feedback on how easy this is to read and comprehend so UX can make improvements prior to working with the stakeholders.We want to continue notating missing info or questions
    - FMP Direct Deposit
      * AE team may be working on adding Direct Deposit to VA profile. This may not affect us though and may be good to get an idea on how the whole process works. May be draw out how we understand the direct deposit works according to what we heard from FMP stakeholders and desk research (on Slack) We can do this via a  service blueprint. We can show FMP stakeholders this to make sure we are both on the page and FMP or us are not missing anything
      * We should read through the existing process/workflow of the FMP claims. Highlight what areas of the form that would be different due to the introduction of direct deposit which is expected to launch in April.
      * Should we talk to past participants in the FMP user study? We can via Perigean. We should let Andy know that he can talk to past participants through Perigean. He can send us any updates he may want to provide to them

  
## January 13 2025
 - Attendees: Jamie Fiore, Lois Lewis, Andrea Merrell, Bo Altes, Premal Shah, Jina Ryu
	- ### Agenda Topics
 	    - Design Roadmap
   	    - Discuss future multiple claims research
  	    - Review Update CHAMPVA Service Blueprint
	    - Discuss FMP Direct Deposit and future research with past participants
 
  - ### Notes
    - Design Roadmap
      * No changes
    - The latest thoughts on the 1010D OHI Merge (Jina to share the embedded forms pattern from the 526 team)
      * The intro page pattern includes an  OMB block for both forms
      * The form utilizes the card pattern to add forms to support your claims
      * The team tried to have everything merged together but they found that it made one of the steps longer and it didn’t work well with the stepper.
      * The Veteran can start the form, can’t continue without.  Review page form just for 781
      * The form uses an eyebrow header to label the 781 within the 526
      * The form has an “Additional Form” section which shows on the review accordion
      * Use can can opt out of secondary form if wanted
      * The form has a reference to the paper form so a user can either submit it online or complete a pdf to upload.
      * In User Research: Found if asked to do something (as in provide more evidence) they would want to just do it now.
      * Action Item: Review other research for 526/781 form (create a ticket for next sprint)
      * We asked about how the backend would work with if submitted together but the 526/781 form is on a different system from us
    - Service Blueprints
      * Create a digital workflow Blueprint for each form as they launch
      * Is there a way to combine paper and digital form? Find examples of other teams that do this.  \

    - Research Opportunities
      * Do users care if these are 2 forms or treated as one application experience? Lois doesn't think that we will be able to get the answer for this with user research because it’s not a real world experience. 
      * Does submitting these two forms at the same time create any issues for processing? Is there a need for OHI to be a separate form submitted first? These questions seem more high priority. 
      * Keep in mind that VES will be moving in soon
      * Desk research of “form in forms” should be the priority  
      * We can come up with designs and maybe get some early feedback from stakeholders.
      * We can use the new service blueprint to get the conversation going and find out what pain points that they see.
      * We can look at the next steps questions from the [1010d/ OHI mural] (https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1734537770114/c43159bce476eaee8e52f597201223934411963b)too. Talk about how updates happen in the future? Talk to Pega and VES)
      * Schedule a meeting on Thursday to continue the conversation and potential generate some backlog research items 
    - Notes from the research planning meeting
      * Lois was suggested to push the 1010/OHI merge user research to the later date; maybe post launch.
      * General 1010d usability testing would pushed to a later date.
      * UX team suggested to run a short unmoderated study the using the term "sponsor" as other teams that cannot research this themselves would benefit from the results as well. This was orignally thought to coincide with the OHI/1010D merge research.  Lois suggested we depriotize it and possibly ask about the sponsor term during a more general 1010d usaubility study rather than having the card sort done through Optimal Workshop. She also suggested that we look at other teams research to limit doing our own research. 

## January 06 2025
- Attendees: Jamie Fiore, Lois Lewis, Andrea Merrell, Jina Ryu
	- Agenda Topics
		- Design Roadmap Review	
		- Discuss Multiple Claims/ Questions for CHAMVPA
		- 1010D OHI Merge/ OHI Letters
		- Research Opportunities
 		- RUM Dashboard Planning 	 
  - ### Notes
	* Design Roadmap Review
   	  * No updates needed
	* Discuss Multiple Claims/ Questions for CHAMVPA
   	  * We went over [this mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1735938239777/e82b16f55ca39c4028197289c331b92466ab6f87) to better understand the problem. We left some notes and further questions in the mural
   	  * Discussed how the third party liability questions (work/auto related accidents) are one of the driving factors for the current proposed multiple claims flow. We should ask CHAMPVA about some more details about their process when handling these questions. 
   	  * Premal wants us to prioritize user experience over lifting burden for CHAMPVA processors. However we heard that batch claims caused significant processor delays. We should research more about these delays; what it means by delays and how it may or may not contribute to lengthy reimbursement periods. Also we will ask about the ratio of the provider/beneficiary batched claims.
   	  * We will want to find out if we can have users submit multiple services and dates of services on one bill similar to RX claims?
   	  * Jamie will work on cleaning up questions to bring to the CHAMPVA claims stakeholder meeting on Wednesday 1-8 will also think about what is the appropriate visual to show to give more context. 
	* 1010D OHI Merge/ OHI Letters
    	 * Discussed the idea of a future state of CHAMPVA that can capture other updates such as school certs, OHI, marriage similar to 1010EZR
   	  * Mentioned that the OHI was built with the updates and initial enrollment in mind. We should take a look at standalone form after the integration of in the 1010d to see if we can target the content more to specifically communicate that is for updating insurance/address information
	* Research Opportunities
   	  * Gave an overview of the [mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1734718276719/2519a072b8fcd048659b4e146c7ba9bf73158871)
	* RUM Dashboard Planning
	  * Talked about how the 1010 team uses it, for investigating errors and or low CSAT scores/ comments
	  * Shared that the 1010 team uses a 10% sample for their forms with large volume (28K -52K per month). Probably would be a higher percentage if we set it up on our CHAMPVA forms

## December 30 2024
- Attendees: Jamie Fiore, Lois Lewis, Andrea Merrell
	- Agenda Topics
		- Design Roadmap Review	
		- RUM dashboard usage
  		-  Multiple claims [question thread](https://dsva.slack.com/archives/C068Q9DQACX/p1735058811378649) 
  - ### Notes
     * Design Roadmap Review
     * Will bring Design (Next column) work into Thursday Product discussions  on Team roadmap to better align work
 * RUM dashboard usage
     * Will have the RUM dashboard in Staging soon
     * It’s expensive and needs to be more targeted. Need to figure out who will be responsible for reviewing it and how we will use it?
     * We possibly can use it when we see issue such as the duplicate doc uploads on 
     * the 1010D
     * Storage of the recordings may be driving the costs. We can look into if it saves on cost to remove the recordings after a certain period of time. 
     * Ask 1010 team how they are managing reviews and costs
         * In general, how are they using this tool for research and what types of things are they researching?
         * How long do they keep their recorded session sessions?
         * How are you managing the cost of it?
         * Tag Premal, Bo and Lois in the question to the 1010 team.
 * Multiple claims question thread
     * Each date of service is one claim. What happens if there are 2 different providers on the same day? We don’t think we dove into this scenario with Stakeholders specifically. The notes don't mention whether someone can submit for 2 different providers/services if they are on the same day. (Example: a hospital visit where there is a separate bill for the anesthesiologist and the hospital stay)
     * Would accepting multiple claims affect the status of PDI’s (numbered batches of claims per bene)
     * If we are uploading multiple claims in one form sessions would that be a PDI? 
     * Are these the same rules with RX? Stakeholder notes state “ All pharmacy within the same year will be considered one claim” but this doesn’t sound accurate depending on what we know about medical claims. Jamie will double check this quote in the original transcripts
     * We need to have an open discussion with CHAMPVA partners about receiving multiple claims and what exactly can be accepted as one claim.
     * We should plan to show them relevant parts of the figma to add context 
     * Have these questions and examples ready by Monday 1-6 to go over with Premal and Lois. Stakeholder meeting is on 1-7
     * Jamie to revisit the Claim name on the list and loop with Rachel. If a person is only submitting one claim would the naming be unnecessary and a possible frustration point?  Explore some options and evaluate if necessary to name claims or treat as different experiences: 1 claim vs multiple claims. 
   
## December 23 2024
- Attendees: Rachel Pope, Lois Lewis, Andrea Merrell, Bo Altes
	- Review Mural for CHAMPVA/OHI Integration options
	- Shorter meeting due to Lois’ schedule

- ### Notes
- Discussion of pros/cons of each option:
	- Option A (intro page link):
		- Maybe we shouldn’t be driving people to the online form even if it exists (to avoid confusion)
  	- Option B (review page link):
		- Would only work if we could pass the data they’ve already entered into the OHI form so they don’t have to enter duplicate data
  	- Option C (fully integrated questions):
			- One of the open questions is how we would submit this form
			- Do users need to know it’s two different forms?
			- We can let them know at the end that we used the info to submit the OHI form also.
			- PEGA would have to handle this as two PDFs
		- General:
			- We need to think about next steps more before making any decisions.
			- We should involve PEGA in any decisions since it could potentially effect how they handle the forms (especially with option C)
			- We need to think about the cost to the Veteran/Family member for each of these options
			- If we integrate questions into CHAMPVA, is the OHI online form still needed?
  				- Yes for updates to health insurance or address.
				- Need clarification on how to handle other types of updates - status changes like becoming eligible for Medicare, or a child aging out of a parent’s insurance. This may need to be discussed with VA partners
				- we would still need OHI as a separate form
				- Question about how we are currently storing the duplicate data we receive (some of the same data is collected on each form).
					- We as a team are not writing to any database currently
					- All data is handled by PEGA and is probably separately stored for each form. May change once we move to VES integration
				- Question about whether or not we can tie form submissions together so that we know whether a user has submitted a different form.
  	 				- Not in scope for us to do that
					- PEGA may have a way of tying the information together
				- Overall, format of Mural is good for further discussions about these options
		- Decisions made:
				- No decisions made
				- We can all review and continue adding notes to the Mural to inform further discussions


## December 16 2024
- Attendees: Jamie Fiore, Rachel Pope, Lois Lewis, Premal Shah, Andrea Merrell
	- Agenda Topics
	  - Design Roadmap Review
	  - Design Backlog
  	  - OHI integration with CHAMPVA Application 1010d
	  - Bluesky presentation
   - ### Notes
    - Reviewing Roadmap:
     - Lois noted that it would be nice to see actual tickets in the Next column so that she knows what work is being done.
       - She would also like to provide input on what we are working on.
       - Discussion around how we would like to work, with resolution that we will discuss priorities in the sync then take the items from the Next column and create our own tickets.
     - Moved OHI staging review tickets over since they should be worked on next.
     - Moved research read-out to Now since the work is done and just the presentation needs to happen
     - Bo asked if any research should be on the board
       - Discussion around writing up questions first and then determining what actually needs research before adding to the board
       - Lois to provide link to another team’s Mural to see how they handled that
- OHI/1010D integration
    - OHI will still need to be a separate form because it is used for insurance and address updates
     - Need to create a high-level overview of the options for integrating OHI showing beginning/middle/end scenarios and pros/cons of each to present to stakeholders
     - Premal and designers are leaning toward integrating the questions instead of linking over, but need to review all options
     - We can start by outlining pros and cons of each integration approach.
     - We can think about launching OHI just for updates but keep the manual download in the CHAMPVA App in the meantime.
     - Premal advised we come up with a recommendation for stakeholders rather than asking them to make the decision
     - Overview to be created as a Mural for easy visualization
     - We will need to do some research in backend pdf creation too with stakeholders and engineers for whatever solution we would be moving forward with.
     - OHI is in staging review mid-January. Question about whether that should move if wanting to delay it until integrated into 1010D.
     - We can still pursue Staging review; it just means it’s ready for release. It doesn’t mean we have to launch it right away.


## December 9 2024
- Attendees: Jamie Fiore, Rachel Pope, Lois Lewis, Premal Shah, Andrea Merrell
	- Agenda Topics
	  - Review Design Roadmap
	  - Research Artifacts Documentation
	  - FMP Claims research artifacts
	  - Revised FMP Claims research findings
 
   - ### Notes
    * Review Design Roadmap
    * Heavier focus on file maintenance for this sprint
    * Will work on handing off the latest CHAMPVA form flow and a11y annotations to the engineers to progress towards staging review
* Research Artifacts Documentation
    * We will add form names to mural boards
    * Be consistent with 1010 team’s organization
    * Premal uses the master list on research links but it is a little harder to maintain. We will try to add links to the research links in the IVC UX Slack channel instead under the More tab (like 1010 design team)
    * We do not want to spend time on creating on our own user journey maps based on our own research. There’s not enough value to keep our own user maps based on our own research. We can instead add links or copies of the VA’s user journey to a mural board. We can add all of the journey maps for each program one a mural for CHAMPVA forms and one a mural for FMP forms. 
    * We still want to keep the service blueprints as something we maintain and add to as the program evolves  \

* Revised FMP Claims research findings
    * The new format works well. It helps to easily see what tickets we need and what we may want dig deeper to research  
    * Discussed in-person research with FMP/CHAMPVA Claims processing. It may be valuable to see claims processing done in person and converse with the stakeholders on their experience. We could present evidence to change back-end systems. We can maybe combine it with an off-site to work directly with stakeholders . 
    * Briefly discussed an idea about conducting in-person research with first-time 1010d applicants to observe them filling out the digital form for the first time. We may need to look at other in-person research and why they did it as opposed to virtual research. (MST) military sexual trauma team may have some research we can look into. 
    * Next steps would be to write brief research plans and in-person opportunities to see if it makes sense to pursue. 

## December 2 2024
- Attendees: Jamie Fiore, Rachel Pope, Lois Lewis, Premal Shah, Andrea Merrell
	- Agenda Topics
	  - Review Design Roadmap
	  - Research Artifacts Documentation
	  - Review OHI Required Email flow
	  - Review URL list
 
 - ### Notes
 	- Research artifacts
 	  - Opting to keep research in Github
 	  - Clean up the github links make should they are up to date and filed by form
 	  - Jamie to look for the claims user journey and check if it is complete. If it needs work it can be a lower priority
	- OHI Required email
	  - Look into collecting the name for the signer so we can pre-fill the signature. Evaluate with the engineer on the lift.
	  - Go forward with variable pronouns for the value add with the UX for. This will be for go live
   	  -  We can leave the third party signature per-fill for post-launch. We will want to do this across all forms as an improvement


	- URL list
 	  - Lois needed the URL list for GA set up
 	  - Bo has the events set up in GA 
	  - Premal shared the 1010D and FMP Reg URLs via the Zenhub ticket. 


## November 25 2024
- Attendees: Jamie Fiore, Rachel Pope, Lois Lewis, Premal Shah, Andrea Merrell
	- Agenda Topics
 		- Review Design Roadmap
   		- Status on Champva Claims readouts
		- Share work Jina will be doing as it relates to our forms
		- Blue sky presentation as it may relate to our forms in the future
  		- Review MBI options for OHI
		- Review Pre-fill for CHAMPVA Claims
 
 - ### Notes	
	- Status on Champva Claims readouts
		- Send Lois links to CHAMPVA Claims readout deck
		- May try to schedule a Stakeholder research readout for 11/27 or the next meeting after that. 


	- Jina Ryu’s work
		- She is working on similar patterns/requirements for asking for pieces of info such as medicare
		- She may be joining a few of meetings
	- Blue Sky
     		- Presentation given at the OCTO off-site
		- Dives into notifications that show up on my VA. 
		- Lois just wants to keep us in the loop because it may affect our claims and applications. Jamie and Rachel may be invited to the walkthrough of this. 


	- MBI
		- We all agreed Option B.
		- There is an open question about MBI that we need to ask the stakeholder. Jamie to circle back on this with Premal
	- Pre-fill claims
		- The current workflow may solve the majority of the issues with knowing who is filling out the form. 
		- The editable name field may solve the spouse logging in with the veteran credentials. 
		- Jamie will clean up the file/ content and document findings in a Mural board. 
		- We will deprioritize this project as a team until we capture some data from the 1010d’s signer flow. 
		- Will reevaluate if we need to do further research on signer roles and shared credentials after the forms go live


	- General
 		- Think about how to organize the improvements on the Figma file and look at 1010EZ team Figmas as a reference point




## November 12 2024
- Attendees: Jamie Fiore, Rachel Pope, Lois Lewis, Premal Shah, Andrea Merrell
	- Agenda Topics
 		- FMP claims research report
     		- MBI# designs/ questions for the OHI Cert


         - ### Notes
		- FMP Claims Research Report:
			- Don't want to post FMP as research report in GH because we didn’t do exclusive research for FMP
			- It seems almost like a copy of the claims report. Try to reformat as a key takeaways doc that points people back to the CHAMPVA research
			- Next steps for this is to pull out finding/recommendations, what tickets need to be created and any gaps that we may need to think about. This can done during our regular design syncs
		- OHI MBI #
			- We still need to collect the copies of the cards for now
			-  Medicare Part A and B users should always use one ID #. If someone has 2 separate ID#s for Part and Part B it may be an edge case. 
			- We need to know what numbers stakeholders need if a bene has an Advantage plan. Create a backlog ticket to talk about the MBI numbers with the stakeholders. 

## November 04 2024
- Attendees: Jamie Fiore, Rachel Pope, Lois Lewis, Premal Shah, Andrea Merrell, Bo Altes
	- Agenda Topics
 		- 1010 signer flow one more time together
     		- Review of the Stakeholder/Monday sync readouts
       		- Thoughts on the Research Roadmap Review (time permitting)

         - ### Notes

* CHAMPVA Registration signer/ email questions
    * Investigate relationship question on 1010: why do we need this? Is there a way to better word these options or make them into radios? 
    * Won’t need to resubmit for staging review if we only have content updates from CAIA. 
* Send Lois figma for ZSF VA notify 1010D so she can use it in her in person research session. The goal is to try to get feedback on if users understand the content on the email. Will send over some more ideas for in-person research.
* Stakeholder research readout 
    * Jamie to send over links to Research Readout slides for Lois to review. 
    * Asked to give more context to the stakeholders in regards to the overall claims experience and why we are sharing this info with them. Perhaps do a short demo of the claims form at the start of the meeting
    * We can trim down the slides further to save time. Only focus findings that matter to business rather than content and UI/UX issues
* Slides to the Weekly UX sync
    * Overall content presentation is good
    * Send to lois for review
    * Will work to fine tune slides and content. 
    * May want to consider adding the findings about the CHAMPVA Member number if time permits
* Research Roadmap
    * Feedback: Maybe not all findings are relevant to put in front of the whole team.
    * Felt rushed and maybe could have spent more time more complex findings 
    * Might be better to have more of the solidified findings/ recommendations.
    * Flesh out the recommendations with Lois a little more before we get to the research roadmap review. Will help figure out some of the “how’s” better.
    * The research roadmap review made the research feel more actionable. 
    * Timing could have been a little better so it was more relevant to what we are currently working on
    * We could move through the lower impact (things that are easier to fix such as content) items more quicker. 
    * Focus more on what findings surprised us the most. 
    * Maybe look at each one more closely. We could have smaller workshops for each one if needed 
## October 28 2024
- Attendees: Jamie Fiore, Rachel Pope, Lois Lewis, Premal Shah, Andrea Merrell, Bo Altes
	- Agenda Topics
		- Share out the update Design Roadmap
		- Require email for signer on 1010d (updated flow options)
  		- Discuss next steps for OHI flow now that we got more feedback from the CHAMPVA Claims/OHI teams
 
### Notes
* Roadmap, Prioritize the Zero silent failures work then the CHAMPVA Claims Readout.
* 1010D CHAMPVA Reg required email for silent failures \

    * We want to move forward  the option that removes the first screener question with having CAIA weigh in on the “Your name” screen and the checkboxes on the relationship question
    * Might be a larger engineering lift to prefill the applicant name, address and contact info in the list and loop 
    * Recommended to ask for level of effort from engineering first, then collaborate with CAIA 
    * Engineering work won't be this sprint with FMP work already in flight.
    * We are leaning towards getting UX where it needs to be as the path forward right now rather than work on simpler solutions. Premal to can make look into  if we can delay launch to work one the this UX solution
    * Do we have to go to staging review again? Lois doesn’t think so.
    * **Action**: We will add the story and time space to do discovery engineering work for this flow in sprint 3.
* OHI cert changes to PDF form/Digital form: 
    * We need to get staging and figma more in parody with each other. 
    * We need to control the changes from coming from the stakeholders better
    * **Action**: Design to get figma design as it should be based on business needs from the IVC stakeholders. Break the change down by user stories then take a look at the changes and decide what gets in MVP and what can be pushed post launch.

## October 21 2024
- Attendees: Jamie Fiore, Rachel Pope, Lois Lewis, Premal Shah, Andrea Merrell, Bo Altes
	- Agenda Topics
		- Share out the update Design Roadmap
		- OHI Flow: Part C and Part D questions to account for PFFS
  		- Discuss the OHI PDF change. Concerned with IVC stakeholders and our interpretation of the Part D vs Pharmacy Benefits. 
 
### Notes
- OHI Flow:
	- For now we are keeping the flow the same
	- This uses that have both an Advantage plan and a separate Part D plan might be edge cases. We need to do some more research with the stakeholders to know if we need to solve this. If they are edge cases we may be able to allow those users to get the info to IVC in other ways. We are concerned with confusing the majority of Advantage plan users by asking them if they have Part D. 

	- We are removing Prescription Discounts from the health insurance plan types questions on the pdf and the digital form
	- Confirm with Angela P. if we need Part D effective dates. 
	- Our suggestion is to keep both Part D and pharmacy questions to capture those people with Advantage Plans with a bundled drug plan.  

- Silent Failures and required emails deadline
	- Moving forward with requiring emails on all forms 
	- There’s not a very straight forward solution for 1010D (CHAMPVA Registration) so we may be able to change the schedule for 1010D. (Launch with email by 11/11) Premal to inquire about the date change. 
	- Need to know from OCTO:
		- Are we decoupling what we are doing on the digital vs paper form? Are we solving for both? Does VES have to accept that email? Premal to have a conversation with OCTO about what is in involved for 010D
	- IVC will come up with a recommendation for requiring an email to send users a failure notice. 
	- We will make the FMP Reg required as it’s an easier task. 


## October 15 2024
- Attendees: Jamie Fiore, Rachel Pope, Lois Lewis, Premal Shah, Andrea Merrell, Bo Altes
	- Agenda Topics
		- Share out the updated Design Roadmap
		- Share some updates on the CHAMPVA Claims Research Report and answer any questions you may have about it during the Sync.
		- Share agenda items for the CHAMPVA Claims Research Roadmap Review
  		- Share the OHI Presentation for the IVC stakeholders
### Notes
* Design Roadmap
    * Updated: moved the COP and Stakeholder CHAMPVA Claims research readout to the Next column. 
    * Jamie to find a way to work CHAMPVA Registration in to the readouts
* CHAMPVA Claims Research Report
    * Jamie updated the report according to Lois’ suggestions. 
    * Lois to review the report and not any other changes needed.

 



* Claims Research Roadmap Review
    * Lois to see if she has time open to schedule the sessions earlier than 10/29
    * We may need to rethink how and when we do the Engineer LOE ratings for each finding. We plan to get through the finding analysis and decide what would be the most helpful to do next. 
    * Jamie to tighten the plan for Part 2 on the Roadmap Review
* OHI Presentation to IVC stakeholders
    * Presentation is good with a few minor adjustments. Remove the yellow note tabs and maybe try to make the screens/ form image larger.
    * Explain the goal of the meeting as a review of the latest form flow to align everyone with the data that we are collecting from Benes as per are last few convos about OHI
    * While presenting this to the IVC Stakeholders, explain that we are only showing Medicare and HI questions b/c to show deviations we decided on from the pdf form. 
    * Explain what branching is on the form while presenting.  \

* In-person research
    * Think about what we want to ask for in-person research appointment
    * We want to focus on how caregivers approach My VA. Perhaps ask about the status of Registration/ Claims or their experience of how spouses log in or if they choose to use their Veteran’s Account.  What would a caregiver or spouse want to see on their My VA?

## October 7 2024
- Attendees: Jamie Fiore, Rachel Pope, Lois Lewis, Premal Shah, Andrea Merrell, Bo Altes
	- Agenda Topics
		- Review the 1010D design related staging review tickets and talk through some of our suggestions to resolved them
		- Discuss presenting the new flow to the OHI team
			- Goals
			- Timeline
		- Update on the CHAMPVA Claims Research Report
		- Discussion on setting up a Claims Research Finding Workshop
			- Goals
			- Timeline
### Notes

* CHAMPVA Registration: 
    * Make sure we are clearly defining what changes we are making and find a way to attach the ticket to each issue we address on the figma file. 
    * Look at the 1010 team’s (healthcare apply pod) work to see how they are handling reporting changes on the figma file.
    * Also, look into to how they are working with CAIA on content changes
* OHI:
    * We will present the flow and how it relates to the pdf form the Claims /OHI team during our regular scheduled stakeholder call (10/16). Remind them of the last conversation we had about data we do and don’t need to collect. 
    * Consider creating a figma prototype to walk them through the form.
    * The goal is to ensure that we did not miss anything that is needed in order for the IVC team to process the form. 
    * We may have to collect the Medicare / HI insurance ID numbers eventually. We hope this will increase the likelihood of removing the HI and Medicare card uploads. 
    * We want to wait until they update the paper form before we update the digital form to include the ID numbers. This change is still TBD and most likely will wait until VES is ready so this will not be an update needed for MVP launch.    
* CHAMPVA Claims Research Report: 
    * Including the recommendations in the finding details works better. 
    * Consider moving the” Recommendations at a glance” after the “Findings Details”. 
    * Keep the finding name in the heading for each recommendation in the “Recommendations at a glance” so the reader can look back at the details if they want. 
    * Keep the overview of the research study that was just added on Friday (10/04/24) where it is in the report.
    * Plan to wrap up this round of changes by the end of the sprint \

* Claims Research Roadmapping Workshop: 
    * The goal is to look at the recommendation as a team with, decide what is work pursuing, prioritize them and bucket the tickets (backlog, design, and discovery tickets).
    * We want to make decisions together on if and how we want to approach these. 
    * Timeline: Try to schedule the workshop for next sprint or early in sprint 3
    * Jamie to organize a Mural Board for “Recommendation Roadmap” 
    * Keep in mind how these findings relate to FMP Claims form. This can be a separate ticket for design. 


## September 30 2024
- Attendees: Jamie Fiore, Rachel Pope, Lois Lewis, Premal Shah, Andrea Merrell, Bo Altes
	- Agenda Topics
	- Review OHI Form updates from stakeholders
	- Quick review of CHAMPVA Claims Research Report
  	- CHAMPVA Registration Staging review items for Design
### Notes
- OHI
	- Let exclude the "other Medicare" plans for now because that the original PDF does not ask for anything other than Part A, B, C, and D. We do not have a lot of data on the other medicare plans and the volume of users with those and adding the other Medicare plan (PACE and cost plans) in the digital form may cause some additional engineering efforts and PEGA issues.  After the form launches we will continue to monitor this to see if we see any significant drop offs.  
	- Revise the presentation of the before/after changes so the flow is easier to follow
 	- Find a better way to present the changes to the stakeholders. It's been a while since we presented the digital form to them so the pdf form may be more top of mind to them. Find a way to break this the proposed changes and relate it to the pdf form better.
- CHAMPVA Claims Research Report
  	- Lois had to drop off the call early so Design will follow up her with on if she would like more of a walkthrough of Draft 1
   - We decided to combine the Research and Product Syncs into the weekly Design Sync. We will go over the roadmap at the top of the meeting followed by any design related items so Premal may drop off early if he needs. We can cover the research items with Lois as the last part of the meeting.
- CHAMPVA Registration Staging review items for Design
	- All Staging Review tickets will be post launch to leave capacity for the Engineers to work on the FMP Registration launch. Design can get their tickets ready ahead of time in the Figma files and work on them as our capacity allows. We are predicting to move them into "in progress" early in Sprint 2. 


## September 23 2024
- Attendees: Syd Hoeper, Bo Altes, Lois Lewis, Premal Shah, Rachael Penfil, Steven Straily, Devi Hill, Mary Wang, Ray Messina
- Facilitator: Syd
- Next meeting facilitator: Jamie
- Agenda Topics
	- 10-10d option vs required (Syd)
 	- Walkthrough of the latest medicare card upload screens (Syd)
 
  ### Notes
- Premal found out some OHI information -- going to wait til Jamie is back
- Double check that we cannot use an accordion within the page
- Double check what the static page has 
- Look to see if any VA forms have just an Upload section at the end
- Lois would like to see a source of truth in the FMP stuff (follow up with Jamie)
- Lois inquires about Figma naming convenstions -- starting a new file vs adding to an existing one



## September 16 2024
- Attendees: Jamie Fiore, Syd Hoeper, Bo Altes, Lois Lewis, Premal Shah, Rachael Penfil, Devi Hill, Mary Wang, Ray Messina
- Facilitator: Steven
- Next meeting facilitator: Rachael
- Agenda Topics
	- 10-10d option vs required -- low priority (Syd)
 	- Walkthrough of the latest medicare card upload screens & OHI Status
 
  ### Notes
- Syd is going to work on refining the 10-10d optional versus required flow based on Lois and Premal's feedback during the meeting, and it will be presented again at a later date.
- Jamie to do a little reasearch on what the legal use for Medicare card images are.
- "I don't like it, because it sounds like we have processors that are uninformed." - Medicare cards required in all situations.
- Lois is concerned about keeping Medicare cards up to date.
- Jamie is going to check into make the back of the card more readable.
- Clarify that the form is not yet in a digital version when sharing out the Service Blueprint
- Adding on PEGA information to the Service Blueprint
  
## September 9 2024
- Attendees: Jamie Fiore, Syd Hoeper, Bo Altes, Lois Lewis, Premal Shah, Rachael Penfil, Devi Hill, Mary Wang, Ray Messina
- Facilitator: Syd
- Next meeting facilitator: Steven
- Agenda Topics
	- Discuss FMP Prefill
	- Discuss "synthesis checkpoints"
 	- Discuss OHI CHanges
  	- Talk about interviews
 
### Notes
- Premal worried about messaging for "apply to this form" but it will apply to the FMP systems
- Premal and Lois are in agreement that the pattern looks good to move forward
- Jamie showing that Part C needs to be included in the OHI PDF updates -- current PDF harms Veterans exiperiences, would like the PDF to be update to accurately reflect what the processing team needs
- Jamie proposes some potential options for shortening the form and making the experience more streamlined -- looking for information about how to move forward
- If we make OHI updates on the frontend, it also impacts engineers because we need to stamp onto the PDF with these changes
- Rachael spoke with all folks that Lois suggested while looking into their synthesis checkpoints -- no other teams do this to an extent beyond what our teams do
- Lois wants the synthesis checkins because she's having a hard time connecting the findings to the notes, so it'll make it easier for her to understand the final report (so she knows what's coming, other than just reviewing the end report)
- TBD whether or not Rachael and Steven will be the ones doing the CHAMPVA Claims analysis -- will need to do some sort of handoff to Jamie that Lois would like to be part of
- Hopefully Rachael and Steven will have some initial synthesis findings before rolling off the project, so they can pass off information to Jamie and Lois -- they will pass off whatever they have
- Andrea suggests figuring this out moving forward with the new team and how they communicate the research back to Lois (improve the report itself, not just the communication)
- Lois suggests possibly doing a "topline" report
- Steven explains that our research team already does more than many other research teams, as he has spoken to other teams
- Andrea suggests we wait to change the process until the new team starts and create it as a team norm instead of trying to change it now
- Premal thinks we need some sort of sync before the new team starts just so this CHAMPVA Claims analysis can be what Lois wants
- Rachael says we should wait until we get the 6-8 interviews done before we move forward with synthesis -- currently blocked by Perigean not recruiting enough people

- Double notes from Jamie:
- F2 Prefill:
Is it confusing to state that the address will only update on this “form”? Premal to this bring up in a leadership meeting but what we have now maybe ok for launch.
Consider changing it to “this applies to FMP forms”
We found out that you cannot change the Name , DOB and SSN through VA Profile online.
Premal and Lois are good with the overall Prefill pattern
- Synthesis checkpoints:
This will act as a checkpoint mid-synthesis to lessen the time it takes for Lois to look through the report at the end.
With Lois not being involved in the synthesis at all has made it difficult for her look through the final report.
Lois wants to be apart of the handoff when Rachael and Steven leave
There may be a checkpoint before they leave but we can be sure depending on timing
There will be a handoff of the synthesis from Rachael and Steven to Jamie and Lois once they roll off
The goal is to improve the communication between the synthesis and report. Lois expects for it to serve as a way to talk me through what is happening for clarity.
Lois and Premal are trying to standardize the way the healthcare teams work.
The Checkpoint would be more related to how the final report gets shaped and not related to how the research gets done. 
Andrea suggested setting up as a norm for the “new team” to handle the checkpoint. 
Involve Jamie in the research over the next few weeks
Make Wednesday as a cutoff date for getting interviews.
Lois will discuss concerns with no-shows into her meeting with Perigean.
  
### Decisions and action items
- Syd to follow up with designers and CAIA to make sure the "applies to this form" copy is accurate and clear for users
- Premal to talk with Delaney about updating the form -- see if we want to update it now or wait til post launch
- Jamie to clean up OHI file and get it ready to share with stakeholders (low priority though)
- Plan is to try to get as many more interviews in as we can, and cut it off on Wednesday 9/11
- Lois to follow up with Perigean about no-shows
- Synthesis check-ins to be determined by new team structure




## August 26, 2024
- Attendees: Jamie Fiore, Syd Hoeper, Bo Altes, Lois Lewis, Premal Shah, Rachael Penfil, Devi Hill, Mary Wang
- Facilitator: Rachael
- Next meeting facilitator: Steven
- Agenda Topics
	- Next steps for OHI
 	- Debrief on Friday's pilot session for 59a UXR
 
### Notes
- Next steps for OHI
	- We were not aware of taking out the pharmacy benefits for Medicare. Jamie thinks - better to capture more data than less, and we would want to firm up if we really need it before we take it out. Seems to be some confusion.
 - Since it's already on the form, it's an optimization but not requried to take it out - Jamie
 - Lois - if we can ask for less, that's better from a UX perspective. But Jamie is worried about not collecting data that they do need. 
 - Bo and Lois - feels like they're trying to remove stuff from the digital form before the paper form.
 - Paper form is going to update end of October. Keep on eye on that. We need to figure out who is in charge of that.
 - We also need to revise the upload screen
 - Do we want to delay staging?
 - Mary - we need to know what's going to happen with updating the paper form
 - Lois - let's look into how to download the confirmation page so we can look into using it to reupload later
- Pilot session debrief
	- We need to understand what a claim actually is - probe on this 
 	- Consider easy exit if people dive too deep into what it's like in a doctor's office
  
### Decisions and action items
- Premal OK with defaulting to put an email on all the forms (Bo - need to determine what to do with it on the back end. Need to investigate how it would work)
- For now, we are not going to take out the question on pharmacy benefits for Medicare. We first need to understand how/when/who will update the paper OHI form.
- Need to look into who owns the forms and keeps them aligned
- Understand when we're going to be able to use a "download form" option - Syd to do discovery around who's doing it and how it works

## August 19, 2024
- Attendees: Jamie Fiore, Syd Hoeper, Bo Altes, Lois Lewis, Premal Shah, Rachael Penfil, Devi Hill, Mary Wang
- Facilitator: Jamie
- Next meeting facilitator: Steven
- Agenda Topics
	- Review OHI Medicare card upload screen
 	- Review CHAMPVA claims doc upload
	- Review CHAMPVA Application and OHI forms merge
 	- Talk through any PRA risks involved with the CHAMPVA Application and OHI merge
  

### Notes
- OHI: Frame the question about Medicare cards as we are trying to reduce the content on the uploaded screen if other card types are not needed. 
	- If we only need the "red white and blue" card, provide examples of what the card looks like. Keep a11y in mind while doing this. 
	- When digital form launches we will remove the OHI questions from the 1010d
- Claims Download: Consider clarifying content on the doc uploads especially if needed to upload 2 EOBs for 2 insurances. 
	- The current design is meant to break out content on the upload screens because there is so much info. 
 	- Consider exploring combining the 2 EOBs screens. 
 	- Double check why we got push back on preempting the bene that they will need to upload the EOB on a separate screen.
	- We will continue to use the current flow for user-testing 
  	- We will be able to ask about this in testing (what do you wish happened). 
- 1010D merge and OHI: check out what the 1010ez team did to add the OHI questions  and if they have any research that may be relevant to us.
	- Lois will share the research that she can find.
 	- Premal: the PRA has more to do with the public burden. Not increasing the burden because the OHI cert is part of the application process. Premal will gather more data around this.
  	- Look at how the 1010 team is documenting the changes on existing forms so it's easier to present to stakeholders. Lois can gather the files from the 1010 team
  	- - We need to launch the OHI and 1010D first before continuing further with the design
  	  - Syd checked with 1010ez team on 8/20/24 and they do not integrate any OHI questions (Slack thread: https://dsva.slack.com/archives/C076R0F49L0/p1724180087168479)
  
### Decisions and action items
- Ask the OHI/Claims IVC team about their process involving the schedule of benefits.
	- Syd asked and: they have not dealt with 10-7959c (OHI form) in any capacity
- New patterns on confirmation may have a print to pdf button. Design team to look into.
	- Syd looked into it and there is a pattern being made right now, but not yet available for use (Slack thread: https://dsva.slack.com/archives/C01DBGX4P45/p1724180305823079)
	- 10-10CG team does have a "Download completed form" button, Syd to look into if we can use it or if we have to wait for Jeana's designs
- Premal will gather more data around PRA and the 1010d OHI Merge.
- Lois will share examples of how the 1010 team presents their changes to an existing digital form
- Probe on the billing statement and EOB upload screen in research to gather more data.
- Ask the IVC team about the types of cards they need in order to process the OHI cert

  
## August 12, 2024
- Attendees: Jamie Fiore, Steven Straily, Syd Hoeper, Bo Altes, Brian Wilke, Lois Lewis, Premal Shah, Laura Willworth
- Facilitator: Syd
- Next meeting facilitator: Brian
- Agenda Topics
	- Regroup on 10-10d remarriage flow (Jamie)
 	- Design pattern question around save and sign in (Lois)
	- Invited Laura for the second half of meeting for remarriage conversation

### Notes
- For first iteration, prefill will not be used for FMP; Save in progress will be used right away
- Remarriage feasability for launch and post-launch
	-  Option B is the least amount of effort as 
	-  Discussion around whether or not to include certain required documents regarding eligibility

### Decisions and action items
- Premal and Lois to inquire with the business side about needing the remarriage ending doc
- Need to make a decision on which pattern we're using -- will make that decision based on information we get from stakeholders regarding the required paperwork
- Jamie to explore another remarriange flow with one upload screen to capture all documents
- Laura to take a stab at the upload screen copy
- Premal to add designers to meeting with Delaney this afternoon
- Laura will send static documents



## August 5, 2024
- Attendees: Jamie Fiore, Steven Straily, Syd Hoeper, Mary Wang, Bo Altes, Brian Wilke, Rachael Penfil, Lois Lewis, Premal Shah, Devi Hill
- Facilitator: Rachael
- Next meeting facilitator: TBD
- Agenda Topics
  - Suggestions or discourse related to the upcoming CHAMPVA claims user research
  - Example of [design option presentation](https://www.figma.com/design/UljiHam46o5DItC5iDgmPd/10-10EZ?node-id=5274-33024&t=zQF3QsdoeTPoeiVB-1) from 1010ez team
  - Addressing [CAIA comments on 10-10d](https://github.com/department-of-veterans-affairs/va.gov-team/issues/70698)
### Notes
- Suggestions or discourse related to the upcoming CHAMPVA claims user research
	- User critical tasks around new uploads
	- Similar methodology to 10-10d
	- Lois: health team has an exercise they do ahead of time. Let's maybe go over it on Thursday. Anne Costello on MHV team.
	- Add Syd, Jamie to that meeting.
 	- Lois will share with us the Mural after the call.
- If we are trying to understand how to change a feature, wireframe a few  options using [design option presentation](https://www.figma.com/design/UljiHam46o5DItC5iDgmPd/10-10EZ?node-id=5274-33024&t=zQF3QsdoeTPoeiVB-1)
	- Also appreciates how their Figma files are organized.
	 - Jamie shared the 10-10 team's [process doc](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/ux-team/process-content-collab.md) and we might want to reference this when considering how we iterate and work in Figma
- [CAIA comments on 10-10d](https://github.com/department-of-veterans-affairs/va.gov-team/issues/70698)
	- We have addressed general delivery/homelessness question and some other items in staging
 	- Need to figure these things out before we move forward, but we don't need to implement them all. Need to consider and respond.
 	- Remarriage question will be removed
  		- Remarriage documentation - stakeholders have said they don't need the documents, they just need the date
  			- PRA - we can't ask questions that aren't on the form. But we may be able to ask for documents.
  	- Premal comfortable with the delays it may cause.
  	- Optional docs - post launch

### Decisions and action items
- Will conduct information-gathering exercise re: CHAMPVA claims research during Thursday's research meeting - what do we want to learn?
- Will reference Lois' design option presentation when considering and sharing multiple options.
- Consider and respond to/address CAIA ticket
	- Remarriage - ask for documents. Divorce too?
 		- Screening questions are OK if it gets us to the right document uploads
 		- We need to match the data CAIA is asking for on their intro pages
		- Consider making language more vague to capture edge cases.
 		- Provide a few options to present to Lois and Premal, CAIA.
  	- Homelessness question - double check and  make sure Figma matches staging. We took it out. Also add it to design decisions documentation.
  	- 3rd party signer - also developing. Make sure Figma matches staging between 10-10d and 59a.
  	- Optional docs - post-launch
  	- Provide justification for repeitive content - recognition over recall, accessibility

## July 29, 2024
- Attendees: Jamie Fiore, Steven Straily, Mary Wang, Bo Altes, Brian Wilke, Rachael Penfil, Lois Lewis, Premal Shah
- Facilitator: Jamie
- Next meeting facilitator: TBD
- Agenda Topics
  - Confirming we're adding content changes post research for 10-10d and CAIA collaboration.
  - Touch on 10-10d accessibility testing for staging review.
  - There's a question from CAIA about (North or South) Korea as an option to choose from may want to look into to what other forms. Lois to look further about this.
  - In the future think about if this is a way the Design can help Premal answer questions on the larger IVC presentation? Maybe and Design FAQ or compiling our decision docs. 
### Notes
- What is our communciation plan with CAIA beyond sharing the full report with them? Check with 1010EZ team how they do this.
    	- There weren't many changes made post testing(aligned the inrto page with the lastest form VADS and updating Headers so there are no duplicates. Possibly talk to CAIA about to move past content review pre-staging.
- There is [an artifact](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=briandeconinck&labels=a11y-testing&template=a11y-testing.yaml&title=Accessibility+Testing+for+%5BTeam+Name%2C+Product+Name%2C+Feature+Name%5D) that we need to present prior to staging review
- Rachael has anticpated the 1010d (CHAMPVA Registation) a11y testing to staging review and is prepared. Will need more than 1 day to complete and can prioritize it for next sprint. She may need some addtional support to get this and the other work done for the sprint.
  - Needs to be done 4 days before Staging
  - They are many other artifacts/checklists to be done prior to staging. Bo is working on the others.
  - Recommended that we don't schedule Staging Review prior to be a11y being done.
  - Plan for testing to produce more changes to be made by engineering
  - Make it top priority for next sprint
  - Need to make sure frontend/backend engineering is complete
  - Still acheivable to work on the convo guide and research
### Decisions and action items
- Recap what was changed on 1010D (CHAMPVA Registation) the Figma post user testing to CAIA in the [Slack thread](https://dsva.slack.com/team/U03CGUVK1U5)
- Check in with the 1010EZ team to learn if we can streamline our communciation with CAIA with how they are communicating with them so we can acheive all of the touchpoints clearly prior to production
-  Lois, Jamie, Steven and Brian to help run the 1010d a11y tests if capacity allows
-  Premal is ok with taking risk if there are small engineering changes that are made after testing has started.


## July 22, 2024
- Attendees: Jamie Fiore, Syd Hoeper, Steven Straily, Mary Wang, Bo Altes, Brian Wilke, Rachael Penfil, Lois Lewis, Premal Shah
- Facilitator: Steven
- Next meeting facilitator: TBD
- Agenda Topics
  - Status on FMP service blueprint
  - Status on CHAMPVA registration user journey
  - Update to include prefill in FMP forms
  - Status on CHAMPVA claims service blueprint
  - Update on 10-10d UXR stakeholder readout
  - Confirmation page updates
### Notes
- Status on FMP service blueprint
  - Lois: Consider a glossary of terms for service blueprint.
  - Premal: Shared a link to something with an example of a [glossary](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1591021987722/bd742279a6bfe20ad147adb6f20e8821470399fe?sender=u50b7e26ebf5d18d7d4312080)
  - Premal paraphrase: We are going to become the source of knowledge for service artifacts on these 
   programs, so be prepared to keep this documentation updated and to share it in that capacity.
- Status on CHAMPVA registration user journey
  - Lois: Less focus and time should be put into the journey map compared to the service blueprint for our 
   needs.
  - Lois likes this, will be good to share out with stakeholders in the future along with VEO's work.
- Update to include prefill in FMP forms
  - Premal: "I think I'm okay with it, because the information shouldn't change."
  - Premal: Errors should be the same across all forms, and Michael shared defaults earlier, Bo is going to 
    look into and compare these later if needed.
  - Brian: You will need to make sure that language on the defaults are generic or tailored enough to fit 
    our needs.
- Status on CHAMPVA claims service blueprint
  - Lois: Worried about the visual presentation of the CHAMPVA claims blueprint compared to FMP, 
    specifically, the current state of the "time" is distracting.
  - Lois: I did find it useful to see who is doing what by mentioning the positions.
  - Lois: Some arrows weren't matching up properly and need to be corrected.
- Update on 10-10d UXR stakeholder readout
  - Lois: Consider a way to make system names more visible by having them in bold.
- Update on 10-10d UXR stakeholder readout
  - Lois is going to try and get access to make comments.
- Confirmation page updates
  - Lois and Premal to check confirmation page updates async.
## July 15, 2024
- Attendees: Premal Shah, Jamie Fiore, Syd Hoeper, Steven Straily, Mary Wang, Bo Altes, Brian Wilke, Rachael Penfil
- Facilitator: Steven
- Next meeting facilitator: Steven
- Agenda Topics
  - Priority for CHAMPVA stakeholder readout
  - New cadence for CHAMPVA registration meeting
  - Premal to reach out for information/feedback on IVC team presentation
  - Pre-fill changes for FMP Reg and Claim walkthrough
  - Confirmation emails and page
### Notes
- Priority for CHAMPVA stakeholder readout
  - The earliest we can do the read-out is 2 1/2 weeks from now.
  - Target Sprint 23 for doing the readout.
- New cadence for CHAMPVA registration meeting
  - 10:30 EST on every other Tuesday, not including this week.
- Premal to reach out for information/feedback on IVC team presentation
  - Live presentation to be given on what the team has done so far and the impact of our work.
- Pre-fill changes for FMP Reg and Claim walkthrough
  - Premal: Be aware of the LOA restrictions.
  - Premal: Make sure the different forms are aligned and inform me if they are going to be possible delays in going to production.
- Confirmation emails and page
  - Bo: Plug in a number on the page for if you haven't seen an email in X number of days.
  - Bo: We may want to line up VA notify and Figma at some point.
## July 8, 2024
### Notes
- Attendees: Jamie Fiore, Syd Hoeper, Devi Hill, Mary Wang, Bo Altes, Brian Wilke, Rachael Penfil
- Agenda topics:
    - 7/8/24 CoP Meeting & Presentation:
        - Rescheduled. The readout will be next week. There was someone new scheduling and they didn’t know about the presentation. 
     - Review of Design priorities:
        - Rachael and Mary have been working together on priorities.
        - The Roadmap Mural has been updated in the Design Now/Next/Later priorities section.
        - Purple items indicate pending stakeholder review
        - ChampVA Service Blueprint claims can't be done yet, so they have been moved to the later column
        - OHI has one item left, but the team needs to focus on 1010D first as the main priority
        - Email messaging status: All waiting on stakeholder review - FMP registration, CHAMPVA registration and OHI email review messaging.
     - 1010D: Comments are in Figma, but what needs to happen next with 1010D?
        - Look at staging and making sure it matches Figma
        - Updating Figma is for recording keeping
        - Changes that have already been made are in tickets that Bo created (Epic 83904)
        - Mary created a placeholder ticket for 1010D staging (Ticket 87065)
        - Syd is going to create a 1010 UAT ticket and tag Bo 
        - Rachael added stickies to the Roadmap Mural board as a reminder to make 1010D & F1 match Staging.
     - How to communicate with stakeholders (Questions):
	     - Product should be the filter
	     - How do designers bring this up with product? What is the best process?
  	     - New process defined: When designers have stakeholder questions ready, they should post them in the ivc-forms Slack channel and tag Premal, Lois, Bo, Mary, and Devi and provide a date/time they need the response by. If a discussion is needed, we can set up a quick call to review the questions. 
     - Confirmation email questions:
	     - The team needs to review Premal’s feedback. As an example we need to confirm phone numbers.
	     - Bo will chat with Premal when he is back about the feedback
  	     - Backend questions, please ask the team first (not stakeholders)
     - Service Blueprint for FMP:
         - Brian W. is going to start on it and Rachael will jump in when she can to work with Brian. 
### Decisions and action items
- Moving forward, when the team has questions for stakeholders they will write them up and post them in the ivc-forms Slack channel. They will tag Premal, Lois, Mary, Bo, and Devi and share when they need the information by. If a meeting is needed, we can set up a quick meeting to review the questions.  
 
## June 24, 2024
### Notes
- Attendees: Lois Lewis, Jamie Fiore, Syd Hoeper, Steven Straily, Devi Hill, Mary Wang, Bo Altes, Brian Wilke, Rachael Penfil
- Facilitator: Syd
- Next meeting facilitator: Syd
- Agenda topics [per Slack thread](https://dsva.slack.com/archives/C068Q9DQACX/p1718986997244209):
    - Order of operations: CHAMPVA readout vs. process flows
        - slotted to work on the process flows this sprint (ends next wednesday)
        - Lois says let's get the process flow done, and then maybe we can hold off on the service blueprint and switch to the readout instead for the next sprint
        - Lois is unsure of Premal's urgency for the readout
        - So: focus on FMP Claims process flow, next sprint reassess whether to work on service blueprint or read out
    - OHI discussion last Thursday + comments box
        - Lois is concerned that there's an unnecessary box that's not needed
        - Stakeholders expressed that people do submit additional comments and documents with their applications
        - By digitizing the form, we're removing peoples ability to add what they want "into the envelope"
        - Lois doesn't want clutter or a user to say "what kind of comment would I have?"
        - Lois says that it's not a hill she'll die on, so if we want to add it it's okay as long as it's simple and people only see it if they answer yes to the screener question
        - There's currently an additional comments box for the OHIs, so we can match the pattern and copy it into the Medicare section
        - Comments will be optional
    - Share discussion around "Use same address" for FMP forms
        - Thought is to get rid of the "use same address" radio button and instaed just she the home address screen again with the (as proposed by Brian)
        - Lois is inclined to go to design office hours to see how others do it
        - Lois is hesitant to go with Brian's suggestion because "the researched showed that people wanted [to cut down on entering their address(es)]"
        - Lois wants:
              1. See how other people are handling this situation
              2. Go to design office hours and see what they think
    - Design Discussion Documentation
        - Syd made a combined version of all designers' ideas and Lois likes it -- Syd will tweak and touch base with other 10-10 team to get their feedback
        - Future Considerations section should live in Figma for designers and eventually be transferred to Mural for wider visibility

### Decisions and action items
- [ph]
- For now, continue to work on the process flows for the remaining sprint. Next sprint assess as a group whether to do the service blueprint or the stakeholder readout (Rachael and Steven)
- We will be adding the optional additional comments/uploads to the Medicare section of the OHI form that matches the pattern in the health insurance section (Jamie/Syd and Mary)
- For the FMP address situation: sign up for design office hours to discuss with them, and see how other people are handling the situation (Brian)
- Tweak design decision format and show it to 10-10 team to get feedback (Syd)
- Next Monday we should talk about what's upcoming so Lois can consider getting coverage for

## June 17, 2024
### Notes
- Attendees: Lois Lewis, Premal Shah, Jamie Fiore, Syd Hoeper, Steven Straily, Devi Hill, Mary Wang, Bo Altes, Brian Wilke, Rachael Penfil
- Facilitator: Rachael
- Next meeting facilitator: Syd
- Agenda topics [per Slack thread](https://dsva.slack.com/archives/C068Q9DQACX/p1718630778474219):
    - [Process flows](https://dsva.slack.com/archives/C05UDS77ZPH/p1718138441946389) Mary posted a bit ago and [processes](https://dsva.slack.com/archives/C05UDS77ZPH/p1716583521410209) posted by Premal - does the resolution of these meet our needs?
        - Example of [workflow diagram](https://app.mural.co/t/departmentofveteransaffairs9999/m/lighthouseapiplatform7991/1631736307705/31e23e9b9754a0ffceecdc2f037dc86976553b08?sender=ud64d6310f5d321d8542a2119) Lois shared
        - We don't have anything for claims, so we can start there. We don't want to duplicate work.
        - Start with an as-is, and work towards a to-be (PEGA/VES)?
        - Verify what we have and update it.
        - From a non-research perspective (Mary and Bo) is this enough? We'll verify but maybe that's it.
    - Rescheduling research sync? It's at the same time as a stakeholder interview.
        - Will reschedule, Lois to send availability. 
    - Alternate signer from HE side
        - Caregiver
        - In some cases POA.
        - Form is currently live, w/o third party signer. But they changed the paper form to include 3rd party questions, and now they need to update digital form.
        - Last feedback they got from stakeholders - they have to fill out 3rd party signer forms before the other form. Order of operations TBD.
        - May have to prompt up front to download and fill out 3rd party signer form before doing the other form.
        - What we're doing right now is provide basic, generic info - "if you're one of these people, you need a POA on file." We may update it but that's our team's solution for now.
        - POA is a problem bigger than CHAMPVA
### Decisions and action items
- For process flows, check out what we already have and update it. **Prioritize claims.** Focus on what we have and filling in gaps rather than creating net new. 
- Service blueprint could be useful; put the user journey at the top.
- Mary/Bo to ask for claims flows from stakeholders
- Lois to send availability for rescheduled research sync.
- Keep going with our current solution for POA as Premal and Lois escalate.

## June 10, 2024
### Notes
- Attendees: Lois Lewis, Premal Shah, Jamie Fiore, Syd Hoeper, Steven Straily, Devi Hill, Rachael Penfil, Mary Wang, Bo Altes
- Facilitator: Jamie
- Next meeting facilitator: Syd
- Agenda topics
    - OHI Primary vs Secondary insurance
        - Lois: Stick with simple content. Consider more is a statement rather than asking a question: "Provide or update any medical health insurance coverage." Comments box makes sense after the file uploads. Ok with the new placement of the insurance type. 
    - OHI additional info questions to stakeholders
          - Lois: Don't think we need to ask the first question: "Would it help you to know more details..." We want to instead find out when are they calling people back or what makes this process stop.

    - Stakeholder interviews for CHAMPVA claims
        - Provided updates on scheduling the stakeholder interviews. 3 out of 4 scheduled.
        - Premal: If we are having problems with scheduling let him know. Premal may have more people we can ask.
        - Jamie to add Lois and Premal in the calls
        - We don't have a limit to how many people we have on the call but plan to come within the first five minutes of the meeting do limit distractions. Can drop when they need to.
    - Addtional Questions or Topics
        - Lois isn't available for the Research meeting on Thursday. We will cancel it because working time would be helpful.
        - Premal working with the team configuring VES (on 1010d) for the next iteration of this system.
            -  The team wants to know why we allow for a fill-in on the relationship to the sponsor questions. That team is concerned because they only have specific selections that they can add in that field in VES. From Design: We need to allow for other relatives (caregivers) to complete the form for the beneficary from a UX/Research perspective.
            - Premal suggests Product to start attending these calls with the VES team and subbing in for him when he is not available. There's a need for support from research to reinform why we are doing what.
            - Premal will share minutes and transcipts from these meetings with research
            - VES team is proposing to validate the sponsor in some way. Premal will provide some research on why we are choosing not to validate.
            - Premal will continue to keep us updated on any other questions or info that are shared on this intitative. 

### Decisions and action items
- Jamie to update the OHI Health Insurance screens based on the Lois' recomendations and pass these next changes to engineering. Use the simpler text on the first health insurance screen and workshop another way to ask that question. Keep the commetns box at the end of the uploads and the health insurance types at as the 2nd question in the health insurance flow.
- Jamie to update the OHI stakeholder questions. 
- Jamie will add Premal and Lois to the upcoming Stakeholder calls. 

## June 3, 2024
### Notes
- Attendees: Lois Lewis, Premal Shah, Rachael Penfil, Jamie Fiore, Syd Hoeper, Steven Straily, Brian Wilke, Devi Hill, Mary Wang, Bo Altes
- Facilitator: Rachael
- Next meeting facilitator:
- Agenda topics [(per Slack thread)](https://dsva.slack.com/archives/C068Q9DQACX/p1717182000690129):
    - Checkin on new change log documentation - does this achieve our goals?
        - [Option 1](https://www.figma.com/design/UmAtr3ULQEInMXfNFwP0g0/CHAMPVA-Application-(10-10d)-User-Testing-Prep?node-id=1962-75558&t=D59tNENErZgGJQgW-4): Jamie on CHAMPVA Application form
            - Lois: Might be harder for other folks who pick it up, but want to do whatever works for the team. Likes that it's a different screen. MHV also includes what stakeholder told us to do specific things.
        - [Option 2](https://www.figma.com/design/PzB1F5TYuBK5KQgPbuhAwH/FMP-Registration-10-7959f-1?node-id=1588-113894): Brian on FMP Registration form
            - Lois: Likes the rationale, but it wondering about scalability. Brian is not worried about it though, since it's form by form. GH template has "who is the decider" - may be good to regcord this.
        -   Lois wants to see: decision made, rationale, who decided.
        -   Likes the idea of a page in Figma, wants to align with the Healthcare experience team.  
    - [OHI (7959c)](https://www.figma.com/design/sSPoS7R9HE6ZlxRESRy2ms/Other-Health-Insurance-Certification-(10-7959c)-Form?node-id=1592-103113&t=LQZjT7l6KqvkdkeO-0) - can we add an "additional comments" or "additional uploads"? Per CAIA conversation on 5/30, seems like we might be able to.
        - There are a lot of edge cases we can't account for. We think an "additional comments" or "additional documents" section might cover it, and might be okay for PRA because there's no reason people can always include a note in the envelope now.
        - Another way around this is letting people upload more than one thing on the health insurance card page - "do you want to upload any additional supporting documents?"
        - The paper form already has one comment box, but we are proposing adding a second one.
        - Lois: how much do we really need to know? Do we basically only need to know that they have Medicare?
        - Steven: They need to know more than if they have it - they need to know about other benefits to process a claim. There are lots of edge cases, and it was giving us the potential of ballooning the form. A second text bots lets us capture edge cases without growing the form.
        - Lois: Techincal question - this doesn't exist on the form, so where would this go on the backend? Would need to talk to engineers.
        - Premal: We need to have more info on what happens behind the scenes. We need to know how they use this information and how it would get entered into the backend. We want to make sure they'll actually use it. I don't want to change a form, but may not count as additional information for PRA. We have a lot of product questions we can't solve yet.
        - Steven: probably not a lot of burden, and may cut time for the Veteran.
        - Premal: we need to understand this better. Maybe we need to more stakeholder research. 
        - Lois: Less is more.
        - Jamie: We are still planning on running through this with the OHI team. Need to understand if we need more information on Medicare.
        - Lois: Maybe revist 10-10EZ OHI questions.
    - Review outstanding questions for CHAMPVA claims (7959a) and forums for sharing
        - Per Syd, outstanding question:
            - What documents do you require from the beneficiary if it’s an auto accident? (specific name of form(s), and specific requirements)
            - Would they typically have that info at the same time as the itemized billing statement, or does beneficiary acquire it later in the process? (Wondering about order of operations and beneficiary's ability to acquire documentation in time to submit with the rest of their claim)
            - Can you give us a high level overview of how you deal with auto accident claims?
        - We need to understand what they need to know to answer the questions above. Bringing above questions to stakeholders.
        - With this in mind, should we start reaching out to stakeholders to schedule interviews (hopefully beginning next week)? Lois recommends grounding them in the paper and digital form.
        - Syd: There is discrepancy between what's on the form and how they use information. We need to make sure that the intent isn't lost and there are no gaps.
        - Lois: Unless you can highlight that to stakeholders, they might not understand that. And we may have way more to look at after midpoint. Otherwise, stakeholders might get lost.
        - Premal: if we have big business questions, should we delay midpoint?
        - Lois: I'd like to discuss method/approach for the sessions and the analysis to ensure we're aligned on the goals and the outputs. It feels like if we know that it will be easier to explain to stakeholders what we are trying to do.
            - Delayed discussion until Thursday meeting. Will come to Thursday meeting with research plan and conversation guide, which will affect who and how we schedule. Lois is thinking something more workshoppy.
        - Syd, do you have their names/roles?
            - Angela Dixson
            - Erick Maes
            - Kristine Becka
            - Keoni Escobido
        - Lois: maybe we should be showing them the digital form.
   - [CHAMPVA Claims (7959a)](https://www.figma.com/design/Tfhq5h2LwXEeEEtFBAAFOv/CHAMPVA-Claims-(10-7959a)?node-id=615-173818&t=ToQ9xTOHKMwbXCXw-11) working time
       - Syd went over the outstanding questions that they had answered.
       - Will triple check there are no fields on the form tha don't exist on the PDF.
       - Need to hash out how many OHIs people can input
       - Let's not get too worried for now about "relationship to beneficiary"
       - Let's be careful about POA.

### Decisions and action items
- Get with Health Experience team to create unified design decision documentation.
- Will bring stakeholder interview research plan and conversation guide to Thursday research sync.
- Need to clarify business need for Medicare information on OHI form (10-7959c). We can figure out design and technical solution from  there.
- Jamie will post changes to Medicare section so Lois and Premal can review async. Jamie will provide context on what needs reviewed.
- Lois doesn't love the upload pattern,let's bring it up either at Midpoint or design office hours

## May 20, 2024: Notes

* Facilitator: Devi 
* Next meeting facilitator: Rachael
* Agenda topics:
     * FMP registration and FMP claim updates
          * use the 'same as' address pattern on both FMP forms
          * phone number: how is this being used/stored? Need to do some more research
          * accordion on review page: consider doing some more research/investigation
          * FMP claim form: add ‘mailing address’ clarification to the payment screen copy, work with CAIA on file upload screen - can we shorten copy here?
     * 10-10 Health & IVC UX Sync on 5/31 to identify opportunities between the UX teams.
         * Meeting Purpose: Coordination and collaboration on design and to review designs in progress so far.
         * Identify design and research opportunities moving forward
         * Share learnings and findings between the UX teams.
         * Maybe the meeting can become a working session? We will want to understand purpose/goals for additional meetings between the teams.
     * OHI Cert Midpoint Updates (if time permits)


## May 13, 2024: Notes


* Facilitator: Syd 
* Next meeting facilitator: Rachael
* Agenda topics:
    * Syd to walk through 10-7959a flow going into Midpoint
        * [Link to Figma](https://www.figma.com/file/Tfhq5h2LwXEeEEtFBAAFOv/10-7959a?type=design&node-id=223%3A103087&mode=design&t=4sh52QAlpbX7Zgol-1)
    * Brian to walk through changes for 10-7959f-2 (post Design Intent)
        * Removal of “Fact Track/Skip Ahead” function for repeated auth users
        * Not showing what information is pre-populated (following current pattern)
        * Interstitial of using same address for both inputs 
            * Do we leverage for 10-7959f-1 as well?
            * Does a user skip input if “yes”
        * Flow/wire changes to select 1 payment destination per submission
            * Matches current PDF experience
            * Editable within separate accordion on review page
            * Removes item by item complexity 

    * Approval status for adding the email address field on the OHI and CHAMPVA Claim form: 
Premal to continue conversation about this. Will also have to think about if we should add those additional Third Party Signer questions in the OHI and Claims form 
    * LL: Please update Figma and Mural with names of forms - [see this example](https://www.figma.com/files/project/175597680/Healthcare-Benefits-Applications?fuid=1316453733215858250) and [this example](https://app.mural.co/t/departmentofveteransaffairs9999/r/1670613238628) - let me know if you can’t access
        * Premal: start referring to the name of the form instead of the form number


## May 6, 2024: Notes



* Facilitator: Steven
* Next meeting facilitator: 
* Agenda topics:
    * Sprint Review slide (**_Brian_**)
        * Covering 10-7959f-2 Design Intent goal 
            * Overview of Collab Cycle process
            * Process of getting ready for Design Intent
            * Sharing the actual items used in Design Intent
            * Premal: Keep the sprint review relevant to the intended audience. 

    * 10-7959f-2 alignment on Design Intent changes (**_Brian_**)
        * Add page for repeat address functionality (yes/no) - Yes
            * Brian will continue with design for this in Sprint 17
        * Summarize downloaded/prefill information - continue to explore? (yes/no) - No
            * Premal: Work with the existing pattern and put it in front of users.
        * Work with CAIA on “fast forward” language (yes/no) - No
        * Re-order page on uploads - talking about what to send before upload (yes/no) - Yes
            * Brian will continue to work on the order of this information in the designs.
        * Clarify entry points (WHO…)
          
        * Display thumbnails… seen before? (yes/no) - No
        * ~~Use v3 of upload file components (yes/no)~~ 

    * User Journey Map for combined 10-7959f-1 and f-2? (**_Brian_**)
        * Think this would support understanding of current experience
        * Need ticket for next sprint
            * Brian to work on this next sprint, supported by existing research. 
    * 7959c
        * Ready for Midpoint
            * Jamie put out an ask to schedule a Mid-point.
        * Power of Attorney topic 
            * Jamie to follow up on Slack with this conversation topic.
            * Bo: What do we expect to have to show as a deliverable on our side? 
Jamie: Not much we can deliver, this would be waiting on CAIA for now.
            * 
    * Parking Lot: Making Research Durable; prioritizing research; service design work
        * Many teams schedule months ahead for the Monday meeting if they opt into it.
        * Lois; prioritize 10-10d and f-1 Github reports. Deprioritized presentations. 
        * 24 working hours, 5 business days, minimum to get a report finished.
        * Lois: minimum Github style report; start claims research.
        * Premal: Would like to potentially do a workshop to determine how valuable different paths would be.
        * Going to continue at the research meeting tomorrow.
        * ~~Capture information in Premal’s Mural board around what could be done and what needs to be worked on.~~
        * Rachael/Steven to create the same type of prioritization workshop on the roadmap Mural. 
 


## April 29, 2024: Notes



* Facilitator: Jamie
* Next meeting facilitator: Steven
* Agenda topics:
    * Review F-2 User and wireflows with Lois for design intent greenlight (Brian)
        * Updated user flow: 
            * Remove checkbox and add if it is provider paid or not. 
            * Keeping it simple and reduce burden by only requiring the receipt upload and not adding additional input. 
            * Discussed future scope of building out an enhance experience for repeat provider info 

        * Updated screens
            * May need to revisit the “who to pay” dropdown. Maybe a good thing to research but shouldn’t keep us from going to Design Intent
            * Current plan to combine the CHAMPVA and FMP claims research. Will further decide how to go about this as we progress on the CHAMPVA form  
            * Good to move forward on design intent
    * Update on f-1 findings
        * Steven and Rachel planning on doing very high-level report on findings to start implementing changes on the form quicker (not a full research report and not uploaded to VA GitHub) 
        * These items would be low-hanging fruit to improvement to the form
        * Will then work on a research full report after making the changes on Staging
        * Low level report will be shared with Lois and then the rest of the team but she doesn’t want to be a blocker
        * Blueprint are backlog items
    * Documentation - where does it go: (Sharepoint vs Github)
        * Maybe design decisions should be in GH so we can keep thorough documentation
        * Tactical documents (meeting notes/minute, sensitive materials) should go into Sharepoint
        * Docs that need to be updated regularly - Sharepoint
        * Historial docs /reference documentation should go in Github
        * Product brief/outline on Github
        * Can change the folder hierarchy on Sharepoint if needed, let Premal know. 
    * Do we need to find a new time for these meetings? 
        * Lois to update us on her schedule. Will see if she can move the 1010 Health apps meeting
    * Upcoming
        * 1010 user testing
        * High level report for F-1
        * Research Report will continue for F-1
        * Design intent for F-2 to be scheduled
    * Parking Lot Item
        * Camp Lejeune off the table for now (not much desire to move away from microsite). Will move to the decision reviews next. Research will be tight collab with the benefits team. Some desktop and some stakeholder research
        * OHI decided to go with single flow.


## April 22, 2024: Notes



* Facilitator: Syd
* Next meeting facilitator: Jamie
* Agenda topics:
    * Update on F-1 analysis
        * Hopefully first round done today (sifting through info)
        * EOW should make sense of the info
        * Still in synthesis phase
        * Emerging trend: DS components that we can’t change are things we want to change (i.e. should we have a country code? But current pattern doesn’t have one)
    * Update on F-1
        * Talked to Andy last week about the conclusion, tweaks in progress
        * As research wraps up, there will be another set of deliverables to plan for
        * Shortened Intro page on F-1 (unique from other intro pages)
        * May want to wait on address interaction until other changes get done
    * Update on 10-10d
        * Finished 5 interviews, 3 no shows have been rescheduled
        * Interview this week and next week as well
        * Recruited 20 participants so we hit the 15 participant goal, so we won’t add more people after 15
    * Product - expectations around what we’re doing with decision reviews?
        * Desired scope of work?
        * Still figuring out what’s happening with Camp Lejeune and Decision Review work
            * Not sure if we can integrate into backend system with Camp Lejeune
            * Don’t know scope of Decision Review work yet
                * Premal trying to figure out the background of this request
            * Work closely with product to understand their process and how it’s different from current process
        * Where does UX fit into the forms that are already online?
            * CL we can do from scratch – still waiting to hear if there’s a backend we can communicate with (waiting on VA side)
                * Volume  ~7,000k forms in 10 years
        * Steven has done some research into the Decision Review work
            * More research needs to be done – stakeholder interviews and understanding service design
        * UX need clear scope and outcomes for these forms/programs
        * Current design does not work for these forms
            * How it integrates with IVC forms
    * Review Single Applicant version of 7959c 
        * With where engineering is at, are we saving time with this version?
            * Multi-applicant vs single applicant
                * Going for single applicant for now to make it simpler and quicker to move into production
                * Engineering has list and loop in staging already
            * Jamie to share Figma screens with flow for single applicant
                * Trade off simplicity/efficiency for getting it out the door
                * Users will have to re-fill out information if they’ve got more than one applicant, which will be annoying
                * Michael investigating using the “previous address used” pattern and using it for “previous OHI info used”
        * Looking forward to the time where this form is just for updates and it’ll be better integrated into 10-10d
            * Why bother doing multi-applicants if we can’t pull data either way
            * Basically Steven thinks that it’s not worth the work to do multi-applicants at this point (output vs outcome)
            * Updating info with a multi-applicant could be dicey
        * Could always come back to it and make it better later on, but get it out the door first
            * Can only reuse health insurance info within the same form – if we do the single applicant, we can’t reuse info to make it easier for people who have multiple applicants
        * Plans down the road to completely get rid of this form and instead integrate it into 10-10d and then 10-10EZR for updating information
            * So the best thing for users is to get rid of this form eventually
                * But the backend systems don’t talk, so that would be down the line
        * Designing this with the idea that it’ll be only for updates once it’s integrated into 10-10d
        * Skipped design intent, but have not yet gone to midpoint
            * Need to make a decision, let’s see where engineering is at and if it’d be easier to keep or get rid of the list and loop
            * We should go a direction that is better long term
            * How long will 59c be standing on it’s own? 
                * If it’s gonna be a month then multi-applicant may not be worth it
                * If it’s gonna be a year we should probably do the better experience
                * Premal doesn’t know if we’ll have the time in this contract period to integrate 10-10d and OHI
        * Gonna keep it simple for now, but double check with engineering, let Premal noodle on it
* Address for a logged in experience: fills address based on VA profile, not based on CHAMPVA address
    * Want all the systems to talk to each other, but they don’t, so how do we mitigate that?
    * VBMS integrated into VA profile already
* Still need to figure out how we’re going to handle Sprint Review vs interview tomorrow
    * Jame and Brian go to Sprint review
    * Rachael, Syd, Steven go to user interview


## April 15, 2024 Notes



* Facilitator: Rachael
* Next meeting facilitator: Syd
* Agenda topics:
    * 7959c update: new address updated questions
        * CAIA brought up “new address” question 
        * Jamie did two versions - one simplified, and one asking some pre-screening questions
        * Need to ask stakeholders about the process for finding out if it’s an updated address, and what they do with the address. For now, will probably go into PEGA and manually update the info. Giving them something to help distinguish between new and old addresses might not be helpful, because it’s all manual right now
        * Feedback: prefill the address if they’re logged in, and have them put in their address if it’s not
        * Lois - 10-10EZR is to update the 10-10EZ. It’s a whole other form. EZR is for ANY update, not just OHI. 
        * No guarantee we’ll be able to pull info from PEGA - Bo
        * Lean towards keeping it simple
        * Premal - look at 526, need to make sure users understand it won’t update their address everywhere - need that content
        * Lois - we need to fix that lack of connection, but we know we can’t do that right now
    * 10-10 testing kicking off today! Anything we should know about how the pilots went?
        * Pilots went well, simplified some language on the convo guide, will be close on time
        * Lois - can we cut back on some of the pre-sessions
        * What Lois wants us to do is to note specific struggle areas with exclamation points. Not sure about SUS
        * Amount of info on a screen is something we want to ask about
    * Number of people in interviews?
        * Let’s keep it to three people total, including the moderator. 
        * Should we invite engineers?
        * For AT users, please do not come late or leave early.


## April 8, 2024: Notes


* Facilitator: Brian
* Next meeting facilitator: Rachael
* Agenda topics:
    * 10-7959f-2 
        * Stakeholder interviews
            * Completed 3 of 4, Final interview scheduled for 4/10 - closing this sprint’s ticket
        * User flow selection
            * Going with option A (resources and dependencies
            * NOT Vendor/Provider specific versions
        * Wireframes
            * Migrating text updates to mobile breakpoint
            * Will reach out to CAIA at OH to ask for review prior to DI
* Stakeholder question “insight”
    * Perhaps show context of why the answer/input might matter to the design process
    * And adding visually may help add context (to get the right answer). 
 

* Is there a better process to give a general traffic indication on forms that are in-flight 
  
More top-level indication? 

NOTE: A lot of off-sites are upcoming for both team members and stakeholders.


## April 1, 2024: Notes



* Facilitator: Jamie
* Next meeting facilitator: Rachael
* Agenda topics:
    * Update on [f-1 user testing](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1710433090315/7e8ea973b4ac3315c1e20d5c70799e326863f9f5?sender=u3844370d13a440a7859d3526)
        * More participants are coming this week, we are on 3 of 5.
        * Did we need more notetakers for today? No, we are good 

    * 10-7959f-1 Staging review discussion (Edits/Backlog to ready?)
        * Brian making notes on f-1 prototype to staging differences
        * What is the right format to hand over to the Eng? Should it be an epic or something larger than ticket? Should we wait for user testing results to hand over? Discuss with Rachael E during the engineering sync on preference
        * Middle initial vs Middle name: Design System has initial, users expecting initial as well 

        * Rachael has [a11y testing](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/prepare-for-an-accessibility-staging-review) she needs to conduct as part of staging review, which needs to be **completed 4 days before we schedule staging review**
            * May need a dev partner - TBD
            * If I find bugs, should I go ahead and make the ticket myself? Template?
            * Need a better time estimate on how long this will take. It will depend on the size of the screen. F1 is too far out to be thinking about this, more concerned with 1010D a11y testing
    * Update on 1010d user testing schedule
        * What sort of things should we de-prioritize for testing? Minor content changes, formatting issues (overlapping dropdown arrows/wrong form element), incorrect margins. 
            * Most important things are that the content is right and interactions/ branching are working. 
            * Make sure the margins are correct too incase it affects the ability to scroll 
        * Since we’re testing in staging, Rachael would like to do some a11y testing before we go to AT users
        * For 1010D lets do a11y testing before AT user testing. Don’t want to make changes during testing. May have to push out 1010d testing submission. 
        * Let’s do a baseline before we submit for research review 
        * Might be able to send the request for user testing to Shane before a11y testing. We will have to ask Shane if this is ok because it means there may be iterations/ rescheduling AT sessions. Rachael will ping Shane and ask. Steven and Rachael to write AT user screener questions.  
It we need to do a11y testing before submitting we may have push off submission review for Shane, maybe by 4/9 depending if the PR gets approved today
        * Need to make updates to convo guide and research plan and pass it off to Lois for review
        * Rachael will be out Fri and Mon can prioritize a11y testing, Jamie and Steven for support 

    * 10-7959f-2 Stakeholder interviews
        * Completed 1 of 4 
        * 2 rescheduled due to overlapping with f-1 user-testing/ stakeholders emergencies
        * Last one scheduled for Tues (if others show up today)
        * Brought up insights on Fraud issues
        * Are providers an audience? Do we need to test with them and how do we do that? Possibly through our stakeholders
        * Will continue to have conversations with stakeholders beyond the initial interviews
        * Approaching 7959a in conjunction: can we be smart about user-testing both and make this a combined initiative? 


## March 25, 2024: Notes



* Facilitator: Steven
* Next meeting facilitator: Rachael
* Agenda topics:
    * Update on [f-1 user testing](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1710433090315/7e8ea973b4ac3315c1e20d5c70799e326863f9f5?sender=u3844370d13a440a7859d3526)
        * Extended through the end of the week, 3/25, to talk to more users who have participated in the FMP program.
    * Update on [10-7959a ](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1711047167250/382da89246faf5f1a26a786d8a172a91e6baf976?sender=u3844370d13a440a7859d3526)
        * General discovery for flows and Mural boards initiated
    * Signup for [note-taking on 10-7959f-2](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1711319530759/0a07f0c0c866aea66dedcaa43017925806b9117f?sender=ub5dc086a14b6f943de142963) stakeholder interviews
        * The mural board is up and ready for signups for notetakers.
    * 1010d user testing updates
        * Stopping conversation about iteration from CAIA feedback and moving forward toward testing.
* Parking lot
    * Email addresses & phone numbers across products -Steven


## March 18, 2024: Notes



* Facilitator: Brian
* Next meeting facilitator: Steven
* Agenda topics:
    * F-1 user testing - [notetaker signups](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1710433090315/7e8ea973b4ac3315c1e20d5c70799e326863f9f5?sender=u50b7e26ebf5d18d7d4312080)
    * Please fill in if you are interested in note taking… we only need 2 note takers each instance. We do not need to overwhelm the users. And don’t feel obligated to attend sessions that are outside of working hours.
    * Also how many people are too many? (Lot of people on the invites)
        * I can answer this one now: the best practice is to keep notetakers and observers to 5 or less. We set up the Mural with that in mind: four notetakers and one passive observer. See [Research Checklist: Observers.](https://depo-platform-documentation.scrollhelp.site/research-design/research-checklist#5-conduct-sessions) -Steven 
    * F-1 copy adjustments (submit and “contact” info questions)
        * No further adjustments while in User Research Mode.  
All additional changes to be captured and considered post the research effort.
    * F-1 “expiration date” 
        * emailed Andy/Andrea (waiting for response - he’s OOO until 3/25)
    * 10-7959c Userflow and wireframe walkthrough (Jamie)
        * Featuring the ability to re-use addresses (to cover off on new WCAG guidance)
        * Leverages a lot of the previous work from within the 10-10d
        * **Next steps? Comment questions/feedback into Figma file**
        * Question for stakeholders: Do we need to both manually input information from, and scan forms? 
_Thought is now to include manual input so PEGA can access immediately_
        * **Could we “skip” Design Intent for this form?** 
Potentially, as we are following existing patterns… and there isn’t a lot of value in Design Intent.
            Our team is collaborating closely with CAIA and this is not a wholly new set of work (as we did a lot on 10-10d) 
Still want to make sure we are ready for Midpoint. 


    * 10-7959f-2 Mural [location](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1710424818495/6a2147b47f67fb2a663a8cb677834d9203647b48?sender=ub5dc086a14b6f943de142963) (Discovery)


## March 11, 2024: Notes



* Facilitator: Rachael
* Next meeting facilitator: Rachael 
* Agenda topics:
    * Update on 10-7959f-1 user testing - we’re ready to go!
        * Talk to Shane - do we need a pre-meeting with Perigean? FMP is maybe not as common, let’s make sure we’re getting the right folks
        * May have to offer more dates
        * Planning on using Enjoy HQ 
    * Update on [stakeholder interviews](https://docs.google.com/document/d/1iOVvNjAWEQgfTQ3tod0e_zYcvBKop6LsBpqD6gBXVgw/edit) and questions for 10-7959f-2 ahead of Wednesday meeting
        * Will need to have a full list of folks we want to reach out to for Wednesday meeting
        * Mac - 10-10d, 7959c
        * Cheese - f-1 and f-2
    * 10-10d update
        * Research plan and convo guide - send to Robyn Singleton 
    * Lois coverage while out (3/13-3/26, maybe also 3/27)
        * Robyn Singleton - research plan, convo guide, paths we will test for 10-10d
        * Will not have email while out
        * Premal will help with Shane
    * Address for folks experiencing homelessness - Danielle Thierry - CAIA is taking that on, they will talk to the National Center for Homeless Veterans and VHA, national call center for Homeless Veterans 
        * How are we doing general delivery?
        * How do we want to address Veterans who are homeless Veterans
        * They will investigate that and let us know
    * What paths we are going to demo on Friday for the CHAMPVA application and the Foreign Medical Program registration
        * Will be doing demo for IVC management team - Dave (head of IVC), his deputies, Chris and Lauren
        * Premal till working on agenda
            * High level - how we work
            * High level - research readouts
            * MVPs - what we can solve and not solve
            * Demos - would like to do 10-10d from staging, and other prototypes if possible. Without signing in
            * We have an hour - they have lots of questions
                * They weren’t expecting us to get this far or further so quickly - Premal will want to talk about how OCTO works.
                * They are very waterfall, so they’re not used to us adjusting
                * Why did you make choices that you made? How did you get there?
                * May offer feedback - we can gently say thank you, but here is the research, we’ll take it into consideration
                * They are excited!
        * Lois - less is more. Think about storytelling. This team might not care about how we work, instead - as experts, we’re not verbatim copying this form, we are trying to make a better experience overall.
            * Get straight to demo and issues.
            * Premal - we learned about the system (PEGA), quick show diagrams, we are experts at digital forms, get to demo and walkthrough.
            * At the end, here is what’s happening next
        * Premal will get us an outline today. Should be natural, show our processes. Don’t want extra work.
    * Premal - ask stakeholders about business questions, but UX recommendations should be left up to us (e.g, embedding 7959c in 10-10d)



## March 4, 2024: Notes



* Facilitator: Brian
* Next meeting facilitator: Rachael  

* Agenda topics:
    * 10-7959f-1 - Handoff to Engineering - Brian
        * Scheduled during design/engineering sync on Wednesday morning
        * [Link](https://www.figma.com/file/LWfLUckNkxEz3fxXsxde93/10-10d---%5BDoc-Uploads%5D-Updates?type=design&node-id=127-88123&mode=design&t=0sT4ixBI0CkhXOmt-11) for reference from Syd (as a pattern for hand-off)
    * UXPin updates / next steps for user testing (outside of staging) - Jamie
        * “Cheat sheet” coming to help designers be more efficient in building conditional elements for User testing. 
        * This is a back-up or alternate way to provide testing options outside of staging 
    * Prototype Platform Matrix ([Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1709218659350/85e1a2c931eafd52734bc66235165d15bf08d582?sender=ud64d6310f5d321d8542a2119)) - Lois
        * Could this be collaborative (designers/researchers to add input)? 
            * We think so. Would like confirmation from Lois.  

    * Update on 10-7959c - Jamie
        * In progress user flow, getting ready for Design Intent (near term)
        * Leverages some of the work from 10-10d (where a lot of it comes from)
        * May help influence 10-7959f-2
        * Almost ready for internal review and discussion with CAIA (not yet)
        * As a standalone form, this may cause a change for the IA within 10-10d
        * ? Are we asking too much if they are uploading the document as well. I.e. is the burden too much to fill and scan input, too.? 
 
Steven thinks that the swivel is strong, and is part of the process… ie, eliminating the input is not possible at the moment. 
 
We may create 2 versions… one integrated, one as a direct to the form. As an iteration.
    * Does PRA look at each form individually or as a set? (Rachael to investigate further)
    * Coverage.. KT plan for Syd… during the design huddles this week.


## Feb 26, 2024: Notes



* Facilitator: Jamie
* Next meeting facilitator: Brian
* Agenda topics:
    * Any questions for Luke today?
        * We have the list of questions on the supp docs to send to Angela. Luke will be the deciding factor on our approach. 
        * Caregiver questions. What is the process for this? Premal is looking into this. Ask Luke how this process works. Caregivers may be automatically enrolled with the 1010CG
        * Bo will share most recent list of questions with Luke
        * Links to GH file: 
        * [Main Questions to Luke](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/champva/1010D/1010d-program-questions.md)
        * [Supporting Docs to Angela](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/champva/1010D/research/stakeholders/Stakeholder-1010D-Supporting-Doc-Questions.md)
    * Walkthrough of 1010D so far
        * CAIA is reviewing the Figma file of this current state 
        * Syd and Jamie will work on setting up the components and establishing the different flows. 
        * Question about slimming down the “Tips for uploading”. Also need to look into to Pega limitations/ requirements for uploading (Premal) may have the answer for this after research.
        * Links to resources may be moved to only the Intro page to not distract users from flow. Any additional forms needed (School Cert/ OHI) will still have the downloadable PDF. 
        * Lois suggests testing multiple applicants
        * Take a look at the relationship between applicants and signers. Maybe draw a difference between a parent signing for a child and being a third party. 
        * Revisit Optional Doc upload content with CAIA. Emphasize the benefit and be more definitive. Maybe use stronger language and remove  “may” (speed up). Try to test this with users. Might consider removing. 
        * Add errors screens for testing. 
        * Revisiting modal for screen questions. 
        * Flag Lois on the updates that are being made. Syd will Pin the Figma in the when the update version in ready IVC forms channel
        * Overall we can move forward with the prototype for user testing. 
    * FMP potential flow changes, Auth vs non auth. Need to confirm with Engineering  but some flow changes may happen. Almost ready for Midpoint. Mary is aware of the status. 


## Feb 21, 2024: Notes



* Facilitator: Steven
* Next meeting facilitator: 
* Agenda topics:
    * Status report on stakeholder findings for 10-7959f-1
        * Next steps for 10-7959f-1
        * Task flow of registration process (in Mural)
            * Brian has been working on the [task flow](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1705521134491/52690602ad9bb3ef8f9cbc82d48bd9698e63e83f?sender=ub5dc086a14b6f943de142963).
        * Sending over document-specific questions to Stakeholders (Angela)
        * Should we start with UXR? Figma or staging?
            * Rachael suggests that we consider passing 10-10d in prep for user research with F-1.
            * Premal wants us to make the artifacts and research more presentable to put in front of stakeholders in the future to help facilitate change.
        * Starting on service flow for back end
        * FMP refinement will be used to determine how we move forward with research.
    * Midpoint review
        * Looking for more information on the “delete file/Remove” button that CAIA requested to have added during the review. (Syd thinks there is a disconnect happening). Syd is going to look into examples that Lois found in production.
            * Syd checked the production information that was mentioned by Lois, and there was a conclusion reached that the proper button follows a different pattern, Syd is looking into this further.
                * Syd still believes there is a miscommunication about the remove button, needs further clarification.
        * Slim alerts - Lois believes the feedback about alert fatigue is valid.
            * Already moving forward on the design side, trimmed down the burden from alerts and reduced the potential for fatigue.
        * Jamie mentioned that there is another pass of the CSOT needed that removes the caretakers.
        * Bo mentioned capturing questions in a more visible location coming from CAIA.
        * Jamie is sending over questions related to 10-10d by EOD and tagging Premal and Bo.
        * Premal mentioned sitting in a congressional hearing about CHAMPVA, the need for file upload being brought up by a congressperson, and individuals being able to explain that it was already being worked on as a major win.


## Feb 12, 2024: Notes



* Facilitator: Syd H.
* Next meeting facilitator: Steven S
* Agenda topics:
    * What’s needed for Midpoint Review?
        * Prototype and wireframes are complete – Syd will comment on the ticket to provide links
        * Research plan and conversation guide are just about done – Steven will provide links in ticket when ready
    * Talk about CAIA feedback, content source of truth (i.e. upcoming order of operations)
        * We just got feedback from CAIA from old version – Jamie (and company) are going to update the Figma to match this in time for Midpoint Review
        * We will have to go back and update the SoT to match the newest prototype and resubmit to CAIA
        * Do we want to update what we provided to Michael today? Or just leave that alone and do it for Midpoint? (no, we’ll leave it alone for now and only update for CAIA)
        * We’ll need to update the prototype to be more robust if we’re gonna test in Figma
        * Potentially do usability testing in Figma and AT testing in staging
        * Moving forward we’re going to do usability testing in Figma and then AT testing with updated content later on in staging
    * Should we require the VBA decision and DD214 to help further unblock the process times- this is resolved. There should not be too much of a delay according to Luke. [Jamie]
    * Process for stakeholder interviews
        * Finding documents can be leaner than last time
        * Still will do synthesis, just a different way from last time (more efficient)
* Recap for 10-10d:
    * We’re going to move forward with usability testing with a Figma prototype
        * Prototype will need to be updated specifically for this
    * We’ll update the copy for Midpoint Review based on CAIA feedback in a new Midpoint specific Figma
        * Leave alone what we passed off to Michael today
    * After Midpoint we will redo the SoT in order to match the prototype that has file upload then resubmit to CAIA
* Rachael is going to move the time for next week because of the holiday


## Feb 5, 2024: Notes



* Facilitator: Brian W
* Next meeting facilitator: Syd
* Agenda topics:
    * Let’s provide an overview of the prototype and outstanding questions we have to ID blockers for user research
        * Who do we need to answer these questions?
        * Question list: https://github.com/department-of-veterans-affairs/va.gov-team/edit/master/products/health-care/champva/1010D/1010d-program-questions.md
        * Action item: Identify which are blocking user testing (done collaboratively in this meeting)
    * Any additional uploads are a challenge, but not necessarily a blocker.
    * What is left to get the prototype ready to hand off to dev in order to expedite the staging being ready for testing?
    * Design team feels confident enough to estimate 2-3 days until hand off to dev  


    * When/How should we involve CAIA with 10-7959f-1?
        * I.e. As veteran’s fill this out should it be “your”  
 
In the bi-weekly meeting 
* Action Item:
    * Check in with CAIA re: homeless challenges for copy (required addresses of sponsors) - 10-10d UXR
    * Remove caretakers as a possibility in testing (other programs may address) - 10-10d UXR
    * Open up number of applicants beyond 3 - no technical limitation why  
 

* Parking lot: 
Confirm which space to use for note taking with stakeholder today 

May generate more questions on OHI (parking lot for now) 
 

## Jan 29, 2024: Notes



* Facilitator: Jamie
* Next meeting facilitator: 
* Agenda topics:
    * Steven: Do we want to continue with two keys for EnjoyHQ and build our process there? Or alternatively, should we build it in spreadsheets and Google Docs now until we have more of an idea of which direction the VA is going?
        * We have challenges sharing Google Docs with VA
        * Would not be able to fully integrate with VA’s EnjoyHQ but will allow us to get familiar with the platform
        * We can give feedback on EnjoyHQ to VA while they pilot but only 2 seat available
        * Can use mural for now, VA and contractors can all see it
        *  Waiting for the situation to evolve with EnjoyHQ VA pilot
        * Should we use the same tags/ taxonomy in Mural as VA is using with EnjoyHQ?-Yes, (Lois)
    * Rachael: are we adding document upload into the MVP? If yes, let’s talk about UXR repercussions. 
        * Gotten more positive info about doc upload but need to keep testing moving forward
        * Staging needs to be ready to put in front of user (7-8 days between submitting and 1st research session)
        * Should we opt to put 1010d down for now?
        * Still some timing issues with Pega integration, should we take a risk to test with uploads
        * Rework on prototype, research (convo guide) and SoT might take a sprint or 2. Prototype would be a lighter lift
        * Decided to go forward with file upload for Staging/Testing
        * Might need to explore Code Pen for AT users 
        * Ask the engineers if they can use the file upload pattern for Staging (just frontend) 
    * Should we wait for the new list and loop, too?
        * Let’s move forward with testing with current List and loop so it doesn’t delay (there’s no code yet for new pattern)
        * Revise prototype /SoT (figma) to use the old pattern
* Parking lot:
    * Next steps for 10-7959c: wireframes? Stakeholder interviews?
        * Steven: We need one more pass of ideation over the next couple of days to extract and refine as many questions as possible. We should then compile them all and decide which avenue is best to attack them. (this will tell us if we need actual stakeholder interviews or just some open lines of communication to ask a few questions) - Then, we can start on wireframes and the research plan in tandem to prep for Design Intent.
    * Stakeholder interview board - Steven, did you need help writing up the note taking instructions?


## Jan 22, 2024: Notes



* Facilitator: Rachael
* Next meeting facilitator: Jamie
* Agenda topics:
    * Rachael: should we have a daily design huddle to talk through problems?
        * Yes, usually before standup
    * Syd: Prototype walk-through?
        * We need to do handoff meeting with devs - not just kick it over in a ticket. 
        * Annotations needed for both devs and midpoint. 
        * The prototype will include the new list and loop, staging will have the old pattern.
        * We will be doing the old list and loop for user testing the first round. The second iteration of launch, we’ll test the new list and loop and document upload
        * Make staging match content source of truth before user testing.
        * Bo: Staging is just basic - we need to coordinate so it matches what we put in front of users for testing. Thinks there’s a gap between those two. We need to get those changes reflected in user stories
    * Talk about what content pages come before the 1010d. (there’s an About the Form page and the main CHAMPVA page)
        * Kristen might be able to help figure us out (Lois)
        * We need to rewrite the two pages - About the form and about CHAMPVA. Where do those go. 
        * Lois - Kristen Muskat gave us some high-level IA thinking for a hub.  [https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1702677961676/13148d7aadd948a857eaa8fe5e04f6a9b09c3f9e?sender=ua641db233dc545173f8d9816](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1702677961676/13148d7aadd948a857eaa8fe5e04f6a9b09c3f9e?sender=ua641db233dc545173f8d9816) 
        * Lois doesn’t think we’re building those pages.
        * Premal doesn’t think we’re building them but might be a hurdle for us to go live
        * Lois says we should reach out to Kristen to make sure we’re not doing double work. She didn’t expect that we would be re-writing these intro pages. She thinks we’ll be getting a content liaison, per Danielle.
    * What pages might we be able to “share” into 10-7959f-1 - Address issues?
        * Let’s leverage what we can from 1010-10d
        * How can they sign up for FMP without an address? Remains to be seen
        * Premal - Andy is a great resource, hopefully he will help answer questions
    * When to submit kickoff/intake for collab cycle for FMP 
        * We can do CAIA and design intent now
    * Notifications for 10-10d
        * We can’t do it right now for MVP, but it’s something we want to look at (Premal)
* Parking lot:
    * Discuss limitations around notifications.
    * Time for daily standup


### Action items



* VA access to Google docs isn’t great, let’s see if we can find another tool for these agendas - rolling agenda on Canvas
* Rachael - update Zoom so this meeting can happen without me
* Add daily design huddle - 30 mins, optional, before daily standup
* Premal to get with Lois and see if we can get CAIA moving - who’s writing content
* Ask devs what they’re comfy with in terms of content matching prototype.
* Make sure information about getting content in the prototype is captured in “user stories” so the work doesn’t get lost.
* Syd: will leave prototype as is, then duplicate it and do a new one that’s parity with the source of truth. We will also check in what they need for annotations. 
* Rachael: accessibility annotations. 
* Where do devs want annotations in a file? Own page or everything on one page.
* Rachael to prioritize research plan for 7959f-1
* Mary to submit for design intent and CAIA for 7959f-1
* Premal to send us instructions on signing up for mobile app, and think about if we want our stuff on there. Not pressing.


## Dec 4, 2023: Notes


### What did we talk about?



* When we can be ready for Design Intent in Collab cycle
    * Prototyping has brought up lots of new questions, at least for product team
    * We should be ready soon, after we build the prototype - but also lots of people are out for the New Year
    * We don’t need a fully fleshed-out prototype (doesn’t have to be clickable) for Design Intent
    * We aren't in the VA Figma yet
* Went over [10-10D Sponsor Information flow](https://www.figma.com/file/PB5Ivnnae2GNiMG0yrRWdR/Form-10-10d?type=design&node-id=3%3A3&mode=design&t=lU0dX16mdyy9uqnl-1) in Figma
* Prepared questions for [VFF Design team](https://docs.google.com/document/d/1H2L1tEJTHnXQGP6ZI7s5uaUTFRsaEwmX9WwIwG6i4Xk/edit)
* We’re going to create a “Source of Truth” page in Figma to create for engineers
    * Will be refined during engineering sync


### Action items



* Rachael to set up observer meeting for accessibility annotations
* Jamie to begin revised user flow
* Syd to do non-accessibility annotations & deliverable info
* IF there is a chance, review Rachael’s WIP [Research Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/champva/1010D/research/research_plan.md)


## Nov 27, 2023: Notes


### What did we talk about?



* We’re going to treat the workshop with Jeremiah as a meet
* How to Figma - autolayouts, changing the size of components
* How we want to work in Figma
    * Notes to self: use stickies so we don’t ping other people
    * Geolocation of specific issues: use Figma comments. Have the actual conversation in a new thread in Slack, or a quick meeting. 
        * Taxonomy for Slack thread: Design or research, project, short description of issue (Year Quarter-date Figma comment was created)
            * EX: Design, Form 10-10D, Header label is weird (Q4-11/27/23).
    * General questions: use Slack


### Action items



* We’re going to treat the workshop with Jeremiah as a meet & greet, a chance to ask high-level questions, and a chance to schedule deeper conversations 
    *  to look into scheduling tool
*  to make organizational components for us to use in Figma
* Revisit how we work in once we’re in the VA instance (or when something is broken)
*  to post in VFF Slack and get a meet and greet with their designers
*  to find a meeting time for Wednesday - show & tell Figma prototypes


## Nov 13, 2023: Notes


### What did we talk about?



* How to divide design work for Sprint 4 - discovery work for Form 10-10D
* [Mural board for Form 10-10D](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1699626384950/0c08ecfa00d0c8010851902152ad5d8b4d9b84e5?sender=u3844370d13a440a7859d3526)
* Tasks to be completed:
    * Understand user journey (service design) - 
    * Complete 1010D audit and user flow through form - 
    * Prototype setup - , 
        * If we’re blocked on getting access to Figma, Jamie and Brian will start on content design/simplification
    * Relevant research timeline - All
    * Questions for stakeholders as we go - All
    * Review deliverables - All


### Action items



* Each person will add their own tickets into [Zenhub](https://app.zenhub.com/workspaces/champva-vfmp-forms-652da2d3f0ae4c0016bfb109/board?assignees=StevenStraily)
    * Rachael will add placeholders for Jamie since she doesn’t have access yet
* Each person to begin their tasks
* Rachael to set up weekly design huddle
