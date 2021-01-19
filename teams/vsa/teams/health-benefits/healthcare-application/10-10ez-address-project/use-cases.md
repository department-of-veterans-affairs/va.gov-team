# 10-10EZ Address - Use Cases

_Track and maintain the various use cases that exist for a given product and is best maintained alongside the product outline._

_The purpose of this document is for designers, PMs, and engineers to align early on on potential use cases and edge cases so these things aren't coming up randomly and late in the process. We recommend the team schedule a 30 minute meeting to brainstorm all use cases/edge cases early on.  Examples of cases that could be captured here include: "Veteran logs in but is not LOA3ed.", "Veteran searches and gets no results." etc etc_

Link to product outline: [HCA Address Project](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/health-benefits/healthcare-application/10-10ez-address-project/project-outline.md)

# Team Review Instance Testing

## 01-19-2020 (RI)
see: https://dsva.slack.com/archives/CMJ2V70UV/p1610657723008300

## 01-19-2020 (RI:d33cfa4f37149dfcdc9d710a11eb2770)
- Feature toggle Off (only one address question available)
  - Unauthenticated
    - **Expected**: One address as with label “Mailing” sent as `veteranAddress`.
    - **Actual**: :white_check_mark: As expected. 
  - Authenticated
    - With profile: containing Mailing & Home
      - **Expected**: One address labled "Mailing" populated by mailing address in profile
      - **Actual**:  
    - With profile: containing Mailing and Home (home "same as mailing")
      - **Expected**: 
      - **Actual**: 
    - With profile: containing Mailing Only
      - **Expected**: 
      - **Actual**: 
    - With profile: containing no addresses in Profile
      - **Expected**: 
      - **Actual**: 

- Feature toggle On (only one address question available)
  - Unauthenticated
    - **Expected**: Two address as with label “Mailing” then with “Home” sent as `veteranAddress` (mailing) and `veteranHomeAddress` (home).
    - **Actual**: :white_check_mark: As expected.
  - Authenticated
    - With profile: containing Mailing & Home (user 112) 
      - **Expected**: Address labled "Mailing" populated by mailing address in profile "same as mailing" question defaulted to "no" - Address labled as "Home" populated by home address in profile.
      - **Actual**: :warning: Functions as expected with bugs in below scenarios.
        - :beetle: When an application is saved in progress, and you "starting a new application", the EZ only asks for one address ("Mailing") (when you refresh the page, the EZ asks for two addresses, but they are not populated by profile). Tested with user 108 and 109. Was able to consistantly reproduce. The feature toggle was on throughout these tests. This save-in-progress form was created with the latest version of code and with feature toggle on.
    - With profile: containing Mailing and Home (home "same as mailing")
      - **Expected**: 
      - **Actual**: 
    - With profile: containing Mailing Only
      - **Expected**: 
      - **Actual**: 
    - With profile: containing no addresses in Profile
      - **Expected**: 
      - **Actual**: 

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
