# 10-10EZ Address - Use Cases

_Track and maintain the various use cases that exist for a given product and is best maintained alongside the product outline._

_The purpose of this document is for designers, PMs, and engineers to align early on on potential use cases and edge cases so these things aren't coming up randomly and late in the process. We recommend the team schedule a 30 minute meeting to brainstorm all use cases/edge cases early on.  Examples of cases that could be captured here include: "Veteran logs in but is not LOA3ed.", "Veteran searches and gets no results." etc etc_

Link to product outline: [HCA Address Project](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/health-benefits/healthcare-application/10-10ez-address-project/project-outline.md)

# Team Review Instance Testing

## Feature toggle set to: On (both address questions available)
1) Unauthenticated
2) Authenticated with Mailing & Home in Profile
    - Expected: Will populate both addresses in EZ
    - Actual: 
3) Authenticated with Mailing and Home (same as mailing) in Profile
    - Expected: Will populate both addresses in EZ
    - Actual: 
4) Autheticated with Mailing Only in Profile
    - Expected: Will populate Mailing
    - Actual: 
5) Authenticated with No addresses in Profile
    - Expected: Will not populate an address
    - Actual: 
6) Authenticated with a Saved-in-Progress form (Address had been filled in)
7) Authenticated with a Saved-in-Progress form (Address had not been filled in)
8) Authenticated with a Saved-in-Progress form; user chooses to start over again


  
## Feature toggle set to: Off (only one address question available)
1) Unauthenticated
2) Authenticated with Mailing & Home in Profile
    - Expected: Will populate both addresses in EZ
    - Actual: 
3) Authenticated with Mailing and Home (same as mailing) in Profile
    - Expected: Will populate both addresses in EZ
    - Actual: 
4) Autheticated with Mailing Only in Profile
    - Expected: Will populate Mailing
    - Actual: 
5) Authenticated with No addresses in Profile
    - Expected: Will not populate an address
    - Actual: 


# QA Staging Testing
## Feature toggle set to: On (both address questions available)
1) Unauthenticated
2) Authenticated with Mailing & Home in Profile
    - Expected: Will populate both addresses in EZ
    - Actual: 
3) Authenticated with Mailing and Home (same as mailing) in Profile
    - Expected: Will populate both addresses in EZ
    - Actual: 
4) Autheticated with Mailing Only in Profile
    - Expected: Will populate Mailing
    - Actual: 
5) Authenticated with No addresses in Profile
    - Expected: Will not populate an address
    - Actual: 
    
  
## Feature toggle set to: Off (only one address question available)
1) Unauthenticated
2) Authenticated with Mailing & Home in Profile
    - Expected: Will populate both addresses in EZ
    - Actual: 
3) Authenticated with Mailing and Home (same as mailing) in Profile
    - Expected: Will populate both addresses in EZ
    - Actual: 
4) Autheticated with Mailing Only in Profile
    - Expected: Will populate Mailing
    - Actual: 
5) Authenticated with No addresses in Profile
    - Expected: Will not populate an address
    - Actual: 
