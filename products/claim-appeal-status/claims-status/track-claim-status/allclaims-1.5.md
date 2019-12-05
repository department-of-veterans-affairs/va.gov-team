### Scope of All Claims
Match Claim Types Displayed in eBenefits
  
- Remove Vets.gov back end filter that limites to specific claim types to the 95 in list
   (1 Week +1 week of Testing) 
###^ Bare minumum requirement to match exact functionality of eBenefits
  - Back End (Austin/Carl): remove back end filter from Vetsgov backend
    
- Review UI for Compensation Disability specific content and document 
   Determine if content should be claim type specific or specific for some types and generic for others
   (2 weeks/overlapping - additional 1/2 week for testing)
    - UX/Design (Suzanne/Gina): review content and determine if we want to get more specific right now or be more generic on claim types we don't have as much knowledge around
    - Front End (Jeff/Mo): Make changes
    
- Review and Ensure Claim Type headers are present in Corporate Database and that our front end does not default to Disability Compensation Claim
   (1 week/overlapping - no additional testing time)
   - Front End (Jeff/Mo): Remove hard coded headers for claim types and just pass what is in the database. If interpretation of database headers are needed review with Suzanne/Gina
   - SME Work (Josh): Get recent copy of what is in Database to ensure that the claim types displaying have something in those fields
    
- New Charter to include Compensation, Pension, and potentially Vocational Rehabilitation and Employment (VRE)
   (2 to 3 weeks/overlapping - extra time added due to holidays)
   - PM Work (Kelly/Ian/Josh/Suzanne): Review Charter and get POCs
    
- Review "Ask VA for a Decision" (5103 Response) to determine which claim types should have this function
   (2 weeks/overlapping after Charter personnel identified - additional 1/2 week of testing)
   - SME/UX Work: 5103 Response is not relevant for all Claim types - after Charter is signed and POCs established, determine which claim types require 5103 and which do not. (Or filter based on which use it rather than which do not) 
    
- Claims List Management (brought over from Additional Options section) - This would allow for list filter and sort adjustments to improve performance and usability
   (1 week/overlapping - additional 1/2 week of testing)
    - UX: (Suzanne/Gina): Determine how the experience should work within the claims list summary page
    - Front End (Jeff/Mo): Edit that
    
### Estimated Timeline: 5 to 7 weeks with 2 to 2 1/2 weeks of testing (though testing can overlap and reduce that amount of time)
Scheduling issues: Holiday time creates scheduling conflicts with annual leave and use or lose timeframe with business stakeholders
    
### Additional Options + things to think about (things wanting to be added for next iteration can be discussed)
Items in bold represent EVSS work needed

- Notifications?

- Custom Headers and Descriptions **(Requires small amount of EVSS work)**

- EVSS Service updates **(Requires EVSS work - Josh L has changes that could be made to improve EVSS Services for Claim Status)**

- Content adjustments

- Disability Rating and Additional Benefits Page **(Uses EVSS services, but believes not to require additional work on their part)**

- Determine what to do with Claim Status document exposure if using newer version of Claim Status

- Potentially move claims status out of Disability Benefits 

- **Review steps needed to bypass EVSS Framework and use BGS and VBMS directly** (Required to sunset EVSS backend and would open up to increased data fields available - need to do this eventually)

 
