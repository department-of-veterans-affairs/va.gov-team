# User with a blocked account attempts to access any section of profile

Last updated: November 2025  


# Jump to

[Overview](#overview)

[Experience](#experience)

[Codes](#codes)

[How to reproduce](#how-to-reproduce)


# Overview 

Currently, we block access to profile pages other than **Sign-in information** if a person has one of the below flags on their account. We get these flags from the BGS endpoint. A flag could be present if a person:

* has a fiduciary  
* has been deemed incompetent  
* is marked as deceased

When an account is blocked, we show an alert on the **Sign-in information** page. The original implementation of this blocking started with direct deposit and was expanded to all of profile in November 2022\. Please read the [documentation from 2.24.20 in the sensitive repo](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Postmortems/2020/2020-02-21%20Direct%20Deposit%20Fiduciary%20Issue.md) for more background information.


# Experience 

* When a user with a blocked account navigates to profile, they’ll only see the **Sign-in information** page; no other pages in profile are available from the profile navigation menu.  
* If they click a URL that leads directly to any specific page under **/profile/** they're redirected to **/profile/account-security/sign-in-information**.  
* Uses the [warning alert component](https://design.va.gov/components/alert#warning-alert) from the VA design system.  
* Phone numbers should be linked and include ARIA attributes ([Storybook docs for phone numbers](https://design.va.gov/storybook/?path=/docs/components-va-telephone--docs)).  
* [Link to design](https://www.figma.com/design/05k2PTmuDVgBj2HnzUZayg/Profile---Account-Security?node-id=613-25563&t=vEzOY6Vc44fxJdc2-1)


# Codes 

| PPIU API control information | PPIU conversion from [BGS](https://depo-platform-documentation.scrollhelp.site/developer-docs/benefits-gateway-service) | [BGS](https://depo-platform-documentation.scrollhelp.site/developer-docs/benefits-gateway-service) EBenefitsAddressUpdateWebService | [BGS](https://depo-platform-documentation.scrollhelp.site/developer-docs/benefits-gateway-service) definition |
| :---- | :---- | :---- | :---- |
| isCompetentIndicator | True if incompetentInd is not ‘Y’ | incompetentInd | incompetentInd – whether the Veteran is incompetent or not |
| noFiduciaryAssignedIndicator | True if fiduciaryInd is not ‘Y’ | fiduciaryInd | fiduciaryInd – whether the record has a Fiduciary or not |
| notDeceasedIndicator | True if deathDtInd is not ‘Y’ | deathDtInd | deathDtInd – a DEATH\_DT was found on the PERSON record |


# How to reproduce 

1. Log into staging with any of the following users:  
* User 0, 36, 233  
* Incompetent, no fiduciary: User+61  
* Incompetent \+ fiduciary: User+65  
* Deceased: User+33  
2. Navigate to profile or update the URL in your browser to point to **/profile/contact-information** or any other section of profile aside from /**profile/account-security/sign-in-information**.


---


<details><summary>Archive | Account security: User with a blocked account attempts to access any section of profile, September 2025</summary>

# Account security: User with a blocked account attempts to access any section of profile

**Last updated: September 2025**

Currently, we block access to sections other than Account security if a person has one of the below flags on their account.  We get these flags from the endpoint. A flag could be present if a person:
- has a fiduciary
- has been deemed incompetent
- is marked as deceased

When an account is blocked, we show an alert on the Account security page. The original implementation of this blocking started with direct deposit and was expanded to all of profile in November 2022. Please read the  [documentation from 2.24.20 in the sensitive repo](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Postmortems/2020/2020-02-21%20Direct%20Deposit%20Fiduciary%20Issue.md) for more background information.

## UX
- When a user with a blocked account navigates to profile, they’ll only see the Account security page; no other pages in profile are available from the profile navigation menu.
- If they click a URL that leads directly to any specific page under `/profile/` they're redirected to `/profile/account-security`.
- Uses the [warning alert component](https://design.va.gov/components/alert#warning-alert) from the VA design system.
- Phone numbers should be linked and include aria attributes ([Storybook docs for phone numbers](https://design.va.gov/storybook/?path=/docs/components-va-telephone--three-digit-number#aria-described-by)).
- [Design mock-up](https://www.figma.com/design/05k2PTmuDVgBj2HnzUZayg/Profile---Account-Security?node-id=613-25563&t=vEzOY6Vc44fxJdc2-1)

## Codes

PPIU API   control information | PPIU conversion from [BGS](https://depo-platform-documentation.scrollhelp.site/developer-docs/Benefits-Gateway-Service.1887272987.html) | [BGS](https://depo-platform-documentation.scrollhelp.site/developer-docs/Benefits-Gateway-Service.1887272987.html)   EBenefitsAddressUpdateWebService | [BGS](https://depo-platform-documentation.scrollhelp.site/developer-docs/Benefits-Gateway-Service.1887272987.html) definition
-- | -- | -- | --
isCompetentIndicator | True if incompetentInd is not ‘Y’ | incompetentInd | incompetentInd – whether the Veteran   is incompetent or not
noFiduciaryAssignedIndicator | True if fiduciaryInd is not ‘Y’ | fiduciaryInd | fiduciaryInd – whether the record has   a Fiduciary or not
notDeceasedIndicator | True if deathDtInd is not ‘Y’ | deathDtInd | deathDtInd – a DEATH_DT was found on   the PERSON record

## How to reproduce
1. Log into staging with any of the following users:
* User 0, 11, 36, 233
* Incompetent, no fiduciary: User+61
* Incompetent + fiduciary: User+65
* Deceased: User+33

2. Navigate to profile or update the URL in your browser to point to `/profile/direct-deposit` or any other section of profile aside from `/profile/account-security`

</details>
