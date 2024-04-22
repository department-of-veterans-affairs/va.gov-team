## Outcome Goals
### Mission: 
More veterans can access benefits and services that rely on personal information

### Goals:
1. **Improve Login:** Veterans are logging in easily and successfully
2. **Improve identity-related issues:** Once logged in, Veterans are resolving issues with their digital identity
3. **Improve brand consolidation:** Veterans experience a consistent logged in experience across properties
4. **Improve identity product testing:** Testing for product teams is easier, more accessible, more closely aligned with production experience
5. **Increase identity account usage:** More veterans have and use secure, identity verified accounts that give access to additional benefits and service.

## Goal-related problems:
Problems are graphed based on Value - Cost - Controllability here: https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/login/roadmapping/identity-prioritizedproblems.md

### 1. Improve Login:
- Login has errors that prevent successful completion. 5-4-2
- We don’t have good visibility into errors user experience after they’ve logged in because of poor help desk data. 4 - 2.5 - 3
- When users have an issue logging in, the error message is vague, which makes it difficult for the Veteran to resolve 4 - 3 - 4
- When users have trouble logging in, users do not have a way to resolve log-in issues quickly. 4 - 4 - 2
- FAQ does not provide much help for login issues 3 - 1.75 - 5
- In the cases of DS Logon and My HealtheVet users often cannot remember their password and often have to reset it before logging in. 3 - 4 - 1
- With the new full page login experience, users cannot exit the login flow (without hitting the back button). 2-2-3.


### 2. Improve identity-related issues:
- When Veterans are logged in, MVI may be down which prevents access to services 4 - 3.75 - 2
- Not immediately clear to users that they have a limited experience when not in MVI. 3.75 - 2 - 4.75
- We don't have any metrics around how many Veterans aren't found in MVI when they should be (complication: many accounts will be “not found in MVI” appropriately - these people aren’t Veterans) 3.75 - 3 - 2
- We aren’t sure how to resolve most identity verification errors, thus have generic messaging for users that is not as helpful as it needs to be. 3.5 - 3 - 1.25

##### _Might be covered in issues above, worth consideration_
- We don’t have good visibility into errors user experience after they’ve logged in

### 3. Improve brand consolidation:
- VA.gov and MHV UX is completely different, which harms our ability to drive people consistently to VA.gov. 3.6 - 2.5 - 1.5
- Users have multiple personalized experience across properties that are not in sync (duplicate profiles and accounts on VA.gov and MHV with different data) - 3.5 - 3.8 - 2
- Users have multiple accounts that are not always linked together for a consistent experience (e.g., DS Logon + MHV) - 2.5 - 3 - 3.2

##### _Are these problems?_
- Registering and creating accounts is not consistent between VA.gov and MHV
- With all of the sign in options, the initial sign in modal has a lot going on and may be overwhelming for new users, causing abandonment
- Its not clear the breadth of services that the VA digital identity needs to provide access to
- This needs definition of how this team could, and should impact
- Veterans still use eBenefits in high numbers which is not integrated into the VA.gov identity platform - 4.2 - 2.2 - 3.3* (cost contingent upon scope and involvement)

##### _Might be a future problem, to be considered_
- If the VA.gov header is going to be used across all of the other VA subdomains, and users are going to be logging in, we need to possibly think of new / novel approaches to surfacing warning banners vs errors.

### 4. Improve identity product testing:
- We lack a standardized testing protocol for new feature releases with identity 4.3 - 4.6 - 3.3
- It takes a lot of time to run through full regression of all sign-in types and each of the 4-5 SAML flows for each sign-in type: sign-in, verify, mfa, sign-out 4.2 - 4.2 - 3.6
- DS Logon and MHV dev/staging accounts require VA network access, which a lot of team members do not have, and is difficult to acquire - 3.8 - 1.8 - 3
- We lack production accounts for DS Logon, ID.me LOA3 to test with real user data in live environments, which lowers testing confidence pre-release - 3.8 - 2 - 2

##### _Are these problems worth addressing?_
- Lack of ability to reset accounts (MHV - creation and upgrade) leads to reluctance to do testing around upgrades.
the process of resetting SAML flows (related to ID.me wallet, MFA, ID.me verification) could be better documented and is not well known.
- When I find a bug, it's difficult to confirm that someone hasn't already logged it in ZenHub.

##### _These are problems, but should be addressed cross-team_
- Service integration for staging accounts (with products such as dashboard) require mock data which is not consistently up to date and does not pull from external data services, so integration testing is lost
- It’s not clear when external services’ lower and upper environments are down, which makes failures in testing confusing



### 5. Increase identity account usage (WIP):
- Less than 100% of Veterans have accounts to access VA.gov
- Of the Veterans who do have VA.gov accounts, many have not verified their identities to get access to the full suite of benefits and services
- Of the Veterans who do have VA.gov accounts, many have not fully secured their accounts through MFA
- Of the Veterans who do have accounts, many do not use their accounts consistently
- I think a small percentage of users attempt login at all (according to my interpretation of google analytics it's near 4%)
- There doesn't appear to be an easy way to try again if identity verification fails. It also isn't clear how many times you can try again without getting locked out.
- Many Veterans are not aware of the new and improved VA.gov.
- Multifactor auth is likely quite difficult for Veterans without cell phones, especially homeless veterans.
People hate mFA - people have problems with using their phone for MFA, and have to do it more often than usual.










## Themes from Press Release
- No errors
- Leverage existing credentials
- Relieving burden on contact center
- Verified identity easy and multiple options
- Quick
- Easy access
- One-time identity verification -> access everywhere
- Configurable permissions
- Increased user satisfaction
- Single auth
- Trust
- Ease of use for developers
- Editable data

## Pain Points
- Pop ups fail
- Users can’t fix problems
- Hard to update records
- Testing incomplete, slow
- Users can’t log in
- Data not found or incorrect
- Lack of single source of truth
- Inconsistent experience for external tools (e.g., MHV)
- Lack of consideration for caregiver & dependent experience
- MVI doesn’t have UNIQUE identifier
- Vague errors lead to gaps between contact center and team debug effort
- Multiple Identity proofs required
- ID proofing 
- Users lack visibility into data
- Lot of steps for signing in

## What does Identity mean?
- Digital version accurately represents physical person in relation to the VA
- Users can access tools appropriately, based on their digital identity
- When users need to do something, to get what they need, it’s clear where to go and how to do it.
