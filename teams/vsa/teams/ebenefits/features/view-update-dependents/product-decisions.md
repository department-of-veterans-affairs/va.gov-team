# High Level Product Decisions: 21-686c Application
**VSA eBenefits Team | May 2020**

`Jason Wolf, product manager`

---

This is to help guide and memorialize decisions made about different funcitonalities and behaviors for the feature we are working with.
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

## Issue Title  
`Date decided`  
**Description.**  
  
_Note/ Guiding principle_
- Action item

**TL;DR - what does this mean?  what do we do next?**

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
