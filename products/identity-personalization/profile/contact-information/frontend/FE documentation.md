# Bad Address Indicator Front-End Documentation

[Product Outline](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/contact-information/bad-address-indicator)

An initial email blast will go out to Veterans with flagged addresses. Following this, an event-triggered email will go out to Veterans with any newly flagged emails. This email will be accompanied by alerts on the Personal information page and Contact information page. 

- [Personal information alert](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/frontend/FE%20documentation.md#personal-information-page-alert)
- [Contact information alert](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/frontend/FE%20documentation.md#contact-information-page-alert)
- [Confirmation modal](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/frontend/FE%20documentation.md#confirmation-modal)
- [Email content](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/frontend/FE%20documentation.md#email)

Sketch Mockups (low to mid fi): [Desktop](https://www.sketch.com/s/59857eb5-d9f9-4145-99d3-d9a1de2d0655/a/3OMD28m) and [Mobile](https://www.sketch.com/s/59857eb5-d9f9-4145-99d3-d9a1de2d0655/a/WK0EMb0)

## Personal information page Alert

- In-line warning alert above H1 heading. Check in with Josh on proper implementation.
- Appears immediately upon logging into Profile. 

- High-Fi Sketch Mockups: [Desktop](https://www.sketch.com/s/59857eb5-d9f9-4145-99d3-d9a1de2d0655/a/3OMD28m) and [Mobile](https://www.sketch.com/s/59857eb5-d9f9-4145-99d3-d9a1de2d0655/a/WK0EMb0)

### Heading (H2):
- Please update your mailing address

### Body: 
- We believe the mailing address we have on file for you may no longer be valid.

### Link:
- Review and edit your address

<img width="768" alt="Screen Shot 2022-05-06 at 10 42 02 AM" src="https://user-images.githubusercontent.com/79372956/167186188-f10295ae-77e1-4365-a09d-97ea9a2a3294.png">


## Contact information page alert

- In-line warning alert in mailing address field, above “Mailing.” 
- Appears immediately upon arriving on Contact info page.

- Sketch Mockups: [Desktop](https://www.sketch.com/s/59857eb5-d9f9-4145-99d3-d9a1de2d0655/a/v8nO2w3) and [Mobile](https://www.sketch.com/s/59857eb5-d9f9-4145-99d3-d9a1de2d0655/a/bgnMrQ5)

### Heading (H2):
Please update your mailing address
(Check in with Josh on this. Per his instructions - something might need to be done to the code here to make it ok that it is above H1)

### Body:
We believe the address we have on file for you may no longer be valid.
Review and edit your mailing address below.
If the address listed is correct, confirm it here.

### Button:
Confirm my address

<img width="764" alt="Screen Shot 2022-05-06 at 10 44 01 AM" src="https://user-images.githubusercontent.com/79372956/167186918-a042f141-7513-4eb8-b03e-65319f0f57bc.png">


## Email

This initial email template will be sent out through VA Notify to alert Veterans that their email address has been flagged as invalid and needs reviewing.

- **Initial email blast** - Initially, the email will be sent out at once to all Veterans with addresses that are currently flagged as invalid. 
- **Event triggered emails** - Following the initial email blast, the email will be sent out to Veterans with newly flagged addresses - on a daily or weekly basis. Sent out when new addresses are flagged as bad addresses - whenever a new bad address is added.
- **Copy:**

### Confirm your address on file with VA

Dear ((First Name)) ((Last Name)),

We recently sent you mail that the U.S. Postal Service couldn't deliver and returned to the VA. Please log in to VA.gov to update your address information, or confirm that your current address is correct.

#### What you need to do now

To change your address, sign in to your VA.gov profile at: http://va.gov/profile/contact-information. Then choose Edit to change your address.

If your address is correct, you can also confirm it from your profile.

#### How we use the address in your VA.gov profile

We use this address to send you information about these VA benefits and services:

- VA health care (including prescriptions, appointment reminders, lab and test results, and communications from your VA medical center)

- Disability compensation

- Pension benefits

- Claims and appeals

- Veteran Readiness and Employment (VR&E)

Do you need to change your address for other VA benefits and services too? Find out how to change your address for different benefits and services here: https://www.va.gov/resources/change-your-address-on-file-with-va/.

_Screenshot:_


