##  10-10EZR Military service history - Design options review

### Attendees
- Heather Justice - PM
- Andrea Merrill - DM
- Hieu Vo - UX
- Premal Shah - PO
- Angela Fulton (HEC SME)
- Amanda Scully (HEC Deputy Director)
- Joshua Faulkner (VES Technical Director)

### Q & A Notes

* “Pending” outreach campaign paused (staffing/workload)
    * 365 letter sent to Veteran when in Pending status, needing more information and the Veteran has not responded
    * Application would be closed if no response or no evidence to support qualifying Veteran status (Title 38 - 2 years combined in service with Honorable discharge)
* HEC uses Veteran input to compare - rely on DD214 or DoD system data to be accurate
    * TERA / Special eligibilities - makes sense to have updated information from Veteran
* Joshua asked - If we take the data from DoD or DD214 - why ask the Veteran for it?
    * HEC staff will verify what is on file (trust but verify)
        * The Veteran input gives HEC heads-up on what to look for that may not be on DD214
        * HEC can only give Veteran enrollment based on what can be proven
        * Extra diligence is done to research and prove a Veteran’s service history
            * Sometimes HEC staff will go to VBA as well as various DoD systems to verify (esp for older Veterans when there is less of a digital trail)
    * Data input from the Veteran is more of them verifying their Veteran status
        * There may be a Directive that requires this?
    * Data input into online form does not get populated in VES
        * HEC staff would generate PDF copy of data input and review any attachments
    * More important to provide DD214 than type it
    * Nothing would happen with updated info, needs to have attached documentation
        * Attachments would create a work-order and go through a manual review
        * VES pulls from DoD, but nothing changes
* If Service history data is incorrect, it needs to be corrected with DOD
    * DD214 is needed
    * VADIR needs to be updated - ongoing problem within VA
        * Corrections are siloed to individual systems
        * No means to update across VA
            * Initiative coming? VADIR & VA Profile
* Financials can be updated over the phone
* Military info online - Veterans would be encouraged to update via online form

### Design Review
* **Option 1**
    * Displaying all service periods could be tricky, data formatting could be a challenge
    * Recent may not be the most relevant
    * Service period qualifies for Title 38?
        * No discharge papers would be needed
        * 2 yrs combined with honorable
* **Option 2**
    * Possible data extraction from DD214?
        * Happy path maybe - 70% of submissions
        * Formats of older DD214 docs may be difficult to read
* **Option 3**
    * Amanda says this option gives HEC everything needed to process
        * If file upload only (option 2), would have to look at the attached document, rather than just seeing the data input
    * Display with title 38 episode
        * VA.gov would get the same info that VES has
    * Attachment along with data input from Veteran will trigger manual review
    * A Use Case for those who have multiple service histories
            * The first service period is too short, and another service period combined with it could be Title 38 qualifying
* In short - The data entry fields are for HEC to research and process easier, the file attachment is for the system to initiate a manual review and provide evidence to support the updated information
* FYSA - [VA.gov](http://VA.gov) Authenticated Experience team is planning some research around displaying service periods on a Veteran’s profile page and eventually allowing for some way that Veterans could initiate an update, if needed.  We will continue following the progress on that.  

Action items



- [ ] VA.gov team will add Service Period question page and Checkbox page with special eligibilities
- [ ] VA.gov team will look into displaying full Military service history
    * Depending on effort and any formatting challenges, we will consider whether this will be delivered all at once, or if full service history is delivered post-MVP
- [ ] Future considerations and research will be planned for systematic document reading and data extraction
