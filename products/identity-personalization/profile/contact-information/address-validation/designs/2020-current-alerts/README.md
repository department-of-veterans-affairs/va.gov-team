# Current Address Validation Alerts 

**Updated 06/07/2022**

The address validation alerts below are currently found on staging and production. New modal designs were created (see [Profile: address validation overrides](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/address-validation/designs/2021-alert-updates/README.md)), but they will not yet be implemented due to the overlapping Address change messaging modal feature, which could create a user flow in which many modals appear back-to-back. To avoid this until a long-term solution can be reached, we are currently using the older address validation alert designs below.

See [updated design documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/address-validation/designs/2021-alert-updates/README.md) for thorough implementation guidelines.

## Address override - with suggestion

Sketch files: Desktop & Mobile

<img width="661" alt="Screen Shot 2022-06-07 at 4 23 33 PM" src="https://user-images.githubusercontent.com/79372956/172499614-8463023d-775d-4412-a44a-d70251b84fbb.png">

## Address override - no suggestion

Sketch files: Desktop & Mobile

<img width="664" alt="Screen Shot 2022-06-07 at 4 23 19 PM" src="https://user-images.githubusercontent.com/79372956/172499652-a7a5a725-9717-4284-9749-ed0c683c45d6.png">


## Overlap with other Profile features

Sketch files: Desktop & Mobile

### Address validation and Bad address indicator (BAI)

Sketch files: Desktop & Mobile

Address validation overlaps with Bad address indicator if a user has updated their flagged Mailing address and address validation is triggered before the address is returned as successful. Address validation then becomes part of the BAI user flow, and the address validation alert is shown as BAI alerts are visually hidden, though BAI alerts are not actually removed until address validation is successfully complete.

See [BAI use cases](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-use-cases-profile-contact-bai.md) for more details.
