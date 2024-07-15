# Mocked Authentication
## Overview: (Provide a high level description of the product/set of features)
Mocked Authentication is an alternate authentication flow on local and development builds of VA.gov, which allows users to test and develop downstream features without the need to authenticate with a real credential provider. Users are able to select the test account they'd like to authenticate as, without the need for a username or password.
Mocked Authentication is a module built for the local and development builds of VA.gov that help Engineers and Product Owners simulate the authentication process for different external identity providers (IdPs) supported by VA.gov.

Mocked Authentication uses relevant information like tokens and user data to create a realistic simulated authentication without the need to interact with external IDPs or modify existing user accounts.

Mocked Authentication allows the testing of new features and functionality in a more efficient way and provides a seamless, and secure user experience.

## Problem Statement: (Describe what problem we’re going to address with this product)
Engineers, Designers, and QA Testers spend numerous hours per project to find the right combination of "Test credentials" in order to validate their features functionality. 

## Relevant Documents:

## What's In Scope: 
The Mock Authentication service will build the proper authentication calls to Vets-API to facilitate a real user session.

For this first iteration, the focus will be on:

  
## Out of Scope: (for this iteration)

## Use Cases:
| User          | Problem       | How does this solution address the problem?  |
| ------------- |:-------------:| -----:|
| As an Engineer I would like to be able to test an authenticated feature  | Has to enter credential information | Does not need to enter any credential information. |
## Assumptions:
* Users who run into authentication issues are frustrated and confused.
* It is not valuable for users outside of the Identity team to have an intimate knowledge of error cases and resource in authentication.
* Most features on VA.gov need the user to be authenticated to work, but the actual authentication process is unimportant.

## Solution Approach: 
* Mock the credential provider itself, but preserve the authentication flow on VA.gov.
* Instead of calling out to an external credential provider, the user is routed to an internal, 'fake', credential provider that provides mocked data.
* Master Person Index (MPI) data is also mocked to prevent the need to call out to this external system during authentication.
  
## Technical Considerations:
| Issue         | Notes         | 
| ------------- |:-------------:| 
|               |               |
## UX/ Design Considerations:
| Issue         | Notes         | 
| ------------- |:-------------:| 
|               |               |
## Measuring Success:
| KPI           | Notes         | 
| ------------- |:-------------:| 
|               |               |
## Baseline KPI Values:
| KPI           | Notes         | 
| ------------- |:-------------:| 
|               |               |

## Milestones:
* Initial Functionality March 8th, 2023

## Future Scope:
* Test User Dashboard accounts added to Mocked Auth
