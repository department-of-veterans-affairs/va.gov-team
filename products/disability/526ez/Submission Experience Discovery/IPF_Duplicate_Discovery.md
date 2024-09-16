# In Progress Forms / Duplicate Claims Discovery
Disability Benefits Team 1

Submission Experience Discovery, May 2024

Evelyn Hilbrich Davis [evelyn@cityfriends.tech]


## What happens to the In Progress Form after submission?

-   Every time a Veteran hits “submit,” the system creates a record of submission– even if the submission fails.
    
-   After submission, the In Progress Form and Intent to File aren’t erased until after the Claim ID is established and all of the [perform-ancillary-jobs] run.
    
-   As a result, Veterans have access to their IPF and endless resubmission until that cleanup is complete. If there is any failure before these jobs are triggered, it will never reach the cleanup job.
    


## How often are duplicate claims created?

-   In a 30 day period, 4,988 out of 55,251 unique users submitted more than one time (4/16-5/16/24). This means 9% of users submitted potential duplicates at an average of 1.3 per Veteran.
    

  ## What makes something a duplicate?

- “Duplicate” submissions from an IPF are not always exact copies. 
- When a Veteran opens an IPF after submission, they are directed to the beginning of the flow of a form populated with their submission data.  Any minor changes they make while clicking screen to screen would result in a near-duplicate, but technically different application. 
- This adds complexity to the downstream task of assessing claims in a timely manner.
- We don’t know how many submissions were exact duplicates versus net new applications or added conditions, but we have learned that it is easy to create duplicates when the IPF is left open and Veterans want to be sure they submitted.

  
## How might the open IPF lead to problems for Veterans?

  1.  Veterans who received a “We’re sorry” or “It’s taking longer” confirmation message might immediately reattempt submission in hopes of a better outcome.
     
  3.  After leaving the confirmation page, Veterans have nowhere on VA.gov to prove that they submitted a claim. For those with IPFs still open, this might be read as a sign to take action.
      
  5.  Veterans who still see their IPF on MyVA under “Benefit application drafts” after submission could logically conclude that their submission failed and reattempt– even if they had received a successful confirmation message.
     
  7.  When confronted with “Continue your application” or “Start a new application,” Veterans might attempt to recomplete a new application by memory. This burden increases alongside the complexity of their original submission– and could create an even bigger problem for VSRs if content is significantly different.
    

## The length of a Veteran’s access to an already submitted IPF depends on their submission scenario.

1.  ### [Veteran receives a "We're sorry" submission failure error with no claim ID.](https://dsva.slack.com/files/U04THN07094/F0730B2GZTN/dupesy_ux.mov)
    

    -   Veterans can still access their IPF. When they do open it, they are sent to the beginning of the 526, fully prefilled with the claim they just submitted.
    
    -   As they click through to resubmit, they can make changes so the resubmission is not an exact duplicate (contributing to the challenge of identifying "duplicates" when slight changes are made
    
    -   They will be able to continuously open the IPF and resubmit it until a claim ID is generated and perform-ancillary-jobs runs successfully.
    

  

2.  ### [Veteran is told their claim was successfully submitted with claim ID](https://dsva.slack.com/archives/C053UDWMH7U/p1716236383655519?thread_ts=1716236330.858649&cid=C053UDWMH7U)
    

    -   It is likely that all Veterans have a window where they can access and resubmit a 526 because even after the claim ID is established, perform-ancillary-jobs still need to run all the way through before it gets to cleanup.
    
    -   On staging, Evelyn saw a scenario in which the claim was successfully submitted and the IPF was already erased.
    

3.  ### Veterans are told submission is "taking longer" without claim ID
    
    -   We have not been able to recreate this scenario, but because the cleanup doesn't run until after the claim ID is generated, we can assume that Veterans still have access to their IPF for a longer period of time until that claim ID is created and perform-ancillary-jobs runs all the way through to cleanup the IPF and ITF.
    

4.  ### [Veterans are waiting on the loading screen after hitting submit, but decide to go back and try to resubmit](https://dsva.slack.com/files/U05NY30QW6N/F0749FT8J58/back_button_on_loading_screen_duplicate.mov)
    

    -   Veterans can access the In Progress Form by hitting the back button to return to the application.
    
    -   The form is directed back to the ITF and then reenters the flow wherever the user last started, but the form is completely filled in
    
    -   At the review and submit page, the green button that normally reads "Submit Application" is gray and reads "Submitted" next to a checkmark.
    
    -   However, if the Veteran leaves the form, they can open their IPF in MyVA and submit it again that way.
