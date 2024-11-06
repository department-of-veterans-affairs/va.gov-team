# MHV Account Creation API on VA.gov

## Summary of request

The MHV credential is being sunset from VA systems in January of 2025. In order to transition users away from the MHV credential and onto other credentials, the MHV account must be associated with a credential that will be available for VA.gov users to authenticate with. Backend systems within MHV will continue to maintain all of the MHV account information for each user however they will need a new mechanism to associate users with these accounts because all MHV services are moving over to VA.gov and away from the MHV portal.

The MHV team has created an api called the MHV account creation API which the VA.gov backend can use to assist with the MHV account association process with VA credentials. The main process involves vets-api checking if the user is verified and if they have a station ID from the MPI response. If they meet both criteria then vets-api is expected to make an asynchronous call to the MHV account creation api with the user's ICN.

## Requirements

1. Vets-api MUST call the MHV account creation API if the user is verified and has at least one facility assigned by IAM
    1. Values required for API request:
        1. `ICN`
        2. `vaTermsOfUseDocTitle`
        3. `vaTermsOfUseLegalVersion`
        4. `vaTermsOfUseRevision`
        5. `vaTermsOfUseStatus`
        6. `vaTermsOfUseDateTime`
    2. Values optional for API request:
        1. CSP supplied email
2. The cache that stores the result of the MHV account creation API MUST expire every 24 hours. The next user authenticated action MUST make a fresh call to the MHV account creation API to ensure there is fresh data loaded into the cache from the response.
   3. This is to ensure if there is an update to the users MHV account information we get the latest data, such as updated access to secure messaging.
2. Vets-api MUST use a signed JWT created by vets-api STS to the MHV team and the JWT MUST contain the proper user ICN value and format
3. Vets-api MUST not call the MHV account creation API for a user who cannot successfully login to the VA.gov portal.
    1. Note: if the user has a date of death or otherwise account blocking flag, the user will not be able to login and the MHV account creation api should be impossible/not allowed to be called.
    2. If a user has not accepted terms and conditions they cannot login and also therefore should not be able to have an MHV account creation api process initiated for them.
4. Vets-api MUST ensure the ICN used to generate the JWT is not deprecated
    1. Note: calling MPI at the start of the sidekiq job to get an updated ICN if it's available is the likely solution here.
5. Vets-api MUST ensure the ICN used to call the MHV APIs matches the ICN within the JWT used to call the MHV APIs
6. Vets-api MUST ensure the ICN used to call the MHV APIs is not deprecated
    1. Note: the JWT used to get the token to call the API will be different which is why this is an explicitly called out requirement
7. Vets-api MUST log all requests, responses, and errors from the MHV account creation API
8. Vets-api MUST log all requests, responses, and errors for all JWT actions associated with the account creation API
    1. Logs MUST at least include icn, session id, user uuid
9. Vets-api MUST write to a new frontend serializer for the storage of the MHV attributes
10. Vets-api MUST look for a temporary ICN and show the user an error if a non-temporary active ICN is not present.
    1. va.gov frontend MUST show an error message to the user stating there was an issue processing their user attributes, refer them to the help desk. Make this a new error code number so that we can inform the helpdesk to forward the issue onto IAM for a temporary ICN user.
11. Vets-api MUST update the MHV related values within the user redis cache after a successful mhv account creation api call 

## Host Endpoints

