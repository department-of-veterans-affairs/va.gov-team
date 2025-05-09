# NEW Military Information Use Cases
**Last updated:** May 2025

For all of these use cases, the user must be LOA3 (identity verified). If the user is not LOA3, the user will be directed to the Profile Account Security section.

- [User flow](https://www.figma.com/design/zb5ecY9yMnupiLjaH9UmSc/Profile---Military-Information?node-id=609-2756&t=fxhpoB08Vs0FbcNc-1)
- [Figma files](https://www.figma.com/design/zb5ecY9yMnupiLjaH9UmSc/Profile---Military-Information?node-id=609-2756&t=iU7vARDUjgIJkIfo-1)

## Common use cases
### User logs in with LOA1 account
- [User logs in with an LOA1 account](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/loa1-user.md)

### User logs in with LOA3 account

<details><summary>User has a Department of Defense ID</summary>

- **Use case:** User can see data points for all periods of service the VA can gather from their military records.
- **Status code:** 200
- **Content:** The page includes the following information:
  - Period of service
    - Branch of service
    - Type of service
    - Start and end dates
    - Additional info component: What if I don't think my military service information is correct?
  - Link component: Learn how to request your military service records
  - Proof of Veteran status card: [product documentation](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/veteran-status)
- **Format:** See designs
- [Link to designs](https://www.figma.com/design/zb5ecY9yMnupiLjaH9UmSc/Profile---Military-Information?node-id=619-3324&t=iU7vARDUjgIJkIfo-1)

</details>


<details><summary>NEEDS: STATUS CODES, QA | NotInDEERSAlert, NoServiceHistoryAlert: User does not have a Department of Defense ID or service history</summary>

- **Use case:** DEERS does not return a DoD ID or service history.
- **Status code:** 403
- **Content:**

H2: We can’t match your information to any military service records

We’re sorry for this issue.

If you want to learn what military service records may be on file for you, call the Defense Manpower Data Center (DMDC) at 800-538-9552 (TTY: 711). The DMDC office is open Monday through Friday (except federal holidays), 8:00 a.m. to 8:00 p.m. ET.

If you think there might be a problem with your military service records, you can apply for a correction. 

[Learn how to correct your military service records on the National Archives website](https://www.archives.gov/veterans/military-service-records/correct-service-records.html)

- **Format:** [Warning alert component](https://design.va.gov/components/alert/#warning-alert)
- [Link to designs](https://www.figma.com/design/zb5ecY9yMnupiLjaH9UmSc/Profile---Military-Information?node-id=619-10743&t=iU7vARDUjgIJkIfo-1)
- [Link to code](https://github.com/department-of-veterans-affairs/vets-website/blob/29f17e7e54f4b13149934df66d49cc886dedf1fb/src/applications/personalization/profile/components/military-information/MilitaryInformation.jsx#L45)

</details>


<details><summary>NEEDS: STATUS CODES, QA | NotAVeteranAlert: User is not a Veteran</summary>

- **Use case:** User is confirmed as a non-Veteran.
- **Status code:** TBD
- **Content:**

H2: We don’t have military service records for you

If you think this is an error,  call us at 800-698-2411 (TTY: 711). We’re here Monday through Friday, 8:00 a.m. to 8:00 p.m. ET.

- **Format:** [Info alert component](https://design.va.gov/components/alert/#informational-alert-aka-default)
- [Link to designs](https://www.figma.com/design/zb5ecY9yMnupiLjaH9UmSc/Profile---Military-Information?node-id=619-10743&t=48R0Oy0eosW8QzYj-1)
- [Link to code](https://github.com/department-of-veterans-affairs/vets-website/blob/8bb9e606cbe6ac0d17598e748a550218b5bf3f2f/src/applications/personalization/profile/components/military-information/MilitaryInformation.jsx#L22)

</details>


## Edge cases
### Validation
No validation use cases. Read only feature.

### Errors

<details><summary>NEEDS: LINK TO CODE, STATUS CODES, QA | System down</summary>

- **Use case:** Cannot connect to the back end.
- **Status code:** TBD
- **Content:**

H2: This page isn't available right now

We’re sorry. Something went wrong on our end. Refresh this page or try again later.	

- **Format:** [Warning alert component](https://design.va.gov/components/alert/#warning-alert)
- [Link to designs](https://www.figma.com/design/zb5ecY9yMnupiLjaH9UmSc/Profile---Military-Information?node-id=619-3634&t=iU7vARDUjgIJkIfo-1)
- [Link to code]

</details>



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
