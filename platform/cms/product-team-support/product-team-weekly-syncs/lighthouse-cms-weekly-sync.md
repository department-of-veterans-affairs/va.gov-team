# Weekly sync: Lighthouse / CMS

<details><summary>About this meeting</summary>

- Mondays 3-3:30pm ET 
- Meeting owner: Clarence Maeng
- Facilitator: Clarence Maeng
- Standing agenda: 
  - Migrations
    - From VAST
    - To Lighthouse
- Regular participants: Dave Conlon, James Costa, Desiree Eugster, Steve Wirt, Adam Stilton

</details>

<details><summary>Parking lot</summary>

</details>

## Monday Mar 29 3:00pm ET

Agenda/Notes

- Action item review
  - Dave to send CAP workflow to CMS and Lighthouse teams (waiting on Michelle to review)
  - Would need a new push endpoint or a new nightly sync from Lighthouse.
- GraphQL/Renaming Fields 
  - Possiblity of doing a nightly pull through GraphQL for both Covid19 (in addtion to the push) and for the larger health services integration
  - Potential issues and the need for renaming/mapping on both sides
- COVID health service data
  - Vaccine service
  - All health services
- VAST
- New items
   - Sync issues:
      - Facility exists in VAST but is not visitable for veterans. (active is not the appropriate status  ie. 660QD)
      - Lovel does not exist in vast but is a health facilty.
      - Human workflow needed with CMS report for buisiness process if a facility is removed from VAST.  It should not be an automated delete or archive.
  
  Action Items 
    - Dave to send CAP workflow to CMS and Lighthouse teams (waiting on Michelle to review)
    - Lighthouse to investigate pusing of services in bulk.   (+11,0000 if doing a bulk push of one service at a time.)

## Monday Mar 22 3:00pm ET

Agenda/Notes

- Action item review
  - Lighthouse team to complete UX review for field name changes
  - CMS team to complete 3 field name changes by sprint 28 (ends 3/26/21)
  - Dave to send CAP workflow to CMS team
- COVID health service data
  - Vaccine service
  - All health services
- VAST

## Monday Mar 8 3:00pm ET

Agenda/Notes

- COVID health service data
  - Vaccine service:
    - Lighthouse to tie up website piece; may be beneficial to push everything except the website piece for now
    - Currently stalled with VAOS work that's happening
    - CMS to make changes to field names by 3/26/21 (sprint 28)
  - All health services:
    - Pulling data all at once from CMS to Lighthouse nightly is recommeneded instaed of pushing because services don't change often
    - We do want the ability to push on demand though just in case
    - Does Dave have a list of meta detail for service? yes, but because Vet Centers is adding columns it hasn't made it to prod yet. Looking to lock down by this CMS sprint 27 (3/12/21)
  - VC CAPs ought to be prioritized above all others
    - CAP data doesn't exist anywhere so would be good to get in Lighthouse in order to distribute elsewhere
    - Long-term plan is to pivot Facility health service locator to a Service locator
    - Data capture for all facilities won't complete until the end of Sept 2021 because of VAMC migrations, but CAPs should happen before the facility service data
    - Might make sense to do a push because the frequency is greater. should this include CAP statuses?
    - Operating status versus existence needs to be fleshed out
    - Need to determine the right format for what gets captured in Lighthouse
    - Let's start with a sample of existing CAP data and compare it to existing Lighthouse data to get a sense of how we might want to integrate fields
- VAST

Action items

- Lighthouse team to complete UX review for field name changes
- CMS team to complete 3 field name changes by sprint 28 (ends 3/26/21)
- Dave to send CAP workflow to CMS team
