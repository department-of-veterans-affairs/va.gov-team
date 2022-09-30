# Jul 29, 2022 Short Form - issues processing without Military info

Issue reported by Joshua Faulkner:
>We have an issue with the short form when it comes to allowing them to skip the military service section.
> 
>There is a HEC workflow where the staff will manually register any online applications that fail to be processed automatically; in that workflow the application data is put onto a 1010ez pdf for viewing.
>In these cases of the short form that action fails because there is no military service information present in the application data, the staff are unable to view what was submitted and thus unable to enter it manually.
> 
>Btw, all the cases brought up so far the failure was due to invalid POB state value, it seems its allowing them to free-text it while the validator requires it to be a valid state.

#### Issue #1
- Place of Birth
     - Causing issues with processing
          - Foreign country states which is causing processing issue
          - Has to be US States + DC and “FG” for foreign country
     - Team will look at this and get it updated immediately - ticket needed

#### Issue #2
- Military Service info
     - The POB failures is ultimately causing this manual process
     - Importing app data onto 10-10 was not tested
          - Expects Military info to be there
          - Needs to be updated to handle empty values
               - Looking at about 5 weeks (1st week of September)
     - Backend team can get this info independently

#### Next Steps:
- Fix POB issue
- Leave feature toggle off until fix is in place
- Monitor for any issues
- Test with Josh & team
- Release at 5% for a few days
- Check in with Josh
- Monitor for any issues
- Release at higher %


### Summary from Lauren
- A change went in a month ago that updated the place of birth to include more than the expected values for the backend. We will update that list to reflect only the expected values that the 1010 needs.
     - Mark is creating the ticket
- The backend is able to handle the missing service history information in all cases except when there is a failure in submission. However, they need to update the lower environment to be able to accept an empty value for the service history.  
     - Josh’s team is going to put that in place (est. 5 weeks). 
     - They will conduct tests between their pre-prod and our staging, and will invite this team to those tests. 
     - We will leave the flipper in the OFF state in the meanwhile.
- Once we have assurance from Josh that the fix is in place, we will release again to 5%. 
     - We will notify Josh & Tarsha et al that it is 5% and confirm that things are looking good on Josh’s end before we move to 100%. 
     - We will again check in with Josh to confirm that things are looking good in the first few days after go-live.
