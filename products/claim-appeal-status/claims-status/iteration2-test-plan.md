## Claim Status Test Plan (v2)

### **Testing Executive Summary:**
  - [X]	Security Scanning/Testing (Done by DevOps)
  - [In Progress] Accessibility Testing
  - [X] Functional Testing [Automated / Manual]
  - [more or less done] Acceptance Testing (Scenario testing included in User Story issue - used for demo/stakeholder testing)
  - [X] Additional Browser Testing (Firefox, Chrome, IE11, Edge, tablet (iPad), Mobile (Android))

### Iteration 2 Focus:
- Remove Filters 
  -	Remove backend filters that allow for all BNFT_CLAIM_TYPEs through that indicate YES within the back end table
  -	Remove hardcoded assignment of Claim Type within the Claims Summary page
  -	Submission of missing fields within table
- Claim Summary Page UX/UI Update
  -	Update to interface for Summary Page
  - Ability to Sort
  - Separate Open vs Closed Claims
- Claim Details Page UX/UI Update
  - Move 5103 Notice to Files page
  - Change Contention Language to 'What you Claimed'
  - Generalize reasons for estimated completion date 
  - In Profile page include other types of claims in explanation

### Acceptance Criteria

**Consolidated Claims**
- [x] A link is shown at the top of the summary page to explain what happens when a claim is consolidated

**List of Claims**
- [x] I see my open and closed (historical) claims in the same list
- [x] I see the claims in order established by the sort
- [x] I am able to alter how my claims list is sorted (3 options)
- [x] I see information about each of my claims:
  - [x] I see the claim type
  - [x] If there are files needed from me, I see a notification
  - [x] If VA sent me a development letter, I see a notification
  - [x] If VA sent me a decision letter, I see a notification
  - [x] I see the date the last update occured
  - [x] I see the date I submitted my claim
- [x] I can select a claim and be directed to its status page
- [ ] If I don't have any claims, I see a message alerting me that I don't have any claims

**Contact VA**
- [x] I can find VA contact information on every screen within claim status
- [x] I see a phone number to call the VA
  - [x] If I am on a mobile device, I can select the phone number to call it
- [x] I can select a link to be directed to a VA online support messaging system (iris)

**Link to eBenefits**
- [x] On the claims list, I see an alert directing me to eBenefits to file claims, check appeals or update my personal information

**View Claim Type**
- [x] On the claims list page, I see a list of claims titled by claim type (Compensation, Pension, Automobile... etc)
- [x] On the claim status page, I see the claim type as the page heading that matches the claim type in the summary page

**View Conditions / Contentions**
- [x] In the claim status page header, I see a list of my claimed conditions
  - [x] If my conditions have not yet been entered into the system, I see the text "Not available"
  - [x] If I have more than 3 conditions, there's a "see all" link that goes to details tab
- [x] On the claim status Details tab, I see a list of my claimed conditions
  - [x] If my conditions have not yet been entered into the system, I see the text "Not available"
- [x] For each condition, I see whether it is new, reopened, an increase, or secondary

**5103 Notice**  
- [x] I see an alert at the top of the Status tab that leads to a page to submit the notice
- On the page describing the notice, I see:
  - [x] A description of the notice
  - [x] A checkbox (unselected by default) to agree to the notice
  - [x] I can submit the notice or cancel and go back to the previous screen
  - [x] I am unable to submit without selecting the checkbox
  - [x] If I select the checkbox, the submit button is enabled
- [x] If I submit the notice:
  - [x] I am directed to the Status tab, where:
        - I see a confirmation message that my request was sent
        - I can close this message to hide it from view
  - [x] The alert at the top of the Status tab is removed
  - [x] In the timeline on the Status tab, I see an update that I submitted the 5103 notice
  - [x] On the Files tab, I see a message in the optional evidence section that I am unable to file any more evidence
- [x] If I cancel:
  - [x] I am directed to the Status tab
  - [x] The alert remains present above the timeline

**Status of Claim**
- [x] I see the current phase of my claim on the claims list page
- [x] I see a list of all the phases on the Status tab, numbered 1-5
  - [x] For phases that have been completed, I see:
    - [x] Phase description and status updates hidden by default
    - [x] The phase description and status updates can be shown by selecting the "+" icon
  - [x] For the current phase, I see:
    - [x] Phase name in blue text
    - [x] Phase number
    - [x] Phase description and status updates shown by default
    - [x] The phase description and status updates can be hidden by selecting the "-" icon
  - [x] For phases that have not begun, I see:
    - [x] Phase name
    - [x] No "+" icon to expand to see updates
  - [x] I can expand or collapse the current and past phases by clicking the +/- icons next to the phase name
- [x] If my claim is marked complete:
  - [x] I see information at the top of the status tab notifying me that my claim decision is ready (if decision letter is sent)
  - [x] I see information at the top of the status tab about reopening my claim or filing an appeal

