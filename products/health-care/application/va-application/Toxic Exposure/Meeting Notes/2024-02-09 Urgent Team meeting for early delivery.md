# Feb 9, 2024 | URGENT - Team TERA discussion

## Notes
### TERA Delivery 
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
     - Josh F says this would create more work for ES to store JSON and reprocess once ES is ready for TERA later
          - Josh F does not want to do this
     - HEC staff won't be able to see the JSON, would have to be reviewed manually by VES staff or wait until VES is ready for data
     - **RISK** - Applications for Veterans who have not gotten a TERA indicator from VBA will not be able to be reviewed for TERA
- In addition to the above - TERA Yes/No - distinction for checking the JSON attachment
     - ES would have to do work on this to trigger manual workflow for HEC staff to know there is a JSON file with TERA input
     - TERA Yes/No field does not exist in ES at this time

### Questions for VES
- [ ] Can we just…build this faster?
     - ..
- [ ] Can we send this as JSON instead of PDF so you can parse this later?
     - ..
- [ ] If we send JSON attachment and the form, how will it be processed?
     - ..
     - [ ] How can we make sure a Veteran isn’t rejected because their TERA info isn’t YET part of their record?
          - ..
- [ ] If we add a TERA Y/N, as an indicator for staff to review now or later? Or at least they aren’t rejected until all info is reviewed.
     - ..

- 
