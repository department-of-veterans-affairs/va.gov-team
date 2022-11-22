# Vets-API User Attribute Business Rules

## Summary
Vets-api utilizes a sign-in modal that can be used by other service providers, such as MHV, with little additional configuration for their own sign-in functionality. Within the frontend vets-website offers the use of the sign-in modal by appending the application name of the service provider to the url. For example `https://www.va.gov/sign-in/?application=mhv&to=home` points to a preconfigured mhv application. Each of these applications  come with some exceptions to the standard Vets-API login flow today in terms of the user attributes returned by eauth. This document will outline the standard rules for vets-api user authentication.


## Standard User Expectations
The following is a non-exhaustive list of identifiers parsed from the Eauth SAML Response headers after a verified user has completed the authentication process with the credential provider (MHV, IDme, Login.gov, DSLogon):
 - IEN: MHV uuid, created for all MHV users upon account creation
 - Corp ID / Participant ID: uuid from VBA
 - SSN
 - BIRLS: uuid from DSLogon
 - EDIPI: uuid from DSLogon
 - CSP ID: comes from the credential provider such as IDme
 - ICN: MPI (Master Person Index) uuid
 - Sec_ID: Eauth uuid
 - MHV_ICN: ICN stored from MHV in MHV EAuth headers

[Vets-API inspects](https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/saml/user_attributes/ssoe.rb) each of the above attributes and makes business logic decisions regarding if a user should be permitted to login to va.gov and any other applications that utilize the sign-in modal (exceptions are made on a case by case basis and are listed in the next section):
 - IEN: 
    - If a user has more than one IEN attribute with an `A` marker attached to it, the user `IS NOT` permitted to login
    - If a user has one or less IEN attributes with an `A` marker attached to it, the user `IS` permitted to login
 - Corp ID / Participant ID: uuid from VBA
    - If a user has more than one CORP ID attribute with an `A` marker attached to it, the user `IS NOT` permitted to login
    - If a user has one or less CORP ID attributes with an `A` marker attached to it, the user `IS` permitted to login
 - SSN
    - If a user has more than one SSN, the user `IS NOT` permitted to login
    - If a user has one SSN, the user `IS` permitted to login
    - If a verified user does not have an SSN in the response, the user `IS` permitted to login
    - After login action logs a warning to sentry if there is an [SSN mismatch](https://github.com/department-of-veterans-affairs/vets-api/blob/2bcb317c51f91fd079bdc2a023bc434ab2d0a4bb/app/controllers/v1/sessions_controller.rb#L339) between the stored redis response and the MPI response.
    - If a user is detected to have a different SSN from the CSP and MPI with a SiS login (OAuth), the user `IS NOT` permitted to login
 - BIRLS: uuid from DSLogon
    - If a user has more than one BIRLS, the user `IS` permitted to login
    - If a user has one or less BIRLS, the user `IS` permitted to login
 - EDIPI: uuid from DSLogon
    - If a user has more than one EDIPI, the user `IS NOT` permitted to login
    - If a user has one or less EDIPI, the user `IS` permitted to login
 - CSP ID: comes from the credential provider such as IDme
    - If a user logs in through inbound and does not have an IDme uuid, the user `IS NOT` not permitted to autologin. In this case the user can login on va.gov for the first time and an idme uuid will be created for them and attached to their account.
    - If a user logs in outbound without an idme uuid, one will be created for them on the first login and the user `IS` permitted to login
 - ICN: MPI (Master Person Index) uuid
    - If a user has more than one ICN, the user `IS NOT` permitted to login
    - If a user has one or less ICN, the user `IS` permitted to login
 - Sec_ID: Eauth uuid
    - If a user has more than one Sec_ID, the user `IS` permitted to login. A [warning is published](https://github.com/department-of-veterans-affairs/vets-api/blob/c6bfa717cfe9532cbc29925587cb9c0106edd68a/lib/saml/user_attributes/ssoe.rb#L243) to sentry to alert vets-api of this occurrence.
    - If a user has one or less Sec_ID, the user `IS` permitted to login
 - MHV_ICN: parsed from eauth headers
    - If the MHV ICN does not equal the ICN inside the eauth headers returned after authentication, the user `IS NOT` permitted to login. We throw an error on the frontend that states the user has an ICN mismatch
    - For Sign in Service since we do not get eauth headers we do not compare the MHV ICN to the MPI ICN. We will only be looking for the MPI ICN. If a user signs in through Sign in Service and the MHV ICN does not equal the MPI ICN, the user `IS` permitted to login.

## SiS Specific User Attribute Rules

| IAL/LoA - CSP     | Authenticate? | Update MPI? |
| ----------- | ----------- | ----------- |
| IAL1      | Yes       | No |
| IAL2 - Login.gov  | Yes        | Yes |
| LoA1      | Yes       | No |
| LoA3 - MHV  | Yes        | No |
| LoA3 - DSLogon  | Yes        | Yes |
| LoA3 - ID.me  | Yes        | Yes |

--------------------------

| Credential | Context | Authenticate? | Update MPI? |
| ----------- | ----------- | ----------- | ----------- |
| Any | CSP credential value is missing  | Yes | No |
| Any | MPI credential value is missing | Yes | Yes |
| `first_name` | MPI profile `given_names.first` doesn't match | Yes | Yes, log `Attribute mismatch, first_name in credential does not match MPI attribute` |
| `last_name` | MPI profile `family_name` doesn't match | Yes | Yes, log `Attribute mismatch, last_name in credential does not match MPI attribute` |
| `birth_date` | MPI profile `birth_date` doesn't match | Yes | Yes, log `Attribute mismatch, birth_date in credential does not match MPI attribute` |
| `ssn` | MPI profile `ssn` doesn't match | No | No, log `Attribute mismatch, ssn in credential does not match MPI attribute` |
|`address`|MPI profile `address` and CSP `address` don't match|Yes|Yes, log `Attribute mismatch, address in credential does not match MPI attribute`|
|`multiple attributes don't match`|More than one of the user attributes don't match between MPI Profile and the CSP response (excluding `ssn` mismatch)| Yes|Yes|


This diagram depicts the current business requirements as described above:

![userattribute_businessrules](https://user-images.githubusercontent.com/71290526/151223969-ceae6748-c3db-4d0c-8044-f0fcffba63a0.png)
