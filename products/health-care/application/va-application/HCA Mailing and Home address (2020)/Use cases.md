# 10-10EZ Address - Use Cases (2020)
This has been implemented before 5/2022 (team transition)

_Track and maintain the various use cases that exist for a given product and is best maintained alongside the product outline._

_The purpose of this document is for designers, PMs, and engineers to align early on on potential use cases and edge cases so these things aren't coming up randomly and late in the process. We recommend the team schedule a 30 minute meeting to brainstorm all use cases/edge cases early on.  Examples of cases that could be captured here include: "Veteran logs in but is not LOA3ed.", "Veteran searches and gets no results." etc etc_

Link to product outline: [HCA Address Project](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/health-benefits/healthcare-application/10-10ez-address-project/project-outline.md)

Staging URL: https://staging.va.gov/health-care/apply/application/introduction

## Unauthenticated

### Use Case A - "Yes" - Home address same as Mailing
- **Description**: After inputting Mailing address, User indicates Home address is the same.  As User continues, form skips Home-address page.
- **TestRail Test Case**: [C3923](https://dsvavsp.testrail.io/index.php?/cases/view/3923)

### Use Case B - "No" - Home address is different
- **Description**: After inputting Mailing address, User indicates Home address is different.  As User continues, form advances to Home-address page with blank inputs.
- **TestRail Test Case**: [combined w/ above Test Case]

## Authenticated

### Use Case C - Mailing & Home addresses exist, but different in Profile
- **Description**: User has different Mailing & Home addresses already saved in Profile.  Mailing address is pre-filled and Is-Home-address-same question has "No" answer pre-selected.  As User continues, Home address is also pre-filled.
- **User**: 100
- **TestRail Test Case**: [C3926](https://dsvavsp.testrail.io/index.php?/cases/view/3926)

### Use Case D - Mailing & Home exist & same in Profile
- **Description**: User has same Mailing & Home addresses saved in Profile.  Mailing address is pre-filled and Is-Home-address-same question has "Yes" answer pre-selected.  As User continues, form skips Home-address form-page.
- **User**: (unknown - Jonathan may have in notes)
- **TestRail Test Case**: [C3927](https://dsvavsp.testrail.io/index.php?/cases/view/3927)  **NOTE**: Without an available Staging test-account, this Case will be run in **Safari** only, via [local-override](https://webkit.org/web-inspector/local-overrides/).

### Use Case E - Only Mailing in Profile
- **Description**: User has only Mailing address saved in Profile. Mailing address is pre-filled but Is-Home-address-same question has no pre-selected answer.  IF User selects "Yes" (Home same as Mailing), form skips Home-address page; otherwise, form advance to Home-address page with blank inputs.
- **User**: 99
- **TestRail Test Case**: [C3925](https://dsvavsp.testrail.io/index.php?/cases/view/3925)
        
### Use Case F - No addresses in Profile
- **Description**: User has no addresses saved in Profile.  Mailing address has blank inputs.  After filling Mailing address, IF User selects "Yes" (Home same as Mailing), form skips Home-address page; otherwise, form advance to Home-address page with blank inputs.
- **User**: 113
- **TestRail Test Case**: [C3924](https://dsvavsp.testrail.io/index.php?/cases/view/3924)

++++++++++++++++++++++++++++++++++++++++++++++++++++

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
- Unauthenticated
    - **Expected**: One address as with label “Mailing” sent as `veteranAddress`.
    - **Actual**: :white_check_mark: As expected.
- Authenticated 
  - with Mailing & Home in Profile
      - **User**: 102
      - **Expected**: One address labled "Mailing" populated by mailing address in profile
      - **Actual**:  :white_check_mark: As expected.
  - with Mailing and Home (same as mailing) in Profile
      - **User**: (unknown)
      - **Expected**: Would collect and populate Mailing address only. Would sends only the `veteranAddress` property.
      - **Actual**: :white_check_mark: As expected.
  - with Mailing Only in Profile
      - **User**: 272, 273
      - **Expected**: EZ would only ask for "Mailing" which would be pre-populated with the address in profile.
      - **Actual**: (untested because of below issue)
        - :warning: Both users 272 and 273 had only a mailing address in profile. No EZ was SiP or previously submitted. When I started the form, no information was pre-filled from profile (name, ssn, dob, etc.).
  - with No addresses in Profile
      - **User**: 280
      - **Expected**: EZ only asks for one address. No address prefil happens.
      - **Actual**: :warning: As expected, *but* other profile data was not filled (name, ssn, dob, etc.).
        - :beetle: Profile was empty (not mailing or home address popultes). I had no previous EZ application and I had no SiP. When I started the EZ, no profile information was populates (name, ssn, dob, etc.).

## Feature toggle set to: On (both address questions available)
- Unauthenticated
  - "Yes" mailing is the same
    - **Expected**: Two address as with label “Mailing” then with “Home” sent as `veteranAddress` (mailing) and `veteranHomeAddress` (home). `veteranHomeAddress` in the data is same as mailing.
    - **Actual**: :white_check_mark: As expected. Filled in both "mailing" and "home" (with different addresses) and went back to click, "yes, home is same as mailing" and it sent data as expected.
  - "No" mailing is not the same
    - **Expected**: Two address as with label “Mailing” then with “Home” sent as `veteranAddress` (mailing) and `veteranHomeAddress` (home).
    - **Actual**: 
- Authenticated
  - with Mailing & Home in Profile
    - **User**: 100
    - **Expected**: Address labled "Mailing" populated by mailing address in profile "same as mailing" question defaulted to "no" - Address labled as "Home" populated by home address in profile.
    - **Actual**: :white_check_mark: As expected.
  - with Mailing and Home (same as mailing) in Profile
    - **User**: (unknown - Jonathan may have in notes)
    - **Expected**: EZ askes for 2 addresses. Mailing is populated, "Yes, home is same as mailing" is pre-selected. `veteranAddress` and `veteranMailingAddress` is sent to the api, and they both have the same value (same address).
    - **Actual**: :white_check_mark: As expected.
  - with Mailing Only in Profile
    - **User**: 99
    - **Expected**: Will populate mailing address in EZ. Will not pre-select "yes/no address is the same".
    - **Actual**: (untested because of below issue)
      - :warning: For user 99, I set the mailing address in profile. When I started the EZ, the mailing address was not pre-populated, *but* none of this user's data was pre-populated when I started the form (name, dob, ssn, etc.).
        
  - with No addresses in Profile
    - **User**: 113
    - **Expected**: No prefill would happen, both addresses are collected in the EZ.
    - **Actual**: :warning: As expected but contains SiP bug (needed to refresh for second address).
      - :beetle: After starting the application, but before filling in any information, I went to profile to see my attributes, then went back to the form. The EZ only asked for one address (as it did in the previous day's test).
      - :question: When entering SSN for user 113, an input error ("Please enter a valid 9 digit SSN (dashes allowed)") prevented me from continuing through the form.
  
</details>

