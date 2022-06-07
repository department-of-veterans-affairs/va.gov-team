## Meeting with EVSS Sustainment 20200213

Mahesh Raparthi presented a walk-through of several different workflows for the 686 and 674 on the current eBenefits website. 
  - eBenefits uses IFrames for the 686 application.
  - On current eBenefits screens, required fields are marked with asterisks.  \** means required to continue, * means required to submit.
  - Status changes when adding a dependent: 
    | Status               | Description                                            |
    | ---------------------|--------------------------------------------------------|
    | `Add Pending`        | Form has not been submitted yet                        |
    | `Not on Award`       | Form has been submitted but not yet processed by RBPS  |
    | `Currently On Award` | After successfully processed by RBPS                   |
  - RBPS runs every half hour in production, but in the lower envs, it runs once nightly.
  - Inflight services are used to save forms in progress.  These are stored locally within EVSS.
  - Users have the ability to preview the form with the information added on eBenefits to see how the form looks with their updated information.
  - Adding a stepchild or adopted child requires an additional step of document attachment to the normal workflow.
    - **Documents are submitted directly from EVSS to VBMS**
    - Documents go to the e-Folder, and then are viewable within eBenefits under `My Documents`
    - The form is submitted and gets a claim id.  The claim id is picked up and processed, gets sent to the document service/VBMS.  VBMS returns a document id, and then the form is submitted to RBPS for processing
  - There is a post-secondary school search function when adding school information for a dependent.  **This school lookup uses a BGS webservice that hits the WEAMS table to retrieve school information.**
  
Michael Harlow then spent some time going over more specifics and showing repository/source code files.
  - These projects in Rational house the source code for 686: 
    - `evss-wss-wss-686-services`
    - `evss-wss-wss-686-webparts`
    - `evss-wss-wss-common-services`
  - All data validation occurs within EVSS first and then the form is submitted to BGS.
  - EVSS has a spring batch job which calls about 10-12 different VNP services as part of the submission process. These VNP services are used by RBPS to automate processing.