- Dev -[https://apigw-intb.aws.myhealth.va.gov](https://apigw-intb.aws.myhealth.va.gov)
- Staging - [https://apigw-sysb.aws.myhealth.va.gov](https://apigw-intb.aws.myhealth.va.gov)
- Production - [https://api.myhealth.va.gov](https://api.myhealth.va.gov/)

## API Paths

- /mhvapi/v1/usermgmt/account-service/account
    - POST
    - This path is used to create a new MHV account for the user

## API Specifications (/mhvapi/v1/usermgmt/account-service/account:POST)

![apispec1](https://github.com/user-attachments/assets/9625fba7-20cc-4fe0-bd8a-4024a9e9ac09)
![apispec2](https://github.com/user-attachments/assets/e6bb45f0-97b6-41b4-ab0d-4a2c5e8e3d9d)

### New success response structure (as of 8/23/24):
``` json
{
  "mhv_userprofileid": "XXXXXX",
  
  "isPremium":true,
  
  "isChampVA":true,
  
  "isPatient":true,
  
  "isSMAccountCreated":true,
  
  "message":"Existing MHV Account Found for ICN"
}
```
## Questions

1. If the MHV account creation response indicates the “matching with MPI” fails, what should VA.gov do with these users?
    1. **~~Waiting on adjusted api spec for this~~**
    2. **There will not be a “matched with mpi” value in the response**
2. MHV-54109 - this requirement states if the account has multiple active MHV accounts you will return an error to us stating they have multiple accounts. What are we to do with this user on va.gov? I was under the impression MHV was going to take care of this automatically as part of the account creation api process.
    1. What should va.gov do in this situation? **Call the help desk**
3. MHV-60526 - Multiple Accounts found with same Traits: what should va.gov do in this situation?
    1. Try back later to create MHV account. MHV Account Cannot be created / updated at the time of request. MHV adds these accounts to their Audit table to fix these accounts.
4. MHV-57486 - Active MHV Account Found by Traits - MHV shall update the account found and return the response back to the caller: what should va.gov do in this situation?
    1. MHV returns the User Profile Id to continue using the account. Va.gov can start using the account information as needed.
5. What should va.gov do if SM account creation fails?
    1. **Nothing, show the user an error message. Some users do not qualify for SM.**
6. How important is it that we process temporary ICNs, we do not currently support them on VA.gov
    1. **Get this over to IAM, ask them to call the help desk.**
7. Can we confirm is the ispatient from MPI is accurate?
    1. From IAM: When you say isPatient are you referring the an identity having a person type (VA MPI - PersonTypes) value containing ‘PAT’? If so yes I believe this is accurate, again I would defer to Patrick and Danny if you want details of when this personType is added and removed.
8. Should we call mhv account creation api for ALL users, or only when we detect facility ID.
    1. **We will only call it when there is a facility ID**
9. If the user is not a patient in MPI should they have an SM account?
    1. **No**

## Definitions

- MHV account - a collection of user attributes stored within the MHV backend. This object will remain and be the backing value referenced for all MHV services on VA.gov.
- MHV credential - the username and password object of an MHV account. This object will no longer be accessible by external users after Jan 2025.
- **Facility ID or station ID -** required for MHV account creation API call logic can be found as follows from MPI:
    - VHA facility IDs show up as PI correlations using the station ID, example (from VA MPI - DFN Examples):
        - VHA correlated systems   Id <id root=“2.16.840.1.113883.4.349” extension=“123456^PI^station#OfVHASystem^USVHA”/>
        - Station IDs which correlate to proper treatment facilities are [[358, 718], [720, 740], [743, 758]] and "741MM"
        

## Contacts

1. Carnetta Scruggs (VA) - Product Owner
2. Sandeep Karuturi (VA,Ctr) - API Spec Contact/Product Manager
3. Patrick Batema (VA) - MHV on VA.gov engineer contact
4. Haritha Cheruvu (VA,Ctr) - MHV account creation api engineer
5. Barry Egbert (VA,Ctr) - JWT/security MHV account creation api engineer
6. David Rawlins (VA) - Product Manager/owner?
7. Soujanya Bhamidipaty(VA,Ctr) - MHV account creation API engineer

## Decisions

1. Vets-api will not process temporary ICNs but not for the purposes of calling the MHV account creation API. VA.gov will display an error to the user informing them of an attribute error that must be resolved by the help desk. The error message should be new so that we know how to tell the help desk what kind of error it is. The help desk should refer the users information to the IAM team to resolve the issue.
2. Vets-api will only call the account creation api if the user has an assigned facility id from the MPI response. Carnetta and Joe confirmed this via Teams on 8/21/24.

## Documentation from MHV
The pdf files for the api specs and use cases have been stored on the private github folder [here](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/tree/master/teams/vsp/teams/Identity/Product%20Documentation/MHV%20account%20creation%20api%20on%20vagov).
