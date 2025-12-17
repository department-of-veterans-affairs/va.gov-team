# Profile hub use cases

Last updated: December 2025  
* [User flow](https://www.figma.com/design/21eaoKK107F3Nm1ofnMOO8/Profile---Hub-landing-page?node-id=526-8464&t=5gNJl8nwBlsZFsSR-1)  
* [Figma files](https://www.figma.com/design/21eaoKK107F3Nm1ofnMOO8/Profile---Hub-landing-page?node-id=526-8464&t=xMJXoKPJELHyWbSl-1)


# Jump to

[Overview](#overview)

[Use cases](#use-cases)

- [User with a military branch](#user-with-a-military-branch)

- [User without a military branch](#user-without-a-military-branch)

[Edge cases](#edge-cases)

- [Flags](#flags)

   - [Profile shared flags](#profile-shared-flags)

   - [Contact information use cases](#contact-information-use-cases)

- [Errors](#errors)

   - [Profile shared errors](#profile-shared-errors)

   - [Profile hub specific errors](#profile-hub-specific-errors)

      - [Error loading Veteran Status Card](#error-loading-veteran-status-card)


# Overview 

The profile hub is the landing page for profile. The page includes the Veteran Status Card and links to sections of the profile. For all of the use cases, the user must be LOA3 (identity verified). If the user is not LOA3 verified, they will be directed to the **Sign-in information** page to verify their account.


# Use cases 

## User with a military branch 

* **Description:** If an LOA3 user navigates to profile they see the landing page with the Veteran Status Card at the top. The Veteran Status Cards logo and branch update to reflect the users most recent military branch of service.  
* **Status code:** 200  
* **Format:** [Card component](https://design.va.gov/components/card)  
* [Link to designs](https://www.figma.com/design/21eaoKK107F3Nm1ofnMOO8/Profile---Hub-landing-page?node-id=445-20071&t=5gNJl8nwBlsZFsSR-1)

## User without a military branch 

* **Description:** If an LOA3 user navigates to profile they see the landing page with the Veteran Status Card at the top. The Veteran Status Card appears with the VA logo and no branch listed.  
* **Status code:** 200  
* **Format:** [Card component](https://design.va.gov/components/card)  
* [Link to designs](https://www.figma.com/design/21eaoKK107F3Nm1ofnMOO8/Profile---Hub-landing-page?node-id=941-13306&t=5gNJl8nwBlsZFsSR-1)


# Edge cases 

## Flags 

### Profile shared flags 

* [User with a blocked account attempts to access any section of profile](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/blocked-account.md)  
* [LOA1 user attempts to access any section of profile](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/loa1-user.md)

### Contact information use cases 

* [Address is marked as “bad” in VA Profile](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/use-cases/address-marked-as-bad.md)


## Errors 

### Profile shared errors 

* [Full page, backend system down](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/profile-shared-use-cases.md#full-page-backend-system-down)

### Profile hub specific errors 

#### Error loading Veteran Status Card 

* **Description:** If the Veteran Status Card is unable to load due to a system error the card disappears.  
* [Link to designs](https://www.figma.com/design/21eaoKK107F3Nm1ofnMOO8/Profile---Hub-landing-page?node-id=941-29490&t=5gNJl8nwBlsZFsSR-1)


---


<details><summary>Archive | Profile hub use cases, July 2025</summary>
 
# Profile hub use cases
**Last updated: July 2025**

- [User flow](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1753115099089/92e988a77435d7b4d90635dd97ed8ec54af5ee14?wid=50-1753115114097&outline=open)
- [Figma files](https://www.figma.com/design/21eaoKK107F3Nm1ofnMOO8/Profile---Hub-landing-page?node-id=0-1&t=7P9TvpnyVJLOryDX-1)
- Test Rail QA



## Current experience
- The profile hub is the landing page for profile and shows cards for every section of the profile.
- For all of these use cases, the user must be LOA3 (identity verified). If the user is not LOA3, the user will be directed to the Profile Account Security section.


 
## Common use cases
### User logs in with LOA3 account
- **Use case:** If a LOA3 user navigates to profile they see a landing page with cards directing them to sections of the profile.
- **Status code:** 200
- **Format:** [Card component](https://design.va.gov/components/card)
- [Link to designs](https://www.figma.com/design/21eaoKK107F3Nm1ofnMOO8/Profile---Hub-landing-page?node-id=445-18429&t=7P9TvpnyVJLOryDX-1)
- [Link to code]
- **Content:** See designs



## Edge cases
### Validation
This feature has no validation use cases.


### Flags 
- [Address is marked as “bad” in VA Profile](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/use-cases/address-marked-as-bad.md)
- [Blocked users documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/blocked-account.md)
- [User logs in with an LOA1 account](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/loa1-user.md)


### Errors
- [Backend system down](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/profile-shared-use-cases.md#system-errors)

</details>
