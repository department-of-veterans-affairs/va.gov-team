## CHAMPVA biweekly stakeholder sync
Every other Tuesday at 10:35am ET

## 01/20/26
**Attendees**
- Angela P, Angela C, Ballard M, Cindy C, Rogelio C, Kimi Sato, Elizabeth S, Elizabeth L,
- Jon, Amanda K, Premal S, Mike M, Andrea M, Hieu V

### Notes
- Premal ask how the 10-10D is going. No response from the stakeholders, so that is a positive sign
- OHI attachment averages about 2 per upload
- Medicare effective dates: Premal wants to clarify that the 10-10D now has the effective date for 12 months out.
- Andrea notes that the 10-10D now has MBI.

**Questions:** 
- We receive feedback for the emergency provider and after the fact
  - Angela was not aware of the requirement, will talk to SME.
  - Angela notes that it is better for the team to put it in an email and include Kimi S, Luke, Elizabeth L, and Alysia K.
- Team wants to confirm that the Part C Pharmacy portion was removed from the PDF the online can match. Angela confirmed that is the case, it can be removed. 
- Sendback letter BCBU. Angela followed up with SME to respond to the email with the sendback question. 
- Sendback letter for apps. 
  - Premal explains how the team is trying to get a rough count number for the metric.  Regelio noted that DCG1 (print vendors) is responsible for sendback letter. Angela P notes that they’re always counted but it is currently not being tracked because dashboard is is not fully developed. Angela C noted that DCG1 print occurs through VES.  
  - VFMP will get us the sendback letter counts.
  - Angela C noted that it will be 1 sendback letter (printed by DCG1) for for multiple missing documents from VES. Amanda asked if that is also includes multiple Bene would included in that 1 letter. Angela noted that each Bene has their own letter.
  - Action Item: Champa Service Blueprint needs to be updated. 
  - Elizabeth notes that everything gets processed including incomplete and deny. So they can always update later. 

**Misc:** 
- Premal asked the VES status. Premal explains that the form goes to PEGA right now, not VES. Mike notes there are 1015 from Cindy from us to VES. 
- Elizabeth notes that MPI is the authority so different sex, name, etc, MPI would overrule what is on elsewhere.
- Elizabeth L, attended SVA (Student Veteran Association in Colorado) conference, because of the work we do, they were able to have PR code have the students fill it right then and there. It is so impactful. People cried. 
- Premal will introduce the Status Tool and introduce the team as well.
- Elizabeth in Teams chat: Do we have a time frame when Benes can print their own A cards? Handbook Link? Angela P notes that they cannot put it on Va.gov but on Champva site (not longer exist)
- Andrea would like to clarity around the Handbook link. Angela noted that the link is provided on the A card. 


## 01/06/26

**Agenda**

* Age-based birth cert logic
* 10-10d v2 launch updates

**Attendees**
Renata K., Mike M., Andrea M., Premal S., Amanda K., Cindy C., Angela P., Kimi S., Tammy T., Rogelio C., Angela D., Gina L., Ballard M., Elizabeth S.

### Notes

**Age-based birth cert logic**

* Renata walks through the new birth cert. flow in the Applicant chapter to allow users to add a newborn's birth certificate
* **Decision:** Rogelio C. confirms that under 12 months old is considered a newborn by CHAMPVA. Team would like this documentation from everyoneThis should be a required screen for everyone, not optional (remove optional language?).
* **AI:** UX to add in required status on the birth cert upload page, update age-based logic, hand off to engineers

**10-10d v2 launch updates**

* Have there been any trends in 10-10d/OHI processing?
     * No trends yet, haven't gone into the data
     * Rogelio reports a little over 5,271 OHI cert coming in from VA.gov
* Is the backlog going down?
     * Tammy announces that OHI backlog is back up to over 50k (was down to 20k at one point). OHI team needs to dig in to see if that's OHI certs or coming in from VA.gov, or by mail.
     * Elizabeth S. says they're getting between 2-3,000 OHIs per day (including health insurance cards)
     * Tammy: the submission numbers are jumping up and down, haven't been able to investigate why
