## July 18, 2025 - EC/NOK data flow discussion

Attendees: 
- Heather Justice
- Hieu Vo
- Joshua Drumm
- Allan To
- Faulkner, Joshua
- Alex Parker

### Notes



* Outline data flow
    * Need to reflect all EC/NOK on form 
    * EC NOK data is sent to VES first
        * VES is automatically updated with new info
        * VES will log when the changes occurred
    * THEN the rest of the form data is sent to VES, without the EC NOK data
        * The raw data will not have the EC NOK,
        * The PDF generated will not have EC NOK
* Outline risk scenarios
    * User only sees primary
        * If they remove it and submit, the secondary (that was not visible to user) is now promoted to primary.  Veteran is unaware of this.
    * User only sees primary
        * Does not think their other contact was added, causing confusion
    * User only sees primary
        * Removes and adds a new contact, however it is the same as secondary, causing duplication and confusion
* Risks to HEC
    * Staff will not see the updated info in the form data (generated PDF or raw data xml)
    * Impact to reviews?
 
Action items
- [ ] Send information and detailed outline to HEC
