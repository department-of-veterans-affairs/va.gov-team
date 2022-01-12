## Background
The Griffins team held an identity roadmapping workshop to determine mission, outcome goals, and prioritze problems for ongoing product development. The full output of that workshop is [captured here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/login/roadmapping/identity-roadmappingworkshop-121918.md). 

The purpose of this document is to prioritize identified problems based on  perceived level of value, cost, and controllability. Problems are grouped by their related outcome goal and viewed in total.


- [Improve Login](#improve-login)
- [Improve Identity-Related Issues](#improve-identity-related-issues)
- [Improve Brand Conslidation](#improve-brand-conslidation)
- [Improve Identity Product Testing](#improve-identity-product-testing)
- [Increase Identity Account Usage](#increase-identity-account-usage)
- [All Priorities](#all-priorities)


## Priorities by Outcome Goal
### Improve Login
![Improve Login.png](https://images.zenhubusercontent.com/59ee09c5a468affe6df7cd9e/a5edc4ee-9153-4bb3-a49b-7a522e035186)

#### Organized by Value, then Cost, then Controllability
- Sign-in fails due to login errors. 5-4-2
- We don’t have good visibility into errors user experience after they’ve logged in because of poor help desk data. 4 - 2.5 - 3
- When users have an issue logging in, the error message is vague, which makes it difficult for the Veteran to resolve 4 - 3 - 4
- When users have trouble logging in, users do not have a way to resolve log-in issues quickly. 4 - 4 - 2
- FAQ does not provide much help for login issues 3 - 1.75 - 5
- In the cases of DS Logon and My HealtheVet users often cannot remember their password and often have to reset it before logging in. 3 - 4 - 1
- With the new full page login experience, users cannot exit the login flow (without hitting the back button). 2-2-3.



### Improve Identity-Related Issues 
![Improve identity-related issues.png](https://images.zenhubusercontent.com/59ee09c5a468affe6df7cd9e/86bbb880-673e-47b8-bf33-be3b0b8c2281)

#### Organized by Value, then Cost, then Controllability
- When Veterans are logged in, MVI may be down which prevents access to services 4 - 3.75 - 2
- Not immediately clear to users that they have a limited experience when not in MVI. 3.75 - 2 - 4.75
- We don't have any metrics around how many Veterans aren't found in MVI when they should be (complication: many accounts will be “not found in MVI” appropriately - these people aren’t Veterans) 3.75 - 3 - 2
- We aren’t sure how to resolve most identity verification errors, thus have generic messaging for users that is not as helpful as it needs to be. 3.5 - 3 - 1.25


##### Maybe covered above:
- We don’t have good visibility into errors user experience after they’ve logged in


### Improve Brand Conslidation
![Improve brand con.png](https://images.zenhubusercontent.com/59ee09c5a468affe6df7cd9e/84155bc4-a8c3-4674-90d6-4c5283bb1008)

#### Organized by Value, then Cost, then Controllability
- VA.gov and MHV UX is completely different, which harms our ability to drive people consistently to VA.gov. 3.6 - 2.5 - 1.5
- Users have multiple personalized experience across properties that are not in sync (duplicate profiles and accounts on VA.gov and MHV with different data) - 3.5 - 3.8 - 2
- Users have multiple accounts that are not always linked together for a consistent experience (e.g., DS Logon + MHV) - 2.5 - 3 - 3.2


##### Is this a problem?
- Registering and creating accounts is not consistent between VA.gov and MHV
- With all of the sign in options, the initial sign in modal has a lot going on and may be overwhelming for new users, causing abandonment
- Its not clear the breadth of services that the VA digital identity needs to provide access to (this needs definition of how this team could, and should impact)


##### For future consideration
- Veterans still use eBenefits in high numbers which is not integrated into the VA.gov identity platform - 4.2 - 2.2 - 3.3* (cost contingent upon scope and involvement)
- If the VA.gov header is going to be used across all of the other VA subdomains, and users are going to be logging in, we need to possibly think of new / novel approaches to surfacing warning banners vs errors.


#### Organized by Value, then Cost, then Controllability

### Improve Identity Product Testing
![Improve identity product testing.png](https://images.zenhubusercontent.com/59ee09c5a468affe6df7cd9e/10f0c73a-5b9d-4a28-adf7-cc849e1f34b1)

#### Organized by Value, then Cost, then Controllability
- We lack a standardized testing protocol for new feature releases with identity 4.3 - 4.6 - 3.3
- It takes a lot of time to run through full regression of all sign-in types and each of the 4-5 SAML flows for each sign-in type: sign-in, verify, mfa, sign-out 4.2 - 4.2 - 3.6
- DS Logon and MHV dev/staging accounts require VA network access, which a lot of team members do not have, and is difficult to acquire - 3.8 - 1.8 - 3
- We lack production accounts for DS Logon, ID.me LOA3 to test with real user data in live environments, which lowers testing confidence pre-release - 3.8 - 2 - 2

##### Is this a problem?
- Lack of ability to reset accounts (MHV - creation and upgrade) leads to reluctance to do testing around upgrades.
- The process of resetting SAML flows (related to ID.me wallet, MFA, ID.me verification) could be better documented and is not well known.
- When I find a bug, it's difficult to confirm that someone hasn't already logged it in ZenHub.

##### To be addressed cross-team 
- Service integration for staging accounts (with products such as dashboard) require mock data which is not consistently up to date and does not pull from external data services, so integration testing is lost
- It’s not clear when external services’ lower and upper environments are down, which makes failures in testing confusing


### Increase Identity Account Usage 
#### WIP - To be prioritized
- Less than 100% of Veterans have accounts to access VA.gov
- Of the Veterans who do have VA.gov accounts, many have not verified their identities to get access to the full suite of benefits and services
- Of the Veterans who do have VA.gov accounts, many have not fully secured their accounts through MFA
- Of the Veterans who do have accounts, many do not use their accounts consistently
- I think a small percentage of users attempt login at all (according to my interpretation of google analytics it's near 4%)
- There doesn't appear to be an easy way to try again if identity verification fails. It also isn't clear how many times you can try again without getting locked out.
- Many Veterans are not aware of the new and improved VA.gov.
- Multifactor auth is likely quite difficult for Veterans without cell phones, especially homeless veterans.
- People hate mFA - people have problems with using their phone for MFA, and have to do it more often than usual.


## All Priorities

![All Griffins Priorities.png](https://images.zenhubusercontent.com/59ee09c5a468affe6df7cd9e/c6ff27cd-192f-4b4c-9558-eb50834a92e1)

#### Organized by Value, then Cost, then Controllability
- Sign-in fails due to login errors. 5-4-2
- We lack a standardized testing protocol for new feature releases with identity 4.3 - 4.6 - 3.3
- It takes a lot of time to run through full regression of all sign-in types and each of the 4-5 SAML flows for each sign-in type: sign-in, verify, mfa, sign-out 4.2 - 4.2 - 3.6
- We don’t have good visibility into errors user experience after they’ve logged in because of poor help desk data. 4 - 2.5 - 3
- When users have an issue logging in, the error message is vague, which makes it difficult for the Veteran to resolve 4 - 3 - 4
- When Veterans are logged in, MVI may be down which prevents access to services 4 - 3.75 - 2
- When users have trouble logging in, users do not have a way to resolve log-in issues quickly. 4 - 4 - 2
- DS Logon and MHV dev/staging accounts require VA network access, which a lot of team members do not have, and is difficult to acquire - 3.8 - 1.8 - 3
- We lack production accounts for DS Logon, ID.me LOA3 to test with real user data in live environments, which lowers testing confidence pre-release - 3.8 - 2 - 2
- Not immediately clear to users that they have a limited experience when not in MVI. 3.75 - 2 - 4.75
- We don't have any metrics around how many Veterans aren't found in MVI when they should be (complication: many accounts will be “not found in MVI” appropriately - these people aren’t Veterans) 3.75 - 3 - 2
- VA.gov and MHV UX is completely different, which harms our ability to drive people consistently to VA.gov. 3.6 - 2.5 - 1.5

- We aren’t sure how to resolve most identity verification errors, thus have generic messaging for users that is not as helpful as it needs to be. 3.5 - 3 - 1.25
- Users have multiple personalized experience across properties that are not in sync (duplicate profiles and accounts on VA.gov and MHV with different data) - 3.5 - 3.8 - 2

- FAQ does not provide much help for login issues 3 - 1.75 - 5
- In the cases of DS Logon and My HealtheVet users often cannot remember their password and often have to reset it before logging in. 3 - 4 - 1
- Users have multiple accounts that are not always linked together for a consistent experience (e.g., DS Logon + MHV) - 2.5 - 3 - 3.2

- With the new full page login experience, users cannot exit the login flow (without hitting the back button). 2-2-3.
