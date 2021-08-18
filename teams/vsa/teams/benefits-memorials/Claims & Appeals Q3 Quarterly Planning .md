# Claims & Appeals Quarterly Planning Q3 - 2021

Quarter 1 Accomplishments
-	BDD launch (1st week December, 100% Feb)
-	HLR launch
-	Misc. 526 Bug Fix
-	Claims Status Tool bug fix
-	Letters bug fix
-	526 PTSD research

# Quarter 2 Accomplishments
-	NOD design & development complete. Ready to launch pending language updates from the Board
-	526
-	Form refresh (rolled back pending EVSS fix)
-	Disability wizard move
-	Accessibility issue resolution
-	Misc. bug fix
-	BDD
-	Misc. bug fix / issue resolution
-	HLR
-	Disability wizard move
-	Research: Form refresh

Metrics
-	For new products we’ll do a weekly review
-	For mature products, we do bi-weekly review, 1 product each time
-	Backend engineers will walk us through the sentry/grafana data, FE will do GA. And we’ll have discussion on what it means and what actions we need to take or new product iterations to develop

# Quarter 3 Goals
1.	Release MVP - NOD 
2.	Original claims form 526ez - Iteration 3 (research and design work first, while Anna (and new engineer) tackle bugs). We prioritize from there.
  - Audit readout enhancements (comparison between staging and 526 style guide):
    - Contact information review page needs to be confirmed.  
    - Supporting evidence page needs to be changed. No pre-selection should be made. 
    - Drop-down links need to be moved to a separate page (accessibility requirement)
    - Fully developed claim page needs to be confirmed
    - Bank info page and Bank info review page is inconsistent. Staging needs to be updated to match Style guide. 
  
  - Error remediation
    - Determine where people stopped on the form 
    - Bugs in sentry (all EVSS stuff and everything else)
    - Email notifications - we don’t currently send email when last attempt to submit fails. We should communicate what to do next.
    - Veteran survey 
      - Determine where we want surveys placed and what we want to ask 
  
  - Ask EVSS to look into all errors
 
  - Two forms that aren’t launched (8940, 4192 (ticket already created) 
    - Change title of chapters
    - Make sure there are no changes to the forms (re-evaluate everything)
    - Add some additional wording - do you want to complete this form at this time (won’t impact your claim, you can submit via paper later)
 
 - PTSD issue implementation
    - Develop use cases to understand if we have a person without medals, etc., what questions are still required. Sync with Paul.
    - VA Profile team is working on having medals info available - August/Sept
 
 - Military Service History page consolidation (BDD)
 
 - Date of Birth issue (actually only impact small number of people, may not be worth effort)
 
 - Dependents verification issue  - do we add notification on confirmation page (BDD)

3.	Claims Status Tool (3rd quarter) (Product Value Doc - needs editing)
      - 2020 Research
      - Take a look at quick wins
        - Ebenefits
        - Label: submission date, but really discharge date
        - Audit on the type of claims we are getting
        - Stats
        - We need good test users
        - Login functionality. Address multiple page flashes
4.	HLR
      - Add ‘I am Homeless’ flag 
      - Remove Service Number field 
      - Changed Claimant fields (shouldn’t need to do anything here since we don’t support non-Veteran Claimants) 
      - Remove Same Office selection  
      - Update Informal Conference fields (times)
      - Change Rep Name format 
      - Explicitly take in Rep phone# and email 
      - Change time window selection 
      - Add SOC/SSOC Date field per Issue (only if opting in to AMA) - this will likely be tied to the new Legacy Issues endpoint we are going to build. Will also apply to NOD.
      - Start sending in Veteran Contact Info (same as NOD) 
      - Support write-in Issues (same as NOD) - this is probably more work on your side than ours but could be a nice win to get in here too assuming we can do it the same way we did for NOD 
5.	Documentation (at the end of NOD and post to GitHub)
      - Why we made decisions
6.	Celebrate releases!!!! 


# Constraints
-	Time
-	Conflicting priorities
