# 10-10EZ Address - Use Cases

_Track and maintain the various use cases that exist for a given product and is best maintained alongside the product outline._

_The purpose of this document is for designers, PMs, and engineers to align early on on potential use cases and edge cases so these things aren't coming up randomly and late in the process. We recommend the team schedule a 30 minute meeting to brainstorm all use cases/edge cases early on.  Examples of cases that could be captured here include: "Veteran logs in but is not LOA3ed.", "Veteran searches and gets no results." etc etc_

Link to product outline: [HCA Address Project](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/health-benefits/healthcare-application/10-10ez-address-project/project-outline.md)

# Team Testing

<details>
<summary>01-15-2020 (RI)</summary>
    see: https://dsva.slack.com/archives/CMJ2V70UV/p1610657723008300
</details>

<details>
<summary>01-19-2020 (RI:d33cfa4f37149dfcdc9d710a11eb2770)</summary>
    
## Feature toggle set to: Off (only one address question available)
1) Unauthenticated
    - **Expected**: One address as with label “Mailing” sent as `veteranAddress`.
    - **Actual**: :white_check_mark: As expected. 
2) Authenticated with Mailing & Home in Profile
      - **Expected**: One address labled "Mailing" populated by mailing address in profile
      - **Actual**:  
3) Authenticated with Mailing and Home (same as mailing) in Profile
      - **Expected**: 
      - **Actual**: 
4) Autheticated with Mailing Only in Profile
      - **Expected**: 
      - **Actual**: 
5) Authenticated with No addresses in Profile
      - **Expected**: 
      - **Actual**: 

## Feature toggle set to: On (both address questions available)
1) Unauthenticated
    - **Expected**: Two address as with label “Mailing” then with “Home” sent as `veteranAddress` (mailing) and `veteranHomeAddress` (home).
    - **Actual**: :white_check_mark: As expected.
2) Authenticated with Mailing & Home in Profile (user 112) 
      - **Expected**: Address labled "Mailing" populated by mailing address in profile "same as mailing" question defaulted to "no" - Address labled as "Home" populated by home address in profile.
      - **Actual**: :warning: Functions as expected with bugs in below scenarios.
      - :beetle: When an application is saved in progress, and you "starting a new application", the EZ only asks for one address ("Mailing") (when you refresh the page, the EZ asks for two addresses, but they are not populated by profile). Tested with user 108 and 109. Was able to consistantly reproduce. The feature toggle was on throughout these tests. This save-in-progress form was created with the latest version of code and with feature toggle on.
3) Authenticated with Mailing and Home (same as mailing) in Profile
      - **Expected**: 
      - **Actual**: 
4) Autheticated with Mailing Only in Profile
      - **Expected**: 
      - **Actual**: 
5) Authenticated with No addresses in Profile
      - **Expected**: 
      - **Actual**: 
</details>

<details>
<summary>01-20-2020 (Staging:dc5018065eccf073d172097a19922755126c98a3)</summary>
    
## Feature toggle set to: Off (only one address question available)
1) Unauthenticated
    - **Expected**: One address as with label “Mailing” sent as `veteranAddress`.
    - **Actual**: 
2) Authenticated with Mailing & Home in Profile
      - **Expected**: One address labled "Mailing" populated by mailing address in profile
      - **Actual**:  
3) Authenticated with Mailing and Home (same as mailing) in Profile
      - **Expected**: 
      - **Actual**: 
4) Autheticated with Mailing Only in Profile
      - **Expected**: 
      - **Actual**: 
5) Authenticated with No addresses in Profile
      - **Expected**: 
      - **Actual**: 

## Feature toggle set to: On (both address questions available)
1) Unauthenticated
    - **Expected**: Two address as with label “Mailing” then with “Home” sent as `veteranAddress` (mailing) and `veteranHomeAddress` (home).
    - **Actual**: 
2) Authenticated with Mailing & Home in Profile (user 112) 
      - **Expected**: Address labled "Mailing" populated by mailing address in profile "same as mailing" question defaulted to "no" - Address labled as "Home" populated by home address in profile.
      - **Actual**: 
3) Authenticated with Mailing and Home (same as mailing) in Profile
      - **Expected**: 
      - **Actual**: 
4) Autheticated with Mailing Only in Profile
      - **Expected**: 
      - **Actual**: 
5) Authenticated with No addresses in Profile (user: 113)
      - **Expected**: No prefill would happen, both addresses are collected in the EZ.
      - **Actual**: As expected with SiP bug (needed to refresh for second address) and SSN validation error.
        - :beetle: After starting the application, but before filling in any information, I went to profile to see my attributes, then went back to the form. The EZ only asked for one address (as it did in the previous day's test).
        - :grey_question: When entering SSN for user 113, an input error ("Please enter a valid 9 digit SSN (dashes allowed)") prevented me from continuing through the form.
</details>
    
    
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
