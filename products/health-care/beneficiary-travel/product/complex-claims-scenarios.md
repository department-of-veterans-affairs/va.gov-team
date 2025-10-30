# Complex Claims Scenarios (Common & Edge Cases)

## V1 Happy Path 
A **Veteran** attends...
* an appointment at **a VA facility**, 
* travels **round trip **from the** address we have on file for them**, 
* using one of the **allowed modes of transportation**,
* via the route **Bing Maps** indicates is the **most efficient route**, 
* **starts and submits within 30 days of the appointment** a claim, including 
    * **one or more travel-related expenses** for the appointment
    * where up to **one file/receipt for each expense** is provided.

## Additional users types
1. User is a Caretaker
    1. V1 - This user type will not be supported.
    2. V_FUTURE - User profile to be added to VA.gov & VAHB in 2026. 

## Additional locations 
2. Community Care facilities
    1. V1 - These facilities/appointment types will not be supported.
    2. V2 - Facility/appointment types will be added to VA.gov for December 2026 release.

## Additional mileage 
3. User takes a one-way trip. 
    1. V1 - We will save their claim and direct them to continue in TCP. 
        1. Note: If the user adds other expenses and then adds mileage, all the expenses and files they created in VA.gov will be saved and made available in TCP. We can’t deep link them into the in-progress claim, so we will put them on the dashboard where they will be able to locate their “Saved” claim.
    2. V3 - One way trips to / from home will be allowed.
4. User starts or ends at an address other than the one on file. 
    1. V1 - We will save their claim and direct them to continue in TCP. 
    2. V_FUTURE - Pending further discussion on if/how other addresses are captured or stored.
5. User takes a route other than what Bing Maps determines is the most efficient route to their appointment (extending the miles traveled).
    1. V1 - NOT SURPPORTED
    2. V_FUTURE - Pending further discussion on if/how this is addressed today and going forward.

## Additional modes of transportation
6. User travels to appointment using someone else’s private vehicle.
    1. V1 - The other driver’s vehicle is treated like the user’s private vehicle and any mileage expenses will be reimbursed to the User.
    2. V_FUTURE - The driver may register with the VA as a Caregiver.

## Timing 
7. The appointment hasn’t started and the **user has NOT checked in**. 
    1. V1 - A claim CANNOT be started.
8. The appointment hasn’t started but the **user has checked in**.
    1. V1 - A claim CAN be started.
9. The appointment is &lt; 30 days in the past
    1. V1 - The user can begin a claim and add expenses. They can come back to the claim at any time (although we will try to dissuade them if it’s 30 days after their appointment). 
    2. V_FUTURE - Implement in-app and device level notifications alerting the user to the pending timeline to submit outstanding claims.
10. The appointment is > 30 days in the past
    1. V1 - The appointment still exists with the messaging that it is past the regular time limit to file a claim.  The user can begin a claim, add expenses, and file as expected; however they will receive a message that their claim may be declined.
11. User starts to create a claim but adds no expenses or files. They do not modify it within 30 days of starting it. 
    1. V1 - After 30 days, we will delete this claim.  (This is current behavior across BTSSS/TCP.) If a user were to return to the appointment to try and start the claim again, they would see the same messaging as if it were a brand new claim that is past 30 days. 

## Adding expenses and files/receipts 
12. User creates an expense with no supporting file/receipt attached. 
    1. V1 - There is no way to submit an expense without a receipt. The user will receive an error that a receipt is required in order to submit the claim. If they don't want to submit the expense, they can delete it.
13. User creates an expense and attaches a single file.
    1. V1 - The user receives an onscreen confirmation that the files were successfully uploaded.
