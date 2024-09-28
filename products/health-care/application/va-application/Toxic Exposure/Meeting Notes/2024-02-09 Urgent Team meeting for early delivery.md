# Feb 9, 2024 | URGENT - Team TERA discussion

## Notes
### TERA Delivery 
#### Update from Patrick Bateman
- Patrick is getting advisement that we will probably be asked to get TERA questions in the EZ by 3/5
     - how far away are we from doing what we need to do on the VA.gov side of things?
     - did the team ever have a conversation about alternate ways of getting HEC the TERA data if VES isn’t ready to accept it?
     - i believe priority here is the EZ, not EZR. the idea is that expanded eligibility being announced in march will make healthcare available to a new group of veterans so long as the they can assert exposure. while there is definitely value in allowing a veteran who has already applied for health care to update their record to potentially get a higher priority group, i think that is a secondary use case.
     - ok folks, all signs are pointing to us needing to launch tera questions by 3/5. id like to know what needs to happen — aside from actually knowing where the data is going
     - i want us to be prepared
          - prepared means figuring out how we can collect and at least store the data.
#### UX 
- Seems like the difficult side will be for engineering/technical
- Designs are already in place
- Content is already reviewing
- Opt-out option
     - Yes/No do you want to answer the TERA questions
- ALL questions/fields are optional (confirmed with HEC)
- All questions will be displayed after answering YES to answer them (no skipping after opting-in)
- Even if questions are not answered, HEC staff will still check VBA for TERA indicators
#### Frontend
- Pretty straightforward, no concerns
##### Backend
- Suggestion - to collect the data on the front end and (at minimum) stuff it in a va.gov db table.
     - **RISK** - We can’t save PII for longer than 60 days
- Best solution is to send the TERA input as a JSON file attachment (like the DD214) to the application
     - Applications can be sent to ES and processed normally
     - The TERA data would be included in the JSON File attachment
     - HEC staff won't be able to see the JSON, would have to be reviewed manually by VES staff or wait until VES is ready for data
     - **RISK** - Applications for Veterans who have not gotten a TERA indicator from VBA will not be able to be reviewed for TERA
     - Josh F says this would create more work for ES to store JSON and reprocess once ES is ready for TERA later 
          - Josh F prefers not to do this, as it is more work and doe not make sense from his perspective
>- [From Lihan] Would it be possible to submit users' answers to the TERA questions as form submission attachments while we are waiting on the enrollment system API update?
>- [From Josh F]that would not accomplish anything really, the staff would have to review every single online application and see if something was attached for it
>- [From Alex] Is there currently a way to let staff know that an online record has been submitted with an attachment?
>- [From Josh F] no, work items are created for certain things but not just generically for any attachment, that wouldn't make much sense

- In addition to the above - TERA Yes/No - distinction for checking the JSON attachment
     - ES would have to do work on this to trigger manual workflow for HEC staff to know there is a JSON file with TERA input
     - TERA Yes/No field does not exist in ES at this time

### Questions for VES
- [ ] Can we just build this faster?
     - ..
- [ ] Can we send this data input as JSON so you can parse this later?
     - ..
- [ ] If we send JSON attachment and the form data, how will it be processed?
     - ..
     - [ ] How can we make sure a Veteran isn’t rejected because their TERA info isn’t YET part of their record?
          - ..
- [ ] If we add a TERA Y/N, as an indicator for staff to review now or later, what would have to be done on VES to receive this?
     - [ ]  Or at least ensure the applications aren’t rejected until all info is reviewed?
     - ..

- 
