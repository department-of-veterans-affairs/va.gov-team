## October 11, 2022 - Meeting with Lighthouse API team

### Lighthouse Team
- James Costa (PO)
- Joshua Jennings (PM)
- Joseph Justice (APM)


### Notes

Heather provided highlevel overview of need on 10-10CG

Joshua provided background on Lighthouse API
- What the LH API has today (Version 0 (V0})
     - CG Support data
          - List of facility that have this support
     - Full list of VAMC sites
     - Other facility types (cemetary, etc)
     - Can enter Lat/Long coord - and response is that closest facility
     - CG Support list is static, provided by CG team
          - No changes in 2 years, does not change much

- New version (V1)
     - New broader set of data with services offered at facilities
          - Host a file internally and updated manually
          - In the Future, this will be owned by facility editor
     - At minimum, we should have the data you are looking for
          - Can provide details on how to call API

10-10 question
- Short Term - Migrate from static to LH seems to be working fine
     - MVP in place pulling facilities with CG support
- Stakeholders want applicants to choose any clinic/location for care & map up to CG facility
     - (Josh) - Sounds like concept of parent facility, LH has access to this data internally. 
          - Slotted to go with V1 rollout (Q4 2022) and will be available to us.
          - This would be a constantly updated database.
     - LH mapped out the schema (not a total swagger doc) but can provide (link below)
          - https://developer.va.gov/explore/facilities/docs/facilities?version=current
     - THIS IS GREAT NEWS
     - (Josh) - we provided what facility rolls up to parent facility to CARMA, This could get stale (RISK)
  
- Search types and timeouts
   - THIS IS GREAT NEWSLat/Long or geo location must be provided for “nearby” = 90 minutes drive time limited = Closest 5
     - Anything more than this will cause issues/timeouts and latency
     - Drivetime bands account for actual driving time
     - Straightline approach is not as clean and accurate
     - LH can provide full list if desired
     - Carma was looking for closest 5 CG facilities, regardless of where they are.  
          - This was not applicable or feasible