* Cindy C. says that OHI cert numbers in Pega are filtering down by PDF without the cards, as of January (released in December). This means the metrics we pull from Pega every month should be more accurate
* **AI:** Premal would like the OHI/EEV team to report back if they're seeing more duplicate health insurance card uploads so we can change that behavior on the frontend if needed. Follow up on this item from time to time. 

## 12/09/25

**Agenda**

* Updates on the 10-10d v2 launch
* Reminder regarding birth certificates in 10-10d/10-7959c
* Dropoff rate in 10-10d in November

**Attendees** 
Renata K., Hieu V., Andrea M., Mike M., Cindy C., Keith B., Rogelio C., Elizabeth L., Ballard M., Angela C., Premal S., Angela P., Joie T., Tammy T., Elizabeth S., Arleen S. 

### Notes

**Updates on the 10-10d v2 launch**

* Mike M.: 10-10d v2 launched last Monday, but it was turned off within 45min because of a bug (5 submissions were completely blank outside of some light contact information)
  * Reached out to the contact team to tell the users so they can resubmit. Everyone was contacted
    * Premal asks if we'd heard back from anyone about the missing statuses on forms (Keith says no)
  * Mid-last week, form was turned back on and went to 25% rollout with no issues
  * Increased to 50% of logged in users as of yesterday 
  * We are seeing an increase in OHI uploads (both original applicant as well as all applicants attached)
* Premal asks about the current backlog and when they will currently start to be processed
    * Elizabeth L says they're 7 days out in the backlog, so next week for sure (as of today, processing apps from 12/1-3). 
    * Andrea M. notes that the first apps may hit in the next day or two, actually. Between Wednesday and Friday there were 26 applications
    * Premal notes there are about 50% new applications (1010dx). Asks that the applications team flag anything of note
* **AI:** Health Apps team to share analytics (Tammy T. specifically wants them)
    * Mike M. to talk to engineers to find the right app to look at in the Pega instance

**Reminder regarding birth certificates in 10-10d/10-7959c**

* Mike notes that back in April there was a discussion around requirements-setting for the 10-10d v2
  * On the PDF stamping, no matter what relationship the child has to the sponsor, they're stamped with a generic "Child" status.
    * Health Apps is concerned that will introduce some confusion. If adopted/step-child, it will be stamped "child" but have a birth cert attached. If bio child, it will be stamped "child" with no birth cert attached
    * Premal notes PDF stamping = just what we print in that field on the PDF
  * Health Apps discussed possibly changing how that's stamped
    * **Decision**: Angela C. says it would be nice to have that change in the stamping, but ultimately the team does go look to verify that information.
      * **AI:** team to look into updating stamping by child-type
    * Elizabeth L. asks where in the form that's asked (Mike M. explains it)
        * Elizabeth L. asks that it be stamped as CHILD but indicated what type of child the user selected. 
        * Mike M. notes that in the meantime teams should know if a PDF is currently stamped "CHILD" but there's no birth cert, it means it's a biological child. 
  * Elizabeth L. brings up newborn cases: "we may be the first person we report a newborn to" because adding a second dependent won't change payments on the VBA side, but updating health benefits will confer health insurance to the newborn child. 
    * In these cases, the user needs to provide a birth cert since it's the first instance of a dependent in the system. 
    * Keith shares an example: "an app rerouted back to Lead of the Week because it is a newborn baby application, currently in the NICU being treated for serious illness/"
    * In a newborn case, CHAMPVA issues a HEC alert to notify the rest of VA that there's a newborn associated with the Veteran, to add to VBMS
    * **AI:** Health Apps team to work on a solution for adding birth cert for a newborn (and newborns-only)
* Premal asks what VES will show
    * Elizabeth L. says that they're in VES and working in it right now (clarification: paper-only). 
    * Premal asks that Elizabeth L. share what they're seeing in VES (what's sending to VES vs. what's displaying).
    * **AI:** Health Apps to check what it shows in VES (work with Elizabeth and team to clarify that)

**10-10d drop-off rate**

