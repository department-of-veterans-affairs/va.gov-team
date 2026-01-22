# Service history information use cases

Last updated: January 2026  
* [User flow](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffair[…]d370a87fa396c6489e10b8cc9c862?sender=u36b374887f74c9a3de2d0750)  
* [Figma files](https://www.figma.com/design/zb5ecY9yMnupiLjaH9UmSc/Profile---Service-history-Information?node-id=1700-10402&t=xgrOT4olRH7dzPJ2-1)

<details><summary>Archive | How to reproduce in staging</summary>

* [All Military information common use cases](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/military-information/use-cases/read-military-info.md#how-to-reproduce)  
* [Military information system error](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/military-information/use-cases/system-cant-display-military-info.md#how-to-reproduce)

</details>

# Jump to

[Overview](#overview)

[Use cases](#use-cases)

[Edge cases](#edge-cases)

- [Flags](#flags)

- [Errors](#errors)

# Overview 

The **Service history information** page allows users to view their period of service. No information is editable at this time. All information is stored and managed by the [Defense Enrollment Eligibility Reporting System](https://www.tricare.mil/DEERS) (DEERS), which is owned by the Department of Defense (DoD). For all of the use cases, the user must be LOA3 (identity verified). If the user is not LOA3 verified, they will be directed to the **Sign-in information** page to verify their account.

# Use cases 

## User has a Department of Defense ID 

* **Description:** User can see data points for all periods of service the VA can gather from their military records.  
* **Status code:** 200  
* **Format:** See designs  
* [Link to designs](https://www.figma.com/design/zb5ecY9yMnupiLjaH9UmSc/Profile---Military-Information?node-id=619-3324&t=iU7vARDUjgIJkIfo-1)

## NotInDEERSAlert, NoServiceHistoryAlert: User does not have a Department of Defense ID or service history 

* **Description:** Message shows if:  
  * ‘GET service\_history’ returns a 403\. Meaning the user does not have a DoD ID in DEERS.  
  * \`GET service\_history\` returned an empty service history array. Meaning the user does not have a service history in DEERS.  
* **Status code:** GET/SHOW 403  
* **Format:** [Warning alert component](https://design.va.gov/components/alert/#warning-alert)  
* [Link to designs](https://www.figma.com/design/zb5ecY9yMnupiLjaH9UmSc/Profile---Service-history-Information?node-id=1701-4522&t=xgrOT4olRH7dzPJ2-1)  
* [Link to code](https://github.com/department-of-veterans-affairs/vets-website/blob/29f17e7e54f4b13149934df66d49cc886dedf1fb/src/applications/personalization/profile/components/military-information/MilitaryInformation.jsx#L45)

# Edge cases 

## Flags 

### Profile shared flags 

* [User with a blocked account attempts to access any section of profile](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/blocked-account.md)  
* [LOA1 user attempts to access any section of profile](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/loa1-user.md)

## Errors 

### Profile shared errors 

* [Full page, backend system down](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/profile-shared-use-cases.md#full-page-backend-system-down)  
  * **Status codes**  
      * GET 400: Bad request;  
        * BackendServiceException: {:source=\>"VAProfile::MilitaryPersonnel::Service", :code=\>"VET360\_CORE100"}  
        * Unexpected Error: There was an error encountered processing the request  
      * GET 401: Unauthorized  
      * GET 404: Not found; If a user is not found in VAProfile, an empty ServiceHistoryResponse with a 404 status will be returned  
      * GET 500: Internal server error  
      * GET 502: Bad gateway  
        * BackendServiceException: {:source=\>"VAProfile::MilitaryPersonnel::Service", :code=\>"VET360\_502"}  
        * Received an invalid response from the upstream server  
      * GET 503: Service unavailable  
      * GET 504: Gateway timeout; Upstream server took too long to respond



---



<details><summary>Archive | Military information Use Cases, July 2025</summary>
  
# Military information Use Cases
**Last updated: July 2025** Added shared use cases.

- [User flow](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1743514356361/b9db0c1c545d370a87fa396c6489e10b8cc9c862?sender=u36b374887f74c9a3de2d0750)
- [Figma files](https://www.figma.com/design/zb5ecY9yMnupiLjaH9UmSc/Profile---Military-Information?node-id=1354-2142&t=kszpOjTMFVk1ha3H-1)
- Test Rail QA

<details><summary>Archive | How to reproduce in staging</summary>

- [All Military information common use cases](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/military-information/use-cases/read-military-info.md#how-to-reproduce)
- [Military information system error](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/military-information/use-cases/system-cant-display-military-info.md#how-to-reproduce)

</details>

## Current experience
- All information on the page is view only, and cannot be edited at this time.
- For all of these use cases, the user must be LOA3 (identity verified). If the user is not LOA3, the user will be directed to the Profile Account Security section.


## Common use cases
### User logs in with LOA3 account

<details><summary>User has a Department of Defense ID</summary>

- **Use case:** User can see data points for all periods of service the VA can gather from their military records.
- **Status code:** 200
- **Format:** See designs
- [Link to designs](https://www.figma.com/design/zb5ecY9yMnupiLjaH9UmSc/Profile---Military-Information?node-id=619-3324&t=iU7vARDUjgIJkIfo-1)
- **Content:** The page includes the following information:
  - Period of service
    - Branch of service
    - Type of service
    - Start and end dates
    - Additional info component: What if I don't think my military service information is correct?
  - Link component: Learn how to request your military service records
 
</details>


<details><summary>NotInDEERSAlert, NoServiceHistoryAlert: User does not have a Department of Defense ID or service history</summary>

- **Use case:** DEERS does not return a DoD ID or service history.
- **Status code:** GET/SHOW 403
- **Format:** [Warning alert component](https://design.va.gov/components/alert/#warning-alert)
- [Link to designs](https://www.figma.com/design/zb5ecY9yMnupiLjaH9UmSc/Profile---Military-Information?node-id=619-10743&t=iU7vARDUjgIJkIfo-1)
- [Link to code](https://github.com/department-of-veterans-affairs/vets-website/blob/29f17e7e54f4b13149934df66d49cc886dedf1fb/src/applications/personalization/profile/components/military-information/MilitaryInformation.jsx#L45)
- **Content:**

H2: We can’t match your information to any military service records

We’re sorry for this issue.

If you want to learn what military service records may be on file for you, call the Defense Manpower Data Center (DMDC) at 800-538-9552 (TTY: 711). The DMDC office is open Monday through Friday (except federal holidays), 8:00 a.m. to 8:00 p.m. ET.

If you think there might be a problem with your military service records, you can apply for a correction. 

[Learn how to correct your military service records on the National Archives website](https://www.archives.gov/veterans/military-service-records/correct-service-records.html)

</details>


<details><summary>NotAVeteranAlert: User is not a Veteran</summary>

- **Use case:** User is confirmed as a non-Veteran.
- **Status code:** TBD
- **Format:** [Info alert component](https://design.va.gov/components/alert/#informational-alert-aka-default)
- [Link to designs](https://www.figma.com/design/zb5ecY9yMnupiLjaH9UmSc/Profile---Military-Information?node-id=619-10743&t=48R0Oy0eosW8QzYj-1)
- [Link to code](https://github.com/department-of-veterans-affairs/vets-website/blob/8bb9e606cbe6ac0d17598e748a550218b5bf3f2f/src/applications/personalization/profile/components/military-information/MilitaryInformation.jsx#L22)
- **Content:**

H2: We don’t have military service records for you

If you think this is an error,  call us at 800-698-2411 (TTY: 711). We’re here Monday through Friday, 8:00 a.m. to 8:00 p.m. ET.

</details>


## Edge cases

### Validation
This feature has no validation use cases.

### Flags
[Blocked users documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/blocked-account.md)

[User logs in with an LOA1 account](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/loa1-user.md)

### Errors

<details><summary>System error: Backend system down</summary>

[Profile shared use cases: Errors: System errors](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/profile-shared-use-cases.md#system-errors)

**Status codes**
    
- GET 400: Bad request;
  - BackendServiceException: {:source=>"VAProfile::MilitaryPersonnel::Service", :code=>"VET360_CORE100"}
  - Unexpected Error: There was an error encountered processing the request
- GET 401: Unauthorized
- GET 404: Not found; If a user is not found in VAProfile, an empty ServiceHistoryResponse with a 404 status will be returned
- GET 500: Internal server error
- GET 502: Bad gateway
  -  BackendServiceException: {:source=>"VAProfile::MilitaryPersonnel::Service", :code=>"VET360_502"}
  -  Received an an invalid response from the upstream server
- GET 503: Service unavailable
- GET 504: Gateway timeout; Upstream server took too long to respond

</details>

</details>














<details><summary>Archive | Military information use cases, February 2024</summary>
  
# Military Information Use Cases
**Last updated:** February 15, 2024

For all of these use cases, the user must be LOA3 (identity verified). If the user is not LOA3, the only thing they can access in profile is the Account Security section.

## Common use cases
### User logs in with LOA1 account
- [User logs in with an LOA1 account](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/loa1-user.md)

### User logs in with LOA3 account
- [User has a Department of Defense ID](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/military-information/use-cases/read-military-info.md#user-has-dod-id)
- [User does not have a Department of Defense ID or a service history](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/military-information/use-cases/read-military-info.md#user-does-not-have-dod-id-or-does-not-have-a-service-history)
- [User is not a Veteran](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/military-information/use-cases/read-military-info.md#user-is-not-a-veteran)

## Edge cases
### Flags 
There are no flags associated with this feature

### Validation
This feature has no validation use cases, since it is read only.

### System
- [Something has gone wrong and VA.gov can’t display any military information](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/military-information/use-cases/system-cant-display-military-info.md)

## Flow diagrams
- [User flow on mobile page of design files](https://www.figma.com/file/zb5ecY9yMnupiLjaH9UmSc/Profile---Military-Information?type=design&node-id=0%3A1&mode=design&t=ISGgZpVUB35oOzXb-1)

</details>