**View Claim Updates**
- [x] I see updates listed in the timeline on the Status tab
  - [x] I see each update nested below the phase it occured in
  - [x] For every update I see the date it happened and a description
  - [x] If there are more than 5 updates within a phase, I see the most recent 5 updates and a button to see older updates
  - [x] If I click the button to see older updates, I see all the older updates appear below the most recent 5 updates
  - [x] I see an update when VA received my claim
  - [x] I see an update when my claim is complete
  - [x] I see an update when my claim moved to a different phase
  - [x] I see an update when VA requested a tracked item from me
    - [x] If I have not yet uploaded this item, selecting the request name directs me to its upload page
    - [x] Once I have uploaded this item, the link to the upload page is removed
  - [x] I see an update when VA requested a tracked item from others
    - [x] If I have not yet uploaded this item, selecting the request name directs me to its upload page
    - [x] Once I have uploaded this item, the link to the upload page is removed
  - [x] I see an update when I submitted a tracked item to VA
  - [x] I see an update when I submitted optional documents to VA
  - [x] I see an update when VA marked a tracked item as closed
  - [x] I see an update when VA marked optional documents as closed
  - [x] I see an update when VA sent me a 5103 notification letter (request for decision)
  - [x] I see an update when I submitted a 5103 notice (request for decision)
- [x] I see certain updates listed with each claim in the claims list
  - [x] I see an update when VA requested tracked items from me
        - [x] If VA has also sent me a decision letter, this update should be hidden
  - [x] I see an update when VA sent me a development letter in the mail
        - [x] If VA has also sent me a decision letter, this update should be hidden
  - [x] I see an update when VA sent me a decision letter in the mail

**Next Steps after Claim Completion**
- [x] I see information and links about reopening my claim, filing an increase, or filing an appeal

**Claim Details Missing**
- [x] If my claimed conditions are not yet entered into the system, I see a message at the top of the status tab notifying me that my details are being added 
- [x] If my power of attorney is not yet entered into the system, I see a message at the top of the status tab notifying me that my details are being added 

**Estimated Completion Date**
- [x] I see the estimated completion date below the "Complete" phase on the Status tab
- [x] If the estimated completion date is less than 2 years from now:
  - [x] I see the estimated date
  - [x] The text linking to the informational page reads "Learn about this estimate"
