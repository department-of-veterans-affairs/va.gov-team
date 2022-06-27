**Last updated June 27, 2022**

If an LOA3 user attempts to update their compensation and pension direct deposit information, and they don't have a valid mailing address or home, work, or mobile number on file, they're blocked from making an update and prompted to review their contact information. This does not apply to education direct deposit information.

## UX
- If someone with an LOA3 account logs in to VA.gov and has the fiduciary/incompetent or deceased flag, they will see an alert in the direct deposit section of the profile that tells them they can not view their financial information. They will not be able to view any bank information.
- The fiduciary flag supersedes all other flags. So, if an [LOA3 DS Logon or MHV user signs in](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/use-cases/gate-mhv-dslogon.md) and has the fiduciary flag, they will also see the fiduciary alert, not the DS Logon/MHV gate.
- Uses the [warning alert component](https://design.va.gov/components/alert#warning-alert) from the VA design system
- Phone numbers should be linked and include aria attributes ([Storybook docs for phone numbers](https://design.va.gov/storybook/?path=/docs/components-va-telephone--three-digit-number#aria-described-by))
- [Desktop mock-up](https://www.sketch.com/s/1a920e73-1dcb-47c4-aae8-08656756c131/a/zxa2gRr)
- [Mobile mock-up](https://www.sketch.com/s/1a920e73-1dcb-47c4-aae8-08656756c131/a/R1zRPO2)


## How to reproduce

- We're not able to reproduce this on staging.
