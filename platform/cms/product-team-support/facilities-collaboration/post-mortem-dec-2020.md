## CMS/ Facilities Post-Mortem
December 11, 2020

**In attendance** 
- Clarence Maeng, CMS
- Kevin Walsh, CMS
- Steve Wirt, CMS
- Michael Pelz-Sherman, Facilities
- Michelle Middaugh, Facilities
- Dave Conlon, DEPO

**Purpose of this post-mortem**
- To review the recent date/timezone field implementation to identify opportunities to improve the collaboration and process

## What happened? 

### Rushing to meet VEO request -> Did this impact QA testing?
**Problem** There is not a defined method for testing or determining the responsible team
  - **Action item** Define method(s)testing/responsible team
      - CMS team can access review instances to look at pages before merging
      - Look at screens together to develop QA steps/cases/AC when beginning an epic, involve other teams (PW) with vested interest
      - Owner: Shared (Facilities/CMS)

  - **Action item** Determine plan for triaging identified bugs
      - Begin with the triage process we’ve defined with the Intake label and relevant team
      - Owner: Shared (Facilities/CMS)

**Problem** There is no good end-to-end sandbox environment for dev/testing (DevShop was intended to provide that but is painful) 
  - **Action item** Find a place to do collaborative testing/triage. Evaluate new solution (coming early next year)
      - Owner: CMS

**Problem** There is very little automated testing in place. 
  - **Action item** The Facilities team identified this as a priority in 4Q which will continue into 1Q21. Loop CMS into automated testing work.
    - Owner: Shared (Facilities/CMS)

### Impact of early decisions (solutioning for short-term)
- Decision had been made to address timezone later
- This tension will always exist

### Perfect storm of VEO request + front end build failure + trouble with review environments made it hard to test - caused extra noise
**Problem** “If Prod” statement complicated the testing
  - **Action item** Add documentation for scenarios which are best suited for "If Prod" logic
      - Owner: CMS

**Problem** Template technical debt which needed to be removed (just asking those questions added more noise)

**Problem** Feature flag wasn’t used (need to know where field is used)

### Product familiarity
**Problem** Facilities team doesn’t have full grasp on the code. Even shared templates have different content types and can be used differently. These differences impact development and testing efforts.  
  - Examples
    - Registration links only exist in Outreach Hub 
    - Toggle for viewing past events-> VAMC has past events view; Outreach Hub doesn't
 - **Action item** Facilities team needs code ownership so we can audit and clean it up - complicated by “shared” templates
      - Owner: Facilities
      
**Problem** No one from PW was involved although it was a shared template
- **Action item** The plan to review impacted pages at the beginning of the epic should close this loop. 
    - Owner: Shared (Facilities/CMS)

**Problem** No easy way to identify all the places a field is used (and what might be impacted) across shared templates
  - **Action item** Find out what fields are used/where (and the impacted teams) -> Annotate files with assumed teams
     
   - **Action item** Need more defensive front end code  (do not rely on populated field)
       - Owner: Facilities
   - **Action item** Need more defensive content API (when editor enters new model, auto-populates old model -> will not be able to depend on “is field populated?” logic)
       - Owner: CMS

### Off-cycle deployment right before Thanksgiving
**Problem** Most of the Tools team was on PTO. Michelle was out -> Dave was involved in other things -> Michael was flying solo. Debug code was left in during that scramble which introduced a defect. 
  - **Action item** Determination of urgency - “dual missile keys” How do we loop Jeff Barnes in (for Core Application team)?
      - Owner: DEPO

### Documentation
**Problem** Better documentation for content modeling process is needed. Documentation is needed to address the process for various scenarios (such as adding new field vs replacing an existing field with new one)
  - **Action item** Document from each end (leave out Transformer/GraphQL for now)
  - Owner: Shared (Facilities/CMS)


### Areas of future risk
Transformer cutover

### Other references
[Engineering post-mortem](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Postmortems/11_25_2020_event_timestamp_bug.md)

