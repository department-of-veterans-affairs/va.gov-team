# Direct deposit: Blocking access if someone logs in with My HealtheVet (MHV) or DS Logon

Last updated May 3, 2022

Currently, we do not allow people who have logged in with MHV and DS Logon to access and update the direct deposit section of the VA.gov profile. We get these flags from the endpoint, and show an alert in the profile if someone has one of those flags. 

See [Github issue #28794](https://github.com/department-of-veterans-affairs/va.gov-team/issues/28794) for background information on this use case.


## UX
- Uses the [sign in or tool prompt alert component](https://design.va.gov/components/alert#sign-in-or-tool-prompt) from the VA design system
- Review the [mock-up available in Sketch](https://www.sketch.com/s/1a920e73-1dcb-47c4-aae8-08656756c131/a/dlQWx99) for a visual.
- Phone numbers should be linked and include aria attributes ([Storybook docs for phone numbers](https://design.va.gov/storybook/?path=/docs/components-va-telephone--three-digit-number#aria-described-by))

## Codes
TBD

## Staging users
Log in with any MHV or DS Logon user to see this alert in action on staging.
