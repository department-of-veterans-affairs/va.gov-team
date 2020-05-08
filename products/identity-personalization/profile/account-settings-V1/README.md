# Account Product Outline

## Points of Contact

- GitHub Label: account
- Slack channel: #dragons-team

|Name|Role|Email|
|----|----|-----|
|Matt Self | DSVA Lead| matthew.self2@va.gov |
|Samara Strauss | DSVA Designer; Dragons team lead| samara.strauss@va.gov |
|TJ Rice | Ad Hoc Product Manager| tj@adhocteam.us |

There are currently no VA stakeholders for Account Settings. For login-related stakeholders, please see [login documentation](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Login/User%20Login/LoginProductOutline.md#user-problem-statement).

## Product Key Words
- Account 
- User Account

## How to Access

**Staging**

- https://staging.va.gov/account/
- LOA3: Sign in with [any staging user](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Login/MVI%20Integration/reference_documents/mvi_stagingUsers_fullList.csv).
- LOA1: Create an account on staging and navigate to the Account Settings.

**Production**

- https://www.va.gov/account/
- LOA3: Only veterans that have verified their identity can see what this looks like for a LOA3 user.
- LOA1: Create an account and navigate to the Account Settings. 

## Overview
- The Account is the single source of truth for customer-facing user-settings information.

## User Problem Statement
_"As a veteran, I want to see the current status of my account with the VA, and make any changes necessary to access services on the site"_

- There is no one central location for veterans to see and change the status of account relevant information that impacts access to tools on the site and security of their accounts.
   - these items include
      1. Identity proofing
      2. Two factor authentication (2FA)
      3. Terms and Conditions of the website (t&c)

### User Goal
- Allows the Veteran to manage user-settings related to identity, security, and interaction with the VA.

## The Plan
- Implement a straightforward, easy to use, best in class account page
- Consolidate access for the tools above into one, easy to use UI

## Solution approach
1. V1 - The first version of the account will give the veteran access to identity proofing, 2FA, and t&c.


## Team

- VA Digital Strategist(s) *: Steve Kovacs steven.kovacs@va.gov
- Product Manager *: 
    - Ben Barone ben.barone@adhocteam.us 
    - TJ Rice tj@adhocteam.us (Active)
- Design Lead: Mel Woodard Mel Woodard <mel@adhocteam.us>
- Eng Lead: Ben Shyong ben.shyong@adhocteam.us 
- Engineers:
   - Erik Hansen (Active)
   - Tze-chiu Lei (Active)
   - Ben Shyong
   - Nick Sullivan
   - Harry Levine
   - Ryan Baker
   - Emerson This
- Designers
   - Mel Woodard
   - Samara Strauss (Active)
   - Lauren Alexanderson
   
## Dependent Systems   

Links CTAs and display statuses for:
- identity verification
- multifactor authentication 
- terms and conditions
  
## Screenshots
### Before
![legacy profile](https://user-images.githubusercontent.com/21130918/47655213-e597aa00-db62-11e8-870c-4ebbf0ec2e4a.png)


### After V2
**Incomplete state**
![account incomplete state](https://user-images.githubusercontent.com/21130918/47657075-c69b1700-db66-11e8-9981-6a9d56341a51.png)


**Complete state**
![account complete state](https://user-images.githubusercontent.com/21130918/47657102-cef35200-db66-11e8-83cf-903d5c19586b.png)

