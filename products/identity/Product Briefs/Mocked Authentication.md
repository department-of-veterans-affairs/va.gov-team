# Mocked Authentication

# Overview:

Mocked Authentication is an alternate authentication flow on local and development builds of [VA.gov](http://va.gov/), which allows users to test and develop downstream features without the need to authenticate with a real credential provider. Users are able to select the test account they'd like to authenticate as, without the need for a username or password. The feature fully simulates all components of a fully authenticated user allowing application teams to test any authenticated feature they wish on localhost or dev.

## Problem Statement:

Engineers, Designers, and QA Testers spend numerous hours per project to find the right combination of "Test credentials" in order to validate their features functionality.

## Relevant Documents:

- Main documentation: [https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity/Mocked Authentication](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity/Mocked%20Authentication)
- Mock repo used to support mocked credential info: https://github.com/department-of-veterans-affairs/vets-api-mockdata
- User flow diagram:![Mocked_auth user flow](https://github.com/department-of-veterans-affairs/va.gov-team/assets/71290526/19f86a1d-8ce6-44f2-9b2c-09c309e55671)


## What's In Scope:

- The Mock Authentication service will build the proper authentication calls to Vets-API to facilitate a real user session.
- All mocked authentication calls to vets-api
- Loading of the correct user attributes as they are listed in the mocked data repo into the user model of va.gov.

## Out of Scope:

- Adding of test users and attributes to the vets-api mocked repo
- Errors related to user attributes within a service

## Use Cases:

| User | Problem | How does this solution address the problem? |
| --- | --- | --- |
| As an Engineer I would like to be able to test an authenticated feature | Has to enter credential information | Does not need to enter any credential information if the user and data they need to test with is already registered with the mocked authentication solution. |

## Assumptions:

- Users who run into authentication issues are frustrated and confused.
- It is not valuable for users outside of the Identity team to have an intimate knowledge of error cases and resource in authentication.
- Most features on [VA.gov](http://va.gov/) need the user to be authenticated to work, but the actual authentication process is unimportant.

## Solution Approach:

- Mock the credential provider itself, but preserve the authentication flow on [VA.gov](http://va.gov/).
- Instead of calling out to an external credential provider, the user is routed to an internal, 'fake', credential provider that provides mocked data.
- Master Person Index (MPI) data is also mocked to prevent the need to call out to this external system during authentication.

## Technical Considerations:

| Issue | Notes |
| --- | --- |
|  |  |

## UX/ Design Considerations:

| Issue | Notes |
| --- | --- |
|  |  |

## Measuring Success:

| KPI | Notes |
| --- | --- |
| Number of successful uses with mocked auth | Goal: 20 per month |
| Number of errors with mocked auth | There is a known error state if users hit the back back button after trying to mock auth that causes an error state. 
Goal: less than 10 per month OR reduce by 10% month over month |
| How many help requests do we have around authentication in the lower environments | Goal: reduce by 50% year over year per 30 day block |

## Baseline KPI Values:

| KPI | Notes | Current value |
| --- | --- | --- |
| How many help requests do we have around authentication in the lower environments | The goal is to have a reduction in the number of requests in slack. Use 30 day evaluation windows: “user error in:#vsp-identity” | 7 - June 2023
4 - May
5 April
14 Mar
3 Feb
19 Jan
12 Dec
8 Nov
10 Oct 22
15 Sept
9 Aug
12 July 22
10 June 22 |

## Milestones:

- Initial Functionality March 8th, 2023
- Road show of product July 2023

## Future Scope:

- An indicator on the user attribute display that informs the user if all the required attributes are mocked within the database to allow for a successful mocked auth or not.
    - The UI of the feature is still under development, backend code is being prepped as of July 10th 2023.
