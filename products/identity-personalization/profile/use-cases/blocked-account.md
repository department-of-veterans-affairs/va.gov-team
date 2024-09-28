# Profile: User with a blocked account attempts to access any section of profile

**Last updated**: February 14, 2024

Currently, we block access to sections other than Account Security if a person has a flag on their account.  We get these flags from the endpoint. A flag could be present if a person:
- has a fiduciary
- has been deemed incompetent
- is marked as deceased

When an account is blocked, we show an alert on the account security page. The original implementation of this blocking started with direct deposit and was expanded to all of profile in November 2022. Please read the  [documentation from 2.24.20 in the sensitive repo](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Postmortems/2020/2020-02-21%20Direct%20Deposit%20Fiduciary%20Issue.md)  for more background information.

## UX
- When a user with a blocked account navigates to profile, they’ll only see the Account Security page; no other pages in profile are available from the profile navigation menu.
- If they click a URL that leads directly to any specific page under `/profile/` they're redirected to `/profile/account-security`.
- Uses the [warning alert component](https://design.va.gov/components/alert#warning-alert) from the VA design system
- Phone numbers should be linked and include aria attributes ([Storybook docs for phone numbers](https://design.va.gov/storybook/?path=/docs/components-va-telephone--three-digit-number#aria-described-by))
- [Desktop mock-up](https://www.figma.com/file/05k2PTmuDVgBj2HnzUZayg/Profile---Account-Security?type=design&node-id=0-372&mode=design&t=BTY4b2zX0VfLfY3Y-11)
- [Mobile mock-up](https://www.figma.com/file/05k2PTmuDVgBj2HnzUZayg/Profile---Account-Security?type=design&node-id=0-32&mode=design&t=BTY4b2zX0VfLfY3Y-11)

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
