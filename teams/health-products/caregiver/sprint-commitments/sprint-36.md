# Sprint 36

##### 12/2 - 12/15

## Frontend
- [ ] [Remove hasSecondaryTwo question from secondaryOne chapter](https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/issues/department-of-veterans-affairs/va.gov-team/16567) (5)
    - 12/4: PR is wrapped up, need to coordinate with Jonathan to make sure implementation is correct.
- [ ] [Documentation and screenshots of Downtime work](https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/issues/department-of-veterans-affairs/va.gov-team/16816) (3)
   - 12/4: In progress, troubleshooting Gatsby errors with VSP.
- [ ] [10-10EZ Accessibility](https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/issues/department-of-veterans-affairs/va.gov-team/13999) (5)
    - 12/4: In progress; errors are related to the review and submit page. 
- [ ] [10-10EZ Address Field](https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/issues/department-of-veterans-affairs/va.gov-team/15159) (8) 
- [ ] Stretch (tech-debt): [Refactor/flatten 10-10CG UI schema](https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/issues/department-of-veterans-affairs/va.gov-team/16874) (5)

**Additional Scope**
- [ ] [Update bad link in 10-10EZ](https://github.com/department-of-veterans-affairs/va.gov-team/issues/17819)
- [ ] [Investigate how bad link was introduced on 10-10EZ](https://github.com/department-of-veterans-affairs/va.gov-team/issues/17820)

## Backend
- [x] [Attempt resubmission of PDF on failure](https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/issues/department-of-veterans-affairs/va.gov-team/15147) (13)
    
    Updates
    - 12/4: Work is in progress, will need separate PRs to implement. Will need to persist claims.  User should see faster response times. 
    - ETA: Friday, 12/11. Will need to work with VSP to get multiple PRs through.
    - Draft Implementation: https://github.com/department-of-veterans-affairs/vets-api/compare/draft_attachment_job_implementation?expand=1
    
    (New) Implementation Plan

    - [x] Cancel [Create a single re-attempt for the attachment of a 10-10CG submission](https://github.com/department-of-veterans-affairs/va.gov-team/issues/15147)
    - [x] [EPIC] Persist Form 10-10CG Submissions [Issue #10280](https://github.com/department-of-veterans-affairs/va.gov-team/issues/10280)
    - [x] [EPIC] Add background attachment job w/ feature toggle  [Issue #16952](https://github.com/department-of-veterans-affairs/va.gov-team/issues/16952)

- [x] [Logging PDF Gen Errors](https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/issues/department-of-veterans-affairs/va.gov-team/15146) (5)
  - Scrapped since the "Attempt resubmission" work will capture errors.
- [x] [Run report to list applications showing number of secondary-only apps](https://github.com/department-of-veterans-affairs/va.gov-team/issues/16748) (2)
    - 12/4: Running again
- [ ] [Set up Sentry Alerts in Slack](https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/issues/department-of-veterans-affairs/va.gov-team/16875) (unknown)
  - Moved to next sprint since platform is still working on it.
- [ ] [Timestamp research on the 10-10EZ](https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/issues/department-of-veterans-affairs/va.gov-team/16876) (8)
- [x] Stretch: [Ensure un-nesting Veteran Facility name and type does not break API](https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/issues/department-of-veterans-affairs/va.gov-team/16477) (done: it will break API and CARMA data-contract)
- [x] [Testing Micronesia (and other territory) fix with CARMA](https://github.com/department-of-veterans-affairs/va.gov-team/issues/16226)


## Design
- [ ] [Address designs in UXPin](https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/issues/department-of-veterans-affairs/va.gov-team/15159) (2)
    - 12/4: In progress
- [ ] [Finalize research plan for 10-10CG/secondary caregiver only](https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/issues/department-of-veterans-affairs/va.gov-team/16873) (3)
     - 12/4: Adding in questions around the progress bar
- [ ] [Set up meeting with Shawna, Ming, Alayna to discuss POA plan](https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/issues/department-of-veterans-affairs/va.gov-team/16452) (?)
     - 12/3: Met with Shawna, going to ask DEPO for any buy-in/legacy insight
- [ ] Next steps for the health care plan (what data do we need, what research do we want to do) (?)


## Product
- Cookie research (Dev ops?)
- Meeting on 12/4 to talk to Josh Faulker (technical architecht on the submission of health care forms) (to understand the issue surrounding ICN)
    - HCAs from an authenticated account are coming in with an ICN, but MPI is saying those ICNs don't exist
    - Could be when Veterans are creating a new account