* In monthly metrics, we saw a roughly 30% drop-off in submission volume for the 10-10d 
* Is this drop-off normal?
    * Rogelio C. asks if this is specific to VA.gov submissions?
    * Mike M. clarifies no, this is total submission volume
    * Rogelio says they'll need to look at a couple of years of submission volume
    * Some discussion about how historic data has it difficult to parse because of changes to eligibility and Veteran benefits enrollment (PACT Act)
    * Eligibility team also notes that the backlog has been worked through, so this may also be a combination of duplicates dropping off, and people actually getting enrolled
    * **AI:** Rogelio and Elizabeth to report back with annual submission volume (if we normally see a drop in the fall/winter). 


## 11/25/25

**Agenda**
- MBI number for OHI Cert
- Future effective dates and allowing users to report their Medicare before it is current

**MBI number**
- Noted that MBI number is on the new PDF, but not a field in the digital forms (standalone and 10-10d OHI subform). Currently we collect that information through front/back Medicare card uploads, which are required. Does the team want us to include a field for adding the MBI?
  - **Decision:** Angela P. says yes, but ultimately Tammy is the SME who can make these decisions
- Andrea asks: are MBI's consistent to the individual regardless of plan?
  - Unclear, check with Tammy
- VA.gov team makes it clear that the upcoming 10-10d (with OHI subform) release will not include a field for the MBI number, but team will be able to pull that from card uploads. Standalone OHI will also be missing MBI field until we bring in the work to update the digital form to align with the new PDF. 
  - Angela acknowledges this fact. No need to action this right now, the team is aware that the 1010d with OHI subform will be released 12/1 without this field, and will be updated once there's sign-off from Tammy.

**Future effective dates and allowing users to report their Medicare before it is current**
- Premal mentions potential congressional inquiry and helpdesk requests around this issue (not allowing users to report Medicare with future effective dates), it's been a consistent user request in feedback.
  - Angela checks notes about congressional inquiry and we do want users to be able to report future effective dated Medicare
  - **Decision:** Angela would like to see future effective dates added and to be resolved before the end of the year
