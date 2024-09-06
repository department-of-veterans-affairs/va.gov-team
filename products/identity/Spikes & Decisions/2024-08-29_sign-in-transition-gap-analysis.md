# Secure sign-in transition - Authentication Metrics Gap Analysis

## Purpose

To identify potential gaps for the data requirements outlined in [this document (\*requires SharePoint access)](https://dvagov.sharepoint.com/:w:/r/sites/IdentityTeam/_layouts/15/Doc2.aspx?action=edit&sourcedoc=%7Bf2e719c9-f13e-48f1-aa9a-ae86ae83843a%7D&wdOrigin=TEAMS-MAGLEV.teamsSdk_ns.rwc&wdExp=TEAMS-TREATMENT&wdhostclicktime=1723472761252&web=1) and what is currently available within the Domo dashboard.

## Quick summary

- #3. Number of verified users (with ICN) who have _Both a MHV and DS Logon account, and no modern credential_
  - There is no specific Domo dashboard for a verified user who has **both** an MHV account AND a DS Logon account, but no modern credential (like Login.gov or ID.me)
- #6. Customer satisfaction scores for authentication/login
  - Satisfaction scores are currently measured through the sign-in page (pre-authentication), the authentication error page (post-authentication: failures), and the identity verification page (post-authentication: success, start identity verification). We do not include successful authentications (post-authentication: success) nor do we include the sign-in modal (pre-authentication) in our scoring due to how Domo segments the scores.
    - Recommendation: We should determine if these gaps should be aggregated into something that makes more sense.
- #8. Timing of the full authentication flow roundtrip
  - While there is data of authentication timing, the data cannot separate the user input time from the system time.
- #9. Remote identity proofing success rate percentage for each credential
  - The Domo dashboard shows Login.gov's identity verification dropoff rates rather than success percentages. Additionally, ID.me does not have success rates of identity verification.
    - Recommendation: We should get this data directly from the CSPs (Login.gov and ID.me) with a backup we can use success rate data from Datadog.
- #10. Number of fraud incidents per week/month for each credential
  - The BPDR team does not always have CSP information as the data is tracked by ICN.

## Gap analysis

<details>
<summary>

### 1\. Total authentications across VA web/mobile properties

</summary>

#### Desired State

- Total authentications metrics for each credential

#### Current state

- We currently have total authentication metrics for each credential in Domo dashboard

#### Gaps

- No gaps

#### Recommendations

- N/A

#### Action plan

- N/A

</details>

<details>
<summary>

### 2\. Unique users who have signed into VA web/mobile properties

</summary>

#### Desired State

- Unique authentications metrics for each credential

#### Current state

- We currently have unique user authentication metrics for each credential in Domo dashboard

#### Gaps

- No gaps found

#### Recommendations

- N/A

#### Action plan

- N/A

</details>

<details>
<summary>

### 3\. Number of verified users (with ICN) who have the following:

</summary>

#### Desired State

- **Only** a MHV account, no modern credential
- **Only** a DS Logon account, no modern credential
- **Either** a MHV or DS Logon, no modern credential
- **Both** a MHV and DS Logon, no modern credential
- **A verified** Login.gov account
- **A verified** ID.me account
- **Either** a verified Login.gov and ID.me account
- **Both** a verified Login.gov and ID.me account

#### Current state

- **Only** a MHV account, no modern credential
  - Yes, Domo dashboard
- **Only** a DS Logon account, no modern credential
  - Yes, Domo dashboard
- **Either** a MHV or DS Logon, no modern credential
  - Yes
- **Both** a MHV and DS Logon, no modern credential
  - No/maybe, in the Domo dashboard the data is not broken down far enough
- **A verified** Login.gov account
  - Yes
- **A verified** ID.me account
  - Yes
- **Either** a verified Login.gov and ID.me account
  - Yes
- **Both** a verified Login.gov and ID.me account
  - Yes

#### Gaps

- There exists currently no specific metrics for a verified user who has **both** a MHV and DS Logon account, but no modern credential.
  - _We might have the actual data however it is not being displayed in the Domo dashboard for secure sign-in transition_

#### Recommendations

- Verify that we have the actual data for this in Domo
- Create a specific view/data visualization for a verified user who has both an MHV and DS Logon account, but no modern credential.

#### Action plan

- Verify actual data for this exists in Domo
- Work with Steve Dickson to have a specific view/data visualization for this work

</details>

<details>
<summary>

### 4\. Email addresses for users who have a MHV credential and neither Login.gov or ID.me

</summary>

#### Desired State

- We have email addresses for users who have an MHV credential and no modern credential.

#### Current state

- This is being supplied by the MHV team and stored within the sign-in transition SharePoint folder

#### Gaps

- No gaps

#### Recommendations

- N/A

#### Action plan

- N/A

</details>

<details>
<summary>

### 5\. Email addresses for users who have a DS Logon credential and neither Login.gov or ID.me

</summary>

#### Desired State

- We have email addresses for users who have a DS Logon credential and no modern credential.

#### Current state

- This will be supplied by VA Profile when we are ready for this audience. The list of ICNs for these users will come from IAM and then be shared with VA Profile to get a complete list of emails.

#### Gaps

- No gaps

#### Recommendations

- N/A

#### Action plan

- N/A

</details>

<details>
<summary>

### 6\. Customer satisfaction scores for authentication/login

</summary>

#### Desired State

- User satisfaction scores (via surveys) for authentication and logins

#### Current state

- There is not a singular satisfaction for authentication satisfaction scores. There are currently two main areas where a user would take a survey relating to authentication, and one main area exists for starting the identity verification process.
  - **Authentication-related**
    - **Auth / Login** \- Authentication error page
    - **Sign in** \- Unified sign-in page
  - **Identity verification**
    - **Verify** \- Verify page

#### Gaps

- Possible gaps could include also include users who have opened the sign-in modal or have the postLogin query parameter
  - Sign-in modal is opened (?next=loginModal)
  - After fully-authenticated (?postLogin=true)
  - Miscellaneous authentication-related pages
    - (Resources / Signing in to VA.gov) static page
    - (Resources / Verifying your identity on VA.gov) static page

#### Recommendations

- Aggregate and include the opened sign-in modal and fully-authenticated query parameters for a more holistic view of authentication.

#### Action plan

- Speak with leadership to determine if these specific gaps should be included to get a more accurate view of authentication across VA web/mobile properties

</details>

<details>
<summary>

### 7\. Uptime percentage for each credential

</summary>

#### Desired State

- Uptime (in percentage) for each credential

#### Current state

- We have the uptime percentages for each credential store in DataDog

#### Gaps

- No gaps

#### Recommendations

- N/A

#### Action plan

- N/A

</details>

<details>
<summary>

### 8\. Timing of the full authentication flow roundtrip

</summary>

#### Desired State

- Timing of the full authentication user flow roundtrip without user interactions

#### Current state

- There are two metrics within Datadog that measure authentication timing
  - Timing of synthetic tests
  - Authentication timing in Identity dashboards

#### Gaps

- Yes
  - The timing of synthetic tests in Datadog only captures the staging environment and still includes user interactions (albeit in an automated fashion)
  - The authentication timing in Identity Datadog dashboards include system time \+ user input time and can only be compared week-to-week. This option should not be used as an average over a long period of time.

#### Recommendations

- Use the Identity Datadog dashboard for authentication timings with the caveat that it not be used to average over a long period of time.

#### Action plan

- N/A

</details>

<details>
<summary>

### 9\. Remote identity proofing success rate percentage for each credential

</summary>

#### Desired State

- We want success rate percentages for each identity verification credential (Login.gov and ID.me)

#### Current state

- Login.gov
  - In Domo there is a Login.gov Proofing Rate which displays the drop-off rate of users
- ID.me
  - Does not exist

#### Gaps

- Yes
  - Login.gov: This just shows drop-off rates of Login.gov’s identity verification process rather than a success rate
  - ID.me: No identity verification rates exist

#### Recommendations

- We are recommending we get this data directly from the CSPs and adding it manually to the Domo dashboard for both Login.gov and ID.me.

#### Action plan

- Creating a Domo view of the success rate for each credential’s identity verification process

</details>

<details>
<summary>

### 10\. Number of fraud incidents per week/month per credential

</summary>

#### Desired State

- A Domo dashboard view of the number of fraud incidents per week/month for each credential

#### Current state

- We can get this information directly from the BPDR team.

#### Gaps

- Yes
  - The BPDR team does not always have CSP information as they are tracked by ICN.

#### Recommendations

- Determine which fraud incidents we should include in the metrics \- either VA.gov fraud incidents or VA-wide fraud incidents \- for each credential listed

#### Action plan

- Setup a meeting with leadership team to determine which fraud incidents to include

</details>

<details>
<summary>

### 11\. Transform logic is correct and accurate

</summary>

#### Desired State

- Verify the transform logic used for the Domo dashboard for is correct and maintains accuracy and data integrity

#### Current state

- Transform logic was analyzed and appears to be correct. It is also [documented here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/login.gov-adoption/discovery/deferred-identity-proofing/data-dictionary.md)) for further review.

#### Gaps

- No

#### Recommendations

- N/A

#### Action plan

- N/A

</details>
