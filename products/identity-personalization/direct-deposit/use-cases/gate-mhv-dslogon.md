# Direct deposit: Blocking access if someone logs in with My HealtheVet (MHV) or DS Logon

**Last updated February 14, 2024**

Currently, we do not allow people who have logged in with LOA3 (identity verified) MHV or DS Logon accounts to access and update the direct deposit section of the VA.gov profile. We get these flags from the endpoint, and show an alert in the profile if someone has one of those flags. 

See [Github issue #28794](https://github.com/department-of-veterans-affairs/va.gov-team/issues/28794) for background information on this use case.


## UX
- If someone who is LOA3 and logs in with a DS Logon or MHV account goes to the direct deposit section of the profile, we will show them an alert that tells them to log in with ID.me or DS Logon to access their direct deposit information.
- Uses the [sign in or tool prompt alert component](https://design.va.gov/components/alert#sign-in-or-tool-prompt) from the VA design system
- Phone numbers should be linked and include aria attributes ([Storybook docs for phone numbers](https://design.va.gov/storybook/?path=/docs/components-va-telephone--three-digit-number#aria-described-by))
- [Alert mock-up](https://www.figma.com/file/CUR39JNnF2CS8SidGiWmYG/Profile---Direct-Deposit?type=design&node-id=0-534&mode=design&t=JeBw2hRh9J5QSuL7-11)

## Codes
TBD

## Steps to reproduce
1. Log in with any MHV or DS Logon user
2. Navigate to Profile > Direct deposit
