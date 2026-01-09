# Accredited representative or VSO

Last updated: January 2026  
* [User flow](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1753141051322/aa958c4edc0a9c402e4c6a53709dfff823ce96e3)  
* [Figma files](https://www.figma.com/design/FTwQPg1HxfiYsSh0e1HqvN/Profile---Dependents-and-contacts?node-id=2-19060&t=Q8Naquq1eob20Deg-1)  
* TestRail artifacts from Staging Review  
  * [Test Plan](https://dsvavsp.testrail.io/index.php?/plans/view/6712)  
  * [Coverage for References](https://dsvavsp.testrail.io/index.php?/reports/view/1309)  
  * [Summary of Defects](https://dsvavsp.testrail.io/index.php?/reports/view/1307)

# Jump to

[Overview](#overview)

[Use cases](#use-cases)

- [Represented by a Veteran Service Organization (VSO)](#represented-by-a-veteran-service-organization-\(vso\))

- [Represented by an accredited attorney or claims agent](#represented-by-an-accredited-attorney-or-claims-agent)

- [No representation](#no-representation)

[Edge cases](#edge-cases)

[Flags](#flags)

[Errors](#errors)

- [Accredited representative or VSO errors](#accredited-representative-or-vso-errors)

- [Profile shared errors](#profile-shared-errors)

[Related resources](#related-resources)

# Overview 

The **Accredited representative or VSO** profile subpage reflects a user's (Veteran or claimants) current representative status. This feature was released in March 2025 and is managed by the feature flag ‘representative\_status\_enable\_v2\_features’. For all of the use cases, the user must be LOA3 (identity verified). If the user is not LOA3 verified, they will be directed to the **Sign-in information** page to verify their account.

# Use cases 

## Represented by a Veteran Service Organization (VSO) 

* **Description:** User is represented by a VSO. The VSO’s central offices address and phone number are shown. The user has an option to find an individual representative using the [Find a representative](https://www.va.gov/get-help-from-accredited-representative/find-rep/) tool.  
* **Status code:** 200  
* **Format:** See designs  
* [Link to designs](https://www.figma.com/design/FTwQPg1HxfiYsSh0e1HqvN/Profile---Dependents-and-contacts?node-id=2-19062&t=Q8Naquq1eob20Deg-1)

## Represented by an accredited attorney or claims agent 

* **Description:** User is represented by an accredited attorney or claims agent. The representative's name is always shown. Their address, phone number, and email are shown as available. The user has an option to download the representative’s information to their device.  
* **Status code:** 200  
* **Format:** See designs  
* [Link to designs](https://www.figma.com/design/FTwQPg1HxfiYsSh0e1HqvN/Profile---Dependents-and-contacts?node-id=2012-3049&t=Q8Naquq1eob20Deg-1)

## No representation 

* **Description:** There is no representative on file for the user. The only action provided is a link to the [Get help from an accredited representative or VSO](https://www.va.gov/get-help-from-accredited-representative/) page to get started.  
* **Status code:** 200  
* **Format:** See designs  
* [Link to designs](https://www.figma.com/design/FTwQPg1HxfiYsSh0e1HqvN/Profile---Dependents-and-contacts?node-id=2012-3463&t=Q8Naquq1eob20Deg-1)

# Edge cases 

## Flags 

### Profile shared flags 

* [User with a blocked account attempts to access any section of profile](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/blocked-account.md)  
* [LOA1 user attempts to access any section of profile](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/loa1-user.md)

## Errors 

### Accredited representative or VSO errors 

#### Can’t check if user has an accredited representative 

* **Description:** State when the system cannot currently pull accredited representative information.  
* **Status codes:** 401, 403, 404, 500, 504  
* **Format:** [Standard error alert component](https://design.va.gov/components/alert/#error-alert)  
* [Link to designs](https://www.figma.com/design/FTwQPg1HxfiYsSh0e1HqvN/Profile---Dependents-and-contacts?node-id=2012-3679&t=Q8Naquq1eob20Deg-1)

### Profile shared errors 

* [Full page, backend system down](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/profile-shared-use-cases.md#full-page-backend-system-down)

# Related resources 

1. [Sitewide Representative Status product documentation](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/accredited-representation-management/product-documentation/representative-status)  
   1. [Contact Center guide](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/accredited-representation-management/product-documentation/representative-status/contact-center) (experience screenshots, including user states and error messages)  
   2. [Technical documentation](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/accredited-representation-management/product-documentation/representative-status/technical-documentation) (architecture and data flow diagrams, playbook / incident response plan)  
2. Datadog dashboards  
   1. [Authenticated Experience: Profile \- Representative Status](https://vagov.ddog-gov.com/dashboard/86m-u8e-z5x/authenticated-experience-profile?fromUser=false&refresh_mode=paused&from_ts=1744839001906&to_ts=1744842601906&live=false&tile_focus=2305414365356432)  
   2. [ARM: Representative Status](https://vagov.ddog-gov.com/dashboard/ttj-p2z-9gh/arm-representative-status-widget?fromUser=false&refresh_mode=sliding&from_ts=1742250564464&to_ts=1744842564464&live=true)  
3. Past research for the Representative Status widget  
   1. [Navigate to where you expect to find your assigned representative on VA.gov.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representation-management/research/2023-11-ARM-findarep-nav-usertest/research-findings.md#task-5--navigate-to-where-you-expect-to-find-your-assigned-representative-on-vagov)  
   2. [Show how you would sign-in to see your representative information.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representation-management/research/2024-01-ARM-appointarep-usertest/research-findings.md#task-2--show-how-you-would-sign-in-to-see-your-representative-information)  
4. [Accredited Representation Management (ARM) team page](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/accredited-representation-management) (learn more about the contributing team)



---



<details><summary>Archive | Representative Status in Profile, July 2025</summary>
    
# Representative Status in Profile

**Last Updated: July 2025**

1. [User Flow](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1753141051322/aa958c4edc0a9c402e4c6a53709dfff823ce96e3)
2. [Figma designs for Representative Status - In Profile](https://www.figma.com/design/FTwQPg1HxfiYsSh0e1HqvN/Profile---Dependents-and-contacts?node-id=2-19060&t=Q8Naquq1eob20Deg-1)
3. TestRail artifacts from Staging Review
    1. [Test Plan](https://dsvavsp.testrail.io/index.php?/plans/view/6712)
    2. [Coverage for References](https://dsvavsp.testrail.io/index.php?/reports/view/1309)
    3. [Summary of Defects](https://dsvavsp.testrail.io/index.php?/reports/view/1307)

  
## Overview
The `va.gov/profile/accredited-representative` Profile subpage reflects a user's (Veteran or claimant) current representative status. **This feature released in March 2025** and is managed by the feature `flag representative_status_enable_v2_features`.  


## Common Use Cases

### User logs in with LOA3 account

**Status Code: 200**
1. Represented by a Veteran Service Organization (VSO) 
3. Represented by an accredited attorney
4. Represented by a claims agent
5. No representation


### Flags
[Blocked users documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/blocked-account.md)


### Errors
**Status Codes: 404, 403, 401, 504, 500**
1. Error state
<img width="383" height="114" alt="image" src="https://github.com/user-attachments/assets/d8847fc4-2438-4b38-be0f-d7ca50f21ff1" />

2. [System error: Backend system down](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/profile-shared-use-cases.md#system-errors)


### User logs in with LOA1 account

Deafulting to [Profile: LOA1 user attempts to access any section of profile](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/loa1-user.md).  Accredited representative information is not available for LOA1 users. 


## Related Resources

1. [Sitewide Representative Status product documentation](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/accredited-representation-management/product-documentation/representative-status)
    1. [Contact Center guide](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/accredited-representation-management/product-documentation/representative-status/contact-center) (experience screenshots, including user states and error messages)
    2. [Technical documentation](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/accredited-representation-management/product-documentation/representative-status/technical-documentation) (architecture and data flow diagrams, playbook / incident response plan)
2. Datadog dashboards
    1. [Authenticated Experience: Profile - Representative Status](https://vagov.ddog-gov.com/dashboard/86m-u8e-z5x/authenticated-experience-profile?fromUser=false&refresh_mode=paused&from_ts=1744839001906&to_ts=1744842601906&live=false&tile_focus=2305414365356432) 
    2. [ARM: Representative Status](https://vagov.ddog-gov.com/dashboard/ttj-p2z-9gh/arm-representative-status-widget?fromUser=false&refresh_mode=sliding&from_ts=1742250564464&to_ts=1744842564464&live=true)
3. Past research for the Representative Status widget
    1. [Navigate to where you expect to find your assigned representative on VA.gov.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representation-management/research/2023-11-ARM-findarep-nav-usertest/research-findings.md#task-5--navigate-to-where-you-expect-to-find-your-assigned-representative-on-vagov)
    2. [Show how you would sign-in to see your representative information.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representation-management/research/2024-01-ARM-appointarep-usertest/research-findings.md#task-2--show-how-you-would-sign-in-to-see-your-representative-information)
4. [Accredited Representation Management (ARM) team page](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/accredited-representation-management) (learn more about the contributing team)

</details>
