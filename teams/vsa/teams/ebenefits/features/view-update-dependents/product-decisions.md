# High Level Product Decisions: 21-686c Application
**VSA eBenefits Team | August 2019 - Present**  

This is to help guide and memorialize decisions made about different functionalities and behaviors for the feature we are working with.  
-------------

## Deeper View Dependents Functionality  
`October 14, 2020`  
**Pick up existing users and provide easier removal of them through the application**  
  
_Note/ Guiding principles_
- There is more than one gateway into the application; View Dependents AND in the application itself
- We could inject the list of available dependents within the workflow adn allow them to be selected and move on through the form and have the dependents represented exactly as in the system.  
- Some logic might need to be involved to check and see who is on award, or who is applicable for that based on aging out etc
  - FE good design for constency, but implemnting this might be larger than anything we have done so far: The Form System doesn't allow for injection
  - FE: Quickest, most elegant might be to stay out of the form all together (can we do that?)
    - On VD, with those on award, they can simply click REMOVE and be presented with a review and confirmation screen with language that says "you are submitting a 686c/674"
  - BE: VD call gives us dep on award with a fair number of attributes, including participant id.  VA file number and SSN would have to fetched from user object
- Steve: $250M/year that gets over paid by tax payers
- Steve: We might end up knowing more about their status and may need to indiate pending or verbiage that supports the notion that the user could go to Claim Status or something like that
- Might have to implment a review + confirmation screen (with privacy policy + langauge etc)
- FE: Is there a time in the future where this is unauthenticated?  SK: No, not enough value where they could go another route (paper/VSO) 


