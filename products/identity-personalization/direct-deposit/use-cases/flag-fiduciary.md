# Direct deposit: Blocking updates if someone has a fiduciary/incompetent/deceased flag

**Last updated June 19, 2022**

Currently, we do not allow people who have a fiduciary/are incompetent/are marked as deceased to access and update the direct deposit section of the VA.gov profile. We get these flags from the endpoint, and show an alert on the direct deposit page if someone has one of those flags.

For more on the original implementation of this blocking, please read the [documentation from 2.24.20 in the sensitive repo](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Postmortems/2020-02-21%20Direct%20Deposit%20Fiduciary%20Issue.md).

## UX
- If someone with an LOA3 account logs in to VA.gov and has the fiduciary/incompetent or deceased flag, they will see an alert in the direct deposit section of the profile that tells them they can not view their financial information. They will not be able to view any bank information.
- The fiduciary flag supersedes all other flags. So, if an [LOA3 DS Logon or MHV user signs in](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/use-cases/gate-mhv-dslogon.md) and has the fiduciary flag, they will also see the fiduciary alert, not the DS Logon/MHV gate.
- Uses the [warning alert component](https://design.va.gov/components/alert#warning-alert) from the VA design system
- Phone numbers should be linked and include aria attributes ([Storybook docs for phone numbers](https://design.va.gov/storybook/?path=/docs/components-va-telephone--three-digit-number#aria-described-by))
- [Desktop mock-up](https://www.sketch.com/s/1a920e73-1dcb-47c4-aae8-08656756c131/a/kaAZP0R)
- [Mobile mock-up](https://www.sketch.com/s/1a920e73-1dcb-47c4-aae8-08656756c131/a/R1zRPO2)


## Codes

PPIU API   control information | PPIU conversion from [BGS](https://depo-platform-documentation.scrollhelp.site/developer-docs/Benefits-Gateway-Service.1887272987.html) | [BGS](https://depo-platform-documentation.scrollhelp.site/developer-docs/Benefits-Gateway-Service.1887272987.html)   EBenefitsAddressUpdateWebService | [BGS](https://depo-platform-documentation.scrollhelp.site/developer-docs/Benefits-Gateway-Service.1887272987.html) definition
-- | -- | -- | --
isCompetentIndicator | True if incompetentInd is not ‘Y’ | incompetentInd | incompetentInd – whether the Veteran   is incompetent or not
noFiduciaryAssignedIndicator | True if fiduciaryInd is not ‘Y’ | fiduciaryInd | fiduciaryInd – whether the record has   a Fiduciary or not
notDeceasedIndicator | True if deathDtInd is not ‘Y’ | deathDtInd | deathDtInd – a DEATH_DT was found on   the PERSON record

## Staging users

- User 0.
- Incompetent, no fiduciary: User +61
- Incompetent + fiduciary: User +65
- Deceased: User +33