- [ ] If the estimated completion date is more than 2 years from now: (can't set up to test)
  - [ ] I see that the estimated date is not available (can't set up to test)
  - [ ] The text linking to the informational page reads "Learn about this estimate" (can't set up to test)
- [x] If the estimated completion date changes to longer or shorter than before:
  - [x] I see the estimated date
- [ ] If the estimated completion date has passed:
  - [ ] I see the estimated date
  - [ ] The text linking to the informational page reads "Learn about this estimate"

### Files Tab

**Upload Requested Documents**
- [x] I can navigate to the document upload page by selecting the request in the timeline update
- [x] I can navigate to the document upload page by selecting the request on the Files tab
- I see details about the request:
  - [x] I see the title
  - [x] I see whether it is needed from me or from others
  - [x] If it is needed from me, I see the due date
    - [x] If the due date is in the future, the text color is black
    - [x] If the due date is in the past, the text color is red
  - [x] If it is needed from others, I see a warning message about uploading this evidence
  - [x] I see the description of the request
- [x] I can view instructions for submitting files via mail or fax
  - [x] I see the instructions appear in an overlay over the upload page
  - [x] I can select a link to view the VA mailing address
  - [x] I can close the overlay
- [x] I see requirements for file types and the maximum file size I can upload
  - [x] Accepted file types: pdf (unlocked), gif, tiff, jpeg, jpg, bmp, txt
  - [x] Maximum file size: 25MB
- [x] I can select files to upload from my computer that match the accepted file types
  - [x] If any files on my computer do not match the accepted file types, they are disabled from selection
  - [x] If I select a file that exceeds the 25MB size limit, I see an error and the file is not added
- [x] For each file I select, I must select the document type in order to upload
  - [x] I select the document type from a predefined list
  - [x] If I do not select the document type, I see an error when I attempt to upload my files
- [x] I can remove files I've selected to upload
- [x] I can upload files for review
- [x] If I have selected at least one file and I have selected the document type for every file, I see a dialog with a progress indicator and warning message against stopping the upload process
  - [x] If I attempt to upload without submitting any files, I see an error
  - [x] If I cancel my upload in progress:
    - [x] I am directed back to the upload screen
    - [x] My selected files are still listed on the upload screen
- [x] If my files successfully upload:
  - [x] I am directed to the Files tab, where:
    - [x] I see a confirmation message that my files were uploaded
    - [x] I can close this message to hide it from view
    - [x] The request is removed from the "Requested files" list
    - [x] I see my files appear as "Submitted" in the "Documents filed" list
  - [x] I see an update in the timeline that I submitted my files
  - [x] I see that the original timeline update requesting the item no longer contains an active link to the request upload page
  - [x] I see an update in the alert that appears above the timeline 
    - [x] If there are no more files requested of me, the alert is hidden
    - [x] If there are still files requested of me, the request I just submitted files to is not included in that number
  - [x] I see an update to the notification of files needed on the claims list page: (intermittent refresh of page)
    - [x] If there are still other tracked items needed from me, the notification no longer counts this tracked item
    - [x] If there are no other tracked items needed from me, the notification is hidden
- [ ] If my files do not successfully upload:
  - [ ] I am directed back to the upload screen
  - [ ] My selected files are still listed on the upload screen
  - [ ] I see an error message that my files were not uploaded

**Information from Others**
- [x] In the timeline on the Status tab, I see an update that VA requested a document from others
  - [x] I can select the request name as a link to be directed to its upload page
- [x] On the Files tab, I see files needed from others
  - [x] I see the title of the request
  - [x] I see a label indicating that the file is optional for me and has been requested of others
  - [x] If there are no files needed from me or others, I see a message saying so
  
**Upload Optional Documents**
- [x] I navigate to the document upload page by selecting "turn in more evidence"on the Files tab
- [x] On the document upload page, I see a warning message about uploading optional evidence
- [x] I can view instructions for submitting files via mail or fax
  - [x] I see the instructions appear in an overlay over the upload page
  - [x] I can select a link to view the VA mailing address
  - [x] I can close the overlay
- [x] I see requirements for file types and the maximum file size I can upload
  - [x] Accepted file types: pdf (unlocked), gif, tiff, jpeg, jpg, bmp, txt
  - [x] Maximum file size: 25MB
- [x] I can select files to upload from my computer that match the accepted file types
  - [x] If any files on my computer do not match the accepted file types, they are disabled from selection
  - [x] If I select a file that exceeds the 25MB size limit, I see an error and the file is not added
- [x] For each file I select, I must select the document type in order to upload
  - [x] I select the document type from a predefined list
  - [x] If I do not select the document type, I see an error when I attempt to upload my files
- [x] I can remove files I've selected to upload
- [x] I can upload files for review
  - [x] If I have selected at least one file and I have selected the document type for every file, I see a dialog with a progress indicator and warning message against stopping the upload process
  - [x] If I attempt to upload without submitting any files, I see an error and cannot begin upload
  - [x] If I cancel my upload in progress:
    - [x] I am directed back to the upload screen
    - [x] My selected files are still listed on the upload screen
- [x] If my files successfully upload:
  - [x] I am directed to the Files tab, where:
    - [x] I see a confirmation message that my files were uploaded
    - [x] I can close this message to hide it from view
    - [x] I see my files appear as "Submitted" in the "Documents filed" list
  - [x] I see an update in the timeline that I submitted my files
- [x] If my files do not successfully upload:
  - [x] I am directed back to the upload screen
  - [x] My selected files are still listed on the upload screen
  - [x] I see an error message that my files were not uploaded

**Items No Longer Needed**
- [x] If I have submitted documents for a tracked item:
  - [x] I see an update in the timeline that I submitted the tracked item
  - [x] I see that the original timeline update requesting the item no longer contains an active link to the request upload page
  - [x] The tracked item is removed from the "Requested files" list on the Files tab
  - [x] I see the files I submitted appear as "Submitted" in the "Documents filed" list
  - [x] I see an update in the alert that appears above the timeline 
        - [x] If there are no more files requested of me, the alert is hidden
  - [x] I see an update to the notification of files needed on the claims list page:
        - [x] If there are still other tracked items needed from me, the notification no longer counts this tracked item
        - [x] If there are no other tracked items needed from me, the notification is hidden
- [X] If VA has marked a tracked item I submitted as closed:
  - [X] I see an update in the timeline that the tracked item was reviewed by VA
  - [X] In the Documents Filed list on the Files tab, I see the document marked as reviewed by VA
- [X] If VA has marked a tracked item others submitted as closed:
  - [X] The tracked item is removed from the Files Needed section on the Files tab
  - [X] I see an update in the timeline that VA reviewed the tracked item  
  
**View List of Documents**
 - [x] I see a list of of documents I've submitted on the Files tab of the claim status page
  - [x] On each document I see a heading:
    - [x] If the document is a tracked item, the heading is the title of the tracked item request
    - [x] If the document is optional evidence, the heading is the document type I selected when uploading the document
  - [x] On each document I see a list of the filename(s) I uploaded
  - [x] If the document has not yet been closed by VA, I see the date I submitted the document and a "pending" label
  - [x] If the document has been closed by VA, I see the date it was closed and a "reviewed by VA" label and checkmark in green text
  - [x] If I have not submitted any documents to this claim, I see a message stating I have not submitted any documents
- [x] I see updates about documents I've submitted in the timeline on the Status tab
  - [x] I see that I submitted a tracked item to VA
  - [x] I see that I submitted optional documents to VA
  - [x] I see that VA marked a tracked item as closed
  - [x] I see that VA marked optional documents as closed
  
### Details Tab

**View Date of Claim**
- [X] On the claims list page, I see the date my claim was submitted
- [x] On the Details tab, I see the date my claim was submitted
  
**Contentions noted above**

**Power of Attorney**
- [x] On the Details tab, I see the name of my Power of Attorney
- [x] If I don't have a Power of Attorney, I see the text "Not available"
- [x] If my Power of Attorney has not yet been entered into the system, I see the text "Not available"


### Errors

**Error Messaging**
- [x] If the service is down:
  - [x] I see an alert notifying me that my claim status is unavailable