**TL;DR - what does this mean?  what do we do next?**
Tickets to write:
- For removal functions, lets define everything beyond the simple remove button
- [What is in the View Dependents call](https://department-of-veterans-affairs.github.io/va-digital-services-platform-docs/api-reference/#/dependents_applications/getDependents)

------------
## Dynamic Form Attribute for 686/674 
`October 2020`  
**We send a specific attribute based on what is submitted and this poses an issue when the 674 workflow gets selected because we can't submit two at once.**  
Options
- 686 and 674 could be duplicated and submitted separately down to two email confirmations ✔
- limit workflows based on another selection (eh)

Short term
- limit with a check box?

Long term
- establish view dependents and manage the submissions based on that
  
_Note/ Guiding principle_
- Derek is going to game out some steps to take and propose them 

**TL;DR - what does this mean?  what do we do next?**

------------

## Silent Submission Failures  
`Team Meeting July 16, 2020`  
**Ticket: [[SPIKE] Cross Discipline Analysis of User Feedback for Form Submissions #11270](https://github.com/department-of-veterans-affairs/va.gov-team/issues/11270)**  
We know that there may be some errors and given the length of our submission process, if there is a failure we don't have a great way of notifiying the user.

What are the situations where something fails?
Retryable error
Common

Fatal error
API is down and we get a 500 right away but only after the "health check" for BGS at VA file number check

When a user clicks submit, job gets fired, if there is break before vnp tables get contacted we should put something in there.

Can we expose to the user that there has been a failure? After 24 hours?

Does BGS ever return a message given a length of time? No, not really

Backend meeting: others share similar experiences, this is not unique to us

Some possible solutions: 
- Email: "Hey something is not right" using Gov Delivery
  - job succeeds, it made it to vnp tables, we're done, it will eventually show up in Claim Status Tool
  - job fails, we provide our own claim status tool and we comm to user that they need to try again
  
- Status Claim Tool: could we hand off an id for them to check
  - widget that checks for jobs running against a 686 application, indicates pending
- Healthcare app (first app that might have a precedent)
- Can we use SIP?
- Job Status Tool (specific to 526/EVSS) where hey pull and check the status of a job

_Note/ Guiding principle_
- Action item:
  - User journey maps
  - Research email procedures
    - Will an email need to be required?  or where will it come from?
    - Do we have permission to do this?
  - For knowing whether the submission was successful or not:  
    - We know if the submission hits vnpProcUpdate call - if we get our payload back its a STRONG indicator of success
    - If the Sidkiq job retries some number of times - all retries are exhausted but we are loking at what that confirmation of failure would be

**TL;DR - what does this mean?  what do we do next?**  
Lowest Level of Effort: Let it go as is and resolve going forward (post launch)  <- Eh, we can do better  
Next Highlest Level of Effort: We need to know what indicator there might be for a failed response, then we can send them an email. ✔️
Highest LEvel of Effort: Integrate status into Claim Status Tool  
Ideal: There is a confirmation number that ties to all of the above  

**Next steps:**
- Define and create a hook for failures
- If submission fails:
- Fire the email after hook retries some unmber of times
- If submission is succesful:
- Fire email with thank you message. 
or  
- do nothing, application said it was succesful  


  
-------------
## Form ID  
`Team Meeting July 16, 2020`  
**Ticket: [Determine Form ID for Dependency Claims #11178](https://github.com/department-of-veterans-affairs/va.gov-team/issues/11178).**  

Seems like most things are using `686c-674` but `21-686c` is more inline with other form IDs but using has deeper implications across several things

Does backend know all the different places 
 - Yes but I am not sure if it is complete or what the implications

Implication:
- Pre-fill will need to be changed
- Schema would change
- PDF 
- Doc upload
- SIP

_Note/ Guiding principle_
- Action item

**TL;DR - what does this mean?  what do we do next?**  
Lets move forward with `686c-674` and post launch, we will reformat to some better consistency.  
FE will investigate and see if there is anything else that needs to be updated from their perspective.
Kathleen can move forward with what she needs to do.

-------------
## State Validation  (Do before Launch)
`Team Meeting July 16, 2020`  
**The form allows for a write in of a state but that might throw an error**  
Expects state or country, BGS wants two separate fields

Easiest way: Are you in US?
yes: free form for country to be passed to country field
no: proceed with drop downs fow state and country

We will need the 2 digit codes (ISO-3166 alpha 2) for all the BGS state and country codes

_Note/ Guiding principle_
- Action items:
  - Ask BGS - "What is the field level validation for city, county, state and country". Documentation speaks to this and we were able to confirm ourselves.  

**TL;DR - what does this mean?  what do we do next?**

[Example:](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/ebenefits/features/view-update-dependents/images/checkbox-dropdown-field-validation.png)
---
## File Uploads  
`Meeting on 6/23/2020`  
**Description: need to establish to sides of the issue - FR and BE.  FE is looking for an endpoint to submit to in order to include the file in the payload submission as well as another to pick it up and send to eFolder via VBMS.**  
  
_Action Items_
- Ask in platform: 
  - It looks like there is a general endpoint (ClaimDocuments?), but perhaps it should be form specific?
  - There are two process here, attachements are sent to the eFolder via VBMS, and sent to a vnpTable for submission
  - How can we test locally?
- Ask Lihan perhaps?
- Do we need to make a form specific integration to get the attachment moving?

**TL;DR - At this point we need to find more information about how files are handled.**

------------

## VA File Number  
`May 8, 2020`  
**A decision was made about how to handle the VA File Number and it's impact on the Veterans' ability to proceed into the Form 21-686c Dependent Claims application.**  
  
_Steve: "Since file number is a critical field for establishment of a claim, AND it tracks with SSN, AND SSN is often vulnerable to off-by-one errors, it's critical we try to derive the file number so we don't accidentally establish a claim for a different person."_
- There should be no user input of the VA file number. No UI for this first version.  
  - Research: where and how to get a hold of this number from the backend   
  - If the file number is not present in the API response, then the user is in an error state.  
  - The VA file number is required to submit   
- Next iteration may eventually show masked versions of the SSN and VA File Number
  
**TL;DR - We are going to run a check on this and if we are _not_ able to get it, we need to send the user to a phone number to ensure their VA file number is in place in the VA system of record via some error messaging (WIP):**
  
![you're missing critical info](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/ebenefits/features/view-update-dependents/images/your-profile-is-missing-info.png)

------------
## Additional Pension Questions  
`May 5, 2020`  
**Some questions have come to light involving a Veterans Pension information.  These questions are:** 
When adding dependent, ask an additional (optional) question: "Did this dependent have income in the last 365 days?"

Ask a global (optional) question: "Did the household have a total income of less than $XXX in the last tax year?"
  
_This should be handled with care and context so that financial questions are not off-putting to the Veteran_
- Design the presentation of these questions in a way that conveys their intent and gives confidence to the Veteran about what they are answering and what it is for.
- These questions are in the current mockups, with callouts, but will not be implemented until after production.

**TL;DR - 2 new pension questions to be added.  Create a mockup for later implementation**

------------
## 674 in First Version
`Date decided`  
**The 674 is essentially a whole separate form but can fit nicely inside of the 686.  Because there are some aspects of the 674 that require some heavier lifting, we may not go into the first version with the 674 complete**  
  
_Note/ Guiding principle_
- Action item

**TL;DR - what does this mean?  what do we do next?**
------------

## Field Deltas 
`May 18, 2020`  
**The form presents a set of questions and possible answers but the backend in BGS may only accept a portion or a different set of them.**  

-E.g., we take suffix online but there is no place to fill it in the actual pdf.
  
_As much as possible we want the structured data to be representative of what is being presented._
- Ensure there is documentation on what these deltas are.

------------

## Tweaks to Questions  
`May 18, 2020`  

**Report Divorce - two radio buttons for reason marriage ended: Divorce and Annulment / Other.
Spouse Marriage History - three radio buttons for reason marriage ended: Divorce, Death, and Other.**  
  
------------

## Differences and issues with online and paper forms
[Link to VA Form 21-686c](https://www.vba.va.gov/pubs/forms/VBA-21-686C-ARE.pdf)
| VA.gov Workflow | Digital Form | Paper Form | Issue | Resolution | Date |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Add Child | Child status checkboxes | 18G. CHILD STATUS (iterates) | No option in BGS ( we get errors for using anything other than (spouse, child, guardian) | Unresolved | - |
| Add Child | Marriage end date selector | 16E. IF THE CHILD DOES NOT LIVE WITH THE CLAIMANT PROVIDE NAME OF PERSON THE CHILD RESIDES WITH (iterates) | Should we create a person and a relationship with the child and this person? | Unresolved | - |
| Add Spouse | Marriage type radio buttons | 11F. HOW WERE YOU MARRIED? | Where do we put ‘type’ and then type other? | Unresolved | - |
| Add Spouse (Former Marriages) | Reason marrige ended radio buttons | 14A.3 REASON FOR TERMINATION and 15A.3 REASON FOR TERMINATION (iterates) | In `vnp_ptcpnt_rlnshp_create` we have these options for marriage type code: Death, Divorce, Other | Set radio button options to: "Divorce," "Death" and "Annulment or other"  | 5/18/20 |
| Add Spouse | Reason for separation textbox | 13B. REASON FOR SEPARATION  | FE sends reason for separation. We don’t know where to put this. Would it be ‘Other’ in `marage_trmntn_type_cd` ? | Unresolved  | - |
| Report Divorce | Reason marrige ended radio buttons | SECTION IV Note: If marriage ended as an annulment or declared void, use Section IX, Item 25 | In `vnp_ptcpnt_rlnshp_create` we have these options for marriage type code: Death, Divorce, Other | Set radio button options to: "Divorce" and "Annulment or other" (no Death)  | 5/18/20 |
| Report Death | Dependent relationship radio buttons | 22A. DEPENDENT TYPE | No option in BGS ( we get errors for using anything other than (spouse, child, guardian) | Unresolved | - |
| Report Child Marriage | Marriage end date selector | 23B. DATE OF MARRIAGE  | No place for: `date_marriage_ended` Should we use `end_dt` in `vnp_ptcpnt_rlnshp_create`? | Unresolved | - |
| 674 | Course of study or educational program text field | 8B. NAME OR TYPE OF COURSE OF EDUCATION OR TRAINING | In the `school_information` what do we do with `training_program`? There’s `course_of_study` but that is taken in the `program_information` | Unresolved | - |


## Issue Title  
`Date decided`  
**Description.**  
  
_Note/ Guiding principle_
- Action item

**TL;DR - what does this mean?  what do we do next?**

------------