- Premal wants to understand how "future" is allowable (6 months? 90 days? 30 days?) and how the business currently handles it.
  - Angela would like all these questions in a follow-up email to Tammy and her employee
  - Premal suggests we default to whatever the future maximum exists on CMS, and maybe not require the card upload if users don't have the card yet
  - Mike mentions actual implementation should be fairly quick, Renata notes that content tweaks would be minor and mostly reducing content, as opposed to adding it (aside from telling users how to report their Medicare cards if they don't have them at the time of pre-enrollment)
 
**Other topics**
- Premal has a question about a related OCTO team handling an OHI backlog (130,000 forms down to 39,000): there seems to be a way to close out an OHI document without actually looking at it. Is there a way to collect OHI documents without looking at them?
  - This team collected all OHI documents and put everything in a batch into CP&E and batch close OHIs. You can go in and make sure the documents are associated and the same as what's in the form without checking first.
  - In the latest Pega release, insurance cards with be mapped to OHI cards, not separate OHI submissions.
  - This will make it easier to see individual form submissions vs. all the associated supplemental documents in Pega
- Angela gives the whole team kudos for all the continuous improvement

**Action items**
- Send an email to Tammy and her employee (w/ Keith cc'd) about MBI and future effective dates

## 09/30/25

**Agenda**
- How to handle the question for prescription coverage for OHI (follow-up on email sent 09/26/30)
- Confirm if users can fax their completed applications and supporting docs for their first application
- Updates to 10-10d/10-7959c launch

**OHI prescription coverage question**

- Walkthrough of the standalone OHI form, where we still ask prescription coverage question (question was omitted from 10-10d/10-7959c merged experience
- Question from Health Apps team: should we still include the prescription coverage question on the front-end? In the standlone form only, or in both the standalone OHI and the 10-10d/10-7959c?
- Question from Health Apps team: if we omit this screen from one or both forms, should the PDF form include the "yes" checkbox marked? "no"? Or no checkbox marked on the PDF?
  - Angela C.: this is a question for OHI/Tammy, who should be the sole decision-maker.
- **Action item:** Health Apps team to follow-up with Tammy on how to handle this question

**Confirm if users can fax their completed applications and supporting docs**

- Health Apps walks through a post-MVP improvement to the 10-10d/10-7959c, which will allow users to print a copy or save a PDF of their CHAMPVA benefits application. If the submission fails, users will be informed on the Review screen that they can download their completed application and submit it other ways. This feature has already been launched on the 10-10EZ and more recently on the 10-10EZR and has relatively high usage from users. It's been requested for CHAMPVA forms as well, as many users screenshot the review screen. 
- Question from Health Apps team: is the 303 number the correct fax number for 10-10d and supporting docs?
  - Rogelio C.: confirms that's the correct fax number for 10-10d apps
- **Action item:** Health apps team to launch print/save PDF after the MVP launch of the new 10-10d/10-7959c (exact date TBD)

**Updates to 10-10d/10-7959c launch**

- Health Apps team provides updates to the 10-10d/10-7959c launch plan and timeline:
  - Currently wrapping up loose ends with testing in PEGA
  - Between those efforts and the possible government shutdown, the team anticipates a later launch date than given at our last meeting (9/29 or 9/30 was given at 09/16/25)
  - Current expected launch date is TBD (pending completion of PEGA testing, etc.)
- Question from Health Apps team: is 24-hours notification heads-up acceptable before going to launch?  
  - Angela P.: 24 hours notice is fine
- **Action item:** Health Apps team to provide 24 hours notice before launching 10-10d/10-7959c


## **09/16/25**

**Attendees:** Anne R., Cindy Carr, Eileen Cook, Rachel P., Renata, Jamie, Ballard M., Premal, Amanda, Angela P., Angela C., Elizabeth Lightfritz

**Agenda**
- Discuss rollout plan for lauching the 1010d OHI merged form

* Renata reviewed the rollout plan with partners: we are keeping the 1010d standalone (without the fully integrated OHI form live during the launch of the merged 1010d/OHI form in. We will roll out the merged form in stages starting with having it available to 25% of users starting on 9/29/25. We will increase it to 50%, 75% and 100% after that. This will take a week to get to 100% launched. We will continue to monitor for issues after that. 
* [Link to the form on the staging site](https://staging.va.gov/family-and-caregiver-benefits/health-and-disability/champva/apply-champva-form-10-10d/introduction)
* Save in Progress: for 60 days users will still have access to the old form to complete if they have started it already.After 60 days it will direct them to complete the new merged form

* There were no questions about the Staged Launch from the partners

* We just had Staging Review for the 1010d/OHI merged form and are cleaning up issues found during that
* Spot checking submissions for roll out: Elizabeth Lightfritz would know who to spot check. She will follow up after the call with 2 people from her team that can help with that
* IVC to send the partners a recorded walkthrough of the 1010d/OHI
* IVC discusses benefits of the OHI merge: It will reduce duplicate HI cards and reduce redundant questions between the applications and OHI and limit duplicate OHI form from being submitted. They are further iterations coming shortly that will better clarify that they are submitting the OHI cert with the application to further prevent duplicate OHI submissions


## **07/22/25**

**Attendees:** Anne R., Cindy Carr, Eileen Cook, Mike M., Rachel P., Renata, Jamie, Andrea, Ballard M., Premal, Amanda, Angela P., Angela C.

**Agenda**

* Discuss the request to discourage users from submitting duplicate applications
  
* Discuss allowing users to submit updated information for their application, such as adding dependents or correcting existing information


**Discouraging duplicate submissions**

* Jamie notes that we're aware of multiple reasons for duplicate submissions (thinking it's quicker, etc.)
* Simple solution: content update to tell people to wait in a blue alert box ("Have you applied for CHAMPVA before?") would lead to "Your CHAMPVA form status" (new page)
  * Includes accordions for the most common resubmission issues and what users should do


**Submitting updated information for their application, such as adding dependents or correcting existing information**

* What do you encourage users to do if their application for CHAMPVA benefits is still pending?
    * Angie: ideally we'd like users to retract their application and submit a new one
    * Current state: If the user calls up CHAMPVA, we tell them to submit a new application and it goes back in the queue (at the bottom of the list)
        * If we get a second application after the initial one, we'll pull up both applications and reconcile them (we search for SSN later)
        * If there's a newborn, with the online form you could conceivably just add the baby to the 10-10D insteading of adding all previous beneficiaries

* To recap our understanding: generally speaking, the new 10-10D submission goes to the bottom of the pile 
    * For a new beneficiary, you need a whole new application adding that newborn, and it goes to the bottom of the queue.
    * If we're missing just a school cert or medicare card, that's a different scenario than adding a new beneficiary. 
       * If you have a new school cert, that'll also go to the bottom of the queue
       * For a school cert digital form submission, a lot of it depends on how soon we work that initial application. When we work an application we go in an search for any associated documents. We'll pull any docs, even if they're submitted at a later date. If the application is worked already, then the school cert will be sitting and waiting for a while. If they're truly missing a doc, we'll send a CCL letter.
          * CCL: CHAMPVA center letter - there's 36/7 different versions of them. They go out automatically from CP&E (eventually VES). These aren't templates that we write at our desks. They generate when an event is triggered. 
          * Angela P. will ask if we can share copies but it'll take some time
          * CCL includes denial letters, requests additional information on an application, etc. There's specific policy listed in them, and they're very applicant-dependent. 

* What if someone needs to update something, like a name change, from a prior application that's still pending?
    * We won't know if there's a name change unless someone notifies us.
       * They'll have to send in those support docs (for the name change). If they submit a new 10-10D it'll go to the bottom of the queue.
       * If it's just a marriage cert or something, we want to discourage users from submitting a whole new application. Have them mail/fax it in, so we don't add to the backlog of apps
    * **Current state** of sending in updated docs for a pending application:
       * They can mail in docs to the PO box, or call the call center (CHAMPVA stakeholders unsure on the Call Center's process) and have them upload the doc to PEGA, and it'll be first-in, first-out. 
       * For urgent issues, they can call the call center
    * In the future, it would be nice to have a separate form or space online to upload supporting docs attached to an application or claim. That's not what would be helpful in current state. 
       * OHI standalone: continue to let users know that's for existing beneficiaries, and if a pending bene has a health insurance change, they should mail/fax/call in. 

* Do we know how many applications come in that are for adding a new beneficiary vs. a pure duplicate app?
    * Cindy: no, what we pull looks for the sponsor and the bene and look for identical matches (more than 2 forms with different batch numbers)
    * We don't blindly match duplicates to make sure there aren't new beneficiaries being added (in addition to ones previously listed)
    * Cindy pulls that report every 2-4 weeks ("open applications that have not been processed yet") but we don't track all the daily/weekly/monthly duplicates that are closed out
   * we've seen people who were eligible for CHAMPVA with one Veteran sponsor, get divorced, get married to another eligible Veteran sponsor, and send a new application. Those are not processed as duplicates

* What about deletions? Do you ever have to deal with petitions to remove themselves from CHAMPVA?
    * Yes, we get disenrollment letters. They can be hand written, but they need a wet signature on them (reasons: ACA eligible, want health insurance from somewhere else)
    * We get a handful every week 

* Cindy shows us a sponsor who sent in 9 applications via fax in 4 days (6 in one day!)
    * Premal wants to return an API that says "you've already submitted an application for your beneficiaries" on the intro page -- possibly a good idea once we've also implemented a separate solution for adding new docs?
    * Angela P. at face value this sounds really awesome, but we'd have to have a deeper discussion with Katrina involved (PEGA) to make sure this will work. 
    * Premal: could we verify against CP&E?
    * Angela C. sure, but we often have duplicates happening earlier on due to impatience
    * Right now, PEGA doesn't store beneficiaries
    * Angela will make sure Katrina looks into this when she gets back from PTO
      

## **04/29/25s**

**Attendees:** Angela C., Angela P., Arleen, Ballard, Joie, Premal, Misty, Amanda, Jamie, Rachel P., Andrea, Renata

**Agenda**

* Discuss 180 day claims backdate rule
* Review Medicare Part C data collection


**Updates from Premal**

* We’ve paused CHAMPVA Claims because of the send back rate
* Confirm with Joie that send back rate with paper forms is around 50%
* Currently the UX team is looking at ways to improve the process, will discuss more during tomorrow’s claims call


**180-day claims backdate rule**

* Jamie shares the Figma mocks for the CHAMPVA Claims for, explains the screener questions for reducing duplicate submissions and claims resubmissions, as well as claims for individuals who are enrolled but waiting for their packet. 
* What is the effective date? From the service blueprint, we understand that step is late in the application process. 
    * **Eligibility date** the date VBA determines a Veteran is TNP and eligible to enroll in CHAMPVA (note that there is often a gap between this eligibility date and when a user is enrolled)
    * If married or had children, the **qualifying event date (QED)** is whenever the bene became eligible (AFTER sponsor's eligibility date)
    * The **date on the A card** is the date CHAMPVA confirmed eligibility when reviewing the 10-10d
    * Users have 180 days from the date on the card to submit any claims for service from the eligibility or qualifying event when they were technically eligible but not enrolled in CHAMPVA
* For claims after enrollment date on the A card, users have 1 year from the date of service in which to file a claim
* What goes out to new enrollees?
    * Authorization card
    * Pamphlet with guidance around Medicare B
    * VA letter
    * A guidebook can be requested, but they do not mail that out automatically
        * Guidebook is online and the letter contains the link to access it
        * Currently in the process of updating the guidebook
* Angela to provide a dummy A card for reference


**Medicare Part C**

* Right now, we only ask them to provide their Part C insurance carrier and effective date, and upload both original Medicare and Part C cards. 
* Does the user need to provide separate information for each plan?
    * Yes, sometimes Part A and B can have split effective dates. We need that information for each Part.



## **04/15/25**

**Attendees:** Andrea, Angela C., Angela P., Jamie, Gina, Elizabeth L., Ballard, Rachel P., Arleen, Renata, Amanda K.

**Agenda**

-   Review supporting docs inventory
-   Supporting docs questions


**Review supporting docs inventory**

-   Walkthrough of the spreadsheet and why we’re asking for this clarification
-   Updates to the inventory (captured below)
    -   High level: OHI Cert and Medicare are the most essential documents to provide, but other docs are potentially searchable in other VA programs like DEERS, Share and VBMS. There is always a chance the docs are missing, so we need to direct Veterans to go to their regional office to add dependents to their file to reduce erroneous denials.
-   Elizabeth notes most Veterans want to add their dependents when their benefits/ratings go up. We may want to add verbiage around adding dependents and spouse **before** applying for CHAMPVA.
-   Once a Veteran is in the system, their file never goes away — even a denial is established and retained, and updated as eligibility or beneficiaries are added/removed.
    -   The model is that the Veteran makes the dependent eligible.
    -   Most of the time it’s written on the paperwork if a dependent is natural-born or adopted.


**Supporting docs questions**

-   **School cert:** Required at the time of application.
    -   Q: Is that form/letter being updated?
        -   A: Angela P. is working on that but it hasn’t been sent in for updates. The verbiage for the school cert is the only thing being updated. It’s not really a substantial update.
    -   On the fact sheet/form: incorrect that the school has to submit the letter, the applicant can (and should) submit it, as long as the school cert is on letterhead and signed/dated by a school official.
-   **OHI Cert:** _every single_ beneficiary needs the OHI cert, it’s not one for the whole family
-   **Medicare:** Jamie explains the work we’re doing around the new L&L for the integrated 10-10d/OHI form
    -   Q: How often does someone 65+ eligible for Medicare without it (or only has Part A) who apply?
        -   A: It’s uncommon - most folks have both, or upload Part A only. They receive a denial if they do not provide evidence of both Parts A+B or the disallowance letter
    -   NB: At a recent event there’s confusion about not being able to have CHAMPVA if they have Medicare, period (repeat of what was discussed last week, but a good reminder that this is why we’re reviewing the Medicare L&L logic)
-   **Remarriages:** Remarriage cert required for a new sponsor -
    -   Q: If an applicant remarries a Veteran who is an eligible sponsor, do they need to send in a new marriage certificate?
        -   A: It’s very helpful, otherwise it has to be looked up in VBMS to confirm they’re eligible under the program
    -   Q: What happens if they don’t send it in?
        -   A: We go look in Share and VBMS, but if there’s no proof in those systems, the applicant isn’t eligible for CHAMPVA and they’re sent a denial. It still has to be verified.
    -   Q: What happens if an applicant doesn’t file divorce and remarriage papers but just reapplies?
        -   If those documents are in Share/VBMS and are updated in the system, it’s easy. This does happen all the time.
        -   Notes this isn’t a brand new app but technically is updating and adding to the existing file.
-   **Legal separation/divorce:** Form 684 could be in VBMS, but not necessarily.
-   **Birth cert for step children:** Required. The step-childrens’ address must be the same as the Veteran’s to be eligible. The birth date may or may not be available in VBMS.
-   **Adopted dependents:** Required. Adoption papers/birth cert (if available) must be verified. If the adoption papers aren’t available VBMS or Share, the dependent is not considered eligible.
-   **Natural born dependents:** Not needed if the dependent is listed in Share.
-   **Original marriage cert (if sponsor passed):** Not required, in VBMS
-   **VBA rating decision letter:** Not required, 99% of the time it’s available in VBMS

**Action items**

-   Finalize Medicare L&L based on updated eligibility information
-   Update and finalize supporting docs inventory (to live in team GH repo)
-   Consider content changes to the CHAMPVA application pages to address Medicare confusion (and how to add a dependent via VRO)
-   Scope/backlog exploration of a single OHI Cert per family rather than one form per person (Note: mocks of a potential solution were already completed [in Figma](https://www.figma.com/design/sSPoS7R9HE6ZlxRESRy2ms/Other-Health-Insurance-Certification--10-7959c--Form?node-id=710-22638&p=f&t=tbU5tkCrfvZwcw4P-0))

**For next meeting:** We'll need to talk about the open field text option for applicant relationship to sponsor. We are hoping to get paper/digital form on same page with VES. VES right now does not allow for free form text, but both paper and digital form do allow for it.


## **04/01/25**
Attendees: Andrea, Angela C, Jamie, Amanda, Elizabeth, Angela P, Rachel, Jina, Arleen, Premal, Renata, Mike, Erick, Ballard, Arleen, Alexandria

**Agenda**

-   10-10d/OHI merge
-   Supporting docs

  
**10-10d/OHI merge**

-   We heard when we worked on the claims form, that each applicant can have only up to two types of private health insurance. Do you know of any instances where people have submitted more than two, and what has happened?
    -   Applicants can have as many insurances as they want. 3 or 4 plans, or supplementary plans, are accepted. There's no hard and fast rules. Is it common to have more than dual coverage (2 plans)? No. But it does happen
    -   Re: when we heard this during earlier CHAMPVA claims calls: There's no limit; the most they've seen is 2 health insurances, that's the standard. Only seen 4 health insurances happen once in 18+ years
-   Medicare card uploads: the back of the red, white and blue Medicare cards contain the same information as the front. Do you really need both?
    -   Yes, that's standard in the health care industry. We need front and back for all Medicare cards
-   If applicants have Part C, do you need both the original Medicare card and the part C?
    -   Yes. This is to reduce confusion when processing applications/claims and reduce accidental denials.

 
**Request from CHAMPVA partners around the CHAMPVA application and OHI cert**

-   Just came from an event and a lot of beneficiaries were confused about needing to have Parts A+B in addition to everything else (required to be CHAMPVA eligible for ages 65 and older). But we want to make sure those 64 and under are not confused that this eligibility applies to them.
-   If you're under 65, you can have Medicare Part A, but it's not required to have it to be eligible.
    -   AI: Review content on [VA.gov](http://VA.gov) an ensure we're being super clear about this eligibility.
    -   AI: For ongoing 10-10d/OHI merge L&L discovery, review logic based on birthdate to add Medicare A+B so applicants under 65 are not being asked that question.


**Supporting docs**

-   Currently in the CHAMPVA application, there are some supporting docs that are optional that it may speed up processing to include. Should we make them required, or eliminate? (Rating decision, proof of remarriage, birth certificate for a child of the sponsor).
    -   Rating decision - not needed, remove
    -   DD-214 - not needed, remove (if still on the form)
    -   Birth certificate - optional, and keep optional
        -   Reasons for keeping optional:
            -   we'll check VBA if they've added that dependent to the VRO. If they haven't they're sent a letter to add that child as a dependent.
            -   Only needed for blended families (step-child or adopted). If they're already listed in Share as a dependent, there's just no need for that birth cert, only if they're not.
            -   **After discussion**: CHAMPVA partners are OK to remove the optional verbiage, BUT, if removing optional verbiage becomes a problem, we'll have a discussion to add back in.
    -   Proof of remarriage - required
-   AI: make a note of what happens for any document that is required and isn't submitted, to better understand how to separate "nice to haves" vs. "required" supporting documentation. To understand when something that's a nice to have is actually going to stop processing on an application.
    -   IVC team to send that list over (Angela C requesting to look at the list) and update the service blueprint to reflect these details


## **03/18/25**

### **Agenda**

* Review how contact information and addresses are used for the signer, sponsor and applicants  
* Review questions about supporting documents  
* Review how duplication ChampVA applications will affect the backlog

### **Contact information**

* Background: there are 3 user types who can fill out the 10-10d \-- the sponsor (Veteran), the beneficiary, and the signer (possibly a parent/caregiver who is not the Veteran, or a third party like an accredited representative/VSO)

|  | Signer | Sponsor (Veteran) |
| :---- | :---- | :---- |
| **Mailing address** | We want basic information on the Signer to verify who they are, will not be sending them anything through the mail, especially if they're a third party representative\* | Traditionally that would be if there was information that was for the Veteran-only. With the digital experience that doesn't really apply anymore. We aren't going to contact them, but we build a sponsor profile and that information is needed to verify the sponsor (sponsor profile is built first and then a beneficiary file underneath). |
| **Email** | Only reason we might contact the signer is if the application is incomplete or the applicants are incapacitated but that gets into POA stuff. | "-" |
| **Phone number** | “-” | "-" |

**\*Signer**

* Are we going to ask signers for proof of POA or similar? POA might be on file in VBMS, but these are brand new applicants whose POA isn't established in VBMS we're not able to take action on the application until receipt of POA.  
  * Unclear if ChampVA would reach out to the signer to request proof of POA if that wasn't found in VBMS.  
  * Current process is just to review to make sure there's a signature on the 10-10d at all (no current process to confirm POA).  
* What happens if an application isn't signed? Do you contact the Signer to complete?  
  * If an application isn't signed, there's part of a VistA flow where you mark "not signed" and a CCL letter is generated to send back. But the application is otherwise processed.  
  * "It needs to be input like you normally would and then instead of updating them (P\&T/PR) then you will send a CCL letter (CCL-B59-if an OHI cert isn't signed we need a CCL-A55)"

**Action Items**

* Determine if proof of POA is a showstopper and whether we need to revisit adding proof of power of attorney/power of representation and make that a gate on the digital form so signers can't proceed without proof.  
  * ChampVA doesn't have numbers on how big of an issue this is (can we request this post-meeting)  
  * Mocks were already made previously  
* Update service blueprint around unsigned application  
* Content updates  
  * Update content on Signer mailing address screen  
  * On signer email/phone number screen: "we use this information to contact you if we have more questions." this copy is wrong. ChampVA does not call, email or contact the Signer about the application, they contact the Beneficiary via letters.  
    * In instances where the address/contact information is not the same between the signer and Veteran/beneficiary, the mail goes to the beneficiary's address  
    * It sounds like there's an end goal on the ChampVA side to use email/contact info as a reachout process, but that's not going to happen until the backlog is moved through and ChampVA is transitioned off VistA to their new system.
