## October 14, 2022 CG Stakeholder Touchbase

### Notes

**Additional languages for intro of CG**
- Can CSP support other languages? (communications)
- Prob need to do the whole form (not just intro)
     - **Matt B** mentioned that the instructions would be quicker to update
     - **Patrick** - when we do translations, we do the whole form with instructions.  
          - Is it worth doing instructions only (customer experience)?
          - Does OMB have issue with forms in other languages, or does it need to be reviewed again, like any other changes?
>Patrick confirmed:
> 
> re: OMB PRA review of translated forms.
>
>From OIRA desk officers for VA:As long as we're just translating and not introducing new, substantive changes to the content, we can just submit the translated version through the OIRA system. They can do a non-substantive review and can usually review within 1 to 2 days.

**Facilities discussion with LH**
- Optional field - CG team to find out downstream process or service dependency on this field (Matt B already working on this)
     - then we can talk about PRA and dropping the question
- What does VA.gov need to send to CARMA for facility
   - Send parent today (VHA-610)
   - We will need to confirm the related parent facility list with Ranga balasubramanian
         - Concern about codes, code length and mapping
- What does the PDF need to reflect?
   - Selected facility or Parent facility? - if contacted, would be from a different facility

>Per Milli:
>
>I believe it is VAMC Veteran Plans to Receive Services in CARMA, which is the "*Name of VA medical center or clinic where you receive or plan to receive health care services:" in the form. 

**City Field character length**
- VA.gov needs to update limit
- Mili to provide me other field limits

---

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
          - **AI Lihan** to check on the error - Discuss internally and confirm on the fix

**Scenario 1**
- Payload recd and all good
- VA.gov receives network error, we then re-try, even though there was a  successful flow 
     - Not sure what is causing the network error, there are multiple areas where this can happen
     - looks successful on Mulesoft side
- Causes duplicate error in Salesforce (when Mulesoft sends downstream)
- Mulesoft will resolve to avoid sending duplicate message to applicants
- We can look into the issue, see if there is anything we can do to address on our side

**Scenario 2**
- Internal to Mulesoft and Salesforce
- Timeout is happening at 60 seconds, which is way short and causing re-tries
     - This causes PDF not to generate (too short)
- Mulesoft will resolve

  
  
Heather;
- Put VA.gov online 10-10CG instructions in Spanish & Tagalog
     - Follow-up questions on the Additional languages for the Instructions
     - Can CSP support additional languages in communications?
     - Please confirm the request for additional languages is for the Instructions Only, or the entire form?
          - **Patrick and team** will go through the form and confirm back (for English and then other languages)
          - **Patrick**: Re: From OIRA desk officers for VA: As long as we're just translating and not introducing new, substantive changes to the content, we can just submit the translated version through the OIRA system. They can do a non-substantive review and can usually review within 1 to 2 days.
          - **Matt**: Changing the form from 2 to 1 -- 2 for now to match with PDF
 
Also FYI - the PDF special character fix has been implemented.
 

Lighthouse API work;
- We need to know what CARMA expects to receive for the Facilities update. 
     - Today, we send the facility code of the "Parent" facility (the dropdown has a static list of those facilities).  In the future, we want to provide a list of any facility, and map it to the "Parent" facility.  Does CARMA still expect the "Parent" facility code only?  Or should we also include the selected facility/clinic?
          - Version 1 - mapping parent child relationship versions
               - Need a list of all the facility - map it to parent and parent sends to child
          - Station Id - have additional characters - need to be set with parent facility , get the list with codes and check on mapping.
               - Ranga and Heather to discuss and update
          - **Mili**: I believe it is VAMC Veteran Plans to Receive Services in CARMA, which is the "*Name of VA medical center or clinic where you receive or plan to receive health care services:" in the form. 
