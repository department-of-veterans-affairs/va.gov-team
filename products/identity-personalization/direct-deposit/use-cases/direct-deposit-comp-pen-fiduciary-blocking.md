# Direct deposit for comp & pen: Blocking updates if someone has a fiduciary/incompetent/deceased flag

**Last updated May 3, 2022**

Currently, we do not allow people who have a fiduciary/are incompetent/are marked as deceased to access and update the direct deposit section of the VA.gov profile. We get these flags from the endpoint, and show an alert on the direct deposit page if someone has one of those flags.

For more on the original implementation of this blocking, please read the [documentation from 2.24.20 in the sensitive repo](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Postmortems/2020-02-21%20Direct%20Deposit%20Fiduciary%20Issue.md).

## Design
- Uses the [warning alert component](https://design.va.gov/components/alert#warning-alert) from the VA design system
- Review the [mock-up available in Sketch](https://www.sketch.com/s/1a920e73-1dcb-47c4-aae8-08656756c131/a/kaAZP0R) for a visual.
- Phone numbers should be linked and include aria attributes ([Storybook docs for phone numbers](https://design.va.gov/storybook/?path=/docs/components-va-telephone--three-digit-number#aria-described-by))

## Codes

PPIU API   control information | PPIU conversion from [BGS](https://depo-platform-documentation.scrollhelp.site/developer-docs/Benefits-Gateway-Service.1887272987.html) | [BGS](https://depo-platform-documentation.scrollhelp.site/developer-docs/Benefits-Gateway-Service.1887272987.html)   EBenefitsAddressUpdateWebService | [BGS](https://depo-platform-documentation.scrollhelp.site/developer-docs/Benefits-Gateway-Service.1887272987.html) definition
-- | -- | -- | --
isCompetentIndicator | True if incompetentInd is not ‘Y’ | incompetentInd | incompetentInd – whether the Veteran   is incompetent or not
noFiduciaryAssignedIndicator | True if fiduciaryInd is not ‘Y’ | fiduciaryInd | fiduciaryInd – whether the record has   a Fiduciary or not
notDeceasedIndicator | True if deathDtInd is not ‘Y’ | deathDtInd | deathDtInd – a DEATH_DT was found on   the PERSON record

## Staging users

- I saw this alert for user 0 con 5/2/22.

The following test users were used for the original implementation, but I can't promise they work anymore or still have these flags:

- Incompetent, no fiduciary: User +61
- Incompetent + fiduciary: User +65
- Deceased: User +33
