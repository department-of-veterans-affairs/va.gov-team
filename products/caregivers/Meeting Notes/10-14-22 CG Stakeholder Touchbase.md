## October 14, 2022 CG Stakeholder Touchbase

### Notes

Facilities search discussion
- Last received - why are we asking?
     - helped figure out where to move app to.
     - Don't know that there is a benefit to having it there
     - PDF fields mapped, could this cause an error downstream
          - however this is an optional field, so data can be blank
     - Heather to check into what it would take to remove this section and when we might be able to align with the paper form update

- Preferred facility
     - zip code, city, state is used on CG support line
     - investigated before, 5 closest and went thru a rabbit hole
     - limitation of 90 minute drive (LH API), processing time on the site too, causes timeouts with too broad a search

### Notes from Tham

Notes
- **AI Tham** to make a VR request to VA.Gov for the Online Application - City Field character length (40 Characters)
     - Work in Progress - Mili and team to discuss internally and provide all the Salesforce Field items to Va.Gov team - 10/18
     - PDF is attached and application made to CARMA
     - One application so far

Ruman;
- FYI -- CARMA Online Applications without Attachments, Timeout issues;
     - MuleSoft second re-try can be cancelled, if there is Salesforce Id created with the first re-try -- can attach the file with the application with ID created
     - VA.Gov -- when Va.Gov does second re-try there is a confirmation message duplicate is been sent out to applicant - which can be avoided with the check on Salesforce Id
          - We need VA.Gov support in testing this scenario
          - Re-try was due to Network error - Anything we can do to prevent it?
          - API logs went through correctly
          - **AI Liha**n to check on the error - Discuss internally and confirm on the fix
  
Heather;
- Put VA.gov online 10-10CG instructions in Spanish & Tagalog
     - Follow-up questions on the Additional languages for the Instructions
     - Can CSP support additional languages in communications?
     - Please confirm the request for additional languages is for the Instructions Only, or the entire form?
          - Patrick and team will go through the form and confirm back (for English and then other languages)
          - Patrick: Re: From OIRA desk officers for VA: As long as we're just translating and not introducing new, substantive changes to the content, we can just submit the translated version through the OIRA system. They can do a non-substantive review and can usually review within 1 to 2 days.
          - Matt: Changing the form from 2 to 1 -- 2 for now to match with PDF
 
Also FYI - the PDF special character fix has been implemented.
 

Lighthouse API work;
- We need to know what CARMA expects to receive for the Facilities update. 
     - Today, we send the facility code of the "Parent" facility (the dropdown has a static list of those facilities).  In the future, we want to provide a list of any facility, and map it to the "Parent" facility.  Does CARMA still expect the "Parent" facility code only?  Or should we also include the selected facility/clinic?
          - Version 1 - mapping parent child relationship versions
               - Need a list of all the facility - map it to parent and parent sends to child
          - Station Id - have additional characters - need to be set with parent facility , get the list with codes and check on mapping.
               - Ranga and Heather to discuss and update
          - Mili: I believe it is VAMC Veteran Plans to Receive Services in CARMA, which is the "*Name of VA medical center or clinic where you receive or plan to receive health care services:" in the form. 