14. User creates an expense and attempts to attach multiple files. For example, they had a very long receipt and took 2+ screenshots or photos of the receipt. 
    1. V1 - NOT SUPPORTED. They can change the file but not add additional ones. They would need to combine these images themselves. For example, they could take a photo of multiple pages, or paste digital images into a Word doc and make a PDF of the Word doc. See a [Slack thread](https://dsva.slack.com/archives/C06U8QC6SJ1/p1761761282581939) where we discuss this.
    2. V_FUTURE - Up to 5 files will be supported for each expense type. Beyond 5 the user will receive an alert that they have reached the maximum number of attachments for this expense.
15. User combines all of their expenses into a single file (e.g. they take a single photo of all their receipts together) and uploads this same file for all their expenses in a single one file. 
    1. V1 - The user is allowed to upload the same file for each expense type. 
    2. (Kay is talking with VTP about how much this will cost VA.)
16. Added file is too large (e.g. >5MB), or is an unsupported file type (e.g. raw, heic)
    1. V1 - NOT SUPPORTED. The user receives an onscreen error message ([error states](https://www.figma.com/design/EM3ejHDOgnxaeOVRw6xnpf/Complex-travel-reimbursement-claims?node-id=8204-34232&t=he8HzxMn0krCWeER-1)) communicating the issue and the file is not uploaded.
        1. The Platform team is working on supporting heic files and may have a solution in time for MVP or V1.

## Editing and deleting 
17. User deletes an expense from a claim. 
    1. V1 - The user sees a modal where they confirm their choice. Once the delete request is confirmed the expense type and any associated files will be deleted. There will be no way to keep the file if you delete its overarching expense. There will be no way to Undo a delete.
18. User deletes all expenses from a claim.
    1. V1 - They can delete any and all claims. TBD on if we have validation to prevent the submission of claims with no expenses.  
19. User deletes a file from an expense.
    1. V1 - They can delete a file but must replace it with a new file before submitting. This will be communicated via error messages after they delete a file from the expense.
20. User wants to change a file.
    1. V1 - There will be UI to change the uploaded file. Changing a file is the equivalent to performing a file Delete and file Addition.
    2. V_FUTURE: The tool is able to identify if the user were to attempt to re-upload a previously deleted file.

## Duplicate expenses or files
21. One (or all) of the expenses is a duplicate.
    1. V1 - No validation is run to check for duplicate expenses.
22. One (or all) of the uploaded files is a duplicate.
    1. V1 - No validation is run to check for duplicate files. 

## Direct deposit 
23. User files without setting up direct deposit.
    1. V1 - Will follow the current procedure used for Simple Mileage Only claims. **[Confirm the production process.]**

## Claim Status 
24. User submits a claim with missing or mismatched information (i.e. they create an expense for parking, but attach an old or incorrect receipt) and a clerk sends it back and the status reverts to “Incomplete” or “Saved”.
    1. V1 - Will follow the current production operating procedure.
      1. Clerks can do things that can change the claim status unexpectedly. The application will display the updated status.
    3. V_FUTURE - Notify the user of changes to their claim status.
25. User receives a denial or a partial denial of a previously submitted claim.
    1. V1 - The user is allowed to initiate the appeal process for the full denied claim.
    2. V1 - The user is allowed to initiate the appeal process for just the denied expense. 
26. User submits individual expense claims for the same appointment. (e.g. timing of receipts is different)
    1. V1 - NOT SUPPORTED
    2. V_FUTURE - (May never be supported.) VTM would need to be updated to accommodate this workflow.

## Missing appointments
27. User goes to a **walk-in visit** or a **community care visit that was not updated in a VA system** (HRSM to VistA), the appointment might not appear in the list of past appointments. The user will need to go to TCP, where they can manually add their own appointment and then create a claim from it (NOTE: this type of appointment requires proof of attendance if it was community care. For VA locations where a user attended a walk in appointment, for example, it’s possible there is a record of that appointment in VA.gov even if it’s not showing up in the past appointment list. Unsure how that reconciliation takes place).
    1. V1 - NOT SUPPORTED. User will not be able to find their past appointment in VA.gov to initiate the claim flow.  
    2. V_FUTURE - Pending solution definition around community care appointments and non-scheduled appointments. 

## Behavior between modalities for V1
28. User starts a claim in VA.gov, then goes to TCP to view it, without making any modifications to the claim. There are no reprocussions. 
29. User starts a claim in VA.gov, then goes to TCP and **deletes an expense**.
    1. If there was a file for the expense, it won’t be associated with an expense in VA.gov. We will consider this an unassociated file.  
    2. If they attempt to manage the claim back in VA.gov, the user will be directed to TCP to finish their claim. 
30. User starts a claim in VA.gov, then goes to TCP and **deletes a file**. 
    1. If they return to VA.gov to manage the claim, the claim is available for the user, and the expense [correctly] no longer has an associated file.
    2. In VA.gov the edited expense will be flagged as an error on the review page that the user can fix by uploading a file. 
31. User starts a mileage claim in VA.gov that requires them to finish in TCP (e.g. one way trip). In TCP they **add files** to the claim, then attempt to finish the claim in VA.gov. 
    1. The user will be directed to TCP to finish their claim. (Any added files will not be associated with their expenses.) 

## Clerk actions
32. The association between an expense and a file/receipt is broken because a clerk/claim evaluator deletes the content of a file's notes field. **[Highly unlikely]**
    1. V1 - NOT SUPPORTED. The clerk/claim evaluator’s action has caused the association between expenses and claims to be undone. The user is directed to complete / manage their claim in TCP. 
33. A clerk copy/pastes the notes from one expense to many expenses. **[Highly unlikely]**
    1. V1 - NOT SUPPORTED. The notes field in the backend will capture the unique  Document_ID connecting the file to an expense. If a clerk edits the field or copy/pastes the ID from one notes field into another, the docs and expenses will no longer be associated. Users are sent to TCP to complete their claim. 
    2. V_FUTURE: Will investigate this scenario if it occurs in production.

## Eligibility Status Changes (WIP)
34. Tori raised something interesting. In some places it says within 30 days of your appointment or of "when you become eligible." Given the eligibility criteria, what does this actually mean? Scenario: A user goes to an appointment, a week later their disability rating changes from 0 to 30%. Does the timer to file reset to the date the rating changed? Based on other eligibility criteria (e.g. user is receiving treatment for a service connected disability), it’s unlikely they’d be traveling for VA care and not already be eligible, but maybe such a scenario exists. 
